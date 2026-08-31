import * as ros from '@alicloud/ros-cdk-core';
import { RosLaunchTemplate } from './ecs.generated';
export { RosLaunchTemplate as LaunchTemplateProperty };
/**
 * Properties for defining a `LaunchTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplate
 */
export interface LaunchTemplateProps {
    /**
     * Property launchTemplateName: The name of launch template.
     */
    readonly launchTemplateName: string | ros.IResolvable;
    /**
     * Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    readonly autoReleaseTime?: string | ros.IResolvable;
    /**
     * Property deploymentSetId: The ID of the deployment set.
     */
    readonly deploymentSetId?: string | ros.IResolvable;
    /**
     * Property description: Description of the instance, [2, 256] characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     */
    readonly diskMappings?: Array<RosLaunchTemplate.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property hostName: Host name of created ecs instance. at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
     */
    readonly hostName?: string | ros.IResolvable;
    /**
     * Property imageId: Image ID to create ecs instance.
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * Property imageOwnerAlias: The source of the image. Valid values:
     * system: public images provided by Alibaba Cloud.
     * self: your custom images.
     * others: shared images from other Alibaba Cloud accounts.
     * marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are found, you can use these images without prior subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
     */
    readonly imageOwnerAlias?: string | ros.IResolvable;
    /**
     * Property instanceChargeType: The billing method of the instance. Valid values:
     * PrePaid: subscription. If you set this parameter to PrePaid, make sure that your account supports payment by credit. Otherwise, an InvalidPayMethod error is returned.
     * PostPaid: pay-as-you-go.
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * Property internetMaxBandwidthOut: Max internet out bandwidth in Mbps(Mega bit per second). Range is [0,200].While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;
    /**
     * Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only.
     */
    readonly ioOptimized?: string | ros.IResolvable;
    /**
     * Property ipv6AddressCount: The number of IPv6 addresses to be randomly generated for the primary ENI. Valid values: 1 to 10.
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;
    /**
     * Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string | ros.IResolvable;
    /**
     * Property networkInterfaces: Elastic network interfaces to be attached to instance.
     */
    readonly networkInterfaces?: Array<RosLaunchTemplate.NetworkInterfacesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property networkType: Instance network type. Support 'vpc' and 'classic'
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * Property passwordInherit: Specifies whether to use the password preset in the image.
     * Note When you use this parameter, leave Password empty and make sure that the selected image has a password preset.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;
    /**
     * Property period: The subscription period of the instance. Unit: months.
     * This parameter is valid and required only when InstanceChargeType is set to PrePaid.
     * Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property privateIpAddress: The private IP address of the instance.
     * To assign a private IP address to an instance of the VPC type, make sure that the IP address is an idle IP address within the CIDR block of the vSwitch specified by the VSwitchId parameter.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
    /**
     * Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which to assign the instance, Elastic Block Storage (EBS) device, and elastic network interface (ENI).
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive"
     */
    readonly securityEnhancementStrategy?: string | ros.IResolvable;
    /**
     * Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * Property securityGroupIds: The ID of security group list to which to assign the instance.
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property spotDuration: The protection period of the preemptible instance. Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
     * Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
     * If this parameter is set to 0, no protection period is configured for the preemptible instance.
     * Default value: 1.
     */
    readonly spotDuration?: number | ros.IResolvable;
    /**
     * Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Three decimals is allowed at most.
     */
    readonly spotPriceLimit?: string | ros.IResolvable;
    /**
     * Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "
     */
    readonly spotStrategy?: string | ros.IResolvable;
    /**
     * Property systemDiskCategory: Category of system disk. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    readonly systemDiskCategory?: string | ros.IResolvable;
    /**
     * Property systemDiskDeleteWithInstance: Specifies whether to release the system disk when the instance is released. Valid values:
     * true: releases the system disk when the instance is released.
     * false: does not release the system disk when the instance is released.
     * Default value: true.
     */
    readonly systemDiskDeleteWithInstance?: boolean | ros.IResolvable;
    /**
     * Property systemDiskDescription: Description of created system disk.
     */
    readonly systemDiskDescription?: string | ros.IResolvable;
    /**
     * Property systemDiskDiskName: Name of created system disk.
     */
    readonly systemDiskDiskName?: string | ros.IResolvable;
    /**
     * Property systemDiskPerformanceLevel: The performance level of the ESSD that is used as the system disk. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 random read\/write IOPS.
     * PL1: A single ESSD can deliver up to 50,000 random read\/write IOPS.
     * PL2: A single ESSD can deliver up to 100,000 random read\/write IOPS.
     * PL3: A single ESSD can deliver up to 1,000,000 random read\/write IOPS.
     */
    readonly systemDiskPerformanceLevel?: string | ros.IResolvable;
    /**
     * Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    readonly systemDiskSize?: number | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance, security group, disk and network interface.
     */
    readonly tags?: RosLaunchTemplate.TagsProperty[];
    /**
     * Property templateResourceGroupId: The ID of the resource group to which to assign the launch template.
     */
    readonly templateResourceGroupId?: string | ros.IResolvable;
    /**
     * Property templateTags: Template tags to attach to launch template.
     */
    readonly templateTags?: Array<RosLaunchTemplate.TemplateTagsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property userData: User data to pass to instance. [1, 16KB] characters.
     */
    readonly userData?: string | ros.IResolvable;
    /**
     * Property versionDescription: Description for version 1 of launch template.
     */
    readonly versionDescription?: string | ros.IResolvable;
    /**
     * Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * Property zoneId: Current zone to create the instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * Represents a `LaunchTemplate`.
 */
export interface ILaunchTemplate extends ros.IResource {
    readonly props: LaunchTemplateProps;
    /**
     * Attribute DefaultVersionNumber: The default version number of launch template.
     */
    readonly attrDefaultVersionNumber: ros.IResolvable | string;
    /**
     * Attribute LatestVersionNumber: The latest version number of launch template.
     */
    readonly attrLatestVersionNumber: ros.IResolvable | string;
    /**
     * Attribute LaunchTemplateId: The id of launch template.
     */
    readonly attrLaunchTemplateId: ros.IResolvable | string;
    /**
     * Attribute LaunchTemplateName: The name of launch template.
     */
    readonly attrLaunchTemplateName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::LaunchTemplate`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLaunchTemplate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplate
 */
export declare class LaunchTemplate extends ros.Resource implements ILaunchTemplate {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: LaunchTemplateProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DefaultVersionNumber: The default version number of launch template.
     */
    readonly attrDefaultVersionNumber: ros.IResolvable | string;
    /**
     * Attribute LatestVersionNumber: The latest version number of launch template.
     */
    readonly attrLatestVersionNumber: ros.IResolvable | string;
    /**
     * Attribute LaunchTemplateId: The id of launch template.
     */
    readonly attrLaunchTemplateId: ros.IResolvable | string;
    /**
     * Attribute LaunchTemplateName: The name of launch template.
     */
    readonly attrLaunchTemplateName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LaunchTemplateProps, enableResourcePropertyConstraint?: boolean);
}
