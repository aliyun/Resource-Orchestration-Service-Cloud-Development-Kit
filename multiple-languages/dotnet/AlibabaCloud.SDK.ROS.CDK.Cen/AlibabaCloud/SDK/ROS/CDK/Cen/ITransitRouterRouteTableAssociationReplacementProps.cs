using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `TransitRouterRouteTableAssociationReplacement`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociationreplacement
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITransitRouterRouteTableAssociationReplacementProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterRouteTableAssociationReplacementProps")]
    public interface ITransitRouterRouteTableAssociationReplacementProps
    {
        /// <summary>Property transitRouterAttachmentId: The ID of the network instance connection.</summary>
        [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterAttachmentId
        {
            get;
        }

        /// <summary>Property transitRouterRouteTableId: The ID of the transit router route table to be associated.</summary>
        [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterRouteTableId
        {
            get;
        }

        /// <summary>Properties for defining a `TransitRouterRouteTableAssociationReplacement`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociationreplacement
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterRouteTableAssociationReplacementProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterRouteTableAssociationReplacementProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterRouteTableAssociationReplacementProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property transitRouterAttachmentId: The ID of the network instance connection.</summary>
            [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterAttachmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property transitRouterRouteTableId: The ID of the transit router route table to be associated.</summary>
            [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterRouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
