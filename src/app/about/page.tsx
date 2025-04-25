import Image from "next/image";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import about from "@/public/images/about.jpeg";
import about2 from "@/public/images/about2.jpeg";

export default function About() {
  return (
    <>
      <Breadcrumbs />
      <div className="flex w-full flex-col items-center gap-16 px-4">
        {/* 區塊一 */}
        <div className="flex w-full max-w-8xl gap-10">
          <div className="flex-1 relative aspect-[4/3]">
            <Image
              src={about}
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center xl:px-10">
            <h1 className="text-xl font-bold mb-2 xl:text-4xl">關於我</h1>
            <p className="xl:text-2xl">
              在生活的每一刻，我都相信「細節，決定質感」。
              我熱愛觀察生活裡微小卻動人的片段，並將它們轉化為空間與物件的溫度。這個平台，是我分享靈感與作品的小角落，希望能與你共創更多美好的日常風景。
            </p>
          </div>
        </div>

        {/* 區塊二 */}
        <div className="flex w-full max-w-8xl gap-10 ">
          <div className="flex-1 flex flex-col justify-center xl:px-10">
            <h1 className="text-xl font-bold mb-2 xl:text-4xl">我的理念</h1>
            <p className="xl:text-2xl">
              簡約，不是空白，而是留白。
              我相信設計的本質，是為了讓生活更輕盈自在。無論是一盞燈、一只花器，或一張椅子，它們不只是物品，而是情感的延伸。透過設計，我想讓人們重新找回對家的歸屬感與溫柔。
            </p>
          </div>
          <div className="flex-1 relative aspect-[4/3]">
            <Image
              src={about2}
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
