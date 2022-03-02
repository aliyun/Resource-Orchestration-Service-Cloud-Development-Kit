using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::DhcpOptionsSetAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.DhcpOptionsSetAttachmentProps")]
    public class DhcpOptionsSetAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IDhcpOptionsSetAttachmentProps
    {
        /// <summary>Property dhcpOptionsSetId: The ID of the DHCP options set.</summary>
        [JsiiProperty(name: "dhcpOptionsSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DhcpOptionsSetId
        {
            get;
            set;
        }

        /// <summary>Property vpcId: The ID of the VPC network that is to be associated with the DHCP options set.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VpcId
        {
            get;
            set;
        }
    }
}
