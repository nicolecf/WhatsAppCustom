// Saves options to chrome.storage
function save_options() {
    
    let urlImage = document.getElementById('basic-url').value;
    let imagePosition = document.getElementById('image-position').value;
    
    chrome.storage.sync.set({
      urlImage: urlImage,
      imagePosition: imagePosition,
    }, function() {
      // Update status to let user know options were saved.
      let status = document.getElementById('status');
      status.textContent = imagePosition;
      setTimeout(function() {
        status.textContent = '';
      }, 30000);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
      urlImage: '',
      imagePosition: 'center'
    }, function(items) {
      document.getElementById('basic-url').value = items.urlImage;
      document.getElementById('image-position').value = items.imagePosition;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);