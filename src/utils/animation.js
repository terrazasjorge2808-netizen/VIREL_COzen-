/**
 * Animation System Utility
 * Proporciona funciones para aplicar y gestionar animaciones usando los tokens de motion
 */

import { motion } from "../tokens/index.js";

/**
 * Crea una cadena de transición completa a partir de los tokens
 * @param {string} property - Propiedad CSS a animar (ej: 'opacity', 'transform')
 * @param {string} duration - Clave de duración: 'fast', 'base', 'slow', 'slower'
 * @param {string} easing - Clave de easing: 'ease-out', 'smooth', 'gentle', etc.
 * @returns {string} Cadena de transición CSS completa
 */
export function createTransition(property = "all", duration = "base", easing = "ease-out") {
  const durationValue = motion.duration[duration] || motion.duration.base;
  const easingValue = motion.easing[easing] || motion.easing.easeOut;
  return `${property} ${durationValue} ${easingValue}`;
}

/**
 * Crea un conjunto de transiciones para múltiples propiedades
 * @param {string[]} properties - Array de propiedades CSS
 * @param {string} duration - Duración de la transición
 * @param {string} easing - Función de easing
 * @returns {string} Cadena de transiciones combinadas
 */
export function createMultiTransition(properties = ["all"], duration = "base", easing = "ease-out") {
  return properties
    .map(prop => createTransition(prop, duration, easing))
    .join(", ");
}

/**
 * Genera estilos CSS para animaciones personalizadas
 * @param {Object} config - Configuración de la animación
 * @returns {Object} Objeto con estilos CSS
 */
export function createAnimationStyles(config = {}) {
  const {
    property = "all",
    duration = "base",
    easing = "ease-out",
    delay = "0ms",
    fillMode = "forwards",
  } = config;

  const durationValue = motion.duration[duration] || motion.duration.base;
  const easingValue = motion.easing[easing] || motion.easing.easeOut;

  return {
    transition: createTransition(property, duration, easing),
    transitionDelay: delay,
    animationFillMode: fillMode,
  };
}

/**
 * Aplica animaciones a un elemento del DOM
 * @param {HTMLElement} element - Elemento a animar
 * @param {Object} config - Configuración de la animación
 */
export function animateElement(element, config = {}) {
  if (!element) return;

  const styles = createAnimationStyles(config);
  Object.assign(element.style, styles);
}

/**
 * Crea una clase CSS para animaciones reutilizables
 * @param {string} className - Nombre de la clase
 * @param {string} duration - Duración de la animación
 * @param {string} easing - Función de easing
 * @returns {string} Definición de clase CSS
 */
export function createAnimationClass(className, duration = "base", easing = "ease-out") {
  const durationValue = motion.duration[duration] || motion.duration.base;
  const easingValue = motion.easing[easing] || motion.easing.easeOut;

  return `
.${className} {
  transition: ${createTransition("all", duration, easing)};
}

.${className}:hover {
  opacity: 0.8;
}
  `;
}

/**
 * Enum de duraciones predefinidas
 */
export const AnimationDuration = {
  FAST: "fast",
  BASE: "base",
  SLOW: "slow",
  SLOWER: "slower",
};

/**
 * Enum de funciones de easing predefinidas
 */
export const AnimationEasing = {
  LINEAR: "linear",
  EASE: "ease",
  EASE_IN: "easeIn",
  EASE_OUT: "easeOut",
  EASE_IN_OUT: "easeInOut",
  SMOOTH: "smooth",
  GENTLE: "gentle",
};

/**
 * Configuraciones predefinidas de animación
 */
export const AnimationPresets = {
  // Entradas suave
  fadeIn: {
    property: "opacity",
    duration: "base",
    easing: "ease-out",
  },
  
  // Movimiento rápido
  slideInFast: {
    property: "transform",
    duration: "fast",
    easing: "ease-out",
  },
  
  // Movimiento suave
  slideInSmooth: {
    property: "transform",
    duration: "slow",
    easing: "smooth",
  },
  
  // Respiración editorial
  pulseGentle: {
    duration: "slower",
    easing: "gentle",
  },
  
  // Combinación completa
  fullTransition: {
    property: "all",
    duration: "base",
    easing: "ease-in-out",
  },
};

/**
 * Aplica una animación predefinida a un elemento
 * @param {HTMLElement} element - Elemento a animar
 * @param {string} presetName - Nombre del preset
 */
export function applyAnimationPreset(element, presetName) {
  if (!element || !AnimationPresets[presetName]) return;
  animateElement(element, AnimationPresets[presetName]);
}
