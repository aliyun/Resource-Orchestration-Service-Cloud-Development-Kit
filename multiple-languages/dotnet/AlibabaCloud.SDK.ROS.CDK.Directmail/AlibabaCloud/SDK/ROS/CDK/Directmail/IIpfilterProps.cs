using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Directmail
{
    /// <summary>Properties for defining a `ALIYUN::DirectMail::Ipfilter`.</summary>
    [JsiiInterface(nativeType: typeof(IIpfilterProps), fullyQualifiedName: "@alicloud/ros-cdk-directmail.IpfilterProps")]
    public interface IIpfilterProps
    {
        /// <summary>Property ipAddress: The whitelist IP address.</summary>
        [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IpAddress
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::DirectMail::Ipfilter`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IIpfilterProps), fullyQualifiedName: "@alicloud/ros-cdk-directmail.IpfilterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Directmail.IIpfilterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ipAddress: The whitelist IP address.</summary>
            [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IpAddress
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
