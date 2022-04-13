


function fetchFile(fileUrl){
fetch(fileUrl,{
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }
})
.then(res => res.blob()) // Gets the response and returns it as a blob
.then(blob => {
  
  let objectURL = URL.createObjectURL(blob);
  const a=document.createElement('a')
  a.href=objectURL;
  a.style.display="none"
  document.body.appendChild(a)
  a.download="demo.pdf"
  a.click()

})}


function mergeAllPDFs(nameArr) {

  var urls = []
  if (nameArr.length >= 1) {
    console.log(nameArr)
    const storageRef = firebase.storage().ref()
    let i = 0;
    for (i = 0; i < nameArr.length; i++) {
      let userName = document.getElementById('user-name-card').innerText
      var fileRef = storageRef.child(`${userName}/${nameArr[i]}`);
      fileRef.getDownloadURL().then((url) => {

      urls.push(url)
      const a=document.createElement('a')
      a.href=url
      a.id="downloadLink"
      a.download="demo.pdf"
      a.target="_blank"
      document.body.appendChild(a)
      a.click()

      var xhr=new XMLHttpRequest()
      xhr.open('POST','/handle',true);
      xhr.setRequestHeader('Content-Type','application/text')
      xhr.send(["ashok"])

      }).catch((response) => {
        alert(response)
      })
    }

    
    
    
} else {
    alert("No File Selected")
  }


}


document.getElementById('mainForm').addEventListener('submit', (e) => {
  e.preventDefault()
  mergeAllPDFs(names);
})

const names = []

function uploadFile(event, elem) {
  var uploader = elem.parentElement.previousElementSibling;
  var elemeFather = elem.parentElement
  elem.parentElement.innerHTML = `<i class="my-0 fa fa-spinner fa-spin fa-2x "></i>`
  var file = event.target.files[0];
  if(file.name!=null || file.name!=""){
    var storageRef = firebase.storage().ref();
  let userName = document.getElementById('user-name-card').innerText
  var fileRef = storageRef.child(`${userName}/${file.name}`);
  fileRef.put(file).then((result) => {
    const url = `gs://${result.ref.location.bucket}/${result.ref.location.path}`
    console.log(url)
    percentage = (result.bytesTransferred / result.totalBytes) * 100;
    uploader.value = percentage;
    if (percentage == 100) {

      elemeFather.innerHTML = `<i class="fa fa-lg fa-check"></i><p class="my-0">Uploaded</p>`
      elemeFather.style.backgroundColor = "green"
    }

  })
  names.push(file.name);
  }
  



}

function showAllFiles() {
  const container = document.getElementById('allFilesContainer');
  console.log('executed')
  // Create a reference under which you want to list
  var storageRef = firebase.storage().ref();
  let userName = document.getElementById('user-name-card').innerText
  var listRef = storageRef.child(`${userName}/`);

  // Find all the prefixes and items.
  listRef.listAll()
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        folderRef.listAll()
      });
      if (res.items.length >= 1) {
        container.innerHTML = ""
        res.items.forEach((itemRef) => {
          // All the items under listRef.
          const fileName = itemRef.location.path_.split('/')[1];
          const authorName = itemRef.location.path_.split('/')[0]
          console.log(fileName)

          const newNode = ` <div class="fileDiv">
          <div class="fileText">
      
              <p class="fileTitle">${fileName}</p>
              <p class="filePara">${authorName}</p>
          </div>
      
          <div class="fileIcons">
              <div class="icon" onclick="deleteFile(this.parentElement.previousElementSibling.childNodes[1].innerText)">
                  <i class="fa fa-2x fa-trash "></i>
                  <p class="fileToolTip">Delete</p>
              </div>
              <div class="icon">
                  <i class="fa fa-2x fa-download "></i>
                  <p class="fileToolTip">Download</p>
              </div>
              <div class="icon">
                  <i class="fa fa-2x fa-share "></i>
                  <p class="fileToolTip">Share</p>
              </div>
      
      
      
          </div>
      
      </div>`



          container.innerHTML += newNode;

        });

      } else {
        container.innerHTML = "<p>No Files have been Created Yet</p>"
      }

      document.getElementById('file_section').classList.remove("d-none");
      document.getElementById('fileViewIcon').classList.remove('fa-spinner');
      document.getElementById('fileViewIcon').classList.remove('fa-spin');
      document.getElementById('fileViewIcon').classList.add('fa-file');


    }).catch((error) => {
      console.log("Uh-oh, an error occurred!", error)
    });
}


function deleteFile(text) {

  let userName = document.getElementById('user-name-card').innerText
  var storageRef = firebase.storage().ref();

  var deleteFileRef = storageRef.child(`${userName}/${text}`);

  const choice = window.confirm("Do you really want to delete this File?")
  document.getElementById('allFilesContainer').innerHTML = '<i class="fa fa-2x fa-spinner fa-spin"></i>'

  if (choice) {
    deleteFileRef.delete().then((res) => {
      console.log(res)
      showAllFiles()
    })
  } else {
    return
  }



}