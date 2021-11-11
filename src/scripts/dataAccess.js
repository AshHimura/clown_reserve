const applicationState = {
    partyRequests: []
}

const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

export const fetchPartyRequests = () => {
    return fetch(`${API}/partyRequests`)
        .then(response => response.json())
        .then(
            (servicePartyRequests) => {
                servicePartyRequests.sort((a,b) => {
                    //date property has to be an object for sort
                    const bDate = new Date(b.date)
                    const aDate = new Date(a.date)
                    return aDate - bDate
                })               
                // Store the external state in application state
                applicationState.partyRequests = servicePartyRequests
            }
        )
}


export const getPartyRequests = () => {
}

export const sendReservation = (userServiceReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceReservation)
    }

    return fetch(`${API}/partyRequests`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const deleteReservation = (id) => {
    return fetch(`${API}/partyRequests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}    