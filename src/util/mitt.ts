/**
 * npm i mitt
 * 事件总线
 */
import mitt from "mitt";
// 实例化一个事件总线
export const emitter = mitt()

// type Events = {
//     foo: string;
//     bar?: number;
// }
// const emitter = mitt<Events>();
// emitter.on('foo', (e) => {})
// emitter.emit('foo', 'var')