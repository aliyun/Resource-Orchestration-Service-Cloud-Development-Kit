using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterVbrAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.TransitRouterVbrAttachmentProps")]
    public class TransitRouterVbrAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterVbrAttachmentProps
    {
        /// <summary>Property vbrId: VbrId.</summary>
        [JsiiProperty(name: "vbrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VbrId
        {
            get;
            set;
        }

        /// <summary>Property autoPublishRouteEnabled: AutoPublishRouteEnabled.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoPublishRouteEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoPublishRouteEnabled
        {
            get;
            set;
        }

        /// <summary>Property cenId: CenId.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CenId
        {
            get;
            set;
        }

        /// <summary>Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterAttachmentDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TransitRouterAttachmentDescription
        {
            get;
            set;
        }

        /// <summary>Property transitRouterAttachmentName: TransitRouterAttachmentName.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterAttachmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TransitRouterAttachmentName
        {
            get;
            set;
        }

        /// <summary>Property transitRouterId: TransitRouterId.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TransitRouterId
        {
            get;
            set;
        }

        /// <summary>Property vbrOwnerId: VbrOwnerId.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vbrOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VbrOwnerId
        {
            get;
            set;
        }
    }
}
