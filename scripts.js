function serializeForm(formNode) {
  return new FormData(formNode)
}

function handleFormSubmit(event) {
  event.preventDefault()
  data = serializeForm(applicantForm)
  sendData(data)
}

function sendData(data){
  name = Array.from(data.entries())[0][1]
  email = Array.from(data.entries())[1][1]
  message = Array.from(data.entries())[2][1]
  
  const Http = new XMLHttpRequest()
  message_send = name +"%0A"+email+"%0A"+message
  const url='https://api.telegram.org/bot5769091170:AAGAiSjO64nrQJ4dFWYhak36jgy8sE53YCw/sendMessage?chat_id=1079159406&text='+message_send
  Http.open("GET", url)
  Http.send()

  notice_user()
}

function notice_user(){
  alert("You message have been sended. Thanks!")
}

const applicantForm = document.getElementById('contact-form-req')
applicantForm.addEventListener('submit', handleFormSubmit)
