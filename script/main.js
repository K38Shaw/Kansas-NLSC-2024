function formSubmit(){
    alert("Thank you for getting in touch. We will contact you shortly.")
}
function contactUs(){
    alert("Thank you for getting in touch. We will get back with you shortly.")
}
function pledge(){
    alert("Thank you for your pledge. We will connect with you shortly!")
}

function validateEmail(email){
	var mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(email.value.match(mailformat)){
        alert(`Message Recieved. Thank you for your Correspondence`)
        return true;
    }
    else{
        alert("Form Incomplete");
        return false;
    }
	
}