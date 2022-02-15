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
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object CenId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceId: The ID of the attached network (VPC or VBR).
        /// </remarks>
        [JsiiProperty(name: "childInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ChildInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
        /// </remarks>
        [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ChildInstanceRegionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceRouteTableId: The route table of the attached VBR or VPC.
        /// </remarks>
        [JsiiProperty(name: "childInstanceRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ChildInstanceRouteTableId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceType: The type of the network, value: VPC VBR
        /// </remarks>
        [JsiiProperty(name: "childInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ChildInstanceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationCidrBlock: The destination CIDR block of the route entry to publish.
        /// </remarks>
        [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DestinationCidrBlock
        {
            get;
            set;
        }
    }
}
