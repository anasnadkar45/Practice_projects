const addbtn = document.querySelector(".add-btn");
const main = document.querySelector(".wrapper");
const bgColor = document.querySelector(".note-box ");
const notes = document.querySelectorAll(".note textarea");
addbtn.addEventListener("click" ,() =>{
    addNote();
    // generateColor();
})

// function generateColor() {
//     const getRandNo = Math.floor(Math.random() * 16777215);
//     const randCode = "#" + getRandNo.toString(16);
//     console.log(getRandNo,randCode);

//     bgColor.style.background = randCode;
//     colorName.innerText = randCode;
// }

function saveNotes() {
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) =>{
            data.push(note.value);
        }
    )

    if (data.length === 0) {
        localStorage.removeItem("notes");
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
}

function addNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="note-box">
        <div class="box">
            <textarea placeholder="Enter A Note">${text}</textarea>
        </div>
        <img src="./assets/dustbin.png" alt="" class="dlt-btn">
    </div>`
    

    const dltBtn = note.querySelector(".dlt-btn");
    dltBtn.addEventListener("click" ,() =>{
        note.remove();
        saveNotes();
    })

    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            saveNotes()
        }
    )
    main.appendChild(note);
    saveNotes();
}

(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if(lsNotes === null){
            addNote();
        }else{
            lsNotes.forEach(
                (lsNotes) => {
                    addNote(lsNotes);
                }
            )
        }
    }
)