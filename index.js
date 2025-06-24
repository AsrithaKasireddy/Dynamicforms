let addQuestion = document.getElementsByClassName("add-question")[0];

//changing the question input color on click
function changeQuestionColor(event) {
    event.target.innerHTML = "";
}

//checking if the question reached maximum count
function checkWordsCount(event) {
    if (event.target.innerHTML.length >= 125) {
        alert("Maximum question character limit is reached!!!");
        event.target.removeAttribute("contenteditable");
    }
}

//showing the options on clicking option button
function showOptions(event) {
    let options = event.target.closest(".question-box").getElementsByClassName("options")[0];
    options.style.display = "block";
}

function Text(answerDisplay) {
    answerDisplay.innerHTML = "";
    let answerText = document.createElement("div");
    answerText.className = "option-type";
    answerText.innerHTML = "Answer Format : Text";
    answerDisplay.appendChild(answerText);
    let maxLength = document.createElement("div");
    maxLength.className = "max-length";
    maxLength.innerHTML = "Please enter the MAXIMUM LENGTH of the text that user can give, In the box below";
    let maxLengthInput = document.createElement("div");
    maxLengthInput.className = "maximum-length-input";
    maxLengthInput.setAttribute("contenteditable", true);
    answerDisplay.appendChild(maxLength);
    answerDisplay.appendChild(maxLengthInput);
}

function Date(answerDisplay) {
    let answerText = document.createElement("div");
    answerText.className = "option-type";
    answerText.innerHTML = "Answer Format : Date";
    answerDisplay.appendChild(answerText);
}

function Document(answerDisplay) {
    let answerText = document.createElement("div");
    answerText.className = "option-type";
    answerText.innerHTML = "Answer Format : Document";
    answerDisplay.appendChild(answerText);
}

function Number1(answerDisplay) {
    let answerText = document.createElement("div");
    answerText.className = "option-type";
    answerText.innerHTML = "Answer Format : Number";
    answerDisplay.appendChild(answerText);
    let maxLength = document.createElement("div");
    maxLength.className = "max-length";
    maxLength.innerHTML = "Please enter the MAXIMUM NUMBER that user can give, In the box below";
    let maxLengthInput = document.createElement("div");
    maxLengthInput.className = "maximum-length-input";
    maxLengthInput.setAttribute("contenteditable", true);
    let minLength = document.createElement("div");
    minLength.className = "min-length";
    minLength.innerHTML = "Please enter the MINIMUM NUMBER that user can give, In the box below";
    let minLengthInput = document.createElement("div");
    minLengthInput.className = "minimum-length-input";
    minLengthInput.setAttribute("contenteditable", true);
    answerDisplay.appendChild(minLength);
    answerDisplay.appendChild(minLengthInput);
    answerDisplay.appendChild(maxLength);
    answerDisplay.appendChild(maxLengthInput);
}
//showing text related to text on clicking text button 
function showAnswerText(event) {
    let answerDisplay = event.target.closest(".question-box").getElementsByClassName("answers-display")[0];
    Text(answerDisplay);
}


//showing text related to number on clicking number button 
function showAnswerNumber(event) {
    let answerDisplay = event.target.closest(".question-box").getElementsByClassName("answers-display")[0];
    answerDisplay.innerHTML = "";
    Number1(answerDisplay);
}

//showing text related to date on clicking date button 
function showAnswerDate(event) {
    let answerDisplay = event.target.closest(".question-box").getElementsByClassName("answers-display")[0];
    answerDisplay.innerHTML = "";
    Date(answerDisplay);
}

//showing text related to document upload on clicking document upload button 
function showDocumentUpload(event) {
    let answerDisplay = event.target.closest(".question-box").getElementsByClassName("answers-display")[0];
    answerDisplay.innerHTML = "";
    Document(answerDisplay);
}
//deleting an option in dropdown
function deleteOption(event) {
    let dropdownOption = event.target.closest(".dropdown-option");
    dropdownOption.remove();
}

//creating dropdown options
function createDropDownOptions(event) {
    let addOption = event.target;
    let answerDisplay = event.target.closest(".question-box").getElementsByClassName("answers-display")[0];
    var dropdownOption = document.createElement("div");
    dropdownOption.setAttribute("contenteditable", true);
    dropdownOption.className = "dropdown-option";
    let wrong = document.createElement("span");
    let wrongButton = document.createElement("img");
    wrongButton.setAttribute("src", "wrong.png")
    wrongButton.className = "delete-mark";
    wrong.appendChild(wrongButton);
    wrongButton.addEventListener("click", deleteOption);
    dropdownOption.append(wrong);
    answerDisplay.appendChild(dropdownOption);
    answerDisplay.appendChild(addOption);
}

