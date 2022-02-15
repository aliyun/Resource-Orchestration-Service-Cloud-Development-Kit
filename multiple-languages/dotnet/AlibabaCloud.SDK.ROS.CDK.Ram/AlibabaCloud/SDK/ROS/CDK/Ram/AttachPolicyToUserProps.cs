using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RAM::AttachPolicyToUser`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.AttachPolicyToUserProps")]
    public class AttachPolicyToUserProps : AlibabaCloud.SDK.ROS.CDK.Ram.IAttachPolicyToUserProps
    {
        /// <summary>Property policyName: Authorization policy name.</summary>
        [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PolicyName
        {
            get;
            set;
        }

        /// <summary>Property policyType: Authorization policy type.</summary>
        /// <remarks>
        /// Value: "System" or "Custom".
        /// </remarks>
        [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PolicyType
        {
            get;
            set;
        }

        /// <summary>Property userName: User name.Example: dev.</summary>
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object UserName
        {
            get;
            set;
        }
    }
}
