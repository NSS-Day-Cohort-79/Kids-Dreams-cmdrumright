import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

addEventListener("click", (clickEvent) => {
    const clickTarget = clickEvent.target
    const starName = clickTarget.innerText
    const starSport = clickTarget.dataset.sport
    window.alert(`${starName} is a ${starSport} star`)
})

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