function options(answerDisplay) {
    let dropDownOptions = document.createElement("div");
    dropDownOptions.className = "drop-down-options";
    dropDownOptions.innerHTML = "Click on the button below to add options ";
    answerDisplay.appendChild(dropDownOptions);
    let addOption = document.createElement("span");
    addOption.className = "add-option";
    addOption.innerHTML = "Add Option +";
    answerDisplay.appendChild(addOption);

    addOption.addEventListener("click", createDropDownOptions);
}
//showing text related to dropdown on clicking dropdown button 
function showDropdown(event) {
    let answerDisplay = event.target.closest(".question-box").getElementsByClassName("answers-display")[0];
    answerDisplay.innerHTML = "";
    let answerText = document.createElement("div");
    answerText.className = "option-type";
    answerText.innerHTML = "Answer Format : Single Select Dropdown";
    answerDisplay.appendChild(answerText);
    options(answerDisplay);
}


//showing text related to multi select dropdown on clicking multi select dropdown button 
function showMultiDropdown(event) {
    let answerDisplay = event.target.closest(".question-box").getElementsByClassName("answers-display")[0];
    answerDisplay.innerHTML = "";
    let answerText = document.createElement("div");
    answerText.className = "option-type";
    answerText.innerHTML = "Answer Format : Multi Select Dropdown";
    answerDisplay.appendChild(answerText);
    options(answerDisplay);

    addOption.addEventListener("click", createDropDownOptions);
}


// checking which option is clicked
function closeOptions(event) {
    let options = event.target.closest(".question-box").getElementsByClassName("options")[0];
    options.style.display = "none";
    let text = event.target.closest(".question-box").getElementsByClassName("text")[0];
    if (event.target === text) {
        showAnswerText(event);
    }
    let number = event.target.closest(".question-box").getElementsByClassName("number")[0];
    if (event.target === number) {
        showAnswerNumber(event);
    }
    let date = event.target.closest(".question-box").getElementsByClassName("date")[0];
    if (event.target === date) {
        showAnswerDate(event);
    }
    let documentUpload = event.target.closest(".question-box").getElementsByClassName("document-upload")[0];
    if (event.target === documentUpload) {
        showDocumentUpload(event);
    }
    let singleSelectDrop = event.target.closest(".question-box").getElementsByClassName("single-select-dropdown")[0];
    if (event.target === singleSelectDrop) {
        dropdownOptionCount = 0;
        showDropdown(event);
    }
    let multiSelectDrop = event.target.closest(".question-box").getElementsByClassName("multi-select-dropdown")[0];
    if (event.target === multiSelectDrop) {
        dropdownOptionCount = 0;
        showMultiDropdown(event);
    }

}

// clearing the text in question
function clearQuestionItem(event) {
    let questionBox = event.target.closest(".question-box");
    let question = questionBox.getElementsByClassName("question")[0];
    if (question.innerHTML !== "Enter the question here....") {
        question.innerHTML = "";
    }
    question.setAttribute("contenteditable", true);
    let answerDisplay = questionBox.getElementsByClassName("answers-display")[0];
    answerDisplay.innerHTML = "";
    let options = questionBox.getElementsByClassName("options")[0];
    options.style.display = "none";
}

// deleting the question
function deleteQuestionItem(event) {
    let questionBox = event.target.closest(".question-box");
    questionBox.remove();
}

