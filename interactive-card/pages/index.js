import MediaQuery from 'react-responsive'
import dynamic from 'next/dynamic'

const Desktop = dynamic(() => import('../components/index/desktop'), {
  ssr: false,
})  
const Mobile = dynamic(() => import('../components/index/mobile'), {
  ssr: false,
})  

export default function Index(){

  const cardName = (e) => {

    let splitName = e.target.value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())

    e.target.value ? document.getElementById('card-name').textContent = splitName : document.getElementById('card-name').textContent = 'Jane Appleseed'
    document.getElementById('input-name').value = splitName

  }

  const cardNumber = (e) => {

    if(e.target.value){

      document.getElementById('card-number').textContent = e.target.value

      if(e.target.value.substr(0, 2) === '51' || e.target.value.substr(0, 2) === '52' || e.target.value.substr(0, 2) === '53' || e.target.value.substr(0, 2) === '54' || e.target.value.substr(0, 2) === '55'){

        document.getElementById('card-flag').style = 'background-image: url(https://img.icons8.com/color/48/000000/mastercard-logo.png);'
  
      }
  
      if(e.target.value.substr(0, 1) === '4'){
  
        document.getElementById('card-flag').style = 'background-image: url(https://img.icons8.com/color/48/000000/visa.png);'
  
      }

    }else{

      document.getElementById('card-number').textContent = '0000 0000 0000 0000'

    }

  }

  const vCardNumber = (e) => {

    if(e.target.value.length < 9){

      document.getElementById('input-number').classList.add('error')

    }else{

      document.getElementById('input-number').classList.remove('error')

    }

  }

  const cardDueDateMM = (e) => {

    if(e.target.value >= 13){

      document.getElementById('card-mm').textContent = 'error'
      document.getElementById('mm').classList.add('error')

    }else if(e.target.value){

      document.getElementById('card-mm').textContent = e.target.value
      document.getElementById('mm').classList.remove('error')

    }else{

      document.getElementById('card-mm').textContent = '00'

    }

  }

  const cardDueDateYY = (e) => {

    let nowYear = JSON.stringify(new Date().getFullYear())

    if(e.target.value < nowYear.slice(2)){

      document.getElementById('card-yy').textContent = 'error'
      document.getElementById('yy').classList.add('error')

    }else if(e.target.value){

      document.getElementById('card-yy').textContent = e.target.value
      document.getElementById('yy').classList.remove('error')

    }else{

      document.getElementById('card-yy').textContent = '00'

    }

  }

  const cardCVC = (e) => {

    if(e.target.value){

      document.getElementById('card-cvc').textContent = e.target.value

    }else{

      document.getElementById('card-cvc').textContent = '000'

    }

  }

  const vCardCVC = (e) => {

    if(e.target.value.length < 3){

      document.getElementById('cvc').classList.add('error')

    }else{

      document.getElementById('cvc').classList.remove('error')

    }

  }

  return(

    <main>
    
      <MediaQuery minDeviceWidth={1080}>
        
        <Desktop 
          cardName={cardName} 
          cardNumber={cardNumber} 
          vCardNumber={vCardNumber} 
          cardDueDateMM={cardDueDateMM} 
          cardDueDateYY={cardDueDateYY}
          cardCVC={cardCVC}
          vCardCVC={vCardCVC}
        />

      </MediaQuery>
    
      <MediaQuery maxDeviceWidth={1079}>
        
        <Mobile 
          cardName={cardName} 
          cardNumber={cardNumber} 
          vCardNumber={vCardNumber} 
          cardDueDateMM={cardDueDateMM} 
          cardDueDateYY={cardDueDateYY}
          cardCVC={cardCVC}
          vCardCVC={vCardCVC}
        />

      </MediaQuery>

    </main>

  )

}