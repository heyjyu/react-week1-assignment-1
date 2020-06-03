/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint-disable no-use-before-define */

/* @jsx createElement */
function createElement(tagName, props, ...children) { // eslint-disable-line no-unused-vars
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

const data = {
  count: 0,
};

const handleClick = (value) => render({ count: value + 1 });
const handleClickNumber = (value) => render({ count: value });

function render({ count }) {
  const element = (
    <div id="hello" className="greeting">
      <p>Remove let</p>
      <button type="button" onClick={() => handleClick(count)}>
        Click me! (
        {count}
        )
      </button>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>{i}</button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render(data);
