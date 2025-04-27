"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const labelMap: Record<string, string> = {
  product: "商品",
  chair: "椅子",
  sofa: "沙發",
  table: "桌子",
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // 只留下有在 labelMap 裡的 segments
  const crumbs = segments
    .filter((segment) => labelMap[segment]) // 過濾掉不是在 labelMap 裡面的（也就是像 id 這種動態的）
    .map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/");
      return { label: labelMap[segment] || segment, href };
    });

  return (
    <nav className="text-sm flex space-x-2 ml-10 mt-5 mb-3 xl:ml-30 xl:mb-8">
      <Link href="/">開始</Link>
      {crumbs.map((crumb, index) => (
        <span key={crumb.href} className="flex items-center space-x-2">
          <span className="mx-2">›</span>
          <Link href={crumb.href}>{crumb.label}</Link>
        </span>
      ))}
    </nav>
  );
}
