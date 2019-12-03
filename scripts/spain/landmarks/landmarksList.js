import landmarkComponent from "./landmarks.js";
import { useLandmarks } from "./landmarksDataProvider.js";

const landmarkListComponent = () => {
  const contentElement=document.querySelector(".info")
  const landmarks= useLandmarks()

  contentElement.innerHTML += `
    <section class="info__landmarks">
    <ol class="info__list">
    <h2 class = "list__title">Landmarks</h2>
    ${
      landmarks.map(
        (landmark) =>{
          return landmarkComponent(landmark)
        }
      ).join("")
    }
    </ol>
    </section>
  `
}
export default landmarkListComponent 
