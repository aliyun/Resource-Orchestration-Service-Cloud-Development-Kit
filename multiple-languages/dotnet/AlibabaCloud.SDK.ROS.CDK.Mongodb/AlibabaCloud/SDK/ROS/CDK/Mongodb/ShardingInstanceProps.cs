using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::MONGODB::ShardingInstance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-mongodb.ShardingInstanceProps")]
    public class ShardingInstanceProps : AlibabaCloud.SDK.ROS.CDK.Mongodb.IShardingInstanceProps
    {
        /// <summary>Property configServer:.</summary>
        [JsiiProperty(name: "configServer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.ConfigServerProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object ConfigServer
        {
            get;
            set;
        }

        /// <summary>Property mongos:.</summary>
        [JsiiProperty(name: "mongos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.MongosProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object Mongos
        {
            get;
            set;
        }

        /// <summary>Property replicaSet:.</summary>
        [JsiiProperty(name: "replicaSet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.ReplicaSetProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object ReplicaSet
        {
            get;
            set;
        }

        /// <summary>Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "accountPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AccountPassword
        {
            get;
            set;
        }

        /// <summary>Property autoRenew: Indicates whether automatic renewal is enabled for the instance.</summary>
        /// <remarks>
        /// Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoRenew
        {
            get;
            set;
        }

        /// <summary>Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ChargeType
        {
            get;
            set;
        }

        /// <summary>Property dbInstanceDescription: Description of created database instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbInstanceDescription
        {
            get;
            set;
        }

        /// <summary>Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "engineVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? EngineVersion
        {
            get;
            set;
        }

        /// <summary>Property networkType: The instance network type.</summary>
        /// <remarks>
        /// Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? NetworkType
        {
            get;
            set;
        }

        /// <summary>Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Period
        {
            get;
            set;
        }

        /// <summary>Property protocolType: Protocol type.</summary>
        /// <remarks>
        /// Valid value: mongodb or dynamodb.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "protocolType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ProtocolType
        {
            get;
            set;
        }

        /// <summary>Property restoreTime: The time to restore the cloned instance to.</summary>
        /// <remarks>
        /// The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RestoreTime
        {
            get;
            set;
        }

        /// <summary>Property securityIpArray: Security ips to add or remove.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpArray", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityIpArray
        {
            get;
            set;
        }

        /// <summary>Property srcDbInstanceId: Create an instance of the backup set based on an instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "srcDbInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SrcDbInstanceId
        {
            get;
            set;
        }

        /// <summary>Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "storageEngine", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? StorageEngine
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property vpcId: The VPC id to create mongodb instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: The vSwitch Id to create mongodb instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property zoneId: On which zone to create the instance.</summary>
        /// <remarks>
        /// If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ZoneId
        {
            get;
            set;
        }
    }
}
