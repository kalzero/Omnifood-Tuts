
(function(window, document){
        
    var waypoint = new Waypoint({
        element: document.getElementsByClassName("js--section-features")[0],
        handler: function(direction) { 
            if (direction === "down") {
                document.querySelector("nav").classList.add("sticky");
            } else {
                document.querySelector("nav").classList.remove("sticky");
            }
        },
        offset: '60px'
    });

    
    // Smooth Scrolling
//    window.scroll({
//      top: 2500, 
//      left: 0, 
//      behavior: 'smooth' 
//    });
//    
     

    document.querySelector(".js--scroll-to-plans").addEventListener("click", scrollToPlans); 
    
    
    function scrollToPlans() {
        var elem = document.getElementById("plans");
        elem.scrollIntoView({behavior: "smooth", block: "start"});        
    }
    
    //<section class="section-plans js--section-plans" id="plans">
    
//    document.querySelector(".js--scroll-to-plans").addEventListener('click', function() {
//       document.querySelector(".js--section-plans").scrollIntoView({
//           behavior: 'smooth'
//       });
//    });
    
    // Scroll to a certain element
//    document.querySelector('.hello').scrollIntoView({ 
//      behavior: 'smooth' 
//    });

    
})(window, document);