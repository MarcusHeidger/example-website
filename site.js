
const h1 = document.querySelector('h1')
h1.textContent = "Marcus's adequete webpage"

const copyright = document.querySelector('footer > p')
copyright.textContent = "bla"

const link = document.querySelector('.active')
link.style.color = "#ff0000"
link.style.textDecoration = "underline"

const contactLink = document.querySelector('#contact')
contactLink.style.fontFamily = "Impact"

const contactAlt = document.getElementById('contact')//interchangable with line 12

const links = document.querySelectorAll('nav a')
links.forEach(link => console.log(link))
