using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `ALIYUN::POLARDB::AITask`.</summary>
    [JsiiInterface(nativeType: typeof(IAITaskProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.AITaskProps")]
    public interface IAITaskProps
    {
        /// <summary>Property dbClusterId: The ID of the DB cluster.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <summary>Property password: The password of the database account that enables the PolarDB for AI function is required.</summary>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Password
        {
            get;
        }

        /// <summary>Property username: The database account that enables the PolarDB for AI function is required.</summary>
        [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Username
        {
            get;
        }

        /// <summary>Property nodeType: The type of the node.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Properties for defining a `ALIYUN::POLARDB::AITask`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAITaskProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.AITaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IAITaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbClusterId: The ID of the DB cluster.</summary>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property password: The password of the database account that enables the PolarDB for AI function is required.</summary>
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Password
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property username: The database account that enables the PolarDB for AI function is required.</summary>
            [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Username
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property nodeType: The type of the node.</summary>
            /// <remarks>
            /// Valid values:
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
