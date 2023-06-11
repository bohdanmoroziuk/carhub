"use client"

import { useState } from 'react'
import Image from 'next/image'

import { Car } from '@/types'
import { calculateCarRent } from '@/utils'
import { useDialog } from '@/hooks'
import { CustomButton, CarDetailsDialog } from '.'

export interface CarCardProps {
  car: Car
}

const CarCard = ({ car }: CarCardProps) => {
  const { isDialogOpen, closeDialog, openDialog } = useDialog()

  const carRent = calculateCarRent(car.city_mpg, car.year)

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {car.make} {car.model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] font-medium">
          /day
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          className="object-contain"
          src="/hero.png"
          alt={`${car.make} ${car.model}`}
          fill
          priority
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex justify-between text-gray group-hover:invisible w-full">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="Steering wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {car.transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/tire.svg"
              alt="Tire"
              width={20}
              height={20}
            />
            <p className="text-[14px] uppercase">
              {car.drive}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/gas.svg"
              alt="Gas"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {car.city_mpg} MPG
            </p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View more"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={openDialog}
          />
        </div>
      </div>
      <CarDetailsDialog
        car={car}
        isOpen={isDialogOpen}
        onClose={closeDialog}
      />
    </div>
  )
}

export default CarCard
