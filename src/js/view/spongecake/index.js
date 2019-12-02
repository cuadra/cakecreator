export default (spongeCake) => {
    const spongeCakeElm = document.createElement("select"); 
    let sponge = document.createElement("option");
    sponge.textContent = "select";
    spongeCakeElm.appendChild(sponge);

    for (let i = 0; i < spongeCake.length; i++) {
        let sponge = document.createElement("option");
        sponge.textContent = spongeCake[i]; spongeCakeElm.appendChild(sponge);
    }
return spongeCakeElm;
}