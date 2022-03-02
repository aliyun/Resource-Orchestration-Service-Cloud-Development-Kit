using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterRouteTable`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.RosTransitRouterRouteTableProps")]
    public class RosTransitRouterRouteTableProps : AlibabaCloud.SDK.ROS.CDK.Cen.IRosTransitRouterRouteTableProps
    {
        /// <remarks>
        /// <strong>Property</strong>: transitRouterId: TransitRouterId
        /// </remarks>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TransitRouterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteTableDescription: TransitRouterRouteTableDescription
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterRouteTableDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TransitRouterRouteTableDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteTableName: TransitRouterRouteTableName
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterRouteTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TransitRouterRouteTableName
        {
            get;
            set;
        }
    }
}
