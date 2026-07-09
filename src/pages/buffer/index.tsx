import { useState } from "react";
import GoIcon from '../../assets/icons/go.svg?react'
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css'

export default function BufferPage() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    navigate('/fabricate')
  }

  return (
    <>
      <div className="p-3 text-black w-screen h-screen">
        <div className='h-full w-full flex flex-col justify-end items-center'>
          <div className='flex flex-col gap-2 justify-start pb-10'>
            <div className="flex flex-row gap-25 text-[224px] font-bold">
              <span>.读.</span>
              <span>万卷书</span>
            </div>

            <div className='flex flex-row justify-start items-center gap-5'>
              <div className='text-[24px] font-semibold'>
                见已读书, 如逢故人
              </div>

              <div
                className={styles.btn}
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className='text-[16px]'>编辑封面</div>
                {/* @ts-expect-error BOS */}
                <GoIcon fill={isHovered ? 'white' : 'black'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
