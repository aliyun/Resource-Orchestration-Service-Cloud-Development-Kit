using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gws
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::GWS::Instance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-gws.InstanceProps")]
    public class InstanceProps : AlibabaCloud.SDK.ROS.CDK.Gws.IInstanceProps
    {
        /// <summary>Property clusterId: Cluster id.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ClusterId
        {
            get;
            set;
        }

        /// <summary>Property imageId: Mirror id.</summary>
        [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ImageId
        {
            get;
            set;
        }

        /// <summary>Property instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.</summary>
        [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceType
        {
            get;
            set;
        }

        /// <summary>Property systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.</summary>
        [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SystemDiskCategory
        {
            get;
            set;
        }

        /// <summary>Property systemDiskSize: System disk size.</summary>
        [JsiiProperty(name: "systemDiskSize", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double SystemDiskSize
        {
            get;
            set;
        }

        /// <summary>Property workMode: Work mode: Desktop Application.</summary>
        [JsiiProperty(name: "workMode", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string WorkMode
        {
            get;
            set;
        }

        /// <summary>Property allocatePublicAddress: Whether to allocate a public network address.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "allocatePublicAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AllocatePublicAddress
        {
            get;
            set;
        }

        /// <summary>Property appList: App list.</summary>
        /// <remarks>
        /// This value is only valid when WorkMode is Application.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "appList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-gws.RosInstance.AppListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? AppList
        {
            get;
            set;
        }

        /// <summary>Property autoRenew: Whether auto renew.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoRenew
        {
            get;
            set;
        }

        /// <summary>Property instanceChargeType: Instance charge type: PostPaid (default): Pay-As-You-Go PrePaid: Subscription.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceChargeType
        {
            get;
            set;
        }

        /// <summary>Property internetChargeType: Network charge type: PayByTraffic (default): Flow-per-use billing PayByBandwidth: fixed-bandwidth billing This value is only valid when AllocatePublicAddress is true.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InternetChargeType
        {
            get;
            set;
        }

        /// <summary>Property internetMaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps).</summary>
        /// <remarks>
        /// Value range: 1-200
        /// Default: 200
        /// This value is only valid when AllocatePublicAddress is true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? InternetMaxBandwidthIn
        {
            get;
            set;
        }

        /// <summary>Property internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).</summary>
        /// <remarks>
        /// Value range: 1-200
        /// Default: 200
        /// This value is only valid when AllocatePublicAddress is true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? InternetMaxBandwidthOut
        {
            get;
            set;
        }

        /// <summary>Property name: Instance name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }

        /// <summary>Property period: Period of subscription.</summary>
        /// <remarks>
        /// When PeriodUnit is Week, the value range is 1-4
        /// When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
        /// This value is only valid when InstanceChargeType is PrePaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Period
        {
            get;
            set;
        }

        /// <summary>Property periodUnit: Unit of period.</summary>
        /// <remarks>
        /// Week or Month.
        /// This value is only valid when InstanceChargeType is PrePaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "periodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PeriodUnit
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: VSwitch id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }
    }
}
