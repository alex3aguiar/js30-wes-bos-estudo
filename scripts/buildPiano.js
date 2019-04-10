

const keyList = [
  {
    "key": "A",
    "keyCode": "10",
    "instrument": "bateria"
  },
  {
    "key": "S",
    "keyCode": "10",
    "instrument": "violão"
  }, {
    "key": "D",
    "keyCode": "10",
    "instrument": "apito"
  }, {
    "key": "F",
    "keyCode": "10",
    "instrument": "cachorro"
  },

  {
    "key": "H",
    "keyCode": "10",
    "instrument": "rojão"
  }, {
    "key": "J",
    "keyCode": "10",
    "instrument": "pandeiro"
  }, {
    "key": "K",
    "keyCode": "10",
    "instrument": "grito"
  },
  {
    "key": "L",
    "keyCode": "10",
    "instrument": "som de chuva"
  }
]





if ('content' in document.createElement('template')) {
  keyTemplate = document.getElementById("key-template");
  titles = keyTemplate.content.querySelectorAll(".title");
  keyList.forEach((element,index) => {
    titles[0].textContent = keyList[index].key;
    titles[1].textContent =  keyList[index].instrument;

    var piano = document.querySelectorAll(".piano");
    var clone = document.importNode(keyTemplate.content, true);
    piano[0].appendChild(clone);
  }
  )

} 