/**
 * ────────────────────────────────────────────────────────────────────────────
 *  FUENTE ÚNICA DE CONTENIDO DEL CV
 *  Editá este archivo para actualizar toda la landing. No hace falta tocar
 *  los componentes: ellos leen de acá.
 * ────────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Nicolás Rodríguez',
  role: 'Ingeniero de Software',
  tagline: 'Full-Stack · Arquitectura de Software · Microservicios',
  location: 'Paipa, Boyacá, Colombia',
  email: 'dev.nicolasrodriguez@gmail.com',
  phone: '+57 320 721 1712',
  // 👉 Reemplazá estas URLs por las tuyas:
  github: 'https://github.com/NicolasSRC',
  linkedin: 'https://www.linkedin.com/in/dev-nicolas-rodriguez',
  // Ruta de la foto dentro de /public. Poné tu imagen ahí con este nombre,
  // o cambiá la ruta. Si no hay foto, se muestran tus iniciales.
  photo: '/profile.png',
  // Página de CV imprimible (se genera a partir de estos mismos datos).
  // El botón abre /cv y dispara "Guardar como PDF" del navegador.
  cvPdf: '/cv?print',
  summary:
    'Desarrollador responsable, confiable y comprometido, amante del aprendizaje y de los retos profesionales. Tengo experiencia construyendo aplicaciones resistentes y confiables, con foco en arquitectura de software, microservicios y buenas prácticas (SOLID, patrones de diseño). Me apasiona la innovación y la resolución de problemas: busco soluciones creativas y eficientes en cada proyecto, y oportunidades para seguir creciendo y aportar al éxito de los equipos con los que trabajo.',
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  highlights: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: 'Desarrollador Freelance · Fundador de CodeNova Studio',
    company: 'CodeNova Studio',
    period: 'Enero 2026 — Actualidad',
    current: true,
    highlights: [
      'Fundé CodeNova Studio, un estudio de desarrollo web profesional con IA, y construí más de 100 sitios para restaurantes, hoteles, cafés y clínicas de Boyacá y el eje cafetero.',
      'Desarrollo de sitios modernos, responsive y optimizados para conversiones con Next.js, React, TypeScript y Tailwind CSS, desplegados en Vercel.',
      'Integración de un asistente de IA (chatbot) propio para mejorar la atención y la conversión de cada negocio.',
      'Gestión integral del negocio: prospección, relación con clientes, diseño, desarrollo y entrega continua.',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'IA', 'Vercel', 'Freelance'],
  },
  {
    role: 'Ingeniero de Desarrollo de Software',
    company: 'Armorum VU-SGDEA',
    period: 'Noviembre 2024 — Actualidad',
    highlights: [
      'Desarrollo completo de aplicaciones web y móviles, desde la arquitectura hasta la puesta en producción.',
      'Implementación de soluciones específicas, como app móvil con escáner de documentos e integración con web services.',
      'Creación de plataformas web para gestión empresarial y automatización de procesos.',
      'Diseño, modelado y optimización de bases de datos SQL y NoSQL, incluyendo mejora de rendimiento con caché.',
      'Integración de APIs y servicios externos para ampliar funcionalidades.',
      'Mantenimiento, escalabilidad y mejora continua de proyectos en producción.',
      'Trabajo colaborativo con equipos multidisciplinarios, traduciendo requerimientos en soluciones técnicas.',
      'Buenas prácticas de desarrollo, control de versiones (Git) y metodologías ágiles (Scrum).',
    ],
    tags: ['Arquitectura', 'Web & Móvil', 'SQL/NoSQL', 'Caché', 'APIs', 'Git', 'Scrum'],
  },
  {
    role: 'Ingeniero de Desarrollo',
    company: 'Synergo Action Center (Chile)',
    period: 'Octubre 2023 — Agosto 2024',
    highlights: [
      'Análisis de prerrequisitos y diseño de bases de datos escalables y confiables aplicando principios SOLID y patrones de diseño.',
      'Desarrollo de aplicaciones en Laravel 10.x+ con arquitectura de microservicios para garantizar escalabilidad y mantenibilidad.',
      'Levantamiento y documentación de requerimientos para diseñar soluciones personalizadas según necesidades del cliente.',
      'Creación de interfaces dinámicas y responsivas con React, Blade, Livewire, JavaScript y Tailwind CSS.',
      'Implementación de pruebas unitarias para asegurar calidad y detectar errores tempranamente.',
    ],
    tags: ['SOLID', 'Microservicios', 'Laravel 10+', 'React', 'Livewire', 'Tailwind', 'Testing'],
  },
  {
    role: 'Desarrollador Full-Stack',
    company: 'Armorum VU-SGDEA',
    period: 'Junio 2019 — Octubre 2023',
    highlights: [
      'Desarrollo de aplicaciones web con PHP, JavaScript, HTML, CSS, jQuery y Ajax, entre otras.',
      'Implementación e integración de APIs de Google para mejorar la funcionalidad y la experiencia de usuario.',
      'Diseño y desarrollo de APIs con Python (Django) y Vue.js, garantizando comunicación eficiente y segura entre front-end y back-end.',
      'Análisis y desarrollo de bases de datos (MySQL, PostgreSQL).',
      'Trabajo bajo metodología Scrum.',
    ],
    tags: ['PHP', 'JavaScript', 'Django', 'Vue.js', 'MySQL', 'PostgreSQL', 'Ajax'],
  },
];

/** Skills agrupadas por categoría para los filtros interactivos. */
export const skillGroups: { category: string; items: string[] }[] = [
  { category: 'Lenguajes', items: ['PHP', 'JavaScript', 'Python', 'SQL'] },
  { category: 'Frameworks', items: ['Laravel', 'React', 'React Native', 'Vue.js', 'Django', 'Livewire'] },
  { category: 'Arquitectura', items: ['Microservicios', 'Principios SOLID', 'Patrones de diseño', 'Escalabilidad'] },
  { category: 'Datos', items: ['MySQL', 'PostgreSQL', 'NoSQL', 'Redis'] },
  { category: 'DevOps & Infra', items: ['Docker', 'CI/CD', 'Ansible', 'Linux', 'Git', 'GitHub'] },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  repo?: string;
  demo?: string;
  highlight?: string;
};

