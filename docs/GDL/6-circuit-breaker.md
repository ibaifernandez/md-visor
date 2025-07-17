Esta es una de las reglas más potentes del GDL para evitar bucles de frustración. La consigues no porque la IA pueda "sentir" su propio error, sino porque tú, como director del proceso, estableces un protocolo y lo haces cumplir.

La IA no puede saber que su código falló. Eres tú quien debe informarle y, más importante, llevar la cuenta.

### Cómo Implementar el "Protocolo Circuit Breaker":

#### 1. **Añade el Protocolo a tu "Prompt de Constitución"**

Debes definir explícitamente qué es el "Circuit Breaker", cuándo se activa y qué debe hacer la IA cuando se activa.

> **Ejemplo de Cláusula para la Constitución:**
>
> **Principio de Autocorrección ("Protocolo Circuit Breaker"):**
>
> **1. Definición:** Este protocolo es nuestro mecanismo de seguridad para evitar bucles de errores repetitivos.
>
> **2. Regla de Activación (gestionada por mí):**
> * Yo ejecutaré el código que generes.
> * Si falla, te informaré con el mensaje "Fallo 1" y el error.
> * Si el nuevo código que generas vuelve a fallar **con el mismo error**, te informaré con el mensaje: **"Fallo 2. Activa el Protocolo Circuit Breaker."**
>
> **3. Acción del Circuit Breaker (lo que tú debes hacer):**
> * Al recibir la orden "Activa el Protocolo Circuit Breaker", tienes **PROHIBIDO** intentar una tercera corrección sobre el mismo código.
> * En su lugar, debes:
>     a. **Pausar:** Detener inmediatamente la implementación.
>     b. **Analizar:** Explicar por qué crees que el enfoque actual no está funcionando.
>     c. **Cuestionar:** Proponer una nueva línea de preguntas para reevaluar la arquitectura o simplificar el objetivo. El foco se mueve de "cómo lo arreglo" a "¿estamos enfocando bien el problema?".

#### 2. **Sigue el Protocolo Rigurosamente en tu Diálogo**

Tú eres el que aprieta el botón. La IA solo seguirá las reglas que le has dado.

---

### Diálogo de Ejemplo:

**Tú:** "Necesito el código para conectar a Firestore y obtener la lista de usuarios."
*(La IA genera el código v1)*

**Tú (después de ejecutarlo):** "El código no funciona. **Fallo 1**, aquí está el error: `FirebaseError: Missing or insufficient permissions.`"

**IA:** "Entendido. El error indica un problema con las reglas de seguridad de Firestore. He añadido la autenticación necesaria. Aquí está el código corregido."
*(La IA genera el código v2)*

**Tú (después de ejecutarlo y ver que el error es idéntico):** "No ha funcionado. Es el mismo error. **Fallo 2. Activa el Protocolo Circuit Breaker.**"

**IA (ejecutando el protocolo):**
> "Protocolo Circuit Breaker activado.
>
> **Análisis:** He intentado corregir el acceso a datos dos veces sin éxito. El problema parece más profundo que el código de la función; probablemente reside en la configuración de las reglas de seguridad de Firestore en la consola de Firebase. Insistir en cambiar el código no resolverá un problema de permisos.
>
> **Cuestionamiento:** Demos un paso atrás. En lugar de arreglar el código, verifiquemos las bases. ¿Podemos revisar juntos las reglas de seguridad que tienes actualmente en tu base de datos de Firestore? ¿Qué regla se supone que debería permitir esta lectura?"

**En resumen:** Logras el "Circuit Breaker" convirtiéndolo en un **protocolo de colaboración explícito**. Tú eres el sistema de monitoreo que detecta los fallos, y la IA es el ingeniero que, bajo tus órdenes, tiene un procedimiento claro para detenerse, analizar y re-estrategizar en lugar de insistir ciegamente en una solución fallida.