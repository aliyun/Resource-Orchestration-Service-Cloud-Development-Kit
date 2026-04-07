using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `RosCustomLine`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-customline
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCustomLineProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosCustomLineProps")]
    public interface IRosCustomLineProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domainName: The domain name associated with the custom line.
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipSegment: The list of IP segments for the custom line.
        /// </remarks>
        [JsiiProperty(name: "ipSegment", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosCustomLine.IpSegmentProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object IpSegment
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: lineName: The name of the custom line.
        /// </remarks>
        [JsiiProperty(name: "lineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LineName
        {
            get;
        }

        /// <summary>Properties for defining a `RosCustomLine`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-customline
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCustomLineProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosCustomLineProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IRosCustomLineProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: domainName: The domain name associated with the custom line.
            /// </remarks>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipSegment: The list of IP segments for the custom line.
            /// </remarks>
            [JsiiProperty(name: "ipSegment", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosCustomLine.IpSegmentProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object IpSegment
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: lineName: The name of the custom line.
            /// </remarks>
            [JsiiProperty(name: "lineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LineName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
