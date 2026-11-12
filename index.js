(function(){
var $=function(id){return document.getElementById(id);};
// Fonts load asynchronously so a slow font request can never delay or block the animation
var fl0=document.createElement('link');fl0.rel='stylesheet';fl0.href='https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@500&family=Alegreya+Sans:wght@500&family=IBM+Plex+Mono:wght@400;500&display=swap';document.head.appendChild(fl0);
var matrix=document.getElementById('matrix'),mctx=matrix.getContext('2d'),drops=[],fontSize=16;
function resizeMatrix(){var dpr=Math.min(window.devicePixelRatio||1,2);matrix.width=Math.floor(innerWidth*dpr);matrix.height=Math.floor(innerHeight*dpr);mctx.setTransform(dpr,0,0,dpr,0,0);var cols=Math.ceil(innerWidth/fontSize);drops=Array.from({length:cols},function(){return Math.random()*innerHeight/fontSize;});}
function drawMatrix(){mctx.fillStyle='rgba(3,10,5,.09)';mctx.fillRect(0,0,innerWidth,innerHeight);mctx.fillStyle='rgba(47,207,85,.55)';mctx.font=fontSize+'px monospace';drops.forEach(function(y,i){var digit=Math.random()<.5?'0':'1';mctx.fillText(digit,i*fontSize,y*fontSize);if(y*fontSize>innerHeight&&Math.random()>.975)drops[i]=0;else drops[i]+=.2;});requestAnimationFrame(drawMatrix);}
resizeMatrix();addEventListener('resize',resizeMatrix);drawMatrix();
document.getElementById('copyright-year').textContent=new Date().getFullYear();var W=240,H=200;
var stops=[["Brussels",4.35,50.85,1988],["Boumerdès",3.47,36.76,1991],["Toulouse",1.44,43.60,2013],["Rennes",-1.68,48.11,2014],["Rome",12.50,41.90,2016],["Rennes",-1.68,48.11,2017],["Paris",2.35,48.86,2018],["Blois",1.33,47.59,2026]];
var MS=[[2013,"State Engineer"],[2014,"Master of Science"],[2019,"Doctor of Philosophy"]];
var LB=[[0,12,-6,0],[1,12,18,0],[2,12,4,0],[3,-12,4,1],[4,12,4,0],[6,12,-6,0],[7,12,12,0]]; // stop, dx, dy, align right
var n=stops.length;
function P(lon,lat){return [(lon+10)/26*W,(52-lat)/19*H];}

var land=[
[[-5.35,36.1],[-4.4,36.7],[-3,36.75],[-2.2,36.7],[-1.6,37.1],[-0.7,37.6],[-0.5,38.3],[0.2,38.7],[-0.3,39.5],[0,40],[0.8,40.7],[1.2,41.1],[2.2,41.4],[3.2,41.9],[3.3,42.3],[3,42.7],[3.1,43.1],[3.7,43.4],[4.6,43.4],[5.4,43.3],[5.9,43.1],[6.6,43.1],[7,43.5],[7.5,43.8],[8.1,43.9],[8.9,44.4],[9.8,44.1],[10.3,43.5],[10.5,42.9],[11.1,42.4],[11.8,42.1],[12.3,41.7],[13.2,41.3],[14,40.9],[14.2,40.7],[14.8,40.6],[15.6,40],[15.8,39.3],[16.1,38.8],[15.7,38],[16.05,37.93],[16.55,38.5],[16.6,38.9],[17.15,39],[17.15,39.4],[16.5,39.65],[16.6,40.1],[17,40.4],[17.5,40.3],[18,40.05],[18.35,39.8],[18.5,40.1],[18,40.65],[16.85,41.1],[15.9,41.6],[16.2,41.9],[15,42],[14.2,42.45],[13.6,43.6],[12.6,44.1],[12.3,44.4],[12.5,44.95],[12.35,45.3],[13.75,45.65],[13.55,45.45],[13.85,44.85],[14.4,45.3],[14.9,44.6],[15.2,44.1],[15.9,43.7],[16.4,43.5],[18,43],[18,53],[4.7,53],[4.4,52],[3.6,51.4],[2.55,51.1],[1.6,50.9],[1.1,49.9],[0.1,49.5],[-0.35,49.3],[-1.2,49.4],[-1.25,49.7],[-1.95,49.72],[-1.85,49.2],[-1.55,48.7],[-2,48.65],[-2.3,48.7],[-3,48.8],[-3.5,48.8],[-4,48.7],[-4.77,48.33],[-4.5,48.35],[-4.73,48.04],[-4.37,47.8],[-3.4,47.7],[-3.1,47.5],[-2.5,47.5],[-2.2,47.25],[-2.2,46.95],[-1.8,46.5],[-1.15,46.15],[-1.1,45.6],[-1.25,44.7],[-1.45,43.5],[-1.8,43.4],[-3,43.4],[-3.8,43.5],[-5,43.45],[-5.7,43.6],[-7,43.55],[-8.2,43.75],[-8.9,43.2],[-9.3,42.9],[-8.9,42.4],[-8.85,41.8],[-8.75,41],[-8.7,40.6],[-8.9,40.15],[-9.4,39.35],[-9.5,38.8],[-9.2,38.7],[-8.95,38.5],[-8.8,38],[-8.9,37.5],[-8.99,37],[-8.5,37.1],[-7.9,37],[-7.4,37.2],[-6.9,37.2],[-6.35,36.8],[-6.3,36.5],[-6.04,36.18],[-5.6,36]],
[[-10,30],[-9.8,31.5],[-9.7,32.3],[-7.6,33.6],[-6.8,34],[-6.2,35.2],[-5.8,35.8],[-5.3,35.9],[-3.9,35.2],[-2.95,35.3],[-2.2,35.1],[-0.65,35.75],[0.1,35.95],[1.3,36.5],[2.2,36.6],[3.05,36.8],[3.45,36.77],[3.9,36.95],[5.1,36.75],[5.8,36.8],[6.9,36.9],[7.8,36.9],[8.45,36.9],[8.75,36.95],[9.85,37.3],[10.2,37.3],[10.3,36.85],[11.1,37.05],[10.9,36.7],[10.5,36.4],[10.6,35.8],[10.8,34.7],[10.1,33.9],[11,33.7],[11.5,33.2],[13.2,32.9],[17,32.6],[17,30]],
[[12.4,38],[13.4,38.15],[14.5,38],[15.65,38.25],[15.1,37.4],[15.1,36.7],[14.4,36.8],[13.3,37.5],[12.45,37.8]],
[[9.2,41.2],[9.7,40.9],[9.7,40.2],[9.6,39.4],[9.4,39.2],[8.9,39],[8.4,39.1],[8.4,40],[8.2,40.9],[8.8,41.1]],
[[9.45,43],[9.55,42.5],[9.4,41.7],[9.2,41.4],[8.7,41.7],[8.55,42.2],[8.7,42.6],[9.1,42.75]],
[[2.4,39.6],[3,39.9],[3.45,39.7],[3.1,39.3],[2.6,39.4]],
[[-5.7,50.1],[-4.2,50.35],[-3.4,50.6],[-2.45,50.55],[-0.1,50.8],[1.4,51.15],[1.4,51.35],[0.9,51.5],[1.7,52.5],[1.7,53],[-5,53],[-4,52.8],[-4.5,52.2],[-5.2,51.75],[-4.3,51.6],[-3,51.5],[-3,51.2],[-4.2,51.2],[-5,50.7]],
[[-10,51.7],[-9.5,51.5],[-8,51.85],[-6.9,52.15],[-6.3,52],[-6.2,53],[-10,53]]
];
var rev=function(a){return a.slice().reverse();};
var FRES=[[-1.78,43.37],[-1.3,43.1],[-0.7,42.9],[0,42.7],[0.7,42.85],[1.45,42.6],[2,42.35],[3.17,42.43]],
FRBE=[[2.55,51.09],[3.1,50.78],[3.6,50.4],[4.2,50.15],[4.85,50.1],[5.4,49.55],[5.82,49.54]],
FRLU=[[5.82,49.54],[5.97,49.45],[6.37,49.47]],
FRDE=[[6.37,49.47],[7,49.15],[7.9,49.05],[8.2,48.97],[7.8,48.6],[7.6,48],[7.59,47.6]],
FRCH=[[7.59,47.6],[7,47.4],[6.45,46.75],[6.1,46.45],[6.15,46.15],[6.8,46.15],[6.87,45.83]],
FRIT=[[6.87,45.83],[7.1,45.3],[6.65,45.1],[7,44.85],[6.95,44.4],[7.6,44.15],[7.53,43.78]],
ITCH=[[10.47,46.85],[10.4,46.55],[10.1,46.25],[9.3,46.5],[9,45.83],[8.7,46],[8.4,46.4],[8.1,46.2],[7.85,45.95],[7,45.9],[6.87,45.83]],
ITAT=[[10.47,46.85],[11.1,46.95],[11.75,47],[12.2,47.1],[12.45,46.7],[13.1,46.6],[13.7,46.5]],
ITSI=[[13.6,45.6],[13.6,45.85],[13.4,46.15],[13.7,46.5]],
ATSI=[[13.7,46.5],[14.5,46.4],[15,46.65],[15.65,46.7],[16.1,46.65]],
SIHR=[[13.57,45.48],[14.3,45.45],[14.6,45.6],[15.3,45.45],[15.7,45.85],[16,46.2]],
PTES=[[-8.87,41.87],[-8.2,42.1],[-7.2,41.95],[-6.55,41.6],[-6.2,41.5],[-6.9,41],[-6.85,40.3],[-7,39.7],[-7,38.9],[-7.3,38.4],[-7,38],[-7.4,37.2]],
BENL=[[3.37,51.37],[3.9,51.27],[4.25,51.4],[4.8,51.5],[5.1,51.3],[5.55,51.2],[5.7,50.75],[6,50.75]],
BEDE=[[6,50.75],[6.2,50.55],[6.4,50.33],[6.13,50.13]],
BELU=[[6.13,50.13],[5.75,49.85],[5.82,49.54]],
LUDE=[[6.13,50.13],[6.4,49.8],[6.37,49.47]],
NLDE=[[6,50.75],[6.1,51.2],[5.95,51.85],[7,52.2]],
CHDE=[[7.59,47.6],[8.1,47.6],[8.6,47.7],[9.1,47.65],[9.55,47.55]],
CHAT=[[9.55,47.55],[9.5,47.05],[9.9,46.9],[10.47,46.85]],
DEAT=[[9.6,47.55],[10.2,47.3],[10.45,47.55],[10.9,47.4],[11.25,47.4],[12.1,47.6],[12.6,47.65],[13,47.5],[13.05,47.95],[13.45,48.55],[13.8,48.77]],
DECZ=[[13.8,48.77],[13.2,48.95],[12.8,49.35],[12.4,49.75],[12.1,50.3],[12.5,50.4],[13,50.5],[14.3,50.9],[14.8,50.85]],
DEPL=[[14.8,50.85],[14.7,51.5],[14.6,52]],
CZPL=[[14.8,50.85],[15.4,50.8],[16,50.6]],
ATCZ=[[13.8,48.77],[14.7,48.58],[15,48.95],[16,48.78]],
MAAL=[[-2.2,35.1],[-1.75,34.75],[-1.85,34.1],[-1.65,33.5],[-1.4,32.6],[-1.2,32.1],[-3,31.7]],
ALTN=[[8.6,36.94],[8.35,36.5],[8.25,36.15],[8.4,35.6],[8.35,35.2],[8.45,34.7],[8.2,34.25],[7.85,33.85],[7.65,33.4],[7.7,33]],
TNLY=[[11.55,33.17],[11,32.8]];
var borders=[FRES,FRBE,FRLU,FRDE,FRCH,FRIT,ITCH,ITAT,ITSI,ATSI,SIHR,PTES,BENL,BEDE,BELU,LUDE,NLDE,CHDE,CHAT,DEAT,DECZ,DEPL,CZPL,ATCZ,MAAL,ALTN,TNLY];
// Highlighted countries: France, Belgium, Italy, Algeria (clipped to land, so sea overshoot is harmless)
var hl=[
[].concat([[-3,44.5],[-6,47],[-5.5,49.6],[1,50.2],[1.9,51.3],[2.55,51.3]],FRBE,FRLU,FRDE,FRCH,FRIT,[[7.6,43.4],[5,42.5],[3.8,42.3]],rev(FRES)),
land[4],
[].concat([[2.55,51.09],[2.9,51.35]],BENL,BEDE,BELU,rev(FRBE)),
[].concat([[7.53,43.78],[7.8,43.3],[10,43.2],[11,41.5],[14,40],[15.55,39],[15.85,37.7],[16.5,38],[17.5,38.5],[18.7,39.7],[18.8,40.5],[17,41.4],[14.5,42.8],[14,44],[13.2,45.2],[13.4,45.55]],ITSI,rev(ITAT),ITCH,FRIT),
land[2],land[3],
[].concat(MAAL,[[-3,30],[7.7,30]],rev(ALTN),[[8.7,37.4],[5,37.4],[2,37.2],[-0.6,36.4],[-2.2,35.6]])
];

// State and geometry
var cv=$('cv'),ctx=cv.getContext('2d'),sc=1,dpr=Math.min(window.devicePixelRatio||1,2),base;
var pts=stops.map(function(s){return P(s[1],s[2]);});
var K=.2,cs=pts.slice(0,n-1).map(function(a,i){var b=pts[i+1],dx=b[0]-a[0],dy=b[1]-a[1];return [(a[0]+b[0])/2-dy*K,(a[1]+b[1])/2+dx*K];});
function bez(i,t){var a=pts[i],b=pts[i+1],c=cs[i],u=1-t;return [u*u*a[0]+2*u*t*c[0]+t*t*b[0],u*u*a[1]+2*u*t*c[1]+t*t*b[1]];}
function tang(i,t){var a=pts[i],b=pts[i+1],c=cs[i];return Math.atan2(2*(1-t)*(c[0]-a[0])+2*t*(b[0]-c[0]),-(2*(1-t)*(c[1]-a[1])+2*t*(b[1]-c[1])));}
function headTo(i){return i<n-1?tang(i,0):tang(n-2,1);}
function hav(a,b){var R=6371,r=Math.PI/180,dl=(b[1]-a[1])*r,dn=(b[2]-a[2])*r;
  var h=Math.sin(dn/2)*Math.sin(dn/2)+Math.cos(a[2]*r)*Math.cos(b[2]*r)*Math.sin(dl/2)*Math.sin(dl/2);
  return 2*R*Math.asin(Math.sqrt(h));}
var legKm=[],total=0;
for(var i=0;i<n-1;i++){legKm[i]=hav(stops[i],stops[i+1]);total+=legKm[i];}
var YR=stops.map(function(s){return s[3];});

// Static base map
function build(){
  base=document.createElement('canvas');base.width=cv.width;base.height=cv.height;
  var b=base.getContext('2d'),s=sc;
  b.fillStyle='#020a05';b.fillRect(0,0,base.width,base.height);
  var st=7*dpr;b.fillStyle='rgba(93,255,138,.34)';
  for(var y=st/2,r=0;y<base.height;y+=st*.866,r++)for(var x=(r%2?st:st/2);x<base.width;x+=st)b.fillRect(Math.round(x),Math.round(y),dpr,dpr);
  function path(poly,keep){
    var q=poly.map(function(p){var a=P(p[0],p[1]);return [a[0]*s,a[1]*s];}),L=q.length;
    if(!keep)b.beginPath();b.moveTo((q[L-1][0]+q[0][0])/2,(q[L-1][1]+q[0][1])/2);
    for(var i=0;i<L;i++){var a=q[i],c=q[(i+1)%L];b.quadraticCurveTo(a[0],a[1],(a[0]+c[0])/2,(a[1]+c[1])/2);}
    b.closePath();
  }
  b.fillStyle='#05150b';land.forEach(function(p){path(p);b.fill();});
  b.save();b.beginPath();land.forEach(function(p){path(p,1);});b.clip();
  b.fillStyle='rgba(93,255,138,.09)';
  hl.forEach(function(poly){b.beginPath();poly.forEach(function(p,i){var a=P(p[0],p[1]);i?b.lineTo(a[0]*s,a[1]*s):b.moveTo(a[0]*s,a[1]*s);});b.closePath();b.fill();});
  b.restore();
  b.setLineDash([2*dpr,3*dpr]);b.lineWidth=dpr;b.strokeStyle='rgba(93,255,138,.3)';b.lineJoin='round';
  borders.forEach(function(l){b.beginPath();l.forEach(function(p,i){var a=P(p[0],p[1]);i?b.lineTo(a[0]*s,a[1]*s):b.moveTo(a[0]*s,a[1]*s);});b.stroke();});
  b.setLineDash([]);b.lineWidth=1.3*dpr;b.strokeStyle='#23a04a';
  land.forEach(function(p){path(p);b.stroke();});
}
function fit(){var r=cv.getBoundingClientRect();cv.width=Math.round(r.width*dpr);cv.height=Math.round(r.height*dpr);sc=cv.width/W;build();}
addEventListener('resize',fit);fit();

// Side panel
var it=$('it'),ms=$('ms'),rows=[],mrows=[];
function item(parent,list,y,name,km,country){var li=document.createElement('li');
  li.innerHTML='<i class="m"></i><span class="y">'+y+'</span>'+(country?'<span class="flag flag-'+country+'" role="img" aria-label="'+country.toUpperCase()+' flag"></span>':'')+'<span class="city">'+name+'</span><span class="km">'+(km||'')+'</span>';
  parent.appendChild(li);list.push(li);}
var routeCountries=['be','dz','fr','fr','it','fr','fr','fr'];
stops.forEach(function(s,i){item(it,rows,s[3],s[0],i?Math.round(legKm[i-1]).toLocaleString('en')+' km':'Start',routeCountries[i]);});
MS.forEach(function(x){item(ms,mrows,x[0],x[1]);});

// Animation state
var leg=0,phase='dwell',tm=0,flown=0,dur=1,reached=0,prog=0,ee=0,hdg=headTo(0),year=YR[0],dirty=1,last=performance.now();
var trail=[],rings=[],parts=[],pos=pts[0].slice(),PC=['#f4fff4','#5dff8a','#ffffff'];
function legDur(i){return i===n-2?3.6:Math.max(1.8,legKm[i]/320);}
function dwellT(i){return i===n-1?3.5:Math.min(2.6,.9+.1*(YR[i+1]-YR[i]));}
function ring(p){rings.push({x:p[0],y:p[1],t:0});}
ring(pts[0]);
var lvl=$('lvl'),flash=$('flash');
var restart=$('restart');
restart.addEventListener('click',function(){leg=0;phase='dwell';tm=0;flown=0;reached=0;prog=0;ee=0;hdg=headTo(0);year=YR[0];dirty=1;trail=[];rings=[];parts=[];pos=pts[0].slice();ring(pos);restart.classList.remove('visible');lvl.classList.remove('show');flash.classList.remove('show');last=performance.now();});
function levelUp(name,p){
  for(var i=0;i<70;i++){var a=Math.random()*6.283,sp=15+Math.random()*55;parts.push({x:p[0],y:p[1],vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-10,l:1+Math.random()*.6,c:i%3});}
  ring(p);$('lvb').textContent=name;
  lvl.classList.remove('show');flash.classList.remove('show');void lvl.offsetWidth;lvl.classList.add('show');flash.classList.add('show');
}

// Drawing helpers
function stroke(i,t0,t1){
  var N=Math.max(2,Math.ceil(48*(t1-t0)));ctx.beginPath();
  for(var k=0;k<=N;k++){var p=bez(i,t0+(t1-t0)*k/N);k?ctx.lineTo(p[0]*sc,p[1]*sc):ctx.moveTo(p[0]*sc,p[1]*sc);}
  ctx.stroke();
}
function plane(x,y,a){
  ctx.save();ctx.translate(x*sc,y*sc);ctx.rotate(a);var s=.7*dpr;ctx.scale(s,s);
  ctx.beginPath();
  ctx.moveTo(0,-12);ctx.lineTo(2,-7);ctx.lineTo(2,-2);ctx.lineTo(10,5);ctx.lineTo(10,8);ctx.lineTo(2,6);
  ctx.lineTo(2,9);ctx.lineTo(5,11);ctx.lineTo(5,12);ctx.lineTo(0,10);ctx.lineTo(-5,12);ctx.lineTo(-5,11);
  ctx.lineTo(-2,9);ctx.lineTo(-2,6);ctx.lineTo(-10,8);ctx.lineTo(-10,5);ctx.lineTo(-2,-2);ctx.lineTo(-2,-7);
  ctx.closePath();ctx.lineJoin='round';ctx.lineWidth=2.5;ctx.strokeStyle='rgba(2,10,5,.9)';ctx.stroke();
  ctx.fillStyle='#f4fff4';ctx.fill();ctx.restore();
}

function frame(now){
  if(cv.width<2||!base)fit();
  var dt=Math.min(.1,(now-last)/1000);last=now;if(phase!=='ended')tm+=dt;
  if(phase==='dwell'){
    pos=pts[leg].slice();
    if(tm>dwellT(leg)){
      tm=0;dirty=1;
      if(leg===n-1){phase='ended';restart.classList.add('visible');}
      else{phase='fly';dur=legDur(leg);}
    }
  }else if(phase==='fly'){
    prog=Math.min(1,tm/dur);ee=prog<.5?2*prog*prog:1-Math.pow(-2*prog+2,2)/2;
    pos=bez(leg,ee);hdg=tang(leg,ee);
    trail.push(pos.slice());if(trail.length>22)trail.shift();
    if(prog>=1){flown+=legKm[leg];leg++;phase='dwell';tm=0;dirty=1;ring(pts[leg]);hdg=headTo(leg);}
  }
  if(phase!=='fly'&&trail.length)trail.shift();
  // Time passes only on the ground: the year counts up while parked and stays frozen in flight
  year=phase==='fly'?YR[leg+1]:leg<n-1?Math.min(YR[leg+1]-1,Math.floor(YR[leg]+(YR[leg+1]-YR[leg])*Math.min(1,tm/(dwellT(leg)*.8)))):YR[leg];
  while(phase==='dwell'&&reached<MS.length&&year>=MS[reached][0]){levelUp(MS[reached][1],pos);reached++;dirty=1;}

  // Map
  ctx.drawImage(base,0,0);
  ctx.lineCap='round';ctx.lineJoin='round';
  for(var i=0;i<n-1;i++){
    var flying=i===leg&&phase==='fly';
    if(i<leg){ctx.setLineDash([]);ctx.lineWidth=1.6*dpr;ctx.strokeStyle='#5dff8a';stroke(i,0,1);}
    else{
      ctx.setLineDash([3*dpr,4*dpr]);ctx.lineWidth=dpr;ctx.strokeStyle='#2a9d4f';stroke(i,0,1);
      if(flying){ctx.setLineDash([]);ctx.lineWidth=1.6*dpr;ctx.strokeStyle='#5dff8a';stroke(i,0,Math.max(.001,ee));}
    }
  }
  ctx.setLineDash([]);
  var bl=Math.floor(now/350)%2,seen={},sq=7*dpr;
  stops.forEach(function(s,i){
    var cur=(phase!=='fly'&&i===leg)||(phase==='fly'&&i===leg+1),st=cur?2:i<=leg?1:0,k=s[1]+','+s[2];
    seen[k]=Math.max(seen[k]||0,st);
    if(i===n-1||stops.every(function(o,j){return j<=i||o[1]+','+o[2]!==k;})){
      var p=pts[i],x=Math.round(p[0]*sc-sq/2),y=Math.round(p[1]*sc-sq/2),v=seen[k];
      ctx.globalAlpha=v===2&&!bl?.4:1;
      if(v){ctx.fillStyle=v===2?'#5dff8a':'#2fcf55';ctx.fillRect(x,y,sq,sq);}
      else{ctx.fillStyle='#020a05';ctx.fillRect(x,y,sq,sq);ctx.strokeStyle='#1a7a36';ctx.lineWidth=dpr;ctx.strokeRect(x+.5*dpr,y+.5*dpr,sq-dpr,sq-dpr);}
      ctx.globalAlpha=1;
    }
  });
  rings=rings.filter(function(r){r.t+=dt;return r.t<1.2;});
  rings.forEach(function(r){ctx.globalAlpha=(1-r.t/1.2)*.8;ctx.strokeStyle='#5dff8a';ctx.lineWidth=dpr;
    ctx.beginPath();ctx.arc(r.x*sc,r.y*sc,Math.max(0,r.t*60*dpr),0,6.283);ctx.stroke();});
  trail.forEach(function(p,i){ctx.globalAlpha=i/trail.length*.8;ctx.fillStyle='#5dff8a';ctx.fillRect(p[0]*sc-dpr*.75,p[1]*sc-dpr*.75,1.5*dpr,1.5*dpr);});
  ctx.globalAlpha=1;
  plane(pos[0],pos[1],hdg);
  parts=parts.filter(function(p){p.l-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=30*dt;return p.l>0;});
  parts.forEach(function(p){ctx.fillStyle=PC[p.c];var z=(p.c?1.5:2.5)*dpr;ctx.fillRect(p.x*sc,p.y*sc,z,z);});

  // Labels
  ctx.font='500 '+(11*dpr)+"px 'IBM Plex Mono', monospace";
  if('letterSpacing' in ctx)ctx.letterSpacing=(1.2*dpr)+'px';
  ctx.fillStyle='#a9d9b5';
  LB.forEach(function(L){
    var p=pts[L[0]];ctx.textAlign=L[3]?'right':'left';
    ctx.fillText(stops[L[0]][0].toUpperCase(),p[0]*sc+L[1]*dpr,p[1]*sc+L[2]*dpr);
  });
  ctx.textAlign='left';ctx.fillStyle='#5dff8a';ctx.fillText(String(year),pos[0]*sc+14*dpr,pos[1]*sc-12*dpr);

  // Panel
  if(dirty){
    rows.forEach(function(li,i){
      var cur=(phase!=='fly'&&i===leg)||(phase==='fly'&&i===leg+1);
      li.className=cur?'cur':i<=leg?'done':'';
    });
    mrows.forEach(function(li,i){li.className=i<reached?'done':'';});
    $('dr').classList.toggle('on',reached>=MS.length);
    dirty=0;
  }
  var lon=-10+pos[0]/W*26,lat=52-pos[1]/H*19,cu=flown+(phase==='fly'?legKm[leg]*prog:0);
  $('pos').textContent=lat.toFixed(2)+'°N '+Math.abs(lon).toFixed(2)+'°'+(lon<0?'W':'E');
  $('yr').textContent=year;
  $('lvv').textContent='LV.'+(reached+1);
  $('fl').textContent=Math.round(cu).toLocaleString('en')+' / '+Math.round(total).toLocaleString('en')+' km';
  $('bar').style.width=(cu/total*100)+'%';
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
})();
