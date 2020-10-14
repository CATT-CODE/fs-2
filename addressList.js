const fs = require('fs');

async function makeList() {
    try {
            fs.readFile('addressList.json', 'utf8', (err, info) => {
            if (err) return console.log('There is no data in this file');
            let data = JSON.parse(info);
            let prettify = `
            *****************
            * Address List: *
            *****************` + data.forEach(item => 
            
            `
            ${item.name}
            Address: ${item.address.street}, ${item.address.suite}
                     ${item.address.city} ${item.address.zipcode}
            Phone:   ${item.phone}
            Email:   ${item.email}
            
            `);

            let final = JSON.stringify(prettify);
            
            
            fs.writeFileSync('./addressList.txt', final);
        });
    }
    
    catch(err) {
        console.log(err);
    }
}

makeList()