using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RAM::ManagedPolicy`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RosManagedPolicyProps")]
    public class RosManagedPolicyProps : AlibabaCloud.SDK.ROS.CDK.Ram.IRosManagedPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: policyName: Specifies the authorization policy name, containing up to 128 characters.
        /// </remarks>
        [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PolicyName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Specifies the authorization policy description, containing up to 1024 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groups: The names of groups to attach to this policy.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "groups", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Groups
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: policyDocument: A policy document that describes what actions are allowed on which resources.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "policyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosManagedPolicy.PolicyDocumentProperty\"}]}}", isOptional: true)]
        public object? PolicyDocument
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "policyDocumentUnchecked", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public object? PolicyDocumentUnchecked
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: roles: The names of roles to attach to this policy.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "roles", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Roles
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: users: The names of users to attach to this policy.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "users", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Users
        {
            get;
            set;
        }
    }
}
