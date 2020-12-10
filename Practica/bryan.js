
function multi(a = Number , b = Number) {
    let arreblo = [];

    for (let i = 1; i <= a; i++) {
       num = i * b;
       arreblo.push(num)
    }
    console.log(arreblo);
}
multi(6, 17);
