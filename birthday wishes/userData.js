// This file will handle saving and loading user data (name and theme) using localStorage.
function saveUserData(name, theme) {
    localStorage.setItem('userName', name);
    localStorage.setItem('userTheme', theme);
}

function loadUserData() {
    return {
        name: localStorage.getItem('userName') || '',
        theme: localStorage.getItem('userTheme') || 'default',
    };
}

function clearUserData() {
    localStorage.removeItem('userName');
    localStorage.removeItem('userTheme');
}

// Export functions for use in index.html
window.saveUserData = saveUserData;
window.loadUserData = loadUserData;
window.clearUserData = clearUserData;
