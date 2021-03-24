using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `ALIYUN::RAM::User`.</summary>
    [JsiiInterface(nativeType: typeof(IRosUserProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosUserProps")]
    public interface IRosUserProps
    {
        /// <remarks>
        /// <strong>Property</strong>: userName: Specifies the user name, containing up to 64 characters.
        /// </remarks>
        [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}")]
        string UserName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: comments: Comments of ram user.
        /// </remarks>
        [JsiiProperty(name: "comments", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Comments
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: displayName: Display name, up to 128 characters or Chinese characters.
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DisplayName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: email: Email of ram user.
        /// </remarks>
        [JsiiProperty(name: "email", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Email
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groups: A name of a group to which you want to add the user.
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
        /// <strong>Property</strong>: loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
        /// </remarks>
        [JsiiProperty(name: "loginProfile", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosUser.LoginProfileProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoginProfile
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: mobilePhone: Phone number of ram user.
        /// </remarks>
        [JsiiProperty(name: "mobilePhone", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MobilePhone
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: policies: Describes what actions are allowed on what resources.
        /// </remarks>
        [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosUser.PoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Policies
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::RAM::User`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosUserProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosUserProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IRosUserProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: Specifies the user name, containing up to 64 characters.
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}")]
            public string UserName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: comments: Comments of ram user.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "comments", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Comments
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: displayName: Display name, up to 128 characters or Chinese characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DisplayName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: email: Email of ram user.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "email", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Email
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groups: A name of a group to which you want to add the user.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groups", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Groups
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loginProfile", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosUser.LoginProfileProperty\"}]}}", isOptional: true)]
            public object? LoginProfile
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mobilePhone: Phone number of ram user.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mobilePhone", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MobilePhone
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: policies: Describes what actions are allowed on what resources.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosUser.PoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Policies
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
