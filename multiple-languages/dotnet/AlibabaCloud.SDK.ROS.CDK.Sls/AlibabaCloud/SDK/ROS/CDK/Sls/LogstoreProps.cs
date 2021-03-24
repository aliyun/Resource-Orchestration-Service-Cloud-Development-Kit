using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLS::Logstore`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.LogstoreProps")]
    public class LogstoreProps : AlibabaCloud.SDK.ROS.CDK.Sls.ILogstoreProps
    {
        /// <summary>Property logstoreName: Logstore name: 1.</summary>
        /// <remarks>
        /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "logstoreName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string LogstoreName
        {
            get;
            set;
        }

        /// <summary>Property projectName: Project name: 1.</summary>
        /// <remarks>
        /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ProjectName
        {
            get;
            set;
        }

        /// <summary>Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log.</summary>
        /// <remarks>
        /// Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "appendMeta", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AppendMeta
        {
            get;
            set;
        }

        /// <summary>Property autoSplit: Whether to automatically split the shard.</summary>
        /// <remarks>
        /// Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoSplit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoSplit
        {
            get;
            set;
        }

        /// <summary>Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.</summary>
        /// <remarks>
        /// Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableTracking", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EnableTracking
        {
            get;
            set;
        }

        /// <summary>Property maxSplitShard: The maximum number of shards when splitting automatically.</summary>
        /// <remarks>
        /// Must be specified if AutoSplit is set to true.
        /// Allowed Values: 1-64.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maxSplitShard", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? MaxSplitShard
        {
            get;
            set;
        }

        /// <summary>Property preserveStorage: Whether to keep the log permanently.</summary>
        /// <remarks>
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

        /// <summary>Property shardCount: The number of Shards.</summary>
        /// <remarks>
        /// Allowed Values: 1-100, default to 2.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "shardCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? ShardCount
        {
            get;
            set;
        }

        /// <summary>Property ttl: The lifecycle of log in the logstore in days.</summary>
        /// <remarks>
        /// Allowed Values: 1-3600, default to 30.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ttl", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Ttl
        {
            get;
            set;
        }
    }
}
