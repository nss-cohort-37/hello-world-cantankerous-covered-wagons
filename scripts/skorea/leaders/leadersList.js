import { useLeaders } from "./leadersDataProvider.js";
import leadersComponent from "./leaders.js";

const leadersListComponent = () => {

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".info")
  const leadersCollection = useLeaders()



  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="info__heads">
      
      <h2 class = "list__title">Heads of State</h2>
      <ol info__list>
       
          ${
            leadersCollection.map(
              (currentLeader) => {
               return leadersComponent(currentLeader)
              }
            ).join("")
          }
          </ol>
        </section>
      </section>
  `
}

export default leadersListComponent