/**
 * VIREL_COzen Design Tokens
 * 
 * A visual and conceptual architecture where:
 * - Shadow dissolves into calm
 * - Light becomes thought
 * - Movement converts into breath
 * 
 * Token system for minimalist, meditative, and aesthetic editorial content
 */

export const tokens = {
  // Color Palette
  colors: {
    // Base: Dark minimalist foundation
    base: {
      dark: '#1a1a1a',      // Darkness dissolved in calm
      light: '#f5f5f5',     // Light converted into thought
      neutral: '#2a2a2a',   // Gentle shadow
    },
    
    // Accent: Breathing movement
    accent: {
      primary: '#f5f5f5',   // Primary light point
      secondary: '#e8e8e8', // Secondary breathing
      muted: 'rgba(245, 245, 245, 0.6)', // Opacity for contemplation
    },
    
    // Editorial: Content layers
    editorial: {
      text: '#1a1a1a',
      textMuted: '#4a4a4a',
      background: '#f9f9f9',
      border: '#e0e0e0',
    },
  },

  // Typography
  typography: {
    // Meditative reading experience
    fontFamily: {
      serif: '"Garamond", "Georgia", serif',
      sans: '"Inter", "-apple-system", "BlinkMacSystemFont", sans-serif',
      mono: '"Courier New", "Courier", monospace',
    },
    
    // Font sizes (contemplative hierarchy)
    fontSize: {
      xs: '0.75rem',    // 12px - micro text
      sm: '0.875rem',   // 14px - caption
      base: '1rem',     // 16px - body
      lg: '1.125rem',   // 18px - emphasis
      xl: '1.5rem',     // 24px - subheading
      '2xl': '2rem',    // 32px - heading
      '3xl': '2.5rem',  // 40px - title
      '4xl': '3rem',    // 48px - hero
    },
    
    // Font weights (breathing hierarchy)
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    
    // Line height (contemplative spacing)
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
    
    // Letter spacing (meditative rhythm)
    letterSpacing: {
      tight: '-0.02em',
      normal: '0em',
      relaxed: '0.05em',
      wide: '0.1em',
    },
  },

  // Spacing System (Breathing Scale)
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
  },

  // Opacity (Dissolution in calm)
  opacity: {
    0: '0',
    10: '0.1',
    20: '0.2',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    80: '0.8',
    90: '0.9',
    100: '1',
  },

  // Border Radius (Soft movement)
  borderRadius: {
    none: '0',
    sm: '0.25rem',   // 4px
    base: '0.5rem',  // 8px
    md: '0.75rem',   // 12px
    lg: '1rem',      // 16px
    xl: '1.5rem',    // 24px
    full: '9999px',
  },

  // Shadows (Contemplative depth)
  shadows: {
    none: 'none',
    xs: '0 1px 2px 0 rgba(26, 26, 26, 0.05)',
    sm: '0 1px 3px 0 rgba(26, 26, 26, 0.1), 0 1px 2px -1px rgba(26, 26, 26, 0.1)',
    md: '0 4px 6px -1px rgba(26, 26, 26, 0.1), 0 2px 4px -2px rgba(26, 26, 26, 0.1)',
    lg: '0 10px 15px -3px rgba(26, 26, 26, 0.1), 0 4px 6px -4px rgba(26, 26, 26, 0.1)',
    xl: '0 20px 25px -5px rgba(26, 26, 26, 0.1), 0 8px 10px -6px rgba(26, 26, 26, 0.1)',
  },

  // Transitions (Movement becomes breathing)
  transitions: {
    fast: '150ms ease-in-out',
    base: '250ms ease-in-out',
    slow: '350ms ease-in-out',
    slowest: '500ms ease-in-out',
  },

  // Breakpoints (Responsive meditation)
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Grid System
  grid: {
    columns: 12,
    gutter: '1.5rem',
  },

  // Z-index (Layered contemplation)
  zIndex: {
    hide: '-1',
    base: '0',
    dropdown: '1000',
    sticky: '1020',
    fixed: '1030',
    modal: '1040',
    popover: '1050',
    tooltip: '1060',
  },
};

// Semantic Token Aliases
export const semanticTokens = {
  background: tokens.colors.editorial.background,
  text: tokens.colors.editorial.text,
  textMuted: tokens.colors.editorial.textMuted,
  border: tokens.colors.editorial.border,
  
  // Editorial components
  heading: {
    color: tokens.colors.base.dark,
    fontFamily: tokens.typography.fontFamily.serif,
    fontWeight: tokens.typography.fontWeight.semibold,
    lineHeight: tokens.typography.lineHeight.tight,
  },
  
  body: {
    color: tokens.colors.editorial.text,
    fontFamily: tokens.typography.fontFamily.sans,
    fontSize: tokens.typography.fontSize.base,
    lineHeight: tokens.typography.lineHeight.normal,
  },
  
  caption: {
    color: tokens.colors.editorial.textMuted,
    fontSize: tokens.typography.fontSize.sm,
    lineHeight: tokens.typography.lineHeight.normal,
  },
};

export default tokens;
