const unhappy = document.querySelector('#unhappy')
const neutral = document.querySelector('#neutral')
const satisfied = document.querySelector('#satisfied')
const sendReview = document.querySelector('#sendReview')
const feedbackID = document.querySelector('#feedbackID')

let selected = ''

unhappy.addEventListener('click', () => {
    selected = 'unhappy'
})
neutral.addEventListener('click', () => {
    selected = 'neutral'
})
satisfied.addEventListener('click', () => {
    selected = 'satisfied'
})

sendReview.addEventListener('click', () => {
    if (selected) {
        document.querySelector('.reactionFeedback').style.display = 'none'
        document.querySelector('.feedbackSend').style.display = 'block'
        feedbackID.textContent = `Feedback: ${selected}`
    } else {
        alert('Wybierz jedną z opcji przed wysłaniem!')
    }
})
