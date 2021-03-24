using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `ALIYUN::POLARDB::DBNodes`.</summary>
    [JsiiInterface(nativeType: typeof(IDBNodesProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBNodesProps")]
    public interface IDBNodesProps
    {
        /// <summary>Property amount: Number of nodes to be added to cluster.</summary>
        [JsiiProperty(name: "amount", typeJson: "{\"primitive\":\"number\"}")]
        double Amount
        {
            get;
        }

        /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}")]
        string DbClusterId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::POLARDB::DBNodes`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDBNodesProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBNodesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IDBNodesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property amount: Number of nodes to be added to cluster.</summary>
            [JsiiProperty(name: "amount", typeJson: "{\"primitive\":\"number\"}")]
            public double Amount
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.</summary>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbClusterId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
