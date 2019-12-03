const CityComponent = (city) => {
   
    return `
    <li class="info__item"> ${city.name} </li> 
    <button id="button--city--${city.name}">Details</button>
    <dialog class="dialog--city" id="details--${city.name}">
        <div>details: ${city.details}</div>
        <button class="button--close">Close Dialog</button>
    </dialog>        
    `
}
export default CityComponent
