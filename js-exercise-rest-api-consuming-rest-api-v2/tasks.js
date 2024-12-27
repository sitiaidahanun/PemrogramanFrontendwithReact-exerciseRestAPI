async function task1() {
  const response = await fetch('http://localhost:3000');
  return response;
}

async function task2() {
  const response = await fetch('http://localhost:3000/task2', {
      method: 'PATCH'
  });
  return response.json();
}

async function task3() {
  const response = await fetch('http://localhost:3000/task3?user_id=3&role=admin', {
      method: 'POST'
  });
  return response.json();
}

async function task4() {
  const response = await fetch('http://localhost:3000/task4', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: "admin", password: "password" })
  });
  return response.json();
}

export { task1, task2, task3, task4 };
