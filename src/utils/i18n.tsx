import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          welcomeDate: "Saturday, September 9, 2023",
          countdownTitle: "We are counting every second!",
          days: 'Days',
          hours: 'Hours',
          minutes: 'Minutes',
          seconds: 'Seconds',
          storyTitle: "Our Love Story",
          ourStory1: "Our story began with a serendipitous encounter that blossomed into an extraordinary friendship. From the moment we met, a natural connection formed, and our bond grew stronger with each passing day. We found solace in one another's company, sharing laughter, dreams, and secrets. Through countless conversations and experiences, we discovered that we were not just best friends, but soulmates destined to be together.",
          ourStory2: "As our friendship deepened, we realized that our connection had evolved into something deeper and more profound. Love found its way into our hearts, filling us with a joy that words couldn't capture. Our love was built on a foundation of trust, understanding, and shared values. Together, we navigated the highs and lows of life, supporting and inspiring each other through it all.",
          ourStory3: "Now, standing at the precipice of forever, we are ready to embark on the journey of a lifetime. We are eager to celebrate our love surrounded by family and friends, and to create a future filled with endless adventures, laughter, and cherished memories. Our story is a testament to the transformative power of friendship, reminding us all that sometimes, the greatest love stories are born from the deepest connections.",
          saveTheDatetitle: "Celebreate love with us",
          weddingDateTime: "September 09, 2023. — 3pm",
          saveTheDateBody: "Embrace the magic of Antigua Guatemala as we celebrate love together. Join us in this enchanting city for a joyous occasion filled with unforgettable moments. Let's create cherished memories in this remarkable destination.",
          rsvpTitle: "Will you attend to our special day?",
          rsvpNameLabel: "Your Name*",
          rsvpEmailLabel: "Your Email",
          rsvpResponseLabel: "Will you attend?*",
          rsvpResponseYes: "Yes, I will be there",
          rsvpResponseNo: "Sorry, I can't come",
          rsvpMealLabel: "Meal preference",
          rsvpMeal1: "I eat anything",
          rsvpMeal2: "Beef",
          rsvpMeal3: "Salmon",
          rsvpMessageLabel: "Message",
          rsvpSubmitButton: "Send",
          registryTitle: "Registry",
          registryBody: "We’re lucky enough to have nearly everything we need for our home already. If you want to help making our honeymoon unforgettable, you can contribute using the link to the right.",
          scheduleTitle: "Schedule",
          scheduleBody: "This is a brief rundown of how we're expecting the weekend to flow so far. Everything may still change, stay tuned for updates!",
          scheduleCeremonyTitle: "Ceremony",
          scheduleCeremonyBody: "Our hearts will unite in a picturesque ceremony, surrounded by the tranquil beauty of a lake and the gentle whispers of trees.",
          scheduleCocktailTitle: "Drinks & Snacks",
          scheduleCocktailBody: "Celebrate with drinks & snacks!",
          scheduleToastTitle: "Toast",
          scheduleToastBody: "Raise your glasses in celebration as we toast to love, laughter, and a lifetime of cherished memories.",
          scheduleDinnerTitle: "Dinner & Dancing",
          scheduleDinnerBody: "Delectable food, irresistible beats; join us for an evening of culinary delights and groovy tunes.",
        }
      },
      es: {
        translations: {
          welcomeDate: "Sábado, 9 de septiembre 2023.",
          countdownTitle: "¡Estamos contando cada segundo!",
          days: 'Dias',
          hours: 'Horas',
          minutes: 'Minutos',
          seconds: 'Segundos',
          storyTitle: "Nuestra Historia de Amor",
          ourStory1: "Nuestra historia comenzó con un encuentro fortuito que floreció en una amistad extraordinaria. Desde el momento en que nos conocimos, se formó una conexión natural y nuestro vínculo se fortaleció día a día. Hallamos consuelo en la compañía del otro, compartiendo risas, sueños y secretos. A través de innumerables conversaciones y vivencias, descubrimos que no éramos solo mejores amigos, sino almas gemelas destinadas a estar juntos.",
          ourStory2: "A medida que nuestra amistad se profundizaba, nos dimos cuenta de que nuestra conexión había evolucionado hacia algo más profundo y trascendental. El amor encontró su camino en nuestros corazones, llenándonos de una alegría que las palabras no podían expresar. Nuestro amor se construyó sobre una base de confianza, comprensión y valores compartidos. Juntos, enfrentamos los altibajos de la vida, apoyándonos e inspirándonos mutuamente en todo momento.",
          ourStory3: "Ahora, parados en el umbral de la eternidad, estamos listos para emprender el viaje de nuestras vidas. Anhelamos celebrar nuestro amor rodeados de familia y amigos, y crear un futuro lleno de aventuras infinitas, risas y recuerdos queridos. Nuestra historia es un testimonio del poder transformador de la amistad, recordándonos que a veces, las más grandes historias de amor nacen de las conexiones más profundas.",
          saveTheDatetitle: "Celebra el amor con nosotros",
          weddingDateTime: "9 de Septiembre, 2023. — 3pm",
          saveTheDateBody: "Abraza la magia de Antigua Guatemala mientras celebramos el amor juntos. Únete a nosotros en esta encantadora ciudad para una ocasión llena de alegría y momentos inolvidables. Creemos recuerdos entrañables en este destino extraordinario.",
          rsvpTitle: "¿Asistirás a nuestro día especial?",
          rsvpNameLabel: "Tu Nombre*",
          rsvpEmailLabel: "Tu correo electrónico",
          rsvpResponseLabel: "¿Asistirás?*",
          rsvpResponseYes: "Si, allí estare",
          rsvpResponseNo: "Lo siento, no podre ir",
          rsvpMealLabel: "Preferencia de comida",
          rsvpMeal1: "Como lo que sea",
          rsvpMeal2: "Res",
          rsvpMeal3: "Salmón",
          rsvpMessageLabel: "Mensaje",
          rsvpSubmitButton: "Enviar",
          registryTitle: "Lista de Regalos",
          registryBody: "Tenemos la fortuna de tener casi todo lo que necesitamos para nuestro hogar. Si deseas ayudarnos a hacer inolvidable nuestra luna de miel, puedes contribuir usando el enlace a la derecha.",
          scheduleTitle: "Agenda",
          scheduleBody: "Este es un breve resumen de cómo esperamos que transcurra el fin de semana hasta el momento. Todo puede cambiar aún, ¡mantente al tanto de las actualizaciones!",
          scheduleCeremonyTitle: "Ceremonia",
          scheduleCeremonyBody: "Nuestros corazones se unirán en una ceremonia pintoresca, rodeados por la tranquilidad de un lago y los suaves susurros de los árboles.",
          scheduleCocktailTitle: "Bebidas y Snacks",
          scheduleCocktailBody: "¡Celebra con bebidas y bocadillos!",
          scheduleToastTitle: "Brindis",
          scheduleToastBody: "Alza tus copas en celebración mientras brindamos por el amor, la risa y una vida llena de recuerdos queridos.",
          scheduleDinnerTitle: "Cena y Baile",
          scheduleDinnerBody: "Comida deliciosa, ritmos irresistibles; únete a nosotros en una velada de delicias culinarias y ritmos encantadores.",
        }
      }
    },
    fallbackLng: "es",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
