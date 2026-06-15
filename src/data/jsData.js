export const jsSections = [
  {
    title: 'Variabler & typer',
    items: [
      {
        label: 'const / let / var',
        code: `const namn = 'Anna'        // kan ej tilldelas om
let ålder = 30              // kan tilldelas om
var gammal = true           // undvik — function-scoped

// Typer
typeof 'hej'      // "string"
typeof 42         // "number"
typeof true       // "boolean"
typeof null       // "object" (JS-bugg)
typeof undefined  // "undefined"
typeof []         // "object"
typeof {}         // "object"`,
      },
      {
        label: 'Destructuring',
        code: `// Array
const [first, second] = ['äpple', 'banan']

// Objekt
const { namn, ålder } = user
const { namn: visningsnamn } = user  // byt namn

// Med default-värde
const { roll = 'användare' } = user

// I funktionsparameter
function hälsa({ namn, ålder }) {
  return \`Hej \${namn}, du är \${ålder} år!\`
}`,
      },
      {
        label: 'Spread & rest',
        code: `// Spread — kopiera/slå ihop
const kopia = [...original]
const merged = [...arr1, ...arr2]
const objKopia = { ...user, ålder: 31 }

// Rest — samla resterande
function summa(...tal) {
  return tal.reduce((acc, n) => acc + n, 0)
}
summa(1, 2, 3, 4)  // 10`,
      },
    ],
  },
  {
    title: 'Funktioner',
    items: [
      {
        label: 'Funktionssyntax',
        code: `// Klassisk
function hälsa(namn) {
  return \`Hej \${namn}!\`
}

// Arrow function
const hälsa = (namn) => \`Hej \${namn}!\`

// Med default-värde
const hälsa = (namn = 'världen') => \`Hej \${namn}!\`

// Flera rader
const beräkna = (a, b) => {
  const summa = a + b
  return summa * 2
}`,
      },
      {
        label: 'Higher-order functions',
        code: `// Funktion som tar en funktion som argument
function körTvå(fn) {
  fn()
  fn()
}

// Funktion som returnerar en funktion
function multiplikator(faktor) {
  return (tal) => tal * faktor
}
const dubbla = multiplikator(2)
dubbla(5)  // 10`,
      },
    ],
  },
  {
    title: 'Array-metoder',
    items: [
      {
        label: '.map() — transformera',
        code: `const priser = [100, 200, 300]
const medMoms = priser.map(p => p * 1.25)
// [125, 250, 375]

const namn = users.map(u => u.name)
// ['Anna', 'Bo', 'Carl']`,
      },
      {
        label: '.filter() — filtrera',
        code: `const tal = [1, 2, 3, 4, 5, 6]
const jämna = tal.filter(n => n % 2 === 0)
// [2, 4, 6]

const aktiva = users.filter(u => u.isActive)`,
      },
      {
        label: '.reduce() — summera',
        code: `const tal = [1, 2, 3, 4, 5]
const summa = tal.reduce((acc, n) => acc + n, 0)
// 15

const totalPris = cart.reduce((acc, item) => {
  return acc + item.price * item.qty
}, 0)`,
      },
      {
        label: '.find() / .some() / .every()',
        code: `const users = [
  { id: 1, namn: 'Anna', aktiv: true },
  { id: 2, namn: 'Bo', aktiv: false },
]

users.find(u => u.id === 2)       // { id: 2, ... }
users.some(u => u.aktiv)          // true
users.every(u => u.aktiv)         // false
users.findIndex(u => u.id === 2)  // 1`,
      },
      {
        label: 'Sortera & övriga',
        code: `const tal = [3, 1, 4, 1, 5]
tal.sort((a, b) => a - b)   // stigande: [1, 1, 3, 4, 5]
tal.sort((a, b) => b - a)   // fallande: [5, 4, 3, 1, 1]

// Platta ut
[[1, 2], [3, 4]].flat()     // [1, 2, 3, 4]

// Ta bort dubletter
[...new Set([1, 1, 2, 3])]  // [1, 2, 3]

// Kontrollera om array
Array.isArray([1, 2])        // true`,
      },
    ],
  },
  {
    title: 'Objekt',
    items: [
      {
        label: 'Object-metoder',
        code: `const user = { namn: 'Anna', ålder: 30, roll: 'admin' }

Object.keys(user)    // ['namn', 'ålder', 'roll']
Object.values(user)  // ['Anna', 30, 'admin']
Object.entries(user) // [['namn','Anna'], ['ålder',30], ...]

// Kopiera med ändring
const uppdaterad = { ...user, ålder: 31 }

// Slå ihop objekt
const merged = Object.assign({}, obj1, obj2)`,
      },
      {
        label: 'Optional chaining & nullish',
        code: `const user = { adress: { stad: 'Stockholm' } }

// Utan optional chaining — kraschar om adress saknas
user.adress.stad

// Med optional chaining — säkert
user?.adress?.stad          // 'Stockholm'
user?.telefon?.nummer       // undefined (kraschar ej)

// Nullish coalescing
user?.namn ?? 'Anonym'      // 'Anonym' om null/undefined`,
      },
    ],
  },
  {
    title: 'Async / Promises',
    items: [
      {
        label: 'async / await',
        code: `async function hämtaData(url) {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error('Något gick fel')
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err.message)
  }
}`,
      },
      {
        label: 'Promise.all — parallellt',
        code: `const [users, posts] = await Promise.all([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/posts').then(r => r.json()),
])
// Båda requests körs samtidigt`,
      },
    ],
  },
  {
    title: 'Övrigt',
    items: [
      {
        label: 'Ternary & short-circuit',
        code: `// Ternary
const label = isActive ? 'Aktiv' : 'Inaktiv'

// Short-circuit AND
isLoggedIn && renderDashboard()

// Short-circuit OR — fallback
const namn = user.namn || 'Anonym'`,
      },
      {
        label: 'localStorage',
        code: `// Spara
localStorage.setItem('tema', 'dark')

// Läsa
const tema = localStorage.getItem('tema')

// Ta bort
localStorage.removeItem('tema')

// Spara objekt
localStorage.setItem('user', JSON.stringify(user))
const sparadUser = JSON.parse(localStorage.getItem('user'))`,
      },
      {
        label: 'setTimeout / setInterval',
        code: `// Kör en gång efter 2 sekunder
const timer = setTimeout(() => {
  console.log('Hej!')
}, 2000)
clearTimeout(timer)  // avbryt

// Kör varje sekund
const interval = setInterval(() => {
  console.log('tick')
}, 1000)
clearInterval(interval)  // avbryt`,
      },
    ],
  },
]