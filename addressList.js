const fs = require('fs');

async function makeList() {
    try {
        fs.readFile('addressList.json', 'utf8', (err, info) => {
            if (err) return console.log('There is no data in this file');
            const [{name}] = info
            let prettify = 
            `
            *****************
            * Address List: *
            *****************

            ${name}
            `
            fs.writeFileSync('./addressList.txt', prettify);
        });
    }
    
    catch(err) {
        console.log(err);
    }
}

makeList()