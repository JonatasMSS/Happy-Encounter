import { Dispatch, SetStateAction } from 'react'

interface CardProps {
  title: string
  setTitle: Dispatch<SetStateAction<string>>
}
export function BackCard(props: CardProps) {
  const { title, setTitle } = props

  return (
    <div className=" flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-cardinal-50 bg-[#1C1C1C] px-2 py-44">
      {/* Input title */}
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(value) => setTitle(value.target.value)}
        className="w-full break-all rounded-sm border-none bg-dune-60 text-center text-xl text-dune-10 outline-none "
      />
    </div>
  )
}
