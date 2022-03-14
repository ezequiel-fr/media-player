
export default ({

    /**
     * Put element into a div. You can add a `br` tag if you need.
     * Default, it just put the element into the div without add
     * any space.
     * 
     * @param {HTMLElement} element element to use.
     * @param {boolean} addSpace add a `br` tag after the `element`.
     * 
     * @returns {HTMLElement} returns div box.
     */

    boxing: (element, addSpace = false) => {
        const _element = element;
        const box = document.createElement('div');

        element.replaceWith(box);

        box.appendChild(_element);
        if (addSpace) box.appendChild(document.createElement('br'));

        return box;
    },


    /**
     * Create new element and return it.
     * 
     * @param {HTMLElement} element
     * @param {Array} name
     * @param {String} prefix
     * 
     * @returns {HTMLElement}
     */

    elementPattern: (element, name, prefix = null) => {
        const el = document.createElement(element);

        el.classList.add(name[0]);

        if (null === prefix) {
            el.id = name[1];
        } else {
            el.classList.add(prefix);
            el.id = [prefix, name[1]].join('-');
        }

        return el;
    },


    /**
     * Create button element and return it.
     * 
     * @param {Array} name the name of the element.
     * @param {String|Array} innerValues
     * 
     * @returns {HTMLElement}
     */

    buttonPattern: (name, innerValues = []) => {
        const element = elementPattern('button', name, 'btn');

        if (typeof innerValues === "string") {
            element.innerText = innerValues;
        } else {
            if (
                innerValues?.length === undefined
                || innerValues.length <= 0
                || innerValues.length > 2
            ) {
                innerValues = ['A', 'B'];
            }

            if (innerValues.length === 1) {
                element.innerHTML = innerValues[0];
            } else {
                element.innerText = innerValues[0];
                element.dataset.alternateValue = innerValues[1];
            }
        }

        return element;
    },


    /**
     * Creates an input of type range.
     * 
     * @param {Array} name the name to set.
     * @param {Number} step the step of the input
     * @param {Number} defaultValue the default value to assign on input.
     * 
     * @returns {HTMLInputElement} returns the `HTMLInputElement`
     */

    rangePattern: (name, step = 1, defaultValue = 0) => {
        const inputRange = elementPattern('input', name);

        inputRange.setAttribute('type', 'range');
        inputRange.setAttribute('max', '100');
        inputRange.setAttribute('min', '0');
        
        inputRange.setAttribute('step', step);
        inputRange.setAttribute('value', defaultValue);
        
        return inputRange;
    }
});
