import { useCity } from './cityDataProvider.js'
import CityComponent from './city.js'
const CityListComponent = () => {
    const contentElement = document.querySelector(".info")
    const cities = useCity()
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class = "info__cities">
            <h2 class = "list__title">Cities</h2>
            <ol class = "info__list">
                ${
                    cities.map(city => CityComponent(city)).join("")
                }
            </ol>
        </section>
    `
}
export default CityListComponent
