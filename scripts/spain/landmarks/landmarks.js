const landmarkComponent = (landmark) => {
  let landmarkName=landmark.name.split(" ").join("-")
  return `
  <li class="info__item">${landmark.name}</li>
  <div class="landmarks__name">
  <button class='button__details' id="button--landmarks--${landmarkName}">Details</button>

        <dialog class="dialog--landmarks" id="details--${landmarkName}">
            <div>Details ${landmark.details}</div>
            <img src=${landmark.image} class="button__landscape">
            <br>
            <button class="button--close">Close Dialog</button>
        </dialog>
  </div>
  `
}

export default landmarkComponent
