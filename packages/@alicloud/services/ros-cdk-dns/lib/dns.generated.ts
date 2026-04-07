// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccessStrategy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-accessstrategy
 */
export interface RosAccessStrategyProps {

    /**
     * @Property defaultAddrPool: The default address pool of the access strategy.
     */
    readonly defaultAddrPool: Array<RosAccessStrategy.DefaultAddrPoolProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property defaultAddrPoolType: The type of the default address pool.
     */
    readonly defaultAddrPoolType: string | ros.IResolvable;

    /**
     * @Property defaultMinAvailableAddrNum: The minimum available address number of the default address pool.
     */
    readonly defaultMinAvailableAddrNum: number | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the Dns instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property strategyMode: The mode of the access strategy.
     */
    readonly strategyMode: string | ros.IResolvable;

    /**
     * @Property strategyName: The name of the access strategy.
     */
    readonly strategyName: string | ros.IResolvable;

    /**
     * @Property accessMode: The access mode of the access strategy.
     */
    readonly accessMode?: string | ros.IResolvable;

    /**
     * @Property defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.
     */
    readonly defaultLatencyOptimization?: string | ros.IResolvable;

    /**
     * @Property defaultLbaStrategy: The load balancing strategy of the default address pool.
     */
    readonly defaultLbaStrategy?: string | ros.IResolvable;

    /**
     * @Property defaultMaxReturnAddrNum: The maximum return address number of the default address pool.
     */
    readonly defaultMaxReturnAddrNum?: number | ros.IResolvable;

    /**
     * @Property failoverAddrPool: The failover address pool of the access strategy.
     */
    readonly failoverAddrPool?: Array<RosAccessStrategy.FailoverAddrPoolProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property failoverAddrPoolType: The type of the failover address pool.
     */
    readonly failoverAddrPoolType?: string | ros.IResolvable;

    /**
     * @Property failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.
     */
    readonly failoverLatencyOptimization?: string | ros.IResolvable;

    /**
     * @Property failoverLbaStrategy: The load balancing strategy of the failover address pool.
     */
    readonly failoverLbaStrategy?: string | ros.IResolvable;

    /**
     * @Property failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.
     */
    readonly failoverMaxReturnAddrNum?: number | ros.IResolvable;

    /**
     * @Property failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.
     */
    readonly failoverMinAvailableAddrNum?: number | ros.IResolvable;

