export default function verificaVariaveisGlobais(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.NOMES_FEMININOS = ['MARIA', 'ANA', 'FRANCISCA', 'ANTONIA', 'ADRIANA', 'JULIANA', 'MARCIA', 'FERNANDA', 'PATRICIA', 'ALINE'];
    exports.NOMES_MASCULINOS = ['JOSE', 'JOAO', 'ANTONIO', 'FRANCISCO', 'CARLOS', 'PAULO', 'PEDRO', 'LUCAS', 'LUIZ', 'MARCOS'];
    exports.SOBRENOMES = ['ALMEIDA', 'ALVES', 'ANDRADE', 'BARBOSA', 'BARROS', 'BATISTA', 'BORGES', 'CAMPOS', 'CARDOSO', 'CARVALHO', 'CASTRO', 'COSTA', 'DIAS', 'DUARTE', 'FREITAS', 'FERNANDES', 'FERREIRA', 'GARCIA', 'GOMES', 'GONÇALVES', 'LIMA', 'LOPES', 'MACHADO', 'MARQUES', 'MARTINS', 'MEDEIROS', 'MELO', 'MENDES', 'MIRANDA', 'MONTEIRO', 'MORAES', 'MOREIRA', 'MOURA', 'NASCIMENTO', 'NUNES', 'OLIVEIRA', 'PEREIRA', 'RAMOS', 'REIS', 'RIBEIRO', 'ROCHA', 'SANTANA', 'SANTOS', 'SILVA', 'SOARES', 'SOUZA', 'TEIXEIRA', 'VIEIRA'];
    exports.EMPRESAS_TIPOS = ['Pizzaria', 'Mecânica', 'Laboratórios', 'Contabilidade', 'Padaria', 'Pastelaria'];
    exports.EMPRESAS_NOMES = ['do Barão', 'União', 'Teixeira', 'Nova Era', 'Genuíno', 'Autêntica', 'Lux'];
    exports.TELEFONE_ESTADO = {
        'ac': 68,
        'al': 82,
        'ap': 96,
        'am': 92,
        'ba': 71,
        'ce': 88,
        'df': 61,
        'es': 27,
        'go': 62,
        'ma': 98,
        'mt': 65,
        'ms': 84,
        'mg': 31,
        'pr': 41,
        'pb': 83,
        'pa': 91,
        'pe': 81,
        'pi': 86,
        'rj': 21,
        'rn': 84,
        'rs': 51,
        'ro': 69,
        'rr': 95,
        'sc': 48,
        'se': 79,
        'sp': 11,
        'to': 63
    };
    exports.CEP_ESTADO = {
        ac: [
            [69900000, 69999999]
        ],
        al: [
            [57000000, 57999999]
        ],
        am: [
            [69000000, 69299999],
            [69400000, 69899999]
        ],
        ap: [
            [68900000, 68999999]
        ],
        ba: [
            [40000000, 48999999]
        ],
        ce: [
            [60000000, 63999999]
        ],
        df: [
            [70000000, 72799999],
            [73000000, 73699999]
        ],
        es: [
            [29000000, 29999999]
        ],
        go: [
            [72800000, 72999999],
            [73700000, 76799999]
        ],
        ma: [
            [65000000, 65999999]
        ],
        mg: [
            [30000000, 39999999]
        ],
        ms: [
            [79000000, 79999999]
        ],
        mt: [
            [78000000, 78899999]
        ],
        pa: [
            [66000000, 68899999]
        ],
        pb: [
            [58000000, 58999999]
        ],
        pe: [
            [50000000, 56999999]
        ],
        pi: [
            [64000000, 64999999]
        ],
        pr: [
            [80000000, 87999999]
        ],
        rj: [
            [20000000, 28999999]
        ],
        rn: [
            [59000000, 59999999]
        ],
        ro: [
            [76800000, 76999999]
        ],
        rr: [
            [69300000, 69399999]
        ],
        rs: [
            [90000000, 99999999]
        ],
        sc: [
            [88000000, 89999999]
        ],
        se: [
            [49000000, 49999999]
        ],
        sp: [
            [1000000, 19999999]
        ],
        to: [
            [77000000, 77999999]
        ]
    };
    exports.TIPOS_SANGUINEOS = ['O+', 'A+', 'B+', 'AB+', ' O−', ' A−', ' B−', 'AB−'];

    function getAstro(data) {
        var month, day;
        if (typeof data === 'string') {
            day = parseInt(data.split('/')[0]);
            month = parseInt(data.split('/')[1]);
        } else {
            day = data.getDate() + 1;
            month = data.getMonth() + 1;
        }
        if (month < 1 || month > 12) {
            throw new Error("Mes inválido : " + month);
        }
        if (day < 1 || day > 32) {
            throw new Error("Dia inválido : " + day);
        }
        if ((month == 1 && day < 20) || (month == 12 && day >= 22)) {
            return 'Capricórnio';
        } else if ((month == 2 && day < 19) || (month == 1 && day >= 20)) {
            return 'Aquários';
        } else if ((month == 3 && day < 21) || (month == 2 && day >= 19)) {
            return 'Peixes';
        } else if ((month == 4 && day < 20) || (month == 3 && day >= 21)) {
            return 'Aries';
        } else if ((month == 5 && day < 21) || (month == 4 && day >= 20)) {
            return 'Touro';
        } else if ((month == 6 && day < 22) || (month == 5 && day >= 21)) {
            return 'Gêmeos';
        } else if ((month == 7 && day < 23) || (month == 6 && day >= 22)) {
            return 'Cancer';
        } else if ((month == 8 && day < 23) || (month == 7 && day >= 23)) {
            return 'Leao';
        } else if ((month == 9 && day < 23) || (month == 8 && day >= 23)) {
            return 'Virgo';
        } else if ((month == 10 && day < 24) || (month == 9 && day >= 22)) {
            return 'Libra';
        } else if ((month == 11 && day < 22) || (month == 10 && day >= 24)) {
            return 'Escorpião';
        } else if ((month == 12 && day < 22) || (month == 11 && day >= 22)) {
            return 'Sagitário';
        }
        throw new Error("Signo não encontrado : " + day + '/' + month);
    }
    exports.getAstro = getAstro;
    exports.NAMES = ['Aaron', 'Abel', 'Abelardo', 'Abelino', 'Abiel', 'Abiezer', 'Abílio', 'Abner', 'Abraão', 'Acácio', 'Adailton', 'Adair', 'Adalberto', 'Adalgiso', 'Adalício', 'Adalmir', 'Adalto', 'Adam', 'Adamastor', 'Adamor', 'Adão', 'Adeci', 'Adeildo', 'Adelair', 'Adélcio', 'Adelino', 'Adélio', 'Adelson', 'Ademar', 'Ademilson', 'Ademir', 'Aderbal', 'Adérito', 'Adilson', 'Admilson', 'Adolfo', 'Adonai', 'Adonis', 'Adónis', 'Adrian', 'Adriano', 'Adriel', 'Aécio', 'Afonso', 'Afrânio', 'Agenor', 'Ageo', 'Agipino', 'Agnaldo', 'Agnelo', 'Agostinho', 'Aguinaldo', 'Ailton', 'Aires', 'Airton', 'Aitor', 'Alair', 'Alaôr', 'Alarico', 'Albano', 'Albertino', 'Albino', 'Alcides', 'Alcindo', 'Aldair', 'Aldemir', 'Aldenor', 'Aldo', 'Alejandro', 'Alessandro', 'Alex', 'Alexandrino', 'Alexandro', 'Aléxio', 'Alfredo', 'Alípio', 'Alírio', 'Alison', 'Allan', 'Almerindo', 'Almir', 'Aloísio', 'Alonzo', 'Altino', 'Aluísio', 'Alvantino', 'Alvino', 'Amadeo', 'Amândio', 'Amarildo', 'Amauri', 'Amaury', 'Ambrósio', 'Américo', 'Amílcar', 'Amilton', 'Amir', 'Ananias', 'Andersen', 'Anderson', 'Ândreo', 'Andrés', 'Anésio', 'Angélico', 'Ângelo', 'Aníbal', 'Anísio', 'Anselmo', 'Antenor', 'Antero', 'Anthony', 'Apollo', 'Apolo', 'Aprígio', 'Aquiles', 'Arcanjo', 'Aristeu', 'Aristides', 'Armando', 'Armindo', 'Arnaldo', 'Arthur', 'Arturo', 'Ary', 'Asher', 'Assis', 'Ataíde', 'Athos', 'Átila', 'Atlas', 'Aureliano', 'Aurelino', 'Aurélio', 'Aurino', 'Ayrton', 'Balbino', 'Balduíno', 'Baltasar', 'Baltazar', 'Barnabé', 'Bartolomeu', 'Basileu', 'Basílio', 'Batista', 'Belarmino', 'Belchior', 'Belisário', 'Belmiro', 'Bendito', 'Benedito', 'Benito', 'Benjamin', 'Beto', 'Bill', 'Boanerges', 'Bob', 'Bonifácio', 'Bóris', 'Bosco', 'Brandon', 'Bruce', 'Bryan', 'Byron', 'Cacildo', 'Cadú', 'Cael', 'Caíco', 'Caíque', 'Calazan', 'Calisto', 'Calixto', 'Calvin', 'Camilo', 'Cândido', 'Canuto', 'Casimiro', 'Cassiano', 'Cássio', 'Castiel', 'Cauã', 'Cauê', 'Celestino', 'Celso', 'César', 'Charles', 'Christian', 'Christian', 'Christopher', 'Cirilo', 'Ciro', 'Cláudio', 'Claus', 'Clayton', 'Clementino', 'Clodomiro', 'Clovis', 'Clóvis', 'Conrad', 'Constantin', 'Constantino', 'Cosme', 'Cristiano', 'Cristóvão', 'Cursino', 'Custódio', 'Dácio', 'Dagoberto', 'Dalmo', 'Dalton', 'Danilo', 'Dante', 'Dárcio', 'Darius', 'Deivid', 'Delfino', 'Delmar', 'Demétrio', 'Denis', 'Denzel', 'Derik', 'Didier', 'Dimas', 'Dinis', 'Diniz', 'Dino', 'Diógenes', 'Dionísio', 'Djalma', 'Dom', 'Domênico', 'Dominic', 'Donatello', 'Donatílio', 'Donato', 'Donizete', 'Douglas', 'Douglas', 'Durval', 'Dylan', 'Ed', 'Éder', 'Ederson', 'Edivaldo', 'Edmilson', 'Edmir', 'Edson', 'Eliezer', 'Élio', 'Eliseo', 'Eliseu', 'Elísio', 'Élton', 'Emanuel', 'Emaús', 'Emerson', 'Emílio', 'Ênio', 'Enrico', 'Enrique', 'Erasmo', 'Erasmus', 'Eriberto', 'Erik', 'Ernesto', 'Esdras', 'Eugénio', 'Eurico', 'Evaldo', 'Evandro', 'Evelásio', 'Expedito', 'Ezekiel', 'Fabiano', 'Faustino', 'Fausto', 'Felipe', 'Felisberto', 'Felismino', 'Félix', 'Ferdinand', 'Ferdinando', 'Fernando', 'Fernão', 'Firmino', 'Flávio', 'Florêncio', 'Florentino', 'Floriano', 'Fortunato', 'Francesco', 'Francis', 'Franco', 'Frank', 'Franklin', 'Gael', 'Galdino', 'Galeno', 'Galileu', 'Gastão', 'Gaudêncio', 'Genaro', 'Genésio', 'Geovani', 'Geraldo', 'Germano', 'Gerson', 'Giancarlos', 'Giani', 'Gianluca', 'Gilberto', 'Gilmar', 'Gilmar', 'Gilson', 'Giuseppe', 'Glauco', 'Golias', 'Graciano', 'Gregório', 'Gualter', 'Guarani', 'Gumersindo', 'Guy', 'Haroldo', 'Hélder', 'Hélio', 'Henry', 'Herbert', 'Hermano', 'Hernâni', 'Horácio', 'Humberto', 'Ike', 'Irineu', 'Isaías', 'Isidoro', 'Israel', 'Ítalo', 'Itamar', 'Ivaldo', 'Ivandro', 'Ivanildo', 'Jacinto', 'Jack', 'Jackson', 'Jader', 'Jadiel', 'Jadir', 'Jair', 'Jairo', 'Jamal', 'Jamil', 'Jandir', 'Janilson', 'Januário', 'Jarbas', 'Jason', 'Jason', 'Javier', 'Jean', 'Jefferson', 'Jeremias', 'Jessé', 'Jessie', 'Jessiel', 'Jesualdo', 'Jesus', 'Joab', 'Joelson', 'Jofre', 'Johnny', 'Johnson', 'Jonas', 'Jonatã', 'Josélio', 'Joshua', 'Josias', 'Josué', 'Juan', 'Juliano', 'Julião', 'Júlio', 'Júnior', 'Jurandir', 'Juvenal', 'Kaique', 'Kauã', 'Kauan', 'Kawan', 'Kelvin', 'Kennedy', 'Klaus', 'Kleber', 'Lael', 'Laerte', 'Laertes', 'Lauro', 'Leon', 'Leôncio', 'Leonel', 'Leónidas', 'Leopoldo', 'Lineu', 'Lionel', 'Lisandro', 'Lívio', 'Logan', 'Luã', 'Luan', 'Luca', 'Luciano', 'Lúcio', 'Luigi', 'Luiz', 'Lukas', 'Luzio', 'Macário', 'Magnus', 'Malvino', 'Manassés', 'Manoel', 'Maomé', 'Márcio', 'Marcos', 'Marcus', 'Marley', 'Marlon', 'Martin', 'Martinho', 'Marvin', 'Matheo', 'Matheus', 'Mathias', 'Mathieu', 'Maurílio', 'Max', 'Maximiliano', 'Maxwell', 'Mélvin', 'Messias', 'Micael', 'Michael', 'Michel', 'Milo', 'Milton', 'Mizael', 'Moacir', 'Mohamed', 'Nataniel', 'Nazário', 'Neil', 'Nereu', 'Nestor', 'Newton', 'Ney', 'Nicola', 'Nicolas', 'Nildemar', 'Nilo', 'Nilson', 'Nilton', 'Nivaldo', 'Nonato', 'Norberto', 'Norildo', 'Norimar', 'Odemar', 'Odilson', 'Odin', 'Odorico', 'Olin', 'Omar', 'Omer', 'Onofre', 'Orestes', 'Orlandino', 'Orlando', 'Osias', 'Osman', 'Osmar', 'Osório', 'Osvaldo', 'Otacílio', 'Otávio', 'Otto', 'Ozael', 'Pablo', 'Paco', 'Paolo', 'Pascoal', 'Patrício', 'Patrick', 'Paulino', 'Pepe', 'Percival', 'Péricles', 'Pierre', 'Porfírio', 'Querubim', 'Quintino', 'Radamés', 'Rafaelo', 'Raí', 'Raimundo', 'Ralf', 'Ralph', 'Ramiro', 'Ramon', 'Ramón', 'Raoni', 'Raphael', 'Reginaldo', 'Régis', 'Reimão', 'Reinaldo', 'Renan', 'Renato', 'Renê', 'Rivaldo', 'Roberto', 'Robson', 'Rodney', 'Rodolfo', 'Roger', 'Rogério', 'Roland', 'Rolando', 'Romão', 'Romário', 'Romeo', 'Rômulo', 'Ronald', 'Ronaldo', 'Roni', 'Rosendo', 'Rúbens', 'Rudesindo', 'Rudolfo', 'Ruy', 'Ryan', 'Sansão', 'Saúl', 'Saulo', 'Sávio', 'Selton', 'Sertório', 'Severino', 'Sidney', 'Silas', 'Sílvio', 'Simplício', 'Sinésio', 'Stefan', 'Stefano', 'Stenio', 'Steve', 'Steven', 'Sydney', 'Taciano', 'Tadeu', 'Tales', 'Tamires', 'Tâmiris', 'Tarcísio', 'Tarik', 'Tarsício', 'Telmo', 'Tenório', 'Teo', 'Teobaldo', 'Teodemiro', 'Thales', 'Theo', 'Thiago', 'Thomas', 'Thomaz', 'Tibúrcio', 'Ticiano', 'Tierry', 'Timóteo', 'Tito', 'Tom', 'Tomaz', 'Tristão', 'Troy', 'Túlio', 'Ubirajara', 'Ubiratã', 'Urbano', 'Uriel', 'Valdemar', 'Valentino', 'Vanderlei', 'Vasco', 'Venâncio', 'Veríssimo', 'Vicenzo', 'Victor', 'Vílmar', 'Vilson', 'Vinícius', 'Virgílio', 'Vital', 'Vítor', 'Vladimir', 'Wagner', 'Waldir', 'Waldo', 'Wallace', 'Walter', 'Washington', 'Watson', 'Webster', 'Weller', 'Wellington', 'Wendel', 'Wesley', 'Will', 'William', 'Wilson', ];

} {}