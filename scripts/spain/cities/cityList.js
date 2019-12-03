import { useCities } from "./cityDataProvider.js";
import cityComponent from "./city.js";

const cityListComponent = () => {
  const contentElement = document.querySelector(".info")
  const cities = useCities()

  contentElement.innerHTML+=`
  <section class="info__cities">
  <h2 class="list__title">Cities</h2>    
  <ol class="info__list">
    ${
      cities.map (
        (city) =>{
         return cityComponent(city)
        }
        ).join("")
    }
    </ol>
    </section>
  `
}
export default cityListComponent
