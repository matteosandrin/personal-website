import PhotoSwipeLightbox from "/assets/js/photoswipe-lightbox.esm.min.js";

const arrowSVG =
    '<svg version="1.1" class="right-arrow pswp__icn" x="0px" y="0px" viewBox="0 0 36 36" width="36" height="36" style="enable-background:new 0 0 36 36; width: 36px; height: 36px" xml:space="preserve"> \
        <polyline class="shape-outline outer-color" points="21,29 10,18 21,7"></polyline> \
        <polyline class="shape-shape inner-color" points="21,29 10,18 21,7"></polyline> \
    </svg>';
const closeSVG =
    '<svg class="close-button pswp__icn" version="1.1" x="0px" y="0px" viewBox="0 0 36 36" style="width: 36px; height: 36px" xml:space="preserve" width="36" height="36"> \
        <foreignObject class="shape-outline outer-color" width="36" height="36" style="stroke-width: 2.5px; stroke-miterlimit: 4px"> \
            <svg viewBox="0 0 36 36"> \
                <line x1="10" y1="10" x2="26" y2="26"></line> \
                <line x1="26" y1="10" x2="10" y2="26"></line> \
            </svg> \
        </foreignObject> \
        <foreignObject class="shape-shape inner-color" width="36" height="36" style="stroke-width: 1.5px; stroke-miterlimit: 4px"> \
            <svg viewBox="0 0 36 36"> \
                <line x1="10" y1="10" x2="26" y2="26"></line> \
                <line x1="26" y1="10" x2="10" y2="26"></line> \
            </svg> \
        </foreignObject> \
    </svg>';
const lightbox = new PhotoSwipeLightbox({
    gallery: "#gallery",
    children: "a",
    showHideAnimationType: "fade",
    pswpModule: () => import("/assets/js/photoswipe.esm.min.js"),
    counter: false,
    zoom: false,
    initialZoomLevel: 'fit',
    secondaryZoomLevel: 2.5,
    paddingFn: (viewportSize, itemData, index) => {
        const p = viewportSize.x > 768 ? 32 : 8;
        return {
            top: p,
            bottom: p,
            left: p,
            right: p,
        };
    },
    bgOpacity: 0.8,
    arrowPrevSVG: arrowSVG,
    arrowNextSVG: arrowSVG,
    closeSVG: closeSVG,
});
lightbox.init();