    /**
     * @Property lines: The lines of the access strategy.
     */
    readonly lines?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccessStrategyProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessStrategyProps`
 *
 * @returns the result of the validation.
 */
function RosAccessStrategyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.failoverMinAvailableAddrNum && (typeof properties.failoverMinAvailableAddrNum) !== 'object') {
        errors.collect(ros.propertyValidator('failoverMinAvailableAddrNum', ros.validateRange)({
            data: properties.failoverMinAvailableAddrNum,
            min: 1,
            max: 400,
          }));
    }
    errors.collect(ros.propertyValidator('failoverMinAvailableAddrNum', ros.validateNumber)(properties.failoverMinAvailableAddrNum));
    errors.collect(ros.propertyValidator('defaultAddrPoolType', ros.requiredValidator)(properties.defaultAddrPoolType));
    if(properties.defaultAddrPoolType && (typeof properties.defaultAddrPoolType) !== 'object') {
        errors.collect(ros.propertyValidator('defaultAddrPoolType', ros.validateAllowedValues)({
          data: properties.defaultAddrPoolType,
          allowedValues: ["IPV4","IPV6","DOMAIN"],
        }));
    }
    errors.collect(ros.propertyValidator('defaultAddrPoolType', ros.validateString)(properties.defaultAddrPoolType));
    if(properties.failoverAddrPoolType && (typeof properties.failoverAddrPoolType) !== 'object') {
        errors.collect(ros.propertyValidator('failoverAddrPoolType', ros.validateAllowedValues)({
          data: properties.failoverAddrPoolType,
          allowedValues: ["IPV4","IPV6","DOMAIN"],
        }));
    }
    errors.collect(ros.propertyValidator('failoverAddrPoolType', ros.validateString)(properties.failoverAddrPoolType));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.defaultLatencyOptimization && (typeof properties.defaultLatencyOptimization) !== 'object') {
        errors.collect(ros.propertyValidator('defaultLatencyOptimization', ros.validateAllowedValues)({
          data: properties.defaultLatencyOptimization,
          allowedValues: ["OPEN","CLOSE"],
        }));
    }
    errors.collect(ros.propertyValidator('defaultLatencyOptimization', ros.validateString)(properties.defaultLatencyOptimization));
    if(properties.failoverAddrPool && (Array.isArray(properties.failoverAddrPool) || (typeof properties.failoverAddrPool) === 'string')) {
        errors.collect(ros.propertyValidator('failoverAddrPool', ros.validateLength)({
            data: properties.failoverAddrPool.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('failoverAddrPool', ros.listValidator(RosAccessStrategy_FailoverAddrPoolPropertyValidator))(properties.failoverAddrPool));
    errors.collect(ros.propertyValidator('defaultMinAvailableAddrNum', ros.requiredValidator)(properties.defaultMinAvailableAddrNum));
    if(properties.defaultMinAvailableAddrNum && (typeof properties.defaultMinAvailableAddrNum) !== 'object') {
        errors.collect(ros.propertyValidator('defaultMinAvailableAddrNum', ros.validateRange)({
            data: properties.defaultMinAvailableAddrNum,
            min: 1,
            max: 400,
          }));
    }
    errors.collect(ros.propertyValidator('defaultMinAvailableAddrNum', ros.validateNumber)(properties.defaultMinAvailableAddrNum));
    if(properties.failoverLatencyOptimization && (typeof properties.failoverLatencyOptimization) !== 'object') {
        errors.collect(ros.propertyValidator('failoverLatencyOptimization', ros.validateAllowedValues)({
          data: properties.failoverLatencyOptimization,
          allowedValues: ["OPEN","CLOSE"],
        }));
    }
    errors.collect(ros.propertyValidator('failoverLatencyOptimization', ros.validateString)(properties.failoverLatencyOptimization));
    errors.collect(ros.propertyValidator('defaultAddrPool', ros.requiredValidator)(properties.defaultAddrPool));
    if(properties.defaultAddrPool && (Array.isArray(properties.defaultAddrPool) || (typeof properties.defaultAddrPool) === 'string')) {
        errors.collect(ros.propertyValidator('defaultAddrPool', ros.validateLength)({
            data: properties.defaultAddrPool.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('defaultAddrPool', ros.listValidator(RosAccessStrategy_DefaultAddrPoolPropertyValidator))(properties.defaultAddrPool));
    errors.collect(ros.propertyValidator('strategyName', ros.requiredValidator)(properties.strategyName));
    errors.collect(ros.propertyValidator('strategyName', ros.validateString)(properties.strategyName));
    if(properties.failoverLbaStrategy && (typeof properties.failoverLbaStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('failoverLbaStrategy', ros.validateAllowedValues)({
          data: properties.failoverLbaStrategy,
          allowedValues: ["ALL_RR","RATIO"],
        }));
    }
    errors.collect(ros.propertyValidator('failoverLbaStrategy', ros.validateString)(properties.failoverLbaStrategy));
    if(properties.failoverMaxReturnAddrNum && (typeof properties.failoverMaxReturnAddrNum) !== 'object') {
        errors.collect(ros.propertyValidator('failoverMaxReturnAddrNum', ros.validateRange)({
            data: properties.failoverMaxReturnAddrNum,
            min: 1,
            max: 8,
          }));
    }
    errors.collect(ros.propertyValidator('failoverMaxReturnAddrNum', ros.validateNumber)(properties.failoverMaxReturnAddrNum));
    if(properties.defaultMaxReturnAddrNum && (typeof properties.defaultMaxReturnAddrNum) !== 'object') {
        errors.collect(ros.propertyValidator('defaultMaxReturnAddrNum', ros.validateRange)({
            data: properties.defaultMaxReturnAddrNum,
            min: 1,
            max: 8,
          }));
    }
    errors.collect(ros.propertyValidator('defaultMaxReturnAddrNum', ros.validateNumber)(properties.defaultMaxReturnAddrNum));
    errors.collect(ros.propertyValidator('accessMode', ros.validateString)(properties.accessMode));
    errors.collect(ros.propertyValidator('strategyMode', ros.requiredValidator)(properties.strategyMode));
    if(properties.strategyMode && (typeof properties.strategyMode) !== 'object') {
        errors.collect(ros.propertyValidator('strategyMode', ros.validateAllowedValues)({
          data: properties.strategyMode,
          allowedValues: ["GEO","LATENCY"],
        }));
    }
    errors.collect(ros.propertyValidator('strategyMode', ros.validateString)(properties.strategyMode));
    if(properties.defaultLbaStrategy && (typeof properties.defaultLbaStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('defaultLbaStrategy', ros.validateAllowedValues)({
          data: properties.defaultLbaStrategy,
          allowedValues: ["ALL_RR","RATIO"],
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
function rosAccessStrategyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosAccessStrategy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::AccessStrategy";

    /**
     * @Attribute StrategyId: The ID of the access strategy.
     */
    public readonly attrStrategyId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property defaultAddrPool: The default address pool of the access strategy.
     */
    public defaultAddrPool: Array<RosAccessStrategy.DefaultAddrPoolProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property defaultAddrPoolType: The type of the default address pool.
     */
    public defaultAddrPoolType: string | ros.IResolvable;

    /**
     * @Property defaultMinAvailableAddrNum: The minimum available address number of the default address pool.
     */
    public defaultMinAvailableAddrNum: number | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the Dns instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property strategyMode: The mode of the access strategy.
     */
    public strategyMode: string | ros.IResolvable;

    /**
     * @Property strategyName: The name of the access strategy.
     */
    public strategyName: string | ros.IResolvable;

    /**
     * @Property accessMode: The access mode of the access strategy.
     */
    public accessMode: string | ros.IResolvable | undefined;

    /**
     * @Property defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.
     */
    public defaultLatencyOptimization: string | ros.IResolvable | undefined;

    /**
     * @Property defaultLbaStrategy: The load balancing strategy of the default address pool.
     */
    public defaultLbaStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property defaultMaxReturnAddrNum: The maximum return address number of the default address pool.
     */
    public defaultMaxReturnAddrNum: number | ros.IResolvable | undefined;

    /**
     * @Property failoverAddrPool: The failover address pool of the access strategy.
     */
    public failoverAddrPool: Array<RosAccessStrategy.FailoverAddrPoolProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property failoverAddrPoolType: The type of the failover address pool.
     */
    public failoverAddrPoolType: string | ros.IResolvable | undefined;

    /**
     * @Property failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.
     */
    public failoverLatencyOptimization: string | ros.IResolvable | undefined;

    /**
     * @Property failoverLbaStrategy: The load balancing strategy of the failover address pool.
     */
    public failoverLbaStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.
     */
    public failoverMaxReturnAddrNum: number | ros.IResolvable | undefined;

    /**
     * @Property failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.
     */
    public failoverMinAvailableAddrNum: number | ros.IResolvable | undefined;

    /**
     * @Property lines: The lines of the access strategy.
     */
    public lines: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessStrategyProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
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
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessStrategyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAccessStrategy {
    /**
     * @stability external
     */
    export interface DefaultAddrPoolProperty {
        /**
         * @Property lbaWeight: The load balancing weight of the address pool.
         */
        readonly lbaWeight?: number | ros.IResolvable;
        /**
         * @Property identity: The ID of the address pool.
         */
        readonly identity?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DefaultAddrPoolProperty`
 *
 * @param properties - the TypeScript properties of a `DefaultAddrPoolProperty`
 *
 * @returns the result of the validation.
 */
function RosAccessStrategy_DefaultAddrPoolPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosAccessStrategyDefaultAddrPoolPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAccessStrategy_DefaultAddrPoolPropertyValidator(properties).assertSuccess();
    return {
      'LbaWeight': ros.numberToRosTemplate(properties.lbaWeight),
      'Id': ros.stringToRosTemplate(properties.identity),
    };
}

