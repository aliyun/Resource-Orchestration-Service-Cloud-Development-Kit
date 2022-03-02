using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterRouteEntry`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.RosTransitRouterRouteEntryProps")]
    public class RosTransitRouterRouteEntryProps : AlibabaCloud.SDK.ROS.CDK.Cen.IRosTransitRouterRouteEntryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
        /// </remarks>
        [JsiiProperty(name: "transitRouterRouteEntryDestinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TransitRouterRouteEntryDestinationCidrBlock
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
        /// </remarks>
        [JsiiProperty(name: "transitRouterRouteEntryNextHopType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TransitRouterRouteEntryNextHopType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteTableId: TransitRouterRouteTableId
        /// </remarks>
        [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TransitRouterRouteTableId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterRouteEntryDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TransitRouterRouteEntryDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteEntryName: TransitRouterRouteEntryName
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterRouteEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TransitRouterRouteEntryName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterRouteEntryNextHopId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TransitRouterRouteEntryNextHopId
        {
            get;
            set;
        }
    }
}
