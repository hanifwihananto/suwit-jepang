const gunting = document.querySelector('.gunting');
const batu = document.querySelector('.batu');
const kertas = document.querySelector('.kertas');
const info = document.querySelector('.info');

// Menentukan pilihan computer
function getPilihanComputer(){
    const comp = Math.random();

    if(comp < 0.2) return 'gunting';
    if(comp > 0.2 && comp < 0.5) return 'batu';
    return 'kertas';
}

// Menentukan hasil 
function getHasil(comp, player){
    // Hasil seri
    if(player == comp) return 'SERI !';
    
    // Hasil Gunting
    if(player == 'gunting') return (comp == 'kertas') ? 'MENANG !' : 'KALAH !';

    // Hasil Batu
    if(player == 'batu') return (comp == 'gunting') ? 'MENANG !' : 'KALAH !';

    // Hasil Kertas
    if(player == 'kertas') return (comp == 'batu') ? 'MENANG !' : 'KALAH !';
}

// Efek putar
function putar(){
    const imgComp = document.querySelector('.img-comp');
    const img = ['gunting', 'batu', 'kertas'];
    const start = new Date().getTime();
    let i = 0;

    setInterval(() => {
        if(new Date().getTime() - start > 500){
            clearInterval;
            return;
        }

        imgComp.setAttribute('src', 'img/' + img[i++] + '.png');

        if (i == img.length) i = 0;
    }, 100);
}

// Play Game
const play = document.querySelectorAll('li img');
play.forEach((p) => {
    p.addEventListener('click', () => {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = p.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(() => {
            const imgComp = document.querySelector('.img-comp');
            imgComp.setAttribute('src', 'img/' + pilihanComputer + '.png');
            info.innerHTML = hasil;
        }, 500)
        info.innerHTML = '';
    })
})