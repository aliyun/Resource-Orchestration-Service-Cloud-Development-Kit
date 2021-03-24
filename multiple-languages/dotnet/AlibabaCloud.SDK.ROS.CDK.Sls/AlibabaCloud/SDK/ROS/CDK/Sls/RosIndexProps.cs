using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLS::Index`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosIndexProps")]
    public class RosIndexProps : AlibabaCloud.SDK.ROS.CDK.Sls.IRosIndexProps
    {
        /// <remarks>
        /// <strong>Property</strong>: fullTextIndex: Full-text indexing configuration.
        /// Full-text indexing and key indexing must have at least one enabled.
        /// </remarks>
        [JsiiProperty(name: "fullTextIndex", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosIndex.FullTextIndexProperty\"}]}}", isOverride: true)]
        public object FullTextIndex
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: logstoreName: Logstore name:
        /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "logstoreName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string LogstoreName
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
        [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ProjectName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: keyIndices: Key index configurations.
        /// Full-text indexing and key indexing must have at least one enabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyIndices", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosIndex.KeyIndicesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? KeyIndices
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: logReduce: Whether to enable log reduce. Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logReduce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? LogReduce
        {
            get;
            set;
        }
    }
}
