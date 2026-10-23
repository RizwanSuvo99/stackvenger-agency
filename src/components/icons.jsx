// Minimal inline SVG icon set — original cream-style glyphs
const Svg = ({ children, size = 20, viewBox = "0 0 24 24", className, style, dir }) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    aria-hidden="true"
    className={className}
    style={style}
    dir={dir}
  >
    {children}
  </svg>
);

/* softy squiggle logo mark */
export const LogoMark = (p) => (
  <Svg {...p} viewBox="0 0 48 48">
    <path
      d="M18 4c-7 0-12 5-12 12s7 10 14 10 13 4 13 10-5 8-11 8c-5 0-9-3-10-7"
      strokeLinecap="round"
      strokeWidth="5.5"
      stroke="currentColor"
    />
    <path d="M30 4c6 .5 11 4 13 9" strokeLinecap="round" strokeWidth="5.5" stroke="currentColor" />
  </Svg>
);

export const ArrowRight = (p) => (
  <Svg {...p} viewBox="0 0 20 15">
    <path
      d="M13.66 0.279L19.721 6.33986C20.093 6.71179 20.093 7.3148 19.721 7.68673L13.66 13.7476C13.2882 14.1196 12.6852 14.1196 12.3133 13.7476C11.9413 13.3757 11.9413 12.7727 12.3133 12.4008L16.7484 7.96568H0V6.06092H16.7484L12.3133 1.62582C11.9413 1.25389 11.9413 0.650874 12.3133 0.278946C12.6852 -0.092982 13.2882 -0.092982 13.66 0.278946Z"
      fill="currentColor"
    />
  </Svg>
);

export const Chevron = (p) => (
  <Svg {...p}>
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" />
  </Svg>
);

/* theme chevron-right (font awesome 0 0 320 512 glyph) */
export const ChevronRight = (p) => (
  <Svg {...p} viewBox="0 0 320 512">
    <path
      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
      fill="currentColor"
    />
  </Svg>
);

export const Star = (p) => (
  <Svg {...p} viewBox="0 0 576 512">
    <path
      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
      fill="currentColor"
    />
  </Svg>
);

/** cream starburst — 4 curved points */
export const StarBurst = (p) => (
  <Svg {...p} viewBox="0 0 24 24">
    <path
      d="M12 1.5c.9 5 1.6 7.3 3.4 9.1 1.8 1.8 4.1 2.5 9.1 3.4-5 .9-7.3 1.6-9.1 3.4-1.8 1.8-2.5 4.1-3.4 9.1-.9-5-1.6-7.3-3.4-9.1C6.8 16.6 4.5 15.9 1.5 15c5-.9 7.3-1.6 9.1-3.4 1.8-1.8 2.5-4.1 3.4-9.1z"
      fill="currentColor"
    />
  </Svg>
);

/** pixel-cluster glyph */
export const PixelBurst = (p) => (
  <Svg {...p} viewBox="0 0 24 24">
    {[1, 5, 9, 13, 17].map((x, i) =>
      [1, 6, 11, 16].map(
        (y, j) =>
          (i + j) % 2 === 1 && (
            <rect key={`${x}-${y}`} x={x + (j % 2)} y={y * 1.2} width="2.6" height="2.6" rx="0.8" fill="currentColor" />
          )
      )
    )}
  </Svg>
);

/** flower/petal burst glyph */
export const PetalBurst = (p) => (
  <Svg {...p} viewBox="0 0 24 24">
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
      <ellipse key={a} cx="12" cy="5.4" rx="1.9" ry="4.2" fill="currentColor" transform={`rotate(${a} 12 12)`} />
    ))}
  </Svg>
);

/** asterisk star */
export const Asterisk = (p) => (
  <Svg {...p} viewBox="0 0 24 24">
    <path
      d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7"
      strokeLinecap="round"
      strokeWidth="2.6"
      stroke="currentColor"
    />
  </Svg>
);

export const Check = (p) => (
  <Svg {...p} viewBox="0 0 512 512">
    <path
      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
      fill="currentColor"
    />
  </Svg>
);

export const Play = (p) => (
  <Svg {...p} viewBox="0 0 24 24">
    <path d="M8 5.5l11 6.5-11 6.5v-13z" fill="currentColor" />
  </Svg>
);

export const Search = (p) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="7" strokeWidth="2" stroke="currentColor" />
    <path d="M21 21l-4.3-4.3" strokeLinecap="round" strokeWidth="2" stroke="currentColor" />
  </Svg>
);

export const Phone = (p) => (
  <Svg {...p}>
    <path
      d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a2 2 0 01-2.2 2A16.8 16.8 0 013 6.2 2 2 0 015 4z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </Svg>
);

