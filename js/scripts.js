//Business Logic


function rangeCreate(number) {
	let array = [];
    for (let index = 0; index <= number; index ++) {
        if ([index].toString().includes(3)) {
            array.push(" Won't you be my neighbor?");
        }   else if ([index].toString().includes(2)) {
            array.push(" Boop!");
        }   else if ([index].toString().includes(1)) {
            array.push(" Beep!");
        }   else {
            array.push((" ") + index);
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

        $("#print").text(fullArray);
    })
})