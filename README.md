# Formula 1 web applicatie gebruiksaanwijzing

Deze applicatie is bedoeld voor de formule 1 fan. Er kan informatie opgevraagd worden aangaande de voorgaande en 
aankomende wedstrijden en standen in het klassement. Om deze pagina's te bereiken zal de gebruiker een account moeten 
aanmaken en inloggen.

![screenshot](src/assets/screenshot.png)

## Server starten

Voor deze applicatie wordt gebruik gemaakt van de Novi back-end. Deze server is meegeleverd in de map server. Het 
handigste is om deze server te klonen met Intellij en vervolgens de dependencies te installeren met het commando:

```shell
npm install
```
Om de server te starten kan het volgende commando worden ingevoerd:

```shell
npm run json:server
```
Deze server zal dan draaien op [http://localhost:3000](http://localhost:3000/).

## API_key

In de hoofdmap moet een bestand worden aangemaakt genaamd '.env'. In dit bestand kan de content van '.env.dist' worden
gekopieerd. Hierna moet nog de API key ingevuld worden. 

Hiervoor mag de volgende key gebruikt worden: 867c047ec2f83e32d76136aeb25eb476

## Applicatie starten

Voordat de applicatie kan worden gestart zullen ook hier eerst alle dependencies moeten worden geïnstalleerd. Dit kan
met het commando:

```shell
npm install
```

Nadat de server is gestart kan het react project gestart worden in webstorm. Dit kan met het commando:

```shell
npm start
```

Webstorm zal vragen of het project op een
andere poort mag draaien gezien de server al draait op [http://localhost:3000](http://localhost:3000/).