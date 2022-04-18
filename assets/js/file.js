const arr=['abesMissVision','deptMissVision','acadCalender','uniSyllabus','classTimeTable','facultyTimeTable','lecPlan','facultyNotes','classPPT','assignments','courseBook','uniPreQuestionPaper','uniPaperReview','sessQuestionPaper','pueQuestionPaper','ctQuestionPaper','sessAnswerKeys','pueAnswerKeys','ctAnswerKeys','ueAnswerKeys','tutorialSheets','awardSheet','assignMarks','testMarks','quizMarks','courseExit','overallCO','mappingCO','gapAnalysis','listStudents','weakStudents','','abesMissVision','deptMissVision']

window.onload=document.getElementById('courseFilesInput').value=null
let z=0
const label=document.getElementById('fileNameLabel')
label.innerHTML=`Upload ${arr[z]} File`
function fileUpload(elem){
    const container=document.getElementById('uploadedFileList')
    const node=container.firstElementChild

    const fileArr=document.getElementById('courseFilesInput').files
    var singleFile=fileArr[fileArr.length-1];
    var storageRef = firebase.storage().ref();
    let userName = document.getElementById('user-name-card').innerText
    var fileRef = storageRef.child(`${userName}/${singleFile.name}`);
    fileRef.put(singleFile).then((result) => {
    const url = `gs://${result.ref.location.bucket}/${result.ref.location.path}`
    console.log(url)
    });
    for(let i=0;i<fileArr.length;i++){
        const newNode=node.cloneNode(true)
        newNode.classList.add('text-danger')
        const upFile=fileArr[i].name
        newNode.innerHTML=`${upFile} Uploaded`
        if(i==0){
            container.innerHTML=""
            container.appendChild(newNode)
        }else{
            container.appendChild(newNode)
        }
        
    }
    z=z+fileArr.length
    label.innerHTML=`Upload ${arr[z]} File`
    
  
   
    


}





