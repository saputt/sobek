export const createNote = (color) => {
    return `
        <div class="create-note-cont">
            <div 
                class="create-note"
                style="background-color : ${color.color}"
            >   
                <form id="form-note" onsubmit="event.preventDefault(); saveNote()">
                    <div class="create-info">
                        <textarea 
                            class="create-note-title create-note-title-input" 
                            placeholder="Input title here" 
                            maxlength="70"
                            oninput="playWrite()"
                        ></textarea>
                        <input 
                            class="create-note-username create-note-username-input" 
                            placeholder="Input username here"
                            oninput="playWrite()"    
                        ></input>
                        <div class="create-note-content-cont">
                            <textarea 
                                class="create-note-content create-note-content-input" 
                                placeholder="Input content here" 
                                maxlength="200"
                                oninput="playWrite()"
                            ></textarea>
                        </div>
                        <div class="create-btn-cont">
                            <button class="create-btn">Send</button>
                        </div>
                    </div>
                </form>
                <div class="close-note" onclick="closeDetail()">X</div>
            </div>
        </div>
    `
}