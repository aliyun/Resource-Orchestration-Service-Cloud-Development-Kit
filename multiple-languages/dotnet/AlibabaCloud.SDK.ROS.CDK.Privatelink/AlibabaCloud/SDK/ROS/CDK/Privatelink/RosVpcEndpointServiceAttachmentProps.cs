using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Privatelink
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::PrivateLink::VpcEndpointServiceAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-privatelink.RosVpcEndpointServiceAttachmentProps")]
    public class RosVpcEndpointServiceAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Privatelink.IRosVpcEndpointServiceAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: resourceId: The resource id.
        /// </remarks>
        [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ResourceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceType: The resource type.
        /// </remarks>
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ResourceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceId: The endpoint service that is associated with the endpoint.
        /// </remarks>
        [JsiiProperty(name: "serviceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ServiceId
        {
            get;
            set;
        }
    }
}
