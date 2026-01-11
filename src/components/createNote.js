export const createNote = (color) => {
    return `
        <section class="create-note-cont">
            <article
                class="create-note"
                style="background-color : ${color.color}"
            >   
                <div class="board-alert-hidd" id="board-alert-id">
                </div>
                <form id="form-note" onsubmit="event.preventDefault(); saveNote()">
                    <div class="create-info">
                        <textarea 
                            class="create-note-title create-note-title-input" 
                            placeholder="Input title here" 
                            maxlength="70"
                            oninput="handleInput(this)"
                        ></textarea>
                        <input 
                            class="create-note-username create-note-username-input" 
                            placeholder="Input username here"
                            maxlength="50"
                            oninput="handleInput(this)"    
                        ></input>
                        <textarea 
                            class="create-note-content create-note-content-input" 
                            placeholder="Input content here" 
                            maxlength="300"
                            oninput="handleInput(this)"
                        ></textarea>
                        <div class="create-btn-cont">
                            <button class="create-btn">Send</button>
                        </div>
                    </div>
                </form>
                <div class="close-note" onclick="closeDetail()">X</div>
            </article>
        </section>
    `
}