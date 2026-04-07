"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosRecoveryPlan = exports.RosMonitorConfig = exports.RosInstance = exports.RosDomainRecord = exports.RosDomainGroup = exports.RosDomainAttachment = exports.RosDomain = exports.RosCustomLine = exports.RosCacheDomain = exports.RosAddressPool = exports.RosAccessStrategy = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosAccessStrategyProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessStrategyProps`
 *
 * @returns the result of the validation.
 */
function RosAccessStrategyPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.failoverMinAvailableAddrNum && (typeof properties.failoverMinAvailableAddrNum) !== 'object') {
        errors.collect(ros.propertyValidator('failoverMinAvailableAddrNum', ros.validateRange)({
            data: properties.failoverMinAvailableAddrNum,
            min: 1,
            max: 400,
        }));
    }
    errors.collect(ros.propertyValidator('failoverMinAvailableAddrNum', ros.validateNumber)(properties.failoverMinAvailableAddrNum));
    errors.collect(ros.propertyValidator('defaultAddrPoolType', ros.requiredValidator)(properties.defaultAddrPoolType));
    if (properties.defaultAddrPoolType && (typeof properties.defaultAddrPoolType) !== 'object') {
        errors.collect(ros.propertyValidator('defaultAddrPoolType', ros.validateAllowedValues)({
            data: properties.defaultAddrPoolType,
            allowedValues: ["IPV4", "IPV6", "DOMAIN"],
        }));
    }
    errors.collect(ros.propertyValidator('defaultAddrPoolType', ros.validateString)(properties.defaultAddrPoolType));
    if (properties.failoverAddrPoolType && (typeof properties.failoverAddrPoolType) !== 'object') {
        errors.collect(ros.propertyValidator('failoverAddrPoolType', ros.validateAllowedValues)({
            data: properties.failoverAddrPoolType,
            allowedValues: ["IPV4", "IPV6", "DOMAIN"],
        }));
    }
    errors.collect(ros.propertyValidator('failoverAddrPoolType', ros.validateString)(properties.failoverAddrPoolType));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if (properties.defaultLatencyOptimization && (typeof properties.defaultLatencyOptimization) !== 'object') {
        errors.collect(ros.propertyValidator('defaultLatencyOptimization', ros.validateAllowedValues)({
            data: properties.defaultLatencyOptimization,
            allowedValues: ["OPEN", "CLOSE"],
        }));
    }
    errors.collect(ros.propertyValidator('defaultLatencyOptimization', ros.validateString)(properties.defaultLatencyOptimization));
    if (properties.failoverAddrPool && (Array.isArray(properties.failoverAddrPool) || (typeof properties.failoverAddrPool) === 'string')) {
        errors.collect(ros.propertyValidator('failoverAddrPool', ros.validateLength)({
            data: properties.failoverAddrPool.length,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('failoverAddrPool', ros.listValidator(RosAccessStrategy_FailoverAddrPoolPropertyValidator))(properties.failoverAddrPool));
    errors.collect(ros.propertyValidator('defaultMinAvailableAddrNum', ros.requiredValidator)(properties.defaultMinAvailableAddrNum));
    if (properties.defaultMinAvailableAddrNum && (typeof properties.defaultMinAvailableAddrNum) !== 'object') {
        errors.collect(ros.propertyValidator('defaultMinAvailableAddrNum', ros.validateRange)({
            data: properties.defaultMinAvailableAddrNum,
            min: 1,
            max: 400,
        }));
    }
    errors.collect(ros.propertyValidator('defaultMinAvailableAddrNum', ros.validateNumber)(properties.defaultMinAvailableAddrNum));
    if (properties.failoverLatencyOptimization && (typeof properties.failoverLatencyOptimization) !== 'object') {
        errors.collect(ros.propertyValidator('failoverLatencyOptimization', ros.validateAllowedValues)({
            data: properties.failoverLatencyOptimization,
            allowedValues: ["OPEN", "CLOSE"],
        }));
    }
    errors.collect(ros.propertyValidator('failoverLatencyOptimization', ros.validateString)(properties.failoverLatencyOptimization));
    errors.collect(ros.propertyValidator('defaultAddrPool', ros.requiredValidator)(properties.defaultAddrPool));
    if (properties.defaultAddrPool && (Array.isArray(properties.defaultAddrPool) || (typeof properties.defaultAddrPool) === 'string')) {
        errors.collect(ros.propertyValidator('defaultAddrPool', ros.validateLength)({
            data: properties.defaultAddrPool.length,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('defaultAddrPool', ros.listValidator(RosAccessStrategy_DefaultAddrPoolPropertyValidator))(properties.defaultAddrPool));
    errors.collect(ros.propertyValidator('strategyName', ros.requiredValidator)(properties.strategyName));
    errors.collect(ros.propertyValidator('strategyName', ros.validateString)(properties.strategyName));
    if (properties.failoverLbaStrategy && (typeof properties.failoverLbaStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('failoverLbaStrategy', ros.validateAllowedValues)({
            data: properties.failoverLbaStrategy,
            allowedValues: ["ALL_RR", "RATIO"],
        }));
    }
    errors.collect(ros.propertyValidator('failoverLbaStrategy', ros.validateString)(properties.failoverLbaStrategy));
    if (properties.failoverMaxReturnAddrNum && (typeof properties.failoverMaxReturnAddrNum) !== 'object') {
        errors.collect(ros.propertyValidator('failoverMaxReturnAddrNum', ros.validateRange)({
            data: properties.failoverMaxReturnAddrNum,
            min: 1,
            max: 8,
        }));
    }
    errors.collect(ros.propertyValidator('failoverMaxReturnAddrNum', ros.validateNumber)(properties.failoverMaxReturnAddrNum));
    if (properties.defaultMaxReturnAddrNum && (typeof properties.defaultMaxReturnAddrNum) !== 'object') {
        errors.collect(ros.propertyValidator('defaultMaxReturnAddrNum', ros.validateRange)({
            data: properties.defaultMaxReturnAddrNum,
            min: 1,
            max: 8,
        }));
    }
    errors.collect(ros.propertyValidator('defaultMaxReturnAddrNum', ros.validateNumber)(properties.defaultMaxReturnAddrNum));
    errors.collect(ros.propertyValidator('accessMode', ros.validateString)(properties.accessMode));
    errors.collect(ros.propertyValidator('strategyMode', ros.requiredValidator)(properties.strategyMode));
    if (properties.strategyMode && (typeof properties.strategyMode) !== 'object') {
        errors.collect(ros.propertyValidator('strategyMode', ros.validateAllowedValues)({
            data: properties.strategyMode,
            allowedValues: ["GEO", "LATENCY"],
        }));
    }
    errors.collect(ros.propertyValidator('strategyMode', ros.validateString)(properties.strategyMode));
    if (properties.defaultLbaStrategy && (typeof properties.defaultLbaStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('defaultLbaStrategy', ros.validateAllowedValues)({
            data: properties.defaultLbaStrategy,
            allowedValues: ["ALL_RR", "RATIO"],
        }));
    }
    errors.collect(ros.propertyValidator('defaultLbaStrategy', ros.validateString)(properties.defaultLbaStrategy));
    errors.collect(ros.propertyValidator('lines', ros.listValidator(ros.validateString))(properties.lines));
    return errors.wrap('supplied properties not correct for "RosAccessStrategyProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::AccessStrategy` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessStrategyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::AccessStrategy` resource.
 */
// @ts-ignore TS6133
function rosAccessStrategyPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAccessStrategyPropsValidator(properties).assertSuccess();
    }
    return {
        'DefaultAddrPool': ros.listMapper(rosAccessStrategyDefaultAddrPoolPropertyToRosTemplate)(properties.defaultAddrPool),
        'DefaultAddrPoolType': ros.stringToRosTemplate(properties.defaultAddrPoolType),
        'DefaultMinAvailableAddrNum': ros.numberToRosTemplate(properties.defaultMinAvailableAddrNum),
        'InstanceId': ros.stringToRosTemplate(properties.instanceId),
        'StrategyMode': ros.stringToRosTemplate(properties.strategyMode),
        'StrategyName': ros.stringToRosTemplate(properties.strategyName),
        'AccessMode': ros.stringToRosTemplate(properties.accessMode),
        'DefaultLatencyOptimization': ros.stringToRosTemplate(properties.defaultLatencyOptimization),
        'DefaultLbaStrategy': ros.stringToRosTemplate(properties.defaultLbaStrategy),
        'DefaultMaxReturnAddrNum': ros.numberToRosTemplate(properties.defaultMaxReturnAddrNum),
        'FailoverAddrPool': ros.listMapper(rosAccessStrategyFailoverAddrPoolPropertyToRosTemplate)(properties.failoverAddrPool),
        'FailoverAddrPoolType': ros.stringToRosTemplate(properties.failoverAddrPoolType),
        'FailoverLatencyOptimization': ros.stringToRosTemplate(properties.failoverLatencyOptimization),
        'FailoverLbaStrategy': ros.stringToRosTemplate(properties.failoverLbaStrategy),
        'FailoverMaxReturnAddrNum': ros.numberToRosTemplate(properties.failoverMaxReturnAddrNum),
        'FailoverMinAvailableAddrNum': ros.numberToRosTemplate(properties.failoverMinAvailableAddrNum),
        'Lines': ros.listMapper(ros.stringToRosTemplate)(properties.lines),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::AccessStrategy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessStrategy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-accessstrategy
 */
class RosAccessStrategy extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAccessStrategy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrStrategyId = this.getAtt('StrategyId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.defaultAddrPool = props.defaultAddrPool;
        this.defaultAddrPoolType = props.defaultAddrPoolType;
        this.defaultMinAvailableAddrNum = props.defaultMinAvailableAddrNum;
        this.instanceId = props.instanceId;
        this.strategyMode = props.strategyMode;
        this.strategyName = props.strategyName;
        this.accessMode = props.accessMode;
        this.defaultLatencyOptimization = props.defaultLatencyOptimization;
        this.defaultLbaStrategy = props.defaultLbaStrategy;
        this.defaultMaxReturnAddrNum = props.defaultMaxReturnAddrNum;
        this.failoverAddrPool = props.failoverAddrPool;
        this.failoverAddrPoolType = props.failoverAddrPoolType;
        this.failoverLatencyOptimization = props.failoverLatencyOptimization;
        this.failoverLbaStrategy = props.failoverLbaStrategy;
        this.failoverMaxReturnAddrNum = props.failoverMaxReturnAddrNum;
        this.failoverMinAvailableAddrNum = props.failoverMinAvailableAddrNum;
        this.lines = props.lines;
    }
    get rosProperties() {
        return {
            defaultAddrPool: this.defaultAddrPool,
            defaultAddrPoolType: this.defaultAddrPoolType,
            defaultMinAvailableAddrNum: this.defaultMinAvailableAddrNum,
            instanceId: this.instanceId,
            strategyMode: this.strategyMode,
            strategyName: this.strategyName,
            accessMode: this.accessMode,
            defaultLatencyOptimization: this.defaultLatencyOptimization,
            defaultLbaStrategy: this.defaultLbaStrategy,
            defaultMaxReturnAddrNum: this.defaultMaxReturnAddrNum,
            failoverAddrPool: this.failoverAddrPool,
            failoverAddrPoolType: this.failoverAddrPoolType,
            failoverLatencyOptimization: this.failoverLatencyOptimization,
            failoverLbaStrategy: this.failoverLbaStrategy,
            failoverMaxReturnAddrNum: this.failoverMaxReturnAddrNum,
            failoverMinAvailableAddrNum: this.failoverMinAvailableAddrNum,
            lines: this.lines,
        };
    }
    renderProperties(props) {
        return rosAccessStrategyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAccessStrategy = RosAccessStrategy;
/**
 * The resource type name for this resource class.
 */
RosAccessStrategy.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::AccessStrategy";
/**
 * Determine whether the given properties match those of a `DefaultAddrPoolProperty`
 *
 * @param properties - the TypeScript properties of a `DefaultAddrPoolProperty`
 *
 * @returns the result of the validation.
 */
function RosAccessStrategy_DefaultAddrPoolPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('lbaWeight', ros.validateNumber)(properties.lbaWeight));
    errors.collect(ros.propertyValidator('identity', ros.validateString)(properties.identity));
    return errors.wrap('supplied properties not correct for "DefaultAddrPoolProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::AccessStrategy.DefaultAddrPool` resource
 *
 * @param properties - the TypeScript properties of a `DefaultAddrPoolProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::AccessStrategy.DefaultAddrPool` resource.
 */
// @ts-ignore TS6133
function rosAccessStrategyDefaultAddrPoolPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosAccessStrategy_DefaultAddrPoolPropertyValidator(properties).assertSuccess();
    return {
        'LbaWeight': ros.numberToRosTemplate(properties.lbaWeight),
        'Id': ros.stringToRosTemplate(properties.identity),
    };
}
/**
 * Determine whether the given properties match those of a `FailoverAddrPoolProperty`
 *
 * @param properties - the TypeScript properties of a `FailoverAddrPoolProperty`
 *
 * @returns the result of the validation.
 */
function RosAccessStrategy_FailoverAddrPoolPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('lbaWeight', ros.validateNumber)(properties.lbaWeight));
    errors.collect(ros.propertyValidator('identity', ros.validateString)(properties.identity));
    return errors.wrap('supplied properties not correct for "FailoverAddrPoolProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::AccessStrategy.FailoverAddrPool` resource
 *
 * @param properties - the TypeScript properties of a `FailoverAddrPoolProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::AccessStrategy.FailoverAddrPool` resource.
 */
// @ts-ignore TS6133
function rosAccessStrategyFailoverAddrPoolPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosAccessStrategy_FailoverAddrPoolPropertyValidator(properties).assertSuccess();
    return {
        'LbaWeight': ros.numberToRosTemplate(properties.lbaWeight),
        'Id': ros.stringToRosTemplate(properties.identity),
    };
}
/**
 * Determine whether the given properties match those of a `RosAddressPoolProps`
 *
 * @param properties - the TypeScript properties of a `RosAddressPoolProps`
 *
 * @returns the result of the validation.
 */
function RosAddressPoolPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.ispCityNode && (Array.isArray(properties.ispCityNode) || (typeof properties.ispCityNode) === 'string')) {
        errors.collect(ros.propertyValidator('ispCityNode', ros.validateLength)({
            data: properties.ispCityNode.length,
            min: 1,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('ispCityNode', ros.listValidator(RosAddressPool_IspCityNodePropertyValidator))(properties.ispCityNode));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if (properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
            data: properties.type,
            allowedValues: ["IPV4", "IPV6", "DOMAIN"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('lbaStrategy', ros.requiredValidator)(properties.lbaStrategy));
    if (properties.lbaStrategy && (typeof properties.lbaStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('lbaStrategy', ros.validateAllowedValues)({
            data: properties.lbaStrategy,
            allowedValues: ["ALL_RR", "RATIO"],
        }));
    }
    errors.collect(ros.propertyValidator('lbaStrategy', ros.validateString)(properties.lbaStrategy));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if (properties.protocolType && (typeof properties.protocolType) !== 'object') {
        errors.collect(ros.propertyValidator('protocolType', ros.validateAllowedValues)({
            data: properties.protocolType,
            allowedValues: ["TCP", "HTTP", "HTTPS", "PING"],
        }));
    }
    errors.collect(ros.propertyValidator('protocolType', ros.validateString)(properties.protocolType));
    if (properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 1,
            max: 9999999,
        }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    if (properties.evaluationCount && (typeof properties.evaluationCount) !== 'object') {
        errors.collect(ros.propertyValidator('evaluationCount', ros.validateRange)({
            data: properties.evaluationCount,
            min: 1,
            max: 9999999,
        }));
    }
    errors.collect(ros.propertyValidator('evaluationCount', ros.validateNumber)(properties.evaluationCount));
    errors.collect(ros.propertyValidator('monitorExtendInfo', ros.hashValidator(ros.validateAny))(properties.monitorExtendInfo));
    if (properties.monitorStatus && (typeof properties.monitorStatus) !== 'object') {
        errors.collect(ros.propertyValidator('monitorStatus', ros.validateAllowedValues)({
            data: properties.monitorStatus,
            allowedValues: ["OPEN", "CLOSE"],
        }));
    }
    errors.collect(ros.propertyValidator('monitorStatus', ros.validateString)(properties.monitorStatus));
    errors.collect(ros.propertyValidator('addr', ros.requiredValidator)(properties.addr));
    if (properties.addr && (Array.isArray(properties.addr) || (typeof properties.addr) === 'string')) {
        errors.collect(ros.propertyValidator('addr', ros.validateLength)({
            data: properties.addr.length,
            min: 1,
            max: 50,
        }));
    }
    errors.collect(ros.propertyValidator('addr', ros.listValidator(RosAddressPool_AddrPropertyValidator))(properties.addr));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if (properties.interval && (typeof properties.interval) !== 'object') {
        errors.collect(ros.propertyValidator('interval', ros.validateRange)({
            data: properties.interval,
            min: 1,
            max: 9999999,
        }));
    }
    errors.collect(ros.propertyValidator('interval', ros.validateNumber)(properties.interval));
    return errors.wrap('supplied properties not correct for "RosAddressPoolProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::AddressPool` resource
 *
 * @param properties - the TypeScript properties of a `RosAddressPoolProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::AddressPool` resource.
 */
// @ts-ignore TS6133
function rosAddressPoolPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAddressPoolPropsValidator(properties).assertSuccess();
    }
    return {
        'Addr': ros.listMapper(rosAddressPoolAddrPropertyToRosTemplate)(properties.addr),
        'InstanceId': ros.stringToRosTemplate(properties.instanceId),
        'LbaStrategy': ros.stringToRosTemplate(properties.lbaStrategy),
        'Name': ros.stringToRosTemplate(properties.name),
        'Type': ros.stringToRosTemplate(properties.type),
        'EvaluationCount': ros.numberToRosTemplate(properties.evaluationCount),
        'Interval': ros.numberToRosTemplate(properties.interval),
        'IspCityNode': ros.listMapper(rosAddressPoolIspCityNodePropertyToRosTemplate)(properties.ispCityNode),
        'MonitorExtendInfo': ros.hashMapper(ros.objectToRosTemplate)(properties.monitorExtendInfo),
        'MonitorStatus': ros.stringToRosTemplate(properties.monitorStatus),
        'ProtocolType': ros.stringToRosTemplate(properties.protocolType),
        'Timeout': ros.numberToRosTemplate(properties.timeout),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::AddressPool`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AddressPool` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool
 */
class RosAddressPool extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAddressPool.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddrPoolId = this.getAtt('AddrPoolId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.addr = props.addr;
        this.instanceId = props.instanceId;
        this.lbaStrategy = props.lbaStrategy;
        this.name = props.name;
        this.type = props.type;
        this.evaluationCount = props.evaluationCount;
        this.interval = props.interval;
        this.ispCityNode = props.ispCityNode;
        this.monitorExtendInfo = props.monitorExtendInfo;
        this.monitorStatus = props.monitorStatus;
        this.protocolType = props.protocolType;
        this.timeout = props.timeout;
    }
    get rosProperties() {
        return {
            addr: this.addr,
            instanceId: this.instanceId,
            lbaStrategy: this.lbaStrategy,
            name: this.name,
            type: this.type,
            evaluationCount: this.evaluationCount,
            interval: this.interval,
            ispCityNode: this.ispCityNode,
            monitorExtendInfo: this.monitorExtendInfo,
            monitorStatus: this.monitorStatus,
            protocolType: this.protocolType,
            timeout: this.timeout,
        };
    }
    renderProperties(props) {
        return rosAddressPoolPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAddressPool = RosAddressPool;
/**
 * The resource type name for this resource class.
 */
RosAddressPool.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::AddressPool";
/**
 * Determine whether the given properties match those of a `AddrProperty`
 *
 * @param properties - the TypeScript properties of a `AddrProperty`
 *
 * @returns the result of the validation.
 */
function RosAddressPool_AddrPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('attributeInfo', ros.requiredValidator)(properties.attributeInfo));
    errors.collect(ros.propertyValidator('attributeInfo', ros.hashValidator(ros.validateAny))(properties.attributeInfo));
    errors.collect(ros.propertyValidator('lbaWeight', ros.validateNumber)(properties.lbaWeight));
    errors.collect(ros.propertyValidator('mode', ros.requiredValidator)(properties.mode));
    if (properties.mode && (typeof properties.mode) !== 'object') {
        errors.collect(ros.propertyValidator('mode', ros.validateAllowedValues)({
            data: properties.mode,
            allowedValues: ["SMART", "ONLINE", "OFFLINE"],
        }));
    }
    errors.collect(ros.propertyValidator('mode', ros.validateString)(properties.mode));
    errors.collect(ros.propertyValidator('addr', ros.requiredValidator)(properties.addr));
    errors.collect(ros.propertyValidator('addr', ros.validateString)(properties.addr));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    return errors.wrap('supplied properties not correct for "AddrProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::AddressPool.Addr` resource
 *
 * @param properties - the TypeScript properties of a `AddrProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::AddressPool.Addr` resource.
 */
// @ts-ignore TS6133
function rosAddressPoolAddrPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosAddressPool_AddrPropertyValidator(properties).assertSuccess();
    return {
        'AttributeInfo': ros.hashMapper(ros.objectToRosTemplate)(properties.attributeInfo),
        'LbaWeight': ros.numberToRosTemplate(properties.lbaWeight),
        'Mode': ros.stringToRosTemplate(properties.mode),
        'Addr': ros.stringToRosTemplate(properties.addr),
        'Remark': ros.stringToRosTemplate(properties.remark),
    };
}
/**
 * Determine whether the given properties match those of a `IspCityNodeProperty`
 *
 * @param properties - the TypeScript properties of a `IspCityNodeProperty`
 *
 * @returns the result of the validation.
 */
function RosAddressPool_IspCityNodePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cityCode', ros.validateString)(properties.cityCode));
    errors.collect(ros.propertyValidator('ispCode', ros.validateString)(properties.ispCode));
    return errors.wrap('supplied properties not correct for "IspCityNodeProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::AddressPool.IspCityNode` resource
 *
 * @param properties - the TypeScript properties of a `IspCityNodeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::AddressPool.IspCityNode` resource.
 */
// @ts-ignore TS6133
function rosAddressPoolIspCityNodePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosAddressPool_IspCityNodePropertyValidator(properties).assertSuccess();
    return {
        'CityCode': ros.stringToRosTemplate(properties.cityCode),
        'IspCode': ros.stringToRosTemplate(properties.ispCode),
    };
}
/**
 * Determine whether the given properties match those of a `RosCacheDomainProps`
 *
 * @param properties - the TypeScript properties of a `RosCacheDomainProps`
 *
 * @returns the result of the validation.
 */
function RosCacheDomainPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sourceEdns', ros.requiredValidator)(properties.sourceEdns));
    if (properties.sourceEdns && (typeof properties.sourceEdns) !== 'object') {
        errors.collect(ros.propertyValidator('sourceEdns', ros.validateAllowedValues)({
            data: properties.sourceEdns,
            allowedValues: ["NOT_SUPPORT", "SUPPORT"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceEdns', ros.validateString)(properties.sourceEdns));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('sourceProtocol', ros.requiredValidator)(properties.sourceProtocol));
    if (properties.sourceProtocol && (typeof properties.sourceProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('sourceProtocol', ros.validateAllowedValues)({
            data: properties.sourceProtocol,
            allowedValues: ["UDP", "TCP"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceProtocol', ros.validateString)(properties.sourceProtocol));
    errors.collect(ros.propertyValidator('cacheTtlMin', ros.requiredValidator)(properties.cacheTtlMin));
    if (properties.cacheTtlMin && (typeof properties.cacheTtlMin) !== 'object') {
        errors.collect(ros.propertyValidator('cacheTtlMin', ros.validateRange)({
            data: properties.cacheTtlMin,
            min: 30,
            max: 86400,
        }));
    }
    errors.collect(ros.propertyValidator('cacheTtlMin', ros.validateNumber)(properties.cacheTtlMin));
    errors.collect(ros.propertyValidator('sourceDnsServer', ros.requiredValidator)(properties.sourceDnsServer));
    if (properties.sourceDnsServer && (Array.isArray(properties.sourceDnsServer) || (typeof properties.sourceDnsServer) === 'string')) {
        errors.collect(ros.propertyValidator('sourceDnsServer', ros.validateLength)({
            data: properties.sourceDnsServer.length,
            min: undefined,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('sourceDnsServer', ros.listValidator(RosCacheDomain_SourceDnsServerPropertyValidator))(properties.sourceDnsServer));
    errors.collect(ros.propertyValidator('cacheTtlMax', ros.requiredValidator)(properties.cacheTtlMax));
    if (properties.cacheTtlMax && (typeof properties.cacheTtlMax) !== 'object') {
        errors.collect(ros.propertyValidator('cacheTtlMax', ros.validateRange)({
            data: properties.cacheTtlMax,
            min: 30,
            max: 86400,
        }));
    }
    errors.collect(ros.propertyValidator('cacheTtlMax', ros.validateNumber)(properties.cacheTtlMax));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    return errors.wrap('supplied properties not correct for "RosCacheDomainProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::CacheDomain` resource
 *
 * @param properties - the TypeScript properties of a `RosCacheDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::CacheDomain` resource.
 */
// @ts-ignore TS6133
function rosCacheDomainPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCacheDomainPropsValidator(properties).assertSuccess();
    }
    return {
        'CacheTtlMax': ros.numberToRosTemplate(properties.cacheTtlMax),
        'CacheTtlMin': ros.numberToRosTemplate(properties.cacheTtlMin),
        'DomainName': ros.stringToRosTemplate(properties.domainName),
        'InstanceId': ros.stringToRosTemplate(properties.instanceId),
        'SourceDnsServer': ros.listMapper(rosCacheDomainSourceDnsServerPropertyToRosTemplate)(properties.sourceDnsServer),
        'SourceEdns': ros.stringToRosTemplate(properties.sourceEdns),
        'SourceProtocol': ros.stringToRosTemplate(properties.sourceProtocol),
        'Remark': ros.stringToRosTemplate(properties.remark),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::CacheDomain`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CacheDomain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-cachedomain
 */
class RosCacheDomain extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCacheDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomainName = this.getAtt('DomainName');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cacheTtlMax = props.cacheTtlMax;
        this.cacheTtlMin = props.cacheTtlMin;
        this.domainName = props.domainName;
        this.instanceId = props.instanceId;
        this.sourceDnsServer = props.sourceDnsServer;
        this.sourceEdns = props.sourceEdns;
        this.sourceProtocol = props.sourceProtocol;
        this.remark = props.remark;
    }
    get rosProperties() {
        return {
            cacheTtlMax: this.cacheTtlMax,
            cacheTtlMin: this.cacheTtlMin,
            domainName: this.domainName,
            instanceId: this.instanceId,
            sourceDnsServer: this.sourceDnsServer,
            sourceEdns: this.sourceEdns,
            sourceProtocol: this.sourceProtocol,
            remark: this.remark,
        };
    }
    renderProperties(props) {
        return rosCacheDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCacheDomain = RosCacheDomain;
/**
 * The resource type name for this resource class.
 */
RosCacheDomain.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::CacheDomain";
/**
 * Determine whether the given properties match those of a `SourceDnsServerProperty`
 *
 * @param properties - the TypeScript properties of a `SourceDnsServerProperty`
 *
 * @returns the result of the validation.
 */
function RosCacheDomain_SourceDnsServerPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('host', ros.requiredValidator)(properties.host));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    return errors.wrap('supplied properties not correct for "SourceDnsServerProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::CacheDomain.SourceDnsServer` resource
 *
 * @param properties - the TypeScript properties of a `SourceDnsServerProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::CacheDomain.SourceDnsServer` resource.
 */
// @ts-ignore TS6133
function rosCacheDomainSourceDnsServerPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCacheDomain_SourceDnsServerPropertyValidator(properties).assertSuccess();
    return {
        'Port': ros.stringToRosTemplate(properties.port),
        'Host': ros.stringToRosTemplate(properties.host),
    };
}
/**
 * Determine whether the given properties match those of a `RosCustomLineProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomLineProps`
 *
 * @returns the result of the validation.
 */
function RosCustomLinePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('ipSegment', ros.requiredValidator)(properties.ipSegment));
    if (properties.ipSegment && (Array.isArray(properties.ipSegment) || (typeof properties.ipSegment) === 'string')) {
        errors.collect(ros.propertyValidator('ipSegment', ros.validateLength)({
            data: properties.ipSegment.length,
            min: 1,
            max: 500,
        }));
    }
    errors.collect(ros.propertyValidator('ipSegment', ros.listValidator(RosCustomLine_IpSegmentPropertyValidator))(properties.ipSegment));
    errors.collect(ros.propertyValidator('lineName', ros.requiredValidator)(properties.lineName));
    errors.collect(ros.propertyValidator('lineName', ros.validateString)(properties.lineName));
    return errors.wrap('supplied properties not correct for "RosCustomLineProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::CustomLine` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomLineProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::CustomLine` resource.
 */
// @ts-ignore TS6133
function rosCustomLinePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCustomLinePropsValidator(properties).assertSuccess();
    }
    return {
        'DomainName': ros.stringToRosTemplate(properties.domainName),
        'IpSegment': ros.listMapper(rosCustomLineIpSegmentPropertyToRosTemplate)(properties.ipSegment),
        'LineName': ros.stringToRosTemplate(properties.lineName),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::CustomLine`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomLine` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-customline
 */
class RosCustomLine extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCustomLine.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLineId = this.getAtt('LineId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
        this.ipSegment = props.ipSegment;
        this.lineName = props.lineName;
    }
    get rosProperties() {
        return {
            domainName: this.domainName,
            ipSegment: this.ipSegment,
            lineName: this.lineName,
        };
    }
    renderProperties(props) {
        return rosCustomLinePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCustomLine = RosCustomLine;
/**
 * The resource type name for this resource class.
 */
RosCustomLine.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::CustomLine";
/**
 * Determine whether the given properties match those of a `IpSegmentProperty`
 *
 * @param properties - the TypeScript properties of a `IpSegmentProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomLine_IpSegmentPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('startIp', ros.validateString)(properties.startIp));
    errors.collect(ros.propertyValidator('endIp', ros.validateString)(properties.endIp));
    return errors.wrap('supplied properties not correct for "IpSegmentProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::CustomLine.IpSegment` resource
 *
 * @param properties - the TypeScript properties of a `IpSegmentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::CustomLine.IpSegment` resource.
 */
// @ts-ignore TS6133
function rosCustomLineIpSegmentPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCustomLine_IpSegmentPropertyValidator(properties).assertSuccess();
    return {
        'StartIp': ros.stringToRosTemplate(properties.startIp),
        'EndIp': ros.stringToRosTemplate(properties.endIp),
    };
}
/**
 * Determine whether the given properties match those of a `RosDomainProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the result of the validation.
 */
function RosDomainPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDomain_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosDomainProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::Domain` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::Domain` resource.
 */
// @ts-ignore TS6133
function rosDomainPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDomainPropsValidator(properties).assertSuccess();
    }
    return {
        'DomainName': ros.stringToRosTemplate(properties.domainName),
        'GroupId': ros.stringToRosTemplate(properties.groupId),
        'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
        'Tags': ros.listMapper(rosDomainTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::Domain`, which is used to add a domain name.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain
 */
class RosDomain extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrDnsServers = this.getAtt('DnsServers');
        this.attrDomainId = this.getAtt('DomainId');
        this.attrDomainName = this.getAtt('DomainName');
        this.attrGroupId = this.getAtt('GroupId');
        this.attrGroupName = this.getAtt('GroupName');
        this.attrPunyCode = this.getAtt('PunyCode');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
        this.groupId = props.groupId;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            domainName: this.domainName,
            groupId: this.groupId,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDomain = RosDomain;
/**
 * The resource type name for this resource class.
 */
RosDomain.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::Domain";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosDomain_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::Domain.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::Domain.Tags` resource.
 */
// @ts-ignore TS6133
function rosDomainTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosDomain_TagsPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Key': ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosDomainAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosDomainAttachmentPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('domainNames', ros.requiredValidator)(properties.domainNames));
    if (properties.domainNames && (Array.isArray(properties.domainNames) || (typeof properties.domainNames) === 'string')) {
        errors.collect(ros.propertyValidator('domainNames', ros.validateLength)({
            data: properties.domainNames.length,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('domainNames', ros.listValidator(ros.validateString))(properties.domainNames));
    return errors.wrap('supplied properties not correct for "RosDomainAttachmentProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::DomainAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::DomainAttachment` resource.
 */
// @ts-ignore TS6133
function rosDomainAttachmentPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDomainAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
        'DomainNames': ros.listMapper(ros.stringToRosTemplate)(properties.domainNames),
        'InstanceId': ros.stringToRosTemplate(properties.instanceId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::DomainAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DomainAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainattachment
 */
class RosDomainAttachment extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDomainAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainNames = props.domainNames;
        this.instanceId = props.instanceId;
    }
    get rosProperties() {
        return {
            domainNames: this.domainNames,
            instanceId: this.instanceId,
        };
    }
    renderProperties(props) {
        return rosDomainAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDomainAttachment = RosDomainAttachment;
/**
 * The resource type name for this resource class.
 */
RosDomainAttachment.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::DomainAttachment";
/**
 * Determine whether the given properties match those of a `RosDomainGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainGroupProps`
 *
 * @returns the result of the validation.
 */
function RosDomainGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    return errors.wrap('supplied properties not correct for "RosDomainGroupProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::DomainGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::DomainGroup` resource.
 */
// @ts-ignore TS6133
function rosDomainGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDomainGroupPropsValidator(properties).assertSuccess();
    }
    return {
        'GroupName': ros.stringToRosTemplate(properties.groupName),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::DomainGroup`, which is used to add a domain name group.
 * @Note This class does not contain additional functions, so it is recommended to use the `DomainGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup
 */
class RosDomainGroup extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDomainGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = this.getAtt('GroupId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
    }
    get rosProperties() {
        return {
            groupName: this.groupName,
        };
    }
    renderProperties(props) {
        return rosDomainGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDomainGroup = RosDomainGroup;
/**
 * The resource type name for this resource class.
 */
RosDomainGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::DomainGroup";
/**
 * Determine whether the given properties match those of a `RosDomainRecordProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainRecordProps`
 *
 * @returns the result of the validation.
 */
function RosDomainRecordPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('rr', ros.requiredValidator)(properties.rr));
    errors.collect(ros.propertyValidator('rr', ros.validateString)(properties.rr));
    errors.collect(ros.propertyValidator('line', ros.validateString)(properties.line));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    if (properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('ttl', ros.validateNumber)(properties.ttl));
    return errors.wrap('supplied properties not correct for "RosDomainRecordProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::DomainRecord` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainRecordProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::DomainRecord` resource.
 */
// @ts-ignore TS6133
function rosDomainRecordPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDomainRecordPropsValidator(properties).assertSuccess();
    }
    return {
        'DomainName': ros.stringToRosTemplate(properties.domainName),
        'RR': ros.stringToRosTemplate(properties.rr),
        'Type': ros.stringToRosTemplate(properties.type),
        'Value': ros.stringToRosTemplate(properties.value),
        'Line': ros.stringToRosTemplate(properties.line),
        'Priority': ros.numberToRosTemplate(properties.priority),
        'TTL': ros.numberToRosTemplate(properties.ttl),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::DomainRecord`, which is used to add a Domain Name System (DNS) record.
 * @Note This class does not contain additional functions, so it is recommended to use the `DomainRecord` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
 */
class RosDomainRecord extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDomainRecord.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRecordId = this.getAtt('RecordId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
        this.rr = props.rr;
        this.type = props.type;
        this.value = props.value;
        this.line = props.line;
        this.priority = props.priority;
        this.ttl = props.ttl;
    }
    get rosProperties() {
        return {
            domainName: this.domainName,
            rr: this.rr,
            type: this.type,
            value: this.value,
            line: this.line,
            priority: this.priority,
            ttl: this.ttl,
        };
    }
    renderProperties(props) {
        return rosDomainRecordPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDomainRecord = RosDomainRecord;
/**
 * The resource type name for this resource class.
 */
RosDomainRecord.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::DomainRecord";
/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('domainNumbers', ros.requiredValidator)(properties.domainNumbers));
    if (properties.domainNumbers && (typeof properties.domainNumbers) !== 'object') {
        errors.collect(ros.propertyValidator('domainNumbers', ros.validateRange)({
            data: properties.domainNumbers,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('domainNumbers', ros.validateNumber)(properties.domainNumbers));
    errors.collect(ros.propertyValidator('dnsSecurity', ros.requiredValidator)(properties.dnsSecurity));
    if (properties.dnsSecurity && (typeof properties.dnsSecurity) !== 'object') {
        errors.collect(ros.propertyValidator('dnsSecurity', ros.validateAllowedValues)({
            data: properties.dnsSecurity,
            allowedValues: ["no", "basic", "advanced"],
        }));
    }
    errors.collect(ros.propertyValidator('dnsSecurity', ros.validateString)(properties.dnsSecurity));
    errors.collect(ros.propertyValidator('version', ros.requiredValidator)(properties.version));
    if (properties.version && (typeof properties.version) !== 'object') {
        errors.collect(ros.propertyValidator('version', ros.validateAllowedValues)({
            data: properties.version,
            allowedValues: ["version_personal", "version_enterprise_basic", "version_enterprise_advanced", "version_cached_basic"],
        }));
    }
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    if (properties.renewalStatus && (typeof properties.renewalStatus) !== 'object') {
        errors.collect(ros.propertyValidator('renewalStatus', ros.validateAllowedValues)({
            data: properties.renewalStatus,
            allowedValues: ["AutoRenewal", "ManualRenewal"],
        }));
    }
    errors.collect(ros.propertyValidator('renewalStatus', ros.validateString)(properties.renewalStatus));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    if (properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
            data: properties.period,
            allowedValues: [1, 2, 3, 6],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    if (properties.instanceType && (typeof properties.instanceType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceType', ros.validateAllowedValues)({
            data: properties.instanceType,
            allowedValues: ["HostedPublicZone", "CachedPublicZone"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('periodUnit', ros.requiredValidator)(properties.periodUnit));
    if (properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
            data: properties.periodUnit,
            allowedValues: ["Year", "Month"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
        'DNSSecurity': ros.stringToRosTemplate(properties.dnsSecurity),
        'DomainNumbers': ros.numberToRosTemplate(properties.domainNumbers),
        'Period': ros.numberToRosTemplate(properties.period),
        'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
        'Version': ros.stringToRosTemplate(properties.version),
        'Domain': ros.stringToRosTemplate(properties.domain),
        'InstanceType': ros.stringToRosTemplate(properties.instanceType),
        'RenewalStatus': ros.stringToRosTemplate(properties.renewalStatus),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::Instance`, which is used to create an Alibaba Cloud DNS instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance
 */
class RosInstance extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dnsSecurity = props.dnsSecurity;
        this.domainNumbers = props.domainNumbers;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.version = props.version;
        this.domain = props.domain;
        this.instanceType = props.instanceType;
        this.renewalStatus = props.renewalStatus;
    }
    get rosProperties() {
        return {
            dnsSecurity: this.dnsSecurity,
            domainNumbers: this.domainNumbers,
            period: this.period,
            periodUnit: this.periodUnit,
            version: this.version,
            domain: this.domain,
            instanceType: this.instanceType,
            renewalStatus: this.renewalStatus,
        };
    }
    renderProperties(props) {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosInstance = RosInstance;
/**
 * The resource type name for this resource class.
 */
RosInstance.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::Instance";
/**
 * Determine whether the given properties match those of a `RosMonitorConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosMonitorConfigProps`
 *
 * @returns the result of the validation.
 */
function RosMonitorConfigPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ispCityNode', ros.requiredValidator)(properties.ispCityNode));
    if (properties.ispCityNode && (Array.isArray(properties.ispCityNode) || (typeof properties.ispCityNode) === 'string')) {
        errors.collect(ros.propertyValidator('ispCityNode', ros.validateLength)({
            data: properties.ispCityNode.length,
            min: undefined,
            max: 50,
        }));
    }
    errors.collect(ros.propertyValidator('ispCityNode', ros.listValidator(RosMonitorConfig_IspCityNodePropertyValidator))(properties.ispCityNode));
    errors.collect(ros.propertyValidator('protocolType', ros.requiredValidator)(properties.protocolType));
    errors.collect(ros.propertyValidator('protocolType', ros.validateString)(properties.protocolType));
    errors.collect(ros.propertyValidator('timeout', ros.requiredValidator)(properties.timeout));
    if (properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 1,
            max: 10000,
        }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('addrPoolId', ros.requiredValidator)(properties.addrPoolId));
    errors.collect(ros.propertyValidator('addrPoolId', ros.validateString)(properties.addrPoolId));
    errors.collect(ros.propertyValidator('evaluationCount', ros.requiredValidator)(properties.evaluationCount));
    if (properties.evaluationCount && (typeof properties.evaluationCount) !== 'object') {
        errors.collect(ros.propertyValidator('evaluationCount', ros.validateRange)({
            data: properties.evaluationCount,
            min: 1,
            max: 3,
        }));
    }
    errors.collect(ros.propertyValidator('evaluationCount', ros.validateNumber)(properties.evaluationCount));
    errors.collect(ros.propertyValidator('monitorExtendInfo', ros.requiredValidator)(properties.monitorExtendInfo));
    errors.collect(ros.propertyValidator('monitorExtendInfo', ros.hashValidator(ros.validateAny))(properties.monitorExtendInfo));
    errors.collect(ros.propertyValidator('interval', ros.requiredValidator)(properties.interval));
    if (properties.interval && (typeof properties.interval) !== 'object') {
        errors.collect(ros.propertyValidator('interval', ros.validateRange)({
            data: properties.interval,
            min: 1,
            max: 60,
        }));
    }
    errors.collect(ros.propertyValidator('interval', ros.validateNumber)(properties.interval));
    return errors.wrap('supplied properties not correct for "RosMonitorConfigProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::MonitorConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosMonitorConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::MonitorConfig` resource.
 */
// @ts-ignore TS6133
function rosMonitorConfigPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosMonitorConfigPropsValidator(properties).assertSuccess();
    }
    return {
        'AddrPoolId': ros.stringToRosTemplate(properties.addrPoolId),
        'EvaluationCount': ros.numberToRosTemplate(properties.evaluationCount),
        'Interval': ros.numberToRosTemplate(properties.interval),
        'IspCityNode': ros.listMapper(rosMonitorConfigIspCityNodePropertyToRosTemplate)(properties.ispCityNode),
        'MonitorExtendInfo': ros.hashMapper(ros.objectToRosTemplate)(properties.monitorExtendInfo),
        'ProtocolType': ros.stringToRosTemplate(properties.protocolType),
        'Timeout': ros.numberToRosTemplate(properties.timeout),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::MonitorConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MonitorConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig
 */
class RosMonitorConfig extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosMonitorConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMonitorConfigId = this.getAtt('MonitorConfigId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.addrPoolId = props.addrPoolId;
        this.evaluationCount = props.evaluationCount;
        this.interval = props.interval;
        this.ispCityNode = props.ispCityNode;
        this.monitorExtendInfo = props.monitorExtendInfo;
        this.protocolType = props.protocolType;
        this.timeout = props.timeout;
    }
    get rosProperties() {
        return {
            addrPoolId: this.addrPoolId,
            evaluationCount: this.evaluationCount,
            interval: this.interval,
            ispCityNode: this.ispCityNode,
            monitorExtendInfo: this.monitorExtendInfo,
            protocolType: this.protocolType,
            timeout: this.timeout,
        };
    }
    renderProperties(props) {
        return rosMonitorConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosMonitorConfig = RosMonitorConfig;
/**
 * The resource type name for this resource class.
 */
RosMonitorConfig.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::MonitorConfig";
/**
 * Determine whether the given properties match those of a `IspCityNodeProperty`
 *
 * @param properties - the TypeScript properties of a `IspCityNodeProperty`
 *
 * @returns the result of the validation.
 */
function RosMonitorConfig_IspCityNodePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cityCode', ros.validateString)(properties.cityCode));
    errors.collect(ros.propertyValidator('ispCode', ros.validateString)(properties.ispCode));
    return errors.wrap('supplied properties not correct for "IspCityNodeProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::MonitorConfig.IspCityNode` resource
 *
 * @param properties - the TypeScript properties of a `IspCityNodeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::MonitorConfig.IspCityNode` resource.
 */
// @ts-ignore TS6133
function rosMonitorConfigIspCityNodePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosMonitorConfig_IspCityNodePropertyValidator(properties).assertSuccess();
    return {
        'CityCode': ros.stringToRosTemplate(properties.cityCode),
        'IspCode': ros.stringToRosTemplate(properties.ispCode),
    };
}
/**
 * Determine whether the given properties match those of a `RosRecoveryPlanProps`
 *
 * @param properties - the TypeScript properties of a `RosRecoveryPlanProps`
 *
 * @returns the result of the validation.
 */
function RosRecoveryPlanPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('lang', ros.validateString)(properties.lang));
    errors.collect(ros.propertyValidator('faultAddrPool', ros.requiredValidator)(properties.faultAddrPool));
    errors.collect(ros.propertyValidator('faultAddrPool', ros.listValidator(ros.validateString))(properties.faultAddrPool));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    return errors.wrap('supplied properties not correct for "RosRecoveryPlanProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::RecoveryPlan` resource
 *
 * @param properties - the TypeScript properties of a `RosRecoveryPlanProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::RecoveryPlan` resource.
 */
// @ts-ignore TS6133
function rosRecoveryPlanPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosRecoveryPlanPropsValidator(properties).assertSuccess();
    }
    return {
        'FaultAddrPool': ros.listMapper(ros.stringToRosTemplate)(properties.faultAddrPool),
        'Name': ros.stringToRosTemplate(properties.name),
        'Lang': ros.stringToRosTemplate(properties.lang),
        'Remark': ros.stringToRosTemplate(properties.remark),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::RecoveryPlan`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RecoveryPlan` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-recoveryplan
 */
class RosRecoveryPlan extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosRecoveryPlan.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRecoveryPlanId = this.getAtt('RecoveryPlanId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.faultAddrPool = props.faultAddrPool;
        this.name = props.name;
        this.lang = props.lang;
        this.remark = props.remark;
    }
    get rosProperties() {
        return {
            faultAddrPool: this.faultAddrPool,
            name: this.name,
            lang: this.lang,
            remark: this.remark,
        };
    }
    renderProperties(props) {
        return rosRecoveryPlanPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosRecoveryPlan = RosRecoveryPlan;
/**
 * The resource type name for this resource class.
 */
RosRecoveryPlan.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::RecoveryPlan";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5zLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRucy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQThGOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUywrQkFBK0IsQ0FBQyxVQUFlO0lBQ3BELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLElBQUcsVUFBVSxDQUFDLDJCQUEyQixJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsMkJBQTJCLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDdkcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ25GLElBQUksRUFBRSxVQUFVLENBQUMsMkJBQTJCO1lBQzVDLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7SUFDakksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUNwSCxJQUFHLFVBQVUsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLG1CQUFtQixDQUFDLEtBQUssUUFBUSxFQUFF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cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NBY2Nlc3NTdHJhdGVneWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1kbnMtYWNjZXNzc3RyYXRlZ3lcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBY2Nlc3NTdHJhdGVneVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWZhdWx0QWRkclBvb2w6IFRoZSBkZWZhdWx0IGFkZHJlc3MgcG9vbCBvZiB0aGUgYWNjZXNzIHN0cmF0ZWd5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlZmF1bHRBZGRyUG9vbDogQXJyYXk8Um9zQWNjZXNzU3RyYXRlZ3kuRGVmYXVsdEFkZHJQb29sUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlZmF1bHRBZGRyUG9vbFR5cGU6IFRoZSB0eXBlIG9mIHRoZSBkZWZhdWx0IGFkZHJlc3MgcG9vbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWZhdWx0QWRkclBvb2xUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVmYXVsdE1pbkF2YWlsYWJsZUFkZHJOdW06IFRoZSBtaW5pbXVtIGF2YWlsYWJsZSBhZGRyZXNzIG51bWJlciBvZiB0aGUgZGVmYXVsdCBhZGRyZXNzIHBvb2wuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVmYXVsdE1pbkF2YWlsYWJsZUFkZHJOdW06IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIERucyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3RyYXRlZ3lNb2RlOiBUaGUgbW9kZSBvZiB0aGUgYWNjZXNzIHN0cmF0ZWd5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0cmF0ZWd5TW9kZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0cmF0ZWd5TmFtZTogVGhlIG5hbWUgb2YgdGhlIGFjY2VzcyBzdHJhdGVneS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzdHJhdGVneU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2Nlc3NNb2RlOiBUaGUgYWNjZXNzIG1vZGUgb2YgdGhlIGFjY2VzcyBzdHJhdGVneS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2Nlc3NNb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlZmF1bHRMYXRlbmN5T3B0aW1pemF0aW9uOiBXaGV0aGVyIHRvIGVuYWJsZSBsYXRlbmN5IG9wdGltaXphdGlvbiBmb3IgdGhlIGRlZmF1bHQgYWRkcmVzcyBwb29sLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlZmF1bHRMYXRlbmN5T3B0aW1pemF0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlZmF1bHRMYmFTdHJhdGVneTogVGhlIGxvYWQgYmFsYW5jaW5nIHN0cmF0ZWd5IG9mIHRoZSBkZWZhdWx0IGFkZHJlc3MgcG9vbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWZhdWx0TGJhU3RyYXRlZ3k/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVmYXVsdE1heFJldHVybkFkZHJOdW06IFRoZSBtYXhpbXVtIHJldHVybiBhZGRyZXNzIG51bWJlciBvZiB0aGUgZGVmYXVsdCBhZGRyZXNzIHBvb2wuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVmYXVsdE1heFJldHVybkFkZHJOdW0/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmFpbG92ZXJBZGRyUG9vbDogVGhlIGZhaWxvdmVyIGFkZHJlc3MgcG9vbCBvZiB0aGUgYWNjZXNzIHN0cmF0ZWd5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZhaWxvdmVyQWRkclBvb2w/OiBBcnJheTxSb3NBY2Nlc3NTdHJhdGVneS5GYWlsb3ZlckFkZHJQb29sUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZhaWxvdmVyQWRkclBvb2xUeXBlOiBUaGUgdHlwZSBvZiB0aGUgZmFpbG92ZXIgYWRkcmVzcyBwb29sLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZhaWxvdmVyQWRkclBvb2xUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZhaWxvdmVyTGF0ZW5jeU9wdGltaXphdGlvbjogV2hldGhlciB0byBlbmFibGUgbGF0ZW5jeSBvcHRpbWl6YXRpb24gZm9yIHRoZSBmYWlsb3ZlciBhZGRyZXNzIHBvb2wuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmFpbG92ZXJMYXRlbmN5T3B0aW1pemF0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZhaWxvdmVyTGJhU3RyYXRlZ3k6IFRoZSBsb2FkIGJhbGFuY2luZyBzdHJhdGVneSBvZiB0aGUgZmFpbG92ZXIgYWRkcmVzcyBwb29sLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZhaWxvdmVyTGJhU3RyYXRlZ3k/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmFpbG92ZXJNYXhSZXR1cm5BZGRyTnVtOiBUaGUgbWF4aW11bSByZXR1cm4gYWRkcmVzcyBudW1iZXIgb2YgdGhlIGZhaWxvdmVyIGFkZHJlc3MgcG9vbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBmYWlsb3Zlck1heFJldHVybkFkZHJOdW0/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmFpbG92ZXJNaW5BdmFpbGFibGVBZGRyTnVtOiBUaGUgbWluaW11bSBhdmFpbGFibGUgYWRkcmVzcyBudW1iZXIgb2YgdGhlIGZhaWxvdmVyIGFkZHJlc3MgcG9vbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBmYWlsb3Zlck1pbkF2YWlsYWJsZUFkZHJOdW0/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGluZXM6IFRoZSBsaW5lcyBvZiB0aGUgYWNjZXNzIHN0cmF0ZWd5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxpbmVzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBY2Nlc3NTdHJhdGVneVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBY2Nlc3NTdHJhdGVneVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FjY2Vzc1N0cmF0ZWd5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5mYWlsb3Zlck1pbkF2YWlsYWJsZUFkZHJOdW0gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmZhaWxvdmVyTWluQXZhaWxhYmxlQWRkck51bSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmFpbG92ZXJNaW5BdmFpbGFibGVBZGRyTnVtJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZmFpbG92ZXJNaW5BdmFpbGFibGVBZGRyTnVtLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA0MDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZhaWxvdmVyTWluQXZhaWxhYmxlQWRkck51bScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5mYWlsb3Zlck1pbkF2YWlsYWJsZUFkZHJOdW0pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlZmF1bHRBZGRyUG9vbFR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGVmYXVsdEFkZHJQb29sVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVmYXVsdEFkZHJQb29sVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuZGVmYXVsdEFkZHJQb29sVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVmYXVsdEFkZHJQb29sVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRlZmF1bHRBZGRyUG9vbFR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiSVBWNFwiLFwiSVBWNlwiLFwiRE9NQUlOXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVmYXVsdEFkZHJQb29sVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZWZhdWx0QWRkclBvb2xUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5mYWlsb3ZlckFkZHJQb29sVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuZmFpbG92ZXJBZGRyUG9vbFR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZhaWxvdmVyQWRkclBvb2xUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZmFpbG92ZXJBZGRyUG9vbFR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiSVBWNFwiLFwiSVBWNlwiLFwiRE9NQUlOXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmFpbG92ZXJBZGRyUG9vbFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZmFpbG92ZXJBZGRyUG9vbFR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgaWYocHJvcGVydGllcy5kZWZhdWx0TGF0ZW5jeU9wdGltaXphdGlvbiAmJiAodHlwZW9mIHByb3BlcnRpZXMuZGVmYXVsdExhdGVuY3lPcHRpbWl6YXRpb24pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlZmF1bHRMYXRlbmN5T3B0aW1pemF0aW9uJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGVmYXVsdExhdGVuY3lPcHRpbWl6YXRpb24sXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiT1BFTlwiLFwiQ0xPU0VcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWZhdWx0TGF0ZW5jeU9wdGltaXphdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZWZhdWx0TGF0ZW5jeU9wdGltaXphdGlvbikpO1xuICAgIGlmKHByb3BlcnRpZXMuZmFpbG92ZXJBZGRyUG9vbCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmZhaWxvdmVyQWRkclBvb2wpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5mYWlsb3ZlckFkZHJQb29sKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmFpbG92ZXJBZGRyUG9vbCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5mYWlsb3ZlckFkZHJQb29sLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmYWlsb3ZlckFkZHJQb29sJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zQWNjZXNzU3RyYXRlZ3lfRmFpbG92ZXJBZGRyUG9vbFByb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5mYWlsb3ZlckFkZHJQb29sKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWZhdWx0TWluQXZhaWxhYmxlQWRkck51bScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kZWZhdWx0TWluQXZhaWxhYmxlQWRkck51bSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVmYXVsdE1pbkF2YWlsYWJsZUFkZHJOdW0gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmRlZmF1bHRNaW5BdmFpbGFibGVBZGRyTnVtKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWZhdWx0TWluQXZhaWxhYmxlQWRkck51bScsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRlZmF1bHRNaW5BdmFpbGFibGVBZGRyTnVtLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA0MDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlZmF1bHRNaW5BdmFpbGFibGVBZGRyTnVtJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmRlZmF1bHRNaW5BdmFpbGFibGVBZGRyTnVtKSk7XG4gICAgaWYocHJvcGVydGllcy5mYWlsb3ZlckxhdGVuY3lPcHRpbWl6YXRpb24gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmZhaWxvdmVyTGF0ZW5jeU9wdGltaXphdGlvbikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmFpbG92ZXJMYXRlbmN5T3B0aW1pemF0aW9uJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZmFpbG92ZXJMYXRlbmN5T3B0aW1pemF0aW9uLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIk9QRU5cIixcIkNMT1NFXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmFpbG92ZXJMYXRlbmN5T3B0aW1pemF0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZhaWxvdmVyTGF0ZW5jeU9wdGltaXphdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVmYXVsdEFkZHJQb29sJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRlZmF1bHRBZGRyUG9vbCkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVmYXVsdEFkZHJQb29sICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZGVmYXVsdEFkZHJQb29sKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZGVmYXVsdEFkZHJQb29sKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVmYXVsdEFkZHJQb29sJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRlZmF1bHRBZGRyUG9vbC5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVmYXVsdEFkZHJQb29sJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zQWNjZXNzU3RyYXRlZ3lfRGVmYXVsdEFkZHJQb29sUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmRlZmF1bHRBZGRyUG9vbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RyYXRlZ3lOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnN0cmF0ZWd5TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RyYXRlZ3lOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0cmF0ZWd5TmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZmFpbG92ZXJMYmFTdHJhdGVneSAmJiAodHlwZW9mIHByb3BlcnRpZXMuZmFpbG92ZXJMYmFTdHJhdGVneSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmFpbG92ZXJMYmFTdHJhdGVneScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmZhaWxvdmVyTGJhU3RyYXRlZ3ksXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQUxMX1JSXCIsXCJSQVRJT1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZhaWxvdmVyTGJhU3RyYXRlZ3knLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZmFpbG92ZXJMYmFTdHJhdGVneSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZmFpbG92ZXJNYXhSZXR1cm5BZGRyTnVtICYmICh0eXBlb2YgcHJvcGVydGllcy5mYWlsb3Zlck1heFJldHVybkFkZHJOdW0pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZhaWxvdmVyTWF4UmV0dXJuQWRkck51bScsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmZhaWxvdmVyTWF4UmV0dXJuQWRkck51bSxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogOCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmFpbG92ZXJNYXhSZXR1cm5BZGRyTnVtJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmZhaWxvdmVyTWF4UmV0dXJuQWRkck51bSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVmYXVsdE1heFJldHVybkFkZHJOdW0gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmRlZmF1bHRNYXhSZXR1cm5BZGRyTnVtKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWZhdWx0TWF4UmV0dXJuQWRkck51bScsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRlZmF1bHRNYXhSZXR1cm5BZGRyTnVtLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWZhdWx0TWF4UmV0dXJuQWRkck51bScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5kZWZhdWx0TWF4UmV0dXJuQWRkck51bSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzTW9kZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hY2Nlc3NNb2RlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdHJhdGVneU1vZGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc3RyYXRlZ3lNb2RlKSk7XG4gICAgaWYocHJvcGVydGllcy5zdHJhdGVneU1vZGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnN0cmF0ZWd5TW9kZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RyYXRlZ3lNb2RlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3RyYXRlZ3lNb2RlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkdFT1wiLFwiTEFURU5DWVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0cmF0ZWd5TW9kZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdHJhdGVneU1vZGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRlZmF1bHRMYmFTdHJhdGVneSAmJiAodHlwZW9mIHByb3BlcnRpZXMuZGVmYXVsdExiYVN0cmF0ZWd5KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWZhdWx0TGJhU3RyYXRlZ3knLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kZWZhdWx0TGJhU3RyYXRlZ3ksXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQUxMX1JSXCIsXCJSQVRJT1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlZmF1bHRMYmFTdHJhdGVneScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZWZhdWx0TGJhU3RyYXRlZ3kpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xpbmVzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5saW5lcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBY2Nlc3NTdHJhdGVneVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpETlM6OkFjY2Vzc1N0cmF0ZWd5YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBY2Nlc3NTdHJhdGVneVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpETlM6OkFjY2Vzc1N0cmF0ZWd5YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FjY2Vzc1N0cmF0ZWd5UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NBY2Nlc3NTdHJhdGVneVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdEZWZhdWx0QWRkclBvb2wnOiByb3MubGlzdE1hcHBlcihyb3NBY2Nlc3NTdHJhdGVneURlZmF1bHRBZGRyUG9vbFByb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5kZWZhdWx0QWRkclBvb2wpLFxuICAgICAgJ0RlZmF1bHRBZGRyUG9vbFR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlZmF1bHRBZGRyUG9vbFR5cGUpLFxuICAgICAgJ0RlZmF1bHRNaW5BdmFpbGFibGVBZGRyTnVtJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWZhdWx0TWluQXZhaWxhYmxlQWRkck51bSksXG4gICAgICAnSW5zdGFuY2VJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VJZCksXG4gICAgICAnU3RyYXRlZ3lNb2RlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdHJhdGVneU1vZGUpLFxuICAgICAgJ1N0cmF0ZWd5TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RyYXRlZ3lOYW1lKSxcbiAgICAgICdBY2Nlc3NNb2RlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hY2Nlc3NNb2RlKSxcbiAgICAgICdEZWZhdWx0TGF0ZW5jeU9wdGltaXphdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVmYXVsdExhdGVuY3lPcHRpbWl6YXRpb24pLFxuICAgICAgJ0RlZmF1bHRMYmFTdHJhdGVneSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVmYXVsdExiYVN0cmF0ZWd5KSxcbiAgICAgICdEZWZhdWx0TWF4UmV0dXJuQWRkck51bSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVmYXVsdE1heFJldHVybkFkZHJOdW0pLFxuICAgICAgJ0ZhaWxvdmVyQWRkclBvb2wnOiByb3MubGlzdE1hcHBlcihyb3NBY2Nlc3NTdHJhdGVneUZhaWxvdmVyQWRkclBvb2xQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuZmFpbG92ZXJBZGRyUG9vbCksXG4gICAgICAnRmFpbG92ZXJBZGRyUG9vbFR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZhaWxvdmVyQWRkclBvb2xUeXBlKSxcbiAgICAgICdGYWlsb3ZlckxhdGVuY3lPcHRpbWl6YXRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZhaWxvdmVyTGF0ZW5jeU9wdGltaXphdGlvbiksXG4gICAgICAnRmFpbG92ZXJMYmFTdHJhdGVneSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmFpbG92ZXJMYmFTdHJhdGVneSksXG4gICAgICAnRmFpbG92ZXJNYXhSZXR1cm5BZGRyTnVtJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mYWlsb3Zlck1heFJldHVybkFkZHJOdW0pLFxuICAgICAgJ0ZhaWxvdmVyTWluQXZhaWxhYmxlQWRkck51bSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmFpbG92ZXJNaW5BdmFpbGFibGVBZGRyTnVtKSxcbiAgICAgICdMaW5lcyc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmxpbmVzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpETlM6OkFjY2Vzc1N0cmF0ZWd5YC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgQWNjZXNzU3RyYXRlZ3lgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWRucy1hY2Nlc3NzdHJhdGVneVxuICovXG5leHBvcnQgY2xhc3MgUm9zQWNjZXNzU3RyYXRlZ3kgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkROUzo6QWNjZXNzU3RyYXRlZ3lcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU3RyYXRlZ3lJZDogVGhlIElEIG9mIHRoZSBhY2Nlc3Mgc3RyYXRlZ3kuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTdHJhdGVneUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWZhdWx0QWRkclBvb2w6IFRoZSBkZWZhdWx0IGFkZHJlc3MgcG9vbCBvZiB0aGUgYWNjZXNzIHN0cmF0ZWd5LlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWZhdWx0QWRkclBvb2w6IEFycmF5PFJvc0FjY2Vzc1N0cmF0ZWd5LkRlZmF1bHRBZGRyUG9vbFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWZhdWx0QWRkclBvb2xUeXBlOiBUaGUgdHlwZSBvZiB0aGUgZGVmYXVsdCBhZGRyZXNzIHBvb2wuXG4gICAgICovXG4gICAgcHVibGljIGRlZmF1bHRBZGRyUG9vbFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWZhdWx0TWluQXZhaWxhYmxlQWRkck51bTogVGhlIG1pbmltdW0gYXZhaWxhYmxlIGFkZHJlc3MgbnVtYmVyIG9mIHRoZSBkZWZhdWx0IGFkZHJlc3MgcG9vbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVmYXVsdE1pbkF2YWlsYWJsZUFkZHJOdW06IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIERucyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0cmF0ZWd5TW9kZTogVGhlIG1vZGUgb2YgdGhlIGFjY2VzcyBzdHJhdGVneS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RyYXRlZ3lNb2RlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3RyYXRlZ3lOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYWNjZXNzIHN0cmF0ZWd5LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdHJhdGVneU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2Nlc3NNb2RlOiBUaGUgYWNjZXNzIG1vZGUgb2YgdGhlIGFjY2VzcyBzdHJhdGVneS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWNjZXNzTW9kZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlZmF1bHRMYXRlbmN5T3B0aW1pemF0aW9uOiBXaGV0aGVyIHRvIGVuYWJsZSBsYXRlbmN5IG9wdGltaXphdGlvbiBmb3IgdGhlIGRlZmF1bHQgYWRkcmVzcyBwb29sLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWZhdWx0TGF0ZW5jeU9wdGltaXphdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlZmF1bHRMYmFTdHJhdGVneTogVGhlIGxvYWQgYmFsYW5jaW5nIHN0cmF0ZWd5IG9mIHRoZSBkZWZhdWx0IGFkZHJlc3MgcG9vbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVmYXVsdExiYVN0cmF0ZWd5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVmYXVsdE1heFJldHVybkFkZHJOdW06IFRoZSBtYXhpbXVtIHJldHVybiBhZGRyZXNzIG51bWJlciBvZiB0aGUgZGVmYXVsdCBhZGRyZXNzIHBvb2wuXG4gICAgICovXG4gICAgcHVibGljIGRlZmF1bHRNYXhSZXR1cm5BZGRyTnVtOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmFpbG92ZXJBZGRyUG9vbDogVGhlIGZhaWxvdmVyIGFkZHJlc3MgcG9vbCBvZiB0aGUgYWNjZXNzIHN0cmF0ZWd5LlxuICAgICAqL1xuICAgIHB1YmxpYyBmYWlsb3ZlckFkZHJQb29sOiBBcnJheTxSb3NBY2Nlc3NTdHJhdGVneS5GYWlsb3ZlckFkZHJQb29sUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZhaWxvdmVyQWRkclBvb2xUeXBlOiBUaGUgdHlwZSBvZiB0aGUgZmFpbG92ZXIgYWRkcmVzcyBwb29sLlxuICAgICAqL1xuICAgIHB1YmxpYyBmYWlsb3ZlckFkZHJQb29sVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZhaWxvdmVyTGF0ZW5jeU9wdGltaXphdGlvbjogV2hldGhlciB0byBlbmFibGUgbGF0ZW5jeSBvcHRpbWl6YXRpb24gZm9yIHRoZSBmYWlsb3ZlciBhZGRyZXNzIHBvb2wuXG4gICAgICovXG4gICAgcHVibGljIGZhaWxvdmVyTGF0ZW5jeU9wdGltaXphdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZhaWxvdmVyTGJhU3RyYXRlZ3k6IFRoZSBsb2FkIGJhbGFuY2luZyBzdHJhdGVneSBvZiB0aGUgZmFpbG92ZXIgYWRkcmVzcyBwb29sLlxuICAgICAqL1xuICAgIHB1YmxpYyBmYWlsb3ZlckxiYVN0cmF0ZWd5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmFpbG92ZXJNYXhSZXR1cm5BZGRyTnVtOiBUaGUgbWF4aW11bSByZXR1cm4gYWRkcmVzcyBudW1iZXIgb2YgdGhlIGZhaWxvdmVyIGFkZHJlc3MgcG9vbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZmFpbG92ZXJNYXhSZXR1cm5BZGRyTnVtOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmFpbG92ZXJNaW5BdmFpbGFibGVBZGRyTnVtOiBUaGUgbWluaW11bSBhdmFpbGFibGUgYWRkcmVzcyBudW1iZXIgb2YgdGhlIGZhaWxvdmVyIGFkZHJlc3MgcG9vbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZmFpbG92ZXJNaW5BdmFpbGFibGVBZGRyTnVtOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGluZXM6IFRoZSBsaW5lcyBvZiB0aGUgYWNjZXNzIHN0cmF0ZWd5LlxuICAgICAqL1xuICAgIHB1YmxpYyBsaW5lczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NBY2Nlc3NTdHJhdGVneVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQWNjZXNzU3RyYXRlZ3kuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clN0cmF0ZWd5SWQgPSB0aGlzLmdldEF0dCgnU3RyYXRlZ3lJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kZWZhdWx0QWRkclBvb2wgPSBwcm9wcy5kZWZhdWx0QWRkclBvb2w7XG4gICAgICAgIHRoaXMuZGVmYXVsdEFkZHJQb29sVHlwZSA9IHByb3BzLmRlZmF1bHRBZGRyUG9vbFR5cGU7XG4gICAgICAgIHRoaXMuZGVmYXVsdE1pbkF2YWlsYWJsZUFkZHJOdW0gPSBwcm9wcy5kZWZhdWx0TWluQXZhaWxhYmxlQWRkck51bTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUlkID0gcHJvcHMuaW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5zdHJhdGVneU1vZGUgPSBwcm9wcy5zdHJhdGVneU1vZGU7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3lOYW1lID0gcHJvcHMuc3RyYXRlZ3lOYW1lO1xuICAgICAgICB0aGlzLmFjY2Vzc01vZGUgPSBwcm9wcy5hY2Nlc3NNb2RlO1xuICAgICAgICB0aGlzLmRlZmF1bHRMYXRlbmN5T3B0aW1pemF0aW9uID0gcHJvcHMuZGVmYXVsdExhdGVuY3lPcHRpbWl6YXRpb247XG4gICAgICAgIHRoaXMuZGVmYXVsdExiYVN0cmF0ZWd5ID0gcHJvcHMuZGVmYXVsdExiYVN0cmF0ZWd5O1xuICAgICAgICB0aGlzLmRlZmF1bHRNYXhSZXR1cm5BZGRyTnVtID0gcHJvcHMuZGVmYXVsdE1heFJldHVybkFkZHJOdW07XG4gICAgICAgIHRoaXMuZmFpbG92ZXJBZGRyUG9vbCA9IHByb3BzLmZhaWxvdmVyQWRkclBvb2w7XG4gICAgICAgIHRoaXMuZmFpbG92ZXJBZGRyUG9vbFR5cGUgPSBwcm9wcy5mYWlsb3ZlckFkZHJQb29sVHlwZTtcbiAgICAgICAgdGhpcy5mYWlsb3ZlckxhdGVuY3lPcHRpbWl6YXRpb24gPSBwcm9wcy5mYWlsb3ZlckxhdGVuY3lPcHRpbWl6YXRpb247XG4gICAgICAgIHRoaXMuZmFpbG92ZXJMYmFTdHJhdGVneSA9IHByb3BzLmZhaWxvdmVyTGJhU3RyYXRlZ3k7XG4gICAgICAgIHRoaXMuZmFpbG92ZXJNYXhSZXR1cm5BZGRyTnVtID0gcHJvcHMuZmFpbG92ZXJNYXhSZXR1cm5BZGRyTnVtO1xuICAgICAgICB0aGlzLmZhaWxvdmVyTWluQXZhaWxhYmxlQWRkck51bSA9IHByb3BzLmZhaWxvdmVyTWluQXZhaWxhYmxlQWRkck51bTtcbiAgICAgICAgdGhpcy5saW5lcyA9IHByb3BzLmxpbmVzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlZmF1bHRBZGRyUG9vbDogdGhpcy5kZWZhdWx0QWRkclBvb2wsXG4gICAgICAgICAgICBkZWZhdWx0QWRkclBvb2xUeXBlOiB0aGlzLmRlZmF1bHRBZGRyUG9vbFR5cGUsXG4gICAgICAgICAgICBkZWZhdWx0TWluQXZhaWxhYmxlQWRkck51bTogdGhpcy5kZWZhdWx0TWluQXZhaWxhYmxlQWRkck51bSxcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHRoaXMuaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIHN0cmF0ZWd5TW9kZTogdGhpcy5zdHJhdGVneU1vZGUsXG4gICAgICAgICAgICBzdHJhdGVneU5hbWU6IHRoaXMuc3RyYXRlZ3lOYW1lLFxuICAgICAgICAgICAgYWNjZXNzTW9kZTogdGhpcy5hY2Nlc3NNb2RlLFxuICAgICAgICAgICAgZGVmYXVsdExhdGVuY3lPcHRpbWl6YXRpb246IHRoaXMuZGVmYXVsdExhdGVuY3lPcHRpbWl6YXRpb24sXG4gICAgICAgICAgICBkZWZhdWx0TGJhU3RyYXRlZ3k6IHRoaXMuZGVmYXVsdExiYVN0cmF0ZWd5LFxuICAgICAgICAgICAgZGVmYXVsdE1heFJldHVybkFkZHJOdW06IHRoaXMuZGVmYXVsdE1heFJldHVybkFkZHJOdW0sXG4gICAgICAgICAgICBmYWlsb3ZlckFkZHJQb29sOiB0aGlzLmZhaWxvdmVyQWRkclBvb2wsXG4gICAgICAgICAgICBmYWlsb3ZlckFkZHJQb29sVHlwZTogdGhpcy5mYWlsb3ZlckFkZHJQb29sVHlwZSxcbiAgICAgICAgICAgIGZhaWxvdmVyTGF0ZW5jeU9wdGltaXphdGlvbjogdGhpcy5mYWlsb3ZlckxhdGVuY3lPcHRpbWl6YXRpb24sXG4gICAgICAgICAgICBmYWlsb3ZlckxiYVN0cmF0ZWd5OiB0aGlzLmZhaWxvdmVyTGJhU3RyYXRlZ3ksXG4gICAgICAgICAgICBmYWlsb3Zlck1heFJldHVybkFkZHJOdW06IHRoaXMuZmFpbG92ZXJNYXhSZXR1cm5BZGRyTnVtLFxuICAgICAgICAgICAgZmFpbG92ZXJNaW5BdmFpbGFibGVBZGRyTnVtOiB0aGlzLmZhaWxvdmVyTWluQXZhaWxhYmxlQWRkck51bSxcbiAgICAgICAgICAgIGxpbmVzOiB0aGlzLmxpbmVzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBY2Nlc3NTdHJhdGVneVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0FjY2Vzc1N0cmF0ZWd5IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0QWRkclBvb2xQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbGJhV2VpZ2h0OiBUaGUgbG9hZCBiYWxhbmNpbmcgd2VpZ2h0IG9mIHRoZSBhZGRyZXNzIHBvb2wuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBsYmFXZWlnaHQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaWRlbnRpdHk6IFRoZSBJRCBvZiB0aGUgYWRkcmVzcyBwb29sLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaWRlbnRpdHk/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBEZWZhdWx0QWRkclBvb2xQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRGVmYXVsdEFkZHJQb29sUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQWNjZXNzU3RyYXRlZ3lfRGVmYXVsdEFkZHJQb29sUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsYmFXZWlnaHQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubGJhV2VpZ2h0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpZGVudGl0eScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pZGVudGl0eSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJEZWZhdWx0QWRkclBvb2xQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RE5TOjpBY2Nlc3NTdHJhdGVneS5EZWZhdWx0QWRkclBvb2xgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYERlZmF1bHRBZGRyUG9vbFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpETlM6OkFjY2Vzc1N0cmF0ZWd5LkRlZmF1bHRBZGRyUG9vbGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBY2Nlc3NTdHJhdGVneURlZmF1bHRBZGRyUG9vbFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NBY2Nlc3NTdHJhdGVneV9EZWZhdWx0QWRkclBvb2xQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdMYmFXZWlnaHQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxiYVdlaWdodCksXG4gICAgICAnSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlkZW50aXR5KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0FjY2Vzc1N0cmF0ZWd5IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBGYWlsb3ZlckFkZHJQb29sUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGxiYVdlaWdodDogVGhlIGxvYWQgYmFsYW5jaW5nIHdlaWdodCBvZiB0aGUgYWRkcmVzcyBwb29sLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbGJhV2VpZ2h0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlkZW50aXR5OiBUaGUgSUQgb2YgdGhlIGFkZHJlc3MgcG9vbC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlkZW50aXR5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRmFpbG92ZXJBZGRyUG9vbFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBGYWlsb3ZlckFkZHJQb29sUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQWNjZXNzU3RyYXRlZ3lfRmFpbG92ZXJBZGRyUG9vbFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGJhV2VpZ2h0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmxiYVdlaWdodCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWRlbnRpdHknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaWRlbnRpdHkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRmFpbG92ZXJBZGRyUG9vbFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpETlM6OkFjY2Vzc1N0cmF0ZWd5LkZhaWxvdmVyQWRkclBvb2xgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEZhaWxvdmVyQWRkclBvb2xQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RE5TOjpBY2Nlc3NTdHJhdGVneS5GYWlsb3ZlckFkZHJQb29sYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FjY2Vzc1N0cmF0ZWd5RmFpbG92ZXJBZGRyUG9vbFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NBY2Nlc3NTdHJhdGVneV9GYWlsb3ZlckFkZHJQb29sUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnTGJhV2VpZ2h0Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sYmFXZWlnaHQpLFxuICAgICAgJ0lkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pZGVudGl0eSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NBZGRyZXNzUG9vbGAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1kbnMtYWRkcmVzc3Bvb2xcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBZGRyZXNzUG9vbFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhZGRyOiBUaGUgbGlzdCBvZiBhZGRyZXNzZXMgaW4gdGhlIGFkZHJlc3MgcG9vbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhZGRyOiBBcnJheTxSb3NBZGRyZXNzUG9vbC5BZGRyUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgR1RNIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsYmFTdHJhdGVneTogVGhlIGxvYWQgYmFsYW5jaW5nIHN0cmF0ZWd5LiBWYWxpZCB2YWx1ZXM6IFJvdW5kUm9iaW4sIFdlaWdodGVkLCBGYWxsYmFja1RvRmlyc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGJhU3RyYXRlZ3k6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgYWRkcmVzcyBwb29sLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0eXBlOiBUaGUgdHlwZSBvZiB0aGUgYWRkcmVzcyBwb29sLiBWYWxpZCB2YWx1ZXM6IElwdjQsIElwdjYsIERvbWFpbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB0eXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZXZhbHVhdGlvbkNvdW50OiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoYXQgdGhlIHN5c3RlbSB3YWl0cyBmb3IgYSByZXNwb25zZSBmcm9tIGVhY2ggYWRkcmVzcyBiZWZvcmUgaXQgbWFya3MgdGhlIGFkZHJlc3MgYXMgdW5oZWFsdGh5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGV2YWx1YXRpb25Db3VudD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcnZhbDogVGhlIGludGVydmFsIGJldHdlZW4gdHdvIGNvbnNlY3V0aXZlIGhlYWx0aCBjaGVja3MsIGluIHNlY29uZHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJ2YWw/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXNwQ2l0eU5vZGU6IFRoZSBsaXN0IG9mIElTUCBjaXR5IG5vZGVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzcENpdHlOb2RlPzogQXJyYXk8Um9zQWRkcmVzc1Bvb2wuSXNwQ2l0eU5vZGVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9uaXRvckV4dGVuZEluZm86IFRoZSBleHRlbmRlZCBpbmZvcm1hdGlvbiBvZiB0aGUgaGVhbHRoIGNoZWNrLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vbml0b3JFeHRlbmRJbmZvPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1vbml0b3JTdGF0dXM6IFRoZSBtb25pdG9yaW5nIHN0YXR1cyBvZiB0aGUgYWRkcmVzcyBwb29sLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vbml0b3JTdGF0dXM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvdG9jb2xUeXBlOiBUaGUgcHJvdG9jb2wgdHlwZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm90b2NvbFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZW91dDogVGhlIHRpbWVvdXQgcGVyaW9kIG9mIGEgaGVhbHRoIGNoZWNrLCBpbiBzZWNvbmRzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWVvdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQWRkcmVzc1Bvb2xQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQWRkcmVzc1Bvb2xQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBZGRyZXNzUG9vbFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuaXNwQ2l0eU5vZGUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5pc3BDaXR5Tm9kZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmlzcENpdHlOb2RlKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNwQ2l0eU5vZGUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaXNwQ2l0eU5vZGUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNwQ2l0eU5vZGUnLCByb3MubGlzdFZhbGlkYXRvcihSb3NBZGRyZXNzUG9vbF9Jc3BDaXR5Tm9kZVByb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5pc3BDaXR5Tm9kZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50eXBlKSk7XG4gICAgaWYocHJvcGVydGllcy50eXBlICYmICh0eXBlb2YgcHJvcGVydGllcy50eXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJJUFY0XCIsXCJJUFY2XCIsXCJET01BSU5cIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xiYVN0cmF0ZWd5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxiYVN0cmF0ZWd5KSk7XG4gICAgaWYocHJvcGVydGllcy5sYmFTdHJhdGVneSAmJiAodHlwZW9mIHByb3BlcnRpZXMubGJhU3RyYXRlZ3kpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xiYVN0cmF0ZWd5Jywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubGJhU3RyYXRlZ3ksXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQUxMX1JSXCIsXCJSQVRJT1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xiYVN0cmF0ZWd5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxiYVN0cmF0ZWd5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMucHJvdG9jb2xUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5wcm90b2NvbFR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb3RvY29sVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnByb3RvY29sVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJUQ1BcIixcIkhUVFBcIixcIkhUVFBTXCIsXCJQSU5HXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvdG9jb2xUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByb3RvY29sVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGltZW91dCAmJiAodHlwZW9mIHByb3BlcnRpZXMudGltZW91dCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRpbWVvdXQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDk5OTk5OTksXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGltZW91dCkpO1xuICAgIGlmKHByb3BlcnRpZXMuZXZhbHVhdGlvbkNvdW50ICYmICh0eXBlb2YgcHJvcGVydGllcy5ldmFsdWF0aW9uQ291bnQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2V2YWx1YXRpb25Db3VudCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmV2YWx1YXRpb25Db3VudCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogOTk5OTk5OSxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZXZhbHVhdGlvbkNvdW50Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmV2YWx1YXRpb25Db3VudCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW9uaXRvckV4dGVuZEluZm8nLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLm1vbml0b3JFeHRlbmRJbmZvKSk7XG4gICAgaWYocHJvcGVydGllcy5tb25pdG9yU3RhdHVzICYmICh0eXBlb2YgcHJvcGVydGllcy5tb25pdG9yU3RhdHVzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb25pdG9yU3RhdHVzJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubW9uaXRvclN0YXR1cyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJPUEVOXCIsXCJDTE9TRVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vbml0b3JTdGF0dXMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubW9uaXRvclN0YXR1cykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWRkcicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hZGRyKSk7XG4gICAgaWYocHJvcGVydGllcy5hZGRyICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuYWRkcikgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmFkZHIpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhZGRyJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmFkZHIubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA1MCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWRkcicsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0FkZHJlc3NQb29sX0FkZHJQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuYWRkcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5uYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmludGVydmFsICYmICh0eXBlb2YgcHJvcGVydGllcy5pbnRlcnZhbCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50ZXJ2YWwnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnRlcnZhbCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogOTk5OTk5OSxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50ZXJ2YWwnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaW50ZXJ2YWwpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQWRkcmVzc1Bvb2xQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RE5TOjpBZGRyZXNzUG9vbGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQWRkcmVzc1Bvb2xQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RE5TOjpBZGRyZXNzUG9vbGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBZGRyZXNzUG9vbFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQWRkcmVzc1Bvb2xQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQWRkcic6IHJvcy5saXN0TWFwcGVyKHJvc0FkZHJlc3NQb29sQWRkclByb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5hZGRyKSxcbiAgICAgICdJbnN0YW5jZUlkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZUlkKSxcbiAgICAgICdMYmFTdHJhdGVneSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubGJhU3RyYXRlZ3kpLFxuICAgICAgJ05hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgICAgJ1R5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnR5cGUpLFxuICAgICAgJ0V2YWx1YXRpb25Db3VudCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZXZhbHVhdGlvbkNvdW50KSxcbiAgICAgICdJbnRlcnZhbCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50ZXJ2YWwpLFxuICAgICAgJ0lzcENpdHlOb2RlJzogcm9zLmxpc3RNYXBwZXIocm9zQWRkcmVzc1Bvb2xJc3BDaXR5Tm9kZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5pc3BDaXR5Tm9kZSksXG4gICAgICAnTW9uaXRvckV4dGVuZEluZm8nOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5tb25pdG9yRXh0ZW5kSW5mbyksXG4gICAgICAnTW9uaXRvclN0YXR1cyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubW9uaXRvclN0YXR1cyksXG4gICAgICAnUHJvdG9jb2xUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcm90b2NvbFR5cGUpLFxuICAgICAgJ1RpbWVvdXQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpbWVvdXQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkROUzo6QWRkcmVzc1Bvb2xgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBBZGRyZXNzUG9vbGAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZG5zLWFkZHJlc3Nwb29sXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NBZGRyZXNzUG9vbCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RE5TOjpBZGRyZXNzUG9vbFwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBZGRyUG9vbElkOiBUaGUgSUQgb2YgdGhlIGFkZHJlc3MgcG9vbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFkZHJQb29sSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFkZHI6IFRoZSBsaXN0IG9mIGFkZHJlc3NlcyBpbiB0aGUgYWRkcmVzcyBwb29sLlxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRyOiBBcnJheTxSb3NBZGRyZXNzUG9vbC5BZGRyUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgR1RNIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGJhU3RyYXRlZ3k6IFRoZSBsb2FkIGJhbGFuY2luZyBzdHJhdGVneS4gVmFsaWQgdmFsdWVzOiBSb3VuZFJvYmluLCBXZWlnaHRlZCwgRmFsbGJhY2tUb0ZpcnN0LlxuICAgICAqL1xuICAgIHB1YmxpYyBsYmFTdHJhdGVneTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhZGRyZXNzIHBvb2wuXG4gICAgICovXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0eXBlOiBUaGUgdHlwZSBvZiB0aGUgYWRkcmVzcyBwb29sLiBWYWxpZCB2YWx1ZXM6IElwdjQsIElwdjYsIERvbWFpbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGV2YWx1YXRpb25Db3VudDogVGhlIG51bWJlciBvZiB0aW1lcyB0aGF0IHRoZSBzeXN0ZW0gd2FpdHMgZm9yIGEgcmVzcG9uc2UgZnJvbSBlYWNoIGFkZHJlc3MgYmVmb3JlIGl0IG1hcmtzIHRoZSBhZGRyZXNzIGFzIHVuaGVhbHRoeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZXZhbHVhdGlvbkNvdW50OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJ2YWw6IFRoZSBpbnRlcnZhbCBiZXR3ZWVuIHR3byBjb25zZWN1dGl2ZSBoZWFsdGggY2hlY2tzLCBpbiBzZWNvbmRzLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcnZhbDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzcENpdHlOb2RlOiBUaGUgbGlzdCBvZiBJU1AgY2l0eSBub2Rlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNwQ2l0eU5vZGU6IEFycmF5PFJvc0FkZHJlc3NQb29sLklzcENpdHlOb2RlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1vbml0b3JFeHRlbmRJbmZvOiBUaGUgZXh0ZW5kZWQgaW5mb3JtYXRpb24gb2YgdGhlIGhlYWx0aCBjaGVjay5cbiAgICAgKi9cbiAgICBwdWJsaWMgbW9uaXRvckV4dGVuZEluZm86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtb25pdG9yU3RhdHVzOiBUaGUgbW9uaXRvcmluZyBzdGF0dXMgb2YgdGhlIGFkZHJlc3MgcG9vbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbW9uaXRvclN0YXR1czogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb3RvY29sVHlwZTogVGhlIHByb3RvY29sIHR5cGUuXG4gICAgICovXG4gICAgcHVibGljIHByb3RvY29sVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRpbWVvdXQ6IFRoZSB0aW1lb3V0IHBlcmlvZCBvZiBhIGhlYWx0aCBjaGVjaywgaW4gc2Vjb25kcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGltZW91dDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0FkZHJlc3NQb29sUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBZGRyZXNzUG9vbC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQWRkclBvb2xJZCA9IHRoaXMuZ2V0QXR0KCdBZGRyUG9vbElkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFkZHIgPSBwcm9wcy5hZGRyO1xuICAgICAgICB0aGlzLmluc3RhbmNlSWQgPSBwcm9wcy5pbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmxiYVN0cmF0ZWd5ID0gcHJvcHMubGJhU3RyYXRlZ3k7XG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgICAgIHRoaXMudHlwZSA9IHByb3BzLnR5cGU7XG4gICAgICAgIHRoaXMuZXZhbHVhdGlvbkNvdW50ID0gcHJvcHMuZXZhbHVhdGlvbkNvdW50O1xuICAgICAgICB0aGlzLmludGVydmFsID0gcHJvcHMuaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuaXNwQ2l0eU5vZGUgPSBwcm9wcy5pc3BDaXR5Tm9kZTtcbiAgICAgICAgdGhpcy5tb25pdG9yRXh0ZW5kSW5mbyA9IHByb3BzLm1vbml0b3JFeHRlbmRJbmZvO1xuICAgICAgICB0aGlzLm1vbml0b3JTdGF0dXMgPSBwcm9wcy5tb25pdG9yU3RhdHVzO1xuICAgICAgICB0aGlzLnByb3RvY29sVHlwZSA9IHByb3BzLnByb3RvY29sVHlwZTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gcHJvcHMudGltZW91dDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyOiB0aGlzLmFkZHIsXG4gICAgICAgICAgICBpbnN0YW5jZUlkOiB0aGlzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICBsYmFTdHJhdGVneTogdGhpcy5sYmFTdHJhdGVneSxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgICAgIGV2YWx1YXRpb25Db3VudDogdGhpcy5ldmFsdWF0aW9uQ291bnQsXG4gICAgICAgICAgICBpbnRlcnZhbDogdGhpcy5pbnRlcnZhbCxcbiAgICAgICAgICAgIGlzcENpdHlOb2RlOiB0aGlzLmlzcENpdHlOb2RlLFxuICAgICAgICAgICAgbW9uaXRvckV4dGVuZEluZm86IHRoaXMubW9uaXRvckV4dGVuZEluZm8sXG4gICAgICAgICAgICBtb25pdG9yU3RhdHVzOiB0aGlzLm1vbml0b3JTdGF0dXMsXG4gICAgICAgICAgICBwcm90b2NvbFR5cGU6IHRoaXMucHJvdG9jb2xUeXBlLFxuICAgICAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBZGRyZXNzUG9vbFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0FkZHJlc3NQb29sIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBZGRyUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGF0dHJpYnV0ZUluZm86IFRoZSBhdHRyaWJ1dGUgaW5mb3JtYXRpb24gb2YgdGhlIGFkZHJlc3MuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhdHRyaWJ1dGVJbmZvOiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbGJhV2VpZ2h0OiBUaGUgd2VpZ2h0IG9mIHRoZSBhZGRyZXNzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbGJhV2VpZ2h0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1vZGU6IFRoZSBtb2RlIG9mIHRoZSBhZGRyZXNzLiBWYWxpZCB2YWx1ZXM6IE5vcm1hbCwgTWFpbnRlbmFuY2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtb2RlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYWRkcjogVGhlIGFkZHJlc3MgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhZGRyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVtYXJrOiBUaGUgcmVtYXJrIG9mIHRoZSBhZGRyZXNzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVtYXJrPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQWRkclByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBBZGRyUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQWRkcmVzc1Bvb2xfQWRkclByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXR0cmlidXRlSW5mbycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hdHRyaWJ1dGVJbmZvKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhdHRyaWJ1dGVJbmZvJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5hdHRyaWJ1dGVJbmZvKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsYmFXZWlnaHQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubGJhV2VpZ2h0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb2RlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm1vZGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1vZGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1vZGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vZGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tb2RlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlNNQVJUXCIsXCJPTkxJTkVcIixcIk9GRkxJTkVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb2RlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1vZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FkZHInLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYWRkcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWRkcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hZGRyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZW1hcmsnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVtYXJrKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkFkZHJQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RE5TOjpBZGRyZXNzUG9vbC5BZGRyYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBBZGRyUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkROUzo6QWRkcmVzc1Bvb2wuQWRkcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBZGRyZXNzUG9vbEFkZHJQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQWRkcmVzc1Bvb2xfQWRkclByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0F0dHJpYnV0ZUluZm8nOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5hdHRyaWJ1dGVJbmZvKSxcbiAgICAgICdMYmFXZWlnaHQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxiYVdlaWdodCksXG4gICAgICAnTW9kZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubW9kZSksXG4gICAgICAnQWRkcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWRkciksXG4gICAgICAnUmVtYXJrJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZW1hcmspLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQWRkcmVzc1Bvb2wge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIElzcENpdHlOb2RlUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNpdHlDb2RlOiBUaGUgY2l0eSBjb2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY2l0eUNvZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaXNwQ29kZTogVGhlIElTUCBjb2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaXNwQ29kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYElzcENpdHlOb2RlUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYElzcENpdHlOb2RlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQWRkcmVzc1Bvb2xfSXNwQ2l0eU5vZGVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NpdHlDb2RlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNpdHlDb2RlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc3BDb2RlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmlzcENvZGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSXNwQ2l0eU5vZGVQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RE5TOjpBZGRyZXNzUG9vbC5Jc3BDaXR5Tm9kZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSXNwQ2l0eU5vZGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RE5TOjpBZGRyZXNzUG9vbC5Jc3BDaXR5Tm9kZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBZGRyZXNzUG9vbElzcENpdHlOb2RlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0FkZHJlc3NQb29sX0lzcENpdHlOb2RlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQ2l0eUNvZGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNpdHlDb2RlKSxcbiAgICAgICdJc3BDb2RlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pc3BDb2RlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0NhY2hlRG9tYWluYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWRucy1jYWNoZWRvbWFpblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0NhY2hlRG9tYWluUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNhY2hlVHRsTWF4OiBUaGUgbWF4aW11bSBUVEwgdmFsdWUgZm9yIGNhY2hlZCByZWNvcmRzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNhY2hlVHRsTWF4OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2FjaGVUdGxNaW46IFRoZSBtaW5pbXVtIFRUTCB2YWx1ZSBmb3IgY2FjaGVkIHJlY29yZHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2FjaGVUdGxNaW46IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW5OYW1lOiBUaGUgZG9tYWluIG5hbWUgb2YgdGhlIEROUyBjYWNoZSBkb21haW4uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZG9tYWluTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBpbnN0YW5jZSBJRCBhc3NvY2lhdGVkIHdpdGggdGhlIEROUyBjYWNoZSBkb21haW4uXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNvdXJjZURuc1NlcnZlcjogTGlzdCBvZiBzb3VyY2UgRE5TIHNlcnZlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlRG5zU2VydmVyOiBBcnJheTxSb3NDYWNoZURvbWFpbi5Tb3VyY2VEbnNTZXJ2ZXJQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc291cmNlRWRuczogV2hldGhlciBFRE5TIGlzIGVuYWJsZWQgZm9yIHRoZSBzb3VyY2UgRE5TIHNlcnZlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VFZG5zOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc291cmNlUHJvdG9jb2w6IFRoZSBwcm90b2NvbCB1c2VkIGJ5IHRoZSBzb3VyY2UgRE5TIHNlcnZlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VQcm90b2NvbDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlbWFyazogUmVtYXJrIGZvciB0aGUgRE5TIGNhY2hlIGRvbWFpbi5cbiAgICAgKi9cbiAgICByZWFkb25seSByZW1hcms/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQ2FjaGVEb21haW5Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ2FjaGVEb21haW5Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDYWNoZURvbWFpblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlRWRucycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zb3VyY2VFZG5zKSk7XG4gICAgaWYocHJvcGVydGllcy5zb3VyY2VFZG5zICYmICh0eXBlb2YgcHJvcGVydGllcy5zb3VyY2VFZG5zKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VFZG5zJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc291cmNlRWRucyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJOT1RfU1VQUE9SVFwiLFwiU1VQUE9SVFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZUVkbnMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc291cmNlRWRucykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZG9tYWluTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kb21haW5OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkb21haW5OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRvbWFpbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VQcm90b2NvbCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zb3VyY2VQcm90b2NvbCkpO1xuICAgIGlmKHByb3BlcnRpZXMuc291cmNlUHJvdG9jb2wgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnNvdXJjZVByb3RvY29sKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VQcm90b2NvbCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNvdXJjZVByb3RvY29sLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlVEUFwiLFwiVENQXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlUHJvdG9jb2wnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc291cmNlUHJvdG9jb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NhY2hlVHRsTWluJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNhY2hlVHRsTWluKSk7XG4gICAgaWYocHJvcGVydGllcy5jYWNoZVR0bE1pbiAmJiAodHlwZW9mIHByb3BlcnRpZXMuY2FjaGVUdGxNaW4pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NhY2hlVHRsTWluJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuY2FjaGVUdGxNaW4sXG4gICAgICAgICAgICBtaW46IDMwLFxuICAgICAgICAgICAgbWF4OiA4NjQwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2FjaGVUdGxNaW4nLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuY2FjaGVUdGxNaW4pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZURuc1NlcnZlcicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zb3VyY2VEbnNTZXJ2ZXIpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNvdXJjZURuc1NlcnZlciAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnNvdXJjZURuc1NlcnZlcikgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNvdXJjZURuc1NlcnZlcikgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZURuc1NlcnZlcicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zb3VyY2VEbnNTZXJ2ZXIubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlRG5zU2VydmVyJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zQ2FjaGVEb21haW5fU291cmNlRG5zU2VydmVyUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnNvdXJjZURuc1NlcnZlcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2FjaGVUdGxNYXgnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2FjaGVUdGxNYXgpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmNhY2hlVHRsTWF4ICYmICh0eXBlb2YgcHJvcGVydGllcy5jYWNoZVR0bE1heCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2FjaGVUdGxNYXgnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5jYWNoZVR0bE1heCxcbiAgICAgICAgICAgIG1pbjogMzAsXG4gICAgICAgICAgICBtYXg6IDg2NDAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjYWNoZVR0bE1heCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5jYWNoZVR0bE1heCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVtYXJrJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlbWFyaykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NDYWNoZURvbWFpblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpETlM6OkNhY2hlRG9tYWluYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDYWNoZURvbWFpblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpETlM6OkNhY2hlRG9tYWluYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0NhY2hlRG9tYWluUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDYWNoZURvbWFpblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdDYWNoZVR0bE1heCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2FjaGVUdGxNYXgpLFxuICAgICAgJ0NhY2hlVHRsTWluJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jYWNoZVR0bE1pbiksXG4gICAgICAnRG9tYWluTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZG9tYWluTmFtZSksXG4gICAgICAnSW5zdGFuY2VJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VJZCksXG4gICAgICAnU291cmNlRG5zU2VydmVyJzogcm9zLmxpc3RNYXBwZXIocm9zQ2FjaGVEb21haW5Tb3VyY2VEbnNTZXJ2ZXJQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc291cmNlRG5zU2VydmVyKSxcbiAgICAgICdTb3VyY2VFZG5zJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zb3VyY2VFZG5zKSxcbiAgICAgICdTb3VyY2VQcm90b2NvbCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc291cmNlUHJvdG9jb2wpLFxuICAgICAgJ1JlbWFyayc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVtYXJrKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpETlM6OkNhY2hlRG9tYWluYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgQ2FjaGVEb21haW5gIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWRucy1jYWNoZWRvbWFpblxuICovXG5leHBvcnQgY2xhc3MgUm9zQ2FjaGVEb21haW4gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkROUzo6Q2FjaGVEb21haW5cIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRG9tYWluTmFtZTogVGhlIGRvbWFpbiBuYW1lIG9mIHRoZSBETlMgY2FjaGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEb21haW5OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjYWNoZVR0bE1heDogVGhlIG1heGltdW0gVFRMIHZhbHVlIGZvciBjYWNoZWQgcmVjb3Jkcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2FjaGVUdGxNYXg6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjYWNoZVR0bE1pbjogVGhlIG1pbmltdW0gVFRMIHZhbHVlIGZvciBjYWNoZWQgcmVjb3Jkcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2FjaGVUdGxNaW46IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW5OYW1lOiBUaGUgZG9tYWluIG5hbWUgb2YgdGhlIEROUyBjYWNoZSBkb21haW4uXG4gICAgICovXG4gICAgcHVibGljIGRvbWFpbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgaW5zdGFuY2UgSUQgYXNzb2NpYXRlZCB3aXRoIHRoZSBETlMgY2FjaGUgZG9tYWluLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc291cmNlRG5zU2VydmVyOiBMaXN0IG9mIHNvdXJjZSBETlMgc2VydmVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc291cmNlRG5zU2VydmVyOiBBcnJheTxSb3NDYWNoZURvbWFpbi5Tb3VyY2VEbnNTZXJ2ZXJQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc291cmNlRWRuczogV2hldGhlciBFRE5TIGlzIGVuYWJsZWQgZm9yIHRoZSBzb3VyY2UgRE5TIHNlcnZlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgc291cmNlRWRuczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNvdXJjZVByb3RvY29sOiBUaGUgcHJvdG9jb2wgdXNlZCBieSB0aGUgc291cmNlIEROUyBzZXJ2ZXIuXG4gICAgICovXG4gICAgcHVibGljIHNvdXJjZVByb3RvY29sOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVtYXJrOiBSZW1hcmsgZm9yIHRoZSBETlMgY2FjaGUgZG9tYWluLlxuICAgICAqL1xuICAgIHB1YmxpYyByZW1hcms6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NDYWNoZURvbWFpblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQ2FjaGVEb21haW4uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckRvbWFpbk5hbWUgPSB0aGlzLmdldEF0dCgnRG9tYWluTmFtZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jYWNoZVR0bE1heCA9IHByb3BzLmNhY2hlVHRsTWF4O1xuICAgICAgICB0aGlzLmNhY2hlVHRsTWluID0gcHJvcHMuY2FjaGVUdGxNaW47XG4gICAgICAgIHRoaXMuZG9tYWluTmFtZSA9IHByb3BzLmRvbWFpbk5hbWU7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VJZCA9IHByb3BzLmluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuc291cmNlRG5zU2VydmVyID0gcHJvcHMuc291cmNlRG5zU2VydmVyO1xuICAgICAgICB0aGlzLnNvdXJjZUVkbnMgPSBwcm9wcy5zb3VyY2VFZG5zO1xuICAgICAgICB0aGlzLnNvdXJjZVByb3RvY29sID0gcHJvcHMuc291cmNlUHJvdG9jb2w7XG4gICAgICAgIHRoaXMucmVtYXJrID0gcHJvcHMucmVtYXJrO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhY2hlVHRsTWF4OiB0aGlzLmNhY2hlVHRsTWF4LFxuICAgICAgICAgICAgY2FjaGVUdGxNaW46IHRoaXMuY2FjaGVUdGxNaW4sXG4gICAgICAgICAgICBkb21haW5OYW1lOiB0aGlzLmRvbWFpbk5hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZUlkOiB0aGlzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICBzb3VyY2VEbnNTZXJ2ZXI6IHRoaXMuc291cmNlRG5zU2VydmVyLFxuICAgICAgICAgICAgc291cmNlRWRuczogdGhpcy5zb3VyY2VFZG5zLFxuICAgICAgICAgICAgc291cmNlUHJvdG9jb2w6IHRoaXMuc291cmNlUHJvdG9jb2wsXG4gICAgICAgICAgICByZW1hcms6IHRoaXMucmVtYXJrLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NDYWNoZURvbWFpblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0NhY2hlRG9tYWluIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBTb3VyY2VEbnNTZXJ2ZXJQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcG9ydDogUG9ydCBvZiB0aGUgc291cmNlIEROUyBzZXJ2ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwb3J0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaG9zdDogSG9zdCBvZiB0aGUgc291cmNlIEROUyBzZXJ2ZXIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBob3N0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBTb3VyY2VEbnNTZXJ2ZXJQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU291cmNlRG5zU2VydmVyUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ2FjaGVEb21haW5fU291cmNlRG5zU2VydmVyUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb3J0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBvcnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvcnQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaG9zdCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ob3N0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdob3N0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhvc3QpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiU291cmNlRG5zU2VydmVyUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkROUzo6Q2FjaGVEb21haW4uU291cmNlRG5zU2VydmVyYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTb3VyY2VEbnNTZXJ2ZXJQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RE5TOjpDYWNoZURvbWFpbi5Tb3VyY2VEbnNTZXJ2ZXJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ2FjaGVEb21haW5Tb3VyY2VEbnNTZXJ2ZXJQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQ2FjaGVEb21haW5fU291cmNlRG5zU2VydmVyUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnUG9ydCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucG9ydCksXG4gICAgICAnSG9zdCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaG9zdCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NDdXN0b21MaW5lYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWRucy1jdXN0b21saW5lXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQ3VzdG9tTGluZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW5OYW1lOiBUaGUgZG9tYWluIG5hbWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXN0b20gbGluZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkb21haW5OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXBTZWdtZW50OiBUaGUgbGlzdCBvZiBJUCBzZWdtZW50cyBmb3IgdGhlIGN1c3RvbSBsaW5lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlwU2VnbWVudDogQXJyYXk8Um9zQ3VzdG9tTGluZS5JcFNlZ21lbnRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGluZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBjdXN0b20gbGluZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsaW5lTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0N1c3RvbUxpbmVQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ3VzdG9tTGluZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0N1c3RvbUxpbmVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RvbWFpbk5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZG9tYWluTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZG9tYWluTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kb21haW5OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpcFNlZ21lbnQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaXBTZWdtZW50KSk7XG4gICAgaWYocHJvcGVydGllcy5pcFNlZ21lbnQgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5pcFNlZ21lbnQpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5pcFNlZ21lbnQpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpcFNlZ21lbnQnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaXBTZWdtZW50Lmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpcFNlZ21lbnQnLCByb3MubGlzdFZhbGlkYXRvcihSb3NDdXN0b21MaW5lX0lwU2VnbWVudFByb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5pcFNlZ21lbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xpbmVOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxpbmVOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsaW5lTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5saW5lTmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NDdXN0b21MaW5lUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkROUzo6Q3VzdG9tTGluZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ3VzdG9tTGluZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpETlM6OkN1c3RvbUxpbmVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ3VzdG9tTGluZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQ3VzdG9tTGluZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdEb21haW5OYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kb21haW5OYW1lKSxcbiAgICAgICdJcFNlZ21lbnQnOiByb3MubGlzdE1hcHBlcihyb3NDdXN0b21MaW5lSXBTZWdtZW50UHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmlwU2VnbWVudCksXG4gICAgICAnTGluZU5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxpbmVOYW1lKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpETlM6OkN1c3RvbUxpbmVgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBDdXN0b21MaW5lYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1kbnMtY3VzdG9tbGluZVxuICovXG5leHBvcnQgY2xhc3MgUm9zQ3VzdG9tTGluZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RE5TOjpDdXN0b21MaW5lXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIExpbmVJZDogVGhlIElEIG9mIHRoZSBjdXN0b20gbGluZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxpbmVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZG9tYWluTmFtZTogVGhlIGRvbWFpbiBuYW1lIGFzc29jaWF0ZWQgd2l0aCB0aGUgY3VzdG9tIGxpbmUuXG4gICAgICovXG4gICAgcHVibGljIGRvbWFpbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpcFNlZ21lbnQ6IFRoZSBsaXN0IG9mIElQIHNlZ21lbnRzIGZvciB0aGUgY3VzdG9tIGxpbmUuXG4gICAgICovXG4gICAgcHVibGljIGlwU2VnbWVudDogQXJyYXk8Um9zQ3VzdG9tTGluZS5JcFNlZ21lbnRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGluZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBjdXN0b20gbGluZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbGluZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NDdXN0b21MaW5lUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDdXN0b21MaW5lLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJMaW5lSWQgPSB0aGlzLmdldEF0dCgnTGluZUlkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRvbWFpbk5hbWUgPSBwcm9wcy5kb21haW5OYW1lO1xuICAgICAgICB0aGlzLmlwU2VnbWVudCA9IHByb3BzLmlwU2VnbWVudDtcbiAgICAgICAgdGhpcy5saW5lTmFtZSA9IHByb3BzLmxpbmVOYW1lO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbWFpbk5hbWU6IHRoaXMuZG9tYWluTmFtZSxcbiAgICAgICAgICAgIGlwU2VnbWVudDogdGhpcy5pcFNlZ21lbnQsXG4gICAgICAgICAgICBsaW5lTmFtZTogdGhpcy5saW5lTmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ3VzdG9tTGluZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0N1c3RvbUxpbmUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIElwU2VnbWVudFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydElwOiBUaGUgc3RhcnQgSVAgYWRkcmVzcyBvZiB0aGUgc2VnbWVudC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0SXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZW5kSXA6IFRoZSBlbmQgSVAgYWRkcmVzcyBvZiB0aGUgc2VnbWVudC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVuZElwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSXBTZWdtZW50UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYElwU2VnbWVudFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0N1c3RvbUxpbmVfSXBTZWdtZW50UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydElwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXJ0SXApKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuZElwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVuZElwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIklwU2VnbWVudFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpETlM6OkN1c3RvbUxpbmUuSXBTZWdtZW50YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJcFNlZ21lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RE5TOjpDdXN0b21MaW5lLklwU2VnbWVudGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDdXN0b21MaW5lSXBTZWdtZW50UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0N1c3RvbUxpbmVfSXBTZWdtZW50UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnU3RhcnRJcCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnRJcCksXG4gICAgICAnRW5kSXAnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuZElwKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0RvbWFpbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1kbnMtZG9tYWluXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRG9tYWluUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRvbWFpbk5hbWU6IERvbWFpbiBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgZG9tYWluTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwSWQ6IERvbWFpbiBuYW1lIGdyb3VwaW5nLCB0aGUgZGVmYXVsdCBpcyB0aGUgXCJkZWZhdWx0IGdyb3VwaW5nXCIgR3JvdXBJZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBncm91cCBpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zRG9tYWluLlRhZ3NQcm9wZXJ0eVtdO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0RvbWFpblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEb21haW5Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NEb21haW5Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc291cmNlR3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXNvdXJjZUdyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RvbWFpbk5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZG9tYWluTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZG9tYWluTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kb21haW5OYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy50YWdzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudGFncykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRhZ3MpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhZ3MubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zRG9tYWluX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMudGFncykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ncm91cElkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0RvbWFpblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpETlM6OkRvbWFpbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRG9tYWluUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkROUzo6RG9tYWluYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0RvbWFpblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zRG9tYWluUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0RvbWFpbk5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRvbWFpbk5hbWUpLFxuICAgICAgJ0dyb3VwSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdyb3VwSWQpLFxuICAgICAgJ1Jlc291cmNlR3JvdXBJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSxcbiAgICAgICdUYWdzJzogcm9zLmxpc3RNYXBwZXIocm9zRG9tYWluVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50YWdzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpETlM6OkRvbWFpbmAsIHdoaWNoIGlzIHVzZWQgdG8gYWRkIGEgZG9tYWluIG5hbWUuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYERvbWFpbmAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZG5zLWRvbWFpblxuICovXG5leHBvcnQgY2xhc3MgUm9zRG9tYWluIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpETlM6OkRvbWFpblwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcm46IFRoZSBBbGliYWJhIENsb3VkIFJlc291cmNlIE5hbWUgKEFSTikuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcm46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRG5zU2VydmVyczogVGhlIEROUyBsaXN0IGZvciB0aGUgZG9tYWluIG5hbWUgdW5kZXIgcmVzb2x1dGlvblxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRG5zU2VydmVyczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEb21haW5JZDogRG9tYWluIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEb21haW5JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEb21haW5OYW1lOiBEb21haW4gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRG9tYWluTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBHcm91cElkOiBEb21haW4gbmFtZSBncm91cCBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBHcm91cE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBkb21haW4gbmFtZSBncm91cFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFB1bnlDb2RlOiBwdW55Y29kZSByZXR1cm5lZCBvbmx5IGZvciBhIENoaW5lc2UgZG9tYWluIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clB1bnlDb2RlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW5OYW1lOiBEb21haW4gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBkb21haW5OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogRG9tYWluIG5hbWUgZ3JvdXBpbmcsIHRoZSBkZWZhdWx0IGlzIHRoZSBcImRlZmF1bHQgZ3JvdXBpbmdcIiBHcm91cElkXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNvdXJjZUdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBpbnN0YW5jZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyB0YWdzOiBSb3NEb21haW4uVGFnc1Byb3BlcnR5W10gfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRG9tYWluUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NEb21haW4uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFybiA9IHRoaXMuZ2V0QXR0KCdBcm4nKTtcbiAgICAgICAgdGhpcy5hdHRyRG5zU2VydmVycyA9IHRoaXMuZ2V0QXR0KCdEbnNTZXJ2ZXJzJyk7XG4gICAgICAgIHRoaXMuYXR0ckRvbWFpbklkID0gdGhpcy5nZXRBdHQoJ0RvbWFpbklkJyk7XG4gICAgICAgIHRoaXMuYXR0ckRvbWFpbk5hbWUgPSB0aGlzLmdldEF0dCgnRG9tYWluTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJHcm91cElkID0gdGhpcy5nZXRBdHQoJ0dyb3VwSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyR3JvdXBOYW1lID0gdGhpcy5nZXRBdHQoJ0dyb3VwTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJQdW55Q29kZSA9IHRoaXMuZ2V0QXR0KCdQdW55Q29kZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kb21haW5OYW1lID0gcHJvcHMuZG9tYWluTmFtZTtcbiAgICAgICAgdGhpcy5ncm91cElkID0gcHJvcHMuZ3JvdXBJZDtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUdyb3VwSWQgPSBwcm9wcy5yZXNvdXJjZUdyb3VwSWQ7XG4gICAgICAgIHRoaXMudGFncyA9IHByb3BzLnRhZ3M7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9tYWluTmFtZTogdGhpcy5kb21haW5OYW1lLFxuICAgICAgICAgICAgZ3JvdXBJZDogdGhpcy5ncm91cElkLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiB0aGlzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMudGFncyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zRG9tYWluUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRG9tYWluIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBUYWdzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGtleTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0RvbWFpbl9UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJUYWdzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkROUzo6RG9tYWluLlRhZ3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RE5TOjpEb21haW4uVGFnc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NEb21haW5UYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0RvbWFpbl9UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVmFsdWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZhbHVlKSxcbiAgICAgICdLZXknOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NEb21haW5BdHRhY2htZW50YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWRucy1kb21haW5hdHRhY2htZW50XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRG9tYWluQXR0YWNobWVudFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW5OYW1lczogVGhlIGxpc3Qgb2YgZG9tYWluIG5hbWVzIHRvIGF0dGFjaC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkb21haW5OYW1lczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NEb21haW5BdHRhY2htZW50UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0RvbWFpbkF0dGFjaG1lbnRQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NEb21haW5BdHRhY2htZW50UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZG9tYWluTmFtZXMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZG9tYWluTmFtZXMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRvbWFpbk5hbWVzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZG9tYWluTmFtZXMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5kb21haW5OYW1lcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RvbWFpbk5hbWVzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRvbWFpbk5hbWVzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkb21haW5OYW1lcycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuZG9tYWluTmFtZXMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRG9tYWluQXR0YWNobWVudFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpETlM6OkRvbWFpbkF0dGFjaG1lbnRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0RvbWFpbkF0dGFjaG1lbnRQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RE5TOjpEb21haW5BdHRhY2htZW50YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0RvbWFpbkF0dGFjaG1lbnRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0RvbWFpbkF0dGFjaG1lbnRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnRG9tYWluTmFtZXMnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5kb21haW5OYW1lcyksXG4gICAgICAnSW5zdGFuY2VJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6RE5TOjpEb21haW5BdHRhY2htZW50YC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgRG9tYWluQXR0YWNobWVudGAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZG5zLWRvbWFpbmF0dGFjaG1lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0RvbWFpbkF0dGFjaG1lbnQgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkROUzo6RG9tYWluQXR0YWNobWVudFwiO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZG9tYWluTmFtZXM6IFRoZSBsaXN0IG9mIGRvbWFpbiBuYW1lcyB0byBhdHRhY2guXG4gICAgICovXG4gICAgcHVibGljIGRvbWFpbk5hbWVzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NEb21haW5BdHRhY2htZW50UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NEb21haW5BdHRhY2htZW50LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kb21haW5OYW1lcyA9IHByb3BzLmRvbWFpbk5hbWVzO1xuICAgICAgICB0aGlzLmluc3RhbmNlSWQgPSBwcm9wcy5pbnN0YW5jZUlkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbWFpbk5hbWVzOiB0aGlzLmRvbWFpbk5hbWVzLFxuICAgICAgICAgICAgaW5zdGFuY2VJZDogdGhpcy5pbnN0YW5jZUlkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NEb21haW5BdHRhY2htZW50UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zRG9tYWluR3JvdXBgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZG5zLWRvbWFpbmdyb3VwXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRG9tYWluR3JvdXBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBOYW1lOiBEb21haW4gbmFtZSBncm91cCBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zRG9tYWluR3JvdXBQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRG9tYWluR3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NEb21haW5Hcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmdyb3VwTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmdyb3VwTmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NEb21haW5Hcm91cFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpETlM6OkRvbWFpbkdyb3VwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEb21haW5Hcm91cFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpETlM6OkRvbWFpbkdyb3VwYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0RvbWFpbkdyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NEb21haW5Hcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdHcm91cE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdyb3VwTmFtZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6RE5TOjpEb21haW5Hcm91cGAsIHdoaWNoIGlzIHVzZWQgdG8gYWRkIGEgZG9tYWluIG5hbWUgZ3JvdXAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYERvbWFpbkdyb3VwYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1kbnMtZG9tYWluZ3JvdXBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0RvbWFpbkdyb3VwIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpETlM6OkRvbWFpbkdyb3VwXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEdyb3VwSWQ6IERvbWFpbiBuYW1lIGdyb3VwIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHcm91cElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cE5hbWU6IERvbWFpbiBuYW1lIGdyb3VwIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRG9tYWluR3JvdXBQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0RvbWFpbkdyb3VwLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJHcm91cElkID0gdGhpcy5nZXRBdHQoJ0dyb3VwSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZ3JvdXBOYW1lID0gcHJvcHMuZ3JvdXBOYW1lO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdyb3VwTmFtZTogdGhpcy5ncm91cE5hbWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0RvbWFpbkdyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zRG9tYWluUmVjb3JkYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWRucy1kb21haW5yZWNvcmRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NEb21haW5SZWNvcmRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZG9tYWluTmFtZTogRG9tYWluIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBkb21haW5OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcnI6IEhvc3QgcmVjb3JkLCBpZiB5b3Ugd2FudCB0byByZXNvbHZlIEAuZXhtYXBsZS5jb20sIHRoZSBob3N0IHJlY29yZCBzaG91bGQgZmlsbCBpbiBcIkBcIiBpbnN0ZWFkIG9mIGVtcHR5XG4gICAgICovXG4gICAgcmVhZG9ubHkgcnI6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0eXBlOiBQYXJzZSByZWNvcmQgdHlwZSwgc2VlIHBhcnNpbmcgcmVjb3JkIHR5cGUgZm9ybWF0XG4gICAgICovXG4gICAgcmVhZG9ubHkgdHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZhbHVlOiBSZWNvcmQgdmFsdWVcbiAgICAgKi9cbiAgICByZWFkb25seSB2YWx1ZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxpbmU6IFBhcnNlIHRoZSBsaW5lLCB0aGUgZGVmYXVsdCBpcyBkZWZhdWx0LiBTZWUgcGFyc2luZyBsaW5lIGVudW1lcmF0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGluZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmlvcml0eTogVGhlIHByaW9yaXR5IG9mIHRoZSBNWCByZWNvcmQsIHRoZSB2YWx1ZSByYW5nZSBbMSwxMF0sIHdoZW4gdGhlIHJlY29yZCB0eXBlIGlzIE1YIHJlY29yZCwgdGhpcyBwYXJhbWV0ZXIgbXVzdCBiZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaW9yaXR5PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHR0bDogVGhlIHJlc29sdXRpb24gdGltZSBpcyB2YWxpZC4gVGhlIGRlZmF1bHQgaXMgNjAwIHNlY29uZHMgKDEwIG1pbnV0ZXMpLiBTZWUgdGhlIFRUTCBkZWZpbml0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHR0bD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NEb21haW5SZWNvcmRQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRG9tYWluUmVjb3JkUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRG9tYWluUmVjb3JkUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdycicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ycikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucnIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xpbmUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubGluZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50eXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RvbWFpbk5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZG9tYWluTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZG9tYWluTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kb21haW5OYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5wcmlvcml0eSAmJiAodHlwZW9mIHByb3BlcnRpZXMucHJpb3JpdHkpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW9yaXR5Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucHJpb3JpdHksXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmlvcml0eScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wcmlvcml0eSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0dGwnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudHRsKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0RvbWFpblJlY29yZFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpETlM6OkRvbWFpblJlY29yZGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRG9tYWluUmVjb3JkUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkROUzo6RG9tYWluUmVjb3JkYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0RvbWFpblJlY29yZFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zRG9tYWluUmVjb3JkUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0RvbWFpbk5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRvbWFpbk5hbWUpLFxuICAgICAgJ1JSJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yciksXG4gICAgICAnVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHlwZSksXG4gICAgICAnVmFsdWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZhbHVlKSxcbiAgICAgICdMaW5lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5saW5lKSxcbiAgICAgICdQcmlvcml0eSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJpb3JpdHkpLFxuICAgICAgJ1RUTCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHRsKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpETlM6OkRvbWFpblJlY29yZGAsIHdoaWNoIGlzIHVzZWQgdG8gYWRkIGEgRG9tYWluIE5hbWUgU3lzdGVtIChETlMpIHJlY29yZC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgRG9tYWluUmVjb3JkYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1kbnMtZG9tYWlucmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NEb21haW5SZWNvcmQgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkROUzo6RG9tYWluUmVjb3JkXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlY29yZElkOiBQYXJzZSB0aGUgSUQgb2YgdGhlIHJlY29yZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVjb3JkSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRvbWFpbk5hbWU6IERvbWFpbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIGRvbWFpbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBycjogSG9zdCByZWNvcmQsIGlmIHlvdSB3YW50IHRvIHJlc29sdmUgQC5leG1hcGxlLmNvbSwgdGhlIGhvc3QgcmVjb3JkIHNob3VsZCBmaWxsIGluIFwiQFwiIGluc3RlYWQgb2YgZW1wdHlcbiAgICAgKi9cbiAgICBwdWJsaWMgcnI6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0eXBlOiBQYXJzZSByZWNvcmQgdHlwZSwgc2VlIHBhcnNpbmcgcmVjb3JkIHR5cGUgZm9ybWF0XG4gICAgICovXG4gICAgcHVibGljIHR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2YWx1ZTogUmVjb3JkIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGluZTogUGFyc2UgdGhlIGxpbmUsIHRoZSBkZWZhdWx0IGlzIGRlZmF1bHQuIFNlZSBwYXJzaW5nIGxpbmUgZW51bWVyYXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgbGluZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByaW9yaXR5OiBUaGUgcHJpb3JpdHkgb2YgdGhlIE1YIHJlY29yZCwgdGhlIHZhbHVlIHJhbmdlIFsxLDEwXSwgd2hlbiB0aGUgcmVjb3JkIHR5cGUgaXMgTVggcmVjb3JkLCB0aGlzIHBhcmFtZXRlciBtdXN0IGJlXG4gICAgICovXG4gICAgcHVibGljIHByaW9yaXR5OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHRsOiBUaGUgcmVzb2x1dGlvbiB0aW1lIGlzIHZhbGlkLiBUaGUgZGVmYXVsdCBpcyA2MDAgc2Vjb25kcyAoMTAgbWludXRlcykuIFNlZSB0aGUgVFRMIGRlZmluaXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHR0bDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0RvbWFpblJlY29yZFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRG9tYWluUmVjb3JkLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJSZWNvcmRJZCA9IHRoaXMuZ2V0QXR0KCdSZWNvcmRJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kb21haW5OYW1lID0gcHJvcHMuZG9tYWluTmFtZTtcbiAgICAgICAgdGhpcy5yciA9IHByb3BzLnJyO1xuICAgICAgICB0aGlzLnR5cGUgPSBwcm9wcy50eXBlO1xuICAgICAgICB0aGlzLnZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgICAgIHRoaXMubGluZSA9IHByb3BzLmxpbmU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcm9wcy5wcmlvcml0eTtcbiAgICAgICAgdGhpcy50dGwgPSBwcm9wcy50dGw7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9tYWluTmFtZTogdGhpcy5kb21haW5OYW1lLFxuICAgICAgICAgICAgcnI6IHRoaXMucnIsXG4gICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIGxpbmU6IHRoaXMubGluZSxcbiAgICAgICAgICAgIHByaW9yaXR5OiB0aGlzLnByaW9yaXR5LFxuICAgICAgICAgICAgdHRsOiB0aGlzLnR0bCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zRG9tYWluUmVjb3JkUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zSW5zdGFuY2VgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZG5zLWluc3RhbmNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zSW5zdGFuY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZG5zU2VjdXJpdHk6IFRoZSBETlMgc2VjdXJpdHkgcG9saWN5LiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBubzogTm8gcHJvdGVjdGlvbiBhZ2FpbnN0IEROUyBhdHRhY2tzIGlzIHByb3ZpZGVkLlxuICAgICAqIC0gYmFzaWM6IEJhc2ljIHByb3RlY3Rpb24gYWdhaW5zdCBETlMgYXR0YWNrcyBpcyBwcm92aWRlZC5cbiAgICAgKiAtIGFkdmFuY2VkOiBBZHZhbmNlZCBwcm90ZWN0aW9uIGFnYWluc3QgRE5TIGF0dGFja3MgaXMgcHJvdmlkZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZG5zU2VjdXJpdHk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW5OdW1iZXJzOiBUaGUgbnVtYmVyIG9mIGRvbWFpbiBuYW1lcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkb21haW5OdW1iZXJzOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVyaW9kOiBUaGUgc3Vic2NyaXB0aW9uIGR1cmF0aW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBJZiB1bml0IGlzIG1vbnRoOiAxLCAyLCAzLCA2XG4gICAgICogLSBJZiB1bml0IGlzIHllYXI6IDEsIDJcbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwZXJpb2RVbml0OiBUaGUgc3Vic2NyaXB0aW9uIGR1cmF0aW9uIHVuaXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kVW5pdDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZlcnNpb246IFRoZSBlZGl0aW9uIG9mIEFsaWJhYmEgQ2xvdWQgRE5TLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogSWYgY3JlYXRlIGhvc3RlZCBwdWJsaWMgem9uZTpcbiAgICAgKiAtIHZlcnNpb25fcGVyc29uYWw6IFBlcnNvbmFsIEVkaXRpb24uIFxuICAgICAqIC0gdmVyc2lvbl9lbnRlcnByaXNlX2Jhc2ljOiBFbnRlcnByaXNlIFN0YW5kYXJkIEVkaXRpb24uIFxuICAgICAqIC0gdmVyc2lvbl9lbnRlcnByaXNlX2FkdmFuY2VkOiBFbnRlcnByaXNlIFVsdGltYXRlIEVkaXRpb24uXG4gICAgICogSWYgY3JlYXRlIGNhY2hlZCBwdWJsaWMgem9uZTpcbiAgICAgKiAtIHZlcnNpb25fY2FjaGVkX2Jhc2ljKipOb3RlKio6IE9ubHkgdXBncmFkZSBvcGVyYXRpb25zIGFyZSBzdXBwb3J0ZWQgYWZ0ZXIgaW5zdGFuY2UgY3JlYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmVyc2lvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRvbWFpbjogVGhlIGRvbWFpbiBuYW1lIHRoYXQgeW91IHdhbnQgdG8gYmluZCB0byB0aGUgaW5zdGFuY2UuIElmIHlvdSB3YW50IHRvIGJpbmQgbXVsdGlwbGUgZG9tYWluIG5hbWVzIHRvIHRoZSBpbnN0YW5jZSwgc2VwYXJhdGUgdGhlc2UgZG9tYWluIG5hbWVzIHdpdGggY29tbWFzICgsKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkb21haW4/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VUeXBlOiBUaGUgdHlwZSBvZiB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIEhvc3RlZFB1YmxpY1pvbmU6IEhvc3RlZCBQdWJsaWMgWm9uZVxuICAgICAqIC0gQ2FjaGVkUHVibGljWm9uZTogQ2FjaGVkIFB1YmxpYyBab25lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZW5ld2FsU3RhdHVzOiBUaGUgcmVuZXdhbCBtZXRob2QuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIEF1dG9SZW5ld2FsOiBUaGUgaW5zdGFuY2UgaXMgYXV0b21hdGljYWxseSByZW5ld2VkLlxuICAgICAqIC0gTWFudWFsUmVuZXdhbDogVGhlIGluc3RhbmNlIGlzIG1hbnVhbGx5IHJlbmV3ZWQuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogTWFudWFsUmVuZXdhbC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZW5ld2FsU3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0luc3RhbmNlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0luc3RhbmNlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSW5zdGFuY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RvbWFpbk51bWJlcnMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZG9tYWluTnVtYmVycykpO1xuICAgIGlmKHByb3BlcnRpZXMuZG9tYWluTnVtYmVycyAmJiAodHlwZW9mIHByb3BlcnRpZXMuZG9tYWluTnVtYmVycykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZG9tYWluTnVtYmVycycsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRvbWFpbk51bWJlcnMsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZG9tYWluTnVtYmVycycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5kb21haW5OdW1iZXJzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkbnNTZWN1cml0eScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kbnNTZWN1cml0eSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZG5zU2VjdXJpdHkgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmRuc1NlY3VyaXR5KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkbnNTZWN1cml0eScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRuc1NlY3VyaXR5LFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIm5vXCIsXCJiYXNpY1wiLFwiYWR2YW5jZWRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkbnNTZWN1cml0eScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kbnNTZWN1cml0eSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmVyc2lvbicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52ZXJzaW9uKSk7XG4gICAgaWYocHJvcGVydGllcy52ZXJzaW9uICYmICh0eXBlb2YgcHJvcGVydGllcy52ZXJzaW9uKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2ZXJzaW9uJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudmVyc2lvbixcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJ2ZXJzaW9uX3BlcnNvbmFsXCIsXCJ2ZXJzaW9uX2VudGVycHJpc2VfYmFzaWNcIixcInZlcnNpb25fZW50ZXJwcmlzZV9hZHZhbmNlZFwiLFwidmVyc2lvbl9jYWNoZWRfYmFzaWNcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2ZXJzaW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZlcnNpb24pKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlbmV3YWxTdGF0dXMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlbmV3YWxTdGF0dXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlbmV3YWxTdGF0dXMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZW5ld2FsU3RhdHVzLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkF1dG9SZW5ld2FsXCIsXCJNYW51YWxSZW5ld2FsXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVuZXdhbFN0YXR1cycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZW5ld2FsU3RhdHVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2QnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucGVyaW9kKSk7XG4gICAgaWYocHJvcGVydGllcy5wZXJpb2QgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnBlcmlvZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVyaW9kJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucGVyaW9kLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFsxLDIsMyw2XSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wZXJpb2QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RvbWFpbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kb21haW4pKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluc3RhbmNlVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW5zdGFuY2VUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnN0YW5jZVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiSG9zdGVkUHVibGljWm9uZVwiLFwiQ2FjaGVkUHVibGljWm9uZVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZFVuaXQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucGVyaW9kVW5pdCkpO1xuICAgIGlmKHByb3BlcnRpZXMucGVyaW9kVW5pdCAmJiAodHlwZW9mIHByb3BlcnRpZXMucGVyaW9kVW5pdCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVyaW9kVW5pdCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBlcmlvZFVuaXQsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiWWVhclwiLFwiTW9udGhcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2RVbml0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBlcmlvZFVuaXQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zSW5zdGFuY2VQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RE5TOjpJbnN0YW5jZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSW5zdGFuY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RE5TOjpJbnN0YW5jZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NJbnN0YW5jZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zSW5zdGFuY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnRE5TU2VjdXJpdHknOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRuc1NlY3VyaXR5KSxcbiAgICAgICdEb21haW5OdW1iZXJzJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kb21haW5OdW1iZXJzKSxcbiAgICAgICdQZXJpb2QnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlcmlvZCksXG4gICAgICAnUGVyaW9kVW5pdCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGVyaW9kVW5pdCksXG4gICAgICAnVmVyc2lvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmVyc2lvbiksXG4gICAgICAnRG9tYWluJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kb21haW4pLFxuICAgICAgJ0luc3RhbmNlVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VUeXBlKSxcbiAgICAgICdSZW5ld2FsU3RhdHVzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZW5ld2FsU3RhdHVzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpETlM6Okluc3RhbmNlYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYW4gQWxpYmFiYSBDbG91ZCBETlMgaW5zdGFuY2UuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEluc3RhbmNlYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1kbnMtaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0luc3RhbmNlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpETlM6Okluc3RhbmNlXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlSWQ6IEROUyBpbnN0YW5jZSBpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRuc1NlY3VyaXR5OiBUaGUgRE5TIHNlY3VyaXR5IHBvbGljeS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gbm86IE5vIHByb3RlY3Rpb24gYWdhaW5zdCBETlMgYXR0YWNrcyBpcyBwcm92aWRlZC5cbiAgICAgKiAtIGJhc2ljOiBCYXNpYyBwcm90ZWN0aW9uIGFnYWluc3QgRE5TIGF0dGFja3MgaXMgcHJvdmlkZWQuXG4gICAgICogLSBhZHZhbmNlZDogQWR2YW5jZWQgcHJvdGVjdGlvbiBhZ2FpbnN0IEROUyBhdHRhY2tzIGlzIHByb3ZpZGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBkbnNTZWN1cml0eTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRvbWFpbk51bWJlcnM6IFRoZSBudW1iZXIgb2YgZG9tYWluIG5hbWVzLlxuICAgICAqL1xuICAgIHB1YmxpYyBkb21haW5OdW1iZXJzOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVyaW9kOiBUaGUgc3Vic2NyaXB0aW9uIGR1cmF0aW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBJZiB1bml0IGlzIG1vbnRoOiAxLCAyLCAzLCA2XG4gICAgICogLSBJZiB1bml0IGlzIHllYXI6IDEsIDJcbiAgICAgKi9cbiAgICBwdWJsaWMgcGVyaW9kOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVyaW9kVW5pdDogVGhlIHN1YnNjcmlwdGlvbiBkdXJhdGlvbiB1bml0LlxuICAgICAqL1xuICAgIHB1YmxpYyBwZXJpb2RVbml0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdmVyc2lvbjogVGhlIGVkaXRpb24gb2YgQWxpYmFiYSBDbG91ZCBETlMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBJZiBjcmVhdGUgaG9zdGVkIHB1YmxpYyB6b25lOlxuICAgICAqIC0gdmVyc2lvbl9wZXJzb25hbDogUGVyc29uYWwgRWRpdGlvbi4gXG4gICAgICogLSB2ZXJzaW9uX2VudGVycHJpc2VfYmFzaWM6IEVudGVycHJpc2UgU3RhbmRhcmQgRWRpdGlvbi4gXG4gICAgICogLSB2ZXJzaW9uX2VudGVycHJpc2VfYWR2YW5jZWQ6IEVudGVycHJpc2UgVWx0aW1hdGUgRWRpdGlvbi5cbiAgICAgKiBJZiBjcmVhdGUgY2FjaGVkIHB1YmxpYyB6b25lOlxuICAgICAqIC0gdmVyc2lvbl9jYWNoZWRfYmFzaWMqKk5vdGUqKjogT25seSB1cGdyYWRlIG9wZXJhdGlvbnMgYXJlIHN1cHBvcnRlZCBhZnRlciBpbnN0YW5jZSBjcmVhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgdmVyc2lvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRvbWFpbjogVGhlIGRvbWFpbiBuYW1lIHRoYXQgeW91IHdhbnQgdG8gYmluZCB0byB0aGUgaW5zdGFuY2UuIElmIHlvdSB3YW50IHRvIGJpbmQgbXVsdGlwbGUgZG9tYWluIG5hbWVzIHRvIHRoZSBpbnN0YW5jZSwgc2VwYXJhdGUgdGhlc2UgZG9tYWluIG5hbWVzIHdpdGggY29tbWFzICgsKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZG9tYWluOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VUeXBlOiBUaGUgdHlwZSBvZiB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIEhvc3RlZFB1YmxpY1pvbmU6IEhvc3RlZCBQdWJsaWMgWm9uZVxuICAgICAqIC0gQ2FjaGVkUHVibGljWm9uZTogQ2FjaGVkIFB1YmxpYyBab25lLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZW5ld2FsU3RhdHVzOiBUaGUgcmVuZXdhbCBtZXRob2QuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIEF1dG9SZW5ld2FsOiBUaGUgaW5zdGFuY2UgaXMgYXV0b21hdGljYWxseSByZW5ld2VkLlxuICAgICAqIC0gTWFudWFsUmVuZXdhbDogVGhlIGluc3RhbmNlIGlzIG1hbnVhbGx5IHJlbmV3ZWQuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogTWFudWFsUmVuZXdhbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVuZXdhbFN0YXR1czogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0luc3RhbmNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NJbnN0YW5jZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHRoaXMuZ2V0QXR0KCdJbnN0YW5jZUlkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRuc1NlY3VyaXR5ID0gcHJvcHMuZG5zU2VjdXJpdHk7XG4gICAgICAgIHRoaXMuZG9tYWluTnVtYmVycyA9IHByb3BzLmRvbWFpbk51bWJlcnM7XG4gICAgICAgIHRoaXMucGVyaW9kID0gcHJvcHMucGVyaW9kO1xuICAgICAgICB0aGlzLnBlcmlvZFVuaXQgPSBwcm9wcy5wZXJpb2RVbml0O1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBwcm9wcy52ZXJzaW9uO1xuICAgICAgICB0aGlzLmRvbWFpbiA9IHByb3BzLmRvbWFpbjtcbiAgICAgICAgdGhpcy5pbnN0YW5jZVR5cGUgPSBwcm9wcy5pbnN0YW5jZVR5cGU7XG4gICAgICAgIHRoaXMucmVuZXdhbFN0YXR1cyA9IHByb3BzLnJlbmV3YWxTdGF0dXM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG5zU2VjdXJpdHk6IHRoaXMuZG5zU2VjdXJpdHksXG4gICAgICAgICAgICBkb21haW5OdW1iZXJzOiB0aGlzLmRvbWFpbk51bWJlcnMsXG4gICAgICAgICAgICBwZXJpb2Q6IHRoaXMucGVyaW9kLFxuICAgICAgICAgICAgcGVyaW9kVW5pdDogdGhpcy5wZXJpb2RVbml0LFxuICAgICAgICAgICAgdmVyc2lvbjogdGhpcy52ZXJzaW9uLFxuICAgICAgICAgICAgZG9tYWluOiB0aGlzLmRvbWFpbixcbiAgICAgICAgICAgIGluc3RhbmNlVHlwZTogdGhpcy5pbnN0YW5jZVR5cGUsXG4gICAgICAgICAgICByZW5ld2FsU3RhdHVzOiB0aGlzLnJlbmV3YWxTdGF0dXMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0luc3RhbmNlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zTW9uaXRvckNvbmZpZ2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1kbnMtbW9uaXRvcmNvbmZpZ1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc01vbml0b3JDb25maWdQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWRkclBvb2xJZDogVGhlIElEIG9mIHRoZSBhZGRyZXNzIHBvb2wuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWRkclBvb2xJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGV2YWx1YXRpb25Db3VudDogVGhlIGV2YWx1YXRpb24gY291bnQgb2YgdGhlIG1vbml0b3IuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZXZhbHVhdGlvbkNvdW50OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJ2YWw6IFRoZSBpbnRlcnZhbCBvZiB0aGUgbW9uaXRvci5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcnZhbDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzcENpdHlOb2RlOiBUaGUgSVNQIGNpdHkgbm9kZSBsaXN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzcENpdHlOb2RlOiBBcnJheTxSb3NNb25pdG9yQ29uZmlnLklzcENpdHlOb2RlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1vbml0b3JFeHRlbmRJbmZvOiBUaGUgZXh0ZW5kIGluZm8gb2YgdGhlIG1vbml0b3IuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbW9uaXRvckV4dGVuZEluZm86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm90b2NvbFR5cGU6IFRoZSBwcm90b2NvbCB0eXBlIG9mIHRoZSBtb25pdG9yLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb3RvY29sVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRpbWVvdXQ6IFRoZSB0aW1lb3V0IG9mIHRoZSBtb25pdG9yLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWVvdXQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NNb25pdG9yQ29uZmlnUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc01vbml0b3JDb25maWdQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NNb25pdG9yQ29uZmlnUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc3BDaXR5Tm9kZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pc3BDaXR5Tm9kZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuaXNwQ2l0eU5vZGUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5pc3BDaXR5Tm9kZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmlzcENpdHlOb2RlKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNwQ2l0eU5vZGUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaXNwQ2l0eU5vZGUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDUwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc3BDaXR5Tm9kZScsIHJvcy5saXN0VmFsaWRhdG9yKFJvc01vbml0b3JDb25maWdfSXNwQ2l0eU5vZGVQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuaXNwQ2l0eU5vZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb3RvY29sVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wcm90b2NvbFR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb3RvY29sVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcm90b2NvbFR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGltZW91dCkpO1xuICAgIGlmKHByb3BlcnRpZXMudGltZW91dCAmJiAodHlwZW9mIHByb3BlcnRpZXMudGltZW91dCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRpbWVvdXQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwMDAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FkZHJQb29sSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYWRkclBvb2xJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWRkclBvb2xJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hZGRyUG9vbElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdldmFsdWF0aW9uQ291bnQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZXZhbHVhdGlvbkNvdW50KSk7XG4gICAgaWYocHJvcGVydGllcy5ldmFsdWF0aW9uQ291bnQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmV2YWx1YXRpb25Db3VudCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZXZhbHVhdGlvbkNvdW50Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZXZhbHVhdGlvbkNvdW50LFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAzLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdldmFsdWF0aW9uQ291bnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZXZhbHVhdGlvbkNvdW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb25pdG9yRXh0ZW5kSW5mbycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5tb25pdG9yRXh0ZW5kSW5mbykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW9uaXRvckV4dGVuZEluZm8nLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLm1vbml0b3JFeHRlbmRJbmZvKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcnZhbCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnRlcnZhbCkpO1xuICAgIGlmKHByb3BlcnRpZXMuaW50ZXJ2YWwgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmludGVydmFsKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcnZhbCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmludGVydmFsLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA2MCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50ZXJ2YWwnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaW50ZXJ2YWwpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTW9uaXRvckNvbmZpZ1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpETlM6Ok1vbml0b3JDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc01vbml0b3JDb25maWdQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RE5TOjpNb25pdG9yQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc01vbml0b3JDb25maWdQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc01vbml0b3JDb25maWdQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQWRkclBvb2xJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWRkclBvb2xJZCksXG4gICAgICAnRXZhbHVhdGlvbkNvdW50Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ldmFsdWF0aW9uQ291bnQpLFxuICAgICAgJ0ludGVydmFsJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRlcnZhbCksXG4gICAgICAnSXNwQ2l0eU5vZGUnOiByb3MubGlzdE1hcHBlcihyb3NNb25pdG9yQ29uZmlnSXNwQ2l0eU5vZGVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuaXNwQ2l0eU5vZGUpLFxuICAgICAgJ01vbml0b3JFeHRlbmRJbmZvJzogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMubW9uaXRvckV4dGVuZEluZm8pLFxuICAgICAgJ1Byb3RvY29sVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvdG9jb2xUeXBlKSxcbiAgICAgICdUaW1lb3V0Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lb3V0KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpETlM6Ok1vbml0b3JDb25maWdgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBNb25pdG9yQ29uZmlnYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1kbnMtbW9uaXRvcmNvbmZpZ1xuICovXG5leHBvcnQgY2xhc3MgUm9zTW9uaXRvckNvbmZpZyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RE5TOjpNb25pdG9yQ29uZmlnXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE1vbml0b3JDb25maWdJZDogVGhlIElEIG9mIHRoZSBtb25pdG9yIGNvbmZpZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1vbml0b3JDb25maWdJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWRkclBvb2xJZDogVGhlIElEIG9mIHRoZSBhZGRyZXNzIHBvb2wuXG4gICAgICovXG4gICAgcHVibGljIGFkZHJQb29sSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBldmFsdWF0aW9uQ291bnQ6IFRoZSBldmFsdWF0aW9uIGNvdW50IG9mIHRoZSBtb25pdG9yLlxuICAgICAqL1xuICAgIHB1YmxpYyBldmFsdWF0aW9uQ291bnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcnZhbDogVGhlIGludGVydmFsIG9mIHRoZSBtb25pdG9yLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcnZhbDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzcENpdHlOb2RlOiBUaGUgSVNQIGNpdHkgbm9kZSBsaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyBpc3BDaXR5Tm9kZTogQXJyYXk8Um9zTW9uaXRvckNvbmZpZy5Jc3BDaXR5Tm9kZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtb25pdG9yRXh0ZW5kSW5mbzogVGhlIGV4dGVuZCBpbmZvIG9mIHRoZSBtb25pdG9yLlxuICAgICAqL1xuICAgIHB1YmxpYyBtb25pdG9yRXh0ZW5kSW5mbzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb3RvY29sVHlwZTogVGhlIHByb3RvY29sIHR5cGUgb2YgdGhlIG1vbml0b3IuXG4gICAgICovXG4gICAgcHVibGljIHByb3RvY29sVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRpbWVvdXQ6IFRoZSB0aW1lb3V0IG9mIHRoZSBtb25pdG9yLlxuICAgICAqL1xuICAgIHB1YmxpYyB0aW1lb3V0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zTW9uaXRvckNvbmZpZ1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zTW9uaXRvckNvbmZpZy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyTW9uaXRvckNvbmZpZ0lkID0gdGhpcy5nZXRBdHQoJ01vbml0b3JDb25maWdJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5hZGRyUG9vbElkID0gcHJvcHMuYWRkclBvb2xJZDtcbiAgICAgICAgdGhpcy5ldmFsdWF0aW9uQ291bnQgPSBwcm9wcy5ldmFsdWF0aW9uQ291bnQ7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBwcm9wcy5pbnRlcnZhbDtcbiAgICAgICAgdGhpcy5pc3BDaXR5Tm9kZSA9IHByb3BzLmlzcENpdHlOb2RlO1xuICAgICAgICB0aGlzLm1vbml0b3JFeHRlbmRJbmZvID0gcHJvcHMubW9uaXRvckV4dGVuZEluZm87XG4gICAgICAgIHRoaXMucHJvdG9jb2xUeXBlID0gcHJvcHMucHJvdG9jb2xUeXBlO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBwcm9wcy50aW1lb3V0O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJQb29sSWQ6IHRoaXMuYWRkclBvb2xJZCxcbiAgICAgICAgICAgIGV2YWx1YXRpb25Db3VudDogdGhpcy5ldmFsdWF0aW9uQ291bnQsXG4gICAgICAgICAgICBpbnRlcnZhbDogdGhpcy5pbnRlcnZhbCxcbiAgICAgICAgICAgIGlzcENpdHlOb2RlOiB0aGlzLmlzcENpdHlOb2RlLFxuICAgICAgICAgICAgbW9uaXRvckV4dGVuZEluZm86IHRoaXMubW9uaXRvckV4dGVuZEluZm8sXG4gICAgICAgICAgICBwcm90b2NvbFR5cGU6IHRoaXMucHJvdG9jb2xUeXBlLFxuICAgICAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NNb25pdG9yQ29uZmlnUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zTW9uaXRvckNvbmZpZyB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSXNwQ2l0eU5vZGVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY2l0eUNvZGU6IFRoZSBjaXR5IGNvZGUgb2YgdGhlIElTUCBjaXR5IG5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjaXR5Q29kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpc3BDb2RlOiBUaGUgSVNQIGNvZGUgb2YgdGhlIElTUCBjaXR5IG5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpc3BDb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSXNwQ2l0eU5vZGVQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSXNwQ2l0eU5vZGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NNb25pdG9yQ29uZmlnX0lzcENpdHlOb2RlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjaXR5Q29kZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jaXR5Q29kZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNwQ29kZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pc3BDb2RlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIklzcENpdHlOb2RlUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkROUzo6TW9uaXRvckNvbmZpZy5Jc3BDaXR5Tm9kZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSXNwQ2l0eU5vZGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RE5TOjpNb25pdG9yQ29uZmlnLklzcENpdHlOb2RlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc01vbml0b3JDb25maWdJc3BDaXR5Tm9kZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NNb25pdG9yQ29uZmlnX0lzcENpdHlOb2RlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQ2l0eUNvZGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNpdHlDb2RlKSxcbiAgICAgICdJc3BDb2RlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pc3BDb2RlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1JlY292ZXJ5UGxhbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1kbnMtcmVjb3ZlcnlwbGFuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zUmVjb3ZlcnlQbGFuUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZhdWx0QWRkclBvb2w6IFRoZSBmYXVsdCBhZGRyZXNzIHBvb2wgb2YgdGhlIHJlY292ZXJ5IHBsYW4uIFRoZSB2YWx1ZSBtdXN0IGJlIGVuY29kZWQgaW4gVVRGLTguXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmF1bHRBZGRyUG9vbDogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgcmVjb3ZlcnkgcGxhbi4gVGhlIHZhbHVlIGNhbiBiZSB1cCB0byAxMjggYnl0ZXMgaW4gbGVuZ3RoLiBUaGUgdmFsdWUgbXVzdCBiZSBlbmNvZGVkIGluIFVURi04LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsYW5nOiBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGFuZz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZW1hcms6IFRoZSByZW1hcmsgb2YgdGhlIHJlY292ZXJ5IHBsYW4uIFRoZSB2YWx1ZSBjYW4gYmUgdXAgdG8gMjU2IGJ5dGVzIGluIGxlbmd0aC4gVGhlIHZhbHVlIG11c3QgYmUgZW5jb2RlZCBpbiBVVEYtOC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZW1hcms/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUmVjb3ZlcnlQbGFuUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1JlY292ZXJ5UGxhblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1JlY292ZXJ5UGxhblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGFuZycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sYW5nKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmYXVsdEFkZHJQb29sJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmZhdWx0QWRkclBvb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZhdWx0QWRkclBvb2wnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmZhdWx0QWRkclBvb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZW1hcmsnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVtYXJrKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1JlY292ZXJ5UGxhblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpETlM6OlJlY292ZXJ5UGxhbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUmVjb3ZlcnlQbGFuUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkROUzo6UmVjb3ZlcnlQbGFuYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1JlY292ZXJ5UGxhblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zUmVjb3ZlcnlQbGFuUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0ZhdWx0QWRkclBvb2wnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5mYXVsdEFkZHJQb29sKSxcbiAgICAgICdOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICAgICdMYW5nJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sYW5nKSxcbiAgICAgICdSZW1hcmsnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlbWFyayksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6RE5TOjpSZWNvdmVyeVBsYW5gLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBSZWNvdmVyeVBsYW5gIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWRucy1yZWNvdmVyeXBsYW5cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1JlY292ZXJ5UGxhbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RE5TOjpSZWNvdmVyeVBsYW5cIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVjb3ZlcnlQbGFuSWQ6IFRoZSBJRCBvZiB0aGUgcmVjb3ZlcnkgcGxhbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlY292ZXJ5UGxhbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmYXVsdEFkZHJQb29sOiBUaGUgZmF1bHQgYWRkcmVzcyBwb29sIG9mIHRoZSByZWNvdmVyeSBwbGFuLiBUaGUgdmFsdWUgbXVzdCBiZSBlbmNvZGVkIGluIFVURi04LlxuICAgICAqL1xuICAgIHB1YmxpYyBmYXVsdEFkZHJQb29sOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSByZWNvdmVyeSBwbGFuLiBUaGUgdmFsdWUgY2FuIGJlIHVwIHRvIDEyOCBieXRlcyBpbiBsZW5ndGguIFRoZSB2YWx1ZSBtdXN0IGJlIGVuY29kZWQgaW4gVVRGLTguXG4gICAgICovXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsYW5nOiBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgcHVibGljIGxhbmc6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZW1hcms6IFRoZSByZW1hcmsgb2YgdGhlIHJlY292ZXJ5IHBsYW4uIFRoZSB2YWx1ZSBjYW4gYmUgdXAgdG8gMjU2IGJ5dGVzIGluIGxlbmd0aC4gVGhlIHZhbHVlIG11c3QgYmUgZW5jb2RlZCBpbiBVVEYtOC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtYXJrOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zUmVjb3ZlcnlQbGFuUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NSZWNvdmVyeVBsYW4uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clJlY292ZXJ5UGxhbklkID0gdGhpcy5nZXRBdHQoJ1JlY292ZXJ5UGxhbklkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmZhdWx0QWRkclBvb2wgPSBwcm9wcy5mYXVsdEFkZHJQb29sO1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgICAgICB0aGlzLmxhbmcgPSBwcm9wcy5sYW5nO1xuICAgICAgICB0aGlzLnJlbWFyayA9IHByb3BzLnJlbWFyaztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmYXVsdEFkZHJQb29sOiB0aGlzLmZhdWx0QWRkclBvb2wsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICBsYW5nOiB0aGlzLmxhbmcsXG4gICAgICAgICAgICByZW1hcms6IHRoaXMucmVtYXJrLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NSZWNvdmVyeVBsYW5Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==