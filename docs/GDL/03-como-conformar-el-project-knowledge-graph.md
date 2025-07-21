# Cómo conformar el Project Knowledge Graph

Conformar el "Project Knowledge Graph" (PKG) es un proceso disciplinado y continuo que transforma las conversaciones con la IA en una fuente de verdad estructurada para tu proyecto. No es algo que se hace al final, sino **documento a documento, al concluir cada módulo del GDL**.

Tu rol es el de un "bibliotecario" o "archivista" del proyecto, y la IA es la "escriba" que genera el contenido bajo tu dirección.

---

## Metodología para Construir el PKG

### 1. **Establece la Estructura de Archivos desde el Principio**

Antes de empezar, crea una carpeta en tu proyecto dedicada exclusivamente al PKG. Esto crea un lugar central y predecible para toda la documentación.

**Ejemplo de Estructura de Carpetas:**

/mi-proyecto
├── 📂 project_knowledge_graph/
│   ├── 00_CONSTITUTION.md  (El prompt inicial que usaste)
│   ├── 01_PROJECT_OVERVIEW.md
│   ├── 02_USER_STORIES.md
│   ├── 03_NFRS_AND_RISKS.md
│   ├── 04_MVP_SCOPE.md
│   ├── 05_TECH_STACK.md
│   ├── 06_DATA_MODEL.md
│   ├── 07_CODING_CONVENTIONS.md
│   └── 08_CHANGELOG.md
│
├── 📂 src/
│   └── ...
└── package.json

*La numeración ayuda a mantener el orden lógico del proceso GDL.*

### 2. **Genera Cada Documento al Final de su Módulo Correspondiente**

El GDL está dividido en módulos. La clave es no pasar al siguiente módulo sin antes haber documentado el actual.

**Tu Proceso es un Bucle:**

1. **Dialoga con la IA** para completar un módulo (ej. definir las historias de usuario).
2. **Da una Orden Explícita de Documentación** una vez que estés satisfecho con la conversación.
3. **Copia, Pega y Guarda** el resultado en el archivo correspondiente.
4. **Inicia el Siguiente Módulo.**

### 3. **Usa Órdenes de Documentación Claras y Específicas**

No dejes que la IA decida cómo documentar. Sé el director.

> **Ejemplo de Órdenes de Documentación:**
>
> * **(Al final del Módulo 1.1):** "Perfecto. Basado en nuestra conversación, genera el contenido final para el documento `01_PROJECT_OVERVIEW.md`. Usa un tono claro y conciso."
>
> * **(Al final del Módulo 1.2):** "Excelente. Ahora, crea una lista de `Historias de Usuario` para el archivo `02_USER_STORIES.md`. Usa el formato 'Como [tipo de usuario], quiero [acción] para poder [beneficio]' para cada una."
>
> * **(Al final del Módulo 2.2):** "Basado en lo que hemos definido, genera el `Modelo de Datos` para `06_DATA_MODEL.md`. Describe cada colección y los campos que contiene en un formato de lista."

#### 4. **El PKG es un Conjunto de "Documentos Vivos"**

El PKG no está escrito en piedra. Es una fuente de verdad *actual*.

* **Actualiza cuando sea necesario:** Si durante la Fase 3 (Ensamblaje) descubres que un modelo de datos necesita un campo nuevo, el proceso es:
    1. Pausar el desarrollo.
    2. Volver al diálogo de la Fase 2 con la IA para discutir el cambio.
    3. **Actualizar el documento `06_DATA_MODEL.md`** con la nueva estructura.
    4. Reanudar el desarrollo con la nueva especificación.
* **El `CHANGELOG.md` es clave:** Al final de cada "sprint" de desarrollo de una feature, actualiza el changelog.
    > **Orden:** "La feature 'Login de Usuario' está completa y probada. Actualiza el `08_CHANGELOG.md` añadiendo una entrada para hoy con esta nueva funcionalidad."

---

**En resumen:** Conformar el PKG es un ritual. Lo logras **creando una estructura de archivos dedicada**, **dando órdenes explícitas de documentación** al final de cada paso conversacional, y **manteniendo los documentos actualizados** como la única fuente de verdad. Esto convierte la volatilidad de una conversación de chat en la estabilidad de una documentación de proyecto seria.
