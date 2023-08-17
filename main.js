const keyList = document.querySelectorAll('.tecla')


function playSong(idElementAudio) {
  document.querySelector(idElementAudio).play()
}

for(let cont = 0; cont < keyList.length; cont++) {
  
  const key = keyList[cont]
  const instrument = key.classList[1]
  const idAudio = `#som_${instrument}`
  
  key.onclick = () => {
    playSong(idAudio)
  }

}
