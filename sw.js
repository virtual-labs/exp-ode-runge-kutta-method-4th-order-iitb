importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"185ec6ed3ba71af1f062d654852ace54","url":"contributors.html"},{"revision":"aab09d00eaf9878525e5f678e1acd49f","url":"feedback.html"},{"revision":"276aeea87b39f10a8029fdc097b2731e","url":"images/fig1.jpg"},{"revision":"07901d8efc3222413fdf5411b67959d7","url":"images/fig2.jpg"},{"revision":"1d97d119215f988a0294ccb163f27468","url":"images/fig3.jpg"},{"revision":"3c6db565352cc484d26554a241b0c5e0","url":"images/fig4.jpg"},{"revision":"92e54ae30f77cfa25be3b76431cc5d17","url":"images/fig5.jpg"},{"revision":"a095c18e213ee3b11a1419471e9eccce","url":"images/fig6.jpg"},{"revision":"0f57b807e9012fa655d9cc313cd187fd","url":"images/procedure.002.png"},{"revision":"0f35fa8a338615f7a95d38b1ff8aab4a","url":"images/procedure.003.png"},{"revision":"b09a3f74e9dcc80fbfd5b87197ea9aee","url":"images/procedure.004.png"},{"revision":"fc068f9b40e6956e15dedf95ef60b66a","url":"images/procedure.005.png"},{"revision":"d81b238af4aebe62fdb4b86695e76853","url":"images/procedure.006.png"},{"revision":"2e4bfeeddb8fe3fec9b5b86d3b2a3695","url":"images/procedure.007.png"},{"revision":"eafdd6c51017b412426989f5750c8116","url":"images/procedure.008.png"},{"revision":"159087a5aed364e35b2a116c270c316a","url":"images/procedure.009.png"},{"revision":"a905eae2c12082f9e5e64020a0483e9f","url":"images/procedure.010.png"},{"revision":"32cae79b7aaf8fa3c093082e7f53e9f8","url":"images/procedure.011.png"},{"revision":"b496945c6bb50cc9c36b45d1761d99d6","url":"images/procedure.012.png"},{"revision":"e5993862a6a7eeff83ca2bb88d27e7dc","url":"images/procedure.013.png"},{"revision":"999a4cba3f203f4cd9b8dca2bff2fb3d","url":"images/procedure.014.png"},{"revision":"9de5c06fbe1fb5fa9c0ab0983d138f35","url":"images/procedure.015.png"},{"revision":"290ae0f6025adf21010d55df5b1a37a3","url":"images/procedure.016.png"},{"revision":"76b4acc08f096ca6919ba5d7ffcee559","url":"images/procedure.017.png"},{"revision":"21bd6081c28c578303f9f12483ddcebf","url":"images/procedure.018.png"},{"revision":"3f44de841010d907fa79d684b64f8a88","url":"images/procedure.019.png"},{"revision":"2337dbed60439290693348f1c428faf0","url":"images/procedure.020.png"},{"revision":"53ecfbe2855f177b829fa86f9883937d","url":"images/procedure.021.png"},{"revision":"9a651a198a9079373cb99e4ac7d3813a","url":"images/procedure.022.png"},{"revision":"2be656c2118dabf9578e2dc33ccde43c","url":"images/procedure.023.png"},{"revision":"cb1f9dab4894342ae33d30734109d748","url":"images/procedure.024.png"},{"revision":"65ba08bb7ff56e21f5ca8812e8d2a1d2","url":"images/procedure.025.png"},{"revision":"34bc4999b7abb8911b18e9f56d4b5384","url":"images/procedure.026.png"},{"revision":"e5fabe203d8373b4083aad02ea5f7a16","url":"images/procedure.027.png"},{"revision":"25b83eef6100f5ee370c4c2bddc4754c","url":"images/procedure.028.png"},{"revision":"977b9b713f576a629e44d060e66446f5","url":"images/step1.png"},{"revision":"3f4291c6dc47c09ce55db76bee130372","url":"images/step10.png"},{"revision":"c49e926c72de8bb3f443d597b3317846","url":"images/step2.png"},{"revision":"a1ce9c628319dc994116e33b70c2a009","url":"images/step3.png"},{"revision":"391e7658eabf7c90ba846ea5965e9914","url":"images/step4.png"},{"revision":"936a904b4d48f67803e1d0f2fc2bcb86","url":"images/step5.png"},{"revision":"d00c5e06e834795c33090eed35fde657","url":"images/step6.png"},{"revision":"f1c45f43dd8bde80246da4f06d869d59","url":"images/step7.png"},{"revision":"54b0a55c05fc76dd1eb7088b8c9dbf4a","url":"images/step8.png"},{"revision":"5bdfaf6ae3f42698472ea95ecc589809","url":"images/step9.png"},{"revision":"5a47fff86e43f5766acd6fc4ed693f91","url":"images/theory.002.png"},{"revision":"3e2b89e72a22b443cd6cfb2ad06e255b","url":"images/theory.003.png"},{"revision":"8239fc95f3d712d00342ed74e8b5e3a5","url":"images/theory.004.png"},{"revision":"d241026f9afd095dec1e77a9dfd1d26e","url":"images/theory.005.png"},{"revision":"965c2211978763ecbc601f7d0cfd6363","url":"images/theory.006.png"},{"revision":"a71d0da0992570ec1cc370dd9efb9d7a","url":"index.html"},{"revision":"856c6db88504158862bdc362a9fa6504","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"745e8b719584769b988543484362ca98","url":"posttest.html"},{"revision":"a46ccb1aa2ed9131355f7d1db9a0bf90","url":"posttest.json"},{"revision":"bfd5daf427968161b5e818d8ba3e8e31","url":"pretest.html"},{"revision":"33f63063961cb20fb27d449bf3c9b0c0","url":"pretest.json"},{"revision":"dc70bd35e51b8ee0541c06d538fdaaa7","url":"procedure.html"},{"revision":"5651359aede0a6301742db11177e59c4","url":"references.html"},{"revision":"dd8c946d225b3306a140084309b39f0d","url":"simulation.html"},{"revision":"199bda46ae46ec95f5ab4391e7ec3a64","url":"simulation/common_libraries/css/style.css"},{"revision":"39445a9b72b8cd276fcd7a0e85f14b05","url":"simulation/common_libraries/js/ts_components/collapse_step.js"},{"revision":"f14f7f2e8038186a9bcd65961f911b29","url":"simulation/common_libraries/js/ts_components/geometry.js"},{"revision":"78930881cdb527fa7e809f14d6ae2ede","url":"simulation/common_libraries/js/ts_components/matrix.js"},{"revision":"4535ea022f115cef58492aa71ab62cc1","url":"simulation/common_libraries/js/ts_components/pannel.js"},{"revision":"9230278de718c3e2a5d9f2f87390de5c","url":"simulation/common_libraries/js/ts_components/questions.js"},{"revision":"1e29160b9e25358aa129e2ba76c57f3f","url":"simulation/common_libraries/js/ts_components/scene.js"},{"revision":"20967a9be8a62c5c9d1c3e8d7e330f8d","url":"simulation/common_libraries/js/ts_components/tables.js"},{"revision":"e3aee782fc14a2310cdffd083fdfce8f","url":"simulation/common_libraries/js/ts_math_library/general_math_functions.js"},{"revision":"75c1b6ecc7b07770bdc2e4692bb4d941","url":"simulation/common_libraries/js/ts_math_library/regression.js"},{"revision":"7e49bc276244b7d39353a6a67114b541","url":"simulation/common_libraries/math.ob.js"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"e35247871b99662501c41171de715bc7","url":"simulation/index.html"},{"revision":"1af91e7aa916e39ec36127ff4a694aa4","url":"simulation/js/activity1.js"},{"revision":"6b10530d2c28e8b4b313f69393c980f9","url":"simulation/js/activity2.js"},{"revision":"48ee687e6212c15698a11d8f87bd08b4","url":"simulation/js/activity3.js"},{"revision":"73120c201c43df811bef7f41ab85fb95","url":"simulation/js/data.js"},{"revision":"ea8d2553eba066060abb5a0356211774","url":"simulation/js/euler.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"2949a0a675e0e2a3c0623669d658936e","url":"simulation/js/screen_size.js"},{"revision":"fd92f81266af7588dd9e34cc3cd61e7f","url":"theory.html"},{"revision":"891a7027c562601a78255fb3c4f21349","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );