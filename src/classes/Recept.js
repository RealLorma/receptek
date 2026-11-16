export default class Recept {
    #file;
    #nev;
    #leiras;
    #nehezseg;
    #elkeszitesiIdo;

    constructor(file, nev, leiras, nehezseg, elkeszitesiIdo) {
        this.setFile(file);
        this.setNev(nev);
        this.setLeiras(leiras);
        this.setNehezseg(nehezseg);
        this.setElkeszitesiIdo(elkeszitesiIdo)

        this.setFile = this.setFile.bind(this);
        this.setNev = this.setNev.bind(this);
        this.setLeiras = this.setLeiras.bind(this);
        this.setNehezseg = this.setNehezseg.bind(this);
        this.setElkeszitesiIdo = this.setElkeszitesiIdo.bind(this);

        this.getFile = this.getFile.bind(this);
        this.getNev = this.getNev.bind(this);
        this.getLeiras = this.getLeiras.bind(this);
        this.getNehezseg = this.getNehezseg.bind(this);
        this.getElkeszitesiIdo = this.getElkeszitesiIdo.bind(this);
    }

    setFile(file) {
        this.#file = file;
    }

    setNev(nev) {
        this.#nev = nev;
    }

    setLeiras(leiras) {
        this.#leiras = leiras;
    }

    setNehezseg(nehezseg) {
        this.#nehezseg = nehezseg;
    }

    setElkeszitesiIdo(elkeszitesiIdo) {
        this.#elkeszitesiIdo = elkeszitesiIdo;
    }



    getFile() {
        return this.#file;
    }

    getNev() {
        return this.#nev;
    }

    getLeiras() {
        return this.#leiras;
    }

    getNehezseg() {
        return this.#nehezseg;
    }

    getElkeszitesiIdo() {
        return this.#elkeszitesiIdo;
    }
}