import { useCity } from "./cities/cityDataProvider.js";
import cityListComponent from "./cities/cityList.js";
import { useLandmark } from "./landmarks/landmarksDataProvider.js"
import landmarksListComponent from "./landmarks/landmarksList.js";
import { useLeaders } from "./leaders/leadersDataProvider.js";
import leadersListComponent from "./leaders/leadersList.js";
import addMouseOverEventListeners from "../../highlightCards.js";
import initializeDetailButtonEvents from "./cities/dialog.js";
import initializeDetailButtonLeaders from "./leaders/dialogLeaders.js";
import initializeDetailButtonLandmarks from "./landmarks/diaglogLandmarks.js";






cityListComponent()
useCity()
landmarksListComponent()
useLandmark()
useLeaders()
leadersListComponent()
addMouseOverEventListeners()
initializeDetailButtonEvents()
initializeDetailButtonLeaders()
initializeDetailButtonLandmarks()