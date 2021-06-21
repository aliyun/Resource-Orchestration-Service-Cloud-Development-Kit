using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ResourceManager::ControlPolicy`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.ControlPolicyProps")]
    public class ControlPolicyProps : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IControlPolicyProps
    {
        /// <summary>Property controlPolicyName: PolicyName.</summary>
        [JsiiProperty(name: "controlPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ControlPolicyName
        {
            get;
            set;
        }

        /// <summary>Property effectScope: EffectScope.</summary>
        [JsiiProperty(name: "effectScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object EffectScope
        {
            get;
            set;
        }

        /// <summary>Property policyDocument: PolicyDocument.</summary>
        [JsiiProperty(name: "policyDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object PolicyDocument
        {
            get;
            set;
        }

        /// <summary>Property description: Description.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }
    }
}
