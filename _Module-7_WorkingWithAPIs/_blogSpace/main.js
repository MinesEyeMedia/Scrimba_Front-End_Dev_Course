const containerEl = document.querySelector(".container")

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postArray = data.slice(0, 5)
        let html = ""
        // console.log(postArray)
        for (let post of postArray) {
            html += `<h3 class="title">${post.title}</h3>
                                    <p class="body">${post.body}</p>`
        }
        containerEl.innerHTML = html
    })