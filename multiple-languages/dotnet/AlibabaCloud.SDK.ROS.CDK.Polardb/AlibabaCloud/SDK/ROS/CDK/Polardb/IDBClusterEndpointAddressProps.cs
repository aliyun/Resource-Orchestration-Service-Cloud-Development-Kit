using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `DBClusterEndpointAddress`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpointaddress
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDBClusterEndpointAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBClusterEndpointAddressProps")]
    public interface IDBClusterEndpointAddressProps
    {
        /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <summary>Property dbEndpointId: The ID of the cluster connection point.</summary>
        [JsiiProperty(name: "dbEndpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbEndpointId
        {
            get;
        }

        /// <summary>Property connectionStringPrefix: The prefix of the connection string.</summary>
        /// <remarks>
        /// The prefix must comply with the following rules:
        /// It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
        /// The length is 6~30 characters.
        /// </remarks>
        [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConnectionStringPrefix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property netType: The network type of the connection string.</summary>
        /// <remarks>
        /// If set to Public, ROS will create, modify and delete Public address for you.
        /// If set to Private, ROS will only modify Private address for you.
        /// Default to Public.
        /// </remarks>
        [JsiiProperty(name: "netType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DBClusterEndpointAddress`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpointaddress
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDBClusterEndpointAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBClusterEndpointAddressProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IDBClusterEndpointAddressProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.</summary>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbEndpointId: The ID of the cluster connection point.</summary>
            [JsiiProperty(name: "dbEndpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbEndpointId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property connectionStringPrefix: The prefix of the connection string.</summary>
            /// <remarks>
            /// The prefix must comply with the following rules:
            /// It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
            /// The length is 6~30 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConnectionStringPrefix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property netType: The network type of the connection string.</summary>
            /// <remarks>
            /// If set to Public, ROS will create, modify and delete Public address for you.
            /// If set to Private, ROS will only modify Private address for you.
            /// Default to Public.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "netType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
