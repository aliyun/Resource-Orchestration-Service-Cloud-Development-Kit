using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterRouteTablePropagation`.</summary>
    [JsiiInterface(nativeType: typeof(ITransitRouterRouteTablePropagationProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterRouteTablePropagationProps")]
    public interface ITransitRouterRouteTablePropagationProps
    {
        /// <summary>Property transitRouterAttachmentId: TransitRouterAttachmentId.</summary>
        [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterAttachmentId
        {
            get;
        }

        /// <summary>Property transitRouterRouteTableId: TransitRouterRouteTableId.</summary>
        [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterRouteTableId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterRouteTablePropagation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterRouteTablePropagationProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterRouteTablePropagationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterRouteTablePropagationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property transitRouterAttachmentId: TransitRouterAttachmentId.</summary>
            [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterAttachmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property transitRouterRouteTableId: TransitRouterRouteTableId.</summary>
            [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterRouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
