using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `RosAITask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-aitask
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAITaskProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosAITaskProps")]
    public interface IRosAITaskProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: The ID of the DB cluster.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: password: The password of the database account that enables the PolarDB for AI function is required.
        /// </remarks>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Password
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: username: The database account that enables the PolarDB for AI function is required.
        /// </remarks>
        [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Username
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: nodeType: The type of the node. Valid values:
        /// DLNode: AI node(default).
        /// SearchNode: Search ai node.
        /// </remarks>
        [JsiiProperty(name: "nodeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NodeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAITask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-aitask
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAITaskProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosAITaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IRosAITaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterId: The ID of the DB cluster.
            /// </remarks>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: password: The password of the database account that enables the PolarDB for AI function is required.
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Password
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: username: The database account that enables the PolarDB for AI function is required.
            /// </remarks>
            [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Username
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: nodeType: The type of the node. Valid values:
            /// DLNode: AI node(default).
            /// SearchNode: Search ai node.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nodeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NodeType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
