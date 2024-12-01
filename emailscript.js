// emailjs.init("RomJR");
// document.getElementById("contactForm").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent default form submission behavior

//     // Get form values
//     const formData = new FormData(this);
//     const name = formData.get("name");
//     const email = formData.get("email");
//     const message = formData.get("message");

//     // Send email using EmailJS
//     emailjs
//         .send("RomJR", "romjr", {
//             name: name,
//             email: email,
//             message: message,
//         })
//         .then(
//             function (response) {
//                 document.getElementById("responseMessage").innerHTML = 
//                   `<p style="color: green;">Message sent successfully!</p>`;
//             },
//             function (error) {
//                 document.getElementById("responseMessage").innerHTML = 
//                   `<p style="color: red;">Failed to send message. Please try again later.</p>`;
//                 console.error("EmailJS error:", error);
//             }
//         );
// });


function sendMail () {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    emailjs.send("RomJR")
}