using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `ALIYUN::EDAS::Cluster`.</summary>
    [JsiiInterface(nativeType: typeof(IRosClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosClusterProps")]
    public interface IRosClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterName: Cluster name
        /// </remarks>
        [JsiiProperty(name: "clusterName", typeJson: "{\"primitive\":\"string\"}")]
        string ClusterName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterType: Cluster type. 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"number\"}")]
        double ClusterType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkMode: Network Type. 1- classic network, 2-VPC
        /// </remarks>
        [JsiiProperty(name: "networkMode", typeJson: "{\"primitive\":\"number\"}")]
        double NetworkMode
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier)
        /// </remarks>
        [JsiiProperty(name: "logicalRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? LogicalRegionId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
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

        /// <remarks>
        /// <strong>Property</strong>: vpcId: VPC network ID. If network selection VPC, this parameter Required
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
        [JsiiTypeProxy(nativeType: typeof(IRosClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IRosClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterName: Cluster name
            /// </remarks>
            [JsiiProperty(name: "clusterName", typeJson: "{\"primitive\":\"string\"}")]
            public string ClusterName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterType: Cluster type. 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
            /// </remarks>
            [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"number\"}")]
            public double ClusterType
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: networkMode: Network Type. 1- classic network, 2-VPC
            /// </remarks>
            [JsiiProperty(name: "networkMode", typeJson: "{\"primitive\":\"number\"}")]
            public double NetworkMode
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logicalRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? LogicalRegionId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oversoldFactor", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? OversoldFactor
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: VPC network ID. If network selection VPC, this parameter Required
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
