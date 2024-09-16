let btn = document.getElementById('btn')

function getData() {

    fetch(`https://akademia108.pl/api/ajax/get-post.php`, {
        method: 'GET',

    })
        .then(res => res.json())
        .then(data => {

            let pUserId = document.createElement('p')
            let pId = document.createElement('p')
            let pTitle = document.createElement('p')
            let pBody = document.createElement('p')

            pUserId.innerText = `User Id: ${data.userId}`
            pId.innerText = `Id: ${data.id}`
            pTitle.innerText = `Title: ${data.title}`
            pBody.innerText = `Body: ${data.body}`

            document.body.appendChild(pUserId)
            document.body.appendChild(pId)
            document.body.appendChild(pTitle)
            document.body.appendChild(pBody)

        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

addEventListener('click', getData)
