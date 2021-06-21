using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterRouteTable`.</summary>
    [JsiiInterface(nativeType: typeof(IRosTransitRouterRouteTableProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterRouteTableProps")]
    public interface IRosTransitRouterRouteTableProps
    {
        /// <remarks>
        /// <strong>Property</strong>: transitRouterId: TransitRouterId
        /// </remarks>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteTableDescription: TransitRouterRouteTableDescription
        /// </remarks>
        [JsiiProperty(name: "transitRouterRouteTableDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterRouteTableDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteTableName: TransitRouterRouteTableName
        /// </remarks>
        [JsiiProperty(name: "transitRouterRouteTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterRouteTableName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterRouteTable`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosTransitRouterRouteTableProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterRouteTableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosTransitRouterRouteTableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterId: TransitRouterId
            /// </remarks>
            [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterRouteTableDescription: TransitRouterRouteTableDescription
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterRouteTableDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterRouteTableDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterRouteTableName: TransitRouterRouteTableName
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterRouteTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterRouteTableName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
