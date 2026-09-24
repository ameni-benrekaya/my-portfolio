"use client";
import { useEffect } from "react";

/**
 * All page motion in one place: heading word reveal, scroll reveals,
 * the rotating audience line, service panels, odometer numbers,
 * scroll progress and the auto-hiding nav.
 * Runs once after mount — the markup itself stays server-rendered.
 */
export default function Motion() {
  useEffect(() => {
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
        /* theme */
        var sw = document.getElementById('sw');
        sw.addEventListener('click', function(){
          var dark = document.documentElement.getAttribute('data-theme') === 'dark';
          document.documentElement.setAttribute('data-theme', dark ? 'light' : 'dark');
          sw.textContent = dark ? 'Dark' : 'Light';
        });
      
        /* headings split into words — one motion vocabulary everywhere */
        document.querySelectorAll('.t-display, .shead h2, .about h2').forEach(function(el){
          var tmp = document.createElement('div');
          tmp.innerHTML = el.innerHTML;
          (function walk(node){
            Array.prototype.slice.call(node.childNodes).forEach(function(n){
              if (n.nodeType === 3) {
                var frag = document.createDocumentFragment();
                n.textContent.split(/(\s+)/).forEach(function(w){
                  if (!w.trim()) { frag.appendChild(document.createTextNode(w)); return; }
                  var s = document.createElement('span'); s.className = 'split';
                  var i = document.createElement('i'); i.textContent = w; s.appendChild(i);
                  frag.appendChild(s);
                });
                node.replaceChild(frag, n);
              } else if (n.nodeType === 1) { walk(n); }
            });
          })(tmp);
          el.innerHTML = tmp.innerHTML;
          el.querySelectorAll('.split > i').forEach(function(i, k){ i.style.transitionDelay = (k * 36) + 'ms'; });
        });
      
        /* single reveal observer */
        var io = new IntersectionObserver(function(entries){
          entries.forEach(function(e){
            if (!e.isIntersecting) return;
            e.target.classList.add('seen');
            io.unobserve(e.target);
          });
        }, { threshold: 0.12 });
        document.querySelectorAll('.rise, .t-display, .unmask').forEach(function(el){ io.observe(el); });
        document.querySelector('.hero h1').classList.add('seen');
        document.querySelector('.avail').classList.add('seen');
      
        /* rotating audience line */
        var rot = document.getElementById('rotor');
        if (rot && !reduce) {
          var col = rot.querySelector('u'), n = col.children.length - 1, k = 0;
          setInterval(function(){
            k++;
            col.style.transition = 'transform .75s cubic-bezier(.16,.84,.3,1)';
            col.style.transform = 'translateY(-' + (k * 1.3) + 'em)';
            if (k === n) setTimeout(function(){ col.style.transition = 'none'; col.style.transform = 'none'; k = 0; }, 780);
          }, 2800);
        }
      
        /* service panels */
        var panels = [].slice.call(document.querySelectorAll('.panel'));
        function open(p){ panels.forEach(function(x){ x.classList.toggle('on', x === p); }); }
        panels.forEach(function(p){
          ['mouseenter','click','focus'].forEach(function(ev){ p.addEventListener(ev, function(){ open(p); }); });
          p.addEventListener('keydown', function(e){
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(p); }
          });
        });
      
        /* odometer numbers */
        document.querySelectorAll('.nrow').forEach(function(row){
          var box = row.querySelector('.odo');
          // Prevent double-initialisation (React strict mode runs effects twice in dev)
          if (!box || box.querySelector('.dig')) return;
          var target = row.dataset.num, suffix = row.dataset.suffix || '';
          target.split('').forEach(function(d){
            var dig = document.createElement('span'); dig.className = 'dig';
            var col = document.createElement('u');
            for (var r = 0; r < 2; r++) for (var i = 0; i <= 9; i++) {
              var b = document.createElement('b'); b.textContent = i; col.appendChild(b);
            }
            dig.appendChild(col); dig.dataset.target = d; box.appendChild(dig);
          });
          if (suffix) { var sp = document.createElement('span'); sp.className = 'suf'; sp.textContent = suffix; box.appendChild(sp); }
          var io2 = new IntersectionObserver(function(es){
            es.forEach(function(e){
              if (!e.isIntersecting) return;
              box.querySelectorAll('.dig').forEach(function(dig, k){
                var col = dig.querySelector('u');
                col.style.transitionDelay = (k * 110) + 'ms';
                col.style.transform = 'translateY(-' + (parseInt(dig.dataset.target, 10) + (reduce ? 0 : 10)) + 'em)';
              });
              io2.unobserve(e.target);
            });
          }, { threshold: 0.4 });
          io2.observe(row);
        });
      
        /* scroll progress + nav */
        var prog = document.getElementById('prog'), nav = document.querySelector('nav.top'), last = 0;
        window.addEventListener('scroll', function(){
          var h = document.documentElement.scrollHeight - window.innerHeight;
          prog.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
          if (window.scrollY > 260 && window.scrollY > last) nav.classList.add('away'); else nav.classList.remove('away');
          last = window.scrollY;
        }, { passive: true });
      
  }, []);

  return null;
}
