using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterRouteTablePropagation`.</summary>
    [JsiiInterface(nativeType: typeof(IRosTransitRouterRouteTablePropagationProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterRouteTablePropagationProps")]
    public interface IRosTransitRouterRouteTablePropagationProps
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

        /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterRouteTablePropagation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosTransitRouterRouteTablePropagationProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterRouteTablePropagationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosTransitRouterRouteTablePropagationProps
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
