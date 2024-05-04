function sendMail() {
    var params = {
        name: document.getElementById("floatingName").value,
        email: document.getElementById("floatingEmail").value,
        phone: document.getElementById("floatingPhone").value,
        termPlan: document.getElementById("floatingCatrgory").value,
        message: document.getElementById("floatingTextarea").value
    };
    const serviceID = "service_wfl1yaq";
    const templateID = "template_dghqz1i";
    
    emailjs.send(serviceID, templateID, params)
    .then(res =>
        {
            document.getElementById("floatingName").value = "";
            document.getElementById("floatingEmail").value = "";
            document.getElementById("floatingTextarea").value = "";
            console.log(res);
            alert("Your Message Sent successfully");
        }
    )
    .catch(err=>console.log(err));
}
