using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `ALIYUN::POLARDB::DBClusterEndpointAddress`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDBClusterEndpointAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosDBClusterEndpointAddressProps")]
    public interface IRosDBClusterEndpointAddressProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}")]
        string DbClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbEndpointId: The ID of the cluster connection point.
        /// </remarks>
        [JsiiProperty(name: "dbEndpointId", typeJson: "{\"primitive\":\"string\"}")]
        string DbEndpointId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: connectionStringPrefix: The prefix of the connection string. The prefix must comply with the following rules:
        /// It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
        /// The length is 6~30 characters.
        /// </remarks>
        [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ConnectionStringPrefix
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: netType: The network type of the connection string. 
        /// If set to Public, ROS will create, modify and delete Public address for you.
        /// If set to Private, ROS will only modify Private address for you.
        /// Default to Public.
        /// </remarks>
        [JsiiProperty(name: "netType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NetType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::POLARDB::DBClusterEndpointAddress`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDBClusterEndpointAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosDBClusterEndpointAddressProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IRosDBClusterEndpointAddressProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
            /// </remarks>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbClusterId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbEndpointId: The ID of the cluster connection point.
            /// </remarks>
            [JsiiProperty(name: "dbEndpointId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbEndpointId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: connectionStringPrefix: The prefix of the connection string. The prefix must comply with the following rules:
            /// It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
            /// The length is 6~30 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ConnectionStringPrefix
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: netType: The network type of the connection string. 
            /// If set to Public, ROS will create, modify and delete Public address for you.
            /// If set to Private, ROS will only modify Private address for you.
            /// Default to Public.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "netType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NetType
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
