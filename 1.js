"use strict";
(function(d){
    var b = d.getElementById('tvprofil-box');
    if(!b) return;
    var i = d.createElement('iframe'), cc=b.dataset.country||'', tz=b.dataset.timezone||'';
    if(cc!=='') cc+='/';
        i.setAttribute('id', 'tvprofil-box-frame'),
        i.setAttribute('scrolling', 'no'),
        i.setAttribute('frameBorder', '0'),
        i.setAttribute('width', '100%'),
        i.setAttribute('src', 'https://box.tvprofil.com/'+cc+'tvbox/?css='+b.dataset.css+'&l='+b.dataset.lang+'&c='+b.dataset.channels+'&z='+tz);

    window.addEventListener('message', function(t){
        if(t.origin==='https://box.tvprofil.com') {
            i && t.data.height && (i.style.height = t.data.height + 'px');
            b && t.data.backgroundColor && (b.style.backgroundColor = t.data.backgroundColor, b.firstChild.style.color = t.data.color, b.firstChild.style.textDecoration = t.data.textDecoration);
        }
    });

    b.parentNode.insertBefore(i, b.nextSibling);

    b.style.display = 'block';
    b.style.padding = '5px 0px';
    b.style.textAlign = 'center';
    b.addEventListener('mouseover', function () {
        this.style.textDecoration = 'underline';
    });
    b.addEventListener('mouseout', function () {
        this.style.textDecoration = 'none';
    });
})(document);
