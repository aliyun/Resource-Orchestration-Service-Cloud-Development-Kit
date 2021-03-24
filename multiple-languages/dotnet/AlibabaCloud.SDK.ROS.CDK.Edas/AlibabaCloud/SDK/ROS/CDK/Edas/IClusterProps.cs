using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `ALIYUN::EDAS::Cluster`.</summary>
    [JsiiInterface(nativeType: typeof(IClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.ClusterProps")]
    public interface IClusterProps
    {
        /// <summary>Property clusterName: Cluster name.</summary>
        [JsiiProperty(name: "clusterName", typeJson: "{\"primitive\":\"string\"}")]
        string ClusterName
        {
            get;
        }

        /// <summary>Property clusterType: Cluster type.</summary>
        /// <remarks>
        /// 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"number\"}")]
        double ClusterType
        {
            get;
        }

        /// <summary>Property networkMode: Network Type.</summary>
        /// <remarks>
        /// 1- classic network, 2-VPC
        /// </remarks>
        [JsiiProperty(name: "networkMode", typeJson: "{\"primitive\":\"number\"}")]
        double NetworkMode
        {
            get;
        }

        /// <summary>Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier).</summary>
        [JsiiProperty(name: "logicalRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? LogicalRegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property oversoldFactor: Docker CPU cluster oversold.</summary>
        /// <remarks>
        /// Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
        /// </remarks>
        [JsiiProperty(name: "oversoldFactor", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? OversoldFactor
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: VPC network ID.</summary>
        /// <remarks>
        /// If network selection VPC, this parameter Required
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

        /// <summary>Properties for defining a `ALIYUN::EDAS::Cluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.ClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterName: Cluster name.</summary>
            [JsiiProperty(name: "clusterName", typeJson: "{\"primitive\":\"string\"}")]
            public string ClusterName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property clusterType: Cluster type.</summary>
            /// <remarks>
            /// 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
            /// </remarks>
            [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"number\"}")]
            public double ClusterType
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property networkMode: Network Type.</summary>
            /// <remarks>
            /// 1- classic network, 2-VPC
            /// </remarks>
            [JsiiProperty(name: "networkMode", typeJson: "{\"primitive\":\"number\"}")]
            public double NetworkMode
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "logicalRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? LogicalRegionId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property oversoldFactor: Docker CPU cluster oversold.</summary>
            /// <remarks>
            /// Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oversoldFactor", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? OversoldFactor
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property vpcId: VPC network ID.</summary>
            /// <remarks>
            /// If network selection VPC, this parameter Required
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
