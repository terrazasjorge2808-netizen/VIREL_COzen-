export type Theme = 'light' | 'dark';

export type Variant =
  | 'display'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'caption';

export type TypographySize = `${number}${'px' | 'rem' | 'em'}`;

export type TypographyWeight = 400 | 500 | 600 | 700 | 800;

export interface TypographyToken {
  label: string;
  size: TypographySize;
  weight: TypographyWeight;
  description: string;
}

export const typographyTokens: Record<Variant, TypographyToken> = {
  display: {
    label: 'Display / Bold',
    size: '3rem',
    weight: 800,
    description: 'Ideal para encabezados grandes o hero.',
  },
  title: {
    label: 'Title / Bold',
    size: '2rem',
    weight: 700,
    description: 'Encabezados de sección.',
  },
  subtitle: {
    label: 'Subtitle / Semibold',
    size: '1.5rem',
    weight: 600,
    description: 'Texto secundario para introducir contenido.',
  },
  body: {
    label: 'Body / Regular',
    size: '1rem',
    weight: 400,
    description: 'Texto principal para párrafos.',
  },
  caption: {
    label: 'Caption / Medium',
    size: '0.875rem',
    weight: 500,
    description: 'Notas pequeñas o metadata.',
  },
};

export function getTypographyToken(variant: Variant): TypographyToken {
  return typographyTokens[variant];
}
