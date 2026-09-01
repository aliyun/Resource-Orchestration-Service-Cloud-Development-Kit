import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-memcache-instance
 */
export interface RosInstanceProps {
    /**
     * @Property autoRenew: Specifies whether to enable auto renewal. Valid values:
     * true
     * false
     * Note Default value: false.
     */
    readonly autoRenew?: string | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: The auto-renewal duration, in months. Valid values: 1, 2, 3, 6, and 12.
     * > This parameter is required when AutoRenew is set to true.
     */
    readonly autoRenewPeriod?: string | ros.IResolvable;
    /**
     * @Property autoUseCoupon: Specifies whether to use a coupon. Valid values:
     * true
     * false
     * Note Default value: false.
     */
    readonly autoUseCoupon?: string | ros.IResolvable;
    /**
     * @Property backupPolicy: Backup policy
     */
    readonly backupPolicy?: RosInstance.BackupPolicyProperty | ros.IResolvable;
    /**
     * @Property capacity: The storage capacity of the instance. Unit: MB.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    readonly capacity?: number | ros.IResolvable;
    /**
     * @Property chargeType: The billing method of the instance. Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Note Default value: PostPaid.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property config: The parameter configuration of the instance, in a JSON string. For more information,
     * see Set parameters.
     */
    readonly config?: string | ros.IResolvable;
    /**
     * @Property couponNo: The coupon code. Default value: `default`.
     */
    readonly couponNo?: string | ros.IResolvable;
    /**
     * @Property instanceClass: The instance type. For more information, see Instance types.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    readonly instanceClass?: string | ros.IResolvable;
    /**
     * @Property instanceName: The name of the instance. The name must be 2 to 80 characters long, start with a
     * letter (uppercase or lowercase) or a Chinese character, and not contain spaces or
     * the characters `@\/:=”<>{[]}`.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property networkType: The network type of the instance. Valid values:
     * CLASSIC
     * VPC
     * Note Default value: CLASSIC.
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * @Property password: The password for the instance. The password must be 8 to 32 characters long and
     * contain at least three of the following character types: uppercase letters,
     * lowercase letters, digits, and special characters. The allowed special characters
     * are `!@#$%^&*()_+-=`.
     */
    readonly password?: string | ros.IResolvable;
    /**
     * @Property period: The subscription duration, in months. Valid values: 1 to 9, 12, 24, 36, and 60.
     * > This parameter is available and required only when ChargeType is set to
     * PrePaid.
     */
    readonly period?: string | ros.IResolvable;
    /**
     * @Property privateIpAddress: The internal IP address of the instance.
     * Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
     * block of the VSwitch to which the instance belongs.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the primary zone for the instance. You can call the [DescribeZones]()
     * operation to query available zones.
     * > You can also specify a secondary zone by using the `SecondaryZoneId` parameter.
     * The primary and replica nodes are then deployed in the specified primary and
     * secondary zones to create a dual-zone architecture for in-city disaster recovery.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Memcache::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-memcache-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Memcache::Instance";
    /**
     * @Attribute ConnectionDomain: The internal endpoint of the instance.
     */
    readonly attrConnectionDomain: ros.IResolvable;
    /**
     * @Attribute InstanceId: The globally unique identifier (GUID) of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceName: The name of the instance.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute Port: Port of created instance.
     */
    readonly attrPort: ros.IResolvable;
    /**
     * @Attribute QPS: QPS.
     */
    readonly attrQps: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property autoRenew: Specifies whether to enable auto renewal. Valid values:
     * true
     * false
     * Note Default value: false.
     */
    autoRenew: string | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: The auto-renewal duration, in months. Valid values: 1, 2, 3, 6, and 12.
     * > This parameter is required when AutoRenew is set to true.
     */
    autoRenewPeriod: string | ros.IResolvable | undefined;
    /**
     * @Property autoUseCoupon: Specifies whether to use a coupon. Valid values:
     * true
     * false
     * Note Default value: false.
     */
    autoUseCoupon: string | ros.IResolvable | undefined;
    /**
     * @Property backupPolicy: Backup policy
     */
    backupPolicy: RosInstance.BackupPolicyProperty | ros.IResolvable | undefined;
    /**
     * @Property capacity: The storage capacity of the instance. Unit: MB.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    capacity: number | ros.IResolvable | undefined;
    /**
     * @Property chargeType: The billing method of the instance. Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Note Default value: PostPaid.
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property config: The parameter configuration of the instance, in a JSON string. For more information,
     * see Set parameters.
     */
    config: string | ros.IResolvable | undefined;
    /**
     * @Property couponNo: The coupon code. Default value: `default`.
     */
    couponNo: string | ros.IResolvable | undefined;
    /**
     * @Property instanceClass: The instance type. For more information, see Instance types.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    instanceClass: string | ros.IResolvable | undefined;
    /**
     * @Property instanceName: The name of the instance. The name must be 2 to 80 characters long, start with a
     * letter (uppercase or lowercase) or a Chinese character, and not contain spaces or
     * the characters `@\/:=”<>{[]}`.
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property networkType: The network type of the instance. Valid values:
     * CLASSIC
     * VPC
     * Note Default value: CLASSIC.
     */
    networkType: string | ros.IResolvable | undefined;
    /**
     * @Property password: The password for the instance. The password must be 8 to 32 characters long and
     * contain at least three of the following character types: uppercase letters,
     * lowercase letters, digits, and special characters. The allowed special characters
     * are `!@#$%^&*()_+-=`.
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription duration, in months. Valid values: 1 to 9, 12, 24, 36, and 60.
     * > This parameter is available and required only when ChargeType is set to
     * PrePaid.
     */
    period: string | ros.IResolvable | undefined;
    /**
     * @Property privateIpAddress: The internal IP address of the instance.
     * Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
     * block of the VSwitch to which the instance belongs.
     */
    privateIpAddress: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group ID.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the VPC.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    vpcPasswordFree: boolean | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The ID of the primary zone for the instance. You can call the [DescribeZones]()
     * operation to query available zones.
     * > You can also specify a secondary zone by using the `SecondaryZoneId` parameter.
     * The primary and replica nodes are then deployed in the specified primary and
     * secondary zones to create a dual-zone architecture for in-city disaster recovery.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface BackupPolicyProperty {
        /**
         * @Property preferredBackupPeriod: The backup cycle. Only for PostPaid instance. Valid values: Monday\/Tuesday\/Wednesday\/Thursday\/Friday\/Saturday\/Sunday
         */
        readonly preferredBackupPeriod: string | ros.IResolvable;
        /**
         * @Property preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
         */
        readonly preferredBackupTime: string | ros.IResolvable;
        /**
         * @Property enableBackupLog: Enable or disable incremental backup. Options:
     * 1, means open.
     * 0, which means off, the default value.
         */
        readonly enableBackupLog?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosWhitelist`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-memcache-whitelist
 */
export interface RosWhitelistProps {
    /**
     * @Property instanceId: Instance ID (globally unique)
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property securityIps: The IP addresses in the whitelist. Up to 1,000 IP addresses can be specified in a
     * whitelist. Separate multiple IP addresses with a comma (,). Specify an IP address
     * in the 0.0.0.0\/0, 10.23.12.24, or 10.23.12.24\/24 format. In CIDR block
     * 10.23.12.24\/24, \/24 specifies the length of the prefix of an IP address. The
     * prefix length ranges from 1 to 32.
     */
    readonly securityIps: string | ros.IResolvable;
    /**
     * @Property securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    readonly securityIpGroupAttribute?: string | ros.IResolvable;
    /**
     * @Property securityIpGroupName: The name of the IP address whitelist.
     * ><warning>You cannot modify the whitelist that is generated by the system. If you
     * do not specify this parameter, the default whitelist is modified by
     * default.><\/warning>
     */
    readonly securityIpGroupName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Memcache::Whitelist`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Whitelist` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-memcache-whitelist
 */
export declare class RosWhitelist extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Memcache::Whitelist";
    /**
     * @Attribute SecurityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    readonly attrSecurityIpGroupAttribute: ros.IResolvable;
    /**
     * @Attribute SecurityIpGroupName: Whitelist group
     */
    readonly attrSecurityIpGroupName: ros.IResolvable;
    /**
     * @Attribute SecurityIps: IP address whitelist to be modified
     */
    readonly attrSecurityIps: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: Instance ID (globally unique)
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property securityIps: The IP addresses in the whitelist. Up to 1,000 IP addresses can be specified in a
     * whitelist. Separate multiple IP addresses with a comma (,). Specify an IP address
     * in the 0.0.0.0\/0, 10.23.12.24, or 10.23.12.24\/24 format. In CIDR block
     * 10.23.12.24\/24, \/24 specifies the length of the prefix of an IP address. The
     * prefix length ranges from 1 to 32.
     */
    securityIps: string | ros.IResolvable;
    /**
     * @Property securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    securityIpGroupAttribute: string | ros.IResolvable | undefined;
    /**
     * @Property securityIpGroupName: The name of the IP address whitelist.
     * ><warning>You cannot modify the whitelist that is generated by the system. If you
     * do not specify this parameter, the default whitelist is modified by
     * default.><\/warning>
     */
    securityIpGroupName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWhitelistProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