/**
 * Proyecto/emprendimiento destacado: el estudio freelance de Nicolás.
 */
export const studio = {
  name: 'CodeNova Studio',
  tagline: 'Desarrollo Web Profesional con IA',
  url: 'https://codenova.studio',
  description:
    'Mi estudio de desarrollo freelance. Creo sitios web profesionales para restaurantes, hoteles, cafés y clínicas: diseño moderno, optimizados para conversiones, 100% responsive y con un asistente de IA propio integrado. Más de 100 sitios construidos para negocios de Boyacá y el eje cafetero.',
  stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'IA / Chatbot', 'Vercel'],
};

/**
 * Selección de sitios reales construidos con CodeNova Studio.
 * Cada uno tiene su demo en vivo. (Editá/agregá en este array.)
 */
export const projects: Project[] = [
  {
    name: 'Rugantino Di Roma',
    description: 'Sitio web para restaurante italiano en Paipa. Diseño elegante, menú y reservas.',
    stack: ['Next.js', 'Tailwind', 'IA'],
    highlight: 'Paipa',
    demo: 'https://rugantino-di-roma-paipa.codenova.studio',
  },
  {
    name: 'Moratto Bistro',
    description: 'Web para bistró gourmet. Identidad visual cuidada y experiencia móvil fluida.',
    stack: ['Next.js', 'Tailwind', 'IA'],
    highlight: 'Paipa',
    demo: 'https://moratto-bistro.codenova.studio',
  },
  {
    name: 'Paipa Cheese Experience',
    description: 'Landing para experiencia gastronómica del queso Paipa. Storytelling y conversión.',
    stack: ['Next.js', 'Tailwind', 'IA'],
    highlight: 'Paipa',
    demo: 'https://paipa-cheese-experience.codenova.studio',
  },
  {
    name: 'Divino Restaurante',
    description: 'Sitio web para restaurante en Tunja. Carta digital, galería y contacto directo.',
    stack: ['Next.js', 'Tailwind', 'IA'],
    highlight: 'Tunja',
    demo: 'https://divino-restaurante.codenova.studio',
  },
  {
    name: 'Cazique Guanatá Coffee Shop',
    description: 'Web para coffee shop en Tunja. Diseño cálido enfocado en la marca y el producto.',
    stack: ['Next.js', 'Tailwind', 'IA'],
    highlight: 'Tunja',
    demo: 'https://cazique-guanat-coffee-shop.codenova.studio',
  },
  {
    name: 'Las Rokas',
    description: 'Sitio web para restaurante en Paipa. Presencia digital moderna y responsive.',
    stack: ['Next.js', 'Tailwind', 'IA'],
    highlight: 'Paipa',
    demo: 'https://las-rokas.codenova.studio',
  },
];

export const education = [
  {
    title: 'Ingeniería de Software',
    place: 'Politécnico Grancolombiano',
    detail: 'Graduación estimada: 2025-2026',
  },
  {
    title: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
    place: 'Servicio Nacional de Aprendizaje (SENA)',
    detail: 'Finalización: 2021',
  },
];

export const certifications = [
  {
    title: 'Diplomado en Habilidades de Programación (Desarrollo de apps móviles)',
    place: 'MinTIC · Universidad Nacional de Colombia',
    detail: '2022',
  },
];
