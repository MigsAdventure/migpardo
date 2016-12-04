$(document).ready(function () {

  let apps = {
    pokedexGo: {
      image: "assets/pokedexLogo.png",
      tech: "jQuery and BootStrap",
      description: "Pokedex Go is a pokedex specifically made for Pokemon Go. A CP calculator is included to see how strong a pokemon will be after evolving. Pokemons also make sounds.",
      reason: "Pokemon Go had just been released. After playing the game for several days, I found it hard to find a CP calculator online. I was determined to build a CP calculator, but somehow ended up making a pokedex with a CP calculator as a feature."
    },

    gokuHangman: {
      image: "assets/gokuLogo.png",
      tech: "jQuery and BootStrap",
      description: "A goku hangman app. There is one letter that is given as a hint. The app will let one know when a letter has been pressed more than once.",
      reason: "I grew up watching dragonball, so I chose the main character as the hangman character."
    }
  }

  $('.infoBtn').on('click', function() {
    let currApp =  $(this).attr('alt');
    console.log('currApp:', currApp);

    switch(currApp) {
      case 'Pokedex_Go':
        $('#projectImage').attr('src', apps.pokedexGo.image);
        $('#appTech').text(apps.pokedexGo.tech);
        $('#appDesc').text(apps.pokedexGo.description);
        $('#appWhy').text(apps.pokedexGo.reason);
        break;
      case 'Goku_Hangman':
        $('#projectImage').attr('src', apps.gokuHangman.image);
        $('#appTech').text(apps.gokuHangman.tech);
        $('#appDesc').text(apps.gokuHangman.description);
        $('#appWhy').text(apps.gokuHangman.reason);
        break;

      default: "sorry there was a problem"
    }

    $('.hideInfo').addClass('detailContainer');

  });

  $('.closeBtn').on('click',function() {
      $('.hideInfo').removeClass('detailContainer');
  });





});
