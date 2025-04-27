export interface SidebarProps {
  openSection: "info" | "size" | null;
  setOpenSection: (section: "info" | "size" | null) => void;
}
