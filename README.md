# max_tumba_examensuppgift
/*
Jag påbörjade projektet genom att ordna upp mapparna som visat inom uppgiften.
Efter att ha satt upp projektet så började jag tänka ut hur jag ska få fram ett visuellt tangentbord som jag senare kan leka runt med via mitt riktiga tangentbord.
För att börja så måste jag skapa en row för varje rad av tangenter, detta gör jag i min index.html, först börjar jag med att skapa en klass för själva tangentbordet, sedan rows med keys inom. Nu för att få de att likna ett tangentbord så måste jag börja redigera css filen.
I början försökte jag skapa skapa en snygg layout med mina egna värden i height och width men märkte att det är lättare att göra storleken automatiskt så den ändrar storleken baserat av antal rader samt tangenter. Jag gav också tangentbordet och tangenterna olika background colors samt borders för tangenterna så det ser snyggare ut. Jag gav också tangenter som space en annan definerande klass så jag kan få den att vara vidare än andra tangenter via flex: 2; som ger den möjligheten att ta upp till två delar av ledig plats. Sedan strullade jag ett tag med att få till upp och ner tangenterna (och pgup/pgdown) att vara horizontal rectangles med 3 i rad sen radbryt, samma layout som mitt tangentbord.
Sedan ändrade jag font storleken eftersom visa tangenter som SEARCH var out of bounds, och jag tycker det ser mer städat ut.
Eöfter det så började jag med JS, där jag lade till två eventlisteners, en som lyssnar för trycket och en för släppet av en tangent, sedan skapade jag en variabel för en tangent, såg till att det översättes till lowercase så jag kan nå dem lättare simplare. Jag hade olika data-keys för varje tangent som motsvarar input keyn (vad själva tangenten räknas som när den skickar ut signaler), i js så kollar jag på tangenten som är pressad sedan vilken data key som matchar, om det är korrekt tangent så lägger den till active (jag skapade vis stil för tangenter som är aktiva), där själva ändringarna genomförs.
Sedan gjorde jag motsats för keyup där den tar bort active.

Efter detta var det bara att hitta ett najs tangentbordsljud för användning, som jag också länkar i  js med en ny const = new Audio
sedan audio.currentTime = 0 så den uppspelar från start varje gång, och audio.Play som spelar ljudet vid varje klick.

*/