export namespace RosAccessStrategy {
    /**
     * @stability external
     */
    export interface FailoverAddrPoolProperty {
        /**
         * @Property lbaWeight: The load balancing weight of the address pool.
         */
        readonly lbaWeight?: number | ros.IResolvable;
        /**
         * @Property identity: The ID of the address pool.
         */
        readonly identity?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `FailoverAddrPoolProperty`
 *
 * @param properties - the TypeScript properties of a `FailoverAddrPoolProperty`
 *
 * @returns the result of the validation.
 */
function RosAccessStrategy_FailoverAddrPoolPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosAccessStrategyFailoverAddrPoolPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAccessStrategy_FailoverAddrPoolPropertyValidator(properties).assertSuccess();
    return {
      'LbaWeight': ros.numberToRosTemplate(properties.lbaWeight),
      'Id': ros.stringToRosTemplate(properties.identity),
    };
}

/**
 * Properties for defining a `RosAddressPool`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool
 */
export interface RosAddressPoolProps {

    /**
     * @Property addr: The list of addresses in the address pool.
     */
    readonly addr: Array<RosAddressPool.AddrProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the GTM instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property lbaStrategy: The load balancing strategy. Valid values: RoundRobin, Weighted, FallbackToFirst.
     */
    readonly lbaStrategy: string | ros.IResolvable;

    /**
     * @Property name: The name of the address pool.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property type: The type of the address pool. Valid values: Ipv4, Ipv6, Domain.
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy.
     */
    readonly evaluationCount?: number | ros.IResolvable;

    /**
     * @Property interval: The interval between two consecutive health checks, in seconds.
     */
    readonly interval?: number | ros.IResolvable;

    /**
     * @Property ispCityNode: The list of ISP city nodes.
     */
    readonly ispCityNode?: Array<RosAddressPool.IspCityNodeProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property monitorExtendInfo: The extended information of the health check.
     */
    readonly monitorExtendInfo?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property monitorStatus: The monitoring status of the address pool.
     */
    readonly monitorStatus?: string | ros.IResolvable;

    /**
     * @Property protocolType: The protocol type.
     */
    readonly protocolType?: string | ros.IResolvable;

