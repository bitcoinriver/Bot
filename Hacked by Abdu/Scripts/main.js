// Loading effect
let loader = document.getElementById("loader");

window.addEventListener('load' , function(){
    loader.style.display = "none";
});
// Loading effect


// Hacked Accounts Text Content
// let server = document.getElementById('server');

// server.textContent = 'X';

setInterval(function() {
    var h1Element = document.getElementById('server');
    var randomWords = [
        "c0cain_1",
        "ur.afg1n", 
        // "1.numuhanmedov__", 
        "__sanjarov1ch___", 
        "abdu_kh08",
        "_1.karimovv.1_",
        "sazer_2_0_2",
        "_.kim_sena._",
        "jabborov.u_",
        "wor_77_",
        "1.base64",
        "islomova08_08",
        "buzz_08_80",
        "baburshams.exe",
        "pro_dev_07",
        "lucky007",
        "alina18951",
        "dark_skyfall",
        "alibek_15____",
        "1.otashbek_",
        "ulugbek_7501",
        "ooeeoocco",
        "xtt2.__",
        "itz.__dz_3455",
        "super1233248",
        "sahil_meax_",
        "_thv_l1sa",
        "termiz_sila_",
        "its._.jaatni._.001",
        "soviet__.union",
        // "",
        "codex_sky"
    ];
    var randomIndex = Math.floor(Math.random() * randomWords.length);
    var randomWord = randomWords[randomIndex];
    h1Element.innerText = randomWord;
}, 500);