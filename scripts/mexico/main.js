import CityListComponent from './cities/cityListProvider.js'
import LandmarkListComponent from './landmarks/landmarksListProvider.js'
import LeaderListComponent from './leaders/leadersListProvider.js'
import addMouseOverEventListeners from "../highlightCards.js";
import initializeCityDetailButtonEvents from './cities/dialogs.js';
import initializeLandmarkDetailButtonEvents from "./landmarks/dialogs.js"
import initializeLeaderDetailButtonEvents from './leaders/dialogs.js';


CityListComponent()
LandmarkListComponent()
LeaderListComponent()
addMouseOverEventListeners()
initializeCityDetailButtonEvents()
initializeLandmarkDetailButtonEvents()
initializeLeaderDetailButtonEvents()