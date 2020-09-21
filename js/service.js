"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
//const request = require('request');
var request_1 = __importDefault(require("request"));
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.listerClients = function () {
        return new Promise(function (resolve, reject) {
            request_1.default('http://localhost:8080/clients?start=0&size=10', { json: true }, function (err, res, body) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(body);
                }
            });
        });
    };
    Service.prototype.ajouterClient = function (saisieNom, saisiePrenom) {
        return new Promise(function (resolve, reject) {
            request_1.default.post({
                url: 'http://localhost:8080/clients',
                method: 'POST',
                json: { nom: "" + saisieNom, prenoms: "" + saisiePrenom }
            }, function (err, res, body) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(body);
                }
            });
        });
    };
    return Service;
}());
exports.Service = Service;
