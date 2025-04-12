var realNameInput = document.getElementById('realName');
var duckNicknameInput = document.getElementById('duckNickname');
var finalNicknameField = document.getElementById('finalNickname');
var nicknameFeedbackField = document.getElementById('nicknameFeedback');
var confirmbtn = document.getElementById('confirmSelection');

confirmbtn.addEventListener('click', function () {
    var realName = realNameInput.value;
    var duckNickname = duckNicknameInput.value;
    finalNicknameField.value = realName + "_" + duckNickname;
    validateNickname(realName, duckNickname);

});

realNameInput.addEventListener('input', function () {
    var realName = realNameInput.value;
    var duckNickname = duckNicknameInput.value;
    finalNicknameField.value = realName + "_" + duckNickname;
    validateNickname(realName, duckNickname);

});

duckNicknameInput.addEventListener('input', function () {
    var realName = realNameInput.value;
    var duckNickname = duckNicknameInput.value;
    finalNicknameField.value = realName + "_" + duckNickname;
    validateNickname(realName, duckNickname);

});


function validateNickname(realName, duckNickname) {
    if (realName === "" || duckNickname === "") {
        nicknameFeedbackField.innerHTML = "Please fill in both your name and the duck nickname";
        nicknameFeedbackField.style.color = "red";
    } else if (duckNickname.length < 4 || duckNickname.indexOf(" ") !== -1 || duckNickname.toLowerCase() === realName.toLowerCase()) {
        nicknameFeedbackField.innerHTML = "Nickname must be 4+ characters, no spaces, and not the same as your real name";
        nicknameFeedbackField.style.color = "red";

    } else {
        nicknameFeedbackField.innerHTML = "\u2714 Valid nickname";
        nicknameFeedbackField.style.color = "green";
    }
}


var duck1 = document.getElementById('duck1');
var duck2 = document.getElementById('duck2');
var duck3 = document.getElementById('duck3');

duck1.addEventListener("click", function () {
    clearSelected()
    duck1.classList.add("selected");
});
duck2.addEventListener("click", function () {
    clearSelected()
    duck2.classList.add("selected");
});
duck3.addEventListener("click", function () {
    clearSelected()
    duck3.classList.add("selected");
});


function clearSelected() {
    duck1.classList.remove("selected");
    duck2.classList.remove("selected");
    duck3.classList.remove("selected");

}

function getSelectedDuckId() {
    if (duck1.classList.contains("selected")) {
        return duck1.id;
    } else if (duck2.classList.contains("selected")) {
        return duck2.id;
    } else if (duck3.classList.contains("selected")) {
        return duck3.id;
    } else {
        return null;
    }
}

var profileImg = document.getElementById('selectedDuck');


confirmbtn.addEventListener('click', function () {
    var selectedDuckId = getSelectedDuckId();

    var realName = realNameInput.value;
    var duckNickname = duckNicknameInput.value;
    finalNicknameField.value = realName + "_" + duckNickname;
    validateNickname(realName, duckNickname);

    var selectedDuckElement = document.getElementById(selectedDuckId);

    profileImg.src = selectedDuckElement.src;

});

