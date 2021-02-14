//Business Logic

function rangeCreate(number) {
	let array = [];
    for (let index = 0; index <= number; index += 1) {
        array.push((" ") + index);
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