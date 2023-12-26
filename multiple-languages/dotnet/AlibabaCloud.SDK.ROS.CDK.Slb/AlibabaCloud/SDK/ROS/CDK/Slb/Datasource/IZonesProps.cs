using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb.Datasource
{
    /// <summary>Properties for defining a `Zones`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-zones
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IZonesProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.ZonesProps")]
    public interface IZonesProps
    {
        /// <summary>Property addressIpVersion: The type of IP address.</summary>
        /// <remarks>
        /// Valid values: ipv4 and ipv6.
        /// </remarks>
        [JsiiProperty(name: "addressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AddressIpVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property addressType: The type of network.Valid values: vpc, classic_internet, and classic_intranet.. vpc: an internal SLB instance that is deployed in a virtual private cloud (VPC). classic_internet: a public-facing SLB instance. classic_intranet: an internal SLB instance that is deployed in a classic network.</summary>
        [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AddressType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Zones`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-zones
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IZonesProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.ZonesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IZonesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property addressIpVersion: The type of IP address.</summary>
            /// <remarks>
            /// Valid values: ipv4 and ipv6.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressIpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property addressType: The type of network.Valid values: vpc, classic_internet, and classic_intranet.. vpc: an internal SLB instance that is deployed in a virtual private cloud (VPC). classic_internet: a public-facing SLB instance. classic_intranet: an internal SLB instance that is deployed in a classic network.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
