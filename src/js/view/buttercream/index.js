export default (flavors) => {
    const flavorsElm = document.createElement("select");

    let option = document.createElement("option");
    option.textContent = "select";
    flavorsElm.appendChild(option);

    for (let i = 0; i < flavors.length; i++) {
        let option = document.createElement("option");
        option.textContent = flavors[i];
        flavorsElm.appendChild(option);
    } 
return flavorsElm;
}
