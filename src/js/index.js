import flavors from "./model/buttercream";
import spongeCake from "./model/spongecake";
import flavorsElm from "./view/buttercream";
import spongeCakeElm from "./view/spongecake";

document.querySelector("#buttercreamflavors").appendChild(flavorsElm(flavors));

document.querySelector("#spongeflavor").appendChild(spongeCakeElm(spongeCake));

