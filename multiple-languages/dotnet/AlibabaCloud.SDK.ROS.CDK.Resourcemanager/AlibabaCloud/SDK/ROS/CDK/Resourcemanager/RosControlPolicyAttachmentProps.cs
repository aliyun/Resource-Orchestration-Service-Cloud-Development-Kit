using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ResourceManager::ControlPolicyAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.RosControlPolicyAttachmentProps")]
    public class RosControlPolicyAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosControlPolicyAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: policyId: PolicyId
        /// </remarks>
        [JsiiProperty(name: "policyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object PolicyId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetId: TargetId
        /// </remarks>
        [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object TargetId
        {
            get;
            set;
        }
    }
}
