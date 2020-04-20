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
  question.questionType = new BigInt(event.params.questionType)
  question.festival = event.params.festival.toString()
  question.active = true
  question.save()

  let fest = Festival.load(event.params.festival.toString())
  fest.questions.push(event.params.questionAddress.toHexString())
  fest.save()
}

export function handleInitFestival(event: InitFestivalEvent): void {
  let festival = new Festival(event.params.festival.toString())
  festival.active = true
  festival.startTime = event.params.startTime
  festival.duration = event.params.duration
  festival.save()
}

export function handleInitVotingBooth(event: InitVotingBoothEvent): void {
  let booth = new VotingBooth(event.params.boothAddress.toHexString())
  booth.active = true
  booth.festival = event.params.festival.toString()
  booth.save()

  let fest = Festival.load(event.params.festival.toString())
  fest.votingBooths.push(event.params.boothAddress.toHexString())
  fest.save()
}

export function handleDeactivateQuestion(event: DeactivateQuestionEvent): void { 
  let question = Question.load(event.params.questionAddress.toHexString())
  question.active = false
  question.save()
}

export function handleDeactivateFestival(event: DeactivateFestivalEvent): void {
  let fest = Festival.load(event.params.festival.toString())
  fest.active = false
  fest.save()
}

export function handleDeactivateVotingBooth(event: DeactivateVotingBoothEvent): void {
  let booth = VotingBooth.load(event.params.boothAddress.toHexString())
  booth.active = false
  booth.save()
}
