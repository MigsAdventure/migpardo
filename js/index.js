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

      $('#projectImage').attr('src', apps[currApp].image);
      $('#appTech').text(apps[currApp].tech);
      $('#appDesc').text(apps[currApp].description);
      $('#appWhy').text(apps[currApp].reason);
      $('#github').attr('href',apps[currApp].github);
      $('#preview').attr('href',apps[currApp].preview);

    $('.hideInfo').addClass('detailContainer');

  });

  $('.closeBtn').on('click',function() {
      $('.hideInfo').removeClass('detailContainer');
  });


});
