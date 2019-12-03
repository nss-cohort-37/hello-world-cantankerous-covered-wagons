import { useLeaders } from './leadersDataProvider.js'
import LeadersComponent from './leaders.js'
const LeadersListComponent = () => {
    const contentElement = document.querySelector(".info")
    const leaders = useLeaders()
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
    <section class="info__heads">
    <h2 class = "list__title">Heads of State</h2>
    <ol class="info__list">
                ${
                    leaders.map(leaders => LeadersComponent(leaders)).join("")
                }
            </ol>
        </section>
    `
}
export default LeadersListComponent
