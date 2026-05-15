
      const cursor = document.getElementById("cursor");
      const smokeContainer = document.getElementById("smoke-container");
      const triggers = document.querySelectorAll(".hover-trigger");

      let mouseX=0, mouseY=0;
      let curX=0, curY=0;

      /* CURSOR + SMOKE */
      document.addEventListener("mousemove",(e)=>{
        mouseX=e.clientX;
        mouseY=e.clientY;

        createSmoke(mouseX,mouseY);
      });

      function animate(){
        curX += (mouseX-curX)*0.12;
        curY += (mouseY-curY)*0.12;

        cursor.style.left=curX+"px";
        cursor.style.top=curY+"px";

        requestAnimationFrame(animate);
      }
      animate();

      function createSmoke(x,y){
        const smoke=document.createElement("div");
        smoke.classList.add("elem");

        smoke.style.left=x+"px";
        smoke.style.top=y+"px";

        smoke.style.setProperty("--x",(Math.random()-0.5)*300+"px");
        smoke.style.setProperty("--y",(Math.random()-0.5)*300+"px");
        smoke.style.setProperty("--r",Math.random()*360+"deg");

        smokeContainer.appendChild(smoke);
        smoke.addEventListener("animationend",()=>smoke.remove());
      }

      triggers.forEach(btn=>{
        btn.addEventListener("mouseenter",()=>{
          cursor.style.width="60px";
          cursor.style.height="60px";
          cursor.style.background="rgba(165,243,252,0.15)";
          cursor.style.boxShadow="0 0 20px rgba(165,243,252,0.4)";
        });

        btn.addEventListener("mouseleave",()=>{
          cursor.style.width="20px";
          cursor.style.height="20px";
          cursor.style.background="white";
          cursor.style.boxShadow="none";
        });
      });
 