import { sendReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        // Get what the user typed into the form fields
        const userParent = document.querySelector("input[name='parentName']").value
        const userChild = document.querySelector("input[name='childName']").value
        const userAttendanceNumber = document.querySelector("input[name='kidsAttending']").value
        const userAddress = document.querySelector("input[name='partyAddress']").value
        const userReservation = document.querySelector("input[name='reservationDate']").value
        const userHours = document.querySelector("input[name='partyHours']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parent: userParent,
            child: userChild,
            attendanceNumber: userAttendanceNumber,
            address: userAddress,
            date: userReservation,
            partyHours: userHours
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})


export const ReservationForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Name of parent</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
        <label class="label" for="kidsAttending">Number of Child Guests</label>
        <input type="number" name="kidsAttending" class="input" />
        </div>
        <div class="field">
        <label class="label" for="partyAddress">Address</label>
        <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
        <label class="label" for="reservationDate">Date of shindig</label>
        <input type="date" name="reservationDate" class="input" />
        </div>
        <div class="field">
        <label class="label" for="partyHours">Length of Party (in hours)</label>
        <input type="number" name="partyHours" class="input" />
        </div>
        
        <button class="button" id="submitReservation">Submit Reservation!</button>`

        return html
}