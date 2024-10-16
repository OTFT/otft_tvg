const template1 = document.getElementById('weblinksDiv01');

template1.innerHTML = `<div style="height:60px;text-size-adjust: revert;display: flex;justify-content: center;align-items: center;"><a href="https://otft.github.io/otft_tvg/">Homepage</a><text> · </text><a href="meetchars">Meet the Characters</a><text> · </text><a href="FAQ">FAQ</a><text> · </text><a href="Contact">Contact Me!</a></div>`;

document.getElementById('footerthingie').appendChild(template1.content);