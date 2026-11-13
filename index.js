(function(){
var $=function(id){return document.getElementById(id);};
// Fonts load asynchronously so a slow font request can never delay or block the animation
var fl0=document.createElement('link');fl0.rel='stylesheet';fl0.href='https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@500&family=Alegreya+Sans:wght@500&family=IBM+Plex+Mono:wght@400;500&display=swap';document.head.appendChild(fl0);
var matrix=document.getElementById('matrix'),mctx=matrix.getContext('2d'),drops=[],fontSize=16;
function resizeMatrix(){var dpr=Math.min(window.devicePixelRatio||1,2);matrix.width=Math.floor(innerWidth*dpr);matrix.height=Math.floor(innerHeight*dpr);mctx.setTransform(dpr,0,0,dpr,0,0);var cols=Math.ceil(innerWidth/fontSize);drops=Array.from({length:cols},function(){return Math.random()*innerHeight/fontSize;});}
function drawMatrix(){mctx.fillStyle='rgba(3,10,5,.09)';mctx.fillRect(0,0,innerWidth,innerHeight);mctx.fillStyle='rgba(47,207,85,.55)';mctx.font=fontSize+'px monospace';drops.forEach(function(y,i){var digit=Math.random()<.5?'0':'1';mctx.fillText(digit,i*fontSize,y*fontSize);if(y*fontSize>innerHeight&&Math.random()>.975)drops[i]=0;else drops[i]+=.2;});requestAnimationFrame(drawMatrix);}
resizeMatrix();addEventListener('resize',resizeMatrix);drawMatrix();
document.getElementById('copyright-year').textContent=new Date().getFullYear();var W=240,H=200;
var stops=[["Brussels",4.35,50.85,1988],["Boumerdès",3.47,36.76,1991],["Toulouse",1.44,43.60,2013],["Rennes",-1.68,48.11,2014],["Rome",12.50,41.90,2016],["Rennes",-1.68,48.11,2016],["Paris",2.35,48.86,2018],["Blois",1.33,47.59,2026]];
var MS=[[2013,"State Engineer",1,[1]],[2014,"Master of Science",3,[2,3]],[2019,"Doctor of Philosophy",6,[3,6,4]]];
var LB=[[0,12,14,0],[1,12,15,0],[2,-10,6,1],[3,-12,4,1],[4,12,10,0],[6,-8,-6,1],[7,6,20,1]]; // stop, dx, dy, align right
var capitals=[["LONDON",-.13,51.51,-5,-5,1],["DUBLIN",-6.26,53.35,5,-5,0],["LISBON",-9.14,38.72,5,0,0],["MADRID",-3.70,40.42,5,-5,0],["PARIS",2.35,48.86,5,-7,0],["AMSTERDAM",4.90,52.37,5,-5,0],["LUXEMBOURG",6.13,49.61,5,10,0],["BERLIN",13.40,52.52,5,-5,0],["PRAGUE",14.42,50.08,5,10,0],["BERN",7.45,46.95,-5,10,1],["VIENNA",16.37,48.21,-5,-5,1],["LJUBLJANA",14.51,46.06,5,10,0],["ZAGREB",15.98,45.81,5,-5,0],["SARAJEVO",18.41,43.86,5,10,0],["BELGRADE",20.45,44.79,-5,-5,1],["ROME",12.50,41.90,12,10,0],["VALLETTA",14.51,35.90,5,-6,0],["RABAT",-6.84,34.02,5,6,0],["ALGIERS",3.06,36.75,-20,12,0],["TUNIS",10.18,36.81,-25,10,0]];
var n=stops.length;
var microstateCapitals=[["ANDORRA","ANDORRA LA VELLA",1.52,42.51,-5,-7,1],["MONACO","MONACO",7.42,43.74,-5,-7,1],["VATICAN CITY","VATICAN CITY",12.45,41.90,5,-9,0],["SAN MARINO","SAN MARINO",12.46,43.94,-5,-7,1],["MALTA","",14.51,35.90,0,0,0]];
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
var hatchTile=document.createElement('canvas');hatchTile.width=Math.ceil(16*dpr);hatchTile.height=Math.ceil(16*dpr);
var hatchCtx=hatchTile.getContext('2d');hatchCtx.strokeStyle='rgba(169,217,181,.82)';hatchCtx.lineWidth=1.3*dpr;hatchCtx.lineCap='square';
hatchCtx.beginPath();hatchCtx.moveTo(3*dpr,3*dpr);hatchCtx.lineTo(11*dpr,11*dpr);hatchCtx.moveTo(11*dpr,3*dpr);hatchCtx.lineTo(3*dpr,11*dpr);hatchCtx.stroke();
var hatchPattern=ctx.createPattern(hatchTile,'repeat');
var pts=stops.map(function(s){return P(s[1],s[2]);});
var K=.2,cs=pts.slice(0,n-1).map(function(a,i){var b=pts[i+1],dx=b[0]-a[0],dy=b[1]-a[1];return [(a[0]+b[0])/2-dy*K,(a[1]+b[1])/2+dx*K];});
function bez(i,t){var a=pts[i],b=pts[i+1],c=cs[i],u=1-t;if(i===2||i===5||i===6)return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t];return [u*u*a[0]+2*u*t*c[0]+t*t*b[0],u*u*a[1]+2*u*t*c[1]+t*t*b[1]];}
function tang(i,t){var a=pts[i],b=pts[i+1],c=cs[i];if(i===2||i===5||i===6)return Math.atan2(b[0]-a[0],-(b[1]-a[1]));return Math.atan2(2*(1-t)*(c[0]-a[0])+2*t*(b[0]-c[0]),-(2*(1-t)*(c[1]-a[1])+2*t*(b[1]-c[1])));}
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
function item(parent,list,y,name,km,country,cap){var li=document.createElement('li');
  var board=cap==='phd-cap'?'<path class="cap-board phd-board" d="M16 1 30 7 16 13 2 7Z"/>':'<ellipse class="cap-board master-board" cx="16" cy="7" rx="14" ry="6"/>';
  var icon=cap?'<svg class="grad-cap '+cap+'" viewBox="0 0 32 24" role="img" aria-label="'+(cap==='phd-cap'?'Doctoral':'Master’s')+' graduation hat"><path class="cap-tassel" d="M5 6v11"/><circle class="cap-tassel" cx="5" cy="19" r="1.5"/><path class="cap-base" d="M8 8H24V19H8Z"/>'+board+'</svg>':'';
  li.innerHTML='<i class="m"></i><span class="y">'+y+'</span>'+(country?'<span class="flag flag-'+country+'" role="img" aria-label="'+country.toUpperCase()+' flag"></span>':'')+'<span class="city">'+name+'</span>'+(icon||'')+(km?'<span class="km">'+km+'</span>':'');
  parent.appendChild(li);list.push(li);}
var routeCountries=['be','dz','fr','fr','it','fr','fr','fr'];
stops.forEach(function(s,i){item(it,rows,s[3],s[0],i?Math.round(legKm[i-1]).toLocaleString('en')+' km':'Start',routeCountries[i]);});
var madridPlan=document.createElement('li');madridPlan.className='planned-cancelled';madridPlan.hidden=true;
madridPlan.innerHTML='<i class="m"></i><span class="y">2020</span><span class="flag flag-es" role="img" aria-label="Spain flag"></span><span class="city">Madrid</span><span class="km">CANCELLED</span>';it.appendChild(madridPlan);
MS.forEach(function(x,i){item(ms,mrows,x[0],x[1],'',null,i===2?'phd-cap':'master-cap');});

// Animation state
var EVENT_SECONDS=4; // Every event banner (Algerian Black Decade, earthquake, COVID) stays up this long, whatever its year span.
var leg=0,phase='dwell',tm=0,flown=0,dur=1,reached=0,prog=0,ee=0,hdg=headTo(0),year=YR[0],dirty=1,last=performance.now();
var yearSide=0,trail=[],rings=[],parts=[],pos=pts[0].slice(),PC=['#ffffff','#c8ffd5','#5dff8a'],quakeStart=0,quakeRipples=0,birthElapsed=0,birthFlightDuration=2.7,birthFadeDuration=.7,birthFadeInDuration=1.4,birthEggFallDuration=1,birthLandingTime=birthFlightDuration+birthEggFallDuration,birthEventDuration=Math.max(birthFlightDuration+birthFadeDuration,birthLandingTime),birthStartX=pts[0][0]+44,lastBirthYearVisible=false,covidSymbols=[],covidSymbolsW=0,covidSymbolsH=0;
function legDur(i){return i===n-2?3.6:Math.max(1.8,legKm[i]/320);}
function dwellT(i){return i===0?4.9:i===n-1?3.5:i===1?.6+2*EVENT_SECONDS+2:i===6?1.6+EVENT_SECONDS+1.2:Math.min(2.6,.9+.1*(YR[i+1]-YR[i]));}
function ring(p,color){rings.push({x:p[0],y:p[1],t:0,color:color||'#5dff8a'});}
ring(pts[0]);
var lvl=$('lvl'),flash=$('flash');
var restart=$('restart');
var algeriaLink=$('algeriaLink');
var earthquakeLink=$('earthquakeLink');
var covidLink=$('covidLink');
var telemetry=$('telemetry');
var milestoneSection=$('milestoneSection');
var smallStork=true;  // Set to false to go back to the larger stork.
var yellowStorkBeak=false; // Set true for a yellow beak (the only coloured detail).
restart.addEventListener('click',function(){leg=0;phase='dwell';tm=0;flown=0;reached=0;prog=0;ee=0;hdg=headTo(0);year=YR[0];dirty=1;trail=[];rings=[];parts=[];pos=pts[0].slice();quakeStart=0;quakeRipples=0;birthElapsed=0;ring(pos);restart.classList.remove('visible');lvl.classList.remove('show');flash.classList.remove('show');last=performance.now();});
function levelUp(name,p,index,sparkStops){
  var sparks=sparkStops.map(function(i){return pts[i];});
  sparks.forEach(function(point){for(var i=0;i<36;i++){var a=i*6.283/36+(Math.random()-.5)*.12,sp=24+Math.random()*34;parts.push({x:point[0],y:point[1],vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,l:.8+Math.random()*.45,c:i%3});}});
  $('lvb').textContent=name;
  var map=$('cv').parentNode,rect=map.getBoundingClientRect(),scale=$('cv').width/W;
  var side=index===2?'right':'left';lvl.className=side;
  var width=lvl.offsetWidth,height=lvl.offsetHeight,left=p[0]*scale+(side==='left'?-width-12:12),top=p[1]*scale-height/2;
  lvl.style.left=Math.max(8,Math.min(rect.width-width-8,left))+'px';lvl.style.top=Math.max(8,Math.min(rect.height-height-8,top))+'px';
  lvl.classList.remove('show');void lvl.offsetWidth;lvl.classList.add('show');
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
function stork(x,y,flap,alpha){
  // Top-down silhouette in the same flat style as plane(): white fill, dark outline, angular edges.
  // Drawn pointing up, then rotated to fly west (towards Brussels).
  ctx.save();ctx.globalAlpha=alpha;ctx.translate(x*sc,y*sc);ctx.rotate(-Math.PI/2);var size=smallStork ? .55 : .8,s=size*dpr,planeStroke=1.75/size;ctx.scale(s,s);
  ctx.lineJoin='round';ctx.lineCap='round';
  var k=.8+.2*Math.sin(flap);                // wingspan breathes in and out as the wings beat
  // right half, head to tail; 3rd value = 1 for wing points (scaled by the flap)
  var R=[[1.1,-9.6,0],[1.4,-8.2,0],[1,-6.8,0],[1.3,-3.8,0],
         [5,-3.4,1],[14.5,-2.4,1],[15.5,-.6,1],[11.5,-.3,1],[12.2,1.6,1],[7.5,1.4,1],
         [2,2.6,0],[2.4,7.2,0],[1.3,8.8,0]];
  R=R.map(function(p){return [p[0]*(p[2]?k:1),p[1]+(p[2]?(1-k)*3*p[0]/14:0)];});
  var dark='rgba(2,10,5,.9)',white='#f4fff4';
  // legs trail behind and join the tail: dark line first, white line on top so they read as outlined
  [-.55,.55].forEach(function(lx){
    ctx.beginPath();ctx.moveTo(lx,6);ctx.lineTo(lx,15.5);ctx.lineWidth=planeStroke;ctx.strokeStyle=dark;ctx.stroke();
  });
  [-.55,.55].forEach(function(lx){
    ctx.beginPath();ctx.moveTo(lx,6);ctx.lineTo(lx,15.5);ctx.lineWidth=Math.max(.8,planeStroke-1.1);ctx.strokeStyle=white;ctx.stroke();
  });
  ctx.lineWidth=planeStroke;ctx.strokeStyle=dark;
  // beak
  ctx.beginPath();ctx.moveTo(0,-15);ctx.lineTo(.9,-10);ctx.lineTo(-.9,-10);ctx.closePath();
  ctx.stroke();ctx.fillStyle=yellowStorkBeak?'#e2b33d':white;ctx.fill();
  // head, neck, wings, tail as one polygon
  ctx.beginPath();ctx.moveTo(0,-10.4);
  R.forEach(function(p){ctx.lineTo(p[0],p[1]);});
  ctx.lineTo(0,8);
  for(var i=R.length-1;i>=0;i--)ctx.lineTo(-R[i][0],R[i][1]);
  ctx.closePath();ctx.stroke();ctx.fillStyle=white;ctx.fill();
  ctx.restore();
}
function train(x,y,a){
  // Top-down bullet-train head in the same flat style and outline weight as plane().
  ctx.save();ctx.translate(x*sc,y*sc);ctx.rotate(a);var s=.7*dpr;ctx.scale(s,s);
  var dark='rgba(2,10,5,.9)',white='#f4fff4';
  ctx.lineJoin='round';ctx.lineCap='round';ctx.lineWidth=2.5;ctx.strokeStyle=dark;ctx.fillStyle=white;
  [-1,1].forEach(function(d){                                   // mirrors, drawn first so the body covers their root
    ctx.beginPath();ctx.moveTo(d*2.7,-7.4);ctx.lineTo(d*5,-6.6);ctx.lineTo(d*5,-5.2);ctx.lineTo(d*2.7,-5);ctx.closePath();ctx.stroke();ctx.fill();
  });
  ctx.beginPath();                                              // head: needle nose swelling into a straight roof
  ctx.moveTo(0,-16);ctx.lineTo(.9,-14);ctx.lineTo(2,-10.8);ctx.lineTo(2.8,-7);ctx.lineTo(3,-3.6);ctx.lineTo(3,8);
  ctx.lineTo(-3,8);ctx.lineTo(-3,-3.6);ctx.lineTo(-2.8,-7);ctx.lineTo(-2,-10.8);ctx.lineTo(-.9,-14);
  ctx.closePath();ctx.stroke();ctx.fill();
  ctx.fillStyle=dark;                                           // cab glass (swept visor) and pantograph
  ctx.beginPath();ctx.moveTo(0,-11.8);ctx.lineTo(1.9,-8.2);ctx.lineTo(1.5,-6.6);ctx.lineTo(0,-7.6);ctx.lineTo(-1.5,-6.6);ctx.lineTo(-1.9,-8.2);ctx.closePath();ctx.fill();
  ctx.beginPath();ctx.moveTo(0,-.2);ctx.lineTo(1.5,1.8);ctx.lineTo(0,3.8);ctx.lineTo(-1.5,1.8);ctx.closePath();ctx.fill();
  ctx.restore();
}
function countryFill(country,color,alpha){
  var index={fr:0,be:2,it:3,dz:6}[country],poly=hl[index];if(!poly)return;
  ctx.save();ctx.beginPath();land.forEach(function(poly){poly.forEach(function(p,i){var q=P(p[0],p[1]);i?ctx.lineTo(q[0]*sc,q[1]*sc):ctx.moveTo(q[0]*sc,q[1]*sc);});ctx.closePath();});ctx.clip();
  ctx.beginPath();poly.forEach(function(p,i){var q=P(p[0],p[1]);i?ctx.lineTo(q[0]*sc,q[1]*sc):ctx.moveTo(q[0]*sc,q[1]*sc);});ctx.closePath();ctx.globalAlpha=alpha;ctx.fillStyle=color;ctx.fill();ctx.restore();
}
function countryHatch(country){
  var index={fr:0,be:2,it:3,dz:6}[country],poly=hl[index];if(!poly)return;
  ctx.save();ctx.beginPath();land.forEach(function(shape){shape.forEach(function(p,i){var q=P(p[0],p[1]);i?ctx.lineTo(q[0]*sc,q[1]*sc):ctx.moveTo(q[0]*sc,q[1]*sc);});ctx.closePath();});ctx.clip();
  ctx.beginPath();poly.forEach(function(p,i){var q=P(p[0],p[1]);i?ctx.lineTo(q[0]*sc,q[1]*sc):ctx.moveTo(q[0]*sc,q[1]*sc);});ctx.closePath();ctx.clip();
  ctx.globalAlpha=.95;ctx.fillStyle=hatchPattern;ctx.fillRect(0,0,cv.width,cv.height);ctx.restore();
}
function mapLabel(text,x,y){ctx.lineWidth=3*dpr;ctx.lineJoin='round';ctx.strokeStyle='#05150b';ctx.strokeText(text,x,y);ctx.fillText(text,x,y);}
function frame(now){
  if(cv.width<2||!base)fit();
  var previousYear=year,dt=Math.min(.1,(now-last)/1000);last=now;if(phase!=='ended')tm+=dt;if(birthElapsed<birthEventDuration)birthElapsed+=dt;
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
  if(phase==='fly')year=YR[leg+1];
  else if(leg===0&&phase==='dwell'){
    if(birthElapsed<birthEventDuration)year=YR[0];
    else year=Math.min(YR[1],YR[0]+Math.floor((YR[1]-YR[0])*(tm-birthEventDuration)/(dwellT(0)-birthEventDuration)));
  }
  else if(leg===1&&phase==='dwell'){
    var E=EVENT_SECONDS,t1=.6;                                  // 1991 -> Black Decade (1992-2002) -> earthquake (2003) -> 2013
    if(tm<t1)year=1991;
    else if(tm<t1+E)year=1992+Math.min(10,Math.floor((tm-t1)/E*11));
    else if(tm<t1+2*E)year=2003;
    else year=Math.min(2013,2004+Math.floor((tm-t1-2*E)/.2));
  }
  else if(leg===6&&phase==='dwell'){
    if(tm<1.6)year=2018+Math.floor(tm/1.6*2);
    else if(tm<1.6+EVENT_SECONDS){var u=(tm-1.6)/EVENT_SECONDS;   // COVID (2020-2023): 2020 gets half the time (cancelled Madrid trip)
      year=u<.5?2020:2021+Math.min(2,Math.floor((u-.5)/.5*3));}
    else year=Math.min(2026,2024+Math.floor((tm-1.6-EVENT_SECONDS)/.4));
  }else year=leg<n-1?Math.min(YR[leg+1],Math.floor(YR[leg]+(YR[leg+1]-YR[leg])*Math.min(1,tm/(dwellT(leg)*.8)))):YR[leg];
  var showBirthYear=!(leg===0&&phase==='dwell'&&birthElapsed<birthLandingTime);
  if(year!==previousYear||showBirthYear!==lastBirthYearVisible){dirty=1;lastBirthYearVisible=showBirthYear;}
  if(year===2003&&!quakeStart){quakeStart=now;quakeRipples=0;}
  if(year!==2003){quakeStart=0;quakeRipples=0;}
  if(year===2003){var quakeAge=now-quakeStart;while(quakeAge<EVENT_SECONDS*1000&&quakeAge>=quakeRipples*400){ring(pts[1],'#9b6b3e');quakeRipples++;}}
  while(phase==='dwell'&&reached<MS.length&&leg===MS[reached][2]&&year>=MS[reached][0]){levelUp(MS[reached][1],pos,reached,MS[reached][3]);reached++;dirty=1;}

  // Map
  var quakeActive=year===2003,quakeAge=quakeActive?now-quakeStart:0;
  ctx.save();
  if(quakeActive){var shake=2.2*dpr*(.35+.65*Math.sin(quakeAge/150));ctx.translate(Math.sin(quakeAge/31)*shake,Math.cos(quakeAge/27)*shake);}
  ctx.drawImage(base,0,0);
  var targetCountry=phase==='fly'?routeCountries[leg+1]:(leg===0&&phase==='dwell'?routeCountries[0]:null);
  ['fr','be','it','dz'].forEach(function(country){
    var reachedCountry=(country==='be'&&leg===0)||stops.some(function(_,i){return routeCountries[i]===country&&i<=leg&&(phase==='fly'||leg>0||phase==='ended');});
    if(country===targetCountry&&!reachedCountry){countryFill(country,'#5dff8a',.07+.12*(.5+.5*Math.sin(now/180)));return;}
    if(reachedCountry)countryFill(country,'#2fcf55',.28);
  });
  if(year===2003)countryFill('dz','#3d2417',.76);
  var algeriaWarYears=year>=1992&&year<=2002;
  algeriaLink.classList.toggle('active',algeriaWarYears);
  earthquakeLink.classList.toggle('active',year===2003);
  covidLink.classList.toggle('active',year>=2020&&year<=2023);
  if(algeriaWarYears){countryFill('dz','#000000',.62);countryHatch('dz');}
  // Event tints sit directly on the map so routes, labels and vehicles stay crisp above them
  if(year>=2020&&year<=2023){
    var covidRed='#ff334f',covidFlash=.12+.12*(.5+.5*Math.sin(now/300));
    ctx.fillStyle='rgba(255,51,79,'+covidFlash+')';ctx.fillRect(0,0,cv.width,cv.height);
    ctx.strokeStyle=covidRed;ctx.lineWidth=2*dpr;ctx.strokeRect(dpr,dpr,cv.width-2*dpr,cv.height-2*dpr);
    if(covidSymbolsW!==cv.width||covidSymbolsH!==cv.height){
      covidSymbolsW=cv.width;covidSymbolsH=cv.height;covidSymbols=[];
      var seed=(cv.width*73856093^cv.height*19349663)>>>0;
      function covidRand(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;}
      var symbolCount=Math.ceil(cv.width*cv.height/(68*58*dpr*dpr));
      for(var ci=0;ci<symbolCount;ci++)covidSymbols.push({x:(26+covidRand()*Math.max(1,cv.width/dpr-52))*dpr,y:(26+covidRand()*Math.max(1,cv.height/dpr-52))*dpr,alpha:.2+covidRand()*.1});
    }
    ctx.save();ctx.fillStyle=covidRed;ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=(17*dpr)+'px sans-serif';
    covidSymbols.forEach(function(symbol){ctx.globalAlpha=symbol.alpha;ctx.fillText('\u2623',symbol.x,symbol.y);});
    ctx.restore();
  }
  if(quakeActive){
    ctx.fillStyle='rgba(43,25,14,.38)';ctx.fillRect(0,0,cv.width,cv.height);
    ctx.strokeStyle='#50321e';ctx.lineWidth=2*dpr;ctx.strokeRect(dpr,dpr,cv.width-2*dpr,cv.height-2*dpr);
  }
  ctx.lineCap='round';ctx.lineJoin='round';
  for(var i=0;i<n-1;i++){
    if(i<leg){ctx.setLineDash([]);ctx.lineWidth=1.6*dpr;ctx.strokeStyle='#1a7a36';stroke(i,0,1);}
    else if(i===leg&&phase==='fly'){
      ctx.setLineDash([3*dpr,4*dpr]);ctx.lineWidth=dpr;ctx.strokeStyle='#2a9d4f';stroke(i,0,1);
      if(ee>0){ctx.setLineDash([]);ctx.lineWidth=1.6*dpr;ctx.strokeStyle='#1a7a36';stroke(i,0,ee);}
    }
  }
  ctx.setLineDash([]);
  // Cancelled Madrid flight belongs to the route layer, below every label
  if(year===2020&&tm<3.2){
    var paris=P(2.35,48.86),madrid=P(-3.70,40.42);
    var px=paris[0]*sc,py=paris[1]*sc,mx=madrid[0]*sc,my=madrid[1]*sc,cx=(px+mx)/2,cy=(py+my)/2-58*dpr;
    ctx.save();ctx.globalAlpha=.3+.7*(.5+.5*Math.sin(now/170));ctx.strokeStyle='#ff4055';ctx.lineWidth=1.5*dpr;ctx.setLineDash([4*dpr,3*dpr]);ctx.beginPath();ctx.moveTo(px,py);ctx.quadraticCurveTo(cx,cy,mx,my);ctx.stroke();ctx.setLineDash([]);
    var crossX=(px+2*cx+mx)/4,crossY=(py+2*cy+my)/4;ctx.lineWidth=2*dpr;ctx.beginPath();ctx.moveTo(crossX-5*dpr,crossY-5*dpr);ctx.lineTo(crossX+5*dpr,crossY+5*dpr);ctx.moveTo(crossX+5*dpr,crossY-5*dpr);ctx.lineTo(crossX-5*dpr,crossY+5*dpr);ctx.stroke();ctx.restore();
  }
  var seen={},sq=7*dpr;
  stops.forEach(function(s,i){var cur=(phase!=='fly'&&i===leg)||(phase==='fly'&&i===leg+1),st=cur?2:i<=leg?1:0,k=s[1]+','+s[2];seen[k]=Math.max(seen[k]||0,st);});
  // Ground ripples
  rings=rings.filter(function(r){r.t+=dt;return r.t<1.2;});
  rings.forEach(function(r){ctx.globalAlpha=(1-r.t/1.2)*.8;ctx.strokeStyle=r.color;ctx.lineWidth=dpr;
    ctx.beginPath();ctx.arc(r.x*sc,r.y*sc,Math.max(0,r.t*60*dpr),0,6.283);ctx.stroke();});
  var targetStop=stops[phase==='fly'?leg+1:leg];
  // Layer order, bottom to top: dim capitals, route city labels, stop markers, trail + sparks, year, stork/egg, vehicle, event banners
  ctx.font='500 '+(7*dpr)+"px 'IBM Plex Mono', monospace";ctx.fillStyle='#5f8f6c';ctx.globalAlpha=.78;
  capitals.forEach(function(C){var p=P(C[1],C[2]),x=p[0]*sc,y=p[1]*sc,routeLabelActive=LB.some(function(L){var stop=stops[L[0]];return stop[1]===C[1]&&stop[2]===C[2]&&(L[0]<=leg||(stop[1]===targetStop[1]&&stop[2]===targetStop[2]));});ctx.beginPath();ctx.arc(x,y,1.4*dpr,0,6.283);ctx.fill();if(routeLabelActive)return;ctx.textAlign=C[5]?'right':'left';mapLabel(C[0],x+C[3]*dpr,y+C[4]*dpr);});
  microstateCapitals.forEach(function(C){var p=P(C[2],C[3]),x=p[0]*sc,y=p[1]*sc,size=2.4*dpr;ctx.beginPath();ctx.moveTo(x,y-size);ctx.lineTo(x+size,y);ctx.lineTo(x,y+size);ctx.lineTo(x-size,y);ctx.closePath();ctx.strokeStyle='#a9d9b5';ctx.stroke();if(C[1]){ctx.textAlign=C[6]?'right':'left';mapLabel(C[1],x+C[4]*dpr,y+C[5]*dpr);}});
  ctx.globalAlpha=1;
  // Labels
  var labelRects=[],flying=phase==='fly',vx0=pos[0]*sc,vy0=pos[1]*sc;
  LB.forEach(function(L){
    var p=pts[L[0]],stop=stops[L[0]],selected=L[0]<=leg||(stop[1]===targetStop[1]&&stop[2]===targetStop[2]);
    if(!selected)return;
    ctx.font='500 '+(11*dpr)+"px 'IBM Plex Mono', monospace";
    if('letterSpacing' in ctx)ctx.letterSpacing=1.2*dpr+'px';
    ctx.fillStyle='#a9d9b5';ctx.textAlign=L[3]?'right':'left';
    var txt=stop[0].toUpperCase(),x=p[0]*sc+L[1]*dpr,y=p[1]*sc+L[2]*dpr,w=ctx.measureText(txt).width,
        r={l:(L[3]?x-w:x)-3*dpr,r:(L[3]?x:x+w)+3*dpr,t:y-10*dpr,b:y+4*dpr};
    labelRects.push(r);
    // a label that the plane or train is passing over steps back instead of competing with it
    var nx=Math.max(r.l,Math.min(vx0,r.r)),ny=Math.max(r.t,Math.min(vy0,r.b));
    ctx.globalAlpha=flying&&Math.hypot(nx-vx0,ny-vy0)<12*dpr?.25:1;
    mapLabel(txt,x,y);
    ctx.globalAlpha=1;
  });
  stops.forEach(function(s,i){var key=s[1]+','+s[2],v=seen[key]||0;if(v&&(!stops.slice(0,i).some(function(o){return o[1]+','+o[2]===key;}))){var p=pts[i];ctx.globalAlpha=1;ctx.fillStyle=v===2?'#5dff8a':'#2fcf55';ctx.fillRect(Math.round(p[0]*sc-sq/2),Math.round(p[1]*sc-sq/2),sq,sq);}});
  ctx.globalAlpha=1;
  trail.forEach(function(p,i){ctx.globalAlpha=i/trail.length*.8;ctx.fillStyle='#5dff8a';ctx.fillRect(p[0]*sc-dpr*.75,p[1]*sc-dpr*.75,1.5*dpr,1.5*dpr);});
  ctx.globalAlpha=1;
  parts=parts.filter(function(p){p.l-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=30*dt;return p.l>0;});
  parts.forEach(function(p){ctx.fillStyle=PC[p.c];var z=(p.c?1.5:2.5)*dpr;ctx.fillRect(p.x*sc,p.y*sc,z,z);});
  ctx.font='500 '+(11*dpr)+"px 'IBM Plex Mono', monospace";if('letterSpacing' in ctx)ctx.letterSpacing=1.2*dpr+'px';
  if(showBirthYear){
    // year tag follows the vehicle; it only moves to another side while parked, never during a flight
    var ytxt=String(year),yw=ctx.measureText(ytxt).width,ycand=[[14,-12,0],[14,22,0],[-14,-12,1],[-14,22,1]];
    var yrect=function(c){var x=vx0+c[0]*dpr,y=vy0+c[1]*dpr;return {l:(c[2]?x-yw:x)-3*dpr,r:(c[2]?x:x+yw)+3*dpr,t:y-10*dpr,b:y+4*dpr};};
    var yhit=function(r){return labelRects.some(function(q){return r.l<q.r&&r.r>q.l&&r.t<q.b&&r.b>q.t;});};
    if(!flying&&yhit(yrect(ycand[yearSide])))for(var yc=0;yc<4;yc++)if(!yhit(yrect(ycand[yc]))){yearSide=yc;break;}
    var ys=ycand[yearSide];ctx.textAlign=ys[2]?'right':'left';ctx.fillStyle='#5dff8a';mapLabel(ytxt,vx0+ys[0]*dpr,vy0+ys[1]*dpr);
  }
  // Stork and egg
  if(birthElapsed<birthEventDuration){
    // The stork releases the egg slightly east of Brussels. The egg keeps a little of the stork's westward
    // motion (which fades as it falls) while gravity speeds up the drop, so it lands on the city on a slight diagonal.
    var eggDrift=3,dropX=pts[0][0]+eggDrift,
        approach=Math.min(1,birthElapsed/birthFlightDuration),
        fadeProgress=Math.max(0,Math.min(1,(birthElapsed-birthFlightDuration)/birthFadeDuration)),
        birdX=birthStartX-(birthStartX-dropX)*approach-12*fadeProgress,birdY=4.2+Math.sin(now/125)*.4,
        eggAge=birthElapsed-birthFlightDuration,
        fadeIn=Math.min(1,birthElapsed/birthFadeInDuration);fadeIn=fadeIn*fadeIn*(3-2*fadeIn);
    if(eggAge>=0&&eggAge<birthEggFallDuration){
      var fall=eggAge/birthEggFallDuration,dropH=pts[0][1]-5.5,
          eggX=dropX-eggDrift*(1-(1-fall)*(1-fall)),                // sideways motion eases out
          eggY=5.5+dropH*fall*fall,                                 // gravity: accelerating fall
          vx=2*eggDrift*(1-fall)/birthEggFallDuration,vy=2*dropH*fall/birthEggFallDuration;
      ctx.save();ctx.translate(eggX*sc,eggY*sc);ctx.rotate(Math.atan2(vx,vy+8));   // egg leans along its path
      ctx.beginPath();ctx.ellipse(0,0,2.5*dpr,3.3*dpr,0,0,6.283);ctx.fillStyle='#f4fff4';ctx.fill();ctx.lineWidth=dpr;ctx.strokeStyle='#07150b';ctx.stroke();ctx.restore();
    }
    stork(birdX,birdY,now/105,fadeIn*(1-fadeProgress));
  }
  // Vehicle
  if(phase==='fly'){
    if(leg===2||leg===5||leg===6)train(pos[0],pos[1],hdg);else plane(pos[0],pos[1],hdg);
  }else{
    ctx.beginPath();ctx.arc(pos[0]*sc,pos[1]*sc,2.4*dpr,0,6.283);ctx.fillStyle='#f4fff4';ctx.fill();
    ctx.beginPath();ctx.arc(pos[0]*sc,pos[1]*sc,4*dpr,0,6.283);ctx.strokeStyle='rgba(244,255,244,.45)';ctx.lineWidth=dpr;ctx.stroke();
  }
  ctx.restore();
  // Panel
  if(dirty){
    rows.forEach(function(li,i){
      var cur=(phase==='dwell'&&i===leg)||(phase==='fly'&&i===leg+1);
      li.hidden=i>leg+(phase==='fly'?1:0)||(i===0&&!showBirthYear);
      li.className=cur?'cur':i<=leg?'done':'';
    });
    madridPlan.hidden=year!==2020;
    var anyMilestoneVisible=false;
    mrows.forEach(function(li,i){li.hidden=!showBirthYear||(i===0?year<MS[i][0]-6:reached<i);li.className=i<reached?'done':'';if(!li.hidden)anyMilestoneVisible=true;});
    milestoneSection.classList.toggle('empty',!anyMilestoneVisible);
    $('dr').classList.toggle('on',reached>=MS.length);
    dirty=0;
  }
  var lon=-10+pos[0]/W*26,lat=52-pos[1]/H*19,cu=flown+(phase==='fly'?legKm[leg]*prog:0);
  telemetry.classList.toggle('waiting-for-birth',!showBirthYear);
  $('pos').textContent=lat.toFixed(2)+'°N '+Math.abs(lon).toFixed(2)+'°'+(lon<0?'W':'E');
  $('yr').textContent=showBirthYear?year:'';
  $('lvv').textContent='LV.'+(reached+1);
  $('fl').textContent=Math.round(cu).toLocaleString('en')+' / '+Math.round(total).toLocaleString('en')+' km';
  $('bar').style.width=(cu/total*100)+'%';
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
})();
