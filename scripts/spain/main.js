import cityListComponent from "./cities/cityList.js";
import addMouseOverEventListeners from "../highlightCards.js";
import landmarkListComponent from "./landmarks/landmarksList.js";
import leaderListComponent from "./leaders/leadersList.js";
import initializeCityDetailButtonEvents from "./cities/cityDialogs.js";
import initializeLandmarksDetailButtonEvents from "./landmarks/landmarksDialogs.js";
import initializeLeadersDetailButtonEvents from "./leaders/leadersDialogs.js";
cityListComponent()
landmarkListComponent()
leaderListComponent()
initializeCityDetailButtonEvents()
initializeLandmarksDetailButtonEvents()
initializeLeadersDetailButtonEvents()
addMouseOverEventListeners()