const output = document.getElementById("output");

// Loading row WITH ID
output.innerHTML = `
  <tr id="loading">
    <td colspan="2">Loading...</td>
  </tr>
`;

function createPromise() {
  const time = Math.random() * 2 + 1; // 1 to 3 sec
  return new Promise(resolve => {
    setTimeout(() => resolve(time), time * 1000);
  });
}

const p1 = createPromise();
const p2 = createPromise();
const p3 = createPromise();

Promise.all([p1, p2, p3]).then(times => {

  const t1 = times[0].toFixed(3);
  const t2 = times[1].toFixed(3);
  const t3 = times[2].toFixed(3);

  const maxTime = Math.max(times[0], times[1], times[2]).toFixed(3);

  output.innerHTML = `
    <tr>
      <td>Promise 1</td>
      <td>${t1}</td>
    </tr>
    <tr>
      <td>Promise 2</td>
      <td>${t2}</td>
    </tr>
    <tr>
      <td>Promise 3</td>
      <td>${t3}</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>${maxTime}</td>
    </tr>
  `;
});
