const output = document.getElementById("output");

// Loading row
output.innerHTML = `
  <tr id="loading">
    <td colspan="2">Loading...</td>
  </tr>
`;

function createPromise() {
  const time = Math.random() * 2 + 1; // 1–3 sec
  return new Promise(resolve => {
    setTimeout(() => resolve(time), time * 1000);
  });
}

// Track start time
const start = performance.now();

Promise.all([createPromise(), createPromise(), createPromise()])
  .then(times => {

    const end = performance.now();
    const totalTime = ((end - start) / 1000).toFixed(3);

    output.innerHTML = `
      <tr>
        <td>Promise 1</td>
        <td>${times[0].toFixed(3)}</td>
      </tr>
      <tr>
        <td>Promise 2</td>
        <td>${times[1].toFixed(3)}</td>
      </tr>
      <tr>
        <td>Promise 3</td>
        <td>${times[2].toFixed(3)}</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>${totalTime}</td>
      </tr>
    `;
  });
