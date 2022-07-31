import React, { memo } from 'react'

//El memo hook siempre va de la mano con el callback
//Este se memoriza este bloque, mientras el callback hace la llamada y memoriza el bloque que es llamado


export const Hijo = memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
