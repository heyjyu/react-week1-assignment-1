/* @jsx createElement */

function createElement(tagName, props, ...children) {
    const element = document.createElement(tagName);

    Object.entries(props || {}).forEach(([key, value]) => {
        element[key.toLowerCase()] = value;
    })

    children.flat().forEach((child) => {
        if (child instanceof Node) {
            element.appendChild(child);
            return;
        }
        element.appendChild(document.createTextNode(child));
    });
    return element;
}

function setElement(count, handleClick, handleClickNumber) {
    return (
        <div id="hello" className="greeting">
            <p>hello, world!</p>
            <p>hello, world!!!</p>
            <p>
                <button type="button" onclick={() => handleClick(count)}>
                    Click me!
                    (
                        {count}
                    )
                </button>
            </p>
            <p>
                {[1, 2, 3].map((i) => (<button type="button" onClick={() => handleClickNumber(i)}>{i}</button>))}
            </p>
        </div>
    );
}

function render(count) {
    const handleClick = (value) => {
        const newValue = value + 1;
        render(newValue);
    };

    const handleClickNumber = (value) => {
        render(value);
    };

    const element = setElement(count, handleClick, handleClickNumber);

    document.getElementById('app').textContent = '';
    document.getElementById('app').appendChild(element);
}

render(0);
