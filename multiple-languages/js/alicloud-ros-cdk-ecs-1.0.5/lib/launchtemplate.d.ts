import * as ros from '@alicloud/ros-cdk-core';
import { RosLaunchTemplate } from './ecs.generated';
export { RosLaunchTemplate as LaunchTemplateProperty };
/**
 * Properties for defining a `ALIYUN::ECS::LaunchTemplate`
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
     * Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string | ros.IResolvable;
    /**
     * Property securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive"
     */
    readonly securityEnhancementStrategy?: string | ros.IResolvable;
    /**
     * Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string | ros.IResolvable;
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
     * Property systemDiskDescription: Description of created system disk.
     */
    readonly systemDiskDescription?: string | ros.IResolvable;
    /**
     * Property systemDiskDiskName: Name of created system disk.
     */
    readonly systemDiskDiskName?: string | ros.IResolvable;
    /**
     * Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
     */
    readonly systemDiskSize?: number | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance, security group, disk and network interface.
     */
    readonly tags?: RosLaunchTemplate.TagsProperty[];
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
 * A ROS resource type:  `ALIYUN::ECS::LaunchTemplate`
 */
export declare class LaunchTemplate extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DefaultVersionNumber: The default version number of launch template.
     */
    readonly attrDefaultVersionNumber: ros.IResolvable;
    /**
     * Attribute LatestVersionNumber: The latest version number of launch template.
     */
    readonly attrLatestVersionNumber: ros.IResolvable;
    /**
     * Attribute LaunchTemplateId: The id of launch template.
     */
    readonly attrLaunchTemplateId: ros.IResolvable;
    /**
     * Attribute LaunchTemplateName: The name of launch template.
     */
    readonly attrLaunchTemplateName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ECS::LaunchTemplate`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LaunchTemplateProps, enableResourcePropertyConstraint?: boolean);
}
