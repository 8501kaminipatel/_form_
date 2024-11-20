const signup=document.getElementById('signup')


signup.addEventListener('submit',(ele)=>{
  ele.preventDefault();

    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let country=document.getElementById('country').value;
    let phone=document.getElementById('phone').value;
    let password=document.getElementById('password').value;
   

    let info = {
        name:name,
        email:email,
        country:country,
        phone:phone,
        password:password
    }
    console.log(info);
})



let signin = document.getElementById("signin");


signin.addEventListener('submit',(eleme)=>{
  eleme.preventDefault();
  let name1 = document.getElementById("signin-name").value;
  let email1 = document.getElementById("signin-email").value;
  let Password1 = document.getElementById("signin-password").value;
  let sign = 
  {
    name1:name1,
    email1:email1,
    password1:Password1,
  }
  console.log(sign);
})