const sqlite = require('sqlite');

async function setUp(){
    console.log('hi')
    // open the database
    const db = await sqlite.open('./mydb.sqlite');
    await db.migrate({force: 'last'});
    console.log('db?')

    const people = await db.all('SELECT * FROM person');
    console.log('people, ', people)
}

setUp();