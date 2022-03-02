using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterRouteTable`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.TransitRouterRouteTableProps")]
    public class TransitRouterRouteTableProps : AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterRouteTableProps
    {
        /// <summary>Property transitRouterId: TransitRouterId.</summary>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TransitRouterId
        {
            get;
            set;
        }

        /// <summary>Property transitRouterRouteTableDescription: TransitRouterRouteTableDescription.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterRouteTableDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TransitRouterRouteTableDescription
        {
            get;
            set;
        }

        /// <summary>Property transitRouterRouteTableName: TransitRouterRouteTableName.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterRouteTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TransitRouterRouteTableName
        {
            get;
            set;
        }
    }
}
