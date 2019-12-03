import leaderComponent from "./leaders.js";
import { useLeaders } from "./leadersDataProvider.js";

const leaderListComponent = () => { 
  const contentElement=document.querySelector(".info")
  const leaders = useLeaders()

  contentElement.innerHTML+=
  `<section class="info__heads">
  <h2 class = "list__title">Heads of State</h2>
  <ol class="info__list">
  ${
    leaders.map (
      (leader) => {
        return leaderComponent(leader)
      }
    ).join("")
    }
  </ol>
  </section>
  `
}
export default leaderListComponent

