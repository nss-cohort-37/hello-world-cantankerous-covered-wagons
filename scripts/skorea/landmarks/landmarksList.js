import { useLandmark } from "./landmarksDataProvider.js";
import landmarksComponent from "./landmarks.js";

const landmarksListComponent = () => {

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".landmarksList")
  const landmarksCollection = useLandmark()



  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="info__landmarks">
      
      <h2 class = "list__title">Landmarks</h2>
      <ol info__list>
       
          ${
            landmarksCollection.map(
              (currentLandmark) => {
               return landmarksComponent(currentLandmark)
              }
            ).join("")
          }
          </ol>
        </section>
      </section>
  `
}

export default landmarksListComponent