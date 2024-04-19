const multer=require('multer')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {

        callback(null, `file-${Date.now()}-${file.originalname}`)
    }
})

const upload=multer({storage})
module.exports = upload