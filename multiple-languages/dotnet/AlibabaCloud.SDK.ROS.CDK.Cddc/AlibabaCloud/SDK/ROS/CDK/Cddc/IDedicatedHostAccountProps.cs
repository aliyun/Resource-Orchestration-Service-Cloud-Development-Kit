using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cddc
{
    /// <summary>Properties for defining a `DedicatedHostAccount`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostaccount
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDedicatedHostAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-cddc.DedicatedHostAccountProps")]
    public interface IDedicatedHostAccountProps
    {
        /// <summary>Property accountName: The name of the account.</summary>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountName
        {
            get;
        }

        /// <summary>Property accountPassword: The password for the host account.</summary>
        /// <remarks>
        /// The password must meet the following
        /// requirements:
        ///
        /// <list type="bullet">
        /// <description>The password must be 6 to 32 characters in length.</description>
        /// <description>It must contain uppercase letters, lowercase letters, digits, and special
        /// characters.</description>
        /// <description>Supported special characters: <c>!@#$%^&amp;*()_+-=</c></description>
        /// </list>
        ///
        ///     If your engine is SQL Server, the password cannot contain the account name
        ///     (case-insensitive).
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountPassword
        {
            get;
        }

        /// <summary>Property dedicatedHostId: The ID of the dedicated host.</summary>
        [JsiiProperty(name: "dedicatedHostId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DedicatedHostId
        {
            get;
        }

        /// <summary>Property accountType: The type of the account.</summary>
        [JsiiProperty(name: "accountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property bastionInstanceId: The ID of the bastion instance.</summary>
        [JsiiProperty(name: "bastionInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BastionInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DedicatedHostAccount`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostaccount
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDedicatedHostAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-cddc.DedicatedHostAccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cddc.IDedicatedHostAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accountName: The name of the account.</summary>
            [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accountPassword: The password for the host account.</summary>
            /// <remarks>
            /// The password must meet the following
            /// requirements:
            ///
            /// <list type="bullet">
            /// <description>The password must be 6 to 32 characters in length.</description>
            /// <description>It must contain uppercase letters, lowercase letters, digits, and special
            /// characters.</description>
            /// <description>Supported special characters: <c>!@#$%^&amp;*()_+-=</c></description>
            /// </list>
            ///
            ///     If your engine is SQL Server, the password cannot contain the account name
            ///     (case-insensitive).
            /// </remarks>
            [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dedicatedHostId: The ID of the dedicated host.</summary>
            [JsiiProperty(name: "dedicatedHostId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DedicatedHostId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accountType: The type of the account.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property bastionInstanceId: The ID of the bastion instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "bastionInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BastionInstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
