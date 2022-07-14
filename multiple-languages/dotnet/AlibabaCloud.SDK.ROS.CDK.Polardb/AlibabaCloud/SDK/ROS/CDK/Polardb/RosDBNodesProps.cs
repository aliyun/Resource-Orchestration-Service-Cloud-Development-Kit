using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::POLARDB::DBNodes`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-polardb.RosDBNodesProps")]
    public class RosDBNodesProps : AlibabaCloud.SDK.ROS.CDK.Polardb.IRosDBNodesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: amount: Number of nodes to be added to cluster.
        /// </remarks>
        [JsiiProperty(name: "amount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Amount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbClusterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imciSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ImciSwitch
        {
            get;
            set;
        }
    }
}
