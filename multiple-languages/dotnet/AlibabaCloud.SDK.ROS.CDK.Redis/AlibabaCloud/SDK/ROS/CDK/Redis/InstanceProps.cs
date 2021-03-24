using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    /// <summary>Properties for defining a `ALIYUN::REDIS::Instance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-redis.InstanceProps")]
    public class InstanceProps : AlibabaCloud.SDK.ROS.CDK.Redis.IInstanceProps
    {
        /// <summary>Property backupPolicy: Backup policy.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "backupPolicy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.BackupPolicyProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? BackupPolicy
        {
            get;
            set;
        }

        /// <summary>Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "capacity", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Capacity
        {
            get;
            set;
        }

        /// <summary>Property engineVersion: Engine version.</summary>
        /// <remarks>
        /// Supported values: 2.8, 4.0 and 5.0.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "engineVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? EngineVersion
        {
            get;
            set;
        }

        /// <summary>Property evictionPolicy: The eviction policy of cache data storage.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "evictionPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? EvictionPolicy
        {
            get;
            set;
        }

        /// <summary>Property instanceClass: Redis instance type.</summary>
        /// <remarks>
        /// Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceClass", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceClass
        {
            get;
            set;
        }

        /// <summary>Property instanceConnection: Instance connection message.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "instanceConnection", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.InstanceConnectionProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? InstanceConnection
        {
            get;
            set;
        }

        /// <summary>Property instanceMaintainTime: Instance maintain time.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "instanceMaintainTime", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.InstanceMaintainTimeProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? InstanceMaintainTime
        {
            get;
            set;
        }

        /// <summary>Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceName
        {
            get;
            set;
        }

        /// <summary>Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Password
        {
            get;
            set;
        }

        /// <summary>Property securityGroupId: The IDs of security groups.</summary>
        /// <remarks>
        /// Separate multiple security group IDs with commas (,) and up to 10 can be set.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityGroupId
        {
            get;
            set;
        }

        /// <summary>Property sslEnabled: Modifies the SSL status.</summary>
        /// <remarks>
        /// Valid values:
        /// Disable: disables SSL encryption.
        /// Enable: enables SSL encryption.
        /// Update: updates the SSL certificate.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sslEnabled", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SslEnabled
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to redis.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property vpcId: The VPC id to create ecs instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcId
        {
            get;
            set;
        }

        /// <summary>Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.</summary>
        /// <remarks>
        /// If set to:
        /// 
        /// <list type="bullet">
        /// <description>true: enables password free.</description>
        /// <description>false: disables password free.</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcPasswordFree", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? VpcPasswordFree
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: The vSwitch Id to create ecs instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property zoneId: The zone id of input region.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ZoneId
        {
            get;
            set;
        }
    }
}
