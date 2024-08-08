import * as ros from '@alicloud/ros-cdk-core';
import { RosLaunchTemplate } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::LaunchTemplate`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLaunchTemplate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplate
 */
export class LaunchTemplate extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: LaunchTemplateProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AutoReleaseTime: Automatic release time. According to the [ISO8601](~~ 25696 ~~) standard, and need to use UTC time. The format is: yyyy-MM-ddTHH:mm:ssZ.
     */
    public readonly attrAutoReleaseTime: ros.IResolvable;

    /**
     * Attribute CreateTime: The time when the instance launch template was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute CreatedBy: The creator of the launch template.
     */
    public readonly attrCreatedBy: ros.IResolvable;

    /**
     * Attribute DataDisk: Data disk information list.
     */
    public readonly attrDataDisk: ros.IResolvable;

    /**
     * Attribute DefaultVersionNumber: The default version number of the template.
     */
    public readonly attrDefaultVersionNumber: ros.IResolvable;

    /**
     * Attribute DeletionProtection: Instance deletion protection attribute.
     */
    public readonly attrDeletionProtection: ros.IResolvable;

    /**
     * Attribute DeploymentSetId: The ID of the deployment set.
     */
    public readonly attrDeploymentSetId: ros.IResolvable;

    /**
     * Attribute Description: Instance description. 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute HostName: The hostname of the instance.
     */
    public readonly attrHostName: ros.IResolvable;

    /**
     * Attribute ImageId: The ID of the image.
     */
    public readonly attrImageId: ros.IResolvable;

    /**
     * Attribute ImageOwnerAlias: The source of the image.
     */
    public readonly attrImageOwnerAlias: ros.IResolvable;

    /**
     * Attribute InstanceChargeType: The billing method of the instance.
     */
    public readonly attrInstanceChargeType: ros.IResolvable;

    /**
     * Attribute InstanceName: The name of the instance. The length is 2~128 English or Chinese characters. It must start with a large or small letter or Chinese, and cannot start with' http:// 'or' https. It can contain numbers, colons (:), underscores (_), or dashes (-).
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * Attribute InstanceType: The instance type.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * Attribute InternetChargeType: Network billing method.
     */
    public readonly attrInternetChargeType: ros.IResolvable;

    /**
     * Attribute InternetMaxBandwidthIn: The maximum public inbound bandwidth, in Mbit/s.
     */
    public readonly attrInternetMaxBandwidthIn: ros.IResolvable;

    /**
     * Attribute InternetMaxBandwidthOut: The maximum outbound bandwidth of the public network. The unit is Mbit/s. The value range is 0~100.
     */
    public readonly attrInternetMaxBandwidthOut: ros.IResolvable;

    /**
     * Attribute IoOptimized: Whether to optimize the instance for I/O.
     */
    public readonly attrIoOptimized: ros.IResolvable;

    /**
     * Attribute Ipv6AddressCount: Specify the number of randomly generated IPv6 addresses for the primary network card. The value range is 1 to 10.
     */
    public readonly attrIpv6AddressCount: ros.IResolvable;

    /**
     * Attribute KeyPairName: The name of the key pair.
     */
    public readonly attrKeyPairName: ros.IResolvable;

    /**
     * Attribute LatestVersionNumber: The latest version number of the template.
     */
    public readonly attrLatestVersionNumber: ros.IResolvable;

    /**
     * Attribute LaunchTemplateId: The ID of the launch template.
     */
    public readonly attrLaunchTemplateId: ros.IResolvable;

    /**
     * Attribute LaunchTemplateName: The name of the launch template.
     */
    public readonly attrLaunchTemplateName: ros.IResolvable;

    /**
     * Attribute ModifiedTime: The time when the launch template was modified.
     */
    public readonly attrModifiedTime: ros.IResolvable;

    /**
     * Attribute NetworkInterface: The elastic network interfaces (ENIs).
     */
    public readonly attrNetworkInterface: ros.IResolvable;

    /**
     * Attribute NetworkType: The network type of the instance.
     */
    public readonly attrNetworkType: ros.IResolvable;

    /**
     * Attribute PasswordInherit: Whether to use the password preset by the image.
     */
    public readonly attrPasswordInherit: ros.IResolvable;

    /**
     * Attribute Period: The duration of the purchase of resources, in months. When creating an instance, the parameter 'InstanceChargeType' takes effect and is required only when the value of the parameter 'PrePaid' is 'PrePaid. Value range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
     */
    public readonly attrPeriod: ros.IResolvable;

    /**
     * Attribute PrivateIpAddress: The private IP address of the instance.
     */
    public readonly attrPrivateIpAddress: ros.IResolvable;

    /**
     * Attribute RamRoleName: The instance RAM role name. You can use the RAM API [ListRoles](~~ 28713 ~~) to query the created instance RAM roles.
     */
    public readonly attrRamRoleName: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance, Elastic Block Storage (EBS) device, and ENI belong.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute SecurityEnhancementStrategy: Whether to turn on security reinforcement for the operating system.
     */
    public readonly attrSecurityEnhancementStrategy: ros.IResolvable;

    /**
     * Attribute SecurityGroupIds: The IDs of one or more security groups to which you want to add the instance.
     */
    public readonly attrSecurityGroupIds: ros.IResolvable;

    /**
     * Attribute SpotPriceLimit: Set the maximum price per hour for the instance. The maximum number of 3 decimal places is supported. The value of the parameter 'SpotStrategy' is 'SpotWithPriceLimit.
     */
    public readonly attrSpotPriceLimit: ros.IResolvable;

    /**
     * Attribute SpotStrategy: The preemption policy for a pay-as-you-go instance. This parameter takes effect when the value of the parameter 'InstanceChargeType' is 'PostPaid.
     */
    public readonly attrSpotStrategy: ros.IResolvable;

    /**
     * Attribute SystemDisk: System disk configuration.
     */
    public readonly attrSystemDisk: ros.IResolvable;

    /**
     * Attribute Tags: The tags of the launch template.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute TemplateResourceGroupId: Q
     */
    public readonly attrTemplateResourceGroupId: ros.IResolvable;

    /**
     * Attribute TemplateTag: The tags of the launch template.
     */
    public readonly attrTemplateTag: ros.IResolvable;

    /**
     * Attribute UserData: The user-defined data of the instance must be encoded in Base64. The maximum original data is 16KB.
     */
    public readonly attrUserData: ros.IResolvable;

    /**
     * Attribute VSwitchId: The ID of the vSwitch.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute VersionDescription: Instance launch template version description. 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
     */
    public readonly attrVersionDescription: ros.IResolvable;

    /**
     * Attribute VpcId: VPC Id.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Attribute ZoneId: The ID of the zone to which the instance belongs.
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LaunchTemplateProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosLaunchTemplate = new RosLaunchTemplate(this, id,  {
            launchTemplateId: props.launchTemplateId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLaunchTemplate;
        this.attrAutoReleaseTime = rosLaunchTemplate.attrAutoReleaseTime;
        this.attrCreateTime = rosLaunchTemplate.attrCreateTime;
        this.attrCreatedBy = rosLaunchTemplate.attrCreatedBy;
        this.attrDataDisk = rosLaunchTemplate.attrDataDisk;
        this.attrDefaultVersionNumber = rosLaunchTemplate.attrDefaultVersionNumber;
        this.attrDeletionProtection = rosLaunchTemplate.attrDeletionProtection;
        this.attrDeploymentSetId = rosLaunchTemplate.attrDeploymentSetId;
        this.attrDescription = rosLaunchTemplate.attrDescription;
        this.attrHostName = rosLaunchTemplate.attrHostName;
        this.attrImageId = rosLaunchTemplate.attrImageId;
        this.attrImageOwnerAlias = rosLaunchTemplate.attrImageOwnerAlias;
        this.attrInstanceChargeType = rosLaunchTemplate.attrInstanceChargeType;
        this.attrInstanceName = rosLaunchTemplate.attrInstanceName;
        this.attrInstanceType = rosLaunchTemplate.attrInstanceType;
        this.attrInternetChargeType = rosLaunchTemplate.attrInternetChargeType;
        this.attrInternetMaxBandwidthIn = rosLaunchTemplate.attrInternetMaxBandwidthIn;
        this.attrInternetMaxBandwidthOut = rosLaunchTemplate.attrInternetMaxBandwidthOut;
        this.attrIoOptimized = rosLaunchTemplate.attrIoOptimized;
        this.attrIpv6AddressCount = rosLaunchTemplate.attrIpv6AddressCount;
        this.attrKeyPairName = rosLaunchTemplate.attrKeyPairName;
        this.attrLatestVersionNumber = rosLaunchTemplate.attrLatestVersionNumber;
        this.attrLaunchTemplateId = rosLaunchTemplate.attrLaunchTemplateId;
        this.attrLaunchTemplateName = rosLaunchTemplate.attrLaunchTemplateName;
        this.attrModifiedTime = rosLaunchTemplate.attrModifiedTime;
        this.attrNetworkInterface = rosLaunchTemplate.attrNetworkInterface;
        this.attrNetworkType = rosLaunchTemplate.attrNetworkType;
        this.attrPasswordInherit = rosLaunchTemplate.attrPasswordInherit;
        this.attrPeriod = rosLaunchTemplate.attrPeriod;
        this.attrPrivateIpAddress = rosLaunchTemplate.attrPrivateIpAddress;
        this.attrRamRoleName = rosLaunchTemplate.attrRamRoleName;
        this.attrResourceGroupId = rosLaunchTemplate.attrResourceGroupId;
        this.attrSecurityEnhancementStrategy = rosLaunchTemplate.attrSecurityEnhancementStrategy;
        this.attrSecurityGroupIds = rosLaunchTemplate.attrSecurityGroupIds;
        this.attrSpotPriceLimit = rosLaunchTemplate.attrSpotPriceLimit;
        this.attrSpotStrategy = rosLaunchTemplate.attrSpotStrategy;
        this.attrSystemDisk = rosLaunchTemplate.attrSystemDisk;
        this.attrTags = rosLaunchTemplate.attrTags;
        this.attrTemplateResourceGroupId = rosLaunchTemplate.attrTemplateResourceGroupId;
        this.attrTemplateTag = rosLaunchTemplate.attrTemplateTag;
        this.attrUserData = rosLaunchTemplate.attrUserData;
        this.attrVSwitchId = rosLaunchTemplate.attrVSwitchId;
        this.attrVersionDescription = rosLaunchTemplate.attrVersionDescription;
        this.attrVpcId = rosLaunchTemplate.attrVpcId;
        this.attrZoneId = rosLaunchTemplate.attrZoneId;
    }
}
