using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `TransitRouterMulticastDomainAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutermulticastdomainassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITransitRouterMulticastDomainAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterMulticastDomainAssociationProps")]
    public interface ITransitRouterMulticastDomainAssociationProps
    {
        /// <summary>Property transitRouterAttachmentId: The ID of the VPC connection.</summary>
        [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterAttachmentId
        {
            get;
        }

        /// <summary>Property transitRouterMulticastDomainId: The ID of the multicast domain.</summary>
        [JsiiProperty(name: "transitRouterMulticastDomainId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterMulticastDomainId
        {
            get;
        }

        /// <summary>Property vSwitchId: The ID of the VSwitch.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Properties for defining a `TransitRouterMulticastDomainAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutermulticastdomainassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterMulticastDomainAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterMulticastDomainAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterMulticastDomainAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property transitRouterAttachmentId: The ID of the VPC connection.</summary>
            [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterAttachmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property transitRouterMulticastDomainId: The ID of the multicast domain.</summary>
            [JsiiProperty(name: "transitRouterMulticastDomainId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterMulticastDomainId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: The ID of the VSwitch.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
