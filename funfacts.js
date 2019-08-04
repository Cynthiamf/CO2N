var facts = [
    "Un arbre de taille moyenne produit suffisamment d'oxygène en un an pour permettre à une famille de quatre personnes de respirer.",
    "Trois arbres plantés au bon endroit autour des bâtiments peuvent réduire les coûts de climatisation jusqu'à 50 %.",
    "Les arbres augmentent la valeur de la propriété. Les maisons entourées d'arbres se vendent de 18 à 25 % plus cher que les maisons sans arbres.",
    "Les arbres génèrent des emplois et fournissent des matières premières pour les bâtiments, les journaux, les livres et plus de 15 000 autres produits forestiers. Les arbres sont renouvelables, biodégradables et recyclables. Les sous-produits du bois deviennent des produits tels que les vitamines, les plastiques, les arômes de vanille, les films photographiques, le dentifrice et les médicaments.",
    "En plantant 20 millions d'arbres, la terre et ses habitants recevront 260 millions de tonnes supplémentaires d'oxygène. Ces mêmes 20 millions d'arbres permettront d'éliminer 10 millions de tonnes de CO2.",
    "Les arbres servent d'abri et de nourriture aux animaux sauvages comme les oiseaux, les écureuils et les insectes. Les bosquets d'arbres fournissent de la nourriture et un abri aux grands mammifères, comme les ratons laveurs et les cerfs.",
    "Les arbres font du bien aux gens. Les travailleurs sont plus productifs lorsqu'ils voient des arbres le long de leur trajet et depuis les fenêtres de leur bureau.",
    "Les patients hospitalisés qui ont une vue sur les arbres guérissent plus rapidement, utilisent moins d'analgésiques et quittent l'hôpital plus tôt que les patients qui ont une vue sur un mur en briques. Les patients qui ont une vue sur les arbres passent 8 pour cent moins de jours à l'hôpital.",
    "Les consommateurs sont prêts à dépenser plus d'argent dans les quartiers commerçants avec des arbres. Ils sont prêts à payer plus cher pour des produits achetés dans un quartier commerçant avec des arbres. Ces mêmes acheteurs disent aussi qu'ils sont prêts à rester plus longtemps et considèrent que les produits et les magasins sont de meilleure qualité dans un quartier commerçant avec les arbres.",
    "Comme les humains, les arbres ont besoin d'eau pour survivre - et ils en boivent beaucoup. En un seul jour, un grand arbre peut consommer 100 gallons d'eau et le rejeter dans l'air sous forme d'oxygène et de vapeur d'eau. Gardez à l'esprit que de nombreuses conditions jouent un rôle, telles que la taille de l'arbre, l'espèce de l'arbre, l'humidité, les températures, l'exposition au soleil, etc.S",

];

function newFact() {

    var randomNumber = Math.floor(Math.random() * (facts.length));
    document.getElementById("funFacts").innerHTML = facts[randomNumber];
};
newFact();
setInterval(newFact, 3000);


/*Numbers*/

jQuery('.funfact-number').each(function () {
    var $this = jQuery(this);
    var parts = $this.text().match(/^(\d+)(.*)/);
    if (parts.length < 2) return;

    var scale = 20;
    var delay = 50;
    var end = 0 + parts[1];
    var next = 0;
    var suffix = parts[2];

    var runUp = function () {
        var show = Math.ceil(next);
        $this.text('' + show + suffix);
        if (show == end) return;
        next = next + (end - next) / scale;
        window.setTimeout(runUp, delay);
    }
    runUp();
});

function AfterRunUp() {

    var randomNumber = Math.floor(Math.random() * (facts.length));
    let contributors = document.getElementById("Contributors");
    contributors.innerHTML++;
};
AfterRunUp();
setInterval(AfterRunUp, 6000);


function AfterRunUp2() {

    var randomNumber = Math.floor(Math.random() * (facts.length));
    let contributorspartners = document.getElementById("contrib");
    partners.innerHTML++;
};
AfterRunUp2();
setInterval(AfterRunUp2, Math.floor(Math.random() * (7000)));

function AfterRunUp3() {

    var randomNumber = Math.floor(Math.random() * (facts.length));
    let treesP = document.getElementById("treesP");
    partners.innerHTML++;
};
AfterRunUp2();
setInterval(AfterRunUp2, Math.floor(Math.random() * (7000)));