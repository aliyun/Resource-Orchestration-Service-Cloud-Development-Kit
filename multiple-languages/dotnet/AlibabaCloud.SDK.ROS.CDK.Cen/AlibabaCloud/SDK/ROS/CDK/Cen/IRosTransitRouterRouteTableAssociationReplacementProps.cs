using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `RosTransitRouterRouteTableAssociationReplacement`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociationreplacement
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTransitRouterRouteTableAssociationReplacementProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterRouteTableAssociationReplacementProps")]
    public interface IRosTransitRouterRouteTableAssociationReplacementProps
    {
        /// <remarks>
        /// <strong>Property</strong>: transitRouterAttachmentId: The ID of the network instance connection.
        /// </remarks>
        [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterAttachmentId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteTableId: The ID of the transit router route table to be associated.
        /// </remarks>
        [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterRouteTableId
        {
            get;
        }

        /// <summary>Properties for defining a `RosTransitRouterRouteTableAssociationReplacement`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociationreplacement
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTransitRouterRouteTableAssociationReplacementProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterRouteTableAssociationReplacementProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosTransitRouterRouteTableAssociationReplacementProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterAttachmentId: The ID of the network instance connection.
            /// </remarks>
            [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterAttachmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterRouteTableId: The ID of the transit router route table to be associated.
            /// </remarks>
            [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterRouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
