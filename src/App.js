import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        invoiceAmount: 500,
        isEditable: false,
        nameOnCard: null,
        cardNumber: null,
        expiryDate: null,
        securityCode: null,
        postalCode: null,
        isFormDirty: null
    }
  }

  toggleEditableAmount = (event) => {

    event.preventDefault();

    this.setState({
      isEditable: !this.state.isEditable
    })
  };

  onInvoiceAmountChanged = (event) => {

    this.setState({
      invoiceAmount: event.currentTarget.value
    });
  };

  onNameChanged = (e) => {
    this.setState({
      nameOnCard: e.target.value
    })
  };

  onNumberChanged = (e) => {

    this.setState({
      cardNumber: e.target.value
    })
  };

  onExpiryDateChanged = (e) => {

    this.setState({
      expiryDate: e.target.value
    })
  };

  onSecurityCodeChanged = (e) => {

    this.setState({
      securityCode: e.target.value
    })
  };

  onPostalCodeChanged = (e) => {

    this.setState({
      postalCode: e.target.value
    })
  };

  render() {
    return (
      <section>

        <div className="row">
          <div className="column">
            <div className="card">
              <div className="fields">
                <div className="header-field">
                    <span>Pay Invoice</span>
                </div>
                <div className="main-fields">
                  <span className={'payment-label'}>Payment Amount</span>

                  {(this.state.isEditable) ? (

                      <div className="invoice-amount">
                        <div>
                          <input onChange={this.onInvoiceAmountChanged} type={'number'} className={'input'} min={'1'} value={this.state.invoiceAmount} name='amount'/>
                        </div>
                        <div>
                          <button onClick={(e) => this.toggleEditableAmount(e)} className={'edit-button'} name={'edit-button'}>Done</button>
                        </div>
                      </div>

                  ) : (
                      <div className="invoice-amount">
                        <div>
                          <span>{"$" + this.state.invoiceAmount}</span>
                        </div>
                        <div>
                          <button onClick={(e) => this.toggleEditableAmount(e)}  className={'edit-button'} name={'edit-button'}>Edit</button>
                        </div>
                      </div>
                  )}




                  <div>
                    <label htmlFor={'credit-card-name'}>Name on card</label>

                    {(this.state.nameOnCard !== '') ? (<input onChange={this.onNameChanged} type="text" className="input input-valid" name={'credit-card-name'} />) : (<input onChange={this.onNameChanged} type="text" className="input input-invalid" name={'credit-card-name'} />)}


                  </div>

                  <div>
                    <label htmlFor={'credit-card-number'}>Card number</label>

                    {(this.state.cardNumber !== '') ? (<input onChange={this.onNumberChanged} type="text" className="input input-valid" name={'credit-card-number'} />) : (<input onChange={this.onNumberChanged} type="text" className="input input-invalid" name={'credit-card-number'} />)}


                  </div>

                  <div className="card-info">
                    <div>
                      <label htmlFor={'expiry-date'}>Expiry Date</label>

                      {this.state.expiryDate !== '' ? (<input onChange={this.onExpiryDateChanged} type="text" className="expiry-date-input input-valid" name={'expiry-date'} placeholder={'MM / YY'} />) : (<input onChange={this.onExpiryDateChanged} type="text" className="expiry-date-input input-invalid" name={'expiry-date'} placeholder={'MM / YY'} />)}


                    </div>

                    <div>
                      <label htmlFor={'security-code'}>Security Code</label>
                      <div className={'position-relative'}>

                        {this.state.securityCode !== '' ? (<input onChange={this.onSecurityCodeChanged} type="text" className="security-code-input input-valid" name={'security-code-input'} />) : (<input onChange={this.onSecurityCodeChanged} type="text" className="security-code-input input-invalid" name={'security-code-input'} />)}

                        {(this.state.securityCode === '' || this.state.securityCode == null)  && (<img className={'question-mark-icon'} src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABF1BMVEUAAAC9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8dBUDbXAAAAXHRSTlMAAQIEBQcICw4QERITFRYXGCMlJicpLi8xMjQ1Njg5Ojs9RUlMTU5RUlZYXGFma2x1f4iJi46Pkpeam52go6Wor7S1t7q8wMHFz9HT1dfa4ubo6evt7/P19/n7/aClJO4AAAEkSURBVBgZjcGJNgJRAAbgf0ajbE1jyU6IkSXZFVnKkhZJlOp//+dw752ZqzrHOb4P2lQqW219vl4kIxi2UqH2NIN+488ccGNBm+9wSMOGb5Ge97PDg/M2le8olGiPUsWBZKw2KDUtCEaFUtaEb+SRUh5CklLJhGaWKTmA0aS0ASHkTEKapVQEHCrdLWC6TR5DMKmEkabvbrtH8g2CQSWBAvtVYxAiVDKos49rQEpTyaHDX8tQ1ui5R53aFaTQKX05FKglIFg1BjJIU9uEcEQtAYd/CsNoMrAfEk4YKAJIMhCHkGLAAWBU6ItDSNGXh2T36IlDSNHTtKAs0fPguu5umUrHhm+hyyEfMWgTJQ64HUW/9Rq1lzkMs/eua62v8uXOGP7lB8OJpDWSkNWtAAAAAElFTkSuQmCC'} alt="" />)}

                        {/*<ReactTooltip  place="bottom" type="dark" effect="solid">*/}
                        {/*  <span>Look on the back of your credit card to find the security card</span>*/}
                        {/*</ReactTooltip>*/}

                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor={'postal-code'}>ZIP/Postal code</label>

                    <div className="position-relative">

                      {this.state.postalCode !== '' ? (<input onChange={this.onPostalCodeChanged} type="text" className="input input-valid" name={'postal-code'} />) : (<input onChange={this.onPostalCodeChanged} type="text" className="input input-invalid" name={'postal-code'} />)}

                      {(this.state.postalCode === '' || this.state.postalCode == null) && (<img className={'question-mark-icon'} src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABF1BMVEUAAAC9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8e9w8dBUDbXAAAAXHRSTlMAAQIEBQcICw4QERITFRYXGCMlJicpLi8xMjQ1Njg5Ojs9RUlMTU5RUlZYXGFma2x1f4iJi46Pkpeam52go6Wor7S1t7q8wMHFz9HT1dfa4ubo6evt7/P19/n7/aClJO4AAAEkSURBVBgZjcGJNgJRAAbgf0ajbE1jyU6IkSXZFVnKkhZJlOp//+dw752ZqzrHOb4P2lQqW219vl4kIxi2UqH2NIN+488ccGNBm+9wSMOGb5Ge97PDg/M2le8olGiPUsWBZKw2KDUtCEaFUtaEb+SRUh5CklLJhGaWKTmA0aS0ASHkTEKapVQEHCrdLWC6TR5DMKmEkabvbrtH8g2CQSWBAvtVYxAiVDKos49rQEpTyaHDX8tQ1ui5R53aFaTQKX05FKglIFg1BjJIU9uEcEQtAYd/CsNoMrAfEk4YKAJIMhCHkGLAAWBU6ItDSNGXh2T36IlDSNHTtKAs0fPguu5umUrHhm+hyyEfMWgTJQ64HUW/9Rq1lzkMs/eua62v8uXOGP7lB8OJpDWSkNWtAAAAAElFTkSuQmCC'} alt="" />)}

                    </div>

                  </div>

                  <div>
                    <button className="submit-button">
                      Pay
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default App;
