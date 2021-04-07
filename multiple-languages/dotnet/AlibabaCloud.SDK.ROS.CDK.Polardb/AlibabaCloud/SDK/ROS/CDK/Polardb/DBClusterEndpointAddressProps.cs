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
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DbClusterId
        {
            get;
            set;
        }

        /// <summary>Property dbEndpointId: The ID of the cluster connection point.</summary>
        [JsiiProperty(name: "dbEndpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DbEndpointId
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
        [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ConnectionStringPrefix
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
        [JsiiProperty(name: "netType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? NetType
        {
            get;
            set;
        }
    }
}
