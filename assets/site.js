(function bwRuntime(d){
  d.addEventListener('click',function(e){
    var el=e.target&&e.target.closest?e.target:null;if(!el)return;
    var t=el.closest('[data-tab]');
    if(t){var w=t.closest('.bw-tabs'),k=t.getAttribute('data-tab');
      w.querySelectorAll('[data-tab]').forEach(function(b){b.classList.toggle('on',b===t);b.setAttribute('aria-selected',b===t)});
      w.querySelectorAll('.bw-tabpanel').forEach(function(p){p.hidden=p.getAttribute('data-panel')!==k});return}
    var c=el.closest('[data-car]');
    if(c){var tr=c.closest('.bw-carousel').querySelector('.bw-track');tr.scrollBy({left:(c.getAttribute('data-car')==='next'?1:-1)*tr.clientWidth,behavior:'smooth'});return}
    var n=el.closest('.bw-navtoggle');if(n){n.closest('.bw-navbar').classList.toggle('open');return}
    var a=el.closest('a');if(!a)return;var h=a.getAttribute('href')||'';
    if(a.classList.contains('bw-modal-close')||a.classList.contains('bw-modal-bg')){e.preventDefault();a.closest('.bw-pop').classList.remove('bw-open');
      try{var W=d.defaultView;if(W&&W.location.hash)W.history.replaceState(null,'',W.location.pathname+W.location.search)}catch(x){}return}
    if(h.charAt(0)==='#'&&h.length>1){var m=d.getElementById(h.slice(1));if(m&&m.classList.contains('bw-pop')){e.preventDefault();m.classList.add('bw-open')}}
  });
  d.addEventListener('input',function(e){var r=e.target.closest&&e.target.closest('.bw-rangerow');if(r){var o=r.querySelector('output');if(o)o.textContent=e.target.value+(o.getAttribute('data-unit')||'')}});
  d.addEventListener('keydown',function(e){if(e.key==='Escape'){var m=d.querySelector('.bw-pop.bw-open');if(m)m.classList.remove('bw-open')}});
})(document);
