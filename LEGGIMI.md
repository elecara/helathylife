# Pancia Serena – come usarla

## Sul computer (VS Code)
1. Apri la cartella `pancia-serena` in VS Code.
2. Installa l'estensione **Live Server**, poi tasto destro su `index.html` → **Open with Live Server**.
   (Funziona anche con un doppio clic su `index.html`, ma senza la parte offline/installabile.)

## Sul telefono (app installabile)
Per installarla, il telefono deve aprire l'app da un indirizzo **https**. Il modo più semplice e gratuito:

### Opzione A – Netlify Drop (2 minuti, senza account tecnico)
1. Vai su https://app.netlify.com/drop
2. Trascina l'intera cartella `pancia-serena` nella pagina.
3. Ti dà un link tipo `https://nome-a-caso.netlify.app` (crea un account gratuito per tenerlo per sempre).
4. Apri il link sul telefono:
   - **iPhone (Safari):** tasto Condividi → **Aggiungi alla schermata Home**
   - **Android (Chrome):** compare il pulsante **Installa** nell'app, oppure menu ⋮ → **Installa app**

### Opzione B – GitHub Pages
1. Crea un repository su GitHub e carica i file della cartella.
2. Settings → Pages → Branch `main` → Save.
3. Apri `https://tuonome.github.io/nome-repo/` sul telefono e installa come sopra.

## Dati e backup
- I dati restano **solo sul dispositivo** su cui li inserisci: telefono e computer hanno diari separati.
- Per spostare i dati usa **Esporta backup** su un dispositivo e **Importa** sull'altro.
- Fai un backup ogni tanto: se cancelli i dati del browser li perdi.

## Aggiornare l'app
Dopo aver modificato `index.html`, cambia `pancia-serena-v1` in `pancia-serena-v2` dentro `sw.js` e ricarica i file online.
Sul telefono l'aggiornamento arriva alla riapertura successiva.

## Aggiungere alimenti
In `index.html` cerca `const DB = [` e aggiungi una riga nello stesso formato:
`["nome", "alias1|alias2", livello 0/1/2, "tipi FODMAP", porzione_ok_g, "nota", [gonfiore], [micronutrienti]],`
