"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_1 = require("./class");
var mytesla = new class_1.ModelS();
mytesla = new class_1.EnhancedAutoPilot(mytesla);
console.log(mytesla.getDescription(), mytesla.cost());
