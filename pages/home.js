/**
 * BROKR — Home / Landing page
 */

function renderHome() {
  document.getElementById('app').innerHTML = `

    <!-- ── Navbar ──────────────────────────────────────────────────────── -->
    <nav class="home-navbar at-top" id="homeNavbar">
      <a href="/" class="navbar-logo">
        <img src="/assets/img/logo-blanco-colores.png" alt="BROKR" id="navbarLogo" />
      </a>

      <ul class="navbar-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/nosotros">Nosotros</a></li>
        <li><a href="/beneficios">Beneficios</a></li>
        <li><a href="/contactanos">Contáctanos</a></li>
        <li><a href="#">Comparador de planes</a></li>
      </ul>

      <div class="navbar-actions">
        <a href="#" class="navbar-area">Ingresar</a>
      </div>
    </nav>

    <!-- ── Hero ────────────────────────────────────────────────────────── -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-ring hero-ring--1"></div>
      <div class="hero-ring hero-ring--2"></div>
      <div class="hero-ring hero-ring--3"></div>

      <div class="hero-content">
        <img src="/assets/img/logo-blanco-colores.png" alt="BROKR" class="hero-logo" />

        <h1 class="hero-title">
          La plataforma que <em>centraliza</em><br/>
          la gestión de redes médicas y salud
        </h1>

        <p class="hero-subtitle">
          BROKR conecta asegurados, clínicas y aseguradoras en un ecosistema
          Insurtech inteligente. Consulta coberturas, copagos y redes médicas
          de Rímac, Pacífico y Mapfre en un solo lugar.
        </p>

        <div class="hero-actions">
          <a href="#contacto" class="btn btn--primary btn--lg">
            Empieza ahora <span class="btn-arrow">→</span>
          </a>
          <a href="#funcionalidades" class="btn btn--outline-white">
            Ver funcionalidades
          </a>
        </div>
      </div>

      <div class="hero-scroll">
        <div class="hero-scroll-line"></div>
        Scroll
      </div>
    </section>

    <!-- ── Intro ────────────────────────────────────────────────────────── -->
    <section class="intro" id="soluciones">
      <div class="intro__heading">
        <h2>La solución integral para la gestión de servicios de salud de tu organización.</h2>
      </div>

      <div class="intro__body">
        <p>
          Gana independencia y autonomía frente a la complejidad de los
          sistemas tradicionales del sector asegurador peruano. Centraliza
          toda la información de tu red médica en un solo lugar.
        </p>
        <p>
          <strong>BROKR</strong> es el ecosistema Insurtech especialmente diseñado
          para centralizar convenios entre clínicas y aseguradoras, incorporando
          todas las herramientas necesarias para la gestión integrada de redes
          médicas, copagos y planes de salud en el Perú.
        </p>
        <ul>
          <li>Consulta de redes médicas por aseguradora (Rímac, Pacífico, Mapfre).</li>
          <li>Gestión de copagos, coberturas y beneficios EPS.</li>
          <li>Herramientas para corredores de seguros, RR.HH. y asegurados particulares.</li>
        </ul>
        <div class="intro__cta">
          <a href="#contacto" class="btn btn--primary">
            Me interesa <span class="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ── Features ─────────────────────────────────────────────────────── -->
    <div id="funcionalidades">

      <!-- Feature 1: Buscador de Redes Médicas — visual izquierda -->
      <section class="feature-split">
        <div class="feature-split__visual feature-split__visual--dark">
          <div class="mockup">
            <div class="mockup-titlebar">
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <span class="mockup-title">Buscador de Redes Médicas</span>
            </div>
            <div class="mock-poliza">
              <div class="mock-card">
                <div class="mock-card-icon mock-card-icon--blue"></div>
                <div class="mock-card-lines">
                  <div class="mock-line mock-line--w85"></div>
                  <div class="mock-line mock-line--w50"></div>
                </div>
                <span class="mock-badge mock-badge--green">Rímac</span>
              </div>
              <div class="mock-card">
                <div class="mock-card-icon mock-card-icon--teal"></div>
                <div class="mock-card-lines">
                  <div class="mock-line mock-line--w70"></div>
                  <div class="mock-line mock-line--w40"></div>
                </div>
                <span class="mock-badge mock-badge--yellow">Pacífico</span>
              </div>
              <div class="mock-card">
                <div class="mock-card-icon mock-card-icon--light"></div>
                <div class="mock-card-lines">
                  <div class="mock-line mock-line--w100"></div>
                  <div class="mock-line mock-line--w60"></div>
                </div>
                <span class="mock-badge mock-badge--blue">Mapfre</span>
              </div>
              <div style="display:flex;gap:0.5rem;margin-top:0.25rem;">
                <div style="flex:1;height:4px;border-radius:2px;background:rgba(3,204,158,0.5)"></div>
                <div style="width:30%;height:4px;border-radius:2px;background:rgba(255,255,255,0.1)"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="feature-split__content">
          <span class="feature-label">Búsqueda de clínicas</span>
          <h3 class="feature-title">Encuentra la clínica correcta según tu aseguradora</h3>
          <p class="feature-body">
            Accede al directorio actualizado de clínicas y centros médicos
            afiliados a las principales aseguradoras del Perú. Filtra por
            especialidad, distrito, aseguradora y tipo de atención.
          </p>
          <ul class="feature-list">
            <li>Clínicas afiliadas a Rímac, Pacífico y Mapfre</li>
            <li>Filtros por distrito, especialidad y modalidad</li>
            <li>Información de horarios y contacto</li>
            <li>Validación en tiempo real de cobertura</li>
            <li>Mapa interactivo de centros médicos</li>
            <li>Actualización continua del directorio</li>
          </ul>
          <a href="#contacto" class="feature-link">Ver más detalles →</a>
        </div>
      </section>

      <!-- Feature 2: Gestión de Copagos — visual derecha -->
      <section class="feature-split feature-split--reverse">
        <div class="feature-split__visual feature-split__visual--blue">
          <div class="mockup">
            <div class="mockup-titlebar">
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <span class="mockup-title">Gestión de Copagos</span>
            </div>
            <div class="mock-flow">
              <div class="mock-flow-row">
                <div class="mock-flow-node">
                  <div class="mock-flow-node-dot mock-flow-node-dot--white"></div>
                  <div class="mock-line mock-line--w70" style="background:rgba(255,255,255,0.2);height:6px;border-radius:3px;flex:1"></div>
                </div>
                <span class="mock-flow-arrow">→</span>
                <div class="mock-flow-node">
                  <div class="mock-flow-node-dot mock-flow-node-dot--teal"></div>
                  <div class="mock-line mock-line--w70" style="background:rgba(255,255,255,0.2);height:6px;border-radius:3px;flex:1"></div>
                </div>
              </div>
              <div class="mock-flow-row">
                <div class="mock-flow-node" style="flex:none;width:28px;justify-content:center;">
                  <div class="mock-flow-check">✓</div>
                </div>
                <div style="flex:1;height:1px;background:rgba(255,255,255,0.15);margin:0 0.3rem;align-self:center;"></div>
                <div class="mock-flow-node">
                  <div class="mock-flow-node-dot mock-flow-node-dot--blue"></div>
                  <div class="mock-line mock-line--w70" style="background:rgba(255,255,255,0.2);height:6px;border-radius:3px;flex:1"></div>
                </div>
                <span class="mock-flow-arrow">→</span>
                <div class="mock-flow-node">
                  <div class="mock-flow-node-dot mock-flow-node-dot--white"></div>
                  <div class="mock-line mock-line--w70" style="background:rgba(255,255,255,0.2);height:6px;border-radius:3px;flex:1"></div>
                </div>
              </div>
              <div class="mock-flow-row">
                <div class="mock-flow-node">
                  <div class="mock-flow-node-dot mock-flow-node-dot--teal"></div>
                  <div class="mock-line mock-line--w70" style="background:rgba(255,255,255,0.2);height:6px;border-radius:3px;flex:1"></div>
                </div>
                <span class="mock-flow-arrow">→</span>
                <div class="mock-flow-node" style="border:1px solid rgba(3,204,158,0.5);">
                  <div class="mock-flow-check">✓</div>
                  <div class="mock-line mock-line--w70" style="background:rgba(3,204,158,0.3);height:6px;border-radius:3px;flex:1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="feature-split__content">
          <span class="feature-label">Copagos y coberturas</span>
          <h3 class="feature-title">Consulta tus copagos antes de ir a la clínica</h3>
          <p class="feature-body">
            Conoce de antemano el monto de copago para cada procedimiento,
            clínica y aseguradora. Evita sorpresas al momento de la atención
            y planifica mejor el uso de tu seguro de salud.
          </p>
          <ul class="feature-list">
            <li>Tabla de copagos por aseguradora y plan</li>
            <li>Consulta por procedimiento o especialidad</li>
            <li>Alertas de cobertura y exclusiones</li>
            <li>Comparativo de costos entre clínicas</li>
            <li>Historial de atenciones y gastos</li>
            <li>Reportes exportables para RR.HH.</li>
          </ul>
          <a href="#contacto" class="feature-link">Ver más detalles →</a>
        </div>
      </section>

      <!-- Feature 3: Dashboard BI — visual izquierda -->
      <section class="feature-split">
        <div class="feature-split__visual feature-split__visual--dark">
          <div class="mockup">
            <div class="mockup-titlebar">
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <span class="mockup-title">Dashboard</span>
            </div>
            <div class="mock-dashboard">
              <div class="mock-stats-row">
                <div class="mock-stat">
                  <div class="mock-stat-value">4.2K</div>
                  <div class="mock-stat-label"></div>
                </div>
                <div class="mock-stat">
                  <div class="mock-stat-value" style="color:var(--color-celeste)">98%</div>
                  <div class="mock-stat-label"></div>
                </div>
                <div class="mock-stat">
                  <div class="mock-stat-value">147</div>
                  <div class="mock-stat-label"></div>
                </div>
              </div>
              <div class="mock-chart">
                <div class="mock-bar mock-bar--faded" style="height:45%"></div>
                <div class="mock-bar mock-bar--blue"  style="height:60%"></div>
                <div class="mock-bar mock-bar--teal"  style="height:75%"></div>
                <div class="mock-bar mock-bar--blue"  style="height:55%"></div>
                <div class="mock-bar mock-bar--faded" style="height:40%"></div>
                <div class="mock-bar mock-bar--teal"  style="height:90%"></div>
                <div class="mock-bar mock-bar--blue"  style="height:70%"></div>
                <div class="mock-bar mock-bar--faded" style="height:50%"></div>
              </div>
              <div style="display:flex;gap:0.5rem;">
                <div style="flex:2;height:6px;border-radius:3px;background:rgba(33,56,239,0.5)"></div>
                <div style="flex:1;height:6px;border-radius:3px;background:rgba(3,204,158,0.5)"></div>
                <div style="flex:1;height:6px;border-radius:3px;background:rgba(255,255,255,0.1)"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="feature-split__content">
          <span class="feature-label">Reportes y análisis</span>
          <h3 class="feature-title">Obtén una visión completa del uso de tu red médica</h3>
          <p class="feature-body">
            Los dashboards de BROKR te permiten analizar el uso de los
            servicios de salud, la distribución de atenciones por aseguradora
            y el comportamiento de siniestros para una gestión más eficiente.
          </p>
          <ul class="feature-list">
            <li>Distribución de atenciones por aseguradora</li>
            <li>Siniestralidad y frecuencia de uso</li>
            <li>Clínicas más utilizadas por empleados</li>
            <li>Análisis de costos y copagos</li>
            <li>Indicadores de satisfacción y calidad</li>
            <li>Evolución mensual de prestaciones</li>
            <li>Comparativo de planes EPS</li>
            <li>Alertas de consumo por departamento</li>
          </ul>
          <a href="#contacto" class="feature-link">Ver más detalles →</a>
        </div>
      </section>

      <!-- Feature 4: Portal para Corredores — visual derecha -->
      <section class="feature-split feature-split--reverse">
        <div class="feature-split__visual feature-split__visual--teal">
          <div class="mockup mockup--light">
            <div class="mockup-titlebar">
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <span class="mockup-title" style="color:#8a93b2">Portal para Corredores</span>
            </div>
            <div class="mock-client">
              <div class="mock-client-header">
                <div class="mock-avatar"></div>
                <div class="mock-client-info">
                  <div class="mock-line mock-line--w85" style="background:rgba(0,0,0,0.15);height:8px;border-radius:4px"></div>
                  <div class="mock-line mock-line--w50" style="background:rgba(0,0,0,0.08);height:6px;border-radius:3px"></div>
                </div>
                <span class="mock-badge mock-badge--green">Activo</span>
              </div>
              <div class="mock-field-row">
                <div class="mock-field">
                  <div class="mock-field-label"></div>
                  <div class="mock-field-value"></div>
                </div>
                <div class="mock-field">
                  <div class="mock-field-label"></div>
                  <div class="mock-field-value"></div>
                </div>
                <div class="mock-field">
                  <div class="mock-field-label"></div>
                  <div class="mock-field-value"></div>
                </div>
                <div class="mock-field">
                  <div class="mock-field-label"></div>
                  <div class="mock-field-value"></div>
                </div>
              </div>
              <div style="background:#f4f6fd;border-radius:6px;padding:0.5rem;display:flex;gap:0.5rem;align-items:center;">
                <div style="width:8px;height:8px;border-radius:50%;background:var(--color-azul);flex-shrink:0;"></div>
                <div style="flex:1;height:6px;border-radius:3px;background:rgba(33,56,239,0.15)"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="feature-split__content">
          <span class="feature-label">Portal para corredores</span>
          <h3 class="feature-title">Gestiona tu cartera con herramientas especializadas en salud</h3>
          <p class="feature-body">
            BROKR incluye un <strong>portal especializado para corredores de seguros</strong>,
            diseñado para potenciar la gestión de clientes, consulta de redes
            médicas y seguimiento de beneficios de cada plan contratado.
          </p>
          <ul class="feature-list feature-list--single">
            <li>Ficha completa del asegurado: plan, coberturas y clínicas disponibles.</li>
            <li>Seguimiento de renovaciones y vencimientos de pólizas de salud.</li>
            <li>Acceso a tarifarios y comparativos de planes EPS.</li>
            <li>Gestión de solicitudes y consultas de clientes en tiempo real.</li>
          </ul>
          <a href="#contacto" class="feature-link">Ver más detalles →</a>
        </div>
      </section>

      <!-- Feature 5: Beneficios EPS — visual izquierda -->
      <section class="feature-split" id="integraciones">
        <div class="feature-split__visual feature-split__visual--dark">
          <div class="mockup">
            <div class="mockup-titlebar">
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <span class="mockup-title">Beneficios EPS</span>
            </div>
            <div class="mock-api">
              <div class="mock-api-row">
                <div class="mock-api-node">
                  <div class="mock-api-dot" style="background:rgba(255,255,255,0.4)"></div>
                  <div style="height:5px;border-radius:3px;background:rgba(255,255,255,0.12);width:80%"></div>
                </div>
                <div class="mock-api-node">
                  <div class="mock-api-dot" style="background:rgba(255,255,255,0.4)"></div>
                  <div style="height:5px;border-radius:3px;background:rgba(255,255,255,0.12);width:80%"></div>
                </div>
              </div>
              <div style="display:flex;gap:2.5rem;align-items:flex-end;">
                <div class="mock-api-connector"></div>
                <div class="mock-api-connector"></div>
              </div>
              <div class="mock-api-hub">
                <div class="mock-api-hub-inner"></div>
              </div>
              <div style="display:flex;gap:2.5rem;align-items:flex-start;">
                <div class="mock-api-connector"></div>
                <div class="mock-api-connector"></div>
                <div class="mock-api-connector"></div>
              </div>
              <div class="mock-api-row">
                <div class="mock-api-node">
                  <div class="mock-api-dot"></div>
                  <div style="height:5px;border-radius:3px;background:rgba(255,255,255,0.12);width:80%"></div>
                </div>
                <div class="mock-api-node" style="border-color:rgba(3,204,158,0.4)">
                  <div class="mock-api-dot" style="background:var(--color-celeste)"></div>
                  <div style="height:5px;border-radius:3px;background:rgba(3,204,158,0.2);width:80%"></div>
                </div>
                <div class="mock-api-node">
                  <div class="mock-api-dot"></div>
                  <div style="height:5px;border-radius:3px;background:rgba(255,255,255,0.12);width:80%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="feature-split__content">
          <span class="feature-label">Beneficios EPS</span>
          <h3 class="feature-title">Centraliza y comunica los beneficios de cada plan de salud</h3>
          <p class="feature-body">
            BROKR centraliza los convenios y beneficios especiales de cada EPS,
            facilitando la consulta de descuentos, coberturas adicionales y
            condiciones preferenciales para asegurados y departamentos de RR.HH.
          </p>
          <ul class="feature-list feature-list--single">
            <li><strong>Convenios y descuentos</strong> por aseguradora y plan contratado, siempre actualizados.</li>
            <li><strong>Beneficios adicionales</strong> por EPS: óptica, dental, maternidad y medicina preventiva.</li>
            <li><strong>Portal de autogestión</strong> para que cada empleado consulte sus beneficios directamente.</li>
            <li><strong>Integración con sistemas de RR.HH.</strong> para sincronizar altas, bajas y modificaciones de afiliados.</li>
          </ul>
          <a href="#contacto" class="feature-link">Ver más detalles →</a>
        </div>
      </section>

    </div>

    <!-- ── CTA intermedio ────────────────────────────────────────────────── -->
    <div class="section-divider-cta">
      <a href="#contacto" class="btn btn--celeste">
        ¡Lo quiero! <span class="btn-arrow">→</span>
      </a>
    </div>

    <!-- ── Ventajas ──────────────────────────────────────────────────────── -->
    <section class="benefits" id="ventajas">
      <div class="benefits__header">
        <span class="benefits__label">Por qué BROKR</span>
        <h2 class="benefits__title">Ventajas para asegurados, RR.HH. y corredores</h2>
        <p class="benefits__subtitle">
          Diseñado para el mercado peruano de salud, BROKR simplifica el acceso
          a redes médicas, copagos y beneficios EPS en una sola plataforma.
        </p>
      </div>

      <div class="benefits__grid">

        <div class="benefit-card">
          <div class="benefit-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-celeste)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <div class="benefit-text">
            <h4 class="benefit-title">Velocidad</h4>
            <p class="benefit-desc">Accede en segundos a la clínica correcta, el copago exacto y la cobertura disponible. Sin llamadas, sin esperas y sin sorpresas en el momento de la atención médica.</p>
          </div>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-celeste)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
            </svg>
          </div>
          <div class="benefit-text">
            <h4 class="benefit-title">Conectividad</h4>
            <p class="benefit-desc">Conecta asegurados, clínicas, aseguradoras y corredores en un ecosistema unificado. Rímac, Pacífico y Mapfre integrados en tiempo real para información siempre actualizada.</p>
          </div>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-celeste)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <path d="M8 21h8M12 17v4"/>
              <path d="M6 8h4M6 12h8"/>
            </svg>
          </div>
          <div class="benefit-text">
            <h4 class="benefit-title">Adaptable</h4>
            <p class="benefit-desc">Solución personalizable para asegurados particulares, departamentos de RR.HH. y corredores de seguros. Escala según las necesidades de tu organización en el Perú.</p>
          </div>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-celeste)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div class="benefit-text">
            <h4 class="benefit-title">Seguridad</h4>
            <p class="benefit-desc">Información protegida con estándares de seguridad bancaria. Cumplimiento con la normativa peruana de protección de datos personales (Ley N.° 29733) en cada operación.</p>
          </div>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-celeste)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div class="benefit-text">
            <h4 class="benefit-title">Soporte</h4>
            <p class="benefit-desc">Equipo especializado en seguros de salud peruanos disponible para acompañarte. Soporte local, conocimiento del mercado EPS y atención personalizada en cada etapa.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- ── Contacto ──────────────────────────────────────────────────────── -->
    <section class="contact-cta" id="contacto">
      <div class="contact-cta__box">
        <div class="contact-cta__left">
          <span class="contact-cta__label">Contacto</span>
          <h2 class="contact-cta__title">¿Tienes dudas?<br/>Te ayudamos a resolverlas.</h2>
          <a href="mailto:hola@brokr.app" class="btn btn--primary" style="margin-top:0.5rem">
            Solicitar demo <span class="btn-arrow">→</span>
          </a>
        </div>

        <div class="contact-cta__right">
          <div class="contact-info-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <a href="mailto:hola@brokr.app">hola@brokr.app</a>
          </div>
          <div class="contact-info-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.6 12.19 19.79 19.79 0 0 1 1.56 3.63 2 2 0 0 1 3.53 1.45h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.06a16 16 0 0 0 6.07 6.07l1.58-1.58a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>+51 1 000 0000</span>
          </div>
          <div class="contact-info-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>Disponible de lunes a viernes, 9:00 – 18:00 h</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Footer ────────────────────────────────────────────────────────── -->
    <footer class="home-footer">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="/" class="footer-logo">
            <img src="/assets/img/logo-blanco-colores.png" alt="BROKR" />
          </a>
          <p class="footer-tagline">
            El ecosistema Insurtech que simplifica la gestión de redes médicas,
            copagos y beneficios EPS en el Perú.
          </p>
          <div class="footer-social">
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-nav">
          <div class="footer-nav-col">
            <h4>Plataforma</h4>
            <ul>
              <li><a href="#">Buscador de Redes Médicas</a></li>
              <li><a href="#">Gestión de Copagos</a></li>
              <li><a href="#">Portal para Corredores</a></li>
              <li><a href="#">Beneficios EPS</a></li>
              <li><a href="#">Integraciones</a></li>
            </ul>
          </div>
          <div class="footer-nav-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="/nosotros">Sobre BROKR</a></li>
              <li><a href="/beneficios">Beneficios</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="/contactanos">Contacto</a></li>
            </ul>
          </div>
          <div class="footer-nav-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Términos de uso</a></li>
              <li><a href="#">Política de cookies</a></li>
              <li><a href="#">Aviso legal</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 BROKR. Todos los derechos reservados.</span>
        <div class="footer-bottom-links">
          <a href="#">Privacidad</a>
          <a href="#">Cookies</a>
          <a href="#">Aviso legal</a>
        </div>
      </div>
    </footer>

  `;

  initHomeNavbar();
}

function initHomeNavbar() {
  const navbar  = document.getElementById('homeNavbar');
  const logo    = document.getElementById('navbarLogo');
  if (!navbar || !logo) return;

  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.remove('at-top');
      navbar.classList.add('scrolled');
      logo.src = '/assets/img/logo-oscuro-colores.png';
    } else {
      navbar.classList.add('at-top');
      navbar.classList.remove('scrolled');
      logo.src = '/assets/img/logo-blanco-colores.png';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Smooth scroll para anchors internos
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const offset = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}
