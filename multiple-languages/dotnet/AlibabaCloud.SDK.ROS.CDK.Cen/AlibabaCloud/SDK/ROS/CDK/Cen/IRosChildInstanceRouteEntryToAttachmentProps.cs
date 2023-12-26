using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `RosChildInstanceRouteEntryToAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-childinstancerouteentrytoattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosChildInstanceRouteEntryToAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosChildInstanceRouteEntryToAttachmentProps")]
    public interface IRosChildInstanceRouteEntryToAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the CEN instance.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationCidrBlock: The destination CIDR block of the route.
        /// </remarks>
        [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationCidrBlock
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: routeTableId: The ID of the route table configured on the network instance.
        /// </remarks>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouteTableId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterAttachmentId: The ID of the network instance connection.
        /// </remarks>
        [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterAttachmentId
        {
            get;
        }

        /// <summary>Properties for defining a `RosChildInstanceRouteEntryToAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-childinstancerouteentrytoattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosChildInstanceRouteEntryToAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosChildInstanceRouteEntryToAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosChildInstanceRouteEntryToAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cenId: The ID of the CEN instance.
            /// </remarks>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationCidrBlock: The destination CIDR block of the route.
            /// </remarks>
            [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationCidrBlock
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: routeTableId: The ID of the route table configured on the network instance.
            /// </remarks>
            [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterAttachmentId: The ID of the network instance connection.
            /// </remarks>
            [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterAttachmentId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
