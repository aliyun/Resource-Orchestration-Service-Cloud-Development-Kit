using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::RouteEntry`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.RouteEntryProps")]
    public class RouteEntryProps : AlibabaCloud.SDK.ROS.CDK.Cen.IRouteEntryProps
    {
        /// <summary>Property cenId: The ID of the CEN instance where the route entry is published.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CenId
        {
            get;
            set;
        }

        /// <summary>Property childInstanceId: The ID of the attached network (VPC or VBR).</summary>
        [JsiiProperty(name: "childInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ChildInstanceId
        {
            get;
            set;
        }

        /// <summary>Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.</summary>
        [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ChildInstanceRegionId
        {
            get;
            set;
        }

        /// <summary>Property childInstanceRouteTableId: The route table of the attached VBR or VPC.</summary>
        [JsiiProperty(name: "childInstanceRouteTableId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ChildInstanceRouteTableId
        {
            get;
            set;
        }

        /// <summary>Property childInstanceType: The type of the network, value: VPC VBR.</summary>
        [JsiiProperty(name: "childInstanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ChildInstanceType
        {
            get;
            set;
        }

        /// <summary>Property destinationCidrBlock: The destination CIDR block of the route entry to publish.</summary>
        [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DestinationCidrBlock
        {
            get;
            set;
        }
    }
}
