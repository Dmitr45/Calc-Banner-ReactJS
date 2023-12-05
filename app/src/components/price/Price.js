import { useEffect, useState } from "react";

export default function Price(props) {


let [PropsName, setPropsName]  = useState(props.PriceCost);  
useEffect(() => {
    setPropsName(props.PriceName)
}, [PropsName, props.PriceName]);

let [PropsCost, setPropsCost] = useState(props.PriceCost);
useEffect(() => {
    setPropsCost(props.PriceCost)
}, [PropsCost, props.PriceCost]);

let [PropsArea, setPropsArea] = useState(props.Area)
useEffect(() => {
    setPropsArea(props.Area)
}, [PropsArea, props.Area]);

let [PropsFactor, setPropsFactor] = useState(props.PriceFactorResolution)
useEffect(() => {
    setPropsFactor(props.PriceFactorResolution);
    console.log(props.PriceFactorResolution);
}, [PropsFactor, props.PriceFactorResolution]);

let [PropsPriceQuantity, setPropsPriceQuantity] = useState(props.PriceQuantity)
useEffect(() => {
    setPropsPriceQuantity(props.PriceQuantity);
}, [PropsPriceQuantity, props.PriceQuantity]);


let [PriceAddition, setPriceAddition] = useState([]);
let [SumPriceAdditions, setSumPriceAdditions] = useState(props.SumPriceAdditions);
useEffect(() => {
    setPriceAddition(props.ListCheckedAdditions);
    setSumPriceAdditions(props.SumPriceAdditions);

}, [PriceAddition, props.ListCheckedAdditions, props.SumPriceAdditions]);


let [FullPrice, setFullPrice] = useState(0);
useEffect(() => {
    setFullPrice(Math.round(PropsCost*PropsArea*PropsFactor*PropsPriceQuantity + SumPriceAdditions*PropsPriceQuantity))
}, [PropsArea, props.Area, PropsCost, props.PriceCost, PropsFactor, props.PriceFactorResolution, PropsPriceQuantity, props.PropsPriceQuantity, props.SumPriceAdditions, SumPriceAdditions]);


const Options = (PropsAdd) => {
return (
<div>
{PropsAdd.map(option => (<div className="d-flex flex-row justify-content-between" > <div className="justify-content-start">{option[0]}</div> <div className="justify-content-end" >+{option[1]}₽</div></div>))}
</div>
    )};


let [PriceFormTarget, setPriceFormTarget] = useState(false);
function targetPriceForm(){// Кнопка раскрытия формы заказа
if    (!PriceFormTarget) {setPriceFormTarget( !PriceFormTarget) }
else { // Заказ

let Order = {
date : new Date,
name : PropsName,
area : PropsArea,
cost : PropsCost,
factor   : PropsFactor,
quantity : PropsPriceQuantity,
addition : PriceAddition,
fullPrice: FullPrice
};


console.log("Заказ от " + Order.date);
console.log("Наименование: " + Order.name);
console.log("Размер изделия(площадь): " + Order.area);
console.log("Каталожная стоимость: " + Order.cost);
console.log("Множитель за высокое разрешение: " + Order.factor);
console.log("Дополнительные опции: " + Order.addition);
console.log("Количество: " + Order.quantity);
console.log("Общая стоимость: " + Order.fullPrice + " рублей");
}};  

function PriceForm() {
    const [checked, setChecked] = useState(true);
    const [value, setValue] = useState(1);

    function chengeValue(event) {
       setValue(event.target.value);
    };

    if (PriceFormTarget) {
    return (
        <div className="price_form text-start" >
            <div className="user_data">
                <div>
                    <div className="form-item">
                        <label className="d-grid">
                            <span>Ваше имя</span>
                            <input className="mt-1 mb-1 form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" type="text" ng-required="show_form" ng-init="kalk.labels.name = 'Имя'" ng-model="kalk.data.name" name="name" val-bubble="" placeholder="Михаил В." required="required"></input>
                        </label>
                    </div>
                    <div className="form-item"> 
                        <label className="d-grid">
                            <span>Ваш email</span> 
                            <input className="mt-1 mb-1 form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" type="text" ng-init="kalk.labels.email = 'email'" ng-model="kalk.data.email" name="email" val-bubble=""  placeholder="Misha.B@mail.ru" required="required"></input>
                        </label>
                    </div>
                    <div className="form-item">
                        <label className="d-grid">
                            <span>Ваш телефон</span> 
                            <input className="mt-1 mb-1 form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" type="text" ng-init="kalk.labels.phone = 'Телефон'" ng-model="kalk.data.phone" name="phone" val-bubble="" ng-required="show_form" placeholder="8(965)000-00-00" required="required"></input>
                        </label>
                    </div>
                    <div className="form-item">
                        <span>Варианты оплаты</span><br/>
                        <lable><input type="radio" name="radio" value="1"  checked={value == '1' ? true : false} onChange={chengeValue} /><span>&emsp;Безналичный рассчет (пришлите реквизиты)</span><br/></lable>
                        <lable><input type="radio" name="radio" value="2" checked={value == '2' ? true : false}  onChange={chengeValue} /><span>&emsp;Картой через он-лайн платформу</span><br/></lable>
                        <lable><input type="radio" name="radio" value="3" checked={value == '3' ? true : false}  onChange={chengeValue} /><span>&emsp;Наличными в офисе</span><br/></lable>
                    </div>
                    <div className="form-item">
                        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
                        <lable> Я принимаю <a href="#">условия обработки персональных данных</a>  </lable>
                    </div>
                 </div>
            </div>
        </div>
    )}};

    return (
<div className="price">
        <div className='detali'>
            <div className="text-center">
                <div className="text-muted">
                    Итоговая стоимость
                </div>
                <div className="h3">
                    <span ng-bind="kalk.data.price" className="ng-binding">
    {FullPrice}
                    </span>    
                ₽</div>
                <div className="text-muted">
                    <div className="text-success">{PropsName}</div><br/>
                        Включены услуги:
                    </div>
                        {PriceAddition}
                    <div className="klientdescount">
                        <div className="vp_wr">
                            <span className="vp_atext">Скидка постоянного клиента      </span>
                        </div>
                        <input className="mt-2 mb-2 form-control ng-pristine ng-untouched ng-valid" type="text" ng-model="kalk.data.kodkli" name="shirina" ng-change="getKlientDesc(kalk)" placeholder="Ваш код" size="7"></input>
                        <div className="cn tools d-grid">
                            <PriceForm /> 
                            <span className="btn btn-success btn-lg" ng-show="!show_form" ng-click="show_form=1" onClick = { targetPriceForm } >Заказать</span>
                        </div>
                    <div className="frm_inpline d-grid">
                        <br/>    
                        <span className="btn btn-outline-success btn-lg" ng-click="sendRassh() ">Отправить расчет на свой email</span>
                    </div>
                </div>
            </div>
        </div>
</div> 
    
)}