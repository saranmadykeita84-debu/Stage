// =============================================
// Profil GitHub
// =============================================
const GITHUB_USER = "saranmadykeita84-debu";
const GITHUB_BASE = `https://github.com/${GITHUB_USER}`;

// =============================================
// Liste des projets
// =============================================
const projects = [
  {
    title: "TCP Port Scanner",
    desc: "Outil CLI en Python qui scanne les ports TCP ouverts d’un hôte (IP ou domaine) via sockets, avec gestion des erreurs et arrêt propre (CTRL+C).",
    img: "images/python-nmap.jpg",
    link: `${GITHUB_BASE}/tcp-port-scanner`
  },
  {
    title: "Password Manager (CLI)",
    desc: "Gestionnaire de mots de passe en ligne de commande avec base SQLite chiffrée, master password protégé par SHA-256 + sel, chiffrement AES-256 et dérivation de clé via PBKDF2.",
    img: "images/password-manager.jpg",
    link: `${GITHUB_BASE}/password-manager-cli`
  },
  {
    title: "Stéganographie (LSB)  CLI",
    desc: "Application console permettant de cacher et révéler un message secret dans une image PNG via la méthode LSB (Least Significant Bit).",
    img: "images/stegano.jpg",
    link: `${GITHUB_BASE}/steganography-cli`
  },
  {
    title: "Azure DevOps  Déploiement cloud automatisé",
    desc: "Implémentation d’une chaîne DevOps complète avec Azure DevOps pour le déploiement d’une application ASP.NET Core sur infrastructure IaaS. Le projet couvre la gestion Git, les Work Items, l’infrastructure ARM et un pipeline CI/CD YAML exécuté sur agent local.",
    img: "images/azure-devops.png",
    link: `${GITHUB_BASE}/azure-devops-aspnet-deployment`
  },
  {
    title: "Infrastructure Azure sécurisée avec ARM",
    desc: "Implémentation d’une infrastructure Azure via ARM Templates incluant WebApp, Key Vault et slots de déploiement. Le projet démontre l’utilisation de Managed Identity pour l’accès sécurisé aux secrets et un mécanisme de déploiement progressif via slot Staging avant mise en Production.",
    img: "images/azure-keyvault.png",
    link: `${GITHUB_BASE}/azure-arm-webapp-keyvault`
  },
  {
    title: "Architecture serverless avec Azure Functions",
    desc: "Implémentation d’une architecture serverless basée sur Azure Functions pour gérer le téléversement, la génération de miniatures et le redimensionnement d’images, avec un site statique hébergé sur Azure Blob Static Website.",
    img: "images/azure-functions.png",
    link: `${GITHUB_BASE}/azure-functions-static-website`
  },
  {
    title: "Gestion de dossiers de professeurs en C++ (Listes chaînées)",
    desc: "Travail pratique en C++ visant à concevoir une structure de données dynamique basée sur des listes chaînées. Le programme lit des dossiers de professeurs à partir d’un fichier texte, incluant leur ancienneté, les cours souhaités et les étudiants à superviser. Il permet d’effectuer plusieurs opérations telles que la suppression de professeurs, l’identification du professeur ayant le plus d’étudiants, la recherche du cours le plus demandé et la mise à jour des données dans un nouveau fichier.",
    img: "images/linked-list.png",
    link: `${GITHUB_BASE}/cpp-dossier-professeurs`
  },
  {
    title: "Conversion et évaluation d’expressions postfixées en C++",
    desc: "Travail pratique en C++ portant sur la manipulation des expressions arithmétiques et l’utilisation des structures de données STL. Le projet consiste à valider une expression infixée, la transformer en notation postfixée (notation inverse polonaise) puis à l’évaluer à l’aide des conteneurs Stack et Vector. L’implémentation repose sur une classe Postfix intégrant la gestion des priorités des opérateurs, la validation syntaxique des parenthèses et l’évaluation correcte de l’expression.",
    img: "images/postfix.jpg",
    link: `${GITHUB_BASE}/cpp-postfix-expression`
  },
  {
    title: "Arbre binaire de recherche en C++",
    desc: "Travail pratique en C++ visant à implémenter et manipuler un arbre binaire de recherche (ABR) à l’aide de structures et de classes. Le projet permet d’insérer et de supprimer des éléments, d’afficher l’arbre niveau par niveau, de calculer sa hauteur et d’archiver sa représentation séquentielle dans un fichier texte. Des fonctionnalités avancées incluent l’affichage des ascendants d’un nœud et la détection des déséquilibres de l’arbre.",
    img: "images/binary-search-tree.png",
    link: `${GITHUB_BASE}/cpp-arbre-binaire-recherche`
  },
  {
    title: "Simulation d’un système de commerce en C++ (POO)",
    desc: "Laboratoire réalisé en C++ visant à concevoir une application complète de simulation commerciale en appliquant les principes de la programmation orientée objet. Le projet modélise une entreprise qui fabrique et vend des produits à des clients, en gérant les composants, l’inventaire, les commandes, la production, la livraison et l’évaluation de la qualité. L’architecture repose sur plusieurs classes interconnectées, l’héritage, le polymorphisme, l’utilisation de conteneurs STL et une gestion rigoureuse de la mémoire dynamique.",
    img: "images/commerce-cpp.jpg",
    link: `${GITHUB_BASE}/cpp-commerce-simulation`
  },
  {
    title: "Application Client-Serveur TCP multithread en Java",
    desc: "Projet académique consistant à développer une application réseau client-serveur en Java utilisant le protocole TCP. Le serveur crée dynamiquement un socket sur un port libre et accepte plusieurs connexions clientes simultanées grâce à un modèle multithread, où chaque client est géré dans un thread distinct. La communication repose sur des flux DataInputStream et DataOutputStream permettant l’échange de messages textuels entre le client et le serveur. Le client se connecte au serveur via une adresse IP et un port fournis par l’utilisateur, envoie des messages et reçoit des réponses en temps réel. Le projet met en pratique les concepts fondamentaux des réseaux, notamment les sockets, la communication TCP, la gestion de threads et la synchronisation des échanges client-serveur.",
    img: "images/client-server.png",
    link: `${GITHUB_BASE}/tcp-client-server`
  },

  {
    title: "Protocole de transfert de fichiers RDO (Client/Serveur TCP)",
    desc: "Projet de conception réalisé en Java dans le cadre du cours Réseaux d’ordinateurs visant à concevoir et implémenter un mini protocole de transfert de fichiers nommé RDO. Le projet repose sur une architecture client/serveur utilisant le protocole TCP et définit un ensemble de règles d’échange permettant la consultation, le téléchargement et le téléversement de fichiers. L’implémentation inclut la gestion de jetons d’authentification, la fragmentation des fichiers en blocs de taille fixe, la redirection vers des serveurs pairs et l’utilisation du multithreading pour traiter plusieurs clients simultanément. Ce projet met en pratique l’analyse et le développement de protocoles applicatifs ainsi que la collaboration en équipe.",
    img: "images/rdo-protocol.png",
    link: `${GITHUB_BASE}/rdo-file-transfer-protocol`
  },
  {
    title: "Linux & gestion des processus (C++)",
    desc: "Laboratoire réalisé dans le cadre du cours Systèmes d’exploitation visant à se familiariser avec l’environnement Linux, la compilation en ligne de commande et la gestion des processus. Le projet couvre l’utilisation des commandes de base du terminal, la compilation et le débogage de programmes C++ avec g++ et Visual Studio Code, ainsi que la manipulation des processus (foreground, background, signaux, fork, execvp, kill). Une partie avancée consiste à développer un mini-terminal en C++ capable d’exécuter des commandes Linux autorisées, de gérer l’exécution en arrière-plan et de conserver un historique des commandes dans un fichier texte.",
    img: "images/linux-processes.png",
    link: `${GITHUB_BASE}/linux-process-management`
  },
  {
    title: "Multithreading et synchronisation en C++ (Linux)",
    desc: "Laboratoire réalisé en C++ sous Linux portant sur la programmation multithread et les mécanismes de synchronisation. Le projet consiste à simuler la création d’objets dans un jeu vidéo à l’aide de plusieurs threads concurrents, chacun représentant un type d’objet nécessitant deux ressources uniques pour être fabriqué. L’application utilise les bibliothèques std::thread et std::mutex afin de synchroniser l’accès aux ressources partagées, garantir la cohérence des données et éviter les interblocages et la famine. La création des objets est simulée par des délais contrôlés et des messages d’état affichés à l’écran et enregistrés dans un fichier de sortie. Ce projet met en pratique la gestion avancée des threads, la synchronisation fine avec plusieurs mutex et l’analyse des problèmes classiques de concurrence en systèmes d’exploitation.",
    img: "images/multithreading.png",
    link: `${GITHUB_BASE}/multithreading-synchronization`
  },
  {
    title: "Simulation de la mémoire virtuelle en C++ (TLB & tables de pages)",
    desc: "Laboratoire réalisé en C++ sous Linux visant à simuler le fonctionnement d’un système de gestion de la mémoire virtuelle. Le projet implémente la traduction des adresses logiques en adresses physiques à l’aide d’une table de pages et d’un Translation Lookaside Buffer (TLB). Il gère les page faults, le chargement des pages depuis une mémoire secondaire simulée, ainsi qu’un algorithme de remplacement LRU pour le TLB. Le programme calcule également des statistiques clés telles que le taux de page faults et le taux de succès du TLB, offrant une compréhension concrète des mécanismes internes des systèmes d’exploitation.",
    img: "images/virtual-memory.jpg",
    link: `${GITHUB_BASE}/cpp-virtual-memory-simulation`
  },
  {
  title: "Snake Game  Application Android",
  desc: "Application mobile Android du jeu Snake développée en Java. Le projet intègre un système de comptes utilisateurs, plusieurs niveaux de difficulté influençant la vitesse du jeu, ainsi qu’un enregistrement des scores via une base de données SQLite locale. Le rendu graphique en temps réel est réalisé avec SurfaceView et Canvas, tandis que les effets sonores et la musique sont gérés avec SoundPool et MediaPlayer. L’application démontre la maîtrise des fondamentaux du développement Android, incluant la gestion des activités, des interfaces XML et de la persistance des données.",
  img: "images/snake-game.jpg",
  link: `${GITHUB_BASE}/android-snake-game`
  },
  {
  title: "Application de gestion d’un institut (Python / MySQL)",
  desc: "Projet académique consistant à développer une application de gestion administrative et pédagogique pour un institut. L’application permet la gestion complète des étudiants, employés, départements, matières et évaluations à travers des opérations CRUD, le calcul de statistiques telles que les moyennes des étudiants et les salaires des employés, ainsi qu’une interface graphique intuitive réalisée avec Tkinter. Le projet repose sur une base de données relationnelle MySQL modélisée selon un MCD structuré et intègre des mécanismes de validation des données et de gestion des erreurs.",
  img: "images/institut-management.jpg",
  link: `${GITHUB_BASE}/gestion-institut`
 }

];

// =============================================
// Injection dynamique des cartes projets
// =============================================
const container = document.getElementById("project-list");

projects.forEach((project) => {
  const col = document.createElement("div");
  col.className = "col-md-6 col-lg-4 mb-4";

  col.innerHTML = `
    <div class="card project-card h-100 shadow-sm">
      <img src="${project.img}" class="card-img-top" alt="${project.title}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.desc}</p>
        <a href="${project.link}"
           target="_blank"
           rel="noopener"
           class="btn btn-info text-white mt-auto">
          Voir sur GitHub
        </a>
      </div>
    </div>
  `;

  container.appendChild(col);
});
