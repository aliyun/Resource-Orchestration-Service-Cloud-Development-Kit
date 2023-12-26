using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosCommonBandwidthPackageIp`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackageip
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCommonBandwidthPackageIpProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIpProps")]
    public interface IRosCommonBandwidthPackageIpProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
        /// </remarks>
        [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BandwidthPackageId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: eips: List of eip associated with the Internet Shared Bandwidth instance.
        /// </remarks>
        [JsiiProperty(name: "eips", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIp.EipsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Eips
        {
            get;
        }

        /// <summary>Properties for defining a `RosCommonBandwidthPackageIp`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackageip
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCommonBandwidthPackageIpProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIpProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosCommonBandwidthPackageIpProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
            /// </remarks>
            [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BandwidthPackageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: eips: List of eip associated with the Internet Shared Bandwidth instance.
            /// </remarks>
            [JsiiProperty(name: "eips", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIp.EipsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Eips
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
