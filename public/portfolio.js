(function () {
      // 1. Halo lumineux accompagnant le curseur
      const spotlight = document.getElementById("ambient-spotlight");
      window.addEventListener("pointermove", (e) => {
        if (spotlight) {
          spotlight.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
        }
      });

      // 2. 3D Tilt sur le portrait du Hero
      const tiltHero = document.getElementById("portrait-tilt");
      if (tiltHero) {
        tiltHero.addEventListener("mousemove", (e) => {
          const rect = tiltHero.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const rotateX = (y / (rect.height / 2)) * -12;
          const rotateY = (x / (rect.width / 2)) * 12;
          tiltHero.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        tiltHero.addEventListener("mouseleave", () => {
          tiltHero.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
        });
      }

      // 3. RÃ©vÃ©lation au scroll (Intersection Observer)
      const reveals = document.querySelectorAll(".reveal-on-scroll");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      }, {threshold: 0.1});
      reveals.forEach((el) => observer.observe(el));

      // 4. Compteurs numÃ©riques animÃ©s (Section MÃ©triques)
      let counted = false;
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted) {
            counted = true;
            document.querySelectorAll(".counter-number").forEach((counter) => {
              const target = +counter.getAttribute("data-target");
              let current = 0;
              const step = Math.max(1, Math.ceil(target / 30));
              const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                  counter.textContent = target;
                  clearInterval(timer);
                } else {
                  counter.textContent = current;
                }
              }, 40);
            });
          }
        });
      }, {threshold: 0.3});
      const statsContainer = document.querySelector(".stats-container");
      if (statsContainer) statsObserver.observe(statsContainer);

      // 5. Rail horizontal des projets (Selected Work)
      const rail = document.getElementById("works-rail");
      const counterEl = document.getElementById("works-counter");
      const progressbar = document.getElementById("works-progressbar");
      const btnPrev = document.getElementById("slide-prev");
      const btnNext = document.getElementById("slide-next");
      const cards = document.querySelectorAll(".work-item-card");
      const totalCards = cards.length;

      let isDown = false;
      let startX;
      let scrollLeftPos;

      if (rail) {
        rail.addEventListener("mousedown", (e) => {
          if (e.target.closest(".external-btn-circle")) return;
          isDown = true;
          startX = e.pageX - rail.offsetLeft;
          scrollLeftPos = rail.scrollLeft;
        });

        window.addEventListener("mouseup", () => {isDown = false;});

        rail.addEventListener("mousemove", (e) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - rail.offsetLeft;
          const walk = (x - startX) * 1.5;
          rail.scrollLeft = scrollLeftPos - walk;
        });

        rail.addEventListener("wheel", (e) => {
          if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            rail.scrollBy({left: e.deltaY * 1.2, behavior: "auto"});
          }
        }, {passive: false});

        function handleRailScroll() {
          const scrollLeft = rail.scrollLeft;
          const scrollWidth = rail.scrollWidth - rail.clientWidth;
          const ratio = scrollWidth > 0 ? scrollLeft / scrollWidth : 0;

          let activeIdx = Math.round(ratio * (totalCards - 1));
          activeIdx = Math.max(0, Math.min(totalCards - 1, activeIdx));

          if (counterEl) counterEl.textContent = `0${activeIdx + 1} / 0${totalCards}`;
          if (progressbar) {
            const pct = ((activeIdx + 1) / totalCards) * 100;
            progressbar.style.width = `${pct}%`;
          }
        }

        rail.addEventListener("scroll", handleRailScroll, {passive: true});
        handleRailScroll();

        if (btnNext) {
          btnNext.addEventListener("click", () => {
            const step = cards[0] ? cards[0].offsetWidth + 32 : 450;
            rail.scrollBy({left: step, behavior: "smooth"});
          });
        }
        if (btnPrev) {
          btnPrev.addEventListener("click", () => {
            const step = cards[0] ? cards[0].offsetWidth + 32 : 450;
            rail.scrollBy({left: -step, behavior: "smooth"});
          });
        }
      }

      // 6. Section MarchÃ©s & Onglets dynamiques (Image Ref 4 - Three Markets)
      const marketsData = {
        rtl: {
          big: "RTL",
          region: "Saudi Arabia & Gulf",
          badge: "Right-to-left builds",
          desc: "Arabic interfaces designed and built right to left from the first wireframe, not mirrored at the end.",
          projects: [
            {
              num: "01",
              name: "Albr",
              meta: "Charity platform Â· Saudi Arabia",
              desc: "Responsive interface designed in Figma, then integrated into WordPress.",
              tags: ["Arabic RTL", "Figma", "WordPress"],
              url: "https://albr.org"
            },
            {
              num: "02",
              name: "East Khair",
              meta: "Associations platform Â· Saudi Arabia",
              desc: "Platform for the charitable associations of the Eastern Province.",
              tags: ["Arabic RTL", "Figma", "Odoo"],
              url: "https://eastkhair.org"
            },
            {
              num: "03",
              name: "Modeem",
              meta: "Non-profit portal Â· Saudi Arabia",
              desc: "Digital transformation portal for the non-profit sector.",
              tags: ["Arabic RTL", "Lovable", "Integration"],
              url: "https://modeem.org.sa"
            },
            {
              num: "04",
              name: "Haddab",
              meta: "For Modeem Â· Saudi Arabia",
              desc: "Layouts designed from wireframes, then coded responsive.",
              tags: ["Arabic RTL", "Design system", "HTML/CSS"],
              url: null
            }
          ]
        },
        fr: {
          big: "FR",
          region: "France",
          badge: "WordPress & Next.js",
          desc: "Tourism, retail, recruitment and hospitality: sites built to be edited by the teams who own them.",
          projects: [
            {
              num: "01",
              name: "Charentes Tourisme",
              meta: "Tourism network Â· 60+ sites",
              desc: "Over 60 sites built with Gutenberg for the tourism agency of both Charente dÃ©partements.",
              tags: ["WordPress", "PHP", "Maintenance"],
              url: "https://charentestourisme.com"
            },
            {
              num: "02",
              name: "Eclair",
              meta: "Recruitment agency",
              desc: "Corporate site for an executive recruitment agency.",
              tags: ["Figma", "WordPress"],
              url: "https://eclair-recrutement.com"
            },
            {
              num: "03",
              name: "Audition Conseil",
              meta: "Hearing-care network",
              desc: "Service pages and store locator for a hearing-care network.",
              tags: ["WordPress", "UI design"],
              url: "https://auditionconseil.fr"
            },
            {
              num: "04",
              name: "My Beers",
              meta: "Beer bar franchise",
              desc: "Site for a craft beer bar, shop and events space.",
              tags: ["WordPress", "UI design"],
              url: "https://mybeers.fr"
            },
            {
              num: "05",
              name: "Dimaco",
              meta: "High-pressure cleaning store",
              desc: "Catalogue and guided product finder for industrial equipment.",
              tags: ["Next.js", "React"],
              url: null
            },
            {
              num: "06",
              name: "Hydroclean",
              meta: "Industrial equipment store",
              desc: "Large catalogue with filtering and a step-by-step finder.",
              tags: ["Next.js", "React"],
              url: null
            }
          ]
        },
        intl: {
          big: "EU Â· MENA",
          region: "Europe, Africa & the Gulf",
          badge: "Institutions & SaaS",
          desc: "Medical societies, UN programmes, healthcare and SaaS products, often in more than one language.",
          projects: [
            {
              num: "01",
              name: "ESVS",
              meta: "Medical society Â· via Kwantic",
              desc: "Membership site for a European medical society: events, e-learning, library and shop.",
              tags: ["WordPress", "Elementor", "WooCommerce"],
              url: "https://esvs.org"
            },
            {
              num: "02",
              name: "Employment4Youth",
              meta: "UNIDO Â· Tunisia",
              desc: "Project website designed and built end to end for a UN programme.",
              tags: ["Design", "WordPress", "Responsive"],
              url: null
            },
            {
              num: "03",
              name: "SmartHealth",
              meta: "Healthcare platform Â· Saudi Arabia",
              desc: "Page design in Figma, then full WordPress integration.",
              tags: ["Figma", "WordPress"],
              url: "https://smarthealth-sa.com"
            },
            {
              num: "04",
              name: "Tawazon",
              meta: "Work-life balance platform Â· Saudi Arabia",
              desc: "Designed in Figma, coded as a responsive front-end.",
              tags: ["Figma", "HTML/CSS"],
              url: null
            },
            {
              num: "05",
              name: "AISMA",
              meta: "Alliance for Industry 4.0 in Africa",
              desc: "Conference site on smart manufacturing in Africa.",
              tags: ["Design", "WordPress"],
              url: null
            },
            {
              num: "06",
              name: "2WayAnalytics",
              meta: "AI social analytics SaaS",
              desc: "Marketing site for an AI social-media analytics product, hand-coded across multiple pages.",
              tags: ["HTML/CSS", "JavaScript", "Responsive"],
              url: "https://2wayanalytics.com"
            }
          ]
        }
      };

      const bigTitle = document.getElementById("market-big-title");
      const regionLabel = document.getElementById("market-region-label");
      const badgeLabel = document.getElementById("market-badge-label");
      const descLabel = document.getElementById("market-desc-label");
      const listContainer = document.getElementById("market-projects-list");
      const tabButtons = document.querySelectorAll(".market-tab-btn");

      function renderMarket(key) {
        const d = marketsData[key];
        if (!d) return;

        bigTitle.textContent = d.big;
        regionLabel.textContent = d.region;
        badgeLabel.textContent = d.badge;
        descLabel.textContent = d.desc;

        listContainer.innerHTML = "";
        d.projects.forEach(p => {
          const item = document.createElement("div");
          item.style.cssText = "display: flex; gap: 20px; align-items: flex-start; padding-bottom: 22px; border-bottom: 1px solid #ECEAE4;";

          const numSpan = `<span class="font-mono" style="font-size: 13px; font-weight: 700; color: #1e1c27; width: 28px; flex-shrink: 0; padding-top: 2px;">${p.num}</span>`;

          let tagsHtml = p.tags.map(t => `<span class="tag-pill" style="font-size: 11.5px; padding: 4px 10px;">${t}</span>`).join(" ");
          let linkHtml = p.url
            ? `<a href="${p.url}" target="_blank" rel="noopener" style="font-size: 13.5px; font-weight: 600; text-decoration: none; color: #14121E;">View website â†—</a>`
            : `<span style="font-size: 13px; color: var(--text-light);">Case study on request</span>`;

          item.innerHTML = `
            ${numSpan}
            <div style="flex: 1 1 auto;">
              <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 8px; margin-bottom: 4px;">
                <h4 style="font-size: 18px; font-weight: 700; color: var(--text-main);">${p.name}</h4>
                <span style="font-size: 12.5px; color: var(--text-light);">${p.meta}</span>
              </div>
              <p style="font-size: 14.5px; line-height: 1.55; color: var(--text-muted); margin-bottom: 12px;">${p.desc}</p>
              <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 10px;">
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">${tagsHtml}</div>
                ${linkHtml}
              </div>
            </div>
          `;
          listContainer.appendChild(item);
        });
      }

      tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          tabButtons.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          const mKey = btn.getAttribute("data-market");
          renderMarket(mKey);
        });
      });

      // Rendu initial (International / intl)
      renderMarket("intl");

      // 7. SÃ©lecteur de palettes interactif (Lilas, PÃªche, Ã‰meraude)
      const themeButtons = document.querySelectorAll(".theme-dot");
      themeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          themeButtons.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          const theme = btn.getAttribute("data-theme-btn");
          document.documentElement.setAttribute("data-theme", theme);
        });
      });
})();
