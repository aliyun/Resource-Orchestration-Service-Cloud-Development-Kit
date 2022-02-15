using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterRouteTableAssociation`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.RosTransitRouterRouteTableAssociationProps")]
    public class RosTransitRouterRouteTableAssociationProps : AlibabaCloud.SDK.ROS.CDK.Cen.IRosTransitRouterRouteTableAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: transitRouterAttachmentId: TransitRouterAttachmentId
        /// </remarks>
        [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TransitRouterAttachmentId
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
    }
}
