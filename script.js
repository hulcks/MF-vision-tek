const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const year = document.querySelector("[data-year]");
const revealItems = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("main section[id]");
const menuLinks = document.querySelectorAll(".nav-links a");
const chatbot = document.querySelector("[data-chatbot]");
const chatbotToggle = document.querySelector("[data-chatbot-toggle]");
const chatbotClose = document.querySelector("[data-chatbot-close]");
const chatbotForm = document.querySelector("[data-chatbot-form]");
const chatbotInput = document.querySelector("[data-chatbot-input]");
const chatbotMessages = document.querySelector("[data-chatbot-messages]");
const chatbotSuggestions = document.querySelectorAll("[data-chatbot-suggestion]");

year.textContent = new Date().getFullYear();

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

const closeMenu = () => {
  document.body.classList.remove("nav-open");
  header.classList.remove("menu-open");
  navToggle.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navLinks.classList.remove("is-open");
};

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", isOpen);
  header.classList.toggle("menu-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.animate(
            [
              { opacity: 0, transform: "translateY(24px)" },
              { opacity: 1, transform: "translateY(0)" }
            ],
            { duration: 700, easing: "ease", fill: "both" }
          );
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        menuLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );

  sections.forEach((section) => navObserver.observe(section));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const chatbotReplies = [
  {
    keywords: ["service", "services", "propose", "offre", "faire"],
    reply:
      "MF Vision Tech propose le developpement web, les applications et dashboards, les chatbots IA, l'automatisation, le traitement d'image, les kiosques Raspberry Pi et la robotique educative."
  },
  {
    keywords: ["devis", "prix", "tarif", "budget", "cout", "combien"],
    reply:
      "Pour un devis, le plus simple est de decrire votre besoin, le delai souhaite et les fonctions importantes. Vous pouvez envoyer ces details par email ou WhatsApp depuis la section Contact."
  },
  {
    keywords: ["contact", "email", "whatsapp", "linkedin", "appeler", "telephone"],
    reply:
      "Vous pouvez contacter MF Vision Tech par email a 2nds.email@gmail.com, par WhatsApp au +21620445020, ou via LinkedIn depuis la section Contact."
  },
  {
    keywords: ["chatbot", "ia", "openai", "assistant", "intelligence"],
    reply:
      "Oui, MF Vision Tech peut creer un chatbot IA pour informer vos visiteurs, repondre aux questions frequentes, orienter les clients ou automatiser une partie du support."
  },
  {
    keywords: ["site", "web", "application", "dashboard", "interface"],
    reply:
      "Pour le web, l'objectif est de construire des sites vitrines, interfaces, applications et tableaux de bord rapides, propres, responsive et faciles a maintenir."
  },
  {
    keywords: ["ecole", "education", "robotique", "raspberry", "kiosque"],
    reply:
      "MF Vision Tech accompagne aussi les projets educatifs : robotique, Raspberry Pi, kiosques digitaux, ateliers et outils simples pour les ecoles."
  },
  {
    keywords: ["delai", "temps", "livraison", "methode", "processus"],
    reply:
      "La methode suit 5 etapes : comprendre le besoin, concevoir, prototyper, developper puis livrer. Le delai depend du perimetre du projet."
  }
];

const normalizeMessage = (message) =>
  message
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const getChatbotReply = (message) => {
  const normalized = normalizeMessage(message);
  const matchedReply = chatbotReplies.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword))
  );

  if (matchedReply) return matchedReply.reply;

  return "Je peux vous aider sur les services, les projets, les devis, les delais ou le contact. Pour une reponse precise, indiquez votre type de projet et votre objectif.";
};

const addChatbotMessage = (text, type) => {
  const message = document.createElement("div");
  message.className = `chatbot-message ${type}`;
  message.textContent = text;
  chatbotMessages.appendChild(message);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
};

const openChatbot = () => {
  chatbot.classList.add("is-open");
  chatbotToggle.setAttribute("aria-expanded", "true");
  window.setTimeout(() => chatbotInput.focus(), 80);
};

const closeChatbot = () => {
  chatbot.classList.remove("is-open");
  chatbotToggle.setAttribute("aria-expanded", "false");
};

const submitChatbotMessage = (message) => {
  const cleanMessage = message.trim();
  if (!cleanMessage) return;

  addChatbotMessage(cleanMessage, "user");
  chatbotInput.value = "";

  window.setTimeout(() => {
    addChatbotMessage(getChatbotReply(cleanMessage), "bot");
  }, 260);
};

chatbotToggle.addEventListener("click", () => {
  if (chatbot.classList.contains("is-open")) {
    closeChatbot();
  } else {
    openChatbot();
  }
});

chatbotClose.addEventListener("click", closeChatbot);

chatbotForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitChatbotMessage(chatbotInput.value);
});

chatbotSuggestions.forEach((button) => {
  button.addEventListener("click", () => {
    submitChatbotMessage(button.dataset.chatbotSuggestion);
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && chatbot.classList.contains("is-open")) {
    closeChatbot();
  }
});
