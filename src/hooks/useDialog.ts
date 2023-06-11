import { useState } from 'react'

export const useDialog = (initiallyOpen = false) => {
  const [isDialogOpen, setIsDialogOpen] = useState(initiallyOpen)

  const openDialog = () => {
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
  }

  const toggleDialog = () => {
    setIsDialogOpen((isDialogOpen) => !isDialogOpen)
  }

  return {
    isDialogOpen,
    openDialog,
    closeDialog,
    toggleDialog
   }
}
