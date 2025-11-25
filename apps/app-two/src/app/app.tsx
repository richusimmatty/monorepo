// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { dummyData } from './data';

export function App() {
  return (
    <div>
      <h1>App Two</h1>
      <ul>
        {dummyData.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
