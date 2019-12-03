import { useCity } from "./cities/cityDataProvider.js";
import cityListComponent from "./cities/cityList.js";
import { useLandmark } from "./landmarks/landmarksDataProvider.js"
import landmarksListComponent from "./landmarks/landmarksList.js";
import { useLeaders } from "./leaders/leadersDataProvider.js";
import leadersListComponent from "./leaders/leadersList.js";
import addMouseOverEventListeners from "../../highlightCards.js";




landmarksListComponent()
useLandmark()
cityListComponent()
useCity()
useLeaders()
leadersListComponent()
addMouseOverEventListeners()
