firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("index.html")
    }
    var UserEmail = user.email;
    var UserName = user.displayName;
    var UserRoll = user.photoURL;
    document.getElementById("User-Email1").value = UserEmail;
    document.getElementById("new-name").value = UserName;
    document.getElementById("new-phone").value = UserRoll;
})

// Logout Function with Prompt
function logoutwithprompt() {
    Swal.fire({
        icon: 'question',
        title: 'Are you sure you want to logout?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`
    }).then((result) => {
        if (result.isConfirmed) {
            firebase.auth().signOut()
        }
    })
}

// Change Password Function
function changePass() {
    var Alert = document.getElementById("profileCredentialAlert");
    const newPassword = document.getElementById("new-password").value;
    if (newPassword != "") {
        document.getElementById("changePassButton").disabled = true;
        document.getElementById("changePassButton").value = 'Loading..';
        const user = firebase.auth().currentUser;
        user.updatePassword(newPassword).then(() => {
            AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>Password Updated Successfully!</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
            Alert.innerHTML += AlertText;
            document.getElementById("changePassButton").value = 'Successful';
            setTimeout(logout, 5000)

        }).catch((error) => {
            AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>${error.message}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
            Alert.innerHTML += AlertText;
            document.getElementById("changePassButton").value = 'Try Again';
        });
    }
    else {
        AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>Enter a Valid Password</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
        Alert.innerHTML += AlertText;
    }
}

// Update Email Function
function updateemail() {
    var Alert = document.getElementById("profileCredentialAlert");
    const email = document.getElementById("newemail").value;
    if (email != "") {
        document.getElementById("updateemailButton").disabled = true;
        document.getElementById("updateemailButton").value = 'Loading..';
        const user = firebase.auth().currentUser;
        user.updateEmail(email).then(() => {
            AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>Email Updated Successfully!</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
            Alert.innerHTML += AlertText;
            window.setTimeout(function () { location.reload() }, 3000)
        }).catch((error) => {
            AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>${error.message}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
            Alert.innerHTML += AlertText;
        });
    }
    else {
        AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>Enter a Valid Email Address</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
        Alert.innerHTML += AlertText;
    }


}

// Update Name Function
function updatename() {
    var Alert = document.getElementById("profileUpdateAlert");
    const name = document.getElementById("new-name").value;
    if (name != "") {
        document.getElementById("updatenameButton").disabled = true;
        document.getElementById("updatenameButton").value = 'Loading..';
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(() => {
            AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>Name Updated Successfully</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
            Alert.innerHTML += AlertText;
        }).catch((error) => {
            AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>${error.message}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
            Alert.innerHTML += AlertText;
        });
    }
    else {
        AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>Enter a Valid Name</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
        Alert.innerHTML += AlertText;
    }
}

//Update Roll No Function
function updatephone() {
    var Alert = document.getElementById("profileUpdateAlert");
    const phone = document.getElementById("new-phone").value;
    if (phone != "") {
        document.getElementById("updatephoneButton").disabled = true;
        document.getElementById("updatephoneButton").value = 'Loading..';
        const user = firebase.auth().currentUser;
        user.updateProfile({
            photoURL: phone
        }).then(() => {
            AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>Roll No Updated Successfully</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
            Alert.innerHTML += AlertText;
        }).catch((error) => {
            AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>${error.message}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
            Alert.innerHTML += AlertText;
        });
    }
    else {
        AlertText = `
            <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                <strong>Enter a Valid Roll No</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
        Alert.innerHTML += AlertText;
    }

}

// Delete Profile Function
function deleteprofile() {
    var A = confirm("Are you sure you want to delete your profile?");
    if (A == true) {
        document.getElementById("deleteprofileButton").disabled = true;
        document.getElementById("deleteprofileButton").value = 'Loading..';
        const user = firebase.auth().currentUser;
        user.delete().then(() => {
            Toast.fire({ icon: 'success', title: 'Profile Deleted Successfully!' });
            document.getElementById("deleteprofileButton").value = 'Successful';
            alert("Profile Deleted Successfully")
        }).catch((error) => {
            Toast.fire({ icon: 'error', title: error.message });
            document.getElementById("deleteprofileButton").value = 'Try Again';
        });
    }

}

function commonFileUpload() {
    var Alert = document.getElementById("commonfilealert");
    var ref = document.getElementById('file-upload').value;
    var file = document.getElementById("common-file").files[0];
    if (ref !== "" && file !== undefined) {
        var storageRef = firebase.storage().ref(ref + '/' + file.name);
        var task = storageRef.put(file);
        task.on('state_changed',
            function progress(snapshot) {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                AlertText = `
                <div class="mb-3">
                    <progress value="${percentage}" max="100" style="width:100%;"></progress>
                </div>`;
                Alert.innerHTML = AlertText;
                console.log(percentage);
            }
        );
        task.then(function (snapshot) {
            console.log('File Upload Successfully');
            storageRef
                .getDownloadURL()
                .then(function (url) {
                    console.log(url);
                    AlertText = `
                <div class="alert alert-secondary  alert-dismissible fade show mb-1" role="alert">
                    <strong>File Uploaded Successfully</strong>
                    <a href="${url}" class="btn btn-primary btn-sm" target="_blank" style="float:right">View</a>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
                    Alert.innerHTML = AlertText;
                })
                .catch(function (error) {
                    AlertText = `
                <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                    <strong>${error.message}</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
                    Alert.innerHTML = AlertText;
                });
        }
        );
    }
    else {
        AlertText = `
                <div class="alert alert-secondary  alert-dismissible fade show text-center mb-1" role="alert">
                    <strong>Enter a Valid Reference or Choose a Valid File</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        Alert.innerHTML = AlertText;
    }
}