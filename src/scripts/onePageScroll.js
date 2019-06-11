;(function(){


  let OnePageScroll = function () {
    const sections = $('.section');
    const visible = $(".maincontent");
    let inscroll = false;
  
    const mobileDetect = new MobileDetect(window.navigator.userAgent);// узнаем тип дисплея, браузер
    //console.log(mobileDetect);
    const isMobile = mobileDetect.mobile();
  
    let performTransition = function (sectionEq) {
      if (!inscroll) {
        inscroll = true;
        let position = sectionEq * -100 + '%';
  
        sections.eq(sectionEq).addClass("active").siblings().removeClass("active");//класс на активную секцию
  
        visible.css({
          transform: `translateY(${position})`,
          "-webkit-transform": `translateY(${position})`
        });
      }
  
      setTimeout(function () {
        inscroll = false;
  
        $(".pagination__pages-item")
          .eq(sectionEq)
          .addClass("pagination__pages-active")
          .siblings()
          .removeClass("pagination__pages-active");
      }, 1000+300); //время транзишна + время на инерцию
    };
  
      let defineSections = function (sectionsList) {
        let activeSection = sectionsList.filter(".active");
        return {
          activeSection: activeSection,
          nextSection: activeSection.next(),
          prevSection: activeSection.prev()
        };
      };
  
      let scrollToSection = function (direction) {
        let section = defineSections(sections);
  
        if (direction === "up" && section.nextSection.length) {
          performTransition(section.nextSection.index());
        }
  
        if (direction === "down" && section.prevSection.length) {
          performTransition(section.prevSection.index());
        }
      };
  
      $(".wrapper").on({
        wheel: function (e) {
          const deltaY = e.originalEvent.deltaY;
          const direction = deltaY > 0 ? "up" : "down";
  
          scrollToSection(direction);
        },
        touchmove: e => e.preventDefault()
      });
  $("wrapper").on('touchmove', e => {
    e.preventDefault();
  });
  
      if (isMobile) {
        $(window).swipe({
          swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            const scrollDirection = direction === 'down' ? 'down' : 'up';
            scrollToSection(scrollDirection);
          }
        });
      }
  
      $(document).on("keydown", e=>{
        const section = defineSections(sections);
  
        switch (e.keyCode) {
          case 40: 
          if (section.nextSection.length) {
            performTransition(section.nextSection.index());
          }
          break;
  
          case 38: 
          if (section.prevSection.length) {
            performTransition(section.prevSection.index());
            break;
          }
        }
      })
    
      $("[data-scroll-to]").on("click", e => {
        e.preventDefault();
        performTransition(parseInt($(e.target).data("scroll-to")));
      })
    }
    OnePageScroll();
  })()
