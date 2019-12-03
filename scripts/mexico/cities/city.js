/**
 *  CityComponent which renders individual city objects as HTML
 */
const CityComponent = (city) => {
    return `
                <li class = "info__item">
                    ${city.name}
                </li>
    `
}

export default CityComponent