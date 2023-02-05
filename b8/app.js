fetch('http://jsonplaceholder.typicode.com/todos/1')
let demo_ = document.getElementById('id')
demo_text.innerHtml = 'Demo'
console.log(demo_text)


.then(Response =>
    {return Response.json()}) 
.then(data {
    console.log(data)
})
.catch(err => {
    console.log(err)
})

let num = [1,2,3,4]
let get_num = num.map( (value, index))  =>{
    return valua*2
}
for (post of data){
    console.log(post)
    postMessage.innerHTML +=`
    <div class="post">
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    </div>
    `
}