//preview
function checkFormPreview() {
    let questions = {};
    let questionsList = document.getElementsByClassName("questions-list")[0];
    let previewPage = document.getElementsByClassName("preview-list")[0];
    previewPage.innerHTML = "";
    let questionBoxes = questionsList.getElementsByClassName("question-box");
    for (let i = 0; i < questionBoxes.length; i++) {

        let questionItem = {
            question: "",
            option: "",
        }
        let previewQuestionBox = document.createElement("div");
        previewQuestionBox.className = "preview-question-box";

        let previewQuestion = document.createElement("div");
        previewQuestion.className = "preview-question";

        let previewAnswerBox = document.createElement("div");
        previewAnswerBox.className = "preview-answer-box";

        let question = questionBoxes[i].getElementsByClassName("question")[0];
        let answerBox = questionBoxes[i].getElementsByClassName("answers-display")[0];
        if (question.innerHTML === "" || question.innerHTML === "Enter the question here....") {
            alert("You have missed writing a question");
            previewPage.innerHTML = "";
            break;
        }
        previewQuestion.innerHTML = question.innerHTML;
        previewQuestionBox.appendChild(previewQuestion);
        if (answerBox.innerHTML === "") {
            previewPage.innerHTML = "";
            alert("You didn't select any option");
            break;
        }
        let optionType = answerBox.getElementsByClassName("option-type")[0];
        if (optionType.innerHTML === "Answer Format : Text") {
            let maxLengthInput = answerBox.getElementsByClassName("maximum-length-input")[0];
            if (maxLengthInput.innerHTML === "") {
                previewPage.innerHTML = "";
                alert("Enter maximum text length");
                break;
            }
            if (isNaN(Number(maxLengthInput.innerHTML))) {
                alert("Number in max length is invalid!!!!");
                previewPage.innerHTML = "";
                break;
            }
            let maxLength = document.createElement("div");
            maxLength.className = "text-max-length";
            maxLength.innerHTML = "Maximum characters : " + maxLengthInput.innerHTML;
            previewQuestionBox.appendChild(maxLength);
            let answerText = document.createElement("textarea");
            answerText.className = "preview-textarea";
            answerText.setAttribute("placeholder", "Enter your answer")
            previewQuestionBox.appendChild(answerText);
            questionItem.question = question.innerHTML;
            questionItem.option = "Text";
            questionItem.length = Number(maxLengthInput.innerHTML);
        }
        if (optionType.innerHTML === "Answer Format : Number") {

            let maxLengthInput = answerBox.getElementsByClassName("maximum-length-input")[0];
            if (maxLengthInput.innerHTML === "") {
                alert("Enter maximum number");
                previewPage.innerHTML = "";
                break;
            }
            if (isNaN(Number(maxLengthInput.innerHTML))) {
                alert("Number in max number is invalid!!!!");
                previewPage.innerHTML = "";
                break;
            }
            let minLengthInput = answerBox.getElementsByClassName("minimum-length-input")[0];
            if (minLengthInput.innerHTML === "") {
                previewPage.innerHTML = "";
                alert("Enter minimum number");
                break;
            }
            if (isNaN(Number(minLengthInput.innerHTML))) {
                alert("Number in min number is invalid!!!!");
                previewPage.innerHTML = "";
                break;
            }
            if (Number(maxLengthInput.innerHTML) < Number(minLengthInput.innerHTML)) {
                alert("Minimum Number should be less than Maximum Number");
                previewPage.innerHTML = "";
                break;
            }

            let minLength = document.createElement("div");
            minLength.className = "number-min-length";
            minLength.innerHTML = "Minimum Number: " + minLengthInput.innerHTML;
            previewQuestionBox.appendChild(minLength);
            let maxLength = document.createElement("div");
            maxLength.className = "number-max-length";
            maxLength.innerHTML = "Maximum Number: " + maxLengthInput.innerHTML;
            previewQuestionBox.appendChild(maxLength);

            let previewInputNumber = document.createElement("textarea");
            previewInputNumber.className = "preview-input-number";
            previewInputNumber.setAttribute("placeholder", "Enter Number")
            previewQuestionBox.appendChild(previewInputNumber);

            questionItem.question = question.innerHTML;
            questionItem.option = "Number";
            questionItem.maxNumber = Number(maxLengthInput.innerHTML);
            questionItem.minNumber = Number(minLengthInput.innerHTML);
        }
        if (optionType.innerHTML === "Answer Format : Date") {

            let inputDate = document.createElement("input");
            inputDate.setAttribute("type", "Date");
            inputDate.style.marginTop = "1%";
            previewQuestionBox.appendChild(inputDate);
            questionItem.question = question.innerHTML;
            questionItem.option = "Date";
        }
        if (optionType.innerHTML === "Answer Format : Document") {
            let inputDocument = document.createElement("input");
            inputDocument.setAttribute("type", "file");
            inputDocument.style.marginTop = "1%";
            previewQuestionBox.appendChild(inputDocument);
            questionItem.question = question.innerHTML;
            questionItem.option = "Document";
        }
        if (optionType.innerHTML === "Answer Format : Single Select Dropdown") {
            let singleSelect = document.createElement("select");
            singleSelect.className = "single-select";
            singleSelect.style.marginTop = "1%";
            let dropdownOptions = answerBox.getElementsByClassName("dropdown-option");
            if (dropdownOptions.length === 0) {
                alert("Give atleast one option");
                previewPage.innerHTML = "";
                break;
            }
            let optionsStorage = {

            };
            for (let i = 0; i < dropdownOptions.length; i++) {
                let dropdownOption = dropdownOptions[i].getElementsByTagName("span")[0].innerHTML;
                if (dropdownOption[0] === "<") {
                    alert("Enter text in dropdown option");
                    previewPage.innerHTML = "";
                    break;
                }
                let optionEnd = dropdownOption.indexOf("<");
                let optionName = dropdownOption.slice(0, optionEnd);
                let option = document.createElement("option");
                option.innerHTML = optionName;
                singleSelect.appendChild(option);

                let optionNumber = "option" + i
                optionsStorage[optionNumber] = optionName;
            }
            previewQuestionBox.appendChild(singleSelect);

            questionItem.question = question.innerHTML;
            questionItem.option = "Single Select Dropdown";
            questionItem.options = optionsStorage;
        }
        if (optionType.innerHTML === "Answer Format : Multi Select Dropdown") {
            let multiSelect = document.createElement("select");
            multiSelect.setAttribute("multiple", true);
            multiSelect.className = "multi-select";
            multiSelect.style.marginTop = "1%";
            let dropdownOptions = answerBox.getElementsByClassName("dropdown-option");
            if (dropdownOptions.length === 0) {
                alert("Give atleast one option");
                previewPage.innerHTML = "";
                break;
            }
            let optionsStorage = {

            };
            for (let i = 0; i < dropdownOptions.length; i++) {
                let dropdownOption = dropdownOptions[i].getElementsByTagName("span")[0].innerHTML;
                if (dropdownOption[0] === "<") {
                    alert("Enter text in dropdown option");
                    previewPage.innerHTML = "";
                    break;
                }
                let optionEnd = dropdownOption.indexOf("<");
                let optionName = dropdownOption.slice(0, optionEnd);
                let option = document.createElement("option");
                option.innerHTML = optionName;
                multiSelect.appendChild(option);

                let optionNumber = "option" + i
                optionsStorage[optionNumber] = optionName;
            }

            previewQuestionBox.appendChild(multiSelect);
            questionItem.question = question.innerHTML;
            questionItem.option = "Multi Select Dropdown";
            questionItem.options = optionsStorage;
        }
        previewPage.appendChild(previewQuestionBox);

        let questionNumber = "question" + i;
        questions[questionNumber] = questionItem;
    }

    if(previewPage.innerHTML !== "")
    {
        let submitButton = document.getElementsByClassName("submit-button")[0];
        submitButton.innerHTML = "SUBMIT";
        submitButton.style.display = "block";
        
    }
    sessionStorage.setItem("questions", JSON.stringify(questions));
}

