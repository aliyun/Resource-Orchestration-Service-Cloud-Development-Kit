using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `RosDBClusterAccessWhiteList`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusteraccesswhitelist
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDBClusterAccessWhiteListProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosDBClusterAccessWhiteListProps")]
    public interface IRosDBClusterAccessWhiteListProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityIps: The IP addresses to be added to the IP address whitelist group to be modified. Each
        /// whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
        /// addresses with a comma (,). The following two formats are supported:
        /// IP address: for example, 10.23.12.24.
        /// Classless inter-domain routing (CIDR) block: for example, 10.23.12.24\/24, where the
        /// suffix \/24 indicates the number of bits for the prefix of the IP address. The suffix
        /// ranges from 1 to 32.
        /// </remarks>
        [JsiiProperty(name: "securityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecurityIps
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterIpArrayName: The name of the IP address whitelist group. If you do not specify this parameter,
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

        /// <summary>Properties for defining a `RosDBClusterAccessWhiteList`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusteraccesswhitelist
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDBClusterAccessWhiteListProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosDBClusterAccessWhiteListProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IRosDBClusterAccessWhiteListProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
            /// </remarks>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: securityIps: The IP addresses to be added to the IP address whitelist group to be modified. Each
            /// whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
            /// addresses with a comma (,). The following two formats are supported:
            /// IP address: for example, 10.23.12.24.
            /// Classless inter-domain routing (CIDR) block: for example, 10.23.12.24\/24, where the
            /// suffix \/24 indicates the number of bits for the prefix of the IP address. The suffix
            /// ranges from 1 to 32.
            /// </remarks>
            [JsiiProperty(name: "securityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityIps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterIpArrayName: The name of the IP address whitelist group. If you do not specify this parameter,
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
