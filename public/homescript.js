let imageGallery = document.getElementById("imageGallery");

        let prices = [ "£65","£75","£85","£95","£100","£110","£120","£130","£140","£142","£145","£147","£150","£152","£155","£157","£160","£162",
        "£165","£167","£170","£172","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65",
        "£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65",
        "£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65",
        "£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65","£65" ];

        let paneRanges = {
          "": [1, 103],
          "1": [1, 4],
          "2": [5, 22],
          "3": [23, 53],
          "4": [54, 88],
          "5": [89, 92],
          "6": [93, 102],
          "8": [103, "103"]
        };

        let selectElement=document.getElementById("panefilter");
        let range = paneRanges[selectElement.options[selectElement.selectedIndex].value];

        selectElement.onchange=function(){
           range = paneRanges[selectElement.options[selectElement.selectedIndex].value];
           updateGallery();
        };
    
        function updateGallery(){
        while (imageGallery.firstChild) {
        imageGallery.firstChild.remove();
      }
    
        for (let i = range[0]; i <= range[1]; i++) {
          let imageSrc = "/" + i + ".jpg";
    
          // Create the outer container div
          let imageContainer = document.createElement("div");
          imageContainer.className = "col-6 col-sm-4 col-md-4 col-lg-3 g-mb-30 imageContainer";
    
          // Create the inner div for the hover effect
          let hoverDiv = document.createElement("div");
          hoverDiv.className = "u-block-hover";
    
          // Create the image element
          let imageLink = document.createElement("a");
          imageLink.href = "" + i;
          let image = document.createElement("img");
          image.height = 125;
          image.src = imageSrc;
          image.alt = "Style " + i;
          imageLink.appendChild(image);
          hoverDiv.appendChild(imageLink);
    
          // Create the div for style information
          let infoDiv = document.createElement("div");
          infoDiv.className = "g-px-5";
    
          // Create the heading for style information
          let styleHeading = document.createElement("h6");
          styleHeading.textContent = "Style " + i;
          infoDiv.appendChild(styleHeading);
    

          let priceSpan = document.createElement("span");
          priceSpan.textContent = "From " + prices[i - 1];
         infoDiv.appendChild(priceSpan);
         priceSpan.className= "pricelist"
    
          // Append the elements to the imageContainer
          imageContainer.appendChild(hoverDiv);
          imageContainer.appendChild(infoDiv);
    
          // Append the imageContainer to the imageGallery
          imageGallery.appendChild(imageContainer);
         }
        }
        updateGallery();

        
        let doorGallery = document.getElementById("doorGallery");

    let doorStyles = [
      { style: "Style 1", price: "£300", image: "/door1.jpg" },
      { style: "Style 2", price: "£350", image: "/door2.jpg" },
      { style: "Style 3", price: "£400", image: "/door3.jpg" },
      { style: "Style 4", price: "£450", image: "/door4.jpg" },
      { style: "Style 5", price: "£500", image: "/door5.jpg" },
      { style: "Style 6", price: "£550", image: "/door6.jpg" },
      { style: "Style 7", price: "£600", image: "/door7.jpg" },
      { style: "Style 8", price: "£650", image: "/door8.jpg" },
      { style: "Style 9", price: "£700", image: "/door9.jpg" },
      // Add more door styles here
    ];

    for (let i = 0; i < doorStyles.length; i++) {
      let doorStyle = doorStyles[i];
      let imageSrc = doorStyle.image;

      // Create the outer container div
      let doorContainer = document.createElement("div");
      doorContainer.className = "col-6 col-sm-4 col-md-4 col-lg-3 g-mb-30 doorContainer";

      // Create the inner div for the hover effect
      let hoverDiv = document.createElement("div");
      hoverDiv.className = "u-block-hover";

      // Create the image element
      let imageLink = document.createElement("a");
      imageLink.href = "";
      let image = document.createElement("img");
      image.height = 125;
      image.src = imageSrc;
      image.alt = doorStyle.style;
      imageLink.appendChild(image);
      hoverDiv.appendChild(imageLink);

      // Create the div for style information
      let infoDiv = document.createElement("div");
      infoDiv.className = "g-px-5";

      // Create the heading for style information
      let styleHeading = document.createElement("h6");
      styleHeading.textContent = doorStyle.style;
      infoDiv.appendChild(styleHeading);

      let priceSpan = document.createElement("span");
      priceSpan.textContent = "Price: " + doorStyle.price;
      priceSpan.className= "pricelist"
      infoDiv.appendChild(priceSpan);

      // Append the elements to the doorContainer
      doorContainer.appendChild(hoverDiv);
      doorContainer.appendChild(infoDiv);

      // Append the doorContainer to the doorGallery
      doorGallery.appendChild(doorContainer);
    }


   
    


    document.addEventListener("DOMContentLoaded", function() {
      const currentLocation = window.location.pathname;
      const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
      navLinks.forEach(function(link) {
        const href = link.getAttribute('href');
        const isActive = (currentLocation === href || currentLocation === `/${href}`);
        link.classList.toggle('active', isActive);
      });
    
      // Add active class to parent link if a child link is active
      navLinks.forEach(function(link) {
        if (link.classList.contains('active')) {
          let parentLink = link.closest('.nav-item');
          if (parentLink) {
            parentLink.classList.add('active');
          }
        }
      });
    });
    

