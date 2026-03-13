/** Design tokens for colors, typography, motion, and radii. */
export const tokens = {
  color: {
    identity: { value: "#E91E63", cssVar: "--color-identity" },
    action: { value: "#E94A6A", cssVar: "--color-action" },
    accent: { value: "#E56D8A", cssVar: "--color-accent" },
    pedagogy: { value: "#7CC04B", cssVar: "--color-pedagogy" },
    cream: { value: "#FAF4ED", cssVar: "--color-cream" },
    cream2: { value: "#F4EDE3", cssVar: "--color-cream-2" },
    ink: { value: "#1E1214", cssVar: "--color-ink" },
    inkSoft: { value: "#3A2A2E", cssVar: "--color-ink-soft" },
    inkMuted: { value: "#7A6568", cssVar: "--color-ink-muted" },
    inkSubtle: { value: "#9A8082", cssVar: "--color-ink-subtle" },
    inkLight: { value: "#BDB0B2", cssVar: "--color-ink-light" },
    inkFaint: { value: "#C5B0B5", cssVar: "--color-ink-faint" },
    pink: {
      p50: { value: "#F7E6EA", cssVar: "--color-pink-50" },
      p100: { value: "#F3C6CF", cssVar: "--color-pink-100" },
      p200: { value: "#EFA9B8", cssVar: "--color-pink-200" },
      p300: { value: "#E88FA0", cssVar: "--color-pink-300" },
      p400: { value: "#E56D8A", cssVar: "--color-pink-400" },
      p500: { value: "#E94A6A", cssVar: "--color-pink-500" },
      p600: { value: "#E91E63", cssVar: "--color-pink-600" },
      p700: { value: "#D91B59", cssVar: "--color-pink-700" },
      p800: { value: "#C9174F", cssVar: "--color-pink-800" },
    },
    green: {
      g50: { value: "#DCE9B5", cssVar: "--color-green-50" },
      g100: { value: "#C9DC8F", cssVar: "--color-green-100" },
      g200: { value: "#B7D36F", cssVar: "--color-green-200" },
      g300: { value: "#A8C66C", cssVar: "--color-green-300" },
      g400: { value: "#93B95B", cssVar: "--color-green-400" },
      g500: { value: "#7CC04B", cssVar: "--color-green-500" },
      g600: { value: "#68A93D", cssVar: "--color-green-600" },
      g700: { value: "#568F31", cssVar: "--color-green-700" },
      g800: { value: "#457426", cssVar: "--color-green-800" },
    },
  },
  font: {
    display: { value: "'Cormorant Garamond', Georgia, serif", cssVar: "--font-display" },
    ui: { value: "'DM Sans', system-ui, sans-serif", cssVar: "--font-ui" },
    handwritten: { value: "'Caveat', cursive", cssVar: "--font-hand" },
  },
  motion: {
    fadeRise: { value: "fade-rise 1s cubic-bezier(0.16,1,0.3,1) both", cssVar: "--anim-fade-rise" },
    scaleIn: { value: "scale-in 1s cubic-bezier(0.16,1,0.3,1) both", cssVar: "--anim-scale-in" },
    floatGentle: { value: "float-gentle 7s ease-in-out infinite", cssVar: "--anim-float-gentle" },
    spinSlow: { value: "spin-slow 24s linear infinite", cssVar: "--anim-spin-slow" },
    marqueeFlow: { value: "marquee-flow 32s linear infinite", cssVar: "--anim-marquee-flow" },
    shimmer: { value: "shimmer 1.6s ease-in-out infinite", cssVar: "--anim-shimmer" },
  },
  radius: {
    sm: { value: "10px", cssVar: "--radius-ui-sm" },
    md: { value: "16px", cssVar: "--radius-ui-md" },
    lg: { value: "24px", cssVar: "--radius-ui-lg" },
    xl: { value: "28px", cssVar: "--radius-ui-xl" },
  },
} as const;

type ExtractCssVar<T> =
  T extends { cssVar: infer V }
    ? V
    : T extends object
      ? ExtractCssVar<T[keyof T]>
      : never;

/** CSS variable token names for inline styles. */
export type ThemeToken = ExtractCssVar<typeof tokens>;

/** Returns a typed CSS var() string. */
export const tokenVar = (token: ThemeToken) => `var(${token})` as const;


