// add subtract multipy variables //
const add = document.add
const subtract = document.subtract 
const multiply = document.multiply

// creating an eventlistener for the addition form
// giving the form the value tag so we capture what was inputed
// creating a var which creates an h1 tag for what was added in the input boxes and appends it to the dom

addition.addEventListener("submit",function(event){
    event.preventDefault();
    const add1 = Number(addition.add1.value);
    const add2 = Number(addition.add2.value); 
    addition.add1.value = ""
    addition.add2.value = ""

    console.log(add1 + add2)

    const newh1 = document.createElement("h1")
    newh1.textContent = (add1 + add2)
    document.getElementById("add").append(newh1)

}
)

// creating an eventlistener for the subtraction form
// giving the form the value tag so we capture what was inputed
// creating a var which creates an h1 tag for what was added in the input boxes and appends it to the dom

subtraction.addEventListener("submit",function(event){
    event.preventDefault();
    const sub1 = Number(subtraction.sub1.value);
    const sub2 = Number(subtraction.sub2.value);
    subtraction.sub1.value = ""
    subtraction.sub2.value = ""

    console.log(sub1 - sub2);

    const newh2 = document.createElement("h2");
    newh2.textContent = (sub1 - sub2);
    document.getElementById("subtract").append(newh2)


}
)

// creating an eventlistener for the multiplicaton form
// giving the form the value tag so we capture what was inputed
// creating a var which creates an h1 tag for what was added in the input boxes and appends it to the dom

multiplication.addEventListener("submit",function(event){
    event.preventDefault();
    const mult1 = Number(multiplication.mult1.value);
    const mult2 = Number(multiplication.mult2.value);

    console.log(mult1 * mult2)

    const newh3 = document.createElement("h3");
    newh3.textContent = (mult1 * mult2);
    document.getElementById("multiply").append(newh3);

}
)