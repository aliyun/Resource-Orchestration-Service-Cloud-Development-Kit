using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gws
{
    /// <summary>Properties for defining a `ALIYUN::GWS::Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-gws.RosInstanceProps")]
    public interface IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterId: Cluster id
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}")]
        string ClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: imageId: Mirror id
        /// </remarks>
        [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}")]
        string ImageId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.
        /// </remarks>
        [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"primitive\":\"string\"}")]
        string SystemDiskCategory
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskSize: System disk size
        /// </remarks>
        [JsiiProperty(name: "systemDiskSize", typeJson: "{\"primitive\":\"number\"}")]
        double SystemDiskSize
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: workMode: Work mode:
        /// Desktop
        /// Application
        /// </remarks>
        [JsiiProperty(name: "workMode", typeJson: "{\"primitive\":\"string\"}")]
        string WorkMode
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: allocatePublicAddress: Whether to allocate a public network address
        /// </remarks>
        [JsiiProperty(name: "allocatePublicAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllocatePublicAddress
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: appList: App list. This value is only valid when WorkMode is Application.
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

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: Whether auto renew
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
        /// <strong>Property</strong>: instanceChargeType: Instance charge type:
        /// PostPaid (default): Pay-As-You-Go
        /// PrePaid: Subscription
        /// </remarks>
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InstanceChargeType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: internetChargeType: Network charge type:
        /// PayByTraffic (default): Flow-per-use billing
        /// PayByBandwidth: fixed-bandwidth billing
        /// This value is only valid when AllocatePublicAddress is true.
        /// </remarks>
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InternetChargeType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: internetMaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps).
        /// Value range: 1-200
        /// Default: 200
        /// This value is only valid when AllocatePublicAddress is true.
        /// </remarks>
        [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? InternetMaxBandwidthIn
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
        /// Value range: 1-200
        /// Default: 200
        /// This value is only valid when AllocatePublicAddress is true.
        /// </remarks>
        [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? InternetMaxBandwidthOut
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Instance name
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Name
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Period of subscription.
        /// When PeriodUnit is Week, the value range is 1-4
        /// When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
        /// This value is only valid when InstanceChargeType is PrePaid.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Period
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: periodUnit: Unit of period. Week or Month.
        /// This value is only valid when InstanceChargeType is PrePaid.
        /// </remarks>
        [JsiiProperty(name: "periodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PeriodUnit
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: VSwitch id
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

        /// <summary>Properties for defining a `ALIYUN::GWS::Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-gws.RosInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gws.IRosInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterId: Cluster id
            /// </remarks>
            [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}")]
            public string ClusterId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: imageId: Mirror id
            /// </remarks>
            [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}")]
            public string ImageId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.
            /// </remarks>
            [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"primitive\":\"string\"}")]
            public string SystemDiskCategory
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskSize: System disk size
            /// </remarks>
            [JsiiProperty(name: "systemDiskSize", typeJson: "{\"primitive\":\"number\"}")]
            public double SystemDiskSize
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: workMode: Work mode:
            /// Desktop
            /// Application
            /// </remarks>
            [JsiiProperty(name: "workMode", typeJson: "{\"primitive\":\"string\"}")]
            public string WorkMode
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: allocatePublicAddress: Whether to allocate a public network address
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allocatePublicAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllocatePublicAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: appList: App list. This value is only valid when WorkMode is Application.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-gws.RosInstance.AppListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AppList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRenew: Whether auto renew
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceChargeType: Instance charge type:
            /// PostPaid (default): Pay-As-You-Go
            /// PrePaid: Subscription
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InstanceChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: internetChargeType: Network charge type:
            /// PayByTraffic (default): Flow-per-use billing
            /// PayByBandwidth: fixed-bandwidth billing
            /// This value is only valid when AllocatePublicAddress is true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InternetChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: internetMaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps).
            /// Value range: 1-200
            /// Default: 200
            /// This value is only valid when AllocatePublicAddress is true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? InternetMaxBandwidthIn
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
            /// Value range: 1-200
            /// Default: 200
            /// This value is only valid when AllocatePublicAddress is true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? InternetMaxBandwidthOut
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: Instance name
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: Period of subscription.
            /// When PeriodUnit is Week, the value range is 1-4
            /// When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
            /// This value is only valid when InstanceChargeType is PrePaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Period
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: periodUnit: Unit of period. Week or Month.
            /// This value is only valid when InstanceChargeType is PrePaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PeriodUnit
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: VSwitch id
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
