import {C,type V} from './config';
export type Ball={id:number;color:string;p:V;v:V;w:V;q:[number,number,number,number];radius:number;mass:number;inertia:number;state:'rest'|'slide'|'roll'|'spin'|'fall'|'pocket';};
export type State={balls:Ball[];time:number};
export type Shot={angle:number;power:number;sx:number;sy:number};
export const clone=<T>(x:T):T=>structuredClone(x);
export function ball(id:number,color:string,x:number,y:number):Ball{return {id,color,p:[x,y,C.R],v:[0,0,0],w:[0,0,0],q:[0,0,0,1],radius:C.R,mass:C.m,inertia:2*C.m*C.R*C.R/5,state:'rest'};}
export function initial():State{return {time:0,balls:[ball(0,'#fff9e5',0,.98),ball(1,'#f06278',.035,.27),ball(2,'#182026',.5,.4),ball(3,'#1685c5',-.42,-.38),ball(4,'#e4b72c',-.53,-1.15),ball(5,'#854131',-.13,-1.25),ball(6,'#24897c',.28,-1.35)]};}
export const moving=(s:State)=>s.balls.some(b=>!['rest','pocket'].includes(b.state));
