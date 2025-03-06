using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Represents a `LaunchTemplate`.</summary>
    [JsiiInterface(nativeType: typeof(ILaunchTemplate), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ILaunchTemplate")]
    public interface ILaunchTemplate : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AutoReleaseTime: Automatic release time (UTC).</summary>
        /// <remarks>
        /// The format is: yyyy-MM-ddTHH:mm:ssZ.
        /// </remarks>
        [JsiiProperty(name: "attrAutoReleaseTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoReleaseTime
        {
            get;
        }

        /// <summary>Attribute CreatedBy: The creator of the launch template.</summary>
        [JsiiProperty(name: "attrCreatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreatedBy
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time when the instance launch template was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DataDisk: Data disk information list.</summary>
        [JsiiProperty(name: "attrDataDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDataDisk
        {
            get;
        }

        /// <summary>Attribute DefaultVersionNumber: The default version number of the template.</summary>
        [JsiiProperty(name: "attrDefaultVersionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDefaultVersionNumber
        {
            get;
        }

        /// <summary>Attribute DeletionProtection: Instance deletion protection attribute.</summary>
        [JsiiProperty(name: "attrDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeletionProtection
        {
            get;
        }

        /// <summary>Attribute DeploymentSetId: The ID of the deployment set.</summary>
        [JsiiProperty(name: "attrDeploymentSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeploymentSetId
        {
            get;
        }

        /// <summary>Attribute Description: Instance description.</summary>
        /// <remarks>
        /// 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
        /// </remarks>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute HostName: The hostname of the instance.</summary>
        [JsiiProperty(name: "attrHostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHostName
        {
            get;
        }

        /// <summary>Attribute ImageId: The ID of the image.</summary>
        [JsiiProperty(name: "attrImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageId
        {
            get;
        }

        /// <summary>Attribute ImageOwnerAlias: The source of the image.</summary>
        [JsiiProperty(name: "attrImageOwnerAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageOwnerAlias
        {
            get;
        }

        /// <summary>Attribute InstanceChargeType: The billing method of the instance.</summary>
        [JsiiProperty(name: "attrInstanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceChargeType
        {
            get;
        }

        /// <summary>Attribute InstanceName: The name of the instance.</summary>
        /// <remarks>
        /// The length is 2~128 English or Chinese characters. It must start with a large or small letter or Chinese, and cannot start with' http:// 'or' https. It can contain numbers, colons (:), underscores (_), or dashes (-).
        /// </remarks>
        [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceName
        {
            get;
        }

        /// <summary>Attribute InstanceType: The instance type.</summary>
        [JsiiProperty(name: "attrInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceType
        {
            get;
        }

        /// <summary>Attribute InternetChargeType: Network billing method.</summary>
        [JsiiProperty(name: "attrInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetChargeType
        {
            get;
        }

        /// <summary>Attribute InternetMaxBandwidthIn: The maximum public inbound bandwidth, in Mbit/s.</summary>
        [JsiiProperty(name: "attrInternetMaxBandwidthIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetMaxBandwidthIn
        {
            get;
        }

        /// <summary>Attribute InternetMaxBandwidthOut: The maximum outbound bandwidth of the public network.</summary>
        /// <remarks>
        /// The unit is Mbit/s. The value range is 0~100.
        /// </remarks>
        [JsiiProperty(name: "attrInternetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetMaxBandwidthOut
        {
            get;
        }

        /// <summary>Attribute IoOptimized: Whether to optimize the instance for I/O.</summary>
        [JsiiProperty(name: "attrIoOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIoOptimized
        {
            get;
        }

        /// <summary>Attribute Ipv6AddressCount: Specify the number of randomly generated IPv6 addresses for the primary network card.</summary>
        /// <remarks>
        /// The value range is 1 to 10.
        /// </remarks>
        [JsiiProperty(name: "attrIpv6AddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpv6AddressCount
        {
            get;
        }

        /// <summary>Attribute KeyPairName: The name of the key pair.</summary>
        [JsiiProperty(name: "attrKeyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKeyPairName
        {
            get;
        }

        /// <summary>Attribute LatestVersionNumber: The latest version number of the template.</summary>
        [JsiiProperty(name: "attrLatestVersionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLatestVersionNumber
        {
            get;
        }

        /// <summary>Attribute LaunchTemplateId: The ID of the launch template.</summary>
        [JsiiProperty(name: "attrLaunchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLaunchTemplateId
        {
            get;
        }

        /// <summary>Attribute LaunchTemplateName: The name of the launch template.</summary>
        [JsiiProperty(name: "attrLaunchTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLaunchTemplateName
        {
            get;
        }

        /// <summary>Attribute ModifiedTime: The time when the launch template was modified.</summary>
        [JsiiProperty(name: "attrModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrModifiedTime
        {
            get;
        }

        /// <summary>Attribute NetworkInterface: The elastic network interfaces (ENIs).</summary>
        [JsiiProperty(name: "attrNetworkInterface", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkInterface
        {
            get;
        }

        /// <summary>Attribute NetworkType: The network type of the instance.</summary>
        [JsiiProperty(name: "attrNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkType
        {
            get;
        }

        /// <summary>Attribute PasswordInherit: Whether to use the password preset by the image.</summary>
        [JsiiProperty(name: "attrPasswordInherit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPasswordInherit
        {
            get;
        }

        /// <summary>Attribute Period: The duration of the purchase of resources, in months.</summary>
        /// <remarks>
        /// When creating an instance, the parameter 'InstanceChargeType' takes effect and is required only when the value of the parameter 'PrePaid' is 'PrePaid. Value range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
        /// </remarks>
        [JsiiProperty(name: "attrPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPeriod
        {
            get;
        }

        /// <summary>Attribute PrivateIpAddress: The private IP address of the instance.</summary>
        [JsiiProperty(name: "attrPrivateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrivateIpAddress
        {
            get;
        }

        /// <summary>Attribute RamRoleName: The instance RAM role name.</summary>
        [JsiiProperty(name: "attrRamRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRamRoleName
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the instance, Elastic Block Storage (EBS) device, and ENI belong.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute SecurityEnhancementStrategy: Whether to turn on security reinforcement for the operating system.</summary>
        [JsiiProperty(name: "attrSecurityEnhancementStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityEnhancementStrategy
        {
            get;
        }

        /// <summary>Attribute SecurityGroupIds: The IDs of one or more security groups to which you want to add the instance.</summary>
        [JsiiProperty(name: "attrSecurityGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityGroupIds
        {
            get;
        }

        /// <summary>Attribute SpotPriceLimit: Set the maximum price per hour for the instance.</summary>
        /// <remarks>
        /// The maximum number of 3 decimal places is supported. The value of the parameter 'SpotStrategy' is 'SpotWithPriceLimit.
        /// </remarks>
        [JsiiProperty(name: "attrSpotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSpotPriceLimit
        {
            get;
        }

        /// <summary>Attribute SpotStrategy: The preemption policy for a pay-as-you-go instance.</summary>
        /// <remarks>
        /// This parameter takes effect when the value of the parameter 'InstanceChargeType' is 'PostPaid.
        /// </remarks>
        [JsiiProperty(name: "attrSpotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSpotStrategy
        {
            get;
        }

        /// <summary>Attribute SystemDisk: System disk configuration.</summary>
        [JsiiProperty(name: "attrSystemDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSystemDisk
        {
            get;
        }

        /// <summary>Attribute Tags: The tags of the launch template.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute TemplateResourceGroupId: Q.</summary>
        [JsiiProperty(name: "attrTemplateResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTemplateResourceGroupId
        {
            get;
        }

        /// <summary>Attribute TemplateTag: The tags of the launch template.</summary>
        [JsiiProperty(name: "attrTemplateTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTemplateTag
        {
            get;
        }

        /// <summary>Attribute UserData: The user-defined data of the instance must be encoded in Base64.</summary>
        /// <remarks>
        /// The maximum original data is 16KB.
        /// </remarks>
        [JsiiProperty(name: "attrUserData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUserData
        {
            get;
        }

        /// <summary>Attribute VersionDescription: Instance launch template version description.</summary>
        /// <remarks>
        /// 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
        /// </remarks>
        [JsiiProperty(name: "attrVersionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVersionDescription
        {
            get;
        }

        /// <summary>Attribute VpcId: VPC Id.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute VSwitchId: The ID of the vSwitch.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitchId
        {
            get;
        }

        /// <summary>Attribute ZoneId: The ID of the zone to which the instance belongs.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZoneId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.LaunchTemplateProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ILaunchTemplateProps Props
        {
            get;
        }

        /// <summary>Represents a `LaunchTemplate`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILaunchTemplate), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ILaunchTemplate")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ILaunchTemplate
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AutoReleaseTime: Automatic release time (UTC).</summary>
            /// <remarks>
            /// The format is: yyyy-MM-ddTHH:mm:ssZ.
            /// </remarks>
            [JsiiProperty(name: "attrAutoReleaseTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoReleaseTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreatedBy: The creator of the launch template.</summary>
            [JsiiProperty(name: "attrCreatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreatedBy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time when the instance launch template was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DataDisk: Data disk information list.</summary>
            [JsiiProperty(name: "attrDataDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDataDisk
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DefaultVersionNumber: The default version number of the template.</summary>
            [JsiiProperty(name: "attrDefaultVersionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDefaultVersionNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeletionProtection: Instance deletion protection attribute.</summary>
            [JsiiProperty(name: "attrDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeletionProtection
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeploymentSetId: The ID of the deployment set.</summary>
            [JsiiProperty(name: "attrDeploymentSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeploymentSetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: Instance description.</summary>
            /// <remarks>
            /// 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
            /// </remarks>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HostName: The hostname of the instance.</summary>
            [JsiiProperty(name: "attrHostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHostName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageId: The ID of the image.</summary>
            [JsiiProperty(name: "attrImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageOwnerAlias: The source of the image.</summary>
            [JsiiProperty(name: "attrImageOwnerAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageOwnerAlias
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceChargeType: The billing method of the instance.</summary>
            [JsiiProperty(name: "attrInstanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceName: The name of the instance.</summary>
            /// <remarks>
            /// The length is 2~128 English or Chinese characters. It must start with a large or small letter or Chinese, and cannot start with' http:// 'or' https. It can contain numbers, colons (:), underscores (_), or dashes (-).
            /// </remarks>
            [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceType: The instance type.</summary>
            [JsiiProperty(name: "attrInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetChargeType: Network billing method.</summary>
            [JsiiProperty(name: "attrInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetMaxBandwidthIn: The maximum public inbound bandwidth, in Mbit/s.</summary>
            [JsiiProperty(name: "attrInternetMaxBandwidthIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetMaxBandwidthIn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetMaxBandwidthOut: The maximum outbound bandwidth of the public network.</summary>
            /// <remarks>
            /// The unit is Mbit/s. The value range is 0~100.
            /// </remarks>
            [JsiiProperty(name: "attrInternetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetMaxBandwidthOut
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IoOptimized: Whether to optimize the instance for I/O.</summary>
            [JsiiProperty(name: "attrIoOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIoOptimized
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ipv6AddressCount: Specify the number of randomly generated IPv6 addresses for the primary network card.</summary>
            /// <remarks>
            /// The value range is 1 to 10.
            /// </remarks>
            [JsiiProperty(name: "attrIpv6AddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpv6AddressCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute KeyPairName: The name of the key pair.</summary>
            [JsiiProperty(name: "attrKeyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKeyPairName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LatestVersionNumber: The latest version number of the template.</summary>
            [JsiiProperty(name: "attrLatestVersionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLatestVersionNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LaunchTemplateId: The ID of the launch template.</summary>
            [JsiiProperty(name: "attrLaunchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLaunchTemplateId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LaunchTemplateName: The name of the launch template.</summary>
            [JsiiProperty(name: "attrLaunchTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLaunchTemplateName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ModifiedTime: The time when the launch template was modified.</summary>
            [JsiiProperty(name: "attrModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrModifiedTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkInterface: The elastic network interfaces (ENIs).</summary>
            [JsiiProperty(name: "attrNetworkInterface", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkInterface
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkType: The network type of the instance.</summary>
            [JsiiProperty(name: "attrNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PasswordInherit: Whether to use the password preset by the image.</summary>
            [JsiiProperty(name: "attrPasswordInherit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPasswordInherit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Period: The duration of the purchase of resources, in months.</summary>
            /// <remarks>
            /// When creating an instance, the parameter 'InstanceChargeType' takes effect and is required only when the value of the parameter 'PrePaid' is 'PrePaid. Value range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
            /// </remarks>
            [JsiiProperty(name: "attrPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrivateIpAddress: The private IP address of the instance.</summary>
            [JsiiProperty(name: "attrPrivateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrivateIpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RamRoleName: The instance RAM role name.</summary>
            [JsiiProperty(name: "attrRamRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRamRoleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the instance, Elastic Block Storage (EBS) device, and ENI belong.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityEnhancementStrategy: Whether to turn on security reinforcement for the operating system.</summary>
            [JsiiProperty(name: "attrSecurityEnhancementStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityEnhancementStrategy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityGroupIds: The IDs of one or more security groups to which you want to add the instance.</summary>
            [JsiiProperty(name: "attrSecurityGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityGroupIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SpotPriceLimit: Set the maximum price per hour for the instance.</summary>
            /// <remarks>
            /// The maximum number of 3 decimal places is supported. The value of the parameter 'SpotStrategy' is 'SpotWithPriceLimit.
            /// </remarks>
            [JsiiProperty(name: "attrSpotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSpotPriceLimit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SpotStrategy: The preemption policy for a pay-as-you-go instance.</summary>
            /// <remarks>
            /// This parameter takes effect when the value of the parameter 'InstanceChargeType' is 'PostPaid.
            /// </remarks>
            [JsiiProperty(name: "attrSpotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSpotStrategy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SystemDisk: System disk configuration.</summary>
            [JsiiProperty(name: "attrSystemDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSystemDisk
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tags of the launch template.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TemplateResourceGroupId: Q.</summary>
            [JsiiProperty(name: "attrTemplateResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTemplateResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TemplateTag: The tags of the launch template.</summary>
            [JsiiProperty(name: "attrTemplateTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTemplateTag
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UserData: The user-defined data of the instance must be encoded in Base64.</summary>
            /// <remarks>
            /// The maximum original data is 16KB.
            /// </remarks>
            [JsiiProperty(name: "attrUserData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUserData
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VersionDescription: Instance launch template version description.</summary>
            /// <remarks>
            /// 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
            /// </remarks>
            [JsiiProperty(name: "attrVersionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVersionDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: VPC Id.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitchId: The ID of the vSwitch.</summary>
            [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ZoneId: The ID of the zone to which the instance belongs.</summary>
            [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.LaunchTemplateProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ILaunchTemplateProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ILaunchTemplateProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
