using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CEN::TransitRouterRouteTables`.</summary>
    [JsiiInterface(nativeType: typeof(ITransitRouterRouteTablesProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.TransitRouterRouteTablesProps")]
    public interface ITransitRouterRouteTablesProps
    {
        /// <summary>Property transitRouterId: The ID of the Enterprise Edition transit router.</summary>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterId
        {
            get;
        }

        /// <summary>Property transitRouterRouteTableIds: The ID of the route table.</summary>
        /// <remarks>
        /// You can query multiple route tables in each call. Maximum value of N: 20.
        /// </remarks>
        [JsiiProperty(name: "transitRouterRouteTableIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterRouteTableIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterRouteTableNames: The name of the route table.</summary>
        /// <remarks>
        /// You can query multiple route tables in each call. Maximum value of N: 20.
        /// Note If you specify both TransitRouterRouteTableNames.N and TransitRouterRouteTableIds.N, make sure that the specified name and ID belong to the same route table.
        /// </remarks>
        [JsiiProperty(name: "transitRouterRouteTableNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterRouteTableNames
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterRouteTableStatus: The state of the route table.</summary>
        /// <remarks>
        /// Valid values:
        /// Creating: The route table is being created.
        /// Deleting: The route table is being deleted.
        /// Active: The route table is available for use.
        /// </remarks>
        [JsiiProperty(name: "transitRouterRouteTableStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterRouteTableStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterRouteTableType: The type of route table.</summary>
        /// <remarks>
        /// Valid values:
        /// Custom: a custom route table
        /// System: the default route table
        /// </remarks>
        [JsiiProperty(name: "transitRouterRouteTableType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterRouteTableType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::CEN::TransitRouterRouteTables`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterRouteTablesProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.TransitRouterRouteTablesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ITransitRouterRouteTablesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property transitRouterId: The ID of the Enterprise Edition transit router.</summary>
            [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property transitRouterRouteTableIds: The ID of the route table.</summary>
            /// <remarks>
            /// You can query multiple route tables in each call. Maximum value of N: 20.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterRouteTableIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TransitRouterRouteTableIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterRouteTableNames: The name of the route table.</summary>
            /// <remarks>
            /// You can query multiple route tables in each call. Maximum value of N: 20.
            /// Note If you specify both TransitRouterRouteTableNames.N and TransitRouterRouteTableIds.N, make sure that the specified name and ID belong to the same route table.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterRouteTableNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TransitRouterRouteTableNames
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterRouteTableStatus: The state of the route table.</summary>
            /// <remarks>
            /// Valid values:
            /// Creating: The route table is being created.
            /// Deleting: The route table is being deleted.
            /// Active: The route table is available for use.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterRouteTableStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterRouteTableStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterRouteTableType: The type of route table.</summary>
            /// <remarks>
            /// Valid values:
            /// Custom: a custom route table
            /// System: the default route table
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterRouteTableType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterRouteTableType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
