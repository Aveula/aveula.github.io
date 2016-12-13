---
title: Outsourcing
layout: page
image: distrito-financiero.jpg
language: es
permalink: /es/servicios/:title
navegacion: servicios
---

Externalización de aquellas tareas de su empresa que usted quiera mantener fuera de sus estructuras. Es usted quien nos propone aquellas tareas que quiera externalizar en su empresa, bien porque no puede dedicarle el tiempo que es debido, bien porque quiere mantener con discreción, fuera de su ámbito profesional, nuevas tareas o investigaciones de mercado de cierta relevancia. Alguna de las tareas que hemos atendido de nuestros clientes son los siguientes:

- Gestión específica de recobro de impagados (tratamiento personalizado con reporte directo con la frecuencia que el cliente asigna).
- Controles de calidad sobre empleados, proveedores o satisfacción de clientes bajo los parámetros que él asigna.
- Investigación sobre fincas, controles personales sobre ocupación de las mismas.
- Puesta a disposición de nuestra oficina e intermediación de conflictos (arbitraje).
- Formación específica a redes de ventas, trabajo en equipo y motivación, conforme a los parámetros desarrollados por el cliente.

#### Paquetes
{% assign paquetes = site.data.paquetes | where: 'language', page.language | where: 'servicio', page.slug | sort: 'order' %}
{% for paquete in paquetes %}
  {% if paquete.language == page.language %}
  - {{ paquete.title }}
  {% endif %}
{% endfor %}

{% include tarifa-orientativa.md %}

{% include aviso-gastos.md %}

{% include instrucciones-contratacion.md %}
