// La base de données géante des personnages
const characters = [
    {
        name: "Naruto Uzumaki",
        village: "Konoha",
        image: "https://static.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png",
        quote: "Je ne reviens jamais sur ma parole. C'est ça, mon nindo !",
        jutsus: "Rasengan, Multi-Clonage, Mode Ermite, Mode Chakra de Kyûbi",
        story: `
            <p><strong>Enfance et Solitude :</strong> Dès sa naissance, Naruto est devenu le réceptacle de Kyûbi, le démon-renard à neuf queues qui a ravagé le village de Konoha. À cause de cela, il a grandi dans l'isolement total, craint et méprisé par les villageois qui voyaient en lui le monstre responsable de leurs malheurs. Pour attirer l'attention et prouver son existence, Naruto passait son temps à faire des farces, cachant sa profonde tristesse derrière un sourire de façade.</p>
            <p><strong>La Voie du Ninja :</strong> Son destin bascule lorsqu'il est reconnu par son professeur, Iruka Umino. Dès lors, Naruto se fixe un objectif absolu : devenir Hokage, le chef du village, afin d'être enfin reconnu et respecté par tous. Il intègre l'Équipe 7 aux côtés de Sasuke Uchiwa, son rival, et de Sakura Haruno, sous la tutelle de Kakashi Hatake.</p>
            <p><strong>Le Héros de Konoha :</strong> Au fil des années, Naruto prouve sa valeur. Il maîtrise des techniques de rang S comme le Rasengan, apprend le Senjutsu (Mode Ermite) et finit par se lier d'amitié avec le démon qui vit en lui, Kurama. De paria du village, il devient le héros qui sauve Konoha de Pain, puis le sauveur du monde ninja lors de la Quatrième Grande Guerre Shinobi. Il réalisera finalement son rêve en devenant le Septième Hokage.</p>
        `
    },
    {
        name: "Sasuke Uchiwa",
        village: "Konoha",
        image: "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png",
        quote: "Mon rêve ne se trouve pas dans le futur, mais dans le passé.",
        jutsus: "Chidori, Sharingan, Mangekyō Sharingan, Amaterasu, Susanoo",
        story: `
            <p><strong>Le Massacre du Clan :</strong> Sasuke est l'un des derniers survivants du puissant clan Uchiwa. Toute son enfance a été brisée la nuit où son frère aîné, Itachi, a massacré l'intégralité de leur famille, laissant Sasuke en vie avec pour seule directive de le haïr et de devenir plus fort. Cet événement traumatisant a défini toute la trajectoire de la vie de Sasuke.</p>
            <p><strong>La Quête de Puissance :</strong> Intégrant l'Équipe 7, Sasuke développe une rivalité fraternelle avec Naruto. Cependant, rongé par son désir de vengeance et réalisant qu'il ne progresse pas assez vite pour vaincre Itachi, il déserte Konoha pour rejoindre Orochimaru, un Sannin légendaire prêt à lui offrir la puissance en échange de son corps.</p>
            <p><strong>La Rédemption :</strong> Après avoir accompli sa vengeance et découvert la terrible vérité sur le sacrifice de son frère, Sasuke sombre dans les ténèbres et jure de détruire Konoha. Il faudra toute la détermination de Naruto et un ultime combat titanesque dans la Vallée de la Fin pour ramener Sasuke à la raison. Il devient alors le "Hokage de l'Ombre", protégeant le village depuis l'extérieur pour expier ses fautes.</p>
        `
    },
    {
        name: "Itachi Uchiwa",
        village: "Konoha / Akatsuki",
        image: "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png",
        quote: "Les gens vivent en s'appuyant sur leurs convictions et leurs connaissances...",
        jutsus: "Tsukuyomi, Amaterasu, Susanoo, Izanami",
        story: `
            <p><strong>Le Génie Pacifiste :</strong> Itachi était un prodige de la famille Uchiwa, ayant éveillé son Sharingan très jeune et intégré les services spéciaux (ANBU) à l'âge de 11 ans. Ayant connu les horreurs de la Troisième Grande Guerre Shinobi dès l'âge de 4 ans, Itachi était un pacifiste dans l'âme qui détestait le conflit au-delà de tout.</p>
            <p><strong>Le Choix Impossible :</strong> Lorsque le clan Uchiwa a planifié un coup d'État pour prendre le contrôle de Konoha, Itachi s'est retrouvé face à un dilemme déchirant : soutenir sa famille et déclencher une guerre civile qui s'étendrait au monde entier, ou massacrer son propre clan sur ordre des dirigeants de Konoha pour sauver son petit frère Sasuke et maintenir la paix. Il a choisi la deuxième option, endossant le rôle du traître.</p>
            <p><strong>Le Héros de l'Ombre :</strong> Rejoignant l'organisation criminelle Akatsuki en tant qu'espion pour le compte de Konoha, Itachi a vécu sa vie dans l'infamie, rongé par une maladie incurable. Il a tout planifié pour mourir des mains de Sasuke, afin de faire de ce dernier le héros de Konoha et de lui transmettre ses pouvoirs oculaires.</p>
        `
    },
    {
        name: "Kakashi Hatake",
        village: "Konoha",
        image: "https://static.wikia.nocookie.net/naruto/images/2/21/Kakashi_Hatake.jpg",
        quote: "Ceux qui ne respectent pas les règles sont des déchets, mais ceux qui abandonnent leurs amis sont pires que des déchets.",
        jutsus: "Chidori / Raikiri, Kamui, Invocation (Chiens)",
        story: `
            <p><strong>Le Ninja Copieur :</strong> Fils du célèbre "Croc Blanc de Konoha", Kakashi est un prodige qui est devenu Jonin très jeune. Il est célèbre dans le monde entier sous le nom de "Kakashi au Sharingan", un œil qu'il a reçu en cadeau de son meilleur ami mourant, Obito Uchiwa, lors de la Troisième Grande Guerre Shinobi.</p>
            <p><strong>Un Passé Douloureux :</strong> Kakashi a perdu tous ceux qui lui étaient chers : son père (qui s'est suicidé), son ami Obito, son amie Rin (qu'il a accidentellement tuée de ses propres mains) et son maître Minato (le 4ème Hokage). Malgré ces tragédies qui l'ont conduit à une période sombre au sein de l'ANBU, il a gardé un cœur pur et une philosophie stricte sur l'importance du travail d'équipe.</p>
            <p><strong>Le Sixième Hokage :</strong> En tant que leader de l'Équipe 7, il a formé Naruto, Sasuke et Sakura, leur transmettant les valeurs d'Obito. Il a joué un rôle clé tout au long de l'histoire, jusqu'à mener les forces alliées lors de la Grande Guerre. Après le conflit, il accepte le rôle de Sixième Hokage pour assurer la transition pacifique avant que Naruto ne soit prêt.</p>
        `
    }
];

