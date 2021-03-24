using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `ALIYUN::ESS::ScalingConfiguration`.</summary>
    [JsiiInterface(nativeType: typeof(IScalingConfigurationProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.ScalingConfigurationProps")]
    public interface IScalingConfigurationProps
    {
        /// <summary>Property scalingGroupId: Scaling group id to create the scaling configuration.</summary>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"primitive\":\"string\"}")]
        string ScalingGroupId
        {
            get;
        }

        /// <summary>Property deploymentSetId: Deployment set ID.</summary>
        [JsiiProperty(name: "deploymentSetId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DeploymentSetId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property diskMappings: Disk mappings to attach to instance.</summary>
        [JsiiProperty(name: "diskMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingConfiguration.DiskMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskMappings
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hpcClusterId: The HPC cluster ID to which the instance belongs.</summary>
        [JsiiProperty(name: "hpcClusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? HpcClusterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageId: Image ID to create ecs instance .</summary>
        [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ImageId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceName: The name of the instance launched from the current scaling configuration.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InstanceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceType: ecs supported instance type.</summary>
        [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceTypes: ecs supported instance types.</summary>
        /// <remarks>
        /// Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
        /// </remarks>
        [JsiiProperty(name: "instanceTypes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceTypes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.</summary>
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InternetChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second).</summary>
        /// <remarks>
        /// The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
        /// </remarks>
        [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? InternetMaxBandwidthIn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).</summary>
        /// <remarks>
        /// The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
        /// The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
        /// </remarks>
        [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? InternetMaxBandwidthOut
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ioOptimized: The 'optimized' instance can provide better IO performance.</summary>
        /// <remarks>
        /// Support 'none' and 'optimized' only, default is 'none'.
        /// </remarks>
        [JsiiProperty(name: "ioOptimized", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? IoOptimized
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property keyPairName: SSH key pair name.</summary>
        [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? KeyPairName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property passwordInherit: Whether to use the password pre-configured in the image you select or not.</summary>
        /// <remarks>
        /// When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
        /// </remarks>
        [JsiiProperty(name: "passwordInherit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PasswordInherit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ramRoleName: Instance RAM role name.</summary>
        /// <remarks>
        /// The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
        /// </remarks>
        [JsiiProperty(name: "ramRoleName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RamRoleName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scalingConfigurationName: Name of created scaling configuration.</summary>
        [JsiiProperty(name: "scalingConfigurationName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ScalingConfigurationName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: Security Group to create ecs instance.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property spotPriceLimit: Set the hourly maximum price for the instance.</summary>
        /// <remarks>
        /// Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
        /// </remarks>
        [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? SpotPriceLimit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.</summary>
        /// <remarks>
        /// The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
        /// You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        /// At most 50 items can be specified.
        /// Key
        /// ecs instance type
        /// Value
        /// Supports a maximum of 3 decimal places.
        /// </remarks>
        [JsiiProperty(name: "spotPriceLimitForInstanceType", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotPriceLimitForInstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property spotStrategy: Preemption strategy for post-paid instances.</summary>
        /// <remarks>
        /// It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
        /// NoSpot: Normal pay-per-use instance
        /// SpotWithPriceLimit: Set a preemptive instance of the cap price
        /// SpotAsPriceGo: System automatic bidding, following the current market actual price
        /// Default: NoSpot.
        /// </remarks>
        [JsiiProperty(name: "spotStrategy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SpotStrategy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.</summary>
        [JsiiProperty(name: "systemDiskAutoSnapshotPolicyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SystemDiskAutoSnapshotPolicyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property systemDiskCategory: Category of system disk.</summary>
        /// <remarks>
        /// Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
        /// </remarks>
        [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SystemDiskCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property systemDiskPerformanceLevel: The performance level of an ESSD.</summary>
        [JsiiProperty(name: "systemDiskPerformanceLevel", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SystemDiskPerformanceLevel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property systemDiskSize: Size of system disk.</summary>
        /// <remarks>
        /// Unit is GB.
        /// </remarks>
        [JsiiProperty(name: "systemDiskSize", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? SystemDiskSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tagList: The tags of an instance in list format.</summary>
        /// <remarks>
        /// Do not use with Tags at the same time.
        /// You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
        /// At most 20 tags can be specified.
        /// Key
        /// It can be up to 64 characters in length.
        /// Cannot begin with aliyun.
        /// Cannot begin with http:// or https://.
        /// Cannot be a null string.
        /// Value
        /// It can be up to 128 characters in length.
        /// Cannot begin with aliyun.
        /// Cannot begin with http:// or https://.
        /// Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"&lt;resource_name&gt;<em>stack</em>&lt;stack_id&gt;") if possible.
        /// </remarks>
        [JsiiProperty(name: "tagList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingConfiguration.TagListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TagList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userData: User data to pass to instance.</summary>
        /// <remarks>
        /// [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        /// </remarks>
        [JsiiProperty(name: "userData", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? UserData
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ESS::ScalingConfiguration`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IScalingConfigurationProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.ScalingConfigurationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IScalingConfigurationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property scalingGroupId: Scaling group id to create the scaling configuration.</summary>
            [JsiiProperty(name: "scalingGroupId", typeJson: "{\"primitive\":\"string\"}")]
            public string ScalingGroupId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property deploymentSetId: Deployment set ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deploymentSetId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DeploymentSetId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property diskMappings: Disk mappings to attach to instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "diskMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingConfiguration.DiskMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DiskMappings
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hpcClusterId: The HPC cluster ID to which the instance belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "hpcClusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HpcClusterId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property imageId: Image ID to create ecs instance .</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ImageId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InstanceId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property instanceName: The name of the instance launched from the current scaling configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InstanceName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property instanceType: ecs supported instance type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InstanceType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property instanceTypes: ecs supported instance types.</summary>
            /// <remarks>
            /// Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceTypes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceTypes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InternetChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second).</summary>
            /// <remarks>
            /// The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? InternetMaxBandwidthIn
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).</summary>
            /// <remarks>
            /// The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
            /// The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? InternetMaxBandwidthOut
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property ioOptimized: The 'optimized' instance can provide better IO performance.</summary>
            /// <remarks>
            /// Support 'none' and 'optimized' only, default is 'none'.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ioOptimized", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? IoOptimized
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property keyPairName: SSH key pair name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? KeyPairName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property passwordInherit: Whether to use the password pre-configured in the image you select or not.</summary>
            /// <remarks>
            /// When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "passwordInherit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PasswordInherit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ramRoleName: Instance RAM role name.</summary>
            /// <remarks>
            /// The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ramRoleName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RamRoleName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property scalingConfigurationName: Name of created scaling configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "scalingConfigurationName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ScalingConfigurationName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property securityGroupId: Security Group to create ecs instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property spotPriceLimit: Set the hourly maximum price for the instance.</summary>
            /// <remarks>
            /// Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? SpotPriceLimit
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.</summary>
            /// <remarks>
            /// The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
            /// You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
            /// At most 50 items can be specified.
            /// Key
            /// ecs instance type
            /// Value
            /// Supports a maximum of 3 decimal places.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotPriceLimitForInstanceType", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? SpotPriceLimitForInstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spotStrategy: Preemption strategy for post-paid instances.</summary>
            /// <remarks>
            /// It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
            /// NoSpot: Normal pay-per-use instance
            /// SpotWithPriceLimit: Set a preemptive instance of the cap price
            /// SpotAsPriceGo: System automatic bidding, following the current market actual price
            /// Default: NoSpot.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotStrategy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SpotStrategy
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskAutoSnapshotPolicyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SystemDiskAutoSnapshotPolicyId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property systemDiskCategory: Category of system disk.</summary>
            /// <remarks>
            /// Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SystemDiskCategory
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property systemDiskPerformanceLevel: The performance level of an ESSD.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskPerformanceLevel", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SystemDiskPerformanceLevel
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property systemDiskSize: Size of system disk.</summary>
            /// <remarks>
            /// Unit is GB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskSize", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? SystemDiskSize
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property tagList: The tags of an instance in list format.</summary>
            /// <remarks>
            /// Do not use with Tags at the same time.
            /// You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
            /// At most 20 tags can be specified.
            /// Key
            /// It can be up to 64 characters in length.
            /// Cannot begin with aliyun.
            /// Cannot begin with http:// or https://.
            /// Cannot be a null string.
            /// Value
            /// It can be up to 128 characters in length.
            /// Cannot begin with aliyun.
            /// Cannot begin with http:// or https://.
            /// Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"&lt;resource_name&gt;<em>stack</em>&lt;stack_id&gt;") if possible.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tagList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingConfiguration.TagListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TagList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userData: User data to pass to instance.</summary>
            /// <remarks>
            /// [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userData", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? UserData
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
