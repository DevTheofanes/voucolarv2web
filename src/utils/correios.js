var axios = require("axios").default;

export async function calculateFrete(args, setValue, setDays){
  const acessCorreios = {
    codeEmpresa: "08082650",
    codeSenha: "564321",
    cepOrigem: '70002900',   
  }

  var options = {
    method: 'GET',
    url: 'https://cors-anywhere.herokuapp.com/http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx',
    params: {
      nCdEmpresa: acessCorreios.codeEmpresa,
      sDsSenha: acessCorreios.codeSenha,
      sCepOrigem: acessCorreios.cepOrigem,
      sCepDestino: args.cep,
      nVlPeso: '1',
      nCdFormato: '1',
      nVlComprimento: '20',
      nVlAltura: '20',
      nVlLargura: '20',
      sCdMaoPropria: 'n',
      nVlValorDeclarado: '0',
      sCdAvisoRecebimento: 'n',
      nCdServico: args.option,
      nVlDiametro: '0',
      StrRetorno: 'xml',
      nIndicaCalculo: '3'
    },
    // headers: {cookie: 'ASP.NET_SessionId=b5iatd2f1mjkqsur0d4s3llk'}
  };
  
  await axios.request(options).then(function (response) {
    const data = response.data.split("</")

    const value = data[1].split(">")
    const days = data[2].split(">")

    const valueTwo = value[2].split(",")

    const result = {
      value: valueTwo[0],
      days: days[2]
    }
  
    setValue(result.value)
    setDays(result.days)

  }).catch(function (error) {
    console.error(error);
    return error
  });
}

