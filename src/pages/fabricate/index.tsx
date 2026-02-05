import Footer from '../common/Fabricate/Footer';
import { useToPng } from '@hugocxl/react-to-image'

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';

// TODO：需要一个尺寸说明、素材来源说明

export default function FabricatePage() {
  const [state, convert, ref] = useToPng<HTMLDivElement>({
    quality: 0.8,
    onSuccess: (base64: string) => {
      const link = document.createElement('a');
      link.download = 'my-image-name';
      link.href = base64;
      link.click();
    }
  })

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="p-3 w-screen h-screen flex flex-col justify-between">
        <div className="grid grid-cols-12 w-full h-full">
          <div className="col-start-3 col-span-8 pt-23.5">
            <div className="flex flex-row justify-between gap-8">
              {/* 编辑 */}
              <div className="flex flex-col gap-[16px] bg-black rounded-[16px] p-[24px]">
                <div className="title-area flex flex-row justify-between items-center px-[12px]">
                  <div className="title text-white font-bold text-[16px]">
                    封面选项
                  </div>

                  <div className="explain-ico">
                    <div className="w-[20px] h-[20px] bg-[#E5E5E5] rounded-4xl" />
                  </div>
                </div>

                <div className="options bg-[#6B6B6B] rounded-[6px] w-full">
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Age</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={age}
                      label="Size"
                      onChange={handleChange}
                    >
                      {/* <MenuItem value="">
                        <em>None</em>
                      </MenuItem> */}
                      <MenuItem value={1271}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>


              </div>

              <div>
                {/* 内容 */}
                {/* <div className="bg-green-600 w-20 h-30" ref={ref} /> */}
                <button onClick={convert}>下载</button>
              </div>
            </div>
          </div>

        </div>

        <Footer />
      </div>

    </>
  )

}
