const addMouseOverEventListeners = () => {
  const infoCards = document.querySelectorAll(".info__cities")

  for (const card of infoCards) {
      card.addEventListener(
          "mouseover",
          (theMouseOverEvent) => {
              card.classList.add("highlightCard")
          }
      )

      card.addEventListener("mouseout", theMouseOutEvent => {
          card.classList.remove("highlightCard")
      })
  }
  const landCards = document.querySelectorAll(".info__landmarks")

  for (const card of landCards) {
      card.addEventListener(
          "mouseover",
          (theMouseOverEvent) => {
              card.classList.add("highlightCard")
          }
      )

      card.addEventListener("mouseout", theMouseOutEvent => {
          card.classList.remove("highlightCard")
      })
  }
  const infoHeads = document.querySelectorAll(".info__heads")

  for (const card of infoHeads) {
      card.addEventListener(
          "mouseover",
          (theMouseOverEvent) => {
              card.classList.add("highlightCard")
          }
      )

      card.addEventListener("mouseout", theMouseOutEvent => {
          card.classList.remove("highlightCard")
      })
  }
}
export default addMouseOverEventListeners