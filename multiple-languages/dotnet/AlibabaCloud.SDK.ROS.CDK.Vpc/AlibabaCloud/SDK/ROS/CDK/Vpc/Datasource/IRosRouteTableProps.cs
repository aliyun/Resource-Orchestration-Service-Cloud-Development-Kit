using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `RosRouteTable`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosRouteTableProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosRouteTableProps")]
    public interface IRosRouteTableProps
    {
        /// <remarks>
        /// <strong>Property</strong>: routeTableId: The ID of the routing table.
        /// </remarks>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouteTableId
        {
            get;
        }

        /// <summary>Properties for defining a `RosRouteTable`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosRouteTableProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosRouteTableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosRouteTableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: routeTableId: The ID of the routing table.
            /// </remarks>
            [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
