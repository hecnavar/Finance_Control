# Proyecto Frontend: Gestión de Finanzas Personales

Este proyecto presenta una aplicación web para la gestión de finanzas personales, enfocada en el control de tarjetas de crédito, presupuesto y gastos. Permite a los usuarios organizar sus finanzas de manera eficiente y tomar decisiones informadas.

---

## 🚀 Funcionalidades
- **Gestión de Tarjetas de Crédito:** Registro, visualización y eliminación de tarjetas de crédito, incluyendo límite, fechas de corte y pago.
- **Presupuesto:** Definición de un presupuesto mensual total y visualización del presupuesto restante.
- **Control de Gastos:** Registro y visualización de gastos, categorización y marcación de gastos fijos con diferentes frecuencias.
- **Alertas:** Indicadores visuales para tarjetas con fechas de pago próximas.
- **Persistencia de Datos:** La información se guarda localmente en el navegador para que no se pierda al recargar la página.
- **Navegación:** Interfaz intuitiva con navegación entre las diferentes secciones de la aplicación.
- **Validación de Formularios:** Validación en tiempo real de los campos de los formularios con mensajes de error claros.
- **Modal de Confirmación:** Utilización de Portals para mostrar modales de confirmación antes de realizar acciones críticas (ej., eliminar tarjeta).

---

## 🛠️ Tecnologías Utilizadas
- **HTML5** (generado por React)
- **CSS3** (estilado con CSS Modules y Media Queries)
- **React**: Librería de JavaScript para construir la interfaz de usuario.
- **React Router DOM**: Para la gestión de la navegación entre páginas.
- **Custom Hooks**: Lógica reutilizable para la gestión de formularios y validación (`useFormValidation`).
- **Portals**: Para renderizar elementos fuera de la jerarquía de componentes (modales, alertas).
- **uuid**: Para generar IDs únicos para tarjetas y gastos.
---

## ⚙️ Configuración Inicial

1.  **Clonar el Repositorio** 
    ```bash
    git clone [https://github.com/hecnavar/Finance_Control.git]
    cd Finance_Control
    ```

2.  **Instalar Dependencias**
    ```bash
    npm install
    # o
    yarn install
    ```

## Configuración de la Aplicación

Este proyecto utiliza **React Router DOM** para la navegación, configurado principalmente en el archivo `App.js`. Las rutas están definidas para `/`, `/cards`, `/budget`, y `/expenses`. No se requiere configuración adicional de rutas en archivos HTML.

---