const LeadersComponent = (leaders) => {
    let LeadersName = leaders.name.split(" ").join("-")
    return `
    
    <li class="info__item"> ${leaders.name} </li> 
    <button id="button--leaders--${LeadersName}">Details</button>
    <dialog class="dialog--leaders" id="details--${LeadersName}">
        <div>details: ${leaders.details}</div>
        <img class="button__image" src=${leaders.image}>
        <br> 
        <button class="button--close">Close Dialog</button>
    </dialog>        
    `
}
export default LeadersComponent
