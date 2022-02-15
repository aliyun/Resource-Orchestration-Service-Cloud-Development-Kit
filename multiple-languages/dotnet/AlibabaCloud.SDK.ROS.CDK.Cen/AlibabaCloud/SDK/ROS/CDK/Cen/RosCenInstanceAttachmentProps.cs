using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::CenInstanceAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.RosCenInstanceAttachmentProps")]
    public class RosCenInstanceAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Cen.IRosCenInstanceAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the CEN instance.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object CenId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceId: The ID of the network to attach.
        /// </remarks>
        [JsiiProperty(name: "childInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ChildInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
        /// </remarks>
        [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ChildInstanceRegionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
        /// </remarks>
        [JsiiProperty(name: "childInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ChildInstanceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceOwnerId: The account ID to which the network belongs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "childInstanceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ChildInstanceOwnerId
        {
            get;
            set;
        }
    }
}
