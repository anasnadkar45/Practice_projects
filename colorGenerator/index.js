const bgColor = document.getElementById("main");
const colorName = document.getElementById("color-name");
const generateBtn = document.getElementById("btn");

// const btnColor = 
generateBtn.addEventListener("click",() =>{
    // generateBtn.preventDefault();
    generateColor();
    
})

function generateColor() {
    const getRandNo = Math.floor(Math.random() * 16777215);
    const randCode = "#" + getRandNo.toString(16);
    console.log(getRandNo,randCode);

    bgColor.style.background = randCode;
    colorName.innerText = randCode;
}

