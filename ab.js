


// const mergepdffilter=function (req,file,cb){
//     var ext=path.extname(file.originalname);

//     if(ext!=='.pdf'){
//         return cb("This Extension not Supported")
//         console.log("Error")
//         // return False;
        
//     }

//     cb(null,true);

// };





app.post('/mergepdf', mergepdffilesupload.array('courseFiles', 100), (req, res) => {
    console.log(req.body)
    const files = []
    let outputFilePath = `${req.body.courseName}-${req.body.courseCode}-${req.body.courseSemester}-output.pdf`
    if (req.files) {
        req.files.forEach(file => {
            console.log(file.path)
            files.push(file.path)
        });

        const PDFMerger = require('pdf-merger-js');

        var merger = new PDFMerger();

        (async () => {
            files.forEach((file)=>merger.add(file))

            await merger.save(outputFilePath); //save under given name and reset the internal document
        })();

        res.download(outputFilePath)
    }

})




app.post('/mergepdf', mergepdffilesupload.array('courseFiles', 100), (req, res) => {
    console.log(req.body)
    const files = []
    let outputFilePath = `${__dirname}\\${req.body.courseName}-${req.body.courseCode}-${req.body.courseSemester}-output.pdf`
    if (req.files) {
        req.files.forEach(file => {
            console.log(file.path)
            files.push(file.path)
        });
    





        pdfMerge(files, outputFilePath, function(err){
        if (err) {
            res.send(err)
        } 
    
       res.download(outputFilePath, (err) => {
            if (err) {
                fs.unlinkSync(outputFilePath)
                res.send("Some error takes place in downloading the file")
            }
            fs.unlinkSync(outputFilePath)
        })
        })

    }

})