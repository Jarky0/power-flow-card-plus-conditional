# Release-Workflow für Power Flow Card Plus Conditional

Dieser Workflow beschreibt die Schritte, die für das Erstellen und Veröffentlichen eines neuen Releases notwendig sind.

## Voraussetzungen

- Git-Zugriff auf das Repository
- GitHub CLI (`gh`) installiert
- Node.js und npm/pnpm installiert

## Workflow-Schritte

### 1. Code-Änderungen vornehmen

- Implementiere die gewünschten Funktionen oder Bugfixes
- Stelle sicher, dass der Code funktioniert und getestet ist

### 2. Version aktualisieren

```bash
# 1. Öffne package.json und aktualisiere die Versionsnummer
# Beispiel: Änderung von "version": "0.2.12" auf "version": "0.2.13"

# 2. Commit der Versionsänderung
git add package.json
git commit -m "Bump version to x.y.z"
```

### 3. Build erstellen

```bash
# Build der Anwendung durchführen
npm run build
# oder
pnpm run build

# Das Ergebnis wird in den Ordnern dist/ und release/ erstellt
```

### 4. Release-Artefakt erstellen

```bash
# ZIP-Datei für das Release erstellen
zip -r power-flow-card-plus-conditional-vX.Y.Z.zip dist -x "*.git*" "*.DS_Store" "node_modules*"
# wobei X.Y.Z die neue Versionsnummer ist
```

### 5. Git-Tag erstellen und pushen

```bash
# Tag erstellen
git tag -a vX.Y.Z -m "Version X.Y.Z - Beschreibung der Änderungen"

# Code und Tags zum Remote-Repository pushen
git push origin main
git push origin vX.Y.Z
```

### 6. GitHub-Release erstellen

```bash
# Mit GitHub CLI ein Release erstellen und die ZIP-Datei hochladen
gh release create vX.Y.Z --title "vX.Y.Z" --notes "Beschreibung der Änderungen" power-flow-card-plus-conditional-vX.Y.Z.zip
```

Alternativ kann das Release auch über die GitHub-Weboberfläche erstellt werden:
1. Gehe zu https://github.com/Jarky0/power-flow-card-plus-conditional/releases
2. Klicke auf "Draft a new release"
3. Wähle den Tag aus
4. Füge einen Titel und Release-Notes hinzu
5. Lade die ZIP-Datei hoch
6. Klicke auf "Publish release"

### 7. Aktualisierung in Home Assistant

Nach dem Release sollte die neue Version in HACS verfügbar sein. Falls nicht:

1. HACS manuell aktualisieren
2. Home Assistant neu starten
3. Browser-Cache leeren

## Wichtige Hinweise

- HACS erkennt nur offiziell erstellte GitHub-Releases, nicht nur Git-Tags
- Stelle sicher, dass die ZIP-Datei die korrekte Ordnerstruktur enthält
- Halte die Versionsnummern konsistent (package.json, Git-Tags und GitHub-Release) 