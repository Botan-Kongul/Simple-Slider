const song =  document.querySelector('.song');
const video = document.querySelector('.vid-container video')
const play = document.querySelector('.play')
const outline = document.querySelector('.moving-outline circle')
const kalanSureText = document.querySelector('.time-display')
const sureSec = document.querySelectorAll('.time-select button')
const sounds=document.querySelectorAll('.sound-picker button');
const outlineLenghth = outline.getTotalLength();
outline.style.strokeDashoffset = outlineLenghth;
outline.style.strokeDasharray = outlineLenghth;
let toplamSure = 60;

sureSec.forEach(option=>{
    option.addEventListener('click',function (){
            toplamSure = this.getAttribute('data-time');
            kalanSureText = `${Math.floor(toplamSure  / 60)};`
            kalanSureText = `${Math.floor(toplamSure  % 60)};`
    })
})
sounds.forEach(sound=>{
    sound.addEventListener('click',function(){
        song.src=this.getAttribute('data-sound');
        video.src=this.getAttribute('data-video');
        playKontrol(song);
    })
})
play.addEventListener('click',()=>{
    playKontrol(song)
    song.paused();
});
const playKontrol = song=>{
    if(song.paused){
        song.play();
        video.play();
        play.src = './svg/pause.svg'
    }else {
        song.pause();
        video.pause();
        play.src = './svg/play.svg';
    }
}
song.ontimeupdate= ()=>{
    let simdikiZaman = song.currentTime;
    console.log(simdikiZaman)
    let kalanZaman = toplamSure - simdikiZaman;

    let kalanSaniye = Math.floor(kalanZaman % 60)
    let kalanDakika = Math.floor(kalanZaman / 60)

    let donguIslem = outlineLenghth - (simdikiZaman/ toplamSure)*outlineLenghth;
    outline.style.strokeDashoffset = donguIslem;
    kalanSureText.textContent = `${kalanDakika}:${kalanSaniye}`;

    if(simdikiZaman >=  toplamSure){
        song.pause();
        video.pause();
        song.currentTime=0;
        play.src = "./svg/play.svg";

    }

}