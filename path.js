let max = 100;
console.log("start");

tsunaDivSquare();
let togo_tab = generate_togo(max);

disappearDemBoxes(togo_tab, max)

function tsunaDivSquare() {
    // only square container !!!
    // id for div container = pathContainer !!!
    var container = document.getElementById("pathContainer");

    for (var i = 0; i < 100; i++) {
        console.log("tess");
        var divLength = container.offsetWidth / 10;
        var divBox = document.createElement('div');
        divBox.setAttribute('class', 'pathBox');
        divBox.setAttribute('id', 'nbr' + i);
        divBox.style.width = '40px';
        divBox.style.height = '40px';

        container.appendChild(divBox);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}






function generate_togo(max) {
    let togo_tab = [];
    while (togo_tab.length < max) {
        let boxId = getRandomInt(0, 99);
        if (!togo_tab.includes(boxId)) {
            togo_tab.push(boxId);
        }
    }
    return togo_tab;
}

function reappearDemBoxes(togo_tab, max) {
    togo_tab.forEach((el) => {
        let boxId = el
        let id_str = `nbr${boxId}`;
        let boxToGo = document.querySelector(`#${id_str}`);
        boxToGo.setAttribute('class', 'pathBox');
    })
}

function disappearDemBoxes(togo_tab, max) {
    let index = 0;

    setInterval(() => {

        if (index >= max) {
            reappearDemBoxes(togo_tab);
            index = 0;
        } else {
            let boxId = togo_tab[index];
            let id_str = `nbr${boxId}`;
            let boxToGo = document.querySelector(`#${id_str}`);
            boxToGo.setAttribute('class', 'invisible');


            index++;
        }
    }, getRandomInt(2, 13) * 800);

}