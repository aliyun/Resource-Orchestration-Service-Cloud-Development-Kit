using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `RosTransitRouterMulticastDomainAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutermulticastdomainassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTransitRouterMulticastDomainAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterMulticastDomainAssociationProps")]
    public interface IRosTransitRouterMulticastDomainAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: transitRouterAttachmentId: The ID of the VPC connection.
        /// </remarks>
        [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterAttachmentId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterMulticastDomainId: The ID of the multicast domain.
        /// </remarks>
        [JsiiProperty(name: "transitRouterMulticastDomainId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterMulticastDomainId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Properties for defining a `RosTransitRouterMulticastDomainAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutermulticastdomainassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTransitRouterMulticastDomainAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterMulticastDomainAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosTransitRouterMulticastDomainAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterAttachmentId: The ID of the VPC connection.
            /// </remarks>
            [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterAttachmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterMulticastDomainId: The ID of the multicast domain.
            /// </remarks>
            [JsiiProperty(name: "transitRouterMulticastDomainId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterMulticastDomainId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
