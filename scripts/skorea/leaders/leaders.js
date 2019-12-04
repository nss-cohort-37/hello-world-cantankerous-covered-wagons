const leadersComponent = (leader) => {
  let leaderName = leader.name.split(" ").join("-")
  return `
          <li class = "info__item">${leader.name}</li>
          <button class="button__details" id="button--leaders--${leaderName}">Details</button>
          <dialog class="dialog__leaders" id="details--${leaderName}">
              <div>Details: ${leader.details}</div>
              <img class="button__image" src="${leader.image}">
              <br>
              
              <button class="button--close">Close Dialog</button>
              </dialog>
        
      `
    }
    
    export default leadersComponent