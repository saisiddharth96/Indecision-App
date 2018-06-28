console.log("build-it!");

const appRoot = document.getElementById("app");

const showDetails = () => {
  <p>Check out the secret details!</p>;

  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={showDetails}>Show details</button>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
