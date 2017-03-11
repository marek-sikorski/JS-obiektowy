function Telefon(marka, cena, kolor,oprogramowanie) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.oprogramowanie = oprogramowanie;
}
function Dane(wyświetlacz, aparat, ram) {
	this.wyświetlacz = wyświetlacz;
	this.aparat = aparat;
	this.ram = ram;
}
Dane.prototype.printInfo = function() {
		console.log("Rozmiar ekarnu to " + this.wyświetlacz + " cali " + ",ilość Mpx to " + this.aparat + ", ilość pamięci to " + this.ram + "MB" + ".");
}
Telefon.prototype.printInfo = function() {
		console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ",cena to " + this.cena + ",system to " + this.oprogramowanie + ".");
}
var iPhone6S = new Telefon("Apple", 2250, "srebrny","iOS 10");
iPhone6S.printInfo();
var GalaxyS6 = new Telefon("Samsung", 2800, "złoty","android");
GalaxyS6.printInfo();
var One =new Telefon("OnePlus", 1800, "biały", "android");
One.printInfo();

var iPhone6S = new Dane(5.5, 16, 32);
iPhone6S.printInfo();
var GalaxyS6 = new Dane(5.4, 14, 32);
GalaxyS6.printInfo();
var One =new Dane(5.2, 14, 16);
One.printInfo();
