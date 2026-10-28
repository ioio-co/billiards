import {predict} from './aim';
self.onmessage=e=>{const {id,state,shot}=e.data;self.postMessage({id,paths:predict(state,shot)});};
