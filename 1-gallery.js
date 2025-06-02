import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as i}from"./assets/vendor-g6-w1428.js";const g="/goit-advancedjs-hw-01/assets/small-image1-BhyK1eyi.jpg",l="/goit-advancedjs-hw-01/assets/large-image1-CAyLtROc.jpg",t="/goit-advancedjs-hw-01/assets/small-image2--zQ04kAB.jpg",o="/goit-advancedjs-hw-01/assets/large-image2-CFCRcHZz.jpg",n="/goit-advancedjs-hw-01/assets/small-image3-DaBgdrPU.jpg",r="/goit-advancedjs-hw-01/assets/large-image3-BcgGUloy.jpg",c="/goit-advancedjs-hw-01/assets/small-image4-B8yHhXzG.jpg",m="/goit-advancedjs-hw-01/assets/large-image4-Bg6OEPpM.jpg",d="/goit-advancedjs-hw-01/assets/small-image5-mkZ6WQpZ.jpg",p="/goit-advancedjs-hw-01/assets/large-image5-B7lkyUCi.jpg",j="/goit-advancedjs-hw-01/assets/small-image6-DzjiYAox.jpg",v="/goit-advancedjs-hw-01/assets/large-image6-D80SAv88.jpg",w="/goit-advancedjs-hw-01/assets/small-image7-DjmPvC2g.jpg",h="/goit-advancedjs-hw-01/assets/large-image7-CVwWBzUs.jpg",y="/goit-advancedjs-hw-01/assets/small-image8-oV9-ivlC.jpg",C="/goit-advancedjs-hw-01/assets/large-image8-C4DT0-7n.jpg",k="/goit-advancedjs-hw-01/assets/small-image9-D_tWqsa2.jpg",D="/goit-advancedjs-hw-01/assets/large-image9-D1WSCXN0.jpg",B=[{preview:g,original:l,description:"Plan your project"},{preview:t,original:o,description:"Generate ideas"},{preview:n,original:r,description:"Save your ideas"},{preview:c,original:m,description:"Choose a workspace"},{preview:d,original:p,description:"Move places"},{preview:j,original:v,description:"Gather your team"},{preview:w,original:h,description:"Take breakes"},{preview:y,original:C,description:"Choose good working enviroment"},{preview:k,original:D,description:"Have team meeting"}],u=document.querySelector(".gallery"),S=B.map(({preview:a,original:e,description:s})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${s}"
          />
        </a>
      </li>
    `).join("");u.innerHTML=S;new i(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
