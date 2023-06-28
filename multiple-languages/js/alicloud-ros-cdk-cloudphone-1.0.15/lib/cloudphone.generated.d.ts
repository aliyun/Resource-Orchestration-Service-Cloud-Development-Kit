import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::CloudPhone::InstanceGroup`
 */
export interface RosInstanceGroupProps {
    /**
     * @Property imageId: The image id
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * @Property instanceType: instance type
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: vswitch id
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property amount: Specifies the number of ECS instances to create.Value range: 1~100
     * Default：1
     */
    readonly amount?: number | ros.IResolvable;
    /**
     * @Property autoPay: Whether to pay automatically, the default is true
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property autoRenew: Whether renew the fee automatically.
     * When the parameter InstanceChargeType is PrePaid, it will take effect.
     * Range of value:True: automatic renewal.
     * False: no automatic renewal. Default value is False.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property chargeType: Instance internet access charge type.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property description: Description of instance.
     * The length is 2~256 English or Chinese characters and cannot start with http:// and https://.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property eipBandwidth: EIP bandwidth value, the value range is 1-200.
     * Setting this parameter will automatically create an EIP instance
     * corresponding to the bandwidth and bind the EIP instance to the
     * cloud phone instance. When the instance is released, this EIP
     * instance will be released and recycled together.
     */
    readonly eipBandwidth?: number | ros.IResolvable;
    /**
     * @Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must
     * start with a letter or Chinese in size, can contain numbers, "_" or ".", "-"
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property keyPairName: Cloud phone instance key pair name.
     * The cloud phone key can be imported through the ImportKeyPair interface.
     */
    readonly keyPairName?: string | ros.IResolvable;
    /**
     * @Property period: Prepaid time period. While PeriodUnit is month, it could be 1, 2, 3, 6.
     * While PeriodUnit is year, it could be from 1 to 5Default value is 1.
     *
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Month/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property resolution: You can use the DescribeInstanceTypes interface to query the list of
     * resolutions supported by the current specification and select an appropriate resolution.
     */
    readonly resolution?: string | ros.IResolvable;
    /**
     * @Property tag: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property vncPassword: Cloud phone VNC password.
     * The password must be six characters long, and must contain only uppercase,
     * lowercase English letters and Arabic numerals.
     */
    readonly vncPassword?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CloudPhone::InstanceGroup`
 */
export declare class RosInstanceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudPhone::InstanceGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute InstanceIds: instance ids
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute OrderId: oder id
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute TradePrice: price
     */
    readonly attrTradePrice: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property imageId: The image id
     */
    imageId: string | ros.IResolvable;
    /**
     * @Property instanceType: instance type
     */
    instanceType: string | ros.IResolvable;
    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    securityGroupId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: vswitch id
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property amount: Specifies the number of ECS instances to create.Value range: 1~100
     * Default：1
     */
    amount: number | ros.IResolvable | undefined;
    /**
     * @Property autoPay: Whether to pay automatically, the default is true
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Whether renew the fee automatically.
     * When the parameter InstanceChargeType is PrePaid, it will take effect.
     * Range of value:True: automatic renewal.
     * False: no automatic renewal. Default value is False.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property chargeType: Instance internet access charge type.
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property description: Description of instance.
     * The length is 2~256 English or Chinese characters and cannot start with http:// and https://.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property eipBandwidth: EIP bandwidth value, the value range is 1-200.
     * Setting this parameter will automatically create an EIP instance
     * corresponding to the bandwidth and bind the EIP instance to the
     * cloud phone instance. When the instance is released, this EIP
     * instance will be released and recycled together.
     */
    eipBandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must
     * start with a letter or Chinese in size, can contain numbers, "_" or ".", "-"
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: Cloud phone instance key pair name.
     * The cloud phone key can be imported through the ImportKeyPair interface.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid time period. While PeriodUnit is month, it could be 1, 2, 3, 6.
     * While PeriodUnit is year, it could be from 1 to 5Default value is 1.
     *
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Month/Year. Default value is Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property resolution: You can use the DescribeInstanceTypes interface to query the list of
     * resolutions supported by the current specification and select an appropriate resolution.
     */
    resolution: string | ros.IResolvable | undefined;
    /**
     * @Property tag: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tag: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property vncPassword: Cloud phone VNC password.
     * The password must be six characters long, and must contain only uppercase,
     * lowercase English letters and Arabic numerals.
     */
    vncPassword: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::CloudPhone::InstanceGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstanceGroup {
    /**
     * @stability external
     */
    interface TagProperty {
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
