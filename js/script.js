
var tabLinks = document.getElementsByClassName('tab-links')
var tabContants = document.getElementsByClassName('tab-contents')
var sideMenu = document.getElementById('sideMenu')
var btn = document.getElementById('btn')

function openTab(tabName) {
    for(tablink of tabLinks) {
        tablink.classList.remove('active-link')
    }
    for(tabcontent of tabContants) {
        tabcontent.classList.remove('active-tab')
    }

    event.currentTarget.classList.add('active-link')
    document.getElementById(tabName).classList.add("active-tab")

}

var cutting = document.querySelectorAll('.cutting')

for(var i = 0 ; i< cutting.length ; i++) {
    cutting[i].innerHTML = cutting[i].innerHTML.split(' ').slice(0,25).join(" ")
}


function closedMenu() {
    sideMenu.style.right = '-200px'
}

function openMenu() {
    sideMenu.style.right = '0px'
}

btn.addEventListener('click',function(e) {
    e.preventDefault();

    var email = document.getElementById('email');
    var name = document.getElementById('name');
    var message = document.getElementById('message');
    var body = "Name: " + name + "<br> Email: " + email + "<br> Message: " + message
 
    Email.send({
        SecureToken : "9866c338-15d2-449a-a113-bcf4f0a7b8cb",
        To : '01276558531ah@gmail.com',
        From : email.value,
        Subject : "Contact message",
        Body : body
    }).then(
      message => alert('message send success')
    );

    console.log(email.value)
} )
