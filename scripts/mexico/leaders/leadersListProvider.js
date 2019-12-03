import { useLeader } from './leadersDataProvider.js'
import LeaderComponent from './leaders.js'

const LeaderListComponent = () => {

    const contentElement = document.querySelector(".info")
    const leaders = useLeader()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class = "info__heads">
            <h2 class = "list__title">Heads of State</h2>
            <ol class = "info__list">
                ${
                    leaders.map(leader => LeaderComponent(leader)).join("")
                }
            </ol>
        </section>
    `
}

export default LeaderListComponent