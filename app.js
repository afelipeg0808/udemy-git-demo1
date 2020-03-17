//requireds
const fs = require('fs');



let base = 2;
let data = "";

for (let i = 1; i <= 10; i++) {
    data += `${ base } * ${ i } = ${ base * i }\n`;
}


fs.writeFile("tabla-2.txt", data, (err) => {

    if (err) throw err;
    console.log("El archivo tabla-2.txt ha sido creado");
});

// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// ...