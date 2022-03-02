using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ResourceManager::ControlPolicyAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.ControlPolicyAttachmentProps")]
    public class ControlPolicyAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IControlPolicyAttachmentProps
    {
        /// <summary>Property policyId: PolicyId.</summary>
        [JsiiProperty(name: "policyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PolicyId
        {
            get;
            set;
        }

        /// <summary>Property targetId: TargetId.</summary>
        [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TargetId
        {
            get;
            set;
        }
    }
}
