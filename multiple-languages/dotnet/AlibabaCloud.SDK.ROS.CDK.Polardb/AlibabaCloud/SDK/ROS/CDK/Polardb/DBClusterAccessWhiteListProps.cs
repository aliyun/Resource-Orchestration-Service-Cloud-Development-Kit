using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::POLARDB::DBClusterAccessWhiteList`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-polardb.DBClusterAccessWhiteListProps")]
    public class DBClusterAccessWhiteListProps : AlibabaCloud.SDK.ROS.CDK.Polardb.IDBClusterAccessWhiteListProps
    {
        /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DbClusterId
        {
            get;
            set;
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
        [JsiiProperty(name: "securityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SecurityIps
        {
            get;
            set;
        }

        /// <summary>Property dbClusterIpArrayName: The name of the IP address whitelist group.</summary>
        /// <remarks>
        /// If you do not specify this parameter,
        /// the Default whitelist group is modified by default.
        /// Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbClusterIpArrayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DbClusterIpArrayName
        {
            get;
            set;
        }
    }
}
