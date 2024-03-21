const logMovies = async () => {
    const response = await fetch("https://jsonplaceholder.org/users");
    const movies = await response.json();
    console.log(movies);

    let i = 0;
    for (i = 0; i < movies.length; i++){
      document.getElementById("demo1").innerHTML = movies.map(getfullName); 
      document.getElementById("demo2").innerHTML = movies.map(getlastName);
      document.getElementById("demo3").innerHTML = movies.map(getFullemail);
      document.getElementById("demo4").innerHTML = movies.map(getFulladdress);
      document.getElementById("demo5").innerHTML = movies.map(getfullbirthyear)
      document.getElementById("demo6").innerHTML = movies.map(getFullcompany);
       document.querySelector("table").style.display = "block";
    }
  };
  document.getElementById("clicky").addEventListener("click", () => {
    logMovies();
    
  }); 

  function getfullName(item){
      return [`<li>${item.firstname}</li>`];
  }
  function getlastName(item){
      return [`<li>${item.lastname}</li>`];
  }
  function getFullemail(item){
      return [`<li>${item.email}</li>`]
  }
  function getFulladdress(item){
      return [`<li>${item.address.street}</li>`]
  }
  function getfullbirthyear(item){
      return [`<li>${item.birthDate}</li>`]
  }
  function getFullcompany(item){
      return [`<li>${item.company.name}</li>`]
  }
  

