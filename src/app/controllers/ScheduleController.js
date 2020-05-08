/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
const { User, Appointment } = require('../models')
const { Op } = require('sequelize')
const moment = require('moment')

class ScheduleController {
  async index(req, res) {
    const appointments = await Appointment.findAll({
      include: [{ model: User, as: 'user' }],
      where: {
        provider_id: req.session.user.id,
        date: {
          [Op.between]: [
            moment().startOf('year').format(),
            moment().endOf('year').format(),
          ],
        },
      },
    })

    return res.render('schedule', { appointments })
  }
}

module.exports = new ScheduleController()
