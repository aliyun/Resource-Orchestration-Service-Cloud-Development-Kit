using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>A ROS template type:  `ALIYUN::CS::ClusterNodePool`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePoolProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosClusterNodePool : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::CS::ClusterNodePool`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosClusterNodePool(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cs.IRosClusterNodePoolProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosClusterNodePool(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosClusterNodePool(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool))!;

        /// <remarks>
        /// <strong>Attribute</strong>: NodePoolId: Cluster node pool ID.
        /// </remarks>
        [JsiiProperty(name: "attrNodePoolId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrNodePoolId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterId: Cluster ID.
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ClusterId
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingGroup: The configurations of the scaling group used by the node pool.
        /// </remarks>
        [JsiiProperty(name: "scalingGroup", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.ScalingGroupProperty\"}]}}")]
        public virtual object ScalingGroup
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoScaling: The configurations of auto scaling.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoScaling", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.AutoScalingProperty\"}]}}", isOptional: true)]
        public virtual object? AutoScaling
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: count: The number of nodes in the node pool.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "count", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Count
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: kubernetesConfig: The configurations of the ACK cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "kubernetesConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.KubernetesConfigProperty\"}]}}", isOptional: true)]
        public virtual object? KubernetesConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: management: The configurations of the managed node pool.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "management", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.ManagementProperty\"}]}}", isOptional: true)]
        public virtual object? Management
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: nodePoolInfo: The configurations of the node pool.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nodePoolInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.NodePoolInfoProperty\"}]}}", isOptional: true)]
        public virtual object? NodePoolInfo
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: teeConfig: The configurations of confidential computing.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "teeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.TeeConfigProperty\"}]}}", isOptional: true)]
        public virtual object? TeeConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IAutoScalingProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.AutoScalingProperty")]
        public interface IAutoScalingProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: enable: Specifies whether to enable auto scaling. Valid values:
            /// true: enables auto scaling.
            /// false: disables auto scaling.
            /// If you set this parameter to false, other parameters in the auto_scaling section do not take effect.
            /// </remarks>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Enable
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: eipBandwidth: The peak bandwidth of the EIP. Unit: Mbps
            /// </remarks>
            [JsiiProperty(name: "eipBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EipBandwidth
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: eipInternetChargeType: The billing method of the EIP. Valid values:
            /// PayByBandwidth: pay-by-bandwidth.
            /// PayByTraffic: pay-by-data-transfer.
            /// Default value: PayByBandwidth.
            /// </remarks>
            [JsiiProperty(name: "eipInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EipInternetChargeType
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: isBondEip: Specifies whether to associate an elastic IP address (EIP) with the node pool. Valid values:
            /// true: associates an EIP with the node pool.
            /// false: does not associate an EIP with the node pool.
            /// Default value: false.
            /// </remarks>
            [JsiiProperty(name: "isBondEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IsBondEip
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: maxInstances: The maximum number of Elastic Compute Service (ECS) instances in the scaling group.
            /// </remarks>
            [JsiiProperty(name: "maxInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MaxInstances
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: minInstances: The minimum number of Elastic Compute Service (ECS) instances in the scaling group.
            /// </remarks>
            [JsiiProperty(name: "minInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MinInstances
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The instance types that can be used for the auto scaling of the node pool. Valid values:
            /// cpu: regular instance.
            /// gpu: GPU-accelerated instance.
            /// gpushare: shared GPU-accelerated instance.
            /// spot: preemptible instance.
            /// Default value: cpu.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Type
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IAutoScalingProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.AutoScalingProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.IAutoScalingProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: enable: Specifies whether to enable auto scaling. Valid values:
                /// true: enables auto scaling.
                /// false: disables auto scaling.
                /// If you set this parameter to false, other parameters in the auto_scaling section do not take effect.
                /// </remarks>
                [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Enable
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: eipBandwidth: The peak bandwidth of the EIP. Unit: Mbps
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "eipBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EipBandwidth
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: eipInternetChargeType: The billing method of the EIP. Valid values:
                /// PayByBandwidth: pay-by-bandwidth.
                /// PayByTraffic: pay-by-data-transfer.
                /// Default value: PayByBandwidth.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "eipInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EipInternetChargeType
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: isBondEip: Specifies whether to associate an elastic IP address (EIP) with the node pool. Valid values:
                /// true: associates an EIP with the node pool.
                /// false: does not associate an EIP with the node pool.
                /// Default value: false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "isBondEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IsBondEip
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: maxInstances: The maximum number of Elastic Compute Service (ECS) instances in the scaling group.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "maxInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MaxInstances
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: minInstances: The minimum number of Elastic Compute Service (ECS) instances in the scaling group.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "minInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MinInstances
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: type: The instance types that can be used for the auto scaling of the node pool. Valid values:
                /// cpu: regular instance.
                /// gpu: GPU-accelerated instance.
                /// gpushare: shared GPU-accelerated instance.
                /// spot: preemptible instance.
                /// Default value: cpu.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Type
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosClusterNodePool.AutoScalingProperty")]
        public class AutoScalingProperty : AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.IAutoScalingProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: enable: Specifies whether to enable auto scaling. Valid values:
            /// true: enables auto scaling.
            /// false: disables auto scaling.
            /// If you set this parameter to false, other parameters in the auto_scaling section do not take effect.
            /// </remarks>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Enable
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: eipBandwidth: The peak bandwidth of the EIP. Unit: Mbps
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eipBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? EipBandwidth
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: eipInternetChargeType: The billing method of the EIP. Valid values:
            /// PayByBandwidth: pay-by-bandwidth.
            /// PayByTraffic: pay-by-data-transfer.
            /// Default value: PayByBandwidth.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eipInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? EipInternetChargeType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: isBondEip: Specifies whether to associate an elastic IP address (EIP) with the node pool. Valid values:
            /// true: associates an EIP with the node pool.
            /// false: does not associate an EIP with the node pool.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isBondEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? IsBondEip
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: maxInstances: The maximum number of Elastic Compute Service (ECS) instances in the scaling group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? MaxInstances
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: minInstances: The minimum number of Elastic Compute Service (ECS) instances in the scaling group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? MinInstances
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The instance types that can be used for the auto scaling of the node pool. Valid values:
            /// cpu: regular instance.
            /// gpu: GPU-accelerated instance.
            /// gpushare: shared GPU-accelerated instance.
            /// spot: preemptible instance.
            /// Default value: cpu.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Type
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IDataDisksProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.DataDisksProperty")]
        public interface IDataDisksProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: autoSnapshotPolicyId: The ID of an automatic snapshot policy. Automatic backup is performed for a disk based on the specified automatic snapshot policy.
            /// By default, this parameter is empty. This indicates that automatic backup is disabled.
            /// </remarks>
            [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AutoSnapshotPolicyId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: category: The type of data disk. Valid values:
            /// cloud: basic disk.
            /// cloud_efficiency: ultra disk.
            /// cloud_ssd: standard SSD.
            /// cloud_essd: enhanced SSD.
            /// Default value: cloud_efficiency.
            /// </remarks>
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Category
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: encrypted: Specifies whether to encrypt a data disk. Valid values:
            /// true: encrypts a data disk.
            /// false: does not encrypt a data disk.
            /// Default value: false.
            /// </remarks>
            [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Encrypted
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: performanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
            /// PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
            /// PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
            /// PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
            /// PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
            /// </remarks>
            [JsiiProperty(name: "performanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PerformanceLevel
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: size: The size of a data disk. The size is measured in GiB.
            /// Valid values: 40 to 32768.
            /// </remarks>
            [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Size
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IDataDisksProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.DataDisksProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.IDataDisksProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: autoSnapshotPolicyId: The ID of an automatic snapshot policy. Automatic backup is performed for a disk based on the specified automatic snapshot policy.
                /// By default, this parameter is empty. This indicates that automatic backup is disabled.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? AutoSnapshotPolicyId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: category: The type of data disk. Valid values:
                /// cloud: basic disk.
                /// cloud_efficiency: ultra disk.
                /// cloud_ssd: standard SSD.
                /// cloud_essd: enhanced SSD.
                /// Default value: cloud_efficiency.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Category
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: encrypted: Specifies whether to encrypt a data disk. Valid values:
                /// true: encrypts a data disk.
                /// false: does not encrypt a data disk.
                /// Default value: false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Encrypted
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: performanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
                /// PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
                /// PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
                /// PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
                /// PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "performanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PerformanceLevel
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: size: The size of a data disk. The size is measured in GiB.
                /// Valid values: 40 to 32768.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Size
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosClusterNodePool.DataDisksProperty")]
        public class DataDisksProperty : AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.IDataDisksProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: autoSnapshotPolicyId: The ID of an automatic snapshot policy. Automatic backup is performed for a disk based on the specified automatic snapshot policy.
            /// By default, this parameter is empty. This indicates that automatic backup is disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? AutoSnapshotPolicyId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: category: The type of data disk. Valid values:
            /// cloud: basic disk.
            /// cloud_efficiency: ultra disk.
            /// cloud_ssd: standard SSD.
            /// cloud_essd: enhanced SSD.
            /// Default value: cloud_efficiency.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Category
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: encrypted: Specifies whether to encrypt a data disk. Valid values:
            /// true: encrypts a data disk.
            /// false: does not encrypt a data disk.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Encrypted
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: performanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
            /// PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
            /// PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
            /// PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
            /// PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "performanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? PerformanceLevel
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: size: The size of a data disk. The size is measured in GiB.
            /// Valid values: 40 to 32768.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "size", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Size
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IKubernetesConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.KubernetesConfigProperty")]
        public interface IKubernetesConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: runtime: The name of the container runtime.
            /// </remarks>
            [JsiiProperty(name: "runtime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Runtime
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: runtimeVersion: The version of the container runtime.
            /// </remarks>
            [JsiiProperty(name: "runtimeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object RuntimeVersion
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: cmsEnabled: Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed on ECS nodes, you can view monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:
            /// true: installs the CloudMonitor agent on ECS nodes.
            /// false: does not install the CloudMonitor agent on ECS nodes.
            /// Default value: false.
            /// </remarks>
            [JsiiProperty(name: "cmsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CmsEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: cpuPolicy: The CPU policy. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later. Valid values:
            /// static: This policy allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
            /// none: This policy indicates that the default CPU affinity is used.
            /// Default value: none.
            /// </remarks>
            [JsiiProperty(name: "cpuPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CpuPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: labels: You can add labels to nodes that are added to the cluster.
            /// </remarks>
            [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Labels
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
            /// - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
            /// - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
            /// </remarks>
            [JsiiProperty(name: "nodeNameMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NodeNameMode
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: taints: The taints of the nodes.
            /// </remarks>
            [JsiiProperty(name: "taints", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.TaintsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Taints
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: unschedulable: Set new nodes to unschedulable. If true, newly added nodes become unschedulable after they are registered to the cluster. You can enable scheduling for the nodes on the Nodes page in the console.
            /// </remarks>
            [JsiiProperty(name: "unschedulable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Unschedulable
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: userData: The user-defined data.
            /// </remarks>
            [JsiiProperty(name: "userData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? UserData
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IKubernetesConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.KubernetesConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.IKubernetesConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: runtime: The name of the container runtime.
                /// </remarks>
                [JsiiProperty(name: "runtime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Runtime
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: runtimeVersion: The version of the container runtime.
                /// </remarks>
                [JsiiProperty(name: "runtimeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object RuntimeVersion
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: cmsEnabled: Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed on ECS nodes, you can view monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:
                /// true: installs the CloudMonitor agent on ECS nodes.
                /// false: does not install the CloudMonitor agent on ECS nodes.
                /// Default value: false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cmsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CmsEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: cpuPolicy: The CPU policy. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later. Valid values:
                /// static: This policy allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
                /// none: This policy indicates that the default CPU affinity is used.
                /// Default value: none.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cpuPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CpuPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: labels: You can add labels to nodes that are added to the cluster.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Labels
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
                /// - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
                /// - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "nodeNameMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NodeNameMode
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: taints: The taints of the nodes.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "taints", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.TaintsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Taints
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: unschedulable: Set new nodes to unschedulable. If true, newly added nodes become unschedulable after they are registered to the cluster. You can enable scheduling for the nodes on the Nodes page in the console.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "unschedulable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Unschedulable
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: userData: The user-defined data.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "userData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? UserData
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosClusterNodePool.KubernetesConfigProperty")]
        public class KubernetesConfigProperty : AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.IKubernetesConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: runtime: The name of the container runtime.
            /// </remarks>
            [JsiiProperty(name: "runtime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Runtime
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: runtimeVersion: The version of the container runtime.
            /// </remarks>
            [JsiiProperty(name: "runtimeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object RuntimeVersion
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cmsEnabled: Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed on ECS nodes, you can view monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:
            /// true: installs the CloudMonitor agent on ECS nodes.
            /// false: does not install the CloudMonitor agent on ECS nodes.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cmsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CmsEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cpuPolicy: The CPU policy. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later. Valid values:
            /// static: This policy allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
            /// none: This policy indicates that the default CPU affinity is used.
            /// Default value: none.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpuPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CpuPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: labels: You can add labels to nodes that are added to the cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? Labels
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
            /// - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
            /// - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nodeNameMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? NodeNameMode
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: taints: The taints of the nodes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "taints", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.TaintsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? Taints
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: unschedulable: Set new nodes to unschedulable. If true, newly added nodes become unschedulable after they are registered to the cluster. You can enable scheduling for the nodes on the Nodes page in the console.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "unschedulable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Unschedulable
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: userData: The user-defined data.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? UserData
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ILabelsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.LabelsProperty")]
        public interface ILabelsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Key
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Value
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(ILabelsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.LabelsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.ILabelsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: undefined
                /// </remarks>
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Key
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: value: undefined
                /// </remarks>
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Value
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosClusterNodePool.LabelsProperty")]
        public class LabelsProperty : AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.ILabelsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Value
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IManagementProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.ManagementProperty")]
        public interface IManagementProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: enable: Specifies whether to enable managed node pools. Valid values:
            /// true: enables managed node pools.
            /// false: disables managed node pools. The other parameters in this section take effect only when Enable=true is specified.
            /// </remarks>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Enable
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRepair: Specifies whether to enable auto repairing. This parameter takes effect only when Enable=true is specified.
            /// true: enables auto repairing.
            /// false: disables auto repairing.
            /// </remarks>
            [JsiiProperty(name: "autoRepair", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AutoRepair
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: upgradeConfig: The configurations of auto upgrading. The configurations take effect only when Enable=true is specified.
            /// </remarks>
            [JsiiProperty(name: "upgradeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.UpgradeConfigProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? UpgradeConfig
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IManagementProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.ManagementProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.IManagementProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: enable: Specifies whether to enable managed node pools. Valid values:
                /// true: enables managed node pools.
                /// false: disables managed node pools. The other parameters in this section take effect only when Enable=true is specified.
                /// </remarks>
                [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Enable
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: autoRepair: Specifies whether to enable auto repairing. This parameter takes effect only when Enable=true is specified.
                /// true: enables auto repairing.
                /// false: disables auto repairing.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "autoRepair", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? AutoRepair
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: upgradeConfig: The configurations of auto upgrading. The configurations take effect only when Enable=true is specified.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "upgradeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.UpgradeConfigProperty\"}]}}", isOptional: true)]
                public object? UpgradeConfig
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosClusterNodePool.ManagementProperty")]
        public class ManagementProperty : AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.IManagementProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: enable: Specifies whether to enable managed node pools. Valid values:
            /// true: enables managed node pools.
            /// false: disables managed node pools. The other parameters in this section take effect only when Enable=true is specified.
            /// </remarks>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Enable
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRepair: Specifies whether to enable auto repairing. This parameter takes effect only when Enable=true is specified.
            /// true: enables auto repairing.
            /// false: disables auto repairing.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRepair", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? AutoRepair
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: upgradeConfig: The configurations of auto upgrading. The configurations take effect only when Enable=true is specified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "upgradeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.UpgradeConfigProperty\"}]}}", isOptional: true, isOverride: true)]
            public object? UpgradeConfig
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(INodePoolInfoProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.NodePoolInfoProperty")]
        public interface INodePoolInfoProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: The name of the node pool.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Name
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the node pool belongs.
            /// </remarks>
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ResourceGroupId
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(INodePoolInfoProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.NodePoolInfoProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.INodePoolInfoProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: The name of the node pool.
                /// </remarks>
                [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Name
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the node pool belongs.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ResourceGroupId
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosClusterNodePool.NodePoolInfoProperty")]
        public class NodePoolInfoProperty : AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.INodePoolInfoProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: The name of the node pool.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the node pool belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ResourceGroupId
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IScalingGroupProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.ScalingGroupProperty")]
        public interface IScalingGroupProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: instanceTypes: The ECS instance types of the nodes.
            /// </remarks>
            [JsiiProperty(name: "instanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            object InstanceTypes
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskSize: The system disk size of a node. Unit: GiB. Valid values: 40 to 500.
            /// </remarks>
            [JsiiProperty(name: "systemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object SystemDiskSize
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchIds: The IDs of vSwitches.
            /// </remarks>
            [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            object VSwitchIds
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRenew: Specifies whether to enable auto-renewal for nodes in the node pool. This parameter takes effect only when instance_charge_type is set to PrePaid. Valid values:
            /// true: enables auto-renewal.
            /// false: disables auto-renewal.
            /// Default value: true.
            /// </remarks>
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AutoRenew
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRenewPeriod: The auto-renewal period for nodes in the node pool. This parameter takes effect and is required only when instance_charge_type is set to PrePaid and auto_renew is set to true. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
            /// Default value: 1
            /// </remarks>
            [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AutoRenewPeriod
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as the cost or insufficient inventory. This parameter takes effect when multi_az_policy is set to COST_OPTIMIZED. Valid values:
            /// true: automatically creates pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
            /// false: does not create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
            /// </remarks>
            [JsiiProperty(name: "compensateWithOnDemand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CompensateWithOnDemand
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: dataDisks: The configurations of data disks.
            /// </remarks>
            [JsiiProperty(name: "dataDisks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.DataDisksProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DataDisks
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: imageId: The ID of a custom image. By default, the image provided by ACK is used.
            /// </remarks>
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ImageId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceChargeType: The billing method of nodes in the node pool. Valid values:
            /// PrePaid: subscription.
            /// PostPaid: pay-as-you-go.
            /// Default value: PostPaid.
            /// </remarks>
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InstanceChargeType
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: internetChargeType: Bandwidth billing method. Valid values: PayByTraffic or PayByBandwidth.
            /// </remarks>
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InternetChargeType
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: internetMaxBandwidthOut: The release version of the operating system. Valid values:
            /// CentOS, AliyunLinux, Windows, WindowsCore.
            /// Default value: AliyunLinux.
            /// </remarks>
            [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InternetMaxBandwidthOut
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: keyPair: The name of the key pair used to log on to the nodes. You must set KeyPair or LoginPassword.
            /// </remarks>
            [JsiiProperty(name: "keyPair", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? KeyPair
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: loginPassword: The password used to log on to the nodes by using SSH. You must set KeyPair or LoginPassword. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
            /// </remarks>
            [JsiiProperty(name: "loginPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? LoginPassword
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: multiAzPolicy: The scaling policy of ECS instances in a multi-zone scaling group. Valid values:
            /// PRIORITY: the scaling group is scaled based on the VSwitchIds.N parameter. When ECS instances cannot be created in the zone where the vSwitch with the highest priority is deployed, the system attempts to create ECS instances in the zone where the vSwitch with the next highest priority is deployed.
            /// COST_OPTIMIZED: ECS instances are created based on the unit price of vCPUs in ascending order. Preemptible instances are preferably created when multiple instance types are specified in the scaling configurations. You can set the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient inventory.
            /// BALANCE: ECS instances are evenly distributed across multiple zones specified by the scaling group. If ECS instances are not evenly distributed across multiple zones due to insufficient inventory, you can call the RebalanceInstances operation to balance the instance distribution among zones.
            /// Default value: PRIORITY.
            /// </remarks>
            [JsiiProperty(name: "multiAzPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MultiAzPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: onDemandBaseCapacity: The minimum number of pay-as-you-go instances that must be kept in the scaling group. Valid values: 0 to 1000. When the number of pay-as-you-go instances is lower than this value, pay-as-you-go instances are preferably created to meet the required number.
            /// </remarks>
            [JsiiProperty(name: "onDemandBaseCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OnDemandBaseCapacity
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances among the extra instances that exceed the number specified by on_demand_base_capacity. Valid values: 0 to 100.
            /// </remarks>
            [JsiiProperty(name: "onDemandPercentageAboveBaseCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OnDemandPercentageAboveBaseCapacity
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The subscription period of nodes in the node pool. This parameter takes effect and is required only when InstanceChargeType is set to PrePaid. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
            /// Default value: 1.
            /// </remarks>
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Period
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: periodUnit: The unit of the subscription period of nodes in the node pool. This parameter is required if you set InstanceChargeType to PrePaid. A value of Month specifies that the subscription period is measured in months.
            /// </remarks>
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PeriodUnit
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: platform: The release version of the operating system. Valid values:
            /// CentOS, AliyunLinux, Windows, WindowsCore.
            /// Default value: AliyunLinux.
            /// </remarks>
            [JsiiProperty(name: "platform", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Platform
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsInstances: The IDs of the ApsaraDB RDS instances.
            /// </remarks>
            [JsiiProperty(name: "rdsInstances", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RdsInstances
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingPolicy: The scaling mode of the scaling group. Valid values:
            /// release: the standard mode. ECS instances are created and released based on the resource usage.
            /// recycle: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances attached with local disks.
            /// Default value:release.
            /// </remarks>
            [JsiiProperty(name: "scalingPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ScalingPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: The ID of the security group to which the nodes belong.
            /// </remarks>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SecurityGroupId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: spotInstancePools: The number of available instance types. The scaling group creates preemptible instances of multiple instance types at the lowest cost. Valid values: 1 to 10.
            /// </remarks>
            [JsiiProperty(name: "spotInstancePools", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SpotInstancePools
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, when the scaling group receives a system message that a preemptible instance is to be reclaimed, the scaling group attempts to create a new instance to replace this instance. Valid values:
            /// true: supplements preemptible instances.
            /// false: does not supplement preemptible instances.
            /// </remarks>
            [JsiiProperty(name: "spotInstanceRemedy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SpotInstanceRemedy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: spotPriceLimit: The instance type for preemptible instances and the price limit of the instance type.
            /// </remarks>
            [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.SpotPriceLimitProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SpotPriceLimit
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: spotStrategy: The type of preemptible instance. Valid values:
            /// NoSpot: non-preemptible instance.
            /// SpotWithPriceLimit: specifies the highest bid for a preemptible instance.
            /// SpotAsPriceGo: automatically submits bids based on the up-to-date market price.
            /// </remarks>
            [JsiiProperty(name: "spotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SpotStrategy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskCategory: The type of system disk. Valid values:
            /// cloud_efficiency: ultra disk.
            /// cloud_ssd: standard SSD.
            /// cloud_essd: enhanced SSD.
            /// Default value: cloud_efficiency.
            /// </remarks>
            [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SystemDiskCategory
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
            /// PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
            /// PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
            /// PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
            /// PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
            /// </remarks>
            [JsiiProperty(name: "systemDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SystemDiskPerformanceLevel
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Adds labels only to ECS instances.
            /// A key must be unique and cannot exceed 128 characters in length. Neither keys nor values can start with aliyun or acs:. Neither keys nor values can contain https:// or http://.
            /// </remarks>
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.ITagsProperty[]? Tags
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IScalingGroupProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.ScalingGroupProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.IScalingGroupProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceTypes: The ECS instance types of the nodes.
                /// </remarks>
                [JsiiProperty(name: "instanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
                public object InstanceTypes
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: systemDiskSize: The system disk size of a node. Unit: GiB. Valid values: 40 to 500.
                /// </remarks>
                [JsiiProperty(name: "systemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object SystemDiskSize
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: vSwitchIds: The IDs of vSwitches.
                /// </remarks>
                [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
                public object VSwitchIds
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: autoRenew: Specifies whether to enable auto-renewal for nodes in the node pool. This parameter takes effect only when instance_charge_type is set to PrePaid. Valid values:
                /// true: enables auto-renewal.
                /// false: disables auto-renewal.
                /// Default value: true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? AutoRenew
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: autoRenewPeriod: The auto-renewal period for nodes in the node pool. This parameter takes effect and is required only when instance_charge_type is set to PrePaid and auto_renew is set to true. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
                /// Default value: 1
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? AutoRenewPeriod
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as the cost or insufficient inventory. This parameter takes effect when multi_az_policy is set to COST_OPTIMIZED. Valid values:
                /// true: automatically creates pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
                /// false: does not create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "compensateWithOnDemand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CompensateWithOnDemand
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: dataDisks: The configurations of data disks.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dataDisks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.DataDisksProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? DataDisks
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: imageId: The ID of a custom image. By default, the image provided by ACK is used.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ImageId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceChargeType: The billing method of nodes in the node pool. Valid values:
                /// PrePaid: subscription.
                /// PostPaid: pay-as-you-go.
                /// Default value: PostPaid.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InstanceChargeType
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: internetChargeType: Bandwidth billing method. Valid values: PayByTraffic or PayByBandwidth.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InternetChargeType
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: internetMaxBandwidthOut: The release version of the operating system. Valid values:
                /// CentOS, AliyunLinux, Windows, WindowsCore.
                /// Default value: AliyunLinux.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InternetMaxBandwidthOut
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: keyPair: The name of the key pair used to log on to the nodes. You must set KeyPair or LoginPassword.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "keyPair", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? KeyPair
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: loginPassword: The password used to log on to the nodes by using SSH. You must set KeyPair or LoginPassword. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "loginPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? LoginPassword
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: multiAzPolicy: The scaling policy of ECS instances in a multi-zone scaling group. Valid values:
                /// PRIORITY: the scaling group is scaled based on the VSwitchIds.N parameter. When ECS instances cannot be created in the zone where the vSwitch with the highest priority is deployed, the system attempts to create ECS instances in the zone where the vSwitch with the next highest priority is deployed.
                /// COST_OPTIMIZED: ECS instances are created based on the unit price of vCPUs in ascending order. Preemptible instances are preferably created when multiple instance types are specified in the scaling configurations. You can set the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient inventory.
                /// BALANCE: ECS instances are evenly distributed across multiple zones specified by the scaling group. If ECS instances are not evenly distributed across multiple zones due to insufficient inventory, you can call the RebalanceInstances operation to balance the instance distribution among zones.
                /// Default value: PRIORITY.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "multiAzPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MultiAzPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: onDemandBaseCapacity: The minimum number of pay-as-you-go instances that must be kept in the scaling group. Valid values: 0 to 1000. When the number of pay-as-you-go instances is lower than this value, pay-as-you-go instances are preferably created to meet the required number.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "onDemandBaseCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OnDemandBaseCapacity
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances among the extra instances that exceed the number specified by on_demand_base_capacity. Valid values: 0 to 100.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "onDemandPercentageAboveBaseCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OnDemandPercentageAboveBaseCapacity
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: period: The subscription period of nodes in the node pool. This parameter takes effect and is required only when InstanceChargeType is set to PrePaid. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
                /// Default value: 1.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Period
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: periodUnit: The unit of the subscription period of nodes in the node pool. This parameter is required if you set InstanceChargeType to PrePaid. A value of Month specifies that the subscription period is measured in months.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PeriodUnit
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: platform: The release version of the operating system. Valid values:
                /// CentOS, AliyunLinux, Windows, WindowsCore.
                /// Default value: AliyunLinux.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "platform", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Platform
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rdsInstances: The IDs of the ApsaraDB RDS instances.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsInstances", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? RdsInstances
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: scalingPolicy: The scaling mode of the scaling group. Valid values:
                /// release: the standard mode. ECS instances are created and released based on the resource usage.
                /// recycle: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances attached with local disks.
                /// Default value:release.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "scalingPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ScalingPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: securityGroupId: The ID of the security group to which the nodes belong.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SecurityGroupId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: spotInstancePools: The number of available instance types. The scaling group creates preemptible instances of multiple instance types at the lowest cost. Valid values: 1 to 10.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "spotInstancePools", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SpotInstancePools
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, when the scaling group receives a system message that a preemptible instance is to be reclaimed, the scaling group attempts to create a new instance to replace this instance. Valid values:
                /// true: supplements preemptible instances.
                /// false: does not supplement preemptible instances.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "spotInstanceRemedy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SpotInstanceRemedy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: spotPriceLimit: The instance type for preemptible instances and the price limit of the instance type.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.SpotPriceLimitProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? SpotPriceLimit
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: spotStrategy: The type of preemptible instance. Valid values:
                /// NoSpot: non-preemptible instance.
                /// SpotWithPriceLimit: specifies the highest bid for a preemptible instance.
                /// SpotAsPriceGo: automatically submits bids based on the up-to-date market price.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "spotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SpotStrategy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: systemDiskCategory: The type of system disk. Valid values:
                /// cloud_efficiency: ultra disk.
                /// cloud_ssd: standard SSD.
                /// cloud_essd: enhanced SSD.
                /// Default value: cloud_efficiency.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SystemDiskCategory
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
                /// PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
                /// PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
                /// PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
                /// PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "systemDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SystemDiskPerformanceLevel
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tags: Adds labels only to ECS instances.
                /// A key must be unique and cannot exceed 128 characters in length. Neither keys nor values can start with aliyun or acs:. Neither keys nor values can contain https:// or http://.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
                public AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.ITagsProperty[]? Tags
                {
                    get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.ITagsProperty[]?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosClusterNodePool.ScalingGroupProperty")]
        public class ScalingGroupProperty : AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.IScalingGroupProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: instanceTypes: The ECS instance types of the nodes.
            /// </remarks>
            [JsiiProperty(name: "instanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
            public object InstanceTypes
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskSize: The system disk size of a node. Unit: GiB. Valid values: 40 to 500.
            /// </remarks>
            [JsiiProperty(name: "systemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object SystemDiskSize
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchIds: The IDs of vSwitches.
            /// </remarks>
            [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
            public object VSwitchIds
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRenew: Specifies whether to enable auto-renewal for nodes in the node pool. This parameter takes effect only when instance_charge_type is set to PrePaid. Valid values:
            /// true: enables auto-renewal.
            /// false: disables auto-renewal.
            /// Default value: true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? AutoRenew
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRenewPeriod: The auto-renewal period for nodes in the node pool. This parameter takes effect and is required only when instance_charge_type is set to PrePaid and auto_renew is set to true. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
            /// Default value: 1
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? AutoRenewPeriod
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as the cost or insufficient inventory. This parameter takes effect when multi_az_policy is set to COST_OPTIMIZED. Valid values:
            /// true: automatically creates pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
            /// false: does not create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "compensateWithOnDemand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CompensateWithOnDemand
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: dataDisks: The configurations of data disks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataDisks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.DataDisksProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? DataDisks
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: imageId: The ID of a custom image. By default, the image provided by ACK is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ImageId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceChargeType: The billing method of nodes in the node pool. Valid values:
            /// PrePaid: subscription.
            /// PostPaid: pay-as-you-go.
            /// Default value: PostPaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? InstanceChargeType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: internetChargeType: Bandwidth billing method. Valid values: PayByTraffic or PayByBandwidth.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? InternetChargeType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: internetMaxBandwidthOut: The release version of the operating system. Valid values:
            /// CentOS, AliyunLinux, Windows, WindowsCore.
            /// Default value: AliyunLinux.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? InternetMaxBandwidthOut
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: keyPair: The name of the key pair used to log on to the nodes. You must set KeyPair or LoginPassword.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keyPair", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? KeyPair
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: loginPassword: The password used to log on to the nodes by using SSH. You must set KeyPair or LoginPassword. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loginPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? LoginPassword
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: multiAzPolicy: The scaling policy of ECS instances in a multi-zone scaling group. Valid values:
            /// PRIORITY: the scaling group is scaled based on the VSwitchIds.N parameter. When ECS instances cannot be created in the zone where the vSwitch with the highest priority is deployed, the system attempts to create ECS instances in the zone where the vSwitch with the next highest priority is deployed.
            /// COST_OPTIMIZED: ECS instances are created based on the unit price of vCPUs in ascending order. Preemptible instances are preferably created when multiple instance types are specified in the scaling configurations. You can set the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient inventory.
            /// BALANCE: ECS instances are evenly distributed across multiple zones specified by the scaling group. If ECS instances are not evenly distributed across multiple zones due to insufficient inventory, you can call the RebalanceInstances operation to balance the instance distribution among zones.
            /// Default value: PRIORITY.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "multiAzPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? MultiAzPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: onDemandBaseCapacity: The minimum number of pay-as-you-go instances that must be kept in the scaling group. Valid values: 0 to 1000. When the number of pay-as-you-go instances is lower than this value, pay-as-you-go instances are preferably created to meet the required number.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "onDemandBaseCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OnDemandBaseCapacity
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances among the extra instances that exceed the number specified by on_demand_base_capacity. Valid values: 0 to 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "onDemandPercentageAboveBaseCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OnDemandPercentageAboveBaseCapacity
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The subscription period of nodes in the node pool. This parameter takes effect and is required only when InstanceChargeType is set to PrePaid. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
            /// Default value: 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Period
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: periodUnit: The unit of the subscription period of nodes in the node pool. This parameter is required if you set InstanceChargeType to PrePaid. A value of Month specifies that the subscription period is measured in months.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? PeriodUnit
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: platform: The release version of the operating system. Valid values:
            /// CentOS, AliyunLinux, Windows, WindowsCore.
            /// Default value: AliyunLinux.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "platform", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Platform
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsInstances: The IDs of the ApsaraDB RDS instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsInstances", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? RdsInstances
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingPolicy: The scaling mode of the scaling group. Valid values:
            /// release: the standard mode. ECS instances are created and released based on the resource usage.
            /// recycle: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances attached with local disks.
            /// Default value:release.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scalingPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ScalingPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: The ID of the security group to which the nodes belong.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SecurityGroupId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: spotInstancePools: The number of available instance types. The scaling group creates preemptible instances of multiple instance types at the lowest cost. Valid values: 1 to 10.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotInstancePools", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SpotInstancePools
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, when the scaling group receives a system message that a preemptible instance is to be reclaimed, the scaling group attempts to create a new instance to replace this instance. Valid values:
            /// true: supplements preemptible instances.
            /// false: does not supplement preemptible instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotInstanceRemedy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SpotInstanceRemedy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: spotPriceLimit: The instance type for preemptible instances and the price limit of the instance type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.SpotPriceLimitProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? SpotPriceLimit
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: spotStrategy: The type of preemptible instance. Valid values:
            /// NoSpot: non-preemptible instance.
            /// SpotWithPriceLimit: specifies the highest bid for a preemptible instance.
            /// SpotAsPriceGo: automatically submits bids based on the up-to-date market price.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SpotStrategy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskCategory: The type of system disk. Valid values:
            /// cloud_efficiency: ultra disk.
            /// cloud_ssd: standard SSD.
            /// cloud_essd: enhanced SSD.
            /// Default value: cloud_efficiency.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SystemDiskCategory
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
            /// PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
            /// PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
            /// PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
            /// PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SystemDiskPerformanceLevel
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Adds labels only to ECS instances.
            /// A key must be unique and cannot exceed 128 characters in length. Neither keys nor values can start with aliyun or acs:. Neither keys nor values can contain https:// or http://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterNodePool.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
            public AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.ITagsProperty[]? Tags
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ISpotPriceLimitProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.SpotPriceLimitProperty")]
        public interface ISpotPriceLimitProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: instanceType: The instance type for preemptible instances.
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object InstanceType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: priceLimit: The price limit of a preemptible instance.
            /// </remarks>
            [JsiiProperty(name: "priceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object PriceLimit
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(ISpotPriceLimitProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.SpotPriceLimitProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.ISpotPriceLimitProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceType: The instance type for preemptible instances.
                /// </remarks>
                [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object InstanceType
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: priceLimit: The price limit of a preemptible instance.
                /// </remarks>
                [JsiiProperty(name: "priceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object PriceLimit
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosClusterNodePool.SpotPriceLimitProperty")]
        public class SpotPriceLimitProperty : AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.ISpotPriceLimitProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: instanceType: The instance type for preemptible instances.
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object InstanceType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: priceLimit: The price limit of a preemptible instance.
            /// </remarks>
            [JsiiProperty(name: "priceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object PriceLimit
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITagsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.TagsProperty")]
        public interface ITagsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Key
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Value
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(ITagsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.TagsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.ITagsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: undefined
                /// </remarks>
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Key
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: value: undefined
                /// </remarks>
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Value
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosClusterNodePool.TagsProperty")]
        public class TagsProperty : AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.ITagsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Value
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITaintsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.TaintsProperty")]
        public interface ITaintsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: effect: The scheduling policy. Valid values:
            /// NoSchedule: Pods that do not tolerate this taint are not scheduled to nodes with this taint. This policy affects only the scheduling process and takes effect only for pods to be scheduled. Scheduled pods are not subject to this policy.
            /// NoExecute: Pods that do not tolerate this taint are evicted after this taint is added to the node.
            /// PreferNoSchedule: a preference policy on pods. Scheduled pods are not subject to this policy. If this taint is added to a node, the system tries to not schedule pods that do not tolerate this taint to the node.
            /// Default value: NoSchedule.
            /// </remarks>
            [JsiiProperty(name: "effect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Effect
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Key
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Value
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(ITaintsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.TaintsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.ITaintsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: effect: The scheduling policy. Valid values:
                /// NoSchedule: Pods that do not tolerate this taint are not scheduled to nodes with this taint. This policy affects only the scheduling process and takes effect only for pods to be scheduled. Scheduled pods are not subject to this policy.
                /// NoExecute: Pods that do not tolerate this taint are evicted after this taint is added to the node.
                /// PreferNoSchedule: a preference policy on pods. Scheduled pods are not subject to this policy. If this taint is added to a node, the system tries to not schedule pods that do not tolerate this taint to the node.
                /// Default value: NoSchedule.
                /// </remarks>
                [JsiiProperty(name: "effect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Effect
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: key: undefined
                /// </remarks>
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Key
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: value: undefined
                /// </remarks>
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Value
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosClusterNodePool.TaintsProperty")]
        public class TaintsProperty : AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.ITaintsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: effect: The scheduling policy. Valid values:
            /// NoSchedule: Pods that do not tolerate this taint are not scheduled to nodes with this taint. This policy affects only the scheduling process and takes effect only for pods to be scheduled. Scheduled pods are not subject to this policy.
            /// NoExecute: Pods that do not tolerate this taint are evicted after this taint is added to the node.
            /// PreferNoSchedule: a preference policy on pods. Scheduled pods are not subject to this policy. If this taint is added to a node, the system tries to not schedule pods that do not tolerate this taint to the node.
            /// Default value: NoSchedule.
            /// </remarks>
            [JsiiProperty(name: "effect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Effect
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Value
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITeeConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.TeeConfigProperty")]
        public interface ITeeConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: teeEnable: Specifies whether to enable confidential computing for the cluster.
            /// </remarks>
            [JsiiProperty(name: "teeEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object TeeEnable
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(ITeeConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.TeeConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.ITeeConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: teeEnable: Specifies whether to enable confidential computing for the cluster.
                /// </remarks>
                [JsiiProperty(name: "teeEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object TeeEnable
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosClusterNodePool.TeeConfigProperty")]
        public class TeeConfigProperty : AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.ITeeConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: teeEnable: Specifies whether to enable confidential computing for the cluster.
            /// </remarks>
            [JsiiProperty(name: "teeEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object TeeEnable
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IUpgradeConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.UpgradeConfigProperty")]
        public interface IUpgradeConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: autoUpgrade: Specifies whether to enable auto upgrading. Valid values:
            /// true: enables auto upgrading.
            /// false: disables auto upgrading.
            /// </remarks>
            [JsiiProperty(name: "autoUpgrade", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AutoUpgrade
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: maxUnavailable: The maximum number of nodes that can be in the unschedulable state.
            /// Valid values: 1 to 1000.
            /// Default value: 1.
            /// </remarks>
            [JsiiProperty(name: "maxUnavailable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MaxUnavailable
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: surge: The number of extra nodes that can be added to the node pool during an auto upgrade.
            /// </remarks>
            [JsiiProperty(name: "surge", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Surge
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: surgePercentage: The ratio of extra nodes to the nodes in the node pool. You must set this parameter or Surge.
            /// </remarks>
            [JsiiProperty(name: "surgePercentage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SurgePercentage
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IUpgradeConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterNodePool.UpgradeConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.IUpgradeConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: autoUpgrade: Specifies whether to enable auto upgrading. Valid values:
                /// true: enables auto upgrading.
                /// false: disables auto upgrading.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "autoUpgrade", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? AutoUpgrade
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: maxUnavailable: The maximum number of nodes that can be in the unschedulable state.
                /// Valid values: 1 to 1000.
                /// Default value: 1.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "maxUnavailable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MaxUnavailable
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: surge: The number of extra nodes that can be added to the node pool during an auto upgrade.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "surge", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Surge
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: surgePercentage: The ratio of extra nodes to the nodes in the node pool. You must set this parameter or Surge.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "surgePercentage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SurgePercentage
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosClusterNodePool.UpgradeConfigProperty")]
        public class UpgradeConfigProperty : AlibabaCloud.SDK.ROS.CDK.Cs.RosClusterNodePool.IUpgradeConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: autoUpgrade: Specifies whether to enable auto upgrading. Valid values:
            /// true: enables auto upgrading.
            /// false: disables auto upgrading.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoUpgrade", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? AutoUpgrade
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: maxUnavailable: The maximum number of nodes that can be in the unschedulable state.
            /// Valid values: 1 to 1000.
            /// Default value: 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxUnavailable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? MaxUnavailable
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: surge: The number of extra nodes that can be added to the node pool during an auto upgrade.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "surge", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Surge
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: surgePercentage: The ratio of extra nodes to the nodes in the node pool. You must set this parameter or Surge.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "surgePercentage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SurgePercentage
            {
                get;
                set;
            }
        }
    }
}
