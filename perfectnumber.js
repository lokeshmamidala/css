let a = 6;
let count = 0;

for (let i = 1; i < a; i++) { 
    if (a % i === 0) { 
        count += i;
    }
}

if (count === a) { 
    console.log("Perfect number");
} else {
    console.log("Not a perfect number");
}
