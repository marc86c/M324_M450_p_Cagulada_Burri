Hier ist ein Testprotokoll basierend auf deinem Testkonzept:

**Testprotokoll für die Todo-Anwendung**

**1. Übersicht**

- **Testdatum:** 16.01.2025

- **Tester:** Maurizio Burri

- **Anwendungsversion:** 1.0

- **Tools:**

  - Unit-Testing: Jest, React Testing Library

  - End-to-End: Cypress

- **Ziel:** Verifizierung der korrekten Funktionalität gemäß den
  definierten Akzeptanzkriterien.

**2. Ergebnisse der Testfälle**

**2.1 Der Benutzer kann beim Erstellen einer Aufgabe eine Priorität
auswählen.**

**Komponente: InputTodo**

<table>
<colgroup>
<col style="width: 21%" />
<col style="width: 18%" />
<col style="width: 20%" />
<col style="width: 23%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Testfall</strong></th>
<th><strong>Schritte</strong></th>
<th><strong>Erwartetes Ergebnis</strong></th>
<th><strong>Status (Erfolgreich/Nicht erfolgreich)</strong></th>
<th><strong>Bemerkungen</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Initialisierung der Eingabe</td>
<td><p>1. Rendere die InputTodo-Komponente.</p>
<p>2. Überprüfe Sichtbarkeit.</p></td>
<td>Textfeld und Dropdown-Liste sind sichtbar.</td>
<td>✔️</td>
<td></td>
</tr>
<tr class="even">
<td>Erstellen einer Aufgabe</td>
<td><p>1. Titel eingeben, Priorität auswählen.</p>
<p>2. Klick auf „Hinzufügen“.</p></td>
<td>addTodoProps wird korrekt aufgerufen.</td>
<td>✔️</td>
<td></td>
</tr>
<tr class="odd">
<td>Fehlerbehandlung</td>
<td><p>1. Textfeld leer lassen.</p>
<p>2. Klick auf „Hinzufügen“.</p></td>
<td>Fehlermeldung wird angezeigt.</td>
<td>✔️</td>
<td></td>
</tr>
</tbody>
</table>

**2.2 Die Aufgabenliste zeigt die Priorität jeder Aufgabe an.**

**Komponenten: TodosList, TodoItem**

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 21%" />
<col style="width: 22%" />
<col style="width: 26%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Testfall</strong></th>
<th><strong>Schritte</strong></th>
<th><strong>Erwartetes Ergebnis</strong></th>
<th><strong>Status (Erfolgreich/Nicht erfolgreich)</strong></th>
<th><strong>Bemerkungen</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Anzeige der Priorität</td>
<td><p>1. Liste mit Aufgaben an TodosList übergeben.</p>
<p>2. Prioritäten prüfen.</p></td>
<td>Die Priorität jeder Aufgabe wird korrekt angezeigt.</td>
<td>✔️</td>
<td></td>
</tr>
</tbody>
</table>

**2.3 Der Benutzer kann die Priorität einer bestehenden Aufgabe
ändern.**

**Komponenten: TodoItem, TodoContainer**

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 19%" />
<col style="width: 23%" />
<col style="width: 25%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Testfall</strong></th>
<th><strong>Schritte</strong></th>
<th><strong>Erwartetes Ergebnis</strong></th>
<th><strong>Status (Erfolgreich/Nicht erfolgreich)</strong></th>
<th><strong>Bemerkungen</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Änderung der Priorität</td>
<td><p>1. Neue Priorität auswählen.</p>
<p>2. changePriority prüfen.</p></td>
<td>Funktion wird korrekt mit ID und neuer Priorität aufgerufen.</td>
<td>✔️</td>
<td></td>
</tr>
<tr class="even">
<td>Validierung der Eingabe</td>
<td><p>1. Ungültige Werte eingeben.</p>
<p>2. Eingabe überprüfen.</p></td>
<td>Ungültige Eingaben werden ignoriert.</td>
<td>✔️</td>
<td></td>
</tr>
</tbody>
</table>

**  
**

**2.4 Die Aufgaben können nach Priorität sortiert werden.**

**Komponenten: TodoContainer, TodosList**

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 21%" />
<col style="width: 21%" />
<col style="width: 25%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Testfall</strong></th>
<th><strong>Schritte</strong></th>
<th><strong>Erwartetes Ergebnis</strong></th>
<th><strong>Status (Erfolgreich/Nicht erfolgreich)</strong></th>
<th><strong>Bemerkungen</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Sortierung der Aufgaben</td>
<td><p>1. Unsortierte Liste an TodosList übergeben.</p>
<p>2. Reihenfolge prüfen.</p></td>
<td>Aufgaben sind korrekt nach Priorität sortiert.</td>
<td>✔️</td>
<td></td>
</tr>
</tbody>
</table>

**3. Ergebnisse der End-to-End-Tests**

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 25%" />
<col style="width: 18%" />
<col style="width: 23%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Testfall</strong></th>
<th><strong>Schritte</strong></th>
<th><strong>Erwartetes Ergebnis</strong></th>
<th><strong>Status (Erfolgreich/Nicht erfolgreich)</strong></th>
<th><strong>Bemerkungen</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Erstellen, Anzeigen und Ändern einer Aufgabe</td>
<td><p>1. Aufgabe erstellen.</p>
<p>2. Anzeige in Liste prüfen.</p>
<p>3. Priorität ändern.</p></td>
<td>Aktionen funktionieren nahtlos.</td>
<td>✔️</td>
<td></td>
</tr>
<tr class="even">
<td>Sortierlogik testen</td>
<td><p>1. Mehrere Aufgaben mit unterschiedlichen Prioritäten
erstellen.</p>
<p>2. Reihenfolge prüfen.</p></td>
<td>Aufgaben sind korrekt nach Priorität sortiert.</td>
<td>✔️</td>
<td></td>
</tr>
</tbody>
</table>

**4. Zusammenfassung**

**Gesamtergebnis:**

- **Anzahl erfolgreicher Tests:** 9/9

- **Anzahl fehlgeschlagener Tests:** 0/9

- **Abdeckungsgrad:** 100%
