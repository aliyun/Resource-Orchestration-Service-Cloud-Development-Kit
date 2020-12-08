import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::Memcache::Instance`
 */
export interface RosInstanceProps {
    /**
     * @Property autoRenew: Specifies whether to enable auto renewal. Valid values:
     * true
     * false
     * Note Default value: false.
     */
    readonly autoRenew?: string;
    /**
     * @Property autoRenewPeriod: The period of the auto renewal. Unit: months. Valid values:
     * 1
     * 2
     * 3
     * 6
     * 12
     * Note You must specify this parameter if the value of the AutoRenew parameter is true.
     */
    readonly autoRenewPeriod?: string;
    /**
     * @Property autoUseCoupon: Specifies whether to use a coupon. Valid values:
     * true
     * false
     * Note Default value: false.
     */
    readonly autoUseCoupon?: string;
    /**
     * @Property backupPolicy: Backup policy
     */
    readonly backupPolicy?: RosInstance.BackupPolicyProperty | ros.IResolvable;
    /**
     * @Property capacity: The storage capacity of the instance. Unit: MB.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    readonly capacity?: number;
    /**
     * @Property chargeType: The billing method of the instance. Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Note Default value: PostPaid.
     */
    readonly chargeType?: string;
    /**
     * @Property config: The parameter configuration of the instance, in a JSON string. For more information,
     * see Set parameters.
     */
    readonly config?: string;
    /**
     * @Property couponNo: The coupon number. Default value: youhuiquan_promotion_option_id_for_blank.
     */
    readonly couponNo?: string;
    /**
     * @Property instanceClass: The instance type. For more information, see Instance types.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    readonly instanceClass?: string;
    /**
     * @Property instanceName: The name of the instance. The name can be 2 to 128 characters in length and must start
     * with a letter. The following characters are not supported: at signs (@), forward slashes (/), colons (:), equal signs (=), double quotation marks
     * ("), angle brackets (<>), braces ([]), curly brackets ({}) and spaces.
     */
    readonly instanceName?: string;
    /**
     * @Property networkType: The network type of the instance. Valid values:
     * CLASSIC
     * VPC
     * Note Default value: CLASSIC.
     */
    readonly networkType?: string;
    /**
     * @Property password: The password of the instance. The password can be 8 to 32 characters in length and
     * must contain at least three types of the following characters: uppercase letters,
     * lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
     * ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
     * hyphens (-), and equal signs (=).
     */
    readonly password?: string;
    /**
     * @Property period: The subscription period. You must specify this parameter if the value of the ChargeType
     * parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
     * and 36.
     * Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
     */
    readonly period?: string;
    /**
     * @Property privateIpAddress: The internal IP address of the instance.
     * Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
     * block of the VSwitch to which the instance belongs.
     */
    readonly privateIpAddress?: string;
    /**
     * @Property resourceGroupId: Resource group ID.
     */
    readonly resourceGroupId?: string;
    /**
     * @Property vpcId: The ID of the VPC.
     */
    readonly vpcId?: string;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId?: string;
    /**
     * @Property zoneId: The ID of the zone in which the instance is created. You can call the DescribeRegions operation to query the latest region list.
     */
    readonly zoneId?: string;
}
/**
 * A ROS template type:  `ALIYUN::Memcache::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Memcache::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ConnectionDomain: The internal endpoint of the instance.
     */
    readonly attrConnectionDomain: any;
    /**
     * @Attribute InstanceId: The globally unique identifier (GUID) of the instance.
     */
    readonly attrInstanceId: any;
    /**
     * @Attribute InstanceName: The name of the instance.
     */
    readonly attrInstanceName: any;
    /**
     * @Attribute Port: Port of created instance.
     */
    readonly attrPort: any;
    /**
     * @Attribute QPS: QPS.
     */
    readonly attrQps: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property autoRenew: Specifies whether to enable auto renewal. Valid values:
     * true
     * false
     * Note Default value: false.
     */
    autoRenew: string | undefined;
    /**
     * @Property autoRenewPeriod: The period of the auto renewal. Unit: months. Valid values:
     * 1
     * 2
     * 3
     * 6
     * 12
     * Note You must specify this parameter if the value of the AutoRenew parameter is true.
     */
    autoRenewPeriod: string | undefined;
    /**
     * @Property autoUseCoupon: Specifies whether to use a coupon. Valid values:
     * true
     * false
     * Note Default value: false.
     */
    autoUseCoupon: string | undefined;
    /**
     * @Property backupPolicy: Backup policy
     */
    backupPolicy: RosInstance.BackupPolicyProperty | ros.IResolvable | undefined;
    /**
     * @Property capacity: The storage capacity of the instance. Unit: MB.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    capacity: number | undefined;
    /**
     * @Property chargeType: The billing method of the instance. Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Note Default value: PostPaid.
     */
    chargeType: string | undefined;
    /**
     * @Property config: The parameter configuration of the instance, in a JSON string. For more information,
     * see Set parameters.
     */
    config: string | undefined;
    /**
     * @Property couponNo: The coupon number. Default value: youhuiquan_promotion_option_id_for_blank.
     */
    couponNo: string | undefined;
    /**
     * @Property instanceClass: The instance type. For more information, see Instance types.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    instanceClass: string | undefined;
    /**
     * @Property instanceName: The name of the instance. The name can be 2 to 128 characters in length and must start
     * with a letter. The following characters are not supported: at signs (@), forward slashes (/), colons (:), equal signs (=), double quotation marks
     * ("), angle brackets (<>), braces ([]), curly brackets ({}) and spaces.
     */
    instanceName: string | undefined;
    /**
     * @Property networkType: The network type of the instance. Valid values:
     * CLASSIC
     * VPC
     * Note Default value: CLASSIC.
     */
    networkType: string | undefined;
    /**
     * @Property password: The password of the instance. The password can be 8 to 32 characters in length and
     * must contain at least three types of the following characters: uppercase letters,
     * lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
     * ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
     * hyphens (-), and equal signs (=).
     */
    password: string | undefined;
    /**
     * @Property period: The subscription period. You must specify this parameter if the value of the ChargeType
     * parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
     * and 36.
     * Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
     */
    period: string | undefined;
    /**
     * @Property privateIpAddress: The internal IP address of the instance.
     * Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
     * block of the VSwitch to which the instance belongs.
     */
    privateIpAddress: string | undefined;
    /**
     * @Property resourceGroupId: Resource group ID.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property vpcId: The ID of the VPC.
     */
    vpcId: string | undefined;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    vpcPasswordFree: boolean | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    vSwitchId: string | undefined;
    /**
     * @Property zoneId: The ID of the zone in which the instance is created. You can call the DescribeRegions operation to query the latest region list.
     */
    zoneId: string | undefined;
    /**
     * Create a new `ALIYUN::Memcache::Instance`.
     *
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
         * @Property preferredBackupPeriod: The backup cycle. Only for PostPaid instance. Valid values: Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
         */
        readonly preferredBackupPeriod: string;
        /**
         * @Property preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
         */
        readonly preferredBackupTime: string;
        /**
         * @Property enableBackupLog: Enable or disable incremental backup. Options:
     * 1, means open.
     * 0, which means off, the default value.
         */
        readonly enableBackupLog?: number;
    }
}
/**
 * Properties for defining a `ALIYUN::Memcache::Whitelist`
 */
