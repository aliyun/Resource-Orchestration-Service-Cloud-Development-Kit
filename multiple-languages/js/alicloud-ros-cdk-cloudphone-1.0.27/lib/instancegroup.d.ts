import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceGroup } from './cloudphone.generated';
export { RosInstanceGroup as InstanceGroupProperty };
/**
 * Properties for defining a `InstanceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-instancegroup
 */
export interface InstanceGroupProps {
    /**
     * Property imageId: The image id
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * Property instanceType: instance type
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId: string | ros.IResolvable;
    /**
     * Property vSwitchId: vswitch id
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property amount: Specifies the number of ECS instances to create.Value range: 1~100
     * Default：1
     */
    readonly amount?: number | ros.IResolvable;
    /**
     * Property autoPay: Whether to pay automatically, the default is true
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * Property autoRenew: Whether renew the fee automatically.
     * When the parameter InstanceChargeType is PrePaid, it will take effect.
     * Range of value:True: automatic renewal.
     * False: no automatic renewal. Default value is False.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * Property chargeType: Instance internet access charge type.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * Property description: Description of instance.
     * The length is 2~256 English or Chinese characters and cannot start with http:\/\/ and https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property eipBandwidth: EIP bandwidth value, the value range is 1-200.
     * Setting this parameter will automatically create an EIP instance
     * corresponding to the bandwidth and bind the EIP instance to the
     * cloud phone instance. When the instance is released, this EIP
     * instance will be released and recycled together.
     */
    readonly eipBandwidth?: number | ros.IResolvable;
    /**
     * Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must
     * start with a letter or Chinese in size, can contain numbers, "_" or ".", "-"
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * Property keyPairName: Cloud phone instance key pair name.
     * The cloud phone key can be imported through the ImportKeyPair interface.
     */
    readonly keyPairName?: string | ros.IResolvable;
    /**
     * Property period: Prepaid time period. While PeriodUnit is month, it could be 1, 2, 3, 6.
     * While PeriodUnit is year, it could be from 1 to 5Default value is 1.
     *
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property periodUnit: Unit of prepaid time period, it could be Month\/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * Property resolution: You can use the DescribeInstanceTypes interface to query the list of
     * resolutions supported by the current specification and select an appropriate resolution.
     */
    readonly resolution?: string | ros.IResolvable;
    /**
     * Property tag: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
    /**
     * Property vncPassword: Cloud phone VNC password.
     * The password must be six characters long, and must contain only uppercase,
     * lowercase English letters and Arabic numerals.
     */
    readonly vncPassword?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudPhone::InstanceGroup`, which is used to create and start Elastic Cloud Phone (ECP) instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstanceGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-instancegroup
 */
export declare class InstanceGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceIds: instance ids
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Attribute OrderId: oder id
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * Attribute PrivateIps: Private IP address list of created cloud phone instances. Only for VPC instance.
     */
    readonly attrPrivateIps: ros.IResolvable;
    /**
     * Attribute TradePrice: price
     */
    readonly attrTradePrice: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceGroupProps, enableResourcePropertyConstraint?: boolean);
}
