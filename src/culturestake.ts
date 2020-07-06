 import {
  Address,
  BigInt,
  store,
} from '@graphprotocol/graph-ts'

 import {
  InitQuestion as InitQuestionEvent,
  InitFestival as InitFestivalEvent,
  InitVotingBooth as InitVotingBoothEvent,
  DeactivateQuestion as DeactivateQuestionEvent,
  DeactivateFestival as DeactivateFestivalEvent,
  DeactivateVotingBooth as DeactivateVotingBoothEvent,
} from './types/Culturestake/Culturestake'

import {
  Question,
  Festival,
  VotingBooth,
} from './types/schema'

import {
  Question as QuestionContract,
} from './types/templates'

export function handleInitQuestion(event: InitQuestionEvent): void {
  QuestionContract.create(event.params.questionAddress)

  let question = new Question(event.params.questionAddress.toHexString())
  question.festival = event.params.festival.toHexString()
  question.inited = true
  question.save()
}

export function handleInitFestival(event: InitFestivalEvent): void {
  let festival = new Festival(event.params.festival.toHexString())
  festival.inited = true
  festival.startTime = event.params.startTime
  festival.endTime = event.params.endTime
  festival.save()
}

export function handleInitVotingBooth(event: InitVotingBoothEvent): void {
  let booth = new VotingBooth(event.params.boothAddress.toHexString())
  booth.inited = true
  booth.festival = event.params.festival.toHexString()
  booth.save()
}

export function handleDeactivateQuestion(event: DeactivateQuestionEvent): void { 
  let question = Question.load(event.params.questionAddress.toHexString())
  question.deactivated = true
  question.save()
}

export function handleDeactivateFestival(event: DeactivateFestivalEvent): void {
  let fest = Festival.load(event.params.festival.toHexString())
  fest.deactivated = true
  fest.save()
}

export function handleDeactivateVotingBooth(event: DeactivateVotingBoothEvent): void {
  let booth = VotingBooth.load(event.params.boothAddress.toHexString())
  booth.deactivated = true
  booth.save()
}
