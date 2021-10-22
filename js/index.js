        $(function() {
          $('.topNav .btn-mobile').on('click', function() {
             $('.gnb').addClass('on'); 
          });
        
          $('.btn-close').on('click', function() {
              $('.gnb').removeClass('on');
          });
            
            $('.bTitle').delay(1000).animate ({
              opacity: 1,
              top: 200
          }, 1200, function() {
              $('.sTitle').delay(200).animate ({
                  opacity: 0.6,
                  top: 300
              }, 800);
          });
        
    // Scroll Animation (sa, 스크롤 애니메이션)
      const saTriggerMargin = 300;
      const saElementList = document.querySelectorAll('.contImg');

      const saFunc = function() {
        for (const element of saElementList) {
          if (!element.classList.contains('show')) {
            if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
              element.classList.add('show');
            }
          }
        }
      }

      window.addEventListener('load', saFunc);
      window.addEventListener('scroll', saFunc);
            
        });
        