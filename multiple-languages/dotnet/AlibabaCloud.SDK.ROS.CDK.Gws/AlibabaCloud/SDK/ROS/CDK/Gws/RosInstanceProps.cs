using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gws
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::GWS::Instance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-gws.RosInstanceProps")]
    public class RosInstanceProps : AlibabaCloud.SDK.ROS.CDK.Gws.IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterId: Cluster id
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ClusterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: imageId: Mirror id
        /// </remarks>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ImageId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.
        /// </remarks>
        [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SystemDiskCategory
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskSize: System disk size
        /// </remarks>
        [JsiiProperty(name: "systemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SystemDiskSize
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: workMode: Work mode:
        /// Desktop
        /// Application
        /// </remarks>
        [JsiiProperty(name: "workMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object WorkMode
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: allocatePublicAddress: Whether to allocate a public network address
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "allocatePublicAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AllocatePublicAddress
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: appList: App list. This value is only valid when WorkMode is Application.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "appList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-gws.RosInstance.AppListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? AppList
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: Whether auto renew
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoRenew
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceChargeType: Instance charge type:
        /// PostPaid (default): Pay-As-You-Go
        /// PrePaid: Subscription
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InstanceChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetChargeType: Network charge type:
        /// PayByTraffic (default): Flow-per-use billing
        /// PayByBandwidth: fixed-bandwidth billing
        /// This value is only valid when AllocatePublicAddress is true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InternetChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
        /// Value range: 1-200
        /// Default: 200
        /// This value is only valid when AllocatePublicAddress is true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InternetMaxBandwidthOut
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Instance name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Period of subscription.
        /// When PeriodUnit is Week, the value range is 1-4
        /// When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
        /// This value is only valid when InstanceChargeType is PrePaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: periodUnit: Unit of period. Week or Month.
        /// This value is only valid when InstanceChargeType is PrePaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PeriodUnit
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: VSwitch id
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VSwitchId
        {
            get;
            set;
        }
    }
}
