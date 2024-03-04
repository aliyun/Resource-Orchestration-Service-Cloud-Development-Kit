using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsso
{
    /// <summary>Properties for defining a `User`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-user
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IUserProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.UserProps")]
    public interface IUserProps
    {
        /// <summary>Property directoryId: The ID of the directory.</summary>
        [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DirectoryId
        {
            get;
        }

        /// <summary>Property userName: The name of the user.</summary>
        /// <remarks>
        /// The name must be unique within the directory. The name cannot be changed.
        /// The name can contain numbers, letters, and the following special characters: @_-.
        /// The name can be up to 64 characters in length.
        /// </remarks>
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserName
        {
            get;
        }

        /// <summary>Property description: The description of the user.</summary>
        /// <remarks>
        /// The description can be up to 1,024 characters in length.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property displayName: The display name of the user.</summary>
        /// <remarks>
        /// The name can be up to 256 characters in length.
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DisplayName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property email: The email address of the user.</summary>
        /// <remarks>
        /// The email address must be unique within the directory.
        /// The email address can be up to 128 characters in length.
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

        /// <summary>Property firstName: The first name of the user.</summary>
        /// <remarks>
        /// The name can be up to 64 characters in length.
        /// </remarks>
        [JsiiProperty(name: "firstName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FirstName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property lastName: The last name of the user.</summary>
        /// <remarks>
        /// The name can be up to 64 characters in length.
        /// </remarks>
        [JsiiProperty(name: "lastName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LastName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: The status of the user.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Enabled: The logon of the user is enabled. This is the default value.</description>
        /// <description>Disabled: The logon of the user is disabled.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `User`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-user
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IUserProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.UserProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsso.IUserProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property directoryId: The ID of the directory.</summary>
            [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DirectoryId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property userName: The name of the user.</summary>
            /// <remarks>
            /// The name must be unique within the directory. The name cannot be changed.
            /// The name can contain numbers, letters, and the following special characters: @_-.
            /// The name can be up to 64 characters in length.
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the user.</summary>
            /// <remarks>
            /// The description can be up to 1,024 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property displayName: The display name of the user.</summary>
            /// <remarks>
            /// The name can be up to 256 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DisplayName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property email: The email address of the user.</summary>
            /// <remarks>
            /// The email address must be unique within the directory.
            /// The email address can be up to 128 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "email", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Email
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property firstName: The first name of the user.</summary>
            /// <remarks>
            /// The name can be up to 64 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "firstName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FirstName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property lastName: The last name of the user.</summary>
            /// <remarks>
            /// The name can be up to 64 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "lastName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LastName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: The status of the user.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Enabled: The logon of the user is enabled. This is the default value.</description>
            /// <description>Disabled: The logon of the user is disabled.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
