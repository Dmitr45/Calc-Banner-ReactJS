export default function Price(props) {

const Cost = props.cost;
const OptionsPropsText =  props.OptionsProps;
//const OptionsPropsCost =  props.OptionsProps[1];

const Options = (OptionsPropsText) => {
return (
<div>
{OptionsPropsText.map(option => (<div className="text-start" >{option}</div>))}
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
                    {Cost}
                </span>    
                ₽</div>
                <div className="text-muted">
                Включены услуги:
                </div>
                {Options(OptionsPropsText)}
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