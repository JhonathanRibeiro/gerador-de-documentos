let pageTitle = 'FAKE GENERATOR';

window.onload = () => {
    makeHeader();
    makeFooter();
    componentCustom();
    document.title = pageTitle;
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

                document.querySelector('#valtext' + type).innerHTML = `${masked.bold()} válido!`;
            } else {
                document.querySelector('#valicon' + type).innerHTML = 'thumb_down';
                document.querySelector('#valicon').classList.remove('success');
                document.querySelector('#valicon').classList.add('danger');
                document.querySelector('#valtext' + type).innerHTML = `${masked.bold()} inválido!`;
            }
        }
    }
}

function makeHeader() {
    const header = `
    <nav>
        <div class="nav-wrapper container">
        <a href="#" class="brand-logo">
            <span class="fake-title">FAKE</span> GENERATOR
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down"></ul>
        </div>
    <div class="nav-container ">
        <div class="nav-wrapper container">
            <nav class="nav-links">
            <ul>
                <li class="active">
                    <a href="#" title="Name Generator">Home</a>
                </li>
                <li>
                    <a href="#" title="Free Tools">Ferramentas</a>
                </li>
                <li>
                    <a href="#" title="Order in Bulk">FAQ</a>
                </li>
                <li>
                    <a href="#" title="Order in Bulk">Contato</a>
                </li>
            </ul>
            </nav>
        </div>
    </div>  
    </nav>
   `;

    document.querySelector('header').innerHTML = header;
}

function makeFooter() {
    const footer = `
    <div style="text-align: center; background-color: white; color: black; font-size: 10px;">
      Todos os direitos reservados.
    </div>
   `;
    document.querySelector('footer').innerHTML = document.querySelector('footer').innerHTML + footer;
}
