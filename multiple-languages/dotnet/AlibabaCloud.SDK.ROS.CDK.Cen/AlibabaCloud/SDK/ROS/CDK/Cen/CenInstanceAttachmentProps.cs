using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::CenInstanceAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.CenInstanceAttachmentProps")]
    public class CenInstanceAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Cen.ICenInstanceAttachmentProps
    {
        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CenId
        {
            get;
            set;
        }

        /// <summary>Property childInstanceId: The ID of the network to attach.</summary>
        [JsiiProperty(name: "childInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ChildInstanceId
        {
            get;
            set;
        }

        /// <summary>Property childInstanceRegionId: The ID of the region where the network is located.</summary>
        /// <remarks>
        /// The ID of the region where the network is located.
        /// </remarks>
        [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ChildInstanceRegionId
        {
            get;
            set;
        }

        /// <summary>Property childInstanceType: The type of the network to attach.</summary>
        /// <remarks>
        /// Support VPC, VBR or CCN.
        /// </remarks>
        [JsiiProperty(name: "childInstanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ChildInstanceType
        {
            get;
            set;
        }

        /// <summary>Property childInstanceOwnerId: The account ID to which the network belongs.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "childInstanceOwnerId", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? ChildInstanceOwnerId
        {
            get;
            set;
        }
    }
}
