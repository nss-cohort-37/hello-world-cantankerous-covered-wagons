const cityComponent = (city) => {
  return `
          <li class = "info__item">${city.name}</li>
          <button class="button__details" id="button--city--${city.name}">Details</button>
          <dialog class="dialog__cities" id="details--${city.name}">
              <div>Details: ${city.details}</div>
              <img class="button__landscape" src="${city.image}">
              <br>
              
              <button class="button--close">Close Dialog</button>
              </dialog>
        
      `
    }
    
    export default cityComponent
