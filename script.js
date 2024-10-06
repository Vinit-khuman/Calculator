let string = "";
const buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == "C") {
            string = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == "%") {
            if (string.includes('+') || string.includes('-') || string.includes('*') || string.includes('/')) {
                string = eval(string) / 100;
            } else {
                string = string / 100;
            }
            document.querySelector('input').value = string;
        } else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
