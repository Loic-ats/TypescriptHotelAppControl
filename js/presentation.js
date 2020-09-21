"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presentation = void 0;
var readline_1 = __importDefault(require("readline"));
var service_js_1 = require("./service.js");
var rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
var Presentation = /** @class */ (function () {
    function Presentation() {
        this.service = new service_js_1.Service();
    }
    Presentation.prototype.start = function () {
        var _this = this;
        console.log("\n        1. Lister les clients\n        2. Ajouter un client\n        3. Rechercher un client par nom\n        4. V\u00E9rifier la disponibilit\u00E9 d'une chambre\n        99. Sortir");
        rl.question('Votre choix : ', function (saisie) {
            switch (saisie) {
                case '1':
                    console.log('>> Liste des clients');
                    var listeClients$ = _this.service.listerClients();
                    listeClients$
                        .then(function (clients) {
                        console.log(clients.map(function (client) { return client.nom + " " + client.prenoms; }).join('\n'));
                        console.log('\n');
                    })
                        .catch(function (err) { return console.log('La liste des clients n\'est pas accessible.'); })
                        .finally(function () { return _this.start(); });
                    break;
                case '2':
                    console.log('>> Ajout d\'un nouveau client');
                    var ajoutClient$_1 = _this.service.ajouterClient();
                    rl.question('Saisissez le nom du nouveau client : ', function (saisieNom) {
                        rl.question('Saisissez le prénom du nouveau client : ', function (saisiePrenom) {
                            ajoutClient$_1
                                .then(console.log(saisieNom + " " + saisiePrenom + " a correctement \u00E9t\u00E9 ajout\u00E9(e) \u00E0 la base."))
                                .catch(function (err) { return console.log('Le client n\'a pas été ajouté à la base.'); })
                                .finally(function () { return _this.start(); });
                        });
                    });
                    break;
                case '3':
                    console.log('Cette fonction n\'est pas encore disponible, merci de revenir ultérieurement');
                    _this.start();
                    break;
                case '4':
                    console.log('Cette fonction n\'est pas encore disponible, merci de revenir ultérieurement');
                    _this.start();
                    break;
                case '99':
                    console.log('Au revoir !');
                    rl.close();
                    break;
                default:
                    console.log('La saisie n\'est pas bonne');
                    _this.start();
            }
        });
    };
    return Presentation;
}());
exports.Presentation = Presentation;
