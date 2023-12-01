import { useState, useEffect } from 'react';
import Price from './price/Price';


export default function PageSelection() { 


//=============================== Objects ============================================================================
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
let [ActivCategory, setActivCategory] = useState(3);

//  ======   Дополнительные функции   ================================================================
    class Additions {
        constructor (params) {
            this.name = params.name
            this.cost = params.cost
            this.info = params.info
        }
    AdditionalInfo(){
    return [this.name, this.cost]
    }
    };

        const Lyuversy = new Additions ({ name: "Люверсы", cost: 160, info:  "Люверсы - металлические отверстия круглой формы состоящие из двух частей – кольца и элемента с втулкой. Устанавливают по периметру полотна с подворотом края. Предназначены для качественного натяжения и крепления полотна." });
        const Karman = new Additions ({ name: "Карман", cost: 100,  info: "Карман под утяжелитель - размещается в нижней части баннера для размещения утяжеляющих элементов. Если нужны карманы не только снизу, просьба прописывать это в задании." });
        const UsilenieShnurom = new Additions ({ name: "Усиление шнуром", cost: 480,  info: "Усиление шнуром - представляет собой: загиб края баннера/прокладка веревки 6мм/проклейка/установка люверсов. Шнур прочно удерживает люверсы от вырывания. Рекомендуется при изготовлении больших полотен."});
        const Polya = new Additions ({ name: "Поля", cost: 100,  info: "Поля" });
        const ProklejkaProvarka = new Additions ({ name: "Проклейка/проварка", cost: 100,  info: "Проклейка краев - подразумевает собой проклеенный загиб края баннера. Позволяет значительно укрепить баннер. На баннерах малых размеров не требуется. " });
        const RezkaVrazmer = new Additions ({ name: "Резка в размер", cost: 0,  info: "Резка в размер - обрезка до готового размера (без полей)" });
        const PlakatnyjProfil = new Additions ({ name: "Плакатный профиль", cost: 800,  info: "Пластиковый профиль, устанавливается на гибкий материал. Нужен для удобного, качественного монтажа плакатов, баннеров. В расчете профиль сверху и снизу. " });
        const Laminaciya = new Additions ({ name: "Ламинация", cost: 320,  info: "Ламинация это накатка слоя пленки, позволяющая улучшить внешний вид и защитить от внешнего воздействия. Стоимость за одну сторону.   " });
        const CMYK = new Additions ({ name: "CMYK", cost: 800,  info: "CMYK (Cyan, Magenta, Yellow, Black) - традиционная цветная печать на основе 4-х цветов (голубой, пурпурный, желтый, черный)" });
        const NatyazhkaPodramnik = new Additions ({ name: "Натяжка на подрамник", cost: 0,  info: "Напечатанный холст, с помощью скоб,натягивается на подрамник сделанный из сосны (сорт А). В верхней части по центру устанавливается крепежный элемент." });
        const ZagibNAtorcy = new Additions ({ name: "Загиб на торцы", cost: 0,  info: "Загиб пленки на торцы делает табличку более презентабельнее и значительно уменьшает вероятность отклеивания пленки с улов." });
        const UstanovkaMetallicheskogoProfilya = new Additions ({ name: "Установка металлического профиля", cost: 32,  info: "Багетный аллюминиевый профиль отлично декорирует таблички, имеются цвета золото, серебром, матовые или глянцевые." });
        const UstanovkaPetel = new Additions ({ name: "Установка петель", cost: 120,  info: "Петли предназначены для более удобного монтажа. В стоимость входит 2-е петли. Применяется для жесткого материала." });
        const DistancionnyeDerzhateli = new Additions ({ name: "Дистанционные держатели", cost: 440,  info: "Предназначен для закрепления информационных табличек на стену в определенном расстоянии от нее" });
        const PloskijKarman = new Additions ({ name: "Плоский карман А4", cost: 250,  info: "Плоский карман А4 из прозрачного ПЭТ пластика толщиной 0.5мм. " });
        const IzobrazhenieSDvuhStoron = new Additions ({ name: "Изображение с двух сторон", cost: 0,  info: "Пленка клеится с двух сторон пластика." });
        const FrezernayaRezka = new Additions ({ name: "Резка нестандартной формы", cost: 0,  info: "Резка пластика практически любой формы с помощью фрезерного станка. Минимальная стоимость фрезерной резки 1500руб." });
        const PriklejkaSkotcha = new Additions ({ name: "Приклейка скотча", cost: 4,  info: "Приклейка двухстороннего скотча на оборотную сторону. Включает в себя 2 полосы нанесенного скотча на оборот по длинной стороне изделия." });
        const SverlenieOtverstij = new Additions ({ name: "Сверление отверстий", cost: 80,  info: "В стоимость входит сверление 2-х отверстий. Применяется для жесткого материала" });
        const SkruglenieUglov = new Additions ({ name: "Скругление углов", cost: 200,  info: "Скругление 4-х углов изделия" });
        const UFpechat = new Additions ({ name: "УФ печать", cost: 100,  info: "Листовая печать, не рулонная. УФ печать белой краской, лаком и cmyk, максимальный размер печати 600х900мм " });

let [ListAdditions, setListAdditions] = useState([]);




function AdditionsTarget(ListAdditions){

let  [Option0, setOption0] = useState(false);             
let  [Option1, setOption1] = useState(false);              
let  [Option2, setOption2] = useState(false);             
let  [Option3, setOption3] = useState(false);              
let  [Option4, setOption4] = useState(false);             
let  [Option5, setOption5] = useState(false);             
let  [Option6, setOption6] = useState(false);             
let  [Option7, setOption7] = useState(false);             
let  [Option8, setOption8] = useState(false);              
let  [Option9, setOption9] = useState(false);   
let  [Options, setOptions] = useState([Option0, Option1,  Option2, Option3, Option4, Option5, Option6, Option7, Option8,  Option9]);

return (    
    <div className='frm_line mt-5'>
    <div className='frm_flab d-flex justify-content-between fw-bold'>
    <span>Дополнительные опции</span>
    </div>
    <div className='frm_inp'>
      <div className='frm_inpline'>
        <div className="row">
          <div className="col-sm">
            <div className='csel ng-pristine ng-untouched ng-valid'>
              <form>
                <div className="row  text-start">


                    {ListAdditions.map((addition)=>{
                    return(
                    <div className="addition-select col-sm">
                        <input className="form-check-input" type="checkbox"  checked={setOptions[ListAdditions.indexOf(addition)]} onChange={() => setOption0(!setOptions[ListAdditions.indexOf(addition)])} id="defaultCheck1"></input>
                        <label className="form-check-label" for="defaultCheck1">&emsp;{addition.name}&emsp;</label>
                    <br/>
                    </div>    
                    )})}


                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)};





//================================= End Objects ======================================================================

//================================= Price ======================================================================
class MyPrice {
    constructor(params){
        this.name = params.name             // Наименование услуги     ''
        this.category = params.category     // Категория тавара        ''
        this.cost = params.cost             // Стоимость базовая       00
        this.factor = params.factor         // Множитель за качество   {Фактор '': наценка 0.0} 
        this.area = params.area             // Площадь                 mm2
        this.quantity = params.quantity     // Количество              00
        this.add = params.add               // Дополнительные услуги   [{Услуга: цена}{Услуга: цена}]
    }
    


}



//================================= End Price ======================================================================
















    
return(
/*============================== Header ===============================================================================*/ 
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
{/*============================== End Menu ===============================================================================*/}
    </div>

<div className="calcForm_flex">
    <div className="calcForm_select">
        <div className='kalk_colwrap'>



{/*============================== Дополнительные услуги ==================================================================*/}
{AdditionsTarget(ListAdditions)}

{/*============================== END Дополнительные услуги ==============================================================*/}
    </div>
</div>
{/*============================== Форма заказа ===========================================================================*/}
<div className="calcForm_price">

    <Price  cost={0} OptionsProps={[]} />



</div>




</div></div>)};