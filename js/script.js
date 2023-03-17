async function getData() {
  const response = await fetch("json/processo-seletivo-front.json");
  const data = await response.json();
  return data;
}

async function main() {
  const data = await getData();
  const row = document.getElementById("rowStructure");

  for (m in data.monitoramentos) {
    let col = document.createElement("div");
    col.className = "col-lg-6 my-3";

    let card = document.createElement("div");
    card.className = "card";

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardList = document.createElement("ul");
    cardList.className = "list-unstyled";

    let cardText01 = document.createElement("li");
    cardText01.className = "card-text";
    cardText01.innerText =
      "Data de Monitoramento: " + data.monitoramentos[m].dataMonitoramento;

    let cardText02 = document.createElement("li");
    cardText02.className = "card-text";
    cardText02.innerText = "Analista: " + data.monitoramentos[m].analista;

    let cardText03 = document.createElement("li");
    cardText03.className = "card-text";
    cardText03.innerText = "Resultado: " + data.monitoramentos[m].resultado;

    let accordion = document.createElement("div");
    accordion.className = "accordion accordion-flush";
    accordion.id = "accordionFluseExample";

    let accordionItem = document.createElement("div");
    accordionItem.className = "accordion-item";

    let accordionHeader = document.createElement("h2");
    accordionHeader.className = "accordion-header";
    accordionHeader.id = "flush-headingOne";

    let accordionButton = document.createElement("button");
    accordionButton.className = "accordion-button collapsed";
    accordionButton.setAttribute("type", "button");
    accordionButton.setAttribute("data-bs-toggle", "collapse");
    accordionButton.setAttribute(
      "data-bs-target",
      "#flush-collapseOne" + data.monitoramentos[m].idMonitoramento
    );
    accordionButton.setAttribute("aria-expanded", "false");
    accordionButton.setAttribute(
      "aria-controls",
      "flush-collapseOne" + data.monitoramentos[m].idMonitoramento
    );
    accordionButton.innerText = "Informações específicas";

    let accordionBody = document.createElement("div")
    accordionBody.className = "accordion-body"

    let accordionCollapse = document.createElement("div");
    accordionCollapse.className = "accordion-collapse collapse";
    accordionCollapse.id =
      "flush-collapseOne" + data.monitoramentos[m].idMonitoramento;
    accordionCollapse.setAttribute("aria-labelledby", "flush-headingOne");
    accordionCollapse.setAttribute("data-bs-parent", "#accordionFlushExample");

    let accordionTextBody01 = document.createElement("div");
    accordionTextBody01.innerText =
      "Parecer Análise: " + data.monitoramentos[m].parecerAnalise;

    let accordionTextBody02 = document.createElement("div");

    let accordionTextBody03 = document.createElement("div");

    let accordionTextBody04 = document.createElement("div");

    let accordionTextBody05 = document.createElement("div");

    let accordionList = document.createElement("ul");
    accordionList.className = "list-unstyled";

    let accordionText01 = document.createElement("li");
    accordionText01.className = "accordion-body";
    accordionText01.innerText =
      "Resultado: " + data.monitoramentos[m].resultado;

    let formCheck = document.createElement("div")
    formCheck.className = "form-check"

    let inputCheck = document.createElement("input")
    inputCheck.className = "form-check-innput"
    inputCheck.id = "flexCheckDefault"
    inputCheck.setAttribute("type","checkbox")

    let labelCheck = document.createElement("label")
    labelCheck.className = "form-check-label"
    labelCheck.setAttribute("for", "flexCheckDefault")
    labelCheck.innerText = "Sinalizar ordem de compra"

    inputCheck.addEventListener("change", function () {
      alert("Ordem de compra finalizada!")
      inputCheck.disabled = true;
    })
    
    let cardText04 = document.createElement("li");
    let cardText05 = document.createElement("li");
    let cardText06 = document.createElement("li");
    let cardText07 = document.createElement("li");

    for (v in data.vinculo) {
      if (data.vinculo[v].idVinculo == data.monitoramentos[m].idVinculo) {
        for (p in data.produtores) {
          if (data.vinculo[v].idProdutor == data.produtores[p].idprodutor) {
            cardText04.className = "card-text";
            cardText04.innerText =
              "Nome do Produtor: " + data.produtores[p].nomeProdutor;

            cardText05.className = "card-text";
            cardText05.innerText =
              "CPF do Produtor: " + data.produtores[p].cpfProdutor;
            

            accordionTextBody02.innerText =
              "ID do Produtor: " + data.produtores[p].idprodutor;

            cardList.appendChild(cardText04);
            cardList.appendChild(cardText05);
            accordionBody.appendChild(accordionTextBody02);
          }
        }

        for (pr in data.propriedades) {
          if (
            data.vinculo[v].idPropriedade == data.propriedades[pr].idPropriedade
          ) {
            cardText06.className = "card-text";
            cardText06.innerText =
              "Nome do Produtor: " + data.propriedades[pr].nomePropriedade;

            cardText07.className = "card-text";
            cardText07.innerText =
              "Número de Cadastro Rural: " +
              data.propriedades[pr].numeroCadastroRural;

            accordionTextBody03.innerText = "ID da propriedade: " + data.propriedades[pr].idPropriedade;

            accordionTextBody04.innerText = "Tipo da propriedade: " + data.propriedades[pr].tipoPropriedade;

            cardList.appendChild(cardText06);
            cardList.appendChild(cardText07);
            accordionBody.appendChild(accordionTextBody03)
            accordionBody.appendChild(accordionTextBody04)
          }
        }
      }
      accordionTextBody05.innerText = "Tipo de vínculo do produtor: " + data.vinculo[v].tipoVinculoProdutor
      accordionBody.appendChild(accordionTextBody05)
    }
    row.appendChild(col);
    col.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardList);
    cardBody.appendChild(accordion);
    accordion.appendChild(accordionItem);
    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionCollapse)
    accordionHeader.appendChild(accordionButton);
    accordionCollapse.appendChild(accordionBody)
    accordionBody.appendChild(accordionTextBody01);
    accordionBody.appendChild(accordionTextBody03);
    if(data.monitoramentos[m].resultado == "Liberado"){
      accordionBody.appendChild(formCheck)
      formCheck.appendChild(inputCheck)
      formCheck.appendChild(labelCheck)
    }
    cardList.appendChild(cardText01);
    cardList.appendChild(cardText02);
    cardList.appendChild(cardText03);
  }
}

document.addEventListener("DOMContentLoaded", main);
