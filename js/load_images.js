// Path to your manifest file  
const textpostPath = '/assets/img/screenshots/posts/'
const manifestPath = '/assets/manifest/textposts.json';  
 
// Fetch the manifest file  
fetch(manifestPath)  
    .then(response => {  
        if (!response.ok) throw new Error('Failed to load manifest');  
        return response.json(); // Parse JSON  
    })  
    .then(imageFilenames => {  
        const gallery = document.getElementById('img-wrapper');  
 
        // Loop through filenames and load images  
        imageFilenames.forEach(filename => {  
            const img = document.createElement('img');  
            img.src = `${textpostPath}${filename}`; // Path to image  
            img.alt = filename.replace(/\.[^/.]+$/, ""); // Remove extension for alt text  
            gallery.appendChild(img);  
        });  
    })  
    .catch(error => console.error('Error loading images:', error)); 