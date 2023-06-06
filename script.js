class Box {
    boxName;
    isOpen = false;
    isGift = false;
    isChosen = false;

    constructor(boxName) {
        this.boxName = boxName;
    }
    setGift() {
        this.isGift = true;
    }
    openBox() {
        this.isOpen = true;
    }
}

const boxArr = createBoxesArr();
// console.table(boxArr);

randomlyChoseBox(boxArr);
// console.table(boxArr);

openBoxWithoutGift(boxArr);
// console.table(boxArr);

changeMyChose(boxArr);
// console.table(boxArr);

isSuccess(boxArr);

function getRandomInteger(maxNumber) {
    //return random number from 0 to "maxNumber"
    return Math.floor(Math.random() * maxNumber);
}

function createBoxesArr(num = 3) {
    //limit of the boxes up to > 10
    let numberOfTheBoxes = (num > 10) ? 10 : num;

    const boxNames = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    const result = [];

    for (let i = 0; i < numberOfTheBoxes; i++) {
        result.push(new Box(boxNames[i]));
    }

    // set gift to random box based on box quantity
    const randomIndex = getRandomInteger(numberOfTheBoxes)
    result[randomIndex].setGift();

    console.log("Boxes was created!", "Gift in box number:", `"${result[randomIndex].boxName}"`);
    return result;
}

function randomlyChoseBox(arr) {
    const randomIndex = getRandomInteger(arr.length);
    arr[randomIndex].isChosen = true;

    console.log("Box number:", `"${arr[randomIndex].boxName}"`,  "was chosen!")
}

function openBoxWithoutGift(arr) {
    const randomIndex = getRandomInteger(arr.length);
    const boolean = (arr[randomIndex].isGift === false && arr[randomIndex].isChosen === false);

    (boolean) ? arr[randomIndex].openBox() : openBoxWithoutGift(arr);
    if (boolean) console.log("Box number", `"${arr[randomIndex].boxName}"`, "was opened!");
}

function changeMyChose(arr) {

    for (const box of arr) {
        if(box.isOpen) {
            continue
        }
        if(box.isChosen) {
            box.isChosen = false;
            continue
        }
        if (!(box.isChosen && box.isOpen)) {
            box.isChosen = true;
            console.log("New box was chosen:", `"${box.boxName}"`)
        }
    }
}

// TODO: make win!
function isSuccess(arr) {
    arr.forEach(item => {
        console.log(item)}
    )
    // console.log(arr)
}




