using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gws
{
    /// <summary>Properties for defining a `ALIYUN::GWS::Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-gws.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property clusterId: Cluster id.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <summary>Property imageId: Mirror id.</summary>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ImageId
        {
            get;
        }

        /// <summary>Property instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.</summary>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceType
        {
            get;
        }

        /// <summary>Property systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.</summary>
        [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SystemDiskCategory
        {
            get;
        }

        /// <summary>Property systemDiskSize: System disk size.</summary>
        [JsiiProperty(name: "systemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SystemDiskSize
        {
            get;
        }

        /// <summary>Property workMode: Work mode: Desktop Application.</summary>
        [JsiiProperty(name: "workMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkMode
        {
            get;
        }

        /// <summary>Property allocatePublicAddress: Whether to allocate a public network address.</summary>
        [JsiiProperty(name: "allocatePublicAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllocatePublicAddress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property appList: App list.</summary>
        /// <remarks>
        /// This value is only valid when WorkMode is Application.
        /// </remarks>
        [JsiiProperty(name: "appList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-gws.RosInstance.AppListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenew: Whether auto renew.</summary>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceChargeType: Instance charge type: PostPaid (default): Pay-As-You-Go PrePaid: Subscription.</summary>
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetChargeType: Network charge type: PayByTraffic (default): Flow-per-use billing PayByBandwidth: fixed-bandwidth billing This value is only valid when AllocatePublicAddress is true.</summary>
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InternetChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetMaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps).</summary>
        /// <remarks>
        /// Value range: 1-200
        /// Default: 200
        /// This value is only valid when AllocatePublicAddress is true.
        /// </remarks>
        [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InternetMaxBandwidthIn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).</summary>
        /// <remarks>
        /// Value range: 1-200
        /// Default: 200
        /// This value is only valid when AllocatePublicAddress is true.
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

        /// <summary>Property name: Instance name.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: Period of subscription.</summary>
        /// <remarks>
        /// When PeriodUnit is Week, the value range is 1-4
        /// When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
        /// This value is only valid when InstanceChargeType is PrePaid.
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

        /// <summary>Property periodUnit: Unit of period.</summary>
        /// <remarks>
        /// Week or Month.
        /// This value is only valid when InstanceChargeType is PrePaid.
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

        /// <summary>Property vSwitchId: VSwitch id.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::GWS::Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-gws.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gws.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterId: Cluster id.</summary>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property imageId: Mirror id.</summary>
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ImageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.</summary>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.</summary>
            [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SystemDiskCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property systemDiskSize: System disk size.</summary>
            [JsiiProperty(name: "systemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SystemDiskSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workMode: Work mode: Desktop Application.</summary>
            [JsiiProperty(name: "workMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property allocatePublicAddress: Whether to allocate a public network address.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "allocatePublicAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllocatePublicAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property appList: App list.</summary>
            /// <remarks>
            /// This value is only valid when WorkMode is Application.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-gws.RosInstance.AppListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AppList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenew: Whether auto renew.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceChargeType: Instance charge type: PostPaid (default): Pay-As-You-Go PrePaid: Subscription.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetChargeType: Network charge type: PayByTraffic (default): Flow-per-use billing PayByBandwidth: fixed-bandwidth billing This value is only valid when AllocatePublicAddress is true.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetMaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps).</summary>
            /// <remarks>
            /// Value range: 1-200
            /// Default: 200
            /// This value is only valid when AllocatePublicAddress is true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetMaxBandwidthIn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).</summary>
            /// <remarks>
            /// Value range: 1-200
            /// Default: 200
            /// This value is only valid when AllocatePublicAddress is true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetMaxBandwidthOut
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: Instance name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: Period of subscription.</summary>
            /// <remarks>
            /// When PeriodUnit is Week, the value range is 1-4
            /// When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
            /// This value is only valid when InstanceChargeType is PrePaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodUnit: Unit of period.</summary>
            /// <remarks>
            /// Week or Month.
            /// This value is only valid when InstanceChargeType is PrePaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: VSwitch id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
