document.querySelectorAll('input[name="automobile"]').forEach((input) => {
    input.addEventListener('change', () => {
      document.getElementById('output').innerText = `You selected ${input.value}`;
    });
  });
  