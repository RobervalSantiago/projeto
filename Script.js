function calcularAcao() {
    // Coletar dados do formulário
    const cliente = document.getElementById('cliente').value;
    const produto = document.getElementById('produto').value;
    const quantidade = parseFloat(document.getElementById('quantidade').value);
    const preco = parseFloat(document.getElementById('preco').value);
    const produtoBonificado = document.getElementById('produtoBonificado').value;
    const valorBonificado = parseFloat(document.getElementById('valorBonificado').value);

    // Validar campos
    if (!cliente || !produto || isNaN(quantidade) || isNaN(preco) || !produtoBonificado || isNaN(valorBonificado)) {
        alert('Preencha todos os campos corretamente!');
        return;
    }

    // Realizar cálculos
    const valorPedido = quantidade * preco;
    const precoSolicitado = preco - (valorBonificado / quantidade);
    const investimento = (valorBonificado / valorPedido) * 100;
    const quantidadeBonificada = Math.ceil(valorBonificado / 10);

    // Exibir resultado
    document.getElementById('resultadoAcao').innerHTML = `
        <strong>Solicitação de ação:</strong><br>
        Código/Produto: ${produto}<br>
        Quantidade do Produto: ${quantidade}<br>
        Preço do Palm: R$ ${preco.toFixed(2)}<br><br>
        <strong>Ação</strong><br>
        Preço solicitado: R$ ${precoSolicitado.toFixed(2)}<br>
        Investimento: ${investimento.toFixed(2)} %<br>
        Quantidade bonificada: ${quantidadeBonificada} und<br>
        Valor Bonificação: R$ ${valorBonificado.toFixed(2)}<br>
        Valor pedido: R$ ${valorPedido.toFixed(2)}<br>
        Código/Produto Bonificado: ${produtoBonificado}<br><br>
        Código/Razão do Cliente: ${cliente}<br><br>
        <button onclick="copiarTexto('resultadoAcao')">Copiar</button>
    `;

    // Mostrar formulário de bonificação
    document.getElementById('bonusForm').style.display = 'block';
}

function calcularBonificacao() {
    // Coletar dados do formulário
    const pedido = document.getElementById('pedido').value;
    const observacao = document.getElementById('observacao').value;
    const cliente = document.getElementById('cliente').value;
    const consultor = document.getElementById('consultor').value;
    const produtoBonificado = document.getElementById('produtoBonificado').value;
    const valorBonificado = parseFloat(document.getElementById('valorBonificado').value);
    const quantidadeBonificada = Math.ceil(valorBonificado / 10);

    // Validar campos
    if (!pedido || !cliente || !consultor || !produtoBonificado || isNaN(valorBonificado)) {
        alert('Preencha todos os campos corretamente!');
        return;
    }

    // Exibir resultado
    document.getElementById('resultadoBonificacao').innerHTML = `
        <strong>Bonificação</strong><br>
        Código/Razão do Cliente: ${cliente}<br>
        Consultor: ${consultor}<br>
        Cód do pedido: ${pedido}<br>
        Código/Produto Bonificado: ${produtoBonificado}<br>
        Quantidade: ${quantidadeBonificada} UND<br>
        Valor da bonificação: R$ ${valorBonificado.toFixed(2)}<br>
        Observação: ${observacao}<br><br>
        <button onclick="copiarTexto('resultadoBonificacao')">Copiar</button>
    `;
}

function copiarTexto(elementId) {
    const texto = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado para a área de transferência!');
    });
}
