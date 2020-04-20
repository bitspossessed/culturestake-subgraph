 import {
  Address,
  BigInt,
  store,
} from '@graphprotocol/graph-ts'

 import {
  Vote as VoteEvent,
  InitAnswer as InitAnswerEvent,
  DeactivateAnswer as DeactivateAnswerEvent,
} from './types/templates/Question/Question'

import {
  Question,
  Answer,
  Vote,
} from './types/schema'

export function handleVote(event: VoteEvent): void { }

export function handleInitAnswer(event: InitAnswerEvent): void { }

export function handleDeactivateAnswer(event: DeactivateAnswerEvent): void { }
