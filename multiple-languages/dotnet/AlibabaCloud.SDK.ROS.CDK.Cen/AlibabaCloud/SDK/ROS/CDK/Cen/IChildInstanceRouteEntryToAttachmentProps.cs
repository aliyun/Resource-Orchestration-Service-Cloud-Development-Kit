using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ChildInstanceRouteEntryToAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-childinstancerouteentrytoattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IChildInstanceRouteEntryToAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.ChildInstanceRouteEntryToAttachmentProps")]
    public interface IChildInstanceRouteEntryToAttachmentProps
    {
        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <summary>Property destinationCidrBlock: The destination CIDR block of the route.</summary>
        [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationCidrBlock
        {
            get;
        }

        /// <summary>Property routeTableId: The ID of the route table configured on the network instance.</summary>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouteTableId
        {
            get;
        }

        /// <summary>Property transitRouterAttachmentId: The ID of the network instance connection.</summary>
        [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterAttachmentId
        {
            get;
        }

        /// <summary>Properties for defining a `ChildInstanceRouteEntryToAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-childinstancerouteentrytoattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IChildInstanceRouteEntryToAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.ChildInstanceRouteEntryToAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IChildInstanceRouteEntryToAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cenId: The ID of the CEN instance.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property destinationCidrBlock: The destination CIDR block of the route.</summary>
            [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationCidrBlock
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property routeTableId: The ID of the route table configured on the network instance.</summary>
            [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property transitRouterAttachmentId: The ID of the network instance connection.</summary>
            [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterAttachmentId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
