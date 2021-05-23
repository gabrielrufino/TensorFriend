'use strict'

const classifiers = require('../models/classifiers/')
const intentions = require('../data/intentions.json')
const { getRandomPosition } = require('../helpers')

const text = context => {
  const { text } = context.update.message

  const classifications = classifiers.text.getClassifications(text)

  const firstClassification = classifications[0]
  const lastClassification = classifications[classifications.length - 1]

  if ((firstClassification.value - lastClassification.value) > 0.08) {
    const intention = intentions.find(intention => intention.code === firstClassification.label)
    const { answers } = intention

    const answer = answers[getRandomPosition(answers)]
    context.reply(answer)
  }
}

module.exports = text
