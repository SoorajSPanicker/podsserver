const db = require('../connections/connection')

const addfile = async (req, res) => {
    // console.log(req.file);
    const fileload = req.file.filename

    // console.log(fileload);

    const { docno,title,des,dtype} = req.body;
    const sql = `INSERT INTO docdetails (docno,title,des,fileload,dtype) VALUES (?,?,?,?,?)`;
    db.run(sql, [docno,title,des,fileload,dtype], function (err) {
        if (err) {
            return console.error(err.message);
        }

        res.json({ docid: this.lastID });
    });
}

const getfile = async (req, res) => {
    const sql = `SELECT * FROM docdetails`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            return console.error(err.message);
        }
        res.json(rows);
    });
}

const delfile = async (req, res) => {
    const sql = `DELETE FROM docdetails`;
    // db.run(sql, req.params.id, function(err) {
    //     if (err) {
    //         return console.error(err.message);
    //     }
    //     res.json({ message: "User deleted successfully.", changes: this.changes });
    // });
    db.all(sql, [], (err, rows) => {
        if (err) {
            return console.error(err.message);
        }
        res.json(rows);
    });
};




// const addele = async (req, res) => {
//     const { elementid, tagid, filename } = req.body;
//     const sql = `INSERT INTO eledetails (elementid,tagid,filename) VALUES (?,?)`;
//     db.run(sql, [elementid, tagid, filename], function (err) {
//         if (err) {
//             return console.error(err.message);
//         }
//         else {
//             db.get("SELECT * FROM fileDetails WHERE filesLoaded = ?", [filesLoaded], function (err, row) {
//                 if (err) {
//                     console.error(err.message);
//                     return res.status(500).json({ error: 'Internal Server Error' });
//                 }

//                 // If a record with the same filename already exists, return an error response
//                 if (row) {
//                     return res.status(400).json({ error: 'Filename already exists' });
//                 }
//             })
//             res.json({ elementid });
//         }
//     });
// }






const addtag = async (req, res) => {
    const { tagno,tname,ttype } = req.body;
    const sql = `INSERT INTO tagdetails (tagno,tname,ttype) VALUES (?,?,?)`;
    db.run(sql, [tagno,tname,ttype], function (err) {
        if (err) {
            return console.error(err.message);
        }
        res.json({ tagid: this.lastID });
    });
}

const gettag = async (req, res) => {
    const sql = `SELECT * FROM tagdetails`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            return console.error(err.message);
        }
        res.json(rows);
    });
}

const addele = async (req, res) => {
    const { elementid, tagid, filename } = req.body;
    const sql = `INSERT INTO eledetails (elementid,tagid,filename) VALUES (?,?,?)`;
    db.run(sql, [elementid, tagid, filename], function (err) {
        if (err) {
            return console.error(err.message);
        }

        res.json({ elementid: this.lastID });
    });
}

const getele = async (req, res) => {
    const sql = `SELECT * FROM eledetails`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            return console.error(err.message);
        }
        res.json(rows);
    });
}

const delele = async (req, res) => {
    const sql = `DELETE FROM eledetails`;
    // db.run(sql, req.params.id, function(err) {
    //     if (err) {
    //         return console.error(err.message);
    //     }
    //     res.json({ message: "User deleted successfully.", changes: this.changes });
    // });
    db.all(sql, [], (err, rows) => {
        if (err) {
            return console.error(err.message);
        }
        res.json(rows);
    });
};

// const sinele = async (req, res) => {
//     const sql = `SELECT * FROM eledetails WHERE elementid = ?`;
//     db.get(sql, [req.params.elementid], (err, row) => {
//         if (err) {
//             return console.error(err.message);
//         }
//         res.json(row.tagid);
//     });
// }

const sinele = async (req, res) => {
    const sql = `SELECT tagid FROM eledetails WHERE elementid = ?`; // Select only the tagid
    db.get(sql, [req.params.elementid], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message }); // Return error response
        }
        if (!row) {
            return res.status(404).json({ error: 'Element not found' }); // Return 404 if element not found
        }
        res.json(row.tagid); // Send tagid value in response
    });
};




