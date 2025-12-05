const navBtn = document.querySelector(".buttnNav")
const navLink = document.querySelector(".closeNav")

navBtn.addEventListener("click", ()=>{
    navLink.classList.toggle("closeNav")
    navLink.classList.toggle("openNav")
})

const submitButton = document.getElementById("send-Btn")
const nameArea = document.getElementById("name-area")
const mailArea = document.getElementById("email-area")
const messageArea = document.getElementById("message-area")


submitButton.addEventListener('click', () => {
    if (nameArea === "") {
        alert("Please enter your name")
        return
    }
    if (mailArea === "") {
        alert("Please enter your email")
    }
    if (messageArea === "") {
        alert("Please enter your message")
    }
    alert(`Message sent successfully`)
        
        

})