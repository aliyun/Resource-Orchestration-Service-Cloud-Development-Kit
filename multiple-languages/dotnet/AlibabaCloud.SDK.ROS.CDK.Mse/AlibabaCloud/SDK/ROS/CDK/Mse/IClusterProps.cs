using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Properties for defining a `ALIYUN::MSE::Cluster`.</summary>
    [JsiiInterface(nativeType: typeof(IClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.ClusterProps")]
    public interface IClusterProps
    {
        /// <summary>Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c.</summary>
        [JsiiProperty(name: "clusterSpecification", typeJson: "{\"primitive\":\"string\"}")]
        string ClusterSpecification
        {
            get;
        }

        /// <summary>Property clusterType: cluster type.</summary>
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}")]
        string ClusterType
        {
            get;
        }

        /// <summary>Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3.</summary>
        [JsiiProperty(name: "clusterVersion", typeJson: "{\"primitive\":\"string\"}")]
        string ClusterVersion
        {
            get;
        }

        /// <summary>Property instanceCount: instance count.</summary>
        [JsiiProperty(name: "instanceCount", typeJson: "{\"primitive\":\"number\"}")]
        double InstanceCount
        {
            get;
        }

        /// <summary>Property netType: network type, Enum: privatenet,pubnet.</summary>
        [JsiiProperty(name: "netType", typeJson: "{\"primitive\":\"string\"}")]
        string NetType
        {
            get;
        }

        /// <summary>Property diskType: disk type.</summary>
        [JsiiProperty(name: "diskType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DiskType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property privateSlbSpecification:.</summary>
        [JsiiProperty(name: "privateSlbSpecification", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PrivateSlbSpecification
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pubNetworkFlow: pub network flow.</summary>
        [JsiiProperty(name: "pubNetworkFlow", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PubNetworkFlow
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pubSlbSpecification:.</summary>
        [JsiiProperty(name: "pubSlbSpecification", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PubSlbSpecification
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: vpc id.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: switcher Id.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.ClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.IClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c.</summary>
            [JsiiProperty(name: "clusterSpecification", typeJson: "{\"primitive\":\"string\"}")]
            public string ClusterSpecification
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property clusterType: cluster type.</summary>
            [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}")]
            public string ClusterType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3.</summary>
            [JsiiProperty(name: "clusterVersion", typeJson: "{\"primitive\":\"string\"}")]
            public string ClusterVersion
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property instanceCount: instance count.</summary>
            [JsiiProperty(name: "instanceCount", typeJson: "{\"primitive\":\"number\"}")]
            public double InstanceCount
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property netType: network type, Enum: privatenet,pubnet.</summary>
            [JsiiProperty(name: "netType", typeJson: "{\"primitive\":\"string\"}")]
            public string NetType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property diskType: disk type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "diskType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DiskType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property privateSlbSpecification:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "privateSlbSpecification", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PrivateSlbSpecification
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property pubNetworkFlow: pub network flow.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "pubNetworkFlow", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PubNetworkFlow
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property pubSlbSpecification:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "pubSlbSpecification", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PubSlbSpecification
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property vpcId: vpc id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property vSwitchId: switcher Id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VSwitchId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
