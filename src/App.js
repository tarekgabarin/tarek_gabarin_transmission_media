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
