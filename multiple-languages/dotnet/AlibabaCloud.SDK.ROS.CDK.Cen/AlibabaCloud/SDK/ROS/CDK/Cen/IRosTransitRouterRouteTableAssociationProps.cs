using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `RosTransitRouterRouteTableAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTransitRouterRouteTableAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterRouteTableAssociationProps")]
    public interface IRosTransitRouterRouteTableAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: transitRouterAttachmentId: TransitRouterAttachmentId
        /// </remarks>
        [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterAttachmentId
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

        /// <summary>Properties for defining a `RosTransitRouterRouteTableAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTransitRouterRouteTableAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterRouteTableAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosTransitRouterRouteTableAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterAttachmentId: TransitRouterAttachmentId
            /// </remarks>
            [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterAttachmentId
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
        }
    }
}
