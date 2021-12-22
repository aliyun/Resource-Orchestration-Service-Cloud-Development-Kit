using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLS::Logstore`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosLogstoreProps")]
    public class RosLogstoreProps : AlibabaCloud.SDK.ROS.CDK.Sls.IRosLogstoreProps
    {
        /// <remarks>
        /// <strong>Property</strong>: logstoreName: Logstore name:
        /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "logstoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object LogstoreName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: Project name:
        /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ProjectName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
        /// Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "appendMeta", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AppendMeta
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoSplit: Whether to automatically split the shard.
        /// Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoSplit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoSplit
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
        /// Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableTracking", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EnableTracking
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: encryptConf: Data encryption config
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "encryptConf", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosLogstore.EncryptConfProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? EncryptConf
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
        /// Allowed Values: 1-64.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maxSplitShard", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? MaxSplitShard
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: preserveStorage: Whether to keep the log permanently.
        /// If set to true, TTL will be ignored.
        /// Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "preserveStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PreserveStorage
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: shardCount: The number of Shards.
        /// Allowed Values: 1-100, default to 2.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "shardCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ShardCount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ttl: The lifecycle of log in the logstore in days.
        /// Allowed Values: 1-3600, default to 30.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ttl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Ttl
        {
            get;
            set;
        }
    }
}
