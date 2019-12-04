const initializeLeadersDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const CloseButtons = document.querySelectorAll(".button--close")

  for (const btn of CloseButtons) {
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
            const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
            const theDialog = document.querySelector(dialogSiblingSelector)
            theDialog.showModal()
        }
    )
}
  
}
export default initializeLeadersDetailButtonEvents