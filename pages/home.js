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
        <li><a href="#funcionalidades">Funcionalidades</a></li>
        <li><a href="#soluciones">Soluciones</a></li>
        <li><a href="#integraciones">Integraciones</a></li>
        <li><a href="#ventajas">Ventajas</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>

      <div class="navbar-actions">
        <a href="#" class="navbar-area">Área de clientes</a>
        <a href="#contacto" class="btn btn--primary">
          Solicitar demo <span class="btn-arrow">→</span>
        </a>
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
          La plataforma que <em>automatiza</em><br/>
          y simplifica la gestión de pólizas
        </h1>

        <p class="hero-subtitle">
          BROKR conecta clientes, pólizas y servicios en un ecosistema
          inteligente. Digitaliza y optimiza cada proceso de tu correduría
          de forma rápida, eficiente y sin fricciones.
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
        <h2>La solución para la gestión del negocio asegurador de tu organización.</h2>
      </div>

      <div class="intro__body">
        <p>
          Gana independencia, autonomía y define reglas de gestión propias
          frente a la verticalidad y poca flexibilidad de los procesos
          tradicionales del sector asegurador.
        </p>
        <p>
          <strong>BROKR</strong> es el sistema de gestión especialmente diseñado
          para corredurías y brokers de seguros, que incorpora todas las
          herramientas necesarias para la gestión integrada del negocio
          asegurador y la digitalización de los procesos vinculados.
        </p>
        <ul>
          <li>Soporte al área comercial para la venta y renovación de pólizas.</li>
          <li>Integración con compañías aseguradoras y sistemas corporativos.</li>
          <li>Herramientas de CRM, automatización y análisis de negocio.</li>
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

      <!-- Feature 1: Gestión de pólizas — visual izquierda -->
      <section class="feature-split">
        <div class="feature-split__visual feature-split__visual--dark">
          <div class="mockup">
            <div class="mockup-titlebar">
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <span class="mockup-title">Gestión de pólizas</span>
            </div>
            <div class="mock-poliza">
              <div class="mock-card">
                <div class="mock-card-icon mock-card-icon--blue"></div>
                <div class="mock-card-lines">
                  <div class="mock-line mock-line--w85"></div>
                  <div class="mock-line mock-line--w50"></div>
                </div>
                <span class="mock-badge mock-badge--green">Vigente</span>
              </div>
              <div class="mock-card">
                <div class="mock-card-icon mock-card-icon--teal"></div>
                <div class="mock-card-lines">
                  <div class="mock-line mock-line--w70"></div>
                  <div class="mock-line mock-line--w40"></div>
                </div>
                <span class="mock-badge mock-badge--yellow">Renovar</span>
              </div>
              <div class="mock-card">
                <div class="mock-card-icon mock-card-icon--light"></div>
                <div class="mock-card-lines">
                  <div class="mock-line mock-line--w100"></div>
                  <div class="mock-line mock-line--w60"></div>
                </div>
                <span class="mock-badge mock-badge--blue">Pendiente</span>
              </div>
              <div style="display:flex;gap:0.5rem;margin-top:0.25rem;">
                <div style="flex:1;height:4px;border-radius:2px;background:rgba(3,204,158,0.5)"></div>
                <div style="width:30%;height:4px;border-radius:2px;background:rgba(255,255,255,0.1)"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="feature-split__content">
          <span class="feature-label">Gestión integral</span>
          <h3 class="feature-title">Centraliza y controla toda tu cartera de pólizas</h3>
          <p class="feature-body">
            Accede a la información filtrada por perfil de usuario, cliente,
            vendedor, equipo de ventas, oficina y sucursal. Mantén un seguimiento
            completo del ciclo de vida de cada póliza.
          </p>
          <ul class="feature-list">
            <li>Gestión de perfiles por rol y acceso</li>
            <li>Control de vencimientos y renovaciones</li>
            <li>Seguimiento del proceso de suscripción</li>
            <li>Estado y cobros de recibos</li>
            <li>Previsiones mensuales de cartera</li>
            <li>Configuración de ramos y productos</li>
          </ul>
          <a href="#contacto" class="feature-link">Ver más detalles →</a>
        </div>
      </section>

      <!-- Feature 2: Automatización BPM — visual derecha -->
      <section class="feature-split feature-split--reverse">
        <div class="feature-split__visual feature-split__visual--blue">
          <div class="mockup">
            <div class="mockup-titlebar">
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <span class="mockup-title">Automatización de procesos</span>
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
          <span class="feature-label">Automatización BPM</span>
          <h3 class="feature-title">Automatiza y agiliza tu flujo de trabajo</h3>
          <p class="feature-body">
            Automatización, multitarea, asistentes y ejecución desasistida de
            procesos complejos. Todo lo necesario para conseguir alta
            productividad en la gestión del negocio asegurador.
          </p>
          <ul class="feature-list">
            <li>Flujos de trabajo automatizados</li>
            <li>Definición de tareas distribuibles</li>
            <li>Descargas automáticas con compañías</li>
            <li>Comunicaciones automáticas (email, SMS)</li>
            <li>Alertas y notificaciones inteligentes</li>
            <li>Procesos configura­bles por la correduría</li>
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
          <span class="feature-label">Inteligencia de negocio</span>
          <h3 class="feature-title">Obtén una visión global del estado y evolución de tu negocio</h3>
          <p class="feature-body">
            Los cuadros de mando de BROKR te permiten obtener una visión
            integral sobre la evolución de tu negocio para tomar decisiones
            ejecutivas más acertadas. Analiza tu cartera, el rendimiento de
            tus productos y el grado de retención de tus clientes.
          </p>
          <ul class="feature-list">
            <li>Distribución de la cartera</li>
            <li>Producción de pólizas</li>
            <li>Eficiencia comercial</li>
            <li>Anulación y renovación</li>
            <li>Siniestralidad</li>
            <li>Comisiones devengadas</li>
            <li>Fidelidad de clientes</li>
            <li>Evolución financiera</li>
          </ul>
          <a href="#contacto" class="feature-link">Ver más detalles →</a>
        </div>
      </section>

      <!-- Feature 4: CRM — visual derecha -->
      <section class="feature-split feature-split--reverse">
        <div class="feature-split__visual feature-split__visual--teal">
          <div class="mockup mockup--light">
            <div class="mockup-titlebar">
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <span class="mockup-title" style="color:#8a93b2">CRM — Cliente</span>
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
          <span class="feature-label">CRM integrado</span>
          <h3 class="feature-title">Vende más y mejor con un CRM diseñado para seguros</h3>
          <p class="feature-body">
            BROKR incluye un <strong>CRM específico para la gestión de seguros</strong>,
            diseñado para potenciar el conocimiento del cliente y el desempeño
            de las actividades comerciales. Invierte más tiempo en lo que
            realmente importa: tus clientes.
          </p>
          <ul class="feature-list feature-list--single">
            <li>Ficha 360° del cliente: pólizas, recibos, reclamaciones y tareas.</li>
            <li>Segmentación avanzada para venta cruzada y campañas de marketing.</li>
            <li>Control de interacciones: reuniones, llamadas, correos y SMS.</li>
            <li>Gestión y seguimiento de oportunidades de venta generadas.</li>
          </ul>
          <a href="#contacto" class="feature-link">Ver más detalles →</a>
        </div>
      </section>

      <!-- Feature 5: Integraciones API — visual izquierda -->
      <section class="feature-split" id="integraciones">
        <div class="feature-split__visual feature-split__visual--dark">
          <div class="mockup">
            <div class="mockup-titlebar">
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <div class="mockup-dot"></div>
              <span class="mockup-title">Integraciones API</span>
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
          <span class="feature-label">Integraciones</span>
          <h3 class="feature-title">La solución ideal para la transformación digital de tu correduría</h3>
          <p class="feature-body">
            BROKR ha sido construido para potenciar cuatro aspectos clave del
            negocio asegurador: integración con sistemas internos, conectividad
            con compañías, APIs abiertas y soluciones de marketplace.
          </p>
          <ul class="feature-list feature-list--single">
            <li><strong>Integración con sistemas corporativos</strong> para incorporar el negocio de seguros de forma transparente.</li>
            <li><strong>Conectividad con compañías aseguradoras</strong> para el intercambio automático de información.</li>
            <li><strong>API REST</strong> basada en WebServices para integrarse con aplicaciones de terceros.</li>
            <li><strong>Soluciones marketplace</strong> para complementar modelos de negocio disruptivos.</li>
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
        <h2 class="benefits__title">Ventajas que transforman tu correduría</h2>
        <p class="benefits__subtitle">
          Diseñado desde cero para el sector asegurador, BROKR combina
          potencia, flexibilidad y facilidad de uso en una sola plataforma.
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
            <p class="benefit-desc">Convierte a tu equipo en asesores especializados con acceso inmediato a la información. Operaciones en tiempo real, menos esperas y más productividad cada día.</p>
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
            <p class="benefit-desc">Gestiona eficientemente tus clientes con herramientas para su segmentación y análisis. Todo conectado: clientes, compañías y sistemas corporativos en un ecosistema unificado.</p>
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
            <p class="benefit-desc">Soporte al área comercial y de atención al cliente en un entorno multicanal integrado. Totalmente personalizable y escalable para adaptarse a tu modelo de negocio.</p>
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
            <p class="benefit-desc">Accede de forma rápida y segura a la información. Planifica tareas, gestiona oportunidades de venta y cumple con la normativa de protección de datos en cada operación.</p>
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
            <p class="benefit-desc">Se integra de forma bidireccional con otros sistemas corporativos. Equipo especializado en seguros disponible para acompañarte en cada etapa de la implantación y operación.</p>
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
            <span>+34 900 000 000</span>
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
            La plataforma digital que simplifica la gestión de pólizas para
            corredurías y brokers de seguros.
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
              <li><a href="#">Gestión de pólizas</a></li>
              <li><a href="#">Automatización BPM</a></li>
              <li><a href="#">Dashboard BI</a></li>
              <li><a href="#">CRM integrado</a></li>
              <li><a href="#">Integraciones API</a></li>
            </ul>
          </div>
          <div class="footer-nav-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Sobre BROKR</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Trabaja con nosotros</a></li>
              <li><a href="#">Contacto</a></li>
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
