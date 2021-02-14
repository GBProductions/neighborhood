//Business Logic

function rangeCreate(number) {
	let array = [];
    for (let index = 0; index <= number; index += 1) {
        array.push(index);
    }
	return array;
}

// function beepBoop(array) {
// 	console.log(array.slice(1))
// }

// function beepBoop(array) {
// 	array.splice(2, 0, "Beep!")
//   console.log(array)
// }


// let array = [1,2,3];
// beepBoop(array);



//User Logic

$(document).ready(function() {
    $("form#neighborhood").submit(function(event) {
        event.preventDefault();
        let number = $("input#range").val();
        console.log(typeof number)
        // const fullArray = rangeCreate(number);
        // console.log(fullArray);

        // $("#print").text(fullArray);
    })
})