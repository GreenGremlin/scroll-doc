const win = window || {};
const doc = document || { documentElement: {} };
// IE < 9 & Node
let scrollElem = typeof win.pageYOffset === 'undefined' ?
  doc.documentElement :
  null;

function detectScrollElem() {
  const startScrollTop = window.pageYOffset;
  document.documentElement.scrollTop = startScrollTop + 1;
  if (window.pageYOffset > startScrollTop) {
    document.documentElement.scrollTop = startScrollTop;
    // IE > 9 & FF (standard)
    return document.documentElement;
  }
  // Chrome (non-standard)
  return document.body;
}

export default function scrollDoc() {
  return scrollElem || (scrollElem = detectScrollElem());
}
