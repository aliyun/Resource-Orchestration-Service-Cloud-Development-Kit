import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDedicatedHost`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhost
 */
export interface RosDedicatedHostProps {
    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID
     */
    readonly dedicatedHostGroupId: string | ros.IResolvable;
    /**
     * @Property hostClass: Host Class
     */
    readonly hostClass: string | ros.IResolvable;
    /**
     * @Property paymentType: Payment Type
     */
    readonly paymentType: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VSwitch ID
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: Zone ID
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Whether Auto Renew
     */
    readonly autoRenew?: string | ros.IResolvable;
    /**
     * @Property hostName: Host Name
     */
    readonly hostName?: string | ros.IResolvable;
    /**
     * @Property imageCategory: Host Image Category
     */
    readonly imageCategory?: string | ros.IResolvable;
    /**
     * @Property osPassword:
     */
    readonly osPassword?: string | ros.IResolvable;
    /**
     * @Property period:
     */
    readonly period?: string | ros.IResolvable;
    /**
     * @Property tags: The tag of the resource
     */
    readonly tags?: RosDedicatedHost.TagsProperty[];
    /**
     * @Property usedTime:
     */
    readonly usedTime?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDDC::DedicatedHost`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHost` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhost
 */
export declare class RosDedicatedHost extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDDC::DedicatedHost";
    /**
     * @Attribute AutoRenew: Whether Auto Renew
     */
    readonly attrAutoRenew: ros.IResolvable;
    /**
     * @Attribute CpuAllocationRatio: CPU Allocation Ratio
     */
    readonly attrCpuAllocationRatio: ros.IResolvable;
    /**
     * @Attribute CpuUsed: CPU Used
     */
    readonly attrCpuUsed: ros.IResolvable;
    /**
     * @Attribute DedicatedHostGroupId: Dedicated Host Group ID
     */
    readonly attrDedicatedHostGroupId: ros.IResolvable;
    /**
     * @Attribute DedicatedHostId: The first ID of the resource
     */
    readonly attrDedicatedHostId: ros.IResolvable;
    /**
     * @Attribute DiskAllocationRatio: Disk Allocation Ratio
     */
    readonly attrDiskAllocationRatio: ros.IResolvable;
    /**
     * @Attribute EcsClassCode: ECS Class Code
     */
    readonly attrEcsClassCode: ros.IResolvable;
    /**
     * @Attribute HostClass: Host Class
     */
    readonly attrHostClass: ros.IResolvable;
    /**
     * @Attribute HostCpu: Host CPU
     */
    readonly attrHostCpu: ros.IResolvable;
    /**
     * @Attribute HostMem: Host Memory
     */
    readonly attrHostMem: ros.IResolvable;
    /**
     * @Attribute HostName: Host Name
     */
    readonly attrHostName: ros.IResolvable;
    /**
     * @Attribute HostStorage: Host Storage
     */
    readonly attrHostStorage: ros.IResolvable;
    /**
     * @Attribute HostType: Host Storage Type
     */
    readonly attrHostType: ros.IResolvable;
    /**
     * @Attribute ImageCategory: Host Image Category
     */
    readonly attrImageCategory: ros.IResolvable;
    /**
     * @Attribute IpAddress: Host IP Address
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * @Attribute MemAllocationRatio: Memory Allocation Ratio
     */
    readonly attrMemAllocationRatio: ros.IResolvable;
    /**
     * @Attribute MemoryUsed: Host Memory Used
     */
    readonly attrMemoryUsed: ros.IResolvable;
    /**
     * @Attribute OpenPermission: Whether Open OS Permission
     */
    readonly attrOpenPermission: ros.IResolvable;
    /**
     * @Attribute PaymentType: Payment Type
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute StorageUsed: Storage Used
     */
    readonly attrStorageUsed: ros.IResolvable;
    /**
     * @Attribute VSwitchId: VSwitch ID
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: VPC ID
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute ZoneId: Zone ID
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID
     */
    dedicatedHostGroupId: string | ros.IResolvable;
    /**
     * @Property hostClass: Host Class
     */
    hostClass: string | ros.IResolvable;
    /**
     * @Property paymentType: Payment Type
     */
    paymentType: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VSwitch ID
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: Zone ID
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Whether Auto Renew
     */
    autoRenew: string | ros.IResolvable | undefined;
    /**
     * @Property hostName: Host Name
     */
    hostName: string | ros.IResolvable | undefined;
    /**
     * @Property imageCategory: Host Image Category
     */
    imageCategory: string | ros.IResolvable | undefined;
    /**
     * @Property osPassword:
     */
    osPassword: string | ros.IResolvable | undefined;
    /**
     * @Property period:
     */
    period: string | ros.IResolvable | undefined;
    /**
     * @Property tags: The tag of the resource
     */
    tags: RosDedicatedHost.TagsProperty[] | undefined;
    /**
     * @Property usedTime:
     */
    usedTime: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDedicatedHost {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property tagKey: The key of the tags
         */
        readonly tagKey?: string | ros.IResolvable;
        /**
         * @Property tagValue: The value of the tags
         */
        readonly tagValue?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDedicatedHostAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostaccount
 */
export interface RosDedicatedHostAccountProps {
    /**
     * @Property accountName: The name of the account.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: The password for the host account. The password must meet the following
     * requirements:
     * - The password must be 6 to 32 characters in length.
     * - It must contain uppercase letters, lowercase letters, digits, and special
     * characters.
     * - Supported special characters: `!@#$%^&*()_+-=`
     * > If your engine is SQL Server, the password cannot contain the account name
     * (case-insensitive).
     */
    readonly accountPassword: string | ros.IResolvable;
    /**
     * @Property dedicatedHostId: The ID of the dedicated host.
     */
    readonly dedicatedHostId: string | ros.IResolvable;
    /**
     * @Property accountType: The type of the account.
     */
    readonly accountType?: string | ros.IResolvable;
    /**
     * @Property bastionInstanceId: The ID of the bastion instance.
     */
    readonly bastionInstanceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDDC::DedicatedHostAccount`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHostAccount` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostaccount
 */
