const initializeLeaderDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END

  // Get a reference to all buttons that start with "button--"
  const allDetailButtons = document.querySelectorAll("button[id^='button--leaders']")

  // Add an event listener to each one
  for (const btn of allDetailButtons) {
      btn.addEventListener(
          "click",
          theEvent => {
              const theDialog = document.querySelector(`#${theEvent.target.id}+dialog`)
              theDialog.showModal()
          }
      )
  }
}

  export default initializeLeaderDetailButtonEvents