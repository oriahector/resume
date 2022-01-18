import enData from "../../resume/en-data.yaml";
import esData from "../../resume/es-data.yaml";

export const languages = [
  {
    name: "English",
    code: "en",
    data: enData,
    resumeLabels: {
      contacts: "Contact",
      profile: "Profile",
      skills: "Skills",
      experience: "Experience",
      professional: "Professional",
      education: "Education",
    },
  },
  {
    name: "Español",
    code: "es",
    data: esData,
    resumeLabels: {
      contacts: "Contacto",
      profile: "Perfil",
      skills: "Skills",
      experience: "Experiencia",
      professional: "Profesional",
      education: "Educación",
    },
  },
];

export function getCurrentLanguage() {
  return languages[0];
}

export function getLanguages() {
  return languages;
}
