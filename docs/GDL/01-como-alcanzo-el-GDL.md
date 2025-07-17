Para alcanzar el "Guided Development Lifecycle" (GDL) con una IA, no puedes esperar que actúe así por defecto. Debes **instruir y dirigir activamente a la IA** para que adopte ese rol y siga esa metodología.

La herramienta fundamental para lograrlo es el **"Prompt de Constitución"**: un conjunto de instrucciones iniciales que establecen las reglas del juego para toda la sesión de desarrollo.

---

### Pasos para Implementar el GDL con una IA:

#### 1. **Crear tu "Prompt de Constitución"**
Este es el primer mensaje que le das a la IA al iniciar un proyecto. Debe ser claro, detallado y establecer los cimientos de su comportamiento.

Un buen Prompt de Constitución incluye:

* **Definición del Rol:** Especifica que no es un simple asistente, sino un "socio", un "guía socrático" o un "arquitecto de software".
* **Establecimiento de la Metodología:** Nombra explícitamente el GDL y sus tres fases (Descubrimiento, Arquitectura, Ensamblaje).
* **Reglas Inquebrantables:** Prohíbe acciones que rompan el flujo, como generar código antes de tiempo.

#### 2. **Proporcionar un Ejemplo Concreto**
Aquí tienes una plantilla que puedes usar y adaptar para iniciar tu sesión.

> **Ejemplo de Prompt de Constitución:**
>
> **Tu Rol:** A partir de ahora, actuarás como mi socio experto en desarrollo de software dentro del marco "Guided Development Lifecycle" (GDL). Tu objetivo no es solo ejecutar órdenes, sino guiarme a través de un proceso estructurado para asegurar el éxito del proyecto. Eres un guía socrático.
>
> **Nuestra Metodología (GDL):**
> Seguiremos estrictamente estas 3 fases en orden:
> 1.  **Fase 1: Discovery Lab (Descubrimiento):** Conversaremos para definir la idea, los usuarios, los riesgos y el MVP. **Regla: En esta fase está prohibido generar código.** Tu labor es hacer preguntas.
> 2.  **Fase 2: Blueprint Room (Arquitectura):** Traduciremos el alcance a un plan técnico (stack, modelo de datos).
> 3.  **Fase 3: Assembly Line (Ensamblaje):** Construiremos el producto, feature por feature, de forma iterativa.
>
> **Confirmación:** Si has entendido tu rol y esta metodología, responde: "GDL activado. Iniciando Fase 1: Discovery Lab. ¿Cuál es la idea central de tu proyecto?"

#### 3. **Ser el Socio Humano Activo**
El GDL es una colaboración. Tu papel es tan importante como el de la IA:
* **Hacer cumplir las reglas:** Si la IA intenta saltarse una fase (ej. te ofrece código en la Fase 1), debes corregirla: *"Aún no estamos en la Fase 3. Volvamos al Discovery Lab y definamos primero las historias de usuario."*
* **Gestionar el "Project Knowledge Graph":** Tú eres el guardián de los documentos. Pide a la IA que genere el contenido para cada uno y tú lo guardas y organizas.
* **Dirigir el flujo:** Eres tú quien da por concluida una fase y autoriza el paso a la siguiente.

---

**En resumen:** Consigues alcanzar el GDL no esperando que la IA lo sepa, sino **imponiéndolo tú como el marco de trabajo obligatorio** a través de un prompt inicial claro y manteniendo una supervisión activa durante todo el proceso.