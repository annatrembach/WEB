class Form {
    constructor(){}
    createForm() {
        var html = 
        `<form>
            <label for="First Name">First Name</label><br>
            <input class="formfields" tabindex="1" type="text" id="First Name" placeholder="first name"><br>
            <br>
            <label for="Last Name">Last Name</label><br>
            <input  class="formfields" tabindex="2" type="text" id="Last Name" placeholder="last name"><br>
            <br>
            <label for="Group">Group</label><br>
            <input class="formfields" tabindex="3" type="text" id="Group" placeholder="group"><br>
        </form>`
        return html;
    }
}
var dataform = new Form();
placeforform.innerHTML = dataform.createForm();