$(document).ready(function () {

  let apps = {
    polaroidImage: {
      image: "assets/polaroidImage.png",
      github: "https://github.com/MigsAdventure/polaroid-image",
      preview: "https://www.npmjs.com/package/polaroid-image",
      tech: "React and Babel",
      description: "Turn any image into a polaroid! This is an npm package to be used with react projects. The user can easily add an image to the component to create a polaroid. There's props that make it easy to rotate the image and change how much it zooms on hover. There's also props to change the frame color and box shadows. ",
      reason: "Since the day I found out I could upload my own npm package, I knew this would be my first package. I tend to use polaroids throughout my projects. I wanted to create something useful for myself that would also benefit others. Learning how to create and upload it was also a fun experience. "
    },
    pokedexGo: {
      image: "assets/pokedexLogo.png",
      github: "https://github.com/MigsAdventure/PokedexGO",
      preview: "webApps/PokedexGO/pokedexGo.html",
      tech: "jQuery and BootStrap",
      description: "Pokedex Go is a pokedex specifically made for Pokemon Go. A CP calculator is included to see how strong a pokemon will be after evolving. Pokemons also make sounds.",
      reason: "Pokemon Go had just been released. After playing the game for several days, I found it hard to find a CP calculator online. I was determined to build a CP calculator, but somehow ended up making a pokedex with a CP calculator as a feature."
    },

    gokuHangman: {
      image: "assets/gokuLogo.png",
      github: "https://github.com/MigsAdventure/GokuHangman",
      preview: "webApps/GokuHangMan/gokuHangman.html",
      tech: "jQuery and BootStrap",
      description: "A goku hangman app. There is one letter that is given as a hint. The app will let one know when a letter has been pressed more than once.",
      reason: "I grew up watching dragonball, so I chose the main character as the hangman character."
    }
  }

  $('.infoBtn').on('click', function() {
    let currApp =  $(this).attr('alt');

    switch(currApp) {
      case 'Polaroid_Image':
        $('#projectImage').attr('src', apps.polaroidImage.image);
        $('#appTech').text(apps.polaroidImage.tech);
        $('#appDesc').text(apps.polaroidImage.description);
        $('#appWhy').text(apps.polaroidImage.reason);
        $('#github').attr('href',apps.polaroidImage.github);
        $('#preview').attr('href',apps.polaroidImage.preview);
        break;
      case 'Pokedex_Go':
        $('#projectImage').attr('src', apps.pokedexGo.image);
        $('#appTech').text(apps.pokedexGo.tech);
        $('#appDesc').text(apps.pokedexGo.description);
        $('#appWhy').text(apps.pokedexGo.reason);
        $('#github').attr('href',apps.pokedexGo.github);
        $('#preview').attr('href',apps.pokedexGo.preview);
        break;
      case 'Goku_Hangman':
        $('#projectImage').attr('src', apps.gokuHangman.image);
        $('#appTech').text(apps.gokuHangman.tech);
        $('#appDesc').text(apps.gokuHangman.description);
        $('#appWhy').text(apps.gokuHangman.reason);
        $('#github').attr('href',apps.gokuHangman.github);
        $('#preview').attr('href',apps.gokuHangman.preview);
        break;
      default: "sorry there was a problem"
    }

    $('.hideInfo').addClass('detailContainer');

  });

  $('.closeBtn').on('click',function() {
      $('.hideInfo').removeClass('detailContainer');
  });





});
