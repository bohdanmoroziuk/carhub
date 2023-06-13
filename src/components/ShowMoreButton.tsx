"use client"

import { useRouter } from 'next/navigation'

import { CustomButton } from '.'
import { updateSearchParam } from '@/utils'

export interface ShowMoreButtonProps {
  pageNumber: number
  isNext: boolean
}

const ShowMoreButton = ({ pageNumber, isNext }: ShowMoreButtonProps) => {
  const router = useRouter()

  const handleNavigation = () => {
    const limit = (pageNumber + 1) * 10

    const path = updateSearchParam('limit', limit.toString())

    router.push(path)
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMoreButton
