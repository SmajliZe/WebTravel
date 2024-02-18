# WebTravel

## Steps to run a project

Compatible with node v20.11.1

### Run the backend

1. Navigate to the directorty "server"
2. Run `npm install`
3. Run `npm start`. This command wil spin the nodemon server and serve backend on port `3333`.

Running the server may require installation of `nodemon` package as a global dependency on your system.

### Run the frontend

1. Navigate to the directory "client"
2. Run `npm install`
3. Run `npm start`

After running the app, the browser will automatically open on the corresponding port.

## Project requirements

Projekat: 
Potrebno je napraviti web aplikaciju za portal turističke agencije. Sadržaj portala su  aktuelna putovanja. Web aplikacija treba da ima: 
1. Dvije korisničke uloge: admin i user. 
- admin : upravlja korisnicima i oglasima za aktuelna putovanja 
● može dodati nove korisnike, 
● mijenjati podatke za već unesene korisnike 
● stavljati korisnike u neaktivni status (umjesto brisanja). 
● može dodavati nova putovanja, 
● mijenjati već postojeća putovanja i brisati putovanja. 
● ima pristup postavljenim pitanjima na putovanja koje su postavili korisnici  sa ulogom user, te ih moze po potrebi ukloniti (npr.ako su neprimjerenog  sadrzaja). 
- user: 
• može se samostalno registrirati 
• može pregledati ponude putovanja 
• može postavljati (dodavati) pitanja na već objavljena putovanja • može se prijaviti na putovanje 
• pregled historije putovanja (putovanja na koja je korisnik prijavljen, a  datum kraja putovanja je stariji od trenutnog datuma) 
Samo korisnici koji imaju status aktivan mogu se prijaviti na sistem. Ostali korisnici koji nisu registrirani su gosti (posjetioci) i mogu samo pregledati  detaljne informacije o putovanjima i postavljena pitanja. Da bi korisnik mogao  postavljati pitanje ili izvršiti prijavu na putovanje mora se registrirarti i dobiti ulogu  user. 
2. Stranice za login i registraciju 
Preko login stranice na web aplikaciju se mogu prijaviti svi registrovani korisnici  koje je u sistem unio korisnik sa ulogom admin ili korisnik sa ulogom user koji se  sam registrirao. Na stranici za login osim forme za prijavu, treba da stoji link za  stranicu za registraciju preko koje se posjetilac (gost) moze registrirati.  Samostalnom registracijom korisnik dobija korisničku ulogu user.
Nakon uspješno izvršene prijave korisnika, u zavisnosti od njegove korisničke  uloge (admin ili user) sistem treba da ponudi odgovarajuće opcije za njegov daljni  rad (navedene pod 1. ovog zadaka) 
3. Glavna (pocetna) stranica sa sažetkom svih putovanja, te opciju detaljnog  pregleda svakog putovanja sa postavljenim pitanjima, te filtriranje po kategorijama.  Putovanja mogu biti podijeljena u kategorije: Europa, daleka putovanja, ljetovanja i  sl. 
4. Backend web aplikacije izraditi korištenjem Node.js. Opciono, frontend web  aplikacije izradiit u Angularu ili Reactu. Napomena: Dizajn aplikacije prilagoditi po  želji. Koristiti bootstrap ili MUI. 
5.Bazu podataka sa podacima o korisnicima i putovanjima kreirati u MySQL ili  MongoDB bazi podataka pod nazivom: 
dbtravel_brojindeksa 
npr. za studenta sa brojem indeksa 1786 naziv baze podatka je: dbtravel_1786 
6. Web aplikaciju kreirati u  
folderu: webtravel_brojindeksa 
npr. za studenta sa brojem indeksa 1786 foldera za web aplikaciju je:  webtravel_1786 
7. Potrebno je predati na online platformu link github repozitorija projekta pod  nazivom webtravel_brojindeksa koji će sadržavati README fajl kao izvještaj o  urađenom projektu. Ukoliko je korišten MySQL postaviti i ZIP datoteku pod  nazivom dbtravel_brojindeksa sa exportovanim skriptama za generisanje baze. 
Sve potrebne fajlove i linkove postaviti na on-line platformu za predmet Web  programiranje. Poželjno je postaviti i kratku snimku prezentacije izgrađene web  aplikacije (max do 10 minuta). 
8. Svaki student samostalno radi Projekat
