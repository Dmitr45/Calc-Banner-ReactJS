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

let [FullPrice, setFullPrice] = useState(0);
useEffect(() => {
    setFullPrice(Math.round(PropsCost*PropsArea*PropsFactor*PropsPriceQuantity))
}, [PropsArea, props.Area, PropsCost, props.PriceCost, PropsFactor, props.PriceFactorResolution, PropsPriceQuantity, props.PropsPriceQuantity]);

let [PriceAddition, setPriceAddition] = useState([]);
useEffect(() => {
    setPriceAddition(props.ListCheckedAdditions);
}, [PriceAddition, props.ListCheckedAdditions]);








const Options = (PropsAdd) => {
return (
<div>
{PropsAdd.map(option => (<div className="d-flex flex-row justify-content-between" > <div className="justify-content-start">{option[0]}</div> <div className="justify-content-end" >+{option[1]}₽</div></div>))}
</div>
    )};


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
                <span className="vp_wr">
                    <span className="vp_atext">Скидка постоянного клиента
                    </span>
                    </span>
                    <input className="mt-2 mb-2 form-control ng-pristine ng-untouched ng-valid" type="text" ng-model="kalk.data.kodkli" name="shirina" ng-change="getKlientDesc(kalk)" placeholder="Ваш код" size="7"></input>
                    <div className="cn tools d-grid">
                    <span className="btn btn-success btn-lg" ng-show="!show_form" ng-click="show_form=1">Заказать</span>
                    </div>
                    <div className="frm_inpline d-grid">
                    <br/>    
                    <span className="btn btn-outline-success btn-lg" ng-click="sendRassh() ">Отправить расчет на свой email</span>
                    </div>
                </div>
            </div>
        </div>
</div> 
    
    )};