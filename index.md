---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
language: es
---

<div class="container-full">
  <div class="row">
    {% include slider.html %}
  </div>
</div>

<div class="container">
  <div class="row">
    <h2 class="text-center">Servicios</h2>
    {% assign servicios = site.servicios | where: 'language', page.language %}
    {% for servicio in servicios %}
      <div class="col-md-3">
        <a href="{{ servicio.url | absolute_url }}" style="overflow: hidden;">
          <img src="{{ servicio.image | prepend: '/assets/images/servicios/medium/' | absolute_url }}"
               class="img-responsive">
          <h3 class="h4">{{ servicio.title }}</h3>
        </a>
        {{ servicio.excerpt | strip_html | truncate: 100 | markdownify }}
        <a href="{{ servicio.url }}"><small>{{ site.data.traducciones['leer más'][page.language] }}</small></a>
      </div>
    {% endfor %}
  </div>
</div>

<div class="container">
  <h2>{{ site.data.traducciones['principios aveula'][page.language] }}</h2>
  {% for principio in site.data.principios %}
    <h3>{{ principio[page.language]['nombre'] }}</h3>
    <p>{{ principio[page.language]['texto'] }}</p>
  {% endfor %}
</div>
