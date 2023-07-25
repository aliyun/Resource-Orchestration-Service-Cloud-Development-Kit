using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::VPC::RouteTables`.</summary>
    [JsiiInterface(nativeType: typeof(IRouteTablesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RouteTablesProps")]
    public interface IRouteTablesProps
    {
        /// <summary>Property resourceGroupId: The ID of the resource group to which the route table belongs.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routerId: The ID of the VRouter to which the route table belongs.</summary>
        [JsiiProperty(name: "routerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routerType: The type of the VRouter to which the route table belongs.</summary>
        /// <remarks>
        /// Valid values:
        /// VRouter (default): VRouter.
        /// VBR: Virtual Border Router (VBR).
        /// </remarks>
        [JsiiProperty(name: "routerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouterType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeTableId: The ID of the route table.</summary>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteTableId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeTableName: The name of the route table.</summary>
        [JsiiProperty(name: "routeTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteTableName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The ID of the VRouter to which the route table belongs.</summary>
        /// <remarks>
        /// The value of the RouterType parameter is set to VRouter automatically when this parameter is specified.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::VPC::RouteTables`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRouteTablesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RouteTablesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRouteTablesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the route table belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routerId: The ID of the VRouter to which the route table belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "routerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routerType: The type of the VRouter to which the route table belongs.</summary>
            /// <remarks>
            /// Valid values:
            /// VRouter (default): VRouter.
            /// VBR: Virtual Border Router (VBR).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouterType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeTableId: The ID of the route table.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteTableId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeTableName: The name of the route table.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "routeTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteTableName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The ID of the VRouter to which the route table belongs.</summary>
            /// <remarks>
            /// The value of the RouterType parameter is set to VRouter automatically when this parameter is specified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
