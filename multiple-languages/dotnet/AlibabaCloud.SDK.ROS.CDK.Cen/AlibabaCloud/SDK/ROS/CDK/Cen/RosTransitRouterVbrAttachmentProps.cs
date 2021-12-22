using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterVbrAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.RosTransitRouterVbrAttachmentProps")]
    public class RosTransitRouterVbrAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Cen.IRosTransitRouterVbrAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: vbrId: VbrId
        /// </remarks>
        [JsiiProperty(name: "vbrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object VbrId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPublishRouteEnabled: AutoPublishRouteEnabled
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoPublishRouteEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoPublishRouteEnabled
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenId: CenId
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? CenId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterAttachmentDescription: TransitRouterAttachmentDescription
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterAttachmentDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TransitRouterAttachmentDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterAttachmentName: TransitRouterAttachmentName
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterAttachmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TransitRouterAttachmentName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterId: TransitRouterId
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TransitRouterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vbrOwnerId: VbrOwnerId
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vbrOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? VbrOwnerId
        {
            get;
            set;
        }
    }
}
