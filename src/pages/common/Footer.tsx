export default function Footer() {

  return (
    <>
      <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-md">
        <div className="top w-full h-px bg-[#E5E5E5]" />

        <div className="bottom flex flex-row justify-between items-center w-full px-60 pt-4 pb-4">
          <div className="left flex flex-col gap-1.5">
            <div className="logo w-8 h-8 rounded-full bg-black" />
            <div className="text-[14px] text-gray-500">
              © 2026 - All rights reserved
            </div>
          </div>

          <div className="flex flex-col gap-3 text-[14px]">
            <div className="text-[#c0c8d4] font-bold">
              LINKS
            </div>

            <div className="flex flex-col gap-1 text-black font-normal">
              <div
                className="cursor-pointer"
              >
                说明
              </div>

              <div
                className="cursor-pointer"
              >
                联系作者
              </div>

              <div
                className="cursor-pointer"
              >
                一杯咖啡
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
