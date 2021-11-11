import { fetchPartyRequests } from "./dataAccess.js"
import { ClownReserve } from "./ClownReserve.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

const render = () => {
    fetchPartyRequests().then(
        () => {
            mainContainer.innerHTML = ClownReserve()
        }
    )
}

render()
