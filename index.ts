import { ModelS, ModelX, EnhancedAutoPilot } from "./class";

let mytesla:ModelS= new ModelS();

mytesla= new EnhancedAutoPilot(mytesla);
console.log(mytesla.getDescription(), mytesla.cost());