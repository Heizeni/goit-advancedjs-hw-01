import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as s}from"./assets/vendor-g6-w1428.js";const i="/vanilla-app-template/assets/small-image1-BhyK1eyi.jpg",t="/vanilla-app-template/assets/large-image1-CAyLtROc.jpg",p="/vanilla-app-template/assets/small-image2--zQ04kAB.jpg",g="/vanilla-app-template/assets/large-image2-CFCRcHZz.jpg",n="/vanilla-app-template/assets/small-image3-DaBgdrPU.jpg",r="/vanilla-app-template/assets/large-image3-BcgGUloy.jpg",m="/vanilla-app-template/assets/small-image4-B8yHhXzG.jpg",o="/vanilla-app-template/assets/large-image4-Bg6OEPpM.jpg",c="/vanilla-app-template/assets/small-image5-mkZ6WQpZ.jpg",v="/vanilla-app-template/assets/large-image5-B7lkyUCi.jpg",j="/vanilla-app-template/assets/small-image6-DzjiYAox.jpg",y="/vanilla-app-template/assets/large-image6-D80SAv88.jpg",d="/vanilla-app-template/assets/small-image7-DjmPvC2g.jpg",w="/vanilla-app-template/assets/large-image7-CVwWBzUs.jpg",C="/vanilla-app-template/assets/small-image8-oV9-ivlC.jpg",k="/vanilla-app-template/assets/large-image8-C4DT0-7n.jpg",D="/vanilla-app-template/assets/small-image9-D_tWqsa2.jpg",B="/vanilla-app-template/assets/large-image9-D1WSCXN0.jpg",h=[{preview:i,original:t,description:"Plan your project"},{preview:p,original:g,description:"Generate ideas"},{preview:n,original:r,description:"Save your ideas"},{preview:m,original:o,description:"Choose a workspace"},{preview:c,original:v,description:"Move places"},{preview:j,original:y,description:"Gather your team"},{preview:d,original:w,description:"Take breakes"},{preview:C,original:k,description:"Choose good working enviroment"},{preview:D,original:B,description:"Have team meeting"}],u=document.querySelector(".gallery"),S=h.map(({preview:a,original:e,description:l})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${l}"
          />
        </a>
      </li>
    `).join("");u.innerHTML=S;new s(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