export const Close = (p) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeWidth="2.2" />
  </Svg>
);

export const Menu = (p) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeWidth="2.2" />
  </Svg>
);

/* service icons (cream, rounded) */
export const Sparkles = (p) => (
  <Svg {...p} viewBox="0 0 24 24">
    <path
      d="M9 4c.6 3.4 1.2 5 2.6 6.4C13 11.8 14.6 12.4 18 13c-3.4.6-5 1.2-6.4 2.6-1.4 1.4-2 3-2.6 6.4-.6-3.4-1.2-5-2.6-6.4C5 14.2 3.4 13.6 0 13h0c3.4-.6 5-1.2 6.4-2.6C7.8 9 8.4 7.4 9 4z"
      fill="currentColor"
      transform="translate(2.2 0)"
    />
    <path d="M18.5 3.5c.3 1.7.6 2.5 1.4 3.3.8.8 1.6 1.1 3.3 1.4-1.7.3-2.5.6-3.3 1.4-.8.8-1.1 1.6-1.4 3.3-.3-1.7-.6-2.5-1.4-3.3-.8-.8-1.6-1.1-3.3-1.4 1.7-.3 2.5-.6 3.3-1.4.8-.8 1.1-1.6 1.4-3.3z" fill="currentColor" transform="scale(.62) translate(4 -2.5)" />
  </Svg>
);

export const AppChip = (p) => (
  <Svg {...p} viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="14" rx="3" fill="currentColor" />
    <rect x="6.5" y="9.5" width="6" height="5" rx="1.4" fill="#211e19" />
  </Svg>
);

export const Cube = (p) => (
  <Svg {...p} viewBox="0 0 24 24">
    <path
      d="M12 2.8l8 4.6v9.2l-8 4.6-8-4.6V7.4l8-4.6zm0 2.3L6.2 8.4 12 11.7l5.8-3.3L12 5.1z"
      fill="currentColor"
    />
  </Svg>
);

export const Rocket = (p) => (
  <Svg {...p} viewBox="0 0 24 24">
    <path
      d="M14 3.5c3.5 0 6.5 3 6.5 6.5 0 5-4 8.6-7.4 10l-3.6-3.6C11 12.9 14.6 9 14 3.5zM17 8a1.4 1.4 0 100-2.8A1.4 1.4 0 0017 8zM8 17.5L6.5 20 4 21.5 5.5 19 8 17.5zM9.5 13l1.5 1.5-3.4 1.9L6 15l3.5-2z"
      fill="currentColor"
    />
  </Svg>
);

export const CloudIcon = (p) => (
  <Svg {...p} viewBox="0 0 24 24">
    <path
      d="M7.5 18.5a4.3 4.3 0 01-.6-8.6 5.6 5.6 0 0110.9-.8 4.1 4.1 0 01.2 9.4H7.5zM12 16v-4M10.2 13.2L12 11.4l1.8 1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      stroke="currentColor"
    />
  </Svg>
);

export const Flame = (p) => (
  <Svg {...p} viewBox="0 0 24 24">
    <path
      d="M12.6 2.5c.4 3.1 2.1 4.9 4.2 6.8 2 1.9 3.4 3.7 3.4 6.2A8.4 8.4 0 0112 23a8.3 8.3 0 01-8.2-8.2c0-2.6 1.5-4.4 3.2-6.4.3.9 1 1.7 2 2 .1-3.1 1.4-4.4 3.6-7.9z"
      fill="currentColor"
    />
  </Svg>
);

export const Shield = (p) => (
  <Svg {...p} viewBox="0 0 24 24">
    <path
      d="M12 2.8l7.5 3v5.6c0 4.6-3.2 8.2-7.5 9.6-4.3-1.4-7.5-5-7.5-9.6V5.8l7.5-3z"
      fill="currentColor"
    />
  </Svg>
);

export const Headset = (p) => (
  <Svg {...p} viewBox="0 0 24 24">
    <path
      d="M4 13a8 8 0 0116 0M4 13v6M20 13v6M4 19a3 3 0 003 3h2.5M20 19a3 3 0 01-3 3h-2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
      stroke="currentColor"
    />
  </Svg>
);

/* socials (font awesome glyphs, same as theme inline svgs) */
export const Facebook = (p) => (
  <Svg {...p} viewBox="0 0 320 512">
    <path
      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      fill="currentColor"
    />
  </Svg>
);

export const Instagram = (p) => (
  <Svg {...p} viewBox="0 0 448 512">
    <path
      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
      fill="currentColor"
    />
  </Svg>
);

export const XTwitter = (p) => (
  <Svg {...p} viewBox="0 0 512 512">
    <path
      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
      fill="currentColor"
    />
  </Svg>
);
