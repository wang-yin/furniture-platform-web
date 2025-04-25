import ProductCard from "@/components/ui/ProductCard";

export default function Table() {
  return (
    <div className="px-10 xl:px-30">
      <h1 className="text-3xl">桌子</h1>
      <div className="border-1 w-full"></div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-20 mt-8 xl:grid-cols-4">
        <ProductCard />
      </div>
    </div>
  );
}
