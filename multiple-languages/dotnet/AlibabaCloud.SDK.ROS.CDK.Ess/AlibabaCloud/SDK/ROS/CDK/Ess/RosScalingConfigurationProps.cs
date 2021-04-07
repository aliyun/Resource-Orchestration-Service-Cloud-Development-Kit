using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ESS::ScalingConfiguration`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ess.RosScalingConfigurationProps")]
    public class RosScalingConfigurationProps : AlibabaCloud.SDK.ROS.CDK.Ess.IRosScalingConfigurationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: scalingGroupId: Scaling group id to create the scaling configuration.
        /// </remarks>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ScalingGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deploymentSetId: Deployment set ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deploymentSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DeploymentSetId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: diskMappings: Disk mappings to attach to instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "diskMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingConfiguration.DiskMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? DiskMappings
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: hpcClusterId: The HPC cluster ID to which the instance belongs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "hpcClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? HpcClusterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: imageId: Image ID to create ecs instance .
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ImageId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceName: The name of the instance launched from the current scaling configuration.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InstanceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: ecs supported instance type.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InstanceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceTypes: ecs supported instance types. Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceTypes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InstanceTypes
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InternetChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InternetMaxBandwidthIn
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
        /// The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
        /// The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InternetMaxBandwidthOut
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'none'.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? IoOptimized
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: keyPairName: SSH key pair name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? KeyPairName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "passwordInherit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PasswordInherit
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ramRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RamRoleName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group id.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingConfigurationName: Name of created scaling configuration.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingConfigurationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ScalingConfigurationName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: Security Group to create ecs instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SecurityGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: spotPriceLimit: Set the hourly maximum price for the instance. Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SpotPriceLimit
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
        /// The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
        /// You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        /// At most 50 items can be specified.
        /// Key
        /// ecs instance type
        /// Value
        /// Supports a maximum of 3 decimal places.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotPriceLimitForInstanceType", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true, isOverride: true)]
        public object? SpotPriceLimitForInstanceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: spotStrategy: Preemption strategy for post-paid instances. It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
        /// NoSpot: Normal pay-per-use instance
        /// SpotWithPriceLimit: Set a preemptive instance of the cap price
        /// SpotAsPriceGo: System automatic bidding, following the current market actual price
        /// Default: NoSpot.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SpotStrategy
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskAutoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SystemDiskAutoSnapshotPolicyId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SystemDiskCategory
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskPerformanceLevel: The performance level of an ESSD.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SystemDiskPerformanceLevel
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskSize: Size of system disk. Unit is GB.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SystemDiskSize
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tagList: The tags of an instance in list format.
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
        /// Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"<resource_name>_stack_<stack_id>") if possible.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tagList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingConfiguration.TagListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? TagList
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "userData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? UserData
        {
            get;
            set;
        }
    }
}
