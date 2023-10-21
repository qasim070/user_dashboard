function users() {

    var loader = document.getElementById('loader-cont');
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        let usersData = "";
        console.log(users)
        users.map((user_val) => {
            usersData += `<tr>
            <td>${user_val.id}</td>
            <td>${user_val.name}</td>
            <td>${user_val.phone}</td>
            <td>${user_val.email}</td>
            <td>${user_val.website}</td>
            <td> <button class="btn btn-primary"> <a href="./post.html?userid=${user_val.id}" class="text-white">See Posts</a> </button></td>
            </tr>`;
            loader.classList.add('disable-loader');
        });
        document.getElementById("user_table_body").innerHTML = usersData;
      })
      .catch((error) => {
        console.error(error);
        loader.classList.add('disable-loader');
      });
  }
  


function posts() {
    var loader = document.getElementById('loader-cont');
    window.addEventListener('load', function(){
        document.querySelector('#loader-cont').classList.add('disable-loader')
      });
    const urlParams = new URLSearchParams(window.location.search);
    const userid = urlParams.get("userid");
    console.log(userid);
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
      .then((response) => response.json())
      .then((post) => {
        let postData = "";
            console.log(post)
        post.map((posts_val) => {
            postData += `<tr>
            <td>${posts_val.id}</td>
            <td>${posts_val.title}</td>
            <td>${posts_val.body}</td>
            <td><button class="btn btn-primary">  <a href="./comments.html?userid=${posts_val.id}" class="text-white">Comments</a></button></td>
          </tr>`;
          loader.classList.add('disable-loader');

        });
        document.getElementById("post_table_body").innerHTML = postData;
      })
      .catch((error) => {
        console.error(error);
        loader.classList.add('disable-loader');
      });
  }
  

  
function comments() {
    var loader = document.getElementById('loader-cont');
    window.addEventListener('load', function(){
        document.querySelector('#loader-cont').classList.add('disable-loader')
      });
    const urlParams = new URLSearchParams(window.location.search);
    const userid = urlParams.get("userid");
    fetch(`https://jsonplaceholder.typicode.com/comments?userId=${userid}`)
      .then((response) => response.json())
      .then((post) => {
        let postData = "";
            console.log(post)
        post.map((cmnt_val) => {
            postData += `<tr>
            <td>${cmnt_val.id}</td>
            <td>${cmnt_val.name}</td>
            <td>${cmnt_val.email}</td>
            <td>${cmnt_val.body}</td>
            <td><button class="btn btn-primary">  <a href="./index.html" class="text-white">Back to Home</a></button></td>
          </tr>`;
          loader.classList.add('disable-loader');
          
        });
        document.getElementById("post_table_body").innerHTML = postData;
    })
    .catch((error) => {
        console.error(error);
        loader.classList.add('disable-loader');
      });
    
  }
  