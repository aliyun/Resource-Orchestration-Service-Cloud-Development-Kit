import * as ros from '@alicloud/ros-cdk-core';
import { RosLaunchTemplate } from './ecs.generated';
export { RosLaunchTemplate as LaunchTemplateProperty };
/**
 * Properties for defining a `LaunchTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplate
 */
export interface LaunchTemplateProps {
    /**
     * Property launchTemplateId: Template ID.
     */
    readonly launchTemplateId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::LaunchTemplate`, which is used to query the information about a launch template.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLaunchTemplate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplate
 */
export declare class LaunchTemplate extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: LaunchTemplateProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AutoReleaseTime: Automatic release time (UTC). The format is: yyyy-MM-ddTHH:mm:ssZ.
     */
    readonly attrAutoReleaseTime: ros.IResolvable;
    /**
     * Attribute CreateTime: The time when the instance launch template was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute CreatedBy: The creator of the launch template.
     */
    readonly attrCreatedBy: ros.IResolvable;
    /**
     * Attribute DataDisk: Data disk information list.
     */
    readonly attrDataDisk: ros.IResolvable;
    /**
     * Attribute DefaultVersionNumber: The default version number of the template.
     */
    readonly attrDefaultVersionNumber: ros.IResolvable;
    /**
     * Attribute DeletionProtection: Instance deletion protection attribute.
     */
    readonly attrDeletionProtection: ros.IResolvable;
    /**
     * Attribute DeploymentSetId: The ID of the deployment set.
     */
    readonly attrDeploymentSetId: ros.IResolvable;
    /**
     * Attribute Description: Instance description. 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute HostName: The hostname of the instance.
     */
    readonly attrHostName: ros.IResolvable;
    /**
     * Attribute ImageId: The ID of the image.
     */
    readonly attrImageId: ros.IResolvable;
    /**
     * Attribute ImageOwnerAlias: The source of the image.
     */
    readonly attrImageOwnerAlias: ros.IResolvable;
    /**
     * Attribute InstanceChargeType: The billing method of the instance.
     */
    readonly attrInstanceChargeType: ros.IResolvable;
    /**
     * Attribute InstanceName: The name of the instance. The length is 2~128 English or Chinese characters. It must start with a large or small letter or Chinese, and cannot start with' http:// 'or' https. It can contain numbers, colons (:), underscores (_), or dashes (-).
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * Attribute InstanceType: The instance type.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * Attribute InternetChargeType: Network billing method.
     */
    readonly attrInternetChargeType: ros.IResolvable;
    /**
     * Attribute InternetMaxBandwidthIn: The maximum public inbound bandwidth, in Mbit/s.
     */
    readonly attrInternetMaxBandwidthIn: ros.IResolvable;
    /**
     * Attribute InternetMaxBandwidthOut: The maximum outbound bandwidth of the public network. The unit is Mbit/s. The value range is 0~100.
     */
    readonly attrInternetMaxBandwidthOut: ros.IResolvable;
    /**
     * Attribute IoOptimized: Whether to optimize the instance for I/O.
     */
    readonly attrIoOptimized: ros.IResolvable;
    /**
     * Attribute Ipv6AddressCount: Specify the number of randomly generated IPv6 addresses for the primary network card. The value range is 1 to 10.
     */
    readonly attrIpv6AddressCount: ros.IResolvable;
    /**
     * Attribute KeyPairName: The name of the key pair.
     */
    readonly attrKeyPairName: ros.IResolvable;
    /**
     * Attribute LatestVersionNumber: The latest version number of the template.
     */
    readonly attrLatestVersionNumber: ros.IResolvable;
    /**
     * Attribute LaunchTemplateId: The ID of the launch template.
     */
    readonly attrLaunchTemplateId: ros.IResolvable;
    /**
     * Attribute LaunchTemplateName: The name of the launch template.
     */
    readonly attrLaunchTemplateName: ros.IResolvable;
    /**
     * Attribute ModifiedTime: The time when the launch template was modified.
     */
    readonly attrModifiedTime: ros.IResolvable;
    /**
     * Attribute NetworkInterface: The elastic network interfaces (ENIs).
     */
    readonly attrNetworkInterface: ros.IResolvable;
    /**
     * Attribute NetworkType: The network type of the instance.
     */
    readonly attrNetworkType: ros.IResolvable;
    /**
     * Attribute PasswordInherit: Whether to use the password preset by the image.
     */
    readonly attrPasswordInherit: ros.IResolvable;
    /**
     * Attribute Period: The duration of the purchase of resources, in months. When creating an instance, the parameter 'InstanceChargeType' takes effect and is required only when the value of the parameter 'PrePaid' is 'PrePaid. Value range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
     */
    readonly attrPeriod: ros.IResolvable;
    /**
     * Attribute PrivateIpAddress: The private IP address of the instance.
     */
    readonly attrPrivateIpAddress: ros.IResolvable;
    /**
     * Attribute RamRoleName: The instance RAM role name.
     */
    readonly attrRamRoleName: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance, Elastic Block Storage (EBS) device, and ENI belong.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute SecurityEnhancementStrategy: Whether to turn on security reinforcement for the operating system.
     */
    readonly attrSecurityEnhancementStrategy: ros.IResolvable;
    /**
     * Attribute SecurityGroupIds: The IDs of one or more security groups to which you want to add the instance.
     */
    readonly attrSecurityGroupIds: ros.IResolvable;
    /**
     * Attribute SpotPriceLimit: Set the maximum price per hour for the instance. The maximum number of 3 decimal places is supported. The value of the parameter 'SpotStrategy' is 'SpotWithPriceLimit.
     */
    readonly attrSpotPriceLimit: ros.IResolvable;
    /**
     * Attribute SpotStrategy: The preemption policy for a pay-as-you-go instance. This parameter takes effect when the value of the parameter 'InstanceChargeType' is 'PostPaid.
     */
    readonly attrSpotStrategy: ros.IResolvable;
    /**
     * Attribute SystemDisk: System disk configuration.
     */
    readonly attrSystemDisk: ros.IResolvable;
    /**
     * Attribute Tags: The tags of the launch template.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute TemplateResourceGroupId: Q
     */
    readonly attrTemplateResourceGroupId: ros.IResolvable;
    /**
     * Attribute TemplateTag: The tags of the launch template.
     */
    readonly attrTemplateTag: ros.IResolvable;
    /**
     * Attribute UserData: The user-defined data of the instance must be encoded in Base64. The maximum original data is 16KB.
     */
    readonly attrUserData: ros.IResolvable;
    /**
     * Attribute VSwitchId: The ID of the vSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * Attribute VersionDescription: Instance launch template version description. 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
     */
    readonly attrVersionDescription: ros.IResolvable;
    /**
     * Attribute VpcId: VPC Id.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Attribute ZoneId: The ID of the zone to which the instance belongs.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LaunchTemplateProps, enableResourcePropertyConstraint?: boolean);
}
