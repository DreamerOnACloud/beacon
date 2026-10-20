// Reusable quiz. Usage: <div class="quiz" data-quiz='[{"q":"...","opts":["a","b","c"],"answer":1,"why":["why a","why b","why c"]}]'></div>
document.querySelectorAll('.quiz[data-quiz]').forEach(root=>{
  const items=JSON.parse(root.dataset.quiz);let done=0,right=0;
  const score=document.createElement('p');score.className='score';
  items.forEach(it=>{
    const box=document.createElement('div');box.className='q';
    const p=document.createElement('div');p.innerHTML=it.q;box.appendChild(p);
    const opts=document.createElement('div');opts.className='opts';
    const fb=document.createElement('div');fb.className='fb';
    it.opts.forEach((label,i)=>{
      const b=document.createElement('button');b.textContent=label;
      b.onclick=()=>{
        opts.querySelectorAll('button').forEach(x=>x.disabled=true);
        const ok=i===it.answer;b.classList.add(ok?'right':'wrong');
        if(!ok)opts.children[it.answer].classList.add('right');
        fb.textContent=(ok?'Correct. ':'Not quite. ')+it.why[i===it.answer?it.answer:i]+(ok?'':' Right answer: '+it.opts[it.answer]+'. '+it.why[it.answer]);
        done++;if(ok)right++;
        if(done===items.length)score.textContent='Score: '+right+' / '+items.length+'. Revisit any you missed in a few days.';
      };opts.appendChild(b);
    });
    box.appendChild(opts);box.appendChild(fb);root.appendChild(box);
  });
  root.appendChild(score);
});