export interface RosWhitelistProps {
    /**
     * @Property instanceId: Instance ID (globally unique)
     */
    readonly instanceId: string;
    /**
     * @Property securityIps: IP address whitelist to be modified
     */
    readonly securityIps: string;
    /**
     * @Property securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    readonly securityIpGroupAttribute?: string;
    /**
     * @Property securityIpGroupName: Whitelist group
     */
    readonly securityIpGroupName?: string;
}
/**
 * A ROS template type:  `ALIYUN::Memcache::Whitelist`
 */
export declare class RosWhitelist extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Memcache::Whitelist";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SecurityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    readonly attrSecurityIpGroupAttribute: any;
    /**
     * @Attribute SecurityIpGroupName: Whitelist group
     */
    readonly attrSecurityIpGroupName: any;
    /**
     * @Attribute SecurityIps: IP address whitelist to be modified
     */
    readonly attrSecurityIps: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: Instance ID (globally unique)
     */
    instanceId: string;
    /**
     * @Property securityIps: IP address whitelist to be modified
     */
    securityIps: string;
    /**
     * @Property securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    securityIpGroupAttribute: string | undefined;
    /**
     * @Property securityIpGroupName: Whitelist group
     */
    securityIpGroupName: string | undefined;
    /**
     * Create a new `ALIYUN::Memcache::Whitelist`.
     *
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
