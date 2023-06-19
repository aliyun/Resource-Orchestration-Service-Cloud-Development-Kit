using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edsuser
{
    /// <summary>Properties for defining a `ALIYUN::EdsUser::User`.</summary>
    [JsiiInterface(nativeType: typeof(IUserProps), fullyQualifiedName: "@alicloud/ros-cdk-edsuser.UserProps")]
    public interface IUserProps
    {
        /// <summary>Property endUserId: The name of the end user.</summary>
        /// <remarks>
        /// The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "endUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndUserId
        {
            get;
        }

        /// <summary>Property email: The email address of the end user.</summary>
        /// <remarks>
        /// The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
        /// </remarks>
        [JsiiProperty(name: "email", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Email
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property orgId: The organization to which the end user belongs.</summary>
        [JsiiProperty(name: "orgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OrgId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ownerType: The type of the account ownership.</summary>
        /// <remarks>
        /// Enumeration Value:
        /// CreateFromManager
        /// Normal
        /// </remarks>
        [JsiiProperty(name: "ownerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OwnerType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property password: The initial password.</summary>
        /// <remarks>
        /// If this parameter is left empty, an email for password reset is sent to the specified email address.
        /// </remarks>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Password
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property phone: Mobile numbers are not supported on the international site (alibabacloud.com).</summary>
        [JsiiProperty(name: "phone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Phone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property remark: The remarks of the end user.</summary>
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Remark
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::EdsUser::User`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IUserProps), fullyQualifiedName: "@alicloud/ros-cdk-edsuser.UserProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edsuser.IUserProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property endUserId: The name of the end user.</summary>
            /// <remarks>
            /// The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
            /// </remarks>
            [JsiiProperty(name: "endUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndUserId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property email: The email address of the end user.</summary>
            /// <remarks>
            /// The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "email", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Email
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property orgId: The organization to which the end user belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "orgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OrgId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ownerType: The type of the account ownership.</summary>
            /// <remarks>
            /// Enumeration Value:
            /// CreateFromManager
            /// Normal
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ownerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OwnerType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property password: The initial password.</summary>
            /// <remarks>
            /// If this parameter is left empty, an email for password reset is sent to the specified email address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Password
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property phone: Mobile numbers are not supported on the international site (alibabacloud.com).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "phone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Phone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property remark: The remarks of the end user.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
