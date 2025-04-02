const Etiqueta = (props)=> {

    var textoPadrao = "Texto Padrão da Etiqueta"

    return (
        <>
        
           <p>{(props.texto !=null) ? props.texto : textoPadrão}</p>
        </>
    )
}

export default Etiqueta