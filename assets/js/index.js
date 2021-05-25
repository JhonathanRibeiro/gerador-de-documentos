window.onload = () => {
    makeHeader();
    makeFooter();
    componentCustom();
    makeSideNav();
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
            generatedInput.value = idsgenerate.fakerBr[dataId]();
        }
    }

    if (generatedObjectAction) {
        generatedObjectAction.onclick = () => {
            // const generatedInput = document.querySelector('#generated' + type);
            const data = idsgenerate.fakerBr[dataId]();
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
            const masked = idsgenerate.maskBr[dataId] ? idsgenerate.maskBr[dataId](validatedInput.value) : validatedInput.value;
            const validated = idsgenerate.validateBr[dataId](validatedInput.value);

            document.querySelector('#validatedResult' + type).classList.remove('hidden');

            if (validated) {
                document.querySelector('#valicon' + type).innerHTML = 'thumb_up';
                document.querySelector('#valicon').classList.add('success');
                document.querySelector('#valicon').classList.remove('danger');

                document.querySelector('#valtext' + type).innerHTML = 'O CNS, ' + masked.bold() + ' é válido!';
            } else {
                document.querySelector('#valicon' + type).innerHTML = 'thumb_down';
                document.querySelector('#valicon').classList.remove('success');
                document.querySelector('#valicon').classList.add('danger');
                document.querySelector('#valtext' + type).innerHTML = `O CNS ${masked.bold()} é inválido!`;
            }
        }
    }
}

function makeSideNav() {
    const sidenav = `
    <div class="collection">
        <a href="cpf.html" class="collection-item">Gerador de CPF</a>
        <a href="cnpj.html" class="collection-item">Gerador de CNPJ</a>
        <a href="index.html" class="collection-item active">Gerador de CNS</a>
        <a href="senha.html" class="collection-item">Gerador de senha</a>
        <a href="telefone.html" class="collection-item">Gerador de telefone</a>
        <a href="pessoa.html" class="collection-item">Gerador de pessoa</a>
        <a href="empresa.html" class="collection-item">Gerador de empresa</a>
        <a href="texto.html" class="collection-item">Conversor de texto</a>
    </div>
    `;
    document.querySelector('.sidebar-collection').innerHTML = sidenav;
}

function makeHeader() {
    const header = `
    <nav>
      <div class="nav-wrapper container">
        <a href="/" class="brand-logo">
          IDS Generator
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          
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
          <li><a href="https://jhonathanribeiro.netlify.app/"></a></li>
        </ul>
      </div>
    </nav>
    <div style="text-align: center; background-color: white; color: black; font-size: 10px;">
      Todos os direitos reservados.
    </div>
   `;
    document.querySelector('footer').innerHTML = document.querySelector('footer').innerHTML + footer;
}