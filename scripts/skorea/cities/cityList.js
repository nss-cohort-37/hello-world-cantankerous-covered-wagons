import { useCity } from "./cityDataProvider.js";
import cityComponent from "./city.js";

const cityListComponent = () => {

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".cityList")
  const cityCollection = useCity()



  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="info__cities">
      
      <h2 class = "list__title">Cities</h2>
      <ol info__list>
       
          ${
            cityCollection.map(
              (currentCity) => {
               return cityComponent(currentCity)
              }
            ).join("")
          }
          </ol>
        </section>
      </section>
  `
}

export default cityListComponent