// adding the question
function addingQuestion() {
    let questionsList = document.getElementsByClassName("questions-list")[0];
    let questionBox = document.createElement("div");
    questionBox.className = "question-box";
    questionsList.appendChild(questionBox);

    let question = document.createElement("div");
    question.className = "question";
    question.setAttribute("contenteditable", true);
    questionBox.appendChild(question);
    question.innerHTML = "Enter the question here....";
    question.addEventListener("click", changeQuestionColor, { once: true })
    question.addEventListener("input", checkWordsCount);


    let optionsBox = document.createElement("div");
    optionsBox.className = "options-box";
    optionsBox.innerHTML = "OPTIONS"
    questionBox.appendChild(optionsBox);


    let options = document.createElement("div");
    options.className = "options";
    let text = document.createElement("div");
    text.className = "text";
    text.innerHTML = "TEXT";
    let number = document.createElement("div");
    number.className = "number"
    number.innerHTML = "NUMBER";
    let date = document.createElement("div");
    date.className = "date";
    date.innerHTML = "DATE";
    let documentUpload = document.createElement("div");
    documentUpload.className = "document-upload"
    documentUpload.innerHTML = "DOCUMENT";
    let singleSelectDrop = document.createElement("div");
    singleSelectDrop.className = "single-select-dropdown"
    singleSelectDrop.innerHTML = "DROP DOWN";
    let multiSelectDrop = document.createElement("div");
    multiSelectDrop.className = "multi-select-dropdown"
    multiSelectDrop.innerHTML = "MULTI SELECT";
    options.appendChild(text);
    options.appendChild(number);
    options.appendChild(date);
    options.appendChild(documentUpload);
    options.appendChild(singleSelectDrop);
    options.appendChild(multiSelectDrop);
    questionBox.appendChild(options);
    optionsBox.addEventListener("click", showOptions);


    let answerDisplay = document.createElement("div");
    answerDisplay.className = "answers-display";
    questionBox.appendChild(answerDisplay);

    let clearQuestion = document.createElement("div");
    clearQuestion.className = "clear-question";
    clearQuestion.innerHTML = "CLEAR";
    questionBox.appendChild(clearQuestion);
    clearQuestion.addEventListener("click", clearQuestionItem);


    let deleteQuestion = document.createElement("div");
    deleteQuestion.className = "delete-question";
    deleteQuestion.innerHTML = "DELETE";
    questionBox.appendChild(deleteQuestion);
    deleteQuestion.addEventListener("click", deleteQuestionItem);


    options.addEventListener("click", closeOptions);
}


