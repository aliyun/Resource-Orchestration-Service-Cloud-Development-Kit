using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::CommonBandwidthPackageIp`.</summary>
    [JsiiInterface(nativeType: typeof(ICommonBandwidthPackageIpProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.CommonBandwidthPackageIpProps")]
    public interface ICommonBandwidthPackageIpProps
    {
        /// <summary>Property bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.</summary>
        [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BandwidthPackageId
        {
            get;
        }

        /// <summary>Property eips: List of eip associated with the Internet Shared Bandwidth instance.</summary>
        [JsiiProperty(name: "eips", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIp.EipsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Eips
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::CommonBandwidthPackageIp`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICommonBandwidthPackageIpProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.CommonBandwidthPackageIpProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ICommonBandwidthPackageIpProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.</summary>
            [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BandwidthPackageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property eips: List of eip associated with the Internet Shared Bandwidth instance.</summary>
            [JsiiProperty(name: "eips", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIp.EipsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Eips
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
