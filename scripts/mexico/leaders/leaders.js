const LeaderComponent = (leader) => {
    let leaderName = leader.name.split(" ").join("-")
    return `
            <li class = "info__item">
                ${leader.name}
            </li>

            <button class="button__details" id="button--leaders--${leaderName}">Details</button>

            <dialog class="dialog--city" id="details--${leaderName}">
                <div>${leader.details}</div>
            
                <button class="button--close">Close Dialog</button>
            </dialog>
    `
}

export default LeaderComponent