document.getElementById('submitBtn').addEventListener('click', function(e) {
  e.preventDefault();
  
  var email = document.getElementById('email').value; 
  var password = document.getElementById('password').value; 
  let message = document.getElementById("messageError");
 
  if (email === "" || password === "") {
      message.innerHTML = "Email and password must be filled in.";
      message.style.color = "red"; // Couleur du message d'erreur
  }
  else{
    let T=[
      {email:"Chaimaehassari1@gmail.com" ,password:"chaimae123"},
      {email:"hassariaya2@gmail.com" ,password:"aya123"},
      {email:"hassarikhawla3@gmail.com" ,password:"hassari123"},
      {email:"hassari@gmail.com" ,password:"hassari"},
  
    ];
    let emailTrouve = false; 


    for (let i = 0; i < T.length; i++) {
      if(T[i].email===email){
        emailTrouve = true;

        if(T[i].password===password){ 
          window.location.href = "index2.html";

        }else{
          message.innerHTML = "Password is incorrect.";
          message.style.color = "red";
        }
      }if (!emailTrouve){
        message.innerHTML="email is incorrect.";
        message.style.color = "red";
        }
      
  }
}
});
