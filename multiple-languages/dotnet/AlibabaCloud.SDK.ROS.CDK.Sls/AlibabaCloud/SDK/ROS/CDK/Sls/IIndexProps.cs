using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `Index`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-index
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IIndexProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.IndexProps")]
    public interface IIndexProps
    {
        /// <summary>Property fullTextIndex: Full-text indexing configuration.</summary>
        /// <remarks>
        /// Full-text indexing and key indexing must have at least one enabled.
        /// </remarks>
        [JsiiProperty(name: "fullTextIndex", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosIndex.FullTextIndexProperty\"}]}}")]
        object FullTextIndex
        {
            get;
        }

        /// <summary>Property logstoreName: Logstore name: 1.</summary>
        /// <remarks>
        /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "logstoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogstoreName
        {
            get;
        }

        /// <summary>Property projectName: Project name: 1.</summary>
        /// <remarks>
        /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <summary>Property keyIndices: Key index configurations.</summary>
        /// <remarks>
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

        /// <summary>Property logReduce: Whether to enable log reduce.</summary>
        /// <remarks>
        /// Default to false.
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

        /// <summary>Properties for defining a `Index`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-index
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IIndexProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.IndexProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IIndexProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property fullTextIndex: Full-text indexing configuration.</summary>
            /// <remarks>
            /// Full-text indexing and key indexing must have at least one enabled.
            /// </remarks>
            [JsiiProperty(name: "fullTextIndex", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosIndex.FullTextIndexProperty\"}]}}")]
            public object FullTextIndex
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property logstoreName: Logstore name: 1.</summary>
            /// <remarks>
            /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            /// 2. Must start and end with lowercase letters and numbers.
            /// 3. The name length is 3-63 characters.
            /// </remarks>
            [JsiiProperty(name: "logstoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogstoreName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property projectName: Project name: 1.</summary>
            /// <remarks>
            /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            /// 2. Must start and end with lowercase letters and numbers.
            /// 3. The name length is 3-63 characters.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property keyIndices: Key index configurations.</summary>
            /// <remarks>
            /// Full-text indexing and key indexing must have at least one enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keyIndices", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosIndex.KeyIndicesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? KeyIndices
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logReduce: Whether to enable log reduce.</summary>
            /// <remarks>
            /// Default to false.
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
