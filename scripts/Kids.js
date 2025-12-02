import { getChildren } from "./database.js"

const children = getChildren()

addEventListener("click", clickEvent => {
    const clickTarget = clickEvent.target
    if (clickTarget.dataset.type === "child") {
        const kidName = clickTarget.innerText
        const kidWish = clickTarget.dataset.wish
        window.alert(`${kidName}'s wish is ${kidWish}`)
    }
})

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

