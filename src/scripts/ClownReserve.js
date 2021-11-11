import { PartyRequests } from "./Requests.js"
import { ReservationForm } from "./ReservationForm.js"

export const ClownReserve= () => {
    return `
        <h1>Buttons' and Lollipop's Rent-A-Clown</h1>
        <section class="reservationForm">
            ${ReservationForm()}
        </section>

        <section class="partyRequests">
            <h2>Party Requests</h2>
            ${PartyRequests()}
        </section>
    `
}