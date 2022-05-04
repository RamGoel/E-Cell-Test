


function downloadFile(){
  location.replace('/download')
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


