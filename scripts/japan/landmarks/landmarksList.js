import { useLandmarks } from './landmarksDataProvider.js'
import LandmarksComponent from './landmarks.js'
const LandmarksListComponent = () => {
    const contentElement = document.querySelector(".info")
    const landmarks = useLandmarks()
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
    <section class="info__landmarks">
    <h2 class = "list__title">Landmarks</h2>
    <ol class="info__list">
                ${
        landmarks.map(landmarks => LandmarksComponent(landmarks)).join("")
        }
            </ol>
        </section>
    `
}
export default LandmarksListComponent

