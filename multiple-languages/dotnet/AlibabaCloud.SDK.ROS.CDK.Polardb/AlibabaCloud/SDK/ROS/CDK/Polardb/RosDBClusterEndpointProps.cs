using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::POLARDB::DBClusterEndpoint`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-polardb.RosDBClusterEndpointProps")]
    public class RosDBClusterEndpointProps : AlibabaCloud.SDK.ROS.CDK.Polardb.IRosDBClusterEndpointProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbClusterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
        /// Valid values: Enable, Disable.
        /// Default value: Disable.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoAddNewNodes", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AutoAddNewNodes
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointConfig:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "endpointConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBClusterEndpoint.EndpointConfigProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EndpointConfig
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpointType: The type of the cluster connection point. Set this parameter to Custom.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "endpointType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? EndpointType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: nodes: The nodes to be added to this connection point to process read requests from this connection point. Add at least two nodes.
        /// If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nodes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Nodes
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: readWriteMode: The read/write mode of the cluster connection point. Valid values:
        /// ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
        /// ReadOnly: receives and forwards only read requests.
        /// Default value: ReadOnly.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "readWriteMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ReadWriteMode
        {
            get;
            set;
        }
    }
}
