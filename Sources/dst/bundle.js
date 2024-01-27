(()=>{"use strict";var t={187:t=>{function e(t,e,i){i=i||2;var s,h,o,l,c,x,g,y=e&&e.length,f=y?e[0]*i:t.length,v=n(t,0,f,i,!0),d=[];if(!v||v.next===v.prev)return d;if(y&&(v=function(t,e,i,r){var s,h,o,l=[];for(s=0,h=e.length;s<h;s++)(o=n(t,e[s]*r,s<h-1?e[s+1]*r:t.length,r,!1))===o.next&&(o.steiner=!0),l.push(p(o));for(l.sort(a),s=0;s<l.length;s++)i=u(l[s],i);return i}(t,e,v,i)),t.length>80*i){s=o=t[0],h=l=t[1];for(var P=i;P<f;P+=i)(c=t[P])<s&&(s=c),(x=t[P+1])<h&&(h=x),c>o&&(o=c),x>l&&(l=x);g=0!==(g=Math.max(o-s,l-h))?32767/g:0}return r(v,d,i,s,h,g,0),d}function n(t,e,n,i,r){var s,h;if(r===B(t,e,n,i)>0)for(s=e;s<n;s+=i)h=M(s,t[s],t[s+1],h);else for(s=n-i;s>=e;s-=i)h=M(s,t[s],t[s+1],h);return h&&v(h,h.next)&&(Z(h),h=h.next),h}function i(t,e){if(!t)return t;e||(e=t);var n,i=t;do{if(n=!1,i.steiner||!v(i,i.next)&&0!==f(i.prev,i,i.next))i=i.next;else{if(Z(i),(i=e=i.prev)===i.next)break;n=!0}}while(n||i!==e);return e}function r(t,e,n,a,u,c,p){if(t){!p&&c&&function(t,e,n,i){var r=t;do{0===r.z&&(r.z=x(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,function(t){var e,n,i,r,s,h,o,l,a=1;do{for(n=t,t=null,s=null,h=0;n;){for(h++,i=n,o=0,e=0;e<a&&(o++,i=i.nextZ);e++);for(l=a;o>0||l>0&&i;)0!==o&&(0===l||!i||n.z<=i.z)?(r=n,n=n.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,a*=2}while(h>1)}(r)}(t,a,u,c);for(var g,y,f=t;t.prev!==t.next;)if(g=t.prev,y=t.next,c?h(t,a,u,c):s(t))e.push(g.i/n|0),e.push(t.i/n|0),e.push(y.i/n|0),Z(t),t=y.next,f=y.next;else if((t=y)===f){p?1===p?r(t=o(i(t),e,n),e,n,a,u,c,2):2===p&&l(t,e,n,a,u,c):r(i(t),e,n,a,u,c,1);break}}}function s(t){var e=t.prev,n=t,i=t.next;if(f(e,n,i)>=0)return!1;for(var r=e.x,s=n.x,h=i.x,o=e.y,l=n.y,a=i.y,u=r<s?r<h?r:h:s<h?s:h,c=o<l?o<a?o:a:l<a?l:a,x=r>s?r>h?r:h:s>h?s:h,p=o>l?o>a?o:a:l>a?l:a,y=i.next;y!==e;){if(y.x>=u&&y.x<=x&&y.y>=c&&y.y<=p&&g(r,o,s,l,h,a,y.x,y.y)&&f(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function h(t,e,n,i){var r=t.prev,s=t,h=t.next;if(f(r,s,h)>=0)return!1;for(var o=r.x,l=s.x,a=h.x,u=r.y,c=s.y,p=h.y,y=o<l?o<a?o:a:l<a?l:a,v=u<c?u<p?u:p:c<p?c:p,d=o>l?o>a?o:a:l>a?l:a,P=u>c?u>p?u:p:c>p?c:p,b=x(y,v,e,n,i),m=x(d,P,e,n,i),w=t.prevZ,M=t.nextZ;w&&w.z>=b&&M&&M.z<=m;){if(w.x>=y&&w.x<=d&&w.y>=v&&w.y<=P&&w!==r&&w!==h&&g(o,u,l,c,a,p,w.x,w.y)&&f(w.prev,w,w.next)>=0)return!1;if(w=w.prevZ,M.x>=y&&M.x<=d&&M.y>=v&&M.y<=P&&M!==r&&M!==h&&g(o,u,l,c,a,p,M.x,M.y)&&f(M.prev,M,M.next)>=0)return!1;M=M.nextZ}for(;w&&w.z>=b;){if(w.x>=y&&w.x<=d&&w.y>=v&&w.y<=P&&w!==r&&w!==h&&g(o,u,l,c,a,p,w.x,w.y)&&f(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;M&&M.z<=m;){if(M.x>=y&&M.x<=d&&M.y>=v&&M.y<=P&&M!==r&&M!==h&&g(o,u,l,c,a,p,M.x,M.y)&&f(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function o(t,e,n){var r=t;do{var s=r.prev,h=r.next.next;!v(s,h)&&d(s,r,r.next,h)&&m(s,h)&&m(h,s)&&(e.push(s.i/n|0),e.push(r.i/n|0),e.push(h.i/n|0),Z(r),Z(r.next),r=t=h),r=r.next}while(r!==t);return i(r)}function l(t,e,n,s,h,o){var l=t;do{for(var a=l.next.next;a!==l.prev;){if(l.i!==a.i&&y(l,a)){var u=w(l,a);return l=i(l,l.next),u=i(u,u.next),r(l,e,n,s,h,o,0),void r(u,e,n,s,h,o,0)}a=a.next}l=l.next}while(l!==t)}function a(t,e){return t.x-e.x}function u(t,e){var n=function(t,e){var n,i=e,r=t.x,s=t.y,h=-1/0;do{if(s<=i.y&&s>=i.next.y&&i.next.y!==i.y){var o=i.x+(s-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(o<=r&&o>h&&(h=o,n=i.x<i.next.x?i:i.next,o===r))return n}i=i.next}while(i!==e);if(!n)return null;var l,a=n,u=n.x,x=n.y,p=1/0;i=n;do{r>=i.x&&i.x>=u&&r!==i.x&&g(s<x?r:h,s,u,x,s<x?h:r,s,i.x,i.y)&&(l=Math.abs(s-i.y)/(r-i.x),m(i,t)&&(l<p||l===p&&(i.x>n.x||i.x===n.x&&c(n,i)))&&(n=i,p=l)),i=i.next}while(i!==a);return n}(t,e);if(!n)return e;var r=w(n,t);return i(r,r.next),i(n,n.next)}function c(t,e){return f(t.prev,t,e.prev)<0&&f(e.next,t,t.next)<0}function x(t,e,n,i,r){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-n)*r|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function p(t){var e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t);return n}function g(t,e,n,i,r,s,h,o){return(r-h)*(e-o)>=(t-h)*(s-o)&&(t-h)*(i-o)>=(n-h)*(e-o)&&(n-h)*(s-o)>=(r-h)*(i-o)}function y(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&d(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&(m(t,e)&&m(e,t)&&function(t,e){var n=t,i=!1,r=(t.x+e.x)/2,s=(t.y+e.y)/2;do{n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next}while(n!==t);return i}(t,e)&&(f(t.prev,t,e.prev)||f(t,e.prev,e))||v(t,e)&&f(t.prev,t,t.next)>0&&f(e.prev,e,e.next)>0)}function f(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function v(t,e){return t.x===e.x&&t.y===e.y}function d(t,e,n,i){var r=b(f(t,e,n)),s=b(f(t,e,i)),h=b(f(n,i,t)),o=b(f(n,i,e));return r!==s&&h!==o||(!(0!==r||!P(t,n,e))||(!(0!==s||!P(t,i,e))||(!(0!==h||!P(n,t,i))||!(0!==o||!P(n,e,i)))))}function P(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function b(t){return t>0?1:t<0?-1:0}function m(t,e){return f(t.prev,t,t.next)<0?f(t,e,t.next)>=0&&f(t,t.prev,e)>=0:f(t,e,t.prev)<0||f(t,t.next,e)<0}function w(t,e){var n=new T(t.i,t.x,t.y),i=new T(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function M(t,e,n,i){var r=new T(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Z(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function T(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function B(t,e,n,i){for(var r=0,s=e,h=n-i;s<n;s+=i)r+=(t[h]-t[s])*(t[s+1]+t[h+1]),h=s;return r}t.exports=e,t.exports.default=e,e.deviation=function(t,e,n,i){var r=e&&e.length,s=r?e[0]*n:t.length,h=Math.abs(B(t,0,s,n));if(r)for(var o=0,l=e.length;o<l;o++){var a=e[o]*n,u=o<l-1?e[o+1]*n:t.length;h-=Math.abs(B(t,a,u,n))}var c=0;for(o=0;o<i.length;o+=3){var x=i[o]*n,p=i[o+1]*n,g=i[o+2]*n;c+=Math.abs((t[x]-t[g])*(t[p+1]-t[x+1])-(t[x]-t[p])*(t[g+1]-t[x+1]))}return 0===h&&0===c?0:Math.abs((c-h)/h)},e.flatten=function(t){for(var e=t[0][0].length,n={vertices:[],holes:[],dimensions:e},i=0,r=0;r<t.length;r++){for(var s=0;s<t[r].length;s++)for(var h=0;h<e;h++)n.vertices.push(t[r][s][h]);r>0&&(i+=t[r-1].length,n.holes.push(i))}return n}}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};(()=>{n.r(i),n.d(i,{Point:()=>t,Polygon:()=>h,Search:()=>p});const t=class{constructor(t,e){this.y=t,this.x=e}arePointsEqual(t){return Math.abs(t.x-this.x)<=1e-5&&Math.abs(t.y-this.y)<=1e-5}distancef(t){return Math.sqrt((this.x-t.x)*(this.x-t.x)+(this.y-t.y)*(this.y-t.y))}static areSegmentsIntersecting(t,e,n,i){const r=(t,e,n)=>{const i=(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y);return 0===i?0:i>0?1:2},s=(t,e,n)=>e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y),h=r(t,e,n),o=r(t,e,i),l=r(n,i,t),a=r(n,i,e);return h!==o&&l!==a||(!(0!==h||!s(t,n,e))||(!(0!==o||!s(t,i,e))||(!(0!==l||!s(n,t,i))||!(0!==a||!s(n,e,i)))))}};var e=n(187);const r=class{constructor(t,e,n,i=0){this.a=t,this.b=e,this.c=n,this.id=i,this.neighbours=[]}calculateTriangleArea(t,e,n){return Math.abs((t.x*(e.y-n.y)+e.x*(n.y-t.y)+n.x*(t.y-e.y))/2)}isPointInside(t){const e=this.calculateTriangleArea(this.a,this.b,this.c),n=this.calculateTriangleArea(t,this.b,this.c),i=this.calculateTriangleArea(this.a,t,this.c),r=this.calculateTriangleArea(this.a,this.b,t);return Math.abs(n+i+r-e)<Number.EPSILON}_display(){let t=`id: ${this.id}, neigh: `,e=[];for(let t=0,n=this.neighbours.length;t<n;t++)e.push(this.neighbours[t].id);console.log(t+e.join(", "))}displayNeighbours(t=!1){if(t){let t={};this.displayNeighbours_t(t)}else this._display()}displayEdges(){console.log(`(${this.a.y},${this.a.x}),(${this.b.y},${this.b.x}),(${this.c.y},${this.c.x}),(${this.a.y},${this.a.x})`)}displayNeighbours_t(t={}){if(!(this.id in t)){t[this.id]=1,this._display();for(let e=0,n=this.neighbours.length;e<n;e++)this.neighbours[e].displayNeighbours_t(t)}}midPoint(){return new t((this.a.y+this.b.y+this.c.y)/3,(this.a.x+this.b.x+this.c.x)/3)}midDistance(t){return this.midPoint().distancef(t.midPoint())}doesTriangleHavePoint(t){return this.a.arePointsEqual(t)||this.b.arePointsEqual(t)||this.c.arePointsEqual(t)}disjointPoints(t){let e=[],n=[this.a,this.b,this.c];for(let i=0,r=n.length;i<r;i++)t.doesTriangleHavePoint(n[i])||e.push(n[i]);return e}disjointPointsFromPoint(t){let e=[],n=[this.a,this.b,this.c];for(let i=0,r=n.length;i<r;i++)t.arePointsEqual(n[i])||e.push(n[i]);return e}commonPoints(t){let e=[],n=[this.a,this.b,this.c];for(let i=0,r=n.length;i<r;i++)t.doesTriangleHavePoint(n[i])&&e.push(n[i]);return e}areTriangleNeighbours(t){return(this.a.arePointsEqual(t.a)?1:0)+(this.a.arePointsEqual(t.b)?1:0)+(this.a.arePointsEqual(t.c)?1:0)+(this.b.arePointsEqual(t.a)?1:0)+(this.b.arePointsEqual(t.b)?1:0)+(this.b.arePointsEqual(t.c)?1:0)+(this.c.arePointsEqual(t.a)?1:0)+(this.c.arePointsEqual(t.b)?1:0)+(this.c.arePointsEqual(t.c)?1:0)>=2}};const s=class{constructor(t){this.triangles=[],this.polygon=t,this.triangleID=0}createTriangles(t){const e=this.polygon;for(let n=0,i=t.length;n<i;n+=3)this.triangles.push(new r(e[t[n]],e[t[n+1]],e[t[n+2]],this.triangleID++))}createNeighbours(){this.triangles.length&&this.createNeighbours_t(this.triangles[0],{})}createNeighbours_t(t,e={}){if(!(t.id in e)){e[t.id]=1;for(let e=0,n=this.triangles.length;e<n;e++)this.triangles[e].id!=t.id&&t.areTriangleNeighbours(this.triangles[e])&&t.neighbours.push(this.triangles[e]);for(let n=0,i=t.neighbours.length;n<i;n++)this.createNeighbours_t(t.neighbours[n],e)}}triangulate(){let t=[];for(let e=0;e<this.polygon.length-1;e++)t.push(this.polygon[e].y),t.push(this.polygon[e].x);this.createTriangles(e(t)),this.createNeighbours()}getTriangle(t){const e=this.triangles;for(let n=0,i=e.length;n<i;n++)if(this.triangles[n].displayEdges(),console.log(e[n].isPointInside(t),t),e[n].isPointInside(t))return e[n];return null}};const h=class{constructor(t=[]){this.lines=t,this.holes=[],this.autocompletePointDistance=3,this.complete=!1,this.navmesh=null}_canPointBePushed(e,n=0){if(this.lines.length<=2)return!0;for(let i=n,r=this.lines.length-2;i<r;i++)if(t.areSegmentsIntersecting(this.lines[i],this.lines[i+1],this.lines[r+1],e))return!1;return!0}doesSegmentIntersects(e,n){for(let i=0,r=this.lines.length;i<r;i++)if(t.areSegmentsIntersecting(this.lines[i],this.lines[(i+1)%r],e,n))return!0;return!1}push(e,n,i=!1){if(this.complete)return!0;const r=new t(e,n);return!(!i&&!this._canPointBePushed(r))&&(this.lines.push(r),!0)}static print(t){let e=[];for(let n=0,i=t.lines.length;n<i;n++)e.push(`(${t.lines[n].y},${t.lines[n].x})`);console.log(e.join(","))}distancef(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))}getClosestPoint(t){for(let e=0,n=this.lines.length-1;e<n;e++)if(t.distancef(this.lines[e])<=this.autocompletePointDistance)return[e,this.lines[e]];return null}closePolygon(){if(this.complete||this.lines.length<2)return!1;const t=this.lines[0];return!!this._canPointBePushed(t,1)&&(this.push(this.lines[0].y,this.lines[0].x,!0),this.complete=!0,!0)}getTriangle(t){return this.navmesh.getTriangle(t)}linesCount(){return Math.max(0,this.lines.length-1)}isPointInsidePolygon(t){let e=!1,n=this.lines;for(let i=0,r=n.length-1;i<n.length;r=i++){const s=n[i].x,h=n[i].y,o=n[r].x,l=n[r].y;h>t.y!=l>t.y&&t.x<(o-s)*(t.y-h)/(l-h)+s&&(e=!e)}return e}triangulate(){if(!this.complete)return[];this.navmesh=new s(this.lines),this.navmesh.triangulate()}getTriangleIndexes(){return this.navmesh?this.navmesh.triangles:null}display(){console.log(this.lines)}};const o=class{constructor(t){this.heap=[],this.heapComparer=t}push(t){this.heap.push(t),this.heapifyUp()}top(){return this.heap.length?this.heap[0]:null}size(){return this.heap.length}pop(){if(0===this.heap.length)return null;if(1===this.heap.length)return this.heap.pop();const t=this.heap[0];return this.heap[0]=this.heap.pop(),this.heapifyDown(),t}heapifyUp(){let t=this.heap.length-1;for(;t>0;){const e=Math.floor((t-1)/2);if(!this.heapComparer(this.heap[t],this.heap[e]))break;[this.heap[t],this.heap[e]]=[this.heap[e],this.heap[t]],t=e}}heapifyDown(){let t=0;for(;;){const e=2*t+1,n=2*t+2;let i=t;if(e<this.heap.length&&this.heapComparer(this.heap[e],this.heap[i])&&(i=e),n<this.heap.length&&this.heapComparer(this.heap[n],this.heap[i])&&(i=n),t===i)break;[this.heap[t],this.heap[i]]=[this.heap[i],this.heap[t]],t=i}}};const l=class{constructor(t,e,n){this.generateNeighbours=t,this.uniqueID=e,this.edgeCost=n,this.heap=new o(((t,e)=>t.cost<e.cost)),this.cost=null}search(t,e){return this.heap.push({node:t,cost:0,parent:null}),this.search_t(e)}retrieveNodes(t){let e=[];for(;t;)e.push(t.node),t=t.parent;return e.reverse()}search_t(t){let e={},n={};for(;this.heap.size();){let i=this.heap.top();const r=this.uniqueID(i.node);if(this.uniqueID(t)==r)return this.retrieveNodes(i);this.heap.pop(),e[r]=!0;let s=this.generateNeighbours(i.node);for(let t=0,r=s.length;t<r;t++){const r=this.uniqueID(s[t]);if(!(r in e)){const e=this.edgeCost(i.node,s[t])+i.cost;if(r in n&&n[r]<e)continue;this.heap.push({cost:e,node:s[t],parent:i}),n[r]=e}}}return null}};let a=0;const u=class{constructor(t,e,n=0){this.pointA=t,this.pointB=e,this.id=a++}jointPoints(t){let e=[],n=[this.pointA,this.pointB],i=[t.pointA,t.pointB];for(let t=0;t<2;t++)for(let r=0;r<2;r++)n[t].arePointsEqual(i[r])&&e.push(n[t]);return e}areLinesEqual(t){return 2==this.jointPoints(t).length}};class c{constructor(){}static midLines(t){let e=[];for(let n=0,i=t.length;n<i;n++)e.push(t[n].midPoint());return e}static doesMidLineIntersecLines(e,n,i){for(let r=0,s=i.length-1;r<s;r++)if(t.areSegmentsIntersecting(e,n,i[r],i[r+1]))return!0;return!1}static printFunnelLines(t){let e=[];for(let n=0;n<t.length;n++)e.push(`(${t[n].pointA.y},${t[n].pointA.x}),(${t[n].pointB.y},${t[n].pointB.x})`);console.log(e.join("\n"))}static print(t){let e=[],n=t.lines;for(let t=0,i=n.length;t<i;t++)e.push(`(${n[t].x},${n[t].y})`);console.log(e.join(","))}static printTrianglePoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){const i=t[n];let r=[i.a,i.b,i.c];for(let t=0;t<r.length;t++)for(let n=t+1;n<r.length;n++)e.push(`(${r[t].y},${r[t].x}),(${r[n].y},${r[n].x})`)}console.log(e.join(","))}static triangleToLines(t){let e=[t.a,t.b,t.c],n=[];for(let t=0;t<2;t++)for(let i=t+1;i<3;i++)n.push(new u(e[t],e[i]));return n}static getValidLinesFromTriangle(t,e=[]){let n=[];for(let e=0,i=t.length;e<i;e++)n=n.concat(c.triangleToLines(t[e]));for(let t=0,i=n.length;t<i;t++){let r=1;for(let e=0;e<i;e++)if(t!=e&&n[t].areLinesEqual(n[e])){r=0;break}r&&e.push(n[t])}}static sortHull_t(t,e,n=0,i=[]){for(let r=0,s=t.length;r<s;r++){const s=t[r].jointPoints(t[n]);r==n||1!=s.length||e[r]||(e[r]=1,i.push(s[0]),c.sortHull_t(t,e,r,i))}}static sortHull(t){let e=new Array(t.length).fill(0),n=[];e[0]=1,c.sortHull_t(t,e,0,n),n[0].arePointsEqual(t[0].pointA)?n.push(t[0].pointB):n.push(t[0].pointA);let i=new h;for(let t=0,e=n.length;t<e;t++)i.push(n[t].y,n[t].x);return i.closePolygon(0),i}static searchPath(t){let e=[];return c.getValidLinesFromTriangle(t,e),c.sortHull(e)}static rotatePoint(e,n,i){const r=Math.PI/180*i,s=(e.x-n.x)*Math.cos(r)-(e.y-n.y)*Math.sin(r)+n.x,h=(e.x-n.x)*Math.sin(r)+(e.y-n.y)*Math.cos(r)+n.y;return new t(h,s)}static construct_t(t){return 1!=t[0].disjointPoints(t[1]).length?null:c.searchPath(t)}static calculateBisectorPoints(e,n,i,r){const s=new t(n.y-e.y,n.x-e.x),h=new t(i.y-n.y,i.x-n.x),o=c.calculateBisectorVector(s,h),l=c.extendPoint(n,o,r);return[l,c.rotatePoint(l,n,180)]}static calculateBisectorVector(e,n){const i=(Math.atan2(e.y,e.x)+Math.atan2(n.y,n.x)+Math.PI)/2;return new t(Math.sin(i),Math.cos(i))}static extendPoint(e,n,i){return new t(e.y+n.y*i,e.x+n.x*i)}static constructBisectorsArray(t){let e=[],n=t.lines;for(let i=0,r=n.length-1;i<r;i++){let s=n[i],h=n[(i+1)%r],o=n[(i+2)%r],l=c.calculateBisectorPoints(s,h,o,.01);for(let n=0;n<2;n++)if(t.isPointInsidePolygon(l[n])){e.push(new u(h,l[n]));break}}return e}static construct(t){return t.length?1==t.length?new h(t[0].a,t[0].b,t[0].c):c.construct_t(t):null}}const x=c;const p=class{constructor(t){this.polygon=t,this.polygon&&(this.navmesh=t.navmesh),this.aStar=new l((t=>t.neighbours),(t=>t.id),((t,e)=>t.midDistance(e)))}search(t,e){return this.aStar.search(t,e)}getNextPoint(t,e,n){let i=e;for(let r=e,s=n.length;r<s&&!this.polygon.doesSegmentIntersects(t,n[r].midPoint());r++)i=r;return i}printBisector(t){console.log(`(${t.pointA.y},${t.pointA.x}),(${t.pointB.y},${t.pointB.x})`)}searchFunnelPoints_t(t,e,n,i){return new l((n=>{let r=[];for(let i=0,s=e.length;i<s;i++)t.doesSegmentIntersects(n.pointB,e[i].pointB)||r.push(e[i]);return t.doesSegmentIntersects(n.pointB,i.pointB)||r.push(i),r}),(t=>t.id),((t,e)=>t.pointB.distancef(e.pointB))).search(n,i)}searchFunnelPoints(e,n,i){let r=x.constructBisectorsArray(e);return this.searchFunnelPoints_t(e,r,new u(new t(-5,-5),new t(n.y,n.x)),new u(new t(-5,-5),new t(i.y,i.x)))}getPointsPathFromTriangle(t,e,n,i){let r=this.search(t,e),s=x.construct(r),h=this.searchFunnelPoints(s,n,i);if(!h)return null;let o=[];for(let t=0,e=h.length;t<e;t++)o.push(h[t].pointB);return o}getPointsPath(t,e){const n=this.polygon.getTriangle(t);if(!n)return null;const i=this.polygon.getTriangle(e);return console.log("PIZDA",e,i),i?this.getPointsPathFromTriangle(n,i,t,e):null}}})(),module.exports=i})();