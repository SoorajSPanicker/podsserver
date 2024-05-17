const sqlite3 = require('sqlite3').verbose()

// const fs = require('fs');

// const databasePath = './spiddiagram.db';

// // Check if the file exists
// if (fs.existsSync(databasePath)) {
//     // Delete the file
//     fs.unlinkSync(databasePath);
//     console.log('Database deleted successfully.');
// } else {
//     console.log('Database file does not exist.');
// }


const db = new sqlite3.Database('./spiddiagram.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message)
    } else {
        console.log("Connected to the database")
    }
})
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS docdetails (
    docid INTEGER PRIMARY KEY AUTOINCREMENT,
    docno TEXT NOT NULL UNIQUE,
    title TEXT,
    des TEXT,
    fileload TEXT NOT NULL,
    dtype TEXT NOT NULL
  );
`;

const createElementTable = `
  CREATE TABLE IF NOT EXISTS eledetails (
    elementid INTEGAR NOT NULL,
    tagid TEXT NOT NULL,
    filename TEXT NOT NULL
);
`;

const createTagTable = `
CREATE TABLE IF NOT EXISTS tagdetails(
    tagid INTEGER PRIMARY KEY AUTOINCREMENT,
    tagno TEXT NOT NULL UNIQUE,
    tname TEXT,
    ttype TEXT NOT NULL
);
`;


const createLayerTable = `
CREATE TABLE IF NOT EXISTS layerdetails(
    layerid INTEGER PRIMARY KEY AUTOINCREMENT,
    Areaid TEXT NOT NULL,
    x REAL NOT NULL ,
    y REAL NOT NULL,
    width INTEGER NOT NULL,
    height INTEGER NOT NULL,
    filename TEXT NOT NULL
);
`;


const createAreaTable = `
CREATE TABLE IF NOT EXISTS areadetails(
    Areaid TEXT PRIMARY KEY ,
    Areaname TEXT NOT NULL ,
   Areainfo1 TEXT NOT NULL,
   Areainfo2 TEXT NOT NULL,
   Areainfo3 TEXT NOT NULL,
   Areainfo4 TEXT NOT NULL,
   Areainfo5 TEXT NOT NULL
);
`;

const createFlagTable = `
CREATE TABLE IF NOT EXISTS flagdetails(
    Flagid TEXT PRIMARY KEY ,
    Flagname TEXT NOT NULL 
);
`;


// const createdocconnectTable = `
//   CREATE TABLE IF NOT EXISTS docodetails (
//     elementid INTEGAR NOT NULL,
//     flagname TEXT NOT NULL,
//     parentdoc TEXT,
//     connectdoc TEXT,
//     conflagid TEXT 
// );
// `;

const createdocconnectTable = `
  CREATE TABLE IF NOT EXISTS docodetails (
    elementid INTEGAR NOT NULL,
    flagSelectedValue TEXT NOT NULL,
    filename TEXT,
    flagcdocname TEXT,
    conflagid TEXT 
);
`;





// elementid,flagSelectedValue,filename,flagcdocname

db.run(createTableQuery, (err) => {
    if (err) {
        console.error('Error creating table:', err.message);
    } else {
        console.log('Table "docdetails" created or already exists.');
    }
});

db.run(createElementTable, (err) => {
    if (err) {
        console.error('Error creating table:', err.message);
    } else {
        console.log('Table "eledetails" created or already exists.');
    }
});

db.run(createTagTable, (err) => {
    if (err) {
        console.error('Error creating table:', err.message);
    } else {
        console.log('Table "tagdetails" created or already exists.');
    }
});

db.run(createLayerTable, (err) => {
    if (err) {
        console.error('Error creating table:', err.message);
    } else {
        console.log('Table "layerdetails" created or already exists.');
    }
});

db.run(createAreaTable, (err) => {
    if (err) {
        console.error('Error creating table:', err.message);
    } else {
        console.log('Table "areadetails" created or already exists.');
    }
});

db.run(createFlagTable, (err) => {
    if (err) {
        console.error('Error creating table:', err.message);
    } else {
        console.log('Table "flagdetails" created or already exists.');
    }
});

db.run( createdocconnectTable, (err) => {
    if (err) {
        console.error('Error creating table:', err.message);
    } else {
        console.log('Table "docodetails" created or already exists.');
    }
});



module.exports = db