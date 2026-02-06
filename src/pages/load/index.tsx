import LoadingIcon from '../../assets/icons/loading.svg?react'

export default function LoadPage() {
  return (
    <>
      <div className="w-screen h-screen items-center">
        <div className="flex flex-col gap-8 items-center justify-center pt-[16%]">
          <div>
            {/* @ts-expect-error BOS */}
            <LoadingIcon width="120px" height="120px" />
          </div>

          <div className='text-[44px] text-black font-bold'>
            Loading......
          </div>
        </div>
      </div>
    </>
  )
};
