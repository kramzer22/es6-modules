import "./style.css";
import { dogFactory } from "./factories/dogFactory";

const dog1 = new dogFactory("Maxie", "Chichuahua");

document.querySelector("#app").innerHTML = `
  <div>
    <p>Dog name: ${dog1.name}, dog breed: ${dog1.breed}</p>
  </div>
`;
