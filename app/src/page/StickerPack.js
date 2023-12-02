import { useState, useEffect } from 'react';
import Price from '../components/price/Price'; // Компонент ценового предложения

export default function BannerPage() { 

//================================= Price ======================================================================
class MyPrice {
    constructor(params){
        this.name = params.name             // Наименование услуги     ''
        this.category = params.category     // Категория тавара        ''
        this.cost = params.cost             // Стоимость базовая       00
        this.factor = params.factor         // Множитель за качество   [Фактор '', наценка 0.0]
        this.area = params.area             // Площадь                 mm2
        this.quantity = params.quantity     // Количество              00
        this.add = params.add               // Дополнительные услуги   [[Услуга, цена],   [Услуга, цена]]
    }
    additionCost(){ //Стоимость дополнений
        let sum= 0;
        for (let i=0; i< this.add.length ; i++){
            sum+= this.add[i][1];
        }
        return sum
    }
}
let [PriceName, setPriceName] = useState('Услуга');
let [PriceCategory, setPriceCategory] = useState("Баннеры");
let [PriceCost, setPriceCost] = useState(0);
let [PriceFactor, setPriceFactor] = useState(1);
let [PriceArea, setPriceArea] = useState(1);
let [PriceQuantity, setPriceQuantity] = useState(1);
let [PriceAdd, setPriceAdd] = useState([["Дополнений нет",0]]);


//================================= Вариабельная часть логики ======================================================================
class MyService {
    constructor(params){
        this.name = params.name
        this.cost = params.cost
    }
}

const Banner1 = new MyService({name: "Визитки (50х90мм)", cost: 6});
const Banner2 = new MyService({name: "Листовки А5 (210х148мм)", cost: 16});
const Banner3 = new MyService({name: "Буклеты А4, 2 загиба", cost: 35});
const Banner4 = new MyService({name: "Листовки А6 (105х148мм)", cost: 7.5});
const Banner5 = new MyService({name: "Листовка А4 (210х297мм)", cost: 25});
const Banner6 = new MyService({name: "Флаер (99х210мм)", cost: 10});
const Banner7 = new MyService({name: "Бланк А4 (210х297мм)", cost: 18});
const Banner8 = new MyService({name: "Наклейка А4 (210х297мм)", cost: 30});
const Banner9 = new MyService({name: "Наклейка А5 (148х210мм)", cost: 19});
const Banner10 = new MyService({name: "Наклейка А6 (105х148мм)", cost: 15});
const Banner11 = new MyService({name: "Открытка А5 (148х210мм)", cost: 36});
const Banner12 = new MyService({name: "Постер А3 (297х420мм)", cost: 45});
const Banner13 = new MyService({name: "Грамота / Сертификат, А4 (297х210)", cost: 55});
const Banner14 = new MyService({name: "Изделие домик (на стол), высота 170мм", cost: 46});

//    Размер
let [Width, setWidth] = useState(1);           // Ширина
let [Height, setHeight] = useState(1);         // Высота
let [Area, setArea] = useState(1);             // Площадь изделия

useEffect(() => {     setArea( Width*Height);
}, [Width, Height]);

//    =-========= Разрешение печати =============
class MyResolution {
    constructor(params){
        this.name = params.name
        this.factor = params.factor
    }}

let [PriceFactorResolution, setPriceFactorResolution] = useState();
let [PriceNameResolution, setPriceNameResolution] = useState();

    useEffect(() => { setPriceFactor(PriceFactor);
        setPriceFactorResolution(PriceFactor);
        console.log(PriceFactor,  PriceFactorResolution )
    }, [PriceFactor]);

    let dpi360 = new MyResolution ({name: "360 dpi - сольвентная печать", factor: 1}); 
    let dpi600 = new MyResolution ({name: "600 dpi - сольвентная печать", factor: 1.1}); 
    let dpi720 = new MyResolution ({name: "720 dpi - экосольвентная печать", factor: 1.25}); 
    let dpi1440 = new MyResolution ({name: "1440 dpi - экосольвентная печать", factor: 1.3}); 
    let dpi1440U = new MyResolution ({name: "1440 dpi - ульфтрафиолетовая печать", factor: 2});

    //    =-========= Количество =============
useEffect(() => { setPriceQuantity(PriceQuantity);
    //console.log(PriceQuantity )
}, [PriceQuantity]);


//=====================================================================================================================
return(
<div className="calcForm_flex">
    <div className="calcForm_select">
        <div className='kalk_colwrap'>
{/*============================== Вариабельная часть ===========================================================================*/}
<div className='frm_line mt-3'>  {/*    Выбор услуги */}
                <div className='frm_flab d-flex justify-content-between fw-bold'>
                  <span>Материал</span>
                </div>
                <div className='frm_inp'>
                  <div className='frm_inpline'>
                    <div className='csel ng-pristine ng-untouched ng-valid'>
                    <form>
                    <select 
                      name="article" 
                      className="mt-2 mb-2 form-control ng-pristine ng-untouched ng-valid"
                      value={PriceCost}
                      onChange={(e) =>
                        setPriceCost(e.target.value)}
                    >
                      <option value="0">"Выберите материал"</option>
                      <option value={Banner1.cost}>{Banner1.name}</option>
                      <option value={Banner2.cost}>{Banner2.name}</option>
                      <option value={Banner3.cost}>{Banner3.name}</option>
                      <option value={Banner4.cost}>{Banner4.name}</option>
                      <option value={Banner5.cost}>{Banner5.name}</option>
                      <option value={Banner6.cost}>{Banner6.name}</option>
                      <option value={Banner7.cost}>{Banner7.name}</option>
                      <option value={Banner8.cost}>{Banner8.name}</option>
                      <option value={Banner9.cost}>{Banner9.name}</option>
                      <option value={Banner10.cost}>{Banner10.name}</option>
                      <option value={Banner11.cost}>{Banner7.name}</option>
                      <option value={Banner12.cost}>{Banner8.name}</option>
                      <option value={Banner13.cost}>{Banner9.name}</option>
                      <option value={Banner14.cost}>{Banner10.name}</option>
                    </select>
                    </form>
                    </div>
                  </div>
                </div>
              </div>

{/*============================== END Вариабельная часть ===========================================================================*/}
        </div>
    </div>
{/*============================== Форма заказа ===========================================================================*/}
<div className="calcForm_price">
        <Price PriceCost={PriceCost} Area={Area} PriceFactorResolution={PriceFactorResolution} PriceQuantity={PriceQuantity} />
    </div>
</div>
)};