    /**
     * @Property timeout: The timeout period of a health check, in seconds.
     */
    readonly timeout?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAddressPoolProps`
 *
 * @param properties - the TypeScript properties of a `RosAddressPoolProps`
 *
 * @returns the result of the validation.
 */
function RosAddressPoolPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.ispCityNode && (Array.isArray(properties.ispCityNode) || (typeof properties.ispCityNode) === 'string')) {
        errors.collect(ros.propertyValidator('ispCityNode', ros.validateLength)({
            data: properties.ispCityNode.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('ispCityNode', ros.listValidator(RosAddressPool_IspCityNodePropertyValidator))(properties.ispCityNode));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["IPV4","IPV6","DOMAIN"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('lbaStrategy', ros.requiredValidator)(properties.lbaStrategy));
    if(properties.lbaStrategy && (typeof properties.lbaStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('lbaStrategy', ros.validateAllowedValues)({
          data: properties.lbaStrategy,
          allowedValues: ["ALL_RR","RATIO"],
        }));
    }
    errors.collect(ros.propertyValidator('lbaStrategy', ros.validateString)(properties.lbaStrategy));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.protocolType && (typeof properties.protocolType) !== 'object') {
        errors.collect(ros.propertyValidator('protocolType', ros.validateAllowedValues)({
          data: properties.protocolType,
          allowedValues: ["TCP","HTTP","HTTPS","PING"],
        }));
    }
    errors.collect(ros.propertyValidator('protocolType', ros.validateString)(properties.protocolType));
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 1,
            max: 9999999,
          }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    if(properties.evaluationCount && (typeof properties.evaluationCount) !== 'object') {
        errors.collect(ros.propertyValidator('evaluationCount', ros.validateRange)({
            data: properties.evaluationCount,
            min: 1,
            max: 9999999,
          }));
    }
    errors.collect(ros.propertyValidator('evaluationCount', ros.validateNumber)(properties.evaluationCount));
    errors.collect(ros.propertyValidator('monitorExtendInfo', ros.hashValidator(ros.validateAny))(properties.monitorExtendInfo));
    if(properties.monitorStatus && (typeof properties.monitorStatus) !== 'object') {
        errors.collect(ros.propertyValidator('monitorStatus', ros.validateAllowedValues)({
          data: properties.monitorStatus,
          allowedValues: ["OPEN","CLOSE"],
        }));
    }
    errors.collect(ros.propertyValidator('monitorStatus', ros.validateString)(properties.monitorStatus));
    errors.collect(ros.propertyValidator('addr', ros.requiredValidator)(properties.addr));
    if(properties.addr && (Array.isArray(properties.addr) || (typeof properties.addr) === 'string')) {
        errors.collect(ros.propertyValidator('addr', ros.validateLength)({
            data: properties.addr.length,
            min: 1,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('addr', ros.listValidator(RosAddressPool_AddrPropertyValidator))(properties.addr));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if(properties.interval && (typeof properties.interval) !== 'object') {
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
function rosAddressPoolPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosAddressPool extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::AddressPool";

    /**
     * @Attribute AddrPoolId: The ID of the address pool.
     */
    public readonly attrAddrPoolId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property addr: The list of addresses in the address pool.
     */
    public addr: Array<RosAddressPool.AddrProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the GTM instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property lbaStrategy: The load balancing strategy. Valid values: RoundRobin, Weighted, FallbackToFirst.
     */
    public lbaStrategy: string | ros.IResolvable;

    /**
     * @Property name: The name of the address pool.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property type: The type of the address pool. Valid values: Ipv4, Ipv6, Domain.
     */
    public type: string | ros.IResolvable;

    /**
     * @Property evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy.
     */
    public evaluationCount: number | ros.IResolvable | undefined;

    /**
     * @Property interval: The interval between two consecutive health checks, in seconds.
     */
    public interval: number | ros.IResolvable | undefined;

    /**
     * @Property ispCityNode: The list of ISP city nodes.
     */
    public ispCityNode: Array<RosAddressPool.IspCityNodeProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property monitorExtendInfo: The extended information of the health check.
     */
    public monitorExtendInfo: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property monitorStatus: The monitoring status of the address pool.
     */
    public monitorStatus: string | ros.IResolvable | undefined;

    /**
     * @Property protocolType: The protocol type.
     */
    public protocolType: string | ros.IResolvable | undefined;

    /**
     * @Property timeout: The timeout period of a health check, in seconds.
     */
    public timeout: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAddressPoolProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
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
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAddressPoolPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAddressPool {
    /**
     * @stability external
     */
    export interface AddrProperty {
        /**
         * @Property attributeInfo: The attribute information of the address.
         */
        readonly attributeInfo: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property lbaWeight: The weight of the address.
         */
        readonly lbaWeight?: number | ros.IResolvable;
        /**
         * @Property mode: The mode of the address. Valid values: Normal, Maintenance.
         */
        readonly mode: string | ros.IResolvable;
        /**
         * @Property addr: The address value.
         */
        readonly addr: string | ros.IResolvable;
        /**
         * @Property remark: The remark of the address.
         */
        readonly remark?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AddrProperty`
 *
 * @param properties - the TypeScript properties of a `AddrProperty`
 *
 * @returns the result of the validation.
 */
function RosAddressPool_AddrPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('attributeInfo', ros.requiredValidator)(properties.attributeInfo));
    errors.collect(ros.propertyValidator('attributeInfo', ros.hashValidator(ros.validateAny))(properties.attributeInfo));
    errors.collect(ros.propertyValidator('lbaWeight', ros.validateNumber)(properties.lbaWeight));
    errors.collect(ros.propertyValidator('mode', ros.requiredValidator)(properties.mode));
    if(properties.mode && (typeof properties.mode) !== 'object') {
        errors.collect(ros.propertyValidator('mode', ros.validateAllowedValues)({
          data: properties.mode,
          allowedValues: ["SMART","ONLINE","OFFLINE"],
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
function rosAddressPoolAddrPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAddressPool_AddrPropertyValidator(properties).assertSuccess();
    return {
      'AttributeInfo': ros.hashMapper(ros.objectToRosTemplate)(properties.attributeInfo),
      'LbaWeight': ros.numberToRosTemplate(properties.lbaWeight),
      'Mode': ros.stringToRosTemplate(properties.mode),
      'Addr': ros.stringToRosTemplate(properties.addr),
      'Remark': ros.stringToRosTemplate(properties.remark),
    };
}

export namespace RosAddressPool {
    /**
     * @stability external
     */
    export interface IspCityNodeProperty {
        /**
         * @Property cityCode: The city code.
         */
        readonly cityCode?: string | ros.IResolvable;
        /**
         * @Property ispCode: The ISP code.
         */
        readonly ispCode?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IspCityNodeProperty`
 *
 * @param properties - the TypeScript properties of a `IspCityNodeProperty`
 *
 * @returns the result of the validation.
 */
function RosAddressPool_IspCityNodePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosAddressPoolIspCityNodePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAddressPool_IspCityNodePropertyValidator(properties).assertSuccess();
    return {
      'CityCode': ros.stringToRosTemplate(properties.cityCode),
      'IspCode': ros.stringToRosTemplate(properties.ispCode),
    };
}

/**
 * Properties for defining a `RosCacheDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-cachedomain
 */
export interface RosCacheDomainProps {

    /**
     * @Property cacheTtlMax: The maximum TTL value for cached records.
     */
    readonly cacheTtlMax: number | ros.IResolvable;

    /**
     * @Property cacheTtlMin: The minimum TTL value for cached records.
     */
    readonly cacheTtlMin: number | ros.IResolvable;

    /**
     * @Property domainName: The domain name of the DNS cache domain.
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * @Property instanceId: The instance ID associated with the DNS cache domain.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property sourceDnsServer: List of source DNS servers.
     */
    readonly sourceDnsServer: Array<RosCacheDomain.SourceDnsServerProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property sourceEdns: Whether EDNS is enabled for the source DNS server.
     */
    readonly sourceEdns: string | ros.IResolvable;

    /**
     * @Property sourceProtocol: The protocol used by the source DNS server.
     */
    readonly sourceProtocol: string | ros.IResolvable;

    /**
     * @Property remark: Remark for the DNS cache domain.
     */
    readonly remark?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCacheDomainProps`
 *
 * @param properties - the TypeScript properties of a `RosCacheDomainProps`
 *
 * @returns the result of the validation.
 */
function RosCacheDomainPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sourceEdns', ros.requiredValidator)(properties.sourceEdns));
    if(properties.sourceEdns && (typeof properties.sourceEdns) !== 'object') {
        errors.collect(ros.propertyValidator('sourceEdns', ros.validateAllowedValues)({
          data: properties.sourceEdns,
          allowedValues: ["NOT_SUPPORT","SUPPORT"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceEdns', ros.validateString)(properties.sourceEdns));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('sourceProtocol', ros.requiredValidator)(properties.sourceProtocol));
    if(properties.sourceProtocol && (typeof properties.sourceProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('sourceProtocol', ros.validateAllowedValues)({
          data: properties.sourceProtocol,
          allowedValues: ["UDP","TCP"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceProtocol', ros.validateString)(properties.sourceProtocol));
    errors.collect(ros.propertyValidator('cacheTtlMin', ros.requiredValidator)(properties.cacheTtlMin));
    if(properties.cacheTtlMin && (typeof properties.cacheTtlMin) !== 'object') {
        errors.collect(ros.propertyValidator('cacheTtlMin', ros.validateRange)({
            data: properties.cacheTtlMin,
            min: 30,
            max: 86400,
          }));
    }
    errors.collect(ros.propertyValidator('cacheTtlMin', ros.validateNumber)(properties.cacheTtlMin));
    errors.collect(ros.propertyValidator('sourceDnsServer', ros.requiredValidator)(properties.sourceDnsServer));
    if(properties.sourceDnsServer && (Array.isArray(properties.sourceDnsServer) || (typeof properties.sourceDnsServer) === 'string')) {
        errors.collect(ros.propertyValidator('sourceDnsServer', ros.validateLength)({
            data: properties.sourceDnsServer.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('sourceDnsServer', ros.listValidator(RosCacheDomain_SourceDnsServerPropertyValidator))(properties.sourceDnsServer));
    errors.collect(ros.propertyValidator('cacheTtlMax', ros.requiredValidator)(properties.cacheTtlMax));
    if(properties.cacheTtlMax && (typeof properties.cacheTtlMax) !== 'object') {
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
function rosCacheDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosCacheDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::CacheDomain";

    /**
     * @Attribute DomainName: The domain name of the DNS cache.
     */
    public readonly attrDomainName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cacheTtlMax: The maximum TTL value for cached records.
     */
    public cacheTtlMax: number | ros.IResolvable;

    /**
     * @Property cacheTtlMin: The minimum TTL value for cached records.
     */
    public cacheTtlMin: number | ros.IResolvable;

    /**
     * @Property domainName: The domain name of the DNS cache domain.
     */
    public domainName: string | ros.IResolvable;

    /**
     * @Property instanceId: The instance ID associated with the DNS cache domain.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property sourceDnsServer: List of source DNS servers.
     */
    public sourceDnsServer: Array<RosCacheDomain.SourceDnsServerProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property sourceEdns: Whether EDNS is enabled for the source DNS server.
     */
    public sourceEdns: string | ros.IResolvable;

    /**
     * @Property sourceProtocol: The protocol used by the source DNS server.
     */
    public sourceProtocol: string | ros.IResolvable;

    /**
     * @Property remark: Remark for the DNS cache domain.
     */
    public remark: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCacheDomainProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
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
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCacheDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCacheDomain {
    /**
     * @stability external
     */
    export interface SourceDnsServerProperty {
        /**
         * @Property port: Port of the source DNS server.
         */
        readonly port: string | ros.IResolvable;
        /**
         * @Property host: Host of the source DNS server.
         */
        readonly host: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SourceDnsServerProperty`
 *
 * @param properties - the TypeScript properties of a `SourceDnsServerProperty`
 *
 * @returns the result of the validation.
 */
function RosCacheDomain_SourceDnsServerPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosCacheDomainSourceDnsServerPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCacheDomain_SourceDnsServerPropertyValidator(properties).assertSuccess();
    return {
      'Port': ros.stringToRosTemplate(properties.port),
      'Host': ros.stringToRosTemplate(properties.host),
    };
}

/**
 * Properties for defining a `RosCustomLine`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-customline
 */
export interface RosCustomLineProps {

    /**
     * @Property domainName: The domain name associated with the custom line.
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * @Property ipSegment: The list of IP segments for the custom line.
     */
    readonly ipSegment: Array<RosCustomLine.IpSegmentProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property lineName: The name of the custom line.
     */
    readonly lineName: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCustomLineProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomLineProps`
 *
 * @returns the result of the validation.
 */
function RosCustomLinePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('ipSegment', ros.requiredValidator)(properties.ipSegment));
    if(properties.ipSegment && (Array.isArray(properties.ipSegment) || (typeof properties.ipSegment) === 'string')) {
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
function rosCustomLinePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosCustomLine extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::CustomLine";

    /**
     * @Attribute LineId: The ID of the custom line.
     */
    public readonly attrLineId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: The domain name associated with the custom line.
     */
    public domainName: string | ros.IResolvable;

    /**
     * @Property ipSegment: The list of IP segments for the custom line.
     */
    public ipSegment: Array<RosCustomLine.IpSegmentProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property lineName: The name of the custom line.
     */
    public lineName: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomLineProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCustomLine.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLineId = this.getAtt('LineId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
        this.ipSegment = props.ipSegment;
        this.lineName = props.lineName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainName: this.domainName,
            ipSegment: this.ipSegment,
            lineName: this.lineName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCustomLinePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCustomLine {
    /**
     * @stability external
     */
    export interface IpSegmentProperty {
        /**
         * @Property startIp: The start IP address of the segment.
         */
        readonly startIp?: string | ros.IResolvable;
        /**
         * @Property endIp: The end IP address of the segment.
         */
        readonly endIp?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IpSegmentProperty`
 *
 * @param properties - the TypeScript properties of a `IpSegmentProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomLine_IpSegmentPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosCustomLineIpSegmentPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCustomLine_IpSegmentPropertyValidator(properties).assertSuccess();
    return {
      'StartIp': ros.stringToRosTemplate(properties.startIp),
      'EndIp': ros.stringToRosTemplate(properties.endIp),
    };
}

/**
 * Properties for defining a `RosDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain
 */
export interface RosDomainProps {

    /**
     * @Property domainName: Domain name
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * @Property groupId: Domain name grouping, the default is the "default grouping" GroupId
     */
    readonly groupId?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDomain.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosDomainProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the result of the validation.
 */
function RosDomainPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
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
function rosDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::Domain";

    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * @Attribute DnsServers: The DNS list for the domain name under resolution
     */
    public readonly attrDnsServers: ros.IResolvable;

    /**
     * @Attribute DomainId: Domain ID
     */
    public readonly attrDomainId: ros.IResolvable;

    /**
     * @Attribute DomainName: Domain name
     */
    public readonly attrDomainName: ros.IResolvable;

    /**
     * @Attribute GroupId: Domain name group ID
     */
    public readonly attrGroupId: ros.IResolvable;

    /**
     * @Attribute GroupName: The name of the domain name group
     */
    public readonly attrGroupName: ros.IResolvable;

    /**
     * @Attribute PunyCode: punycode returned only for a Chinese domain name
     */
    public readonly attrPunyCode: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: Domain name
     */
    public domainName: string | ros.IResolvable;

    /**
     * @Property groupId: Domain name grouping, the default is the "default grouping" GroupId
     */
    public groupId: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosDomain.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainName: this.domainName,
            groupId: this.groupId,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDomain {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosDomain_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosDomainTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDomain_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosDomainAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainattachment
 */
export interface RosDomainAttachmentProps {

    /**
     * @Property domainNames: The list of domain names to attach.
     */
    readonly domainNames: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDomainAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosDomainAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('domainNames', ros.requiredValidator)(properties.domainNames));
    if(properties.domainNames && (Array.isArray(properties.domainNames) || (typeof properties.domainNames) === 'string')) {
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
function rosDomainAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosDomainAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::DomainAttachment";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainNames: The list of domain names to attach.
     */
    public domainNames: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomainAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainNames = props.domainNames;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainNames: this.domainNames,
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDomainGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup
 */
export interface RosDomainGroupProps {

    /**
     * @Property groupName: Domain name group name
     */
    readonly groupName: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDomainGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainGroupProps`
 *
 * @returns the result of the validation.
 */
function RosDomainGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosDomainGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosDomainGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::DomainGroup";

    /**
     * @Attribute GroupId: Domain name group ID
     */
    public readonly attrGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: Domain name group name
     */
    public groupName: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomainGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = this.getAtt('GroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDomainRecord`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
 */
export interface RosDomainRecordProps {

    /**
     * @Property domainName: Domain name
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * @Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    readonly rr: string | ros.IResolvable;

    /**
     * @Property type: Parse record type, see parsing record type format
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property value: Record value
     */
    readonly value: string | ros.IResolvable;

    /**
     * @Property line: Parse the line, the default is default. See parsing line enumeration
     */
    readonly line?: string | ros.IResolvable;

    /**
     * @Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
     */
    readonly priority?: number | ros.IResolvable;

    /**
     * @Property ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
     */
    readonly ttl?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDomainRecordProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainRecordProps`
 *
 * @returns the result of the validation.
 */
function RosDomainRecordPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('rr', ros.requiredValidator)(properties.rr));
    errors.collect(ros.propertyValidator('rr', ros.validateString)(properties.rr));
    errors.collect(ros.propertyValidator('line', ros.validateString)(properties.line));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    if(properties.priority && (typeof properties.priority) !== 'object') {
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
function rosDomainRecordPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosDomainRecord extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::DomainRecord";

    /**
     * @Attribute RecordId: Parse the ID of the record
     */
    public readonly attrRecordId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: Domain name
     */
    public domainName: string | ros.IResolvable;

    /**
     * @Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    public rr: string | ros.IResolvable;

    /**
     * @Property type: Parse record type, see parsing record type format
     */
    public type: string | ros.IResolvable;

    /**
     * @Property value: Record value
     */
    public value: string | ros.IResolvable;

    /**
     * @Property line: Parse the line, the default is default. See parsing line enumeration
     */
    public line: string | ros.IResolvable | undefined;

    /**
     * @Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
     */
    public priority: number | ros.IResolvable | undefined;

    /**
     * @Property ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
     */
    public ttl: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainRecordProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
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
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainRecordPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance
 */
export interface RosInstanceProps {

    /**
     * @Property dnsSecurity: The DNS security policy. Valid values:
     * - no: No protection against DNS attacks is provided.
     * - basic: Basic protection against DNS attacks is provided.
     * - advanced: Advanced protection against DNS attacks is provided.
     */
    readonly dnsSecurity: string | ros.IResolvable;

    /**
     * @Property domainNumbers: The number of domain names.
     */
    readonly domainNumbers: number | ros.IResolvable;

    /**
     * @Property period: The subscription duration. Valid values:
     * - If unit is month: 1, 2, 3, 6
     * - If unit is year: 1, 2
     */
    readonly period: number | ros.IResolvable;

    /**
     * @Property periodUnit: The subscription duration unit.
     */
    readonly periodUnit: string | ros.IResolvable;

    /**
     * @Property version: The edition of Alibaba Cloud DNS. Valid values:
     * If create hosted public zone:
     * - version_personal: Personal Edition. 
     * - version_enterprise_basic: Enterprise Standard Edition. 
     * - version_enterprise_advanced: Enterprise Ultimate Edition.
     * If create cached public zone:
     * - version_cached_basic**Note**: Only upgrade operations are supported after instance creation.
     */
    readonly version: string | ros.IResolvable;

    /**
     * @Property domain: The domain name that you want to bind to the instance. If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
     */
    readonly domain?: string | ros.IResolvable;

    /**
     * @Property instanceType: The type of the instance. Valid values:
     * - HostedPublicZone: Hosted Public Zone
     * - CachedPublicZone: Cached Public Zone.
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * @Property renewalStatus: The renewal method. Valid values:
     * - AutoRenewal: The instance is automatically renewed.
     * - ManualRenewal: The instance is manually renewed.
     * Default value: ManualRenewal.
     */
    readonly renewalStatus?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('domainNumbers', ros.requiredValidator)(properties.domainNumbers));
    if(properties.domainNumbers && (typeof properties.domainNumbers) !== 'object') {
        errors.collect(ros.propertyValidator('domainNumbers', ros.validateRange)({
            data: properties.domainNumbers,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('domainNumbers', ros.validateNumber)(properties.domainNumbers));
    errors.collect(ros.propertyValidator('dnsSecurity', ros.requiredValidator)(properties.dnsSecurity));
    if(properties.dnsSecurity && (typeof properties.dnsSecurity) !== 'object') {
        errors.collect(ros.propertyValidator('dnsSecurity', ros.validateAllowedValues)({
          data: properties.dnsSecurity,
          allowedValues: ["no","basic","advanced"],
        }));
    }
    errors.collect(ros.propertyValidator('dnsSecurity', ros.validateString)(properties.dnsSecurity));
    errors.collect(ros.propertyValidator('version', ros.requiredValidator)(properties.version));
    if(properties.version && (typeof properties.version) !== 'object') {
        errors.collect(ros.propertyValidator('version', ros.validateAllowedValues)({
          data: properties.version,
          allowedValues: ["version_personal","version_enterprise_basic","version_enterprise_advanced","version_cached_basic"],
        }));
    }
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    if(properties.renewalStatus && (typeof properties.renewalStatus) !== 'object') {
        errors.collect(ros.propertyValidator('renewalStatus', ros.validateAllowedValues)({
          data: properties.renewalStatus,
          allowedValues: ["AutoRenewal","ManualRenewal"],
        }));
    }
    errors.collect(ros.propertyValidator('renewalStatus', ros.validateString)(properties.renewalStatus));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,6],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    if(properties.instanceType && (typeof properties.instanceType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceType', ros.validateAllowedValues)({
          data: properties.instanceType,
          allowedValues: ["HostedPublicZone","CachedPublicZone"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('periodUnit', ros.requiredValidator)(properties.periodUnit));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Year","Month"],
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
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::Instance";

    /**
     * @Attribute InstanceId: DNS instance id.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dnsSecurity: The DNS security policy. Valid values:
     * - no: No protection against DNS attacks is provided.
     * - basic: Basic protection against DNS attacks is provided.
     * - advanced: Advanced protection against DNS attacks is provided.
     */
    public dnsSecurity: string | ros.IResolvable;

    /**
     * @Property domainNumbers: The number of domain names.
     */
    public domainNumbers: number | ros.IResolvable;

    /**
     * @Property period: The subscription duration. Valid values:
     * - If unit is month: 1, 2, 3, 6
     * - If unit is year: 1, 2
     */
    public period: number | ros.IResolvable;

    /**
     * @Property periodUnit: The subscription duration unit.
     */
    public periodUnit: string | ros.IResolvable;

    /**
     * @Property version: The edition of Alibaba Cloud DNS. Valid values:
     * If create hosted public zone:
     * - version_personal: Personal Edition. 
     * - version_enterprise_basic: Enterprise Standard Edition. 
     * - version_enterprise_advanced: Enterprise Ultimate Edition.
     * If create cached public zone:
     * - version_cached_basic**Note**: Only upgrade operations are supported after instance creation.
     */
    public version: string | ros.IResolvable;

    /**
     * @Property domain: The domain name that you want to bind to the instance. If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
     */
    public domain: string | ros.IResolvable | undefined;

    /**
     * @Property instanceType: The type of the instance. Valid values:
     * - HostedPublicZone: Hosted Public Zone
     * - CachedPublicZone: Cached Public Zone.
     */
    public instanceType: string | ros.IResolvable | undefined;

    /**
     * @Property renewalStatus: The renewal method. Valid values:
     * - AutoRenewal: The instance is automatically renewed.
     * - ManualRenewal: The instance is manually renewed.
     * Default value: ManualRenewal.
     */
    public renewalStatus: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
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
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosMonitorConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig
 */
export interface RosMonitorConfigProps {

    /**
     * @Property addrPoolId: The ID of the address pool.
     */
    readonly addrPoolId: string | ros.IResolvable;

    /**
     * @Property evaluationCount: The evaluation count of the monitor.
     */
    readonly evaluationCount: number | ros.IResolvable;

    /**
     * @Property interval: The interval of the monitor.
     */
    readonly interval: number | ros.IResolvable;

    /**
     * @Property ispCityNode: The ISP city node list.
     */
    readonly ispCityNode: Array<RosMonitorConfig.IspCityNodeProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property monitorExtendInfo: The extend info of the monitor.
     */
    readonly monitorExtendInfo: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property protocolType: The protocol type of the monitor.
     */
    readonly protocolType: string | ros.IResolvable;

    /**
     * @Property timeout: The timeout of the monitor.
     */
    readonly timeout: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMonitorConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosMonitorConfigProps`
 *
 * @returns the result of the validation.
 */
function RosMonitorConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ispCityNode', ros.requiredValidator)(properties.ispCityNode));
    if(properties.ispCityNode && (Array.isArray(properties.ispCityNode) || (typeof properties.ispCityNode) === 'string')) {
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
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
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
    if(properties.evaluationCount && (typeof properties.evaluationCount) !== 'object') {
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
    if(properties.interval && (typeof properties.interval) !== 'object') {
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
function rosMonitorConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosMonitorConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::MonitorConfig";

    /**
     * @Attribute MonitorConfigId: The ID of the monitor config.
     */
    public readonly attrMonitorConfigId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property addrPoolId: The ID of the address pool.
     */
    public addrPoolId: string | ros.IResolvable;

    /**
     * @Property evaluationCount: The evaluation count of the monitor.
     */
    public evaluationCount: number | ros.IResolvable;

    /**
     * @Property interval: The interval of the monitor.
     */
    public interval: number | ros.IResolvable;

    /**
     * @Property ispCityNode: The ISP city node list.
     */
    public ispCityNode: Array<RosMonitorConfig.IspCityNodeProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property monitorExtendInfo: The extend info of the monitor.
     */
    public monitorExtendInfo: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property protocolType: The protocol type of the monitor.
     */
    public protocolType: string | ros.IResolvable;

    /**
     * @Property timeout: The timeout of the monitor.
     */
    public timeout: number | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitorConfigProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
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
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMonitorConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosMonitorConfig {
    /**
     * @stability external
     */
    export interface IspCityNodeProperty {
        /**
         * @Property cityCode: The city code of the ISP city node.
         */
        readonly cityCode?: string | ros.IResolvable;
        /**
         * @Property ispCode: The ISP code of the ISP city node.
         */
        readonly ispCode?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IspCityNodeProperty`
 *
 * @param properties - the TypeScript properties of a `IspCityNodeProperty`
 *
 * @returns the result of the validation.
 */
function RosMonitorConfig_IspCityNodePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosMonitorConfigIspCityNodePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMonitorConfig_IspCityNodePropertyValidator(properties).assertSuccess();
    return {
      'CityCode': ros.stringToRosTemplate(properties.cityCode),
      'IspCode': ros.stringToRosTemplate(properties.ispCode),
    };
}

/**
 * Properties for defining a `RosRecoveryPlan`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-recoveryplan
 */
export interface RosRecoveryPlanProps {

    /**
     * @Property faultAddrPool: The fault address pool of the recovery plan. The value must be encoded in UTF-8.
     */
    readonly faultAddrPool: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property name: The name of the recovery plan. The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property lang: The language of the request.
     */
    readonly lang?: string | ros.IResolvable;

    /**
     * @Property remark: The remark of the recovery plan. The value can be up to 256 bytes in length. The value must be encoded in UTF-8.
     */
    readonly remark?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRecoveryPlanProps`
 *
 * @param properties - the TypeScript properties of a `RosRecoveryPlanProps`
 *
 * @returns the result of the validation.
 */
function RosRecoveryPlanPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosRecoveryPlanPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosRecoveryPlan extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::RecoveryPlan";

    /**
     * @Attribute RecoveryPlanId: The ID of the recovery plan.
     */
    public readonly attrRecoveryPlanId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property faultAddrPool: The fault address pool of the recovery plan. The value must be encoded in UTF-8.
     */
    public faultAddrPool: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property name: The name of the recovery plan. The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property lang: The language of the request.
     */
    public lang: string | ros.IResolvable | undefined;

    /**
     * @Property remark: The remark of the recovery plan. The value can be up to 256 bytes in length. The value must be encoded in UTF-8.
     */
    public remark: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRecoveryPlanProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRecoveryPlan.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRecoveryPlanId = this.getAtt('RecoveryPlanId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.faultAddrPool = props.faultAddrPool;
        this.name = props.name;
        this.lang = props.lang;
        this.remark = props.remark;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            faultAddrPool: this.faultAddrPool,
            name: this.name,
            lang: this.lang,
            remark: this.remark,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRecoveryPlanPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
