import logo from './logo.svg';
import './App.css';
import Price from './components/price/Price';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="wrap">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <h1> Калькулятор расчета стоимости печати баннеров </h1>

      <div className="calcForm_flex">
        <div className="calcForm_select">

        </div>
        <div className="calcForm_price">
          <Price/>
        </div>
      </div>

      <div className="calcForm_footer">
        <a href="ya.ru" className="link"  >Tex.требования</a>
        <a href="ya.ru" className="link">Гарантии</a>
        <a href="ya.ru" className="link">Разрешение печати</a>
        <a href="ya.ru" className="link">Как оформить заказ</a>
      </div>
    </div>
  );
}

export default App;
