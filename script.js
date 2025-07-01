document.getElementById('btn').addEventListener('click', function () {
  const input = document.getElementById('ip').value;
  const output = document.getElementById('output');
	
output.innerText = '';

const num = Number(input);

new Promise((resolve) => {
	setTimeout(() => {
		output.innerText = `Result: ${num}`;
		resolve(num);
	}, 2000);
})
.then((value) => {
	return new Promise((resolve) => {
	setTimeout(() => {
	  const result = value * 2;
	  output.innerText = `Result: ${result}`;
		resolve(result);
	}, 2000);
	});
})

.then((value) => {
  return new Promise((resolve) => {
	setTimeout(() => {
	  const result = value - 3;
	  output.innerText = `Result: ${result}`;
	  resolve(result);
	}, 1000);
  });
})

    // Fourth Promise - divide by 2 after 1s
    .then((value) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = value / 2;
          output.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })

    // Fifth Promise - add 10 after 1s
    .then((value) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = value + 10;
          output.innerText = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    });
});



