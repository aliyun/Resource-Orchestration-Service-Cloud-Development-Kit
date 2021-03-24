using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::POLARDB::DBNodes`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-polardb.DBNodesProps")]
    public class DBNodesProps : AlibabaCloud.SDK.ROS.CDK.Polardb.IDBNodesProps
    {
        /// <summary>Property amount: Number of nodes to be added to cluster.</summary>
        [JsiiProperty(name: "amount", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Amount
        {
            get;
            set;
        }

        /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbClusterId
        {
            get;
            set;
        }
    }
}
