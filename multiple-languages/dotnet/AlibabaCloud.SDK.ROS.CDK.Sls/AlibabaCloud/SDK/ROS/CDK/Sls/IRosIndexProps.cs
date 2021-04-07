using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `ALIYUN::SLS::Index`.</summary>
    [JsiiInterface(nativeType: typeof(IRosIndexProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosIndexProps")]
    public interface IRosIndexProps
    {
        /// <remarks>
        /// <strong>Property</strong>: fullTextIndex: Full-text indexing configuration.
        /// Full-text indexing and key indexing must have at least one enabled.
        /// </remarks>
        [JsiiProperty(name: "fullTextIndex", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosIndex.FullTextIndexProperty\"}]}}")]
        object FullTextIndex
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: logstoreName: Logstore name:
        /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "logstoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogstoreName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: Project name:
        /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: keyIndices: Key index configurations.
        /// Full-text indexing and key indexing must have at least one enabled.
        /// </remarks>
        [JsiiProperty(name: "keyIndices", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosIndex.KeyIndicesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeyIndices
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: logReduce: Whether to enable log reduce. Default to false.
        /// </remarks>
        [JsiiProperty(name: "logReduce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogReduce
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SLS::Index`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosIndexProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosIndexProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IRosIndexProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: fullTextIndex: Full-text indexing configuration.
            /// Full-text indexing and key indexing must have at least one enabled.
            /// </remarks>
            [JsiiProperty(name: "fullTextIndex", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosIndex.FullTextIndexProperty\"}]}}")]
            public object FullTextIndex
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: logstoreName: Logstore name:
            /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            /// 2. Must start and end with lowercase letters and numbers.
            /// 3. The name length is 3-63 characters.
            /// </remarks>
            [JsiiProperty(name: "logstoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogstoreName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: projectName: Project name:
            /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            /// 2. Must start and end with lowercase letters and numbers.
            /// 3. The name length is 3-63 characters.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: keyIndices: Key index configurations.
            /// Full-text indexing and key indexing must have at least one enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keyIndices", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosIndex.KeyIndicesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? KeyIndices
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: logReduce: Whether to enable log reduce. Default to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logReduce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogReduce
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
