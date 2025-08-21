function performSearch(event) {
    event.preventDefault();
    
    const searchTerm = document.querySelector('.search-input').value.toLowerCase();
    
    if (searchTerm === 'login') {
        window.location.href = 'login.html';
    } 
    else if (searchTerm === 'signup') {
        window.location.href = 'signup.html';
    }
    else if (searchTerm === 'forget' || searchTerm === 'forgot' || searchTerm === 'forgotpass') {
        window.location.href = 'forgotpass.html';
    }
    else if (searchTerm === 'home') {
        window.location.href = 'home.html';
    }
    else if (searchTerm === 'category') {
        window.location.href = '#category';
    }
    else if (searchTerm === 'product' || searchTerm === 'products') {
        window.location.href = '#popular-product';
    }
    else if (searchTerm === 'offers') {
        window.location.href = '#offers';
    }
    else if (searchTerm === 'feedback') {
        window.location.href = 'feedback.html';
    }
    else if (searchTerm === 'apple' || searchTerm === 'chili' || searchTerm === 'onion' || searchTerm === 'potato' || searchTerm === 'garlic' || searchTerm === 'tomato') {
        window.location.href = '#popular-product';
    }
    else if (searchTerm === 'orange' || searchTerm === 'lemon' || searchTerm === 'avodaco' || searchTerm === 'carrot' || searchTerm === 'cabbage' || searchTerm === 'watermelon') {
        window.location.href = '#offers';
    }
    else if (searchTerm === 'fruits' || searchTerm === 'medicine' || searchTerm === 'baby' || searchTerm === 'stationary' || searchTerm === 'beauty' || searchTerm === 'gardening') {
        window.location.href = '#category';
    }
     else {
        alert('Invalid search term. please search login or signup or any specified term');
    }
    const searchInput = document.querySelector('.search-input');
    const searchSuggestions = document.getElementById('search-suggestions');
    
    searchInput.addEventListener('input', function() {
        const inputValue = this.value.toLowerCase();
       
        if (inputValue.startsWith('l')) {
            searchSuggestions.innerHTML = '<div><a href="login.html"><strong>login<strong> </a></div>';
        } else if (inputValue.startsWith('s')) {
            searchSuggestions.innerHTML = '<div><a href="signup.html"><strong>signup<strong> </a></div>';
        } else if (inputValue.startsWith('p')) {
            searchSuggestions.innerHTML = '<div><a href="#popular-product"><strong>product<strong> </a></div>';
        } else if (inputValue.startsWith('o') ) {
            searchSuggestions.innerHTML = '<div><a href="#offers"><strong>offers<strong> </a></div>';
        } else if (inputValue.startsWith('f')) {
            searchSuggestions.innerHTML = '<div><a href="feedback.html"><strong>feedback<strong> </a></div>';
        } 
        else if (inputValue.startsWith('h')) {
            searchSuggestions.innerHTML = '<div><a href="home.html"><strong>home<strong> </a></div>';
        } else if (inputValue.startsWith('c')) { 
            searchSuggestions.innerHTML = '<div><a href="#category"><strong>category<strong> </a></div>';
        } else if (inputValue.startsWith('a')) {
            searchSuggestions.innerHTML = '<div><a href="#popular-product"><strong>apple<strong> </a></div>';
        } 
        else if (inputValue.startsWith('g')) {
            searchSuggestions.innerHTML = '<div><a href="#popular-product"><strong>garlic<strong> </a></div>';
        } else if (inputValue.startsWith('w')) {
            searchSuggestions.innerHTML = '<div><a href="#offers"><strong>watermelon<strong> </a></div>';
        } 
        else {
            searchSuggestions.innerHTML = ''; 
        }
    });}