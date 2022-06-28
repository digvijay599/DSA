let number = 1;

function PowerGame(n) {
    if (n % 8 == 0) {
        return 'Second'
    } else {
        return 'First';
    }
}

const result = PowerGame(1);
console.log(result); 