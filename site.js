// daniellahav.com — shared page behavior (vanilla, no dependencies)
(function () {
  'use strict';

  var EMAIL = 'daniel.lahav@biu.ac.il';

  var REQUEST_ITEMS = {
    thesis: { short: 'PhD thesis chapters', full: 'PhD thesis chapters: Flexible spintronics under strain (in progress)' },
    apl2023: { short: 'APL 2023 author copy', full: 'Author copy: Flexible planar Hall effect sensor with sub-200 pT resolution (Applied Physics Letters, 2023)' },
    measurement: { short: 'Measurement preprint', full: 'Preprint: Enhanced magnetic resolution in elliptical PHE sensors (in press at Measurement)' },
    array: { short: 'Array preprint', full: 'Preprint: Physics-guided multi-view conditioning for super-resolution (under review at Array)' },
    bina2025talk: { short: 'BINA 2025 slides', full: 'Talk slides: Multi-Functional Flexible Planar Hall Effect Sensors (BINA Conference 2025)' },
    klabina2026: { short: 'KLA-BINA 2026 slides', full: 'Talk slides: Flexible Spintronics Under Strain (KLA-BINA Outstanding Students Seminar 2026)' },
    mmm2025talk: { short: 'MMM-Intermag 2025 slides', full: 'Talk slides: Multi-Functional Flexible Planar Hall Effect Sensors (2025 Joint MMM-Intermag)' },
    emsa2026talk: { short: 'EMSA 2026 slides', full: 'Talk slides: Multifunctional High-Resolution Flexible Elliptical Planar Hall Effect Sensors for Magnetometry and Strain Sensing (EMSA 2026)' },
    teaching: { short: 'Teaching materials', full: 'Teaching materials: lab guides, problem sets, and training checklists' }
  };

  var BIBS = {
    1: '@article{vizel2025magnetic,\n  author  = {Vizel, M. and Alimi, R. and Lahav, D. and Schultz, M. and Amrusi, S. and Grosz, A. and Klein, L.},\n  title   = {Magnetic Source Detection Using an Array of Planar Hall Effect Sensors and Machine Learning Algorithms},\n  journal = {Applied Sciences},\n  volume  = {15},\n  number  = {2},\n  pages   = {964},\n  year    = {2025},\n  doi     = {10.3390/app15020964}\n}',
    2: '@article{lahav2024planar,\n  author  = {Lahav, D. and Schultz, M. and Amrusi, S. and Grosz, A. and Klein, L.},\n  title   = {Planar Hall Effect Magnetic Sensors with Extended Field Range},\n  journal = {Sensors},\n  volume  = {24},\n  number  = {13},\n  pages   = {4384},\n  year    = {2024},\n  doi     = {10.3390/s24134384}\n}',
    3: '@article{nhalil2023flexible,\n  author  = {Nhalil, H. and Lahav, D. and Schultz, M. and Amrusi, S. and Grosz, A. and Klein, L.},\n  title   = {Flexible Planar Hall Effect Sensor with sub-200 pT Resolution},\n  journal = {Applied Physics Letters},\n  volume  = {123},\n  number  = {2},\n  pages   = {024102},\n  year    = {2023},\n  doi     = {10.1063/5.0156588}\n}'
  };

  var currentRequest = 'thesis';

  function $(sel) { return document.querySelector(sel); }

  function openMenu() {
    var sheet = $('#menu-sheet');
    if (sheet) { sheet.classList.add('open'); document.body.classList.add('menu-open'); }
    var btn = $('[data-action="open-menu"]');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    var sheet = $('#menu-sheet');
    if (sheet) { sheet.classList.remove('open'); document.body.classList.remove('menu-open'); }
    var btn = $('[data-action="open-menu"]');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
  function openDialog(id) { var d = document.getElementById(id); if (d && !d.open) d.showModal(); }
  function closeDialog(id) { var d = document.getElementById(id); if (d && d.open) d.close(); }

  function requestBody(item) {
    return 'Hi Daniel,\n\nI would like to request: ' + item.full + '.\n\nName:\nAffiliation:\nHow I plan to use it:\n\nThanks,\n';
  }

  function openRequest(key) {
    currentRequest = REQUEST_ITEMS[key] ? key : 'thesis';
    var item = REQUEST_ITEMS[currentRequest];
    var title = $('#request-title');
    if (title) title.textContent = item.short;
    var mailto = $('#request-mailto');
    if (mailto) {
      mailto.href = 'mailto:' + EMAIL +
        '?subject=' + encodeURIComponent('Access request: ' + item.short) +
        '&body=' + encodeURIComponent(requestBody(item));
    }
    openDialog('request-dialog');
  }

  function flashLabel(btn, doneText) {
    var original = btn.textContent;
    btn.textContent = doneText;
    btn.classList.add('copied');
    setTimeout(function () { btn.textContent = original; btn.classList.remove('copied'); }, 1800);
  }

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  function copyText(text, btn) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () { flashLabel(btn, 'Copied ✓'); },
        function () { flashLabel(btn, fallbackCopy(text) ? 'Copied ✓' : 'Copy failed'); }
      );
    } else {
      flashLabel(btn, fallbackCopy(text) ? 'Copied ✓' : 'Copy failed');
    }
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-action], [data-request], [data-bibtex]');
    if (!el) return;

    var bib = el.getAttribute('data-bibtex');
    if (bib) { copyText(BIBS[bib], el); return; }

    var req = el.getAttribute('data-request');
    if (req) { openRequest(req); return; }

    switch (el.getAttribute('data-action')) {
      case 'open-menu': openMenu(); break;
      case 'close-menu': closeMenu(); break;
      case 'open-contact': openDialog('contact-dialog'); break;
      case 'open-contact-from-menu': closeMenu(); openDialog('contact-dialog'); break;
      case 'close-contact': closeDialog('contact-dialog'); break;
      case 'close-request': closeDialog('request-dialog'); break;
      case 'copy-email': copyText(EMAIL, el); break;
      case 'copy-request':
        var item = REQUEST_ITEMS[currentRequest];
        copyText('To: ' + EMAIL + '\nSubject: Access request: ' + item.short + '\n\n' + requestBody(item), el);
        break;
    }
  });
})();
