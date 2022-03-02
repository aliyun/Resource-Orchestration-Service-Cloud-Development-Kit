using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::InstanceClone`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.InstanceCloneProps")]
    public class InstanceCloneProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IInstanceCloneProps
    {
        /// <summary>Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance.</summary>
        /// <remarks>
        /// It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
        /// </remarks>
        [JsiiProperty(name: "sourceInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SourceInstanceId
        {
            get;
            set;
        }

        /// <summary>Property backendServerWeight: The weight of backend server of load balancer.</summary>
        /// <remarks>
        /// From 0 to 100, 0 means offline. Default is 100.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backendServerWeight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? BackendServerWeight
        {
            get;
            set;
        }

        /// <summary>Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DeletionProtection
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the instance, [2, 256] characters.</summary>
        /// <remarks>
        /// Do not fill or empty, the default is empty.
        /// </remarks>
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
        /// If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "diskMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosInstanceClone.DiskMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? DiskMappings
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

        /// <summary>Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid.</summary>
        /// <remarks>
        /// If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
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

        /// <summary>Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).</summary>
        /// <remarks>
        /// The range is [1,200], default is 200 Mbps.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InternetMaxBandwidthIn
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

        /// <summary>Property loadBalancerIdToAttach: After the instance is created.</summary>
        /// <remarks>
        /// Automatic attach it to the load balancer.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "loadBalancerIdToAttach", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LoadBalancerIdToAttach
        {
            get;
            set;
        }

        /// <summary>Property password: Password of created ecs instance.</summary>
        /// <remarks>
        /// Must contain at least 3 types of special character, lower character, upper character, number.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Password
        {
            get;
            set;
        }

        /// <summary>Property period: Prepaid time period.</summary>
        /// <remarks>
        /// Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Period
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

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
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
        /// Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SpotStrategy
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosInstanceClone.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Ecs.RosInstanceClone.ITagsProperty[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property zoneId: The ID of the zone to which the instance belongs.</summary>
        /// <remarks>
        /// For more information,
        /// call the DescribeZones operation to query the most recent zone list.
        /// Default value is empty, which means random selection.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ZoneId
        {
            get;
            set;
        }
    }
}
