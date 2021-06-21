using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterRouteEntry`.</summary>
    [JsiiInterface(nativeType: typeof(IRosTransitRouterRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterRouteEntryProps")]
    public interface IRosTransitRouterRouteEntryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
        /// </remarks>
        [JsiiProperty(name: "transitRouterRouteEntryDestinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterRouteEntryDestinationCidrBlock
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
        /// </remarks>
        [JsiiProperty(name: "transitRouterRouteEntryNextHopType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterRouteEntryNextHopType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteTableId: TransitRouterRouteTableId
        /// </remarks>
        [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterRouteTableId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
        /// </remarks>
        [JsiiProperty(name: "transitRouterRouteEntryDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterRouteEntryDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteEntryName: TransitRouterRouteEntryName
        /// </remarks>
        [JsiiProperty(name: "transitRouterRouteEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterRouteEntryName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosTransitRouterRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterRouteEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosTransitRouterRouteEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
            /// </remarks>
            [JsiiProperty(name: "transitRouterRouteEntryDestinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterRouteEntryDestinationCidrBlock
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
            /// </remarks>
            [JsiiProperty(name: "transitRouterRouteEntryNextHopType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterRouteEntryNextHopType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterRouteTableId: TransitRouterRouteTableId
            /// </remarks>
            [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterRouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterRouteEntryDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterRouteEntryDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterRouteEntryName: TransitRouterRouteEntryName
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterRouteEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterRouteEntryName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterRouteEntryNextHopId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterRouteEntryNextHopId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
