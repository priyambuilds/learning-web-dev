const form = document.querySelector('.form');
// Select the save button
const button = document.querySelector(".save_button")
// Select the input box
const siteNameInput = document.querySelector("[name='site_name']")
const urlInput = document.querySelector("[name='url']")
// Select the <div> with class="bookmarks"
const bookmarksContainer = document.querySelector(".bookmarks")

// listen for form submit
button.addEventListener("click", function(e){
    // Prevent the page from reloading when submitting the form
    e.preventDefault();
    const siteName = siteNameInput.value.trim();
    const url = urlInput.value.trim();
    let patternURL = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

    if (!siteName || !url) {
        alert('Please enter both name and URL.');
        return;
    }

    // Step 3: Save the bookmark (we'll define this soon)
    saveBookmark(siteName, url);
    
    // Step 4: Reset the form
    form.reset();
})

function savekookmark(Name, url) {
    const newBookmark = {Name , url}
    // Get existing bookmarks or initialize as an empty array
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    // Add new bookmark
    bookmarks.push(newBookmark);
    // Save updated array back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    // Display the bookmarks
    displayBookmarks();
}

function displayBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    // clear the bookmarks container
    bookmarksContainer.innerHTML = '';

    // 
}