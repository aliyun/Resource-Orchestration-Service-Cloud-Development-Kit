import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './rocketmq5.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `ALIYUN::ROCKETMQ5::Instance`
 */
export interface InstanceProps {

    /**
     * Property internetInfo: Public network configuration information.
     */
    readonly internetInfo: RosInstance.InternetInfoProperty | ros.IResolvable;

    /**
     * Property productInfo: Instance specification information.
     */
    readonly productInfo: RosInstance.ProductInfoProperty | ros.IResolvable;

    /**
     * Property seriesCode: The primary series code of the instance.
     */
    readonly seriesCode: string | ros.IResolvable;

    /**
     * Property subSeriesCode: The sub series code of the instance.
     */
    readonly subSeriesCode: string | ros.IResolvable;

    /**
     * Property vpcInfo: Private network configuration information.
     */
    readonly vpcInfo: RosInstance.VpcInfoProperty | ros.IResolvable;

    /**
     * Property autoRenew: Whether to auto-renew. This parameter takes effect only when the PaymentType=Subscription.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property autoRenewPeriod: Automatic renewal period. This parameter is valid only when automatic renewal is enabled. Unit: Month.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * Property instanceName: The name of the instance to be created.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * Property paymentType: The sub series code of the instance.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * Property period: The subscription duration. Valid values:
     * When Period is Month, it could be from 1 to 6, 12, 24, 36.
     *  When Period is Year, it could be from 1 to 3.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: The period unit for the duration of the instance.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property remark: The remark of instance.
     */
    readonly remark?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ROCKETMQ5::Instance`
 */
export class Instance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute InstanceId: Instance ID created.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute InstanceName: Instance name.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * Attribute InternetEndpoint: Internet endpoint.
     */
    public readonly attrInternetEndpoint: ros.IResolvable;

    /**
     * Attribute VpcEndpoint: VPC endpoint.
     */
    public readonly attrVpcEndpoint: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ROCKETMQ5::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstance = new RosInstance(this, id,  {
            autoRenewPeriod: props.autoRenewPeriod,
            productInfo: props.productInfo,
            resourceGroupId: props.resourceGroupId,
            autoRenew: props.autoRenew,
            period: props.period,
            internetInfo: props.internetInfo,
            subSeriesCode: props.subSeriesCode,
            remark: props.remark,
            instanceName: props.instanceName,
            seriesCode: props.seriesCode,
            paymentType: props.paymentType,
            vpcInfo: props.vpcInfo,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrInternetEndpoint = rosInstance.attrInternetEndpoint;
        this.attrVpcEndpoint = rosInstance.attrVpcEndpoint;
    }
}
