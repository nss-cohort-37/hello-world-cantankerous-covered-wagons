import { useLandmark } from './landmarksDataProvider.js'
import LandmarkComponent from './landmarks.js'

const LandmarkListComponent = () => {

    const contentElement = document.querySelector(".info")
    const landmarks = useLandmark()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class = "info__landmarks">
            <h2 class = "list__title">Landmarks</h2>
            <ol class = "info__list">
                ${
                    landmarks.map(landmark => LandmarkComponent(landmark)).join("")
                }
            </ol>
        </section>
    `
}

export default LandmarkListComponent