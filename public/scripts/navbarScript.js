  // this section toggles the mobile menu to appear and dissapear when the user pushes the hamburger button
  // sources:
  //   a.) https://www.youtube.com/watch?v=puaX_nhTMRU
  //   b.) https://codepen.io/chris__sev/pen/QWGjQKe
  // grab everything we need
  const btn = document.querySelector(".mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");
  // add event listeners
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
  // When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
  // sources:
  //    a.) Simpler implementation of the code: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
  //    b.) More complex version: https://stackoverflow.com/questions/56071897/hide-when-scroll-down-appears-when-scroll-up
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
      prevScrollpos = currentScrollPos;
    // if you set this "200" value to 0, you loose the delay effect
    } else if (currentScrollPos > prevScrollpos + 200){
      // the "-59px" below controlls how far up the navbar moves off the viewport when the user scrolls up
      document.getElementById("navbar").style.top = "-59px";
      // this section hides the mobile dropdown menu when the user scrolls down
      let mobileDropdown = document.getElementById("mobile-dropdown")
      if (!(mobileDropdown.classList.contains('hidden'))) {
        // the "-244px" below controlls how far up the navbar moves off the viewport when the user scrolls up...when the mobile dropdown menu is deployed
        document.getElementById("navbar").style.top = "-244px";
      }
      prevScrollpos = currentScrollPos;
    }
  }