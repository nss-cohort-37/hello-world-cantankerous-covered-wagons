const leaderComponent = (leader) =>{
  let leaderName=leader.name.split(" ").join("-")
  return `
  <li class="info__item">${leader.name}</li>  
  <div class="leaders__name">
  <button class='button__details' id="button--leaders--${leaderName}">Details</button>

        <dialog class="dialog--leaders" id="details--${leaderName}">
            <div>Details ${leader.details}</div>
            <img src=${leader.image} class="button__image">
            <br>
            <button class="button--close">Close Dialog</button>
        </dialog>
  </div>
  `
}
export default leaderComponent








