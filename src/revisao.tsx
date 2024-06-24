function Revisao(){
    // Faça uma função mostraNumeros pares que receba um objeto de 
    // Numeros que tenha as propriedades min e max
    // E devolva uma string do número min até o max em sequencia dos números pares

    // Ex:
    /** obj.min = 10
     *  obj.max = 15
     *  mostraNumeros(obj)
     *  retorno "10,12,14"
     * 
    */
    type F = {
        min:number,
        max:number
    }
    function mostraNumeros(obj:F){
        let texto = ''
        let i = obj.min
        while(i<=obj.max){
            if(i%2==0){
                texto = texto.concat(i.toString(),",")
            }
            i = i+1
        }
        return texto
    }

    let obj = {min:10,max:15}
    return(
        <h1>{mostraNumeros(obj)}</h1>
    )
}
export default Revisao;