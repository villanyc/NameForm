//Working on making first characters capital letters

function getFormValue() {
    let first, second;
    first = document.getElementById("fName").value.toUpperCase();
    second = document.getElementById("lName").value.toUpperCase();

    document.getElementById("display").innerHTML = ('Hello ') + first + (' ') + second;  
}
