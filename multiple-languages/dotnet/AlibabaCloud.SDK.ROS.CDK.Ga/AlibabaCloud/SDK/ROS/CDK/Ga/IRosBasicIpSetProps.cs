using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `RosBasicIpSet`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicipset
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBasicIpSetProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosBasicIpSetProps")]
    public interface IRosBasicIpSetProps
    {
        /// <remarks>
        /// <strong>Property</strong>: acceleratorId: The ID of the basic GA instance.
        /// </remarks>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AcceleratorId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accelerateRegionId: The ID of the acceleration region.
        /// </remarks>
        [JsiiProperty(name: "accelerateRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccelerateRegionId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidth: The bandwidth that you want to allocate to the acceleration region. Unit: Mbit\/s.You must allocate at least 2 Mbit\/s of bandwidth to the acceleration region.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Bandwidth
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ispType: The line type of the elastic IP address (EIP) in the acceleration region. Valid values:
        /// BGP (default): BGP (Multi-ISP) lines.
        /// BGP_PRO: BGP (Multi-ISP) Pro lines.
        /// Valid values if you are allowed to use single-ISP bandwidth:
        /// ChinaTelecom
        /// ChinaUnicom
        /// ChinaMobile
        /// ChinaTelecom_L2
        /// ChinaUnicom_L2
        /// ChinaMobile_L2
        /// </remarks>
        [JsiiProperty(name: "ispType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IspType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosBasicIpSet`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicipset
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBasicIpSetProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosBasicIpSetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IRosBasicIpSetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: acceleratorId: The ID of the basic GA instance.
            /// </remarks>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accelerateRegionId: The ID of the acceleration region.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accelerateRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccelerateRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidth: The bandwidth that you want to allocate to the acceleration region. Unit: Mbit\/s.You must allocate at least 2 Mbit\/s of bandwidth to the acceleration region.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Bandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ispType: The line type of the elastic IP address (EIP) in the acceleration region. Valid values:
            /// BGP (default): BGP (Multi-ISP) lines.
            /// BGP_PRO: BGP (Multi-ISP) Pro lines.
            /// Valid values if you are allowed to use single-ISP bandwidth:
            /// ChinaTelecom
            /// ChinaUnicom
            /// ChinaMobile
            /// ChinaTelecom_L2
            /// ChinaUnicom_L2
            /// ChinaMobile_L2
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ispType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IspType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
