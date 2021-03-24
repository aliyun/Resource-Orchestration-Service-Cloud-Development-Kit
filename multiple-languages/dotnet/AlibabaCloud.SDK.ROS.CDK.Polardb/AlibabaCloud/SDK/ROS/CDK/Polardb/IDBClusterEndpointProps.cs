using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `ALIYUN::POLARDB::DBClusterEndpoint`.</summary>
    [JsiiInterface(nativeType: typeof(IDBClusterEndpointProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBClusterEndpointProps")]
    public interface IDBClusterEndpointProps
    {
        /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}")]
        string DbClusterId
        {
            get;
        }

        /// <summary>Property autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.</summary>
        /// <remarks>
        /// Valid values: Enable, Disable.
        /// Default value: Disable.
        /// </remarks>
        [JsiiProperty(name: "autoAddNewNodes", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AutoAddNewNodes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property endpointConfig:.</summary>
        [JsiiProperty(name: "endpointConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBClusterEndpoint.EndpointConfigProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property endpointType: The type of the cluster connection point.</summary>
        /// <remarks>
        /// Set this parameter to Custom.
        /// </remarks>
        [JsiiProperty(name: "endpointType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? EndpointType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nodes: The nodes to be added to this connection point to process read requests from this connection point.</summary>
        /// <remarks>
        /// Add at least two nodes.
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

        /// <summary>Property readWriteMode: The read/write mode of the cluster connection point.</summary>
        /// <remarks>
        /// Valid values:
        /// ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
        /// ReadOnly: receives and forwards only read requests.
        /// Default value: ReadOnly.
        /// </remarks>
        [JsiiProperty(name: "readWriteMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ReadWriteMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::POLARDB::DBClusterEndpoint`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDBClusterEndpointProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBClusterEndpointProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IDBClusterEndpointProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.</summary>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbClusterId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.</summary>
            /// <remarks>
            /// Valid values: Enable, Disable.
            /// Default value: Disable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoAddNewNodes", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AutoAddNewNodes
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property endpointConfig:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "endpointConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBClusterEndpoint.EndpointConfigProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endpointType: The type of the cluster connection point.</summary>
            /// <remarks>
            /// Set this parameter to Custom.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EndpointType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property nodes: The nodes to be added to this connection point to process read requests from this connection point.</summary>
            /// <remarks>
            /// Add at least two nodes.
            /// If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nodes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Nodes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property readWriteMode: The read/write mode of the cluster connection point.</summary>
            /// <remarks>
            /// Valid values:
            /// ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
            /// ReadOnly: receives and forwards only read requests.
            /// Default value: ReadOnly.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "readWriteMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ReadWriteMode
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
