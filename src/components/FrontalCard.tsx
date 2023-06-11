'use client'

import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
// eslint-disable-next-line camelcase
import Heart_isolated from '@/assets/Heart_isolated.svg'

interface CardProps {
  title: string
  setTitle: Dispatch<SetStateAction<string>>
  imageLink: string
  setImageLink: Dispatch<SetStateAction<string>>
}

export function FrontalCard(props: CardProps) {
  const { title, setTitle, imageLink, setImageLink } = props

  const handleImage = () => {
    const promptData = prompt(
      'Digite o endereço URL da imagem',
      imageLink ?? 'Ex:https://site.com/image.png',
    )
    setImageLink(promptData ?? '')
  }

  return (
    <div className=" flex  w-full flex-col items-center justify-center gap-5 rounded-lg bg-cardinal-50 px-2 py-20">
      {/* Image Card */}
      <div
        onClick={handleImage}
        className="flex h-44 w-44 items-center justify-center rounded-full  transition-all hover:scale-110 hover:cursor-pointer hover:opacity-90"
      >
        {imageLink ? (
          <Image
            src={imageLink}
            alt="Image"
            width={150}
            height={150}
            className="rounded-full"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div className="relative flex items-center justify-center">
            {/* eslint-disable-next-line camelcase */}
            <Image src={Heart_isolated} alt="Coração" />
            <span className="absolute text-center">Selecione uma imagem</span>
          </div>
        )}
      </div>

      {/* Input title */}
      <input
        type="text"
        name="title"
        value={title}
        onChange={(value) => setTitle(value.target.value)}
        id="title"
        maxLength={20}
        className="w-full break-all rounded-full border-none bg-dune-60 text-center text-2xl text-dune-10 outline-none "
      />
    </div>
  )
}
