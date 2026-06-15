export const gitCommands = [
  {
    category: 'Grundläggande',
    commands: [
      { cmd: 'git init', desc: 'Skapa ett nytt lokalt repo' },
      { cmd: 'git clone <url>', desc: 'Klona ett befintligt repo' },
      { cmd: 'git status', desc: 'Visa ändrade filer' },
      { cmd: 'git add .', desc: 'Stagea alla ändringar' },
      { cmd: 'git commit -m "meddelande"', desc: 'Spara en commit' },
      { cmd: 'git push', desc: 'Pusha till remote' },
      { cmd: 'git pull', desc: 'Hämta och merge:a från remote' },
    ],
  },
  {
    category: 'Grenar',
    commands: [
      { cmd: 'git branch', desc: 'Lista alla grenar' },
      { cmd: 'git branch <namn>', desc: 'Skapa ny gren' },
      { cmd: 'git switch <namn>', desc: 'Byt gren' },
      { cmd: 'git switch -c <namn>', desc: 'Skapa och byt gren direkt' },
      { cmd: 'git merge <namn>', desc: 'Merga gren in i nuvarande' },
      { cmd: 'git branch -d <namn>', desc: 'Ta bort gren (säkert)' },
    ],
  },
  {
    category: 'Ångra & ändra',
    commands: [
      { cmd: 'git restore <fil>', desc: 'Ångra ändringar i working directory' },
      { cmd: 'git restore --staged <fil>', desc: 'Unstage en fil' },
      { cmd: 'git commit --amend', desc: 'Ändra senaste commit-meddelande' },
      { cmd: 'git revert <hash>', desc: 'Skapa en ny commit som ångrar en gammal' },
      { cmd: 'git reset --soft HEAD~1', desc: 'Ångra senaste commit, behåll ändringar stagade' },
      { cmd: 'git reset --hard HEAD~1', desc: 'Ångra senaste commit, ta bort ändringar' },
    ],
  },
  {
    category: 'Historik & diff',
    commands: [
      { cmd: 'git log --oneline', desc: 'Kompakt commit-historik' },
      { cmd: 'git log --oneline --graph', desc: 'Historik som träd' },
      { cmd: 'git diff', desc: 'Visa ej stagade ändringar' },
      { cmd: 'git diff --staged', desc: 'Visa stagade ändringar' },
      { cmd: 'git stash', desc: 'Spara undan ändringar tillfälligt' },
      { cmd: 'git stash pop', desc: 'Återställ sparade ändringar' },
    ],
  },
]