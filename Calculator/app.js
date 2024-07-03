(function() {
    // Select the elementa
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-equal");

    // Loop through each button and add a click event listener
    for (let button of buttons) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    }

    clear.addEventListener('click', function() {
        screen.value = ''; 
    });

    equal.addEventListener('click', function() {
        if(screen.value === ''){
            screen.value = ''
        }
        else{
            let answer = eval(screen.value)
            screen.value = answer;
        }

    });

})();