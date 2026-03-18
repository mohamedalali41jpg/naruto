// La Base de données des ninjas
const characters = [
    // --- KONOHA ---
    {
        name: "Naruto Uzumaki",
        village: "Konoha",
        image: "naruto.jpg", // Le nom exact de l'image que tu vas uploader sur GitHub
        quote: "Je ne reviens jamais sur ma parole. C'est ça, mon nindo !",
        jutsus: "Rasengan, Multi-Clonage, Mode Ermite, Orbe Shuriken",
        story: "<p>Hôte de Kyûbi, rejeté par son village dans son enfance. À force de persévérance et de travail acharné, il est parvenu à se faire accepter de tous, à sauver le monde ninja et à réaliser son rêve absolu : devenir le Septième Hokage.</p>"
    },
    {
        name: "Sasuke Uchiwa",
        village: "Konoha",
        image: "sasuke.jpg",
        quote: "Mon rêve ne se trouve pas dans le futur, mais dans le passé.",
        jutsus: "Chidori, Amaterasu, Susanoo, Rinnegan",
        story: "<p>Survivant du massacre de son clan, Sasuke a sombré dans la haine pour se venger de son frère Itachi. Après un long voyage dans les ténèbres, il est ramené à la lumière par Naruto et protège désormais Konoha depuis l'ombre.</p>"
    },
    {
        name: "Kakashi Hatake",
        village: "Konoha",
        image: "kakashi.jpg",
        quote: "Ceux qui abandonnent leurs amis sont pires que des déchets.",
        jutsus: "Raikiri, Kamui, Multi-Clonage",
        story: "<p>Le célèbre Ninja Copieur. Ancien membre de l'ANBU au passé tragique, il devient le mentor de l'Équipe 7. Son intelligence et son Sharingan l'ont mené à devenir le Sixième Hokage après la Grande Guerre.</p>"
    },
    {
        name: "Sakura Haruno",
        village: "Konoha",
        image: "sakura.jpg",
        quote: "Cette fois, c'est vous qui regarderez mon dos !",
        jutsus: "Force herculéenne, Ninjutsu Médical, Création et Renouveau",
        story: "<p>Élève de Tsunade, Sakura est passée d'une jeune fille fragile à la plus grande ninja médicale de sa génération (Kunoichi). Sa force physique titanesque et sa maîtrise parfaite du chakra font d'elle un atout indispensable.</p>"
    },
    {
        name: "Shikamaru Nara",
        village: "Konoha",
        image: "shikamaru.jpg",
        quote: "Quelle galère...",
        jutsus: "Manipulation des Ombres, Étreinte Mortelle de l'Ombre",
        story: "<p>Un génie doté d'un QI supérieur à 200, mais incroyablement paresseux. Malgré son manque de motivation initial, il devient le stratège le plus brillant de l'Alliance Shinobi et le conseiller personnel du Hokage.</p>"
    },
    {
        name: "Minato Namikaze",
        village: "Konoha",
        image: "minato.jpg",
        quote: "C'est le devoir d'un père de protéger son fils.",
        jutsus: "L'Éclair Jaune, Dieu du Tonnerre Volant, Rasengan",
        story: "<p>Le Quatrième Hokage et le père de Naruto. Surnommé l'Éclair Jaune de Konoha pour sa vitesse inégalée. Il a sacrifié sa vie avec sa femme Kushina pour sceller Kyûbi dans son fils nouveau-né.</p>"
    },

    // --- SUNA ---
    {
        name: "Gaara",
        village: "Suna",
        image: "gaara.jpg",
        quote: "C'est parce qu'on a connu la souffrance qu'on peut être bon.",
        jutsus: "Sarcophage de Sable, Tombeau du Désert",
        story: "<p>Ancien Jinchūriki d'Ichibi, Gaara était une machine à tuer dénuée de sentiments. Sa rencontre et son combat contre Naruto ont transformé son cœur. Il est devenu le Cinquième Kazekage très jeune, respecté et aimé de son peuple.</p>"
    },
    {
        name: "Temari",
        village: "Suna",
        image: "temari.jpg",
        quote: "Ne sous-estime pas les femmes de Suna.",
        jutsus: "Invocation (Kamaitachi), Lame du Vent",
        story: "<p>Sœur aînée de Gaara, elle combat avec un éventail géant capable de générer des tempêtes dévastatrices. Elle est une fine stratège et deviendra plus tard l'épouse de Shikamaru.</p>"
    },

    // --- AKATSUKI ---
    {
        name: "Itachi Uchiwa",
        village: "Akatsuki", // On le met dans Akatsuki pour le filtre
        image: "itachi.jpg",
        quote: "Le pardon est une chose difficile, mais c'est l'essence de l'amour.",
        jutsus: "Tsukuyomi, Amaterasu, Susanoo, Izanami",
        story: "<p>Prodige du clan Uchiwa. Il a massacré sa propre famille pour éviter une guerre civile à Konoha, acceptant d'endosser le rôle du traître haï par son propre frère pour maintenir la paix. Un véritable héros de l'ombre.</p>"
    },
    {
        name: "Pain (Nagato)",
        village: "Akatsuki",
        image: "pain.jpg",
        quote: "Ceux qui ne comprennent pas la douleur ne peuvent pas comprendre la véritable paix.",
        jutsus: "Répulsion Céleste (Shinra Tensei), Attraction Céleste",
        story: "<p>Leader officiel de l'Akatsuki. Manipulé par Obito, Nagato croyait que seule la souffrance absolue imposée au monde permettrait d'instaurer une paix durable. Il a détruit Konoha avant d'être convaincu par Naruto.</p>"
    },
    {
        name: "Deidara",
        village: "Akatsuki",
        image: "deidara.jpg",
        quote: "L'art est une explosion !",
        jutsus: "Argile Explosive (C1 à C4, C0)",
        story: "<p>Un ninja déserteur d'Iwa obsédé par l'art éphémère. Il façonne de l'argile explosive avec les bouches situées dans ses paumes. Il a livré des combats mémorables contre Gaara et Sasuke.</p>"
    },

    // --- KIRI ---
    {
        name: "Zabuza Momochi",
        village: "Kiri",
        image: "zabuza.jpg",
        quote: "Les ninjas ne sont que des outils, utilisés puis jetés.",
        jutsus: "Camouflage dans la Brume, Dragon Aqueux",
        story: "<p>Le Démon de Kiri. Épéiste légendaire portant Kubikiribōchō. Il fut le premier grand antagoniste de l'Équipe 7. Sous son extérieur impitoyable se cachait un véritable attachement pour son jeune partenaire, Haku.</p>"
    },
    {
        name: "Kisame Hoshigaki",
        village: "Kiri",
        image: "kisame.jpg",
        quote: "Un monde où règnent le mensonge et la tromperie ne mérite pas d'exister.",
        jutsus: "Requin Élémentaire d'Eau, Prison Aqueuse",
        story: "<p>Le Monstre du Brouillard Caché et partenaire d'Itachi dans l'Akatsuki. Doté d'une réserve de chakra monstrueuse, il fusionne avec son épée vivante Samehada. Il est resté loyal à ses convictions jusqu'à la mort.</p>"
    },

    // --- KUMO ---
    {
        name: "Killer Bee",
        village: "Kumo",
        image: "killerbee.jpg",
        quote: "Yo, écoute ça mec, mon flow est parfait, comme ma lame, il te tranche net !",
        jutsus: "Mode Chakra de Hachibi, Lariat, Danse des 7 Sabres",
        story: "<p>L'hôte du démon à huit queues (Hachibi) et frère adoptif du Raikage. Ninja extrêmement puissant qui passe son temps à chercher de nouvelles rimes pour son rap. Il a appris à Naruto comment contrôler son démon.</p>"
    },

    // --- IWA ---
    {
        name: "Onoki",
        village: "Iwa",
        image: "onoki.jpg",
        quote: "Je vais vous montrer la volonté de la pierre !",
        jutsus: "Libération de la Poussière (Jinton), Alourdissement",
        story: "<p>Le Troisième Tsuchikage. Un vieillard têtu au dos fragile, mais l'un des ninjas les plus redoutables de l'histoire grâce à sa capacité Jinton, capable de réduire n'importe quoi en poussière au niveau moléculaire.</p>"
    }
];

