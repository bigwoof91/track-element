export default class Element {
  constructor ({ elementIDs } = null) {
      if (!Array.isArray(elementIDs)){
        throw new Error("element id's should be passed in an array");
      }
      this.elementIDs = elementIDs;
      this.domElements = elementIDs.map(id => {
        const idCounter = id + 'Counter';
        this[idCounter] = 0;
        return document.getElementById(id)
      });

  };

  addEventListenersToDOMs() {
    (this.domElements).forEach(dom => dom.addEventListener("mouseenter", this.logElementHovered, false));
  };

  logElementHovered(e) {
    console.log(e.screenX, e.screenY, e.target.id+' element hovered!');
  };
}

// for testing on index.html
// window.el = Element

