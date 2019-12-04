const LandmarkComponent = (landmark) => {
    let landmarkName = landmark.name.split(" ").join("-")
    return `
    
            <li class = "info__item">
                ${landmark.name}
            </li>

            <button class="button__details" id="button--landmarks--${landmarkName}">Details</button>

            <dialog class="dialog--city" id="details--${landmarkName}">
                <div>${landmark.details}</div>
                <img class="button__landscape" src="${landmark.image}" alt="">
                <br>
                <button class="button--close">Close Dialog</button>
            </dialog>
    `
}

export default LandmarkComponent