export declare class RosDedicatedHostAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDDC::DedicatedHostAccount";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: The name of the account.
     */
    accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: The password for the host account. The password must meet the following
     * requirements:
     * - The password must be 6 to 32 characters in length.
     * - It must contain uppercase letters, lowercase letters, digits, and special
     * characters.
     * - Supported special characters: `!@#$%^&*()_+-=`
     * > If your engine is SQL Server, the password cannot contain the account name
     * (case-insensitive).
     */
    accountPassword: string | ros.IResolvable;
    /**
     * @Property dedicatedHostId: The ID of the dedicated host.
     */
    dedicatedHostId: string | ros.IResolvable;
    /**
     * @Property accountType: The type of the account.
     */
    accountType: string | ros.IResolvable | undefined;
    /**
     * @Property bastionInstanceId: The ID of the bastion instance.
     */
    bastionInstanceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostAccountProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosDedicatedHostGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostgroup
 */
export interface RosDedicatedHostGroupProps {
    /**
     * @Property engine: Database Engine Type
     */
    readonly engine: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property allocationPolicy: Allocation Policy
     */
    readonly allocationPolicy?: string | ros.IResolvable;
    /**
     * @Property cpuAllocationRatio: Cpu Allocation Ratio
     */
    readonly cpuAllocationRatio?: number | ros.IResolvable;
    /**
     * @Property dedicatedHostGroupDesc: Dedicated Host Group Description
     */
    readonly dedicatedHostGroupDesc?: string | ros.IResolvable;
    /**
     * @Property diskAllocationRatio: Disk Allocation Ratio
     */
    readonly diskAllocationRatio?: number | ros.IResolvable;
    /**
     * @Property hostReplacePolicy: Host Replace Policy
     */
    readonly hostReplacePolicy?: string | ros.IResolvable;
    /**
     * @Property memAllocationRatio: Memory Allocation Ratio
     */
    readonly memAllocationRatio?: number | ros.IResolvable;
    /**
     * @Property openPermission: Whether Open OS Permission
     */
    readonly openPermission?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDDC::DedicatedHostGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHostGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostgroup
 */
export declare class RosDedicatedHostGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDDC::DedicatedHostGroup";
    /**
     * @Attribute AllocationPolicy: Allocation Policy
     */
    readonly attrAllocationPolicy: ros.IResolvable;
    /**
     * @Attribute BastionInstanceId: BastionInstanceId
     */
    readonly attrBastionInstanceId: ros.IResolvable;
    /**
     * @Attribute CpuAllocateRation: CpuAllocateRation
     */
    readonly attrCpuAllocateRation: ros.IResolvable;
    /**
     * @Attribute CpuAllocatedAmount: CpuAllocatedAmount
     */
    readonly attrCpuAllocatedAmount: ros.IResolvable;
    /**
     * @Attribute CpuAllocationRatio: Cpu Allocation Ratio
     */
    readonly attrCpuAllocationRatio: ros.IResolvable;
    /**
     * @Attribute DedicatedHostGroupDesc: Dedicated Host Group Description
     */
    readonly attrDedicatedHostGroupDesc: ros.IResolvable;
    /**
     * @Attribute DedicatedHostGroupId: Dedicated Host Group ID
     */
    readonly attrDedicatedHostGroupId: ros.IResolvable;
    /**
     * @Attribute DeployType: DeployType
     */
    readonly attrDeployType: ros.IResolvable;
    /**
     * @Attribute DiskAllocateRation: DiskAllocateRation
     */
    readonly attrDiskAllocateRation: ros.IResolvable;
    /**
     * @Attribute DiskAllocatedAmount: DiskAllocatedAmount
     */
    readonly attrDiskAllocatedAmount: ros.IResolvable;
    /**
     * @Attribute DiskAllocationRatio: Disk Allocation Ratio
     */
    readonly attrDiskAllocationRatio: ros.IResolvable;
    /**
     * @Attribute DiskUsedAmount: DiskUsedAmount
     */
    readonly attrDiskUsedAmount: ros.IResolvable;
    /**
     * @Attribute DiskUtility: DiskUtility
     */
    readonly attrDiskUtility: ros.IResolvable;
    /**
     * @Attribute Engine: Database Engine Type
     */
    readonly attrEngine: ros.IResolvable;
    /**
     * @Attribute HostNumber: Total Host Number
     */
    readonly attrHostNumber: ros.IResolvable;
    /**
     * @Attribute HostReplacePolicy: Host Replace Policy
     */
    readonly attrHostReplacePolicy: ros.IResolvable;
    /**
     * @Attribute InstanceNumber: Total Instance Number
     */
    readonly attrInstanceNumber: ros.IResolvable;
    /**
     * @Attribute MemAllocateRation: MemAllocateRation
     */
    readonly attrMemAllocateRation: ros.IResolvable;
    /**
     * @Attribute MemAllocatedAmount: MemAllocatedAmount
     */
    readonly attrMemAllocatedAmount: ros.IResolvable;
    /**
     * @Attribute MemAllocationRatio: Memory Allocation Ratio
     */
    readonly attrMemAllocationRatio: ros.IResolvable;
    /**
     * @Attribute MemUsedAmount: MemUsedAmount
     */
    readonly attrMemUsedAmount: ros.IResolvable;
    /**
     * @Attribute MemUtility: MemUtility
     */
    readonly attrMemUtility: ros.IResolvable;
    /**
     * @Attribute OpenPermission: Whether Open OS Permission
     */
    readonly attrOpenPermission: ros.IResolvable;
    /**
     * @Attribute Text: Text
     */
    readonly attrText: ros.IResolvable;
    /**
     * @Attribute VpcId: VPC ID
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property engine: Database Engine Type
     */
    engine: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property allocationPolicy: Allocation Policy
     */
    allocationPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property cpuAllocationRatio: Cpu Allocation Ratio
     */
    cpuAllocationRatio: number | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostGroupDesc: Dedicated Host Group Description
     */
    dedicatedHostGroupDesc: string | ros.IResolvable | undefined;
    /**
     * @Property diskAllocationRatio: Disk Allocation Ratio
     */
    diskAllocationRatio: number | ros.IResolvable | undefined;
    /**
     * @Property hostReplacePolicy: Host Replace Policy
     */
    hostReplacePolicy: string | ros.IResolvable | undefined;
    /**
     * @Property memAllocationRatio: Memory Allocation Ratio
     */
    memAllocationRatio: number | ros.IResolvable | undefined;
    /**
     * @Property openPermission: Whether Open OS Permission
     */
    openPermission: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosMyBase`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-mybase
 */
export interface RosMyBaseProps {
    /**
     * @Property ecsClassList: ECS Class List.
     */
    readonly ecsClassList: Array<{
        [key: string]: any;
    }> | ros.IResolvable;
    /**
     * @Property engine: The database type. Valid values:
     * - mysql
     * - tair
     */
    readonly engine: string | ros.IResolvable;
    /**
     * @Property payType: Payment type, currently only supports PrePaid.
     */
    readonly payType: string | ros.IResolvable;
    /**
     * @Property period: The period of the subscription in months.
     */
    readonly period: number | ros.IResolvable;
    /**
     * @Property securityGroupId: The security group ID. Specify multiple security groups, separated by commas (,).
     * Format: sg-t4neld965n89ocvt,sg-t4neld965n89ocvu
     */
    readonly securityGroupId: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: Virtual switch ID.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: Availability Zone ID.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Whether to enable auto renew.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property dedicatedHostGroupDescription: The name of the dedicated cluster.
     */
    readonly dedicatedHostGroupDescription?: string | ros.IResolvable;
    /**
     * @Property dedicatedHostGroupId: The ID of the dedicated cluster.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;
    /**
     * @Property ecsDeploymentSetId: The ID of the deployment set.
     */
    readonly ecsDeploymentSetId?: string | ros.IResolvable;
    /**
     * @Property ecsHostName: For Windows operating systems: The host name must be 2 to 15 characters in length
     * and can contain uppercase letters, lowercase letters, and digits. It cannot
     * consist of only digits.
     * For other operating systems (such as Linux): The host name must be 2 to 64
     * characters in length and can contain periods (.) to separate multiple segments.
     * Each segment can contain uppercase letters, lowercase letters, and digits.
     * Consecutive periods (.) are not allowed. The host name cannot start or end with a
     * period (.).
     */
    readonly ecsHostName?: string | ros.IResolvable;
    /**
     * @Property ecsInstanceName: The instance name. It must be 2 to 128 characters in length. It must start with
     * an uppercase letter, a lowercase letter, or a Chinese character. It cannot start
     * with http\:\/\/ or https\:\/\/. It can contain Chinese characters, English letters,
     * digits, colons (:), underscores (_), periods (.), or hyphens (-). The default
     * value is the instance ID.
     */
    readonly ecsInstanceName?: string | ros.IResolvable;
    /**
     * @Property ecsUniqueSuffix: Automatically add a sequential suffix to the HostName and InstanceName when you
     * create multiple instances. The sequential suffix starts from 001 and increments
     * up to 999. Valid values:
     * - true: Add.
     * - false (default): Do not add.
     * If HostName or InstanceName is set in a specific sorting format, and the
     * name_suffix is not set (i.e., the naming format is
     * name_prefix\[begin_number,bits]), UniqueSuffix does not take effect. The names
     * are sorted only in the specified order.
     */
    readonly ecsUniqueSuffix?: boolean | ros.IResolvable;
    /**
     * @Property imageId: The custom image ID.
     * > If you want to use the default image, do not specify this parameter.
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * @Property internetChargeType: The network billing method. Valid values include the following:
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * @Property internetMaxBandwidthOut: The maximum outbound public bandwidth, in Mbit\/s. Valid values: 0 to 100.
     * Default value: 0. If you set this parameter to a value greater than 0, a public
     * IP address is automatically created.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;
    /**
     * @Property keyPairName: The name of the key pair.
     */
    readonly keyPairName?: string | ros.IResolvable;
    /**
     * @Property osPassword: The logon password for the host. You can set it later. The password must meet the
     * following requirements:
     * - It must be 8 to 30 characters in length.
     * - It must contain at least three of the following character types: uppercase
     * letters, lowercase letters, digits, and special characters.
     * - Special characters: `()\`\~!@#$%^&\*-_+=|{}\[]:;'<>,.?\/\`
     * > * If you want to set the logon password later, leave this parameter empty.
     * >
     * > * If you want to set the logon password, use HTTPS to send requests to prevent
     * password leakage.
     */
    readonly osPassword?: string | ros.IResolvable;
    /**
     * @Property passwordInherit: Use the default password of the image.
     * - false (default): Do not use.
     * - true: Use.
     * > If you use the default password of the image, do not specify the OSPassword
     * parameter.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;
    /**
     * @Property periodType: Prepaid type, currently only supports Monthly (monthly subscription).
     */
    readonly periodType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property userData: User-defined script data, the original data is up to 16KB.
     */
    readonly userData?: string | ros.IResolvable;
    /**
     * @Property userDataInBase64: Indicates whether the custom data is Base64-encoded.
     */
    readonly userDataInBase64?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDDC::MyBase`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MyBase` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-mybase
 */
export declare class RosMyBase extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDDC::MyBase";
    /**
     * @Attribute InstanceIds: The instance id list of created ecs instances
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute OrderIds: The order id list.
     */
    readonly attrOrderIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ecsClassList: ECS Class List.
     */
    ecsClassList: Array<{
        [key: string]: any;
    }> | ros.IResolvable;
    /**
     * @Property engine: The database type. Valid values:
     * - mysql
     * - tair
     */
    engine: string | ros.IResolvable;
    /**
     * @Property payType: Payment type, currently only supports PrePaid.
     */
    payType: string | ros.IResolvable;
    /**
     * @Property period: The period of the subscription in months.
     */
    period: number | ros.IResolvable;
    /**
     * @Property securityGroupId: The security group ID. Specify multiple security groups, separated by commas (,).
     * Format: sg-t4neld965n89ocvt,sg-t4neld965n89ocvu
     */
    securityGroupId: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: Virtual switch ID.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: Availability Zone ID.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Whether to enable auto renew.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostGroupDescription: The name of the dedicated cluster.
     */
    dedicatedHostGroupDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostGroupId: The ID of the dedicated cluster.
     */
    dedicatedHostGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property ecsDeploymentSetId: The ID of the deployment set.
     */
    ecsDeploymentSetId: string | ros.IResolvable | undefined;
    /**
     * @Property ecsHostName: For Windows operating systems: The host name must be 2 to 15 characters in length
     * and can contain uppercase letters, lowercase letters, and digits. It cannot
     * consist of only digits.
     * For other operating systems (such as Linux): The host name must be 2 to 64
     * characters in length and can contain periods (.) to separate multiple segments.
     * Each segment can contain uppercase letters, lowercase letters, and digits.
     * Consecutive periods (.) are not allowed. The host name cannot start or end with a
     * period (.).
     */
    ecsHostName: string | ros.IResolvable | undefined;
    /**
     * @Property ecsInstanceName: The instance name. It must be 2 to 128 characters in length. It must start with
     * an uppercase letter, a lowercase letter, or a Chinese character. It cannot start
     * with http\:\/\/ or https\:\/\/. It can contain Chinese characters, English letters,
     * digits, colons (:), underscores (_), periods (.), or hyphens (-). The default
     * value is the instance ID.
     */
    ecsInstanceName: string | ros.IResolvable | undefined;
    /**
     * @Property ecsUniqueSuffix: Automatically add a sequential suffix to the HostName and InstanceName when you
     * create multiple instances. The sequential suffix starts from 001 and increments
     * up to 999. Valid values:
     * - true: Add.
     * - false (default): Do not add.
     * If HostName or InstanceName is set in a specific sorting format, and the
     * name_suffix is not set (i.e., the naming format is
     * name_prefix\[begin_number,bits]), UniqueSuffix does not take effect. The names
     * are sorted only in the specified order.
     */
    ecsUniqueSuffix: boolean | ros.IResolvable | undefined;
    /**
     * @Property imageId: The custom image ID.
     * > If you want to use the default image, do not specify this parameter.
     */
    imageId: string | ros.IResolvable | undefined;
    /**
     * @Property internetChargeType: The network billing method. Valid values include the following:
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property internetMaxBandwidthOut: The maximum outbound public bandwidth, in Mbit\/s. Valid values: 0 to 100.
     * Default value: 0. If you set this parameter to a value greater than 0, a public
     * IP address is automatically created.
     */
    internetMaxBandwidthOut: number | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: The name of the key pair.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @Property osPassword: The logon password for the host. You can set it later. The password must meet the
     * following requirements:
     * - It must be 8 to 30 characters in length.
     * - It must contain at least three of the following character types: uppercase
     * letters, lowercase letters, digits, and special characters.
     * - Special characters: `()\`\~!@#$%^&\*-_+=|{}\[]:;'<>,.?\/\`
     * > * If you want to set the logon password later, leave this parameter empty.
     * >
     * > * If you want to set the logon password, use HTTPS to send requests to prevent
     * password leakage.
     */
    osPassword: string | ros.IResolvable | undefined;
    /**
     * @Property passwordInherit: Use the default password of the image.
     * - false (default): Do not use.
     * - true: Use.
     * > If you use the default password of the image, do not specify the OSPassword
     * parameter.
     */
    passwordInherit: boolean | ros.IResolvable | undefined;
    /**
     * @Property periodType: Prepaid type, currently only supports Monthly (monthly subscription).
     */
    periodType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property userData: User-defined script data, the original data is up to 16KB.
     */
    userData: string | ros.IResolvable | undefined;
    /**
     * @Property userDataInBase64: Indicates whether the custom data is Base64-encoded.
     */
    userDataInBase64: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMyBaseProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
