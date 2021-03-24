using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RAM::AttachPolicyToUser`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RosAttachPolicyToUserProps")]
    public class RosAttachPolicyToUserProps : AlibabaCloud.SDK.ROS.CDK.Ram.IRosAttachPolicyToUserProps
    {
        /// <remarks>
        /// <strong>Property</strong>: policyName: Authorization policy name.
        /// </remarks>
        [JsiiProperty(name: "policyName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PolicyName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: policyType: Authorization policy type. Value: "System" or "Custom".
        /// </remarks>
        [JsiiProperty(name: "policyType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PolicyType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: userName: User name.Example: dev.
        /// </remarks>
        [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string UserName
        {
            get;
            set;
        }
    }
}
