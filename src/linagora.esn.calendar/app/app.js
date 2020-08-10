'use strict';

angular.module('esn.calendar', [
  'AngularJstz',
  'angularMoment',
  'esn.mailto-handler',
  'esn.aggregator',
  'esn.authentication',
  'esn.avatar',
  'esn.cache',
  'esn.calMoment',
  'esn.configuration',
  'esn.core',
  'esn.form.helper',
  'esn.header',
  'esn.highlight',
  'esn.i18n',
  'esn.ical',
  'esn.lodash-wrapper',
  'esn.media.query',
  'esn.module-registry',
  'esn.notification',
  'esn.provider',
  'esn.previous-page',
  'esn.router',
  'esn.search',
  'esn.session',
  'esn.settings-overlay',
  'esn.clipboard',
  'esn.user-configuration',
  'esn.widget.helper',
  'linagora.esn.graceperiod',
  'materialAdmin',
  'mgcrea.ngStrap.aside',
  'mgcrea.ngStrap.datepicker',
  'mgcrea.ngStrap.modal',
  'naturalSort',
  'ng.deviceDetector',
  'ngPromiseExtras',
  'ngTouch',
  'op.dynamicDirective',
  'pascalprecht.translate',
  'restangular',
  'material.components.tooltip',
  'material.components.radioButton',
  'uuid4',
  'esn.onscroll',
  'esn.datetime',
  'esn.localstorage',
  'esn.scroll',
  'ngTagsInput',
  'esn.member',
  'angular-clockpicker',
  'linagora.esn.videoconference',
  'linagora.esn.videoconference.calendar',
  'esn.calendar.libs'
]);

require('esn-frontend-common-libs/src/frontend/js/modules/esn.router.js');
require('esn-frontend-common-libs/src/frontend/js/modules/notification.js');
require('esn-frontend-common-libs/src/frontend/js/modules/user/user.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/media-query.js');
require('esn-frontend-common-libs/src/frontend/js/modules/highlight.js')
require('esn-frontend-common-libs/src/frontend/js/modules/i18n/i18n.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/session.js');
require('esn-frontend-common-libs/src/frontend/js/modules/scroll.js');
require('esn-frontend-common-libs/src/frontend/js/modules/core.js');
require('esn-frontend-common-libs/src/frontend/js/modules/datetime/datetime.module.js');
require('esn-frontend-common-libs/src/frontend/components/openpaas-logo/openpaas-logo.js');
require('esn-frontend-common-libs/src/modules/linagora.esn.graceperiod/frontend/js/app.js');
require('esn-frontend-common-libs/src/frontend/js/modules/avatar.js');
require('esn-frontend-common-libs/src/frontend/js/modules/application-menu.js');
require('esn-frontend-common-libs/src/frontend/js/modules/form-helper/form-helper.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/search/search.module.js');
require('esn-frontend-common-libs/src/frontend/js/constants.js');
require('esn-frontend-common-libs/src/frontend/js/modules/search/search.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/cache.js');
require('esn-frontend-common-libs/src/frontend/js/modules/user/user.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/member.js');
require('esn-frontend-common-libs/src/frontend/js/modules/user-configuration/user-configuration.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/attendee/attendee.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/config/config.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/session');
require('esn-frontend-common-libs/src/frontend/js/modules/http.js');
require('esn-frontend-common-libs/src/frontend/js/modules/localstorage.js');
require('esn-frontend-common-libs/src/frontend/js/modules/datetime/datetime.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/media-query.js');
require('esn-frontend-common-libs/src/frontend/js/modules/escape-html.js');
require('esn-frontend-common-libs/src/frontend/components/angular-jstz/angular-jstz.js');
require('esn-frontend-common-libs/src/frontend/js/modules/websocket.js');
require('esn-frontend-common-libs/src/frontend/js/modules/touchscreen-detector.js');
require('esn-frontend-common-libs/src/frontend/js/modules/async-action.js');
require('esn-frontend-common-libs/src/frontend/js/modules/module-registry/module-registry.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/settings-overlay.js');
require('esn-frontend-common-libs/src/frontend/js/modules/clipboard/clipboard.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/widget-helper.js');
require('esn-frontend-common-libs/src/frontend/js/modules/onscroll/on-scroll.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/localstorage.js');
require('esn-frontend-common-libs/src/frontend/js/modules/scroll.js');
require('esn-frontend-common-libs/src/frontend/js/modules/previous-page.js');

