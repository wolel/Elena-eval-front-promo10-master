var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
    .add({
        targets: '.ml2 .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 70*i
    }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});
// boutton profille

function profil() {
    var photo = document.getElementById('photo');
    var y = document.getElementById('cv2');
    var x1 = document.getElementById('profil');
    var x = document.getElementById("cv1");
    if (x.style.display === 'none') {
        x.style.display ='block';
        y.style.display = 'block';
        x1.style.width = '100%';

    }
    else{
        x.style.display = 'none';
        x1.style.width = '50%';
        y.style.display = 'none';

    }

}
function experience() {
    var red =  document.getElementById('red');
    var education = document.getElementById('education');
    var photo = document.getElementById('photo');
    var x1 = document.getElementById('experience');
    var y = document.getElementById('profil');

  if (red.style.width === 'none'){
      red.style.display = 'block';
      x1.style.width = '100%';
      y.style.width = '100%';
      photo.style.height = '840px';
      education.style.display = 'none';


  }else{
      x1.style.width = '25%';
      y.style.width = '50%';
      photo.style.display = 'block';


  }
}