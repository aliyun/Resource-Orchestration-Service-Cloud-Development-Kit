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
        [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CenId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceId: The ID of the network to attach.
        /// </remarks>
        [JsiiProperty(name: "childInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ChildInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
        /// </remarks>
        [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ChildInstanceRegionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
        /// </remarks>
        [JsiiProperty(name: "childInstanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ChildInstanceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceOwnerId: The account ID to which the network belongs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "childInstanceOwnerId", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? ChildInstanceOwnerId
        {
            get;
            set;
        }
    }
}
