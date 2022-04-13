function hideall() {
    document.getElementById('dashboard-section').classList.add("d-none");
    document.getElementById('profile-section').classList.add("d-none");
    document.getElementById('help-section').classList.add("d-none");
}
function showdashboard_section() {
    hideall();
    document.getElementById('dashboard-section').classList.remove("d-none");
}
function showprofile_section() {
    hideall();
    document.getElementById('profile-section').classList.remove("d-none");
}
function showhelp_section() {
    hideall();
    document.getElementById('help-section').classList.remove("d-none");
}

