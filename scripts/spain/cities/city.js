// cityComponent that renders individual cities as HTMl 
const cityComponent = (city) =>{
  return `   
    <li class="info__item">${city.name}</li>
    <div class="city__name">
    <button class='button__details' id="button--city--${city.name}">Details</button>

          <dialog class="dialog--city" id="details--${city.name}">
              <div>Details ${city.details}</div>
              <img src="${city.image}" class="button__landscape">
              <br>
              <button class="button--close">Close Dialog</button>
          </dialog>
    </div>
  `
}

export default cityComponent

