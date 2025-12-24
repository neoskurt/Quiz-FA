let questions = [
  {
    numb: 1,
    question: "Le panier d'une équipe est celui dans lequel elle doit marquer.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 1 LE JEU DEFINITIONS",
    explanation: "Art 1.2 : Une équipe défend son propre panier"
  },
  {
    numb: 2,
    question: "Le panier d'une équipe est celui qu'elle défend.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 1 LE JEU DEFINITIONS",
    explanation: "Art 1.2 : Une équipe défend son propre panier"
  },
  {
    numb: 3,
    question: "Le terrain de jeu est une surface plane et dure, libre de tout obstacle aux dimensions de vingt-huit (28) mètres de long sur quinze (15) mètres de large, ces mesures étant prises du bord intérieur des lignes délimitant le terrain.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 2 LE TERRAIN DE JEU",
    explanation: "Art 2.1 : Les dimensions sont prises du bord intérieur"
  },
  {
    numb: 4,
    question: "La ligne médiane fait partie de la zone arrière d'une équipe.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 2 LE TERRAIN DE JEU",
    explanation: "Art 2.2 : La zone arrière d'une équipe consiste en son propre panier, la face interne du panneau ainsi que la partie du terrain délimitée par la ligne de fond derrière le panier de l'équipe, les lignes de touche et la ligne médiane."
  },
  {
    numb: 5,
    question: "La zone avant d'une équipe comprend le panier de l'adversaire, la face interne du panneau de l'adversaire, et est délimitée par la ligne de fond derrière le panneau de l'adversaire, les lignes de touche et le bord interne de la ligne médiane le plus proche du panier de l'adversaire.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 2 LE TERRAIN DE JEU",
    explanation: "Art 2.3 : La zone avant d'une équipe consiste dans le panier de l'adversaire, la face interne du panneau de l'adversaire, par la ligne de fond derrière le panneau de l'adversaire, les lignes de touche et le bord interne de la ligne médiane le plus proche du panier de l'adversaire."
  },
  {
    numb: 6,
    question: "Les lignes font partie de l'extérieur du terrain.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 2 LE TERRAIN DE JEU",
    explanation: "Art 2.4.1 : Le terrain de jeu doit être délimité par des lignes consistant en lignes de fond et en lignes de touche. Ces lignes ne font pas partie du terrain de jeu."
  },
  {
    numb: 7,
    question: "La ligne à trois points fait partie de la zone à trois points ?",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 2 LE TERRAIN DE JEU",
    explanation: "Art 2.4.4 : la ligne à 3 points ne fait pas partie de la zone de panier à trois points"
  },
  {
    numb: 8,
    question: "Le panier comprend l'anneau et le filet.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 3 EQUIPEMENT",
    explanation: "Art 3 : \"Equipement\""
  },
  {
    numb: 9,
    question: "La feuille de marque, le chronomètre de jeu et les plaquettes pour fautes de joueur font partie de l'équipement du Basket Ball.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 3 EQUIPEMENT",
    explanation: "Art 3 : \"Equipement\""
  },
  {
    numb: 10,
    question: "Pendant un intervalle de jeu, tous les membres d'équipe autorisés à jouer sont considérés comme joueurs.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 4 LES EQUIPES",
    explanation: "Art 4.1.4 : Pendant un intervalle de jeu, tous les membres d'équipe autorisés à jouer sont considérés comme joueurs."
  },
  {
    numb: 11,
    question: "Un membre d'équipe est autorisé à jouer s'il n'est pas inscrit sur la feuille de marque au début mais s'il se présente avec sa licence avant de rentrer en jeu lors du troisième quart temps.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 4 LES EQUIPES",
    explanation: "Art 4.1.2 : Un membre d'équipe est autorisé à jouer lorsque son nom est inscrit sur la feuille de marque avant le commencement de la rencontre et aussi longtemps qu'il n'a pas été disqualifié ou n'a pas commis cinq (5) fautes."
  },
  {
    numb: 12,
    question: "Un membre de l'équipe qui est inscrit au début de la rencontre n'est pas autorisé à jouer s'il se présente après le début de la rencontre.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 4 LES EQUIPES",
    explanation: "Art 4.1.2 : Un membre de l'équipe est autorisé à jouer lorsque son nom est inscrit sur la feuille de marque avant le commencement de la rencontre aussi longtemps qu'il n'a pas été disqualifié ou n'a pas commis 5 fautes."
  },
  {
    numb: 13,
    question: "Si un joueur se blesse ou paraît être blessé et qu’en conséquence l’entraîneur, l’entraîneur adjoint, un remplaçant ou toute personne du banc d’équipe de la même équipe pénètre sur le terrain de jeu, ce joueur est considéré comme ayant reçu des soins, que ces soins aient été ou non prodigués.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 5 JOUEURS BLESSURES",
    explanation: "Art 5: interprétation disposition n°1 - joueur blessé - pénétrer sur le terrain"
  },
  {
    numb: 14,
    question: "Il n’y a pas de limite de temps pour évacuer du terrain de jeu un joueur sérieusement blessé si, selon l’avis du médecin, l’évacuation est dangereuse pour le joueur.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 5 JOUEURS BLESSURES",
    explanation: "Art 5: Interprétation disposition n°2 - limite pour évacuer un blessé. L’opinion du médecin doit déterminer le moment approprié pour l’évacuation du joueur blessé du terrain de jeu. Après le remplacement, le jeu doit reprendre sans qu’aucune sanction ne soit infligée."
  },
  {
    numb: 15,
    question: "Si un joueur est blessé, qu’il saigne ou qu’il a une blessure ouverte et ne peut pas continuer à jouer immédiatement (environ 15 secondes), il doit être remplacé. Si un temps-mort est pris par l’une ou l’autre équipe pendant la même période de chronomètre arrêté et que le joueur récupère pendant ce temps-mort, il peut continuer à jouer seulement si le signal du marqueur pour la demande de temps mort retentit avant que l’arbitre ne fasse signe à un remplaçant de rentrer pour devenir joueur.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 5 JOUEURS BLESSURES",
    explanation: "Art 5 : Interprétation disposition n°3 - joueur blessé et temps-mort"
  },
  {
    numb: 16,
    question: "Un joueur blessé est autorisé à rejouer s'il récupère dans un délai d'environ 45 secondes.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 5 JOUEURS BLESSURES",
    explanation: "Art 5: un joueur est autorisé à rejouer s'il récupère dans un délai de 15 secondes environ"
  },
  {
    numb: 17,
    question: "Dans le quatrième quart-temps, le joueur A10 se blesse. L'équipe A n'a plus de remplaçant. Pour qu'il puisse continuer à jouer, l'arbitre peut attendre plus de 15 secondes.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 5 JOUEURS BLESSURES",
    explanation: "Art 5.3 : Si le joueur blessé ne peut pas continuer à jouer immédiatement (environ 15 secondes) ou s'il reçoit des soins, il doit être remplacé sauf si l'équipe est réduite à moins de cinq joueurs sur le terrain."
  },
  {
    numb: 18,
    question: "Une faute technique est sifflée à A5. Le capitaine de l'équipe B doit désigner le joueur qui va tirer les lancers francs.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 6 CAPITAINE",
    explanation: "Art 7.9 : L'entraîneur doit désigner le tireur de lancer franc… (pas le capitaine)"
  },
  {
    numb: 19,
    question: "Pendant le jeu, l'entraîneur adjoint peut se lever en même temps que l'entraîneur si c'est simplement pour parler à ses joueurs ?",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 7 ENTRAINEURS",
    explanation: "Art 7.5 : Seul l'entraîneur, ou bien l'entraîneur adjoint, mais uniquement l'un des deux, est autorisé à rester debout."
  },
  {
    numb: 20,
    question: "L'entraineur adjoint peut s'adresser aux arbitres de façon courtoise, quand le ballon est mort et que le chronomètre de jeu est arrêté?",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 7 ENTRAINEURS",
    explanation: "Art 7.6 L'entraineur adjoint ne doit pas communiquer avec les arbitres"
  },
  {
    numb: 21,
    question: "Un entraîneur-joueur commet sa 5ème faute sur le terrain. Il doit sortir. Il peut continuer à entraîner.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 7 ENTRAINEURS",
    explanation: "Art 7.8 : Le capitaine peut remplir la fonction d'entraîneur s'il n'y a pas d'entraîneur ou si l'entraîneur ne peut pas continuer et s'il n'y a pas d'entraîneur adjoint inscrit sur la feuille de marque (ou que ce dernier ne peut pas continuer). Si le capitaine doit quitter le terrain de jeu, il peut continuer à remplir la fonction d'entraîneur. Cependant, s'il doit quitter le terrain à la suite d'une faute disqualifiante ou s'il ne peut pas assurer la fonction d'entraîneur pour cause de blessure, son remplaçant comme capitaine peut le remplacer comme entraîneur."
  },
  {
    numb: 22,
    question: "Un entraîneur-joueur commet sa 2ème faute antisportive sur le terrain. Il est donc disqualifié. Il peut tout de même continuer à entraîner.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 7 ENTRAINEURS",
    explanation: "Art 7.8 : Le capitaine peut remplir la fonction d'entraîneur s'il n'y a pas d'entraîneur ou si l'entraîneur ne peut pas continuer et s'il n'y a pas d'entraîneur adjoint inscrit sur la feuille de marque (ou que ce dernier ne peut pas continuer). Si le capitaine doit quitter le terrain de jeu, il peut continuer à remplir la fonction d'entraîneur. Cependant, s'il doit quitter le terrain à la suite d'une faute disqualifiante ou s'il ne peut pas assurer la fonction d'entraîneur pour cause de blessure, son remplaçant comme capitaine peut le remplacer comme entraîneur. Art 37.2.2 : Chaque fois qu'un fautif est disqualifié (...), il doit se rendre et demeurer dans le vestiaire de son équipe pour toute la durée de la rencontre ou il peut quitter le bâtiment."
  },
  {
    numb: 23,
    question: "Une faute technique est sifflée à A5. L'entraîneur de l'équipe B doit désigner le joueur qui va tirer le lancer franc",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 7 ENTRAINEURS",
    explanation: "Art 7.9 : L'entraîneur doit désigner le tireur de lancer franc… (pas le capitaine)"
  },
  {
    numb: 24,
    question: "Au début de la rencontre, l'intervalle de jeu prend fin lorsque le ballon quitte les mains de l'arbitre effectuant l'entre-deux.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 8 TPS DE JEU SCORE PROLONG",
    explanation: "Art 8.6 : Un intervalle de jeu prend fin lorsque le ballon quitte les mains de l'arbitre lors de l'entre-deux initial."
  },
  {
    numb: 25,
    question: "Au début du 2ème quart-temps, l'intervalle de jeu prend fin lorsque le ballon quitte les mains du joueur effectuant la remise en jeu.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 8 TPS DE JEU SCORE PROLONG",
    explanation: "Art 8.6 : Un intervalle de jeu prend fin lorsque le ballon est à la disposition du joueur effectuant la remise en jeu."
  },
  {
    numb: 26,
    question: "L'arbitre de tête siffle une faute sur tir en même temps que le signal de fin de temps de jeu du 3ème quart-temps. Les lancers francs seront tirés avant le début de l'intervalle.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 8 TPS DE JEU SCORE PROLONG",
    explanation: "Art 8: si une faute est commise lorsque le signal du chronomètre signalant la fin du temps de jeu retentit alors la faute ne sera pas comptabilisée, à moins qu'elle soit antisportive, technique ou disqualifiante"
  },
  {
    numb: 27,
    question: "Alors que la rencontre doit commencer, l'équipe A a moins de 5 joueurs sur le terrain de jeu prêts à jouer. Sachant que le représentant de l'équipe A est en mesure de fournir une explication raisonnable et acceptable sur l'arrivée tardive de ses joueurs. Les arbitres doivent retarder la rencontre d'un maximum de 15 minutes.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 9 DEBUT FIN DE TEMPS DE JEU",
    explanation: "Interprétations, Art 9, disposition n°1 - Le commencement de la rencontre doit être retardé d'un maximum de 15 minutes. Si les joueurs absents arrivent sur le terrain de jeu, prêts à jouer avant l'expiration des 15 minutes, la rencontre doit commencer. Dans le cas contraire, l'équipe peut être déclarée forfait."
  },
  {
    numb: 28,
    question: "Après le commencement de la rencontre, les arbitres découvrent que les deux équipes jouent dans la mauvaise direction. Le jeu doit être arrêté immédiatement et les équipes doivent changer de panier.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 9 DEBUT FIN DE TEMPS DE JEU",
    explanation: "Interprétations, Art 9, disposition n°2 - Le jeu doit être arrêté dès que possible sans mettre l’une ou l’autre équipe en position défavorable. Les équipes doivent changer de panier. Le jeu doit reprendre au point le plus proche de l’endroit diamétralement opposé au point où le jeu a été arrêté."
  },
  {
    numb: 29,
    question: "Au commencement d’une période, l’équipe A défend son propre panier lorsque B4 dribble par erreur vers son propre panier et marque un panier. Les deux points doivent être attribués au capitaine en jeu de l’équipe A.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 9 DEBUT FIN DE TEMPS DE JEU",
    explanation: "Interprétations, Art 9, disposition n°2 - Les deux points doivent être attribués au capitaine en jeu de l’équipe A."
  },
  {
    numb: 30,
    question: "Si une prolongation est nécessaire, les équipes attaquent sur les mêmes paniers qu'au quatrième quart-temps.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 9 DEBUT FIN DE TEMPS DE JEU",
    explanation: "Art 9.7 : Dans toutes les prolongations, les équipes doivent continuer à jouer vers le même panier que celui de la quatrième période."
  },
  {
    numb: 31,
    question: "Le ballon est vivant dans tous les cas suivants: - lors de l'entre-deux initial, le ballon quitte les mains de l'arbitre - lors d'un unique LF, le ballon est à la disposition du tireur - lors d'une remise en jeu en ligne de fond, le ballon est à la disposition du joueur effectuant la REJ",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 10 STATUTS DU BALLON",
    explanation: "Art 10.2 : Le ballon devient vivant lorsque : - lors de l'E2, le ballon quitte la ou les main(s) de l'arbitre - lors d'un LF, il est à la disposition du tireur de LF - Lors de la remise en jeu, il est à la disposition du joueur effectuant la remise en jeu"
  },
  {
    numb: 32,
    question: "Lors de l'E2 initial, le ballon est vivant dès qu'il est légalement frappé par un des 2 sauteurs.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 10 STATUTS DU BALLON",
    explanation: "Art 10.2 : Le ballon devient vivant lorsque : - lors de l'E2, le ballon quitte la ou les main(s) de l'arbitre"
  },
  {
    numb: 33,
    question: "Lors du dernier LF, le ballon devient vivant lorsqu'il est à la disposition du tireur de LF.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 10 STATUTS DU BALLON",
    explanation: "Art 10.2 : Le ballon devient vivant lorsque : - lors d'un LF, il est à la disposition du tireur de LF"
  },
  {
    numb: 34,
    question: "A11 passe le ballon depuis sa zone arrière. Le ballon touche un arbitre qui a un pied de chaque côté de la ligne médiane. Le ballon est considéré en zone avant et le décompte des 8 secondes s'arrêtent.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 11 POSITION JOUEUR ARBITRE",
    explanation: "Art 28.1.2 : L'équipe a amené le ballon dans sa zone avant lorsque le ballon touche un arbitre ayant une partie de son corps en contact avec la zone avant de l'équipe qui contrôle le ballon."
  },
  {
    numb: 35,
    question: "La position d'un joueur en l'air est déterminée par l'endroit où il retombe au sol.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 11 POSITION JOUEUR ARBITRE",
    explanation: "Art 11.1 : Lorsqu'il est en l'air, le joueur conserve le même statut qu'il avait lorsqu'il touchait le sol avant son saut."
  },
  {
    numb: 36,
    question: "La position d'un joueur en l'air est déterminée par l'endroit où il était lorsqu'il a sauté.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 11 POSITION JOUEUR ARBITRE",
    explanation: "Art 11.1 : Lorsqu'il est en l'air, le joueur conserve le même statut qu'il avait lorsqu'il touchait le sol avant son saut."
  },
  {
    numb: 37,
    question: "A15 et B13 sautent à l'entre-deux initial. Le ballon est frappé par A15 et retombe dans les mains du joueur B5 à l'extérieur du cercle central. La prochaine possession alternée sera pour l'équipe A.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 12 ENTRE 2 ET POSS ALTERNEE",
    explanation: "Art 12.5.2 : L'équipe qui n'a pas pris le contrôle du ballon vivant sur le terrain de jeu lors de l'entre-deux initial aura droit à la première possession alternée."
  },
  {
    numb: 38,
    question: "A7 et B8 tiennent fermement le ballon et essaient de le prendre pendant plusieurs secondes. L'arbitre doit alors siffler ballon tenu.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 12 ENTRE 2 ET POSS ALTERNEE",
    explanation: "Art 12.1.2 : Il y a ballon tenu lorsqu'un ou plusieurs joueurs adverses tiennent fermement le ballon à une ou deux mains de telle façon qu'aucun d'eux ne puisse en prendre le contrôle sans rudesse excessive."
  },
  {
    numb: 39,
    question: "Lors de l'entre-deux initial, les sauteurs peuvent se placer où ils veulent dans le cercle central.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 12 ENTRE 2 ET POSS ALTERNEE",
    explanation: "Art 12.2.1 : Chaque sauteur doit se tenir debout, les pieds dans la moitié du cercle central la plus proche de son propre panier avec un pied près de la ligne médiane."
  },
  {
    numb: 40,
    question: "Lors de l'entre-deux initial, un joueur de l'équipe A veut se placer entre deux joueurs de l'équipe B qui étaient placés l'un à côté de l'autre autour du cercle. Les joueurs B doivent lui laisser une place entre eux.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 12 ENTRE 2 ET POSS ALTERNEE",
    explanation: "Art 12.2.2 : les coéquipiers ne peuvent pas occuper des positions adjacentes autour du cercle si un adversaire manifeste le désir de s'intercaler."
  },
  {
    numb: 41,
    question: "L'arbitre lance le ballon pour l'entre-deux initial, le ballon retombe au sol sans qu'un sauteur ne l'ait touché. L'entre-deux doit être recommencé.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 12 ENTRE 2 ET POSS ALTERNEE",
    explanation: "Art. 12.2.7 : Si le ballon n'est pas frappé par au moins l'un des sauteurs, l'entre-deux doit être recommencé."
  },
  {
    numb: 42,
    question: "Lors de l'entre-deux initial, le sauteur B15 sait qu'il n'aura pas le gain du ballon et décide de ne pas sauter. C'est légal.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 12 ENTRE 2 ET POSS ALTERNEE",
    explanation: "Art. 12.2.5 : il est seulement interdit au sauteur de quitter sa position avant que le ballon ait été légalement frappé."
  },
  {
    numb: 43,
    question: "Lors de l'entre-deux initial, le sauteur A14 sait qu'il n'aura pas le gain du ballon et décide de se reculer d'un pas tout en restant dans son demi-cercle. C'est légal.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 12 ENTRE 2 ET POSS ALTERNEE",
    explanation: "Art. 12.2.5 : Aucun sauteur ne doit quitter sa position avant que le ballon ait été légalement frappé."
  },
  {
    numb: 44,
    question: "Pour intercepter et le lancer plus loin, B14 frappe du poing le ballon lors d'une passe de A4 vers A9. L'arbitre ne doit pas siffler.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 13 COMMENT JOUER LE BALLON",
    explanation: "Art 13.2 Un joueur ne doit pas courir avec le ballon, ni le frapper ou le bloquer délibérément du pied ou d'une partie quelconque de la jambe, ni le frapper avec le poing."
  },
  {
    numb: 45,
    question: "A13 et B14 sautent pour l'entre-deux initial. A13 frappe le ballon du poing pour l'envoyer vers A15. L'arbitre doit siffler une violation.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 13 COMMENT JOUER LE BALLON",
    explanation: "Art 13.2 Un joueur ne doit pas courir avec le ballon, ni le frapper ou le bloquer délibérément du pied ou d'une partie quelconque de la jambe, ni le frapper avec le poing."
  },
  {
    numb: 46,
    question: "Pendant une situation de rebond, A14 frappe volontairement le ballon de la tête. Est-ce légal ?",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 13 COMMENT JOUER LE BALLON",
    explanation: "Art 13.1 : le ballon est joué seulement avec la ou les mains(s)"
  },
  {
    numb: 47,
    question: "B7 attrape le ballon alors qu'il est au sol et le fait rouler pour le lancer à B11. Cette action est légale.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 13 COMMENT JOUER LE BALLON",
    explanation: "Art 13.1 : le ballon peut être passé, lancé, frappé, roulé ou dribblé dans n'importe quelle direction"
  },
  {
    numb: 48,
    question: "B9 fait une passe à B7, lançant le ballon, il l'envoie sur la cuisse de A11 qui passait sur la trajectoire de passe . L'arbitre doit siffler violation.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 13 COMMENT JOUER LE BALLON",
    explanation: "Art 13.2 : Toucher ou entrer en contact accidentellement avec le ballon avec une partie quelconque de la jambe n'est pas une violation."
  },
  {
    numb: 49,
    question: "A9 lance le ballon à A13. Le défenseur B7 lève sa jambe et dévie le ballon avec sa cuisse. Cette action est légale.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 13 COMMENT JOUER LE BALLON",
    explanation: "Art 13.2 : Un joueur ne doit pas frapper ou bloquer le ballon délibérément d'une partie quelconque de la jambe."
  },
  {
    numb: 50,
    question: "A14 qui a arrêté son dribble et qui est au sol, fait rouler le ballon vers A9 qui est proche de lui. Cette action est légale.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 13 COMMENT JOUER LE BALLON",
    explanation: "Art 13.1 : le ballon peut être passé, lancé, frappé, roulé ou dribblé dans n'importe quelle direction"
  },
  {
    numb: 51,
    question: "Alors que A5 a le ballon pour une remise en jeu, A8 commet une faute sur B6. C'est la 5ème faute de l'équipe A. Les arbitres donnent 2 lancers francs à B6. C'est une bonne application du règlement.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 14 CONTROLE DU BALLON",
    explanation: "Art 14.1.1 : Le contrôle par une équipe commence lorsqu'un joueur de cette équipe contrôle un ballon vivant parce qu'il le tient, le dribble ou qu'il a le ballon à sa disposition. Dans ce cas, il s'agit d'une faute de l'équipe qui contrôle le ballon (faute offensive), donc pas de lancer franc possible."
  },
  {
    numb: 52,
    question: "L'action de tir et le contrôle du ballon se terminent toujours en même temps ?",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 14 CONTROLE DU BALLON",
    explanation: "Lors d'un tir d'un joueur en l'air, le contrôle se termine lorsque le ballon quitte les mains du tireur. L'action de tir se termine lorsque les deux pieds du tireur sont retombés au sol."
  },
  {
    numb: 53,
    question: "Une équipe peut contrôler le ballon alors que le chronomètre de jeu est arrêté ?",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 14 CONTROLE DU BALLON",
    explanation: "Art 14.1.1 : le contrôle du ballon par une équipe commence lorsqu'un joueur de cette équipe contrôle un ballon vivant parce qu'il le tient, le dribble ou qu'il a le ballon à sa disposition."
  },
  {
    numb: 54,
    question: "A5 passe le ballon à A12. Lorsque le ballon est en l'air sur la passe, le contrôle est toujours à l'équipe A ?",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 14 CONTROLE DU BALLON",
    explanation: "Art 14.1.2 : Le contrôle d'équipe continue lorsque le ballon est passé entre les co-équipiers."
  },
  {
    numb: 55,
    question: "Lors d'une passe de B5 vers B10, A6 dévie le ballon qui retombe dans les mains de B10. L'équipe A a contrôlé le ballon un temps bref.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 14 CONTROLE DU BALLON",
    explanation: "Art 14.1.1 : Le contrôle par une équipe commence lorsqu'un joueur de cette équipe contrôle un ballon vivant parce qu'il le tient, le dribble ou qu'il a le ballon à sa disposition."
  },
  {
    numb: 56,
    question: "Un joueur contrôle le ballon lorsqu'il dribble ou lorsque que le ballon repose dans une ou ses deux mains.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 14 CONTROLE DU BALLON",
    explanation: "Art 14.1.1 : Le contrôle par une équipe commence lorsqu'un joueur de cette équipe contrôle un ballon vivant parce qu'il le tient, le dribble ou qu'il a le ballon à sa disposition."
  },
  {
    numb: 57,
    question: "Le joueur B14 commence une action de tir en double pas. A6 tente de le contrer mais tape sur son bras. Au moment de cette faute, il s'agit de la 2ème faute de l'équipe A. B14 effectue finalement une passe à B8 qui est proche du panier. L'arbitre ne doit pas donner de lancer-francs à B14.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 15 ACTION DE TIR",
    explanation: "Art 15.1.1 Il y a tir au panier ou lancer franc lorsqu'un joueur tient le ballon dans la ou les main (s) et le lance en l'air en direction du panier de l'adversaire. Dans cette situation, il effectue une passe donc pas de lancer franc."
  },
  {
    numb: 58,
    question: "B8 tire à trois points lorsque A7 lui tape sur le bras. Le panier est marqué. L'arbitre siffle, accorde le panier à trois points et donne un lancer franc à B8. La décision est juste.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 15 ACTION DE TIR",
    explanation: "Art 34.2.2 : Si la faute est commise sur un joueur tirant au panier, ce joueur doit bénéficier d’un nombre de lancer(s) franc(s) comme suit : • si le tir au panier est réussi, le panier doit compter et un (1) lancer franc supplémentaire est accordé, • si le tir depuis la zone de panier à deux points est manqué, deux (2) lancers francs sont accordés, • si le tir depuis la zone de panier à trois points est manqué, trois (3) lancers francs sont accordés, • si la faute est commise sur le joueur au moment du signal sonore du chronomètre de jeu signalant la fin de la période ou juste avant ou au moment du signal sonore des vingt-quatre (24) secondes ou juste avant, alors que le ballon est encore entre les mains du joueur et que le panier est réussi, le panier ne doit pas compter et deux (2) ou trois (3) lancers francs seront accordés."
  },
  {
    numb: 59,
    question: "Une claquette est considérée comme une action de tir ?",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 15 ACTION DE TIR",
    explanation: "Art 15.1.1 Une claquette et un smash sont également considérés comme des tirs au panier."
  },
  {
    numb: 60,
    question: "A10 tire à 3 pts. Le ballon a quitté ses mains et ses deux pieds sont posés au sol lorsque B9 qui a tenté de le contrer retombe sur lui. L'arbitre siffle faute à B9. La réparation sera trois lancers francs pour A10.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 15 ACTION DE TIR",
    explanation: "Art 15.1.2 : L‘action de tir : • commence lorsque le joueur débute le mouvement continu précédant normalement le lâcher du ballon et que, selon le jugement de l’arbitre, il a commencé sa tentative pour marquer en lançant, effectuant une claquette ou smashant le ballon vers le panier de l’adversaire, • prend fin lorsque le ballon a quitté la ou les main(s) du tireur et que, dans le cas d’un joueur en l’air, les deux pieds du joueur ont retouché le sol. Le joueur qui essaie de marquer peut avoir son ou ses bras retenus par un adversaire l’empêchant ainsi de marquer bien qu’il soit considéré comme faisant une tentative de tir. Dans ce cas, il n’est pas essentiel que le ballon quitte la ou les main(s) du joueur. Il n’y a aucun rapport entre le nombre de pas légaux effectués et l’action de tir."
  },
  {
    numb: 61,
    question: "A4 est en action de tir à deux points. B7 tente de le contrer par derrière, mais le pousse dans le dos. L'arbitre siffle faute. Le panier est marqué. L'arbitre accorde le panier et donne un lancer franc supplémentaire. L'arbitre a pris la bonne décision.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 15 ACTION DE TIR",
    explanation: "Art 34.2.2 : Si la faute est commise sur un joueur tirant au panier, ce joueur doit bénéficier d’un nombre de lancer(s) franc(s) comme suit : • si le tir au panier est réussi, le panier doit compter et un (1) lancer franc supplémentaire est accordé, • si le tir depuis la zone de panier à deux points est manqué, deux (2) lancers francs sont accordés, • si le tir depuis la zone de panier à trois points est manqué, trois (3) lancers francs sont accordés, • si la faute est commise sur le joueur au moment du signal sonore du chronomètre de jeu signalant la fin de la période ou juste avant ou au moment du signal sonore des vingt-quatre (24) secondes ou juste avant, alors que le ballon est encore entre les mains du joueur et que le panier est réussi, le panier ne doit pas compter et deux (2) ou trois (3) lancers francs seront accordés."
  },
  {
    numb: 62,
    question: "Le ballon a quitté les mains de B12 qui tire à trois points. A5 pousse B12 qui est encore en l'air. L'arbitre siffle la faute a A5 et donne deux lancers francs à B12 car le ballon a quitté les mains de B12. L'arbitre a pris la bonne décision.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 15 ACTION DE TIR",
    explanation: "Art 34.2.2 : Si la faute est commise sur un joueur tirant au panier, ce joueur doit bénéficier d’un nombre de lancer(s) franc(s) comme suit : • si le tir au panier est réussi, le panier doit compter et un (1) lancer franc supplémentaire est accordé, • si le tir depuis la zone de panier à deux points est manqué, deux (2) lancers francs sont accordés, • si le tir depuis la zone de panier à trois points est manqué, trois (3) lancers francs sont accordés, • si la faute est commise sur le joueur au moment du signal sonore du chronomètre de jeu signalant la fin de la période ou juste avant ou au moment du signal sonore des vingt-quatre (24) secondes ou juste avant, alors que le ballon est encore entre les mains du joueur et que le panier est réussi, le panier ne doit pas compter et deux (2) ou trois (3) lancers francs seront accordés."
  },
  {
    numb: 63,
    question: "Un joueur est en action de tir lorsqu'il frappe le ballon en direction du panier",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 15 ACTION DE TIR",
    explanation: "Art 15.1.1 : Il y a tir au panier lorsqu'un joueur tape le ballon vers le panier ou le smash dans le panier."
  },
  {
    numb: 64,
    question: "Lors du dernier lancer franc de A6, le ballon rebondit sur le cercle et A8 le touche avant qu'il ne retombe dans le panier. L'arbitre doit accorder le panier à un point.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 16 PANIER REUSSI ET VALEUR",
    explanation: "Art 16.2.1 : Un panier réussi de la zone de panier à deux points compte deux points."
  },
  {
    numb: 65,
    question: "Lors de la lutte pour le ballon au rebond, le joueur B6 tape la ballon qui entre dans son propre panier. L'arbitre doit refuser le panier. C'est un cas d'entre-deux.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 16 PANIER REUSSI ET VALEUR",
    explanation: "Art 16.2.2 : Si un joueur marque accidentellement un panier du terrain dans son propre panier, le panier compte deux points et doit être inscrit comme ayant été marqué par le capitaine en jeu de l'équipe adverse."
  },
  {
    numb: 66,
    question: "Dans les deux dernières minutes de la rencontre, un \"marcher\" est sifflé à A7 qui faisait un lay up. L'entraîneur A demande un temps-mort. La remise en jeu pour l'équipe B se fera au niveau de la ligne de remise en jeu en zone avant.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 17 REJ",
    explanation: "Art 17.2.4 : Lorsque le chronomètre de jeu indique deux minutes ou moins dans la quatrième période, et qu'un temps-mort est accordé à l'équipe ne bénéficiant pas de la possession du ballon, la remise en jeu qui suivra devra être administrée à l'endroit le plus proche où la violation à été sifflée."
  },
  {
    numb: 67,
    question: "Dans les deux dernières minutes de la rencontre, A8 remonte le ballon dans la zone arrière de son équipe. 4 sec se sont écoulées lorsque B4 chasse le ballon hors du terrain. L'entraîneur A demande un temps mort. A la reprise du jeu, la remise en jeu se fera de la ligne de remise en jeu de la zone avant de cette équipe à l'opposé de la table de marque",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 17 REJ",
    explanation: "art 17.2.4 (modifications 2012) : la remise en jeu qui suivra devra être administrée au niveau de la ligne de remise en jeu de la zone avant de cette équipe à l'opposé de la table de marque ou encore côté table; ou en zone arrière si c'est le choix de l'entraîneur"
  },
  {
    numb: 68,
    question: "A10 effectue une remise en jeu ligne de fond. Son défenseur direct lui tourne le dos. A10 décide alors de lancer le ballon dans le dos de son défenseur, d'entrer sur le terrain, de récupérer le ballon et de tirer au panier. L'arbitre a sifflé violation. L'arbitre a pris la bonne décision.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 17 REJ",
    explanation: "Art 17.3.1 : Le joueur effectuant la remise en jeu ne doit pas toucher le ballon sur le terrain de jeu avant qu'il ait touché un autre joueur."
  },
  {
    numb: 69,
    question: "En voulant faire une passe à un coéquipier dans la zone restrictive, le joueur A8, qui effectue la remise en jeu ligne de touche, lance la ballon directement dans le panier et marque. Cette action est légale et trois points sont accordés.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 17 REJ",
    explanation: "Art 17.3.1. : Le joueur effectuant la remise en jeu ne doit pas faire en sorte que le ballon pénètre directement dans le panier."
  },
  {
    numb: 70,
    question: "A4 effectue la remise en jeu. A5 à qui est adressée la passe est sous pression de B4. A5 s'empare du ballon avant qu'il ait franchi complètement la verticale de la ligne de touche. C'est une action légale de A5.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 17 REJ",
    explanation: "Interprétations Article 17 Disposition 1 Avant que le joueur ait relâché le ballon lors de la remise en jeu, il est possible que le mouvement de lancer fasse que les mains du joueur coupent le plan vertical de la ligne de touche séparant l’intérieur de l’extérieur du terrain de jeu. Dans de telles situations, il est toujours de la responsabilité du joueur défenseur d’éviter d’intervenir sur la remise en jeu en touchant le ballon lorsqu’il est encore entre les mains du joueur effectuant la remise en jeu."
  },
  {
    numb: 71,
    question: "B4 est sanctionné d'une 5ème faute. Un temps mort a été demandé par l'équipe B. L’occasion de temps-mort commence seulement après que toute la communication avec la table de marque a été terminée et que le remplaçant de B4 est devenu joueur. Cependant les équipes sont autorisées à rejoindre leur banc d’équipe si elles sont conscientes qu’un temps-mort a été demandé même si la période de temps-mort n’a pas formellement commencé.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 18 TEMPS MORT",
    explanation: "Interprétations Art.18/19 disposition n°4 Si, à la suite d’une demande de temps-mort, une faute est commise par une ou l’autre équipe, le temps-mort ne peut pas commencer tant que l’arbitre n’a pas terminé la communication relative à cette faute avec la table de marque. Dans le cas d’une cinquième faute d’un joueur, cette communication inclut la procédure nécessaire au remplacement. Une fois celle-ci terminée, la période de temps-mort doit commencer lorsque l’arbitre siffle et fait le signal de temps-mort."
  },
  {
    numb: 72,
    question: "Une occasion de temps-mort vient juste de se terminer lorsque l’entraîneur A se précipite vers la table de marque en demandant à voix haute un remplacement. Le marqueur réagit et fait retentir le signal par erreur. L’arbitre siffle pour interrompre le jeu et accorde le remplacement. L'arbitre a fait une juste application du règlement.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 18 TEMPS MORT",
    explanation: "Interprétations Art 18/19 - Du fait de l'interruption du jeu par l’arbitre, le ballon est mort et le chronomètre de jeu demeure arrêté. Il en résulte que cela devrait être une occasion de temps-mort ou de remplacement. Cependant, parce que la demande a été faite trop tard, le remplacement ou le temps-mort ne devra pas être accordé. Le jeu doit reprendre immédiatement."
  },
  {
    numb: 73,
    question: "La durée d'un temps-mort est de 50 secondes",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 18 TEMPS MORT",
    explanation: "Art 18.2.1 : Chaque temps-mort doit durer une minute."
  },
  {
    numb: 74,
    question: "L'entraîneur B n'ayant utilisé que deux temps-morts en deuxième mi-temps peut utiliser son troisième temps-mort lors de la prolongation.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 18 TEMPS MORT",
    explanation: "Art 18.2.6 : Les temps-morts non utilisés ne peuvent pas être reportés à la mi-temps ou à la prolongation suivante."
  },
  {
    numb: 75,
    question: "L'entraîneur A a demandé un temps-mort. Juste avant que le marqueur siffle pour le demander à l'arbitre, l'entraîneur A annule son temps mort. Ceci est légal.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 18 TEMPS MORT",
    explanation: "Art 18.3.2 : Une demande de temps-mort peut être retirée seulement avant que le signal du marqueur ait retenti pour cette demande."
  },
  {
    numb: 76,
    question: "L'entraîneur B a demandé un temps mort. L'arbitre siffle une violation et le marqueur siffle pour le répercuter. Immédiatement, l'entraîneur B demande d'annuler son temps-mort. L'arbitre a raison d'annuler le temps-mort.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 18 TEMPS MORT",
    explanation: "Art 18.3.2 : Une demande de temps-mort peut être retirée seulement avant que le signal du marqueur ait retenti pour cette demande."
  },
  {
    numb: 77,
    question: "Dans les deux dernières minutes de la rencontre, l'équipe A marque un panier. Le chronomètre de jeu est immédiatement arrêté. L'entraîneur A peut alors prendre un temps-mort.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 18 TEMPS MORT",
    explanation: "Art 18.2.8 : Aucun temps-mort ne peut être accordé à l'équipe ayant marqué, lorsque le chronomètre de jeu indique 2:00 minutes ou moins dans la quatrième période à la suite d'un panier réussi du terrain."
  },
  {
    numb: 78,
    question: "Dans les deux dernières minutes de la rencontre, l'équipe A marque un panier. Le chronomètre de jeu est immédiatement arrêté. L'arbitre siffle car le ballon est dans les tribunes. L'entraîneur A peut alors prendre un temps-mort.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 18 TEMPS MORT",
    explanation: "Art 18.2.8 : Aucun temps-mort ne peut être accordé à l'équipe ayant marqué, lorsque le chronomètre de jeu indique 2:00 minutes ou moins dans la quatrième période à la suite d'un panier réussi du terrain, à moins qu'un arbitre n'ait interrompu le jeu."
  },
  {
    numb: 79,
    question: "A4 bénéficie de deux lancers-francs. L'équipe A ou B demande un temps-mort après la première tentative de lancer franc. Le temps-mort est immédiatement accordé. C'est légal.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 18 TEMPS MORT",
    explanation: "Interprétations Art 18/19, disposition n°3, exemple 1 b) : A4 bénéficie de deux lancers-francs. L'équipe A ou B demande un temps-mort après la première tentative de lancer franc… Le temps-mort est accordé après le dernier lancer franc s'il est réussi"
  },
  {
    numb: 80,
    question: "A4 bénéficie de deux lancers-francs. L'équipe A ou B demande un temps-mort après la réussite du second lancer franc, mais avant que le ballon soit à la disposition du joueur effectuant la remise en jeu. Le temps-mort est immédiatement accordé. C'est légal.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 18 TEMPS MORT",
    explanation: "Interprétations Art 18/19, disposition n°3, exemple 1 c) : A4 bénéficie de deux lancers-francs. L'équipe A ou B demande un temps-mort après la réussite du second lancer franc mais avant que le ballon soit à la disposition du joueur effectuant la remise en jeu.… Le temps-mort est immédiatement accordé avant la remise en jeu."
  },
  {
    numb: 81,
    question: "A4 bénéficie de deux lancers-francs. L'équipe A ou B demande un temps-mort avant que le ballon soit à la disposition du tireur de lancer franc A4. Le temps-mort doit être accordé immédiatement. C'est légal.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 18 TEMPS MORT",
    explanation: "Interprétations Art 18/19, disposition n°3, exemple 1 a) : A4 bénéficie de deux lancers-francs. L'équipe A ou B demande un temps-mort avant que le ballon soit à la disposition du tireur de lancer franc A4. … Le temps-mort est immédiatement accordé avant la première tentative de lancer franc."
  },
  {
    numb: 82,
    question: "Les deux entraîneurs ont fait une demande de TM (A puis B). A5 est victime d'une faute sur un dunk réussi. A quelle équipe le TM doit-il être accordé ?",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 18 TEMPS MORT",
    explanation: "Art 18.2.7 : Un temps-mort est imputé à l’équipe de l’entraîneur qui en a fait la demande en premier à moins que le temps-mort soit accordé à la suite d’un panier réussi du terrain par les adversaires et sans qu’aucune infraction n’ait été sifflée."
  },
  {
    numb: 83,
    question: "Un temps mort prend fin lorsque l'arbitre siffle et fait signe aux équipes de revenir sur le terrain ?",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 18 TEMPS MORT",
    explanation: "Art 18.3.3 : une période de temps-mort prend fin lorsque l'arbitre fait signe aux équipes de revenir sur le terrain de jeu."
  },
  {
    numb: 84,
    question: "Lors de la dernière minute de la rencontre, A4 tente deux lancers francs. Pendant le second lancer franc, A4 met le pied sur la ligne de lancer franc et une violation est sifflée. L’équipe B demande un temps-mort. Le jeu pourra reprendre par une remise en jeu de l'équipe B en zone avant à hauteur de la ligne de remise en jeu.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 18 TEMPS MORT",
    explanation: "Art.17.2.4; Interprétations 17.10 : Le jeu doit reprendre par une remise jeu de l’équipe B soit depuis la zone arrière dans le prolongement de la ligne des LF soit depuis la zone avant au point de remise en jeu. Le coach, après le temps-mort a le droit de décider et doit l'indiquer clairement à l'arbitre à l'issue du temps-mort, mais si c'est en zone avant ce sera automatiquement à l'opposé de la table de marque (cas de la violation du tireur de LF)"
  },
  {
    numb: 85,
    question: "Une occasion de remplacement prend fin lorsque le ballon est à la disposition d'un joueur pour un premier ou unique lancer franc.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 19 REMPLACEMENT",
    explanation: "Art 19.2.3 : Une occasion de remplacement prend fin lorsque le ballon est à la disposition d'un joueur pour un premier ou unique lancer franc."
  },
  {
    numb: 86,
    question: "Suite à un panier marqué par l'équipe B dans le deuxième quart-temps, avant que l'équipe A fasse la remise en jeu, le marqueur peut siffler remplacement pour un remplaçant de l'équipe A.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 19 REMPLACEMENT",
    explanation: "Art 19.2 : Une occasion de remplacement commence lorsque le ballon devient mort et que le chronomètre de jeu est arrêté."
  },
  {
    numb: 87,
    question: "L'équipe B marque un panier dans le dernier quart-temps à une minute de la fin du temps de jeu. Avant que l'équipe A ne dispose du ballon pour la remise en jeu, le marqueur peut demander un remplacement pour l'équipe A.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 19 REMPLACEMENT",
    explanation: "Art 19.2.2 : Une occasion de remplacement commence pour l'équipe qui ne marque pas, lorsqu'un panier du terrain est marqué alors que le chronomètre de jeu indique 2:00 minutes ou moins, dans la quatrième période."
  },
  {
    numb: 88,
    question: "Une occasion de remplacement prend fin lorsque le ballon est à la disposition d'un joueur pour une remise en jeu.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 19 REMPLACEMENT",
    explanation: "Art 19.2.3 : Une occasion de remplacement prend fin lorsque le ballon est à la disposition d'un joueur pour une remise en jeu."
  },
  {
    numb: 89,
    question: "Le joueur B4 est remplacé. B6 entre sur le terrain. Puis l'entraîneur A demande un temps-mort. Le temps mort est accordé. A la fin du temps-mort, B4 peut revenir sur le terrain",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 19 REMPLACEMENT",
    explanation: "Art 19.2.4 : Un joueur qui est devenu remplaçant ne peut revenir en jeu jusqu'à ce que le ballon redevienne mort après une phase de marche du chronomètre de jeu."
  },
  {
    numb: 90,
    question: "L'équipe B marque un panier dans le dernier quart-temps à une minute de la fin du temps de jeu. Avant que l'équipe A ne dispose du ballon pour la remise en jeu, l'arbitre siffle car le terrain est glissant. Le remplaçant B6 peut alors entrer en jeu.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 19 REMPLACEMENT",
    explanation: "Art 19.2.5 : Aucun remplacement ne peut être accordé à l'équipe ayant marqué lorsque le chronomètre de jeu est arrêté à la suite d'un panier du terrain réussi dans les deux dernières minutes de la quatrième période à moins qu'un arbitre ait interrompu le jeu."
  },
  {
    numb: 91,
    question: "Le remplaçant A9 a demandé un remplacement. Juste avant que le marqueur siffle pour le demander à l'arbitre, A9 annule son remplacement. Ceci est légal.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 19 REMPLACEMENT",
    explanation: "Art 19.3.2 : Une demande de remplacement peut être retirée seulement avant que le signal du marqueur ait retenti pour cette demande."
  },
  {
    numb: 92,
    question: "Le remplaçant B12 a demandé un remplacement. L'arbitre siffle une violation et le marqueur siffle pour le demander à l'arbitre. Immédiatement, B12 demande d'annuler le remplacement. L'arbitre a raison d'annuler le remplacement.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 19 REMPLACEMENT",
    explanation: "Art 19.3.2 : Une demande de remplacement peut être retirée seulement avant que le signal du marqueur ait retenti pour cette demande."
  },
  {
    numb: 93,
    question: "Le remplaçant doit rester à l'extérieur des lignes délimitant le terrain jusqu'à ce que l'arbitre siffle, fasse le signal de remplacement et lui fasse signe de pénétrer sur le terrain de jeu.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 19 REMPLACEMENT",
    explanation: "Art 19.3.4 : Le remplaçant doit rester à l'extérieur des lignes délimitant le terrain jusqu'à ce que l'arbitre siffle, fasse le signal de remplacement et lui fasse signe de pénétrer sur le terrain de jeu."
  },
  {
    numb: 94,
    question: "A4 bénéficie de deux lancers-francs. L'équipe A ou B demande un remplacement après la première tentative de lancer franc. Le remplacement est immédiatement accordé. C'est légal.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 19 REMPLACEMENT",
    explanation: "Interprétations Art 18/19, disposition n°3, exemple 1 b) : A4 bénéficie de deux lancers-francs. L'équipe A ou B demande un remplacement après la première tentative de lancer franc… Le remplacement est accordé après le dernier lancer franc s'il est réussi"
  },
  {
    numb: 95,
    question: "A4 bénéficie de deux lancers-francs. L'équipe A ou B demande un remplacement après la réussite du second lancer franc, mais avant que le ballon soit à la disposition du joueur effectuant la remise en jeu. Le remplacement est immédiatement accordé. C'est légal.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 19 REMPLACEMENT",
    explanation: "Interprétations Art 18/19, disposition n°3, exemple 1 c) : A4 bénéficie de deux lancers-francs. L'équipe A ou B demande un remplacement après la réussite du second lancer franc mais avant que le ballon soit à la disposition du joueur effectuant la remise en jeu.… Le remplacement est immédiatement accordé avant la remise en jeu."
  },
  {
    numb: 96,
    question: "A4 bénéficie de deux lancers-francs. L'équipe A ou B demande un remplacement avant que le ballon soit à la disposition du tireur de lancer franc A4. Le remplacement doit être accordé immédiatement. C'est légal.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 19 REMPLACEMENT",
    explanation: "Interprétations Art 18/19, disposition n°3, exemple 1 a) : A4 bénéficie de deux lancers-francs. L'équipe A ou B demande un remplacement avant que le ballon soit à la disposition du tireur de lancer franc A4. … Le remplacement est immédiatement accordé avant la première tentative de lancer franc."
  },
  {
    numb: 97,
    question: "A4 bénéficie de deux lancers-francs. L'équipe A ou B demande un remplacement après la réussite du second lancer franc, après que le ballon soit à la disposition du joueur effectuant la remise en jeu. Le remplacement est immédiatement accordé. C'est légal.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 19 REMPLACEMENT",
    explanation: "Interprétations Art 18/19, disposition n°3, exemple 1 d) : A4 bénéficie de deux lancers-francs. L'équipe A ou B demande un remplacement après la réussite du second lancer franc mais après que le ballon est à la disposition du joueur effectuant la remise en jeu… Le remplacement n'est pas accordé."
  },
  {
    numb: 98,
    question: "Une demande de remplacement ou de temps mort peut être annulée à tout moment avant que l'arbitre ne siffle pour l'accorder ?",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 19 REMPLACEMENT",
    explanation: "Art 19.3.2 : Une de remplacement ou de temps-mort peut être annulée seulement avant que le signal du marqueur ait retenti pour cette demande."
  },
  {
    numb: 99,
    question: "L'équipe B n'est pas arrivée pour le match à l'heure prévue pour la rencontre. Après 30 minutes, l'arbitre effectue un entre-deux fictif, et l'équipe B a perdu la rencontre par forfait.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 20 FORFAIT",
    explanation: "Art 20.1 : Une équipe perd la rencontre par forfait si quinze minutes après l'heure fixée pour le commencement de la rencontre, elle n'est pas présente ou n'est pas en mesure d'aligner cinq joueurs prêts à jouer."
  },
  {
    numb: 100,
    question: "L'équipe B n'est pas arrivée pour la rencontre à l'heure prévue. Après 15 minutes, l'arbitre effectue un entre-deux fictif, et l'équipe B a perdu la rencontre par forfait.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 20 FORFAIT",
    explanation: "Art 20.1 : Une équipe perd la rencontre par forfait si quinze minutes après l'heure fixée pour le commencement de la rencontre, elle n'est pas présente ou n'est pas en mesure d'aligner cinq joueurs prêts à jouer."
  },
  {
    numb: 101,
    question: "L'équipe B a cinq joueurs pour commencer la rencontre, mais l'un d'entre-eux a un plâtre au bras. Il sera sur le terrain en tenue pour l'entre-deux, mais sortira dès le premier ballon mort et chronomètre de jeu arrêté. C'est légal.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 20 FORFAIT",
    explanation: "Art 20.1 : Une équipe perd la rencontre par forfait si quinze minutes après l'heure fixée pour le commencement de la rencontre, elle n'est pas présente ou n'est pas en mesure d'aligner cinq joueurs prêts à jouer."
  },
  {
    numb: 102,
    question: "Alors qu'il ne reste que 2 joueurs de l'équipe A sur le terrain, le joueur A4 commet sa cinquième faute. La rencontre est alors arrêtée et l'équipe A perd la rencontre par défaut.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 21 DEFAUT",
    explanation: "Art 21.1 : Une équipe perd la rencontre par défaut si, au cours de la rencontre, le nombre de ses joueurs sur le terrain de jeu, prêts à jouer, est inférieur à deux."
  },
  {
    numb: 103,
    question: "Alors qu'il ne reste que 3 joueurs de l'équipe B sur le terrain, le joueur B8 commet sa cinquième faute. La rencontre est alors arrêtée et l'équipe B perd la rencontre par défaut.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 21 DEFAUT",
    explanation: "Art 21.1 : Une équipe perd la rencontre par défaut si, au cours de la rencontre, le nombre de ses joueurs sur le terrain de jeu, prêts à jouer, est inférieur à deux."
  },
  {
    numb: 104,
    question: "L'équipe B n'est pas arrivée pour la rencontre à l'heure prévue. Après 15 minutes, l'arbitre effectue un entre-deux fictif, et l'équipe B a perdu la rencontre par défaut.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 21 DEFAUT",
    explanation: "Art 21.1 : Une équipe perd la rencontre par défaut si, au cours de la rencontre, le nombre de ses joueurs sur le terrain de jeu, prêts à jouer, est inférieur à deux. Dans le cas cité, elle perd la rencontre par forfait."
  },
  {
    numb: 105,
    question: "A7 sort le ballon ligne de fond juste sous le panier. La remise en jeu sera donc pour l'équipe B, ligne de fond, à l'endroit précis où le ballon est sorti.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 22 VIOLATIONS",
    explanation: "Art 22.2 : Le ballon doit être remis à l'équipe adverse pour une remise en jeu à l'endroit le plus proche de l'infraction sauf directement derrière le panneau."
  },
  {
    numb: 106,
    question: "A5 dribble dans sa zone avant entre la ligne médiane et la ligne à trois points. Une violation \"trois secondes\" est sifflée à A14. La remise en jeu aura lieu à l'endroit le plus proche de la violation",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 22 VIOLATIONS",
    explanation: "Art 22.2 : Le ballon doit être remis à l'équipe adverse pour une remise en jeu à l'endroit le plus proche de l'infraction sauf directement derrière le panneau."
  },
  {
    numb: 107,
    question: "A5 dribble dans sa zone avant entre la ligne médiane et la ligne à trois points. Une violation \"trois secondes\" est sifflée à A14. La remise en jeu aura lieu sur la ligne de fond à l'endroit le plus proche de la violation.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 22 VIOLATIONS",
    explanation: "Art 22.2 : Le ballon doit être remis à l'équipe adverse pour une remise en jeu à l'endroit le plus proche de l'infraction sauf directement derrière le panneau."
  },
  {
    numb: 108,
    question: "Le joueur A4 dribble près de la ligne de touche. Il perd un peu l'équilibre, et met un pied à l'extérieur du terrain, sans toucher le ballon. Il revient dans le terrain et reprend son dribble. Cette action est légale.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 23 HORS LIMITES DU TERRAIN",
    explanation: "Art 23.1.2 : Le ballon est hors des limites du terrain lorsqu'il touche un joueur qui se trouve hors des limites du terrain."
  },
  {
    numb: 109,
    question: "A10 tire à trois points. Le ballon rebondit sur l'anneau, passe par-dessus le panneau et retombe derrière sans rien toucher. A9 récupère le ballon. Cette action est légale.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 23 HORS LIMITES DU TERRAIN",
    explanation: "Art 23.1.2 : Le ballon est hors des limites du terrain lorsqu'il touche la face arrière du panneau."
  },
  {
    numb: 110,
    question: "B8 dribble et le ballon lui échappe maladroitement des mains à la fin du dribble. Il reprend alors le ballon à deux mains. Il a le droit de redribbler.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 24 DRIBBLE",
    explanation: "Art 24.2 : Un joueur ne peut pas dribbler une seconde fois après avoir terminé son premier dribble à moins qu'il ait perdu le contrôle d'un ballon vivant sur le terrain de jeu par suite d'une perte accidentelle du contrôle du ballon qui touche ou a été touché par un autre joueur."
  },
  {
    numb: 111,
    question: "A12 dribble et le ballon lui échappe maladroitement des mains à la fin du dribble. Il reprend alors le ballon à deux mains. Cette action est légale.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 24 DRIBBLE",
    explanation: "Art 24.1.3 : On considère que le ballon vivant a échappé au joueur ('fumble') lorsqu'il le perd maladroitement et qu'il en reprend le contrôle sur le terrain."
  },
  {
    numb: 112,
    question: "A5 part en contre attaque et dribble. Entre son premier et son deuxième dribble, il a effectué trois pas. Cette action est légale.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 24 DRIBBLE",
    explanation: "Art 24.1.2 : Il n'y a pas de limite quant au nombre de pas qu'un joueur peut faire quand le ballon n'est pas en contact avec sa main."
  },
  {
    numb: 113,
    question: "A4 dribble en contre attaque. Après son premier dribble, il fait 3 pas, sans garder le ballon dans sa main, ou bien que le ballon repose dans sa main, avant de dribbler une deuxième fois. L'arbitre doit siffler.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 24 DRIBBLE",
    explanation: "Art 24.1.2 : Il n'y a pas de limite quant au nombre de pas qu'un joueur peut faire quand le ballon n'est pas en contact avec sa main."
  },
  {
    numb: 114,
    question: "A1 n'a pas encore dribblé et il lance le ballon contre le panneau de l'équipe adverse et l'attrape avant un autre joueur Doit-on siffler une violation ?",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 24 DRIBBLE",
    explanation: "Interpretation 24.3 : L'action est légale et n'est pas considérée comme un dribble; le joueur peut passer, tirer ou partir en dribble."
  },
  {
    numb: 115,
    question: "A6 arrête son dribble et tient le ballon à deux mains. Son défenseur B8 tape sur le ballon qui rebondit par terre. A6 le reprend tout de suite. Il part ensuite en dribblant. Cette action est légale.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 24 DRIBBLE",
    explanation: "Art 24.2 : Un joueur ne peut pas dribbler une seconde fois après avoir terminé son premier dribble à moins qu'il ait perdu le contrôle d'un ballon vivant sur le terrain de jeu par suite d'un ballon touché par un adversaire."
  },
  {
    numb: 116,
    question: "B8 arrête son dribble et tient le ballon à deux mains. Son défenseur A7 tape sur le ballon qui rebondit par terre. B8 le reprend tout de suite. Il part ensuite en dribblant. L'arbitre siffle reprise de dribble. L'arbitre a fait une juste application du règlement de jeu.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 24 DRIBBLE",
    explanation: "Art 24.2 : Un joueur ne peut pas dribbler une seconde fois après avoir terminé son premier dribble à moins qu'il ait perdu le contrôle d'un ballon vivant sur le terrain de jeu par suite d'un ballon touché par un adversaire."
  },
  {
    numb: 117,
    question: "La règle du marcher ne peut s'appliquer que pour un joueur qui tient un ballon vivant sur le terrain de jeu.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 25 MARCHER",
    explanation: "Art 25.1.1 : Le marcher est le déplacement illégal d'un ou des deux pieds en dehors des limites définies dans cet article, alors que le joueur tient un ballon vivant sur le terrain de jeu."
  },
  {
    numb: 118,
    question: "A13 tente un tir au panier à mi-distance. Alors qu'il a décollé les deux pieds du sol, B7 le contre et A13 retombe au sol sur un pied avec le ballon dans les mains. L'arbitre a fait une juste application en laissant jouer.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 25 MARCHER",
    explanation: "Art 25.2.2 : Pour passer ou tirer au panier le joueur peut lever le pied de pivot mais aucun pied ne peut retourner au sol avant que le ballon ait quitté la ou les main(s),"
  },
  {
    numb: 119,
    question: "La règle des trois secondes ne s'applique que lorsque l'équipe contrôle un ballon vivant sur le terrain en zone avant.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 26 3 SECONDES",
    explanation: "Art 26.1.1 : Un joueur ne peut pas rester plus de trois secondes consécutives dans la zone restrictive adverse alors que son équipe a le contrôle d'un ballon vivant dans sa zone avant et que le chronomètre de jeu est en marche."
  },
  {
    numb: 120,
    question: "L'équipe A bénéficie d'une remise en jeu dans sa zone avant et c'est A10 qui l'effectue. Alors qu'il a le ballon dans les mains, A7 est dans la zone restrictive depuis 4 secondes. Cette action est légale.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 26 3 SECONDES",
    explanation: "Art 26.1.1 : Un joueur ne peut pas rester plus de trois secondes consécutives dans la zone restrictive adverse alors que son équipe a le contrôle d'un ballon vivant dans sa zone avant et que le chronomètre de jeu est en marche."
  },
  {
    numb: 121,
    question: "B15 effectue une remise en jeu dans sa zone avant. Le ballon est dans ses mains, lorsque l'arbitre siffle violation \"trois secondes\" à B11 qui est dans la zone restrictive depuis 4 secondes. L'arbitre a pris la bonne décision.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 26 3 SECONDES",
    explanation: "Art 26.1.1 : Un joueur ne peut pas rester plus de trois secondes consécutives dans la zone restrictive adverse alors que son équipe a le contrôle d'un ballon vivant dans sa zone avant et que le chronomètre de jeu est en marche."
  },
  {
    numb: 122,
    question: "A8 est dans la zone restrictive depuis 2 secondes lorsque A10 tire au panier à trois points. Le ballon ne touche pas l'anneau et A8 le récupère. A8 effectue un dribble et tire. Il y a violation à la règle des trois secondes.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 26 3 SECONDES",
    explanation: "Art 26.1.1 : Un joueur ne peut pas rester plus de trois secondes consécutives dans la zone restrictive adverse alors que son équipe a le contrôle d'un ballon vivant dans sa zone avant et que le chronomètre de jeu est en marche. Art 14.1.3 : Le contrôle d'équipe prend fin lorsque le ballon a quitté la ou les mains du joueur (ici A10) lors d'un tir au panier."
  },
  {
    numb: 123,
    question: "La remise en jeu suite à une violation \"trois secondes\" sifflée, se fera ligne de fond (sauf si un panier est annulé).",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 26 3 SECONDES",
    explanation: "Art 22.2 : Le ballon doit être remis à l'équipe adverse pour une remise en jeu à l'endroit le plus proche de l'infraction sauf directement derrière le panneau."
  },
  {
    numb: 124,
    question: "A5 effectue une remise en jeu en zone avant. Lorsque A6 reçoit le ballon sur le terrain, A12 est dans la zone restrictive adverse depuis 4s. A12 doit-il être sanctionné pour une violation à la règle des 3s ?",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 26 3 SECONDES",
    explanation: "Art 26.1.1 : Un joueur ne peut pas rester plus de trois secondes consécutives dans la zone restrictive adverse alors que son équipe a le contrôle d'un ballon vivant dans sa zone avant et que le chronomètre de jeu est en marche."
  },
  {
    numb: 125,
    question: "A5 effectue une remise en jeu en zone arrière. A12 se trouve immobile dans la zone restrictive adverse. A6 dribble le ballon dans sa zone arrière depuis 5 secondes lorsque l'arbitre siffle 3s à A12 qui n'est pas sorti de la zone restrictive adverse. L'arbitre a fait une mauvaise application du règlement.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 26 3 SECONDES",
    explanation: "Art 26.1.1 : Un joueur ne peut pas rester plus de trois secondes consécutives dans la zone restrictive adverse alors que son équipe a le contrôle d'un ballon vivant dans sa zone avant et que le chronomètre de jeu est en marche."
  },
  {
    numb: 126,
    question: "A4 tient le ballon dans sa zone arrière et B7 vient défendre très près de lui en essayant d'attraper le ballon. Après que A4 ait gardé le ballon pendant cinq secondes, l'arbitre siffle violation. L'arbitre a pris la bonne décision.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 27 JOU. ETROITEMENT MARQUE",
    explanation: "Art 27.2 : Un joueur étroitement marqué doit passer, tirer ou dribbler le ballon dans un délai de cinq secondes."
  },
  {
    numb: 127,
    question: "B6 dribble dans sa zone avant et arrête son dribble. A5 son défenseur à une distance d'environ deux mètres reste face à lui. B6 garde le ballon cinq secondes dans ses mains, alors l'arbitre siffle violation. L'arbitre a pris la bonne décision.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 27 JOU. ETROITEMENT MARQUE",
    explanation: "Art 27.1 : Un joueur qui tient un ballon vivant sur le terrain de jeu est étroitement marqué lorsqu'un adversaire est en position de défense active à une distance inférieure à un mètre."
  },
  {
    numb: 128,
    question: "B6 reçoit le ballon dans sa zone avant. Il reste 16 secondes à jouer. Il garde le ballon dans les mains et attend que le temps de jeu diminue. Son adversaire direct défend à 2 mètres de lui. B6 garde le ballon cinq secondes dans ses mains, alors l'arbitre siffle violation. L'arbitre a pris la bonne décision.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 27 JOU. ETROITEMENT MARQUE",
    explanation: "Art 27.1 : Un joueur qui tient un ballon vivant sur le terrain de jeu est étroitement marqué lorsqu'un adversaire est en position de défense active à une distance inférieure à un mètre."
  },
  {
    numb: 129,
    question: "Il reste 20 secondes à jouer et A4 dribble sur place, sans bouger ses appuis, dans sa zone avant. B5 défend proche de lui et essaie de prendre le ballon. A4 ne bouge pas, mais dribble. L'arbitre n'a pas sifflé après cinq secondes. L'arbitre a pris la bonne décision.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 27 JOU. ETROITEMENT MARQUE",
    explanation: "Art 27.2 : Un joueur étroitement marqué doit passer, tirer ou dribbler le ballon dans un délai de cinq secondes."
  },
  {
    numb: 130,
    question: "L'équipe A contrôlait le ballon depuis 5 secondes dans sa zone arrière lorsqu'un ballon tenu est sifflé. L'équipe A bénéficie du droit à la prochaine remise en jeu de possession alternée. De combien de secondes l'équipe A bénéficie-t-elle pour amener le ballon dans sa zone avant ?",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 28 8 SECONDES",
    explanation: "Interprétations, Art 28, disposition n°2 : L'équipe A ne bénéficie que de trois secondes pour amener le ballon dans sa zone avant"
  },
  {
    numb: 131,
    question: "A10 se tient à cheval sur la ligne médiane. Il reçoit un ballon de A12 qui se trouve dans sa zone arrière. A10 renvoie ensuite le ballon à A12 qui est toujours dans sa zone arrière. L'arbitre doit continuer à compter les huit secondes.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 28 8 SECONDES",
    explanation: "Interprétations, Art 28, disposition n°3 ex1 : Action légale. A10 n'a pas les deux pieds au contact de la zone avant, et de ce fait est autorisé à passer le ballon en zone arrière. Le décompte de huit secondes doit se poursuivre."
  },
  {
    numb: 132,
    question: "A12 dribble et s'arrête à cheval sur la ligne médiane. Il passe le ballon à A10 également à cheval sur la ligne médiane. Le décompte des 8 secondes doit s'arrêter.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 28 8 SECONDES",
    explanation: "Interprétations, Art 28, disposition n°3 ex3 : Action légale. A12 n'a pas les deux pieds au contact de la zone avant, et de ce fait est autorisé à passer le ballon à A10 qui n'est pas non plus en zone avant. Le décompte de huit secondes doit se poursuivre."
  },
  {
    numb: 133,
    question: "A4 dribble depuis sa zone arrière et arrête sa progression vers l'avant tout en continuant à dribbler alors que ses deux pieds sont dans la zone avant tandis que le ballon est dribblé en zone arrière. Puis A4 retourne en zone arrière. L'arbitre doit poursuivre le décompte des huit secondes.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 28 8 SECONDES",
    explanation: "Interprétations, Art 28, disposition n°3 ex4 :Le dribbleur A4 continue à être en zone arrière jusqu'à ce que, à la fois ses deux pieds et le ballon touchent la zone avant. Le décompte des huit secondes doit se poursuivre."
  },
  {
    numb: 134,
    question: "Lors d'une remise en jeu, le décompte des 24 secondes commence lorsque le ballon est touché par un joueur sur le terrain.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 29 24 SECONDES",
    explanation: "Art 29.1.1 : Chaque fois, que lors d'une remise en jeu, le ballon touche ou est légalement touché par n'importe quel joueur sur le terrain de jeu et que l'équipe du joueur qui effectue la remise en jeu conserve le contrôle du ballon, cette équipe doit tenter un tir au panier dans le délai de 24 secondes."
  },
  {
    numb: 135,
    question: "Lors de l'entre-deux initial de début de match, le sauteur A7 frappe le ballon et A10 le récupère. Le décompte des 24 secondes commence lorsque A7 a frappé le ballon.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 29 24 SECONDES",
    explanation: "Art 29.1.1 : Chaque fois, qu'un joueur prend le contrôle d'un ballon vivant sur le terrain de jeu, cette équipe doit tenter un tir au panier dans le délai de 24 secondes."
  },
  {
    numb: 136,
    question: "L'équipe B contrôle le ballon. B13 effectue une passe à B10. A5 dévie la passe et c'est A11 qui contrôle le ballon. Le décompte des 24 secondes pour l'équipe A commence lorsque A11 contrôle le ballon.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 29 24 SECONDES",
    explanation: "Art 29.1.1 : Chaque fois, qu'un joueur prend le contrôle d'un ballon vivant sur le terrain de jeu, cette équipe doit tenter un tir au panier dans le délai de 24 secondes."
  },
  {
    numb: 137,
    question: "Pour être considéré comme tir au panier dans les 24 secondes, il faut que le ballon touche l'anneau.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 29 24 SECONDES",
    explanation: "Art 29.1.1 : (…) le ballon doit toucher l'anneau ou pénétrer dans le panier."
  },
  {
    numb: 138,
    question: "L'équipe A contrôle le ballon dans sa zone avant. A7 passe le ballon à A13. B6 dévie la passe et A13 reprend le ballon dans sa zone arrière. Il y a retour en zone",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 30 REZ",
    explanation: "Art 30.1.2 : Le ballon est considéré comme étant retourné illégalement dans la zone arrière lorsqu'un joueur de l'équipe qui contrôle le ballon vivant est le dernier à toucher le ballon dans sa zone avant et qu'ensuite ce même joueur ou un coéquipier est le premier à le toucher dans sa zone arrière."
  },
  {
    numb: 139,
    question: "A4 effectue une remise en jeu dans sa zone avant près de la ligne médiane. Il manque sa passe et son coéquipier A12 parvient à s'emparer du ballon en zone arrière. Le ballon n'a pas touché le sol en zone avant. L'arbitre siffle un retour en zone. Il a fait une bonne application du règlement.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 30 REZ",
    explanation: "Art 30.1.2 : Le ballon est considéré comme étant retourné illégalement dans la zone arrière lorsqu'un joueur de l'équipe qui contrôle le ballon vivant est le dernier à toucher le ballon dans sa zone avant et qu'ensuite ce même joueur ou un coéquipier est le premier à le toucher dans sa zone arrière.Cette restriction s'applique à toutes les situations se produisant dans la zone avant d'une équipe y compris les remises en jeu."
  },
  {
    numb: 140,
    question: "A5 dribble dans sa zone arrière et avance vers sa zone avant. Son défenseur B8 tape le ballon et l'envoie dans la zone avant de l'équipe A. B10 récupère le ballon dans sa zone arrière. Il y a retour en zone de l'équipe B.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 30 REZ",
    explanation: "Art 30.1.2 : Le ballon est considéré comme étant retourné illégalement dans la zone arrière lorsqu'un joueur de l'équipe qui contrôle le ballon vivant est le dernier à toucher le ballon dans sa zone avant et qu'ensuite ce même joueur ou un coéquipier est le premier à le toucher dans sa zone arrière."
  },
  {
    numb: 141,
    question: "B13 dribble dans sa zone arrière et avance vers sa zone avant. Son défenseur A5 tape le ballon et l'envoie dans la zone avant de l'équipe B. A6 récupère le ballon dans sa zone arrière et dribble jusque dans la zone avant. L'arbitre n'a pas sifflé retour en zone. L'arbitre a pris la bonne décision.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 30 REZ",
    explanation: "Art 30.1.2 : Le ballon est considéré comme étant retourné illégalement dans la zone arrière lorsqu'un joueur de l'équipe qui contrôle le ballon vivant est le dernier à toucher le ballon dans sa zone avant et qu'ensuite ce même joueur ou un coéquipier est le premier à le toucher dans sa zone arrière."
  },
  {
    numb: 142,
    question: "Proche de la ligne médiane, mais dans sa zone arrière, A7 passe le ballon à A10. B5 qui est lui aussi dans la zone arrière de l'équipe A saute, attrape le ballon en l'air, et retombe dans dans la zone avant de l'équipe A. Il y a retour en zone.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 30 REZ",
    explanation: "Art 30.1.2 : (…) Cette restriction ne s'applique pas à un joueur qui saute depuis sa zone avant, prend un contrôle du ballon alors qu'il est encore en l'air et qui retombe ensuite dans la zone arrière de son équipe."
  },
  {
    numb: 143,
    question: "Proche de la ligne médiane, A8 saute depuis sa zone avant, intercepte une passe entre B5 et B6 en prenant le contrôle du ballon alors qu'il est encore en l'air et retombe ensuite dans la zone arrière de son équipe. Cette action est légale.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 30 REZ",
    explanation: "Art 30.1.2 : (…) Cette restriction ne s'applique pas à un joueur qui saute depuis sa zone avant, prend un contrôle du ballon alors qu'il est encore en l'air et qui retombe ensuite dans la zone arrière de son équipe."
  },
  {
    numb: 144,
    question: "Le joueur A5 tire au panier. Le ballon tape le panneau au-dessus du niveau de l'anneau, puis B10 contre le ballon. Cette action est légale.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 31 INTERVENTIONS",
    explanation: "Art 31.2.1 : Empêcher illégalement le ballon d'atteindre le panier lors d'un tir se produit lorsqu'un joueur touche le ballon alors qu'il est entièrement au-dessus du niveau de l'anneau et après qu'il a touché le panneau."
  },
  {
    numb: 145,
    question: "B8 tire un lay up, le ballon touche le panneau sous l'anneau, puis le défenseur B10 le contre. Cette action est légale",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 31 INTERVENTIONS",
    explanation: "Art 31.2.1 : Empêcher illégalement le ballon d'atteindre le panier lors d'un tir se produit lorsqu'un joueur touche le ballon alors qu'il est entièrement au-dessus du niveau de l'anneau et après qu'il a touché le panneau."
  },
  {
    numb: 146,
    question: "Lors d'un tir de B10 proche du cercle, le ballon est en phase montante lorsque A9 le touche, le panier est tout de même marqué. L'arbitre doit siffler",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 31 INTERVENTIONS",
    explanation: "Art 31.2.1 : Empêcher illégalement le ballon d'atteindre le panier lors d'un tir se produit lorsqu'un joueur le touche alors qu'il est entièrement au-dessus du niveau de l'anneau et qu'il est dans sa phase descendante vers le panier."
  },
  {
    numb: 147,
    question: "B9 tire à mi-distance, et alors que le ballon descend vers le cercle, A10 le dévie. Cette action est légale.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 31 INTERVENTIONS",
    explanation: "Art 31.2.1 : Empêcher illégalement le ballon d'atteindre le panier lors d'un tir se produit lorsqu'un joueur touche le ballon alors qu'il est entièrement au-dessus du niveau de l'anneau et qu'il est dans sa phase descendante vers le panier. Art 31.3.2 Violation commise par un défenseur dans la zone à 2 points. 2 points accordés à B9."
  },
  {
    numb: 148,
    question: "A8 tire au panier, le ballon est en l'air, B10 tape sur le panneau, et fait vibrer le panier de telle manière que cela empêche le ballon de rentrer dans le panier. L'arbitre doit siffler violation.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 31 INTERVENTIONS",
    explanation: "Art 31.2.4 : L'intervention illégale se produit lorsqu'un joueur fait vibrer le panier ou s'accroche de telle manière que, selon le jugement de l'arbitre, cela empêche le ballon de pénétrer, ou l'a fait pénétrer dans le panier;"
  },
  {
    numb: 149,
    question: "Lors d'un tir de A5, le ballon est en contact avec l'anneau et B10 touche le panneau. Le panier est manqué. L'arbitre doit accorder le panier.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 31 INTERVENTIONS",
    explanation: "Art 31.2.4 : L'intervention illégale se produit lorsque lors d'un tir au panier, un joueur touche le panier ou le panneau alors que le ballon est en contact avec l'anneau."
  },
  {
    numb: 150,
    question: "Lors d'un tir de B10, le ballon est en contact avec l'anneau et B4 touche le panneau. Le panier rentre. L'arbitre doit accorder le panier.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 31 INTERVENTIONS",
    explanation: "Art 31.2.4 : L'intervention illégale se produit lorsque lors d'un tir au panier, un joueur touche le panier ou le panneau alors que le ballon est en contact avec l'anneau. Art 31.3.1 Si la violation est commise par un attaquant, aucun point ne peut être accordé."
  },
  {
    numb: 151,
    question: "A4 bénéficie de 2 LF. Pendant le dernier LF, B5 chasse le ballon alors que celui-ci est en contact avec l'anneau. C'est une violation. L'arbitre doit donc accorder le LF.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 31 INTERVENTIONS",
    explanation: "Art 31.2.3 : les restrictions du goaltending s'appliquent jusqu'à ce que le ballon touche l'anneau. Ici, le jeu doit continuer."
  },
  {
    numb: 152,
    question: "A5 dribble. Son défenseur B10 peut se placer proche de lui (moins d'un mètre).",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 33 CONTACT",
    explanation: "Art 33.4 : Lors du marquage d'un joueur qui contrôle le ballon (il le tient ou le dribble), les éléments de temps et de distances ne s'appliquent pas."
  },
  {
    numb: 153,
    question: "B10 veut se démarquer pour recevoir le ballon. A5 peut le coller et être très proche de lui s'il ne le tient pas.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 33 CONTACT",
    explanation: "Art 33.5 : Un joueur qui ne contrôle pas le ballon doit se déplacer librement (…) Lors du marquage, les éléments de temps et de distance doivent s'appliquer (…) jamais moins d'un pas"
  },
  {
    numb: 154,
    question: "A8 saute pour tirer au panier. Alors qu'il est en l'air, B10 vient se placer droit devant lui. A8 retombe sur B10. L'arbitre siffle faute à A8. L'arbitre a eu raison.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 33 CONTACT",
    explanation: "Art 33.6 : Un joueur ne peut pas se mettre sur le chemin de l'adversaire après que ce dernier ait sauté."
  },
  {
    numb: 155,
    question: "A8 tire au panier et le marque. En même temps, l'arbitre siffle une double faute. Il accorde le panier et donne le ballon à l'équipe A pour une remise en jeu à l'endroit le plus proche d'où la double faute a été commise. C'est une juste application du règlement.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 35 DOUBLE FAUTE",
    explanation: "Art 35.2 Si approximativement en même temps que la double faute, un panier du terrain ou un dernier ou unique lancer franc est marqué, le ballon doit être remis à l’équipe adverse à celle qui a marqué pour une remise en jeu à n’importe quel endroit de la ligne de fond."
  },
  {
    numb: 156,
    question: "Il y a une situation d'entre-deux lorsqu'une double faute est commise alors qu'aucune équipe ne contrôle le ballon",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 35 DOUBLE FAUTE",
    explanation: "Art 35.2 : Une faute personnelle sera infligée à chaque fautif. Aucun lancer franc ne doit être accordé et le jeu doit reprendre comme suit : Aucune équipe n’avait le contrôle du ballon ou n’y avait droit, il y a situation d’entre-deux"
  },
  {
    numb: 157,
    question: "Lors d'une REJ effectuée par B4, A15 reçoit un avertissement pour une intervention illégale sur REJ. Cet avertissement doit être communiqué à l'entraîneur A.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 36 TECHNIQUE",
    explanation: "Interprétations Art 38 disposition n°1 - L'avertissement doit être communiqué à l'entraîneur A et doit s'appliquer à tous les membres de l'équipe A pour des actions similaires pour le reste de la rencontre"
  },
  {
    numb: 158,
    question: "B12 est averti par l'arbitre pour une action de flopping. Les arbitres doivent communiquer cet avertissement à l'entraîneur A.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 36 TECHNIQUE",
    explanation: "Interprétations Art 38 disposition n°1- L'avertissement doit être communiqué à l'entraîneur B et doit s'appliquer à tous les membres de l'équipe B pour des actions similaires pour le reste de la rencontre"
  },
  {
    numb: 159,
    question: "Même après l'inscription du cinq de départ et la signature de la feuille de marque, n'importe quel joueur de l'équipe A pourra tirer le lancer-franc résultant d'une faute technique sifflée avant le début de la rencontre.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 36 TECHNIQUE",
    explanation: "Interprétations Art.38.6.2 - Un joueur désigné parmi le cinq de départ doit tenter le lancer franc. Un remplacement ne peut pas être accordé avant que le temps de jeu ait commencé."
  },
  {
    numb: 160,
    question: "Le joueur B7 s'adresse de façon irrespectueuse à un arbitre car il est en désaccord avec sa décision. L'arbitre doit le sanctionner d'une faute technique.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 36 TECHNIQUE",
    explanation: "Art 38.3.1 : Une faute technique est une faute de comportement de joueur sans contact comprenant mais non limitée aux faits de : s’adresser irrespectueusement aux arbitres, au commissaire, aux officiels de table, aux membres du banc d’équipe ou aux adversaires"
  },
  {
    numb: 161,
    question: "Un défenseur empêche illégalement le ballon d'atteindre le panier lors du dernier ou unique lancer franc. Un point sera accordé à l'équipe attaquante et l'arbitre doit avertir le défenseur ayant commis l'infraction.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 36 TECHNIQUE",
    explanation: "Art 38.3.1 : Pour un défenseur, empêcher illégalement le ballon d’atteindre le panier lors du dernier ou unique lancer franc est une infraction. Un (1) point sera accordé à l’équipe attaquante suivi par la sanction de faute technique contre le défenseur (soit 1 LF sans rebondeur et le ballon est remis à l'équipe qui défendait, pour une remise en jeu ligne de fond étant donné que le point du LF a été accordé suite à la violation)"
  },
  {
    numb: 162,
    question: "Une faute technique d'un joueur ne doit pas compter dans les fautes d'équipe.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 36 TECHNIQUE",
    explanation: "Art 38.4.1 : Si une faute technique est commise : - par un joueur, une faute technique doit lui être alors infligée en tant que faute de joueur et doit compter comme une faute d’équipe"
  },
  {
    numb: 163,
    question: "Pour juger si une faute est antisportive ou non, l'arbitre doit juger l'intention du joueur fautif.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 37 FAS",
    explanation: "Art 36 : L'arbitre doit juger seulement l'action."
  },
  {
    numb: 164,
    question: "Un joueur doit être disqualifié lorsqu'il est sanctionné de 2 fautes antisportives.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 37 FAS",
    explanation: "Art 36.2.3 : Un joueur doit être disqualifié lorsqu’il est sanctionné de deux (2) fautes antisportives."
  },
  {
    numb: 165,
    question: "A6 est disqualifié parce qu'il vient de commettre sa 2ème faute antisportive. Comme il ne s'agit pas d'une faute disqualifiante, il peut rester sur le banc de son équipe.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 37 FAS",
    explanation: "Art 37.2.2 : Chaque fois qu’un fautif est disqualifié en conformité selon les articles correspondants de ce règlement, il doit se rendre et demeurer dans le vestiaire de son équipe pour toute la durée de la rencontre ou, s’il le désire, il peut quitter le bâtiment."
  },
  {
    numb: 166,
    question: "Un joueur disqualifié peut assister à la fin de la rencontre depuis les tribunes.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 38 DISQUALIFIANTE",
    explanation: "Art 38.3.2 : Chaque fois qu’un fautif est disqualifié en conformité selon les articles correspondants de ce règlement, il doit se rendre et demeurer dans le vestiaire de son équipe pour toute la durée de la rencontre ou, s’il le désire, il peut quitter le bâtiment."
  },
  {
    numb: 167,
    question: "A8 est sanctionné d'une faute technique en 1ère période. Vers la fin du 3ème quart-temps, il est à nouveau sanctionné d'une faute technique. Il est automatiquement disqualifié",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 38 DISQUALIFIANTE",
    explanation: "Int. 36-2.3 Principe Disqualification pour 2 fautes techniques Un joueur sanctionné de 2 fautes techniques doit être disqualifié. Art. 37.2.3 Un joueur doit être disqualifié pour le reste de la rencontre lorsqu’il est sanctionné soit de 2 fautes antisportives, soit de 2 fautes techniques, soit d’une faute antisportive et d’une et d’une faute technique."
  },
  {
    numb: 168,
    question: "A8 est sanctionné d'une faute disqualifiante après avoir tenu des propos menaçants envers l'arbitre. L'équipe B bénéficie de 2LF qui peuvent être tirés par n'importe quel joueur désigné par l'entraîneur.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 38 DISQUALIFIANTE",
    explanation: "Art 38.3.3 Un ou des lancer(s)-franc(s) doivent être accordés : o A tout adversaire désigné par l’entraîneur en cas de faute sans contact, o Au joueur sur lequel la faute a été commise en cas de contact."
  },
  {
    numb: 169,
    question: "Un joueur doit être disqualifié dès lors qu'il est sanctionné de 3 fautes antisportives.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 38 DISQUALIFIANTE",
    explanation: "Art 36.2.3 : Un joueur doit être disqualifié lorsqu’il est sanctionné de deux (2) fautes antisportives."
  },
  {
    numb: 170,
    question: "L'entraîneur de l'équipe A est disqualifié. Il n'y a pas d'entraîneur adjoint. N'importe quel joueur de l'équipe peut alors endosser le rôle d'entraîneur.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 38 DISQUALIFIANTE",
    explanation: "Art 38.1.2 : Un entraîneur qui a été disqualifié doit être remplacé par l’entraîneur adjoint inscrit sur la feuille de marque. S’il n’y a pas d’entraîneur adjoint inscrit sur la feuille de marque, il doit être remplacé par le capitaine (CAP) et doit être inscrit dans la case de l'entraîneur adjoint (en cas de sanctions de faute technique de banc \"B\" ou d'entraîneur \"C\")."
  },
  {
    numb: 171,
    question: "Après une faute disqualifiante, 2 LF sont toujours accordés à l'équipe adverse.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 38 DISQUALIFIANTE",
    explanation: "Art 38.3.4 Le nombre de lancers-francs accordés doit être attribué comme suit : o Si la faute commise est une faute sans contact : 2 lancers-francs o Si la faute est commise sur un joueur qui n’est pas en action de tir : 2 lancers-francs, o Si la faute est commise sur un joueur en action de tir : le panier compte s’il est réussi et 1 lancer-franc est accordé en supplément, o Si la faute est commise sur un joueur tirant au panier et si le panier n'est pas marqué : 2 ou 3 lancers-francs sont accordés. o Si la faute est une disqualification d’un entraineur : 2 lancers-francs"
  },
  {
    numb: 172,
    question: "Pendant une bagarre, tout remplaçant, joueur exclu ou accompagnateur qui quitte les limites de son banc d'équipe doit être disqualifié, même s'il ne participe pas à la bagarre",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 39 BAGARRE",
    explanation: "Art 39.2.1 : Tout remplaçant, joueur exclu ou accompagnateur qui quitte les limites du banc d’équipe pendant une bagarre ou pendant toute situation pouvant conduire à une bagarre doit être disqualifié"
  },
  {
    numb: 173,
    question: "Un entraîneur qui quitte sa zone de banc lors d'une bagarre doit obligatoirement être disqualifié.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 39 BAGARRE",
    explanation: "Art 39.2.2 : Seul l’entraîneur et/ou l’entraîneur adjoint est/sont autorisé(s) à quitter la zone de banc d’équipe pendant une bagarre ou pendant toute situation pouvant conduire à une bagarre pour aider les arbitres à maintenir ou à rétablir l’ordre. Dans ce cas, il(s) ne doit/doivent pas être disqualifié(s)."
  },
  {
    numb: 174,
    question: "Le joueur A5 effectue une remise en jeu. Sur le terrain, le joueur B6 retient le joueur A8 afin de l'empêcher de se démarquer. L'arbitre doit siffler une faute à B6 ?",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 40 5 FAUTES",
    explanation: "Art 31.14 : Tenir est le contact illégal avec un adversaire qui restreint sa liberté de mouvement. Ce contact peut se produire avec n'importe quelle partie du corps. Interprétations officielles : l'arbitre doit siffler une faute à B6, joueur défenseur. Comme nous ne sommes pas dans les 2 dernières minutes, il n'y a pas de FAS obligatoirement. Sauf si tu estimes que le contact est volontaire (ne joue pas le ballon ou rude) Dans les 2 dernières minutes, sur la même situation, il faut mettre obligatoirement une FAS quelque soit le type de contact créé par le défenseur."
  },
  {
    numb: 175,
    question: "B13 commet une faute sur A8 qui dribble dans la zone restrictive proche de la ligne de fond. L'arbitre siffle une faute et doit donner le ballon à l'équipe A pour une remise en jeu sur la ligne de touche.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 40 5 FAUTES",
    explanation: "Art 34.2.1 : Si la faute est commise sur un joueur qui n’est pas en action de tir : le jeu doit reprendre par une remise en jeu de l’équipe non fautive, à l’endroit le plus proche de l’infraction"
  },
  {
    numb: 176,
    question: "Un joueur ayant commis 5 fautes doit être remplacé dans les 45 secondes.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 40 5 FAUTES",
    explanation: "Art 40.1 :Un joueur qui a commis cinq (5) fautes, qu’elles soient personnelles et/ou techniques, est éliminé. Il doit en être informé par l’arbitre et doit quitter le jeu immédiatement. Il doit être remplacé dans les trente (30) secondes"
  },
  {
    numb: 177,
    question: "L'équipe A contrôle le ballon. Le joueur A6 commet une charge sur B7. Il s'agit de la 6ème faute d'équipe. L'arbitre doit donner 2 LF à l'équipe B.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 41 FAUTES D'EQUIPE",
    explanation: "Art 41.2.2 : Si une faute personnelle est commise par un joueur de l’équipe qui contrôle le ballon vivant ou par un joueur de l’équipe ayant droit au ballon, cette faute doit être sanctionnée par une remise en jeu au point le plus proche de la faute pour les adversaires."
  },
  {
    numb: 178,
    question: "A12 commet une faute sur B8 qui est en train de dribbler. Il s'agit de la 4ème faute de l'équipe A. L'arbitre doit accorder 2 LF à B8.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 41 FAUTES D'EQUIPE",
    explanation: "Art 41.1.1 : Une équipe est en situation de sanction de faute d’équipe lorsqu’elle a commis quatre (4) fautes d’équipe au cours d’une période."
  },
  {
    numb: 179,
    question: "L'équipe A contrôle le ballon lorsque A7 commet une faute. C'est la 5ème faute de l'équipe A. L'arbitre donne 2 LF à l'équipe B.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 41 FAUTES D'EQUIPE",
    explanation: "Art 41.2.2 : Si une faute personnelle est commise par un joueur de l’équipe qui contrôle le ballon vivant ou par un joueur de l’équipe ayant droit au ballon, cette faute doit être sanctionnée par une remise en jeu au point le plus proche de la faute pour les adversaires."
  },
  {
    numb: 180,
    question: "Le joueur A8 tire au panier en suspension. Alors que le ballon est en l'air, le signal sonore du chronomètre des vingt-quatre secondes retentit. Après le signal, alors que A8 est encore en l'air, B6 commet une faute antisportive sur A8 et le ballon manque l'anneau. Que doit siffler l'arbitre ?",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 42 SITUATIONS SPECIALES",
    explanation: "Interprétations, ART.42, disposition n°1 - B6 a commis une faute antisportive sur A8 dans l'action de tir. Donc, la violation des vingt-quatre secondes par l'équipe A doit être ignorée comme si elle s'était produite après la faute antisportive. Deux ou trois lancers francs doivent être attribués à A8, suivis par une remise en jeu de l'équipe A au point de remise en jeu en zone avant"
  },
  {
    numb: 181,
    question: "B12 commet une faute sur A4 qui tire en suspension. Tandis que A4 est toujours en action de tir, B4 commet à son tour une faute personnelle sur A4. La faute de B4 doit être ignorée.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 42 SITUATIONS SPECIALES",
    explanation: "Interprétations, Art 42 - La faute de B12 doit être ignorée à moins qu'elle ne soit antisportive ou disqualifiante."
  },
  {
    numb: 182,
    question: "L'équipe A contrôle le ballon. A6 et B12 commettent chacun une faute antisportive. L'arbitre rend le ballon à l'équipe A. L'arbitre a fait une bonne application du règlement.",
    answer: "A. Vrai",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 42 SITUATIONS SPECIALES",
    explanation: "Art 42.2.7 : Si, après l’annulation des sanctions égales à l’encontre des deux équipes, il ne reste plus d’autres sanctions à faire exécuter, le jeu doit reprendre comme suit : une équipe avait le contrôle du ballon ou y avait droit, ce dernier doit être remis à cette équipe pour une remise en jeu au point le plus proche de la première infraction."
  },
  {
    numb: 183,
    question: "A9 tire son dernier lancer franc et il le marque. En retombant, son pied franchit involontairement la ligne de lancer franc. C'est une violation et l'équipe B bénéficie de la remise en jeu en ligne de fond.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 43 LANCERS FRANCS",
    explanation: "Art 43.3.1 : Si un lancer franc est réussi et que la violation est commise par le tireur de lancer franc, le point, s’il est marqué, ne doit pas compter. Le ballon doit être remis aux adversaires pour une remise en jeu dans le prolongement de la ligne de lancer franc à moins que d’autre(s) lancer(s) franc(s) ou une sanction de possession doit/doivent être exécuté(s)."
  },
  {
    numb: 184,
    question: "B9 commet une faute sur A7 qui se blesse. Il est remplacé par A10. Le joueur A13 se présente pour tirer les lancers francs à la place de A7. L'arbitre doit laisser A13 tirer les lancers francs.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 43 LANCERS FRANCS",
    explanation: "Art 43.2.1 : Lorsqu’une faute personnelle est sanctionnée par des lancers francs, et si le joueur sur lequel la faute a été commise doit quitter le terrain pour cause de blessure, son remplaçant doit tirer les lancers francs. S'il n’y a pas de remplaçant disponible, tout coéquipier désigné par l’entraîneur peut tirer les lancers francs."
  },
  {
    numb: 185,
    question: "Le tireur de LF peut quitter le demi-cercle ou toucher la ligne de LF dès que le ballon a quitté ses mains.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 43 LANCERS FRANCS",
    explanation: "Art 43.2.3 : Le tireur de LF ne doit pas toucher la ligne de lancer franc ou pénétrer dans la zone restrictive jusqu’à ce que le ballon ait pénétré dans le panier ou ait touché l’anneau"
  },
  {
    numb: 186,
    question: "Une erreur rectifiable peut-être corrigée après que les arbitres ont signé la feuille de marque.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 44 ERREURS RECTIFIABLES",
    explanation: "Art 44.2.6 : Les erreurs rectifiables ne peuvent plus être corrigées après que l’arbitre a signé la feuille de marque."
  },
  {
    numb: 187,
    question: "Des LF immérités ont été accordés. L'arbitre rectifie son erreur après que les LF ont été marqués. Toutefois, les LF réussis doivent compter.",
    answer: "B. Faux",
    options: ["A. Vrai", "B. Faux"],
    category: "ART 44 ERREURS RECTIFIABLES",
    explanation: "Art 44.3.1 : Accorder un ou des lancer(s) franc(s) immérité(s) : Le/le(s) lancer(s) franc(s) tenté(s) à cause de l’erreur doit/doivent être annulé(s)"
  }
];