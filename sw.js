importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"3dfb21f8c17350be2867744c9c6cfe18","url":"contributors.html"},{"revision":"1e90768b40d4d8faa6ecdbdbc7898ec2","url":"feedback.html"},{"revision":"a4b25f7d5a9c5ce14460390c1b5a592b","url":"images/aim.001.png"},{"revision":"27f09d98a927e9e29d2b30eedc5a6b58","url":"images/fig1.jpg"},{"revision":"6a96d91c933558697df38eca46223b1e","url":"images/fig2.jpg"},{"revision":"1c0deae21ef208eed0648fd1c77d2d32","url":"images/proc_1.jpg"},{"revision":"a19e9282a05b926707dbdb0ee8f26ca3","url":"images/proc_2.jpg"},{"revision":"18c4fbd2f80b6f4865feea04d9c941f9","url":"images/proc_3.jpg"},{"revision":"a4b25f7d5a9c5ce14460390c1b5a592b","url":"images/procedure.001.png"},{"revision":"17afa763142080e80338ad537ac485ea","url":"images/procedure.002.png"},{"revision":"814d83c96035308b2ceb470d82b897ea","url":"images/procedure.003.png"},{"revision":"1352298ca4d3e067a7a6b8435480630a","url":"images/procedure.004.png"},{"revision":"5bc2d08d012c9f036539de3658d4e59d","url":"images/procedure.005.png"},{"revision":"c22e5958cd33bf4d2e6851c0dd820252","url":"images/procedure.006.png"},{"revision":"1c7e1063cfc830f93ab5c1834093aa0c","url":"images/procedure.007.png"},{"revision":"929ef2dd7900e5c500f6640150da6fa7","url":"images/procedure.008.png"},{"revision":"20a187bba6127d1c98409079ebf84653","url":"images/procedure.009.png"},{"revision":"699e5d68b0f237c9276a2c4c8119de6c","url":"images/procedure.010.png"},{"revision":"3eac02a7c03594c322ddfb32f9b7f4d3","url":"images/procedure.011.png"},{"revision":"043901a06fb538945c18164d7b7a2270","url":"images/procedure.012.png"},{"revision":"45a4654c624374678762f70247e7910b","url":"images/procedure.013.png"},{"revision":"944e0a7fc869aa27e21513c7d25c6fc9","url":"images/procedure.014.png"},{"revision":"0dcfcda68f64726a3f6d2fef45e992c3","url":"images/procedure.015.png"},{"revision":"e6fc8c811deb6eadfd549acd10446981","url":"images/procedure.016.png"},{"revision":"93ec5ab3663bced53f8b156385a004bd","url":"images/procedure.017.png"},{"revision":"27edd5bfb9a66cec0468c32055a55dde","url":"images/procedure.018.png"},{"revision":"a4b25f7d5a9c5ce14460390c1b5a592b","url":"images/references.001.png"},{"revision":"d76a362e1f479c0f157b4b03c11490a3","url":"images/step1.png"},{"revision":"0b0804130f7864df8b1c9bbeb88a2300","url":"images/step2.png"},{"revision":"9922cd6982c734cd09a214b083f5e001","url":"images/step3.png"},{"revision":"47351b16fef6229f7a4bfb40c0600656","url":"images/step4.png"},{"revision":"ac41372b82e0571050b5b9b00f3f3e55","url":"images/step5.png"},{"revision":"c58717be259e3762a3e9df3fe8e6b57d","url":"images/step6.png"},{"revision":"1f2a2c37a65a3559e5605d7f188beb92","url":"images/step7.png"},{"revision":"9cbfe611895b230c3cd895e4d934c7da","url":"images/theo1.jpg"},{"revision":"cd3e72209f217e5a1015af764007e9c0","url":"images/theo2.jpg"},{"revision":"f332373bcbd0d5014801d659c3ed57e4","url":"images/theo3.jpg"},{"revision":"686b4b74e6bf83e2cbc2dfa42519f111","url":"images/theo4.jpg"},{"revision":"bc94c152d023e38e7df21da8b8244f6d","url":"images/theo5.jpg"},{"revision":"8ea2c7d21ad5ffc0cef5febbe5741da4","url":"images/theo6.jpg"},{"revision":"a4b25f7d5a9c5ce14460390c1b5a592b","url":"images/theory.001.png"},{"revision":"95461bb26ab275bb5d0fac30cfbdad57","url":"images/theory.002.png"},{"revision":"ce06c958d5928fd35ac2730e1a1672e4","url":"images/theory.003.png"},{"revision":"e76edf35fee3bf65503538bd796072be","url":"images/theory.004.png"},{"revision":"5f7fe3df7a0c318d52310234e837dc70","url":"images/theory.005.png"},{"revision":"5ca80f9b3e1d2f44e0ef8255c80692de","url":"images/theory.006.png"},{"revision":"df4934c4dfed154d77b3ad526cdb5c41","url":"images/theory.007.png"},{"revision":"25c7914941d2c3f8889ef82e32afe217","url":"images/theory.008.png"},{"revision":"3bcebddcfbb3546b5a34d8034cbe02da","url":"images/theory.009.png"},{"revision":"90a31fb15809a0695235a3a912114968","url":"images/theory.010.png"},{"revision":"c49bba646ee85bbb2de305263bcc25c9","url":"index.html"},{"revision":"e7063ffcaecb114452ce51da3b689b2a","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"41ea999f9f24222ea249175e49230c3d","url":"posttest.html"},{"revision":"7b178385ac877119e7a9d981c8464581","url":"posttest.json"},{"revision":"b647bc6df75dfce74e31ecff95be462b","url":"pretest.html"},{"revision":"11a1b092ebb9e97cc3781dfeeaf9b1f5","url":"pretest.json"},{"revision":"b20ae75d25c105f18f2d031687324c22","url":"procedure.html"},{"revision":"f7f05d42026c465ec975adb6f48a586c","url":"references.html"},{"revision":"590f9d9f58a34b6458c2aff48a306309","url":"simulation.html"},{"revision":"199bda46ae46ec95f5ab4391e7ec3a64","url":"simulation/common_libraries/css/style.css"},{"revision":"39445a9b72b8cd276fcd7a0e85f14b05","url":"simulation/common_libraries/js/ts_components/collapse_step.js"},{"revision":"f14f7f2e8038186a9bcd65961f911b29","url":"simulation/common_libraries/js/ts_components/geometry.js"},{"revision":"78930881cdb527fa7e809f14d6ae2ede","url":"simulation/common_libraries/js/ts_components/matrix.js"},{"revision":"4535ea022f115cef58492aa71ab62cc1","url":"simulation/common_libraries/js/ts_components/pannel.js"},{"revision":"9230278de718c3e2a5d9f2f87390de5c","url":"simulation/common_libraries/js/ts_components/questions.js"},{"revision":"1e29160b9e25358aa129e2ba76c57f3f","url":"simulation/common_libraries/js/ts_components/scene.js"},{"revision":"20967a9be8a62c5c9d1c3e8d7e330f8d","url":"simulation/common_libraries/js/ts_components/tables.js"},{"revision":"e3aee782fc14a2310cdffd083fdfce8f","url":"simulation/common_libraries/js/ts_math_library/general_math_functions.js"},{"revision":"75c1b6ecc7b07770bdc2e4692bb4d941","url":"simulation/common_libraries/js/ts_math_library/regression.js"},{"revision":"7e49bc276244b7d39353a6a67114b541","url":"simulation/common_libraries/math.ob.js"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"3d939e2ce8ee90f7afbc5d15bfa3c22f","url":"simulation/images/distribution.png"},{"revision":"81bc3daffef7f4ef8d30e3edc0dd4f11","url":"simulation/index.html"},{"revision":"23c2a6cfffee8214c29e777bd3934972","url":"simulation/js/activity1.js"},{"revision":"fe65ed8eac22c5a624dd983ad83cb3d1","url":"simulation/js/activity2.js"},{"revision":"4956a67954496bc199c7871b87e83941","url":"simulation/js/activity3.js"},{"revision":"e68c37eba560f726260a166ee2172704","url":"simulation/js/data.js"},{"revision":"e3081cd3dd9b9ba4c057d4ea3f50f450","url":"simulation/js/gauss_ele.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"2949a0a675e0e2a3c0623669d658936e","url":"simulation/js/screen_size.js"},{"revision":"b8f9adff16a0832a331537334362d094","url":"simulation/js/trap.js"},{"revision":"33517b26d9d6b0241dbeb23c9087b9e2","url":"theory.html"},{"revision":"87acda7f3ab70a694b48c5a2c2026df9","url":"validator-report.html"}]);

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