// 1. Initialisation de la page
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('character-grid');
    const modal = document.getElementById('character-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalBody = document.getElementById('modal-body');

    // Génération des cartes
    characters.forEach((char, index) => {
        const card = document.createElement('div');
        card.className = 'character-card';
        // Ajout de l'événement de clic pour ouvrir la fenêtre détaillée
        card.onclick = () => openModal(index);
        
        card.innerHTML = `
            <img src="${char.image}" alt="${char.name}" class="card-image" onerror="this.src='https://placehold.co/300x400/333/ff7f00?text=Image'">
            <div class="card-content">
                <h2>${char.name}</h2>
                <p><strong>Village :</strong> ${char.village}</p>
            </div>
        `;
        grid.appendChild(card);
    });

    // Fonction pour ouvrir la modale et injecter le texte détaillé
    function openModal(index) {
        const char = characters[index];
        modalBody.innerHTML = `
            <div class="modal-header">
                <img src="${char.image}" alt="${char.name}" onerror="this.src='https://placehold.co/200x200/333/ff7f00?text=Image'">
                <div class="modal-title">
                    <h2>${char.name}</h2>
                    <p style="color: var(--primary-color);"><strong>Village d'origine :</strong> ${char.village}</p>
                </div>
            </div>
            <div class="quote">"${char.quote}"</div>
            <div class="jutsus">
                <h3>Techniques Principales (Jutsu)</h3>
                <p>${char.jutsus}</p>
            </div>
            <div class="biography">
                <h3 style="color: var(--primary-color); margin-top: 2rem;">Biographie Complète</h3>
                ${char.story}
            </div>
        `;
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Empêche le scroll derrière la fenêtre
    }

    // Fermeture de la modale avec le bouton "X"
    closeBtn.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    // Fermeture de la modale en cliquant à côté de la fenêtre
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
});
