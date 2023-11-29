import Price from '../price/Price';

export default function Banners() { 

return(
<div className="calcForm_flex">
        <div className="calcForm_select">
          <div className='kalk_colwrap'>
              <div className='frm_line'>
                <div className='frm_flab d-flex justify-content-between'>
                  <span>Материал</span>
                </div>
                <div className='frm_inp'>
                  <div className='frm_inpline'>
                    <div className='csel ng-pristine ng-untouched ng-valid'>
                    <form>
                          <label>
                            Имя:
                            <input type="text" name="name" />
                          </label>
                          <input type="submit" value="Отправить" />
                    </form>
                    </div>
                  </div>
                </div>
              </div>


          </div>
        </div>











        <div className="calcForm_price"     >
          <Price  cost = {50} />
        </div>
      </div>
)};
