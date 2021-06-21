using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterRouteEntry`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.TransitRouterRouteEntryProps")]
    public class TransitRouterRouteEntryProps : AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterRouteEntryProps
    {
        /// <summary>Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.</summary>
        [JsiiProperty(name: "transitRouterRouteEntryDestinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object TransitRouterRouteEntryDestinationCidrBlock
        {
            get;
            set;
        }

        /// <summary>Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.</summary>
        [JsiiProperty(name: "transitRouterRouteEntryNextHopType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object TransitRouterRouteEntryNextHopType
        {
            get;
            set;
        }

        /// <summary>Property transitRouterRouteTableId: TransitRouterRouteTableId.</summary>
        [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object TransitRouterRouteTableId
        {
            get;
            set;
        }

        /// <summary>Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterRouteEntryDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TransitRouterRouteEntryDescription
        {
            get;
            set;
        }

        /// <summary>Property transitRouterRouteEntryName: TransitRouterRouteEntryName.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterRouteEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TransitRouterRouteEntryName
        {
            get;
            set;
        }

        /// <summary>Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterRouteEntryNextHopId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TransitRouterRouteEntryNextHopId
        {
            get;
            set;
        }
    }
}
