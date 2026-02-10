import Footer from '../common/Fabricate/Footer';
import { useToPng } from '@hugocxl/react-to-image'

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import type { SelectChangeEvent } from '@mui/material/Select';

// TODO：需要一个尺寸说明、素材来源说明
// TODO：更新完记得看一下有没有自动部署

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

  console.log('statttttt', state)

  const [size, setSize] = React.useState('');
  const [cover, setCover] = React.useState('');
  const [construct, setConstruct] = React.useState('');

  const handleSizeChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setSize(event.target.value);
  };

  const handleConstructChange = (event: SelectChangeEvent) => {
    setConstruct(event.target.value);
  }

  const handleCoverChange = (event: SelectChangeEvent) => {
    setCover(event.target.value);
  }

  return (
    <>
      <div className="p-3 w-screen h-screen flex flex-col justify-between">
        <div className="grid grid-cols-12 w-full h-full">
          <div className="col-start-3 col-span-8 pt-23.5">
            <div className="grid grid-cols-8 gap-5">
              {/* 编辑 */}
              <div className="col-span-4 flex flex-col gap-6 bg-[#f7f7f7] border-2 border-[#e5e5e5] rounded-2xl p-6">
                <div className='flex flex-col gap-3'>
                  <div className="title-area flex flex-row justify-between items-center px-3">
                    <div className="title text-black font-bold text-[16px]">
                      封面选项
                    </div>

                    <div className="explain-ico">
                      <div className="w-5 h-5 bg-[#E5E5E5] rounded-4xl" />
                    </div>
                  </div>

                  <div className='cut-off w-full h-px bg-[#E5E5E5]' />
                </div>


                <div className="options w-full">
                  <div className='px-3 flex flex-col gap-6'>
                    <FormControl fullWidth>
                      <InputLabel id="demo-select-small-label">尺寸</InputLabel>
                      <Select
                        labelId="bg-select-label"
                        id="bg-select-small"
                        value={size}
                        label="Size"
                        onChange={handleSizeChange}
                      >
                        <MenuItem value={1}>kpw6</MenuItem>
                        <MenuItem value={2}>Osis</MenuItem>
                        <MenuItem value={3}>默认</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl fullWidth>
                      <InputLabel id="demo-select-small-label">构图</InputLabel>
                      <Select
                        labelId="bg-select-label"
                        id="bg-select-small"
                        value={construct}
                        label="Construct"
                        onChange={handleConstructChange}
                      >
                        <MenuItem value={100}>居中</MenuItem>
                        <MenuItem value={200}>顶部</MenuItem>
                        <MenuItem value={300}>极简</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl fullWidth>
                      <InputLabel id="demo-select-small-label">背景</InputLabel>
                      <Select
                        labelId="bg-select-label"
                        id="bg-select-small"
                        value={cover}
                        label="Cover"
                        onChange={handleCoverChange}
                      >
                        <MenuItem value={101}>灰白</MenuItem>
                        <MenuItem value={202}>淡黑</MenuItem>
                        <MenuItem value={303}>菱格</MenuItem>
                        <MenuItem value={404}>Cyber</MenuItem>
                      </Select>
                    </FormControl>

                    <TextField id="outlined-basic" label="书名" variant="outlined" />
                    <TextField id="outlined-basic" label="作者" variant="outlined" />
                  </div>

                </div>


              </div>

              <div className='col-span-4 rounded-2xl border-2 border-[#e5e5e5] flex flex-col gap-3 justify-end items-center p-5'>
                {/* 内容 */}
                <div className='preview-co'>
                  <div className=''>

                  </div>
                </div>
                <div className="bg-black w-full h-full rounded-[6px]" ref={ref} />

                <div>

                </div>
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
