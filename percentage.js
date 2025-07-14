let numburger = 4;
let burg = 57;
let numpizza = 3;
let piz = 70;
let numfrenchfries = 2;
let frenchfri = 60;
let numcake = 1;
let cak = 90;
let total = numburger * burg + numpizza * piz + numfrenchfries * frenchfri + numcake * cak;
if (total < 1000) {
    total = total * (10 / 100); 
} else {
    total = total * (15 / 100);
}

console.log(total);
