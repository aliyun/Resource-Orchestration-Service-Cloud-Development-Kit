using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterRouteEntry`.</summary>
    [JsiiInterface(nativeType: typeof(ITransitRouterRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterRouteEntryProps")]
    public interface ITransitRouterRouteEntryProps
    {
        /// <summary>Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.</summary>
        [JsiiProperty(name: "transitRouterRouteEntryDestinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterRouteEntryDestinationCidrBlock
        {
            get;
        }

        /// <summary>Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.</summary>
        [JsiiProperty(name: "transitRouterRouteEntryNextHopType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterRouteEntryNextHopType
        {
            get;
        }

        /// <summary>Property transitRouterRouteTableId: TransitRouterRouteTableId.</summary>
        [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterRouteTableId
        {
            get;
        }

        /// <summary>Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.</summary>
        [JsiiProperty(name: "transitRouterRouteEntryDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterRouteEntryDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterRouteEntryName: TransitRouterRouteEntryName.</summary>
        [JsiiProperty(name: "transitRouterRouteEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterRouteEntryName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.</summary>
        [JsiiProperty(name: "transitRouterRouteEntryNextHopId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterRouteEntryNextHopId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterRouteEntry`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterRouteEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterRouteEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.</summary>
            [JsiiProperty(name: "transitRouterRouteEntryDestinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterRouteEntryDestinationCidrBlock
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.</summary>
            [JsiiProperty(name: "transitRouterRouteEntryNextHopType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterRouteEntryNextHopType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property transitRouterRouteTableId: TransitRouterRouteTableId.</summary>
            [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterRouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterRouteEntryDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterRouteEntryDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterRouteEntryName: TransitRouterRouteEntryName.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterRouteEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterRouteEntryName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterRouteEntryNextHopId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterRouteEntryNextHopId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
