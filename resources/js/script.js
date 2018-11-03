
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
        offset: "60px"
    });  
    
    // smooth scroll to anchor tags
    document.querySelectorAll("a[href^='#']").forEach(a => {
        a.addEventListener("click", function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });            
        });               
    });
    
    //Animation on scroll
    var wp1 = new Waypoint({
        element: document.getElementsByClassName("js--wp-1")[0],
        handler: function() {            
            this.element.classList.add("animated", "fadeIn");
        },
        offset: "50%"
    });    
    var wp2 = new Waypoint({
        element: document.getElementsByClassName("js--wp-2")[0],
        handler: function() {            
            this.element.classList.add("animated", "fadeInUp");
        },
        offset: "50%"
    });    
     var wp3 = new Waypoint({
        element: document.getElementsByClassName("js--wp-3")[0],
        handler: function() {            
            this.element.classList.add("animated", "fadeIn");
        },
        offset: "50%"
    });    
     var wp4 = new Waypoint({
        element: document.getElementsByClassName("js--wp-4")[0],
        handler: function() {            
            this.element.classList.add("animated", "pulse");
        },
        offset: "50%"
    });

    // Google Maps
    // Lisbon
    var lat = 38.7309678;
    var lng = -9.1526506;    
    var pointLat = 38.7255883;
    var pointLng = -9.1398226;
             
    var map = new GMaps({
        div: "map",
        lat: lat, 
        lng: lng,
        zoom: 12
    });
    
    var center = map.getCenter();
    
    map.addMarker({
        lat: pointLat, 
        lng: pointLng,
        title: "Lisbon",
        infoWindow: {
            content: "<p>Our Lisbon HQ</p>"
        }        
    });    

    
})(window, document);