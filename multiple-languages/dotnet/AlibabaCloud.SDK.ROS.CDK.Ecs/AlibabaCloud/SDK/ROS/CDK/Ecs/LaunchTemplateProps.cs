using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::LaunchTemplate`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.LaunchTemplateProps")]
    public class LaunchTemplateProps : AlibabaCloud.SDK.ROS.CDK.Ecs.ILaunchTemplateProps
    {
        /// <summary>Property launchTemplateName: The name of launch template.</summary>
        [JsiiProperty(name: "launchTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object LaunchTemplateName
        {
            get;
            set;
        }

        /// <summary>Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time.</summary>
        /// <remarks>
        /// format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoReleaseTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoReleaseTime
        {
            get;
            set;
        }

        /// <summary>Property deploymentSetId: The ID of the deployment set.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "deploymentSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DeploymentSetId
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the instance, [2, 256] characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property diskMappings: Disk mappings to attach to instance.</summary>
        /// <remarks>
        /// Max support 16 disks.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "diskMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosLaunchTemplate.DiskMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? DiskMappings
        {
            get;
            set;
        }

        /// <summary>Property hostName: Host name of created ecs instance.</summary>
        /// <remarks>
        /// at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HostName
        {
            get;
            set;
        }

        /// <summary>Property imageId: Image ID to create ecs instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ImageId
        {
            get;
            set;
        }

        /// <summary>Property imageOwnerAlias: The source of the image.</summary>
        /// <remarks>
        /// Valid values:
        /// system: public images provided by Alibaba Cloud.
        /// self: your custom images.
        /// others: shared images from other Alibaba Cloud accounts.
        /// marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are found, you can use these images without prior subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageOwnerAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ImageOwnerAlias
        {
            get;
            set;
        }

        /// <summary>Property instanceChargeType: The billing method of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// PrePaid: subscription. If you set this parameter to PrePaid, make sure that your account supports payment by credit. Otherwise, an InvalidPayMethod error is returned.
        /// PostPaid: pay-as-you-go.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InstanceChargeType
        {
            get;
            set;
        }

        /// <summary>Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InstanceName
        {
            get;
            set;
        }

        /// <summary>Property instanceType: Ecs instance supported instance type, make sure it should be correct.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InstanceType
        {
            get;
            set;
        }

        /// <summary>Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InternetChargeType
        {
            get;
            set;
        }

        /// <summary>Property internetMaxBandwidthOut: Max internet out bandwidth in Mbps(Mega bit per second).</summary>
        /// <remarks>
        /// Range is [0,200].While the property is not 0, public ip will be assigned for instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InternetMaxBandwidthOut
        {
            get;
            set;
        }

        /// <summary>Property ioOptimized: The 'optimized' instance can provide better IO performance.</summary>
        /// <remarks>
        /// Support 'none' and 'optimized' only.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IoOptimized
        {
            get;
            set;
        }

        /// <summary>Property ipv6AddressCount: The number of IPv6 addresses to be randomly generated for the primary ENI.</summary>
        /// <remarks>
        /// Valid values: 1 to 10.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Ipv6AddressCount
        {
            get;
            set;
        }

        /// <summary>Property keyPairName: SSH key pair name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? KeyPairName
        {
            get;
            set;
        }

        /// <summary>Property networkInterfaces: Elastic network interfaces to be attached to instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "networkInterfaces", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosLaunchTemplate.NetworkInterfacesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? NetworkInterfaces
        {
            get;
            set;
        }

        /// <summary>Property networkType: Instance network type.</summary>
        /// <remarks>
        /// Support 'vpc' and 'classic'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? NetworkType
        {
            get;
            set;
        }

        /// <summary>Property passwordInherit: Specifies whether to use the password preset in the image.</summary>
        /// <remarks>
        /// Note When you use this parameter, leave Password empty and make sure that the selected image has a password preset.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "passwordInherit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PasswordInherit
        {
            get;
            set;
        }

        /// <summary>Property period: The subscription period of the instance.</summary>
        /// <remarks>
        /// Unit: months.
        /// This parameter is valid and required only when InstanceChargeType is set to PrePaid.
        /// Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <summary>Property privateIpAddress: The private IP address of the instance.</summary>
        /// <remarks>
        /// To assign a private IP address to an instance of the VPC type, make sure that the IP address is an idle IP address within the CIDR block of the vSwitch specified by the VSwitchId parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PrivateIpAddress
        {
            get;
            set;
        }

        /// <summary>Property ramRoleName: Instance RAM role name.</summary>
        /// <remarks>
        /// The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ramRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RamRoleName
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which to assign the instance, Elastic Block Storage (EBS) device, and elastic network interface (ENI).</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive".</summary>
        [JsiiOptional]
        [JsiiProperty(name: "securityEnhancementStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SecurityEnhancementStrategy
        {
            get;
            set;
        }

        /// <summary>Property securityGroupId: Security group to create ecs instance.</summary>
        /// <remarks>
        /// For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SecurityGroupId
        {
            get;
            set;
        }

        /// <summary>Property securityGroupIds: The ID of security group list to which to assign the instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? SecurityGroupIds
        {
            get;
            set;
        }

        /// <summary>Property spotDuration: The protection period of the preemptible instance.</summary>
        /// <remarks>
        /// Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
        /// Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
        /// If this parameter is set to 0, no protection period is configured for the preemptible instance.
        /// Default value: 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SpotDuration
        {
            get;
            set;
        }

        /// <summary>Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid.</summary>
        /// <remarks>
        /// Three decimals is allowed at most.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SpotPriceLimit
        {
            get;
            set;
        }

        /// <summary>Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid.</summary>
        /// <remarks>
        /// Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SpotStrategy
        {
            get;
            set;
        }

        /// <summary>Property systemDiskCategory: Category of system disk.</summary>
        /// <remarks>
        /// support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SystemDiskCategory
        {
            get;
            set;
        }

        /// <summary>Property systemDiskDeleteWithInstance: Specifies whether to release the system disk when the instance is released.</summary>
        /// <remarks>
        /// Valid values:
        /// true: releases the system disk when the instance is released.
        /// false: does not release the system disk when the instance is released.
        /// Default value: true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskDeleteWithInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SystemDiskDeleteWithInstance
        {
            get;
            set;
        }

        /// <summary>Property systemDiskDescription: Description of created system disk.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SystemDiskDescription
        {
            get;
            set;
        }

        /// <summary>Property systemDiskDiskName: Name of created system disk.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskDiskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SystemDiskDiskName
        {
            get;
            set;
        }

        /// <summary>Property systemDiskPerformanceLevel: The performance level of the ESSD that is used as the system disk.</summary>
        /// <remarks>
        /// Valid values:
        /// PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
        /// PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
        /// PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
        /// PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SystemDiskPerformanceLevel
        {
            get;
            set;
        }

        /// <summary>Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB.</summary>
        /// <remarks>
        /// If you specify with your own image, make sure the system disk size bigger than image size.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SystemDiskSize
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance, security group, disk and network interface.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosLaunchTemplate.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Ecs.RosLaunchTemplate.ITagsProperty[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property templateResourceGroupId: The ID of the resource group to which to assign the launch template.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "templateResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TemplateResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property templateTags: Template tags to attach to launch template.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "templateTags", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosLaunchTemplate.TemplateTagsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? TemplateTags
        {
            get;
            set;
        }

        /// <summary>Property userData: User data to pass to instance.</summary>
        /// <remarks>
        /// [1, 16KB] characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "userData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? UserData
        {
            get;
            set;
        }

        /// <summary>Property versionDescription: Description for version 1 of launch template.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "versionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VersionDescription
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: The vSwitch Id to create ecs instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property zoneId: Current zone to create the instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ZoneId
        {
            get;
            set;
        }
    }
}
