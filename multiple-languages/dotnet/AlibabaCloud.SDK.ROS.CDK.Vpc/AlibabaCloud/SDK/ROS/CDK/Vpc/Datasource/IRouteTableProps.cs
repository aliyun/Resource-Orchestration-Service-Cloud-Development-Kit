using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `RouteTable`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRouteTableProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RouteTableProps")]
    public interface IRouteTableProps
    {
        /// <summary>Property routeTableId: The ID of the routing table.</summary>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouteTableId
        {
            get;
        }

        /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
        /// <description>Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RouteTable`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRouteTableProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RouteTableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRouteTableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property routeTableId: The ID of the routing table.</summary>
            [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
            /// <description>Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
