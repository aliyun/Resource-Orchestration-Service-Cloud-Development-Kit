using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    /// <summary>Properties for defining a `ALIYUN::REDIS::Account`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosAccountProps")]
    public interface IRosAccountProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountName: The name of the account. The name must start with a lowercase letter and can contain
        /// lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
        /// in length.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}")]
        string AccountName
        {
            get;
        }

        /// <remarks>
        /// <strong></strong>: ), number signs (#), dollar signs ($), percent signs (%), carets (^),
        /// ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
        /// hyphens (-), and equal signs (=).
        /// 
        /// <strong>Property</strong>: accountPassword: The password of the account. The password can be 8 to 32 characters in length and
        /// must contain at least three types of the following characters: uppercase letters,
        /// lowercase letters, digits, and special characters. Special characters include ! at signs (
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"primitive\":\"string\"}")]
        string AccountPassword
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the instance for which you want to create the account.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountDescription: The description of the account.
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

        /// <remarks>
        /// <strong>Property</strong>: accountPrivilege: The permission of the account. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: accountType: The type of the account. Set this parameter to Normal.
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
        [JsiiTypeProxy(nativeType: typeof(IRosAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosAccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.IRosAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accountName: The name of the account. The name must start with a lowercase letter and can contain
            /// lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
            /// in length.
            /// </remarks>
            [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}")]
            public string AccountName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong></strong>: ), number signs (#), dollar signs ($), percent signs (%), carets (^),
            /// ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
            /// hyphens (-), and equal signs (=).
            /// 
            /// <strong>Property</strong>: accountPassword: The password of the account. The password can be 8 to 32 characters in length and
            /// must contain at least three types of the following characters: uppercase letters,
            /// lowercase letters, digits, and special characters. Special characters include ! at signs (
            /// </remarks>
            [JsiiProperty(name: "accountPassword", typeJson: "{\"primitive\":\"string\"}")]
            public string AccountPassword
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the instance for which you want to create the account.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accountDescription: The description of the account.
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

            /// <remarks>
            /// <strong>Property</strong>: accountPrivilege: The permission of the account. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: accountType: The type of the account. Set this parameter to Normal.
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