require('../../esn.calendar.libs/app/app.module.js');

require ('./app.config.js');
require ('./calendar-configuration/calendar-configuration-header/calendar-configuration-header.directive.js');
require ('./calendar-configuration/calendar-configuration-tab-delegation/calendar-configuration-tab-delegation.component.js');
require ('./calendar-configuration/calendar-configuration-tab-delegation/calendar-configuration-tab-delegation.controller.js');
require ('./calendar-configuration/calendar-configuration-tab-main/calendar-configuration-tab-main.component.js');
require ('./calendar-configuration/calendar-configuration-tab-main/calendar-configuration-tab-main.controller.js');
require ('./calendar-configuration/calendar-configuration-tabs/calendar-configuration-tabs.component.js');
require ('./calendar-configuration/calendar-configuration-tabs/calendar-configuration-tabs.controller.js');
require ('./calendar-configuration/calendar-configuration.component.js');
require ('./calendar-configuration/calendar-configuration.controller.js');
require ('./calendar-root/calendar-root.controller.js');
require ('./calendar-shared-configuration/calendar-shared-configuration.component.js');
require ('./calendar-shared-configuration/calendar-shared-configuration.controller.js');
require ('./calendar-shared-configuration/item/calendar-shared-configuration-item.component.js');
require ('./calendar/calendar-header/calendar-sub-header.controller.js');
require ('./calendar/calendar-header/calendar-sub-header.directive.js');
require ('./calendar/calendar-view/calendar-view.controller.js');
require ('./calendar/calendar-view/calendar-view.directive.js');
require ('./calendar/calendar.component.js');
require ('./calendar/calendar.controller.js');
require ('./components/calendar-color-picker/calendar-color-picker.js');
require ('./components/calendar-config-form/calendar-config-form.component.js');
require ('./components/calendar-icon/calendar-icon.component.js');
require ('./components/calendar-today-button/calendar-today-button.component.js');
require ('./components/calendar-today-button/calendar-today-button.controller.js');
require ('./components/calendar/calendar.component.js');
require ('./components/calendar/calendar.controller.js');
require ('./components/calendars-list/calendars-list.component.js');
require ('./components/calendars-list/calendars-list.controller.js');
require ('./components/calendars-list/external/external-calendars-list.component.js');
require ('./components/calendars-list/items/calendars-list-items.component.js');
require ('./components/calendars-list/items/calendars-list-items.controller.js');
require ('./components/calendars-list/items/item/calendars-list-item.component.js');
require ('./components/calendars-list/items/item/calendars-list-item.controller.js');
require ('./components/calendars-list/items/item/configuration/calendars-list-item-configuration.component.js');
require ('./components/calendars-list/items/item/configuration/calendars-list-item-configuration.controller.js');
require ('./components/calendars-list/user/user-calendars-list.component.js');
require ('./components/event-alarm-consultation/event-alarm-consultation.component.js');
require ('./components/event-alarm-consultation/event-alarm-consultation.controller.js');
require ('./components/event-create-button/event-create-button.component.js');
require ('./components/event-create-button/event-create-button.controller.js');
require ('./components/event-date-consultation/event-date-consultation.component.js');
require ('./components/event-date-consultation/event-date-consultation.controller.js');
require ('./components/event-participation/event-participation.component.js');
require ('./components/manage-left-menu/manage-left-menu.component.js');
require ('./components/mini-calendar/mini-calendar-eventsource-builder.service.js');
require ('./components/mini-calendar/mini-calendar-mobile.directive.js');
require ('./components/mini-calendar/mini-calendar.controller.js');
require ('./components/mini-calendar/mini-calendar.directive.js');
require ('./components/mini-calendar/mini-calendar.service.js');
require ('./components/modals/calendar-delete-confirmation/calendar-delete-confirmation-modal.service.js');
require ('./components/rights/shared/calendar-shared-rights-display.component.js');
require ('./components/rights/shared/calendar-shared-rights-display.controller.js');
require ('./components/show-planning-sidebar-button/show-planning-sidebar-button.component.js');
require ('./components/show-planning-sidebar-button/show-planning-sidebar-button.controller.js');
require ('./core/calendar-date-indicator.directive.js');
require ('./core/calendar-view-translation.directive.js');
require ('./core/friendlify-end-date.directive.js');
require ('./core/partstat.filter.js');
require ('./core/toggle-calendar-today.directive.js');
require ('./core/toggle-calendar-view.directive.js');
require ('./core/toggle-mini-calendar.directive.js');
require ('./event-message/event-message-edition-button/event-message-edition-button.directive.js');
require ('./event-message/event-message-edition/event-message-edition.component.js');
require ('./event-message/event-message-edition/event-message-edition.controller.js');
require ('./event-message/event-message.directive.js');
require ('./event-message/event-message.service.js');
require ('./event-view/event-view.component.js');
require ('./event-view/event-view.controller.js');
require ('./event-view/external-user/event-view-external-user.component.js');
require ('./event-view/external-user/event-view-external-user.controller.js');
require ('./event-view/internal-user/event-view-internal-user.component.js');
require ('./event-view/internal-user/event-view-internal-user.controller.js');
require ('./module-registry.run.js');
require ('./planning/aside/calendar-planning-aside.directive.js');
require ('./planning/calendar-planning.component.js');
require ('./planning/calendar-planning.controller.js');
require ('./routes.js');
require ('./run.js');
require ('./search/event/event-search-card.component.js');
require ('./search/event/event-search-provider.service.js');
require ('./search/form/dropdown/calendar-options/calendar-search-form-dropdown-calendar-options.component.js');
require ('./search/form/dropdown/calendar-search-form-dropdown.component.js');
require ('./search/form/dropdown/calendar-search-from-dropdown.controller.js');
require ('./search/form/search-form.component.js');
require ('./search/form/search-form.controller.js');
require ('./search/search.run.js');
require ('./services/websocket/listener.run.js');
require ('./services/websocket/listener.service.js');
require ('./settings/calendars/fab/create-calendar-menu-item/create-calendar-menu-item.component.js');
require ('./settings/calendars/fab/create-calendar-menu-item/create-calendar-menu-item.run.js');
require ('./settings/calendars/fab/import-calendar-menu-item/import-calendar-menu-item.component.js');
require ('./settings/calendars/fab/import-calendar-menu-item/import-calendar-menu-item.run.js');
require ('./settings/calendars/fab/subscribe-calendar-menu-item/subscribe-calendar-menu-item.component.js');
require ('./settings/calendars/fab/subscribe-calendar-menu-item/subscribe-calendar-menu-item.run.js');
require ('./settings/calendars/item/settings-calendars-item.component.js');
require ('./settings/calendars/item/settings-calendars-item.controller.js');
require ('./settings/calendars/settings-calendars.component.js');
require ('./settings/calendars/settings-calendars.controller.js');
require ('./settings/display/settings-display.component.js');
require ('./settings/display/settings-display.controller.js');
require ('./settings/import/calendar-import.component.js');
require ('./settings/import/calendar-import.controller.js');
require ('./settings/settings.controller.js');
require ('./settings/sidebar-button/settings-sidebar-button.component.js');
require ('./settings/subheader/display/settings-display-subheader.component.js');
require ('./settings/subheader/settings-subheader.component.js');
require ('./sidebar/sidebar.directive.js');
require ('./sidebar/title/sidebar-title.component.js');
