import { SidebarProps } from "@/types/sidebar";
import Accordion from "@/components/ui/Accordion";
import { GiPencilRuler } from "react-icons/gi";

export default function Sidebar({ openSection, setOpenSection }: SidebarProps) {
  const isOpen = openSection != null;
  return (
    <>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 bg-black opacity-30 z-40"
            onClick={() => setOpenSection(null)}
          ></div>
        </>
      )}

      {/* 側邊欄 */}
      <div
        className={`fixed bottom-0 left-0 h-[800px] w-full px-5 py-5 bg-white z-50
          transform transition-transform duration-700 ease-in-out
          md:top-0 md:right-0 md:left-auto md:bottom-auto md:w-[400px] md:h-full
          ${
            openSection
              ? "translate-y-0 md:translate-x-0"
              : "translate-y-full md:translate-x-full"
          }
        `}
      >
        <div className="flex justify-end">
          <button
            className="text-2xl cursor-pointer"
            onClick={() => setOpenSection(null)}
          >
            ✕
          </button>
        </div>

        {/* 產品資訊 */}
        {openSection === "info" && (
          <>
            <div className="space-y-4 mt-10">
              <h1 className="text-2xl font-bold">產品資訊</h1>
              <p className="text-gray-500 leading-10">
                這款桌子以簡約設計為核心，搭配俐落線條與深色木質質感，無論是作為餐桌、書桌或會議桌都能完美融入各種空間。四隻圓錐形桌腳設計，提供穩固支撐，展現北歐風格的經典魅力。
              </p>

              <h3 className="text-xl font-bold">安全與法規</h3>
              <p className="text-gray-500 leading-7">
                這張桌子經過測試並符合相關的強度和耐用性標準。
              </p>
            </div>
            <Accordion />
          </>
        )}

        {/* 產品尺寸 */}
        {openSection === "size" && (
          <>
            <div className="space-y-4 mt-10">
              <h3 className="text-2xl font-bold">尺寸</h3>
              <table className="w-full mt-8 border-t-1 border-t-gray-300">
                <tbody className="my-2 justify-around text-gray-600">
                  <tr className="border-b-1 border-b-gray-300">
                    <td className="py-2 pl-3">長度:</td>
                    <td>75公分</td>
                  </tr>
                  <tr className="border-b-1 border-b-gray-300">
                    <td className="py-2 pl-3">寬度:</td>
                    <td>70公分</td>
                  </tr>
                  <tr>
                    <td className="py-2 pl-3">高度:</td>
                    <td>120公分</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-8 border-b-1 border-b-gray-300 ">
                <div className="flex justify-center items-center bg-red-400 mb-6 rounded-md">
                  <GiPencilRuler size={20} color="white" />
                  <p className="ml-2 text-lg text-white">可依需求客製</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
