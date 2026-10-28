export const C={width:1.778,length:3.556,R:.02625,m:.142,g:9.81,slide:.20,roll:.009,spin:.008,ballE:.94,ballMu:.035,railE:.78,railMu:.18,dt:1/480,maxSpeed:4.5};
export type V=[number,number,number];
export const pockets: [number,number][]=[[-C.width/2,-C.length/2],[C.width/2,-C.length/2],[-C.width/2,0],[C.width/2,0],[-C.width/2,C.length/2],[C.width/2,C.length/2]];
export type Segment={a:[number,number];b:[number,number]};
// Shared cushion noses and angled jaws; physical and rendered geometry use these exact segments.
export const rails:Segment[]=[];
const W=C.width/2,L=C.length/2,gap=.085;
for(const x of [-W,W])for(const s of [-1,1]){let a:[number,number]=[x,s*gap],b:[number,number]=[x,s*(L-gap)];rails.push({a,b},{a,b:[x+Math.sign(x)*.055,s*.035]},{a:b,b:[x+Math.sign(x)*.055,s*(L-.035)]});}
for(const y of [-L,L]){rails.push({a:[-W+gap,y],b:[W-gap,y]},{a:[-W+gap,y],b:[-W+.035,y+Math.sign(y)*.055]},{a:[W-gap,y],b:[W-.035,y+Math.sign(y)*.055]});}
