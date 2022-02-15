using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterRouteTableAssociation`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.TransitRouterRouteTableAssociationProps")]
    public class TransitRouterRouteTableAssociationProps : AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterRouteTableAssociationProps
    {
        /// <summary>Property transitRouterAttachmentId: TransitRouterAttachmentId.</summary>
        [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TransitRouterAttachmentId
        {
            get;
            set;
        }

        /// <summary>Property transitRouterRouteTableId: TransitRouterRouteTableId.</summary>
        [JsiiProperty(name: "transitRouterRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TransitRouterRouteTableId
        {
            get;
            set;
        }
    }
}
