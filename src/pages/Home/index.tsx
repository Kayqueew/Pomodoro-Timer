import { NewCycleForm } from './components/NewCycleForm/index'
import { Countdown } from './components/Countdown/index'
import { HandPalm, Play } from 'phosphor-react'
import { useContext } from 'react'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CyclesContext } from '../../context/CyclesContext'
import { useForm, FormProvider } from 'react-hook-form'
import {
  HomeConteiner,
  StartCountdownButton,
  StopCountDownButton,
} from './styles'

const newCycleFormValitionSchema = zod.object({
  // mensagem de validação
  task: zod.string().min(1, 'informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValitionSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValitionSchema),

    defaultValues: {
      task: '',
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(date: NewCycleFormData) {
    createNewCycle(date)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeConteiner>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountDownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountDownButton>
        ) : (
          <StartCountdownButton type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeConteiner>
  )
}
