import { getPartyRequests } from "./dataAccess.js"
import { deleteReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reserve--")) {
        const [,reserveId] = click.target.id.split("--")
        deleteReservation(parseInt(reserveId))
    }
})



const requestToListElement = (reserve) => { 
    
    return `
    <li>
        ${reserve.date}
        <button class="reserve__delete"
                id="reserve--${reserve.id}">
            Deny
        </button>
    </li>
`
}


export const PartyRequests = () => {
    
    const requests = getPartyRequests()
    
    let html = `
    <ul>
    ${
        requests.map(requestToListElement).join("")
        //returns an array, .join takes out commas, puts elements together
    }
    </ul>
    `
    return html
}
