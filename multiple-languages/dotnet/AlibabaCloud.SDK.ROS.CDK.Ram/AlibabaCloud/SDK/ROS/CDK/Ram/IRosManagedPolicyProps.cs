using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `ALIYUN::RAM::ManagedPolicy`.</summary>
    [JsiiInterface(nativeType: typeof(IRosManagedPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosManagedPolicyProps")]
    public interface IRosManagedPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: policyName: Specifies the authorization policy name, containing up to 128 characters.
        /// </remarks>
        [JsiiProperty(name: "policyName", typeJson: "{\"primitive\":\"string\"}")]
        string PolicyName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Specifies the authorization policy description, containing up to 1024 characters.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groups: The names of groups to attach to this policy.
        /// </remarks>
        [JsiiProperty(name: "groups", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Groups
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: policyDocument: A policy document that describes what actions are allowed on which resources.
        /// </remarks>
        [JsiiProperty(name: "policyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosManagedPolicy.PolicyDocumentProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PolicyDocument
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
        /// </remarks>
        [JsiiProperty(name: "policyDocumentUnchecked", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PolicyDocumentUnchecked
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: roles: The names of roles to attach to this policy.
        /// </remarks>
        [JsiiProperty(name: "roles", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Roles
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: users: The names of users to attach to this policy.
        /// </remarks>
        [JsiiProperty(name: "users", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Users
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::RAM::ManagedPolicy`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosManagedPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosManagedPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IRosManagedPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: policyName: Specifies the authorization policy name, containing up to 128 characters.
            /// </remarks>
            [JsiiProperty(name: "policyName", typeJson: "{\"primitive\":\"string\"}")]
            public string PolicyName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Specifies the authorization policy description, containing up to 1024 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groups: The names of groups to attach to this policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groups", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Groups
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: policyDocument: A policy document that describes what actions are allowed on which resources.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "policyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosManagedPolicy.PolicyDocumentProperty\"}]}}", isOptional: true)]
            public object? PolicyDocument
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "policyDocumentUnchecked", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? PolicyDocumentUnchecked
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: roles: The names of roles to attach to this policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "roles", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Roles
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: users: The names of users to attach to this policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "users", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Users
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
