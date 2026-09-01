import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './memcache.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-memcache-instance
 */
export interface InstanceProps {
    /**
     * Property autoRenew: Specifies whether to enable auto renewal. Valid values:
     * true
     * false
     * Note Default value: false.
     */
    readonly autoRenew?: string | ros.IResolvable;
    /**
     * Property autoRenewPeriod: The auto-renewal duration, in months. Valid values: 1, 2, 3, 6, and 12.
     * > This parameter is required when AutoRenew is set to true.
     */
    readonly autoRenewPeriod?: string | ros.IResolvable;
    /**
     * Property autoUseCoupon: Specifies whether to use a coupon. Valid values:
     * true
     * false
     * Note Default value: false.
     */
    readonly autoUseCoupon?: string | ros.IResolvable;
    /**
     * Property backupPolicy: Backup policy
     */
    readonly backupPolicy?: RosInstance.BackupPolicyProperty | ros.IResolvable;
    /**
     * Property capacity: The storage capacity of the instance. Unit: MB.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    readonly capacity?: number | ros.IResolvable;
    /**
     * Property chargeType: The billing method of the instance. Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Note Default value: PostPaid.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * Property config: The parameter configuration of the instance, in a JSON string. For more information,
     * see Set parameters.
     */
    readonly config?: string | ros.IResolvable;
    /**
     * Property couponNo: The coupon code. Default value: `default`.
     */
    readonly couponNo?: string | ros.IResolvable;
    /**
     * Property instanceClass: The instance type. For more information, see Instance types.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    readonly instanceClass?: string | ros.IResolvable;
    /**
     * Property instanceName: The name of the instance. The name must be 2 to 80 characters long, start with a
     * letter (uppercase or lowercase) or a Chinese character, and not contain spaces or
     * the characters `@\/:=”<>{[]}`.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * Property networkType: The network type of the instance. Valid values:
     * CLASSIC
     * VPC
     * Note Default value: CLASSIC.
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * Property password: The password for the instance. The password must be 8 to 32 characters long and
     * contain at least three of the following character types: uppercase letters,
     * lowercase letters, digits, and special characters. The allowed special characters
     * are `!@#$%^&*()_+-=`.
     */
    readonly password?: string | ros.IResolvable;
    /**
     * Property period: The subscription duration, in months. Valid values: 1 to 9, 12, 24, 36, and 60.
     * > This parameter is available and required only when ChargeType is set to
     * PrePaid.
     */
    readonly period?: string | ros.IResolvable;
    /**
     * Property privateIpAddress: The internal IP address of the instance.
     * Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
     * block of the VSwitch to which the instance belongs.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the VPC.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;
    /**
     * Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * Property zoneId: The ID of the primary zone for the instance. You can call the [DescribeZones]()
     * operation to query available zones.
     * > You can also specify a secondary zone by using the `SecondaryZoneId` parameter.
     * The primary and replica nodes are then deployed in the specified primary and
     * secondary zones to create a dual-zone architecture for in-city disaster recovery.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;
    /**
     * Attribute ConnectionDomain: The internal endpoint of the instance.
     */
    readonly attrConnectionDomain: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The globally unique identifier (GUID) of the instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute InstanceName: The name of the instance.
     */
    readonly attrInstanceName: ros.IResolvable | string;
    /**
     * Attribute Port: Port of created instance.
     */
    readonly attrPort: ros.IResolvable | string;
    /**
     * Attribute QPS: QPS.
     */
    readonly attrQps: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Memcache::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-memcache-instance
 */
export declare class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConnectionDomain: The internal endpoint of the instance.
     */
    readonly attrConnectionDomain: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The globally unique identifier (GUID) of the instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute InstanceName: The name of the instance.
     */
    readonly attrInstanceName: ros.IResolvable | string;
    /**
     * Attribute Port: Port of created instance.
     */
    readonly attrPort: ros.IResolvable | string;
    /**
     * Attribute QPS: QPS.
     */
    readonly attrQps: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
