using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::POLARDB::DBClusterEndpointAddress`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-polardb.DBClusterEndpointAddressProps")]
    public class DBClusterEndpointAddressProps : AlibabaCloud.SDK.ROS.CDK.Polardb.IDBClusterEndpointAddressProps
    {
        /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbClusterId
        {
            get;
            set;
        }

        /// <summary>Property dbEndpointId: The ID of the cluster connection point.</summary>
        [JsiiProperty(name: "dbEndpointId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbEndpointId
        {
            get;
            set;
        }

        /// <summary>Property connectionStringPrefix: The prefix of the connection string.</summary>
        /// <remarks>
        /// The prefix must comply with the following rules:
        /// It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
        /// The length is 6~30 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ConnectionStringPrefix
        {
            get;
            set;
        }

        /// <summary>Property netType: The network type of the connection string.</summary>
        /// <remarks>
        /// If set to Public, ROS will create, modify and delete Public address for you.
        /// If set to Private, ROS will only modify Private address for you.
        /// Default to Public.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "netType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? NetType
        {
            get;
            set;
        }
    }
}
