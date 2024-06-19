/* basic.css */

body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #333;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
}


.navbar-menu {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.navbar-menu li {
    margin-left: 20px;
}

.navbar-menu li a {
    color: white;
    text-decoration: none;
}

.navbar-menu li a:hover {
    text-decoration: underline;
}

.content {
    padding-top: 60px; /* Add padding to account for the fixed navbar */
}

section {
    padding: 20px;
    border-bottom: 1px solid #ddd;
}

section h2 {
    margin-top: 0;
}
