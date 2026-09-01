import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './amqp.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-instance
 */
export interface InstanceProps {

    /**
     * Property instanceName: The name of the instance. The name can be up to 64 characters long.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * Property instanceType: The instance type.
     * This parameter is required for subscription instances. Valid values:
     * - `professional`: Professional Edition
     * - `enterprise`: Enterprise Edition
     * - `vip`: Platinum Edition
     * You do not need to specify this parameter for serverless instances.
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * Property maxEipTps: The max eip tps. It is valid when support_eip is true. 
     * The minimum value is 128, with the step size 128.
     *
     */
    readonly maxEipTps?: number | ros.IResolvable;

    /**
     * Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].
     * If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
     * If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
     *
     */
    readonly maxTps?: number | ros.IResolvable;

    /**
     * Property orderNum: Set the number of instances to be created.
     */
    readonly orderNum?: number | ros.IResolvable;

    /**
     * Property payType: The billing method of the instance. The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
     * PrePaid: subscription
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * Property period: The period. Valid values: 1, 2, 3, 6, 12, 24, 36.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property queueCapacity: The queue capacity. If instance type is professional, the valid value is [50, 1000] with the step size 5.
     * If instance type is enterprise, the valid value is [200, 6000] with the step size 100
     * If instance type is vip, the valid value is [200, 80000] with the step size 100
     */
    readonly queueCapacity?: number | ros.IResolvable;

    /**
     * Property storageSize: The storage size. It is valid when instance_type is vip.
     * If instance type is professional or enterprise, the valid value is 0.If instance type is vip, the valid value is [700, 2800] with the step size 100
     */
    readonly storageSize?: number | ros.IResolvable;

    /**
     * Property supportEip: Specifies whether to enable access over the public network. Valid values:
     * - `true`: Enables access over the public network.
     * - `false`: Disables access over the public network.
     */
    readonly supportEip?: string | ros.IResolvable;

    /**
     * Property supportTracing: Specifies whether to enable the message trace feature. Valid values:
     * - `true`: Enables the message trace feature.
     * - `false`: Disables the message trace feature.
     * > * The message trace feature is included for 15 days at no charge on Platinum
     * Edition instances. For these instances, you must enable this feature and set the
     * retention period to 15 days.
     * - For other instance types, you can enable or disable this feature.
     */
    readonly supportTracing?: string | ros.IResolvable;

    /**
     * Property tracingStorageTime: The retention period of message traces. Unit: days. Valid values:
     * - `3`
     * - `7`
     * - `15`
     * This parameter is required if you set `SupportTracing` to `true`.
     */
    readonly tracingStorageTime?: number | ros.IResolvable;
}

/**
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;

    /**
     * Attribute ClassicEndpoint: The classic endpoint of the instance.
     */
    readonly attrClassicEndpoint: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute PrivateEndpoint: The private endpoint of the instance.
     */
    readonly attrPrivateEndpoint: ros.IResolvable | string;

    /**
     * Attribute PublicEndpoint: The public endpoint of the instance.
     */
    readonly attrPublicEndpoint: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::AMQP::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-instance
 */
export class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClassicEndpoint: The classic endpoint of the instance.
     */
    public readonly attrClassicEndpoint: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute PrivateEndpoint: The private endpoint of the instance.
     */
    public readonly attrPrivateEndpoint: ros.IResolvable | string;

    /**
     * Attribute PublicEndpoint: The public endpoint of the instance.
     */
    public readonly attrPublicEndpoint: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance = new RosInstance(this, id,  {
            maxTps: props.maxTps,
            maxEipTps: props.maxEipTps,
            supportEip: props.supportEip,
            storageSize: props.storageSize,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            queueCapacity: props.queueCapacity,
            payType: props.payType === undefined || props.payType === null ? 'Subscription' : props.payType,
            instanceName: props.instanceName,
            tracingStorageTime: props.tracingStorageTime,
            orderNum: props.orderNum === undefined || props.orderNum === null ? 1 : props.orderNum,
            supportTracing: props.supportTracing,
            instanceType: props.instanceType,
            periodUnit: props.periodUnit === undefined || props.periodUnit === null ? 'Month' : props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrClassicEndpoint = rosInstance.attrClassicEndpoint;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrPrivateEndpoint = rosInstance.attrPrivateEndpoint;
        this.attrPublicEndpoint = rosInstance.attrPublicEndpoint;
    }
}
