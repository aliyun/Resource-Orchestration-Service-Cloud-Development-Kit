using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Properties for defining a `ALIYUN::MSE::Cluster`.</summary>
    [JsiiInterface(nativeType: typeof(IRosClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.RosClusterProps")]
    public interface IRosClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
        /// </remarks>
        [JsiiProperty(name: "clusterSpecification", typeJson: "{\"primitive\":\"string\"}")]
        string ClusterSpecification
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterType: cluster type
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}")]
        string ClusterType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
        /// </remarks>
        [JsiiProperty(name: "clusterVersion", typeJson: "{\"primitive\":\"string\"}")]
        string ClusterVersion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceCount: instance count
        /// </remarks>
        [JsiiProperty(name: "instanceCount", typeJson: "{\"primitive\":\"number\"}")]
        double InstanceCount
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: netType: network type, Enum: privatenet,pubnet
        /// </remarks>
        [JsiiProperty(name: "netType", typeJson: "{\"primitive\":\"string\"}")]
        string NetType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: diskType: disk type
        /// </remarks>
        [JsiiProperty(name: "diskType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DiskType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: privateSlbSpecification:
        /// </remarks>
        [JsiiProperty(name: "privateSlbSpecification", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PrivateSlbSpecification
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: pubNetworkFlow: pub network flow
        /// </remarks>
        [JsiiProperty(name: "pubNetworkFlow", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PubNetworkFlow
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: pubSlbSpecification:
        /// </remarks>
        [JsiiProperty(name: "pubSlbSpecification", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PubSlbSpecification
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: vpc id
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: switcher Id
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::MSE::Cluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.RosClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.IRosClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
            /// </remarks>
            [JsiiProperty(name: "clusterSpecification", typeJson: "{\"primitive\":\"string\"}")]
            public string ClusterSpecification
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterType: cluster type
            /// </remarks>
            [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}")]
            public string ClusterType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
            /// </remarks>
            [JsiiProperty(name: "clusterVersion", typeJson: "{\"primitive\":\"string\"}")]
            public string ClusterVersion
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceCount: instance count
            /// </remarks>
            [JsiiProperty(name: "instanceCount", typeJson: "{\"primitive\":\"number\"}")]
            public double InstanceCount
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: netType: network type, Enum: privatenet,pubnet
            /// </remarks>
            [JsiiProperty(name: "netType", typeJson: "{\"primitive\":\"string\"}")]
            public string NetType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: diskType: disk type
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DiskType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: privateSlbSpecification:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateSlbSpecification", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PrivateSlbSpecification
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pubNetworkFlow: pub network flow
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pubNetworkFlow", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PubNetworkFlow
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pubSlbSpecification:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pubSlbSpecification", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PubSlbSpecification
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: vpc id
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: switcher Id
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VSwitchId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
