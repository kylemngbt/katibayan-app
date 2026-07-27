# Katibayan Practice

A small offline browser app for drilling myself on taking Iglesia Ni
Cristo katibayan attendance slips: catching a member's full name,
District & Local Congregation, and Purok–Grupo correctly the first
time, by ear.


## Tech stack

Plain HTML, CSS, and JavaScript. Voice is handled entirely client-side with
the browser's built-in [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API), so the whole thing works fully offline once the page is open. That matters here since it's meant to be used live, at a table, possibly
without reliable wifi.

Just open `index.html` in a browser, nothing to install.

Built for personal use, so there's no answer-logging or long-term
stats tracking, just a fast loop.
