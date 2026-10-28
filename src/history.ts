import {clone,type State,type Shot} from './state';
export type Recording={before:State;shot:Shot;frames:State[]};
export function save(state:State,shot:Shot){localStorage.setItem('billiards-lab',JSON.stringify({version:1,state,shot}));}
export function load():{state:State;shot:Shot}|null{const text=localStorage.getItem('billiards-lab');if(!text)return null;const x=JSON.parse(text);if(x.version!==1||!Array.isArray(x.state?.balls)||x.state.balls.length>40)throw Error('存档版本或格式不支持');for(const b of x.state.balls)if(![...b.p,...b.v,...b.w,...b.q,b.mass,b.radius].every(Number.isFinite)||b.mass<=0||b.radius<=0)throw Error('存档数值无效');return clone(x);}
