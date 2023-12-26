using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `RosDBClusterEndpoint`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpoint
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDBClusterEndpointProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosDBClusterEndpointProps")]
    public interface IRosDBClusterEndpointProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
        /// Valid values: Enable, Disable.
        /// Default value: Disable.
        /// </remarks>
        [JsiiProperty(name: "autoAddNewNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoAddNewNodes
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointConfig:
        /// </remarks>
        [JsiiProperty(name: "endpointConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBClusterEndpoint.EndpointConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointType: The type of the cluster connection point. Set this parameter to Custom.
        /// </remarks>
        [JsiiProperty(name: "endpointType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: nodes: The nodes to be added to this connection point to process read requests from this connection point. Add at least two nodes.
        /// If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
        /// </remarks>
        [JsiiProperty(name: "nodes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Nodes
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: readWriteMode: The read\/write mode of the cluster connection point. Valid values:
        /// ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
        /// ReadOnly: receives and forwards only read requests.
        /// Default value: ReadOnly.
        /// </remarks>
        [JsiiProperty(name: "readWriteMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReadWriteMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDBClusterEndpoint`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpoint
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDBClusterEndpointProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosDBClusterEndpointProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IRosDBClusterEndpointProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
            /// </remarks>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
            /// Valid values: Enable, Disable.
            /// Default value: Disable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoAddNewNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoAddNewNodes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointConfig:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBClusterEndpoint.EndpointConfigProperty\"}]}}", isOptional: true)]
            public object? EndpointConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointType: The type of the cluster connection point. Set this parameter to Custom.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: nodes: The nodes to be added to this connection point to process read requests from this connection point. Add at least two nodes.
            /// If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nodes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Nodes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: readWriteMode: The read\/write mode of the cluster connection point. Valid values:
            /// ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
            /// ReadOnly: receives and forwards only read requests.
            /// Default value: ReadOnly.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "readWriteMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReadWriteMode
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
