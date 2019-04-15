import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        invoiceAmount: 500,
        isEditable: false
    }
  }

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
                  <div className="invoice-amount">
                    <div>
                        <input type={'text'} className={'input'} value="" name='amount'/>
                    </div>
                    <div>
                      <button className={'edit-button'} name={'edit-button'}>Edit</button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor={'credit-card-name'}>Name on card</label>
                    <input type="text" className="input" name={'credit-card-name'} />
                  </div>

                  <div>
                    <label htmlFor={'credit-card-number'}>Card number</label>
                    <input type="text" className="input" name={'credit-card-number'} />
                  </div>

                  <div className="card-info">
                    <div>
                      <label htmlFor={'expiry-date'}>Expiry Date</label>
                      <input type="text" className="expiry-date-input" name={'expiry-date'} placeholder={'MM / YY'} />
                    </div>

                    <div>
                      <label htmlFor={'security-code'}>Security Code</label>
                      <input type="text" className="security-code-input" name={'security-code-input'} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={'postal-code'}>ZIP/Postal code</label>
                    <input type="text" className="input" name={'postal-code'} />
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
