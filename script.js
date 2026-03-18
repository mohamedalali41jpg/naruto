const characters = [
    // --- ÉQUIPE 7 & DIRIGEANTS ---
    { name: "Naruto Uzumaki", village: "Konoha", image: "naruto.jpg", quote: "Je ne reviens jamais sur ma parole !", jutsus: "Rasengan, Multi-Clonage", story: "<p>Hôte de Kyûbi, il a surmonté la solitude pour devenir le héros du village et le 7ème Hokage.</p>" },
    { name: "Sasuke Uchiwa", village: "Konoha", image: "sasuke.jpg", quote: "Mon rêve est dans le passé.", jutsus: "Chidori, Amaterasu", story: "<p>Survivant de son clan, il a cherché la vengeance avant de revenir protéger Konoha dans l'ombre.</p>" },
    { name: "Sakura Haruno", village: "Konoha", image: "sakura.jpg", quote: "Je vous protégerai tous les deux !", jutsus: "Force Herculéenne, Soins", story: "<p>Élève de Tsunade, elle est devenue la plus grande ninja médicale de sa génération.</p>" },
    { name: "Kakashi Hatake", village: "Konoha", image: "kakashi.jpg", quote: "Ceux qui abandonnent leurs amis sont des déchets.", jutsus: "Raikiri, Kamui", story: "<p>Le Ninja Copieur au passé tragique, devenu le 6ème Hokage.</p>" },
    { name: "Yamato", village: "Konoha", image: "yamato.jpg", quote: "Je préfère la méthode douce...", jutsus: "Mokuton (Bois)", story: "<p>Membre de l'ANBU, il est l'un des rares à maîtriser l'élément Bois du Premier Hokage.</p>" },
    { name: "Saï", village: "Konoha", image: "sai.jpg", quote: "Les sourires facilitent les relations.", jutsus: "Toiles aux Monstres Fantomatiques", story: "<p>Ancien membre de la Racine dénué d'émotions, il réapprend à vivre grâce à l'Équipe 7.</p>" },

    // --- ÉQUIPE 8 ---
    { name: "Hinata Hyûga", village: "Konoha", image: "hinata.jpg", quote: "Je n'abandonnerai plus !", jutsus: "Byakugan, Poing Souple", story: "<p>Héritière timide du clan Hyûga, elle puise sa force dans son amour pour Naruto.</p>" },
    { name: "Kiba Inuzuka", village: "Konoha", image: "kiba.jpg", quote: "Allons-y, Akamaru !", jutsus: "Morsure de l'Homme-Bête", story: "<p>Ninja au sang chaud qui combat toujours avec son fidèle chien ninja Akamaru.</p>" },
    { name: "Shino Aburame", village: "Konoha", image: "shino.jpg", quote: "Même les insectes ont une âme.", jutsus: "Manipulation des Insectes", story: "<p>Ninja silencieux et analytique dont le corps sert de nid à des insectes dévoreurs de chakra.</p>" },
    { name: "Kurenaï Yûhi", village: "Konoha", image: "kurenai.jpg", quote: "Une fleur s'épanouit toujours.", jutsus: "Illusion Démoniaque", story: "<p>Maître en Genjutsu (illusions) et figure maternelle pour Hinata.</p>" },

    // --- ÉQUIPE 10 ---
    { name: "Shikamaru Nara", village: "Konoha", image: "shikamaru.jpg", quote: "Quelle galère...", jutsus: "Manipulation des Ombres", story: "<p>Génie paresseux avec un QI de 200, il devient le grand stratège de l'Alliance Shinobi.</p>" },
    { name: "Ino Yamanaka", village: "Konoha", image: "ino.jpg", quote: "Une fleur éclot toujours.", jutsus: "Transposition", story: "<p>Experte en télépathie et contrôle mental, elle est vitale pour la communication en temps de guerre.</p>" },
    { name: "Chôji Akimichi", village: "Konoha", image: "choji.jpg", quote: "Je ne suis pas gros !", jutsus: "Décuplement, Mode Papillon", story: "<p>Un grand cœur doté d'une force de frappe colossale lorsqu'il convertit ses calories en chakra.</p>" },
    { name: "Asuma Sarutobi", village: "Konoha", image: "asuma.jpg", quote: "Protège le Roi.", jutsus: "Lames de Chakra (Vent)", story: "<p>Fils du 3ème Hokage. Sa mort tragique a poussé Shikamaru à devenir un adulte responsable.</p>" },

    // --- ÉQUIPE 9 ---
    { name: "Rock Lee", village: "Konoha", image: "lee.jpg", quote: "L'effort bat le talent !", jutsus: "Ouverture des Portes, Lotus", story: "<p>Incapable d'utiliser la magie ninja, il est devenu un monstre du corps-à-corps à force d'entraînement.</p>" },
    { name: "Neji Hyûga", village: "Konoha", image: "neji.jpg", quote: "Le destin est scellé.", jutsus: "Byakugan, Tourbillon Divin", story: "<p>Génie de la branche secondaire de sa famille, il se sacrifie lors de la Grande Guerre pour protéger Naruto.</p>" },
    { name: "Tenten", village: "Konoha", image: "tenten.jpg", quote: "Je ne raterai pas ma cible.", jutsus: "Invocation d'Armes", story: "<p>Spécialiste absolue dans le maniement de toutes les armes blanches et parchemins explosifs.</p>" },
    { name: "Gaï Maito", village: "Konoha", image: "gai.jpg", quote: "La fougue de la jeunesse !", jutsus: "Les 8 Portes Célestes", story: "<p>Le rival de Kakashi. Il a failli tuer Madara Uchiwa à lui seul en ouvrant la 8ème porte de la mort.</p>" },

    // --- LES HOKAGE ---
    { name: "Hashirama Senju", village: "Konoha", image: "hashirama.jpg", quote: "Protégez le village !", jutsus: "Mokuton, Mode Ermite", story: "<p>Le Premier Hokage et Dieu des Shinobi. Il a fondé Konoha avec Madara pour instaurer la paix.</p>" },
    { name: "Tobirama Senju", village: "Konoha", image: "tobirama.jpg", quote: "La volonté du Feu...", jutsus: "Suiton, Edo Tensei, Multi-Clonage", story: "<p>Le 2ème Hokage. Un pragmatique qui a inventé la majorité des techniques interdites de Konoha.</p>" },
    { name: "Hiruzen Sarutobi", village: "Konoha", image: "hiruzen.jpg", quote: "Konoha est ma famille.", jutsus: "Maîtrise des 5 Éléments", story: "<p>Le 3ème Hokage. Surnommé le Professeur, il a formé les Sannin légendaires.</p>" },
    { name: "Minato Namikaze", village: "Konoha", image: "minato.jpg", quote: "Je protégerai mon fils.", jutsus: "Dieu du Tonnerre Volant, Rasengan", story: "<p>L'Éclair Jaune de Konoha. Il a sacrifié sa vie pour sceller Kyûbi dans son fils, Naruto.</p>" },
    { name: "Danzô Shimura", village: "Konoha", image: "danzo.jpg", quote: "Je suis les ténèbres de Konoha.", jutsus: "Izanagi, Mokuton", story: "<p>Chef de l'organisation secrète Racine. Il commettait les pires atrocités en pensant protéger le village.</p>" },

    // --- LES SANNIN & OTO ---
    { name: "Jiraya", village: "Konoha", image: "jiraya.jpg", quote: "L'Ermite des Crapauds !", jutsus: "Rasengan, Invocation", story: "<p>Ninja voyageur et écrivain. Il a passé sa vie à chercher l'élu de la prophétie pour amener la paix.</p>" },
    { name: "Tsunade", village: "Konoha", image: "tsunade.jpg", quote: "Je suis la 5ème Hokage !", jutsus: "Création et Renouveau", story: "<p>La meilleure ninja médicale du monde. Elle a vaincu son hématophobie pour diriger le village.</p>" },
    { name: "Orochimaru", village: "Oto", image: "orochimaru.jpg", quote: "Je veux tous les jutsus.", jutsus: "Edo Tensei, Serpent Blanc", story: "<p>Génie obsédé par l'immortalité. Il a assassiné le 3ème Hokage et manipulé Sasuke.</p>" },
    { name: "Kabuto Yakushi", village: "Oto", image: "kabuto.jpg", quote: "Je me suis surpassé.", jutsus: "Edo Tensei, Mode Ermite", story: "<p>Ancien espion devenu l'instigateur majeur de la 4ème Grande Guerre Ninja après la mort d'Orochimaru.</p>" },
    
    // --- L'AKATSUKI ---
    { name: "Pain (Nagato)", village: "Akatsuki", image: "pain.jpg", quote: "Connaissez la douleur.", jutsus: "Rinnegan, Répulsion Céleste", story: "<p>Leader apparent de l'Akatsuki. Il voulait imposer la paix mondiale par la souffrance absolue.</p>" },
    { name: "Konan", village: "Akatsuki", image: "konan.jpg", quote: "Je suis l'Ange de Dieu.", jutsus: "Danse des Shikigami (Papier)", story: "<p>Amie d'enfance de Nagato, elle transforme son corps en papier tranchant et explosif.</p>" },
    { name: "Itachi Uchiwa", village: "Akatsuki", image: "itachi.jpg", quote: "Pardonne-moi, Sasuke...", jutsus: "Amaterasu, Susanoo, Tsukuyomi", story: "<p>Il a massacré son clan pour éviter une guerre civile, vivant comme un traître pour protéger son frère.</p>" },
    { name: "Kisame Hoshigaki", village: "Akatsuki", image: "kisame.jpg", quote: "Je suis le Monstre de Kiri.", jutsus: "Suiton, Épée Samehada", story: "<p>Doté d'une réserve de chakra colossale, il absorbait l'énergie de ses ennemis avec son épée vivante.</p>" },
    { name: "Deidara", village: "Akatsuki", image: "deidara.jpg", quote: "L'art est une explosion !", jutsus: "Argile Explosive (C4)", story: "<p>Artiste terroriste originaire d'Iwa. Il s'est fait exploser pour tenter de tuer Sasuke Uchiwa.</p>" },
    { name: "Sasori", village: "Akatsuki", image: "sasori.jpg", quote: "L'art est éternel.", jutsus: "Marionnettes Humaines", story: "<p>Il a transformé son propre corps en marionnette et contrôlait secrètement le village de Suna.</p>" },
    { name: "Hidan", village: "Akatsuki", image: "hidan.jpg", quote: "Que le dieu Jashin te punisse !", jutsus: "Vaudou, Immortalité", story: "<p>Fanatique religieux immortel. Il a été enterré vivant et démembré par Shikamaru.</p>" },
    { name: "Kakuzu", village: "Akatsuki", image: "kakuzu.jpg", quote: "Seul l'argent compte.", jutsus: "Vol de Cœurs, 5 Éléments", story: "<p>Chasseur de primes centenaire de l'Akatsuki qui prolongeait sa vie en volant les cœurs de ses victimes.</p>" },
    { name: "Obito Uchiwa", village: "Akatsuki", image: "obito.jpg", quote: "Ce monde est un enfer.", jutsus: "Kamui, Izanagi, Rinnegan", story: "<p>Ancien ami de Kakashi présumé mort. Manipulé par Madara, il a déclenché la 4ème Grande Guerre Ninja.</p>" },
    { name: "Zetsu", village: "Akatsuki", image: "zetsu.jpg", quote: "La volonté de Kaguya.", jutsus: "Assimilation de l'environnement", story: "<p>L'espion ultime de l'Akatsuki. La partie noire était en réalité la manifestation de la volonté de Kaguya.</p>" },

    // --- SUNA (Le Sable) ---
    { name: "Gaara", village: "Suna", image: "gaara.jpg", quote: "Je suis le Kazekage.", jutsus: "Manipulation du Sable", story: "<p>Ancien monstre sanguinaire devenu le 5ème Kazekage grâce à l'amitié de Naruto.</p>" },
    { name: "Temari", village: "Suna", image: "temari.jpg", quote: "Un coup d'éventail !", jutsus: "Maîtrise du Vent", story: "<p>Kunoichi impitoyable de Suna et sœur de Gaara. Elle finit par épouser Shikamaru.</p>" },
    { name: "Kankurô", village: "Suna", image: "kankuro.jpg", quote: "Mes marionnettes sont prêtes.", jutsus: "Technique des Marionnettes", story: "<p>Stratège et garde du corps du Kazekage. Il utilise des pantins mortels bourrés de poison.</p>" },
    { name: "Chiyo", village: "Suna", image: "chiyo.jpg", quote: "La nouvelle génération...", jutsus: "Réincarnation, Les 10 Pantins", story: "<p>Ancienne conseillère de Suna. Elle a sacrifié sa propre vie pour ressusciter Gaara.</p>" },

    // --- KIRI (Le Brouillard) ---
    { name: "Meï Terumî", village: "Kiri", image: "mei.jpg", quote: "Un baiser de la mort.", jutsus: "Yoton (Lave), Futton (Vapeur)", story: "<p>La 5ème Mizukage. Elle a mis fin au règne de terreur du 'Village du Brouillard Sanglant'.</p>" },
    { name: "Zabuza Momochi", village: "Kiri", image: "zabuza.jpg", quote: "Un ninja n'est qu'un outil.", jutsus: "Camouflage dans la Brume", story: "<p>L'un des 7 Épéistes de la Brume. Premier grand adversaire de Naruto, mort en protégeant Haku.</p>" },
    { name: "Haku", village: "Kiri", image: "haku.jpg", quote: "Protéger la personne qui vous est chère.", jutsus: "Hyôton (Miroirs de Glace)", story: "<p>Enfant recueilli par Zabuza, doté d'un pouvoir héréditaire sur la glace. Son dévouement était absolu.</p>" },

    // --- KUMO (La Foudre) ---
    { name: "A (4ème Raikage)", village: "Kumo", image: "raikage.jpg", quote: "Je vais t'écraser !", jutsus: "Armure de Foudre", story: "<p>Colosse extrêmement rapide et brutal. Il est le commandant en chef de l'Alliance Shinobi.</p>" },
    { name: "Killer Bee", village: "Kumo", image: "bee.jpg", quote: "Yo ! Mon flow est parfait !", jutsus: "Hachibi, Danse des 7 Sabres", story: "<p>L'hôte du démon à 8 queues. Ninja exceptionnel qui passe son temps à rapper.</p>" },
    { name: "Darui", village: "Kumo", image: "darui.jpg", quote: "C'est d'un ennui...", jutsus: "Ranton (Laser), Panthère Noire", story: "<p>Bras droit du Raikage. Sous ses airs fatigués, c'est un combattant redoutable et le futur 5ème Raikage.</p>" },

    // --- IWA (La Roche) ---
    { name: "Ônoki", village: "Iwa", image: "onoki.jpg", quote: "La volonté de la pierre !", jutsus: "Jinton (Poussière), Alourdissement", story: "<p>Le 3ème Tsuchikage. Malgré son âge et ses problèmes de dos, il peut désintégrer ses cibles.</p>" },
    { name: "Kurotsuchi", village: "Iwa", image: "kurotsuchi.jpg", quote: "On ne rigole plus.", jutsus: "Yoton (Lave/Chaux)", story: "<p>Petite-fille d'Ônoki. Elle devient la 4ème Tsuchikage après la guerre.</p>" },

    // --- HEBI / TAKA (Équipe Sasuke / OTO) ---
    { name: "Suigetsu Hôzuki", village: "Oto", image: "suigetsu.jpg", quote: "Je veux toutes les épées.", jutsus: "Liquéfaction", story: "<p>Expérience d'Orochimaru. Il peut transformer son corps en eau et manie l'épée de Zabuza.</p>" },
    { name: "Karin Uzumaki", village: "Oto", image: "karin.jpg", quote: "Sasuke... !!", jutsus: "Chaînes d'Adamantine, Soin", story: "<p>Détectrice de chakra exceptionnelle. Ses alliés peuvent se soigner en la mordant.</p>" },
    { name: "Jûgo", village: "Oto", image: "jugo.jpg", quote: "Je vais tous vous tuer !", jutsus: "Transformation Sage, Marque Maudite", story: "<p>Il est l'origine de la Marque Maudite d'Orochimaru. Pacifique de nature, il souffre de pulsions meurtrières.</p>" }
];

// --- MOTEUR DU SITE ---

const grid = document.getElementById('character-grid');
const searchInput = document.getElementById('search-bar');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('character-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');

function displayCharacters(charsToDisplay) {
    grid.innerHTML = ''; 
    
    if (charsToDisplay.length === 0) {
        grid.innerHTML = '<h3 style="color: white; text-align: center; grid-column: 1/-1;">Aucun ninja trouvé...</h3>';
        return;
    }

    charsToDisplay.forEach(char => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.onclick = () => openModal(char);
        
        card.innerHTML = `
            <img src="${char.image}" alt="${char.name}" class="card-image" onerror="this.src='https://placehold.co/300x300/2a2a2a/ff7f00?text=Image+Manquante'">
            <div class="card-content">
                <h2>${char.name}</h2>
                <p>Village / Faction : <br><strong>${char.village}</strong></p>
            </div>
        `;
        grid.appendChild(card);
    });
}

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-village="Tous"]').classList.add('active');

    const filtered = characters.filter(char => 
        char.name.toLowerCase().includes(searchTerm) || 
        char.village.toLowerCase().includes(searchTerm)
    );
    displayCharacters(filtered);
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
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
    document.body.style.overflow = "hidden"; 
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

displayCharacters(characters);
