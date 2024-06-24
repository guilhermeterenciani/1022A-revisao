function Revisao(){
    // Faça uma função mostraNumeros que receba um objeto de 
    // Numeros que tenha as propriedades min e max
    // E devolva uma string do número max até o min em sequencia

    // Ex:
    /** obj.min = 10
     *  obj.max = 15
     *  mostraNumeros(obj)
     *  retorno "15,14,13,12,11,10"
    */
    type F = {
        min:number,
        max:number
    }
    function mostraNumeros(obj:F){
        let texto:string = ""
        let i:number = obj.max
        while(i>=obj.min){
            if(i==obj.min){
                texto = texto.concat(i.toString())
            }
            else{
                texto = texto.concat(i.toString()+', ')
            }
            i = i-1
        }
        return texto
    }
    let obj = {min:10,max:15}
    return(
        <h1>{mostraNumeros(obj)}</h1>
    )
}
export default Revisao;