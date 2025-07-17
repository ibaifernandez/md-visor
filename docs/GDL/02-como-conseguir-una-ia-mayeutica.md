Conseguir que la IA trabaje la mayéutica (el método socrático) es el corazón de la Fase 1 del GDL. No se trata de que la IA te dé lecciones, sino de que use las preguntas como herramienta principal para ayudarte a **estructurar tu propio pensamiento**.

Lo logras dándole una directiva muy específica en tu "Prompt de Constitución" y reforzando ese comportamiento.

---

### Claves para Activar el Modo Socrático:

#### 1. **Instrucción Explícita en el "Prompt de Constitución"**

Debes ordenar a la IA que priorice las preguntas sobre las respuestas, especialmente en las fases iniciales. Modifica tu constitución para que incluya un mandato socrático.

> **Ejemplo de cláusula para la Constitución:**
>
> **Principio de Guía Socrática:**
> "Tu función principal, sobre todo en la Fase 1, no es dar soluciones, sino **hacer las preguntas correctas**. Ante una idea nueva o una petición mía, tu primera reacción debe ser cuestionarla constructivamente para asegurar que la entendemos a fondo. Ayúdame a explorar el 'porqué' antes del 'cómo'.
>
> **Ejemplos de preguntas que debes usar:**
> * 'Empecemos por el principio: ¿Qué problema fundamental resuelve esto y para quién?'
> * 'Describamos el viaje del usuario paso a paso. ¿Qué es lo primero que hace?'
> * 'Esa es una buena idea. ¿Qué posibles desafíos o riesgos podríamos anticipar con este enfoque?'
> * 'Has mencionado un 'panel de control'. ¿Qué información mínima y viable debería mostrar para ser útil en la primera versión?'"

#### 2. **Cambia la Forma en que Tú Preguntas**

La mayéutica es un diálogo. Tú también debes participar de una manera que la fomente.

* **Plantea problemas, no soluciones:**
    * **Mal (pide solución):** *"Necesito una base de datos en Firestore para guardar usuarios."*
    * **Bien (plantea problema):** *"Necesito guardar información de mis usuarios. Ellos necesitarán un perfil y una forma de iniciar sesión."*
    Esta segunda forma invita a la IA a preguntar: *"Entendido. ¿Qué piezas de información son esenciales para el perfil de un usuario en la primera versión?"*

* **Usa la IA como un "espejo reflexivo":**
    Lanza una idea y pide explícitamente que te la cuestione.
    > *"Tengo la idea de añadir un sistema de chat en tiempo real. Antes de seguir, **trabaja la mayéutica conmigo**: ¿Qué preguntas clave debería hacerme a mí mismo sobre esta funcionalidad?"*

#### 3. **Refuerza el Comportamiento**

Cuando la IA haga una buena pregunta que te haga pensar, díselo.

> *"Esa es una pregunta excelente. No había considerado el tema de la moderación. Añadamos 'definir política de moderación' a los riesgos."*

Si la IA vuelve a su modo de "sirviente" y te da una solución directa, corrígela amablemente.

> *"Espera, te estás adelantando. Aún estamos definiendo el problema. Volvamos a las preguntas."*

---

### Ejemplo de Diálogo:

**SIN Mayéutica:**
> **Tú:** "Quiero añadir comentarios en los artículos."
> **IA:** "Claro, aquí tienes un modelo de datos para Firestore y el código en React para un componente de comentarios..."

**CON Mayéutica (GDL Activado):**
> **Tú:** "Quiero que los usuarios puedan interactuar en los artículos."
> **IA:** "Entendido. Una forma de interacción son los comentarios. Para definirlo bien, empecemos por el usuario: ¿Quién puede dejar un comentario? ¿Cualquier visitante o solo usuarios registrados?"
> **Tú:** "Solo usuarios registrados."
> **IA:** "Perfecto. ¿Y qué pasa con la moderación? ¿Los comentarios aparecen al instante o necesitan aprobación? Esto es importante para la seguridad y el tono de la comunidad."

**En resumen:** Logras que la IA sea socrática al **ordenárselo explícitamente**, **cambiando tu forma de interactuar** para fomentar preguntas y **corrigiendo su rumbo** cuando se desvía hacia la simple ejecución de órdenes. Se trata de forzar un diálogo de **claridad antes que código**.