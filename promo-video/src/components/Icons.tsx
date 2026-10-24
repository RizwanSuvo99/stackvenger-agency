// Line icons for the four services (stroke uses the current text colour).
const paths: Record<string, string[]> = {
  rocket: ["M12 2c3 2 5 5.5 5 9.5L14.5 16h-5L7 11.5C7 7.5 9 4 12 2z", "M9.5 16l-2 4 3-1.2M14.5 16l2 4-3-1.2", "M12 9.2a1.6 1.6 0 1 0 0 .01"],
  code: ["M8 7l-5 5 5 5", "M16 7l5 5-5 5", "M14 4l-4 16"],
  spark: ["M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z", "M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"],
  flow: ["M5 5h5v5H5z", "M14 14h5v5h-5z", "M10 7.5h3.5a2 2 0 0 1 2 2V14", "M5 14h5v5H5z", "M7.5 10v4"],
};

export const ServiceIcon = ({ name, size = 56 }: { readonly name: string; readonly size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    {(paths[name] ?? []).map((d) => (
      <path key={d} d={d} />
    ))}
  </svg>
);