let questionManagement = document.getElementsByClassName("question-management")[0];
let checkPreview = document.createElement("span");
checkPreview.className = "check-preview";
checkPreview.innerHTML = "CHECK PREVIEW & SAVE";
questionManagement.appendChild(checkPreview);
checkPreview.addEventListener("click", checkFormPreview);

addQuestion.addEventListener("click", addingQuestion);

if (sessionStorage.getItem("questions")) {
    let questions = JSON.parse(sessionStorage.getItem("questions"));
    let count = 0;
    for (let questionNumber in questions) {
        addingQuestion();
        let questionBox = document.getElementsByClassName("question-box")[count];
        let question = questionBox.getElementsByClassName("question")[0];
        question.innerHTML = questions[questionNumber].question;

        let answerDisplay = questionBox.getElementsByClassName("answers-display")[0];
        if (questions[questionNumber].option === "Text") {
            Text(answerDisplay);
            let maxLengthInput = answerDisplay.getElementsByClassName("maximum-length-input")[0];
            maxLengthInput.innerHTML = questions[questionNumber].length;
        }
        if (questions[questionNumber].option === "Date") {
            Date(answerDisplay);
        }
        if (questions[questionNumber].option === "Document") {
            Document(answerDisplay);
        }
        if (questions[questionNumber].option === "Number") {
            Number1(answerDisplay);
            let maxLengthInput = answerDisplay.getElementsByClassName("maximum-length-input")[0];
            let minLengthInput = answerDisplay.getElementsByClassName("minimum-length-input")[0];
            maxLengthInput.innerHTML = questions[questionNumber].maxNumber;
            minLengthInput.innerHTML = questions[questionNumber].minNumber;
        }
        if (questions[questionNumber].option === "Single Select Dropdown") {
            let answerText = document.createElement("div");
            answerText.className = "option-type";
            answerText.innerHTML = "Answer Format : Single Select Dropdown";
            answerDisplay.appendChild(answerText);
            options(answerDisplay);
            for (option in questions[questionNumber].options) {
                var dropdownOption = document.createElement("div");
                dropdownOption.setAttribute("contenteditable", true);
                dropdownOption.className = "dropdown-option";
                let wrong = document.createElement("span");
                wrong.innerHTML = questions[questionNumber].options[option];
                let wrongButton = document.createElement("img");
                wrongButton.setAttribute("src", "wrong.png")
                wrongButton.className = "delete-mark";
                wrong.appendChild(wrongButton);
                wrongButton.addEventListener("click", deleteOption);
                dropdownOption.append(wrong);
                answerDisplay.appendChild(dropdownOption);
            }
            addOption = answerDisplay.getElementsByClassName("add-option")[0];
            answerDisplay.appendChild(addOption);
        }
        if (questions[questionNumber].option === "Multi Select Dropdown") {
            let answerText = document.createElement("div");
            answerText.className = "option-type";
            answerText.innerHTML = "Answer Format : Multi Select Dropdown";
            answerDisplay.appendChild(answerText);
            options(answerDisplay);
            for (option in questions[questionNumber].options) {
                var dropdownOption = document.createElement("div");
                dropdownOption.setAttribute("contenteditable", true);
                dropdownOption.className = "dropdown-option";
                let wrong = document.createElement("span");
                wrong.innerHTML = questions[questionNumber].options[option];
                let wrongButton = document.createElement("img");
                wrongButton.setAttribute("src", "wrong.png")
                wrongButton.className = "delete-mark";
                wrong.appendChild(wrongButton);
                wrongButton.addEventListener("click", deleteOption);
                dropdownOption.append(wrong);
                answerDisplay.appendChild(dropdownOption);
            }
            addOption = answerDisplay.getElementsByClassName("add-option")[0];
            answerDisplay.appendChild(addOption);
        }
        count++;
    }
}