



//AUTOCLOSING NAVBAR TOGGLE


$('.navbar-nav>.nav-link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// SCREEN width

var width = $(window).width();
var height = $(window).height();



       if (width > 768) {

         //SCROLLIFY ------------------------------------------------------------

         $(function () {
             $.scrollify({
                 section: ".section"
             });
             $(".scroll").click(function (e) {
                 e.preventDefault();
                 $.scrollify("move", $(this).attr("href"));
             });
         });



           //MENU COLORS ------------------------------------------------------------


                             const target = document.querySelector(".target");
                              const links = document.querySelectorAll(".nav-link");
                              const colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];
                              for (let i = 0; i < links.length; i++) {

                              links[i].addEventListener("mouseenter", mouseenterFunc);
                            }
                            function mouseenterFunc() {
                              for (let i = 0; i < links.length; i++) {
                                if (links[i].parentNode.classList.contains("active")) {
                                  links[i].parentNode.classList.remove("active");
                                }
                                links[i].style.opacity = "0.25";
                              }

                              this.parentNode.classList.add("active");
                              this.style.opacity = "1";

                              const width = this.getBoundingClientRect().width;
                              const height = this.getBoundingClientRect().height;
                              const left = this.getBoundingClientRect().left;
                              const top = this.getBoundingClientRect().top;
                              const color = colors[Math.floor(Math.random() * colors.length)];

                              target.style.width = `${width}px`;
                              target.style.height = `${height}px`;
                              target.style.left = `${left}px`;
                              target.style.top = `${top}px`;
                              target.style.borderColor = color;
                              target.style.transform = "none";

                            }

                            window.addEventListener("resize", resizeFunc);
                            function resizeFunc() {
                      const active = document.querySelector("nav-link.active");

                      if (active) {
                        const left = active.getBoundingClientRect().left + window.pageXOffset;
                        const top = active.getBoundingClientRect().top + window.pageYOffset;

                        target.style.left = `${left}px`;
                        target.style.top = `${top}px`;
                      }
                    }
                  }else {
                      $(".scroll").click(function (e) {
                          e.preventDefault();
                      });
                      $.scrollify.destroy();
                  }
                  //CAROUSEL words


                  $(document).ready(function (){
                    $(function () {
                      var words = ['Discover', 'Develop', 'Code', 'Create new things'];
                      var counter = 0;
                      var word = document.getElementById("carousel-words");
                      setInterval(update_carousel_words, 1500);
                      function update_carousel_words(){
                        word.innerHTML = words[counter];
                        counter++;
                        if(counter >= words.length){
                          counter=0;
                        }
                      }
                    });
                  });
