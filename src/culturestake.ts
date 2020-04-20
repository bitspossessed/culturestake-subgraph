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
} from './types/Hub/Hub'

import {
  Question,
  Festival,
  VotingBooth,
} from './types/schema'

import {
  Question as QuestionContract,
} from './types/templates'

export function handleInitQuestion(event: InitQuestionEvent): void { }

export function handleInitFestival(event: InitFestivalEvent): void { }

export function handleInitVotingBooth(event: InitVotingBoothEvent): void { }

export function handleDeactivateQuestion(event: DeactivateQuestionEvent): void { }

export function handleDeactivateFestival(event: DeactivateFestivalEvent): void { }

export function handleDeactivateVotingBooth(event: DeactivateVotingBoothEvent): void { }
