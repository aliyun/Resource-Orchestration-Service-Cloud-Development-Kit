using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `User`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-user
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IUserProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.UserProps")]
    public interface IUserProps
    {
        /// <summary>Property userName: Specifies the user name, containing up to 64 characters.</summary>
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserName
        {
            get;
        }

        /// <summary>Property comments: Comments of ram user.</summary>
        [JsiiProperty(name: "comments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Comments
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionForce: Whether force detach the policies and groups attached to the user.</summary>
        /// <remarks>
        /// Default value is false.
        /// </remarks>
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionForce
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property displayName: Display name, up to 128 characters or Chinese characters.</summary>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DisplayName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property email: Email of ram user.</summary>
        [JsiiProperty(name: "email", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Email
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property groups: A name of a group to which you want to add the user.</summary>
        [JsiiProperty(name: "groups", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Groups
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.</summary>
        [JsiiProperty(name: "loginProfile", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosUser.LoginProfileProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoginProfile
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mobilePhone: Phone number of ram user.</summary>
        [JsiiProperty(name: "mobilePhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MobilePhone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property policies: Describes what actions are allowed on what resources.</summary>
        [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosUser.PoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Policies
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property policyAttachments: System and custom policy names to attach.</summary>
        [JsiiProperty(name: "policyAttachments", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosUser.PolicyAttachmentsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PolicyAttachments
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `User`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-user
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IUserProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.UserProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IUserProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property userName: Specifies the user name, containing up to 64 characters.</summary>
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property comments: Comments of ram user.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "comments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Comments
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionForce: Whether force detach the policies and groups attached to the user.</summary>
            /// <remarks>
            /// Default value is false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionForce
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property displayName: Display name, up to 128 characters or Chinese characters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DisplayName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property email: Email of ram user.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "email", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Email
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property groups: A name of a group to which you want to add the user.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "groups", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Groups
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "loginProfile", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosUser.LoginProfileProperty\"}]}}", isOptional: true)]
            public object? LoginProfile
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mobilePhone: Phone number of ram user.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "mobilePhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MobilePhone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property policies: Describes what actions are allowed on what resources.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosUser.PoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Policies
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property policyAttachments: System and custom policy names to attach.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "policyAttachments", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosUser.PolicyAttachmentsProperty\"}]}}", isOptional: true)]
            public object? PolicyAttachments
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
