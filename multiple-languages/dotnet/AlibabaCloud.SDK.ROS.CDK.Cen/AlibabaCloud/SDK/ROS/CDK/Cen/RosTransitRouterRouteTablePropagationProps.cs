using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterRouteTablePropagation`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.RosTransitRouterRouteTablePropagationProps")]
    public class RosTransitRouterRouteTablePropagationProps : AlibabaCloud.SDK.ROS.CDK.Cen.IRosTransitRouterRouteTablePropagationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: transitRouterAttachmentId: TransitRouterAttachmentId
        /// </remarks>
        [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object TransitRouterAttachmentId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterRouteTableId: TransitRouterRouteTableId
        /// </remarks>
        [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object TransitRouterRouteTableId
        {
            get;
            set;
        }
    }
}
