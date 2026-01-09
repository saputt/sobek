import { fetchSticky } from "./api/dataAPI.js"
import { StickyNote } from "./components/stickyNote.js"
import { detailNote } from "./components/detailNote.js"
import { shuffle } from "./utils/shuffle.js"
import { createNote } from "./components/createNote.js"
import { randomColor } from "./utils/randomColor.js"
import { playSound } from "./utils/playSound.js"


const detail = document.querySelector(".detail")
const navCreate = document.querySelector(".nav-create")
const mansoryCont = document.querySelector(".mansory-cont")
const form = document.querySelector('#form-note')

let earlyPost = []
let allPost = []

const renderSticky = (data) => {
    mansoryCont.innerHTML = data.map(note => {
        const color = randomColor()
        const rotate = (Math.random() * (2 - (-2)) + (-2)).toFixed(2);
        return StickyNote(note, color, rotate)
    }).join("")
}

const init = async () => {
    earlyPost = await fetchSticky()
    allPost = shuffle(earlyPost.data)
    renderSticky(allPost)
}

const openDetail = (id, color, rotate) => {
    playSound("scrol.mp3")
    const noteDetail = allPost?.find(note => note.id === id)
    detail.innerHTML = detailNote(noteDetail, color, rotate)
}

const openCreate = () => {
    const color = randomColor()
    detail.innerHTML = createNote(color)
}

const closeDetail = () => {
    playSound("teat.mp3")
    detail.innerHTML = ""
    init()
}

const closeCreate = () => {
    playSound("teat.mp3")
    detail.innerHTML = ""
    init()
}

const playWrite = () => {
    playSound("write.mp3")
}

const saveNote = async () => {
    const title = document.querySelector('.create-note-title-input').value;
    const username = document.querySelector('.create-note-username-input').value;
    const content = document.querySelector('.create-note-content-input').value;

    console.log({
        title,
        username,
        content
    })

    const dataNote = {
        title: title,
        username: username,
        content: content,
    };

    try {
        const response = await fetch('https://pabcl.codelabspace.or.id/social-posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(dataNote) 
        });

        const result = await response.json();

        console.log(result)

        if (response.ok) {
            const result = await response.json();
            console.log('Berhasil disimpan:', result);
            closeCreate(); 
        }
    } catch (error) {
        console.error('Gagal kirim data:', error);
    }
}

document.addEventListener("DOMContentLoaded", init)
window.openDetail = openDetail
window.openCreate = openCreate
window.closeDetail = closeDetail
window.saveNote = saveNote;
window.playWrite = playWrite;
