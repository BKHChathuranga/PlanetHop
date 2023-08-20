import starShip from "../../../assets/starShip.png";
import galaxyTrain from "../../../assets/galaxyTrain.png";
import solarTeleport from "../../../assets/solarTeleport.png";

import aliens from "../../../assets/alien.png";
import colony from "../../../assets/colony.png";
import newPlanet from "../../../assets/newPlanet.png";

export const transportationModes = [
  { id: 1, image: starShip, cardHeader: "Star-Ships" },
  { id: 2, image: galaxyTrain, cardHeader: "Galaxy-Train" },
  { id: 3, image: solarTeleport, cardHeader: "Solar-Teleport" },
];

export const news = [
  { id: 1, image: aliens, cardHeader: "Aliens found near the Saturn" },
  { id: 2, image: colony, cardHeader: "New human colony established in Mars" },
  { id: 3, image: newPlanet, cardHeader: "The scientific community has discovered a new planet" },
];
