function addUser(){
            
    window.location.href = '/customers/add';
}
function cancelAdd(){
    
    window.location.href = '/customers';
}
function deletecust(id) {
	var res = confirm("Are you sure you want to delete this user");
	if(res == true) {
		window.location.href = '/customers/delete?id='+id;
	} else {
		return false;
	}
 	
}