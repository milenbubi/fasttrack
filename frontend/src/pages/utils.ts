import { Status } from "../utils/models";


export const statusStyles: Record<Status, { bg: string; text: string }> = {
  Critical: {
    bg: "#FEE2E2",
    text: "#991B1B"
  },
  Average: {
    bg: "#FEF3C7",
    text: "#92400E"
  },
  Strong: {
    bg: "#DCFCE7",
    text: "#166534"
  }
};


export const overviewStyles: Record<string, React.CSSProperties> = {
  card: {
    maxWidth: 820,
    padding: 20,
    borderRadius: 16,
    border: "1px solid #E5E7EB",
    background: "#FFFFFF",
    boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 16,
  },
  title: { fontSize: 22, margin: 0, lineHeight: 1.2, color: "#111827" },
  badge: {
    padding: "8px 20px",
    borderRadius: 999,
    fontSize: 12,
    lineHeight: "12px",
    fontWeight: 700,
    letterSpacing: 0.3,
    border: "1px solid rgba(0,0,0,0.2)",
    whiteSpace: "nowrap",
  },
  mainRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: 18,
    alignItems: "center",
  },
  score: { fontSize: 56, fontWeight: 800, lineHeight: 1, color: "#111827c9" },
  subP: { marginTop: 8, fontSize: 14, color: "#1b4219ff" },
  subN: { marginTop: 8, fontSize: 14, color: "#b83a14ff" },
  barWrap: { width: "100%" },
  barTrack: {
    height: 12,
    borderRadius: 999,
    background: "#EEF2FF",
    overflow: "hidden",
    border: "1px solid #E5E7EB",
  },
  barFill: {
    height: "100%",
    borderRadius: 999,
    background: "#4F46E5",
    transition: "width 200ms ease",
  },
  barLegend: {
    marginTop: 8,
    display: "flex",
    justifyContent: "space-between",
    fontSize: 12,
    color: "#6B7280",
  },
};