interface PaletteColors {
  PRIMARY: string;
  SECONDARY: string;
}

interface InputColors {
  COLOR: string;
  BG_COLOR: string;
  OPACITY?: number;
}

interface Palette {
  DEFAULT: PaletteColors;
  INPUT: InputColors;
}

export const ASTA_CLICK_PALETTE: Palette = {
  DEFAULT: {
    PRIMARY: '#0066EE',
    SECONDARY: '#EE7700',
  },
  INPUT: {
    BG_COLOR: '#FFAA00',
    COLOR: '#0000AA',
    OPACITY: 33,
  },
};
