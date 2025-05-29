const form = document.querySelector('.form');
// Select the save button
const button = document.querySelector(".save_button")
// Select the input box
const siteNameInput = document.querySelector("[name='site_name']")
const urlInput = document.querySelector("[name='url']")
// Select the <div> with class="bookmarks"
const bookmarksContainer = document.querySelector(".bookmarks")

let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

// listen for form submit
button.addEventListener("click", function(e){
    // Prevent the page from reloading when submitting the form
    e.preventDefault();
    const siteName = siteNameInput.value.trim();
    const url = urlInput.value.trim();

    // Check if the URL already exists
    const alreadyExists = bookmarks.some(bookmark => bookmark.url === url);
    if (alreadyExists) {
        alert('This URL is already bookmarked.');
        return;
    }

    // If the URL doesn't start with http:// or https://, add https:// by default
    if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
    }

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

    bookmarks.forEach((bookmark) => {
        const bookmarkElement = document.createElement('div');
        bookmarkDiv.classList.add('bookmark');

        bookmarkDiv.innerHTML = `
        <p><strong>${bookmark.Name}</strong></p>
        <a href="${bookmark.url}" target="_blank">${bookmark.url}</a>
        <button class="delete-btn" data-url="${bookmark.url}">Delete</button>
        `;
        bookmarksContainer.appendChild(bookmarkDiv);
  });
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const urlToDelete = this.dataset.url;
        deleteBookmark(urlToDelete);
    });
  });
}
function deleteBookmark(url) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks = bookmarks.filter(bookmark => bookmark.url != url);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    displayBookmarks();
}
