const button=document.getElementById('btn')
button.addEventListener('click',(e)=>{
e.preventDefault()

const firstname = document.getElementById('fname').value
const lastname = document.getElementById('lname').value

document.getElementById('form').style.dipslay='none'
const value = "welcome" + " " + firstname + " " + lastname + " " + "to the class today"

document.getElementById('header').innerHTML=value


})