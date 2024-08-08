// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-binding
 */
export interface RosBindingProps {

    /**
     * @Property argument: X-match Attributes. Valid Values:
     * "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
     * "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
     */
    readonly argument: string | ros.IResolvable;

    /**
     * @Property bindingKey: The Binding Key.
     */
    readonly bindingKey: string | ros.IResolvable;

    /**
     * @Property bindingType: The Target Binding Types. Valid values: EXCHANGE, QUEUE.
     */
    readonly bindingType: string | ros.IResolvable;

    /**
     * @Property destinationName: The Target Queue Or Exchange of the Name.
     */
    readonly destinationName: string | ros.IResolvable;

    /**
     * @Property instanceId: InstanceId
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property sourceExchange: The Source Exchange Name.
     */
    readonly sourceExchange: string | ros.IResolvable;

    /**
     * @Property virtualHost: The name of the virtual host.
     */
    readonly virtualHost: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBindingProps`
 *
 * @param properties - the TypeScript properties of a `RosBindingProps`
 *
 * @returns the result of the validation.
 */
function RosBindingPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('argument', ros.requiredValidator)(properties.argument));
    errors.collect(ros.propertyValidator('argument', ros.validateString)(properties.argument));
    errors.collect(ros.propertyValidator('sourceExchange', ros.requiredValidator)(properties.sourceExchange));
    errors.collect(ros.propertyValidator('sourceExchange', ros.validateString)(properties.sourceExchange));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('bindingKey', ros.requiredValidator)(properties.bindingKey));
    errors.collect(ros.propertyValidator('bindingKey', ros.validateString)(properties.bindingKey));
    errors.collect(ros.propertyValidator('bindingType', ros.requiredValidator)(properties.bindingType));
    if(properties.bindingType && (typeof properties.bindingType) !== 'object') {
        errors.collect(ros.propertyValidator('bindingType', ros.validateAllowedValues)({
          data: properties.bindingType,
          allowedValues: ["0","0","QUEUE","1","1","EXCHANGE"],
        }));
    }
    errors.collect(ros.propertyValidator('bindingType', ros.validateString)(properties.bindingType));
    errors.collect(ros.propertyValidator('destinationName', ros.requiredValidator)(properties.destinationName));
    errors.collect(ros.propertyValidator('destinationName', ros.validateString)(properties.destinationName));
    errors.collect(ros.propertyValidator('virtualHost', ros.requiredValidator)(properties.virtualHost));
    errors.collect(ros.propertyValidator('virtualHost', ros.validateString)(properties.virtualHost));
    return errors.wrap('supplied properties not correct for "RosBindingProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AMQP::Binding` resource
 *
 * @param properties - the TypeScript properties of a `RosBindingProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AMQP::Binding` resource.
 */
// @ts-ignore TS6133
function rosBindingPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBindingPropsValidator(properties).assertSuccess();
    }
    return {
      Argument: ros.stringToRosTemplate(properties.argument),
      BindingKey: ros.stringToRosTemplate(properties.bindingKey),
      BindingType: ros.stringToRosTemplate(properties.bindingType),
      DestinationName: ros.stringToRosTemplate(properties.destinationName),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      SourceExchange: ros.stringToRosTemplate(properties.sourceExchange),
      VirtualHost: ros.stringToRosTemplate(properties.virtualHost),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AMQP::Binding`, which is used to bind a queue or exchange to an exchange.
 * @Note This class does not contain additional functions, so it is recommended to use the `Binding` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-binding
 */
export class RosBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AMQP::Binding";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property argument: X-match Attributes. Valid Values:
     * "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
     * "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
     */
    public argument: string | ros.IResolvable;

    /**
     * @Property bindingKey: The Binding Key.
     */
    public bindingKey: string | ros.IResolvable;

    /**
     * @Property bindingType: The Target Binding Types. Valid values: EXCHANGE, QUEUE.
     */
    public bindingType: string | ros.IResolvable;

    /**
     * @Property destinationName: The Target Queue Or Exchange of the Name.
     */
    public destinationName: string | ros.IResolvable;

    /**
     * @Property instanceId: InstanceId
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property sourceExchange: The Source Exchange Name.
     */
    public sourceExchange: string | ros.IResolvable;

    /**
     * @Property virtualHost: The name of the virtual host.
     */
    public virtualHost: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBindingProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBinding.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.argument = props.argument;
        this.bindingKey = props.bindingKey;
        this.bindingType = props.bindingType;
        this.destinationName = props.destinationName;
        this.instanceId = props.instanceId;
        this.sourceExchange = props.sourceExchange;
        this.virtualHost = props.virtualHost;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            argument: this.argument,
            bindingKey: this.bindingKey,
            bindingType: this.bindingType,
            destinationName: this.destinationName,
            instanceId: this.instanceId,
            sourceExchange: this.sourceExchange,
            virtualHost: this.virtualHost,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBindingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosExchange`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-exchange
 */
export interface RosExchangeProps {

    /**
     * @Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
     * true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
     * false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
     */
    readonly autoDeleteState: boolean | ros.IResolvable;

    /**
     * @Property exchangeName: The name of the exchange.
     */
    readonly exchangeName: string | ros.IResolvable;

    /**
     * @Property exchangeType: The type of the exchange. Valid values:
     * FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
     * DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
     * TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
     * HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
     */
    readonly exchangeType: string | ros.IResolvable;

    /**
     * @Property instanceId: InstanceId
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property internal: Specifies whether an exchange is an internal exchange. Valid values:
     * false: The exchange is not an internal exchange.
     * true: The exchange is an internal exchange.
     */
    readonly internal: boolean | ros.IResolvable;

    /**
     * @Property virtualHost: The name of the virtual host.
     */
    readonly virtualHost: string | ros.IResolvable;

    /**
     * @Property alternateExchange: The alternate exchange. An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
     */
    readonly alternateExchange?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosExchangeProps`
 *
 * @param properties - the TypeScript properties of a `RosExchangeProps`
 *
 * @returns the result of the validation.
 */
function RosExchangePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('alternateExchange', ros.validateString)(properties.alternateExchange));
    errors.collect(ros.propertyValidator('internal', ros.requiredValidator)(properties.internal));
    errors.collect(ros.propertyValidator('internal', ros.validateBoolean)(properties.internal));
    errors.collect(ros.propertyValidator('virtualHost', ros.requiredValidator)(properties.virtualHost));
    errors.collect(ros.propertyValidator('virtualHost', ros.validateString)(properties.virtualHost));
    errors.collect(ros.propertyValidator('autoDeleteState', ros.requiredValidator)(properties.autoDeleteState));
    errors.collect(ros.propertyValidator('autoDeleteState', ros.validateBoolean)(properties.autoDeleteState));
    errors.collect(ros.propertyValidator('exchangeName', ros.requiredValidator)(properties.exchangeName));
    if(properties.exchangeName && (Array.isArray(properties.exchangeName) || (typeof properties.exchangeName) === 'string')) {
        errors.collect(ros.propertyValidator('exchangeName', ros.validateLength)({
            data: properties.exchangeName.length,
            min: undefined,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('exchangeName', ros.validateString)(properties.exchangeName));
    errors.collect(ros.propertyValidator('exchangeType', ros.requiredValidator)(properties.exchangeType));
    if(properties.exchangeType && (typeof properties.exchangeType) !== 'object') {
        errors.collect(ros.propertyValidator('exchangeType', ros.validateAllowedValues)({
          data: properties.exchangeType,
          allowedValues: ["FANOUT","DIRECT","TOPIC","HEADERS"],
        }));
    }
    errors.collect(ros.propertyValidator('exchangeType', ros.validateString)(properties.exchangeType));
    return errors.wrap('supplied properties not correct for "RosExchangeProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AMQP::Exchange` resource
 *
 * @param properties - the TypeScript properties of a `RosExchangeProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AMQP::Exchange` resource.
 */
// @ts-ignore TS6133
function rosExchangePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosExchangePropsValidator(properties).assertSuccess();
    }
    return {
      AutoDeleteState: ros.booleanToRosTemplate(properties.autoDeleteState),
      ExchangeName: ros.stringToRosTemplate(properties.exchangeName),
      ExchangeType: ros.stringToRosTemplate(properties.exchangeType),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      Internal: ros.booleanToRosTemplate(properties.internal),
      VirtualHost: ros.stringToRosTemplate(properties.virtualHost),
      AlternateExchange: ros.stringToRosTemplate(properties.alternateExchange),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AMQP::Exchange`, which is used to create an exchange.
 * @Note This class does not contain additional functions, so it is recommended to use the `Exchange` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-exchange
 */
export class RosExchange extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AMQP::Exchange";

    /**
     * @Attribute ExchangeName: The name of the exchange.
     */
    public readonly attrExchangeName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
     * true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
     * false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
     */
    public autoDeleteState: boolean | ros.IResolvable;

    /**
     * @Property exchangeName: The name of the exchange.
     */
    public exchangeName: string | ros.IResolvable;

    /**
     * @Property exchangeType: The type of the exchange. Valid values:
     * FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
     * DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
     * TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
     * HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
     */
    public exchangeType: string | ros.IResolvable;

    /**
     * @Property instanceId: InstanceId
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property internal: Specifies whether an exchange is an internal exchange. Valid values:
     * false: The exchange is not an internal exchange.
     * true: The exchange is an internal exchange.
     */
    public internal: boolean | ros.IResolvable;

    /**
     * @Property virtualHost: The name of the virtual host.
     */
    public virtualHost: string | ros.IResolvable;

    /**
     * @Property alternateExchange: The alternate exchange. An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
     */
    public alternateExchange: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosExchangeProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosExchange.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrExchangeName = this.getAtt('ExchangeName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.autoDeleteState = props.autoDeleteState;
        this.exchangeName = props.exchangeName;
        this.exchangeType = props.exchangeType;
        this.instanceId = props.instanceId;
        this.internal = props.internal;
        this.virtualHost = props.virtualHost;
        this.alternateExchange = props.alternateExchange;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            autoDeleteState: this.autoDeleteState,
            exchangeName: this.exchangeName,
            exchangeType: this.exchangeType,
            instanceId: this.instanceId,
            internal: this.internal,
            virtualHost: this.virtualHost,
            alternateExchange: this.alternateExchange,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosExchangePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-instance
 */
export interface RosInstanceProps {

    /**
     * @Property instanceName: The instance name.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property instanceType: The Instance Type. Valid values: professional, enterprise, vip.
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * @Property maxEipTps: The max eip tps. It is valid when support_eip is true. 
     * The minimum value is 128, with the step size 128.
     *
     */
    readonly maxEipTps?: number | ros.IResolvable;

    /**
     * @Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].
     * If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
     * If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
     *
     */
    readonly maxTps?: number | ros.IResolvable;

    /**
     * @Property orderNum: Set the number of instances to be created.
     */
    readonly orderNum?: number | ros.IResolvable;

    /**
     * @Property payType: The billing method of the instance. The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
     * PrePaid: subscription
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * @Property period: The period. Valid values: 1, 2, 3, 6, 12, 24, 36.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property queueCapacity: The queue capacity. If instance type is professional, the valid value is [50, 1000] with the step size 5.
     * If instance type is enterprise, the valid value is [200, 6000] with the step size 100
     * If instance type is vip, the valid value is [200, 80000] with the step size 100
     */
    readonly queueCapacity?: number | ros.IResolvable;

    /**
     * @Property storageSize: The storage size. It is valid when instance_type is vip.
     * If instance type is professional or enterprise, the valid value is 0.If instance type is vip, the valid value is [700, 2800] with the step size 100
     */
    readonly storageSize?: number | ros.IResolvable;

    /**
     * @Property supportEip: Whether to support EIP. Valid values: true, false.
     */
    readonly supportEip?: string | ros.IResolvable;

    /**
     * @Property supportTracing: Whether to support tracing. Valid values: true, false.
     */
    readonly supportTracing?: string | ros.IResolvable;

    /**
     * @Property tracingStorageTime: The retention period of message traces was set. Valid values: 3, 7, 15.
     * If instance_type=vip, the valid values is 15.
     * If instance_type!=vip, the valid values is 3, 7, 15.
     * If support_tracing == tracing_false, the valid values is 0.
     */
    readonly tracingStorageTime?: number | ros.IResolvable;
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
    if(properties.maxTps && (typeof properties.maxTps) !== 'object') {
        errors.collect(ros.propertyValidator('maxTps', ros.validateAllowedValues)({
          data: properties.maxTps,
          allowedValues: [1000,1500,2000,2500,3000,4000,5000,8000,10000,15000,20000,25000,30000,40000,50000,100000,200000,300000,500000,800000,1000000],
        }));
    }
    errors.collect(ros.propertyValidator('maxTps', ros.validateNumber)(properties.maxTps));
    if(properties.maxEipTps && (typeof properties.maxEipTps) !== 'object') {
        errors.collect(ros.propertyValidator('maxEipTps', ros.validateRange)({
            data: properties.maxEipTps,
            min: 128,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('maxEipTps', ros.validateNumber)(properties.maxEipTps));
    if(properties.supportEip && (typeof properties.supportEip) !== 'object') {
        errors.collect(ros.propertyValidator('supportEip', ros.validateAllowedValues)({
          data: properties.supportEip,
          allowedValues: ["true","false"],
        }));
    }
    errors.collect(ros.propertyValidator('supportEip', ros.validateString)(properties.supportEip));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,6,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.storageSize && (typeof properties.storageSize) !== 'object') {
        errors.collect(ros.propertyValidator('storageSize', ros.validateRange)({
            data: properties.storageSize,
            min: 0,
            max: 2800,
          }));
    }
    errors.collect(ros.propertyValidator('storageSize', ros.validateNumber)(properties.storageSize));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    if(properties.queueCapacity && (typeof properties.queueCapacity) !== 'object') {
        errors.collect(ros.propertyValidator('queueCapacity', ros.validateRange)({
            data: properties.queueCapacity,
            min: 50,
            max: 80000,
          }));
    }
    errors.collect(ros.propertyValidator('queueCapacity', ros.validateNumber)(properties.queueCapacity));
    if(properties.tracingStorageTime && (typeof properties.tracingStorageTime) !== 'object') {
        errors.collect(ros.propertyValidator('tracingStorageTime', ros.validateAllowedValues)({
          data: properties.tracingStorageTime,
          allowedValues: [0,3,7,15],
        }));
    }
    errors.collect(ros.propertyValidator('tracingStorageTime', ros.validateNumber)(properties.tracingStorageTime));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    if(properties.orderNum && (typeof properties.orderNum) !== 'object') {
        errors.collect(ros.propertyValidator('orderNum', ros.validateRange)({
            data: properties.orderNum,
            min: 1,
            max: 9999,
          }));
    }
    errors.collect(ros.propertyValidator('orderNum', ros.validateNumber)(properties.orderNum));
    if(properties.supportTracing && (typeof properties.supportTracing) !== 'object') {
        errors.collect(ros.propertyValidator('supportTracing', ros.validateAllowedValues)({
          data: properties.supportTracing,
          allowedValues: ["true","false"],
        }));
    }
    errors.collect(ros.propertyValidator('supportTracing', ros.validateString)(properties.supportTracing));
    if(properties.instanceType && (typeof properties.instanceType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceType', ros.validateAllowedValues)({
          data: properties.instanceType,
          allowedValues: ["professional","enterprise","vip"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["month","year","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AMQP::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AMQP::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      MaxEipTps: ros.numberToRosTemplate(properties.maxEipTps),
      MaxTps: ros.numberToRosTemplate(properties.maxTps),
      OrderNum: ros.numberToRosTemplate(properties.orderNum),
      PayType: ros.stringToRosTemplate(properties.payType),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      QueueCapacity: ros.numberToRosTemplate(properties.queueCapacity),
      StorageSize: ros.numberToRosTemplate(properties.storageSize),
      SupportEip: ros.stringToRosTemplate(properties.supportEip),
      SupportTracing: ros.stringToRosTemplate(properties.supportTracing),
      TracingStorageTime: ros.numberToRosTemplate(properties.tracingStorageTime),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AMQP::Instance`, which is used to create an ApsaraMQ for RabbitMQ instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AMQP::Instance";

    /**
     * @Attribute ClassicEndpoint: The classic endpoint of the instance.
     */
    public readonly attrClassicEndpoint: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute PrivateEndpoint: The private endpoint of the instance.
     */
    public readonly attrPrivateEndpoint: ros.IResolvable;

    /**
     * @Attribute PublicEndpoint: The public endpoint of the instance.
     */
    public readonly attrPublicEndpoint: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceName: The instance name.
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property instanceType: The Instance Type. Valid values: professional, enterprise, vip.
     */
    public instanceType: string | ros.IResolvable | undefined;

    /**
     * @Property maxEipTps: The max eip tps. It is valid when support_eip is true. 
     * The minimum value is 128, with the step size 128.
     *
     */
    public maxEipTps: number | ros.IResolvable | undefined;

    /**
     * @Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].
     * If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
     * If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
     *
     */
    public maxTps: number | ros.IResolvable | undefined;

    /**
     * @Property orderNum: Set the number of instances to be created.
     */
    public orderNum: number | ros.IResolvable | undefined;

    /**
     * @Property payType: The billing method of the instance. The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
     * PrePaid: subscription
     */
    public payType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The period. Valid values: 1, 2, 3, 6, 12, 24, 36.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property queueCapacity: The queue capacity. If instance type is professional, the valid value is [50, 1000] with the step size 5.
     * If instance type is enterprise, the valid value is [200, 6000] with the step size 100
     * If instance type is vip, the valid value is [200, 80000] with the step size 100
     */
    public queueCapacity: number | ros.IResolvable | undefined;

    /**
     * @Property storageSize: The storage size. It is valid when instance_type is vip.
     * If instance type is professional or enterprise, the valid value is 0.If instance type is vip, the valid value is [700, 2800] with the step size 100
     */
    public storageSize: number | ros.IResolvable | undefined;

    /**
     * @Property supportEip: Whether to support EIP. Valid values: true, false.
     */
    public supportEip: string | ros.IResolvable | undefined;

    /**
     * @Property supportTracing: Whether to support tracing. Valid values: true, false.
     */
    public supportTracing: string | ros.IResolvable | undefined;

    /**
     * @Property tracingStorageTime: The retention period of message traces was set. Valid values: 3, 7, 15.
     * If instance_type=vip, the valid values is 15.
     * If instance_type!=vip, the valid values is 3, 7, 15.
     * If support_tracing == tracing_false, the valid values is 0.
     */
    public tracingStorageTime: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClassicEndpoint = this.getAtt('ClassicEndpoint');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrPrivateEndpoint = this.getAtt('PrivateEndpoint');
        this.attrPublicEndpoint = this.getAtt('PublicEndpoint');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceName = props.instanceName;
        this.instanceType = props.instanceType;
        this.maxEipTps = props.maxEipTps;
        this.maxTps = props.maxTps;
        this.orderNum = props.orderNum;
        this.payType = props.payType;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.queueCapacity = props.queueCapacity;
        this.storageSize = props.storageSize;
        this.supportEip = props.supportEip;
        this.supportTracing = props.supportTracing;
        this.tracingStorageTime = props.tracingStorageTime;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceName: this.instanceName,
            instanceType: this.instanceType,
            maxEipTps: this.maxEipTps,
            maxTps: this.maxTps,
            orderNum: this.orderNum,
            payType: this.payType,
            period: this.period,
            periodUnit: this.periodUnit,
            queueCapacity: this.queueCapacity,
            storageSize: this.storageSize,
            supportEip: this.supportEip,
            supportTracing: this.supportTracing,
            tracingStorageTime: this.tracingStorageTime,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosQueue`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-queue
 */
export interface RosQueueProps {

    /**
     * @Property instanceId: InstanceId
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property queueName: The name of the queue.
     */
    readonly queueName: string | ros.IResolvable;

    /**
     * @Property virtualHost: The name of the virtual host.
     */
    readonly virtualHost: string | ros.IResolvable;

    /**
     * @Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
     * true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
     * false: The Auto Delete attribute is not configured.
     */
    readonly autoDeleteState?: boolean | ros.IResolvable;

    /**
     * @Property autoExpireState: The validity period after which the queue is automatically deleted.
     * If the queue is not accessed within a specified period of time, it is automatically deleted.
     */
    readonly autoExpireState?: number | ros.IResolvable;

    /**
     * @Property deadLetterExchange: The dead-letter exchange. A dead-letter exchange is used to receive rejected messages. 
     * If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange. 
     * Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
     */
    readonly deadLetterExchange?: string | ros.IResolvable;

    /**
     * @Property deadLetterRoutingKey: The dead letter routing key.
     */
    readonly deadLetterRoutingKey?: string | ros.IResolvable;

    /**
     * @Property exclusiveState: Specifies whether the queue is an exclusive queue. Valid values:
     * true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
     * false: The Auto Delete attribute is not configured.
     */
    readonly exclusiveState?: boolean | ros.IResolvable;

    /**
     * @Property maximumPriority: The priority function is not supported.
     */
    readonly maximumPriority?: number | ros.IResolvable;

    /**
     * @Property maxLength: The maximum number of messages that can be stored in the queue. 
     * If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
     */
    readonly maxLength?: number | ros.IResolvable;

    /**
     * @Property messageTtl: The message TTL of the queue
     * If a message is retained in the Queue longer than the configured message lifetime, the message expires.
     * The value of message lifetime must be a non-negative integer, up to 1 day.
     * The unit is milliseconds
     */
    readonly messageTtl?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosQueueProps`
 *
 * @param properties - the TypeScript properties of a `RosQueueProps`
 *
 * @returns the result of the validation.
 */
function RosQueuePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('deadLetterExchange', ros.validateString)(properties.deadLetterExchange));
    errors.collect(ros.propertyValidator('maximumPriority', ros.validateNumber)(properties.maximumPriority));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('exclusiveState', ros.validateBoolean)(properties.exclusiveState));
    errors.collect(ros.propertyValidator('deadLetterRoutingKey', ros.validateString)(properties.deadLetterRoutingKey));
    errors.collect(ros.propertyValidator('virtualHost', ros.requiredValidator)(properties.virtualHost));
    errors.collect(ros.propertyValidator('virtualHost', ros.validateString)(properties.virtualHost));
    errors.collect(ros.propertyValidator('maxLength', ros.validateNumber)(properties.maxLength));
    errors.collect(ros.propertyValidator('autoDeleteState', ros.validateBoolean)(properties.autoDeleteState));
    errors.collect(ros.propertyValidator('queueName', ros.requiredValidator)(properties.queueName));
    if(properties.queueName && (Array.isArray(properties.queueName) || (typeof properties.queueName) === 'string')) {
        errors.collect(ros.propertyValidator('queueName', ros.validateLength)({
            data: properties.queueName.length,
            min: undefined,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('queueName', ros.validateString)(properties.queueName));
    errors.collect(ros.propertyValidator('messageTtl', ros.validateNumber)(properties.messageTtl));
    errors.collect(ros.propertyValidator('autoExpireState', ros.validateNumber)(properties.autoExpireState));
    return errors.wrap('supplied properties not correct for "RosQueueProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AMQP::Queue` resource
 *
 * @param properties - the TypeScript properties of a `RosQueueProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AMQP::Queue` resource.
 */
// @ts-ignore TS6133
function rosQueuePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosQueuePropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      QueueName: ros.stringToRosTemplate(properties.queueName),
      VirtualHost: ros.stringToRosTemplate(properties.virtualHost),
      AutoDeleteState: ros.booleanToRosTemplate(properties.autoDeleteState),
      AutoExpireState: ros.numberToRosTemplate(properties.autoExpireState),
      DeadLetterExchange: ros.stringToRosTemplate(properties.deadLetterExchange),
      DeadLetterRoutingKey: ros.stringToRosTemplate(properties.deadLetterRoutingKey),
      ExclusiveState: ros.booleanToRosTemplate(properties.exclusiveState),
      MaximumPriority: ros.numberToRosTemplate(properties.maximumPriority),
      MaxLength: ros.numberToRosTemplate(properties.maxLength),
      MessageTTL: ros.numberToRosTemplate(properties.messageTtl),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AMQP::Queue`, which is used to create a queue.
 * @Note This class does not contain additional functions, so it is recommended to use the `Queue` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-queue
 */
export class RosQueue extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AMQP::Queue";

    /**
     * @Attribute QueueName: The name of the queue.
     */
    public readonly attrQueueName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: InstanceId
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property queueName: The name of the queue.
     */
    public queueName: string | ros.IResolvable;

    /**
     * @Property virtualHost: The name of the virtual host.
     */
    public virtualHost: string | ros.IResolvable;

    /**
     * @Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
     * true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
     * false: The Auto Delete attribute is not configured.
     */
    public autoDeleteState: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoExpireState: The validity period after which the queue is automatically deleted.
     * If the queue is not accessed within a specified period of time, it is automatically deleted.
     */
    public autoExpireState: number | ros.IResolvable | undefined;

    /**
     * @Property deadLetterExchange: The dead-letter exchange. A dead-letter exchange is used to receive rejected messages. 
     * If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange. 
     * Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
     */
    public deadLetterExchange: string | ros.IResolvable | undefined;

    /**
     * @Property deadLetterRoutingKey: The dead letter routing key.
     */
    public deadLetterRoutingKey: string | ros.IResolvable | undefined;

    /**
     * @Property exclusiveState: Specifies whether the queue is an exclusive queue. Valid values:
     * true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
     * false: The Auto Delete attribute is not configured.
     */
    public exclusiveState: boolean | ros.IResolvable | undefined;

    /**
     * @Property maximumPriority: The priority function is not supported.
     */
    public maximumPriority: number | ros.IResolvable | undefined;

    /**
     * @Property maxLength: The maximum number of messages that can be stored in the queue. 
     * If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
     */
    public maxLength: number | ros.IResolvable | undefined;

    /**
     * @Property messageTtl: The message TTL of the queue
     * If a message is retained in the Queue longer than the configured message lifetime, the message expires.
     * The value of message lifetime must be a non-negative integer, up to 1 day.
     * The unit is milliseconds
     */
    public messageTtl: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQueueProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosQueue.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrQueueName = this.getAtt('QueueName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.queueName = props.queueName;
        this.virtualHost = props.virtualHost;
        this.autoDeleteState = props.autoDeleteState;
        this.autoExpireState = props.autoExpireState;
        this.deadLetterExchange = props.deadLetterExchange;
        this.deadLetterRoutingKey = props.deadLetterRoutingKey;
        this.exclusiveState = props.exclusiveState;
        this.maximumPriority = props.maximumPriority;
        this.maxLength = props.maxLength;
        this.messageTtl = props.messageTtl;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            queueName: this.queueName,
            virtualHost: this.virtualHost,
            autoDeleteState: this.autoDeleteState,
            autoExpireState: this.autoExpireState,
            deadLetterExchange: this.deadLetterExchange,
            deadLetterRoutingKey: this.deadLetterRoutingKey,
            exclusiveState: this.exclusiveState,
            maximumPriority: this.maximumPriority,
            maxLength: this.maxLength,
            messageTtl: this.messageTtl,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosQueuePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosVirtualHost`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-virtualhost
 */
export interface RosVirtualHostProps {

    /**
     * @Property instanceId: InstanceId
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property virtualHost: The name of the virtual host.
     */
    readonly virtualHost: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVirtualHostProps`
 *
 * @param properties - the TypeScript properties of a `RosVirtualHostProps`
 *
 * @returns the result of the validation.
 */
function RosVirtualHostPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('virtualHost', ros.requiredValidator)(properties.virtualHost));
    if(properties.virtualHost && (Array.isArray(properties.virtualHost) || (typeof properties.virtualHost) === 'string')) {
        errors.collect(ros.propertyValidator('virtualHost', ros.validateLength)({
            data: properties.virtualHost.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('virtualHost', ros.validateString)(properties.virtualHost));
    return errors.wrap('supplied properties not correct for "RosVirtualHostProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AMQP::VirtualHost` resource
 *
 * @param properties - the TypeScript properties of a `RosVirtualHostProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AMQP::VirtualHost` resource.
 */
// @ts-ignore TS6133
function rosVirtualHostPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVirtualHostPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      VirtualHost: ros.stringToRosTemplate(properties.virtualHost),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AMQP::VirtualHost`, which is used to create a vhost.
 * @Note This class does not contain additional functions, so it is recommended to use the `VirtualHost` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-virtualhost
 */
export class RosVirtualHost extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AMQP::VirtualHost";

    /**
     * @Attribute VirtualHost: The name of the virtual host.
     */
    public readonly attrVirtualHost: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: InstanceId
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property virtualHost: The name of the virtual host.
     */
    public virtualHost: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVirtualHostProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVirtualHost.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrVirtualHost = this.getAtt('VirtualHost');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.virtualHost = props.virtualHost;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            virtualHost: this.virtualHost,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVirtualHostPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
