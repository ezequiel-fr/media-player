const Builds = {
    boxing: function (element, addSpace = false) {
        const _element = element;
        const box = document.createElement('div');
        element.replaceWith(box);
        box.appendChild(_element);
        if (addSpace)
            box.appendChild(document.createElement('br'));
        return box;
    },
    elementPattern: (element, name = [], prefix = null) => {
        const el = document.createElement(element);
        if (name.length === 2) {
            el.classList.add(name[0]);
            el.id = (null === prefix) ? name[1] : [prefix, name[1]].join('-');
        }
        if (null !== prefix)
            el.classList.add(prefix);
        return el;
    },
    buttonPattern: (name, innerValues = []) => {
        const element = Builds.elementPattern('button', name, 'btn');
        if (typeof innerValues === "string") {
            element.innerText = innerValues;
        }
        else {
            if ((innerValues === null || innerValues === void 0 ? void 0 : innerValues.length) === undefined
                || innerValues.length <= 0
                || innerValues.length > 2) {
                innerValues = ['A', 'B'];
            }
            if (innerValues.length === 1) {
                element.innerHTML = innerValues[0];
            }
            else {
                element.innerText = innerValues[0];
                element.dataset.alternateValue = innerValues[1];
            }
        }
        return element;
    }
};
export default Builds;
//# sourceMappingURL=index.js.map