const LandmarksComponent = (landmarks) => {
   
    let LandmarksName = landmarks.name.split(" ").join("-")
    return `
    <li class="info__item"> ${landmarks.name} </li> 
    <button id="button--landmark--${LandmarksName}">Details</button>
    <dialog class="dialog--landmarks" id="details--${LandmarksName}">
        <div>details: ${landmarks.details}</div>
        <img class="button__landscape" src=${landmarks.image}>
        <br> 
        <button class="button--close">Close Dialog</button>
    </dialog>        
    `
}
export default LandmarksComponent
