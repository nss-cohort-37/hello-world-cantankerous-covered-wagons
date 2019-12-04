/**
 *  CityComponent which renders individual city objects as HTML
 */
const CityComponent = (city) => {
    let cityName = city.name.split(" ").join("-")
    return `
            <li class = "info__item">${city.name}</li>

            <button class="button__details" id="button--city--${cityName}">Details</button>

            <dialog class="dialog--city" id="details--${cityName}">
                <div>${city.details}</div>
                <img class="button__landscape" src="${city.image}" alt="">
                <button class="button--close">Close Dialog</button>
            </dialog>
    `
}

export default CityComponent