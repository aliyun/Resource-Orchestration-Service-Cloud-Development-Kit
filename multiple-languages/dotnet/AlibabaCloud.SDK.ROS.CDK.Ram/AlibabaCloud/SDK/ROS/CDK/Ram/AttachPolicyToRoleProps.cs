using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RAM::AttachPolicyToRole`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.AttachPolicyToRoleProps")]
    public class AttachPolicyToRoleProps : AlibabaCloud.SDK.ROS.CDK.Ram.IAttachPolicyToRoleProps
    {
        /// <summary>Property policyName: Authorization policy name.</summary>
        [JsiiProperty(name: "policyName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PolicyName
        {
            get;
            set;
        }

        /// <summary>Property policyType: Authorization policy type.</summary>
        /// <remarks>
        /// Value: "System" or "Custom".
        /// </remarks>
        [JsiiProperty(name: "policyType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PolicyType
        {
            get;
            set;
        }

        /// <summary>Property roleName: Role name.Example: dev.</summary>
        [JsiiProperty(name: "roleName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RoleName
        {
            get;
            set;
        }
    }
}
