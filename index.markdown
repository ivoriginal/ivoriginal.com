---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

{% include section-hero.html %}

<!-- Upcoming -->
{% if site.data.settings.upcoming__talk %}
    {% include section-talks-2.html %}
{% endif %}
<!-- /Upcoming -->
