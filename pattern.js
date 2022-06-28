// patten


let n = 6;
let string = "";

for (let t = 0; t <= n; t++) { // row

    for (let j = 0; j <= n; j++) { // column
        if (n - t >= j) {
            string += " ";
        } else {
            string += "*";
        }
    }

    string += "\n";
}

console.log(string);


