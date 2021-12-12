// Compiled using marko@4.24.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/pizza_cook_party$1.0.0/views/home.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link href=https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css rel=stylesheet integrity=sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3 crossorigin=anonymous><script src=https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js integrity=sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p crossorigin=anonymous></script><link rel=stylesheet href=/static/css/style.css><title>Pizza Cook Party</title></head><body><div id=container><div class=accordion id=accordionExample><img style=\"width: 60%;\" id=logo src=/static/imgs/logo.png alt><br><div class=accordion-item><h2 class=accordion-header id=headingOne><button class=accordion-button type=button data-bs-toggle=collapse data-bs-target=#collapseOne aria-expanded=true aria-controls=collapseOne>🍕 What is a Pizza Cook Party? 🍕 </button></h2><div id=collapseOne class=\"accordion-collapse collapse show\" aria-labelledby=headingOne data-bs-parent=#accordionExample><div class=accordion-body><p>A <b>Pizza Cook Party</b> is simply a meeting of friends or family to make a pizza <br> and eat it together, every guest also have to bring a contributin to the pizza recipe, it can be <br> a ingredient or a tool wich is decided by the host of the party.</p><br><img src=/static/imgs/ex.png><br><b>How to create a Pizza Cook Party?</b><p>1. Complete the Meeting Details forms and click on the submit button</p><p>2. Complete the Recipe Details forms and click on the submit button</p><p>3. Invite the guests, one by one, by completing the guests forms</p></div></div></div><div class=accordion-item><h2 class=accordion-header id=headingTwo><button class=\"accordion-button collapsed\" type=button data-bs-toggle=collapse data-bs-target=#collapseTwo aria-expanded=false aria-controls=collapseTwo>🍕 Meeting Details 🍕</button></h2><div id=collapseTwo class=\"accordion-collapse collapse\" aria-labelledby=headingTwo data-bs-parent=#accordionExample><div class=accordion-body><strong></strong><form action=/meetingDetails method=post><div class=form-floating><input type=text id=floatingInput name=address class=form-control placeholder=a aria-describedby=localHelpBlock><label for=inputLocal>Local address</label><div id=localHelpBlock class=form-text>Type the full address of the place the party is going to happen</div></div><br><div class=form-floating><input type=text id=floatingInput name=time class=form-control placeholder=a><label for=inputTime>Time</label><div id=localHelpBlock class=form-text>ex: from 12:00 to 21:00</div></div><br><div class=form-floating><textarea class=form-control placeholder=\"Leave a comment here\" id=floatingTextarea name=comment></textarea><label for=floatingTextarea>Comments. . .</label></div><br><button type=submit class=\"btn btn-success\">Submit</button></form></div></div></div><div class=accordion-item><h2 class=accordion-header id=headingThree><button class=\"accordion-button collapsed\" type=button data-bs-toggle=collapse data-bs-target=#collapseThree aria-expanded=false aria-controls=collapseThree>🍕 Recipe Overview 🍕</button></h2><div id=collapseThree class=\"accordion-collapse collapse\" aria-labelledby=headingThree data-bs-parent=#accordionExample><div class=accordion-body><strong>It's time to share the recipe!</strong><form action=/recipe method=post><div class=form-floating><input type=text id=floatingInput name=name class=form-control placeholder=a><label for=inputLocal>Name</label></div><br><div class=form-floating><textarea class=form-control placeholder=\"Leave a comment here\" id=floatingTextare name=ingredients></textarea><label for=floatingTextare>Ingredients</label></div><br><div class=form-floating><textarea class=form-control placeholder=\"Leave a comment here\" id=floatingTextarea name=preparation></textarea><label for=floatingTextarea>Preparation Steps</label></div><br><button type=submit class=\"btn btn-success\">Submit</button></form></div></div></div><div class=accordion-item><h2 class=accordion-header id=headingFour><button class=\"accordion-button collapsed\" type=button data-bs-toggle=collapse data-bs-target=#collapseFour aria-expanded=false aria-controls=collapseFour>🍕 Guests 🍕</button></h2><div id=collapseFour class=\"accordion-collapse collapse\" aria-labelledby=headingFour data-bs-parent=#accordionExample><div class=accordion-body><strong>Add a guest one by one</strong> <form action=/guest method=post><div class=form-floating><input type=text id=floatingInput class=form-control placeholder=a name=name><label for=inputLocal>Name</label></div><br><div class=form-floating><input type=email id=floatingInput class=form-control placeholder=a name=email><label for=inputTime>Email</label></div><br><div class=form-floating><textarea class=form-control placeholder=\"Leave a comment here\" id=floatingTextare name=contribution></textarea><label for=floatingTextare>What this guest needs to bring?</label><div class=form-text>ex: bring 10 tomatoes for our pizza!</div></div><br><div class=form-floating><textarea class=form-control placeholder=\"Leave a comment here\" id=floatingTextarea name=comment></textarea><label for=floatingTextarea>Comments. . .</label></div><br><button type=submit class=\"btn btn-success\">Add guest</button></form></div></div></div></div><br><br><br></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "99");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/pizza_cook_party$1.0.0/views/home.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
