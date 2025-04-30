

document.addEventListener("DOMContentLoaded", () => {
    const gallerySection = document.getElementById("gallery-section");
    const imagePaths = [
      'images/event.jpeg',
      'images/event2.jpeg',
      'images/event.jpeg',
      'images/event4.jpeg',
      'images/event5.jpeg',
      'images/event6.jpeg',
      'images/event7.jpeg',
      'images/event8.jpeg',
      'images/event9.jpeg',
      'images/event10.jpeg',
      'images/event11.jpeg',
      'images/event12.jpeg',
      'images/event13.jpeg',
      'images/event14.jpeg',
      'images/event15.jpeg',
      'images/event16.jpeg',
      'images/event17.jpeg',
      'images/event18.jpeg',
      'images/event19.jpeg',
      'images/event20.jpeg',
      'images/event21.jpeg',
      'images/event22.jpeg',
      'images/event23.jpeg',
      'images/event24.jpeg',
      'images/event25.jpeg',
      'images/event26.jpeg',
      'images/event27.jpeg',
      'images/event28.jpeg',
      'images/event29.jpeg',
      'images/event30.jpeg'
    
      
    ];
  
    imagePaths.forEach(path => {
      const img = document.createElement('img');
      img.src = path;
      img.alt = 'Church Event';
      img.className = 'gallery-img';
      gallerySection.appendChild(img);
    });
  
    const sermonSection = document.getElementById("sermon-section");
    const sermons = [
      { title: "Faith That Moves Mountains", date: "April 6, 2025", src: "videos/sermon.mp4" },
      { title: "Walking in the Spirit", date: "March 30, 2025", src: "videos/sermon2.mp4" },
      { title: "Overcoming Through Grace", date: "March 23, 2025", src: "videos/sermon3.mp4" }
    ];
  
  
    sermons.forEach(sermon => {
      const wrapper = document.createElement("div");
      wrapper.className = "sermon-item";
  
      const heading = document.createElement("h3");
      heading.textContent = `"${sermon.title}" - ${sermon.date}`;
      
      const video = document.createElement("video");
      video.setAttribute("controls", true);
      video.setAttribute("muted", true);
      video.volume = 0.5;
  
      const source = document.createElement("source");
      source.src = sermon.src;
      source.type = "video/mp4";
  
      video.appendChild(source);
      wrapper.appendChild(heading);
      wrapper.appendChild(video);
      sermonSection.appendChild(wrapper);
      
    });
  });
  