// GLOBAL VARIABLES
const mainArray = [0, 0, 0, 0];

let variantArray = [];

// ELEMENTS
const inputField1 = document.getElementById('inputDataForm-number1');
const inputField2 = document.getElementById('inputDataForm-number2');
const inputField3 = document.getElementById('inputDataForm-number3');
const inputField4 = document.getElementById('inputDataForm-number4');
const inputFieldsGroup = [inputField1, inputField2, inputField3, inputField4];

const buttonSendToArray = document.getElementById('inputDataForm-storeButton');
const buttonInvertOrder = document.getElementById('inputDataForm-invertButton');
const buttonOrderContent = document.getElementById('inputDataForm-orderButton');

const outputMain = document.getElementById('inputDataForm-memoryOutput');
const outputOperations = document.getElementById('inputDataForm-operationsOutput');

// LISTENERS

buttonSendToArray.addEventListener('click', sendToMemory);

buttonInvertOrder.addEventListener('click', invertMainArray);

buttonOrderContent.addEventListener('click', sortElements);

// FUNCTIONS
function sendToMemory() {

    //clear array and output
    while (mainArray.length > 0){
        mainArray.pop();
    }
    outputMain.innerHTML = "";
    
    //validate values and push then into array
    for (i = 0; i < 4; i++) {
        if(inputFieldsGroup[i].value < 0 || inputFieldsGroup[i].value > 999){
            inputFieldsGroup[i].vaule = 0;
            outputMain.innerHTML = "Escolha apenas valores entre 0 e 999"
            i = 4;
        }else{
            mainArray.push(inputFieldsGroup[i].value * 1);
            outputMain.innerHTML += inputFieldsGroup[i].value;
        }     
    }


}

function invertMainArray() {
    //clear array and output
    while (variantArray.length > 0){
        variantArray.pop();
    }
    outputOperations.innerHTML = "";

    sendToMemory();

    //invert and push array
    for(i = mainArray.length - 1; i >=0; i--){
        variantArray.push(mainArray[i]);
        outputOperations.innerHTML += inputFieldsGroup[i].value;
    }
}

function sortElements() {
    let orderedArray =[...mainArray];

    let temp = [...mainArray];
    orderedArray = sortArray(temp);

    console.log(orderedArray);
}

function sortArray(arrayToSort){
    let result = [...arrayToSort];
    let mainCounter = 0;
    let temp = [...arrayToSort];
    for(a = 0; a < temp.length; a++){
        let cacheArray = [...temp];
        for(b = 0; b < temp.length; b++){
            if(temp[b] < temp[b+1]){
                cacheArray[b] = temp[b+1];
                cacheArray[b+1] = temp[b];
                temp = [];
                temp = [...cacheArray];
            }
        }
    }
    for(i = temp.length - 1; i >= 0; i--){
        result[i] = temp[mainCounter];
        mainCounter++;
    }
    return(result);
}