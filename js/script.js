let button = document.getElementById("button");

button.addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let code = document.getElementById("code").value;
    let td_1 = document.getElementById("td_1");
    let td_2 = document.getElementById("td_2");
    let td_3 = document.getElementById("td_3");
    let td_4 = document.getElementById("td_4");
    let error = document.getElementById("error");
    let table = document.querySelector(".table");
    let login = document.querySelector(".login");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    error.style.background = "#FF2C2C";

    if (name === "" || lastname === "" || email === "" || email !== pattern) {
        if (name === "") {
            error.innerHTML = "Enter your name";
        } else if (lastname === "") {
            error.innerHTML = "Enter your lastname";
        } else if (email === "") {
            error.innerHTML = "Enter the Email Address";
        } else if (!email.match(pattern)) {
            error.innerHTML = "You entered the email address incorrectly";
        } else if (code === "") {
            error.innerHTML = "Enter your Code";
        } else {
            error.innerHTML = "";
            error.style.background = "";
            login.style.display = "none";
            table.style.display = "block";
            td_1.innerHTML = name;
            td_2.innerHTML = lastname;
            td_3.innerHTML = email;
            td_4.innerHTML = code;
        }
    }

    let newButton = document.getElementById("new");

    newButton.addEventListener("click", function () {
        login.style.display = "block";
        table.style.display = "none";
    })

})

let upload = document.getElementById("upload");

if (upload) {
    upload.addEventListener('change', function () {
        ImageUpload(this);
    });
}

function ImageUpload(upload) {

    if (upload.files && upload.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('td_5').setAttribute('src', e.target.result); // SetAttribute () մեթոդը տարրի վրա ավելացնում է նշված հատկանիշը և տալիս դրան նշված արժեք
        };
        reader.readAsDataURL(upload.files[0]); // readAsDataURL օգտագործում են երբ գործողություն ավարտվումա ու պետքա URL- ը, որը ներկայացնում է ֆայլի տվյալները
    }
}