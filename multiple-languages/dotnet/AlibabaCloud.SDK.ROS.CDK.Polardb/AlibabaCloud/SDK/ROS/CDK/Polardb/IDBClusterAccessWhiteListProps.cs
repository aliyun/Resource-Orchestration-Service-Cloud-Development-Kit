using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `DBClusterAccessWhiteList`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusteraccesswhitelist
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDBClusterAccessWhiteListProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBClusterAccessWhiteListProps")]
    public interface IDBClusterAccessWhiteListProps
    {
        /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <summary>Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified.</summary>
        /// <remarks>
        /// Each
        /// whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
        /// addresses with a comma (,). The following two formats are supported:
        /// IP address: for example, 10.23.12.24.
        /// Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the
        /// suffix /24 indicates the number of bits for the prefix of the IP address. The suffix
        /// ranges from 1 to 32.
        /// </remarks>
        [JsiiProperty(name: "securityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecurityIps
        {
            get;
        }

        /// <summary>Property dbClusterIpArrayName: The name of the IP address whitelist group.</summary>
        /// <remarks>
        /// If you do not specify this parameter,
        /// the Default whitelist group is modified by default.
        /// Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
        /// </remarks>
        [JsiiProperty(name: "dbClusterIpArrayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbClusterIpArrayName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DBClusterAccessWhiteList`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusteraccesswhitelist
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDBClusterAccessWhiteListProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBClusterAccessWhiteListProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IDBClusterAccessWhiteListProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.</summary>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified.</summary>
            /// <remarks>
            /// Each
            /// whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
            /// addresses with a comma (,). The following two formats are supported:
            /// IP address: for example, 10.23.12.24.
            /// Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the
            /// suffix /24 indicates the number of bits for the prefix of the IP address. The suffix
            /// ranges from 1 to 32.
            /// </remarks>
            [JsiiProperty(name: "securityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityIps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbClusterIpArrayName: The name of the IP address whitelist group.</summary>
            /// <remarks>
            /// If you do not specify this parameter,
            /// the Default whitelist group is modified by default.
            /// Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterIpArrayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterIpArrayName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
