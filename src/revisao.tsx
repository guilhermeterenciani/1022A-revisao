function Revisao(){
      /**
	 * Transforma uma string em letras maiúsculas
	 * @param str  A string a ser transformada em maiúsculas
	 * @returns    A string em maiúsculas
	 * @example
	 * transformarParaMaiusculas('exemplo'); // retorna 'EXEMPLO'
	*/
	//---Adicione seu código aqui:
    // Arrow Function
    const transformarParaMaiusculas = (str:string)=> str.toUpperCase()
	//-----Fim do código*/
    return(
        <h1>{transformarParaMaiusculas('exemplo')}</h1>
    )
}
export default Revisao;