const fs = require('fs');

const axios = require('axios');

async function contacts() {

    try {let res = await axios.get('https://jsonplaceholder.typicode.com/users');

    let people = await JSON.stringify(res.data, ['name', 'address', 'street', 'suite', 'city', 'zipcode', 'phone', 'email']);
    
    await fs.writeFile('addressList.json', people, (err) => {
            if (err) return console.log(err);
            console.log('addressList.json was created');

        });
    }
    catch(err) {
        console.log(err);
    }
}
    
const people = contacts();
