---
title: Outsourcing
image: distrito-financiero.png
language: en
permalink: /en/services/:title
---

Outsourcing of those tasks performed by your company which you wish to keep outside your structure. Should you not be able to devote to a task as much time as it demands, or should you like to discreetly keep new market related researches or jobs of a certain importance outside of your professional area, you decide which tasks you would like to outsource. Some of the tasks we have handled for our clients include:

- Specific management of debt recovery (personalized treatment with direct reporting with the frequency chosen by the client)
- Quality controls on employees, suppliers or client satisfaction levels under the parameters assigned by you.
- Research on real estate and personal controls on its occupation.
- Availability of our offices and conflict mediation (arbitration)
- Specific training regarding sales networks, teamwork and motivation, according to the parameters developed by you.

#### Packs
{% assign paquetes = site.data.paquetes | where: 'language', page.language | where: 'servicio', page.slug | sort: 'order' %}
{% for paquete in paquetes %}
  {% if paquete.language == page.language %}
  - {{ paquete.title }}
  {% endif %}
{% endfor %}
