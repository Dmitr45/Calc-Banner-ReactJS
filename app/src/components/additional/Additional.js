import { useState, useEffect } from 'react';


export default function Additional(props) { //props: []
    class Additions {
        constructor (params) {
            this.activ = params.activ
            this.name = params.name
            this.cost = params.cost
            this.info = params.info
        }
    }


    
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
    

    let [PropsListAdditions, setPropsListAdditions] = useState(props.ListAdditions); // props : []
    const [checked, setChecked] = useState(true);

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
    
    
                        {PropsListAdditions.map((addition)=>{
                        return(
                        <div className="addition-select col-sm">
                            <input className="form-check-input" type="checkbox"  id={addition.name} checked={checked} onChange={()=>{setChecked(!checked)}} ></input>
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
    )
};