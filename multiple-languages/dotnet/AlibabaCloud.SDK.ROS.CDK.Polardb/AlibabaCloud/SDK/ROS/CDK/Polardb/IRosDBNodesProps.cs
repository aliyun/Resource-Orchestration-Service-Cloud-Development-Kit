using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `ALIYUN::POLARDB::DBNodes`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDBNodesProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosDBNodesProps")]
    public interface IRosDBNodesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: amount: Number of nodes to be added to cluster.
        /// </remarks>
        [JsiiProperty(name: "amount", typeJson: "{\"primitive\":\"number\"}")]
        double Amount
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}")]
        string DbClusterId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::POLARDB::DBNodes`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDBNodesProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosDBNodesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IRosDBNodesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: amount: Number of nodes to be added to cluster.
            /// </remarks>
            [JsiiProperty(name: "amount", typeJson: "{\"primitive\":\"number\"}")]
            public double Amount
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
            /// </remarks>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbClusterId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
