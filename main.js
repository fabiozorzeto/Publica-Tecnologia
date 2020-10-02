var Placar = Placar || {};

var _listaJogos = [];

Placar.Inicio = function () {

    // Adiciona item para inicializar a tabela
    var jogo = {
        Jogo: 1,
        Placar: 12,
    };
    _listaJogos.push(jogo);

    // Atualiza tabela
    Placar.AtualizaTabela();

    // Ação do botão adicionar
    $('.btn-adicionar').click(function () {

        var validado = true;

        // valida campos
        $("input.form-control").each(function () {
            if ($(this).val() == "") {
                alert("Preencha todos os campos");
                validado = false;
                return false;
            }
        });

        // Adiciona jogo
        if (validado) {
            var jogo = {
                Jogo: _listaJogos[_listaJogos.length - 1].Jogo + 1,
                Placar: $("#placar").val(),
            };
            _listaJogos.push(jogo);

            // Atualiza tabela
            Placar.AtualizaTabela();
            
            // Limpa formulário
            $("input.form-control").each(function () {
                $(this).val("");
            });

            // Fecha modal
            $(".btn-fechar").click();
        }
    })
}

Placar.AtualizaTabela = function () {
    $('.tbody-container').html('');

    _listaJogos.forEach(item => {
        Placar.PreencheLinhaTabela(item);
    });
}

Placar.PreencheLinhaTabela = function (jogo) {
    var html = [];
    html.push('<tr>');
    html.push('<td>' + jogo.Jogo + '</td>');
    html.push('<td>' + jogo.Placar + '</td>');
    html.push('<td>' + Placar.RetornaMinTemporada() + '</td>');
    html.push('<td>' + Placar.RetornaMaxTemporada() + '</td>');
    html.push('<td>' + Placar.RetornaQuebraMin()  + '</td>');
    html.push('<td>' + Placar.RetornaQuebraMax()  + '</td>');
    html.push('</tr>');

    $('.tbody-container').append(html.join(''));
}

Placar.RetornaMinTemporada = function()
{
    // TODO: percorrer array e retornar menor placar
    return 0;
}

Placar.RetornaMaxTemporada = function()
{
    // TODO: percorrer array e retornar maior placar
    return 0;
}

Placar.RetornaQuebraMin = function()
{
    // TODO: percorrer array e retornar quebra record minima 
    return 0 ;
}

Placar.RetornaQuebraMax = function()
{
    // TODO: percorrer array e retornar quebra record maxima
    return 0;
}

Placar.Inicio();