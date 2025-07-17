# 📚 Visor Markdown Local

¿Tienes tu mente hecha mierda con miles de notas sueltas, ideas a medio cocinar y documentación regada por todas partes?  
Bien. Este proyecto es para ti.

Un simple visor de archivos `.md`, bonito, ordenado por carpetas, y **sin dependencias de mierda**.  
Abres en el navegador, lees, y ya. ¿Para qué más?

---

## 🚀 Cómo se usa

### 1. Clona el puto repositorio

```cli
git clone https://github.com/ibaifernandez/visor-md.git
cd visor-md
```

### 2. Mete tu documentación en /docs

Organiza tus archivos Markdown como quieras:

```plaintext
docs/
├── proyecto-1/
│   └── intro.md
├── ideas/
│   └── manifesto.md
└── cosas-que-no-se-donde-van/
    └── random.md
```

### 3. Genera la lista de archivos

Cada vez que agregues archivos nuevos:

```node generateFileList.js```

Sí, a mano. Como los dioses del teclado mandan.

(No es automático. No hay magia. Es JavaScript, no Harry Potter).

### 4. Corre un servidor local

Si no tienes ```http-server```:

```npm install -g http-server```

Y luego, ejecuta:

```http-server .```

Abre tu navegador donde te diga la terminal.

Boom.

### ✨ ¿Qué hace?

- Muestra tu documentación Markdown sin complicaciones.
- Organiza los archivos por carpeta, con acordeones.
- Usa marked.js para renderizar como dios manda.
- Puedes ocultar el disclaimer con un botón, por si no te gusta que te recuerden cosas.
- Es feo si quieres que sea feo, y bonito si lo tuneas. Tú decides.

## 📎 Notas sueltas

Este proyecto no guarda cambios, no tiene backend, y no intenta parecerse a Notion.
Es como un cuaderno viejo... pero que se ve bien en pantalla retina.

Si rompes algo, ya sabes a quién culpar: a ti.

## 🧠 Filosofía

Porque no todo tiene que ser SaaS, freemium o venderte tu alma a Google.
Porque los .md también merecen amor.
Porque tú lo vales. O al menos tus notas.

## 🆓 Licencia

MIT. O sea, haz lo que te dé la gana.
No hace falta ni que me nombres.
Solo no digas que lo hiciste tú desde cero si no es verdad.
Porque eso sí sería una falta de respeto.
