window.onload = () => {
    makeHeader();
    makeFooter();
    componentCustom();
}

function componentCustom() {
    const dataId = document.querySelector('body').getAttribute('data-id');
    switch (dataId) {
        default: generalAction(dataId, '');
        break;
    }
}


function generalAction(dataId, type) {
    const validatedAction = document.querySelector('#validatedAction' + type);
    const generatedAction = document.querySelector('#generatedAction' + type);
    const generatedObjectAction = document.querySelector('#generatedObjectAction' + type);

    if (generatedAction) {
        generatedAction.onclick = () => {
            const generatedInput = document.querySelector('#generated' + type);
            generatedInput.value = jsbrasil.fakerBr[dataId]();
        }
    }


    if (generatedObjectAction) {
        generatedObjectAction.onclick = () => {
            // const generatedInput = document.querySelector('#generated' + type);
            const data = jsbrasil.fakerBr[dataId]();
            for (key in data) {
                if (data[key] instanceof Object && !Array.isArray(data[key])) {
                    for (kk in data[key]) {
                        if (document.querySelector('#' + kk)) {
                            document.querySelector('#' + kk).value = data[key][kk];
                        }

                    }
                } else if (!(data[key] instanceof Object)) {
                    if (document.querySelector('#' + key)) {
                        document.querySelector('#' + key).value = data[key];
                    }
                }

            }
        }
    }
    if (validatedAction) {
        validatedAction.onclick = () => {
            const validatedInput = document.querySelector('#validated' + type);
            const masked = jsbrasil.maskBr[dataId] ? jsbrasil.maskBr[dataId](validatedInput.value) : validatedInput.value;
            const validated = jsbrasil.validateBr[dataId](validatedInput.value);

            document.querySelector('#validatedResult' + type).classList.remove('hidden');

            if (validated) {
                document.querySelector('#valicon' + type).innerHTML = 'thumb_up';
                document.querySelector('#valicon').classList.add('success');
                document.querySelector('#valtext' + type).innerHTML = 'O CNS, ' + masked.bold() + ' é válido!';
            } else {
                document.querySelector('#valicon' + type).innerHTML = 'thumb_down';
                document.querySelector('#valicon').classList.remove('success');
                document.querySelector('#valicon').classList.add('danger');
                document.querySelector('#valtext' + type).innerHTML =  `O CNS ${masked.bold()} é inválido!`;
            }
        }
    }

}

function makeHeader() {
    const header = `
    <nav>
      <div class="nav-wrapper container">
        <a href="/" class="brand-logo">
          Gerador de dados Pessoa Física
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="cpf.html">CPF/CNPJ</a></li>
          <li><a href="index.html">CNS</a></li>
          <li><a href="pessoa.html">Pessoa Física</a></li>
        </ul>
      </div>
    </nav>
  
   `;

    document.querySelector('header').innerHTML = header;
}

function makeFooter() {
    const footer = `
   
    <nav>
      <div class="nav-wrapper container">
        <a href="/" class="brand-logo">
          
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="https://jhonathanribeiro.netlify.app/">Entre em contato conosco</a></li>
        </ul>
      </div>
    </nav>
    <div style="text-align: center; background-color: white; color: black; font-size: 10px;">
      Todas as bibliotecas aqui são fornecidas para ajudar o desenvolvedor e o seu uso é de total responsabilidade de quem o está usando.
    </div>
   `;
    document.querySelector('footer').innerHTML = document.querySelector('footer').innerHTML + footer;
}