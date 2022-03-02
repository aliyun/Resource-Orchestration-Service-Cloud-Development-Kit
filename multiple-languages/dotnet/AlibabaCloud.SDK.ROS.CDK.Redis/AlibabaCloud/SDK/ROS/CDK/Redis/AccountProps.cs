using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::REDIS::Account`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-redis.AccountProps")]
    public class AccountProps : AlibabaCloud.SDK.ROS.CDK.Redis.IAccountProps
    {
        /// <summary>Property accountName: The name of the account.</summary>
        /// <remarks>
        /// The name must start with a lowercase letter and can contain
        /// lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
        /// in length.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccountName
        {
            get;
            set;
        }

        /// <summary>Property accountPassword: The password of the account.</summary>
        /// <remarks>
        /// The password can be 8 to 32 characters in length and
        /// must contain at least three types of the following characters: uppercase letters,
        /// lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
        /// ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+),
        /// hyphens (-), and equal signs (=).
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccountPassword
        {
            get;
            set;
        }

        /// <summary>Property instanceId: The ID of the instance for which you want to create the account.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceId
        {
            get;
            set;
        }

        /// <summary>Property accountDescription: The description of the account.</summary>
        /// <remarks>
        /// The description must start with a letter, and cannot start with http:// or https://.
        /// The description can contain letters, underscores (_), hyphens (-), and digits.
        /// It can be 2 to 256 characters in length.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AccountDescription
        {
            get;
            set;
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
        [JsiiProperty(name: "accountPrivilege", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AccountPrivilege
        {
            get;
            set;
        }

        /// <summary>Property accountType: The type of the account.</summary>
        /// <remarks>
        /// Set this parameter to Normal.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AccountType
        {
            get;
            set;
        }
    }
}
