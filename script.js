//your JS code here. If required.
function formsubmit(event){
	event.preventDefault();
	const fname=document.getElementById("firstname").value
	const lname=document.getElementById("lastname").value
	const upnumber=document.getElementById("PhoneNumber").value
	const uemail=document.getElementById("Email").value
	alert(` First Name: ${fname} Last Name: ${lname} Phone Number: ${upnumber} Email ID: ${uemail}`)
}
