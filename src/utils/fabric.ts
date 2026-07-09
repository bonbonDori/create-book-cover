import type { FabricObject } from 'fabric';

/**
 * 通用类型守卫：判断 Fabric 对象是否包含某个特定的自定义属性
 * @param obj Fabric 对象
 * @param prop 想要检查的属性名
 */
export function hasProperty<T extends FabricObject, K extends string>(
  obj: T,
  prop: K
): obj is T & Record<K, any> {
  return obj && typeof obj === 'object' && prop in obj;
}
