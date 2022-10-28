import InputCardNumber from '../input/card'

export default function Desktop(props){

    return(

        <section className="flex justify-center items-center h-screen w-screen overflow-hidden">
          
          <figure className="absolute left-0 top-0 h-full w-4/12 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(images/bg-main-desktop.png)' }} />

          <section className="relative z-10 flex justify-center items-center gap-40">

            <section className="flex flex-col gap-7">

              <section className="relative mr-20 --box-shadow-cards">

                <div className="absolute w-full h-full flex flex-col justify-between p-5 rounded">
                  
                  <div className="flex items-center gap-5">

                    <div id="card-flag" className="bg-white rounded-full p-5 bg-cover" />
                    <div className="border border-white rounded-full p-2.5" />

                  </div>

                  <div className="flex flex-col gap-5">

                    <h3 id="card-number" className="font-medium text-white text-2xl">0000 0000 0000 0000</h3>

                    <div className="flex justify-between">

                      <p id="card-name" className="font-medium text-white">Jane Appleseed</p>

                      <div className="font-medium text-white flex"><div id="card-mm">00</div>/<div id="card-yy">00</div></div>

                    </div>

                  </div>

                </div>

                <img src="images/bg-card-front.png" />

              </section>

              <section className="relative ml-20 --box-shadow-cards">
                
                <p id="card-cvc" className="z-10 bottom-1/2 translate-y-1/2 right-14 mb-0.5 absolute font-medium text-white">000</p>

                <img src="images/bg-card-back.png" />

              </section>

            </section>

            <form className="flex flex-col w-4/12 justify-center gap-5" method="post" action="*">

              <div className="flex flex-col gap-2.5">

                <label className="uppercase text-sm font-medium">Cardholder Name</label>
                <input id="input-name" onChange={props.cardName} className="px-5 py-2.5 w-full placeholder:text-lg --colors violet-light bd --input rounded ease-in duration-300" type="text" placeholder="e.g. Jane Appleseed" required />

              </div>

              <div className="flex flex-col gap-2.5">

                <label className="uppercase text-sm font-medium">Card number</label>
                <InputCardNumber id="input-number" onBlur={props.vCardNumber} onChange={props.cardNumber} className="px-5 py-2.5 w-full placeholder:text-lg --colors violet-light bd --input rounded ease-in duration-300" type="text" placeholder="e.g. 1234 5678 9123 0000" />

              </div>

              <div className="flex gap-5">

                <div className="flex flex-col gap-2.5 w-1/2">

                  <label className="uppercase text-sm font-medium">EXP. DATE (MM/YY)</label>
                  <div className="flex gap-5">

                    <input onChange={props.cardDueDateMM} id="mm" maxLength="2" className="px-5 py-2.5 w-full placeholder:text-lg --colors violet-light bd --input rounded ease-in duration-300" type="text" placeholder="MM" required />
                    <input onChange={props.cardDueDateYY} id="yy" maxLength="2" className="px-5 py-2.5 w-full placeholder:text-lg --colors violet-light bd --input rounded ease-in duration-300" type="text" placeholder="YY" required />

                  </div>

                </div>

                <div className="flex flex-col gap-2.5 w-1/2">

                  <label className="uppercase text-sm font-medium">CVC</label>
                  <input onBlur={props.vCardCVC} onChange={props.cardCVC} maxLength="3" id="cvc" className="px-5 py-2.5 w-full placeholder:text-lg --colors violet-light bd --input rounded ease-in duration-300" type="text" placeholder="e.g. 123" required />

                </div>

              </div>

              <button className="py-2.5 text-lg text-white --colors violet-dark more bg rounded">Confirm</button>

            </form>

          </section>

        </section>

    )

}