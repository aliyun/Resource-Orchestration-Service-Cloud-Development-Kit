using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RAM::ManagedPolicy`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.ManagedPolicyProps")]
    public class ManagedPolicyProps : AlibabaCloud.SDK.ROS.CDK.Ram.IManagedPolicyProps
    {
        /// <summary>Property policyName: Specifies the authorization policy name, containing up to 128 characters.</summary>
        [JsiiProperty(name: "policyName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PolicyName
        {
            get;
            set;
        }

        /// <summary>Property description: Specifies the authorization policy description, containing up to 1024 characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property groups: The names of groups to attach to this policy.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "groups", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Groups
        {
            get;
            set;
        }

        /// <summary>Property policyDocument: A policy document that describes what actions are allowed on which resources.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "policyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosManagedPolicy.PolicyDocumentProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? PolicyDocument
        {
            get;
            set;
        }

        /// <summary>Property policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources.</summary>
        /// <remarks>
        /// If it is specified, PolicyDocument will be ignored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "policyDocumentUnchecked", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true, isOverride: true)]
        public object? PolicyDocumentUnchecked
        {
            get;
            set;
        }

        /// <summary>Property roles: The names of roles to attach to this policy.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "roles", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Roles
        {
            get;
            set;
        }

        /// <summary>Property users: The names of users to attach to this policy.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "users", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Users
        {
            get;
            set;
        }
    }
}
