const template = document.getElementById('weblinksDiv');

template.innerHTML = `<div style="background-color: black;color: white;display: flex;justify-content: center;align-items: center;flex-direction: column;"><div style="text-size-adjust: revert;display: flex;justify-content: center;align-items: center;"><a href="https://otft.github.io/otft_tvg/">Homepage</a><text> · </text><a href="meetchars">Meet the Characters</a><text> · </text><a href="FAQ">FAQ</a><text> · </text><a href="Contact">Contact Me!</a></div>`;

document.getElementById('headerthingie').appendChild(template.content);