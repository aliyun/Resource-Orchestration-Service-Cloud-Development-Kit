using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Privatelink
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::PrivateLink::VpcEndpointServiceAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-privatelink.VpcEndpointServiceAttachmentProps")]
    public class VpcEndpointServiceAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Privatelink.IVpcEndpointServiceAttachmentProps
    {
        /// <summary>Property resourceId: The resource id.</summary>
        [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ResourceId
        {
            get;
            set;
        }

        /// <summary>Property resourceType: The resource type.</summary>
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ResourceType
        {
            get;
            set;
        }

        /// <summary>Property serviceId: The endpoint service that is associated with the endpoint.</summary>
        [JsiiProperty(name: "serviceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ServiceId
        {
            get;
            set;
        }
    }
}
