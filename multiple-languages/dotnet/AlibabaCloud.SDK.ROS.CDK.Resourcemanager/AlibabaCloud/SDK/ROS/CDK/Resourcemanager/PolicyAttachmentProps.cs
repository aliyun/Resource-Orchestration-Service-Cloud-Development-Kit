using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ResourceManager::PolicyAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.PolicyAttachmentProps")]
    public class PolicyAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IPolicyAttachmentProps
    {
        /// <summary>Property policyName: The name of the policy.</summary>
        [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PolicyName
        {
            get;
            set;
        }

        /// <summary>Property policyType: The type of the policy.</summary>
        [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PolicyType
        {
            get;
            set;
        }

        /// <summary>Property principalName: The name of the object to which you want to attach the policy.</summary>
        [JsiiProperty(name: "principalName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PrincipalName
        {
            get;
            set;
        }

        /// <summary>Property principalType: The type of the object to which you want to attach the policy.</summary>
        /// <remarks>
        /// Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        /// </remarks>
        [JsiiProperty(name: "principalType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PrincipalType
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ResourceGroupId
        {
            get;
            set;
        }
    }
}
