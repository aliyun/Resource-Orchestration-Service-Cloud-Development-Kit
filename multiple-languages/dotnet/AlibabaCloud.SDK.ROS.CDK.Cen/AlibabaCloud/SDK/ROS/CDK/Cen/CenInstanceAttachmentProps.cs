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
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object CenId
        {
            get;
            set;
        }

        /// <summary>Property childInstanceId: The ID of the network to attach.</summary>
        [JsiiProperty(name: "childInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ChildInstanceId
        {
            get;
            set;
        }

        /// <summary>Property childInstanceRegionId: The ID of the region where the network is located.</summary>
        /// <remarks>
        /// The ID of the region where the network is located.
        /// </remarks>
        [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ChildInstanceRegionId
        {
            get;
            set;
        }

        /// <summary>Property childInstanceType: The type of the network to attach.</summary>
        /// <remarks>
        /// Support VPC, VBR or CCN.
        /// </remarks>
        [JsiiProperty(name: "childInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ChildInstanceType
        {
            get;
            set;
        }

        /// <summary>Property childInstanceOwnerId: The account ID to which the network belongs.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "childInstanceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ChildInstanceOwnerId
        {
            get;
            set;
        }
    }
}
