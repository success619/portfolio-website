import emailjs from "@emailjs/browser";


// gettind Element
const inputName = document.getElementById('name');
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("message");
const submitButton = document.getElementById("submitButton");
const submitButtonSpan = document.getElementById("submitButtonSpan");
const submitButtonSpan2 = document.getElementById("submitButtonSpan2");

const navBar = document.getElementById("navBar");
const menubar = document.getElementById("menubarOverallDiv");
const menubarSingle1 = document.getElementById("menubarSingle1");
const menubarSingle2 = document.getElementById("menubarSingle2");
const menubarSingle3 = document.getElementById("menubarSingle3");
const sidebar = document.getElementById("sidebar");

// const navListAbout = document.getElementById("navListAbout");
// const navListExperience = document.getElementById("navListExperience");
// const navListTech = document.getElementById("navListTech");
// const navListFeedback = document.getElementById("navListFeedback");
// const navListContact = document.getElementById("navListContact");

menubar.addEventListener("click", () => {
    sidebar.classList.toggle("active")
    menubar.classList.toggle("active")
    menubarSingle1.classList.toggle("active1")
    menubarSingle2.classList.toggle("active2")
    menubarSingle3.classList.toggle("active3")
})

navBar.style.display = "none"

// navListAbout.addEventListener("click", () => {
//     navListAbout.classList.toggle("active")
//     navListExperience.classList.toggle("dkkki")
//     navListTech.classList.toggle("dkkki")
//     navListFeedback.classList.toggle("dkkki")
//     navListContact.classList.toggle("dkkki")
// });
// navListExperience.addEventListener("click", () => {
//     navListAbout.classList.toggle("dkkki")
//     navListExperience.classList.toggle("active")
//     navListTech.classList.toggle("dkkki")
//     navListFeedback.classList.toggle("dkkki")
//     navListContact.classList.toggle("dkkki")
// });
// navListTech.addEventListener("click", () => {
//     navListAbout.classList.toggle("dkkki")
//     navListExperience.classList.toggle("dkkki")
//     navListTech.classList.toggle("active")
//     navListFeedback.classList.toggle("dkkki")
//     navListContact.classList.toggle("dkkki")
// })
// navListFeedback.addEventListener("click", () => {
//     navListAbout.classList.toggle("dkkki")
//     navListExperience.classList.toggle("dkkki")
//     navListTech.classList.toggle("dkkki")
//     navListFeedback.classList.toggle("active")
//     navListContact.classList.toggle("dkkki")
// })
// navListContact.addEventListener("click", () => {
//     navListAbout.classList.toggle("dkkki")
//     navListExperience.classList.toggle("dkkki")
//     navListTech.classList.toggle("dkkki")
//     navListFeedback.classList.toggle("dkkki")
//     navListContact.classList.toggle("active")
// })


// document.addEventListener("touchmove", () => {
//     navBar.style.display = "none"
// })

// document.addEventListener("touchstart", () => {
//     navBar.style.display = "flex"
// })

// document.addEventListener("scroll", () => {
//     navBar.style.display = "none"
// })

// document.addEventListener("scrollend", () => {
//     if (window.innerWidth > 400) {
//         navBar.style.display = "flex"
//     }
// })

// document.addEventListener("touchend", () => {
//     navBar.style.display = "flex"
// })

const handleNavScroll = () => {
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 500) {
            navBar.style.display = "flex"
        } else {
            navBar.style.display = "none"
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
}

handleNavScroll()

let form = {
    name: "",
    email: "",
    message: ""
}

submitButtonSpan2.style.display = "none"
submitButtonSpan.style.display = "block";
submitButton.style.justifyContent = "center"
submitButton.style.alignItems = "center"
submitButton.style.alignContent = "center"
submitButtonSpan2.style.marginLeft = "auto"

inputEmail.addEventListener("change", () => form.email = inputEmail.value);
inputName.addEventListener("change", () => form.name = inputName.value);
inputMessage.addEventListener("change", () => form.message = inputMessage.value)

const changeToSending = () => {
    submitButtonSpan.style.display = "none";
    submitButtonSpan2.style.display = "block";
}

const changeToSend = () => {
    submitButtonSpan.style.display = "block";
    submitButtonSpan2.style.display = "none"
}

submitButton.addEventListener("click", async () => {
    try {
        changeToSending()
        await emailjs
            .send(
                "service_ynbyyjs",
                "template_bg7bsox",
                {
                    from_name: form.name,
                    to_name: "Agu Ogan Success",
                    from_email: form.email,
                    to_email: "aguogansuccess@gmail.com",
                    message: form.message,
                },
                "yK4SoYYQBW1Ts51cf"
            )
            .then(
                () => {
                    changeToSend()
                    alert(`Thank you ${form.name}, I will get back to you as soon as possible`);
                    form = {
                        name: "",
                        email: "",
                        message: "",
                    };
                },
                (error) => {
                    console.error(error);
                    changeToSend()
                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    } catch (error) {
        console.log(error)
        changeToSend()
    }
})