// --- LOGIQUE DU SITE ---

const grid = document.getElementById('character-grid');
const searchInput = document.getElementById('search-bar');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('character-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');

// 1. Fonction pour afficher les personnages en fonction des filtres
function displayCharacters(charsToDisplay) {
    grid.innerHTML = ''; // On vide la grille
    
    if (charsToDisplay.length === 0) {
        grid.innerHTML = '<h3 style="color: white; text-align: center; grid-column: 1/-1;">Aucun ninja trouvé...</h3>';
        return;
    }

    charsToDisplay.forEach(char => {
        const card = document.createElement('div');
        card.className = 'character-card';
        // On passe l'objet complet à la fonction openModal
        card.onclick = () => openModal(char);
        
        card.innerHTML = `
            <img src="${char.image}" alt="${char.name}" class="card-image" onerror="this.src='https://placehold.co/300x300/2a2a2a/ff7f00?text=Image+Manquante'">
            <div class="card-content">
                <h2>${char.name}</h2>
                <p>Village : <strong>${char.village}</strong></p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 2. Gestion de la Recherche (Texte)
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    // On remet le bouton filtre sur "Tous" quand on cherche
    filterBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-village="Tous"]').classList.add('active');

    const filtered = characters.filter(char => 
        char.name.toLowerCase().includes(searchTerm) || 
        char.village.toLowerCase().includes(searchTerm)
    );
    displayCharacters(filtered);
});

// 3. Gestion des Boutons de Filtrage (Villages)
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Gérer le style visuel des boutons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Vider la barre de recherche
        searchInput.value = '';

        const selectedVillage = btn.getAttribute('data-village');
        
        if (selectedVillage === 'Tous') {
            displayCharacters(characters);
        } else {
            const filtered = characters.filter(char => char.village === selectedVillage);
            displayCharacters(filtered);
        }
    });
});

// 4. Gestion de la Fenêtre Modale (Détails)
function openModal(char) {
    modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${char.image}" alt="${char.name}" onerror="this.src='https://placehold.co/200x200/2a2a2a/ff7f00?text=Ninja'">
            <div class="modal-title">
                <h2>${char.name}</h2>
                <span class="village-badge">${char.village}</span>
            </div>
        </div>
        <div class="quote">"${char.quote}"</div>
        <div class="jutsus">
            <h3 style="color: var(--primary-color); margin-top: 0;">Techniques Phares</h3>
            <p>${char.jutsus}</p>
        </div>
        <div class="biography">
            <h3 style="color: var(--primary-color);">Histoire</h3>
            ${char.story}
        </div>
    `;
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Empêche de scroller la page de fond
}

closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Lancement au démarrage de la page
displayCharacters(characters);
