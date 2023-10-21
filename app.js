function users() {
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
        });
        document.getElementById("user_table_body").innerHTML = usersData;
      })
      .catch((Error) => console.error(Error));
  }
  


function posts() {
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
            <td><a href="./comments.html?userid=${posts_val.id}">Comments</a></td>
          </tr>`;
        });
        document.getElementById("post_table_body").innerHTML = postData;
      })
      .catch((Error) => console.error(Error));
  }
  
  window.onload = posts();