import { MouseEventHandler } from "react"

type PropsPagination = {
    page: number,
    totalPages: number,
    onLeftClick: MouseEventHandler,
    onRightClick: MouseEventHandler
}

export default function Pagination({page, totalPages, onLeftClick, onRightClick}: PropsPagination) {
  return (
    <>
    
        <button onClick={onLeftClick}>Voltar</button>
        <div>{page} de {totalPages}</div>
        <button onClick={onRightClick}>Próximo</button>

    </>
  )
}
