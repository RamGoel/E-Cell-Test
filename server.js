const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require('path')
const pdfMerge = require('easy-pdf-merge');
const PDFMerger = require('pdf-merger-js')
const multer = require('multer')
const app = express();
const PORT = process.env.PORT || 3000;



app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/public/'))



var dir = "public";
var subDirectory = "public/uploads";

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);

    fs.mkdirSync(subDirectory);
}


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (typeof cb === 'function') {
            cb(null, "public/uploads");
        }

    },
    filename: function (req, file, cb) {
        if (typeof cb === 'function') {
            cb(
                null,
                file.originalname + "-" + Date.now() + path.extname(file.originalname)
            );
        }

    },
});




var mergepdffilesupload = multer({
    storage: storage
})


app.post('/mergepdf', mergepdffilesupload.array('courseFiles', 100), (req, res) => {


    console.log(req.body)
    const files = []
    let outputFilePath = `${req.body.courseName}-${req.body.courseCode}-${req.body.courseSemester}-output.pdf`
    if (req.files) {
        req.files.forEach(file => {
            console.log(file.path)
            files.push(file.path)
        });


        var merger = new PDFMerger();

        (async () => {
            files.forEach((file) => merger.add(file))

            await merger.save(outputFilePath); //save under given name and reset the internal document
        })();

        res.download(outputFilePath, (err) => {
            if (err) {
                // fs.unlinkSync(outputFilePath)
                res.send("some error Occured")
            }
            console.log("Hello")
        })

        // fs.unlinkSync(outputFilePath)
        // files.forEach((file) => fs.unlinkSync(file))
    }

})

app.listen(PORT, () => {
    console.log('APP is Listening')
})