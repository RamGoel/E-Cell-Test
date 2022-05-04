function hideall(){
    document.getElementById('dashboard_section').classList.add("d-none");
    document.getElementById('file_section').classList.add("d-none");
    document.getElementById('home_section').classList.add("d-none");
}

function showdashboard_section(){
    hideall();
    document.getElementById('dashboard_section').classList.remove("d-none");
}

$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;
  
      trigger.click(function () {
        hamburger_cross();      
      });
  
      function hamburger_cross() {
  
        if (isClosed == true) {          
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {   
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }
    
    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });  
  });

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










