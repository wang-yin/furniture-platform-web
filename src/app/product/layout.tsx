import Breadcrumb from "@/components/ui/Breadcrumbs";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Breadcrumb />
      {children}
    </div>
  );
}
