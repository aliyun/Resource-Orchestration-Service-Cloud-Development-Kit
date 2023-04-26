using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Directmail
{
    /// <summary>Properties for defining a `ALIYUN::DirectMail::Ipfilter`.</summary>
    [JsiiInterface(nativeType: typeof(IRosIpfilterProps), fullyQualifiedName: "@alicloud/ros-cdk-directmail.RosIpfilterProps")]
    public interface IRosIpfilterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ipAddress: The whitelist IP address.
        /// </remarks>
        [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IpAddress
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::DirectMail::Ipfilter`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosIpfilterProps), fullyQualifiedName: "@alicloud/ros-cdk-directmail.RosIpfilterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Directmail.IRosIpfilterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: ipAddress: The whitelist IP address.
            /// </remarks>
            [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IpAddress
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
