import "./styles.css";
import { domController } from "./domController";
import { createHabitList } from "./habitList";

domController.loadPage();
const defaultList = createHabitList("Default", "Default habit list")
domController.displ(defaultList);