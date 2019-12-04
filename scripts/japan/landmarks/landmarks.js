const LandmarksComponent = (landmarks) => {
   
    let LandmarksName = landmarks.name.split(" ").join("-")
    return `
    <li class="info__item"> ${landmarks.name} </li> 
    <button id="button--landmark--${LandmarksName}">Details</button>
    <dialog class="dialog--landmarks" id="details--${LandmarksName}">
        <div>details: ${landmarks.details}</div>
        <button class="button--close">Close Dialog</button>
        <img class="button__landscape" src=${landmarks.image}>
        <br> 
    </dialog>        
    `
}
export default LandmarksComponent
