using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::SSHKeyPairAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.SSHKeyPairAttachmentProps")]
    public class SSHKeyPairAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Ecs.ISSHKeyPairAttachmentProps
    {
        /// <summary>Property instanceIds: The comma delimited ECS instance id list.</summary>
        /// <remarks>
        /// Only support Linux.
        /// </remarks>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceIds
        {
            get;
            set;
        }

        /// <summary>Property keyPairName: SSH key pair name.</summary>
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object KeyPairName
        {
            get;
            set;
        }
    }
}
