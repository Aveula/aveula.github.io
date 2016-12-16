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

<div id="top-content">
  <div class="container">
    <div class="row">
      <h2 class="text-center">Servicios</h2>
      {% assign servicios = site.servicios | where: 'language', page.language | sort: 'orden' %}
      {% for servicio in servicios %}
        <div class="col-sm-3 col-md-3 item">
          <a href="{{ servicio.url | absolute_url }}" class="overlayed">
            <span class="overlay"><i class="fa fa-link"></i></span>
            <img src="{{ servicio.image | prepend: '/assets/images/servicios/medium/' | absolute_url }}"
                 class="img-responsive">
            <h3><a href="{{ servicio.url | absolute_url }}">{{ servicio.title }}</a></h3>
          </a>
          {{ servicio.excerpt | strip_html | truncate: 85 | markdownify }}
          <span class="more-link"><a href="{{ servicio.url | absolute_url}}">{{ site.data.traducciones['leer más'][page.language] }}</a></span>
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<div id="highlighted">
  <div class="container">
    <h2 class="title">{{ site.data.traducciones['principios aveula'][page.language] }}</h2>
    {% for principio in site.data.principios %}
      <div class="col-sm-6 col-md-6 item">
        <div><span class="icon"><i class="fa fa-{{ principio['icon'] }}"></i></span></div>
        <h3>{{ principio[page.language]['nombre'] }}</h3>
        <p>{{ principio[page.language]['texto'] }}</p>
      </div>
    {% endfor %}
  </div>
</div>
