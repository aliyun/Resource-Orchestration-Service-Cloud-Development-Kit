using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterRouteTable`.</summary>
    [JsiiInterface(nativeType: typeof(ITransitRouterRouteTableProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterRouteTableProps")]
    public interface ITransitRouterRouteTableProps
    {
        /// <summary>Property transitRouterId: TransitRouterId.</summary>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterId
        {
            get;
        }

        /// <summary>Property transitRouterRouteTableDescription: TransitRouterRouteTableDescription.</summary>
        [JsiiProperty(name: "transitRouterRouteTableDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterRouteTableDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterRouteTableName: TransitRouterRouteTableName.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterRouteTableProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterRouteTableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterRouteTableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property transitRouterId: TransitRouterId.</summary>
            [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property transitRouterRouteTableDescription: TransitRouterRouteTableDescription.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterRouteTableDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterRouteTableDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterRouteTableName: TransitRouterRouteTableName.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterRouteTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterRouteTableName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
