document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        let urlString = window.location.href;
        let currentLocation = urlString.split('/');
        
        currentLocation = currentLocation[currentLocation.length - 1];
        // currentLocation = currentLocation[0].toUpperCase() + currentLocation.slice(1);
        // currentLocation = currentLocation.substr(0, currentLocation.indexOf('.'));
        
        if (document.querySelectorAll(".header > .links > a[href='" + currentLocation + "']")[0] !== undefined) {
            document.querySelectorAll(".header > .links > a[href='" + currentLocation + "']")[0].style.cssText = `font-weight: bold`;        
        }
        // document.querySelectorAll('.header > .links > a[href="' + currentLocation + '"]').forEach(function(item, index){
            // item.style.cssText = `font-weight: bold`;
        // });
    }
}
