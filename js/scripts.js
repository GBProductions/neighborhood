//Business Logic

function rangeCreate(number) {
	let array = [];
    for (let index = 0; index <= number; index += 1) {
        array.push((" ") + index);
        if ([index].includes(2)) {
            array.splice([index]);
            array.push(" Boop!");
        }   else if ([index].includes(1)) {
            array.splice([index]);
            array.push(" Beep!");
        }
    }
	return array;
};


//User Logic

$(document).ready(function() {
    $("form#neighborhood").submit(function(event) {
        event.preventDefault();
        let number = $("input#range").val();
        let fullArray = rangeCreate(number);
        console.log(fullArray);

        $("#print").text(fullArray);
    })
})