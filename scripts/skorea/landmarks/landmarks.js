const landmarksComponent = (landmark) => {
  let landmarkName = landmark.name.split(" ").join("-")
  return `
          <li class = "info__item">${landmark.name}</li>
          <button class="button__details" id="button--landmark--${landmarkName}">Details</button>
          <dialog class="dialog--landmarks" id="details--${landmarkName}">
              <div>Details: ${landmark.details}</div>
              <img class="button__landscape" src="${landmark.image}">
              <br>
              
              <button class="button--close">Close Dialog</button>
              </dialog>
              
        
      `
    }
    
    export default landmarksComponent