const express = require('express')
const router = new express.Router
// module.exports=router
const upload = require('../middlewares/multerMiddleware')
// const db = require('../connections/connection')
const { addfile, getfile, addtag, gettag,delfile, addele , getele, sinele, elegroup, fullinfo,delele} = require('../controls/filecontrols')
// , addele, getele, delele, sinele, elegroup, fullinfo, addlay, getlay, dellay, addarea , getarea , sinare , eletag , tagsleft 
// const createdetails=(name,description,callback)=>{
//     const sql=
// }
router.post('/docdetail', upload.single('fileload'), addfile);

router.get('/docdetails', getfile);
// router.post('/eledetail',)
router.delete('/deldocdetail',delfile)


// router.get('/eledetails', (req, res));

router.post('/tagdetail', addtag);

router.get('/tagdetails', gettag);

router.post('/eledetail', addele)

router.get('/eledetails', getele)
router.delete('/deleteele', delele)
router.get('/singleele/:elementid', sinele)
router.get('/groupele/:tagid', elegroup)
router.get('/getfullinfo/:tagid', fullinfo)
// router.post('/layerdetail', addlay)
// router.get('/layerdetails', getlay)
// router.delete('/dellaydet', dellay)
// router.post('/areadetail', addarea);
// router.get('/areadetails', getarea)
// router.get('/sinarea/:Areaid',sinare)
// router.get('/eletag/:elementid',eletag)
// router.get('/tagsleft',tagsleft)

module.exports = router
