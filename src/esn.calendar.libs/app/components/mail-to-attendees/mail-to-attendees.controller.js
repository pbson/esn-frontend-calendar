const _ = require('lodash');

require('../../app.constants.js');

'use strict';

angular.module('esn.calendar.libs')
  .controller('calMailToAttendeesController', calMailToAttendeesController);

function calMailToAttendeesController(session, CAL_ICAL) {
  var self = this;

  self.getEmailAddressesFromUsers = getEmailAddressesFromUsers;

  function getEmailAddressesFromUsers(list) {
    return _.chain(list).reject(removeResources).map('email').uniq().reject(removeCurrentUser).join().value();
  }

  function removeCurrentUser(email) {
    return email === session.user.preferredEmail;
  }

  function removeResources(attendee) {
    return attendee.cutype && attendee.cutype === CAL_ICAL.cutype.resource;
  }
}