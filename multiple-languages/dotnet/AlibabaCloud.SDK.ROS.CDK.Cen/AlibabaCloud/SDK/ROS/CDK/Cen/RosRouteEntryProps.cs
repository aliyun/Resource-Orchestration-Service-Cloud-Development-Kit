using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::RouteEntry`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.RosRouteEntryProps")]
    public class RosRouteEntryProps : AlibabaCloud.SDK.ROS.CDK.Cen.IRosRouteEntryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the CEN instance where the route entry is published.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CenId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceId: The ID of the attached network (VPC or VBR).
        /// </remarks>
        [JsiiProperty(name: "childInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ChildInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
        /// </remarks>
        [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ChildInstanceRegionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceRouteTableId: The route table of the attached VBR or VPC.
        /// </remarks>
        [JsiiProperty(name: "childInstanceRouteTableId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ChildInstanceRouteTableId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceType: The type of the network, value: VPC VBR
        /// </remarks>
        [JsiiProperty(name: "childInstanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ChildInstanceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationCidrBlock: The destination CIDR block of the route entry to publish.
        /// </remarks>
        [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DestinationCidrBlock
        {
            get;
            set;
        }
    }
}
