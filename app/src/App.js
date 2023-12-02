import logo from './logo.svg';
import './css/style.css';
import { useState, useEffect } from 'react';
import BannerPage from './page/Banner.js'
import CanvasesPage from './page/Canvases.js'
import FilmsPage from './page/Films.js';
import PolygraphyPage from './page/Polygraphy.js';
import PostersPage from './page/Posters.js';
import SingsPage from './page/Signs.js';
import StandsPage from './page/Stands.js';
import StickerPackPage from './page/StickerPack.js';
import UVprintingPage from './page/UVprinting.js';



function App() {


//=============================== Категории ============================================================================
class Category { 
  constructor(params){
      this.name = params.name
      this.title = params.title
      this.src = params.src

  }};
      
      const Banners = new Category ({ name: "Баннеры", title: "Калькулятор расчета стоимости печати баннеров", src: "https://wowbanner.ru/sites/default/files/2023-04/icon%20%282%29.png"});
      const Films = new Category ({ name: "Пленки, наклейки", title: "Калькулятор расчета печати наклеек", src: "https://wowbanner.ru/sites/default/files/2023-04/Vector%20%289%29.png"  });
      const Posters = new Category ({ name: "Плакаты, постеры", title: "Калькулятор расчета печати плакатов, постеров, обоев", src: "https://wowbanner.ru/sites/default/files/2023-04/Vector%20%2810%29.png"  });
      const Stands = new Category ({ name: "Мобильные стенды", title: "Калькулятор изготовления мобильных стендов", src: "https://wowbanner.ru/sites/default/files/2023-04/Vector%20%28Stroke%29.png"  });
      const Canvases = new Category ({ name: "Холсты, картины", title: "Калькулятор изготовления холстов, картин", src: "https://wowbanner.ru/sites/default/files/2023-04/Frame.png"  });
      const Signs = new Category ({ name: "Таблички", title: "Калькулятор изготовления пластиковых табличек", src: "https://wowbanner.ru/sites/default/files/2023-04/Group%203.png"  });
      const StickerPack = new Category ({ name: "Плоттерная резка", title: "Калькулятор плоттерной резки, стикерпаки", src: "https://wowbanner.ru/sites/default/files/2023-04/icon%20%283%29.png"  });
      const Polygraphy = new Category ({ name: "Полиграфическая продукция", title: "Полиграфическая продукция", src: "https://wowbanner.ru/sites/default/files/2023-04/icon%20%284%29.png"  });
      const UVprinting = new Category ({ name: "УФ печатьлистова", title: "Калькулятор УФ печати", src: "https://wowbanner.ru/sites/default/files/2023-04/icon%20%285%29.png"  });

let [ListCategory, setListCategory] = useState([Banners, Films, Posters, Stands, Canvases, Signs, StickerPack, Polygraphy, UVprinting]);
let [ActivCategory, setActivCategory] = useState(0);
let [Page, setPage] = useState();


useEffect(() => {
let FunctionPage = [
  < BannerPage />,
  < CanvasesPage />,
  < FilmsPage />,
  < PolygraphyPage />,
  < PostersPage />,
  < SingsPage />,
  < StandsPage />,
  < StickerPackPage />,
  < UVprintingPage />
                  ];

  setPage(FunctionPage[ActivCategory]);
}, [ActivCategory]);

function NowPage(){
  return Page
}
//=====================================================================================================================
  return (
    <div className="App">
      <header className="App-header">
          <div className="wrap">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>


      <div className='PageSelection block-b5subtheme-page-title'>
    <div className='row title_whis'>
        <div className='col-lg'>
            <h1>{ListCategory[ActivCategory].title}</h1>
        </div>
        <div className='col-lg title_whis_text '>
            <div className='gridwrap_grey'>
                <p>Минимальная стоимость заказа&nbsp;<strong>1500 ₽</strong><br/>Срочная печать сегодня&nbsp;<strong>плюс 10–60%</strong>&nbsp;к стоимости, зависит от объёма заказа и загрузки производства</p>
            </div>
        </div>
    </div>
    <div className='field field--name-field-p field--type-entity-reference-revisions field--label-hidden field__items row d-sm-flex'>
{/*============================== Menu ===============================================================================*/}
    {ListCategory.map(category => {
        return (
            <div className='field__item col-sm'>
            <div className='paragraph paragraph--type--ikonki paragraph--view-mode--default'>
                <div onClick={() => {setActivCategory(ListCategory.indexOf(category))}} className='Page_Button  field field--name-field-ssylka field--type-link field--label-hidden field__item '>
                    <div class="imgwrap"> 
                        <img width="41" height="40" alt="Баннеры" class="img-fluid b-lazy b-loaded is-b-loaded" src={category.src}/>
                    </div>
                    <div class="linktext">{category.name}</div>
                </div>
            </div>
        </div>
        )
    })};
    </div>

{/*============================== Страница ======================================================++++++++++============*/}
<NowPage/>

{/*============================== Footer ===============================================================================*/}
</div>
      <div className="calcForm_footer">
        <a href="ya.ru" className="link"  >Tex.требования</a>
        <a href="ya.ru" className="link">Гарантии</a>
        <a href="ya.ru" className="link">Разрешение печати</a>
        <a href="ya.ru" className="link">Как оформить заказ</a>
      </div>
    </div>
  );}


export default App;
