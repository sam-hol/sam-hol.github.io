var textContents;

function setTextFile() {
    var fileSelector = document.getElementById('txtPicker');
    fileSelector.addEventListener('change', (Event) => {
        var file = Event.target.file;
        var reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = readerEvent => {
            var content = readerEvent.target.result;
            alert(content);
        }
    })

}

function myFunc1() {
    var day = document.getElementById('days').value;

    document.getElementById('answerText').innerHTML = day;
    switch (day) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
        case 10:
            break;
        case 11:
            break;
        case 12:
            break;
        case 13:
            break;
        case 14:
            break;
        case 15:
            break;
        case 16:
            break;
        case 17:
            break;
        case 18:
            break;
        case 19:
            break;
        case 20:
            break;
        case 21:
            break;
        case 22:
            break;
        case 23:
            break;
        case 24:
            break;
        case 25:
            break;
    }
}

function readTxt() {
    if (textFile == null) alert('NO FILE CHOSEN.');
    else {
        document.getElementById('questionText').innerHTML = textFile;
    }

}