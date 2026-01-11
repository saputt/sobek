export const StickyNote = (data, color, rotate) => {
    return `
        <article 
            class="sticky-note ${color.class}"
            style="background: ${color.linear}; transform: rotate(${rotate}deg)"
            onclick="openDetail('${data.id}','${color.color}', '${rotate}')"
        >
            <div class="tape" aria-hidden="true"></div>
            
            <div class="sticky-note-info">
                <header>
                    <h3 class="sticky-note-title">${data.title}</h3>
                    <address class="sticky-note-username">@${data.username}</address>
                </header>
                
                <div class="sticky-note-body">
                    <p class="sticky-note-content">${data.content}</p>
                </div>
            </div>
        </article>
    `
}