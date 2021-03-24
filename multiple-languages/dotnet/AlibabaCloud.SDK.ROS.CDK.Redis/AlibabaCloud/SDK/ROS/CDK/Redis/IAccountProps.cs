using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    /// <summary>Properties for defining a `ALIYUN::REDIS::Account`.</summary>
    [JsiiInterface(nativeType: typeof(IAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.AccountProps")]
    public interface IAccountProps
    {
        /// <summary>Property accountName: The name of the account.</summary>
        /// <remarks>
        /// The name must start with a lowercase letter and can contain
        /// lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
        /// in length.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}")]
        string AccountName
        {
            get;
        }

        /// <summary>Property accountPassword: The password of the account.</summary>
        /// <remarks>
        /// The password can be 8 to 32 characters in length and
        /// must contain at least three types of the following characters: uppercase letters,
        /// lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
        /// ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+),
        /// hyphens (-), and equal signs (=).
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"primitive\":\"string\"}")]
        string AccountPassword
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the instance for which you want to create the account.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <summary>Property accountDescription: The description of the account.</summary>
        /// <remarks>
        /// The description must start with a letter, and cannot start with http:// or https://.
        /// The description can contain letters, underscores (_), hyphens (-), and digits.
        /// It can be 2 to 256 characters in length.
        /// </remarks>
        [JsiiProperty(name: "accountDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AccountDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property accountPrivilege: The permission of the account.</summary>
        /// <remarks>
        /// Valid values:
        /// RoleReadOnly
        /// RoleReadWrite (default value)
        /// RoleRepl
        /// Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
        /// an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
        /// permission can be granted to an account only in an ApsaraDB for Redis instance of
        /// the standard edition in Redis 4.0.
        /// </remarks>
        [JsiiProperty(name: "accountPrivilege", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AccountPrivilege
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property accountType: The type of the account.</summary>
        /// <remarks>
        /// Set this parameter to Normal.
        /// </remarks>
        [JsiiProperty(name: "accountType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AccountType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::REDIS::Account`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.AccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.IAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accountName: The name of the account.</summary>
            /// <remarks>
            /// The name must start with a lowercase letter and can contain
            /// lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
            /// in length.
            /// </remarks>
            [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}")]
            public string AccountName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property accountPassword: The password of the account.</summary>
            /// <remarks>
            /// The password can be 8 to 32 characters in length and
            /// must contain at least three types of the following characters: uppercase letters,
            /// lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
            /// ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+),
            /// hyphens (-), and equal signs (=).
            /// </remarks>
            [JsiiProperty(name: "accountPassword", typeJson: "{\"primitive\":\"string\"}")]
            public string AccountPassword
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property instanceId: The ID of the instance for which you want to create the account.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property accountDescription: The description of the account.</summary>
            /// <remarks>
            /// The description must start with a letter, and cannot start with http:// or https://.
            /// The description can contain letters, underscores (_), hyphens (-), and digits.
            /// It can be 2 to 256 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccountDescription
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property accountPrivilege: The permission of the account.</summary>
            /// <remarks>
            /// Valid values:
            /// RoleReadOnly
            /// RoleReadWrite (default value)
            /// RoleRepl
            /// Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
            /// an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
            /// permission can be granted to an account only in an ApsaraDB for Redis instance of
            /// the standard edition in Redis 4.0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountPrivilege", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccountPrivilege
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property accountType: The type of the account.</summary>
            /// <remarks>
            /// Set this parameter to Normal.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccountType
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
