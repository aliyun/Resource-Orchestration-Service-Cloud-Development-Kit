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
        }
    }
}
