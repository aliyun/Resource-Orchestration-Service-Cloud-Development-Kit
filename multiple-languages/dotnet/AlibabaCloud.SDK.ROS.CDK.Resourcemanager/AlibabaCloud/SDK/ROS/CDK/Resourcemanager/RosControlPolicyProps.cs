using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ResourceManager::ControlPolicy`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.RosControlPolicyProps")]
    public class RosControlPolicyProps : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosControlPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: controlPolicyName: PolicyName
        /// </remarks>
        [JsiiProperty(name: "controlPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ControlPolicyName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: effectScope: EffectScope
        /// </remarks>
        [JsiiProperty(name: "effectScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object EffectScope
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: policyDocument: PolicyDocument
        /// </remarks>
        [JsiiProperty(name: "policyDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object PolicyDocument
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }
    }
}
