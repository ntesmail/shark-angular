'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};
	/******/
	/******/ // The require function
	/******/function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId]) {
			/******/return installedModules[moduleId].exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/i: moduleId,
			/******/l: false,
			/******/exports: {}
			/******/ };
		/******/
		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Flag the module as loaded
		/******/module.l = true;
		/******/
		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}
	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;
	/******/
	/******/ // identity function for calling harmony imports with the correct context
	/******/__webpack_require__.i = function (value) {
		return value;
	};
	/******/
	/******/ // define getter function for harmony exports
	/******/__webpack_require__.d = function (exports, name, getter) {
		/******/if (!__webpack_require__.o(exports, name)) {
			/******/Object.defineProperty(exports, name, {
				/******/configurable: false,
				/******/enumerable: true,
				/******/get: getter
				/******/ });
			/******/
		}
		/******/
	};
	/******/
	/******/ // getDefaultExport function for compatibility with non-harmony modules
	/******/__webpack_require__.n = function (module) {
		/******/var getter = module && module.__esModule ?
		/******/function getDefault() {
			return module['default'];
		} :
		/******/function getModuleExports() {
			return module;
		};
		/******/__webpack_require__.d(getter, 'a', getter);
		/******/return getter;
		/******/
	};
	/******/
	/******/ // Object.prototype.hasOwnProperty.call
	/******/__webpack_require__.o = function (object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	};
	/******/
	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "/";
	/******/
	/******/ // Load entry module and return exports
	/******/return __webpack_require__(__webpack_require__.s = 1);
	/******/
})(
/************************************************************************/
/******/{

	/***/"/kcE":
	/***/function kcE(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__ = __webpack_require__("f4c1");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_const__ = __webpack_require__("7Lx1");

		angular.module('shark-angularjs.ui').directive(__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].radiogroup, ['SharkConfig', '$timeout', function (SharkConfig, $timeout) {
			return {
				restrict: 'E',
				template: ' <div>\n                            <label ng-class="{\'radio-inline\':direction===\'horizonal\',\'radio\':direction!==\'horizonal\'}" ng-repeat="item in radios track by $index">\n                                <input type="radio" name="{{radioname}}" ng-click="setModelValue(item);" value="{{item.value}}">{{item.name}}\n                            </label>\n                        </div>\n            ',
				scope: {
					direction: '@',
					radioname: '@',
					radios: '='
				},
				replace: true,
				require: '?ngModel',
				link: function link($scope, element, attrs, ngModelCtrl) {
					var elementJq = __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].$(element);
					//点击radio改变ngModel
					$scope.setModelValue = function (item) {
						if (ngModelCtrl && ngModelCtrl.$setViewValue && ngModelCtrl.$modelValue !== item.value) {
							ngModelCtrl.$setViewValue(item.value);
						}
					};
					// 侦听ngModel改变
					$scope.$watch(function () {
						return ngModelCtrl.$modelValue;
					}, function (newValue, oldValue) {
						$timeout(function () {
							var radio = elementJq.find('input[value="' + newValue + '"]');
							radio.prop('checked', true);
						}, 0);
					});
				}
			};
		}]);

		/***/
	},

	/***/"0FTm":
	/***/function FTm(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0_flatpickr__ = __webpack_require__("GxBP");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_flatpickr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_flatpickr__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_const__ = __webpack_require__("7Lx1");

		angular.module('shark-angularjs.ui').directive(__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].datepicker, ['SharkConfig', function (SharkConfig) {
			//获取默认配置
			var datepickerConfig = SharkConfig.getConfig()[__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].datepicker];
			return {
				restrict: 'E',
				template: '<div class="shark-datepicker">\
                            <input class="shark-datepicker-ipt" type="text"/>\
                       </div>\
            ',
				replace: true,
				require: '?ngModel',
				link: function link($scope, element, attrs, ngModelCtrl) {
					//可选最大日期
					var maxDate = typeof attrs.maxDate !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.maxDate) : null;
					//可选最小日期
					var minDate = typeof attrs.minDate !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.minDate) : null;
					//格式化日期
					var format = typeof attrs.format !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.format) : datepickerConfig.format;
					//根据format来选择是否显示时分秒
					//显示时分
					var enableTime = /H|i|S/.test(format);
					//显示秒
					var enableSeconds = /S/.test(format);
					//不显示年月日
					var noCalendar = !(/Y/.test(format) || /m/.test(format) || /d/.test(format));
					//显示24小时
					var time_24hr = enableTime;
					//禁止选择日期list
					var disable = typeof attrs.dateDisable !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.dateDisable) : datepickerConfig.disable; //回调函数部分
					//change事件
					var changeCb = SharkConfig.getAttrValue($scope, attrs.onChange);
					//open事件
					var openCb = SharkConfig.getAttrValue($scope, attrs.onOpen);
					//close事件
					var closeCb = SharkConfig.getAttrValue($scope, attrs.onClose);

					function onChangeFunc(selectedDates, dateStr, instance) {
						var timestamp = selectedDates[0] && selectedDates[0].getTime();
						if (ngModelCtrl && ngModelCtrl.$setViewValue && ngModelCtrl.$modelValue !== timestamp) {
							ngModelCtrl.$setViewValue(timestamp);
						}
						if (typeof changeCb === 'function') {
							changeCb.apply(instance);
							if (!$scope.$$phase) {
								$scope.$apply();
							}
						}
					}
					function onOpenFunc(selectedDates, dateStr, instance) {
						if (typeof openCb === 'function') {
							openCb.apply(instance, arguments);
							if (!$scope.$$phase) {
								$scope.$apply();
							}
						}
					}
					function onCloseFunc(selectedDates, dateStr, instance) {
						if (typeof closeCb === 'function') {
							closeCb.apply(instance, arguments);
							if (!$scope.$$phase) {
								$scope.$apply();
							}
						}
					}

					//datepicker配置参数
					var dOption = {
						maxDate: maxDate,
						minDate: minDate,
						dateFormat: format,
						enableTime: enableTime,
						noCalendar: noCalendar,
						enableSeconds: enableSeconds,
						time_24hr: time_24hr,
						disable: disable,
						onChange: onChangeFunc,
						onOpen: onOpenFunc,
						onClose: onCloseFunc

						//实例化
					};var picker = new __WEBPACK_IMPORTED_MODULE_0_flatpickr___default.a(element.find("input")[0], dOption);

					// //侦听ngModel改变
					$scope.$watch(function () {
						return $scope.$eval(attrs.ngModel);
					}, function (newValue, oldValue) {
						picker.setDate(newValue);
					});

					//侦听ngDisabled改变
					var disableWatcher;
					if (typeof attrs.ngDisabled !== 'undefined') {
						disableWatcher = $scope.$watch(function () {
							return $scope.$eval(attrs.ngDisabled);
						}, function (newValue, oldValue) {
							if (newValue) {
								destroy();
								element.find("input").attr("disabled", true);
							} else {
								if (!picker) {
									picker = new __WEBPACK_IMPORTED_MODULE_0_flatpickr___default.a(element.find("input")[0], dOption);
									element.find("input").attr("disabled", false);
								}
							}
						});
					}

					//$scope销毁时同步销毁datepicker组件
					$scope.$on('$destroy', function () {
						if (disableWatcher) {
							disableWatcher();
						}
						destroy();
					});

					//destroy函数
					function destroy() {
						if (picker) {
							picker.destroy();
							picker = null;
						}
					}
				}
			};
		}]);

		/***/
	},

	/***/"0iVz":
	/***/function iVz(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0_flatpickr__ = __webpack_require__("GxBP");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_flatpickr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_flatpickr__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__ntesmail_shark_ui__ = __webpack_require__("f4c1");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_const__ = __webpack_require__("7Lx1");

		angular.module('shark-angularjs.ui').directive(__WEBPACK_IMPORTED_MODULE_2__common_const__["a" /* COMPONENTS */].daterangepicker, ['SharkConfig', function (SharkConfig) {
			//获取默认配置
			var datepickerConfig = SharkConfig.getConfig()[__WEBPACK_IMPORTED_MODULE_2__common_const__["a" /* COMPONENTS */].datepicker];
			return {
				restrict: 'E',
				template: '<div class="shark-datepicker shark-datepicker-range">\
                           <input type="text" class="shark-datepicker-ipt" placeholder="请选择开始时间"/>\
                           <span class="shark-datepicker-split">至</span>\
                           <input type="text" class="shark-datepicker-ipt" placeholder="请选择结束时间"/>\
                       </div>\
            ',
				replace: true,
				require: '?ngModel',
				link: function link($scope, element, attrs, ngModelCtrl) {
					//可选最大日期
					var maxDate = typeof attrs.maxDate !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.maxDate) : null;
					//可选最小日期
					var minDate = typeof attrs.minDate !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.minDate) : null;
					//格式化日期
					var format = typeof attrs.format !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.format) : datepickerConfig.format;
					//根据format来选择是否显示时分秒
					//显示时分
					var enableTime = /H|i|S/.test(format);
					//显示秒
					var enableSeconds = /S/.test(format);
					//不显示年月日
					var noCalendar = !(/Y/.test(format) || /m/.test(format) || /d/.test(format));
					//显示24小时
					var time_24hr = enableTime;
					//禁止选择日期list
					var disable = typeof attrs.dateDisable !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.dateDisable) : datepickerConfig.disable;
					//change事件
					var changeCb = SharkConfig.getAttrValue($scope, attrs.onChange);
					//open事件
					var openCb = SharkConfig.getAttrValue($scope, attrs.onOpen);
					//close事件
					var closeCb = SharkConfig.getAttrValue($scope, attrs.onClose);

					function onChangeFunc(selectedDates, dateStr, instance) {
						var start_timestamp = start_picker.selectedDates[0] && start_picker.selectedDates[0].getTime();
						var end_timestamp = end_picker.selectedDates[0] && end_picker.selectedDates[0].getTime();
						if (ngModelCtrl && ngModelCtrl.$setViewValue && (!__WEBPACK_IMPORTED_MODULE_1__ntesmail_shark_ui__["a" /* SharkUI */].isArray(ngModelCtrl.$modelValue) || ngModelCtrl.$modelValue[0] !== start_timestamp || ngModelCtrl.$modelValue[1] !== end_timestamp)) {
							ngModelCtrl.$setViewValue([start_timestamp, end_timestamp]);
						}
						if (typeof changeCb === 'function') {
							changeCb.apply(instance);
							if (!$scope.$$phase) {
								$scope.$apply();
							}
						}
					}
					function onOpenFunc(selectedDates, dateStr, instance) {
						if (typeof openCb === 'function') {
							openCb.apply(instance, arguments);
							if (!$scope.$$phase) {
								$scope.$apply();
							}
						}
					}
					function onCloseFunc(selectedDates, dateStr, instance) {
						if (typeof closeCb === 'function') {
							closeCb.apply(instance, arguments);
							if (!$scope.$$phase) {
								$scope.$apply();
							}
						}
					}

					//datepicker配置参数
					var dOption = {
						maxDate: maxDate,
						minDate: minDate,
						dateFormat: format,
						enableTime: enableTime,
						noCalendar: noCalendar,
						enableSeconds: enableSeconds,
						time_24hr: time_24hr,
						disable: disable,
						onChange: onChangeFunc,
						onOpen: onOpenFunc,
						onClose: onCloseFunc

						//实例化
					};var start_picker = new __WEBPACK_IMPORTED_MODULE_0_flatpickr___default.a(element.find("input")[0], dOption);
					var end_picker = new __WEBPACK_IMPORTED_MODULE_0_flatpickr___default.a(element.find("input")[1], dOption);

					//侦听ngModel改变
					$scope.$watch(function () {
						return $scope.$eval(attrs.ngModel);
					}, function (newValue, oldValue) {
						var start_timestamp = newValue && newValue[0];
						var end_timestamp = newValue && newValue[1];
						start_picker.setDate(start_timestamp);
						end_picker.setDate(end_timestamp);
						//正确设值时进入正常约束
						if (start_timestamp && end_timestamp && start_timestamp <= end_timestamp) {
							start_picker.set('maxDate', end_timestamp);
							end_picker.set('minDate', start_timestamp);
						}
						//[null,timestamp]未设置开始时间时只有结束时间约束
						else if (!start_timestamp && end_timestamp) {
								start_picker.set('maxDate', end_timestamp);
							}
							//[timestamp,null]未设置结束时间时只有开始时间约束
							else if (start_timestamp && !end_timestamp) {
									end_picker.set('minDate', start_timestamp);
								}
						//[later,earlier]错误设值和[null,null],null等三种情况不进行时间约束
					});

					//侦听ngDisabled改变
					var disableWatcher;
					if (typeof attrs.ngDisabled !== 'undefined') {
						disableWatcher = $scope.$watch(function () {
							return $scope.$eval(attrs.ngDisabled);
						}, function (newValue, oldValue) {
							if (newValue) {
								destroy();
								element.find("input").attr("disabled", true);
							} else {
								if (!start_picker) {
									start_picker = new __WEBPACK_IMPORTED_MODULE_0_flatpickr___default.a(element.find("input")[0], dOption);
								}
								if (!end_picker) {
									end_picker = new __WEBPACK_IMPORTED_MODULE_0_flatpickr___default.a(element.find("input")[1], dOption);
								}
								element.find("input").attr("disabled", false);
							}
						});
					}

					//$scope销毁时同步销毁daterangepicker组件
					$scope.$on('$destroy', function () {
						if (disableWatcher) {
							disableWatcher();
						}
						destroy();
					});

					//destroy函数
					function destroy() {
						if (start_picker) {
							start_picker.destroy();
							start_picker = null;
						}
						if (end_picker) {
							end_picker.destroy();
							end_picker = null;
						}
					}
				}
			};
		}]);

		/***/
	},

	/***/1:
	/***/function _(module, exports, __webpack_require__) {

		module.exports = __webpack_require__("v7ON");

		/***/
	},

	/***/"2gJo":
	/***/function gJo(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__ = __webpack_require__("f4c1");

		angular.module('shark-angularjs.ui').directive('sharkValidator', ['SharkValidHelper', function (SharkValidHelper) {
			function fliterElem(target, formElm) {
				// 获取元素
				var element = angular.element(target);
				if (element[0].tagName === 'INPUT') {
					if (element.hasClass('shark-autocomplete') || element.hasClass('shark-datepicker-ipt')) {
						return [element.parent()];
					}
					if (element.attr('type') === 'radio' || element.attr('type') === 'checkbox') {
						var radiogroup = element.parent().parent();
						if (radiogroup.attr('ng-model')) {
							return [radiogroup];
						}
					}
				}
				if (element.hasClass('shark-selecter')) {
					return [element.parent()];
				}
				var validRelation = element.attr('validrelation');
				if (validRelation) {
					var relationElms = formElm.find('[validrelation="' + validRelation + '"]');
					if (relationElms.length > 0) {
						var result = [];
						for (var i = 0; i < relationElms.length; i++) {
							result.push(angular.element(relationElms[i]));
						}
						return result;
					}
				}
				return [element];
			}
			return {
				link: function link($scope, elm, attr) {
					// form元素
					var formElm = __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].$(elm);
					// form控制器
					var formCtrl = elm.inheritedData("$formController");
					// 设置要提示错误的元素
					formCtrl.elemQueryStr = 'input,select,textarea,.shark-selecter,.js-clicktouch';
					// 出发表单验证
					formCtrl.doValidate = function () {
						// 防止有动态生成的表单元素不校验，每次校验都取一遍所有元素
						var needValidateEles = formElm.find(formCtrl.elemQueryStr);
						for (var i = 0; i < needValidateEles.length; i++) {
							// 获取元素的jqlite形态
							var atomElement = angular.element(needValidateEles[i]);
							// 获取元素的jquery形态
							var atomJq = __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].$(needValidateEles[i]);
							// 获取元素的控制器
							var atomCtrl = atomElement.inheritedData("$ngModelController");
							// 是否进行校验(元素隐藏和禁用情况下不进行校验)
							var isVerify = !(atomJq.is(':hidden') || atomJq.is(':disabled'));
							if (isVerify) {
								fliterElem(needValidateEles[i], formElm).forEach(function (item) {
									SharkValidHelper.showError(item);
								});
							} else {
								var errors = atomCtrl.$error;
								for (var error in errors) {
									atomCtrl.$setValidity(error, true);
								}
							}
						};
					};
					// 表单是否正在校验
					formCtrl.isPendding = function () {
						return formElm.find('.valid-pending').length > 0;
					};
					// 表单是否合法
					formCtrl.isValid = function () {
						return formCtrl.$valid;
					};
					formElm.on('focusout.validator', formCtrl.elemQueryStr, function (e) {
						fliterElem(e.target, formElm).forEach(function (item) {
							SharkValidHelper.showError(item);
						});
					});
					// 输入时清空错误
					formElm.on('input.validator', formCtrl.elemQueryStr, function (e) {
						fliterElem(e.target, formElm).forEach(function (item) {
							SharkValidHelper.removeError(item);
						});
					});
					// 销毁时解绑事件
					$scope.$on('$destroy', function () {
						formElm.off('focusout.validator input.validator');
					});
				}
			};
		}]).directive('formSubmit', ['$parse', function ($parse) {
			return {
				link: function link(scope, elm, attr) {
					var formCtrl = elm.inheritedData("$formController");
					var success = $parse(attr.formSubmit);
					elm.on('click', function () {
						formCtrl.doValidate();
						if (!formCtrl.isPendding() && formCtrl.isValid()) {
							scope.$apply(function () {
								angular.isFunction(success) ? success(scope) : '';
							});
						}
					});
					scope.$on('$destroy', function () {
						elm.off('click');
					});
				}
			};
		}]).directive('clicktouch', [function () {
			return {
				require: '?ngModel',
				link: function link($scope, elm, attr, ctrl) {
					if (!ctrl) return;
					elm.addClass('js-clicktouch');
					elm.on('click', function () {
						if (ctrl.$touched) {
							return;
						} else {
							$scope.$apply(function () {
								ctrl.$setTouched();
							});
							__WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].$(elm).trigger('focusout');
						}
					});
					$scope.$on('$destroy', function () {
						elm.off('click');
					});
				}
			};
		}]).directive('ensure', ['SharkValidHelper', 'SharkValidConfig', function (SharkValidHelper, SharkValidConfig) {
			return {
				require: 'ngModel',
				link: function link(scope, elm, attr, ctrl) {
					if (!ctrl) return;
					scope.$watch(attr.ngModel, function (newValue, oldvalue) {
						SharkValidHelper.triggerCheck(scope, elm, attr, ctrl, newValue, SharkValidConfig.ensure);
					}, true);
				}
			};
		}]).directive('repeatcheck', ['SharkValidHelper', 'SharkValidConfig', function (SharkValidHelper, SharkValidConfig) {
			return {
				require: '?ngModel',
				link: function link(scope, elm, attr, ctrl) {
					// 获取比较元素的控制器
					var otherInput = elm.inheritedData("$formController")[attr.repeatcheck];
					if (!ctrl || !otherInput) {
						return;
					}
					scope.$watch(attr.ngModel, function (newValue, oldvalue) {
						SharkValidHelper.triggerCheck(scope, elm, attr, ctrl, {
							value: newValue,
							compareValue: otherInput.$viewValue
						}, SharkValidConfig.repeatcheck);
					});
					scope.$watch(function () {
						return otherInput.$modelValue;
					}, function (newValue, oldvalue) {
						SharkValidHelper.triggerCheck(scope, elm, attr, ctrl, {
							value: ctrl.$viewValue,
							compareValue: newValue
						}, SharkValidConfig.repeatcheck);
					});
				}
			};
		}]).directive('datetimecheck', ['SharkValidHelper', 'SharkValidConfig', function (SharkValidHelper, SharkValidConfig) {
			return {
				require: '?ngModel',
				link: function link(scope, elm, attr, ctrl) {
					if (!ctrl) return;
					scope.$watch(attr.ngModel, function (newVal, oldVal) {
						SharkValidHelper.triggerCheck(scope, elm, attr, ctrl, newVal, SharkValidConfig.datetimecheck);
					});
				}
			};
		}]).directive('minlencheck', ['SharkConfig', 'SharkValidHelper', 'SharkValidConfig', function (SharkConfig, SharkValidHelper, SharkValidConfig) {
			// 特殊，先保留
			return {
				require: '?ngModel',
				link: function link($scope, elm, attr, ctrl) {
					if (!ctrl) return;
					$scope.$watch(attr.ngModel, function (newValue, oldvalue) {
						SharkValidHelper.triggerCheck($scope, elm, attr, ctrl, {
							value: newValue,
							compareLength: SharkConfig.getAttrValue($scope, attr.minlencheck)
						}, SharkValidConfig.minlencheck);
					});
				}
			};
		}]).directive('maxlencheck', ['SharkConfig', 'SharkValidHelper', 'SharkValidConfig', function (SharkConfig, SharkValidHelper, SharkValidConfig) {
			// 特殊，先保留
			return {
				require: '?ngModel',
				link: function link($scope, elm, attr, ctrl) {
					if (!ctrl) return;
					$scope.$watch(attr.ngModel, function (newValue, oldvalue) {
						SharkValidHelper.triggerCheck($scope, elm, attr, ctrl, {
							value: newValue,
							compareLength: SharkConfig.getAttrValue($scope, attr.maxlencheck)
						}, SharkValidConfig.maxlencheck);
					});
				}
			};
		}]).directive('filecheck', ['SharkValidHelper', 'SharkValidConfig', function (SharkValidHelper, SharkValidConfig) {
			// 特殊，先保留
			return {
				require: '?ngModel',
				link: function link($scope, elm, attr, ctrl) {
					if (!ctrl) return;
					// 节点名称为sharkfileupload的情况
					if (elm[0] && elm[0].nodeName.toLowerCase() === 'sharkfileupload') {
						$scope.$watch(attr.ngModel, function (newValue, oldvalue) {
							SharkValidHelper.triggerCheck($scope, elm, attr, ctrl, newValue, SharkValidConfig.filecheck);
						});
					}
				}
			};
		}]).directive('ipcheck', ['SharkValidHelper', 'SharkValidConfig', function (SharkValidHelper, SharkValidConfig) {
			return {
				require: 'ngModel',
				link: function link($scope, elm, attr, ctrl) {
					if (!ctrl) return;
					$scope.$watch(attr.ngModel, function (newValue, oldvalue) {
						SharkValidHelper.triggerCheck($scope, elm, attr, ctrl, newValue, SharkValidConfig.ipcheck);
					});
				}
			};
		}]).directive('numbercheck', ['SharkValidHelper', 'SharkValidConfig', function (SharkValidHelper, SharkValidConfig) {
			return {
				require: '?ngModel',
				link: function link($scope, elm, attr, ctrl) {
					if (!ctrl) return;
					$scope.$watch(attr.ngModel, function (newValue, oldvalue) {
						SharkValidHelper.triggerCheck($scope, elm, attr, ctrl, newValue, SharkValidConfig.numbercheck);
					});
				}
			};
		}]).directive('phonenumcheck', ['SharkValidHelper', 'SharkValidConfig', function (SharkValidHelper, SharkValidConfig) {
			return {
				require: '?ngModel',
				link: function link($scope, elm, attr, ctrl) {
					if (!ctrl) return;
					$scope.$watch(attr.ngModel, function (newValue, oldvalue) {
						SharkValidHelper.triggerCheck($scope, elm, attr, ctrl, newValue, SharkValidConfig.phonenumcheck);
					});
				}
			};
		}]).directive('emailcheck', ['SharkValidHelper', 'SharkValidConfig', function (SharkValidHelper, SharkValidConfig) {
			return {
				require: '?ngModel',
				link: function link($scope, elm, attr, ctrl) {
					if (!ctrl) return;
					$scope.$watch(attr.ngModel, function (newValue, oldvalue) {
						SharkValidHelper.triggerCheck($scope, elm, attr, ctrl, newValue, SharkValidConfig.emailcheck);
					});
				}
			};
		}]).directive('customcheck', ['SharkConfig', 'SharkValidHelper', function (SharkConfig, SharkValidHelper) {
			return {
				require: '?ngModel',
				link: function link($scope, elm, attr, ctrl) {
					if (!ctrl) return;
					// 获取用户自定义验证函数
					var customFn = SharkConfig.getAttrValue($scope, attr.customcheck);
					$scope.$watch(attr.ngModel, function (newValue, oldvalue) {
						SharkValidHelper.triggerCheck($scope, elm, attr, ctrl, newValue, customFn);
					}, true);
				}
			};
		}]);

		/***/
	},

	/***/"7Lx1":
	/***/function Lx1(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "a", function () {
			return COMPONENTS;
		});
		var COMPONENTS = {
			autocomplete: 'sharkautocomplete',
			dropdown: 'sharkdropdown',
			fileupload: 'sharkfileupload',
			datepicker: 'sharkdatepicker',
			daterangepicker: 'sharkdaterangepicker',
			modal: 'sharkmodal',
			pager: 'sharkpager',
			popover: 'sharkpopover',
			selecter: 'sharkselecter',
			tabs: 'sharktabs',
			toastr: 'sharktoastr',
			tooltip: 'sharktooltip',
			tree: 'sharktree',
			radiogroup: 'radiogroup',
			checkboxgroup: 'checkboxgroup',
			checkabletable: 'checkabletable'
		};

		/***/
	},

	/***/"7mCR":
	/***/function mCR(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__ = __webpack_require__("f4c1");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_const__ = __webpack_require__("7Lx1");

		angular.module('shark-angularjs.ui').directive(__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].pager, ['SharkConfig', function (SharkConfig) {
			var PagerConfig = SharkConfig.getConfig()[__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].pager];
			return {
				restrict: 'E',
				link: function link($scope, element, attrs) {
					var pager;
					var disableWatcher;
					//销毁函数
					function destroy() {
						if (disableWatcher) {
							disableWatcher();
						}
						if (pager) {
							pager.destroy();
							pager = null;
						}
					}
					// 回调函数
					var pageChangedCb = SharkConfig.getAttrValue($scope, attrs.onPageChanged);
					// 语言
					var hl = typeof attrs.hl !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.hl) : PagerConfig.hl;
					// 每页展示大小
					var segmentSize = typeof attrs.segmentSize !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.segmentSize) : PagerConfig.segmentSize;
					// 页码从0开始还是从1开始
					var startFrom = typeof attrs.startFrom !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.startFrom) : PagerConfig.startFrom;
					// 是否需要跳转按钮
					var gopage = typeof attrs.gopage !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.gopage) : PagerConfig.gopage;
					// 如果定义了name属性，把pager组件赋给$scope
					var pagerName = attrs.name;

					// 初始化分页组件
					pager = __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].sharkPager({
						hl: hl,
						segmentSize: segmentSize,
						startFrom: startFrom,
						gopage: gopage,
						onPageChanged: function onPageChanged() {
							if (typeof pageChangedCb === 'function') {
								pageChangedCb.apply(pager, arguments);
								if (!$scope.$$phase) {
									$scope.$apply();
								}
							}
						}
					});
					pager.appendTo(element);
					if (typeof attrs.ngDisabled !== 'undefined') {
						// 监听组件是否被禁用
						disableWatcher = $scope.$watch(function () {
							return $scope.$eval(attrs.ngDisabled);
						}, function (newValue, oldValue) {
							if (pager) {
								if (newValue === true) {
									pager.disable();
								}
								if (newValue === false) {
									pager.enable();
								}
							}
						});
					}

					// currentPage和totalPage变化后，触发回调函数
					$scope.$watch(function () {
						return SharkConfig.getAttrValue($scope, attrs.currentPage) + '-' + SharkConfig.getAttrValue($scope, attrs.totalPage);
					}, function () {
						var page = SharkConfig.getAttrValue($scope, attrs.currentPage);
						var totalPages = SharkConfig.getAttrValue($scope, attrs.totalPage);
						pager.setPage(page, totalPages);
					}, true);

					if (pagerName) {
						$scope[pagerName] = pager;
					}

					// $scope销毁时同步销毁pager组件
					$scope.$on('$destroy', function () {
						destroy();
					});
				}
			};
		}]);

		/***/
	},

	/***/"7t+N":
	/***/function tN(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
                                                                   * jQuery JavaScript Library v3.2.1
                                                                   * https://jquery.com/
                                                                   *
                                                                   * Includes Sizzle.js
                                                                   * https://sizzlejs.com/
                                                                   *
                                                                   * Copyright JS Foundation and other contributors
                                                                   * Released under the MIT license
                                                                   * https://jquery.org/license
                                                                   *
                                                                   * Date: 2017-03-20T18:59Z
                                                                   */
		(function (global, factory) {

			"use strict";

			if ((typeof module === 'undefined' ? 'undefined' : _typeof2(module)) === "object" && _typeof2(module.exports) === "object") {

				// For CommonJS and CommonJS-like environments where a proper `window`
				// is present, execute the factory and get jQuery.
				// For environments that do not have a `window` with a `document`
				// (such as Node.js), expose a factory as module.exports.
				// This accentuates the need for the creation of a real `window`.
				// e.g. var jQuery = require("jquery")(window);
				// See ticket #14549 for more info.
				module.exports = global.document ? factory(global, true) : function (w) {
					if (!w.document) {
						throw new Error("jQuery requires a window with a document");
					}
					return factory(w);
				};
			} else {
				factory(global);
			}

			// Pass this if window is not defined yet
		})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

			// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
			// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
			// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
			// enough that all such attempts are guarded in a try block.
			"use strict";

			var arr = [];

			var document = window.document;

			var getProto = Object.getPrototypeOf;

			var _slice = arr.slice;

			var concat = arr.concat;

			var push = arr.push;

			var indexOf = arr.indexOf;

			var class2type = {};

			var toString = class2type.toString;

			var hasOwn = class2type.hasOwnProperty;

			var fnToString = hasOwn.toString;

			var ObjectFunctionString = fnToString.call(Object);

			var support = {};

			function DOMEval(code, doc) {
				doc = doc || document;

				var script = doc.createElement("script");

				script.text = code;
				doc.head.appendChild(script).parentNode.removeChild(script);
			}
			/* global Symbol */
			// Defining this global in .eslintrc.json would create a danger of using the global
			// unguarded in another place, it seems safer to define global only for this module


			var version = "3.2.1",


			// Define a local copy of jQuery
			jQuery = function jQuery(selector, context) {

				// The jQuery object is actually just the init constructor 'enhanced'
				// Need init if jQuery is called (just allow error to be thrown if not included)
				return new jQuery.fn.init(selector, context);
			},


			// Support: Android <=4.0 only
			// Make sure we trim BOM and NBSP
			rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


			// Matches dashed string for camelizing
			rmsPrefix = /^-ms-/,
			    rdashAlpha = /-([a-z])/g,


			// Used by jQuery.camelCase as callback to replace()
			fcamelCase = function fcamelCase(all, letter) {
				return letter.toUpperCase();
			};

			jQuery.fn = jQuery.prototype = {

				// The current version of jQuery being used
				jquery: version,

				constructor: jQuery,

				// The default length of a jQuery object is 0
				length: 0,

				toArray: function toArray() {
					return _slice.call(this);
				},

				// Get the Nth element in the matched element set OR
				// Get the whole matched element set as a clean array
				get: function get(num) {

					// Return all the elements in a clean array
					if (num == null) {
						return _slice.call(this);
					}

					// Return just the one element from the set
					return num < 0 ? this[num + this.length] : this[num];
				},

				// Take an array of elements and push it onto the stack
				// (returning the new matched element set)
				pushStack: function pushStack(elems) {

					// Build a new jQuery matched element set
					var ret = jQuery.merge(this.constructor(), elems);

					// Add the old object onto the stack (as a reference)
					ret.prevObject = this;

					// Return the newly-formed element set
					return ret;
				},

				// Execute a callback for every element in the matched set.
				each: function each(callback) {
					return jQuery.each(this, callback);
				},

				map: function map(callback) {
					return this.pushStack(jQuery.map(this, function (elem, i) {
						return callback.call(elem, i, elem);
					}));
				},

				slice: function slice() {
					return this.pushStack(_slice.apply(this, arguments));
				},

				first: function first() {
					return this.eq(0);
				},

				last: function last() {
					return this.eq(-1);
				},

				eq: function eq(i) {
					var len = this.length,
					    j = +i + (i < 0 ? len : 0);
					return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
				},

				end: function end() {
					return this.prevObject || this.constructor();
				},

				// For internal use only.
				// Behaves like an Array's method, not like a jQuery method.
				push: push,
				sort: arr.sort,
				splice: arr.splice
			};

			jQuery.extend = jQuery.fn.extend = function () {
				var options,
				    name,
				    src,
				    copy,
				    copyIsArray,
				    clone,
				    target = arguments[0] || {},
				    i = 1,
				    length = arguments.length,
				    deep = false;

				// Handle a deep copy situation
				if (typeof target === "boolean") {
					deep = target;

					// Skip the boolean and the target
					target = arguments[i] || {};
					i++;
				}

				// Handle case when target is a string or something (possible in deep copy)
				if ((typeof target === 'undefined' ? 'undefined' : _typeof2(target)) !== "object" && !jQuery.isFunction(target)) {
					target = {};
				}

				// Extend jQuery itself if only one argument is passed
				if (i === length) {
					target = this;
					i--;
				}

				for (; i < length; i++) {

					// Only deal with non-null/undefined values
					if ((options = arguments[i]) != null) {

						// Extend the base object
						for (name in options) {
							src = target[name];
							copy = options[name];

							// Prevent never-ending loop
							if (target === copy) {
								continue;
							}

							// Recurse if we're merging plain objects or arrays
							if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

								if (copyIsArray) {
									copyIsArray = false;
									clone = src && Array.isArray(src) ? src : [];
								} else {
									clone = src && jQuery.isPlainObject(src) ? src : {};
								}

								// Never move original objects, clone them
								target[name] = jQuery.extend(deep, clone, copy);

								// Don't bring in undefined values
							} else if (copy !== undefined) {
								target[name] = copy;
							}
						}
					}
				}

				// Return the modified object
				return target;
			};

			jQuery.extend({

				// Unique for each copy of jQuery on the page
				expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

				// Assume jQuery is ready without the ready module
				isReady: true,

				error: function error(msg) {
					throw new Error(msg);
				},

				noop: function noop() {},

				isFunction: function isFunction(obj) {
					return jQuery.type(obj) === "function";
				},

				isWindow: function isWindow(obj) {
					return obj != null && obj === obj.window;
				},

				isNumeric: function isNumeric(obj) {

					// As of jQuery 3.0, isNumeric is limited to
					// strings and numbers (primitives or objects)
					// that can be coerced to finite numbers (gh-2662)
					var type = jQuery.type(obj);
					return (type === "number" || type === "string") &&

					// parseFloat NaNs numeric-cast false positives ("")
					// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
					// subtraction forces infinities to NaN
					!isNaN(obj - parseFloat(obj));
				},

				isPlainObject: function isPlainObject(obj) {
					var proto, Ctor;

					// Detect obvious negatives
					// Use toString instead of jQuery.type to catch host objects
					if (!obj || toString.call(obj) !== "[object Object]") {
						return false;
					}

					proto = getProto(obj);

					// Objects with no prototype (e.g., `Object.create( null )`) are plain
					if (!proto) {
						return true;
					}

					// Objects with prototype are plain iff they were constructed by a global Object function
					Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
					return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
				},

				isEmptyObject: function isEmptyObject(obj) {

					/* eslint-disable no-unused-vars */
					// See https://github.com/eslint/eslint/issues/6125
					var name;

					for (name in obj) {
						return false;
					}
					return true;
				},

				type: function type(obj) {
					if (obj == null) {
						return obj + "";
					}

					// Support: Android <=2.3 only (functionish RegExp)
					return (typeof obj === 'undefined' ? 'undefined' : _typeof2(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				},

				// Evaluates a script in a global context
				globalEval: function globalEval(code) {
					DOMEval(code);
				},

				// Convert dashed to camelCase; used by the css and data modules
				// Support: IE <=9 - 11, Edge 12 - 13
				// Microsoft forgot to hump their vendor prefix (#9572)
				camelCase: function camelCase(string) {
					return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
				},

				each: function each(obj, callback) {
					var length,
					    i = 0;

					if (isArrayLike(obj)) {
						length = obj.length;
						for (; i < length; i++) {
							if (callback.call(obj[i], i, obj[i]) === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							if (callback.call(obj[i], i, obj[i]) === false) {
								break;
							}
						}
					}

					return obj;
				},

				// Support: Android <=4.0 only
				trim: function trim(text) {
					return text == null ? "" : (text + "").replace(rtrim, "");
				},

				// results is for internal usage only
				makeArray: function makeArray(arr, results) {
					var ret = results || [];

					if (arr != null) {
						if (isArrayLike(Object(arr))) {
							jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
						} else {
							push.call(ret, arr);
						}
					}

					return ret;
				},

				inArray: function inArray(elem, arr, i) {
					return arr == null ? -1 : indexOf.call(arr, elem, i);
				},

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				merge: function merge(first, second) {
					var len = +second.length,
					    j = 0,
					    i = first.length;

					for (; j < len; j++) {
						first[i++] = second[j];
					}

					first.length = i;

					return first;
				},

				grep: function grep(elems, callback, invert) {
					var callbackInverse,
					    matches = [],
					    i = 0,
					    length = elems.length,
					    callbackExpect = !invert;

					// Go through the array, only saving the items
					// that pass the validator function
					for (; i < length; i++) {
						callbackInverse = !callback(elems[i], i);
						if (callbackInverse !== callbackExpect) {
							matches.push(elems[i]);
						}
					}

					return matches;
				},

				// arg is for internal usage only
				map: function map(elems, callback, arg) {
					var length,
					    value,
					    i = 0,
					    ret = [];

					// Go through the array, translating each of the items to their new values
					if (isArrayLike(elems)) {
						length = elems.length;
						for (; i < length; i++) {
							value = callback(elems[i], i, arg);

							if (value != null) {
								ret.push(value);
							}
						}

						// Go through every key on the object,
					} else {
						for (i in elems) {
							value = callback(elems[i], i, arg);

							if (value != null) {
								ret.push(value);
							}
						}
					}

					// Flatten any nested arrays
					return concat.apply([], ret);
				},

				// A global GUID counter for objects
				guid: 1,

				// Bind a function to a context, optionally partially applying any
				// arguments.
				proxy: function proxy(fn, context) {
					var tmp, args, proxy;

					if (typeof context === "string") {
						tmp = fn[context];
						context = fn;
						fn = tmp;
					}

					// Quick check to determine if target is callable, in the spec
					// this throws a TypeError, but we will just return undefined.
					if (!jQuery.isFunction(fn)) {
						return undefined;
					}

					// Simulated bind
					args = _slice.call(arguments, 2);
					proxy = function proxy() {
						return fn.apply(context || this, args.concat(_slice.call(arguments)));
					};

					// Set the guid of unique handler to the same of original handler, so it can be removed
					proxy.guid = fn.guid = fn.guid || jQuery.guid++;

					return proxy;
				},

				now: Date.now,

				// jQuery.support is not used in Core but other projects attach their
				// properties to it so it needs to exist.
				support: support
			});

			if (typeof Symbol === "function") {
				jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
			}

			// Populate the class2type map
			jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
				class2type["[object " + name + "]"] = name.toLowerCase();
			});

			function isArrayLike(obj) {

				// Support: real iOS 8.2 only (not reproducible in simulator)
				// `in` check used to prevent JIT error (gh-2145)
				// hasOwn isn't used here due to false negatives
				// regarding Nodelist length in IE
				var length = !!obj && "length" in obj && obj.length,
				    type = jQuery.type(obj);

				if (type === "function" || jQuery.isWindow(obj)) {
					return false;
				}

				return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
			}
			var Sizzle =
			/*!
    * Sizzle CSS Selector Engine v2.3.3
    * https://sizzlejs.com/
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license
    * http://jquery.org/license
    *
    * Date: 2016-08-08
    */
			function (window) {

				var i,
				    support,
				    Expr,
				    getText,
				    isXML,
				    tokenize,
				    compile,
				    select,
				    outermostContext,
				    sortInput,
				    hasDuplicate,


				// Local document vars
				setDocument,
				    document,
				    docElem,
				    documentIsHTML,
				    rbuggyQSA,
				    rbuggyMatches,
				    matches,
				    contains,


				// Instance-specific data
				expando = "sizzle" + 1 * new Date(),
				    preferredDoc = window.document,
				    dirruns = 0,
				    done = 0,
				    classCache = createCache(),
				    tokenCache = createCache(),
				    compilerCache = createCache(),
				    sortOrder = function sortOrder(a, b) {
					if (a === b) {
						hasDuplicate = true;
					}
					return 0;
				},


				// Instance methods
				hasOwn = {}.hasOwnProperty,
				    arr = [],
				    pop = arr.pop,
				    push_native = arr.push,
				    push = arr.push,
				    slice = arr.slice,

				// Use a stripped-down indexOf as it's faster than native
				// https://jsperf.com/thor-indexof-vs-for/5
				indexOf = function indexOf(list, elem) {
					var i = 0,
					    len = list.length;
					for (; i < len; i++) {
						if (list[i] === elem) {
							return i;
						}
					}
					return -1;
				},
				    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


				// Regular expressions

				// http://www.w3.org/TR/css3-selectors/#whitespace
				whitespace = "[\\x20\\t\\r\\n\\f]",


				// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
				identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",


				// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
				attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
				// Operator (capture 2)
				"*([*^$|!~]?=)" + whitespace +
				// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
				"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
				    pseudos = ":(" + identifier + ")(?:\\((" +
				// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
				// 1. quoted (capture 3; capture 4 or capture 5)
				"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
				// 2. simple (capture 6)
				"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
				// 3. anything else (capture 2)
				".*" + ")\\)|)",


				// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
				rwhitespace = new RegExp(whitespace + "+", "g"),
				    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
				    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
				    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
				    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
				    rpseudo = new RegExp(pseudos),
				    ridentifier = new RegExp("^" + identifier + "$"),
				    matchExpr = {
					"ID": new RegExp("^#(" + identifier + ")"),
					"CLASS": new RegExp("^\\.(" + identifier + ")"),
					"TAG": new RegExp("^(" + identifier + "|[*])"),
					"ATTR": new RegExp("^" + attributes),
					"PSEUDO": new RegExp("^" + pseudos),
					"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
					"bool": new RegExp("^(?:" + booleans + ")$", "i"),
					// For use in libraries implementing .is()
					// We use this for POS matching in `select`
					"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
				},
				    rinputs = /^(?:input|select|textarea|button)$/i,
				    rheader = /^h\d$/i,
				    rnative = /^[^{]+\{\s*\[native \w/,


				// Easily-parseable/retrievable ID or TAG or CLASS selectors
				rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				    rsibling = /[+~]/,


				// CSS escapes
				// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
				runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
				    funescape = function funescape(_, escaped, escapedWhitespace) {
					var high = "0x" + escaped - 0x10000;
					// NaN means non-codepoint
					// Support: Firefox<24
					// Workaround erroneous numeric interpretation of +"0x"
					return high !== high || escapedWhitespace ? escaped : high < 0 ?
					// BMP codepoint
					String.fromCharCode(high + 0x10000) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
				},


				// CSS string/identifier serialization
				// https://drafts.csswg.org/cssom/#common-serializing-idioms
				rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
				    fcssescape = function fcssescape(ch, asCodePoint) {
					if (asCodePoint) {

						// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
						if (ch === "\0") {
							return '\uFFFD';
						}

						// Control characters and (dependent upon position) numbers get escaped as code points
						return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
					}

					// Other potentially-special ASCII characters get backslash-escaped
					return "\\" + ch;
				},


				// Used for iframes
				// See setDocument()
				// Removing the function wrapper causes a "Permission Denied"
				// error in IE
				unloadHandler = function unloadHandler() {
					setDocument();
				},
				    disabledAncestor = addCombinator(function (elem) {
					return elem.disabled === true && ("form" in elem || "label" in elem);
				}, { dir: "parentNode", next: "legend" });

				// Optimize for push.apply( _, NodeList )
				try {
					push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
					// Support: Android<4.0
					// Detect silently failing push.apply
					arr[preferredDoc.childNodes.length].nodeType;
				} catch (e) {
					push = { apply: arr.length ?

						// Leverage slice if possible
						function (target, els) {
							push_native.apply(target, slice.call(els));
						} :

						// Support: IE<9
						// Otherwise append directly
						function (target, els) {
							var j = target.length,
							    i = 0;
							// Can't trust NodeList.length
							while (target[j++] = els[i++]) {}
							target.length = j - 1;
						}
					};
				}

				function Sizzle(selector, context, results, seed) {
					var m,
					    i,
					    elem,
					    nid,
					    match,
					    groups,
					    newSelector,
					    newContext = context && context.ownerDocument,


					// nodeType defaults to 9, since context defaults to document
					nodeType = context ? context.nodeType : 9;

					results = results || [];

					// Return early from calls with invalid selector or context
					if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

						return results;
					}

					// Try to shortcut find operations (as opposed to filters) in HTML documents
					if (!seed) {

						if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
							setDocument(context);
						}
						context = context || document;

						if (documentIsHTML) {

							// If the selector is sufficiently simple, try using a "get*By*" DOM method
							// (excepting DocumentFragment context, where the methods don't exist)
							if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

								// ID selector
								if (m = match[1]) {

									// Document context
									if (nodeType === 9) {
										if (elem = context.getElementById(m)) {

											// Support: IE, Opera, Webkit
											// TODO: identify versions
											// getElementById can match elements by name instead of ID
											if (elem.id === m) {
												results.push(elem);
												return results;
											}
										} else {
											return results;
										}

										// Element context
									} else {

										// Support: IE, Opera, Webkit
										// TODO: identify versions
										// getElementById can match elements by name instead of ID
										if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

											results.push(elem);
											return results;
										}
									}

									// Type selector
								} else if (match[2]) {
									push.apply(results, context.getElementsByTagName(selector));
									return results;

									// Class selector
								} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {

									push.apply(results, context.getElementsByClassName(m));
									return results;
								}
							}

							// Take advantage of querySelectorAll
							if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {

								if (nodeType !== 1) {
									newContext = context;
									newSelector = selector;

									// qSA looks outside Element context, which is not what we want
									// Thanks to Andrew Dupont for this workaround technique
									// Support: IE <=8
									// Exclude object elements
								} else if (context.nodeName.toLowerCase() !== "object") {

									// Capture the context ID, setting it first if necessary
									if (nid = context.getAttribute("id")) {
										nid = nid.replace(rcssescape, fcssescape);
									} else {
										context.setAttribute("id", nid = expando);
									}

									// Prefix every selector in the list
									groups = tokenize(selector);
									i = groups.length;
									while (i--) {
										groups[i] = "#" + nid + " " + toSelector(groups[i]);
									}
									newSelector = groups.join(",");

									// Expand context for sibling selectors
									newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
								}

								if (newSelector) {
									try {
										push.apply(results, newContext.querySelectorAll(newSelector));
										return results;
									} catch (qsaError) {} finally {
										if (nid === expando) {
											context.removeAttribute("id");
										}
									}
								}
							}
						}
					}

					// All others
					return select(selector.replace(rtrim, "$1"), context, results, seed);
				}

				/**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */
				function createCache() {
					var keys = [];

					function cache(key, value) {
						// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
						if (keys.push(key + " ") > Expr.cacheLength) {
							// Only keep the most recent entries
							delete cache[keys.shift()];
						}
						return cache[key + " "] = value;
					}
					return cache;
				}

				/**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */
				function markFunction(fn) {
					fn[expando] = true;
					return fn;
				}

				/**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */
				function assert(fn) {
					var el = document.createElement("fieldset");

					try {
						return !!fn(el);
					} catch (e) {
						return false;
					} finally {
						// Remove from its parent by default
						if (el.parentNode) {
							el.parentNode.removeChild(el);
						}
						// release memory in IE
						el = null;
					}
				}

				/**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */
				function addHandle(attrs, handler) {
					var arr = attrs.split("|"),
					    i = arr.length;

					while (i--) {
						Expr.attrHandle[arr[i]] = handler;
					}
				}

				/**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */
				function siblingCheck(a, b) {
					var cur = b && a,
					    diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;

					// Use IE sourceIndex if available on both nodes
					if (diff) {
						return diff;
					}

					// Check if b follows a
					if (cur) {
						while (cur = cur.nextSibling) {
							if (cur === b) {
								return -1;
							}
						}
					}

					return a ? 1 : -1;
				}

				/**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */
				function createInputPseudo(type) {
					return function (elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === type;
					};
				}

				/**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */
				function createButtonPseudo(type) {
					return function (elem) {
						var name = elem.nodeName.toLowerCase();
						return (name === "input" || name === "button") && elem.type === type;
					};
				}

				/**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */
				function createDisabledPseudo(disabled) {

					// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
					return function (elem) {

						// Only certain elements can match :enabled or :disabled
						// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
						// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
						if ("form" in elem) {

							// Check for inherited disabledness on relevant non-disabled elements:
							// * listed form-associated elements in a disabled fieldset
							//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
							//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
							// * option elements in a disabled optgroup
							//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
							// All such elements have a "form" property.
							if (elem.parentNode && elem.disabled === false) {

								// Option elements defer to a parent optgroup if present
								if ("label" in elem) {
									if ("label" in elem.parentNode) {
										return elem.parentNode.disabled === disabled;
									} else {
										return elem.disabled === disabled;
									}
								}

								// Support: IE 6 - 11
								// Use the isDisabled shortcut property to check for disabled fieldset ancestors
								return elem.isDisabled === disabled ||

								// Where there is no isDisabled, check manually
								/* jshint -W018 */
								elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
							}

							return elem.disabled === disabled;

							// Try to winnow out elements that can't be disabled before trusting the disabled property.
							// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
							// even exist on them, let alone have a boolean value.
						} else if ("label" in elem) {
							return elem.disabled === disabled;
						}

						// Remaining elements are neither :enabled nor :disabled
						return false;
					};
				}

				/**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */
				function createPositionalPseudo(fn) {
					return markFunction(function (argument) {
						argument = +argument;
						return markFunction(function (seed, matches) {
							var j,
							    matchIndexes = fn([], seed.length, argument),
							    i = matchIndexes.length;

							// Match elements found at the specified indexes
							while (i--) {
								if (seed[j = matchIndexes[i]]) {
									seed[j] = !(matches[j] = seed[j]);
								}
							}
						});
					});
				}

				/**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */
				function testContext(context) {
					return context && typeof context.getElementsByTagName !== "undefined" && context;
				}

				// Expose support vars for convenience
				support = Sizzle.support = {};

				/**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */
				isXML = Sizzle.isXML = function (elem) {
					// documentElement is verified for cases where it doesn't yet exist
					// (such as loading iframes in IE - #4833)
					var documentElement = elem && (elem.ownerDocument || elem).documentElement;
					return documentElement ? documentElement.nodeName !== "HTML" : false;
				};

				/**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */
				setDocument = Sizzle.setDocument = function (node) {
					var hasCompare,
					    subWindow,
					    doc = node ? node.ownerDocument || node : preferredDoc;

					// Return early if doc is invalid or already selected
					if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
						return document;
					}

					// Update global variables
					document = doc;
					docElem = document.documentElement;
					documentIsHTML = !isXML(document);

					// Support: IE 9-11, Edge
					// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
					if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {

						// Support: IE 11, Edge
						if (subWindow.addEventListener) {
							subWindow.addEventListener("unload", unloadHandler, false);

							// Support: IE 9 - 10 only
						} else if (subWindow.attachEvent) {
							subWindow.attachEvent("onunload", unloadHandler);
						}
					}

					/* Attributes
     ---------------------------------------------------------------------- */

					// Support: IE<8
					// Verify that getAttribute really returns attributes and not properties
					// (excepting IE8 booleans)
					support.attributes = assert(function (el) {
						el.className = "i";
						return !el.getAttribute("className");
					});

					/* getElement(s)By*
     ---------------------------------------------------------------------- */

					// Check if getElementsByTagName("*") returns only elements
					support.getElementsByTagName = assert(function (el) {
						el.appendChild(document.createComment(""));
						return !el.getElementsByTagName("*").length;
					});

					// Support: IE<9
					support.getElementsByClassName = rnative.test(document.getElementsByClassName);

					// Support: IE<10
					// Check if getElementById returns elements by name
					// The broken getElementById methods don't pick up programmatically-set names,
					// so use a roundabout getElementsByName test
					support.getById = assert(function (el) {
						docElem.appendChild(el).id = expando;
						return !document.getElementsByName || !document.getElementsByName(expando).length;
					});

					// ID filter and find
					if (support.getById) {
						Expr.filter["ID"] = function (id) {
							var attrId = id.replace(runescape, funescape);
							return function (elem) {
								return elem.getAttribute("id") === attrId;
							};
						};
						Expr.find["ID"] = function (id, context) {
							if (typeof context.getElementById !== "undefined" && documentIsHTML) {
								var elem = context.getElementById(id);
								return elem ? [elem] : [];
							}
						};
					} else {
						Expr.filter["ID"] = function (id) {
							var attrId = id.replace(runescape, funescape);
							return function (elem) {
								var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
								return node && node.value === attrId;
							};
						};

						// Support: IE 6 - 7 only
						// getElementById is not reliable as a find shortcut
						Expr.find["ID"] = function (id, context) {
							if (typeof context.getElementById !== "undefined" && documentIsHTML) {
								var node,
								    i,
								    elems,
								    elem = context.getElementById(id);

								if (elem) {

									// Verify the id attribute
									node = elem.getAttributeNode("id");
									if (node && node.value === id) {
										return [elem];
									}

									// Fall back on getElementsByName
									elems = context.getElementsByName(id);
									i = 0;
									while (elem = elems[i++]) {
										node = elem.getAttributeNode("id");
										if (node && node.value === id) {
											return [elem];
										}
									}
								}

								return [];
							}
						};
					}

					// Tag
					Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
						if (typeof context.getElementsByTagName !== "undefined") {
							return context.getElementsByTagName(tag);

							// DocumentFragment nodes don't have gEBTN
						} else if (support.qsa) {
							return context.querySelectorAll(tag);
						}
					} : function (tag, context) {
						var elem,
						    tmp = [],
						    i = 0,

						// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
						results = context.getElementsByTagName(tag);

						// Filter out possible comments
						if (tag === "*") {
							while (elem = results[i++]) {
								if (elem.nodeType === 1) {
									tmp.push(elem);
								}
							}

							return tmp;
						}
						return results;
					};

					// Class
					Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
						if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
							return context.getElementsByClassName(className);
						}
					};

					/* QSA/matchesSelector
     ---------------------------------------------------------------------- */

					// QSA and matchesSelector support

					// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
					rbuggyMatches = [];

					// qSa(:focus) reports false when true (Chrome 21)
					// We allow this because of a bug in IE8/9 that throws an error
					// whenever `document.activeElement` is accessed on an iframe
					// So, we allow :focus to pass through QSA all the time to avoid the IE error
					// See https://bugs.jquery.com/ticket/13378
					rbuggyQSA = [];

					if (support.qsa = rnative.test(document.querySelectorAll)) {
						// Build QSA regex
						// Regex strategy adopted from Diego Perini
						assert(function (el) {
							// Select is set to empty string on purpose
							// This is to test IE's treatment of not explicitly
							// setting a boolean content attribute,
							// since its presence should be enough
							// https://bugs.jquery.com/ticket/12359
							docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

							// Support: IE8, Opera 11-12.16
							// Nothing should be selected when empty strings follow ^= or $= or *=
							// The test attribute must be unknown in Opera but "safe" for WinRT
							// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
							if (el.querySelectorAll("[msallowcapture^='']").length) {
								rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
							}

							// Support: IE8
							// Boolean attributes and "value" are not treated correctly
							if (!el.querySelectorAll("[selected]").length) {
								rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
							}

							// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
							if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
								rbuggyQSA.push("~=");
							}

							// Webkit/Opera - :checked should return selected option elements
							// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
							// IE8 throws error here and will not see later tests
							if (!el.querySelectorAll(":checked").length) {
								rbuggyQSA.push(":checked");
							}

							// Support: Safari 8+, iOS 8+
							// https://bugs.webkit.org/show_bug.cgi?id=136851
							// In-page `selector#id sibling-combinator selector` fails
							if (!el.querySelectorAll("a#" + expando + "+*").length) {
								rbuggyQSA.push(".#.+[+~]");
							}
						});

						assert(function (el) {
							el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";

							// Support: Windows 8 Native Apps
							// The type and name attributes are restricted during .innerHTML assignment
							var input = document.createElement("input");
							input.setAttribute("type", "hidden");
							el.appendChild(input).setAttribute("name", "D");

							// Support: IE8
							// Enforce case-sensitivity of name attribute
							if (el.querySelectorAll("[name=d]").length) {
								rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
							}

							// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
							// IE8 throws error here and will not see later tests
							if (el.querySelectorAll(":enabled").length !== 2) {
								rbuggyQSA.push(":enabled", ":disabled");
							}

							// Support: IE9-11+
							// IE's :disabled selector does not pick up the children of disabled fieldsets
							docElem.appendChild(el).disabled = true;
							if (el.querySelectorAll(":disabled").length !== 2) {
								rbuggyQSA.push(":enabled", ":disabled");
							}

							// Opera 10-11 does not throw on post-comma invalid pseudos
							el.querySelectorAll("*,:x");
							rbuggyQSA.push(",.*:");
						});
					}

					if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

						assert(function (el) {
							// Check to see if it's possible to do matchesSelector
							// on a disconnected node (IE 9)
							support.disconnectedMatch = matches.call(el, "*");

							// This should fail with an exception
							// Gecko does not error, returns false instead
							matches.call(el, "[s!='']:x");
							rbuggyMatches.push("!=", pseudos);
						});
					}

					rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
					rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

					/* Contains
     ---------------------------------------------------------------------- */
					hasCompare = rnative.test(docElem.compareDocumentPosition);

					// Element contains another
					// Purposefully self-exclusive
					// As in, an element does not contain itself
					contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
						var adown = a.nodeType === 9 ? a.documentElement : a,
						    bup = b && b.parentNode;
						return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
					} : function (a, b) {
						if (b) {
							while (b = b.parentNode) {
								if (b === a) {
									return true;
								}
							}
						}
						return false;
					};

					/* Sorting
     ---------------------------------------------------------------------- */

					// Document order sorting
					sortOrder = hasCompare ? function (a, b) {

						// Flag for duplicate removal
						if (a === b) {
							hasDuplicate = true;
							return 0;
						}

						// Sort on method existence if only one input has compareDocumentPosition
						var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
						if (compare) {
							return compare;
						}

						// Calculate position if both inputs belong to the same document
						compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

						// Otherwise we know they are disconnected
						1;

						// Disconnected nodes
						if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

							// Choose the first element that is related to our preferred document
							if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
								return -1;
							}
							if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
								return 1;
							}

							// Maintain original order
							return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
						}

						return compare & 4 ? -1 : 1;
					} : function (a, b) {
						// Exit early if the nodes are identical
						if (a === b) {
							hasDuplicate = true;
							return 0;
						}

						var cur,
						    i = 0,
						    aup = a.parentNode,
						    bup = b.parentNode,
						    ap = [a],
						    bp = [b];

						// Parentless nodes are either documents or disconnected
						if (!aup || !bup) {
							return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

							// If the nodes are siblings, we can do a quick check
						} else if (aup === bup) {
							return siblingCheck(a, b);
						}

						// Otherwise we need full lists of their ancestors for comparison
						cur = a;
						while (cur = cur.parentNode) {
							ap.unshift(cur);
						}
						cur = b;
						while (cur = cur.parentNode) {
							bp.unshift(cur);
						}

						// Walk down the tree looking for a discrepancy
						while (ap[i] === bp[i]) {
							i++;
						}

						return i ?
						// Do a sibling check if the nodes have a common ancestor
						siblingCheck(ap[i], bp[i]) :

						// Otherwise nodes in our document sort first
						ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
					};

					return document;
				};

				Sizzle.matches = function (expr, elements) {
					return Sizzle(expr, null, null, elements);
				};

				Sizzle.matchesSelector = function (elem, expr) {
					// Set document vars if needed
					if ((elem.ownerDocument || elem) !== document) {
						setDocument(elem);
					}

					// Make sure that attribute selectors are quoted
					expr = expr.replace(rattributeQuotes, "='$1']");

					if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

						try {
							var ret = matches.call(elem, expr);

							// IE 9's matchesSelector returns false on disconnected nodes
							if (ret || support.disconnectedMatch ||
							// As well, disconnected nodes are said to be in a document
							// fragment in IE 9
							elem.document && elem.document.nodeType !== 11) {
								return ret;
							}
						} catch (e) {}
					}

					return Sizzle(expr, document, null, [elem]).length > 0;
				};

				Sizzle.contains = function (context, elem) {
					// Set document vars if needed
					if ((context.ownerDocument || context) !== document) {
						setDocument(context);
					}
					return contains(context, elem);
				};

				Sizzle.attr = function (elem, name) {
					// Set document vars if needed
					if ((elem.ownerDocument || elem) !== document) {
						setDocument(elem);
					}

					var fn = Expr.attrHandle[name.toLowerCase()],

					// Don't get fooled by Object.prototype properties (jQuery #13807)
					val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

					return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
				};

				Sizzle.escape = function (sel) {
					return (sel + "").replace(rcssescape, fcssescape);
				};

				Sizzle.error = function (msg) {
					throw new Error("Syntax error, unrecognized expression: " + msg);
				};

				/**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */
				Sizzle.uniqueSort = function (results) {
					var elem,
					    duplicates = [],
					    j = 0,
					    i = 0;

					// Unless we *know* we can detect duplicates, assume their presence
					hasDuplicate = !support.detectDuplicates;
					sortInput = !support.sortStable && results.slice(0);
					results.sort(sortOrder);

					if (hasDuplicate) {
						while (elem = results[i++]) {
							if (elem === results[i]) {
								j = duplicates.push(i);
							}
						}
						while (j--) {
							results.splice(duplicates[j], 1);
						}
					}

					// Clear input after sorting to release objects
					// See https://github.com/jquery/sizzle/pull/225
					sortInput = null;

					return results;
				};

				/**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */
				getText = Sizzle.getText = function (elem) {
					var node,
					    ret = "",
					    i = 0,
					    nodeType = elem.nodeType;

					if (!nodeType) {
						// If no nodeType, this is expected to be an array
						while (node = elem[i++]) {
							// Do not traverse comment nodes
							ret += getText(node);
						}
					} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
						// Use textContent for elements
						// innerText usage removed for consistency of new lines (jQuery #11153)
						if (typeof elem.textContent === "string") {
							return elem.textContent;
						} else {
							// Traverse its children
							for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
								ret += getText(elem);
							}
						}
					} else if (nodeType === 3 || nodeType === 4) {
						return elem.nodeValue;
					}
					// Do not include comment or processing instruction nodes

					return ret;
				};

				Expr = Sizzle.selectors = {

					// Can be adjusted by the user
					cacheLength: 50,

					createPseudo: markFunction,

					match: matchExpr,

					attrHandle: {},

					find: {},

					relative: {
						">": { dir: "parentNode", first: true },
						" ": { dir: "parentNode" },
						"+": { dir: "previousSibling", first: true },
						"~": { dir: "previousSibling" }
					},

					preFilter: {
						"ATTR": function ATTR(match) {
							match[1] = match[1].replace(runescape, funescape);

							// Move the given value to match[3] whether quoted or unquoted
							match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

							if (match[2] === "~=") {
								match[3] = " " + match[3] + " ";
							}

							return match.slice(0, 4);
						},

						"CHILD": function CHILD(match) {
							/* matches from matchExpr["CHILD"]
       	1 type (only|nth|...)
       	2 what (child|of-type)
       	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
       	4 xn-component of xn+y argument ([+-]?\d*n|)
       	5 sign of xn-component
       	6 x of xn-component
       	7 sign of y-component
       	8 y of y-component
       */
							match[1] = match[1].toLowerCase();

							if (match[1].slice(0, 3) === "nth") {
								// nth-* requires argument
								if (!match[3]) {
									Sizzle.error(match[0]);
								}

								// numeric x and y parameters for Expr.filter.CHILD
								// remember that false/true cast respectively to 0/1
								match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
								match[5] = +(match[7] + match[8] || match[3] === "odd");

								// other types prohibit arguments
							} else if (match[3]) {
								Sizzle.error(match[0]);
							}

							return match;
						},

						"PSEUDO": function PSEUDO(match) {
							var excess,
							    unquoted = !match[6] && match[2];

							if (matchExpr["CHILD"].test(match[0])) {
								return null;
							}

							// Accept quoted arguments as-is
							if (match[3]) {
								match[2] = match[4] || match[5] || "";

								// Strip excess characters from unquoted arguments
							} else if (unquoted && rpseudo.test(unquoted) && (
							// Get excess from tokenize (recursively)
							excess = tokenize(unquoted, true)) && (
							// advance to the next closing parenthesis
							excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

								// excess is a negative index
								match[0] = match[0].slice(0, excess);
								match[2] = unquoted.slice(0, excess);
							}

							// Return only captures needed by the pseudo filter method (type and argument)
							return match.slice(0, 3);
						}
					},

					filter: {

						"TAG": function TAG(nodeNameSelector) {
							var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
							return nodeNameSelector === "*" ? function () {
								return true;
							} : function (elem) {
								return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
							};
						},

						"CLASS": function CLASS(className) {
							var pattern = classCache[className + " "];

							return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
								return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
							});
						},

						"ATTR": function ATTR(name, operator, check) {
							return function (elem) {
								var result = Sizzle.attr(elem, name);

								if (result == null) {
									return operator === "!=";
								}
								if (!operator) {
									return true;
								}

								result += "";

								return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
							};
						},

						"CHILD": function CHILD(type, what, argument, first, last) {
							var simple = type.slice(0, 3) !== "nth",
							    forward = type.slice(-4) !== "last",
							    ofType = what === "of-type";

							return first === 1 && last === 0 ?

							// Shortcut for :nth-*(n)
							function (elem) {
								return !!elem.parentNode;
							} : function (elem, context, xml) {
								var cache,
								    uniqueCache,
								    outerCache,
								    node,
								    nodeIndex,
								    start,
								    dir = simple !== forward ? "nextSibling" : "previousSibling",
								    parent = elem.parentNode,
								    name = ofType && elem.nodeName.toLowerCase(),
								    useCache = !xml && !ofType,
								    diff = false;

								if (parent) {

									// :(first|last|only)-(child|of-type)
									if (simple) {
										while (dir) {
											node = elem;
											while (node = node[dir]) {
												if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {

													return false;
												}
											}
											// Reverse direction for :only-* (if we haven't yet done so)
											start = dir = type === "only" && !start && "nextSibling";
										}
										return true;
									}

									start = [forward ? parent.firstChild : parent.lastChild];

									// non-xml :nth-child(...) stores cache data on `parent`
									if (forward && useCache) {

										// Seek `elem` from a previously-cached index

										// ...in a gzip-friendly way
										node = parent;
										outerCache = node[expando] || (node[expando] = {});

										// Support: IE <9 only
										// Defend against cloned attroperties (jQuery gh-1709)
										uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

										cache = uniqueCache[type] || [];
										nodeIndex = cache[0] === dirruns && cache[1];
										diff = nodeIndex && cache[2];
										node = nodeIndex && parent.childNodes[nodeIndex];

										while (node = ++nodeIndex && node && node[dir] || (

										// Fallback to seeking `elem` from the start
										diff = nodeIndex = 0) || start.pop()) {

											// When found, cache indexes on `parent` and break
											if (node.nodeType === 1 && ++diff && node === elem) {
												uniqueCache[type] = [dirruns, nodeIndex, diff];
												break;
											}
										}
									} else {
										// Use previously-cached element index if available
										if (useCache) {
											// ...in a gzip-friendly way
											node = elem;
											outerCache = node[expando] || (node[expando] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

											cache = uniqueCache[type] || [];
											nodeIndex = cache[0] === dirruns && cache[1];
											diff = nodeIndex;
										}

										// xml :nth-child(...)
										// or :nth-last-child(...) or :nth(-last)?-of-type(...)
										if (diff === false) {
											// Use the same loop as above to seek `elem` from the start
											while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

												if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {

													// Cache the index of each encountered element
													if (useCache) {
														outerCache = node[expando] || (node[expando] = {});

														// Support: IE <9 only
														// Defend against cloned attroperties (jQuery gh-1709)
														uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

														uniqueCache[type] = [dirruns, diff];
													}

													if (node === elem) {
														break;
													}
												}
											}
										}
									}

									// Incorporate the offset, then check against cycle size
									diff -= last;
									return diff === first || diff % first === 0 && diff / first >= 0;
								}
							};
						},

						"PSEUDO": function PSEUDO(pseudo, argument) {
							// pseudo-class names are case-insensitive
							// http://www.w3.org/TR/selectors/#pseudo-classes
							// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
							// Remember that setFilters inherits from pseudos
							var args,
							    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

							// The user may use createPseudo to indicate that
							// arguments are needed to create the filter function
							// just as Sizzle does
							if (fn[expando]) {
								return fn(argument);
							}

							// But maintain support for old signatures
							if (fn.length > 1) {
								args = [pseudo, pseudo, "", argument];
								return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
									var idx,
									    matched = fn(seed, argument),
									    i = matched.length;
									while (i--) {
										idx = indexOf(seed, matched[i]);
										seed[idx] = !(matches[idx] = matched[i]);
									}
								}) : function (elem) {
									return fn(elem, 0, args);
								};
							}

							return fn;
						}
					},

					pseudos: {
						// Potentially complex pseudos
						"not": markFunction(function (selector) {
							// Trim the selector passed to compile
							// to avoid treating leading and trailing
							// spaces as combinators
							var input = [],
							    results = [],
							    matcher = compile(selector.replace(rtrim, "$1"));

							return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
								var elem,
								    unmatched = matcher(seed, null, xml, []),
								    i = seed.length;

								// Match elements unmatched by `matcher`
								while (i--) {
									if (elem = unmatched[i]) {
										seed[i] = !(matches[i] = elem);
									}
								}
							}) : function (elem, context, xml) {
								input[0] = elem;
								matcher(input, null, xml, results);
								// Don't keep the element (issue #299)
								input[0] = null;
								return !results.pop();
							};
						}),

						"has": markFunction(function (selector) {
							return function (elem) {
								return Sizzle(selector, elem).length > 0;
							};
						}),

						"contains": markFunction(function (text) {
							text = text.replace(runescape, funescape);
							return function (elem) {
								return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
							};
						}),

						// "Whether an element is represented by a :lang() selector
						// is based solely on the element's language value
						// being equal to the identifier C,
						// or beginning with the identifier C immediately followed by "-".
						// The matching of C against the element's language value is performed case-insensitively.
						// The identifier C does not have to be a valid language name."
						// http://www.w3.org/TR/selectors/#lang-pseudo
						"lang": markFunction(function (lang) {
							// lang value must be a valid identifier
							if (!ridentifier.test(lang || "")) {
								Sizzle.error("unsupported lang: " + lang);
							}
							lang = lang.replace(runescape, funescape).toLowerCase();
							return function (elem) {
								var elemLang;
								do {
									if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

										elemLang = elemLang.toLowerCase();
										return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
									}
								} while ((elem = elem.parentNode) && elem.nodeType === 1);
								return false;
							};
						}),

						// Miscellaneous
						"target": function target(elem) {
							var hash = window.location && window.location.hash;
							return hash && hash.slice(1) === elem.id;
						},

						"root": function root(elem) {
							return elem === docElem;
						},

						"focus": function focus(elem) {
							return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
						},

						// Boolean properties
						"enabled": createDisabledPseudo(false),
						"disabled": createDisabledPseudo(true),

						"checked": function checked(elem) {
							// In CSS3, :checked should return both checked and selected elements
							// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
							var nodeName = elem.nodeName.toLowerCase();
							return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
						},

						"selected": function selected(elem) {
							// Accessing this property makes selected-by-default
							// options in Safari work properly
							if (elem.parentNode) {
								elem.parentNode.selectedIndex;
							}

							return elem.selected === true;
						},

						// Contents
						"empty": function empty(elem) {
							// http://www.w3.org/TR/selectors/#empty-pseudo
							// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
							//   but not by others (comment: 8; processing instruction: 7; etc.)
							// nodeType < 6 works because attributes (2) do not appear as children
							for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
								if (elem.nodeType < 6) {
									return false;
								}
							}
							return true;
						},

						"parent": function parent(elem) {
							return !Expr.pseudos["empty"](elem);
						},

						// Element/input types
						"header": function header(elem) {
							return rheader.test(elem.nodeName);
						},

						"input": function input(elem) {
							return rinputs.test(elem.nodeName);
						},

						"button": function button(elem) {
							var name = elem.nodeName.toLowerCase();
							return name === "input" && elem.type === "button" || name === "button";
						},

						"text": function text(elem) {
							var attr;
							return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

							// Support: IE<8
							// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
							(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
						},

						// Position-in-collection
						"first": createPositionalPseudo(function () {
							return [0];
						}),

						"last": createPositionalPseudo(function (matchIndexes, length) {
							return [length - 1];
						}),

						"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
							return [argument < 0 ? argument + length : argument];
						}),

						"even": createPositionalPseudo(function (matchIndexes, length) {
							var i = 0;
							for (; i < length; i += 2) {
								matchIndexes.push(i);
							}
							return matchIndexes;
						}),

						"odd": createPositionalPseudo(function (matchIndexes, length) {
							var i = 1;
							for (; i < length; i += 2) {
								matchIndexes.push(i);
							}
							return matchIndexes;
						}),

						"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
							var i = argument < 0 ? argument + length : argument;
							for (; --i >= 0;) {
								matchIndexes.push(i);
							}
							return matchIndexes;
						}),

						"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
							var i = argument < 0 ? argument + length : argument;
							for (; ++i < length;) {
								matchIndexes.push(i);
							}
							return matchIndexes;
						})
					}
				};

				Expr.pseudos["nth"] = Expr.pseudos["eq"];

				// Add button/input type pseudos
				for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
					Expr.pseudos[i] = createInputPseudo(i);
				}
				for (i in { submit: true, reset: true }) {
					Expr.pseudos[i] = createButtonPseudo(i);
				}

				// Easy API for creating new setFilters
				function setFilters() {}
				setFilters.prototype = Expr.filters = Expr.pseudos;
				Expr.setFilters = new setFilters();

				tokenize = Sizzle.tokenize = function (selector, parseOnly) {
					var matched,
					    match,
					    tokens,
					    type,
					    soFar,
					    groups,
					    preFilters,
					    cached = tokenCache[selector + " "];

					if (cached) {
						return parseOnly ? 0 : cached.slice(0);
					}

					soFar = selector;
					groups = [];
					preFilters = Expr.preFilter;

					while (soFar) {

						// Comma and first run
						if (!matched || (match = rcomma.exec(soFar))) {
							if (match) {
								// Don't consume trailing commas as valid
								soFar = soFar.slice(match[0].length) || soFar;
							}
							groups.push(tokens = []);
						}

						matched = false;

						// Combinators
						if (match = rcombinators.exec(soFar)) {
							matched = match.shift();
							tokens.push({
								value: matched,
								// Cast descendant combinators to space
								type: match[0].replace(rtrim, " ")
							});
							soFar = soFar.slice(matched.length);
						}

						// Filters
						for (type in Expr.filter) {
							if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
								matched = match.shift();
								tokens.push({
									value: matched,
									type: type,
									matches: match
								});
								soFar = soFar.slice(matched.length);
							}
						}

						if (!matched) {
							break;
						}
					}

					// Return the length of the invalid excess
					// if we're just parsing
					// Otherwise, throw an error or return tokens
					return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
					// Cache the tokens
					tokenCache(selector, groups).slice(0);
				};

				function toSelector(tokens) {
					var i = 0,
					    len = tokens.length,
					    selector = "";
					for (; i < len; i++) {
						selector += tokens[i].value;
					}
					return selector;
				}

				function addCombinator(matcher, combinator, base) {
					var dir = combinator.dir,
					    skip = combinator.next,
					    key = skip || dir,
					    checkNonElements = base && key === "parentNode",
					    doneName = done++;

					return combinator.first ?
					// Check against closest ancestor/preceding element
					function (elem, context, xml) {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								return matcher(elem, context, xml);
							}
						}
						return false;
					} :

					// Check against all ancestor/preceding elements
					function (elem, context, xml) {
						var oldCache,
						    uniqueCache,
						    outerCache,
						    newCache = [dirruns, doneName];

						// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
						if (xml) {
							while (elem = elem[dir]) {
								if (elem.nodeType === 1 || checkNonElements) {
									if (matcher(elem, context, xml)) {
										return true;
									}
								}
							}
						} else {
							while (elem = elem[dir]) {
								if (elem.nodeType === 1 || checkNonElements) {
									outerCache = elem[expando] || (elem[expando] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

									if (skip && skip === elem.nodeName.toLowerCase()) {
										elem = elem[dir] || elem;
									} else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

										// Assign to newCache so results back-propagate to previous elements
										return newCache[2] = oldCache[2];
									} else {
										// Reuse newcache so results back-propagate to previous elements
										uniqueCache[key] = newCache;

										// A match means we're done; a fail means we have to keep checking
										if (newCache[2] = matcher(elem, context, xml)) {
											return true;
										}
									}
								}
							}
						}
						return false;
					};
				}

				function elementMatcher(matchers) {
					return matchers.length > 1 ? function (elem, context, xml) {
						var i = matchers.length;
						while (i--) {
							if (!matchers[i](elem, context, xml)) {
								return false;
							}
						}
						return true;
					} : matchers[0];
				}

				function multipleContexts(selector, contexts, results) {
					var i = 0,
					    len = contexts.length;
					for (; i < len; i++) {
						Sizzle(selector, contexts[i], results);
					}
					return results;
				}

				function condense(unmatched, map, filter, context, xml) {
					var elem,
					    newUnmatched = [],
					    i = 0,
					    len = unmatched.length,
					    mapped = map != null;

					for (; i < len; i++) {
						if (elem = unmatched[i]) {
							if (!filter || filter(elem, context, xml)) {
								newUnmatched.push(elem);
								if (mapped) {
									map.push(i);
								}
							}
						}
					}

					return newUnmatched;
				}

				function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
					if (postFilter && !postFilter[expando]) {
						postFilter = setMatcher(postFilter);
					}
					if (postFinder && !postFinder[expando]) {
						postFinder = setMatcher(postFinder, postSelector);
					}
					return markFunction(function (seed, results, context, xml) {
						var temp,
						    i,
						    elem,
						    preMap = [],
						    postMap = [],
						    preexisting = results.length,


						// Get initial elements from seed or context
						elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


						// Prefilter to get matcher input, preserving a map for seed-results synchronization
						matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
						    matcherOut = matcher ?
						// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
						postFinder || (seed ? preFilter : preexisting || postFilter) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results : matcherIn;

						// Find primary matches
						if (matcher) {
							matcher(matcherIn, matcherOut, context, xml);
						}

						// Apply postFilter
						if (postFilter) {
							temp = condense(matcherOut, postMap);
							postFilter(temp, [], context, xml);

							// Un-match failing elements by moving them back to matcherIn
							i = temp.length;
							while (i--) {
								if (elem = temp[i]) {
									matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
								}
							}
						}

						if (seed) {
							if (postFinder || preFilter) {
								if (postFinder) {
									// Get the final matcherOut by condensing this intermediate into postFinder contexts
									temp = [];
									i = matcherOut.length;
									while (i--) {
										if (elem = matcherOut[i]) {
											// Restore matcherIn since elem is not yet a final match
											temp.push(matcherIn[i] = elem);
										}
									}
									postFinder(null, matcherOut = [], temp, xml);
								}

								// Move matched elements from seed to results to keep them synchronized
								i = matcherOut.length;
								while (i--) {
									if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

										seed[temp] = !(results[temp] = elem);
									}
								}
							}

							// Add elements to results, through postFinder if defined
						} else {
							matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
							if (postFinder) {
								postFinder(null, results, matcherOut, xml);
							} else {
								push.apply(results, matcherOut);
							}
						}
					});
				}

				function matcherFromTokens(tokens) {
					var checkContext,
					    matcher,
					    j,
					    len = tokens.length,
					    leadingRelative = Expr.relative[tokens[0].type],
					    implicitRelative = leadingRelative || Expr.relative[" "],
					    i = leadingRelative ? 1 : 0,


					// The foundational matcher ensures that elements are reachable from top-level context(s)
					matchContext = addCombinator(function (elem) {
						return elem === checkContext;
					}, implicitRelative, true),
					    matchAnyContext = addCombinator(function (elem) {
						return indexOf(checkContext, elem) > -1;
					}, implicitRelative, true),
					    matchers = [function (elem, context, xml) {
						var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
						// Avoid hanging onto element (issue #299)
						checkContext = null;
						return ret;
					}];

					for (; i < len; i++) {
						if (matcher = Expr.relative[tokens[i].type]) {
							matchers = [addCombinator(elementMatcher(matchers), matcher)];
						} else {
							matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

							// Return special upon seeing a positional matcher
							if (matcher[expando]) {
								// Find the next relative operator (if any) for proper handling
								j = ++i;
								for (; j < len; j++) {
									if (Expr.relative[tokens[j].type]) {
										break;
									}
								}
								return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
								// If the preceding token was a descendant combinator, insert an implicit any-element `*`
								tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
							}
							matchers.push(matcher);
						}
					}

					return elementMatcher(matchers);
				}

				function matcherFromGroupMatchers(elementMatchers, setMatchers) {
					var bySet = setMatchers.length > 0,
					    byElement = elementMatchers.length > 0,
					    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
						var elem,
						    j,
						    matcher,
						    matchedCount = 0,
						    i = "0",
						    unmatched = seed && [],
						    setMatched = [],
						    contextBackup = outermostContext,

						// We must always have either seed elements or outermost context
						elems = seed || byElement && Expr.find["TAG"]("*", outermost),

						// Use integer dirruns iff this is the outermost matcher
						dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
						    len = elems.length;

						if (outermost) {
							outermostContext = context === document || context || outermost;
						}

						// Add elements passing elementMatchers directly to results
						// Support: IE<9, Safari
						// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
						for (; i !== len && (elem = elems[i]) != null; i++) {
							if (byElement && elem) {
								j = 0;
								if (!context && elem.ownerDocument !== document) {
									setDocument(elem);
									xml = !documentIsHTML;
								}
								while (matcher = elementMatchers[j++]) {
									if (matcher(elem, context || document, xml)) {
										results.push(elem);
										break;
									}
								}
								if (outermost) {
									dirruns = dirrunsUnique;
								}
							}

							// Track unmatched elements for set filters
							if (bySet) {
								// They will have gone through all possible matchers
								if (elem = !matcher && elem) {
									matchedCount--;
								}

								// Lengthen the array for every element, matched or not
								if (seed) {
									unmatched.push(elem);
								}
							}
						}

						// `i` is now the count of elements visited above, and adding it to `matchedCount`
						// makes the latter nonnegative.
						matchedCount += i;

						// Apply set filters to unmatched elements
						// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
						// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
						// no element matchers and no seed.
						// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
						// case, which will result in a "00" `matchedCount` that differs from `i` but is also
						// numerically zero.
						if (bySet && i !== matchedCount) {
							j = 0;
							while (matcher = setMatchers[j++]) {
								matcher(unmatched, setMatched, context, xml);
							}

							if (seed) {
								// Reintegrate element matches to eliminate the need for sorting
								if (matchedCount > 0) {
									while (i--) {
										if (!(unmatched[i] || setMatched[i])) {
											setMatched[i] = pop.call(results);
										}
									}
								}

								// Discard index placeholder values to get only actual matches
								setMatched = condense(setMatched);
							}

							// Add matches to results
							push.apply(results, setMatched);

							// Seedless set matches succeeding multiple successful matchers stipulate sorting
							if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

								Sizzle.uniqueSort(results);
							}
						}

						// Override manipulation of globals by nested matchers
						if (outermost) {
							dirruns = dirrunsUnique;
							outermostContext = contextBackup;
						}

						return unmatched;
					};

					return bySet ? markFunction(superMatcher) : superMatcher;
				}

				compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
					var i,
					    setMatchers = [],
					    elementMatchers = [],
					    cached = compilerCache[selector + " "];

					if (!cached) {
						// Generate a function of recursive functions that can be used to check each element
						if (!match) {
							match = tokenize(selector);
						}
						i = match.length;
						while (i--) {
							cached = matcherFromTokens(match[i]);
							if (cached[expando]) {
								setMatchers.push(cached);
							} else {
								elementMatchers.push(cached);
							}
						}

						// Cache the compiled function
						cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

						// Save selector and tokenization
						cached.selector = selector;
					}
					return cached;
				};

				/**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */
				select = Sizzle.select = function (selector, context, results, seed) {
					var i,
					    tokens,
					    token,
					    type,
					    find,
					    compiled = typeof selector === "function" && selector,
					    match = !seed && tokenize(selector = compiled.selector || selector);

					results = results || [];

					// Try to minimize operations if there is only one selector in the list and no seed
					// (the latter of which guarantees us context)
					if (match.length === 1) {

						// Reduce context if the leading compound selector is an ID
						tokens = match[0] = match[0].slice(0);
						if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

							context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
							if (!context) {
								return results;

								// Precompiled matchers will still verify ancestry, so step up a level
							} else if (compiled) {
								context = context.parentNode;
							}

							selector = selector.slice(tokens.shift().value.length);
						}

						// Fetch a seed set for right-to-left matching
						i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
						while (i--) {
							token = tokens[i];

							// Abort if we hit a combinator
							if (Expr.relative[type = token.type]) {
								break;
							}
							if (find = Expr.find[type]) {
								// Search, expanding context for leading sibling combinators
								if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

									// If seed is empty or no tokens remain, we can return early
									tokens.splice(i, 1);
									selector = seed.length && toSelector(tokens);
									if (!selector) {
										push.apply(results, seed);
										return results;
									}

									break;
								}
							}
						}
					}

					// Compile and execute a filtering function if one is not provided
					// Provide `match` to avoid retokenization if we modified the selector above
					(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
					return results;
				};

				// One-time assignments

				// Sort stability
				support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

				// Support: Chrome 14-35+
				// Always assume duplicates if they aren't passed to the comparison function
				support.detectDuplicates = !!hasDuplicate;

				// Initialize against the default document
				setDocument();

				// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
				// Detached nodes confoundingly follow *each other*
				support.sortDetached = assert(function (el) {
					// Should return 1, but returns 4 (following)
					return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
				});

				// Support: IE<8
				// Prevent attribute/property "interpolation"
				// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
				if (!assert(function (el) {
					el.innerHTML = "<a href='#'></a>";
					return el.firstChild.getAttribute("href") === "#";
				})) {
					addHandle("type|href|height|width", function (elem, name, isXML) {
						if (!isXML) {
							return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
						}
					});
				}

				// Support: IE<9
				// Use defaultValue in place of getAttribute("value")
				if (!support.attributes || !assert(function (el) {
					el.innerHTML = "<input/>";
					el.firstChild.setAttribute("value", "");
					return el.firstChild.getAttribute("value") === "";
				})) {
					addHandle("value", function (elem, name, isXML) {
						if (!isXML && elem.nodeName.toLowerCase() === "input") {
							return elem.defaultValue;
						}
					});
				}

				// Support: IE<9
				// Use getAttributeNode to fetch booleans when getAttribute lies
				if (!assert(function (el) {
					return el.getAttribute("disabled") == null;
				})) {
					addHandle(booleans, function (elem, name, isXML) {
						var val;
						if (!isXML) {
							return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
						}
					});
				}

				return Sizzle;
			}(window);

			jQuery.find = Sizzle;
			jQuery.expr = Sizzle.selectors;

			// Deprecated
			jQuery.expr[":"] = jQuery.expr.pseudos;
			jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
			jQuery.text = Sizzle.getText;
			jQuery.isXMLDoc = Sizzle.isXML;
			jQuery.contains = Sizzle.contains;
			jQuery.escapeSelector = Sizzle.escape;

			var dir = function dir(elem, _dir, until) {
				var matched = [],
				    truncate = until !== undefined;

				while ((elem = elem[_dir]) && elem.nodeType !== 9) {
					if (elem.nodeType === 1) {
						if (truncate && jQuery(elem).is(until)) {
							break;
						}
						matched.push(elem);
					}
				}
				return matched;
			};

			var _siblings = function _siblings(n, elem) {
				var matched = [];

				for (; n; n = n.nextSibling) {
					if (n.nodeType === 1 && n !== elem) {
						matched.push(n);
					}
				}

				return matched;
			};

			var rneedsContext = jQuery.expr.match.needsContext;

			function nodeName(elem, name) {

				return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
			};
			var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

			var risSimple = /^.[^:#\[\.,]*$/;

			// Implement the identical functionality for filter and not
			function winnow(elements, qualifier, not) {
				if (jQuery.isFunction(qualifier)) {
					return jQuery.grep(elements, function (elem, i) {
						return !!qualifier.call(elem, i, elem) !== not;
					});
				}

				// Single element
				if (qualifier.nodeType) {
					return jQuery.grep(elements, function (elem) {
						return elem === qualifier !== not;
					});
				}

				// Arraylike of elements (jQuery, arguments, Array)
				if (typeof qualifier !== "string") {
					return jQuery.grep(elements, function (elem) {
						return indexOf.call(qualifier, elem) > -1 !== not;
					});
				}

				// Simple selector that can be filtered directly, removing non-Elements
				if (risSimple.test(qualifier)) {
					return jQuery.filter(qualifier, elements, not);
				}

				// Complex selector, compare the two sets, removing non-Elements
				qualifier = jQuery.filter(qualifier, elements);
				return jQuery.grep(elements, function (elem) {
					return indexOf.call(qualifier, elem) > -1 !== not && elem.nodeType === 1;
				});
			}

			jQuery.filter = function (expr, elems, not) {
				var elem = elems[0];

				if (not) {
					expr = ":not(" + expr + ")";
				}

				if (elems.length === 1 && elem.nodeType === 1) {
					return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
				}

				return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
					return elem.nodeType === 1;
				}));
			};

			jQuery.fn.extend({
				find: function find(selector) {
					var i,
					    ret,
					    len = this.length,
					    self = this;

					if (typeof selector !== "string") {
						return this.pushStack(jQuery(selector).filter(function () {
							for (i = 0; i < len; i++) {
								if (jQuery.contains(self[i], this)) {
									return true;
								}
							}
						}));
					}

					ret = this.pushStack([]);

					for (i = 0; i < len; i++) {
						jQuery.find(selector, self[i], ret);
					}

					return len > 1 ? jQuery.uniqueSort(ret) : ret;
				},
				filter: function filter(selector) {
					return this.pushStack(winnow(this, selector || [], false));
				},
				not: function not(selector) {
					return this.pushStack(winnow(this, selector || [], true));
				},
				is: function is(selector) {
					return !!winnow(this,

					// If this is a positional/relative selector, check membership in the returned set
					// so $("p:first").is("p:last") won't return true for a doc with two "p".
					typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
				}
			});

			// Initialize a jQuery object


			// A central reference to the root jQuery(document)
			var rootjQuery,


			// A simple way to check for HTML strings
			// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
			// Strict HTML recognition (#11290: must start with <)
			// Shortcut simple #id case for speed
			rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
			    init = jQuery.fn.init = function (selector, context, root) {
				var match, elem;

				// HANDLE: $(""), $(null), $(undefined), $(false)
				if (!selector) {
					return this;
				}

				// Method init() accepts an alternate rootjQuery
				// so migrate can support jQuery.sub (gh-2101)
				root = root || rootjQuery;

				// Handle HTML strings
				if (typeof selector === "string") {
					if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {

						// Assume that strings that start and end with <> are HTML and skip the regex check
						match = [null, selector, null];
					} else {
						match = rquickExpr.exec(selector);
					}

					// Match html or make sure no context is specified for #id
					if (match && (match[1] || !context)) {

						// HANDLE: $(html) -> $(array)
						if (match[1]) {
							context = context instanceof jQuery ? context[0] : context;

							// Option to run scripts is true for back-compat
							// Intentionally let the error be thrown if parseHTML is not present
							jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

							// HANDLE: $(html, props)
							if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
								for (match in context) {

									// Properties of context are called as methods if possible
									if (jQuery.isFunction(this[match])) {
										this[match](context[match]);

										// ...and otherwise set as attributes
									} else {
										this.attr(match, context[match]);
									}
								}
							}

							return this;

							// HANDLE: $(#id)
						} else {
							elem = document.getElementById(match[2]);

							if (elem) {

								// Inject the element directly into the jQuery object
								this[0] = elem;
								this.length = 1;
							}
							return this;
						}

						// HANDLE: $(expr, $(...))
					} else if (!context || context.jquery) {
						return (context || root).find(selector);

						// HANDLE: $(expr, context)
						// (which is just equivalent to: $(context).find(expr)
					} else {
						return this.constructor(context).find(selector);
					}

					// HANDLE: $(DOMElement)
				} else if (selector.nodeType) {
					this[0] = selector;
					this.length = 1;
					return this;

					// HANDLE: $(function)
					// Shortcut for document ready
				} else if (jQuery.isFunction(selector)) {
					return root.ready !== undefined ? root.ready(selector) :

					// Execute immediately if ready is not present
					selector(jQuery);
				}

				return jQuery.makeArray(selector, this);
			};

			// Give the init function the jQuery prototype for later instantiation
			init.prototype = jQuery.fn;

			// Initialize central reference
			rootjQuery = jQuery(document);

			var rparentsprev = /^(?:parents|prev(?:Until|All))/,


			// Methods guaranteed to produce a unique set when starting from a unique set
			guaranteedUnique = {
				children: true,
				contents: true,
				next: true,
				prev: true
			};

			jQuery.fn.extend({
				has: function has(target) {
					var targets = jQuery(target, this),
					    l = targets.length;

					return this.filter(function () {
						var i = 0;
						for (; i < l; i++) {
							if (jQuery.contains(this, targets[i])) {
								return true;
							}
						}
					});
				},

				closest: function closest(selectors, context) {
					var cur,
					    i = 0,
					    l = this.length,
					    matched = [],
					    targets = typeof selectors !== "string" && jQuery(selectors);

					// Positional selectors never match, since there's no _selection_ context
					if (!rneedsContext.test(selectors)) {
						for (; i < l; i++) {
							for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

								// Always skip document fragments
								if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 :

								// Don't pass non-elements to Sizzle
								cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

									matched.push(cur);
									break;
								}
							}
						}
					}

					return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
				},

				// Determine the position of an element within the set
				index: function index(elem) {

					// No argument, return index in parent
					if (!elem) {
						return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
					}

					// Index in selector
					if (typeof elem === "string") {
						return indexOf.call(jQuery(elem), this[0]);
					}

					// Locate the position of the desired element
					return indexOf.call(this,

					// If it receives a jQuery object, the first element is used
					elem.jquery ? elem[0] : elem);
				},

				add: function add(selector, context) {
					return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
				},

				addBack: function addBack(selector) {
					return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
				}
			});

			function sibling(cur, dir) {
				while ((cur = cur[dir]) && cur.nodeType !== 1) {}
				return cur;
			}

			jQuery.each({
				parent: function parent(elem) {
					var parent = elem.parentNode;
					return parent && parent.nodeType !== 11 ? parent : null;
				},
				parents: function parents(elem) {
					return dir(elem, "parentNode");
				},
				parentsUntil: function parentsUntil(elem, i, until) {
					return dir(elem, "parentNode", until);
				},
				next: function next(elem) {
					return sibling(elem, "nextSibling");
				},
				prev: function prev(elem) {
					return sibling(elem, "previousSibling");
				},
				nextAll: function nextAll(elem) {
					return dir(elem, "nextSibling");
				},
				prevAll: function prevAll(elem) {
					return dir(elem, "previousSibling");
				},
				nextUntil: function nextUntil(elem, i, until) {
					return dir(elem, "nextSibling", until);
				},
				prevUntil: function prevUntil(elem, i, until) {
					return dir(elem, "previousSibling", until);
				},
				siblings: function siblings(elem) {
					return _siblings((elem.parentNode || {}).firstChild, elem);
				},
				children: function children(elem) {
					return _siblings(elem.firstChild);
				},
				contents: function contents(elem) {
					if (nodeName(elem, "iframe")) {
						return elem.contentDocument;
					}

					// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
					// Treat the template element as a regular one in browsers that
					// don't support it.
					if (nodeName(elem, "template")) {
						elem = elem.content || elem;
					}

					return jQuery.merge([], elem.childNodes);
				}
			}, function (name, fn) {
				jQuery.fn[name] = function (until, selector) {
					var matched = jQuery.map(this, fn, until);

					if (name.slice(-5) !== "Until") {
						selector = until;
					}

					if (selector && typeof selector === "string") {
						matched = jQuery.filter(selector, matched);
					}

					if (this.length > 1) {

						// Remove duplicates
						if (!guaranteedUnique[name]) {
							jQuery.uniqueSort(matched);
						}

						// Reverse order for parents* and prev-derivatives
						if (rparentsprev.test(name)) {
							matched.reverse();
						}
					}

					return this.pushStack(matched);
				};
			});
			var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

			// Convert String-formatted options into Object-formatted ones
			function createOptions(options) {
				var object = {};
				jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
					object[flag] = true;
				});
				return object;
			}

			/*
    * Create a callback list using the following parameters:
    *
    *	options: an optional list of space-separated options that will change how
    *			the callback list behaves or a more traditional option object
    *
    * By default a callback list will act like an event callback list and can be
    * "fired" multiple times.
    *
    * Possible options:
    *
    *	once:			will ensure the callback list can only be fired once (like a Deferred)
    *
    *	memory:			will keep track of previous values and will call any callback added
    *					after the list has been fired right away with the latest "memorized"
    *					values (like a Deferred)
    *
    *	unique:			will ensure a callback can only be added once (no duplicate in the list)
    *
    *	stopOnFalse:	interrupt callings when a callback returns false
    *
    */
			jQuery.Callbacks = function (options) {

				// Convert options from String-formatted to Object-formatted if needed
				// (we check in cache first)
				options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

				var // Flag to know if list is currently firing
				firing,


				// Last fire value for non-forgettable lists
				memory,


				// Flag to know if list was already fired
				_fired,


				// Flag to prevent firing
				_locked,


				// Actual callback list
				list = [],


				// Queue of execution data for repeatable lists
				queue = [],


				// Index of currently firing callback (modified by add/remove as needed)
				firingIndex = -1,


				// Fire callbacks
				fire = function fire() {

					// Enforce single-firing
					_locked = _locked || options.once;

					// Execute callbacks for all pending executions,
					// respecting firingIndex overrides and runtime changes
					_fired = firing = true;
					for (; queue.length; firingIndex = -1) {
						memory = queue.shift();
						while (++firingIndex < list.length) {

							// Run callback and check for early termination
							if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {

								// Jump to end and forget the data so .add doesn't re-fire
								firingIndex = list.length;
								memory = false;
							}
						}
					}

					// Forget the data if we're done with it
					if (!options.memory) {
						memory = false;
					}

					firing = false;

					// Clean up if we're done firing for good
					if (_locked) {

						// Keep an empty list if we have data for future add calls
						if (memory) {
							list = [];

							// Otherwise, this object is spent
						} else {
							list = "";
						}
					}
				},


				// Actual Callbacks object
				self = {

					// Add a callback or a collection of callbacks to the list
					add: function add() {
						if (list) {

							// If we have memory from a past run, we should fire after adding
							if (memory && !firing) {
								firingIndex = list.length - 1;
								queue.push(memory);
							}

							(function add(args) {
								jQuery.each(args, function (_, arg) {
									if (jQuery.isFunction(arg)) {
										if (!options.unique || !self.has(arg)) {
											list.push(arg);
										}
									} else if (arg && arg.length && jQuery.type(arg) !== "string") {

										// Inspect recursively
										add(arg);
									}
								});
							})(arguments);

							if (memory && !firing) {
								fire();
							}
						}
						return this;
					},

					// Remove a callback from the list
					remove: function remove() {
						jQuery.each(arguments, function (_, arg) {
							var index;
							while ((index = jQuery.inArray(arg, list, index)) > -1) {
								list.splice(index, 1);

								// Handle firing indexes
								if (index <= firingIndex) {
									firingIndex--;
								}
							}
						});
						return this;
					},

					// Check if a given callback is in the list.
					// If no argument is given, return whether or not list has callbacks attached.
					has: function has(fn) {
						return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
					},

					// Remove all callbacks from the list
					empty: function empty() {
						if (list) {
							list = [];
						}
						return this;
					},

					// Disable .fire and .add
					// Abort any current/pending executions
					// Clear all callbacks and values
					disable: function disable() {
						_locked = queue = [];
						list = memory = "";
						return this;
					},
					disabled: function disabled() {
						return !list;
					},

					// Disable .fire
					// Also disable .add unless we have memory (since it would have no effect)
					// Abort any pending executions
					lock: function lock() {
						_locked = queue = [];
						if (!memory && !firing) {
							list = memory = "";
						}
						return this;
					},
					locked: function locked() {
						return !!_locked;
					},

					// Call all callbacks with the given context and arguments
					fireWith: function fireWith(context, args) {
						if (!_locked) {
							args = args || [];
							args = [context, args.slice ? args.slice() : args];
							queue.push(args);
							if (!firing) {
								fire();
							}
						}
						return this;
					},

					// Call all the callbacks with the given arguments
					fire: function fire() {
						self.fireWith(this, arguments);
						return this;
					},

					// To know if the callbacks have already been called at least once
					fired: function fired() {
						return !!_fired;
					}
				};

				return self;
			};

			function Identity(v) {
				return v;
			}
			function Thrower(ex) {
				throw ex;
			}

			function adoptValue(value, resolve, reject, noValue) {
				var method;

				try {

					// Check for promise aspect first to privilege synchronous behavior
					if (value && jQuery.isFunction(method = value.promise)) {
						method.call(value).done(resolve).fail(reject);

						// Other thenables
					} else if (value && jQuery.isFunction(method = value.then)) {
						method.call(value, resolve, reject);

						// Other non-thenables
					} else {

						// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
						// * false: [ value ].slice( 0 ) => resolve( value )
						// * true: [ value ].slice( 1 ) => resolve()
						resolve.apply(undefined, [value].slice(noValue));
					}

					// For Promises/A+, convert exceptions into rejections
					// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
					// Deferred#then to conditionally suppress rejection.
				} catch (value) {

					// Support: Android 4.0 only
					// Strict mode functions invoked without .call/.apply get global-object context
					reject.apply(undefined, [value]);
				}
			}

			jQuery.extend({

				Deferred: function Deferred(func) {
					var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
					    _state = "pending",
					    _promise = {
						state: function state() {
							return _state;
						},
						always: function always() {
							deferred.done(arguments).fail(arguments);
							return this;
						},
						"catch": function _catch(fn) {
							return _promise.then(null, fn);
						},

						// Keep pipe for back-compat
						pipe: function pipe() /* fnDone, fnFail, fnProgress */{
							var fns = arguments;

							return jQuery.Deferred(function (newDefer) {
								jQuery.each(tuples, function (i, tuple) {

									// Map tuples (progress, done, fail) to arguments (done, fail, progress)
									var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];

									// deferred.progress(function() { bind to newDefer or newDefer.notify })
									// deferred.done(function() { bind to newDefer or newDefer.resolve })
									// deferred.fail(function() { bind to newDefer or newDefer.reject })
									deferred[tuple[1]](function () {
										var returned = fn && fn.apply(this, arguments);
										if (returned && jQuery.isFunction(returned.promise)) {
											returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
										} else {
											newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
										}
									});
								});
								fns = null;
							}).promise();
						},
						then: function then(onFulfilled, onRejected, onProgress) {
							var maxDepth = 0;
							function resolve(depth, deferred, handler, special) {
								return function () {
									var that = this,
									    args = arguments,
									    mightThrow = function mightThrow() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if (depth < maxDepth) {
											return;
										}

										returned = handler.apply(that, args);

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if (returned === deferred.promise()) {
											throw new TypeError("Thenable self-resolution");
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned && (

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										(typeof returned === 'undefined' ? 'undefined' : _typeof2(returned)) === "object" || typeof returned === "function") && returned.then;

										// Handle a returned thenable
										if (jQuery.isFunction(then)) {

											// Special processors (notify) just wait for resolution
											if (special) {
												then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));

												// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
											}

											// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if (handler !== Identity) {
												that = undefined;
												args = [returned];
											}

											// Process the value(s)
											// Default process is resolve
											(special || deferred.resolveWith)(that, args);
										}
									},


									// Only normal processors (resolve) catch and reject exceptions
									process = special ? mightThrow : function () {
										try {
											mightThrow();
										} catch (e) {

											if (jQuery.Deferred.exceptionHook) {
												jQuery.Deferred.exceptionHook(e, process.stackTrace);
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if (depth + 1 >= maxDepth) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if (handler !== Thrower) {
													that = undefined;
													args = [e];
												}

												deferred.rejectWith(that, args);
											}
										}
									};

									// Support: Promises/A+ section 2.3.3.3.1
									// https://promisesaplus.com/#point-57
									// Re-resolve promises immediately to dodge false rejection from
									// subsequent errors
									if (depth) {
										process();
									} else {

										// Call an optional hook to record the stack, in case of exception
										// since it's otherwise lost when execution goes async
										if (jQuery.Deferred.getStackHook) {
											process.stackTrace = jQuery.Deferred.getStackHook();
										}
										window.setTimeout(process);
									}
								};
							}

							return jQuery.Deferred(function (newDefer) {

								// progress_handlers.add( ... )
								tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));

								// fulfilled_handlers.add( ... )
								tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity));

								// rejected_handlers.add( ... )
								tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower));
							}).promise();
						},

						// Get a promise for this deferred
						// If obj is provided, the promise aspect is added to the object
						promise: function promise(obj) {
							return obj != null ? jQuery.extend(obj, _promise) : _promise;
						}
					},
					    deferred = {};

					// Add list-specific methods
					jQuery.each(tuples, function (i, tuple) {
						var list = tuple[2],
						    stateString = tuple[5];

						// promise.progress = list.add
						// promise.done = list.add
						// promise.fail = list.add
						_promise[tuple[1]] = list.add;

						// Handle state
						if (stateString) {
							list.add(function () {

								// state = "resolved" (i.e., fulfilled)
								// state = "rejected"
								_state = stateString;
							},

							// rejected_callbacks.disable
							// fulfilled_callbacks.disable
							tuples[3 - i][2].disable,

							// progress_callbacks.lock
							tuples[0][2].lock);
						}

						// progress_handlers.fire
						// fulfilled_handlers.fire
						// rejected_handlers.fire
						list.add(tuple[3].fire);

						// deferred.notify = function() { deferred.notifyWith(...) }
						// deferred.resolve = function() { deferred.resolveWith(...) }
						// deferred.reject = function() { deferred.rejectWith(...) }
						deferred[tuple[0]] = function () {
							deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
							return this;
						};

						// deferred.notifyWith = list.fireWith
						// deferred.resolveWith = list.fireWith
						// deferred.rejectWith = list.fireWith
						deferred[tuple[0] + "With"] = list.fireWith;
					});

					// Make the deferred a promise
					_promise.promise(deferred);

					// Call given func if any
					if (func) {
						func.call(deferred, deferred);
					}

					// All done!
					return deferred;
				},

				// Deferred helper
				when: function when(singleValue) {
					var

					// count of uncompleted subordinates
					remaining = arguments.length,


					// count of unprocessed arguments
					i = remaining,


					// subordinate fulfillment data
					resolveContexts = Array(i),
					    resolveValues = _slice.call(arguments),


					// the master Deferred
					master = jQuery.Deferred(),


					// subordinate callback factory
					updateFunc = function updateFunc(i) {
						return function (value) {
							resolveContexts[i] = this;
							resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;
							if (! --remaining) {
								master.resolveWith(resolveContexts, resolveValues);
							}
						};
					};

					// Single- and empty arguments are adopted like Promise.resolve
					if (remaining <= 1) {
						adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);

						// Use .then() to unwrap secondary thenables (cf. gh-3000)
						if (master.state() === "pending" || jQuery.isFunction(resolveValues[i] && resolveValues[i].then)) {

							return master.then();
						}
					}

					// Multiple arguments are aggregated like Promise.all array elements
					while (i--) {
						adoptValue(resolveValues[i], updateFunc(i), master.reject);
					}

					return master.promise();
				}
			});

			// These usually indicate a programmer mistake during development,
			// warn about them ASAP rather than swallowing them by default.
			var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

			jQuery.Deferred.exceptionHook = function (error, stack) {

				// Support: IE 8 - 9 only
				// Console exists when dev tools are open, which can happen at any time
				if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
					window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
				}
			};

			jQuery.readyException = function (error) {
				window.setTimeout(function () {
					throw error;
				});
			};

			// The deferred used on DOM ready
			var readyList = jQuery.Deferred();

			jQuery.fn.ready = function (fn) {

				readyList.then(fn)

				// Wrap jQuery.readyException in a function so that the lookup
				// happens at the time of error handling instead of callback
				// registration.
				.catch(function (error) {
					jQuery.readyException(error);
				});

				return this;
			};

			jQuery.extend({

				// Is the DOM ready to be used? Set to true once it occurs.
				isReady: false,

				// A counter to track how many items to wait for before
				// the ready event fires. See #6781
				readyWait: 1,

				// Handle when the DOM is ready
				ready: function ready(wait) {

					// Abort if there are pending holds or we're already ready
					if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
						return;
					}

					// Remember that the DOM is ready
					jQuery.isReady = true;

					// If a normal DOM Ready event fired, decrement, and wait if need be
					if (wait !== true && --jQuery.readyWait > 0) {
						return;
					}

					// If there are functions bound, to execute
					readyList.resolveWith(document, [jQuery]);
				}
			});

			jQuery.ready.then = readyList.then;

			// The ready event handler and self cleanup method
			function completed() {
				document.removeEventListener("DOMContentLoaded", completed);
				window.removeEventListener("load", completed);
				jQuery.ready();
			}

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE <=9 - 10 only
			// Older IE sometimes signals "interactive" too soon
			if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout(jQuery.ready);
			} else {

				// Use the handy event callback
				document.addEventListener("DOMContentLoaded", completed);

				// A fallback to window.onload, that will always work
				window.addEventListener("load", completed);
			}

			// Multifunctional method to get and set values of a collection
			// The value/s can optionally be executed if it's a function
			var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
				var i = 0,
				    len = elems.length,
				    bulk = key == null;

				// Sets many values
				if (jQuery.type(key) === "object") {
					chainable = true;
					for (i in key) {
						access(elems, fn, i, key[i], true, emptyGet, raw);
					}

					// Sets one value
				} else if (value !== undefined) {
					chainable = true;

					if (!jQuery.isFunction(value)) {
						raw = true;
					}

					if (bulk) {

						// Bulk operations run against the entire set
						if (raw) {
							fn.call(elems, value);
							fn = null;

							// ...except when executing function values
						} else {
							bulk = fn;
							fn = function fn(elem, key, value) {
								return bulk.call(jQuery(elem), value);
							};
						}
					}

					if (fn) {
						for (; i < len; i++) {
							fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
						}
					}
				}

				if (chainable) {
					return elems;
				}

				// Gets
				if (bulk) {
					return fn.call(elems);
				}

				return len ? fn(elems[0], key) : emptyGet;
			};
			var acceptData = function acceptData(owner) {

				// Accepts only:
				//  - Node
				//    - Node.ELEMENT_NODE
				//    - Node.DOCUMENT_NODE
				//  - Object
				//    - Any
				return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
			};

			function Data() {
				this.expando = jQuery.expando + Data.uid++;
			}

			Data.uid = 1;

			Data.prototype = {

				cache: function cache(owner) {

					// Check if the owner object already has a cache
					var value = owner[this.expando];

					// If not, create one
					if (!value) {
						value = {};

						// We can accept data for non-element nodes in modern browsers,
						// but we should not, see #8335.
						// Always return an empty object.
						if (acceptData(owner)) {

							// If it is a node unlikely to be stringify-ed or looped over
							// use plain assignment
							if (owner.nodeType) {
								owner[this.expando] = value;

								// Otherwise secure it in a non-enumerable property
								// configurable must be true to allow the property to be
								// deleted when data is removed
							} else {
								Object.defineProperty(owner, this.expando, {
									value: value,
									configurable: true
								});
							}
						}
					}

					return value;
				},
				set: function set(owner, data, value) {
					var prop,
					    cache = this.cache(owner);

					// Handle: [ owner, key, value ] args
					// Always use camelCase key (gh-2257)
					if (typeof data === "string") {
						cache[jQuery.camelCase(data)] = value;

						// Handle: [ owner, { properties } ] args
					} else {

						// Copy the properties one-by-one to the cache object
						for (prop in data) {
							cache[jQuery.camelCase(prop)] = data[prop];
						}
					}
					return cache;
				},
				get: function get(owner, key) {
					return key === undefined ? this.cache(owner) :

					// Always use camelCase key (gh-2257)
					owner[this.expando] && owner[this.expando][jQuery.camelCase(key)];
				},
				access: function access(owner, key, value) {

					// In cases where either:
					//
					//   1. No key was specified
					//   2. A string key was specified, but no value provided
					//
					// Take the "read" path and allow the get method to determine
					// which value to return, respectively either:
					//
					//   1. The entire cache object
					//   2. The data stored at the key
					//
					if (key === undefined || key && typeof key === "string" && value === undefined) {

						return this.get(owner, key);
					}

					// When the key is not a string, or both a key and value
					// are specified, set or extend (existing objects) with either:
					//
					//   1. An object of properties
					//   2. A key and value
					//
					this.set(owner, key, value);

					// Since the "set" path can have two possible entry points
					// return the expected data based on which path was taken[*]
					return value !== undefined ? value : key;
				},
				remove: function remove(owner, key) {
					var i,
					    cache = owner[this.expando];

					if (cache === undefined) {
						return;
					}

					if (key !== undefined) {

						// Support array or space separated string of keys
						if (Array.isArray(key)) {

							// If key is an array of keys...
							// We always set camelCase keys, so remove that.
							key = key.map(jQuery.camelCase);
						} else {
							key = jQuery.camelCase(key);

							// If a key with the spaces exists, use it.
							// Otherwise, create an array by matching non-whitespace
							key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
						}

						i = key.length;

						while (i--) {
							delete cache[key[i]];
						}
					}

					// Remove the expando if there's no more data
					if (key === undefined || jQuery.isEmptyObject(cache)) {

						// Support: Chrome <=35 - 45
						// Webkit & Blink performance suffers when deleting properties
						// from DOM nodes, so set to undefined instead
						// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
						if (owner.nodeType) {
							owner[this.expando] = undefined;
						} else {
							delete owner[this.expando];
						}
					}
				},
				hasData: function hasData(owner) {
					var cache = owner[this.expando];
					return cache !== undefined && !jQuery.isEmptyObject(cache);
				}
			};
			var dataPriv = new Data();

			var dataUser = new Data();

			//	Implementation Summary
			//
			//	1. Enforce API surface and semantic compatibility with 1.9.x branch
			//	2. Improve the module's maintainability by reducing the storage
			//		paths to a single mechanism.
			//	3. Use the same single mechanism to support "private" and "user" data.
			//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
			//	5. Avoid exposing implementation details on user objects (eg. expando properties)
			//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

			var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			    rmultiDash = /[A-Z]/g;

			function getData(data) {
				if (data === "true") {
					return true;
				}

				if (data === "false") {
					return false;
				}

				if (data === "null") {
					return null;
				}

				// Only convert to a number if it doesn't change the string
				if (data === +data + "") {
					return +data;
				}

				if (rbrace.test(data)) {
					return JSON.parse(data);
				}

				return data;
			}

			function dataAttr(elem, key, data) {
				var name;

				// If nothing was found internally, try to fetch any
				// data from the HTML5 data-* attribute
				if (data === undefined && elem.nodeType === 1) {
					name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
					data = elem.getAttribute(name);

					if (typeof data === "string") {
						try {
							data = getData(data);
						} catch (e) {}

						// Make sure we set the data so it isn't changed later
						dataUser.set(elem, key, data);
					} else {
						data = undefined;
					}
				}
				return data;
			}

			jQuery.extend({
				hasData: function hasData(elem) {
					return dataUser.hasData(elem) || dataPriv.hasData(elem);
				},

				data: function data(elem, name, _data) {
					return dataUser.access(elem, name, _data);
				},

				removeData: function removeData(elem, name) {
					dataUser.remove(elem, name);
				},

				// TODO: Now that all calls to _data and _removeData have been replaced
				// with direct calls to dataPriv methods, these can be deprecated.
				_data: function _data(elem, name, data) {
					return dataPriv.access(elem, name, data);
				},

				_removeData: function _removeData(elem, name) {
					dataPriv.remove(elem, name);
				}
			});

			jQuery.fn.extend({
				data: function data(key, value) {
					var i,
					    name,
					    data,
					    elem = this[0],
					    attrs = elem && elem.attributes;

					// Gets all values
					if (key === undefined) {
						if (this.length) {
							data = dataUser.get(elem);

							if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
								i = attrs.length;
								while (i--) {

									// Support: IE 11 only
									// The attrs elements can be null (#14894)
									if (attrs[i]) {
										name = attrs[i].name;
										if (name.indexOf("data-") === 0) {
											name = jQuery.camelCase(name.slice(5));
											dataAttr(elem, name, data[name]);
										}
									}
								}
								dataPriv.set(elem, "hasDataAttrs", true);
							}
						}

						return data;
					}

					// Sets multiple values
					if ((typeof key === 'undefined' ? 'undefined' : _typeof2(key)) === "object") {
						return this.each(function () {
							dataUser.set(this, key);
						});
					}

					return access(this, function (value) {
						var data;

						// The calling jQuery object (element matches) is not empty
						// (and therefore has an element appears at this[ 0 ]) and the
						// `value` parameter was not undefined. An empty jQuery object
						// will result in `undefined` for elem = this[ 0 ] which will
						// throw an exception if an attempt to read a data cache is made.
						if (elem && value === undefined) {

							// Attempt to get data from the cache
							// The key will always be camelCased in Data
							data = dataUser.get(elem, key);
							if (data !== undefined) {
								return data;
							}

							// Attempt to "discover" the data in
							// HTML5 custom data-* attrs
							data = dataAttr(elem, key);
							if (data !== undefined) {
								return data;
							}

							// We tried really hard, but the data doesn't exist.
							return;
						}

						// Set the data...
						this.each(function () {

							// We always store the camelCased key
							dataUser.set(this, key, value);
						});
					}, null, value, arguments.length > 1, null, true);
				},

				removeData: function removeData(key) {
					return this.each(function () {
						dataUser.remove(this, key);
					});
				}
			});

			jQuery.extend({
				queue: function queue(elem, type, data) {
					var queue;

					if (elem) {
						type = (type || "fx") + "queue";
						queue = dataPriv.get(elem, type);

						// Speed up dequeue by getting out quickly if this is just a lookup
						if (data) {
							if (!queue || Array.isArray(data)) {
								queue = dataPriv.access(elem, type, jQuery.makeArray(data));
							} else {
								queue.push(data);
							}
						}
						return queue || [];
					}
				},

				dequeue: function dequeue(elem, type) {
					type = type || "fx";

					var queue = jQuery.queue(elem, type),
					    startLength = queue.length,
					    fn = queue.shift(),
					    hooks = jQuery._queueHooks(elem, type),
					    next = function next() {
						jQuery.dequeue(elem, type);
					};

					// If the fx queue is dequeued, always remove the progress sentinel
					if (fn === "inprogress") {
						fn = queue.shift();
						startLength--;
					}

					if (fn) {

						// Add a progress sentinel to prevent the fx queue from being
						// automatically dequeued
						if (type === "fx") {
							queue.unshift("inprogress");
						}

						// Clear up the last queue stop function
						delete hooks.stop;
						fn.call(elem, next, hooks);
					}

					if (!startLength && hooks) {
						hooks.empty.fire();
					}
				},

				// Not public - generate a queueHooks object, or return the current one
				_queueHooks: function _queueHooks(elem, type) {
					var key = type + "queueHooks";
					return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
						empty: jQuery.Callbacks("once memory").add(function () {
							dataPriv.remove(elem, [type + "queue", key]);
						})
					});
				}
			});

			jQuery.fn.extend({
				queue: function queue(type, data) {
					var setter = 2;

					if (typeof type !== "string") {
						data = type;
						type = "fx";
						setter--;
					}

					if (arguments.length < setter) {
						return jQuery.queue(this[0], type);
					}

					return data === undefined ? this : this.each(function () {
						var queue = jQuery.queue(this, type, data);

						// Ensure a hooks for this queue
						jQuery._queueHooks(this, type);

						if (type === "fx" && queue[0] !== "inprogress") {
							jQuery.dequeue(this, type);
						}
					});
				},
				dequeue: function dequeue(type) {
					return this.each(function () {
						jQuery.dequeue(this, type);
					});
				},
				clearQueue: function clearQueue(type) {
					return this.queue(type || "fx", []);
				},

				// Get a promise resolved when queues of a certain type
				// are emptied (fx is the type by default)
				promise: function promise(type, obj) {
					var tmp,
					    count = 1,
					    defer = jQuery.Deferred(),
					    elements = this,
					    i = this.length,
					    resolve = function resolve() {
						if (! --count) {
							defer.resolveWith(elements, [elements]);
						}
					};

					if (typeof type !== "string") {
						obj = type;
						type = undefined;
					}
					type = type || "fx";

					while (i--) {
						tmp = dataPriv.get(elements[i], type + "queueHooks");
						if (tmp && tmp.empty) {
							count++;
							tmp.empty.add(resolve);
						}
					}
					resolve();
					return defer.promise(obj);
				}
			});
			var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

			var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

			var cssExpand = ["Top", "Right", "Bottom", "Left"];

			var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {

				// isHiddenWithinTree might be called from jQuery#filter function;
				// in that case, element will be second argument
				elem = el || elem;

				// Inline style trumps all
				return elem.style.display === "none" || elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
			};

			var swap = function swap(elem, options, callback, args) {
				var ret,
				    name,
				    old = {};

				// Remember the old values, and insert the new ones
				for (name in options) {
					old[name] = elem.style[name];
					elem.style[name] = options[name];
				}

				ret = callback.apply(elem, args || []);

				// Revert the old values
				for (name in options) {
					elem.style[name] = old[name];
				}

				return ret;
			};

			function adjustCSS(elem, prop, valueParts, tween) {
				var adjusted,
				    scale = 1,
				    maxIterations = 20,
				    currentValue = tween ? function () {
					return tween.cur();
				} : function () {
					return jQuery.css(elem, prop, "");
				},
				    initial = currentValue(),
				    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


				// Starting value computation is required for potential unit mismatches
				initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

				if (initialInUnit && initialInUnit[3] !== unit) {

					// Trust units reported by jQuery.css
					unit = unit || initialInUnit[3];

					// Make sure we update the tween properties later on
					valueParts = valueParts || [];

					// Iteratively approximate from a nonzero starting point
					initialInUnit = +initial || 1;

					do {

						// If previous iteration zeroed out, double until we get *something*.
						// Use string for doubling so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						initialInUnit = initialInUnit / scale;
						jQuery.style(elem, prop, initialInUnit + unit);

						// Update scale, tolerating zero or NaN from tween.cur()
						// Break the loop if scale is unchanged or perfect, or if we've just had enough.
					} while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
				}

				if (valueParts) {
					initialInUnit = +initialInUnit || +initial || 0;

					// Apply relative offset (+=/-=) if specified
					adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
					if (tween) {
						tween.unit = unit;
						tween.start = initialInUnit;
						tween.end = adjusted;
					}
				}
				return adjusted;
			}

			var defaultDisplayMap = {};

			function getDefaultDisplay(elem) {
				var temp,
				    doc = elem.ownerDocument,
				    nodeName = elem.nodeName,
				    display = defaultDisplayMap[nodeName];

				if (display) {
					return display;
				}

				temp = doc.body.appendChild(doc.createElement(nodeName));
				display = jQuery.css(temp, "display");

				temp.parentNode.removeChild(temp);

				if (display === "none") {
					display = "block";
				}
				defaultDisplayMap[nodeName] = display;

				return display;
			}

			function showHide(elements, show) {
				var display,
				    elem,
				    values = [],
				    index = 0,
				    length = elements.length;

				// Determine new display value for elements that need to change
				for (; index < length; index++) {
					elem = elements[index];
					if (!elem.style) {
						continue;
					}

					display = elem.style.display;
					if (show) {

						// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
						// check is required in this first loop unless we have a nonempty display value (either
						// inline or about-to-be-restored)
						if (display === "none") {
							values[index] = dataPriv.get(elem, "display") || null;
							if (!values[index]) {
								elem.style.display = "";
							}
						}
						if (elem.style.display === "" && isHiddenWithinTree(elem)) {
							values[index] = getDefaultDisplay(elem);
						}
					} else {
						if (display !== "none") {
							values[index] = "none";

							// Remember what we're overwriting
							dataPriv.set(elem, "display", display);
						}
					}
				}

				// Set the display of the elements in a second loop to avoid constant reflow
				for (index = 0; index < length; index++) {
					if (values[index] != null) {
						elements[index].style.display = values[index];
					}
				}

				return elements;
			}

			jQuery.fn.extend({
				show: function show() {
					return showHide(this, true);
				},
				hide: function hide() {
					return showHide(this);
				},
				toggle: function toggle(state) {
					if (typeof state === "boolean") {
						return state ? this.show() : this.hide();
					}

					return this.each(function () {
						if (isHiddenWithinTree(this)) {
							jQuery(this).show();
						} else {
							jQuery(this).hide();
						}
					});
				}
			});
			var rcheckableType = /^(?:checkbox|radio)$/i;

			var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;

			var rscriptType = /^$|\/(?:java|ecma)script/i;

			// We have to close these tags to support XHTML (#13200)
			var wrapMap = {

				// Support: IE <=9 only
				option: [1, "<select multiple='multiple'>", "</select>"],

				// XHTML parsers do not magically insert elements in the
				// same way that tag soup parsers do. So we cannot shorten
				// this by omitting <tbody> or other required elements.
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

				_default: [0, "", ""]
			};

			// Support: IE <=9 only
			wrapMap.optgroup = wrapMap.option;

			wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
			wrapMap.th = wrapMap.td;

			function getAll(context, tag) {

				// Support: IE <=9 - 11 only
				// Use typeof to avoid zero-argument method invocation on host objects (#15151)
				var ret;

				if (typeof context.getElementsByTagName !== "undefined") {
					ret = context.getElementsByTagName(tag || "*");
				} else if (typeof context.querySelectorAll !== "undefined") {
					ret = context.querySelectorAll(tag || "*");
				} else {
					ret = [];
				}

				if (tag === undefined || tag && nodeName(context, tag)) {
					return jQuery.merge([context], ret);
				}

				return ret;
			}

			// Mark scripts as having already been evaluated
			function setGlobalEval(elems, refElements) {
				var i = 0,
				    l = elems.length;

				for (; i < l; i++) {
					dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
				}
			}

			var rhtml = /<|&#?\w+;/;

			function buildFragment(elems, context, scripts, selection, ignored) {
				var elem,
				    tmp,
				    tag,
				    wrap,
				    contains,
				    j,
				    fragment = context.createDocumentFragment(),
				    nodes = [],
				    i = 0,
				    l = elems.length;

				for (; i < l; i++) {
					elem = elems[i];

					if (elem || elem === 0) {

						// Add nodes directly
						if (jQuery.type(elem) === "object") {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

							// Convert non-html into a text node
						} else if (!rhtml.test(elem)) {
							nodes.push(context.createTextNode(elem));

							// Convert html into DOM nodes
						} else {
							tmp = tmp || fragment.appendChild(context.createElement("div"));

							// Deserialize a standard representation
							tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
							wrap = wrapMap[tag] || wrapMap._default;
							tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

							// Descend through wrappers to the right content
							j = wrap[0];
							while (j--) {
								tmp = tmp.lastChild;
							}

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge(nodes, tmp.childNodes);

							// Remember the top-level container
							tmp = fragment.firstChild;

							// Ensure the created nodes are orphaned (#12392)
							tmp.textContent = "";
						}
					}
				}

				// Remove wrapper from fragment
				fragment.textContent = "";

				i = 0;
				while (elem = nodes[i++]) {

					// Skip elements already in the context collection (trac-4087)
					if (selection && jQuery.inArray(elem, selection) > -1) {
						if (ignored) {
							ignored.push(elem);
						}
						continue;
					}

					contains = jQuery.contains(elem.ownerDocument, elem);

					// Append to fragment
					tmp = getAll(fragment.appendChild(elem), "script");

					// Preserve script evaluation history
					if (contains) {
						setGlobalEval(tmp);
					}

					// Capture executables
					if (scripts) {
						j = 0;
						while (elem = tmp[j++]) {
							if (rscriptType.test(elem.type || "")) {
								scripts.push(elem);
							}
						}
					}
				}

				return fragment;
			}

			(function () {
				var fragment = document.createDocumentFragment(),
				    div = fragment.appendChild(document.createElement("div")),
				    input = document.createElement("input");

				// Support: Android 4.0 - 4.3 only
				// Check state lost if the name is set (#11217)
				// Support: Windows Web Apps (WWA)
				// `name` and `type` must use .setAttribute for WWA (#14901)
				input.setAttribute("type", "radio");
				input.setAttribute("checked", "checked");
				input.setAttribute("name", "t");

				div.appendChild(input);

				// Support: Android <=4.1 only
				// Older WebKit doesn't clone checked state correctly in fragments
				support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

				// Support: IE <=11 only
				// Make sure textarea (and checkbox) defaultValue is properly cloned
				div.innerHTML = "<textarea>x</textarea>";
				support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
			})();
			var documentElement = document.documentElement;

			var rkeyEvent = /^key/,
			    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

			function returnTrue() {
				return true;
			}

			function returnFalse() {
				return false;
			}

			// Support: IE <=9 only
			// See #13393 for more info
			function safeActiveElement() {
				try {
					return document.activeElement;
				} catch (err) {}
			}

			function _on(elem, types, selector, data, fn, one) {
				var origFn, type;

				// Types can be a map of types/handlers
				if ((typeof types === 'undefined' ? 'undefined' : _typeof2(types)) === "object") {

					// ( types-Object, selector, data )
					if (typeof selector !== "string") {

						// ( types-Object, data )
						data = data || selector;
						selector = undefined;
					}
					for (type in types) {
						_on(elem, type, selector, data, types[type], one);
					}
					return elem;
				}

				if (data == null && fn == null) {

					// ( types, fn )
					fn = selector;
					data = selector = undefined;
				} else if (fn == null) {
					if (typeof selector === "string") {

						// ( types, selector, fn )
						fn = data;
						data = undefined;
					} else {

						// ( types, data, fn )
						fn = data;
						data = selector;
						selector = undefined;
					}
				}
				if (fn === false) {
					fn = returnFalse;
				} else if (!fn) {
					return elem;
				}

				if (one === 1) {
					origFn = fn;
					fn = function fn(event) {

						// Can use an empty set, since event contains the info
						jQuery().off(event);
						return origFn.apply(this, arguments);
					};

					// Use same guid so caller can remove using origFn
					fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
				}
				return elem.each(function () {
					jQuery.event.add(this, types, fn, data, selector);
				});
			}

			/*
    * Helper functions for managing events -- not part of the public interface.
    * Props to Dean Edwards' addEvent library for many of the ideas.
    */
			jQuery.event = {

				global: {},

				add: function add(elem, types, handler, data, selector) {

					var handleObjIn,
					    eventHandle,
					    tmp,
					    events,
					    t,
					    handleObj,
					    special,
					    handlers,
					    type,
					    namespaces,
					    origType,
					    elemData = dataPriv.get(elem);

					// Don't attach events to noData or text/comment nodes (but allow plain objects)
					if (!elemData) {
						return;
					}

					// Caller can pass in an object of custom data in lieu of the handler
					if (handler.handler) {
						handleObjIn = handler;
						handler = handleObjIn.handler;
						selector = handleObjIn.selector;
					}

					// Ensure that invalid selectors throw exceptions at attach time
					// Evaluate against documentElement in case elem is a non-element node (e.g., document)
					if (selector) {
						jQuery.find.matchesSelector(documentElement, selector);
					}

					// Make sure that the handler has a unique ID, used to find/remove it later
					if (!handler.guid) {
						handler.guid = jQuery.guid++;
					}

					// Init the element's event structure and main handler, if this is the first
					if (!(events = elemData.events)) {
						events = elemData.events = {};
					}
					if (!(eventHandle = elemData.handle)) {
						eventHandle = elemData.handle = function (e) {

							// Discard the second event of a jQuery.event.trigger() and
							// when an event is called after a page has unloaded
							return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
						};
					}

					// Handle multiple events separated by a space
					types = (types || "").match(rnothtmlwhite) || [""];
					t = types.length;
					while (t--) {
						tmp = rtypenamespace.exec(types[t]) || [];
						type = origType = tmp[1];
						namespaces = (tmp[2] || "").split(".").sort();

						// There *must* be a type, no attaching namespace-only handlers
						if (!type) {
							continue;
						}

						// If event changes its type, use the special event handlers for the changed type
						special = jQuery.event.special[type] || {};

						// If selector defined, determine special event api type, otherwise given type
						type = (selector ? special.delegateType : special.bindType) || type;

						// Update special based on newly reset type
						special = jQuery.event.special[type] || {};

						// handleObj is passed to all event handlers
						handleObj = jQuery.extend({
							type: type,
							origType: origType,
							data: data,
							handler: handler,
							guid: handler.guid,
							selector: selector,
							needsContext: selector && jQuery.expr.match.needsContext.test(selector),
							namespace: namespaces.join(".")
						}, handleObjIn);

						// Init the event handler queue if we're the first
						if (!(handlers = events[type])) {
							handlers = events[type] = [];
							handlers.delegateCount = 0;

							// Only use addEventListener if the special events handler returns false
							if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {

								if (elem.addEventListener) {
									elem.addEventListener(type, eventHandle);
								}
							}
						}

						if (special.add) {
							special.add.call(elem, handleObj);

							if (!handleObj.handler.guid) {
								handleObj.handler.guid = handler.guid;
							}
						}

						// Add to the element's handler list, delegates in front
						if (selector) {
							handlers.splice(handlers.delegateCount++, 0, handleObj);
						} else {
							handlers.push(handleObj);
						}

						// Keep track of which events have ever been used, for event optimization
						jQuery.event.global[type] = true;
					}
				},

				// Detach an event or set of events from an element
				remove: function remove(elem, types, handler, selector, mappedTypes) {

					var j,
					    origCount,
					    tmp,
					    events,
					    t,
					    handleObj,
					    special,
					    handlers,
					    type,
					    namespaces,
					    origType,
					    elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

					if (!elemData || !(events = elemData.events)) {
						return;
					}

					// Once for each type.namespace in types; type may be omitted
					types = (types || "").match(rnothtmlwhite) || [""];
					t = types.length;
					while (t--) {
						tmp = rtypenamespace.exec(types[t]) || [];
						type = origType = tmp[1];
						namespaces = (tmp[2] || "").split(".").sort();

						// Unbind all events (on this namespace, if provided) for the element
						if (!type) {
							for (type in events) {
								jQuery.event.remove(elem, type + types[t], handler, selector, true);
							}
							continue;
						}

						special = jQuery.event.special[type] || {};
						type = (selector ? special.delegateType : special.bindType) || type;
						handlers = events[type] || [];
						tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

						// Remove matching events
						origCount = j = handlers.length;
						while (j--) {
							handleObj = handlers[j];

							if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
								handlers.splice(j, 1);

								if (handleObj.selector) {
									handlers.delegateCount--;
								}
								if (special.remove) {
									special.remove.call(elem, handleObj);
								}
							}
						}

						// Remove generic event handler if we removed something and no more handlers exist
						// (avoids potential for endless recursion during removal of special event handlers)
						if (origCount && !handlers.length) {
							if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {

								jQuery.removeEvent(elem, type, elemData.handle);
							}

							delete events[type];
						}
					}

					// Remove data and the expando if it's no longer used
					if (jQuery.isEmptyObject(events)) {
						dataPriv.remove(elem, "handle events");
					}
				},

				dispatch: function dispatch(nativeEvent) {

					// Make a writable jQuery.Event from the native event object
					var event = jQuery.event.fix(nativeEvent);

					var i,
					    j,
					    ret,
					    matched,
					    handleObj,
					    handlerQueue,
					    args = new Array(arguments.length),
					    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
					    special = jQuery.event.special[event.type] || {};

					// Use the fix-ed jQuery.Event rather than the (read-only) native event
					args[0] = event;

					for (i = 1; i < arguments.length; i++) {
						args[i] = arguments[i];
					}

					event.delegateTarget = this;

					// Call the preDispatch hook for the mapped type, and let it bail if desired
					if (special.preDispatch && special.preDispatch.call(this, event) === false) {
						return;
					}

					// Determine handlers
					handlerQueue = jQuery.event.handlers.call(this, event, handlers);

					// Run delegates first; they may want to stop propagation beneath us
					i = 0;
					while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
						event.currentTarget = matched.elem;

						j = 0;
						while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

							// Triggered event must either 1) have no namespace, or 2) have namespace(s)
							// a subset or equal to those in the bound event (both can have no namespace).
							if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

								event.handleObj = handleObj;
								event.data = handleObj.data;

								ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

								if (ret !== undefined) {
									if ((event.result = ret) === false) {
										event.preventDefault();
										event.stopPropagation();
									}
								}
							}
						}
					}

					// Call the postDispatch hook for the mapped type
					if (special.postDispatch) {
						special.postDispatch.call(this, event);
					}

					return event.result;
				},

				handlers: function handlers(event, _handlers) {
					var i,
					    handleObj,
					    sel,
					    matchedHandlers,
					    matchedSelectors,
					    handlerQueue = [],
					    delegateCount = _handlers.delegateCount,
					    cur = event.target;

					// Find delegate handlers
					if (delegateCount &&

					// Support: IE <=9
					// Black-hole SVG <use> instance trees (trac-13180)
					cur.nodeType &&

					// Support: Firefox <=42
					// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
					// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
					// Support: IE 11 only
					// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
					!(event.type === "click" && event.button >= 1)) {

						for (; cur !== this; cur = cur.parentNode || this) {

							// Don't check non-elements (#13208)
							// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
							if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
								matchedHandlers = [];
								matchedSelectors = {};
								for (i = 0; i < delegateCount; i++) {
									handleObj = _handlers[i];

									// Don't conflict with Object.prototype properties (#13203)
									sel = handleObj.selector + " ";

									if (matchedSelectors[sel] === undefined) {
										matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
									}
									if (matchedSelectors[sel]) {
										matchedHandlers.push(handleObj);
									}
								}
								if (matchedHandlers.length) {
									handlerQueue.push({ elem: cur, handlers: matchedHandlers });
								}
							}
						}
					}

					// Add the remaining (directly-bound) handlers
					cur = this;
					if (delegateCount < _handlers.length) {
						handlerQueue.push({ elem: cur, handlers: _handlers.slice(delegateCount) });
					}

					return handlerQueue;
				},

				addProp: function addProp(name, hook) {
					Object.defineProperty(jQuery.Event.prototype, name, {
						enumerable: true,
						configurable: true,

						get: jQuery.isFunction(hook) ? function () {
							if (this.originalEvent) {
								return hook(this.originalEvent);
							}
						} : function () {
							if (this.originalEvent) {
								return this.originalEvent[name];
							}
						},

						set: function set(value) {
							Object.defineProperty(this, name, {
								enumerable: true,
								configurable: true,
								writable: true,
								value: value
							});
						}
					});
				},

				fix: function fix(originalEvent) {
					return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
				},

				special: {
					load: {

						// Prevent triggered image.load events from bubbling to window.load
						noBubble: true
					},
					focus: {

						// Fire native event if possible so blur/focus sequence is correct
						trigger: function trigger() {
							if (this !== safeActiveElement() && this.focus) {
								this.focus();
								return false;
							}
						},
						delegateType: "focusin"
					},
					blur: {
						trigger: function trigger() {
							if (this === safeActiveElement() && this.blur) {
								this.blur();
								return false;
							}
						},
						delegateType: "focusout"
					},
					click: {

						// For checkbox, fire native event so checked state will be right
						trigger: function trigger() {
							if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
								this.click();
								return false;
							}
						},

						// For cross-browser consistency, don't fire native .click() on links
						_default: function _default(event) {
							return nodeName(event.target, "a");
						}
					},

					beforeunload: {
						postDispatch: function postDispatch(event) {

							// Support: Firefox 20+
							// Firefox doesn't alert if the returnValue field is not set.
							if (event.result !== undefined && event.originalEvent) {
								event.originalEvent.returnValue = event.result;
							}
						}
					}
				}
			};

			jQuery.removeEvent = function (elem, type, handle) {

				// This "if" is needed for plain objects
				if (elem.removeEventListener) {
					elem.removeEventListener(type, handle);
				}
			};

			jQuery.Event = function (src, props) {

				// Allow instantiation without the 'new' keyword
				if (!(this instanceof jQuery.Event)) {
					return new jQuery.Event(src, props);
				}

				// Event object
				if (src && src.type) {
					this.originalEvent = src;
					this.type = src.type;

					// Events bubbling up the document may have been marked as prevented
					// by a handler lower down the tree; reflect the correct value.
					this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ? returnTrue : returnFalse;

					// Create target properties
					// Support: Safari <=6 - 7 only
					// Target should not be a text node (#504, #13143)
					this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;

					this.currentTarget = src.currentTarget;
					this.relatedTarget = src.relatedTarget;

					// Event type
				} else {
					this.type = src;
				}

				// Put explicitly provided properties onto the event object
				if (props) {
					jQuery.extend(this, props);
				}

				// Create a timestamp if incoming event doesn't have one
				this.timeStamp = src && src.timeStamp || jQuery.now();

				// Mark it as fixed
				this[jQuery.expando] = true;
			};

			// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
			// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
			jQuery.Event.prototype = {
				constructor: jQuery.Event,
				isDefaultPrevented: returnFalse,
				isPropagationStopped: returnFalse,
				isImmediatePropagationStopped: returnFalse,
				isSimulated: false,

				preventDefault: function preventDefault() {
					var e = this.originalEvent;

					this.isDefaultPrevented = returnTrue;

					if (e && !this.isSimulated) {
						e.preventDefault();
					}
				},
				stopPropagation: function stopPropagation() {
					var e = this.originalEvent;

					this.isPropagationStopped = returnTrue;

					if (e && !this.isSimulated) {
						e.stopPropagation();
					}
				},
				stopImmediatePropagation: function stopImmediatePropagation() {
					var e = this.originalEvent;

					this.isImmediatePropagationStopped = returnTrue;

					if (e && !this.isSimulated) {
						e.stopImmediatePropagation();
					}

					this.stopPropagation();
				}
			};

			// Includes all common event props including KeyEvent and MouseEvent specific props
			jQuery.each({
				altKey: true,
				bubbles: true,
				cancelable: true,
				changedTouches: true,
				ctrlKey: true,
				detail: true,
				eventPhase: true,
				metaKey: true,
				pageX: true,
				pageY: true,
				shiftKey: true,
				view: true,
				"char": true,
				charCode: true,
				key: true,
				keyCode: true,
				button: true,
				buttons: true,
				clientX: true,
				clientY: true,
				offsetX: true,
				offsetY: true,
				pointerId: true,
				pointerType: true,
				screenX: true,
				screenY: true,
				targetTouches: true,
				toElement: true,
				touches: true,

				which: function which(event) {
					var button = event.button;

					// Add which for key events
					if (event.which == null && rkeyEvent.test(event.type)) {
						return event.charCode != null ? event.charCode : event.keyCode;
					}

					// Add which for click: 1 === left; 2 === middle; 3 === right
					if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
						if (button & 1) {
							return 1;
						}

						if (button & 2) {
							return 3;
						}

						if (button & 4) {
							return 2;
						}

						return 0;
					}

					return event.which;
				}
			}, jQuery.event.addProp);

			// Create mouseenter/leave events using mouseover/out and event-time checks
			// so that event delegation works in jQuery.
			// Do the same for pointerenter/pointerleave and pointerover/pointerout
			//
			// Support: Safari 7 only
			// Safari sends mouseenter too often; see:
			// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
			// for the description of the bug (it existed in older Chrome versions as well).
			jQuery.each({
				mouseenter: "mouseover",
				mouseleave: "mouseout",
				pointerenter: "pointerover",
				pointerleave: "pointerout"
			}, function (orig, fix) {
				jQuery.event.special[orig] = {
					delegateType: fix,
					bindType: fix,

					handle: function handle(event) {
						var ret,
						    target = this,
						    related = event.relatedTarget,
						    handleObj = event.handleObj;

						// For mouseenter/leave call the handler if related is outside the target.
						// NB: No relatedTarget if the mouse left/entered the browser window
						if (!related || related !== target && !jQuery.contains(target, related)) {
							event.type = handleObj.origType;
							ret = handleObj.handler.apply(this, arguments);
							event.type = fix;
						}
						return ret;
					}
				};
			});

			jQuery.fn.extend({

				on: function on(types, selector, data, fn) {
					return _on(this, types, selector, data, fn);
				},
				one: function one(types, selector, data, fn) {
					return _on(this, types, selector, data, fn, 1);
				},
				off: function off(types, selector, fn) {
					var handleObj, type;
					if (types && types.preventDefault && types.handleObj) {

						// ( event )  dispatched jQuery.Event
						handleObj = types.handleObj;
						jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
						return this;
					}
					if ((typeof types === 'undefined' ? 'undefined' : _typeof2(types)) === "object") {

						// ( types-object [, selector] )
						for (type in types) {
							this.off(type, selector, types[type]);
						}
						return this;
					}
					if (selector === false || typeof selector === "function") {

						// ( types [, fn] )
						fn = selector;
						selector = undefined;
					}
					if (fn === false) {
						fn = returnFalse;
					}
					return this.each(function () {
						jQuery.event.remove(this, types, fn, selector);
					});
				}
			});

			var

			/* eslint-disable max-len */

			// See https://github.com/eslint/eslint/issues/3229
			rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,


			/* eslint-enable */

			// Support: IE <=10 - 11, Edge 12 - 13
			// In IE/Edge using regex groups here causes severe slowdowns.
			// See https://connect.microsoft.com/IE/feedback/details/1736512/
			rnoInnerhtml = /<script|<style|<link/i,


			// checked="checked" or checked
			rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
			    rscriptTypeMasked = /^true\/(.*)/,
			    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

			// Prefer a tbody over its parent table for containing new rows
			function manipulationTarget(elem, content) {
				if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

					return jQuery(">tbody", elem)[0] || elem;
				}

				return elem;
			}

			// Replace/restore the type attribute of script elements for safe DOM manipulation
			function disableScript(elem) {
				elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
				return elem;
			}
			function restoreScript(elem) {
				var match = rscriptTypeMasked.exec(elem.type);

				if (match) {
					elem.type = match[1];
				} else {
					elem.removeAttribute("type");
				}

				return elem;
			}

			function cloneCopyEvent(src, dest) {
				var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

				if (dest.nodeType !== 1) {
					return;
				}

				// 1. Copy private data: events, handlers, etc.
				if (dataPriv.hasData(src)) {
					pdataOld = dataPriv.access(src);
					pdataCur = dataPriv.set(dest, pdataOld);
					events = pdataOld.events;

					if (events) {
						delete pdataCur.handle;
						pdataCur.events = {};

						for (type in events) {
							for (i = 0, l = events[type].length; i < l; i++) {
								jQuery.event.add(dest, type, events[type][i]);
							}
						}
					}
				}

				// 2. Copy user data
				if (dataUser.hasData(src)) {
					udataOld = dataUser.access(src);
					udataCur = jQuery.extend({}, udataOld);

					dataUser.set(dest, udataCur);
				}
			}

			// Fix IE bugs, see support tests
			function fixInput(src, dest) {
				var nodeName = dest.nodeName.toLowerCase();

				// Fails to persist the checked state of a cloned checkbox or radio button.
				if (nodeName === "input" && rcheckableType.test(src.type)) {
					dest.checked = src.checked;

					// Fails to return the selected option to the default selected state when cloning options
				} else if (nodeName === "input" || nodeName === "textarea") {
					dest.defaultValue = src.defaultValue;
				}
			}

			function domManip(collection, args, callback, ignored) {

				// Flatten any nested arrays
				args = concat.apply([], args);

				var fragment,
				    first,
				    scripts,
				    hasScripts,
				    node,
				    doc,
				    i = 0,
				    l = collection.length,
				    iNoClone = l - 1,
				    value = args[0],
				    isFunction = jQuery.isFunction(value);

				// We can't cloneNode fragments that contain checked, in WebKit
				if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
					return collection.each(function (index) {
						var self = collection.eq(index);
						if (isFunction) {
							args[0] = value.call(this, index, self.html());
						}
						domManip(self, args, callback, ignored);
					});
				}

				if (l) {
					fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
					first = fragment.firstChild;

					if (fragment.childNodes.length === 1) {
						fragment = first;
					}

					// Require either new content or an interest in ignored elements to invoke the callback
					if (first || ignored) {
						scripts = jQuery.map(getAll(fragment, "script"), disableScript);
						hasScripts = scripts.length;

						// Use the original fragment for the last item
						// instead of the first because it can end up
						// being emptied incorrectly in certain situations (#8070).
						for (; i < l; i++) {
							node = fragment;

							if (i !== iNoClone) {
								node = jQuery.clone(node, true, true);

								// Keep references to cloned scripts for later restoration
								if (hasScripts) {

									// Support: Android <=4.0 only, PhantomJS 1 only
									// push.apply(_, arraylike) throws on ancient WebKit
									jQuery.merge(scripts, getAll(node, "script"));
								}
							}

							callback.call(collection[i], node, i);
						}

						if (hasScripts) {
							doc = scripts[scripts.length - 1].ownerDocument;

							// Reenable scripts
							jQuery.map(scripts, restoreScript);

							// Evaluate executable scripts on first document insertion
							for (i = 0; i < hasScripts; i++) {
								node = scripts[i];
								if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {

									if (node.src) {

										// Optional AJAX dependency, but won't run scripts if not present
										if (jQuery._evalUrl) {
											jQuery._evalUrl(node.src);
										}
									} else {
										DOMEval(node.textContent.replace(rcleanScript, ""), doc);
									}
								}
							}
						}
					}
				}

				return collection;
			}

			function _remove(elem, selector, keepData) {
				var node,
				    nodes = selector ? jQuery.filter(selector, elem) : elem,
				    i = 0;

				for (; (node = nodes[i]) != null; i++) {
					if (!keepData && node.nodeType === 1) {
						jQuery.cleanData(getAll(node));
					}

					if (node.parentNode) {
						if (keepData && jQuery.contains(node.ownerDocument, node)) {
							setGlobalEval(getAll(node, "script"));
						}
						node.parentNode.removeChild(node);
					}
				}

				return elem;
			}

			jQuery.extend({
				htmlPrefilter: function htmlPrefilter(html) {
					return html.replace(rxhtmlTag, "<$1></$2>");
				},

				clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
					var i,
					    l,
					    srcElements,
					    destElements,
					    clone = elem.cloneNode(true),
					    inPage = jQuery.contains(elem.ownerDocument, elem);

					// Fix IE cloning issues
					if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

						// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
						destElements = getAll(clone);
						srcElements = getAll(elem);

						for (i = 0, l = srcElements.length; i < l; i++) {
							fixInput(srcElements[i], destElements[i]);
						}
					}

					// Copy the events from the original to the clone
					if (dataAndEvents) {
						if (deepDataAndEvents) {
							srcElements = srcElements || getAll(elem);
							destElements = destElements || getAll(clone);

							for (i = 0, l = srcElements.length; i < l; i++) {
								cloneCopyEvent(srcElements[i], destElements[i]);
							}
						} else {
							cloneCopyEvent(elem, clone);
						}
					}

					// Preserve script evaluation history
					destElements = getAll(clone, "script");
					if (destElements.length > 0) {
						setGlobalEval(destElements, !inPage && getAll(elem, "script"));
					}

					// Return the cloned set
					return clone;
				},

				cleanData: function cleanData(elems) {
					var data,
					    elem,
					    type,
					    special = jQuery.event.special,
					    i = 0;

					for (; (elem = elems[i]) !== undefined; i++) {
						if (acceptData(elem)) {
							if (data = elem[dataPriv.expando]) {
								if (data.events) {
									for (type in data.events) {
										if (special[type]) {
											jQuery.event.remove(elem, type);

											// This is a shortcut to avoid jQuery.event.remove's overhead
										} else {
											jQuery.removeEvent(elem, type, data.handle);
										}
									}
								}

								// Support: Chrome <=35 - 45+
								// Assign undefined instead of using delete, see Data#remove
								elem[dataPriv.expando] = undefined;
							}
							if (elem[dataUser.expando]) {

								// Support: Chrome <=35 - 45+
								// Assign undefined instead of using delete, see Data#remove
								elem[dataUser.expando] = undefined;
							}
						}
					}
				}
			});

			jQuery.fn.extend({
				detach: function detach(selector) {
					return _remove(this, selector, true);
				},

				remove: function remove(selector) {
					return _remove(this, selector);
				},

				text: function text(value) {
					return access(this, function (value) {
						return value === undefined ? jQuery.text(this) : this.empty().each(function () {
							if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
								this.textContent = value;
							}
						});
					}, null, value, arguments.length);
				},

				append: function append() {
					return domManip(this, arguments, function (elem) {
						if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
							var target = manipulationTarget(this, elem);
							target.appendChild(elem);
						}
					});
				},

				prepend: function prepend() {
					return domManip(this, arguments, function (elem) {
						if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
							var target = manipulationTarget(this, elem);
							target.insertBefore(elem, target.firstChild);
						}
					});
				},

				before: function before() {
					return domManip(this, arguments, function (elem) {
						if (this.parentNode) {
							this.parentNode.insertBefore(elem, this);
						}
					});
				},

				after: function after() {
					return domManip(this, arguments, function (elem) {
						if (this.parentNode) {
							this.parentNode.insertBefore(elem, this.nextSibling);
						}
					});
				},

				empty: function empty() {
					var elem,
					    i = 0;

					for (; (elem = this[i]) != null; i++) {
						if (elem.nodeType === 1) {

							// Prevent memory leaks
							jQuery.cleanData(getAll(elem, false));

							// Remove any remaining nodes
							elem.textContent = "";
						}
					}

					return this;
				},

				clone: function clone(dataAndEvents, deepDataAndEvents) {
					dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
					deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

					return this.map(function () {
						return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
					});
				},

				html: function html(value) {
					return access(this, function (value) {
						var elem = this[0] || {},
						    i = 0,
						    l = this.length;

						if (value === undefined && elem.nodeType === 1) {
							return elem.innerHTML;
						}

						// See if we can take a shortcut and just use innerHTML
						if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

							value = jQuery.htmlPrefilter(value);

							try {
								for (; i < l; i++) {
									elem = this[i] || {};

									// Remove element nodes and prevent memory leaks
									if (elem.nodeType === 1) {
										jQuery.cleanData(getAll(elem, false));
										elem.innerHTML = value;
									}
								}

								elem = 0;

								// If using innerHTML throws an exception, use the fallback method
							} catch (e) {}
						}

						if (elem) {
							this.empty().append(value);
						}
					}, null, value, arguments.length);
				},

				replaceWith: function replaceWith() {
					var ignored = [];

					// Make the changes, replacing each non-ignored context element with the new content
					return domManip(this, arguments, function (elem) {
						var parent = this.parentNode;

						if (jQuery.inArray(this, ignored) < 0) {
							jQuery.cleanData(getAll(this));
							if (parent) {
								parent.replaceChild(elem, this);
							}
						}

						// Force callback invocation
					}, ignored);
				}
			});

			jQuery.each({
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith"
			}, function (name, original) {
				jQuery.fn[name] = function (selector) {
					var elems,
					    ret = [],
					    insert = jQuery(selector),
					    last = insert.length - 1,
					    i = 0;

					for (; i <= last; i++) {
						elems = i === last ? this : this.clone(true);
						jQuery(insert[i])[original](elems);

						// Support: Android <=4.0 only, PhantomJS 1 only
						// .get() because push.apply(_, arraylike) throws on ancient WebKit
						push.apply(ret, elems.get());
					}

					return this.pushStack(ret);
				};
			});
			var rmargin = /^margin/;

			var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

			var getStyles = function getStyles(elem) {

				// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
				// IE throws on elements created in popups
				// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
				var view = elem.ownerDocument.defaultView;

				if (!view || !view.opener) {
					view = window;
				}

				return view.getComputedStyle(elem);
			};

			(function () {

				// Executing both pixelPosition & boxSizingReliable tests require only one layout
				// so they're executed at the same time to save the second computation.
				function computeStyleTests() {

					// This is a singleton, we need to execute it only once
					if (!div) {
						return;
					}

					div.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
					div.innerHTML = "";
					documentElement.appendChild(container);

					var divStyle = window.getComputedStyle(div);
					pixelPositionVal = divStyle.top !== "1%";

					// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
					reliableMarginLeftVal = divStyle.marginLeft === "2px";
					boxSizingReliableVal = divStyle.width === "4px";

					// Support: Android 4.0 - 4.3 only
					// Some styles come back with percentage values, even though they shouldn't
					div.style.marginRight = "50%";
					pixelMarginRightVal = divStyle.marginRight === "4px";

					documentElement.removeChild(container);

					// Nullify the div so it wouldn't be stored in the memory and
					// it will also be a sign that checks already performed
					div = null;
				}

				var pixelPositionVal,
				    boxSizingReliableVal,
				    pixelMarginRightVal,
				    reliableMarginLeftVal,
				    container = document.createElement("div"),
				    div = document.createElement("div");

				// Finish early in limited (non-browser) environments
				if (!div.style) {
					return;
				}

				// Support: IE <=9 - 11 only
				// Style of cloned element affects source element cloned (#8908)
				div.style.backgroundClip = "content-box";
				div.cloneNode(true).style.backgroundClip = "";
				support.clearCloneStyle = div.style.backgroundClip === "content-box";

				container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
				container.appendChild(div);

				jQuery.extend(support, {
					pixelPosition: function pixelPosition() {
						computeStyleTests();
						return pixelPositionVal;
					},
					boxSizingReliable: function boxSizingReliable() {
						computeStyleTests();
						return boxSizingReliableVal;
					},
					pixelMarginRight: function pixelMarginRight() {
						computeStyleTests();
						return pixelMarginRightVal;
					},
					reliableMarginLeft: function reliableMarginLeft() {
						computeStyleTests();
						return reliableMarginLeftVal;
					}
				});
			})();

			function curCSS(elem, name, computed) {
				var width,
				    minWidth,
				    maxWidth,
				    ret,


				// Support: Firefox 51+
				// Retrieving style before computed somehow
				// fixes an issue with getting wrong values
				// on detached elements
				style = elem.style;

				computed = computed || getStyles(elem);

				// getPropertyValue is needed for:
				//   .css('filter') (IE 9 only, #12537)
				//   .css('--customProperty) (#3144)
				if (computed) {
					ret = computed.getPropertyValue(name) || computed[name];

					if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
						ret = jQuery.style(elem, name);
					}

					// A tribute to the "awesome hack by Dean Edwards"
					// Android Browser returns percentage for some values,
					// but width seems to be reliably pixels.
					// This is against the CSSOM draft spec:
					// https://drafts.csswg.org/cssom/#resolved-values
					if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {

						// Remember the original values
						width = style.width;
						minWidth = style.minWidth;
						maxWidth = style.maxWidth;

						// Put in the new values to get a computed value out
						style.minWidth = style.maxWidth = style.width = ret;
						ret = computed.width;

						// Revert the changed values
						style.width = width;
						style.minWidth = minWidth;
						style.maxWidth = maxWidth;
					}
				}

				return ret !== undefined ?

				// Support: IE <=9 - 11 only
				// IE returns zIndex value as an integer.
				ret + "" : ret;
			}

			function addGetHookIf(conditionFn, hookFn) {

				// Define the hook, we'll check on the first run if it's really needed.
				return {
					get: function get() {
						if (conditionFn()) {

							// Hook not needed (or it's not possible to use it due
							// to missing dependency), remove it.
							delete this.get;
							return;
						}

						// Hook needed; redefine it so that the support test is not executed again.
						return (this.get = hookFn).apply(this, arguments);
					}
				};
			}

			var

			// Swappable if display is none or starts with table
			// except "table", "table-cell", or "table-caption"
			// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
			rdisplayswap = /^(none|table(?!-c[ea]).+)/,
			    rcustomProp = /^--/,
			    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
			    cssNormalTransform = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			    cssPrefixes = ["Webkit", "Moz", "ms"],
			    emptyStyle = document.createElement("div").style;

			// Return a css property mapped to a potentially vendor prefixed property
			function vendorPropName(name) {

				// Shortcut for names that are not vendor prefixed
				if (name in emptyStyle) {
					return name;
				}

				// Check for vendor prefixed names
				var capName = name[0].toUpperCase() + name.slice(1),
				    i = cssPrefixes.length;

				while (i--) {
					name = cssPrefixes[i] + capName;
					if (name in emptyStyle) {
						return name;
					}
				}
			}

			// Return a property mapped along what jQuery.cssProps suggests or to
			// a vendor prefixed property.
			function finalPropName(name) {
				var ret = jQuery.cssProps[name];
				if (!ret) {
					ret = jQuery.cssProps[name] = vendorPropName(name) || name;
				}
				return ret;
			}

			function setPositiveNumber(elem, value, subtract) {

				// Any relative (+/-) values have already been
				// normalized at this point
				var matches = rcssNum.exec(value);
				return matches ?

				// Guard against undefined "subtract", e.g., when used as in cssHooks
				Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
			}

			function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
				var i,
				    val = 0;

				// If we already have the right measurement, avoid augmentation
				if (extra === (isBorderBox ? "border" : "content")) {
					i = 4;

					// Otherwise initialize for horizontal or vertical properties
				} else {
					i = name === "width" ? 1 : 0;
				}

				for (; i < 4; i += 2) {

					// Both box models exclude margin, so add it if we want it
					if (extra === "margin") {
						val += jQuery.css(elem, extra + cssExpand[i], true, styles);
					}

					if (isBorderBox) {

						// border-box includes padding, so remove it if we want content
						if (extra === "content") {
							val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
						}

						// At this point, extra isn't border nor margin, so remove border
						if (extra !== "margin") {
							val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
						}
					} else {

						// At this point, extra isn't content, so add padding
						val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

						// At this point, extra isn't content nor padding, so add border
						if (extra !== "padding") {
							val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
						}
					}
				}

				return val;
			}

			function getWidthOrHeight(elem, name, extra) {

				// Start with computed style
				var valueIsBorderBox,
				    styles = getStyles(elem),
				    val = curCSS(elem, name, styles),
				    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

				// Computed unit is not pixels. Stop here and return.
				if (rnumnonpx.test(val)) {
					return val;
				}

				// Check for style in case a browser which returns unreliable values
				// for getComputedStyle silently falls back to the reliable elem.style
				valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

				// Fall back to offsetWidth/Height when value is "auto"
				// This happens for inline elements with no explicit setting (gh-3571)
				if (val === "auto") {
					val = elem["offset" + name[0].toUpperCase() + name.slice(1)];
				}

				// Normalize "", auto, and prepare for extra
				val = parseFloat(val) || 0;

				// Use the active box-sizing model to add/subtract irrelevant styles
				return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
			}

			jQuery.extend({

				// Add in style property hooks for overriding the default
				// behavior of getting and setting a style property
				cssHooks: {
					opacity: {
						get: function get(elem, computed) {
							if (computed) {

								// We should always get a number back from opacity
								var ret = curCSS(elem, "opacity");
								return ret === "" ? "1" : ret;
							}
						}
					}
				},

				// Don't automatically add "px" to these possibly-unitless properties
				cssNumber: {
					"animationIterationCount": true,
					"columnCount": true,
					"fillOpacity": true,
					"flexGrow": true,
					"flexShrink": true,
					"fontWeight": true,
					"lineHeight": true,
					"opacity": true,
					"order": true,
					"orphans": true,
					"widows": true,
					"zIndex": true,
					"zoom": true
				},

				// Add in properties whose names you wish to fix before
				// setting or getting the value
				cssProps: {
					"float": "cssFloat"
				},

				// Get and set the style property on a DOM Node
				style: function style(elem, name, value, extra) {

					// Don't set styles on text and comment nodes
					if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
						return;
					}

					// Make sure that we're working with the right name
					var ret,
					    type,
					    hooks,
					    origName = jQuery.camelCase(name),
					    isCustomProp = rcustomProp.test(name),
					    style = elem.style;

					// Make sure that we're working with the right name. We don't
					// want to query the value if it is a CSS custom property
					// since they are user-defined.
					if (!isCustomProp) {
						name = finalPropName(origName);
					}

					// Gets hook for the prefixed version, then unprefixed version
					hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

					// Check if we're setting a value
					if (value !== undefined) {
						type = typeof value === 'undefined' ? 'undefined' : _typeof2(value);

						// Convert "+=" or "-=" to relative numbers (#7345)
						if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
							value = adjustCSS(elem, name, ret);

							// Fixes bug #9237
							type = "number";
						}

						// Make sure that null and NaN values aren't set (#7116)
						if (value == null || value !== value) {
							return;
						}

						// If a number was passed in, add the unit (except for certain CSS properties)
						if (type === "number") {
							value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
						}

						// background-* props affect original clone's values
						if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
							style[name] = "inherit";
						}

						// If a hook was provided, use that value, otherwise just set the specified value
						if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

							if (isCustomProp) {
								style.setProperty(name, value);
							} else {
								style[name] = value;
							}
						}
					} else {

						// If a hook was provided get the non-computed value from there
						if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {

							return ret;
						}

						// Otherwise just get the value from the style object
						return style[name];
					}
				},

				css: function css(elem, name, extra, styles) {
					var val,
					    num,
					    hooks,
					    origName = jQuery.camelCase(name),
					    isCustomProp = rcustomProp.test(name);

					// Make sure that we're working with the right name. We don't
					// want to modify the value if it is a CSS custom property
					// since they are user-defined.
					if (!isCustomProp) {
						name = finalPropName(origName);
					}

					// Try prefixed name followed by the unprefixed name
					hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

					// If a hook was provided get the computed value from there
					if (hooks && "get" in hooks) {
						val = hooks.get(elem, true, extra);
					}

					// Otherwise, if a way to get the computed value exists, use that
					if (val === undefined) {
						val = curCSS(elem, name, styles);
					}

					// Convert "normal" to computed value
					if (val === "normal" && name in cssNormalTransform) {
						val = cssNormalTransform[name];
					}

					// Make numeric if forced or a qualifier was provided and val looks numeric
					if (extra === "" || extra) {
						num = parseFloat(val);
						return extra === true || isFinite(num) ? num || 0 : val;
					}

					return val;
				}
			});

			jQuery.each(["height", "width"], function (i, name) {
				jQuery.cssHooks[name] = {
					get: function get(elem, computed, extra) {
						if (computed) {

							// Certain elements can have dimension info if we invisibly show them
							// but it must have a current display style that would benefit
							return rdisplayswap.test(jQuery.css(elem, "display")) && (

							// Support: Safari 8+
							// Table columns in Safari have non-zero offsetWidth & zero
							// getBoundingClientRect().width unless display is changed.
							// Support: IE <=11 only
							// Running getBoundingClientRect on a disconnected node
							// in IE throws an error.
							!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
								return getWidthOrHeight(elem, name, extra);
							}) : getWidthOrHeight(elem, name, extra);
						}
					},

					set: function set(elem, value, extra) {
						var matches,
						    styles = extra && getStyles(elem),
						    subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);

						// Convert to pixels if value adjustment is needed
						if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {

							elem.style[name] = value;
							value = jQuery.css(elem, name);
						}

						return setPositiveNumber(elem, value, subtract);
					}
				};
			});

			jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
				if (computed) {
					return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
						return elem.getBoundingClientRect().left;
					})) + "px";
				}
			});

			// These hooks are used by animate to expand properties
			jQuery.each({
				margin: "",
				padding: "",
				border: "Width"
			}, function (prefix, suffix) {
				jQuery.cssHooks[prefix + suffix] = {
					expand: function expand(value) {
						var i = 0,
						    expanded = {},


						// Assumes a single number if not a string
						parts = typeof value === "string" ? value.split(" ") : [value];

						for (; i < 4; i++) {
							expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
						}

						return expanded;
					}
				};

				if (!rmargin.test(prefix)) {
					jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
				}
			});

			jQuery.fn.extend({
				css: function css(name, value) {
					return access(this, function (elem, name, value) {
						var styles,
						    len,
						    map = {},
						    i = 0;

						if (Array.isArray(name)) {
							styles = getStyles(elem);
							len = name.length;

							for (; i < len; i++) {
								map[name[i]] = jQuery.css(elem, name[i], false, styles);
							}

							return map;
						}

						return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
					}, name, value, arguments.length > 1);
				}
			});

			function Tween(elem, options, prop, end, easing) {
				return new Tween.prototype.init(elem, options, prop, end, easing);
			}
			jQuery.Tween = Tween;

			Tween.prototype = {
				constructor: Tween,
				init: function init(elem, options, prop, end, easing, unit) {
					this.elem = elem;
					this.prop = prop;
					this.easing = easing || jQuery.easing._default;
					this.options = options;
					this.start = this.now = this.cur();
					this.end = end;
					this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
				},
				cur: function cur() {
					var hooks = Tween.propHooks[this.prop];

					return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
				},
				run: function run(percent) {
					var eased,
					    hooks = Tween.propHooks[this.prop];

					if (this.options.duration) {
						this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
					} else {
						this.pos = eased = percent;
					}
					this.now = (this.end - this.start) * eased + this.start;

					if (this.options.step) {
						this.options.step.call(this.elem, this.now, this);
					}

					if (hooks && hooks.set) {
						hooks.set(this);
					} else {
						Tween.propHooks._default.set(this);
					}
					return this;
				}
			};

			Tween.prototype.init.prototype = Tween.prototype;

			Tween.propHooks = {
				_default: {
					get: function get(tween) {
						var result;

						// Use a property on the element directly when it is not a DOM element,
						// or when there is no matching style property that exists.
						if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
							return tween.elem[tween.prop];
						}

						// Passing an empty string as a 3rd parameter to .css will automatically
						// attempt a parseFloat and fallback to a string if the parse fails.
						// Simple values such as "10px" are parsed to Float;
						// complex values such as "rotate(1rad)" are returned as-is.
						result = jQuery.css(tween.elem, tween.prop, "");

						// Empty strings, null, undefined and "auto" are converted to 0.
						return !result || result === "auto" ? 0 : result;
					},
					set: function set(tween) {

						// Use step hook for back compat.
						// Use cssHook if its there.
						// Use .style if available and use plain properties where available.
						if (jQuery.fx.step[tween.prop]) {
							jQuery.fx.step[tween.prop](tween);
						} else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
							jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
						} else {
							tween.elem[tween.prop] = tween.now;
						}
					}
				}
			};

			// Support: IE <=9 only
			// Panic based approach to setting things on disconnected nodes
			Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
				set: function set(tween) {
					if (tween.elem.nodeType && tween.elem.parentNode) {
						tween.elem[tween.prop] = tween.now;
					}
				}
			};

			jQuery.easing = {
				linear: function linear(p) {
					return p;
				},
				swing: function swing(p) {
					return 0.5 - Math.cos(p * Math.PI) / 2;
				},
				_default: "swing"
			};

			jQuery.fx = Tween.prototype.init;

			// Back compat <1.8 extension point
			jQuery.fx.step = {};

			var fxNow,
			    inProgress,
			    rfxtypes = /^(?:toggle|show|hide)$/,
			    rrun = /queueHooks$/;

			function schedule() {
				if (inProgress) {
					if (document.hidden === false && window.requestAnimationFrame) {
						window.requestAnimationFrame(schedule);
					} else {
						window.setTimeout(schedule, jQuery.fx.interval);
					}

					jQuery.fx.tick();
				}
			}

			// Animations created synchronously will run synchronously
			function createFxNow() {
				window.setTimeout(function () {
					fxNow = undefined;
				});
				return fxNow = jQuery.now();
			}

			// Generate parameters to create a standard animation
			function genFx(type, includeWidth) {
				var which,
				    i = 0,
				    attrs = { height: type };

				// If we include width, step value is 1 to do all cssExpand values,
				// otherwise step value is 2 to skip over Left and Right
				includeWidth = includeWidth ? 1 : 0;
				for (; i < 4; i += 2 - includeWidth) {
					which = cssExpand[i];
					attrs["margin" + which] = attrs["padding" + which] = type;
				}

				if (includeWidth) {
					attrs.opacity = attrs.width = type;
				}

				return attrs;
			}

			function createTween(value, prop, animation) {
				var tween,
				    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
				    index = 0,
				    length = collection.length;
				for (; index < length; index++) {
					if (tween = collection[index].call(animation, prop, value)) {

						// We're done with this property
						return tween;
					}
				}
			}

			function defaultPrefilter(elem, props, opts) {
				var prop,
				    value,
				    toggle,
				    hooks,
				    oldfire,
				    propTween,
				    restoreDisplay,
				    display,
				    isBox = "width" in props || "height" in props,
				    anim = this,
				    orig = {},
				    style = elem.style,
				    hidden = elem.nodeType && isHiddenWithinTree(elem),
				    dataShow = dataPriv.get(elem, "fxshow");

				// Queue-skipping animations hijack the fx hooks
				if (!opts.queue) {
					hooks = jQuery._queueHooks(elem, "fx");
					if (hooks.unqueued == null) {
						hooks.unqueued = 0;
						oldfire = hooks.empty.fire;
						hooks.empty.fire = function () {
							if (!hooks.unqueued) {
								oldfire();
							}
						};
					}
					hooks.unqueued++;

					anim.always(function () {

						// Ensure the complete handler is called before this completes
						anim.always(function () {
							hooks.unqueued--;
							if (!jQuery.queue(elem, "fx").length) {
								hooks.empty.fire();
							}
						});
					});
				}

				// Detect show/hide animations
				for (prop in props) {
					value = props[prop];
					if (rfxtypes.test(value)) {
						delete props[prop];
						toggle = toggle || value === "toggle";
						if (value === (hidden ? "hide" : "show")) {

							// Pretend to be hidden if this is a "show" and
							// there is still data from a stopped show/hide
							if (value === "show" && dataShow && dataShow[prop] !== undefined) {
								hidden = true;

								// Ignore all other no-op show/hide data
							} else {
								continue;
							}
						}
						orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
					}
				}

				// Bail out if this is a no-op like .hide().hide()
				propTween = !jQuery.isEmptyObject(props);
				if (!propTween && jQuery.isEmptyObject(orig)) {
					return;
				}

				// Restrict "overflow" and "display" styles during box animations
				if (isBox && elem.nodeType === 1) {

					// Support: IE <=9 - 11, Edge 12 - 13
					// Record all 3 overflow attributes because IE does not infer the shorthand
					// from identically-valued overflowX and overflowY
					opts.overflow = [style.overflow, style.overflowX, style.overflowY];

					// Identify a display type, preferring old show/hide data over the CSS cascade
					restoreDisplay = dataShow && dataShow.display;
					if (restoreDisplay == null) {
						restoreDisplay = dataPriv.get(elem, "display");
					}
					display = jQuery.css(elem, "display");
					if (display === "none") {
						if (restoreDisplay) {
							display = restoreDisplay;
						} else {

							// Get nonempty value(s) by temporarily forcing visibility
							showHide([elem], true);
							restoreDisplay = elem.style.display || restoreDisplay;
							display = jQuery.css(elem, "display");
							showHide([elem]);
						}
					}

					// Animate inline elements as inline-block
					if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
						if (jQuery.css(elem, "float") === "none") {

							// Restore the original display value at the end of pure show/hide animations
							if (!propTween) {
								anim.done(function () {
									style.display = restoreDisplay;
								});
								if (restoreDisplay == null) {
									display = style.display;
									restoreDisplay = display === "none" ? "" : display;
								}
							}
							style.display = "inline-block";
						}
					}
				}

				if (opts.overflow) {
					style.overflow = "hidden";
					anim.always(function () {
						style.overflow = opts.overflow[0];
						style.overflowX = opts.overflow[1];
						style.overflowY = opts.overflow[2];
					});
				}

				// Implement show/hide animations
				propTween = false;
				for (prop in orig) {

					// General show/hide setup for this element animation
					if (!propTween) {
						if (dataShow) {
							if ("hidden" in dataShow) {
								hidden = dataShow.hidden;
							}
						} else {
							dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
						}

						// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
						if (toggle) {
							dataShow.hidden = !hidden;
						}

						// Show elements before animating them
						if (hidden) {
							showHide([elem], true);
						}

						/* eslint-disable no-loop-func */

						anim.done(function () {

							/* eslint-enable no-loop-func */

							// The final step of a "hide" animation is actually hiding the element
							if (!hidden) {
								showHide([elem]);
							}
							dataPriv.remove(elem, "fxshow");
							for (prop in orig) {
								jQuery.style(elem, prop, orig[prop]);
							}
						});
					}

					// Per-property setup
					propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
					if (!(prop in dataShow)) {
						dataShow[prop] = propTween.start;
						if (hidden) {
							propTween.end = propTween.start;
							propTween.start = 0;
						}
					}
				}
			}

			function propFilter(props, specialEasing) {
				var index, name, easing, value, hooks;

				// camelCase, specialEasing and expand cssHook pass
				for (index in props) {
					name = jQuery.camelCase(index);
					easing = specialEasing[name];
					value = props[index];
					if (Array.isArray(value)) {
						easing = value[1];
						value = props[index] = value[0];
					}

					if (index !== name) {
						props[name] = value;
						delete props[index];
					}

					hooks = jQuery.cssHooks[name];
					if (hooks && "expand" in hooks) {
						value = hooks.expand(value);
						delete props[name];

						// Not quite $.extend, this won't overwrite existing keys.
						// Reusing 'index' because we have the correct "name"
						for (index in value) {
							if (!(index in props)) {
								props[index] = value[index];
								specialEasing[index] = easing;
							}
						}
					} else {
						specialEasing[name] = easing;
					}
				}
			}

			function Animation(elem, properties, options) {
				var result,
				    stopped,
				    index = 0,
				    length = Animation.prefilters.length,
				    deferred = jQuery.Deferred().always(function () {

					// Don't match elem in the :animated selector
					delete tick.elem;
				}),
				    tick = function tick() {
					if (stopped) {
						return false;
					}
					var currentTime = fxNow || createFxNow(),
					    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),


					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					    percent = 1 - temp,
					    index = 0,
					    length = animation.tweens.length;

					for (; index < length; index++) {
						animation.tweens[index].run(percent);
					}

					deferred.notifyWith(elem, [animation, percent, remaining]);

					// If there's more to do, yield
					if (percent < 1 && length) {
						return remaining;
					}

					// If this was an empty animation, synthesize a final progress notification
					if (!length) {
						deferred.notifyWith(elem, [animation, 1, 0]);
					}

					// Resolve the animation and report its conclusion
					deferred.resolveWith(elem, [animation]);
					return false;
				},
				    animation = deferred.promise({
					elem: elem,
					props: jQuery.extend({}, properties),
					opts: jQuery.extend(true, {
						specialEasing: {},
						easing: jQuery.easing._default
					}, options),
					originalProperties: properties,
					originalOptions: options,
					startTime: fxNow || createFxNow(),
					duration: options.duration,
					tweens: [],
					createTween: function createTween(prop, end) {
						var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
						animation.tweens.push(tween);
						return tween;
					},
					stop: function stop(gotoEnd) {
						var index = 0,


						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
						if (stopped) {
							return this;
						}
						stopped = true;
						for (; index < length; index++) {
							animation.tweens[index].run(1);
						}

						// Resolve when we played the last frame; otherwise, reject
						if (gotoEnd) {
							deferred.notifyWith(elem, [animation, 1, 0]);
							deferred.resolveWith(elem, [animation, gotoEnd]);
						} else {
							deferred.rejectWith(elem, [animation, gotoEnd]);
						}
						return this;
					}
				}),
				    props = animation.props;

				propFilter(props, animation.opts.specialEasing);

				for (; index < length; index++) {
					result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
					if (result) {
						if (jQuery.isFunction(result.stop)) {
							jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
						}
						return result;
					}
				}

				jQuery.map(props, createTween, animation);

				if (jQuery.isFunction(animation.opts.start)) {
					animation.opts.start.call(elem, animation);
				}

				// Attach callbacks from options
				animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);

				jQuery.fx.timer(jQuery.extend(tick, {
					elem: elem,
					anim: animation,
					queue: animation.opts.queue
				}));

				return animation;
			}

			jQuery.Animation = jQuery.extend(Animation, {

				tweeners: {
					"*": [function (prop, value) {
						var tween = this.createTween(prop, value);
						adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
						return tween;
					}]
				},

				tweener: function tweener(props, callback) {
					if (jQuery.isFunction(props)) {
						callback = props;
						props = ["*"];
					} else {
						props = props.match(rnothtmlwhite);
					}

					var prop,
					    index = 0,
					    length = props.length;

					for (; index < length; index++) {
						prop = props[index];
						Animation.tweeners[prop] = Animation.tweeners[prop] || [];
						Animation.tweeners[prop].unshift(callback);
					}
				},

				prefilters: [defaultPrefilter],

				prefilter: function prefilter(callback, prepend) {
					if (prepend) {
						Animation.prefilters.unshift(callback);
					} else {
						Animation.prefilters.push(callback);
					}
				}
			});

			jQuery.speed = function (speed, easing, fn) {
				var opt = speed && (typeof speed === 'undefined' ? 'undefined' : _typeof2(speed)) === "object" ? jQuery.extend({}, speed) : {
					complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
					duration: speed,
					easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
				};

				// Go to the end state if fx are off
				if (jQuery.fx.off) {
					opt.duration = 0;
				} else {
					if (typeof opt.duration !== "number") {
						if (opt.duration in jQuery.fx.speeds) {
							opt.duration = jQuery.fx.speeds[opt.duration];
						} else {
							opt.duration = jQuery.fx.speeds._default;
						}
					}
				}

				// Normalize opt.queue - true/undefined/null -> "fx"
				if (opt.queue == null || opt.queue === true) {
					opt.queue = "fx";
				}

				// Queueing
				opt.old = opt.complete;

				opt.complete = function () {
					if (jQuery.isFunction(opt.old)) {
						opt.old.call(this);
					}

					if (opt.queue) {
						jQuery.dequeue(this, opt.queue);
					}
				};

				return opt;
			};

			jQuery.fn.extend({
				fadeTo: function fadeTo(speed, to, easing, callback) {

					// Show any hidden elements after setting opacity to 0
					return this.filter(isHiddenWithinTree).css("opacity", 0).show()

					// Animate to the value specified
					.end().animate({ opacity: to }, speed, easing, callback);
				},
				animate: function animate(prop, speed, easing, callback) {
					var empty = jQuery.isEmptyObject(prop),
					    optall = jQuery.speed(speed, easing, callback),
					    doAnimation = function doAnimation() {

						// Operate on a copy of prop so per-property easing won't be lost
						var anim = Animation(this, jQuery.extend({}, prop), optall);

						// Empty animations, or finishing resolves immediately
						if (empty || dataPriv.get(this, "finish")) {
							anim.stop(true);
						}
					};
					doAnimation.finish = doAnimation;

					return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
				},
				stop: function stop(type, clearQueue, gotoEnd) {
					var stopQueue = function stopQueue(hooks) {
						var stop = hooks.stop;
						delete hooks.stop;
						stop(gotoEnd);
					};

					if (typeof type !== "string") {
						gotoEnd = clearQueue;
						clearQueue = type;
						type = undefined;
					}
					if (clearQueue && type !== false) {
						this.queue(type || "fx", []);
					}

					return this.each(function () {
						var dequeue = true,
						    index = type != null && type + "queueHooks",
						    timers = jQuery.timers,
						    data = dataPriv.get(this);

						if (index) {
							if (data[index] && data[index].stop) {
								stopQueue(data[index]);
							}
						} else {
							for (index in data) {
								if (data[index] && data[index].stop && rrun.test(index)) {
									stopQueue(data[index]);
								}
							}
						}

						for (index = timers.length; index--;) {
							if (timers[index].elem === this && (type == null || timers[index].queue === type)) {

								timers[index].anim.stop(gotoEnd);
								dequeue = false;
								timers.splice(index, 1);
							}
						}

						// Start the next in the queue if the last step wasn't forced.
						// Timers currently will call their complete callbacks, which
						// will dequeue but only if they were gotoEnd.
						if (dequeue || !gotoEnd) {
							jQuery.dequeue(this, type);
						}
					});
				},
				finish: function finish(type) {
					if (type !== false) {
						type = type || "fx";
					}
					return this.each(function () {
						var index,
						    data = dataPriv.get(this),
						    queue = data[type + "queue"],
						    hooks = data[type + "queueHooks"],
						    timers = jQuery.timers,
						    length = queue ? queue.length : 0;

						// Enable finishing flag on private data
						data.finish = true;

						// Empty the queue first
						jQuery.queue(this, type, []);

						if (hooks && hooks.stop) {
							hooks.stop.call(this, true);
						}

						// Look for any active animations, and finish them
						for (index = timers.length; index--;) {
							if (timers[index].elem === this && timers[index].queue === type) {
								timers[index].anim.stop(true);
								timers.splice(index, 1);
							}
						}

						// Look for any animations in the old queue and finish them
						for (index = 0; index < length; index++) {
							if (queue[index] && queue[index].finish) {
								queue[index].finish.call(this);
							}
						}

						// Turn off finishing flag
						delete data.finish;
					});
				}
			});

			jQuery.each(["toggle", "show", "hide"], function (i, name) {
				var cssFn = jQuery.fn[name];
				jQuery.fn[name] = function (speed, easing, callback) {
					return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
				};
			});

			// Generate shortcuts for custom animations
			jQuery.each({
				slideDown: genFx("show"),
				slideUp: genFx("hide"),
				slideToggle: genFx("toggle"),
				fadeIn: { opacity: "show" },
				fadeOut: { opacity: "hide" },
				fadeToggle: { opacity: "toggle" }
			}, function (name, props) {
				jQuery.fn[name] = function (speed, easing, callback) {
					return this.animate(props, speed, easing, callback);
				};
			});

			jQuery.timers = [];
			jQuery.fx.tick = function () {
				var timer,
				    i = 0,
				    timers = jQuery.timers;

				fxNow = jQuery.now();

				for (; i < timers.length; i++) {
					timer = timers[i];

					// Run the timer and safely remove it when done (allowing for external removal)
					if (!timer() && timers[i] === timer) {
						timers.splice(i--, 1);
					}
				}

				if (!timers.length) {
					jQuery.fx.stop();
				}
				fxNow = undefined;
			};

			jQuery.fx.timer = function (timer) {
				jQuery.timers.push(timer);
				jQuery.fx.start();
			};

			jQuery.fx.interval = 13;
			jQuery.fx.start = function () {
				if (inProgress) {
					return;
				}

				inProgress = true;
				schedule();
			};

			jQuery.fx.stop = function () {
				inProgress = null;
			};

			jQuery.fx.speeds = {
				slow: 600,
				fast: 200,

				// Default speed
				_default: 400
			};

			// Based off of the plugin by Clint Helfers, with permission.
			// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
			jQuery.fn.delay = function (time, type) {
				time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
				type = type || "fx";

				return this.queue(type, function (next, hooks) {
					var timeout = window.setTimeout(next, time);
					hooks.stop = function () {
						window.clearTimeout(timeout);
					};
				});
			};

			(function () {
				var input = document.createElement("input"),
				    select = document.createElement("select"),
				    opt = select.appendChild(document.createElement("option"));

				input.type = "checkbox";

				// Support: Android <=4.3 only
				// Default value for a checkbox should be "on"
				support.checkOn = input.value !== "";

				// Support: IE <=11 only
				// Must access selectedIndex to make default options select
				support.optSelected = opt.selected;

				// Support: IE <=11 only
				// An input loses its value after becoming a radio
				input = document.createElement("input");
				input.value = "t";
				input.type = "radio";
				support.radioValue = input.value === "t";
			})();

			var boolHook,
			    attrHandle = jQuery.expr.attrHandle;

			jQuery.fn.extend({
				attr: function attr(name, value) {
					return access(this, jQuery.attr, name, value, arguments.length > 1);
				},

				removeAttr: function removeAttr(name) {
					return this.each(function () {
						jQuery.removeAttr(this, name);
					});
				}
			});

			jQuery.extend({
				attr: function attr(elem, name, value) {
					var ret,
					    hooks,
					    nType = elem.nodeType;

					// Don't get/set attributes on text, comment and attribute nodes
					if (nType === 3 || nType === 8 || nType === 2) {
						return;
					}

					// Fallback to prop when attributes are not supported
					if (typeof elem.getAttribute === "undefined") {
						return jQuery.prop(elem, name, value);
					}

					// Attribute hooks are determined by the lowercase version
					// Grab necessary hook if one is defined
					if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
						hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
					}

					if (value !== undefined) {
						if (value === null) {
							jQuery.removeAttr(elem, name);
							return;
						}

						if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
							return ret;
						}

						elem.setAttribute(name, value + "");
						return value;
					}

					if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
						return ret;
					}

					ret = jQuery.find.attr(elem, name);

					// Non-existent attributes return null, we normalize to undefined
					return ret == null ? undefined : ret;
				},

				attrHooks: {
					type: {
						set: function set(elem, value) {
							if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
								var val = elem.value;
								elem.setAttribute("type", value);
								if (val) {
									elem.value = val;
								}
								return value;
							}
						}
					}
				},

				removeAttr: function removeAttr(elem, value) {
					var name,
					    i = 0,


					// Attribute names can contain non-HTML whitespace characters
					// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
					attrNames = value && value.match(rnothtmlwhite);

					if (attrNames && elem.nodeType === 1) {
						while (name = attrNames[i++]) {
							elem.removeAttribute(name);
						}
					}
				}
			});

			// Hooks for boolean attributes
			boolHook = {
				set: function set(elem, value, name) {
					if (value === false) {

						// Remove boolean attributes when set to false
						jQuery.removeAttr(elem, name);
					} else {
						elem.setAttribute(name, name);
					}
					return name;
				}
			};

			jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
				var getter = attrHandle[name] || jQuery.find.attr;

				attrHandle[name] = function (elem, name, isXML) {
					var ret,
					    handle,
					    lowercaseName = name.toLowerCase();

					if (!isXML) {

						// Avoid an infinite loop by temporarily removing this function from the getter
						handle = attrHandle[lowercaseName];
						attrHandle[lowercaseName] = ret;
						ret = getter(elem, name, isXML) != null ? lowercaseName : null;
						attrHandle[lowercaseName] = handle;
					}
					return ret;
				};
			});

			var rfocusable = /^(?:input|select|textarea|button)$/i,
			    rclickable = /^(?:a|area)$/i;

			jQuery.fn.extend({
				prop: function prop(name, value) {
					return access(this, jQuery.prop, name, value, arguments.length > 1);
				},

				removeProp: function removeProp(name) {
					return this.each(function () {
						delete this[jQuery.propFix[name] || name];
					});
				}
			});

			jQuery.extend({
				prop: function prop(elem, name, value) {
					var ret,
					    hooks,
					    nType = elem.nodeType;

					// Don't get/set properties on text, comment and attribute nodes
					if (nType === 3 || nType === 8 || nType === 2) {
						return;
					}

					if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

						// Fix name and attach hooks
						name = jQuery.propFix[name] || name;
						hooks = jQuery.propHooks[name];
					}

					if (value !== undefined) {
						if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
							return ret;
						}

						return elem[name] = value;
					}

					if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
						return ret;
					}

					return elem[name];
				},

				propHooks: {
					tabIndex: {
						get: function get(elem) {

							// Support: IE <=9 - 11 only
							// elem.tabIndex doesn't always return the
							// correct value when it hasn't been explicitly set
							// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
							// Use proper attribute retrieval(#12072)
							var tabindex = jQuery.find.attr(elem, "tabindex");

							if (tabindex) {
								return parseInt(tabindex, 10);
							}

							if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
								return 0;
							}

							return -1;
						}
					}
				},

				propFix: {
					"for": "htmlFor",
					"class": "className"
				}
			});

			// Support: IE <=11 only
			// Accessing the selectedIndex property
			// forces the browser to respect setting selected
			// on the option
			// The getter ensures a default option is selected
			// when in an optgroup
			// eslint rule "no-unused-expressions" is disabled for this code
			// since it considers such accessions noop
			if (!support.optSelected) {
				jQuery.propHooks.selected = {
					get: function get(elem) {

						/* eslint no-unused-expressions: "off" */

						var parent = elem.parentNode;
						if (parent && parent.parentNode) {
							parent.parentNode.selectedIndex;
						}
						return null;
					},
					set: function set(elem) {

						/* eslint no-unused-expressions: "off" */

						var parent = elem.parentNode;
						if (parent) {
							parent.selectedIndex;

							if (parent.parentNode) {
								parent.parentNode.selectedIndex;
							}
						}
					}
				};
			}

			jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
				jQuery.propFix[this.toLowerCase()] = this;
			});

			// Strip and collapse whitespace according to HTML spec
			// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
			function stripAndCollapse(value) {
				var tokens = value.match(rnothtmlwhite) || [];
				return tokens.join(" ");
			}

			function getClass(elem) {
				return elem.getAttribute && elem.getAttribute("class") || "";
			}

			jQuery.fn.extend({
				addClass: function addClass(value) {
					var classes,
					    elem,
					    cur,
					    curValue,
					    clazz,
					    j,
					    finalValue,
					    i = 0;

					if (jQuery.isFunction(value)) {
						return this.each(function (j) {
							jQuery(this).addClass(value.call(this, j, getClass(this)));
						});
					}

					if (typeof value === "string" && value) {
						classes = value.match(rnothtmlwhite) || [];

						while (elem = this[i++]) {
							curValue = getClass(elem);
							cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

							if (cur) {
								j = 0;
								while (clazz = classes[j++]) {
									if (cur.indexOf(" " + clazz + " ") < 0) {
										cur += clazz + " ";
									}
								}

								// Only assign if different to avoid unneeded rendering.
								finalValue = stripAndCollapse(cur);
								if (curValue !== finalValue) {
									elem.setAttribute("class", finalValue);
								}
							}
						}
					}

					return this;
				},

				removeClass: function removeClass(value) {
					var classes,
					    elem,
					    cur,
					    curValue,
					    clazz,
					    j,
					    finalValue,
					    i = 0;

					if (jQuery.isFunction(value)) {
						return this.each(function (j) {
							jQuery(this).removeClass(value.call(this, j, getClass(this)));
						});
					}

					if (!arguments.length) {
						return this.attr("class", "");
					}

					if (typeof value === "string" && value) {
						classes = value.match(rnothtmlwhite) || [];

						while (elem = this[i++]) {
							curValue = getClass(elem);

							// This expression is here for better compressibility (see addClass)
							cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

							if (cur) {
								j = 0;
								while (clazz = classes[j++]) {

									// Remove *all* instances
									while (cur.indexOf(" " + clazz + " ") > -1) {
										cur = cur.replace(" " + clazz + " ", " ");
									}
								}

								// Only assign if different to avoid unneeded rendering.
								finalValue = stripAndCollapse(cur);
								if (curValue !== finalValue) {
									elem.setAttribute("class", finalValue);
								}
							}
						}
					}

					return this;
				},

				toggleClass: function toggleClass(value, stateVal) {
					var type = typeof value === 'undefined' ? 'undefined' : _typeof2(value);

					if (typeof stateVal === "boolean" && type === "string") {
						return stateVal ? this.addClass(value) : this.removeClass(value);
					}

					if (jQuery.isFunction(value)) {
						return this.each(function (i) {
							jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
						});
					}

					return this.each(function () {
						var className, i, self, classNames;

						if (type === "string") {

							// Toggle individual class names
							i = 0;
							self = jQuery(this);
							classNames = value.match(rnothtmlwhite) || [];

							while (className = classNames[i++]) {

								// Check each className given, space separated list
								if (self.hasClass(className)) {
									self.removeClass(className);
								} else {
									self.addClass(className);
								}
							}

							// Toggle whole class name
						} else if (value === undefined || type === "boolean") {
							className = getClass(this);
							if (className) {

								// Store className if set
								dataPriv.set(this, "__className__", className);
							}

							// If the element has a class name or if we're passed `false`,
							// then remove the whole classname (if there was one, the above saved it).
							// Otherwise bring back whatever was previously saved (if anything),
							// falling back to the empty string if nothing was stored.
							if (this.setAttribute) {
								this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
							}
						}
					});
				},

				hasClass: function hasClass(selector) {
					var className,
					    elem,
					    i = 0;

					className = " " + selector + " ";
					while (elem = this[i++]) {
						if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
							return true;
						}
					}

					return false;
				}
			});

			var rreturn = /\r/g;

			jQuery.fn.extend({
				val: function val(value) {
					var hooks,
					    ret,
					    isFunction,
					    elem = this[0];

					if (!arguments.length) {
						if (elem) {
							hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

							if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
								return ret;
							}

							ret = elem.value;

							// Handle most common string cases
							if (typeof ret === "string") {
								return ret.replace(rreturn, "");
							}

							// Handle cases where value is null/undef or number
							return ret == null ? "" : ret;
						}

						return;
					}

					isFunction = jQuery.isFunction(value);

					return this.each(function (i) {
						var val;

						if (this.nodeType !== 1) {
							return;
						}

						if (isFunction) {
							val = value.call(this, i, jQuery(this).val());
						} else {
							val = value;
						}

						// Treat null/undefined as ""; convert numbers to string
						if (val == null) {
							val = "";
						} else if (typeof val === "number") {
							val += "";
						} else if (Array.isArray(val)) {
							val = jQuery.map(val, function (value) {
								return value == null ? "" : value + "";
							});
						}

						hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

						// If set returns undefined, fall back to normal setting
						if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
							this.value = val;
						}
					});
				}
			});

			jQuery.extend({
				valHooks: {
					option: {
						get: function get(elem) {

							var val = jQuery.find.attr(elem, "value");
							return val != null ? val :

							// Support: IE <=10 - 11 only
							// option.text throws exceptions (#14686, #14858)
							// Strip and collapse whitespace
							// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
							stripAndCollapse(jQuery.text(elem));
						}
					},
					select: {
						get: function get(elem) {
							var value,
							    option,
							    i,
							    options = elem.options,
							    index = elem.selectedIndex,
							    one = elem.type === "select-one",
							    values = one ? null : [],
							    max = one ? index + 1 : options.length;

							if (index < 0) {
								i = max;
							} else {
								i = one ? index : 0;
							}

							// Loop through all the selected options
							for (; i < max; i++) {
								option = options[i];

								// Support: IE <=9 only
								// IE8-9 doesn't update selected after form reset (#2551)
								if ((option.selected || i === index) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {

									// Get the specific value for the option
									value = jQuery(option).val();

									// We don't need an array for one selects
									if (one) {
										return value;
									}

									// Multi-Selects return an array
									values.push(value);
								}
							}

							return values;
						},

						set: function set(elem, value) {
							var optionSet,
							    option,
							    options = elem.options,
							    values = jQuery.makeArray(value),
							    i = options.length;

							while (i--) {
								option = options[i];

								/* eslint-disable no-cond-assign */

								if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
									optionSet = true;
								}

								/* eslint-enable no-cond-assign */
							}

							// Force browsers to behave consistently when non-matching value is set
							if (!optionSet) {
								elem.selectedIndex = -1;
							}
							return values;
						}
					}
				}
			});

			// Radios and checkboxes getter/setter
			jQuery.each(["radio", "checkbox"], function () {
				jQuery.valHooks[this] = {
					set: function set(elem, value) {
						if (Array.isArray(value)) {
							return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
						}
					}
				};
				if (!support.checkOn) {
					jQuery.valHooks[this].get = function (elem) {
						return elem.getAttribute("value") === null ? "on" : elem.value;
					};
				}
			});

			// Return jQuery for attributes-only inclusion


			var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

			jQuery.extend(jQuery.event, {

				trigger: function trigger(event, data, elem, onlyHandlers) {

					var i,
					    cur,
					    tmp,
					    bubbleType,
					    ontype,
					    handle,
					    special,
					    eventPath = [elem || document],
					    type = hasOwn.call(event, "type") ? event.type : event,
					    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

					cur = tmp = elem = elem || document;

					// Don't do events on text and comment nodes
					if (elem.nodeType === 3 || elem.nodeType === 8) {
						return;
					}

					// focus/blur morphs to focusin/out; ensure we're not firing them right now
					if (rfocusMorph.test(type + jQuery.event.triggered)) {
						return;
					}

					if (type.indexOf(".") > -1) {

						// Namespaced trigger; create a regexp to match event type in handle()
						namespaces = type.split(".");
						type = namespaces.shift();
						namespaces.sort();
					}
					ontype = type.indexOf(":") < 0 && "on" + type;

					// Caller can pass in a jQuery.Event object, Object, or just an event type string
					event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === 'undefined' ? 'undefined' : _typeof2(event)) === "object" && event);

					// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
					event.isTrigger = onlyHandlers ? 2 : 3;
					event.namespace = namespaces.join(".");
					event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

					// Clean up the event in case it is being reused
					event.result = undefined;
					if (!event.target) {
						event.target = elem;
					}

					// Clone any incoming data and prepend the event, creating the handler arg list
					data = data == null ? [event] : jQuery.makeArray(data, [event]);

					// Allow special events to draw outside the lines
					special = jQuery.event.special[type] || {};
					if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
						return;
					}

					// Determine event propagation path in advance, per W3C events spec (#9951)
					// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
					if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

						bubbleType = special.delegateType || type;
						if (!rfocusMorph.test(bubbleType + type)) {
							cur = cur.parentNode;
						}
						for (; cur; cur = cur.parentNode) {
							eventPath.push(cur);
							tmp = cur;
						}

						// Only add window if we got to document (e.g., not plain obj or detached DOM)
						if (tmp === (elem.ownerDocument || document)) {
							eventPath.push(tmp.defaultView || tmp.parentWindow || window);
						}
					}

					// Fire handlers on the event path
					i = 0;
					while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

						event.type = i > 1 ? bubbleType : special.bindType || type;

						// jQuery handler
						handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
						if (handle) {
							handle.apply(cur, data);
						}

						// Native handler
						handle = ontype && cur[ontype];
						if (handle && handle.apply && acceptData(cur)) {
							event.result = handle.apply(cur, data);
							if (event.result === false) {
								event.preventDefault();
							}
						}
					}
					event.type = type;

					// If nobody prevented the default action, do it now
					if (!onlyHandlers && !event.isDefaultPrevented()) {

						if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {

							// Call a native DOM method on the target with the same name as the event.
							// Don't do default actions on window, that's where global variables be (#6170)
							if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {

								// Don't re-trigger an onFOO event when we call its FOO() method
								tmp = elem[ontype];

								if (tmp) {
									elem[ontype] = null;
								}

								// Prevent re-triggering of the same event, since we already bubbled it above
								jQuery.event.triggered = type;
								elem[type]();
								jQuery.event.triggered = undefined;

								if (tmp) {
									elem[ontype] = tmp;
								}
							}
						}
					}

					return event.result;
				},

				// Piggyback on a donor event to simulate a different one
				// Used only for `focus(in | out)` events
				simulate: function simulate(type, elem, event) {
					var e = jQuery.extend(new jQuery.Event(), event, {
						type: type,
						isSimulated: true
					});

					jQuery.event.trigger(e, null, elem);
				}

			});

			jQuery.fn.extend({

				trigger: function trigger(type, data) {
					return this.each(function () {
						jQuery.event.trigger(type, data, this);
					});
				},
				triggerHandler: function triggerHandler(type, data) {
					var elem = this[0];
					if (elem) {
						return jQuery.event.trigger(type, data, elem, true);
					}
				}
			});

			jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {

				// Handle event binding
				jQuery.fn[name] = function (data, fn) {
					return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
				};
			});

			jQuery.fn.extend({
				hover: function hover(fnOver, fnOut) {
					return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
				}
			});

			support.focusin = "onfocusin" in window;

			// Support: Firefox <=44
			// Firefox doesn't have focus(in | out) events
			// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
			//
			// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
			// focus(in | out) events fire after focus & blur events,
			// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
			// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
			if (!support.focusin) {
				jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

					// Attach a single capturing handler on the document while someone wants focusin/focusout
					var handler = function handler(event) {
						jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
					};

					jQuery.event.special[fix] = {
						setup: function setup() {
							var doc = this.ownerDocument || this,
							    attaches = dataPriv.access(doc, fix);

							if (!attaches) {
								doc.addEventListener(orig, handler, true);
							}
							dataPriv.access(doc, fix, (attaches || 0) + 1);
						},
						teardown: function teardown() {
							var doc = this.ownerDocument || this,
							    attaches = dataPriv.access(doc, fix) - 1;

							if (!attaches) {
								doc.removeEventListener(orig, handler, true);
								dataPriv.remove(doc, fix);
							} else {
								dataPriv.access(doc, fix, attaches);
							}
						}
					};
				});
			}
			var location = window.location;

			var nonce = jQuery.now();

			var rquery = /\?/;

			// Cross-browser xml parsing
			jQuery.parseXML = function (data) {
				var xml;
				if (!data || typeof data !== "string") {
					return null;
				}

				// Support: IE 9 - 11 only
				// IE throws on parseFromString with invalid input.
				try {
					xml = new window.DOMParser().parseFromString(data, "text/xml");
				} catch (e) {
					xml = undefined;
				}

				if (!xml || xml.getElementsByTagName("parsererror").length) {
					jQuery.error("Invalid XML: " + data);
				}
				return xml;
			};

			var rbracket = /\[\]$/,
			    rCRLF = /\r?\n/g,
			    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
			    rsubmittable = /^(?:input|select|textarea|keygen)/i;

			function buildParams(prefix, obj, traditional, add) {
				var name;

				if (Array.isArray(obj)) {

					// Serialize array item.
					jQuery.each(obj, function (i, v) {
						if (traditional || rbracket.test(prefix)) {

							// Treat each array item as a scalar.
							add(prefix, v);
						} else {

							// Item is non-scalar (array or object), encode its numeric index.
							buildParams(prefix + "[" + ((typeof v === 'undefined' ? 'undefined' : _typeof2(v)) === "object" && v != null ? i : "") + "]", v, traditional, add);
						}
					});
				} else if (!traditional && jQuery.type(obj) === "object") {

					// Serialize object item.
					for (name in obj) {
						buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
					}
				} else {

					// Serialize scalar item.
					add(prefix, obj);
				}
			}

			// Serialize an array of form elements or a set of
			// key/values into a query string
			jQuery.param = function (a, traditional) {
				var prefix,
				    s = [],
				    add = function add(key, valueOrFunction) {

					// If value is a function, invoke it and use its return value
					var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;

					s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
				};

				// If an array was passed in, assume that it is an array of form elements.
				if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {

					// Serialize the form elements
					jQuery.each(a, function () {
						add(this.name, this.value);
					});
				} else {

					// If traditional, encode the "old" way (the way 1.3.2 or older
					// did it), otherwise encode params recursively.
					for (prefix in a) {
						buildParams(prefix, a[prefix], traditional, add);
					}
				}

				// Return the resulting serialization
				return s.join("&");
			};

			jQuery.fn.extend({
				serialize: function serialize() {
					return jQuery.param(this.serializeArray());
				},
				serializeArray: function serializeArray() {
					return this.map(function () {

						// Can add propHook for "elements" to filter or add form elements
						var elements = jQuery.prop(this, "elements");
						return elements ? jQuery.makeArray(elements) : this;
					}).filter(function () {
						var type = this.type;

						// Use .is( ":disabled" ) so that fieldset[disabled] works
						return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
					}).map(function (i, elem) {
						var val = jQuery(this).val();

						if (val == null) {
							return null;
						}

						if (Array.isArray(val)) {
							return jQuery.map(val, function (val) {
								return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
							});
						}

						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					}).get();
				}
			});

			var r20 = /%20/g,
			    rhash = /#.*$/,
			    rantiCache = /([?&])_=[^&]*/,
			    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,


			// #7653, #8125, #8152: local protocol detection
			rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			    rnoContent = /^(?:GET|HEAD)$/,
			    rprotocol = /^\/\//,


			/* Prefilters
    * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
    * 2) These are called:
    *    - BEFORE asking for a transport
    *    - AFTER param serialization (s.data is a string if s.processData is true)
    * 3) key is the dataType
    * 4) the catchall symbol "*" can be used
    * 5) execution will start with transport dataType and THEN continue down to "*" if needed
    */
			prefilters = {},


			/* Transports bindings
    * 1) key is the dataType
    * 2) the catchall symbol "*" can be used
    * 3) selection will start with transport dataType and THEN go to "*" if needed
    */
			transports = {},


			// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
			allTypes = "*/".concat("*"),


			// Anchor tag for parsing the document origin
			originAnchor = document.createElement("a");
			originAnchor.href = location.href;

			// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
			function addToPrefiltersOrTransports(structure) {

				// dataTypeExpression is optional and defaults to "*"
				return function (dataTypeExpression, func) {

					if (typeof dataTypeExpression !== "string") {
						func = dataTypeExpression;
						dataTypeExpression = "*";
					}

					var dataType,
					    i = 0,
					    dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

					if (jQuery.isFunction(func)) {

						// For each dataType in the dataTypeExpression
						while (dataType = dataTypes[i++]) {

							// Prepend if requested
							if (dataType[0] === "+") {
								dataType = dataType.slice(1) || "*";
								(structure[dataType] = structure[dataType] || []).unshift(func);

								// Otherwise append
							} else {
								(structure[dataType] = structure[dataType] || []).push(func);
							}
						}
					}
				};
			}

			// Base inspection function for prefilters and transports
			function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

				var inspected = {},
				    seekingTransport = structure === transports;

				function inspect(dataType) {
					var selected;
					inspected[dataType] = true;
					jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
						var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
						if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

							options.dataTypes.unshift(dataTypeOrTransport);
							inspect(dataTypeOrTransport);
							return false;
						} else if (seekingTransport) {
							return !(selected = dataTypeOrTransport);
						}
					});
					return selected;
				}

				return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
			}

			// A special extend for ajax options
			// that takes "flat" options (not to be deep extended)
			// Fixes #9887
			function ajaxExtend(target, src) {
				var key,
				    deep,
				    flatOptions = jQuery.ajaxSettings.flatOptions || {};

				for (key in src) {
					if (src[key] !== undefined) {
						(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
					}
				}
				if (deep) {
					jQuery.extend(true, target, deep);
				}

				return target;
			}

			/* Handles responses to an ajax request:
    * - finds the right dataType (mediates between content-type and expected dataType)
    * - returns the corresponding response
    */
			function ajaxHandleResponses(s, jqXHR, responses) {

				var ct,
				    type,
				    finalDataType,
				    firstDataType,
				    contents = s.contents,
				    dataTypes = s.dataTypes;

				// Remove auto dataType and get content-type in the process
				while (dataTypes[0] === "*") {
					dataTypes.shift();
					if (ct === undefined) {
						ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
					}
				}

				// Check if we're dealing with a known content-type
				if (ct) {
					for (type in contents) {
						if (contents[type] && contents[type].test(ct)) {
							dataTypes.unshift(type);
							break;
						}
					}
				}

				// Check to see if we have a response for the expected dataType
				if (dataTypes[0] in responses) {
					finalDataType = dataTypes[0];
				} else {

					// Try convertible dataTypes
					for (type in responses) {
						if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
							finalDataType = type;
							break;
						}
						if (!firstDataType) {
							firstDataType = type;
						}
					}

					// Or just use first one
					finalDataType = finalDataType || firstDataType;
				}

				// If we found a dataType
				// We add the dataType to the list if needed
				// and return the corresponding response
				if (finalDataType) {
					if (finalDataType !== dataTypes[0]) {
						dataTypes.unshift(finalDataType);
					}
					return responses[finalDataType];
				}
			}

			/* Chain conversions given the request and the original response
    * Also sets the responseXXX fields on the jqXHR instance
    */
			function ajaxConvert(s, response, jqXHR, isSuccess) {
				var conv2,
				    current,
				    conv,
				    tmp,
				    prev,
				    converters = {},


				// Work with a copy of dataTypes in case we need to modify it for conversion
				dataTypes = s.dataTypes.slice();

				// Create converters map with lowercased keys
				if (dataTypes[1]) {
					for (conv in s.converters) {
						converters[conv.toLowerCase()] = s.converters[conv];
					}
				}

				current = dataTypes.shift();

				// Convert to each sequential dataType
				while (current) {

					if (s.responseFields[current]) {
						jqXHR[s.responseFields[current]] = response;
					}

					// Apply the dataFilter if provided
					if (!prev && isSuccess && s.dataFilter) {
						response = s.dataFilter(response, s.dataType);
					}

					prev = current;
					current = dataTypes.shift();

					if (current) {

						// There's only work to do if current dataType is non-auto
						if (current === "*") {

							current = prev;

							// Convert response if prev dataType is non-auto and differs from current
						} else if (prev !== "*" && prev !== current) {

							// Seek a direct converter
							conv = converters[prev + " " + current] || converters["* " + current];

							// If none found, seek a pair
							if (!conv) {
								for (conv2 in converters) {

									// If conv2 outputs current
									tmp = conv2.split(" ");
									if (tmp[1] === current) {

										// If prev can be converted to accepted input
										conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
										if (conv) {

											// Condense equivalence converters
											if (conv === true) {
												conv = converters[conv2];

												// Otherwise, insert the intermediate dataType
											} else if (converters[conv2] !== true) {
												current = tmp[0];
												dataTypes.unshift(tmp[1]);
											}
											break;
										}
									}
								}
							}

							// Apply converter (if not an equivalence)
							if (conv !== true) {

								// Unless errors are allowed to bubble, catch and return them
								if (conv && s.throws) {
									response = conv(response);
								} else {
									try {
										response = conv(response);
									} catch (e) {
										return {
											state: "parsererror",
											error: conv ? e : "No conversion from " + prev + " to " + current
										};
									}
								}
							}
						}
					}
				}

				return { state: "success", data: response };
			}

			jQuery.extend({

				// Counter for holding the number of active queries
				active: 0,

				// Last-Modified header cache for next request
				lastModified: {},
				etag: {},

				ajaxSettings: {
					url: location.href,
					type: "GET",
					isLocal: rlocalProtocol.test(location.protocol),
					global: true,
					processData: true,
					async: true,
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",

					/*
     timeout: 0,
     data: null,
     dataType: null,
     username: null,
     password: null,
     cache: null,
     throws: false,
     traditional: false,
     headers: {},
     */

					accepts: {
						"*": allTypes,
						text: "text/plain",
						html: "text/html",
						xml: "application/xml, text/xml",
						json: "application/json, text/javascript"
					},

					contents: {
						xml: /\bxml\b/,
						html: /\bhtml/,
						json: /\bjson\b/
					},

					responseFields: {
						xml: "responseXML",
						text: "responseText",
						json: "responseJSON"
					},

					// Data converters
					// Keys separate source (or catchall "*") and destination types with a single space
					converters: {

						// Convert anything to text
						"* text": String,

						// Text to html (true = no transformation)
						"text html": true,

						// Evaluate text as a json expression
						"text json": JSON.parse,

						// Parse text as xml
						"text xml": jQuery.parseXML
					},

					// For options that shouldn't be deep extended:
					// you can add your own custom options here if
					// and when you create one that shouldn't be
					// deep extended (see ajaxExtend)
					flatOptions: {
						url: true,
						context: true
					}
				},

				// Creates a full fledged settings object into target
				// with both ajaxSettings and settings fields.
				// If target is omitted, writes into ajaxSettings.
				ajaxSetup: function ajaxSetup(target, settings) {
					return settings ?

					// Building a settings object
					ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

					// Extending ajaxSettings
					ajaxExtend(jQuery.ajaxSettings, target);
				},

				ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
				ajaxTransport: addToPrefiltersOrTransports(transports),

				// Main method
				ajax: function ajax(url, options) {

					// If url is an object, simulate pre-1.5 signature
					if ((typeof url === 'undefined' ? 'undefined' : _typeof2(url)) === "object") {
						options = url;
						url = undefined;
					}

					// Force options to be an object
					options = options || {};

					var transport,


					// URL without anti-cache param
					cacheURL,


					// Response headers
					responseHeadersString,
					    responseHeaders,


					// timeout handle
					timeoutTimer,


					// Url cleanup var
					urlAnchor,


					// Request state (becomes false upon send and true upon completion)
					completed,


					// To know if global events are to be dispatched
					fireGlobals,


					// Loop variable
					i,


					// uncached part of the url
					uncached,


					// Create the final options object
					s = jQuery.ajaxSetup({}, options),


					// Callbacks context
					callbackContext = s.context || s,


					// Context for global events is callbackContext if it is a DOM node or jQuery collection
					globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,


					// Deferreds
					deferred = jQuery.Deferred(),
					    completeDeferred = jQuery.Callbacks("once memory"),


					// Status-dependent callbacks
					_statusCode = s.statusCode || {},


					// Headers (they are sent all at once)
					requestHeaders = {},
					    requestHeadersNames = {},


					// Default abort message
					strAbort = "canceled",


					// Fake xhr
					jqXHR = {
						readyState: 0,

						// Builds headers hashtable if needed
						getResponseHeader: function getResponseHeader(key) {
							var match;
							if (completed) {
								if (!responseHeaders) {
									responseHeaders = {};
									while (match = rheaders.exec(responseHeadersString)) {
										responseHeaders[match[1].toLowerCase()] = match[2];
									}
								}
								match = responseHeaders[key.toLowerCase()];
							}
							return match == null ? null : match;
						},

						// Raw string
						getAllResponseHeaders: function getAllResponseHeaders() {
							return completed ? responseHeadersString : null;
						},

						// Caches the header
						setRequestHeader: function setRequestHeader(name, value) {
							if (completed == null) {
								name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
								requestHeaders[name] = value;
							}
							return this;
						},

						// Overrides response content-type header
						overrideMimeType: function overrideMimeType(type) {
							if (completed == null) {
								s.mimeType = type;
							}
							return this;
						},

						// Status-dependent callbacks
						statusCode: function statusCode(map) {
							var code;
							if (map) {
								if (completed) {

									// Execute the appropriate callbacks
									jqXHR.always(map[jqXHR.status]);
								} else {

									// Lazy-add the new callbacks in a way that preserves old ones
									for (code in map) {
										_statusCode[code] = [_statusCode[code], map[code]];
									}
								}
							}
							return this;
						},

						// Cancel the request
						abort: function abort(statusText) {
							var finalText = statusText || strAbort;
							if (transport) {
								transport.abort(finalText);
							}
							done(0, finalText);
							return this;
						}
					};

					// Attach deferreds
					deferred.promise(jqXHR);

					// Add protocol if not provided (prefilters might expect it)
					// Handle falsy url in the settings object (#10093: consistency with old signature)
					// We also use the url parameter if available
					s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");

					// Alias method option to type as per ticket #12004
					s.type = options.method || options.type || s.method || s.type;

					// Extract dataTypes list
					s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

					// A cross-domain request is in order when the origin doesn't match the current origin.
					if (s.crossDomain == null) {
						urlAnchor = document.createElement("a");

						// Support: IE <=8 - 11, Edge 12 - 13
						// IE throws exception on accessing the href property if url is malformed,
						// e.g. http://example.com:80x/
						try {
							urlAnchor.href = s.url;

							// Support: IE <=8 - 11 only
							// Anchor's host property isn't correctly set when s.url is relative
							urlAnchor.href = urlAnchor.href;
							s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
						} catch (e) {

							// If there is an error parsing the URL, assume it is crossDomain,
							// it can be rejected by the transport if it is invalid
							s.crossDomain = true;
						}
					}

					// Convert data if not already a string
					if (s.data && s.processData && typeof s.data !== "string") {
						s.data = jQuery.param(s.data, s.traditional);
					}

					// Apply prefilters
					inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

					// If request was aborted inside a prefilter, stop there
					if (completed) {
						return jqXHR;
					}

					// We can fire global events as of now if asked to
					// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
					fireGlobals = jQuery.event && s.global;

					// Watch for a new set of requests
					if (fireGlobals && jQuery.active++ === 0) {
						jQuery.event.trigger("ajaxStart");
					}

					// Uppercase the type
					s.type = s.type.toUpperCase();

					// Determine if request has content
					s.hasContent = !rnoContent.test(s.type);

					// Save the URL in case we're toying with the If-Modified-Since
					// and/or If-None-Match header later on
					// Remove hash to simplify url manipulation
					cacheURL = s.url.replace(rhash, "");

					// More options handling for requests with no content
					if (!s.hasContent) {

						// Remember the hash so we can put it back
						uncached = s.url.slice(cacheURL.length);

						// If data is available, append data to url
						if (s.data) {
							cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

							// #9682: remove data so that it's not used in an eventual retry
							delete s.data;
						}

						// Add or update anti-cache param if needed
						if (s.cache === false) {
							cacheURL = cacheURL.replace(rantiCache, "$1");
							uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
						}

						// Put hash and anti-cache on the URL that will be requested (gh-1732)
						s.url = cacheURL + uncached;

						// Change '%20' to '+' if this is encoded form body content (gh-2658)
					} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
						s.data = s.data.replace(r20, "+");
					}

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if (s.ifModified) {
						if (jQuery.lastModified[cacheURL]) {
							jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
						}
						if (jQuery.etag[cacheURL]) {
							jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
						}
					}

					// Set the correct header, if data is being sent
					if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
						jqXHR.setRequestHeader("Content-Type", s.contentType);
					}

					// Set the Accepts header for the server, depending on the dataType
					jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

					// Check for headers option
					for (i in s.headers) {
						jqXHR.setRequestHeader(i, s.headers[i]);
					}

					// Allow custom headers/mimetypes and early abort
					if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

						// Abort if not done already and return
						return jqXHR.abort();
					}

					// Aborting is no longer a cancellation
					strAbort = "abort";

					// Install callbacks on deferreds
					completeDeferred.add(s.complete);
					jqXHR.done(s.success);
					jqXHR.fail(s.error);

					// Get transport
					transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

					// If no transport, we auto-abort
					if (!transport) {
						done(-1, "No Transport");
					} else {
						jqXHR.readyState = 1;

						// Send global event
						if (fireGlobals) {
							globalEventContext.trigger("ajaxSend", [jqXHR, s]);
						}

						// If request was aborted inside ajaxSend, stop there
						if (completed) {
							return jqXHR;
						}

						// Timeout
						if (s.async && s.timeout > 0) {
							timeoutTimer = window.setTimeout(function () {
								jqXHR.abort("timeout");
							}, s.timeout);
						}

						try {
							completed = false;
							transport.send(requestHeaders, done);
						} catch (e) {

							// Rethrow post-completion exceptions
							if (completed) {
								throw e;
							}

							// Propagate others as results
							done(-1, e);
						}
					}

					// Callback for when everything is done
					function done(status, nativeStatusText, responses, headers) {
						var isSuccess,
						    success,
						    error,
						    response,
						    modified,
						    statusText = nativeStatusText;

						// Ignore repeat invocations
						if (completed) {
							return;
						}

						completed = true;

						// Clear timeout if it exists
						if (timeoutTimer) {
							window.clearTimeout(timeoutTimer);
						}

						// Dereference transport for early garbage collection
						// (no matter how long the jqXHR object will be used)
						transport = undefined;

						// Cache response headers
						responseHeadersString = headers || "";

						// Set readyState
						jqXHR.readyState = status > 0 ? 4 : 0;

						// Determine if successful
						isSuccess = status >= 200 && status < 300 || status === 304;

						// Get response data
						if (responses) {
							response = ajaxHandleResponses(s, jqXHR, responses);
						}

						// Convert no matter what (that way responseXXX fields are always set)
						response = ajaxConvert(s, response, jqXHR, isSuccess);

						// If successful, handle type chaining
						if (isSuccess) {

							// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
							if (s.ifModified) {
								modified = jqXHR.getResponseHeader("Last-Modified");
								if (modified) {
									jQuery.lastModified[cacheURL] = modified;
								}
								modified = jqXHR.getResponseHeader("etag");
								if (modified) {
									jQuery.etag[cacheURL] = modified;
								}
							}

							// if no content
							if (status === 204 || s.type === "HEAD") {
								statusText = "nocontent";

								// if not modified
							} else if (status === 304) {
								statusText = "notmodified";

								// If we have data, let's convert it
							} else {
								statusText = response.state;
								success = response.data;
								error = response.error;
								isSuccess = !error;
							}
						} else {

							// Extract error from statusText and normalize for non-aborts
							error = statusText;
							if (status || !statusText) {
								statusText = "error";
								if (status < 0) {
									status = 0;
								}
							}
						}

						// Set data for the fake xhr object
						jqXHR.status = status;
						jqXHR.statusText = (nativeStatusText || statusText) + "";

						// Success/Error
						if (isSuccess) {
							deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
						} else {
							deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
						}

						// Status-dependent callbacks
						jqXHR.statusCode(_statusCode);
						_statusCode = undefined;

						if (fireGlobals) {
							globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
						}

						// Complete
						completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

						if (fireGlobals) {
							globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

							// Handle the global AJAX counter
							if (! --jQuery.active) {
								jQuery.event.trigger("ajaxStop");
							}
						}
					}

					return jqXHR;
				},

				getJSON: function getJSON(url, data, callback) {
					return jQuery.get(url, data, callback, "json");
				},

				getScript: function getScript(url, callback) {
					return jQuery.get(url, undefined, callback, "script");
				}
			});

			jQuery.each(["get", "post"], function (i, method) {
				jQuery[method] = function (url, data, callback, type) {

					// Shift arguments if data argument was omitted
					if (jQuery.isFunction(data)) {
						type = type || callback;
						callback = data;
						data = undefined;
					}

					// The url can be an options object (which then must have .url)
					return jQuery.ajax(jQuery.extend({
						url: url,
						type: method,
						dataType: type,
						data: data,
						success: callback
					}, jQuery.isPlainObject(url) && url));
				};
			});

			jQuery._evalUrl = function (url) {
				return jQuery.ajax({
					url: url,

					// Make this explicit, since user can override this through ajaxSetup (#11264)
					type: "GET",
					dataType: "script",
					cache: true,
					async: false,
					global: false,
					"throws": true
				});
			};

			jQuery.fn.extend({
				wrapAll: function wrapAll(html) {
					var wrap;

					if (this[0]) {
						if (jQuery.isFunction(html)) {
							html = html.call(this[0]);
						}

						// The elements to wrap the target around
						wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

						if (this[0].parentNode) {
							wrap.insertBefore(this[0]);
						}

						wrap.map(function () {
							var elem = this;

							while (elem.firstElementChild) {
								elem = elem.firstElementChild;
							}

							return elem;
						}).append(this);
					}

					return this;
				},

				wrapInner: function wrapInner(html) {
					if (jQuery.isFunction(html)) {
						return this.each(function (i) {
							jQuery(this).wrapInner(html.call(this, i));
						});
					}

					return this.each(function () {
						var self = jQuery(this),
						    contents = self.contents();

						if (contents.length) {
							contents.wrapAll(html);
						} else {
							self.append(html);
						}
					});
				},

				wrap: function wrap(html) {
					var isFunction = jQuery.isFunction(html);

					return this.each(function (i) {
						jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
					});
				},

				unwrap: function unwrap(selector) {
					this.parent(selector).not("body").each(function () {
						jQuery(this).replaceWith(this.childNodes);
					});
					return this;
				}
			});

			jQuery.expr.pseudos.hidden = function (elem) {
				return !jQuery.expr.pseudos.visible(elem);
			};
			jQuery.expr.pseudos.visible = function (elem) {
				return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
			};

			jQuery.ajaxSettings.xhr = function () {
				try {
					return new window.XMLHttpRequest();
				} catch (e) {}
			};

			var xhrSuccessStatus = {

				// File protocol always yields status code 0, assume 200
				0: 200,

				// Support: IE <=9 only
				// #1450: sometimes IE returns 1223 when it should be 204
				1223: 204
			},
			    xhrSupported = jQuery.ajaxSettings.xhr();

			support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
			support.ajax = xhrSupported = !!xhrSupported;

			jQuery.ajaxTransport(function (options) {
				var _callback, errorCallback;

				// Cross domain only allowed if supported through XMLHttpRequest
				if (support.cors || xhrSupported && !options.crossDomain) {
					return {
						send: function send(headers, complete) {
							var i,
							    xhr = options.xhr();

							xhr.open(options.type, options.url, options.async, options.username, options.password);

							// Apply custom fields if provided
							if (options.xhrFields) {
								for (i in options.xhrFields) {
									xhr[i] = options.xhrFields[i];
								}
							}

							// Override mime type if needed
							if (options.mimeType && xhr.overrideMimeType) {
								xhr.overrideMimeType(options.mimeType);
							}

							// X-Requested-With header
							// For cross-domain requests, seeing as conditions for a preflight are
							// akin to a jigsaw puzzle, we simply never set it to be sure.
							// (it can always be set on a per-request basis or even using ajaxSetup)
							// For same-domain requests, won't change header if already provided.
							if (!options.crossDomain && !headers["X-Requested-With"]) {
								headers["X-Requested-With"] = "XMLHttpRequest";
							}

							// Set headers
							for (i in headers) {
								xhr.setRequestHeader(i, headers[i]);
							}

							// Callback
							_callback = function callback(type) {
								return function () {
									if (_callback) {
										_callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

										if (type === "abort") {
											xhr.abort();
										} else if (type === "error") {

											// Support: IE <=9 only
											// On a manual native abort, IE9 throws
											// errors on any property access that is not readyState
											if (typeof xhr.status !== "number") {
												complete(0, "error");
											} else {
												complete(

												// File: protocol always yields status 0; see #8605, #14207
												xhr.status, xhr.statusText);
											}
										} else {
											complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,

											// Support: IE <=9 only
											// IE9 has no XHR2 but throws on binary (trac-11426)
											// For XHR2 non-text, let the caller handle it (gh-2498)
											(xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
										}
									}
								};
							};

							// Listen to events
							xhr.onload = _callback();
							errorCallback = xhr.onerror = _callback("error");

							// Support: IE 9 only
							// Use onreadystatechange to replace onabort
							// to handle uncaught aborts
							if (xhr.onabort !== undefined) {
								xhr.onabort = errorCallback;
							} else {
								xhr.onreadystatechange = function () {

									// Check readyState before timeout as it changes
									if (xhr.readyState === 4) {

										// Allow onerror to be called first,
										// but that will not handle a native abort
										// Also, save errorCallback to a variable
										// as xhr.onerror cannot be accessed
										window.setTimeout(function () {
											if (_callback) {
												errorCallback();
											}
										});
									}
								};
							}

							// Create the abort callback
							_callback = _callback("abort");

							try {

								// Do send the request (this may raise an exception)
								xhr.send(options.hasContent && options.data || null);
							} catch (e) {

								// #14683: Only rethrow if this hasn't been notified as an error yet
								if (_callback) {
									throw e;
								}
							}
						},

						abort: function abort() {
							if (_callback) {
								_callback();
							}
						}
					};
				}
			});

			// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
			jQuery.ajaxPrefilter(function (s) {
				if (s.crossDomain) {
					s.contents.script = false;
				}
			});

			// Install script dataType
			jQuery.ajaxSetup({
				accepts: {
					script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
				},
				contents: {
					script: /\b(?:java|ecma)script\b/
				},
				converters: {
					"text script": function textScript(text) {
						jQuery.globalEval(text);
						return text;
					}
				}
			});

			// Handle cache's special case and crossDomain
			jQuery.ajaxPrefilter("script", function (s) {
				if (s.cache === undefined) {
					s.cache = false;
				}
				if (s.crossDomain) {
					s.type = "GET";
				}
			});

			// Bind script tag hack transport
			jQuery.ajaxTransport("script", function (s) {

				// This transport only deals with cross domain requests
				if (s.crossDomain) {
					var script, _callback2;
					return {
						send: function send(_, complete) {
							script = jQuery("<script>").prop({
								charset: s.scriptCharset,
								src: s.url
							}).on("load error", _callback2 = function callback(evt) {
								script.remove();
								_callback2 = null;
								if (evt) {
									complete(evt.type === "error" ? 404 : 200, evt.type);
								}
							});

							// Use native DOM manipulation to avoid our domManip AJAX trickery
							document.head.appendChild(script[0]);
						},
						abort: function abort() {
							if (_callback2) {
								_callback2();
							}
						}
					};
				}
			});

			var oldCallbacks = [],
			    rjsonp = /(=)\?(?=&|$)|\?\?/;

			// Default jsonp settings
			jQuery.ajaxSetup({
				jsonp: "callback",
				jsonpCallback: function jsonpCallback() {
					var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
					this[callback] = true;
					return callback;
				}
			});

			// Detect, normalize options and install callbacks for jsonp requests
			jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

				var callbackName,
				    overwritten,
				    responseContainer,
				    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

				// Handle iff the expected data type is "jsonp" or we have a parameter to set
				if (jsonProp || s.dataTypes[0] === "jsonp") {

					// Get callback name, remembering preexisting value associated with it
					callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

					// Insert callback into url or form data
					if (jsonProp) {
						s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
					} else if (s.jsonp !== false) {
						s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
					}

					// Use data converter to retrieve json after script execution
					s.converters["script json"] = function () {
						if (!responseContainer) {
							jQuery.error(callbackName + " was not called");
						}
						return responseContainer[0];
					};

					// Force json dataType
					s.dataTypes[0] = "json";

					// Install callback
					overwritten = window[callbackName];
					window[callbackName] = function () {
						responseContainer = arguments;
					};

					// Clean-up function (fires after converters)
					jqXHR.always(function () {

						// If previous value didn't exist - remove it
						if (overwritten === undefined) {
							jQuery(window).removeProp(callbackName);

							// Otherwise restore preexisting value
						} else {
							window[callbackName] = overwritten;
						}

						// Save back as free
						if (s[callbackName]) {

							// Make sure that re-using the options doesn't screw things around
							s.jsonpCallback = originalSettings.jsonpCallback;

							// Save the callback name for future use
							oldCallbacks.push(callbackName);
						}

						// Call if it was a function and we have a response
						if (responseContainer && jQuery.isFunction(overwritten)) {
							overwritten(responseContainer[0]);
						}

						responseContainer = overwritten = undefined;
					});

					// Delegate to script
					return "script";
				}
			});

			// Support: Safari 8 only
			// In Safari 8 documents created via document.implementation.createHTMLDocument
			// collapse sibling forms: the second one becomes a child of the first one.
			// Because of that, this security measure has to be disabled in Safari 8.
			// https://bugs.webkit.org/show_bug.cgi?id=137337
			support.createHTMLDocument = function () {
				var body = document.implementation.createHTMLDocument("").body;
				body.innerHTML = "<form></form><form></form>";
				return body.childNodes.length === 2;
			}();

			// Argument "data" should be string of html
			// context (optional): If specified, the fragment will be created in this context,
			// defaults to document
			// keepScripts (optional): If true, will include scripts passed in the html string
			jQuery.parseHTML = function (data, context, keepScripts) {
				if (typeof data !== "string") {
					return [];
				}
				if (typeof context === "boolean") {
					keepScripts = context;
					context = false;
				}

				var base, parsed, scripts;

				if (!context) {

					// Stop scripts or inline event handlers from being executed immediately
					// by using document.implementation
					if (support.createHTMLDocument) {
						context = document.implementation.createHTMLDocument("");

						// Set the base href for the created document
						// so any parsed elements with URLs
						// are based on the document's URL (gh-2965)
						base = context.createElement("base");
						base.href = document.location.href;
						context.head.appendChild(base);
					} else {
						context = document;
					}
				}

				parsed = rsingleTag.exec(data);
				scripts = !keepScripts && [];

				// Single tag
				if (parsed) {
					return [context.createElement(parsed[1])];
				}

				parsed = buildFragment([data], context, scripts);

				if (scripts && scripts.length) {
					jQuery(scripts).remove();
				}

				return jQuery.merge([], parsed.childNodes);
			};

			/**
    * Load a url into a page
    */
			jQuery.fn.load = function (url, params, callback) {
				var selector,
				    type,
				    response,
				    self = this,
				    off = url.indexOf(" ");

				if (off > -1) {
					selector = stripAndCollapse(url.slice(off));
					url = url.slice(0, off);
				}

				// If it's a function
				if (jQuery.isFunction(params)) {

					// We assume that it's the callback
					callback = params;
					params = undefined;

					// Otherwise, build a param string
				} else if (params && (typeof params === 'undefined' ? 'undefined' : _typeof2(params)) === "object") {
					type = "POST";
				}

				// If we have elements to modify, make the request
				if (self.length > 0) {
					jQuery.ajax({
						url: url,

						// If "type" variable is undefined, then "GET" method will be used.
						// Make value of this field explicit since
						// user can override it through ajaxSetup method
						type: type || "GET",
						dataType: "html",
						data: params
					}).done(function (responseText) {

						// Save response for use in complete callback
						response = arguments;

						self.html(selector ?

						// If a selector was specified, locate the right elements in a dummy div
						// Exclude scripts to avoid IE 'Permission Denied' errors
						jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

						// Otherwise use the full result
						responseText);

						// If the request succeeds, this function gets "data", "status", "jqXHR"
						// but they are ignored because response was set above.
						// If it fails, this function gets "jqXHR", "status", "error"
					}).always(callback && function (jqXHR, status) {
						self.each(function () {
							callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
						});
					});
				}

				return this;
			};

			// Attach a bunch of functions for handling common AJAX events
			jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
				jQuery.fn[type] = function (fn) {
					return this.on(type, fn);
				};
			});

			jQuery.expr.pseudos.animated = function (elem) {
				return jQuery.grep(jQuery.timers, function (fn) {
					return elem === fn.elem;
				}).length;
			};

			jQuery.offset = {
				setOffset: function setOffset(elem, options, i) {
					var curPosition,
					    curLeft,
					    curCSSTop,
					    curTop,
					    curOffset,
					    curCSSLeft,
					    calculatePosition,
					    position = jQuery.css(elem, "position"),
					    curElem = jQuery(elem),
					    props = {};

					// Set position first, in-case top/left are set even on static elem
					if (position === "static") {
						elem.style.position = "relative";
					}

					curOffset = curElem.offset();
					curCSSTop = jQuery.css(elem, "top");
					curCSSLeft = jQuery.css(elem, "left");
					calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

					// Need to be able to calculate position if either
					// top or left is auto and position is either absolute or fixed
					if (calculatePosition) {
						curPosition = curElem.position();
						curTop = curPosition.top;
						curLeft = curPosition.left;
					} else {
						curTop = parseFloat(curCSSTop) || 0;
						curLeft = parseFloat(curCSSLeft) || 0;
					}

					if (jQuery.isFunction(options)) {

						// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
						options = options.call(elem, i, jQuery.extend({}, curOffset));
					}

					if (options.top != null) {
						props.top = options.top - curOffset.top + curTop;
					}
					if (options.left != null) {
						props.left = options.left - curOffset.left + curLeft;
					}

					if ("using" in options) {
						options.using.call(elem, props);
					} else {
						curElem.css(props);
					}
				}
			};

			jQuery.fn.extend({
				offset: function offset(options) {

					// Preserve chaining for setter
					if (arguments.length) {
						return options === undefined ? this : this.each(function (i) {
							jQuery.offset.setOffset(this, options, i);
						});
					}

					var doc,
					    docElem,
					    rect,
					    win,
					    elem = this[0];

					if (!elem) {
						return;
					}

					// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
					// Support: IE <=11 only
					// Running getBoundingClientRect on a
					// disconnected node in IE throws an error
					if (!elem.getClientRects().length) {
						return { top: 0, left: 0 };
					}

					rect = elem.getBoundingClientRect();

					doc = elem.ownerDocument;
					docElem = doc.documentElement;
					win = doc.defaultView;

					return {
						top: rect.top + win.pageYOffset - docElem.clientTop,
						left: rect.left + win.pageXOffset - docElem.clientLeft
					};
				},

				position: function position() {
					if (!this[0]) {
						return;
					}

					var offsetParent,
					    offset,
					    elem = this[0],
					    parentOffset = { top: 0, left: 0 };

					// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
					// because it is its only offset parent
					if (jQuery.css(elem, "position") === "fixed") {

						// Assume getBoundingClientRect is there when computed position is fixed
						offset = elem.getBoundingClientRect();
					} else {

						// Get *real* offsetParent
						offsetParent = this.offsetParent();

						// Get correct offsets
						offset = this.offset();
						if (!nodeName(offsetParent[0], "html")) {
							parentOffset = offsetParent.offset();
						}

						// Add offsetParent borders
						parentOffset = {
							top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
							left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
						};
					}

					// Subtract parent offsets and element margins
					return {
						top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
						left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
					};
				},

				// This method will return documentElement in the following cases:
				// 1) For the element inside the iframe without offsetParent, this method will return
				//    documentElement of the parent window
				// 2) For the hidden or detached element
				// 3) For body or html element, i.e. in case of the html node - it will return itself
				//
				// but those exceptions were never presented as a real life use-cases
				// and might be considered as more preferable results.
				//
				// This logic, however, is not guaranteed and can change at any point in the future
				offsetParent: function offsetParent() {
					return this.map(function () {
						var offsetParent = this.offsetParent;

						while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
							offsetParent = offsetParent.offsetParent;
						}

						return offsetParent || documentElement;
					});
				}
			});

			// Create scrollLeft and scrollTop methods
			jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
				var top = "pageYOffset" === prop;

				jQuery.fn[method] = function (val) {
					return access(this, function (elem, method, val) {

						// Coalesce documents and windows
						var win;
						if (jQuery.isWindow(elem)) {
							win = elem;
						} else if (elem.nodeType === 9) {
							win = elem.defaultView;
						}

						if (val === undefined) {
							return win ? win[prop] : elem[method];
						}

						if (win) {
							win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
						} else {
							elem[method] = val;
						}
					}, method, val, arguments.length);
				};
			});

			// Support: Safari <=7 - 9.1, Chrome <=37 - 49
			// Add the top/left cssHooks using jQuery.fn.position
			// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
			// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
			// getComputedStyle returns percent when specified for top/left/bottom/right;
			// rather than make the css module depend on the offset module, just check for it here
			jQuery.each(["top", "left"], function (i, prop) {
				jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
					if (computed) {
						computed = curCSS(elem, prop);

						// If curCSS returns percentage, fallback to offset
						return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
					}
				});
			});

			// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
			jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
				jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {

					// Margin is only for outerHeight, outerWidth
					jQuery.fn[funcName] = function (margin, value) {
						var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
						    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

						return access(this, function (elem, type, value) {
							var doc;

							if (jQuery.isWindow(elem)) {

								// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
								return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
							}

							// Get document width or height
							if (elem.nodeType === 9) {
								doc = elem.documentElement;

								// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
								// whichever is greatest
								return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
							}

							return value === undefined ?

							// Get width or height on the element, requesting but not forcing parseFloat
							jQuery.css(elem, type, extra) :

							// Set width or height on the element
							jQuery.style(elem, type, value, extra);
						}, type, chainable ? margin : undefined, chainable);
					};
				});
			});

			jQuery.fn.extend({

				bind: function bind(types, data, fn) {
					return this.on(types, null, data, fn);
				},
				unbind: function unbind(types, fn) {
					return this.off(types, null, fn);
				},

				delegate: function delegate(selector, types, data, fn) {
					return this.on(types, selector, data, fn);
				},
				undelegate: function undelegate(selector, types, fn) {

					// ( namespace ) or ( selector, types [, fn] )
					return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
				}
			});

			jQuery.holdReady = function (hold) {
				if (hold) {
					jQuery.readyWait++;
				} else {
					jQuery.ready(true);
				}
			};
			jQuery.isArray = Array.isArray;
			jQuery.parseJSON = JSON.parse;
			jQuery.nodeName = nodeName;

			// Register as a named AMD module, since jQuery can be concatenated with other
			// files that may use define, but not via a proper concatenation script that
			// understands anonymous AMD modules. A named AMD is safest and most robust
			// way to register. Lowercase jquery is used because AMD module names are
			// derived from file names, and jQuery is normally delivered in a lowercase
			// file name. Do this after creating the global so that if an AMD module wants
			// to call noConflict to hide this version of jQuery, it will work.

			// Note that for maximum portability, libraries that are not jQuery should
			// declare themselves as anonymous modules, and avoid setting a global if an
			// AMD loader is present. jQuery is a special case. For more information, see
			// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

			if (true) {
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
					return jQuery;
				}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			}

			var

			// Map over jQuery in case of overwrite
			_jQuery = window.jQuery,


			// Map over the $ in case of overwrite
			_$ = window.$;

			jQuery.noConflict = function (deep) {
				if (window.$ === jQuery) {
					window.$ = _$;
				}

				if (deep && window.jQuery === jQuery) {
					window.jQuery = _jQuery;
				}

				return jQuery;
			};

			// Expose jQuery and $ identifiers, even in AMD
			// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
			// and CommonJS for browser emulators (#13566)
			if (!noGlobal) {
				window.jQuery = window.$ = jQuery;
			}

			return jQuery;
		});

		/***/
	},

	/***/"Bsg5":
	/***/function Bsg5(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony export (immutable) */
		__webpack_exports__["a"] = makeCheckable;
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("7t+N");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_core__ = __webpack_require__("cmeh");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_base__ = __webpack_require__("Wlz3");
		/**
   * @author sweetyx
   * @description 树插件的扩展，可check树
   */

		function makeCheckable(sharkComponent, config) {
			var tree = sharkComponent.component;
			tree.addClass('tree-checkable');
			//获取Checked的节点
			function getCheckedNodes() {
				var nodeList = [];
				var checkedNodes = tree.find('.tree-icon-check');
				var addedMap = {};
				for (var i = 0; i < checkedNodes.length; i++) {
					var label = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(checkedNodes[i]).parent();
					var groupId = label.attr('tree-group-id');
					var node = config.nodesMap[groupId];
					if (addedMap[node.node_id]) continue;
					addedMap[node.node_id] = true;
					nodeList.push(node);
					if (config.autolink === true) {
						var nextUl = label.next('ul');
						if (nextUl.length === 0) {
							getAllChildren(nodeList, node);
						}
					}
				};
				return nodeList;
			}
			//获取所有子节点
			function getAllChildren(nodeList, node) {
				if (!__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].isArray(node.children)) return;
				for (var i = 0; i < node.children.length; i++) {
					nodeList.push(node.children[i]);
					getAllChildren(nodeList, node.children[i]);
				};
			}
			// 全选,全不选
			function checkAll(flag) {
				if (flag) {
					tree.find('.tree-icon-check-empty,.tree-icon-check-minus').removeClass('tree-icon-check-empty tree-icon-check-minus').addClass('tree-icon-check');
				} else {
					tree.find('.tree-icon-check,.tree-icon-check-minus').removeClass('tree-icon-check tree-icon-check-minus').addClass('tree-icon-check-empty');
				}
			}
			// 反选
			function reverseCheckAll() {
				var emptys = tree.find('.tree-icon-check-empty');
				var checks = tree.find('.tree-icon-check');
				emptys.removeClass('tree-icon-check-empty').addClass('tree-icon-check');
				checks.removeClass('tree-icon-check').addClass('tree-icon-check-empty');
			}
			/**
    * 修改所有子节点
    * @param  {element}  liEle    li
    * @param  {Boolean} isChecked 是否check
    */
			function changeChildChecked(liEle, isChecked) {
				var groupEle = liEle.children('.tree-group');
				if (isChecked) {
					groupEle.find('.tree-icon-check-empty,.tree-icon-check-minus').removeClass('tree-icon-check-empty tree-icon-check-minus').addClass('tree-icon-check');
				} else {
					groupEle.find('.tree-icon-check').removeClass('tree-icon-check').addClass('tree-icon-check-empty');
				}
				var nextUl = groupEle.next('ul');
				if (nextUl.length > 0) {
					var childs = nextUl.children('li');
					for (var i = 0; i < childs.length; i++) {
						changeChildChecked(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(childs[i]), isChecked);
					};
				}
			}
			/**
    * 修改所有父节点
    * @param  {element}  liEle    li
    * @return {void} 
    */
			function changeParentChecked(liEle) {
				var ul = liEle.parent();
				var groupEle = ul.prev('.tree-group');
				if (groupEle.length === 0) {
					return;
				}
				if (ul.find('.tree-icon-check-minus').length > 0 || ul.find('.tree-icon-check-empty').length > 0 && ul.find('.tree-icon-check').length > 0) {
					// 半选
					groupEle.find('.tree-icon-check-empty,.tree-icon-check,.tree-icon-check-minus').removeClass('tree-icon-check-empty tree-icon-check tree-icon-check-minus').addClass('tree-icon-check-minus');
				} else if (ul.find('.tree-icon-check-empty').length === 0 && ul.find('.tree-icon-check-minus').length == 0) {
					// 全选
					groupEle.find('.tree-icon-check-empty,.tree-icon-check,.tree-icon-check-minus').removeClass('tree-icon-check-empty tree-icon-check tree-icon-check-minus').addClass('tree-icon-check');
				} else {
					// 全不选
					groupEle.find('.tree-icon-check-empty,.tree-icon-check,.tree-icon-check-minus').removeClass('tree-icon-check-empty tree-icon-check tree-icon-check-minus').addClass('tree-icon-check-empty');
				}
				changeParentChecked(groupEle.parent('li'));
			}
			/**
    * check节点的复选框
    */
			function reverseCheckNode(checkEle, updateLinkNodes, callback) {
				var parentLabel = checkEle.parent();
				var parentLi = parentLabel.parent();
				var isChecked = false;
				if (checkEle.hasClass('tree-icon-check')) {
					checkEle.removeClass('tree-icon-check').addClass('tree-icon-check-empty');
					isChecked = false;
				} else if (checkEle.hasClass('tree-icon-check-empty') || checkEle.hasClass('tree-icon-check-minus')) {
					checkEle.removeClass('tree-icon-check-empty tree-icon-check-minus').addClass('tree-icon-check');
					isChecked = true;
				}
				if (updateLinkNodes) {
					// 更新已展开的子节点
					changeChildChecked(parentLi, isChecked);
					// 更新父节点
					changeParentChecked(parentLi);
				}
				var node_id = parentLabel.attr('tree-group-id');
				var node = config.nodesMap[node_id];
				if (typeof callback === 'function') {
					callback.call(tree, node, isChecked);
				}
				return tree;
			}
			/**
    * 获取所有选中的节点
    * @return {[nodes]}
    */
			sharkComponent.getCheckedNodes = function () {
				return getCheckedNodes();
			};
			/**
    * 全选
    */
			sharkComponent.checkAll = function () {
				checkAll(true);
			};
			/**
    * 反选
    */
			sharkComponent.reverseCheck = function () {
				reverseCheckAll();
			};
			/**
    * 全不选
    */
			sharkComponent.checkNo = function () {
				checkAll(false);
			};
			/**
    * check节点
    * @param  {node}   node            [节点对象或节点id]
    */
			sharkComponent.reverseCheckNode = function (node) {
				var nodeId = node.node_id || node;
				var groupEle = tree.find('.tree-group[tree-group-id="' + nodeId + '"]');
				if (groupEle.length > 0) {
					var checkEle = groupEle.children('.tree-icon-check-empty,.tree-icon-check-minus,.tree-icon-check');
					reverseCheckNode(checkEle, config.autolink, config.onNodeChecked);
				}
			};
			/**
    * 强制check节点
    * @param  {node}   node            [节点对象或节点id]
    */
			sharkComponent.checkNode = function (node) {
				var nodeId = node.node_id || node;
				var groupEle = tree.find('.tree-group[tree-group-id="' + nodeId + '"]');
				if (groupEle.length > 0) {
					var checkEle = groupEle.children('.tree-icon-check-empty,.tree-icon-check-minus');
					if (checkEle.length > 0) {
						reverseCheckNode(checkEle, config.autolink, config.onNodeChecked);
					}
				}
			};
			/**
    * 强制取消check节点
    * @param  {node}   node            [节点对象或节点id]
    */
			sharkComponent.unCheckNode = function (node) {
				var nodeId = node.node_id || node;
				var groupEle = tree.find('.tree-group[tree-group-id="' + nodeId + '"]');
				if (groupEle.length > 0) {
					var checkEle = groupEle.children('.tree-icon-check');
					if (checkEle.length > 0) {
						reverseCheckNode(checkEle, config.autolink, config.onNodeChecked);
					}
				}
			};
			//点击复选框
			tree.on('click', '.tree-icon-check-empty,.tree-icon-check-minus,.tree-icon-check', __WEBPACK_IMPORTED_MODULE_2__common_base__["a" /* BaseComponent */].filterComponentAction(tree, function (evt) {
				var checkEle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
				reverseCheckNode(checkEle, config.autolink, config.onNodeChecked);
			}));
		}

		/***/
	},

	/***/"CacV":
	/***/function CacV(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__ = __webpack_require__("f4c1");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_const__ = __webpack_require__("7Lx1");

		angular.module('shark-angularjs.ui').directive(__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].popover, ['$compile', '$templateRequest', '$q', 'SharkConfig', function ($compile, $templateRequest, $q, SharkConfig) {
			var PopoverConfig = SharkConfig.getConfig()[__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].popover];
			return {
				restrict: 'A',
				link: function link($scope, element, attrs) {
					var popover;
					var disableWatcher;
					//销毁函数
					function destroy() {
						if (disableWatcher) {
							disableWatcher();
						}
						if (popover) {
							popover.destroy();
							popover = null;
						}
					}
					var defer = $q.defer();
					//获取popover-content模板
					if (typeof attrs.template !== 'undefined') {
						defer.resolve(SharkConfig.getAttrValue($scope, attrs.template));
					} else {
						var templateUrl = SharkConfig.getAttrValue($scope, attrs.templateUrl);
						$templateRequest(templateUrl, true).then(function (response) {
							defer.resolve(response);
						}, function () {
							defer.reject();
						});
					}
					var popoverDirection = typeof attrs.direction !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.direction) : PopoverConfig.direction;
					var popoverName = attrs.name;
					defer.promise.then(function (tpl) {
						popover = __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].sharkPopover({
							event: 'click',
							bodyClickClose: true,
							originEventClose: true,
							title: '',
							content: tpl,
							direction: popoverDirection,
							reRenderOnShow: false,
							onShow: function onShow() {
								if (!popover.isCompiled) {
									popover.isCompiled = true;
									$compile(popover.component)($scope);
									if (!$scope.$$phase) {
										$scope.$apply();
									}
								}
								popover.adjustPostion();
							},
							onHide: function onHide() {}
						});
						popover.appendTo(element);
						if (typeof attrs.ngDisabled !== 'undefined') {
							// 监听组件是否被禁用
							disableWatcher = $scope.$watch(function () {
								return $scope.$eval(attrs.ngDisabled);
							}, function (newValue, oldValue) {
								if (popover) {
									if (newValue === true) {
										popover.disable();
									}
									if (newValue === false) {
										popover.enable();
									}
								}
							});
						}
						if (popoverName) {
							$scope[popoverName] = popover;
						}
					});

					// $scope销毁时同步销毁popover组件
					$scope.$on('$destroy', function () {
						destroy();
					});
				}
			};
		}]).directive(__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].tooltip, ['$compile', '$templateRequest', '$q', 'SharkConfig', function ($compile, $templateRequest, $q, SharkConfig) {
			var TooltipConfig = SharkConfig.getConfig()[__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].tooltip];
			return {
				restrict: 'A',
				link: function link($scope, element, attrs) {
					var tooltip;
					var disableWatcher;
					//销毁函数
					function destroy() {
						if (disableWatcher) {
							disableWatcher();
						}
						if (tooltip) {
							tooltip.destroy();
							tooltip = null;
						}
					}
					var defer = $q.defer();
					var tooltipDirection = typeof attrs.direction !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.direction) : TooltipConfig.direction;
					//获取tooltip-content模板
					if (typeof attrs.template !== 'undefined') {
						defer.resolve(SharkConfig.getAttrValue($scope, attrs.template));
					} else {
						var templateUrl = SharkConfig.getAttrValue($scope, attrs.templateUrl);
						$templateRequest(templateUrl, true).then(function (response) {
							defer.resolve(response);
						}, function () {
							defer.reject();
						});
					}
					var tooltipName = attrs.name;
					defer.promise.then(function (tpl) {
						tooltip = __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].sharkTooltip({
							content: tpl,
							direction: tooltipDirection,
							reRenderOnShow: false,
							onShow: function onShow() {
								if (!tooltip.isCompiled) {
									tooltip.isCompiled = true;
									$compile(tooltip.component)($scope);
									if (!$scope.$$phase) {
										$scope.$apply();
									}
								}
								tooltip.adjustPostion();
							},
							onHide: function onHide() {}
						});
						tooltip.appendTo(element);
						if (typeof attrs.ngDisabled !== 'undefined') {
							// 监听组件是否被禁用
							disableWatcher = $scope.$watch(function () {
								return $scope.$eval(attrs.ngDisabled);
							}, function (newValue, oldValue) {
								if (tooltip) {
									if (newValue === true) {
										tooltip.disable();
									}
									if (newValue === false) {
										tooltip.enable();
									}
								}
							});
						}
						if (tooltipName) {
							$scope[tooltipName] = tooltip;
						}
					});

					// $scope销毁时同步销毁tooltip组件
					$scope.$on('$destroy', function () {
						destroy();
					});
				}
			};
		}]);

		/***/
	},

	/***/"EUSv":
	/***/function EUSv(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__ = __webpack_require__("f4c1");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_const__ = __webpack_require__("7Lx1");

		angular.module('shark-angularjs.ui').directive(__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].tree, ['SharkConfig', function (SharkConfig) {
			var TreeConfig = SharkConfig.getConfig()[__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].tree];
			return {
				restrict: 'E',
				link: function link($scope, element, attrs) {
					var tree;
					var disableWatcher;
					//销毁函数
					function destroy() {
						if (disableWatcher) {
							disableWatcher();
						}
						if (tree) {
							tree.destroy();
							tree = null;
						}
					}
					// 回调函数
					var checkedCb = SharkConfig.getAttrValue($scope, attrs.onChecked);
					var selectedCb = SharkConfig.getAttrValue($scope, attrs.onSelected);
					// 是否可check
					var checkable = typeof attrs.checkable !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.checkable) : TreeConfig.checkable;
					// 是否自动关联
					var autolink = typeof attrs.autolink !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.autolink) : TreeConfig.autolink;
					// 是否可select
					var selectable = typeof attrs.selectable !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.selectable) : TreeConfig.selectable;
					// 是否需要预先展开树
					var preExpand = typeof attrs.preExpand !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.preExpand) : TreeConfig.preExpand;
					// 是否需要预先选中某些节点
					var preSelects = $scope.$eval(attrs.preSelects);
					// 如果定义了name属性，把tree组件赋给$scope
					var treeName = attrs.name;

					// 树的节点数据变化后，重置树
					$scope.$watch(function () {
						return $scope.$eval(attrs.data);
					}, function (newValue, oldValue) {
						if (!newValue) {
							return;
						}
						destroy();
						tree = __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].sharkTree({
							nodes: newValue,
							checkable: checkable,
							autolink: autolink,
							onNodeChecked: function onNodeChecked() {
								if (typeof checkedCb === 'function') {
									checkedCb.apply(tree, arguments);
									if (!$scope.$$phase) {
										$scope.$apply();
									}
								}
							},
							selectable: selectable,
							onNodeSelected: function onNodeSelected() {
								if (typeof selectedCb === 'function') {
									selectedCb.apply(tree, arguments);
									if (!$scope.$$phase) {
										$scope.$apply();
									}
								}
							}
						});
						tree.appendTo(element);
						if (preExpand) {
							tree.expandAll();
						}
						if (preSelects && angular.isArray(preSelects)) {
							for (var i = 0; i < preSelects.length; i++) {
								if (checkable) {
									tree.checkNode(preSelects[i]);
								}
								if (selectable) {
									tree.selectNode(preSelects[i]);
								}
							}
						}
						if (typeof attrs.ngDisabled !== 'undefined') {
							// 监听组件是否被禁用
							disableWatcher = $scope.$watch(function () {
								return $scope.$eval(attrs.ngDisabled);
							}, function (newValue, oldValue) {
								if (tree) {
									if (newValue === true) {
										tree.disable();
									}
									if (newValue === false) {
										tree.enable();
									}
								}
							});
						}
						if (treeName) {
							$scope[treeName] = tree;
						}
					}, true);

					// $scope销毁时同步销毁tree组件
					$scope.$on('$destroy', function () {
						destroy();
					});
				}
			};
		}]);

		/***/
	},

	/***/"GIzm":
	/***/function GIzm(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("7t+N");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_core__ = __webpack_require__("cmeh");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_event__ = __webpack_require__("z2OP");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__common_domhelper__ = __webpack_require__("HxaC");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__common_templates__ = __webpack_require__("NL2S");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__common_base__ = __webpack_require__("Wlz3");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__tree_checkable_ui__ = __webpack_require__("Bsg5");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_7__tree_selectable_ui__ = __webpack_require__("k88O");
		/**
   * @author sweetyx
   * @description 树插件
   */

		var template = __WEBPACK_IMPORTED_MODULE_4__common_templates__["a" /* Templates */].tree;
		var templateFun = __WEBPACK_IMPORTED_MODULE_4__common_templates__["a" /* Templates */].templateAoT(template);
		var isCalced = false;
		//缓存icon的宽度
		var baseIconWidth = 16;
		var calcWidth = function calcWidth() {
			if (isCalced) {
				return;
			}
			var iconWrap = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div class="shark-tree"><a class="tree-icon"></a></div>');
			__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).append(iconWrap);
			var icon = iconWrap.children('.tree-icon');
			baseIconWidth = icon.outerWidth();
			iconWrap.remove();
			isCalced = true;
		};
		/**
   * 展开节点
   * @param  {tree-icon-right,tree-icon-down} element [节点前面的 展开/收起 按钮]
   * @param  {object} config [配置项]
   */
		function unfoldNode(element, config) {
			var parentLable = element.parent();
			if (parentLable.attr('tree-unfold')) {
				//已展开过
				var next = parentLable.next();
				next.addClass('tree-open');
			} else {
				// 第一次展开
				var parentLi = parentLable.parent();
				var groupId = parentLable.attr('tree-group-id');
				var nodes = config.nodesMap[groupId].children;
				// 需要继承是否被check
				var checked = false;
				if (config.checkable) {
					checked = config.checkable && parentLable.find('.tree-icon-check').length > 0 && config.autolink === true;
				}
				//生成html
				var templateData = {
					nodes: nodes,
					checkable: config.checkable,
					checked: checked,
					baseIconWidth: baseIconWidth,
					basePl: parseInt(parentLi.children('.tree-group').css('padding-left')),
					isRoot: false
				};
				var ulHtml = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(templateFun.apply(templateData));
				parentLi.append(ulHtml);
				//已经展开，加上tree-unfold
				parentLable.attr('tree-unfold', true);
			}
			element.removeClass('tree-icon-right').addClass('tree-icon-down');
		}
		/**
   * 收起节点
   * @param  {tree-icon-right,tree-icon-down} element [节点前面的 展开/收起 按钮]
   */
		function foldNode(element) {
			var parentLable = element.parent();
			var nextUl = parentLable.next();
			if (nextUl.length > 0) {
				nextUl.removeClass('tree-open');
			}
			element.removeClass('tree-icon-down').addClass('tree-icon-right');
		}
		/**
   * 初始化树的所有节点
   * @param  {[type]} nodes      [节点数组]
   * @param  {[type]} nodesMap   [节点map]
   * @param  {[type]} parentNode [父节点]
   */
		function initNodesMap(nodes, nodesMap, parentNode) {
			if (!__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].isArray(nodes)) return;
			for (var i = 0; i < nodes.length; i++) {
				nodes[i].parentNode = parentNode || null;
				var n = nodes[i];
				var level = 1;
				while (n.parentNode) {
					level++;
					n = n.parentNode;
				}
				nodes[i].level = level;
				nodesMap[nodes[i].node_id] = nodes[i];
				initNodesMap(nodes[i].children, nodesMap, nodes[i]);
			}
		}
		//初始化树的第一层级dom
		function initDom(sharkComponent, config, targetElement) {
			var templateData = {
				nodes: config.nodes,
				checkable: config.checkable,
				checked: false,
				baseIconWidth: baseIconWidth,
				basePl: -baseIconWidth,
				isRoot: true
			};
			sharkComponent.createType = 'construct';
			sharkComponent.component = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(templateFun.apply(templateData));
			sharkComponent.component.addClass('shark-tree');
			if (targetElement) {
				targetElement.append(sharkComponent.component);
			}
			return sharkComponent;
		}
		//初始化事件
		function initEvents(sharkComponent, config) {
			var tree = sharkComponent.component;
			/**
    * 点击节点的 展开/收起 按钮
    */
			tree.on('click', '.tree-icon-right,.tree-icon-down', __WEBPACK_IMPORTED_MODULE_5__common_base__["a" /* BaseComponent */].filterComponentAction(tree, function (evt) {
				var iconEle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
				if (iconEle.hasClass('tree-icon-right')) {
					unfoldNode(iconEle, config);
				} else if (iconEle.hasClass('tree-icon-down')) {
					foldNode(iconEle);
				}
			}));
		}

		__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkTree = function (options, targetElement) {
			calcWidth();
			/*********默认参数配置*************/
			var config = {
				nodes: [],
				nodesMap: {}, //无需用户手动配置
				checkable: true, //是否可check
				autolink: true, //check一个节点后，是否关联其父节点和子节点的选中状态（只有checkable为true时才生效）
				selectable: false, //是否可select
				onNodeChecked: function onNodeChecked(node, isChecked) {},
				onNodeSelected: function onNodeSelected(node) {}
			};
			__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].extend(config, options);
			initNodesMap(config.nodes, config.nodesMap);
			/*********初始化组件*************/
			var sharkComponent = {};
			initDom(sharkComponent, config, targetElement);
			var tree = sharkComponent.component;
			__WEBPACK_IMPORTED_MODULE_5__common_base__["a" /* BaseComponent */].addComponentBaseFn(sharkComponent, config);
			initEvents(sharkComponent, config);
			//可check
			if (config.checkable) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__tree_checkable_ui__["a" /* makeCheckable */])(sharkComponent, config);
			}
			//可select
			if (config.selectable) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__tree_selectable_ui__["a" /* makeSelectable */])(sharkComponent, config);
			}
			/**********初始化***********************/
			/**
    * 按节点路径展开树
    * @param  {[]} path   [节点路径,eg.[{node_id:100},{node_id:110},{node_id:111}] 或者 [100,110,111]]
    */
			sharkComponent.expandByPath = function (path) {
				for (var i = 0; i < path.length; i++) {
					var nodeId = path[i].node_id || path[i];
					var groupEle = tree.find('.tree-group[tree-group-id="' + nodeId + '"]');
					var iconEle = groupEle.children('.tree-icon-right');
					if (iconEle.length > 0) {
						unfoldNode(iconEle, config);
					}
				}
			};
			/**
    * 按节点展开树
    * @param node   [节点id或者节点]
    */
			sharkComponent.expandByNode = function (node) {
				var nodeId = node || node.node_id;
				var tmpNode = config.nodesMap[nodeId];
				var path = [tmpNode];
				while (tmpNode.parentNode) {
					var tmpNode = tmpNode.parentNode;
					path.unshift(tmpNode);
				}
				sharkComponent.expandByPath(path);
			};
			/**
    * 展开树的全部节点
    */
			sharkComponent.expandAll = function () {
				var expandAll = function expandAll(nodesArr) {
					if (!__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].isArray(nodesArr)) {
						return;
					}
					for (var i = 0; i < nodesArr.length; i++) {
						sharkComponent.expandByPath([nodesArr[i]]);
						expandAll(nodesArr[i].children);
					}
				};
				return function () {
					expandAll(config.nodes);
				};
			}();
			/**
    * 搜索树的节点
    * @param  {[string]} keyword [搜索关键字]
    * @return {[node]}         [节点数组]
    */
			sharkComponent.search = function (keyword) {
				var result = [];
				for (var p in config.nodesMap) {
					if (config.nodesMap.hasOwnProperty(p) && !__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].isEmpty(config.nodesMap[p].node_name) && config.nodesMap[p].node_name.indexOf(keyword) !== -1) {
						result.push(config.nodesMap[p]);
					}
				}
				return result;
			};
			/**
    * 销毁树
    */
			sharkComponent.destroy = function () {
				sharkComponent.component.remove();
				sharkComponent = null;
			};
			return sharkComponent;
		};

		/***/
	},

	/***/"GeeO":
	/***/function GeeO(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("7t+N");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_core__ = __webpack_require__("cmeh");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_templates__ = __webpack_require__("NL2S");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__common_base__ = __webpack_require__("Wlz3");
		/**
   * @author lingqiao
   * @description 提示框插件
   */

		var template = __WEBPACK_IMPORTED_MODULE_2__common_templates__["a" /* Templates */].toastr;
		var templateFun = __WEBPACK_IMPORTED_MODULE_2__common_templates__["a" /* Templates */].templateAoT(template);
		var container; // toastr的父容器
		var toastrArr = [];
		// 创建父容器
		function initContainer() {
			container = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div class="shark-toastr-container" style="position:fixed;"></div>');
			__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).append(container);
		}
		//初始化toastr的dom
		function initDom(sharkComponent, config) {
			var templateData = {
				type: config.type,
				content: config.content
			};
			sharkComponent.component = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(templateFun.apply(templateData));
			sharkComponent.toastrId = __WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].createUUID();
			return sharkComponent;
		}
		//移除toastr
		function doDestroy(sharkComponent) {
			var toastr = sharkComponent.component;
			clearTimeout(sharkComponent.timer);
			toastr.hide();
			toastr.remove();
		}
		// 从队列中移除toastr
		function destroyToastrs(id) {
			for (var i = 0; i < toastrArr.length; i++) {
				var component = toastrArr[i];
				if (id) {
					if (component.toastrId === id) {
						doDestroy(component);
						toastrArr.splice(i, 1);
						break;
					}
				} else {
					doDestroy(component);
					toastrArr.splice(i, 1);
					i--;
				}
			}
		}
		// 显示toastr
		function showToastr(sharkComponent, config) {
			var toastr = sharkComponent.component;
			toastr.show();
			sharkComponent.toastrTimer = setTimeout(function () {
				destroyToastrs(sharkComponent.toastrId);
			}, config.duration);
		}
		__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkToastr = function (options) {
			/*********默认参数配置*************/
			var config = {
				content: '', // 提示内容
				type: 'success', // 提示类型
				duration: 2000 // 停留时间
			};
			__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].extend(config, options);
			if (!container) {
				// 如果父容器不存在，则创建父容器
				initContainer();
			}
			/*********初始化组件*************/
			var sharkComponent = {};
			initDom(sharkComponent, config);
			__WEBPACK_IMPORTED_MODULE_3__common_base__["a" /* BaseComponent */].addComponentBaseFn(sharkComponent, config);
			if (!__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkToastr.multiply) {
				// 如果不允许展示多个提示，则先清空
				destroyToastrs();
			}
			toastrArr.push(sharkComponent);
			container.prepend(sharkComponent.component);
			showToastr(sharkComponent, config);
		};
		__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkToastr.multiply = true;

		/***/
	},

	/***/"GxBP":
	/***/function GxBP(module, exports, __webpack_require__) {

		var _extends = Object.assign || function (target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}return target;
		};

		var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
			return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
		} : function (obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
		};

		/*! flatpickr v3.0.5-1, @license MIT */
		function FlatpickrInstance(element, config) {
			var self = this;

			self._ = {};
			self._.afterDayAnim = afterDayAnim;
			self._bind = bind;
			self._compareDates = compareDates;
			self._setHoursFromDate = setHoursFromDate;
			self.changeMonth = changeMonth;
			self.changeYear = changeYear;
			self.clear = clear;
			self.close = close;
			self._createElement = createElement;
			self.destroy = destroy;
			self.isEnabled = isEnabled;
			self.jumpToDate = jumpToDate;
			self.open = open;
			self.redraw = redraw;
			self.set = set;
			self.setDate = setDate;
			self.toggle = toggle;

			function init() {
				self.element = self.input = element;
				self.instanceConfig = config || {};
				self.parseDate = FlatpickrInstance.prototype.parseDate.bind(self);
				self.formatDate = FlatpickrInstance.prototype.formatDate.bind(self);

				setupFormats();
				parseConfig();
				setupLocale();
				setupInputs();
				setupDates();
				setupHelperFunctions();

				self.isOpen = false;

				self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

				if (!self.isMobile) build();

				bindEvents();

				if (self.selectedDates.length || self.config.noCalendar) {
					if (self.config.enableTime) {
						setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj || self.config.minDate : null);
					}
					updateValue();
				}

				self.showTimeInput = self.selectedDates.length > 0 || self.config.noCalendar;

				if (self.config.weekNumbers) {
					self.calendarContainer.style.width = self.daysContainer.offsetWidth + self.weekWrapper.offsetWidth + "px";
				}

				if (!self.isMobile) positionCalendar();

				triggerEvent("Ready");
			}

			/**
    * Binds a function to the current flatpickr instance
    * @param {Function} fn the function
    * @return {Function} the function bound to the instance
    */
			function bindToInstance(fn) {
				return fn.bind(self);
			}

			/**
    * The handler for all events targeting the time inputs
    * @param {Event} e the event - "input", "wheel", "increment", etc
    */
			function updateTime(e) {
				if (self.config.noCalendar && !self.selectedDates.length)
					// picking time only
					self.selectedDates = [self.now];

				timeWrapper(e);

				if (!self.selectedDates.length) return;

				if (!self.minDateHasTime || e.type !== "input" || e.target.value.length >= 2) {
					setHoursFromInputs();
					updateValue();
				} else {
					setTimeout(function () {
						setHoursFromInputs();
						updateValue();
					}, 1000);
				}
			}

			/**
    * Syncs the selected date object time with user's time input
    */
			function setHoursFromInputs() {
				if (!self.config.enableTime) return;

				var hours = (parseInt(self.hourElement.value, 10) || 0) % (self.amPM ? 12 : 24),
				    minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
				    seconds = self.config.enableSeconds ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

				if (self.amPM !== undefined) hours = hours % 12 + 12 * (self.amPM.textContent === "PM");

				if (self.minDateHasTime && compareDates(self.latestSelectedDateObj, self.config.minDate) === 0) {

					hours = Math.max(hours, self.config.minDate.getHours());
					if (hours === self.config.minDate.getHours()) minutes = Math.max(minutes, self.config.minDate.getMinutes());
				}

				if (self.maxDateHasTime && compareDates(self.latestSelectedDateObj, self.config.maxDate) === 0) {
					hours = Math.min(hours, self.config.maxDate.getHours());
					if (hours === self.config.maxDate.getHours()) minutes = Math.min(minutes, self.config.maxDate.getMinutes());
				}

				setHours(hours, minutes, seconds);
			}

			/**
    * Syncs time input values with a date
    * @param {Date} dateObj the date to sync with
    */
			function setHoursFromDate(dateObj) {
				var date = dateObj || self.latestSelectedDateObj;

				if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
			}

			/**
    * Sets the hours, minutes, and optionally seconds
    * of the latest selected date object and the
    * corresponding time inputs
    * @param {Number} hours the hour. whether its military
    *                 or am-pm gets inferred from config
    * @param {Number} minutes the minutes
    * @param {Number} seconds the seconds (optional)
    */
			function setHours(hours, minutes, seconds) {
				if (self.selectedDates.length) {
					self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
				}

				if (!self.config.enableTime || self.isMobile) return;

				self.hourElement.value = self.pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (hours % 12 === 0) : hours);

				self.minuteElement.value = self.pad(minutes);

				if (!self.config.time_24hr) self.amPM.textContent = hours >= 12 ? "PM" : "AM";

				if (self.config.enableSeconds === true) self.secondElement.value = self.pad(seconds);
			}

			/**
    * Handles the year input and incrementing events
    * @param {Event} event the keyup or increment event
    */
			function onYearInput(event) {
				var year = event.target.value;
				if (event.delta) year = (parseInt(year) + event.delta).toString();

				if (year.length === 4 || event.key === "Enter") {
					self.currentYearElement.blur();
					if (!/[^\d]/.test(year)) changeYear(year);
				}
			}

			/**
    * Essentially addEventListener + tracking
    * @param {Element} element the element to addEventListener to
    * @param {String} event the event name
    * @param {Function} handler the event handler
    */
			function bind(element, event, handler) {
				if (event instanceof Array) return event.forEach(function (ev) {
					return bind(element, ev, handler);
				});

				if (element instanceof Array) return element.forEach(function (el) {
					return bind(el, event, handler);
				});

				element.addEventListener(event, handler);
				self._handlers.push({ element: element, event: event, handler: handler });
			}

			/**
    * A mousedown handler which mimics click.
    * Minimizes latency, since we don't need to wait for mouseup in most cases.
    * Also, avoids handling right clicks.
    *
    * @param {Function} handler the event handler
    */
			function onClick(handler) {
				return function (evt) {
					return evt.which === 1 && handler(evt);
				};
			}

			/**
    * Adds all the necessary event listeners
    */
			function bindEvents() {
				self._handlers = [];
				self._animationLoop = [];
				if (self.config.wrap) {
					["open", "close", "toggle", "clear"].forEach(function (evt) {
						Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
							return bind(el, "mousedown", onClick(self[evt]));
						});
					});
				}

				if (self.isMobile) return setupMobile();

				self.debouncedResize = debounce(onResize, 50);
				self.triggerChange = function () {
					triggerEvent("Change");
				};
				self.debouncedChange = debounce(self.triggerChange, 300);

				if (self.config.mode === "range" && self.daysContainer) bind(self.daysContainer, "mouseover", function (e) {
					return onMouseOver(e.target);
				});

				bind(window.document.body, "keydown", onKeyDown);

				if (!self.config.static) bind(self._input, "keydown", onKeyDown);

				if (!self.config.inline && !self.config.static) bind(window, "resize", self.debouncedResize);

				if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);

				bind(window.document, "mousedown", onClick(documentClick));
				bind(self._input, "blur", documentClick);

				if (self.config.clickOpens === true) {
					bind(self._input, "focus", self.open);
					bind(self._input, "mousedown", onClick(self.open));
				}

				if (!self.config.noCalendar) {
					self.monthNav.addEventListener("wheel", function (e) {
						return e.preventDefault();
					});
					bind(self.monthNav, "wheel", debounce(onMonthNavScroll, 10));
					bind(self.monthNav, "mousedown", onClick(onMonthNavClick));

					bind(self.monthNav, ["keyup", "increment"], onYearInput);
					bind(self.daysContainer, "mousedown", onClick(selectDate));

					if (self.config.animate) {
						bind(self.daysContainer, ["webkitAnimationEnd", "animationend"], animateDays);
						bind(self.monthNav, ["webkitAnimationEnd", "animationend"], animateMonths);
					}
				}

				if (self.config.enableTime) {
					var selText = function selText(e) {
						return e.target.select();
					};
					bind(self.timeContainer, ["wheel", "input", "increment"], updateTime);
					bind(self.timeContainer, "mousedown", onClick(timeIncrement));

					bind(self.timeContainer, ["wheel", "increment"], self.debouncedChange);
					bind(self.timeContainer, "input", self.triggerChange);

					bind([self.hourElement, self.minuteElement], "focus", selText);

					if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
						return self.secondElement.select();
					});

					if (self.amPM !== undefined) {
						bind(self.amPM, "mousedown", onClick(function (e) {
							updateTime(e);
							self.triggerChange(e);
						}));
					}
				}
			}

			function processPostDayAnimation() {
				for (var i = self._animationLoop.length; i--;) {
					self._animationLoop[i]();
					self._animationLoop.splice(i, 1);
				}
			}

			/**
    * Removes the day container that slided out of view
    * @param {Event} e the animation event
    */
			function animateDays(e) {
				if (self.daysContainer.childNodes.length > 1) {
					switch (e.animationName) {
						case "fpSlideLeft":
							self.daysContainer.lastChild.classList.remove("slideLeftNew");
							self.daysContainer.removeChild(self.daysContainer.firstChild);
							self.days = self.daysContainer.firstChild;
							processPostDayAnimation();

							break;

						case "fpSlideRight":
							self.daysContainer.firstChild.classList.remove("slideRightNew");
							self.daysContainer.removeChild(self.daysContainer.lastChild);
							self.days = self.daysContainer.firstChild;
							processPostDayAnimation();

							break;

						default:
							break;
					}
				}
			}

			/**
    * Removes the month element that animated out of view
    * @param {Event} e the animation event
    */
			function animateMonths(e) {
				switch (e.animationName) {
					case "fpSlideLeftNew":
					case "fpSlideRightNew":
						self.navigationCurrentMonth.classList.remove("slideLeftNew");
						self.navigationCurrentMonth.classList.remove("slideRightNew");
						var nav = self.navigationCurrentMonth;

						while (nav.nextSibling && /curr/.test(nav.nextSibling.className)) {
							self.monthNav.removeChild(nav.nextSibling);
						}while (nav.previousSibling && /curr/.test(nav.previousSibling.className)) {
							self.monthNav.removeChild(nav.previousSibling);
						}self.oldCurMonth = null;
						break;
				}
			}

			/**
    * Set the calendar view to a particular date.
    * @param {Date} jumpDate the date to set the view to
    */
			function jumpToDate(jumpDate) {
				jumpDate = jumpDate ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);

				try {
					self.currentYear = jumpDate.getFullYear();
					self.currentMonth = jumpDate.getMonth();
				} catch (e) {
					/* istanbul ignore next */
					console.error(e.stack);
					/* istanbul ignore next */
					console.warn("Invalid date supplied: " + jumpDate);
				}

				self.redraw();
			}

			/**
    * The up/down arrow handler for time inputs
    * @param {Event} e the click event
    */
			function timeIncrement(e) {
				if (~e.target.className.indexOf("arrow")) incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
			}

			/**
    * Increments/decrements the value of input associ-
    * ated with the up/down arrow by dispatching an
    * "increment" event on the input.
    *
    * @param {Event} e the click event
    * @param {Number} delta the diff (usually 1 or -1)
    * @param {Element} inputElem the input element
    */
			function incrementNumInput(e, delta, inputElem) {
				var input = inputElem || e.target.parentNode.childNodes[0];
				var event = createEvent("increment");
				event.delta = delta;
				input.dispatchEvent(event);
			}

			function createNumberInput(inputClassName) {
				var wrapper = createElement("div", "numInputWrapper"),
				    numInput = createElement("input", "numInput " + inputClassName),
				    arrowUp = createElement("span", "arrowUp"),
				    arrowDown = createElement("span", "arrowDown");

				numInput.type = "text";
				numInput.pattern = "\\d*";

				wrapper.appendChild(numInput);
				wrapper.appendChild(arrowUp);
				wrapper.appendChild(arrowDown);

				return wrapper;
			}

			function build() {
				var fragment = window.document.createDocumentFragment();
				self.calendarContainer = createElement("div", "flatpickr-calendar");
				self.calendarContainer.tabIndex = -1;

				if (!self.config.noCalendar) {
					fragment.appendChild(buildMonthNav());
					self.innerContainer = createElement("div", "flatpickr-innerContainer");

					if (self.config.weekNumbers) self.innerContainer.appendChild(buildWeeks());

					self.rContainer = createElement("div", "flatpickr-rContainer");
					self.rContainer.appendChild(buildWeekdays());

					if (!self.daysContainer) {
						self.daysContainer = createElement("div", "flatpickr-days");
						self.daysContainer.tabIndex = -1;
					}

					buildDays();
					self.rContainer.appendChild(self.daysContainer);

					self.innerContainer.appendChild(self.rContainer);
					fragment.appendChild(self.innerContainer);
				}

				if (self.config.enableTime) fragment.appendChild(buildTime());

				toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
				toggleClass(self.calendarContainer, "animate", self.config.animate);

				self.calendarContainer.appendChild(fragment);

				var customAppend = self.config.appendTo && self.config.appendTo.nodeType;

				if (self.config.inline || self.config.static) {
					self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

					if (self.config.inline && !customAppend) {
						return self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
					}

					if (self.config.static) {
						var wrapper = createElement("div", "flatpickr-wrapper");
						self.element.parentNode.insertBefore(wrapper, self.element);
						wrapper.appendChild(self.element);

						if (self.altInput) wrapper.appendChild(self.altInput);

						wrapper.appendChild(self.calendarContainer);
						return;
					}
				}

				(customAppend ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
			}

			function createDay(className, date, dayNumber, i) {
				var dateIsEnabled = isEnabled(date, true),
				    dayElement = createElement("span", "flatpickr-day " + className, date.getDate());

				dayElement.dateObj = date;
				dayElement.$i = i;
				dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

				if (compareDates(date, self.now) === 0) {
					self.todayDateElem = dayElement;
					dayElement.classList.add("today");
				}

				if (dateIsEnabled) {
					dayElement.tabIndex = -1;
					if (isDateSelected(date)) {
						dayElement.classList.add("selected");
						self.selectedDateElem = dayElement;
						if (self.config.mode === "range") {
							toggleClass(dayElement, "startRange", compareDates(date, self.selectedDates[0]) === 0);

							toggleClass(dayElement, "endRange", compareDates(date, self.selectedDates[1]) === 0);
						}
					}
				} else {
					dayElement.classList.add("disabled");
					if (self.selectedDates[0] && date > self.minRangeDate && date < self.selectedDates[0]) self.minRangeDate = date;else if (self.selectedDates[0] && date < self.maxRangeDate && date > self.selectedDates[0]) self.maxRangeDate = date;
				}

				if (self.config.mode === "range") {
					if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");

					if (self.selectedDates.length === 1 && (date < self.minRangeDate || date > self.maxRangeDate)) dayElement.classList.add("notAllowed");
				}

				if (self.config.weekNumbers && className !== "prevMonthDay" && dayNumber % 7 === 1) {
					self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='disabled flatpickr-day'>" + self.config.getWeek(date) + "</span>");
				}

				triggerEvent("DayCreate", dayElement);

				return dayElement;
			}

			function focusOnDay(currentIndex, offset) {
				var newIndex = currentIndex + offset || 0,
				    targetNode = currentIndex !== undefined ? self.days.childNodes[newIndex] : self.selectedDateElem || self.todayDateElem || self.days.childNodes[0],
				    focus = function focus() {
					targetNode = targetNode || self.days.childNodes[newIndex];
					targetNode.focus();

					if (self.config.mode === "range") onMouseOver(targetNode);
				};

				if (targetNode === undefined && offset !== 0) {
					if (offset > 0) {
						self.changeMonth(1);
						newIndex = newIndex % 42;
					} else if (offset < 0) {
						self.changeMonth(-1);
						newIndex += 42;
					}

					return afterDayAnim(focus);
				}

				focus();
			}

			function afterDayAnim(fn) {
				if (self.config.animate === true) return self._animationLoop.push(fn);
				fn();
			}

			function buildDays(delta) {
				var firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7,
				    isRangeMode = self.config.mode === "range";

				self.prevMonthDays = self.utils.getDaysinMonth((self.currentMonth - 1 + 12) % 12);
				self.selectedDateElem = undefined;
				self.todayDateElem = undefined;

				var daysInMonth = self.utils.getDaysinMonth(),
				    days = window.document.createDocumentFragment();

				var dayNumber = self.prevMonthDays + 1 - firstOfMonth,
				    dayIndex = 0;

				if (self.config.weekNumbers && self.weekNumbers.firstChild) self.weekNumbers.textContent = "";

				if (isRangeMode) {
					// const dateLimits = self.config.enable.length || self.config.disable.length || self.config.mixDate || self.config.maxDate;
					self.minRangeDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber);
					self.maxRangeDate = new Date(self.currentYear, self.currentMonth + 1, (42 - firstOfMonth) % daysInMonth);
				}

				// prepend days from the ending of previous month
				for (; dayNumber <= self.prevMonthDays; dayNumber++, dayIndex++) {
					days.appendChild(createDay("prevMonthDay", new Date(self.currentYear, self.currentMonth - 1, dayNumber), dayNumber, dayIndex));
				}

				// Start at 1 since there is no 0th day
				for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
					days.appendChild(createDay("", new Date(self.currentYear, self.currentMonth, dayNumber), dayNumber, dayIndex));
				}

				// append days from the next month
				for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth; dayNum++, dayIndex++) {
					days.appendChild(createDay("nextMonthDay", new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth), dayNum, dayIndex));
				}

				if (isRangeMode && self.selectedDates.length === 1 && days.childNodes[0]) {
					self._hidePrevMonthArrow = self._hidePrevMonthArrow || self.minRangeDate > days.childNodes[0].dateObj;

					self._hideNextMonthArrow = self._hideNextMonthArrow || self.maxRangeDate < new Date(self.currentYear, self.currentMonth + 1, 1);
				} else updateNavigationCurrentMonth();

				var dayContainer = createElement("div", "dayContainer");
				dayContainer.appendChild(days);

				if (!self.config.animate || delta === undefined) clearNode(self.daysContainer);else {
					while (self.daysContainer.childNodes.length > 1) {
						self.daysContainer.removeChild(self.daysContainer.firstChild);
					}
				}

				if (delta >= 0) self.daysContainer.appendChild(dayContainer);else self.daysContainer.insertBefore(dayContainer, self.daysContainer.firstChild);

				self.days = self.daysContainer.firstChild;
				return self.daysContainer;
			}

			function clearNode(node) {
				while (node.firstChild) {
					node.removeChild(node.firstChild);
				}
			}

			function buildMonthNav() {
				var monthNavFragment = window.document.createDocumentFragment();
				self.monthNav = createElement("div", "flatpickr-month");

				self.prevMonthNav = createElement("span", "flatpickr-prev-month");
				self.prevMonthNav.innerHTML = self.config.prevArrow;

				self.currentMonthElement = createElement("span", "cur-month");
				self.currentMonthElement.title = self.l10n.scrollTitle;

				var yearInput = createNumberInput("cur-year");
				self.currentYearElement = yearInput.childNodes[0];
				self.currentYearElement.title = self.l10n.scrollTitle;

				if (self.config.minDate) self.currentYearElement.min = self.config.minDate.getFullYear();

				if (self.config.maxDate) {
					self.currentYearElement.max = self.config.maxDate.getFullYear();

					self.currentYearElement.disabled = self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
				}

				self.nextMonthNav = createElement("span", "flatpickr-next-month");
				self.nextMonthNav.innerHTML = self.config.nextArrow;

				self.navigationCurrentMonth = createElement("span", "flatpickr-current-month");
				self.navigationCurrentMonth.appendChild(self.currentMonthElement);
				self.navigationCurrentMonth.appendChild(yearInput);

				monthNavFragment.appendChild(self.prevMonthNav);
				monthNavFragment.appendChild(self.navigationCurrentMonth);
				monthNavFragment.appendChild(self.nextMonthNav);
				self.monthNav.appendChild(monthNavFragment);

				Object.defineProperty(self, "_hidePrevMonthArrow", {
					get: function get() {
						return this.__hidePrevMonthArrow;
					},
					set: function set(bool) {
						if (this.__hidePrevMonthArrow !== bool) self.prevMonthNav.style.display = bool ? "none" : "block";
						this.__hidePrevMonthArrow = bool;
					}
				});

				Object.defineProperty(self, "_hideNextMonthArrow", {
					get: function get() {
						return this.__hideNextMonthArrow;
					},
					set: function set(bool) {
						if (this.__hideNextMonthArrow !== bool) self.nextMonthNav.style.display = bool ? "none" : "block";
						this.__hideNextMonthArrow = bool;
					}
				});

				updateNavigationCurrentMonth();

				return self.monthNav;
			}

			function buildTime() {
				self.calendarContainer.classList.add("hasTime");
				if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
				self.timeContainer = createElement("div", "flatpickr-time");
				self.timeContainer.tabIndex = -1;
				var separator = createElement("span", "flatpickr-time-separator", ":");

				var hourInput = createNumberInput("flatpickr-hour");
				self.hourElement = hourInput.childNodes[0];

				var minuteInput = createNumberInput("flatpickr-minute");
				self.minuteElement = minuteInput.childNodes[0];

				self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;

				self.hourElement.value = self.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.defaultHour);

				self.minuteElement.value = self.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);

				self.hourElement.step = self.config.hourIncrement;
				self.minuteElement.step = self.config.minuteIncrement;

				self.hourElement.min = self.config.time_24hr ? 0 : 1;
				self.hourElement.max = self.config.time_24hr ? 23 : 12;

				self.minuteElement.min = 0;
				self.minuteElement.max = 59;

				self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;

				self.timeContainer.appendChild(hourInput);
				self.timeContainer.appendChild(separator);
				self.timeContainer.appendChild(minuteInput);

				if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

				if (self.config.enableSeconds) {
					self.timeContainer.classList.add("hasSeconds");

					var secondInput = createNumberInput("flatpickr-second");
					self.secondElement = secondInput.childNodes[0];

					self.secondElement.value = self.latestSelectedDateObj ? self.pad(self.latestSelectedDateObj.getSeconds()) : "00";

					self.secondElement.step = self.minuteElement.step;
					self.secondElement.min = self.minuteElement.min;
					self.secondElement.max = self.minuteElement.max;

					self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
					self.timeContainer.appendChild(secondInput);
				}

				if (!self.config.time_24hr) {
					// add self.amPM if appropriate
					self.amPM = createElement("span", "flatpickr-am-pm", ["AM", "PM"][self.hourElement.value > 11 | 0]);
					self.amPM.title = self.l10n.toggleTitle;
					self.amPM.tabIndex = -1;
					self.timeContainer.appendChild(self.amPM);
				}

				return self.timeContainer;
			}

			function buildWeekdays() {
				if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");

				var firstDayOfWeek = self.l10n.firstDayOfWeek;
				var weekdays = self.l10n.weekdays.shorthand.slice();

				if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
					weekdays = [].concat(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
				}

				self.weekdayContainer.innerHTML = "\n\t\t<span class=flatpickr-weekday>\n\t\t\t" + weekdays.join("</span><span class=flatpickr-weekday>") + "\n\t\t</span>\n\t\t";

				return self.weekdayContainer;
			}

			/* istanbul ignore next */
			function buildWeeks() {
				self.calendarContainer.classList.add("hasWeeks");
				self.weekWrapper = createElement("div", "flatpickr-weekwrapper");
				self.weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
				self.weekNumbers = createElement("div", "flatpickr-weeks");
				self.weekWrapper.appendChild(self.weekNumbers);

				return self.weekWrapper;
			}

			function changeMonth(value, is_offset, animate) {
				is_offset = is_offset === undefined || is_offset;
				var delta = is_offset ? value : value - self.currentMonth;
				var skipAnimations = !self.config.animate || animate === false;

				if (delta < 0 && self._hidePrevMonthArrow || delta > 0 && self._hideNextMonthArrow) return;

				self.currentMonth += delta;

				if (self.currentMonth < 0 || self.currentMonth > 11) {
					self.currentYear += self.currentMonth > 11 ? 1 : -1;
					self.currentMonth = (self.currentMonth + 12) % 12;

					triggerEvent("YearChange");
				}

				buildDays(!skipAnimations ? delta : undefined);

				if (skipAnimations) {
					triggerEvent("MonthChange");
					return updateNavigationCurrentMonth();
				}

				// remove possible remnants from clicking too fast
				var nav = self.navigationCurrentMonth;
				if (delta < 0) {
					while (nav.nextSibling && /curr/.test(nav.nextSibling.className)) {
						self.monthNav.removeChild(nav.nextSibling);
					}
				} else if (delta > 0) {
					while (nav.previousSibling && /curr/.test(nav.previousSibling.className)) {
						self.monthNav.removeChild(nav.previousSibling);
					}
				}

				self.oldCurMonth = self.navigationCurrentMonth;

				self.navigationCurrentMonth = self.monthNav.insertBefore(self.oldCurMonth.cloneNode(true), delta > 0 ? self.oldCurMonth.nextSibling : self.oldCurMonth);

				if (delta > 0) {
					self.daysContainer.firstChild.classList.add("slideLeft");
					self.daysContainer.lastChild.classList.add("slideLeftNew");

					self.oldCurMonth.classList.add("slideLeft");
					self.navigationCurrentMonth.classList.add("slideLeftNew");
				} else if (delta < 0) {
					self.daysContainer.firstChild.classList.add("slideRightNew");
					self.daysContainer.lastChild.classList.add("slideRight");

					self.oldCurMonth.classList.add("slideRight");
					self.navigationCurrentMonth.classList.add("slideRightNew");
				}

				self.currentMonthElement = self.navigationCurrentMonth.firstChild;
				self.currentYearElement = self.navigationCurrentMonth.lastChild.childNodes[0];

				updateNavigationCurrentMonth();
				self.oldCurMonth.firstChild.textContent = self.utils.monthToStr(self.currentMonth - delta);

				triggerEvent("MonthChange");

				if (document.activeElement && document.activeElement.$i) {
					var index = document.activeElement.$i;
					afterDayAnim(function () {
						focusOnDay(index, 0);
					});
				}
			}

			function clear(triggerChangeEvent) {
				self.input.value = "";

				if (self.altInput) self.altInput.value = "";

				if (self.mobileInput) self.mobileInput.value = "";

				self.selectedDates = [];
				self.latestSelectedDateObj = undefined;
				self.showTimeInput = false;

				self.redraw();

				if (triggerChangeEvent !== false)
					// triggerChangeEvent is true (default) or an Event
					triggerEvent("Change");
			}

			function close() {
				self.isOpen = false;

				if (!self.isMobile) {
					self.calendarContainer.classList.remove("open");
					self._input.classList.remove("active");
				}

				triggerEvent("Close");
			}

			function destroy() {
				if (self.config !== undefined) triggerEvent("Destroy");

				for (var i = self._handlers.length; i--;) {
					var h = self._handlers[i];
					h.element.removeEventListener(h.event, h.handler);
				}

				self._handlers = [];

				if (self.mobileInput) {
					if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
					self.mobileInput = null;
				} else if (self.calendarContainer && self.calendarContainer.parentNode) self.calendarContainer.parentNode.removeChild(self.calendarContainer);

				if (self.altInput) {
					self.input.type = "text";
					if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
					delete self.altInput;
				}

				if (self.input) {
					self.input.type = self.input._type;
					self.input.classList.remove("flatpickr-input");
					self.input.removeAttribute("readonly");
					self.input.value = "";
				}

				["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
					return delete self[k];
				});
			}

			function isCalendarElem(elem) {
				if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;

				return self.calendarContainer.contains(elem);
			}

			function documentClick(e) {
				if (self.isOpen && !self.config.inline) {
					var isCalendarElement = isCalendarElem(e.target);
					var isInput = e.target === self.input || e.target === self.altInput || self.element.contains(e.target) ||
					// web components
					e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));

					var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement;

					if (lostFocus && self.config.ignoredFocusElements.indexOf(e.target) === -1) {
						self.close();

						if (self.config.mode === "range" && self.selectedDates.length === 1) {
							self.clear(false);
							self.redraw();
						}
					}
				}
			}

			function changeYear(newYear) {
				if (!newYear || self.currentYearElement.min && newYear < self.currentYearElement.min || self.currentYearElement.max && newYear > self.currentYearElement.max) return;

				var newYearNum = parseInt(newYear, 10),
				    isNewYear = self.currentYear !== newYearNum;

				self.currentYear = newYearNum || self.currentYear;

				if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
					self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
				} else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
					self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
				}

				if (isNewYear) {
					self.redraw();
					triggerEvent("YearChange");
				}
			}

			function isEnabled(date, timeless) {
				if (self.config.minDate && compareDates(date, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && compareDates(date, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;

				if (!self.config.enable.length && !self.config.disable.length) return true;

				var dateToCheck = self.parseDate(date, null, true); // timeless

				var bool = self.config.enable.length > 0,
				    array = bool ? self.config.enable : self.config.disable;

				for (var i = 0, d; i < array.length; i++) {
					d = array[i];

					if (d instanceof Function && d(dateToCheck)) // disabled by function
						return bool;else if (d instanceof Date && d.getTime() === dateToCheck.getTime())
						// disabled by date
						return bool;else if (typeof d === "string" && self.parseDate(d, null, true).getTime() === dateToCheck.getTime())
						// disabled by date string
						return bool;else if ( // disabled by range
					(typeof d === "undefined" ? "undefined" : _typeof(d)) === "object" && d.from && d.to && dateToCheck >= d.from && dateToCheck <= d.to) return bool;
				}

				return !bool;
			}

			function onKeyDown(e) {
				var isInput = e.target === self._input;
				var calendarElem = isCalendarElem(e.target);
				var allowInput = self.config.allowInput;
				var allowKeydown = self.isOpen && (!allowInput || !isInput);
				var allowInlineKeydown = self.config.inline && isInput && !allowInput;

				if (e.key === "Enter" && allowInput && isInput) {
					self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
					return e.target.blur();
				} else if (calendarElem || allowKeydown || allowInlineKeydown) {
					var isTimeObj = self.timeContainer && self.timeContainer.contains(e.target);
					switch (e.key) {
						case "Enter":
							if (isTimeObj) updateValue();else selectDate(e);

							break;

						case "Escape":
							// escape
							e.preventDefault();
							self.close();
							break;

						case "ArrowLeft":
						case "ArrowRight":
							if (!isTimeObj) {
								e.preventDefault();

								if (self.daysContainer) {
									var _delta = e.key === "ArrowRight" ? 1 : -1;

									if (!e.ctrlKey) focusOnDay(e.target.$i, _delta);else changeMonth(_delta, true);
								} else if (self.config.enableTime && !isTimeObj) self.hourElement.focus();
							}

							break;

						case "ArrowUp":
						case "ArrowDown":
							e.preventDefault();
							var delta = e.key === "ArrowDown" ? 1 : -1;

							if (self.daysContainer) {
								if (e.ctrlKey) {
									changeYear(self.currentYear - delta);
									focusOnDay(e.target.$i, 0);
								} else if (!isTimeObj) focusOnDay(e.target.$i, delta * 7);
							} else if (self.config.enableTime) {
								if (!isTimeObj) self.hourElement.focus();
								updateTime(e);
							}

							break;

						case "Tab":
							if (e.target === self.hourElement) {
								e.preventDefault();
								self.minuteElement.select();
							} else if (e.target === self.minuteElement && (self.secondElement || self.amPM)) {
								e.preventDefault();
								(self.secondElement || self.amPM).focus();
							} else if (e.target === self.secondElement) {
								e.preventDefault();
								self.amPM.focus();
							}

							break;

						case "a":
							if (e.target === self.amPM) {
								self.amPM.textContent = "AM";
								setHoursFromInputs();
								updateValue();
							}
							break;

						case "p":
							if (e.target === self.amPM) {
								self.amPM.textContent = "PM";
								setHoursFromInputs();
								updateValue();
							}
							break;

						default:
							break;

					}

					triggerEvent("KeyDown", e);
				}
			}

			function onMouseOver(elem) {
				if (self.selectedDates.length !== 1 || !elem.classList.contains("flatpickr-day")) return;

				var hoverDate = elem.dateObj,
				    initialDate = self.parseDate(self.selectedDates[0], null, true),
				    rangeStartDate = Math.min(hoverDate.getTime(), self.selectedDates[0].getTime()),
				    rangeEndDate = Math.max(hoverDate.getTime(), self.selectedDates[0].getTime()),
				    containsDisabled = false;

				for (var t = rangeStartDate; t < rangeEndDate; t += self.utils.duration.DAY) {
					if (!isEnabled(new Date(t))) {
						containsDisabled = true;
						break;
					}
				}

				var _loop = function _loop(timestamp, i) {
					var outOfRange = timestamp < self.minRangeDate.getTime() || timestamp > self.maxRangeDate.getTime(),
					    dayElem = self.days.childNodes[i];

					if (outOfRange) {
						self.days.childNodes[i].classList.add("notAllowed");
						["inRange", "startRange", "endRange"].forEach(function (c) {
							dayElem.classList.remove(c);
						});
						return "continue";
					} else if (containsDisabled && !outOfRange) return "continue";

					["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
						dayElem.classList.remove(c);
					});

					var minRangeDate = Math.max(self.minRangeDate.getTime(), rangeStartDate),
					    maxRangeDate = Math.min(self.maxRangeDate.getTime(), rangeEndDate);

					elem.classList.add(hoverDate < self.selectedDates[0] ? "startRange" : "endRange");

					if (initialDate < hoverDate && timestamp === initialDate.getTime()) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate.getTime()) dayElem.classList.add("endRange");

					if (timestamp >= minRangeDate && timestamp <= maxRangeDate) dayElem.classList.add("inRange");
				};

				for (var timestamp = self.days.childNodes[0].dateObj.getTime(), i = 0; i < 42; i++, timestamp += self.utils.duration.DAY) {
					var _ret = _loop(timestamp, i);

					if (_ret === "continue") continue;
				}
			}

			function onResize() {
				if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
			}

			function open(e, positionElement) {
				if (self.isMobile) {
					if (e) {
						e.preventDefault();
						e.target.blur();
					}

					setTimeout(function () {
						self.mobileInput.click();
					}, 0);

					triggerEvent("Open");
					return;
				}

				if (self.isOpen || self._input.disabled || self.config.inline) return;

				self.isOpen = true;
				self.calendarContainer.classList.add("open");
				positionCalendar(positionElement);
				self._input.classList.add("active");

				triggerEvent("Open");
			}

			function minMaxDateSetter(type) {
				return function (date) {
					var dateObj = self.config["_" + type + "Date"] = self.parseDate(date);

					var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
					var isValidDate = date && dateObj instanceof Date;

					if (isValidDate) {
						self[type + "DateHasTime"] = dateObj.getHours() || dateObj.getMinutes() || dateObj.getSeconds();
					}

					if (self.selectedDates) {
						self.selectedDates = self.selectedDates.filter(function (d) {
							return isEnabled(d);
						});
						if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
						updateValue();
					}

					if (self.daysContainer) {
						redraw();

						if (isValidDate) self.currentYearElement[type] = dateObj.getFullYear();else self.currentYearElement.removeAttribute(type);

						self.currentYearElement.disabled = inverseDateObj && dateObj && inverseDateObj.getFullYear() === dateObj.getFullYear();
					}
				};
			}

			function parseConfig() {
				var boolOpts = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];

				var hooks = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange"];

				self.config = Object.create(flatpickr.defaultConfig);

				var userConfig = _extends({}, self.instanceConfig, JSON.parse(JSON.stringify(self.element.dataset || {})));

				self.config.parseDate = userConfig.parseDate;
				self.config.formatDate = userConfig.formatDate;

				Object.defineProperty(self.config, "enable", {
					get: function get() {
						return self.config._enable || [];
					},
					set: function set(dates) {
						return self.config._enable = parseDateRules(dates);
					}
				});

				Object.defineProperty(self.config, "disable", {
					get: function get() {
						return self.config._disable || [];
					},
					set: function set(dates) {
						return self.config._disable = parseDateRules(dates);
					}
				});

				_extends(self.config, userConfig);

				if (!userConfig.dateFormat && userConfig.enableTime) {
					self.config.dateFormat = self.config.noCalendar ? "H:i" + (self.config.enableSeconds ? ":S" : "") : flatpickr.defaultConfig.dateFormat + " H:i" + (self.config.enableSeconds ? ":S" : "");
				}

				if (userConfig.altInput && userConfig.enableTime && !userConfig.altFormat) {
					self.config.altFormat = self.config.noCalendar ? "h:i" + (self.config.enableSeconds ? ":S K" : " K") : flatpickr.defaultConfig.altFormat + (" h:i" + (self.config.enableSeconds ? ":S" : "") + " K");
				}

				Object.defineProperty(self.config, "minDate", {
					get: function get() {
						return this._minDate;
					},
					set: minMaxDateSetter("min")
				});

				Object.defineProperty(self.config, "maxDate", {
					get: function get() {
						return this._maxDate;
					},
					set: minMaxDateSetter("max")
				});

				self.config.minDate = userConfig.minDate;
				self.config.maxDate = userConfig.maxDate;

				for (var i = 0; i < boolOpts.length; i++) {
					self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
				}for (var _i = hooks.length; _i--;) {
					if (self.config[hooks[_i]] !== undefined) {
						self.config[hooks[_i]] = arrayify(self.config[hooks[_i]] || []).map(bindToInstance);
					}
				}

				for (var _i2 = 0; _i2 < self.config.plugins.length; _i2++) {
					var pluginConf = self.config.plugins[_i2](self) || {};
					for (var key in pluginConf) {

						if (self.config[key] instanceof Array || ~hooks.indexOf(key)) {
							self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
						} else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
					}
				}

				triggerEvent("ParseConfig");
			}

			function setupLocale() {
				if (_typeof(self.config.locale) !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") console.warn("flatpickr: invalid locale " + self.config.locale);

				self.l10n = _extends(Object.create(flatpickr.l10ns.default), _typeof(self.config.locale) === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] || {} : {});
			}

			function positionCalendar() {
				var positionElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self._positionElement;

				if (self.calendarContainer === undefined) return;

				var calendarHeight = self.calendarContainer.offsetHeight,
				    calendarWidth = self.calendarContainer.offsetWidth,
				    configPos = self.config.position,
				    inputBounds = positionElement.getBoundingClientRect(),
				    distanceFromBottom = window.innerHeight - inputBounds.bottom,
				    showOnTop = configPos === "above" || configPos !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;

				var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);

				toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
				toggleClass(self.calendarContainer, "arrowBottom", showOnTop);

				if (self.config.inline) return;

				var left = window.pageXOffset + inputBounds.left;
				var right = window.document.body.offsetWidth - inputBounds.right;
				var rightMost = left + calendarWidth > window.document.body.offsetWidth;

				toggleClass(self.calendarContainer, "rightMost", rightMost);

				if (self.config.static) return;

				self.calendarContainer.style.top = top + "px";

				if (!rightMost) {
					self.calendarContainer.style.left = left + "px";
					self.calendarContainer.style.right = "auto";
				} else {
					self.calendarContainer.style.left = "auto";
					self.calendarContainer.style.right = right + "px";
				}
			}

			function redraw() {
				if (self.config.noCalendar || self.isMobile) return;

				buildWeekdays();
				updateNavigationCurrentMonth();
				buildDays();
			}

			function selectDate(e) {
				e.preventDefault();
				e.stopPropagation();

				if (!e.target.classList.contains("flatpickr-day") || e.target.classList.contains("disabled") || e.target.classList.contains("notAllowed")) return;

				var selectedDate = self.latestSelectedDateObj = new Date(e.target.dateObj.getTime());

				var shouldChangeMonth = selectedDate.getMonth() !== self.currentMonth && self.config.mode !== "range";

				self.selectedDateElem = e.target;

				if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
					var selectedIndex = isDateSelected(selectedDate);
					if (selectedIndex) self.selectedDates.splice(selectedIndex, 1);else self.selectedDates.push(selectedDate);
				} else if (self.config.mode === "range") {
					if (self.selectedDates.length === 2) self.clear();

					self.selectedDates.push(selectedDate);

					// unless selecting same date twice, sort ascendingly
					if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
						return a.getTime() - b.getTime();
					});
				}

				setHoursFromInputs();

				if (shouldChangeMonth) {
					var isNewYear = self.currentYear !== selectedDate.getFullYear();
					self.currentYear = selectedDate.getFullYear();
					self.currentMonth = selectedDate.getMonth();

					if (isNewYear) triggerEvent("YearChange");

					triggerEvent("MonthChange");
				}

				buildDays();

				if (self.minDateHasTime && self.config.enableTime && compareDates(selectedDate, self.config.minDate) === 0) setHoursFromDate(self.config.minDate);

				updateValue();

				if (self.config.enableTime) setTimeout(function () {
					return self.showTimeInput = true;
				}, 50);

				if (self.config.mode === "range") {
					if (self.selectedDates.length === 1) {
						onMouseOver(e.target);

						self._hidePrevMonthArrow = self._hidePrevMonthArrow || self.minRangeDate > self.days.childNodes[0].dateObj;

						self._hideNextMonthArrow = self._hideNextMonthArrow || self.maxRangeDate < new Date(self.currentYear, self.currentMonth + 1, 1);
					} else updateNavigationCurrentMonth();
				}

				triggerEvent("Change");

				// maintain focus
				if (!shouldChangeMonth) focusOnDay(e.target.$i, 0);else afterDayAnim(function () {
					return self.selectedDateElem.focus();
				});

				if (self.config.enableTime) setTimeout(function () {
					return self.hourElement.select();
				}, 451);

				if (self.config.closeOnSelect) {
					var single = self.config.mode === "single" && !self.config.enableTime;
					var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

					if (single || range) self.close();
				}
			}

			function set(option, value) {
				self.config[option] = value;
				self.redraw();
				jumpToDate();
			}

			function setSelectedDate(inputDate, format) {
				if (inputDate instanceof Array) self.selectedDates = inputDate.map(function (d) {
					return self.parseDate(d, format);
				});else if (inputDate instanceof Date || !isNaN(inputDate)) self.selectedDates = [self.parseDate(inputDate, format)];else if (inputDate && inputDate.substring) {
					switch (self.config.mode) {
						case "single":
							self.selectedDates = [self.parseDate(inputDate, format)];
							break;

						case "multiple":
							self.selectedDates = inputDate.split("; ").map(function (date) {
								return self.parseDate(date, format);
							});
							break;

						case "range":
							self.selectedDates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
								return self.parseDate(date, format);
							});

							break;

						default:
							break;
					}
				}

				self.selectedDates = self.selectedDates.filter(function (d) {
					return d instanceof Date && isEnabled(d, false);
				});

				self.selectedDates.sort(function (a, b) {
					return a.getTime() - b.getTime();
				});
			}

			function setDate(date, triggerChange, format) {
				if (date !== 0 && !date) return self.clear(triggerChange);

				setSelectedDate(date, format);

				self.showTimeInput = self.selectedDates.length > 0;
				self.latestSelectedDateObj = self.selectedDates[0];

				self.redraw();
				jumpToDate();

				setHoursFromDate();
				updateValue(triggerChange);

				if (triggerChange) triggerEvent("Change");
			}

			function parseDateRules(arr) {
				for (var i = arr.length; i--;) {
					if (typeof arr[i] === "string" || +arr[i]) arr[i] = self.parseDate(arr[i], null, true);else if (arr[i] && arr[i].from && arr[i].to) {
						arr[i].from = self.parseDate(arr[i].from);
						arr[i].to = self.parseDate(arr[i].to);
					}
				}

				return arr.filter(function (x) {
					return x;
				}); // remove falsy values
			}

			function setupDates() {
				self.selectedDates = [];
				self.now = new Date();

				var preloadedDate = self.config.defaultDate || self.input.value;
				if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);

				var initialDate = self.selectedDates.length ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now ? self.config.maxDate : self.now;

				self.currentYear = initialDate.getFullYear();
				self.currentMonth = initialDate.getMonth();

				if (self.selectedDates.length) self.latestSelectedDateObj = self.selectedDates[0];

				self.minDateHasTime = self.config.minDate && (self.config.minDate.getHours() || self.config.minDate.getMinutes() || self.config.minDate.getSeconds());

				self.maxDateHasTime = self.config.maxDate && (self.config.maxDate.getHours() || self.config.maxDate.getMinutes() || self.config.maxDate.getSeconds());

				Object.defineProperty(self, "latestSelectedDateObj", {
					get: function get() {
						return self._selectedDateObj || self.selectedDates[self.selectedDates.length - 1];
					},
					set: function set(date) {
						self._selectedDateObj = date;
					}
				});

				if (!self.isMobile) {
					Object.defineProperty(self, "showTimeInput", {
						get: function get() {
							return self._showTimeInput;
						},
						set: function set(bool) {
							self._showTimeInput = bool;
							if (self.calendarContainer) toggleClass(self.calendarContainer, "showTimeInput", bool);
							positionCalendar();
						}
					});
				}
			}

			function setupHelperFunctions() {
				self.utils = {
					duration: {
						DAY: 86400000
					},
					getDaysinMonth: function getDaysinMonth(month, yr) {
						month = typeof month === "undefined" ? self.currentMonth : month;

						yr = typeof yr === "undefined" ? self.currentYear : yr;

						if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;

						return self.l10n.daysInMonth[month];
					},
					monthToStr: function monthToStr(monthNumber, shorthand) {
						shorthand = typeof shorthand === "undefined" ? self.config.shorthandCurrentMonth : shorthand;

						return self.l10n.months[(shorthand ? "short" : "long") + "hand"][monthNumber];
					}
				};
			}

			/* istanbul ignore next */
			function setupFormats() {
				self.formats = Object.create(FlatpickrInstance.prototype.formats);
				["D", "F", "J", "M", "W", "l"].forEach(function (f) {
					self.formats[f] = FlatpickrInstance.prototype.formats[f].bind(self);
				});

				self.revFormat.F = FlatpickrInstance.prototype.revFormat.F.bind(self);
				self.revFormat.M = FlatpickrInstance.prototype.revFormat.M.bind(self);
			}

			function setupInputs() {
				self.input = self.config.wrap ? self.element.querySelector("[data-input]") : self.element;

				/* istanbul ignore next */
				if (!self.input) return console.warn("Error: invalid input element specified", self.input);

				self.input._type = self.input.type;
				self.input.type = "text";

				self.input.classList.add("flatpickr-input");
				self._input = self.input;

				if (self.config.altInput) {
					// replicate self.element
					self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
					self._input = self.altInput;
					self.altInput.placeholder = self.input.placeholder;
					self.altInput.disabled = self.input.disabled;
					self.altInput.required = self.input.required;
					self.altInput.type = "text";
					self.input.type = "hidden";

					if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
				}

				if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");

				self._positionElement = self.config.positionElement || self._input;
			}

			function setupMobile() {
				var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";

				self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
				self.mobileInput.step = "any";
				self.mobileInput.tabIndex = 1;
				self.mobileInput.type = inputType;
				self.mobileInput.disabled = self.input.disabled;
				self.mobileInput.placeholder = self.input.placeholder;

				self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

				if (self.selectedDates.length) {
					self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
				}

				if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");

				if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");

				self.input.type = "hidden";
				if (self.config.altInput) self.altInput.type = "hidden";

				try {
					self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
				} catch (e) {
					//
				}

				self.mobileInput.addEventListener("change", function (e) {
					self.setDate(e.target.value, false, self.mobileFormatStr);
					triggerEvent("Change");
					triggerEvent("Close");
				});
			}

			function toggle() {
				if (self.isOpen) return self.close();
				self.open();
			}

			function triggerEvent(event, data) {
				var hooks = self.config["on" + event];

				if (hooks !== undefined && hooks.length > 0) {
					for (var i = 0; hooks[i] && i < hooks.length; i++) {
						hooks[i](self.selectedDates, self.input.value, self, data);
					}
				}

				if (event === "Change") {
					self.input.dispatchEvent(createEvent("change"));

					// many front-end frameworks bind to the input event
					self.input.dispatchEvent(createEvent("input"));
				}
			}

			/**
    * Creates an Event, normalized across browsers
    * @param {String} name the event name, e.g. "click"
    * @return {Event} the created event
    */
			function createEvent(name) {
				if (self._supportsEvents) return new Event(name, { bubbles: true });

				self._[name + "Event"] = document.createEvent("Event");
				self._[name + "Event"].initEvent(name, true, true);
				return self._[name + "Event"];
			}

			function isDateSelected(date) {
				for (var i = 0; i < self.selectedDates.length; i++) {
					if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
				}

				return false;
			}

			function isDateInRange(date) {
				if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
				return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
			}

			function updateNavigationCurrentMonth() {
				if (self.config.noCalendar || self.isMobile || !self.monthNav) return;

				self.currentMonthElement.textContent = self.utils.monthToStr(self.currentMonth) + " ";
				self.currentYearElement.value = self.currentYear;

				self._hidePrevMonthArrow = self.config.minDate && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());

				self._hideNextMonthArrow = self.config.maxDate && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
			}

			/**
    * Updates the values of inputs associated with the calendar
    * @return {void}
    */
			function updateValue(triggerChange) {
				if (!self.selectedDates.length) return self.clear(triggerChange);

				if (self.isMobile) {
					self.mobileInput.value = self.selectedDates.length ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
				}

				var joinChar = self.config.mode !== "range" ? "; " : self.l10n.rangeSeparator;

				self.input.value = self.selectedDates.map(function (dObj) {
					return self.formatDate(dObj, self.config.dateFormat);
				}).join(joinChar);

				if (self.config.altInput) {
					self.altInput.value = self.selectedDates.map(function (dObj) {
						return self.formatDate(dObj, self.config.altFormat);
					}).join(joinChar);
				}

				if (triggerChange !== false) triggerEvent("ValueUpdate");
			}

			function mouseDelta(e) {
				return Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY));
			}

			function onMonthNavScroll(e) {
				e.preventDefault();
				var isYear = self.currentYearElement.parentNode.contains(e.target);

				if (e.target === self.currentMonthElement || isYear) {

					var delta = mouseDelta(e);

					if (isYear) {
						changeYear(self.currentYear + delta);
						e.target.value = self.currentYear;
					} else self.changeMonth(delta, true, false);
				}
			}

			function onMonthNavClick(e) {
				var isPrevMonth = self.prevMonthNav.contains(e.target);
				var isNextMonth = self.nextMonthNav.contains(e.target);

				if (isPrevMonth || isNextMonth) changeMonth(isPrevMonth ? -1 : 1);else if (e.target === self.currentYearElement) {
					e.preventDefault();
					self.currentYearElement.select();
				} else if (e.target.className === "arrowUp") self.changeYear(self.currentYear + 1);else if (e.target.className === "arrowDown") self.changeYear(self.currentYear - 1);
			}

			/**
    * Creates an HTMLElement with given tag, class, and textual content
    * @param {String} tag the HTML tag
    * @param {String} className the new element's class name
    * @param {String} content The new element's text content
    * @return {HTMLElement} the created HTML element
    */
			function createElement(tag, className, content) {
				var e = window.document.createElement(tag);
				className = className || "";
				content = content || "";

				e.className = className;

				if (content !== undefined) e.textContent = content;

				return e;
			}

			function arrayify(obj) {
				if (obj instanceof Array) return obj;
				return [obj];
			}

			function toggleClass(elem, className, bool) {
				if (bool) return elem.classList.add(className);
				elem.classList.remove(className);
			}

			/* istanbul ignore next */
			function debounce(func, wait, immediate) {
				var timeout = void 0;
				return function () {
					var context = this,
					    args = arguments;
					clearTimeout(timeout);
					timeout = setTimeout(function () {
						timeout = null;
						if (!immediate) func.apply(context, args);
					}, wait);
					if (immediate && !timeout) func.apply(context, args);
				};
			}

			/**
    * Compute the difference in dates, measured in ms
    * @param {Date} date1
    * @param {Date} date2
    * @param {Boolean} timeless whether to reset times of both dates to 00:00
    * @return {Number} the difference in ms
    */
			function compareDates(date1, date2, timeless) {
				if (!(date1 instanceof Date) || !(date2 instanceof Date)) return false;

				if (timeless !== false) {
					return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
				}

				return date1.getTime() - date2.getTime();
			}

			function timeWrapper(e) {
				e.preventDefault();

				var isKeyDown = e.type === "keydown",
				    isWheel = e.type === "wheel",
				    isIncrement = e.type === "increment",
				    input = e.target;

				if (self.amPM && e.target === self.amPM) return e.target.textContent = ["AM", "PM"][e.target.textContent === "AM" | 0];

				var min = Number(input.min),
				    max = Number(input.max),
				    step = Number(input.step),
				    curValue = parseInt(input.value, 10),
				    delta = e.delta || (!isKeyDown ? Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)) || 0 : e.which === 38 ? 1 : -1);

				var newValue = curValue + step * delta;

				if (typeof input.value !== "undefined" && input.value.length === 2) {
					var isHourElem = input === self.hourElement,
					    isMinuteElem = input === self.minuteElement;

					if (newValue < min) {
						newValue = max + newValue + !isHourElem + (isHourElem && !self.amPM);

						if (isMinuteElem) incrementNumInput(null, -1, self.hourElement);
					} else if (newValue > max) {
						newValue = input === self.hourElement ? newValue - max - !self.amPM : min;

						if (isMinuteElem) incrementNumInput(null, 1, self.hourElement);
					}

					if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) self.amPM.textContent = self.amPM.textContent === "PM" ? "AM" : "PM";

					input.value = self.pad(newValue);
				}
			}

			init();
			return self;
		}

		FlatpickrInstance.prototype = {
			formats: {
				// get the date in UTC
				Z: function Z(date) {
					return date.toISOString();
				},

				// weekday name, short, e.g. Thu
				D: function D(date) {
					return this.l10n.weekdays.shorthand[this.formats.w(date)];
				},

				// full month name e.g. January
				F: function F(date) {
					return this.utils.monthToStr(this.formats.n(date) - 1, false);
				},

				// padded hour 1-12
				G: function G(date) {
					return FlatpickrInstance.prototype.pad(FlatpickrInstance.prototype.formats.h(date));
				},

				// hours with leading zero e.g. 03
				H: function H(date) {
					return FlatpickrInstance.prototype.pad(date.getHours());
				},

				// day (1-30) with ordinal suffix e.g. 1st, 2nd
				J: function J(date) {
					return date.getDate() + this.l10n.ordinal(date.getDate());
				},

				// AM/PM
				K: function K(date) {
					return date.getHours() > 11 ? "PM" : "AM";
				},

				// shorthand month e.g. Jan, Sep, Oct, etc
				M: function M(date) {
					return this.utils.monthToStr(date.getMonth(), true);
				},

				// seconds 00-59
				S: function S(date) {
					return FlatpickrInstance.prototype.pad(date.getSeconds());
				},

				// unix timestamp
				U: function U(date) {
					return date.getTime() / 1000;
				},

				W: function W(date) {
					return this.config.getWeek(date);
				},

				// full year e.g. 2016
				Y: function Y(date) {
					return date.getFullYear();
				},

				// day in month, padded (01-30)
				d: function d(date) {
					return FlatpickrInstance.prototype.pad(date.getDate());
				},

				// hour from 1-12 (am/pm)
				h: function h(date) {
					return date.getHours() % 12 ? date.getHours() % 12 : 12;
				},

				// minutes, padded with leading zero e.g. 09
				i: function i(date) {
					return FlatpickrInstance.prototype.pad(date.getMinutes());
				},

				// day in month (1-30)
				j: function j(date) {
					return date.getDate();
				},

				// weekday name, full, e.g. Thursday
				l: function l(date) {
					return this.l10n.weekdays.longhand[date.getDay()];
				},

				// padded month number (01-12)
				m: function m(date) {
					return FlatpickrInstance.prototype.pad(date.getMonth() + 1);
				},

				// the month number (1-12)
				n: function n(date) {
					return date.getMonth() + 1;
				},

				// seconds 0-59
				s: function s(date) {
					return date.getSeconds();
				},

				// number of the day of the week
				w: function w(date) {
					return date.getDay();
				},

				// last two digits of year e.g. 16 for 2016
				y: function y(date) {
					return String(date.getFullYear()).substring(2);
				}
			},

			/**
    * Formats a given Date object into a string based on supplied format
    * @param {Date} dateObj the date object
    * @param {String} frmt a string composed of formatting tokens e.g. "Y-m-d"
    * @return {String} The textual representation of the date e.g. 2017-02-03
    */
			formatDate: function formatDate(dateObj, frmt) {
				var _this = this;

				if (this.config !== undefined && this.config.formatDate !== undefined) return this.config.formatDate(dateObj, frmt);

				return frmt.split("").map(function (c, i, arr) {
					return _this.formats[c] && arr[i - 1] !== "\\" ? _this.formats[c](dateObj) : c !== "\\" ? c : "";
				}).join("");
			},

			revFormat: {
				D: function D() {},
				F: function F(dateObj, monthName) {
					dateObj.setMonth(this.l10n.months.longhand.indexOf(monthName));
				},
				G: function G(dateObj, hour) {
					dateObj.setHours(parseFloat(hour));
				},
				H: function H(dateObj, hour) {
					dateObj.setHours(parseFloat(hour));
				},
				J: function J(dateObj, day) {
					dateObj.setDate(parseFloat(day));
				},
				K: function K(dateObj, amPM) {
					var hours = dateObj.getHours();

					if (hours !== 12) dateObj.setHours(hours % 12 + 12 * /pm/i.test(amPM));
				},
				M: function M(dateObj, shortMonth) {
					dateObj.setMonth(this.l10n.months.shorthand.indexOf(shortMonth));
				},
				S: function S(dateObj, seconds) {
					dateObj.setSeconds(seconds);
				},
				U: function U(dateObj, unixSeconds) {
					return new Date(parseFloat(unixSeconds) * 1000);
				},

				W: function W(dateObj, weekNumber) {
					weekNumber = parseInt(weekNumber);
					return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0, 0);
				},
				Y: function Y(dateObj, year) {
					dateObj.setFullYear(year);
				},
				Z: function Z(dateObj, ISODate) {
					return new Date(ISODate);
				},

				d: function d(dateObj, day) {
					dateObj.setDate(parseFloat(day));
				},
				h: function h(dateObj, hour) {
					dateObj.setHours(parseFloat(hour));
				},
				i: function i(dateObj, minutes) {
					dateObj.setMinutes(parseFloat(minutes));
				},
				j: function j(dateObj, day) {
					dateObj.setDate(parseFloat(day));
				},
				l: function l() {},
				m: function m(dateObj, month) {
					dateObj.setMonth(parseFloat(month) - 1);
				},
				n: function n(dateObj, month) {
					dateObj.setMonth(parseFloat(month) - 1);
				},
				s: function s(dateObj, seconds) {
					dateObj.setSeconds(parseFloat(seconds));
				},
				w: function w() {},
				y: function y(dateObj, year) {
					dateObj.setFullYear(2000 + parseFloat(year));
				}
			},

			tokenRegex: {
				D: "(\\w+)",
				F: "(\\w+)",
				G: "(\\d\\d|\\d)",
				H: "(\\d\\d|\\d)",
				J: "(\\d\\d|\\d)\\w+",
				K: "(am|AM|Am|aM|pm|PM|Pm|pM)",
				M: "(\\w+)",
				S: "(\\d\\d|\\d)",
				U: "(.+)",
				W: "(\\d\\d|\\d)",
				Y: "(\\d{4})",
				Z: "(.+)",
				d: "(\\d\\d|\\d)",
				h: "(\\d\\d|\\d)",
				i: "(\\d\\d|\\d)",
				j: "(\\d\\d|\\d)",
				l: "(\\w+)",
				m: "(\\d\\d|\\d)",
				n: "(\\d\\d|\\d)",
				s: "(\\d\\d|\\d)",
				w: "(\\d\\d|\\d)",
				y: "(\\d{2})"
			},

			pad: function pad(number) {
				return ("0" + number).slice(-2);
			},

			/**
    * Parses a date(+time) string into a Date object
    * @param {String} date the date string, e.g. 2017-02-03 14:45
    * @param {String} givenFormat the date format, e.g. Y-m-d H:i
    * @param {Boolean} timeless whether to reset the time of Date object
    * @return {Date} the parsed Date object
    */
			parseDate: function parseDate(date, givenFormat, timeless) {
				if (date !== 0 && !date) return null;

				var date_orig = date;

				if (date instanceof Date) date = new Date(date.getTime()); // create a copy

				else if (date.toFixed !== undefined) // timestamp
						date = new Date(date);else {
						// date string
						var format = givenFormat || (this.config || flatpickr.defaultConfig).dateFormat;
						date = String(date).trim();

						if (date === "today") {
							date = new Date();
							timeless = true;
						} else if (/Z$/.test(date) || /GMT$/.test(date)) // datestrings w/ timezone
							date = new Date(date);else if (this.config && this.config.parseDate) date = this.config.parseDate(date, format);else {
							var parsedDate = !this.config || !this.config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));

							var matched = void 0;

							for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
								var token = format[i];
								var isBackSlash = token === "\\";
								var escaped = format[i - 1] === "\\" || isBackSlash;

								if (this.tokenRegex[token] && !escaped) {
									regexStr += this.tokenRegex[token];
									var match = new RegExp(regexStr).exec(date);
									if (match && (matched = true)) {
										parsedDate = this.revFormat[token](parsedDate, match[++matchIndex]) || parsedDate;
									}
								} else if (!isBackSlash) regexStr += "."; // don't really care
							}

							date = matched ? parsedDate : null;
						}
					}

				/* istanbul ignore next */
				if (!(date instanceof Date)) {
					console.warn("flatpickr: invalid date " + date_orig);
					console.info(this.element);
					return null;
				}

				if (timeless === true) date.setHours(0, 0, 0, 0);

				return date;
			}
		};

		/* istanbul ignore next */
		function _flatpickr(nodeList, config) {
			var nodes = Array.prototype.slice.call(nodeList); // static list
			var instances = [];
			for (var i = 0; i < nodes.length; i++) {
				try {
					if (nodes[i].getAttribute("data-fp-omit") !== null) continue;

					if (nodes[i]._flatpickr) {
						nodes[i]._flatpickr.destroy();
						nodes[i]._flatpickr = null;
					}

					nodes[i]._flatpickr = new FlatpickrInstance(nodes[i], config || {});
					instances.push(nodes[i]._flatpickr);
				} catch (e) {
					console.warn(e, e.stack);
				}
			}

			return instances.length === 1 ? instances[0] : instances;
		}

		/* istanbul ignore next */
		if (typeof HTMLElement !== "undefined") {
			// browser env
			HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
				return _flatpickr(this, config);
			};

			HTMLElement.prototype.flatpickr = function (config) {
				return _flatpickr([this], config);
			};
		}

		/* istanbul ignore next */
		function flatpickr(selector, config) {
			if (selector instanceof NodeList) return _flatpickr(selector, config);else if (!(selector instanceof HTMLElement)) return _flatpickr(window.document.querySelectorAll(selector), config);

			return _flatpickr([selector], config);
		}

		/* istanbul ignore next */
		flatpickr.defaultConfig = FlatpickrInstance.defaultConfig = {
			mode: "single",

			position: "auto",

			animate: window.navigator.userAgent.indexOf("MSIE") === -1,

			// wrap: see https://chmln.github.io/flatpickr/examples/#flatpickr-external-elements
			wrap: false,

			// enables week numbers
			weekNumbers: false,

			// allow manual datetime input
			allowInput: false,

			/*
   	clicking on input opens the date(time)picker.
   	disable if you wish to open the calendar manually with .open()
   */
			clickOpens: true,

			/*
   	closes calendar after date selection,
   	unless 'mode' is 'multiple' or enableTime is true
   */
			closeOnSelect: true,

			// display time picker in 24 hour mode
			time_24hr: false,

			// enables the time picker functionality
			enableTime: false,

			// noCalendar: true will hide the calendar. use for a time picker along w/ enableTime
			noCalendar: false,

			// more date format chars at https://chmln.github.io/flatpickr/#dateformat
			dateFormat: "Y-m-d",

			// date format used in aria-label for days
			ariaDateFormat: "F j, Y",

			// altInput - see https://chmln.github.io/flatpickr/#altinput
			altInput: false,

			// the created altInput element will have this class.
			altInputClass: "form-control input",

			// same as dateFormat, but for altInput
			altFormat: "F j, Y", // defaults to e.g. June 10, 2016

			// defaultDate - either a datestring or a date object. used for datetimepicker"s initial value
			defaultDate: null,

			// the minimum date that user can pick (inclusive)
			minDate: null,

			// the maximum date that user can pick (inclusive)
			maxDate: null,

			// dateparser that transforms a given string to a date object
			parseDate: null,

			// dateformatter that transforms a given date object to a string, according to passed format
			formatDate: null,

			getWeek: function getWeek(givenDate) {
				var date = new Date(givenDate.getTime());
				var onejan = new Date(date.getFullYear(), 0, 1);
				return Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
			},

			// see https://chmln.github.io/flatpickr/#disable
			enable: [],

			// see https://chmln.github.io/flatpickr/#disable
			disable: [],

			// display the short version of month names - e.g. Sep instead of September
			shorthandCurrentMonth: false,

			// displays calendar inline. see https://chmln.github.io/flatpickr/#inline-calendar
			inline: false,

			// position calendar inside wrapper and next to the input element
			// leave at false unless you know what you"re doing
			"static": false,

			// DOM node to append the calendar to in *static* mode
			appendTo: null,

			// code for previous/next icons. this is where you put your custom icon code e.g. fontawesome
			prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
			nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",

			// enables seconds in the time picker
			enableSeconds: false,

			// step size used when scrolling/incrementing the hour element
			hourIncrement: 1,

			// step size used when scrolling/incrementing the minute element
			minuteIncrement: 5,

			// initial value in the hour element
			defaultHour: 12,

			// initial value in the minute element
			defaultMinute: 0,

			// disable native mobile datetime input support
			disableMobile: false,

			// default locale
			locale: "default",

			plugins: [],

			ignoredFocusElements: [],

			// called every time calendar is closed
			onClose: undefined, // function (dateObj, dateStr) {}

			// onChange callback when user selects a date or time
			onChange: undefined, // function (dateObj, dateStr) {}

			// called for every day element
			onDayCreate: undefined,

			// called every time the month is changed
			onMonthChange: undefined,

			// called every time calendar is opened
			onOpen: undefined, // function (dateObj, dateStr) {}

			// called after the configuration has been parsed
			onParseConfig: undefined,

			// called after calendar is ready
			onReady: undefined, // function (dateObj, dateStr) {}

			// called after input value updated
			onValueUpdate: undefined,

			// called every time the year is changed
			onYearChange: undefined,

			onKeyDown: undefined,

			onDestroy: undefined
		};

		/* istanbul ignore next */
		flatpickr.l10ns = {
			en: {
				weekdays: {
					shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
				},
				months: {
					shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
				},
				daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
				firstDayOfWeek: 0,
				ordinal: function ordinal(nth) {
					var s = nth % 100;
					if (s > 3 && s < 21) return "th";
					switch (s % 10) {
						case 1:
							return "st";
						case 2:
							return "nd";
						case 3:
							return "rd";
						default:
							return "th";
					}
				},
				rangeSeparator: " to ",
				weekAbbreviation: "Wk",
				scrollTitle: "Scroll to increment",
				toggleTitle: "Click to toggle"
			}
		};

		flatpickr.l10ns.default = Object.create(flatpickr.l10ns.en);
		flatpickr.localize = function (l10n) {
			return _extends(flatpickr.l10ns.default, l10n || {});
		};
		flatpickr.setDefaults = function (config) {
			return _extends(flatpickr.defaultConfig, config || {});
		};

		/* istanbul ignore next */
		if (typeof jQuery !== "undefined") {
			jQuery.fn.flatpickr = function (config) {
				return _flatpickr(this, config);
			};
		}

		Date.prototype.fp_incr = function (days) {
			return new Date(this.getFullYear(), this.getMonth(), this.getDate() + parseInt(days, 10));
		};

		if (true) module.exports = flatpickr;

		/***/
	},

	/***/"HxaC":
	/***/function HxaC(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "a", function () {
			return DomHelper;
		});
		/**
   * @author sweetyx
   * 提供一些dom的计算与定位
   */
		var calcOffset = function calcOffset(target, elem, direction, fixOption) {
			//根据绑定的目标元素和展示方向计算位置
			var fixWidth = fixOption ? fixOption.width || 0 : 0;
			var fixHeight = fixOption ? fixOption.height || 0 : 0;
			var offset = target.offset();
			var width = target.outerWidth();
			var height = target.outerHeight();
			var left, top;
			if (direction === 'bottom') {
				top = offset.top + height + fixHeight;
				left = offset.left;
			} else if (direction === 'top') {
				top = offset.top - elem.outerHeight() - fixHeight;
				left = offset.left;
				if (top < 0) {
					//若target上侧的偏移量<浮层高度，说明上侧空间不够，改为显示在底侧
					var res = this.calcOffset(target, elem, 'bottom');
					res.originDirection = direction;
					return res;
				}
			} else if (direction === 'right') {
				top = offset.top;
				left = offset.left + width + fixWidth;
			} else if (direction === 'left') {
				top = offset.top;
				left = offset.left - elem.outerWidth() - fixWidth;
				if (left < 0) {
					//若target左侧的偏移量<浮层宽度，说明左侧空间不够，改为显示在右侧
					var res = this.calcOffset(target, elem, 'right');
					res.originDirection = direction;
					return res;
				}
			}
			return {
				originDirection: direction,
				actualDirection: direction,
				left: left,
				top: top
			};
		};

		var DomHelper = {
			calcOffset: calcOffset
		};

		/***/
	},

	/***/"I3/c":
	/***/function I3C(module, exports) {

		angular.module('shark-angularjs.ui').provider('SharkResolve', function () {
			this.$get = ['$injector', '$q', function ($injector, $q) {
				return {
					resolve: function resolve(invocables) {
						var promises = [];
						angular.forEach(invocables, function (value) {
							if (angular.isFunction(value) || angular.isArray(value)) {
								promises.push($q.resolve($injector.invoke(value)));
							} else if (angular.isString(value)) {
								promises.push($q.resolve($injector.get(value)));
							} else {
								promises.push($q.resolve(value));
							}
						});

						return $q.all(promises).then(function (resolves) {
							var resolveObj = {};
							var resolveIter = 0;
							angular.forEach(invocables, function (value, key) {
								resolveObj[key] = resolves[resolveIter++];
							});
							return resolveObj;
						});
					}
				};
			}];
		});

		/***/
	},

	/***/"J2i8":
	/***/function J2i8(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("7t+N");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_core__ = __webpack_require__("cmeh");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_templates__ = __webpack_require__("NL2S");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__common_base__ = __webpack_require__("Wlz3");
		/**
   * @author sweetyx
   * @description 弹窗插件
   */

		var template = __WEBPACK_IMPORTED_MODULE_2__common_templates__["a" /* Templates */].modal;
		var templateFun = __WEBPACK_IMPORTED_MODULE_2__common_templates__["a" /* Templates */].templateAoT(template);
		var templateConfirm = __WEBPACK_IMPORTED_MODULE_2__common_templates__["a" /* Templates */].confirm;
		var templateConfirmFun = __WEBPACK_IMPORTED_MODULE_2__common_templates__["a" /* Templates */].templateAoT(templateConfirm);

		//初始化modal的dom
		function initDom(sharkComponent, config) {
			var templateData = {
				animate: config.animate,
				size: config.size,
				content: config.content
			};
			sharkComponent.component = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(templateFun.apply(templateData));
			return sharkComponent;
		}

		__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkModal = function (options) {
			/*********默认参数配置*************/
			var config = {
				animate: 'fade',
				size: 'lg',
				backdrop: '',
				content: '',
				onShow: function onShow() {},
				onHide: function onHide() {}
			};
			__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].extend(config, options);
			/*********初始化组件*************/
			var body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body);
			var sharkComponent = {};
			initDom.call(this, sharkComponent, config);
			var backdropEle;
			body.append(sharkComponent.component);
			__WEBPACK_IMPORTED_MODULE_3__common_base__["a" /* BaseComponent */].addComponentBaseFn(sharkComponent, config);
			sharkComponent.show = function () {
				var defer = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred();
				backdropEle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div class="modal-backdrop ' + config.animate + ' in"></div>');
				body.append(backdropEle);
				body.addClass('modal-open');
				sharkComponent.component.show();
				sharkComponent.component.scrollTop(0); //触发重绘
				sharkComponent.component.addClass('in');
				sharkComponent.defer = defer;
				if (typeof config.onShow === 'function') {
					config.onShow.call(sharkComponent);
				}
				return defer.promise();
			};
			sharkComponent.hide = function () {
				backdropEle.remove();
				body.removeClass('modal-open');
				sharkComponent.component.hide();
				sharkComponent.component.removeClass('in');
				if (backdropEle) {
					backdropEle.remove();
				}
				sharkComponent.component.remove();
				if (typeof config.onHide === 'function') {
					config.onHide.call(sharkComponent);
				}
				sharkComponent = null;
			};
			sharkComponent.addResolveTarget = function (target) {
				sharkComponent.component.on('click.modal', target, sharkComponent, function (evt) {
					sharkComponent.defer.resolve(evt);
					sharkComponent.hide();
				});
				return sharkComponent;
			};
			sharkComponent.addRejectTarget = function (target) {
				sharkComponent.component.on('click.modal', target, sharkComponent, function (evt) {
					sharkComponent.defer.reject(evt);
					sharkComponent.hide();
				});
				return sharkComponent;
			};
			if (config.backdrop !== 'static') {
				sharkComponent.component.on('click', function (evt) {
					if (evt.target === evt.currentTarget) {
						sharkComponent.defer.reject(evt);
						sharkComponent.hide();
					}
				});
			}
			sharkComponent.addResolveTarget('.js-ok');
			sharkComponent.addRejectTarget('.js-cancel');
			return sharkComponent;
		};
		__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkConfirm = function (options) {
			/*********默认参数配置*************/
			var config = {
				animate: 'fade',
				size: '',
				title: '提示',
				content: '',
				okText: '确定',
				cancelText: '取消',
				onShow: function onShow() {},
				onHide: function onHide() {}
			};
			__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].extend(config, options);
			/*********初始化组件*************/
			config.backdrop = 'static';
			var templateData = {
				title: config.title,
				content: config.content,
				okText: config.okText,
				cancelText: config.cancelText
			};
			config.content = templateConfirmFun.apply(templateData);
			var sharkComponent = __WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkModal(config);
			return sharkComponent.show();
		};
		__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkAlert = function (options) {
			/*********默认参数配置*************/
			var config = {
				animate: 'fade',
				size: '',
				title: '提示',
				content: '',
				okText: '确定',
				onShow: function onShow() {},
				onHide: function onHide() {}
			};
			__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].extend(config, options);
			/*********初始化组件*************/
			config.backdrop = 'static';
			var templateData = {
				title: config.title,
				content: config.content,
				okText: config.okText
			};
			config.content = templateConfirmFun.apply(templateData);
			var sharkComponent = __WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkModal(config);
			return sharkComponent.show();
		};

		/***/
	},

	/***/"K5He":
	/***/function K5He(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__ = __webpack_require__("f4c1");

		angular.module('shark-angularjs.ui').factory('SharkValidConfig', [function () {
			var rules = {
				promise: 'promise返回错误',
				datetimepattern: '日期格式不正确',
				startbigerthanend: '开始时间不能大于结束时间',
				bigerthanmax: {
					text: '不能大于最大日期{maxdate}',
					repArr: ['maxdate']
				},
				smallerthanmin: {
					text: '不能小于最小日期{mindate}',
					repArr: ['mindate']
				},
				maxbetweendays: {
					text: '间隔日期不能超过{maxbetweendays}天',
					repArr: ['maxbetweendays']
				},
				required: '不能为空',
				ensure: '不能为空',
				ip: 'ip地址不正确',
				phone: '手机号码不正确',
				number: '请输入数字',
				email: 'email地址不正确',
				repeat: '两次输入不一致',
				pattern: '输入格式不正确',
				file: '请选择文件',
				minlen: {
					text: '输入值长度不能小于{minlencheck}',
					repArr: ['minlencheck']
				},
				maxlen: {
					text: '输入值长度不能大于{maxlencheck}',
					repArr: ['maxlencheck']
				},
				max: {
					text: '输入值不能大于{max}',
					repArr: ['max']
				},
				min: {
					text: '输入值不能小于{min}',
					repArr: ['min']
				}
			};
			var config = {
				// 日期校验
				datetimecheck: function datetimecheck(scope, elm, attr, ctrl, value) {
					var mindate = attr.mindate && parseInt(attr.mindate);
					var maxdate = attr.maxdate && parseInt(attr.maxdate);
					var result = {};
					if (angular.isArray(value)) {
						// 日期组
						var startTime = value[0];
						var endTime = value[1];
						if (__WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].isEmpty(startTime) && __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].isEmpty(endTime)) {
							result.datetimepattern = true;
						} else {
							if (angular.isNumber(startTime) && angular.isNumber(endTime)) {
								result.datetimepattern = true;
							} else {
								result.datetimepattern = false;
							}
						}
						if (maxdate && endTime) {
							if (endTime > maxdate) {
								result.bigerthanmax = false;
							} else {
								result.bigerthanmax = true;
							}
						} else {
							result.bigerthanmax = true;
						}
						if (mindate && startTime) {
							if (startTime < mindate) {
								result.smallerthanmin = false;
							} else {
								result.smallerthanmin = true;
							}
						} else {
							result.smallerthanmin = true;
						}
						var maxbetweendays = attr.maxbetweendays && parseInt(attr.maxbetweendays);
						if (maxbetweendays && startTime && startTime) {
							var oneday = 24 * 60 * 60 * 1000;
							var betweendays = (endTime - startTime) / oneday;
							if (betweendays > maxbetweendays) {
								result.maxbetweendays = false;
							} else {
								result.maxbetweendays = true;
							}
						} else {
							result.maxbetweendays = true;
						}
					} else {
						// 单个日期
						if (__WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].isEmpty(value)) {
							result.datetimepattern = true;
						} else {
							if (angular.isNumber(value)) {
								result.datetimepattern = true;
							} else {
								result.datetimepattern = false;
							}
						}
						//单个日期的情况
						if (maxdate) {
							if (value > maxdate) {
								result.bigerthanmax = false;
							} else {
								result.bigerthanmax = true;
							}
						} else {
							result.bigerthanmax = true;
						}
						if (mindate) {
							if (value < mindate) {
								result.smallerthanmin = false;
							} else {
								result.smallerthanmin = true;
							}
						} else {
							result.smallerthanmin = true;
						}
					}
					return result;
				},
				// 校验两个值是否相等
				repeatcheck: function repeatcheck(scope, elm, attr, ctrl, obj) {
					return {
						repeat: obj.value === obj.compareValue
					};
				},
				// 文件校验
				filecheck: function filecheck(scope, elm, attr, ctrl, value) {
					return {
						file: !__WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].isEmpty(value)
					};
				},
				// 不能为空校验
				ensure: function ensure(scope, elm, attr, ctrl, value) {
					var result = {};
					if (angular.isArray(value)) {
						for (var i = 0; i < value.length; i++) {
							if (__WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].isEmpty(value[i])) {
								result.ensure = false;
							}
						}
						if (result.ensure !== false) {
							result.ensure = true;
						}
					} else if (angular.isObject(value)) {
						for (var p in value) {
							if (value.hasOwnProperty(p)) {
								result.ensure = true;
							}
						}
						if (result.ensure !== true) {
							result.ensure = false;
						}
					} else {
						if (__WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].isEmpty(value)) {
							result.ensure = false;
						} else {
							result.ensure = true;
						}
					}
					return result;
				},
				// ip地址是否合法
				ipcheck: function ipcheck(scope, elm, attr, ctrl, value) {
					var regExp = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
					var result = {};
					if (__WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].isEmpty(value) || regExp.test(value)) {
						result.ip = true;
					} else {
						result.ip = false;
					}
					return result;
				},
				// 是否是数值类型
				numbercheck: function numbercheck(scope, elm, attr, ctrl, value) {
					var regExp = /^\d{1,}$/;
					var max = attr.max && parseInt(attr.max);
					var min = attr.min && parseInt(attr.min);
					var result = {};
					if (__WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].isEmpty(value) || regExp.test(value)) {
						result.number = true;
					} else {
						result.number = false;
					}
					if (max && value) {
						if (value > max) {
							result.max = false;
						} else {
							result.max = true;
						}
					}
					if (min && value) {
						if (value < min) {
							result.min = false;
						} else {
							result.min = true;
						}
					}
					return result;
				},
				// 是否是电话号码
				phonecheck: function phonecheck(scope, elm, attr, ctrl, value) {
					var regExp = /^((\+?86)|(\(\+86\)))?1[3|4|5|6|7|8]\d{9}$/;
					var result = {};
					if (__WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].isEmpty(value) || regExp.test(value)) {
						result.phone = true;
					} else {
						result.phone = false;
					}
					return result;
				},
				// 是否是email
				emailcheck: function emailcheck(scope, elm, attr, ctrl, value) {
					var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					var result = {};
					if (__WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].isEmpty(value) || regExp.test(value)) {
						result.email = true;
					} else {
						result.email = false;
					}
					return result;
				},
				// 最小长度校验
				minlencheck: function minlencheck(scope, elm, attr, ctrl, obj) {
					return {
						minlen: obj.value.length >= obj.compareLength
					};
				},
				// 最大长度校验
				maxlencheck: function maxlencheck(scope, elm, attr, ctrl, obj) {
					return {
						maxlen: obj.value.length <= obj.compareLength
					};
				},
				// 设置错误提示信息
				setRules: function setRules(r) {
					if (angular.isObject(r)) {
						angular.extend(rules, r);
					}
				},
				getRules: function getRules() {
					return rules;
				}
			};
			return config;
		}]);

		/***/
	},

	/***/"MJip":
	/***/function MJip(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("7t+N");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_core__ = __webpack_require__("cmeh");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_event__ = __webpack_require__("z2OP");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__common_domhelper__ = __webpack_require__("HxaC");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__common_templates__ = __webpack_require__("NL2S");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__common_base__ = __webpack_require__("Wlz3");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__listgroup_ui__ = __webpack_require__("ThzW");
		/**
   * @author sweetyx & lingqiao
   * @description selecter插件和dropdown插件
   */

		// selecter模板
		var templateSelecter = __WEBPACK_IMPORTED_MODULE_4__common_templates__["a" /* Templates */].selecter;
		var templateSelecterFun = __WEBPACK_IMPORTED_MODULE_4__common_templates__["a" /* Templates */].templateAoT(templateSelecter);
		// 初始化selecter的dom
		function initDom(sharkComponent, config, targetElement) {
			if (!targetElement) {
				sharkComponent.createType = 'construct';
				var fun = config.dom ? __WEBPACK_IMPORTED_MODULE_4__common_templates__["a" /* Templates */].templateAoT(config.dom) : templateSelecterFun;
				var html = fun.apply(config);
				sharkComponent.component = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(html);
			} else {
				sharkComponent.createType = 'normal';
				sharkComponent.component = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(targetElement);
			}
			sharkComponent.component.addClass('shark-selecter');
			return sharkComponent;
		}
		// 初始化下拉列表的的dom
		function initSelectionsDom(sharkComponent, config) {
			var selections = __WEBPACK_IMPORTED_MODULE_6__listgroup_ui__["a" /* ListGroup */].render();
			selections.addClass('shark-selecter-list-group');
			__WEBPACK_IMPORTED_MODULE_6__listgroup_ui__["a" /* ListGroup */].update(selections, config.data, config.actualKey, config.displayKey);
			sharkComponent.selections = selections;
			__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).append(selections);
		}
		// 初始化下拉列表事件
		function initSelectionsEvents(sharkComponent, config) {
			var selecter = sharkComponent.component;
			var selections = sharkComponent.selections;
			selections.on('click', '.list-group-item', function (evt) {
				var item = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
				//设置值
				var value = item.data('value');
				sharkComponent.setValue(value, true);
				//收起待选列表
				selecter.removeClass('open');
				selections.hide();
				selecter.trigger('focusout');
			});
			// 点击除了组件之外的地方，收起下拉列表
			__WEBPACK_IMPORTED_MODULE_2__common_event__["a" /* Event */].addCloseListener(selections.attr('id'), [selecter, selections], function () {
				if (!selections.is(':hidden')) {
					selecter.removeClass('open');
					selections.hide();
					selecter.trigger('focusout');
				}
			});
		}
		// 初始化事件
		function initEvents(sharkComponent, config) {
			var selecter = sharkComponent.component;
			selecter.on('click.selecter', '.selecter', __WEBPACK_IMPORTED_MODULE_5__common_base__["a" /* BaseComponent */].filterComponentAction(sharkComponent, function (evt) {
				if (!sharkComponent.selections) {
					// 如果还没有初始化过selections，在这里先初始化
					initSelectionsDom(sharkComponent, config);
					initSelectionsEvents(sharkComponent, config);
				}
				var selections = sharkComponent.selections;
				if (selections.is(':hidden')) {
					renderGroupList(sharkComponent, config);
					var postion = __WEBPACK_IMPORTED_MODULE_3__common_domhelper__["a" /* DomHelper */].calcOffset(selecter, selections, 'bottom');
					selections.css(postion);
					//显示待选列表
					selecter.addClass('open');
					selections.show();
					//设置待选列表样式
					selections.css({
						width: selecter.outerWidth()
					});
				} else {
					//隐藏待选列表
					selecter.removeClass('open');
					selections.hide();
					selecter.trigger('focusout');
				}
			}));
		}
		// 渲染下拉列表
		function renderGroupList(sharkComponent, config) {
			var selecter = sharkComponent.component;
			var selections = sharkComponent.selections;
			var value = sharkComponent.data[config.actualKey];
			var activeLi;
			//允许值为空字符串
			if (typeof value !== 'undefined' && value !== null) {
				activeLi = selections.find('.list-group-item[value="' + value + '"]');
				if (activeLi.length > 0) {
					activeLi.siblings().removeClass('active');
					activeLi.addClass('active');
					if (config.activeStyle) {
						activeLi.siblings().removeClass(config.activeStyle);
						activeLi.addClass(config.activeStyle);
					}
				}
			}
			if (!activeLi || activeLi.length == 0) {
				selections.children().removeClass('active');
				if (config.activeStyle) {
					selections.children().removeClass(config.activeStyle);
				}
			}
		}

		__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkSelecter = function (options, targetElement) {
			/*********默认参数配置*************/
			var config = {
				activeStyle: null, // point | nike
				data: null,
				actualKey: 'value',
				displayKey: 'name',
				dom: '',
				onSelected: function onSelected() {}
			};
			__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].extend(config, options);
			/*********初始化组件*************/
			var sharkComponent = {};
			initDom(sharkComponent, config, targetElement);
			__WEBPACK_IMPORTED_MODULE_5__common_base__["a" /* BaseComponent */].addComponentBaseFn(sharkComponent, config);
			initEvents(sharkComponent, config);
			sharkComponent.data = {};
			sharkComponent.setValue = function (v, docallback) {
				var itemData = {};
				var oldData = sharkComponent.data;
				//允许值为空字符串
				if (typeof v !== 'undefined' && v !== null) {
					for (var i = 0; i < config.data.length; i++) {
						if (v === config.data[i][config.actualKey]) {
							itemData = config.data[i];
							break;
						}
					}
				}
				if (oldData[config.actualKey] != itemData[config.actualKey]) {
					//设置新值
					__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.isEmptyObject(itemData) ? sharkComponent.data = {} : sharkComponent.data = itemData;
					var valuelabel = sharkComponent.component.find('.value');
					valuelabel.text(__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].isEmpty(itemData[config.displayKey]) ? '' : itemData[config.displayKey]);
					//触发回调函数
					if (docallback && typeof config.onSelected === 'function') {
						config.onSelected.call(sharkComponent, itemData[config.actualKey], itemData);
					}
				}
			};
			sharkComponent.getValue = function () {
				return sharkComponent.data[config.actualKey];
			};
			sharkComponent.destroy = function () {
				if (sharkComponent.selections) {
					__WEBPACK_IMPORTED_MODULE_2__common_event__["a" /* Event */].removeCloseListener(sharkComponent.selections.attr('id'));
					sharkComponent.selections.destroy();
				}
				// 销毁component
				if (sharkComponent.createType === 'construct') {
					sharkComponent.component.remove();
				} else {
					sharkComponent.component.off('click.selecter');
				}
				sharkComponent = null;
			};
			return sharkComponent;
		};

		/***/
	},

	/***/"MSjz":
	/***/function MSjz(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__ = __webpack_require__("f4c1");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_const__ = __webpack_require__("7Lx1");

		angular.module('shark-angularjs.ui').directive(__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].dropdown, ['SharkConfig', function (SharkConfig) {
			var DropdownConfig = SharkConfig.getConfig()[__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].dropdown];
			return {
				restrict: 'E',
				link: function link($scope, element, attrs) {
					var dropdown;
					var disableWatcher;
					// 销毁
					function destroy() {
						element.empty();
						if (disableWatcher) {
							disableWatcher();
						}
						if (dropdown) {
							dropdown.destroy();
							dropdown = null;
						}
					}

					// 回调函数
					var selectCb = SharkConfig.getAttrValue($scope, attrs.onSelected);
					// 按钮的文字
					var text = SharkConfig.getAttrValue($scope, attrs.text);
					// 对应的真值字段
					var actualKey = typeof attrs.actualKey !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.actualKey) : DropdownConfig.actualKey;
					// 对应的展示值字段
					var displayKey = typeof attrs.displayKey !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.displayKey) : DropdownConfig.displayKey;
					// 如果定义了name属性，把dropdown组件赋给$scope
					var dropdownName = attrs.name;

					// 下拉框数据变化后，重置下拉框
					$scope.$watch(function () {
						return $scope.$eval(attrs.data);
					}, function (newValue, oldValue) {
						if (!newValue) {
							return;
						}
						destroy();
						dropdown = __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].sharkDropdown({
							data: newValue,
							text: text,
							actualKey: actualKey,
							displayKey: displayKey,
							onSelected: function onSelected(v) {
								if (typeof selectCb === 'function') {
									selectCb.apply(dropdown, arguments);
									if (!$scope.$$phase) {
										$scope.$apply();
									}
								}
							}
						});
						dropdown.appendTo(element);
						if (typeof attrs.ngDisabled !== 'undefined') {
							// 监听组件是否被禁用
							disableWatcher = $scope.$watch(function () {
								return $scope.$eval(attrs.ngDisabled);
							}, function (newValue, oldValue) {
								if (dropdown) {
									if (newValue === true) {
										dropdown.disable();
									}
									if (newValue === false) {
										dropdown.enable();
									}
								}
							});
						}
						if (dropdownName) {
							$scope[dropdownName] = dropdown;
						}
					}, true);

					// $scope销毁时同步销毁dropdown组件
					$scope.$on('$destroy', function () {
						destroy();
					});
				}
			};
		}]);

		/***/
	},

	/***/"NL2S":
	/***/function NL2S(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "a", function () {
			return Templates;
		});
		/**
   * @author sweetyx
   * 组件基础模板
   */
		var autocomplete = '\n    <input class="shark-autocomplete" type="text" />\n';
		var fileupload = '\n    <button class="shark-fileupload">\u4E0A\u4F20\u6587\u4EF6</button>\n';
		var listgroup = '\n    <ul class="shark-list-group list-group position-absolute" style="display: none;"></ul>\n';
		var popover = '\n    <div class="shark-popover popover" style="display: none;">\n        <div class="arrow"></div>\n        <% if(this.title){ %>\n        <div class="popover-title"><%= this.title %></div>\n        <% } %> \n        <% if(this.content){ %>\n            <div class="popover-content"><%= this.content %></div>\n        <% } %> \n    </div>\n';
		var selecter = '\n    <div class="shark-selecter position-relative">\n        <a class="selecter">\n            <span class="value"></span>\n            <span class="caret"></span>\n        </a>\n    </div>\n';
		var dropdown = '\n    <div class="shark-dropdown">\n        <button class="btn btn-default dropdown">\n            <%= this.text %>\n            <span class="caret"></span>\n        </button >\n    </div>\n';
		var pager = '\n    <ul class="shark-pager pagination"></ul>\n';
		var tree = '\n    <ul class="<% if(this.isRoot){ %>shark-tree<% } %> tree-open">\n        <%\n            for(var i=0; i < this.nodes.length; i++){\n                var node = this.nodes[i];\n        %>\n            <li>\n                <label class="tree-group" tree-group-id="<%= node.node_id %>" tree-group-level="<%= node.level %>" style="padding-left: <% if(node.children && node.children.length>0) { %> <%= this.basePl + this.baseIconWidth %> <% } else{ %> <%= this.basePl + this.baseIconWidth*2 %> <% } %>px;">\n                    <% if(node.children && node.children.length>0) { %>\n                        <a class="tree-icon tree-icon-right"></a>\n                    <% } %> \n                    <% if(this.checkable) { %>\n                        <% if(this.checked) { %>\n                            <a class="tree-icon tree-icon-check"></a>\n                        <% } %>\n                        <% else{ %>\n                            <a class="tree-icon tree-icon-check-empty"></a>\n                        <% } %>\n                    <% } %>\n                    <span class="tree-node-name"><%= node.node_name %></span>\n                </label>\n            </li>\n        <% } %>\n    </ul>\n';
		var tabs = '\n    <div class="shark-tabs">\n\t    <ul class="nav nav-tabs">\n            <%\n                for(var i=0; i < this.tabs.length; i++){\n                    var tab = this.tabs[i];\n            %>\n                <% if(i === this.active) { %>\n                    <li class="active">\n                        <a href="javascript:void(0);"><%= tab.title %></a>\n                    </li>\n                <% } %> \n                <% else{ %>\n                    <li>\n                        <a href="javascript:void(0);"><%= tab.title %></a>\n                    </li>\n                <% } %>\n            <% } %>\n        </ul>\n        <div class="tab-content">\n            <%\n                for(var i=0; i < this.tabs.length; i++){\n                    var tab = this.tabs[i];\n            %>\n                <% if(i === this.active) { %>\n                    <div class="tab-pane active"><%= tab.pane %></div>\n                <% } %> \n                <% else{ %>\n                    <div class="tab-pane"><%= tab.pane %></div>\n                <% } %>\n            <% } %>\n        </div>\n    </div>\n';
		var modal = '\n<div class="shark-modal modal <%= this.animate %>" style="display: none;">\n    <div class="modal-dialog <% if(this.size) { %>modal-<%= this.size %><% }%>">\n        <div class="modal-content">\n            <%= this.content %>\n        </div>\n    </div>\n</div>\n';
		var confirm = '\n<div class="modal-header">\n    <button type="button" class="btn btn-link pull-right js-cancel">\n        <span class="icon-close"></span>\n    </button>\n    <h4 class="modal-title"><%= this.title %></h4>\n</div>\n<div class="modal-body">\n    <%= this.content %>\n</div>\n<div class="modal-footer">\n    <button type="button" class="btn btn-success js-ok"><%= this.okText %></button>\n    <% if(this.cancelText) { %>\n        <button type="button" class="btn btn-default js-cancel"><%= this.cancelText %></button>\n    <% } %>\n</div>\n';
		var toastr = '\n<div class="shark-toastr toastr toastr-<%= this.type %>">\n    <div><%= this.content %></div>\n</div>\n';

		function tempAdd(line, isJs) {
			if (/^\s*$/.test(line)) {
				return '';
			}
			if (isJs) {
				if (/^=/.test(line)) {
					return 'r.push(' + line.substring(1) + ');\n';
				} else {
					return line + '\n';
				}
			} else {
				return 'r.push("' + line.replace(/"/g, '\\"') + '");\n';
			}
		}

		function templateAoT(template) {
			var reg = /<%((\s|.)*?)%>/g;
			var code = 'var r=[];\n';
			var cursor = 0;
			var match;
			while (match = reg.exec(template)) {
				code = code + tempAdd(template.slice(cursor, match.index), false);
				code = code + tempAdd(match[1], true);
				cursor = match.index + match[0].length;
			}
			code = code + tempAdd(template.substr(cursor, template.length - cursor));
			code = code + 'return r.join("");';
			return new Function(code.replace(/[\r\t\n]/g, ''));
		}

		function template2html(template, data) {
			return templateAoT(template).apply(data);
		}

		var Templates = {
			autocomplete: autocomplete,
			fileupload: fileupload,
			listgroup: listgroup,
			modal: modal,
			confirm: confirm,
			pager: pager,
			popover: popover,
			selecter: selecter,
			dropdown: dropdown,
			tree: tree,
			tabs: tabs,
			templateAoT: templateAoT,
			template2html: template2html,
			toastr: toastr
		};

		/***/
	},

	/***/"PcK8":
	/***/function PcK8(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__ = __webpack_require__("f4c1");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_const__ = __webpack_require__("7Lx1");

		angular.module('shark-angularjs.ui').directive(__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].checkabletable, ['$parse', function ($parse) {
			return {
				restrict: 'A',
				link: function link(scope, element, attrs) {
					var elementJq = __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].$(element);
					var itemListKey = attrs['itemList'];
					var callback = attrs['callback'];
					var checkAllBtn = elementJq.find('>thead input[type="checkbox"]');
					var checkAllModel = checkAllBtn.attr('ng-model');

					// 全选
					checkAllBtn.on('click', function () {
						var itemList = scope.$eval(itemListKey);
						var isAllItemsChecked = checkAllBtn.is(':checked');
						for (var i = 0; i < itemList.length; i++) {
							itemList[i].isItemChecked = isAllItemsChecked;
						};
						if (!scope.$$phase) {
							scope.$apply();
						}
					});

					// 检查是否全选
					scope.$watch(function () {
						var itemList = scope.$eval(itemListKey);
						if (!itemList || itemList.length === 0) {
							return false;
						} else {
							for (var i = 0; i < itemList.length; i++) {
								if (!itemList[i].isItemChecked) {
									return false;
								}
							}
						}
						return true;
					}, function (newVal, oldVal) {
						if (newVal !== oldVal) {
							$parse(checkAllModel + '=newvalue')(scope, { newvalue: newVal });
						}
					});

					// 获取所有选中的项
					if (callback) {
						scope[callback] = function () {
							var itemList = scope.$eval(itemListKey);
							var selectedItems = [];
							for (var i = 0; i < itemList.length; i++) {
								if (itemList[i].isItemChecked) {
									selectedItems.push(itemList[i]);
								}
							}
							return selectedItems;
						};
					}
				}
			};
		}]);

		/***/
	},

	/***/"ThzW":
	/***/function ThzW(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "a", function () {
			return ListGroup;
		});
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("7t+N");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_core__ = __webpack_require__("cmeh");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_templates__ = __webpack_require__("NL2S");
		/**
   * @author sweetyx
   * @description 列表组
   */

		var template = __WEBPACK_IMPORTED_MODULE_2__common_templates__["a" /* Templates */].listgroup;
		var templateFun = __WEBPACK_IMPORTED_MODULE_2__common_templates__["a" /* Templates */].templateAoT(template);

		//创建列表组
		function render(id) {
			var ul = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(templateFun.apply());
			ul.attr('id', id || __WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].createUUID());
			ul.destroy = function () {
				ul.remove();
			};
			return ul;
		}
		//更新列表组
		function update(ul, data, actualKey, displayKey) {
			ul.empty();
			__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(data, function (i, item) {
				var li = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<li class="list-group-item" value="' + item[actualKey] + '">' + item[displayKey] + '</li>');
				li.data(item);
				ul.append(li);
			});
			return ul;
		}

		var ListGroup = {
			render: render,
			update: update
		};

		/***/
	},

	/***/"V+TY":
	/***/function VTY(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("7t+N");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_core__ = __webpack_require__("cmeh");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_event__ = __webpack_require__("z2OP");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__common_domhelper__ = __webpack_require__("HxaC");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__common_templates__ = __webpack_require__("NL2S");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__common_base__ = __webpack_require__("Wlz3");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__listgroup_ui__ = __webpack_require__("ThzW");
		/**
   * @author asteryk
   * @description 自动补全插件
   */

		// selecter模板
		var templateAutocomplete = __WEBPACK_IMPORTED_MODULE_4__common_templates__["a" /* Templates */].autocomplete;
		var templateAutocompleteFun = __WEBPACK_IMPORTED_MODULE_4__common_templates__["a" /* Templates */].templateAoT(templateAutocomplete);

		//键盘上功能键键值数组
		var functionalKeyArray = [40, 38, 13, 27];
		//更新autocomplete的下拉列表
		function updateList(autoComplete, selections, config, list) {
			selections = __WEBPACK_IMPORTED_MODULE_6__listgroup_ui__["a" /* ListGroup */].update(selections, list, '', config.displayKey);
			if (selections.is(':hidden')) {
				// 定位并显示
				var inputWidth = autoComplete.outerWidth();
				var postion = __WEBPACK_IMPORTED_MODULE_3__common_domhelper__["a" /* DomHelper */].calcOffset(autoComplete, selections, 'bottom');
				var style = __WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].extend({ width: inputWidth }, postion);
				selections.css(style);
				selections.show();
			}
		}
		// 滚动到相应位置
		function scrollHeight(autoComplete, selections, item, direction) {
			var inputPosition = autoComplete.offset().top + autoComplete.height();
			var selectPosition = item.offset().top - inputPosition + item.height();
			var scrollTimes = Math.ceil(selections[0].scrollHeight / selections.height());
			if (direction === 'down') {
				if (selectPosition > selections.height()) {
					selections.scrollTop(selections[0].scrollTop + item.height() * scrollTimes);
				}
			} else {
				if (selectPosition < item.height()) {
					//向上不足一行高度就翻页
					selections.scrollTop(selections[0].scrollTop - item.height() * scrollTimes);
				}
			}
		}
		// 按下功能键时的处理函数
		function functionKeyUse(sharkComponent, keyCode, config) {
			var autoComplete = sharkComponent.component;
			var selections = sharkComponent.selections;
			if (selections.is(':hidden')) {
				return;
			}
			switch (keyCode) {
				case 40:
					//向下键
					var $current = selections.children('.active');
					var $next;
					if ($current.length <= 0) {
						//没有选中行时，选中第一行
						$next = selections.children('.list-group-item:first');
						selections.scrollTop(0);
					} else {
						$next = $current.next();
					}
					selections.children('.list-group-item').removeClass('active');
					if ($next.length > 0) {
						$next.addClass("active");
						if (config.autocomplete) {
							setValue(sharkComponent, $next, config);
						}
						scrollHeight(autoComplete, selections, $next, 'down');
					}
					break;
				case 38:
					//向上键
					var $current = selections.children('.active');
					var $previous;
					if ($current.length <= 0) {
						//没有选中行时，选中最后一行
						$previous = selections.children('.list-group-item:last');
						selections.scrollTop(selections[0].scrollHeight);
					} else {
						$previous = $current.prev();
					}
					selections.children('.list-group-item').removeClass('active');
					if ($previous.length > 0) {
						$previous.addClass("active");
						if (config.autocomplete) {
							setValue(sharkComponent, $previous, config);
						}
						scrollHeight(autoComplete, selections, $previous, 'up');
					}
					break;
				case 13:
					//回车键
					var $current = selections.children('.active');
					if ($current.length > 0) {
						if (!config.autocomplete) {
							setValue(sharkComponent, $current, config);
						}
						selections.hide();
					}
					break;
				case 27:
					//ESC键
					selections.hide();
					break;
			}
		}
		// 设置autoComplete的值
		function setValue(sharkComponent, item, config) {
			var itemData = item.data();
			sharkComponent.component.val(itemData[config.displayKey]);
			sharkComponent.value = itemData;
			if (typeof config.onSelected === 'function') {
				config.onSelected.call(sharkComponent, item.data());
			}
		}
		//初始化autocomplete的dom
		function initDom(sharkComponent, config, targetElement) {
			if (!targetElement) {
				sharkComponent.createType = 'construct';
				var fun = config.dom ? __WEBPACK_IMPORTED_MODULE_4__common_templates__["a" /* Templates */].templateAoT(config.dom) : templateAutocompleteFun;
				var html = fun.apply(config);
				sharkComponent.component = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(html);
			} else {
				sharkComponent.createType = 'normal';
				sharkComponent.component = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(targetElement);
			}
			sharkComponent.component.addClass('shark-autocomplete');
			initSelectionsDom(sharkComponent, config);
			return sharkComponent;
		}
		// 初始化下拉列表的dom
		function initSelectionsDom(sharkComponent, config) {
			var selections = __WEBPACK_IMPORTED_MODULE_6__listgroup_ui__["a" /* ListGroup */].render();
			selections.addClass('shark-autocomplete-list-group');
			__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).append(selections);
			sharkComponent.selections = selections;
			return sharkComponent;
		}
		// 初始化事件
		function initEvents(sharkComponent, config) {
			var autoComplete = sharkComponent.component;
			var selections = sharkComponent.selections;
			var lastMousePos = {
				clientX: -1,
				clientY: -1
			};
			//防止按上下键时，输入框中的光标左右移动
			autoComplete.on('keydown.autocomplete', autoComplete, __WEBPACK_IMPORTED_MODULE_5__common_base__["a" /* BaseComponent */].filterComponentAction(sharkComponent, function (evt) {
				if (__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.inArray(evt.keyCode, functionalKeyArray) > -1) {
					evt.preventDefault();
					evt.stopPropagation();
				}
			}));
			autoComplete.on('keyup.autocomplete', __WEBPACK_IMPORTED_MODULE_5__common_base__["a" /* BaseComponent */].filterComponentAction(sharkComponent, function (evt) {
				evt.preventDefault();
				evt.stopPropagation();
				var keyCode = evt.keyCode;
				if (__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.inArray(keyCode, functionalKeyArray) > -1) {
					functionKeyUse(sharkComponent, keyCode, config);
				} else if (document.documentMode === 9 && (keyCode === 8 || keyCode === 46)) {
					//IE9的一个BUG：[按键BackSpace / 按键Delete / 鼠标拖拽 / 鼠标剪切 / 鼠标删除]，不会触发propertychange和input事件
					//这里只处理了键盘BackSpace和Delete，鼠标的坑就暂时不管了。
					autoComplete.trigger('input');
				}
			}));
			// 输入框事件，适配IE8
			autoComplete.on('input.autocomplete propertychange.autocomplete', __WEBPACK_IMPORTED_MODULE_5__common_base__["a" /* BaseComponent */].filterComponentAction(sharkComponent, __WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].debounce(function () {
				var value = autoComplete.val();
				var result = config.filterData(value, config);
				if (result && typeof result.then === 'function') {
					result.then(function (list) {
						updateList(autoComplete, selections, config, list);
					}, function () {});
				} else {
					updateList(autoComplete, selections, config, result);
				}
			}, config.debounceTime, true)));
			// 鼠标事件
			selections.on('mousemove', function (evt) {
				var subPos = Math.sqrt(Math.pow(Math.abs(evt.clientX - lastMousePos.clientX), 2) + Math.pow(Math.abs(evt.clientY - lastMousePos.clientY), 2));
				if (subPos >= 5) {
					lastMousePos = {
						clientX: evt.clientX,
						clientY: evt.clientY
					};
					var selectionsRow = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(evt.target);
					if (!selectionsRow.hasClass('active')) {
						selectionsRow.siblings().removeClass('active');
						selectionsRow.addClass('active');
						if (config.autocomplete) {
							setValue(sharkComponent, selectionsRow, config);
						}
					}
				}
			});
			// 点击事件
			selections.on('mousedown', function (evt) {
				evt.preventDefault();
				evt.stopPropagation();
				if (!selections.is(':hidden')) {
					var selectionsRow = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(evt.target);
					selectionsRow.siblings().removeClass('active');
					selectionsRow.addClass('active');
					if (!config.autocomplete) {
						setValue(sharkComponent, selectionsRow, config);
					}
					selections.hide();
				}
			});
			// 输入框失焦点消失
			__WEBPACK_IMPORTED_MODULE_2__common_event__["a" /* Event */].addCloseListener(selections.attr('id'), [autoComplete, selections], function () {
				if (!selections.is(':hidden')) {
					selections.hide();
				}
			});
		}

		__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkAutoComplete = function (options, targetElement) {
			/*********默认参数配置*************/
			var config = {
				autocomplete: false,
				displayKey: 'name',
				filterData: null,
				debounceTime: 300,
				dom: '',
				onSelected: function onSelected() {}
			};
			__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].extend(config, options);
			/*********初始化组件*************/
			var sharkComponent = {};
			sharkComponent.value = null;
			initDom(sharkComponent, config, targetElement);
			__WEBPACK_IMPORTED_MODULE_5__common_base__["a" /* BaseComponent */].addComponentBaseFn(sharkComponent, config);
			initEvents(sharkComponent, config);
			// 获取当前autocomplete的值
			sharkComponent.getValue = function () {
				return sharkComponent.value;
			};
			// 销毁函数
			sharkComponent.destroy = function () {
				// 销毁listgroup
				__WEBPACK_IMPORTED_MODULE_2__common_event__["a" /* Event */].removeCloseListener(sharkComponent.selections.attr('id'));
				sharkComponent.selections.destroy();
				// 销毁component
				if (sharkComponent.createType === 'construct') {
					sharkComponent.component.remove();
				} else {
					sharkComponent.component.off('input.autocomplete propertychange.autocomplete keyup.autocomplete keydown.autocomplete');
				}
				sharkComponent = null;
			};
			return sharkComponent;
		};

		/***/
	},

	/***/"VysB":
	/***/function VysB(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__ = __webpack_require__("f4c1");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_const__ = __webpack_require__("7Lx1");

		angular.module('shark-angularjs.ui').directive(__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].fileupload, ['SharkConfig', function (SharkConfig) {
			var FileuploadConfig = SharkConfig.getConfig()[__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].fileupload];
			return {
				restrict: 'E',
				require: '?ngModel',
				link: function link($scope, element, attrs, ngModelCtrl) {
					var fileupload;
					var disableWatcher;
					//销毁函数
					function destroy() {
						if (disableWatcher) {
							disableWatcher();
						}
						if (fileupload) {
							fileupload.destroy();
							fileupload = null;
						}
					}
					// 回调函数
					var selectedCb = SharkConfig.getAttrValue($scope, attrs.onSelected);
					var uploadingCb = SharkConfig.getAttrValue($scope, attrs.onUploading);
					var uploadedCb = SharkConfig.getAttrValue($scope, attrs.onUploaded);
					var failedCb = SharkConfig.getAttrValue($scope, attrs.onFailed);
					// 支持的文件类型
					var accept = typeof attrs.accept !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.accept) : FileuploadConfig.accept;
					// 是否支持拖拽
					var dragable = typeof attrs.dragable !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.dragable) : FileuploadConfig.dragable;
					// 是否自动上传
					var autoupload = typeof attrs.autoupload !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.autoupload) : FileuploadConfig.autoupload;
					// 如果定义了name属性，把fileupload组件赋给$scope
					var fileuploadName = attrs.name;

					// 初始化分页组件
					fileupload = __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].sharkFileupload({
						accept: accept,
						dragable: dragable,
						autoupload: false,
						onSelected: function onSelected(file) {
							if (ngModelCtrl && ngModelCtrl.$setViewValue) {
								ngModelCtrl.$setViewValue(file);
							}
							if (typeof selectedCb === 'function') {
								selectedCb.apply(fileupload, arguments);
								if (!$scope.$$phase) {
									$scope.$apply();
								}
							}
							if (autoupload) {
								fileupload.upload(SharkConfig.getAttrValue($scope, attrs.url));
							}
						},
						onUploading: function onUploading() {
							if (typeof uploadingCb === 'function') {
								uploadingCb.apply(fileupload, arguments);
								if (!$scope.$$phase) {
									$scope.$apply();
								}
							}
						},
						onUploaded: function onUploaded() {
							if (typeof uploadedCb === 'function') {
								uploadedCb.apply(fileupload, arguments);
								if (!$scope.$$phase) {
									$scope.$apply();
								}
							}
						},
						onFailed: function onFailed() {
							if (typeof failedCb === 'function') {
								failedCb.apply(fileupload, arguments);
								if (!$scope.$$phase) {
									$scope.$apply();
								}
							}
						}
					}, element);
					if (typeof attrs.ngDisabled !== 'undefined') {
						// 监听组件是否被禁用
						disableWatcher = $scope.$watch(function () {
							return $scope.$eval(attrs.ngDisabled);
						}, function (newValue, oldValue) {
							if (fileupload) {
								if (newValue === true) {
									fileupload.disable();
								}
								if (newValue === false) {
									fileupload.enable();
								}
							}
						});
					}

					if (fileuploadName) {
						$scope[fileuploadName] = fileupload;
					}

					// $scope销毁时同步销毁fileupload组件
					$scope.$on('$destroy', function () {
						destroy();
					});
				}
			};
		}]);

		/***/
	},

	/***/"Wlz3":
	/***/function Wlz3(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "a", function () {
			return BaseComponent;
		});
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("7t+N");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("cmeh");
		/**
   * @author sweetyx
   * 提供操作组件的一些公共方法
   */

		/**
   * 初始化组件对象的公共函数，设置公共组件的一些公共方法，
   * @param {component} 组件对象
   * @param {object} 配置项
   */

		function addComponentBaseFn(sharkComponent, config) {
			sharkComponent.getConfig = function () {
				return config;
			};
			sharkComponent.disable = function () {
				sharkComponent.disabled = true;
				sharkComponent.component && sharkComponent.component.addClass('disabled').attr('disabled', true).find('input,select,button').attr('disabled', true);
				if (typeof config.onDisable === 'function') {
					config.onDisable.call(sharkComponent);
				}
			};
			sharkComponent.enable = function () {
				delete sharkComponent.disabled;
				sharkComponent.component && sharkComponent.component.removeClass('disabled').attr('disabled', false).find('input,select,button').attr('disabled', false);
				if (typeof config.onEnable === 'function') {
					config.onEnable.call(sharkComponent);
				}
			};
			sharkComponent.appendTo = function (target) {
				sharkComponent.component.appendTo(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(target));
			};
			return sharkComponent;
		}
		/**
   * 绑定组件对象前的过滤函数，用来阻止某些状态下不应该触发的事件。
   * @param  {component} 组件对象
   * @param  {Function} 实际绑定事件的函数
   * @return {Function}
   */
		function filterComponentAction(sharkComponent, fn) {
			return function (evt) {
				if (sharkComponent.disabled === true || sharkComponent.component && sharkComponent.component.hasClass('disabled')) {
					return;
				}
				fn.apply(this, arguments);
			};
		}
		var BaseComponent = {
			addComponentBaseFn: addComponentBaseFn,
			filterComponentAction: filterComponentAction
		};

		/***/
	},

	/***/"ZW0h":
	/***/function ZW0h(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__ = __webpack_require__("f4c1");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_const__ = __webpack_require__("7Lx1");

		angular.module('shark-angularjs.ui').directive(__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].autocomplete, ['SharkConfig', function (SharkConfig) {
			var AutocompleteConfig = SharkConfig.getConfig()[__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].autocomplete];
			return {
				restrict: 'E',
				require: '?ngModel',
				link: function link($scope, element, attrs, ngModelCtrl) {
					var autocomplete;
					var disableWatcher;
					//销毁函数
					function destroy() {
						if (disableWatcher) {
							disableWatcher();
						}
						if (autocomplete) {
							autocomplete.destroy();
							autocomplete = null;
						}
					}
					// 回调函数
					var selectedCb = SharkConfig.getAttrValue($scope, attrs.onSelected);
					// 自定义处理数据的filter
					var _filterData = SharkConfig.getAttrValue($scope, attrs.filterData);
					// 对应的展示值字段
					var debounceTime = typeof attrs.debounceTime !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.debounceTime) : AutocompleteConfig.debounceTime;
					// 对应的展示值字段
					var displayKey = typeof attrs.displayKey !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.displayKey) : AutocompleteConfig.displayKey;
					// 是否自动完成
					var isAutocomplete = typeof attrs.autocomplete !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.autocomplete) : AutocompleteConfig.autocomplete;
					// 如果定义了name属性，把autocomplete组件赋给$scope
					var autocompleteName = attrs.name;

					// 初始化autocomplete
					autocomplete = __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].sharkAutoComplete({
						filterData: function filterData(inputText, config) {
							if (ngModelCtrl && ngModelCtrl.$setViewValue && ngModelCtrl.$modelValue !== inputText) {
								ngModelCtrl.$setViewValue(inputText);
							}
							return _filterData(inputText, config);
						},
						debounceTime: debounceTime,
						displayKey: displayKey,
						autocomplete: isAutocomplete,
						onSelected: function onSelected(value) {
							if (ngModelCtrl && ngModelCtrl.$setViewValue) {
								ngModelCtrl.$setViewValue(value[displayKey]);
							}
							if (typeof selectedCb === 'function') {
								selectedCb.apply(autocomplete, arguments);
								if (!$scope.$$phase) {
									$scope.$apply();
								}
							}
						}
					});
					autocomplete.appendTo(element);
					if (typeof attrs.ngDisabled !== 'undefined') {
						// 监听组件是否被禁用
						disableWatcher = $scope.$watch(function () {
							return $scope.$eval(attrs.ngDisabled);
						}, function (newValue, oldValue) {
							if (autocomplete) {
								if (newValue === true) {
									autocomplete.disable();
								}
								if (newValue === false) {
									autocomplete.enable();
								}
							}
						});
					}
					if (autocompleteName) {
						$scope[autocompleteName] = autocomplete;
					}

					// $scope销毁时同步销毁autocomplete组件
					$scope.$on('$destroy', function () {
						destroy();
					});
				}
			};
		}]);

		/***/
	},

	/***/"Zyb7":
	/***/function Zyb7(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("7t+N");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_core__ = __webpack_require__("cmeh");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_templates__ = __webpack_require__("NL2S");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__common_base__ = __webpack_require__("Wlz3");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__fileupload_ie9_ui__ = __webpack_require__("bA5Z");
		/**
   * @author sweetyx
   * @description 文件上传插件
   */

		// selecter模板
		var templateFileupload = __WEBPACK_IMPORTED_MODULE_2__common_templates__["a" /* Templates */].fileupload;
		var templateFileuploadFun = __WEBPACK_IMPORTED_MODULE_2__common_templates__["a" /* Templates */].templateAoT(templateFileupload);

		function uploadByNative(file, url, params) {
			var defer = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred();
			var xhr = new XMLHttpRequest();
			if (xhr.upload) {
				xhr.upload.onprogress = function (e) {
					if (e.lengthComputable) {
						var percent = parseInt(e.loaded / file.size * 100);
						percent > 100 ? percent = 100 : percent;
						percent < 0 ? percent = 0 : percent;
						defer.notify(percent);
					}
				};
			}
			xhr.addEventListener('load', function (evt) {
				try {
					var res = eval('(' + evt.target.response + ')');
					defer.resolve(res);
				} catch (error) {
					defer.reject(evt);
				}
			});
			var data = new FormData();
			data.append('file', file);
			if (params) {
				for (var p in params) {
					if (params.hasOwnProperty(p)) {
						data.append(p, params[p]);
					}
				}
			}
			xhr.open('POST', url);
			xhr.send(data);
			return defer.promise();
		}
		//初始化文件上传的dom
		function initDom(sharkComponent, config, targetElement) {
			if (!targetElement) {
				sharkComponent.createType = 'construct';
				var fun = config.dom ? __WEBPACK_IMPORTED_MODULE_2__common_templates__["a" /* Templates */].templateAoT(config.dom) : templateFileuploadFun;
				var html = fun.apply(config);
				sharkComponent.component = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(html);
			} else {
				sharkComponent.createType = 'normal';
				sharkComponent.component = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(targetElement);
			}
			sharkComponent.component.addClass('shark-fileupload');
			return sharkComponent;
		}
		//绑定事件
		function initEvents(sharkComponent, config) {
			var uploader = sharkComponent.component;
			var inputId = __WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].createUUID();
			uploader.on('click.fileupload', __WEBPACK_IMPORTED_MODULE_3__common_base__["a" /* BaseComponent */].filterComponentAction(sharkComponent, function () {
				//每次都创建一个input是为了解决ie和chrome下input选择文件之后行为不一致的问题
				//chrome的input选择文件之后，如果再次选择文件的过程中取消选择文件，那么下次选择【同一个文件】的时候就会重新触发input的change事件
				//ie的input选择文件之后，无论过程如何操作，下次选择【同一个文件】的时候都不会重新触发input的change事件
				//不管是否选择同一个文件，每次都触发
				__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + inputId).remove();
				var input = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<input id="' + inputId + '" style="display:none;" type="file" />');
				__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).append(input);
				if (config.accept) {
					input.attr('accept', config.accept);
				}
				input.on('change', function (e) {
					var files = e.target.files;
					if (files && files.length > 0) {
						sharkComponent.file = files[0];
						if (typeof config.onSelected === 'function') {
							config.onSelected.call(sharkComponent, sharkComponent.file);
						}
						if (config.autoupload) {
							sharkComponent.upload();
						}
					}
				});
				input.trigger('click');
			}));
			if (config.dragable) {
				uploader.on('dragover.fileupload', function (evt) {
					//一定要将dragover的默认事件取消掉，不然无法触发drop事件。如需拖拽页面里的元素，需要给其添加属性draggable="true"
					evt.preventDefault();
					evt.stopPropagation();
				});
				uploader.on('drop.fileupload', __WEBPACK_IMPORTED_MODULE_3__common_base__["a" /* BaseComponent */].filterComponentAction(sharkComponent, function (evt) {
					evt.preventDefault();
					evt.stopPropagation();
					evt = evt.originalEvent; //低版本jquery的事件没有dataTransfer属性，取浏览器原生事件originalEvent
					var files = evt.dataTransfer && evt.dataTransfer.files ? evt.dataTransfer.files : null;
					if (files && files.length > 0) {
						sharkComponent.file = files[0];
						if (typeof config.onSelected === 'function') {
							config.onSelected.call(sharkComponent, sharkComponent.file);
						}
						if (config.autoupload) {
							sharkComponent.upload();
						}
					}
				}));
			}
		}
		var isNative = function isNative() {
			if (/msie\s+(.*?);/i.test(navigator.userAgent) && document.documentMode <= 9) {
				return false;
			} else {
				return true;
			}
		};
		__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkFileupload = function (options, targetElement) {
			/*********默认参数配置*************/
			var config = {
				url: '/xhr/file/upload.do',
				autoupload: false,
				accept: '',
				dragable: false,
				dom: '',
				onSelected: function onSelected(file) {},
				onUploading: function onUploading(file, percent) {},
				onUploaded: function onUploaded(file, res) {},
				onFailed: function onFailed(file, evt) {}
			};
			__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].extend(config, options);
			/*********初始化组件*************/
			var sharkComponent = {};
			initDom(sharkComponent, config, targetElement);
			sharkComponent.file = null; //当前选中的文件
			__WEBPACK_IMPORTED_MODULE_3__common_base__["a" /* BaseComponent */].addComponentBaseFn(sharkComponent, config);
			if (isNative()) {
				initEvents(sharkComponent, config);
				sharkComponent.clear = function () {
					sharkComponent.file = null;
				};
				sharkComponent.upload = function (u, p) {
					var defer = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred();
					if (sharkComponent.file) {
						uploadByNative(sharkComponent.file, u ? u : config.url, p).progress(function (percent) {
							if (typeof config.onUploading === 'function') {
								config.onUploading.call(sharkComponent, sharkComponent.file, percent);
							}
						}).done(function (res) {
							if (typeof config.onUploaded === 'function') {
								config.onUploaded.call(sharkComponent, sharkComponent.file, res);
							}
							defer.resolve(res);
						}).fail(function (evt) {
							if (typeof config.onFailed === 'function') {
								config.onFailed.call(sharkComponent, sharkComponent.file, evt);
							}
							defer.reject(evt);
						});
					} else {
						defer.reject({ type: 'noFileSelected' });
					}
					return defer.promise();
				};
				sharkComponent.destroy = function () {
					// 销毁component
					if (sharkComponent.createType === 'construct') {
						sharkComponent.component.remove();
					} else {
						sharkComponent.component.off('click.fileupload dragover.fileupload drop.fileupload');
					}
					sharkComponent = null;
				};
			} else {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__fileupload_ie9_ui__["a" /* makeIE9Able */])(sharkComponent, config);
			}
			return sharkComponent;
		};

		/***/
	},

	/***/"aQ1F":
	/***/function aQ1F(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__("7Lx1");

		angular.module('shark-angularjs.ui', []); //定义module:shark-angular
		angular.module('shark-angularjs.ui').provider("SharkConfig", function () {
			var baseConfig = {};
			baseConfig[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* COMPONENTS */].autocomplete] = {
				debounceTime: 0,
				autocomplete: false,
				displayKey: 'name'
			};
			baseConfig[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* COMPONENTS */].dropdown] = {
				actualKey: 'value',
				displayKey: 'name'
			};
			baseConfig[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* COMPONENTS */].fileupload] = {
				accept: '',
				autoupload: false,
				dragable: false
			};
			baseConfig[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* COMPONENTS */].datepicker] = {
				format: "Y-m-d",
				disable: []
			};
			baseConfig[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* COMPONENTS */].modal] = {
				size: '',
				backdrop: '',
				title: '提示',
				okText: '确定',
				cancelText: '取消'
			};
			baseConfig[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* COMPONENTS */].pager] = {
				hl: {
					firstpage: '首页',
					prevpage: '上一页',
					nextpage: '下一页',
					lastpage: '尾页',
					gopage: '跳转'
				},
				segmentSize: 5,
				startFrom: 1,
				gopage: false
			};
			baseConfig[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* COMPONENTS */].popover] = {
				direction: 'right'
			};
			baseConfig[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* COMPONENTS */].selecter] = {
				activeStyle: null,
				actualKey: 'value',
				displayKey: 'name'
			};
			baseConfig[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* COMPONENTS */].tabs] = {
				initTab: 0
			};
			baseConfig[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* COMPONENTS */].toastr] = {
				duration: 3000
			};
			baseConfig[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* COMPONENTS */].tooltip] = {
				direction: 'right'
			};
			baseConfig[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* COMPONENTS */].tree] = {
				preExpand: false,
				checkable: false,
				autolink: true,
				selectable: false
			};
			this.setConfig = function (options) {
				angular.extend(baseConfig, options);
			};
			this.$get = function () {
				return {
					getConfig: function getConfig() {
						return baseConfig;
					},
					getAttrValue: function getAttrValue($scope, attr) {
						if (typeof attr === 'undefined' || attr === null || attr === '') {
							return attr;
						}
						var arr = attr.match(/^'(.*)'$/);
						if (arr) {
							return arr[1];
						} else {
							return $scope.$eval(attr);
						}
					}
				};
			};
		});

		/***/
	},

	/***/"b3ux":
	/***/function b3ux(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("7t+N");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_core__ = __webpack_require__("cmeh");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_event__ = __webpack_require__("z2OP");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__common_domhelper__ = __webpack_require__("HxaC");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__common_templates__ = __webpack_require__("NL2S");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__common_base__ = __webpack_require__("Wlz3");
		/**
   * @author sweetyx
   * @description 提示框插件
   */

		var template = __WEBPACK_IMPORTED_MODULE_4__common_templates__["a" /* Templates */].popover;
		var templateFun = __WEBPACK_IMPORTED_MODULE_4__common_templates__["a" /* Templates */].templateAoT(template);
		//初始化popover的dom
		function initComponent(sharkComponent, config) {
			var templateData = {
				title: config.title,
				content: config.content
			};
			sharkComponent.component = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(templateFun.apply(templateData));
			sharkComponent.component.attr('id', __WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].createUUID());
			sharkComponent.component.addClass('shark-' + config.type);
			__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).append(sharkComponent.component);
			sharkComponent.component.hide();
			sharkComponent.isPopoverInit = true;
			if (config.event === 'click' && config.close === 'bodyclick') {
				__WEBPACK_IMPORTED_MODULE_2__common_event__["a" /* Event */].addCloseListener(sharkComponent.component.attr('id'), [sharkComponent.origin, sharkComponent.component], function () {
					if (sharkComponent.component.is(':visible')) {
						sharkComponent.hide();
					}
				});
			}
		}
		//初始化事件
		function initEvents(sharkComponent, config) {
			var origin = sharkComponent.origin;
			if (config.event === 'click') {
				origin.on('click.popover', __WEBPACK_IMPORTED_MODULE_5__common_base__["a" /* BaseComponent */].filterComponentAction(sharkComponent, function (evt) {
					if (!sharkComponent.isPopoverInit) {
						initComponent(sharkComponent, config);
					}
					if (sharkComponent.component.is(':hidden')) {
						sharkComponent.show();
					} else {
						sharkComponent.hide();
					}
				}));
			} else if (config.event === 'mouseover') {
				origin.on('mouseover.popover', __WEBPACK_IMPORTED_MODULE_5__common_base__["a" /* BaseComponent */].filterComponentAction(sharkComponent, function (evt) {
					if (!sharkComponent.isPopoverInit) {
						initComponent(sharkComponent, config);
					}
					sharkComponent.show();
				}));
				origin.on('mouseout.popover', __WEBPACK_IMPORTED_MODULE_5__common_base__["a" /* BaseComponent */].filterComponentAction(sharkComponent, function (evt) {
					sharkComponent.hide();
				}));
			}
		}
		//通用方法popover应展示的位置
		var getPopoverPos = function getPopoverPos(sharkComponent, direction) {
			var origin = sharkComponent.origin;
			var popover = sharkComponent.component;
			var postion;
			popover.removeClass('top right bottom left');
			popover.addClass(direction);
			var arrow = popover.find('.arrow');
			var fix = {
				width: arrow.outerWidth(),
				height: arrow.outerHeight()
			};
			postion = __WEBPACK_IMPORTED_MODULE_3__common_domhelper__["a" /* DomHelper */].calcOffset(origin, popover, direction, fix);
			if (direction !== postion.actualDirection) {
				return getPopoverPos(sharkComponent, postion.actualDirection);
			}
			return postion;
		};
		//利用通用方法取到的结果postion，修正popover的位置
		var fixPopover = function fixPopover(sharkComponent, postion) {
			var origin = sharkComponent.origin;
			var popover = sharkComponent.component;
			var arrow = popover.find('.arrow');
			var direction = postion.actualDirection;
			var popoverWidth = popover.outerWidth();
			var popoverHeight = popover.outerHeight();
			var originWidth = origin.outerWidth();
			var originHeight = origin.outerHeight();
			var left = 0;
			var top = 0;
			if (direction === 'right' || direction === 'left') {
				top = postion.top - popoverHeight / 2 + originHeight / 2;
				top > 0 ? top : top = 0;
				postion.top = top;
				//修正小箭头的位置
				arrow.css('left', '');
				arrow.css('right', '');
				if (postion.top === 0) {
					arrow.css({
						top: origin.offset().top + originHeight / 2
					});
				}
			} else if (direction === 'bottom' || direction === 'top') {
				left = postion.left - popoverWidth / 2 + originWidth / 2;
				left > 0 ? left : left = 0;
				postion.left = left;
				//修正小箭头的位置
				arrow.css('top', '');
				arrow.css('bottom', '');
				if (postion.left === 0) {
					arrow.css({
						left: origin.offset().left + originWidth / 2
					});
				}
			}
			popover.css(postion);
		};

		__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkPopover = function (options, targetElement) {
			/*********默认参数配置*************/
			var config = {
				event: 'click',
				close: 'bodyclick',
				direction: 'right',
				title: '',
				content: '',
				preInit: false, //是否把popover组件预先生成并添加到body
				reRenderOnShow: false,
				onShow: function onShow() {},
				onHide: function onHide() {}
			};
			__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].extend(config, options);
			options.type = 'popover';
			/*********初始化组件*************/
			var sharkComponent = {};
			sharkComponent.linkTo = function (target) {
				sharkComponent.origin = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(target);
				if (config.preInit) {
					initComponent(sharkComponent, config);
				}
				initEvents(sharkComponent, config);
			};
			sharkComponent.adjustPostion = function () {
				var postion = getPopoverPos(sharkComponent, config.direction);
				fixPopover(sharkComponent, postion);
			};
			sharkComponent.show = function () {
				if (config.reRenderOnShow) {
					sharkComponent.component.find('.popover-title').html(config.title);
					sharkComponent.component.find('.popover-content').html(config.content);
				}
				sharkComponent.component.show();
				sharkComponent.adjustPostion();
				if (typeof config.onShow === 'function') {
					config.onShow.call(sharkComponent);
				}
			};
			sharkComponent.hide = function () {
				sharkComponent.component.hide();
				if (typeof config.onHide === 'function') {
					config.onHide.call(sharkComponent);
				}
			};
			sharkComponent.destroy = function () {
				if (sharkComponent.isPopoverInit) {
					__WEBPACK_IMPORTED_MODULE_2__common_event__["a" /* Event */].removeCloseListener(sharkComponent.component.attr('id'));
					sharkComponent.component.remove();
				}
				if (sharkComponent.origin) {
					sharkComponent.origin.off('click.popover mouseover.popover mouseout.popover');
				}
				sharkComponent = null;
			};
			__WEBPACK_IMPORTED_MODULE_5__common_base__["a" /* BaseComponent */].addComponentBaseFn(sharkComponent, config);
			sharkComponent.appendTo = sharkComponent.linkTo; //重置popover的appendTo方法
			if (targetElement) {
				sharkComponent.appendTo(targetElement);
			}
			return sharkComponent;
		};
		__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkTooltip = function (options, targetElement) {
			options.event = 'mouseover';
			options.type = 'tooltip';
			var sharkComponent = __WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkPopover(options, targetElement);
			return sharkComponent;
		};

		/***/
	},

	/***/"bA5Z":
	/***/function bA5Z(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony export (immutable) */
		__webpack_exports__["a"] = makeIE9Able;
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("7t+N");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_core__ = __webpack_require__("cmeh");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_base__ = __webpack_require__("Wlz3");
		/**
   * @author sweetyx
   * @description 文件上传插件的扩展，兼容ie9以下浏览器
   */

		var blankSrc = /^https/i.test(window.location.href || '') ? 'javascript:void(0);' : 'about:blank';
		//创建input
		function createInput(inputId) {
			if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + inputId).length != 0) {
				__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + inputId).remove();
			}
			var html = '<input style="width:0;height:0;" id=' + inputId + ' name="file" type="file" />';
			var input = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(html);
			return input;
		}
		//创建form
		function createForm(formId, iframeId, url) {
			if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + formId).length != 0) {
				__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + formId).remove();
			}
			var html = '<form style="width:0;height:0;" id="' + formId + '" name="' + formId + '" action="' + url + '" target="' + iframeId + '" enctype="multipart/form-data" accept-charset="UTF-8" method="post"></form>';
			var form = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(html);
			return form;
		}
		//创建iframe
		function createIframe(iframeId) {
			if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + iframeId).length != 0) {
				__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + iframeId).remove();
			}
			var html = '<iframe style="width:0;height:0;" id="' + iframeId + '" name="' + iframeId + '" src="' + blankSrc + '"></iframe>';
			var iframe = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(html);
			return iframe;
		}

		function makeIE9Able(sharkComponent, config) {
			//初始化form和input
			var inputId = __WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].createUUID();
			var formId = __WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].createUUID();
			var iframeId = __WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].createUUID();
			var form = createForm(formId, iframeId, config.url);
			sharkComponent.component.append(form);
			var input = createInput(inputId);
			form.append(input);
			//设置可选文件类型
			if (config.accept) {
				input.attr('accept', config.accept);
			}
			//初始化样式
			var pos = sharkComponent.component.css('position');
			if (!pos || pos === 'static') {
				sharkComponent.component.css({
					position: 'relative'
				});
			}
			form.css({
				position: 'absolute',
				right: 0,
				top: 0,
				width: sharkComponent.component.outerWidth(),
				height: sharkComponent.component.outerHeight(),
				minWidth: '100%',
				minHeight: '100%',
				overflow: 'hidden'
			});
			input.css({
				position: 'absolute',
				right: 0,
				top: 0,
				opacity: 0,
				filter: 'alpha(opacity=0)',
				fontSize: '100px',
				cursor: 'pointer',
				width: '1000px',
				height: '1000px',
				minWidth: '100%',
				minHeight: '100%'
			});
			//监听事件
			input.on('change', __WEBPACK_IMPORTED_MODULE_2__common_base__["a" /* BaseComponent */].filterComponentAction(sharkComponent.component, function (e) {
				//IE9及以下无法获取文件
				var v = input.val();
				if (v.length > 0) {
					sharkComponent.file = { name: v };
					if (typeof config.onSelected === 'function') {
						config.onSelected.call(sharkComponent.component, sharkComponent.file);
					}
					if (config.autoupload) {
						sharkComponent.upload();
					}
				}
			}));
			sharkComponent.clear = function () {
				sharkComponent.file = null;
				form[0].reset();
			};
			sharkComponent.upload = function (u, p) {
				var defer = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred();
				if (sharkComponent.file) {
					var url;
					if (u && p) {
						url = u + '?' + __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.param(p);
					} else if (u) {
						url = u;
					} else {
						url = config.url;
					}
					form.attr('action', url);
					var iframe = createIframe(iframeId);
					__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).append(iframe);
					iframe.on('load', function (evt) {
						// ie9下接收表单数据数据需要使用 text/html 格式，如：
						// var c = `{
						//             "code":200,
						//             "data":{
						//                 "url":"http://jizhang.nosdn.127.net/merrill-3.png"
						//             }
						//         }`;
						// res.set('Content-Type', 'text/html').status(200).send(c);
						// res.end();
						var responseData;
						try {
							var responseHtml = this.contentWindow.document.body.innerHTML;
							responseData = eval('(' + responseHtml + ')');
						} catch (error) {
							responseData = eval('(' + __WEBPACK_IMPORTED_MODULE_0_jquery___default()(responseHtml).html() + ')');
						} finally {
							if (responseData) {
								config.onUploaded.call(sharkComponent.component, sharkComponent.file, responseData);
								defer.resolve(responseData);
							} else {
								config.onFailed.call(sharkComponent.component, sharkComponent.file, evt);
								defer.reject(evt);
							}
						}
					});
					form[0].submit();
				} else {
					defer.reject({ type: 'noFileSelected' });
				}
				return defer.promise();
			};
			sharkComponent.destroy = function () {
				input.remove();
				form.remove();
				// 销毁component
				if (sharkComponent.createType === 'construct') {
					sharkComponent.component.remove();
				}
				sharkComponent = null;
			};
		}

		/***/
	},

	/***/"cmeh":
	/***/function cmeh(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "a", function () {
			return SharkUI;
		});
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("7t+N");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
		/**
   * @author sweetyx
   * 提供一些公共的核心方法
   */

		var createUUID = function () {
			var index = 0;
			return function () {
				return 'uuid-x'.replace(/x/, index++);
			};
		}();
		var extend = function extend(o1, o2) {
			if (__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.isPlainObject(o1) && __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.isPlainObject(o2)) {
				var temp = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(true, {}, o2);
				return __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(o1, temp);
			} else {
				return o1;
			}
		};
		var isEmpty = function isEmpty(val) {
			if (typeof val === 'undefined' || val === null || val === '') {
				return true;
			} else {
				return false;
			}
		};
		var isArray = function isArray(val) {
			return val instanceof Array;
		};
		var throttle = function throttle(func, wait, maxtime) {
			var timer = null;
			var args;
			var context;
			var lastTime = Date.now();
			return function () {
				context = this;
				args = arguments;
				if (!wait) {
					func.apply(context, args);
				} else {
					var curTime = Date.now();
					clearTimeout(timer);
					if (curTime - lastTime >= maxtime) {
						lastTime = curTime;
						func.apply(context, args);
					} else {
						timer = setTimeout(function () {
							func.apply(context, args);
						}, wait);
					}
				}
			};
		};
		var debounce = function debounce(func, wait, immediate) {
			var timeout;
			var args;
			var context;
			var timestamp;
			var count = 0;
			var later = function later() {
				// 当wait指定的时间间隔期间多次调用_.debounce返回的函数，则会不断更新timestamp的值，导致last < wait && last >= 0一直为true，从而不断启动新的计时器延时执行func
				var last = Date.now() - timestamp;
				if (last < wait && last >= 0) {
					++count;
					timeout = setTimeout(later, wait - last);
				} else {
					timeout = null;
					if (count > 0 || !immediate) {
						count = 0;
						func.apply(context, args);
						if (!timeout) context = args = null;
					}
				}
			};
			return function () {
				context = this;
				args = arguments;
				if (!wait) {
					func.apply(context, args);
				} else {
					timestamp = Date.now();
					// 第一次调用该方法时，且immediate为true，则调用func函数
					var callNow = immediate && !timeout;
					// 在wait指定的时间间隔内首次调用该方法，则启动计时器定时调用func函数
					if (!timeout) timeout = setTimeout(later, wait);
					if (callNow) {
						func.apply(context, args);
						context = args = null;
					}
				}
			};
		};
		var SharkUI = {
			extend: extend,
			createUUID: createUUID,
			isEmpty: isEmpty,
			isArray: isArray,
			throttle: throttle,
			debounce: debounce,
			$: __WEBPACK_IMPORTED_MODULE_0_jquery___default.a
		};

		/***/
	},

	/***/"dOFu":
	/***/function dOFu(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__ = __webpack_require__("f4c1");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_const__ = __webpack_require__("7Lx1");

		angular.module('shark-angularjs.ui').directive(__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].tabs, ['$compile', '$templateRequest', '$parse', '$q', 'SharkConfig', function ($compile, $templateRequest, $parse, $q, SharkConfig) {
			var TabsConfig = SharkConfig.getConfig()[__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].tabs];
			return {
				restrict: 'E',
				link: function link($scope, element, attrs) {
					var tabs;
					var disableWatcher;
					var activeWatcher;
					//销毁函数
					function destroy() {
						if (disableWatcher) {
							disableWatcher();
						}
						if (activeWatcher) {
							activeWatcher();
						}
						if (tabs) {
							tabs.destroy();
							tabs = null;
						}
					}
					// 回调函数
					var _onTabSwitch = SharkConfig.getAttrValue($scope, attrs.onTabSwitch);
					var tabsData = SharkConfig.getAttrValue($scope, attrs.tabs);
					// 如果定义了name属性，把pager组件赋给$scope
					var tabsName = attrs.name;
					var defer = $q.defer();
					var flag = 0;
					for (var i = 0; i < tabsData.length; i++) {
						if (tabsData[i].templateUrl) {
							(function (tab) {
								$templateRequest(tab.templateUrl, true).then(function (tpl) {
									tab.pane = tpl;
									++flag;
									if (flag === tabsData.length) {
										defer.resolve(tabsData);
									}
								});
							})(tabsData[i]);
						} else {
							tabsData[i].pane = tabsData[i].template;
							++flag;
							if (flag === tabsData.length) {
								defer.resolve(tabsData);
							}
						}
					}
					defer.promise.then(function (tabsData) {
						// // 初始化tabs组件
						tabs = __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].sharkTabs({
							tabs: tabsData,
							onTabSwitch: function onTabSwitch(index) {
								try {
									$parse(attrs.active + '=value')($scope, { value: index });
								} catch (e) {
									console.log(e);
								}
								if (typeof _onTabSwitch === 'function') {
									_onTabSwitch.apply(tabs, arguments);
								}
								if (!$scope.$$phase) {
									$scope.$apply();
								}
							}
						});
						tabs.appendTo(element);
						$compile(element.children())($scope);
						//active监听
						activeWatcher = $scope.$watch(function () {
							return SharkConfig.getAttrValue($scope, attrs.active);
						}, function (newValue, oldValue) {
							if (!__WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].isEmpty(newValue)) {
								tabs.switchTo(newValue);
							}
						});
						if (typeof attrs.ngDisabled !== 'undefined') {
							// 监听组件是否被禁用
							disableWatcher = $scope.$watch(function () {
								return $scope.$eval(attrs.ngDisabled);
							}, function (newValue, oldValue) {
								if (tabs) {
									if (newValue === true) {
										tabs.disable();
									}
									if (newValue === false) {
										tabs.enable();
									}
								}
							});
						}
						// 将组件绑定到scope对象上
						if (tabsName) {
							$scope[tabsName] = tabs;
						}
					});
					// $scope销毁时同步销毁tabs组件
					$scope.$on('$destroy', function () {
						destroy();
					});
				}
			};
		}]);

		/***/
	},

	/***/"eRXV":
	/***/function eRXV(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("7t+N");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_core__ = __webpack_require__("cmeh");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_templates__ = __webpack_require__("NL2S");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__common_base__ = __webpack_require__("Wlz3");
		/**
   * @author sweetyx
   * @description 分页插件
   */

		// selecter模板
		var templatePager = __WEBPACK_IMPORTED_MODULE_2__common_templates__["a" /* Templates */].pager;
		var templatePagerFun = __WEBPACK_IMPORTED_MODULE_2__common_templates__["a" /* Templates */].templateAoT(templatePager);

		function testNum(val) {
			return (/^[0-9]{0,}$/.test(val)
			);
		};
		//初始化分页器外层ul的dom，内层的li不用模板生成（因为重新渲染分页器时，仍然需要提供renderPages方法重置分页）
		function initDom(sharkComponent, config, targetElement) {
			if (!targetElement) {
				sharkComponent.createType = 'construct';
				var fun = config.dom ? __WEBPACK_IMPORTED_MODULE_2__common_templates__["a" /* Templates */].templateAoT(config.dom) : templatePagerFun;
				var html = fun.apply(config);
				sharkComponent.component = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(html);
			} else {
				sharkComponent.createType = 'normal';
				sharkComponent.component = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(targetElement);
			}
			sharkComponent.component.addClass('shark-pager pagination');
			return sharkComponent;
		}
		//初始化事件
		function initEvents(sharkComponent, config) {
			var pager = sharkComponent.component;
			var lastvalue = '';
			pager.on('input.pager propertychange.pager', '.form-control', function (evt) {
				var pageinput = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
				var v = pageinput.val();
				if (testNum(v)) {
					lastvalue = v;
				} else {
					pageinput.val(lastvalue);
				}
			});
			pager.on('keydown.pager', '.form-control', function (evt) {
				if (evt.keyCode == 13) {
					pager.find('.btn').trigger('click');
				}
			});
			pager.on('click.pager', '.page,.presegment,.nextsegment,.firstpage,.prevpage,.nextpage,.lastpage,.btn', __WEBPACK_IMPORTED_MODULE_3__common_base__["a" /* BaseComponent */].filterComponentAction(sharkComponent, function (evt) {
				var curEle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
				var newPage;
				if (curEle.hasClass('page')) {
					newPage = parseInt(curEle.children().text());
				}
				//点击前一页码段
				else if (curEle.hasClass('presegment')) {
						newPage = pager.data('minpage') - 1 || 1;
					}
					//点击后一页码段
					else if (curEle.hasClass('nextsegment')) {
							newPage = pager.data('maxpage') + 1 || 1;
						}
						//点击首页
						else if (curEle.hasClass('firstpage')) {
								newPage = 1;
							}
							//点击上一页
							else if (curEle.hasClass('prevpage')) {
									newPage = parseInt(pager.find('.active').children().text()) - 1 || 1;
								}
								//点击下一页
								else if (curEle.hasClass('nextpage')) {
										newPage = parseInt(pager.find('.active').children().text()) + 1 || 1;
									}
									//点击尾页
									else if (curEle.hasClass('lastpage')) {
											newPage = config.totalPages;
										}
										//点击跳转按钮
										else if (curEle.hasClass('btn')) {
												newPage = curEle.prev().val();
												if (__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].isEmpty(newPage) || !testNum(newPage) || newPage == pager.find('.active').children().text() || parseInt(newPage) > config.totalPages || parseInt(newPage) < config.startFrom) {
													return;
												}
												curEle.prev().val('');
												lastvalue = '';
											}
				var startFrom = config.startFrom;
				newPage = newPage - (1 - startFrom);
				sharkComponent.setPage(newPage);
				if (typeof config.onPageChanged === 'function') {
					config.onPageChanged.call(sharkComponent, newPage);
				}
			}));
		}
		//生成页码
		function renderPages(sharkComponent, config) {
			var pager = sharkComponent.component;
			var page = config.page;
			var totalPages = config.totalPages;
			var startFrom = config.startFrom;
			var segmentSize = config.segmentSize;
			if (page > totalPages) {
				// console.log('当前页码不能大于总页码');
				return;
			}
			if (page < 0) {
				// console.log('当前页码不能小于0');
				return;
			}
			if (totalPages < 0) {
				// console.log('总页码不能小于0');
				return;
			}
			if (page < startFrom) {
				// console.log('当前页码不能小于起始页码');
				return;
			}
			page = page + (1 - startFrom);
			pager.empty();
			/*********首页、上一页*********/
			if (page > 1) {
				pager.append('<li class="firstpage"><a>' + config.hl['firstpage'] + '</a></li>');
				pager.append('<li class="prevpage"><a>' + config.hl['prevpage'] + '</a></li>');
			} else {
				pager.append('<li class="disabled"><a>' + config.hl['firstpage'] + '</a></li>');
				pager.append('<li class="disabled"><a>' + config.hl['prevpage'] + '</a></li>');
			}
			/*********中间页码*********/
			//如果当前最页大于一段的页数，生成前边的...
			if (page > segmentSize) {
				pager.append('<li class="presegment"><a>...</a></li>');
			}
			//生成中间页码
			var segment = Math.floor((page - 1) / segmentSize);
			var start = segment * segmentSize + 1;
			var end;
			if (totalPages < segment * segmentSize + segmentSize) {
				end = totalPages;
			} else {
				end = segment * segmentSize + segmentSize;
			}
			for (var i = start; i <= end; i++) {
				var htmlStr = '';
				if (page == i) {
					htmlStr = '<li class="active"><a>' + i + '</a></li>';
				} else {
					htmlStr = '<li class="page"><a>' + i + '</a></li>';
				}
				var htmlEle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(htmlStr);
				if (i == start) {
					//记录当前状态最小页
					pager.data('minpage', i);
				}
				if (i == end) {
					//记录当前状态最大页
					pager.data('maxpage', i);
				}
				pager.append(htmlEle);
			}
			//如果当前最大页小于总页数，生成后边边的...
			if (end < totalPages) {
				pager.append('<li class="nextsegment"><a>...</a></li>');
			}
			/*********尾页、下一页*********/
			if (page < totalPages) {
				pager.append('<li class="nextpage"><a>' + config.hl['nextpage'] + '</a></li>');
				pager.append('<li class="lastpage"><a>' + config.hl['lastpage'] + '</a></li>');
			} else {
				pager.append('<li class="disabled"><a>' + config.hl['nextpage'] + '</a></li>');
				pager.append('<li class="disabled"><a>' + config.hl['lastpage'] + '</a></li>');
			}
			if (config.gopage) {
				pager.append(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('<li class="gopage"><input class="form-control" type="text"/><a class="btn">' + config.hl['gopage'] + '</a></li>'));
			}
		};
		__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkPager = function (options, targetElement) {
			/*********默认参数配置*************/
			var config = {
				totalPages: 1,
				page: 1,
				hl: {
					firstpage: '首页',
					prevpage: '上一页',
					nextpage: '下一页',
					lastpage: '尾页',
					gopage: '跳转'
				},
				segmentSize: 5,
				startFrom: 1,
				gopage: false,
				dom: '',
				onPageChanged: function onPageChanged() {}
			};
			__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].extend(config, options);
			/*********初始化组件*************/
			var sharkComponent = {};
			initDom(sharkComponent, config, targetElement);
			__WEBPACK_IMPORTED_MODULE_3__common_base__["a" /* BaseComponent */].addComponentBaseFn(sharkComponent, config);
			initEvents(sharkComponent, config);
			renderPages(sharkComponent, config);
			/**********初始化***********************/
			sharkComponent.setPage = function (page, totalPages) {
				config.page = page;
				if (!__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].isEmpty(totalPages)) {
					config.totalPages = totalPages;
				}
				renderPages(sharkComponent, config);
			};
			sharkComponent.destroy = function () {
				// 销毁component
				if (sharkComponent.createType === 'construct') {
					sharkComponent.component.remove();
				} else {
					sharkComponent.component.off('input.pager propertychange.pager keydown.pager click.pager');
				}
				sharkComponent = null;
			};
			return sharkComponent;
		};

		/***/
	},

	/***/"f4c1":
	/***/function f4c1(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__src_main_webapp_scripts_src_shark_ui_page__ = __webpack_require__("jRAh");
		/* harmony namespace reexport (by used) */__webpack_require__.d(__webpack_exports__, "a", function () {
			return __WEBPACK_IMPORTED_MODULE_0__src_main_webapp_scripts_src_shark_ui_page__["a"];
		});

		/***/
	},

	/***/"hBWb":
	/***/function hBWb(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__ = __webpack_require__("f4c1");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_const__ = __webpack_require__("7Lx1");

		angular.module('shark-angularjs.ui').directive(__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].checkboxgroup, ['SharkConfig', '$timeout', function (SharkConfig, $timeout) {
			return {
				restrict: 'E',
				template: ' <div>\n                            <label class="checkbox-inline" ng-repeat="item in ngModel track by $index">\n                                <input type="checkbox" ng-model="item.checked">{{item.name}}\n                            </label>\n                        </div>\n            ',
				scope: {
					ngModel: '='
				},
				replace: true,
				require: '?ngModel',
				link: function link($scope, element, attrs, ngModelCtrl) {}
			};
		}]);

		/***/
	},

	/***/"ihfR":
	/***/function ihfR(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__ = __webpack_require__("f4c1");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_const__ = __webpack_require__("7Lx1");

		angular.module('shark-angularjs.ui').provider('SharkToastr', function () {
			this.$get = ['SharkConfig', function (SharkConfig) {
				var ToastrConfig = SharkConfig.getConfig()[__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].toastr];
				return {
					success: function success(content, duration) {
						__WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].sharkToastr({
							type: 'success',
							content: content,
							duration: duration || ToastrConfig.duration
						});
					},
					error: function error(content, duration) {
						__WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].sharkToastr({
							type: 'error',
							content: content,
							duration: duration || ToastrConfig.duration
						});
					}
				};
			}];
		});

		/***/
	},

	/***/"jRAh":
	/***/function jRAh(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__components_autocomplete_ui__ = __webpack_require__("V+TY");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_dropdown_ui__ = __webpack_require__("oYaM");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__components_fileupload_ui__ = __webpack_require__("Zyb7");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__components_pager_ui__ = __webpack_require__("eRXV");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__components_selecter_ui__ = __webpack_require__("MJip");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__components_tabs_ui__ = __webpack_require__("vs47");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__components_tree_ui__ = __webpack_require__("GIzm");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_7__components_popover_ui__ = __webpack_require__("b3ux");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_8__components_modal_ui__ = __webpack_require__("J2i8");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_9__components_toastr_ui__ = __webpack_require__("GeeO");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_10__common_core__ = __webpack_require__("cmeh");
		/* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
			return __WEBPACK_IMPORTED_MODULE_10__common_core__["a"];
		});
		;
		;
		;
		;
		;
		;
		;

		if (typeof window !== 'undefined') {
			window.SharkUI = __WEBPACK_IMPORTED_MODULE_10__common_core__["a" /* SharkUI */];
		}

		/***/
	},

	/***/"k88O":
	/***/function k88O(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony export (immutable) */
		__webpack_exports__["a"] = makeSelectable;
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("7t+N");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_core__ = __webpack_require__("cmeh");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_base__ = __webpack_require__("Wlz3");
		/**
   * @author sweetyx
   * @description 树插件的扩展，可select树
   */

		function makeSelectable(sharkComponent, config) {
			var tree = sharkComponent.component;
			tree.addClass('tree-selectable');
			//获取selected的节点
			function getSelectedNode() {
				var nameEle = tree.find('.tree-node-selected');
				var label = nameEle.parent();
				var groupId = label.attr('tree-group-id');
				var node = config.nodesMap[groupId];
				return node;
			}
			/**
    * select节点
    */
			function selectNode(nameEle, callback) {
				if (!nameEle.hasClass('tree-node-selected')) {
					tree.find('.tree-node-selected').removeClass('tree-node-selected');
					nameEle.addClass('tree-node-selected');
					var parentLabel = nameEle.parent();
					var node_id = parentLabel.attr('tree-group-id');
					var node = config.nodesMap[node_id];
					if (typeof callback === 'function') {
						callback.call(tree, node);
					}
				}
			}
			/**
    * 获取selected的节点
    * @return {[nodes]}
    */
			sharkComponent.getSelectedNode = function () {
				return getSelectedNode();
			};
			/**
    * 选中节点
    * @param  {node}   node            [节点对象或节点id]
    * @param  {boolean}   updateLinkNodes [是否需要check相关联的节点]
    * @param  {Function} callback        [回调函数]
    * @return {[tree]}                   [tree]
    */
			sharkComponent.selectNode = function (node) {
				var nodeId = node.node_id || node;
				var groupEle = tree.find('.tree-group[tree-group-id="' + nodeId + '"]');
				if (groupEle.length > 0) {
					var nameEle = groupEle.children('.tree-node-name');
					selectNode(nameEle, config.onNodeSelected);
				}
			};
			//树的点击事件
			tree.on('click', '.tree-node-name', __WEBPACK_IMPORTED_MODULE_2__common_base__["a" /* BaseComponent */].filterComponentAction(tree, function (evt) {
				var nameEle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
				selectNode(nameEle, config.onNodeSelected);
			}));
		}

		/***/
	},

	/***/"lpxZ":
	/***/function lpxZ(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__ = __webpack_require__("f4c1");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_const__ = __webpack_require__("7Lx1");

		angular.module('shark-angularjs.ui').directive(__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].selecter, ['SharkConfig', function (SharkConfig) {
			var SelecterConfig = SharkConfig.getConfig()[__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].selecter];
			return {
				restrict: 'E',
				require: '?ngModel',
				link: function link($scope, element, attrs, ngModelCtrl) {
					var selecter;
					var disableWatcher;
					var ngModelWatcher;
					//销毁函数
					function destroy() {
						element.empty();
						if (ngModelWatcher) {
							ngModelWatcher();
						}
						if (disableWatcher) {
							disableWatcher();
						}
						if (selecter) {
							selecter.destroy();
							selecter = null;
						}
					}
					// 回调函数
					var selectCb = SharkConfig.getAttrValue($scope, attrs.onSelected);
					// 对应的真值字段
					var actualKey = typeof attrs.actualKey !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.actualKey) : SelecterConfig.actualKey;
					// 对应的展示值字段
					var displayKey = typeof attrs.displayKey !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.displayKey) : SelecterConfig.displayKey;
					// 选中之后的样式
					var activeStyle = typeof attrs.activeStyle !== 'undefined' ? SharkConfig.getAttrValue($scope, attrs.activeStyle) : SelecterConfig.activeStyle;
					// 如果定义了name属性，把selecter组件赋给$scope
					var selecterName = attrs.name;

					// 下拉框数据变化后，重置下拉框
					$scope.$watch(function () {
						return $scope.$eval(attrs.data);
					}, function (newValue, oldValue) {
						if (!newValue) {
							return;
						}
						destroy();
						selecter = __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].sharkSelecter({
							data: newValue,
							activeStyle: activeStyle,
							actualKey: actualKey,
							displayKey: displayKey,
							onSelected: function onSelected(v) {
								if (ngModelCtrl && ngModelCtrl.$setViewValue && ngModelCtrl.$modelValue !== v) {
									ngModelCtrl.$setViewValue(v);
								}
								if (typeof selectCb === 'function') {
									selectCb.apply(selecter, arguments);
									if (!$scope.$$phase) {
										$scope.$apply();
									}
								}
							}
						});
						selecter.appendTo(element);
						//双向数据绑定
						ngModelWatcher = $scope.$watch(attrs.ngModel, function (newVal, oldVal) {
							selecter.setValue(newVal, false); //不触发回调
						});
						if (typeof attrs.ngDisabled !== 'undefined') {
							// 监听组件是否被禁用
							disableWatcher = $scope.$watch(function () {
								return $scope.$eval(attrs.ngDisabled);
							}, function (newValue, oldValue) {
								if (selecter) {
									if (newValue === true) {
										selecter.disable();
									}
									if (newValue === false) {
										selecter.enable();
									}
								}
							});
						}
						if (selecterName) {
							$scope[selecterName] = selecter;
						}
					}, true);

					// $scope销毁时同步销毁selecter组件
					$scope.$on('$destroy', function () {
						destroy();
					});
				}
			};
		}]);

		/***/
	},

	/***/"n4FF":
	/***/function n4FF(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__ = __webpack_require__("f4c1");

		angular.module('shark-angularjs.ui').factory('SharkValidHelper', ['SharkValidConfig', function (SharkValidConfig) {
			var validator = {
				// 设置验证结果
				setValidityResult: function setValidityResult(ctrl, errors) {
					// 设置新的错误
					for (var key in errors) {
						ctrl.$setValidity(key, errors[key]);
					}
				},
				// 触发验证
				triggerCheck: function triggerCheck(scope, elm, attr, ctrl, value, fn) {
					var _this2 = this;

					// 触发验证函数
					var result = fn.call(this, scope, elm, attr, ctrl, value);
					// 如果返回是的一个promise对象
					if (result && typeof result.then === 'function') {
						// 元素设置等待状态
						elm.addClass('valid-pending');
						result.then(function (res) {
							elm.removeClass('valid-pending');
							_this2.setValidityResult(ctrl, res);
						}, function () {
							elm.removeClass('valid-pending');
							_this2.setValidityResult(ctrl, {
								promise: true
							});
						});
						if (elm[0].tagName === 'INPUT') {
							var elmJq = __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].$(elm);
							elmJq.off('focusout.triggerCheck');
							elmJq.on('focusout.triggerCheck', function () {
								result.then(function () {
									_this2.showError(elm);
								}, function () {
									_this2.showError(elm);
								});
							});
						} else {
							this.showError(elm);
						}
					} else if ((typeof result === 'undefined' ? 'undefined' : _typeof2(result)) === 'object') {
						// 如果返回的是一个对象
						this.setValidityResult(ctrl, result);
						if (elm.hasClass('js-clicktouch') && elm.hasClass('ng-touched')) {
							this.showError(elm);
						}
					}
				},
				// 获取某个key对应的错误提示信息
				getErrorMessage: function getErrorMessage(elm, errorKey) {
					var msgTpl = '未定义错误';
					var res = SharkValidConfig.getRules()[errorKey];
					if ((typeof res === 'undefined' ? 'undefined' : _typeof2(res)) === 'object') {
						msgTpl = res.text;
						var repArr = res.repArr;
						for (var i = 0; i < repArr.length; i++) {
							var key = repArr[i];
							msgTpl = msgTpl.replace('{' + key + '}', elm.attr(key));
						}
					} else if (typeof res === 'string') {
						msgTpl = res;
					}
					return msgTpl;
				},
				// 显示某个元素上的错误提示信息
				showError: function showError(elm) {
					this.removeError(elm);
					var elemCtrl = elm.inheritedData("$ngModelController");
					if (elemCtrl && !elemCtrl.$valid) {
						var errorMessages = [];
						for (var errorKey in elemCtrl.$error) {
							if (elemCtrl.$error[errorKey]) {
								var msg = this.getErrorMessage(elm, errorKey);
								errorMessages.push(msg);
							}
						}
						if (errorMessages.length > 0) {
							elm.addClass('valid-error');
							elm.after('<span class="valid-error-text">' + errorMessages[0] + '</span>');
						};
					}
				},
				// 移除错误提示信息
				removeError: function removeError(elm) {
					elm.removeClass('valid-error');
					var nextElm = elm.next();
					if (nextElm.hasClass('valid-error-text')) {
						nextElm.remove();
					}
				}
			};
			return validator;
		}]);

		/***/
	},

	/***/"oYaM":
	/***/function oYaM(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("7t+N");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_core__ = __webpack_require__("cmeh");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_event__ = __webpack_require__("z2OP");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__common_domhelper__ = __webpack_require__("HxaC");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__common_templates__ = __webpack_require__("NL2S");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__common_base__ = __webpack_require__("Wlz3");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__listgroup_ui__ = __webpack_require__("ThzW");
		/**
   * @author lingqiao
   * @description selecter插件和dropdown插件
   */

		// dropdown模板
		var templateDropdown = __WEBPACK_IMPORTED_MODULE_4__common_templates__["a" /* Templates */].dropdown;
		var templateDropdownFun = __WEBPACK_IMPORTED_MODULE_4__common_templates__["a" /* Templates */].templateAoT(templateDropdown);

		// 初始化dropdown的dom
		function initDom(sharkComponent, config, targetElement) {
			if (!targetElement) {
				sharkComponent.createType = 'construct';
				var fun = config.dom ? __WEBPACK_IMPORTED_MODULE_4__common_templates__["a" /* Templates */].templateAoT(config.dom) : templateDropdownFun;
				var html = fun.apply(config);
				sharkComponent.component = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(html);
			} else {
				sharkComponent.createType = 'normal';
				sharkComponent.component = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(targetElement);
			}
			sharkComponent.component.addClass('shark-dropdown');
			return sharkComponent;
		}
		// 初始化下拉列表的的dom
		function initSelectionsDom(sharkComponent, config) {
			var selections = __WEBPACK_IMPORTED_MODULE_6__listgroup_ui__["a" /* ListGroup */].render();
			selections.addClass('shark-dropdown-list-group');
			__WEBPACK_IMPORTED_MODULE_6__listgroup_ui__["a" /* ListGroup */].update(selections, config.data, config.actualKey, config.displayKey);
			sharkComponent.selections = selections;
			__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).append(selections);
		}
		// 初始化下拉列表事件
		function initSelectionsEvents(sharkComponent, config) {
			var dropdown = sharkComponent.component;
			var selections = sharkComponent.selections;
			selections.on('click', '.list-group-item', function (evt) {
				var item = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
				if (typeof config.onSelected === 'function') {
					config.onSelected.call(sharkComponent, item.data());
				}
				//收起待选列表
				dropdown.removeClass('open');
				selections.hide();
			});
			// 点击除了组件之外的地方，收起下拉列表
			__WEBPACK_IMPORTED_MODULE_2__common_event__["a" /* Event */].addCloseListener(selections.attr('id'), [dropdown, selections], function () {
				if (!selections.is(':hidden')) {
					dropdown.removeClass('open');
					selections.hide();
				}
			});
		}
		// 初始化事件
		function initEvents(sharkComponent, config) {
			var dropdown = sharkComponent.component;
			dropdown.on('click.dropdown', '.dropdown', __WEBPACK_IMPORTED_MODULE_5__common_base__["a" /* BaseComponent */].filterComponentAction(sharkComponent, function (evt) {
				if (!sharkComponent.selections) {
					initSelectionsDom(sharkComponent, config);
					// 给下拉菜单selections绑定事件
					initSelectionsEvents(sharkComponent, config);
				}
				var selections = sharkComponent.selections;
				if (selections.is(':hidden')) {
					var postion = __WEBPACK_IMPORTED_MODULE_3__common_domhelper__["a" /* DomHelper */].calcOffset(dropdown, selections, 'bottom');
					selections.css(postion);
					//展开待选列表
					dropdown.addClass('open');
					selections.show();
				} else {
					//收起待选列表
					dropdown.removeClass('open');
					selections.hide();
				}
			}));
		}

		__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkDropdown = function (options, targetElement) {
			/*********默认参数配置*************/
			var config = {
				text: '',
				data: null,
				actualKey: 'value',
				displayKey: 'name',
				dom: '',
				onSelected: function onSelected() {}
			};
			__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].extend(config, options);
			/*********初始化组件*************/
			var sharkComponent = {};
			initDom(sharkComponent, config, targetElement);
			__WEBPACK_IMPORTED_MODULE_5__common_base__["a" /* BaseComponent */].addComponentBaseFn(sharkComponent, config);
			initEvents(sharkComponent, config);
			sharkComponent.destroy = function () {
				if (sharkComponent.selections) {
					__WEBPACK_IMPORTED_MODULE_2__common_event__["a" /* Event */].removeCloseListener(sharkComponent.selections.attr('id'));
					sharkComponent.selections.destroy();
				}
				// 销毁component
				if (sharkComponent.createType === 'construct') {
					sharkComponent.component.remove();
				} else {
					sharkComponent.component.off('click.dropdown');
				}
				sharkComponent = null;
			};
			return sharkComponent;
		};

		/***/
	},

	/***/"olQM":
	/***/function olQM(module, exports) {

		Date.prototype.Format = function (fmt) {
			var o = {
				"M+": this.getMonth() + 1, //月份 
				"d+": this.getDate(), //日 
				"H+": this.getHours(), //小时 
				"m+": this.getMinutes(), //分 
				"s+": this.getSeconds(), //秒 
				"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
				"S": this.getMilliseconds() //毫秒 
			};
			if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
			for (var k in o) {
				if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
			}return fmt;
		};
		Date.prototype.addMin = function (count) {
			var datetime = this.getTime();
			datetime = datetime + count * 60000;
			return new Date(datetime);
		};
		Date.prototype.addHour = function (count) {
			var datetime = this.getTime();
			datetime = datetime + count * 60000 * 60;
			return new Date(datetime);
		};
		Date.prototype.addDay = function (count) {
			var datetime = this.getTime();
			datetime = datetime + count * 60000 * 60 * 24;
			return new Date(datetime);
		};
		Date.prototype.addMonth = function (count) {
			var date = this;
			var dtArr = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
			var y = Math.floor(count / 12);
			var m = count % 12;
			dtArr[0] = dtArr[0] + y;
			dtArr[1] = dtArr[1] + m;
			if (count > 0) {
				if (dtArr[1] > 12) {
					dtArr[1] = dtArr[1] - 12;
					dtArr[0] = dtArr[0] + 1;
				}
			} else {
				if (dtArr[1] < 1) {
					dtArr[1] = dtArr[1] + 12;
					dtArr[0] = dtArr[0] - 1;
				}
			}
			date.setFullYear(dtArr[0]);
			date.setMonth(dtArr[1] - 1);
			return date;
		};
		Date.prototype.addYear = function (count) {
			var date = this;
			var dtArr = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
			dtArr[0] = dtArr[0] + count;
			date.setFullYear(dtArr[0]);
			return date;
		};
		Date.today = function () {
			var date = new Date();
			date.setHours(0);
			date.setMinutes(0);
			date.setSeconds(0);
			date.setMilliseconds(0);
			return date;
		};
		Date.year = function () {
			var date = new Date();
			date.setMonth(0);
			date.setDate(1);
			date.setHours(0);
			date.setMinutes(0);
			date.setSeconds(0);
			date.setMilliseconds(0);
			return date;
		};
		Date.nowtime = function () {
			var date = new Date();
			date.setMilliseconds(0);
			return date;
		};

		/***/
	},

	/***/"v44L":
	/***/function v44L(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__ = __webpack_require__("f4c1");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_const__ = __webpack_require__("7Lx1");

		angular.module('shark-angularjs.ui').provider('SharkModal', function () {
			this.$get = ['$templateRequest', '$compile', '$q', '$controller', '$rootScope', 'SharkConfig', 'SharkResolve', function ($templateRequest, $compile, $q, $controller, $rootScope, SharkConfig, SharkResolve) {
				var ModalConfig = SharkConfig.getConfig()[__WEBPACK_IMPORTED_MODULE_1__common_const__["a" /* COMPONENTS */].modal];

				function processResult(options, defer, tpl, resolves) {
					var modal = __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].sharkModal({
						animate: 'fade',
						size: options.size || ModalConfig.size,
						backdrop: options.backdrop || ModalConfig.backdrop,
						content: tpl,
						onShow: function onShow() {
							if (typeof locals.$scope.afterViewInit === 'function') {
								locals.$scope.afterViewInit.call(locals.$scope);
							}
						},
						onHide: function onHide() {
							if (modal.hideType === 'close') {
								defer.resolve(modal.arguments);
							} else {
								defer.reject(modal.arguments);
							}
						}
					});
					modal.close = function (params) {
						modal.hideType = 'close';
						modal.arguments = params;
						modal.hide();
					};
					modal.dismiss = function (params) {
						modal.hideType = 'dismiss';
						modal.arguments = params;
						modal.hide();
					};
					//生成scope
					var locals = {};
					locals.$scope = $rootScope.$new(true);
					locals.modalInstance = modal;
					angular.forEach(resolves, function (value, key) {
						locals[key] = value;
					});
					//实例化controller，并关联scope
					$controller(options.controller, locals);
					//编译弹窗的html
					$compile(modal.component)(locals.$scope);
					//打开弹窗
					modal.show();
				}
				return {
					open: function open(options) {
						var defer = $q.defer();
						if (options.template) {
							$q.all([SharkResolve.resolve(options.resolve)]).then(function (result) {
								processResult(options, defer, options.template, result[0]);
							});
						} else {
							$q.all([$templateRequest(options.templateUrl, true), SharkResolve.resolve(options.resolve)]).then(function (result) {
								processResult(options, defer, result[0], result[1]);
							});
						}
						return defer.promise;
					},
					alert: function alert(options) {
						return __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].sharkAlert({
							title: options.title || ModalConfig.title,
							content: options.content || '',
							okText: options.okText || ModalConfig.okText
						});
					},
					confirm: function confirm(options) {
						return __WEBPACK_IMPORTED_MODULE_0__ntesmail_shark_ui__["a" /* SharkUI */].sharkConfirm({
							title: options.title || ModalConfig.title,
							content: options.content || '',
							okText: options.okText || ModalConfig.okText,
							cancelText: options.cancelText || ModalConfig.cancelText
						});
					}
				};
			}];
		});

		/***/
	},

	/***/"v7ON":
	/***/function v7ON(module, __webpack_exports__, __webpack_require__) {

		"use strict";

		Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__common_const__ = __webpack_require__("7Lx1");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_config__ = __webpack_require__("aQ1F");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_core__ = __webpack_require__("I3/c");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_core__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__common_date__ = __webpack_require__("olQM");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__common_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__common_date__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__validator_config__ = __webpack_require__("K5He");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__validator_service__ = __webpack_require__("n4FF");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__validator_directive__ = __webpack_require__("2gJo");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_7__components_autocomplete_ui__ = __webpack_require__("ZW0h");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_8__components_fileupload_ui__ = __webpack_require__("VysB");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_9__components_tabs_ui__ = __webpack_require__("dOFu");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_10__components_datepicker_ui__ = __webpack_require__("0FTm");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_11__components_daterangepicker_ui__ = __webpack_require__("0iVz");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_12__components_dropdown_ui__ = __webpack_require__("MSjz");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_13__components_modal_ui__ = __webpack_require__("v44L");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_14__components_pager_ui__ = __webpack_require__("7mCR");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_15__components_popover_ui__ = __webpack_require__("CacV");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_16__components_selecter_ui__ = __webpack_require__("lpxZ");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_17__components_toastr_ui__ = __webpack_require__("ihfR");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_18__components_tree_ui__ = __webpack_require__("EUSv");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_19__components_radiogroup_ui__ = __webpack_require__("/kcE");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_20__components_checkboxgroup_ui__ = __webpack_require__("hBWb");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_21__components_checkabletable_ui__ = __webpack_require__("PcK8");
		//common


		// validator


		//components
		;
		;

		/* harmony default export */__webpack_exports__["default"] = 'shark-angularjs.ui';

		/***/
	},

	/***/"vs47":
	/***/function vs47(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony import */
		var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("7t+N");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__common_core__ = __webpack_require__("cmeh");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__common_templates__ = __webpack_require__("NL2S");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__common_base__ = __webpack_require__("Wlz3");
		/**
   * @author lingqiao
   * @description tabs插件
   */

		var template = __WEBPACK_IMPORTED_MODULE_2__common_templates__["a" /* Templates */].tabs;
		var templateFun = __WEBPACK_IMPORTED_MODULE_2__common_templates__["a" /* Templates */].templateAoT(template);
		// 初始化tabs的dom
		function initDom(sharkComponent, config, targetElement) {
			if (!targetElement) {
				sharkComponent.createType = 'construct';
				var fun = config.dom ? __WEBPACK_IMPORTED_MODULE_2__common_templates__["a" /* Templates */].templateAoT(config.dom) : templateFun;
				var html = fun.apply(config);
				sharkComponent.component = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(html);
			} else {
				sharkComponent.createType = 'normal';
				sharkComponent.component = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(targetElement);
			}
			sharkComponent.component.addClass('shark-tabs');
			return sharkComponent;
		}
		// 初始化事件
		function initEvents(sharkComponent, config) {
			var tabs = sharkComponent.component;
			tabs.on('click.tabs', '.nav-tabs li', __WEBPACK_IMPORTED_MODULE_3__common_base__["a" /* BaseComponent */].filterComponentAction(sharkComponent, function (e) {
				var index = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).index();
				switchTo(sharkComponent, index, config.onTabSwitch);
			}));
		}
		// 切换到某个tab
		function switchTo(sharkComponent, index, cb) {
			var tabs = sharkComponent.component;
			var menu = tabs.find('.nav-tabs');
			var tabpane = tabs.find('.tab-pane');
			var len = menu.find('li').length;
			index = index % len;
			var activeIndex = menu.find('li.active').index();
			if (index === activeIndex) {
				return;
			}
			menu.children().siblings().removeClass('active').end().eq(index).addClass('active');
			tabpane.siblings().removeClass('active').end().eq(index).addClass('active');
			if (typeof cb === 'function') {
				cb.call(sharkComponent, index);
			}
		}
		// 开始自动切换
		function startAutoSwitch(sharkComponent, config) {
			var tabs = sharkComponent.component;
			doAutoSwitch(sharkComponent, config);
			tabs.on('mouseover.tabs', function () {
				clearInterval(sharkComponent.autoSwitchTimer);
				sharkComponent.autoSwitchTimer = null;
			});
			tabs.on('mouseout.tabs', function () {
				doAutoSwitch(sharkComponent, config);
			});
		}
		// 执行自动切换
		function doAutoSwitch(sharkComponent, config) {
			var tabs = sharkComponent.component;
			var menu = tabs.find('.nav-tabs');
			sharkComponent.autoSwitchTimer = setInterval(function () {
				var index = menu.find('li.active').index() + 1;
				switchTo(sharkComponent, index, config.onTabSwitch);
			}, config.auto);
		}
		// 结束自动切换
		function stopAutoSwitch(sharkComponent) {
			var tabs = sharkComponent.component;
			clearInterval(sharkComponent.autoSwitchTimer);
			sharkComponent.autoSwitchTimer = null;
			tabs.off('mouseover.tabs').off('mouseout.tabs');
		}

		__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].sharkTabs = function (options, targetElement) {
			/*********默认参数配置*************/
			var config = {
				tabs: [],
				initTab: 0,
				dom: '',
				onTabSwitch: function onTabSwitch() {}
			};
			__WEBPACK_IMPORTED_MODULE_1__common_core__["a" /* SharkUI */].extend(config, options);
			/*********初始化组件*************/
			var sharkComponent = {};
			initDom(sharkComponent, config, targetElement);
			__WEBPACK_IMPORTED_MODULE_3__common_base__["a" /* BaseComponent */].addComponentBaseFn(sharkComponent, config);
			initEvents(sharkComponent, config);
			switchTo(sharkComponent, config.initTab);
			//切换至某个tab
			sharkComponent.switchTo = function (index, cb) {
				var callback;
				if (cb === true) {
					callback = config.onTabSwitch;
				} else if (typeof cb === 'function') {
					callback = cb;
				} else {
					callback = false;
				}
				switchTo(sharkComponent, index, callback);
			};
			//开启自动切换
			sharkComponent.startAutoSwitch = function (auto) {
				if (/^[1-9]{1,}[0-9]*$/.test(auto)) {
					//正整数
					config.auto = auto;
					startAutoSwitch(sharkComponent, config);
				}
			};
			//关闭自动切换
			sharkComponent.stopAutoSwitch = function () {
				stopAutoSwitch(sharkComponent);
			};
			//销毁
			sharkComponent.destroy = function () {
				stopAutoSwitch(sharkComponent);
				if (sharkComponent.createType === 'construct') {
					sharkComponent.component.remove();
				} else {
					sharkComponent.component.off('click.tabs');
				}
				sharkComponent = null;
			};
			return sharkComponent;
		};

		/***/
	},

	/***/"z2OP":
	/***/function z2OP(module, __webpack_exports__, __webpack_require__) {

		"use strict";
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "a", function () {
			return Event;
		});
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("7t+N");
		/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
		/**
   * @author sweetyx
   * 通用事件处理
   */

		var registerCloseArray = [];
		var isCloseRegister = false;
		function dispatchHandler(evt) {
			for (var i = 0; i < registerCloseArray.length; i++) {
				var key = registerCloseArray[i].key;
				var elems = registerCloseArray[i].elems;
				if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + key).length == 0) {
					removeCloseListener(key);
				} else {
					var isClickNoHideArea = false;
					for (var j = 0; j < elems.length; j++) {
						var item = elems[j];
						if (item[0] == evt.target || item.find(evt.target).length > 0) {
							//console.log('点击了不需要隐藏的区域',item);
							isClickNoHideArea = true;
							break;
						}
					}
					if (isClickNoHideArea === false && typeof registerCloseArray[i].cb === 'function') {
						registerCloseArray[i].cb.call(evt);
					}
				}
			}
		}
		/**
   * [注册组件在body上click时的关闭事件]
   * @param {[type]} key   [组件的id]
   * @param {[type]} elems [点击哪些元素时，不关闭组件]
   */
		var addCloseListener = function addCloseListener(key, elems, cb) {
			if (!isCloseRegister) {
				isCloseRegister = true;
				__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on('mousedown.sharkcore', dispatchHandler);
			}
			registerCloseArray.push({
				key: key,
				elems: elems,
				cb: cb
			});
		};
		var removeCloseListener = function removeCloseListener(key) {
			for (var i = 0; i < registerCloseArray.length; i++) {
				if (key === registerCloseArray[i].key) {
					registerCloseArray.splice(i, 1);
					break;
				}
			}
			if (registerCloseArray.length === 0) {
				isCloseRegister = false;
				__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).off('mousedown.sharkcore', dispatchHandler);
			}
		};

		var Event = {
			addCloseListener: addCloseListener,
			removeCloseListener: removeCloseListener
		};

		/***/
	}

	/******/ });