const elegroup=async(req,res)=>{
    const sql = `SELECT * FROM eledetails WHERE tagid = ?`;
    db.get(sql, [req.params.tagid], (err, rows) => {
        if (err) {
            return console.error(err.message);
        }
        res.json(rows);
    });
}





// const elegroup = async (req, res) => {
//     const tagid = req.params.tagid;
//     const sql = "SELECT elementid FROM eledetails WHERE tagid = ?";

//     db.all(sql, [tagid], (err, rows) => {
//         if (err) {
//             res.status(400).json({ "error": err.message });
//             return;
//         }
//         res.json(rows)
//     });
// }

const fullinfo = async (req, res) => {
    const sql = `SELECT * FROM tagdetails WHERE tagno = ?`;
    db.get(sql, [req.params.tagid], (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        res.json(row);
    });
}

// const addlay = async (req, res) => {
//     const { Areaid, x, y, width, height } = req.body;
//     const sql = `INSERT INTO layerdetails (Areaid,x,y,width,height) VALUES (?,?,?,?,?)`;
//     db.run(sql, [Areaid, x, y, width, height], function (err) {
//         if (err) {
//             return console.error(err.message);
//         }
//         res.json({ layerid: this.lastID });
//     });
// }

// const getlay = async (req, res) => {
//     const sql = `SELECT * FROM layerdetails`;
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             return console.error(err.message);
//         }
//         res.json(rows);
//     });
// }

// const dellay = async (req, res) => {
//     const sql = `DELETE FROM layerdetails`;
//     // db.run(sql, req.params.id, function(err) {
//     //     if (err) {
//     //         return console.error(err.message);
//     //     }
//     //     res.json({ message: "User deleted successfully.", changes: this.changes });
//     // });
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             return console.error(err.message);
//         }
//         res.json(rows);
//     });
// };

// const addarea = async (req, res) => {
//     const { Areaid, Areaname, Areainfo1, Areainfo2, Areainfo3, Areainfo4, Areainfo5 } = req.body;
//     const sql = `INSERT INTO areadetails (Areaid,Areaname,Areainfo1,Areainfo2,Areainfo3,Areainfo4,Areainfo5 ) VALUES (?,?,?,?,?,?,?)`;
//     db.run(sql, [Areaid, Areaname, Areainfo1, Areainfo2, Areainfo3, Areainfo4, Areainfo5], function (err) {
//         if (err) {
//             return console.error(err.message);
//         }
//         res.json({ Areaid });
//     });
// }

// const getarea = async (req, res) => {
//     const sql = `SELECT * FROM areadetails`;
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             return console.error(err.message);
//         }
//         res.json(rows);
//     });
// }

// const sinare = async (req, res) => {
//     const sql = `SELECT * FROM areadetails WHERE Areaid = ?`;
//     db.get(sql, [req.params.Areaid], (err, row) => {
//         if (err) {
//             return console.error(err.message);
//         }
//         res.json(row);
//     });
// }

// const eletag = async (req, res) => {
//     const sql = `SELECT tagid FROM eledetails WHERE elementid= ?`;
//     db.get(sql, [req.params.elementid], (err, row) => {
//         if (err) {
//             return console.error(err.message);
//         }
//         res.json(row);
//     });
// }

// const tagsleft = async (req, res) => {
//     // Fetch tg11 and tg22 from another table
//     const sqlGetTags = `SELECT tagid FROM eledetails`;
    
//     db.all(sqlGetTags, [], (err, rows) => {
//         if (err) {
//             return console.error(err.message);
//         }
        
//         // Extract tag values from the result rows
//         const tags = rows.map(row => row.tagid);
        
//         // Construct the SQL query dynamically
//         const placeholders = tags.map(() => '?').join(', ');
//         const sql = `SELECT * FROM tagdetails WHERE tagid NOT IN (${placeholders})`;

//         // Execute the constructed query
//         db.all(sql, tags, (err, rows) => {
//             if (err) {
//                 return console.error(err.message);
//             }
//             res.json(rows);
//         });
//     });
// }





module.exports = { addfile, getfile, addtag, gettag,delfile , addele, getele , sinele, elegroup,fullinfo,delele }

// , addele, getele, delele, sinele, elegroup, fullinfo, addlay, getlay, dellay, addarea, getarea, sinare , eletag , tagsleft