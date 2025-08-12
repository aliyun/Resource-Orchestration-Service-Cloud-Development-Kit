using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `VcoRouteEntry`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vcorouteentry
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVcoRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VcoRouteEntryProps")]
    public interface IVcoRouteEntryProps
    {
        /// <summary>Property nextHop: The next hop of the destination routing entry.</summary>
        [JsiiProperty(name: "nextHop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NextHop
        {
            get;
        }

        /// <summary>Property routeDest: The target segment of the destination routing entry.</summary>
        [JsiiProperty(name: "routeDest", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouteDest
        {
            get;
        }

        /// <summary>Property vpnConnectionId: IPsec Connection ID.</summary>
        [JsiiProperty(name: "vpnConnectionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpnConnectionId
        {
            get;
        }

        /// <summary>Property weight: The weight value of the destination routing entry.Value: 0: Indicates low priority. 100: Indicates high priority.</summary>
        [JsiiProperty(name: "weight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Weight
        {
            get;
        }

        /// <summary>Property description: Descriptive information for the destination routing entry.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `VcoRouteEntry`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vcorouteentry
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVcoRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VcoRouteEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IVcoRouteEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property nextHop: The next hop of the destination routing entry.</summary>
            [JsiiProperty(name: "nextHop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NextHop
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property routeDest: The target segment of the destination routing entry.</summary>
            [JsiiProperty(name: "routeDest", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouteDest
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpnConnectionId: IPsec Connection ID.</summary>
            [JsiiProperty(name: "vpnConnectionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpnConnectionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property weight: The weight value of the destination routing entry.Value: 0: Indicates low priority. 100: Indicates high priority.</summary>
            [JsiiProperty(name: "weight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Weight
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: Descriptive information for the destination routing entry.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
