import { useState, useEffect } from 'react';
import Price from '../price/Price';


export default function Banners() { 

let [Article, setArtikle] = useState(0); // Артикль материала
let [Width, setWidth] = useState(1);     // Ширина
let [Height, setHeight] = useState(1);   // Высота
let [Resolution, setResolution] = useState(1); //Разрешение печати
let [Area, setArea] = useState(1); // Площадь изделия
let [Quantity, setQuantity] = useState(1); // Количество товара

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


const OptionInfo = [
                      [350, "Люверсы" ],
                      [150, "Карман" ],
                      [250, "Усиление шнуром" ],
                      [50, "Поля" ],
                      [652, "Проклейка/проварка" ],
                      [125, "Резка в размер" ],
                      [952, "Плакатный профиль" ],
                      [350, "" ],
                      [350, "" ],
                      [350, "" ]
                    ];


let  [Options, setOptions] = useState([Option0, Option1,  Option2, Option3, Option4, Option5, Option6, Option7, Option8,  Option9]);
let [OptionsProps, setOptionsProps] = useState([]);
let [Cost, setCost] = useState(0); // Стоимость



useEffect(() => {
    setArea( Width*Height);
}, [Width, Height]);


useEffect(() => {
setOptions([Option0, Option1,  Option2, Option3, Option4, Option5, Option6, Option7, Option8,  Option9]);
}, [Option0, Option1,  Option2, Option3, Option4, Option5, Option6, Option7, Option8,  Option9]);



useEffect(() => {
  let sumOptions = 0;
  let optionsText = [];
  let optionsCost = [];
    for (let index = 0; index < Options.length; ++index){
        if (Options[index]) {
          sumOptions+= OptionInfo[index][0]; 
          optionsText.push(OptionInfo[index][1]);
          optionsCost.push(OptionInfo[index][0]);
        }
    }
console.log(optionsText);
setOptionsProps(optionsText);
  setCost(Area*Article*Resolution*Quantity+sumOptions*Quantity);
}, [Area, Article, Resolution, Quantity, Options]);





return(
<div className="calcForm_flex">
        <div className="calcForm_select">
          <div className='kalk_colwrap'>

              <div className='frm_line mt-3'>
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
                      value={Article}
                      onChange={(e) =>
                        setArtikle(e.target.value)}
                    >
                      <option value="">"Выберите материал"</option>
                      <option value="10">Баннер ламинированный 440гр</option>
                      <option value="20">Баннер литой 510гр</option>
                      <option value="30">Блэкаут светоблокирующий односторонний</option>
                      <option value="40">Сетка баннерная</option>
                      <option value="50">Бэклит</option>
                      <option value="60">ПЭТ-баннер</option>
                      <option value="70">Баннер огнеупорный 510гр</option>
                      <option value="80">Блэкаут светоблокирующий двухсторонний</option>
                      <option value="90">Транслюсцентный баннер</option>
                      <option value="100">Флаг</option>
                    </select>
                    </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className='frm_line mt-5'>
                <div className='frm_flab d-flex justify-content-between fw-bold'>
                <span>Размер</span>
                </div>
                <div className='frm_inp'>
                  <div className='frm_inpline'>
                  <div className="row">
                  <div className="col-sm">
                    <div className='csel ng-pristine ng-untouched ng-valid'>
                    <form>
                    <span>Ширина, м</span>
                      <input 
                      name="Width"
                      type="number"
                      className="mt-2 mb-2 form-control ng-pristine ng-untouched ng-valid"
                      value={Width}
                      onChange={(e) =>
                        setWidth(e.target.value)}
                      > 
                      </input> 
                    </form>
                    </div>
                    </div>
                    <div className="col-sm">
                    <div className='csel ng-pristine ng-untouched ng-valid'>
                    <form>
                    <span> Высота, м</span>  
                      <input 
                      name="Height"
                      type="number"
                      className="mt-2 mb-2 form-control ng-pristine ng-untouched ng-valid"
                      value={Height}
                      onChange={(e) =>
                        setHeight(e.target.value)}
                      >  
                      </input> 
                    </form>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='frm_line mt-5'>
                <div className='frm_flab d-flex justify-content-between fw-bold'>
                  <span>Разрешение печати</span>
                </div>
                <div className='frm_inp'>
                  <div className='frm_inpline'>
                    <div className='csel ng-pristine ng-untouched ng-valid'>
                    <form>
                    <select 
                      name="article" 
                      className="mt-2 mb-2 form-control ng-pristine ng-untouched ng-valid"
                      value={Resolution}
                      onChange={(e) =>
                        setResolution(e.target.value)}
                    >
                      <option value="">"Выбрать"</option>
                      <option value="1">360 dpi - сольвентная печать</option>
                      <option value="1.2">600 dpi - сольвентная печать</option>
                      <option value="1.5">720 dpi - экосольвентная печать</option>
                      <option value="2">1440 dpi - экосольвентная печать</option>
                   </select>
                    </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className='frm_line mt-5'>
                <div className='frm_flab d-flex justify-content-between fw-bold'>
                <span>Количество</span>
                </div>
                <div className='frm_inp'>
                  <div className='frm_inpline'>
                    <div className="row">
                      <div className="col-sm">
                        <div className='csel ng-pristine ng-untouched ng-valid'>
                          <form>
                          <span>---1-</span><input className="form-check-input" type="radio" name="Quantity" value="1" onChange={(e) => setQuantity(e.target.value)}></input>
                          <span>---2-</span><input className="form-check-input" type="radio" name="Quantity" value="2" onChange={(e) => setQuantity(e.target.value)}></input>
                          <span>---3-</span><input className="form-check-input" type="radio" name="Quantity" value="3" onChange={(e) => setQuantity(e.target.value)}></input>
                          <span>---4-</span><input className="form-check-input" type="radio" name="Quantity" value="4" onChange={(e) => setQuantity(e.target.value)}></input>
                          <span>---5-</span><input className="form-check-input" type="radio" name="Quantity" value="5" onChange={(e) => setQuantity(e.target.value)}></input>
                          <span>---6-</span><input className="form-check-input" type="radio" name="Quantity" value="6" onChange={(e) => setQuantity(e.target.value)}></input>
                          <span>---7-</span><input className="form-check-input" type="radio" name="Quantity" value="7" onChange={(e) => setQuantity(e.target.value)}></input>
                          <span>---8-</span><input className="form-check-input" type="radio" name="Quantity" value="8" onChange={(e) => setQuantity(e.target.value)}></input>
                          <span>---9-</span><input className="form-check-input" type="radio" name="Quantity" value="9" onChange={(e) => setQuantity(e.target.value)}></input>
                          <span>---10-</span><input className="form-check-input" type="radio" name="Quantity" value="10" onChange={(e) => setQuantity(e.target.value)}></input>
                          <span>---</span>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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

                              <div className="col-sm">

                                <input className="form-check-input" type="checkbox"  checked={Option0} onChange={() => setOption0(!Option0)}  id="defaultCheck1"></input>
                                <label className="form-check-label" for="defaultCheck1"> 	&emsp;Люверсы	&emsp;</label>
                                <br/>
                                <input className="form-check-input" type="checkbox" checked={Option1} onChange={() => setOption1(!Option1)}   id="defaultCheck1"></input>
                                <label className="form-check-label" for="defaultCheck1"> 	&emsp;Карман	&emsp;</label>
                                <br/>
                                <input className="form-check-input" type="checkbox" checked={Option2} onChange={() => setOption2(!Option2)}   id="defaultCheck1"></input>
                                <label className="form-check-label" for="defaultCheck1"> 	&emsp;Усиление шнуром	&emsp;</label>
                                <br/>
                                <input className="form-check-input" type="checkbox" checked={Option3} onChange={() => setOption3(!Option3)}   id="defaultCheck1"></input>
                                <label className="form-check-label" for="defaultCheck1"> 	&emsp;Поля	&emsp;</label>

                              </div>

                              <div className="col-sm">

                              <input className="form-check-input" type="checkbox" checked={Option4} onChange={() => setOption4(!Option4)}   id="defaultCheck1"></input>
                                <label className="form-check-label" for="defaultCheck1"> 	&emsp;Проклейка/проварка	&emsp;</label>
                                <br/>
                                <input className="form-check-input" type="checkbox" checked={Option5} onChange={() => setOption5(!Option5)}  id="defaultCheck1"></input>
                                <label className="form-check-label" for="defaultCheck1"> 	&emsp;Резка в размер	&emsp;</label>
                                <br/>
                                <input className="form-check-input" type="checkbox" checked={Option6} onChange={() => setOption6(!Option6)}   id="defaultCheck1"></input>
                                <label className="form-check-label" for="defaultCheck1"> 	&emsp;Плакатный профиль	&emsp;</label>
                              </div>

                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



          </div>
        </div>











        <div className="calcForm_price"     >
          <Price  cost={Cost} OptionsProps={OptionsProps} />
        </div>
      </div>
)};
