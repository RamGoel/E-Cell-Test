function hideall(){
    document.getElementById('dashboard_section').classList.add("d-none");
    document.getElementById('file_section').classList.add("d-none");
    // document.getElementById('profile_section').classList.add("d-none");
    // document.getElementById('editprofile_section').classList.add("d-none");
    document.getElementById('home_section').classList.add("d-none");
}

function showdashboard_section(){
    hideall();
    // var a=document.getElementsByClassName('inputDiv')
    // for(let i=0;i<a.length;i++){
    //     a[i].id=`inputDiv${i}`
    // }
    document.getElementById('dashboard_section').classList.remove("d-none");
}

function showfile_section(){
    hideall();
    document.getElementById('fileViewIcon').classList.remove('fa-file');
    document.getElementById('fileViewIcon').classList.add('fa-spinner');
    document.getElementById('fileViewIcon').classList.add('fa-spin');
    showAllFiles();
   

}
function showhome_section(){
    hideall();
    document.getElementById('home_section').classList.remove("d-none");
}

//Function for File Inputs View

function openInputDrop(a){
    var html=document.getElementById(`inputDrop${a}`).innerHTML;
  
    
    document.getElementById('uploadSection').innerHTML=html;
    
}








