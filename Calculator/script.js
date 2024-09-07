let displayBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll('button');
let buttonArray = Array.from(buttons);
let string = '';
buttonArray.forEach(btn => {
    btn.addEventListener('click', function (e) {
        if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            displayBox.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = '';
            displayBox.value = string;
        }else if(e.target.innerHTML == '='){
            string = eval(string);
            displayBox.value = string;
        } 
        else {
            string += e.target.innerHTML;
            displayBox.value = string;
        }

    })
})