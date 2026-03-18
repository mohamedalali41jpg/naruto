:root {
    --primary-color: #ff7f00;
    --secondary-color: #b22222;
    --bg-color: #0a0a0a;
    --card-bg: #1a1a1a;
    --text-light: #e0e0e0;
}

* { box-sizing: border-box; }

body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-light);
    line-height: 1.6;
}

header {
    background: linear-gradient(to bottom, #111, #050505);
    text-align: center;
    padding: 2rem 1rem;
    border-bottom: 3px solid var(--primary-color);
    position: sticky;
    top: 0;
    z-index: 100;
}

header .logo {
    font-family: 'Shojumaru', cursive;
    font-size: 3rem;
    color: var(--primary-color);
    text-shadow: 2px 2px 4px #000;
    margin-bottom: 0.5rem;
}

.search-container { margin: 1.5rem 0; }

#search-bar {
    padding: 12px 20px;
    width: 80%;
    max-width: 500px;
    border-radius: 25px;
    border: 2px solid #333;
    background-color: #222;
    color: white;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
}

#search-bar:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 10px rgba(255, 127, 0, 0.5);
}

.village-filters {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 1rem;
}

.filter-btn {
    background-color: #222;
    color: white;
    border: 1px solid #444;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.filter-btn:hover { background-color: #444; }

.filter-btn.active {
    background-color: var(--primary-color);
    color: #000;
    border-color: var(--primary-color);
}

main {
    max-width: 1400px;
    margin: 3rem auto;
    padding: 0 1.5rem;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 2rem;
}

.character-card {
    background-color: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
    transition: all 0.3s ease;
    border: 1px solid #333;
    display: flex;
    flex-direction: column;
}

.character-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(255, 127, 0, 0.3);
    border-color: var(--primary-color);
}

.card-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    background-color: #2a2a2a;
}

.card-content {
    padding: 1.5rem;
    text-align: center;
    flex-grow: 1;
}

.card-content h2 {
    margin: 0 0 0.5rem 0;
    color: var(--primary-color);
    font-family: 'Shojumaru', cursive;
    font-size: 1.3rem;
}

.modal {
    display: none; 
    position: fixed;
    z-index: 1000;
    left: 0; top: 0; width: 100%; height: 100%;
    background-color: rgba(0,0,0,0.85);
    backdrop-filter: blur(8px);
    overflow-y: auto;
}

.modal-content {
    background-color: var(--card-bg);
    margin: 5% auto;
    padding: 3rem;
    border: 2px solid var(--primary-color);
    border-radius: 15px;
    width: 90%;
    max-width: 800px;
    position: relative;
    animation: zoomIn 0.3s ease;
}

@keyframes zoomIn {
    from {transform: scale(0.9); opacity: 0;}
    to {transform: scale(1); opacity: 1;}
}

.close-btn {
    color: #fff; position: absolute; top: 10px; right: 20px;
    font-size: 35px; font-weight: bold; cursor: pointer;
}
.close-btn:hover { color: var(--primary-color); }

.modal-header { display: flex; gap: 2rem; align-items: center; margin-bottom: 2rem; }
.modal-header img { width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 3px solid var(--primary-color); }
.modal-title h2 { font-family: 'Shojumaru', cursive; color: var(--primary-color); font-size: 2.2rem; margin: 0; }
.village-badge { display: inline-block; background: #333; padding: 5px 15px; border-radius: 15px; margin-top: 10px; }
.quote { font-style: italic; color: #aaa; border-left: 4px solid var(--primary-color); padding-left: 1rem; margin-bottom: 1.5rem; }
.jutsus { background: #111; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; }
.biography { text-align: justify; }

@media (max-width: 600px) {
    .modal-header { flex-direction: column; text-align: center; }
}

footer { text-align: center; padding: 2rem; background-color: #050505; color: #555; }
