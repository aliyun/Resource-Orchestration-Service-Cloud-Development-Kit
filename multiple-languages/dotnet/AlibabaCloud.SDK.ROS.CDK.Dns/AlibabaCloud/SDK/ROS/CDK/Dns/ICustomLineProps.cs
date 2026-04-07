using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `CustomLine`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-customline
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICustomLineProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.CustomLineProps")]
    public interface ICustomLineProps
    {
        /// <summary>Property domainName: The domain name associated with the custom line.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <summary>Property ipSegment: The list of IP segments for the custom line.</summary>
        [JsiiProperty(name: "ipSegment", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosCustomLine.IpSegmentProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object IpSegment
        {
            get;
        }

        /// <summary>Property lineName: The name of the custom line.</summary>
        [JsiiProperty(name: "lineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LineName
        {
            get;
        }

        /// <summary>Properties for defining a `CustomLine`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-customline
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICustomLineProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.CustomLineProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.ICustomLineProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domainName: The domain name associated with the custom line.</summary>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ipSegment: The list of IP segments for the custom line.</summary>
            [JsiiProperty(name: "ipSegment", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosCustomLine.IpSegmentProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object IpSegment
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property lineName: The name of the custom line.</summary>
            [JsiiProperty(name: "lineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LineName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
