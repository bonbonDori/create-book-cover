// 导入需要的类
import { Canvas, IText } from 'fabric';
import { useEffect, useRef } from 'react';
import type { CoverConfig } from '../../../types/CoverConfig';

interface Props { config: CoverConfig; }

export default function CoverPreview({ config }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // 类型定义
  const fabricRef = useRef<Canvas | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // 初始化：第一个参数就是 HTMLCanvasElement
    const canvas = new Canvas(canvasRef.current, {
      width: 400,
      height: 600,
      backgroundColor: config.bgColor,
    });

    const titleText = new IText(config.title, {
      left: 200,
      top: 150,
      originX: 'center',
      fontSize: config.fontSize,
      name: 'titleText',
    });

    canvas.add(titleText);
    fabricRef.current = canvas;

    return () => {
      // 销毁
      canvas.dispose();
    };
  }, []);

  // 响应式更新
  useEffect(() => {
    const canvas = fabricRef.current;
    if (!canvas) return;

    // setBackgroundColor，直接传参
    canvas.set({ backgroundColor: config.bgColor });

    const titleObj = canvas.getObjects().find(obj => obj.name === 'titleText') as IText;
    if (titleObj) {
      titleObj.set({
        text: config.title,
        fontSize: config.fontSize,
      });
    }

    canvas.renderAll();
  }, [config]);

  return <canvas ref={canvasRef} />;
};
