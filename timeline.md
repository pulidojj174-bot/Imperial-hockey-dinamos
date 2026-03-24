# 📌 Timeline con ngx-timeline (Angular)

Guía de implementación del componente **Timeline** usando la librería `@omnedia/ngx-timeline`.

---

## 📦 Instalación

```bash
npm install @omnedia/ngx-timeline


⚙️ Configuración del Componente
📄 component.ts


⚙️ Configuración del Componente
📄 component.ts


🧩 Uso en HTML
🔄 Timeline con orientación switch


<div class="timeline-wrapper">
  <h1>
    Timeline - Switch
    <om-neon-underline></om-neon-underline>
  </h1>

  <om-timeline
    [entryGap]="'1rem'"
    [titleMaxWidth]="'15rem'"
    [orientation]="'switch'"
  >
    <om-timeline-entry>
      <ng-template #timelineTitle>
        <p class="timeline-title">2022</p>
      </ng-template>

      <ng-template #timelineContent>
        <div class="timeline-content">
          The team works on the design specifications and first mockups.
          <ul>
            <li>Creation of user interface designs</li>
            <li>User experience workshops</li>
            <li>Finalizing design prototypes</li>
          </ul>
        </div>
      </ng-template>
    </om-timeline-entry>

    <!-- Más entries... -->

  </om-timeline>
</div>

⬅️ Timeline con orientación left

<div class="timeline-wrapper">
  <h1>
    Timeline - Left
    <om-neon-underline></om-neon-underline>
  </h1>

  <om-timeline
    [entryGap]="'1rem'"
    [titleMaxWidth]="'15rem'"
  >
    <om-timeline-entry>
      <ng-template #timelineTitle>
        <p class="timeline-title">2022</p>
      </ng-template>

      <ng-template #timelineContent>
        <div class="timeline-content">
          The team works on the design specifications and first mockups.
          <ul>
            <li>Creation of user interface designs</li>
            <li>User experience workshops</li>
            <li>Finalizing design prototypes</li>
          </ul>
        </div>
      </ng-template>
    </om-timeline-entry>

    <!-- Más entries... -->

  </om-timeline>
</div>


🎨 Estilos (SCSS)


.timeline-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 6rem;
    font-weight: bold;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(
      to bottom,
      #fff 0,
      rgba(53, 53, 53) 95%
    );
    margin-bottom: 2rem;
  }
}

.timeline-title {
  font-size: 3rem;
  color: #929292;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.timeline-content {
  font-size: 1rem;
  color: #fff;
  padding: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.timeline-content ul {
  padding: 1rem 0 0 1rem;
  list-style-type: circle;
}

.timeline-content li {
  margin-bottom: 0.5rem;
}


⚙️ Props disponibles


| Prop             | Tipo                            | Default                  | Descripción                        |
| ---------------- | ------------------------------- | ------------------------ | ---------------------------------- |
| `orientation`    | `'left' \| 'right' \| 'switch'` | `'left'`                 | Define la alineación del timeline  |
| `entriesGap`     | `string`                        | `'5rem'`                 | Espacio entre entradas             |
| `entryGap`       | `string`                        | `'4rem'`                 | Espacio entre título y contenido   |
| `titleGap`       | `string`                        | `'2rem'`                 | Espacio entre el punto y el título |
| `titleMaxWidth`  | `string`                        | `'25rem'`                | Ancho máximo del título            |
| `pathWidth`      | `string`                        | `'2px'`                  | Grosor de la línea                 |
| `pathColor`      | `string`                        | `#e2e8f0`                | Color de la línea                  |
| `gradientColors` | `string[]`                      | `['#3b82f6', '#7f00ff']` | Gradiente de la línea              |
| `styleClass`     | `string`                        | `undefined`              | Clase CSS personalizada            |



