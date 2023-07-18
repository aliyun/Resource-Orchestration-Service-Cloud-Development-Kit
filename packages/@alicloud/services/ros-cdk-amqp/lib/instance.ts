import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './amqp.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `ALIYUN::AMQP::Instance`
 */
export interface InstanceProps {

    /**
     * Property instanceType: The Instance Type. Valid values: professional, enterprise, vip.
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].
     * If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
     * If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
     *
     */
    readonly maxTps: number | ros.IResolvable;

    /**
     * Property queueCapacity: The queue capacity. If instance type is professional, the valid value is [50, 1000] with the step size 5.
     * If instance type is enterprise, the valid value is [200, 6000] with the step size 100
     * If instance type is vip, the valid value is [200, 80000] with the step size 100
     */
    readonly queueCapacity: number | ros.IResolvable;

    /**
     * Property storageSize: The storage size. It is valid when instance_type is vip.
     * If instance type is professional or enterprise, the valid value is 0.If instance type is vip, the valid value is [700, 2800] with the step size 100
     */
    readonly storageSize: number | ros.IResolvable;

    /**
     * Property instanceName: The instance name.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * Property maxEipTps: The max eip tps. It is valid when support_eip is true. 
     * The minimum value is 128, with the step size 128.
     *
     */
    readonly maxEipTps?: number | ros.IResolvable;

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
     * Property supportEip: Whether to support EIP. Valid values: true, false.
     */
    readonly supportEip?: string | ros.IResolvable;

    /**
     * Property supportTracing: Whether to support tracing. Valid values: true, false.
     */
    readonly supportTracing?: string | ros.IResolvable;

    /**
     * Property tracingStorageTime: The retention period of message traces was set. Valid values: 3, 7, 15.
     * If instance_type=vip, the valid values is 15.
     * If instance_type!=vip, the valid values is 3, 7, 15.
     * If support_tracing == tracing_false, the valid values is 0.
     */
    readonly tracingStorageTime?: number | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::AMQP::Instance`
 */
export class Instance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ClassicEndpoint: The classic endpoint of the instance.
     */
    public readonly attrClassicEndpoint: ros.IResolvable;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute PrivateEndpoint: The private endpoint of the instance.
     */
    public readonly attrPrivateEndpoint: ros.IResolvable;

    /**
     * Create a new `ALIYUN::AMQP::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstance = new RosInstance(this, id,  {
            maxTps: props.maxTps,
            maxEipTps: props.maxEipTps,
            supportEip: props.supportEip,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            storageSize: props.storageSize,
            payType: props.payType === undefined || props.payType === null ? 'Subscription' : props.payType,
            queueCapacity: props.queueCapacity,
            tracingStorageTime: props.tracingStorageTime,
            instanceName: props.instanceName,
            orderNum: props.orderNum === undefined || props.orderNum === null ? 1 : props.orderNum,
            supportTracing: props.supportTracing,
            instanceType: props.instanceType,
            periodUnit: props.periodUnit === undefined || props.periodUnit === null ? 'Month' : props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrClassicEndpoint = rosInstance.attrClassicEndpoint;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrPrivateEndpoint = rosInstance.attrPrivateEndpoint;
    }
}
