import * as fs from 'fs';
// import axios from 'axios';

const path = './cheese.json';

const main = () => {
    let data = JSON.parse(fs.readFileSync(path, 'utf-8')); //dictionary
    let dataAr = data['cheese']; // array
    // Every object inside this for loop will be sent to the API
    for (let i = 0; i < dataAr.length; i++) {
        console.log(dataAr[i]);
    }
};

main();
