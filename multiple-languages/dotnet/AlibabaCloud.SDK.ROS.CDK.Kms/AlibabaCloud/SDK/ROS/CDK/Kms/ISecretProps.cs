using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    /// <summary>Properties for defining a `Secret`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISecretProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.SecretProps")]
    public interface ISecretProps
    {
        /// <summary>Property secretData: The value of the secret.</summary>
        /// <remarks>
        /// The value can be up to 30,720 bytes (30 KB) in length.
        /// KMS encrypts the secret value with the specified key and stores the encrypted
        /// value in the initial version.
        ///
        /// <list type="bullet">
        /// <description>If SecretType is set to Generic, you can specify a custom secret value.</description>
        /// <description>If SecretType is set to Rds, the secret value must be in the following format:
        /// <c>{"Accounts":[{"AccountName":"","AccountPassword":""}]}</c>. In the format,
        /// <c>AccountName</c> specifies the username of the account for the RDS instance and
        /// <c>AccountPassword</c> specifies the password of the account.</description>
        /// <description>If SecretType is set to Redis, set this parameter to <c>$Auto</c>.</description>
        /// <description>If SecretType is set to RAMCredentials, the secret value must be in the
        /// following format: <c>{"AccessKeys":[{"AccessKeyId":"","AccessKeySecret":""}]}</c>. In
        /// the format, <c>AccessKeyId</c> specifies the AccessKey ID and <c>AccessKeySecret</c>
        /// specifies the AccessKey secret. You must specify all AccessKey pairs of the RAM
        /// user.</description>
        /// <description>If SecretType is set to PolarDB, set this parameter to <c>$Auto</c>.</description>
        /// <description>If SecretType is set to ECS, the secret value must be in one of the following
        /// formats:</description>
        /// <description>If SecretSubType in the ExtendedConfig parameter is set to Password:
        /// <c>{"UserName":"","Password": ""}</c>. In the format, <c>UserName</c> specifies the
        /// username used to log on to the ECS instance and <c>Password</c> specifies the password
        /// used to log on to the ECS instance.</description>
        /// <description>If SecretSubType in the ExtendedConfig parameter is set to SSHKey:
        /// <c>{"UserName":"","PublicKey": "", "PrivateKey": ""}</c>. In the format, <c>PublicKey</c>
        /// specifies the SSH-formatted public key used to log on to the ECS instance and
        /// <c>PrivateKey</c> specifies the private key used to log on to the ECS instance.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "secretData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecretData
        {
            get;
        }

        /// <summary>Property secretName: The name of the secret.</summary>
        /// <remarks>
        /// The name must be unique in the same region.
        /// The name can be up to 192 characters in length and can contain letters, digits,
        /// underscores (_), forward slashes (/), plus signs (+), equal signs (=), periods
        /// (.), hyphens (-), and at signs (@). The following limits apply to secret names
        /// for different types of secrets:
        ///
        /// <list type="bullet">
        /// <description>If SecretType is set to Generic, Rds, or Redis, the name cannot start with
        /// <c>acs\/</c>.</description>
        /// <description>If SecretType is set to RAMCredentials, set this parameter to the fixed value
        /// <c>$Auto</c>. In this case, KMS automatically generates a secret name that starts with
        /// <c>acs\/ram\/user\/</c> and contains the display name of the RAM user.</description>
        /// <description>If SecretType is set to ECS, the name must start with <c>acs\/ecs\/</c>.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "secretName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecretName
        {
            get;
        }

        /// <summary>Property versionId: The version number of the initial version.</summary>
        /// <remarks>
        /// The version number must be unique
        /// within the secret.
        /// The version number can be up to 64 characters in length.
        /// </remarks>
        [JsiiProperty(name: "versionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VersionId
        {
            get;
        }

        /// <summary>Property description: The description of the secret.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dkmsInstanceId: The ID of the dedicated KMS instance.</summary>
        [JsiiProperty(name: "dkmsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DkmsInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableAutomaticRotation: Specifies whether to enable automatic rotation.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: enables automatic rotation.</description>
        /// <description>false (default): disables automatic rotation.</description>
        /// </list>
        ///
        ///     This parameter is valid only if SecretType is set to Rds, PolarDB, Redis,
        ///     RAMCredentials, or ECS. If SecretType is set to Generic, automatic rotation is
        ///     not supported. You can call the <a href="">PutSecretValue</a> operation to manually rotate
        ///     the secret.
        /// </remarks>
        [JsiiProperty(name: "enableAutomaticRotation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAutomaticRotation
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encryptionKeyId: The ID of the key used to encrypt the secret value.</summary>
        /// <remarks>
        ///     The key and the secret must be in the same KMS instance. The key must be a
        ///     symmetric key.
        /// </remarks>
        [JsiiProperty(name: "encryptionKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EncryptionKeyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property extendedConfig: The extended configuration of the secret.</summary>
        /// <remarks>
        /// This parameter specifies the properties
        /// of the secret of a specific type. The value can be up to 1,024 characters in
        /// length.
        ///
        /// <list type="bullet">
        /// <description>If SecretType is set to Generic, this parameter is ignored.</description>
        /// <description>If SecretType is set to Rds, you must specify the following parameters in
        /// ExtendedConfig:</description>
        /// <description>SecretSubType (Required): The subtype of the secret. Valid values:</description>
        /// <description>SingleUser: Secrets Manager manages the RDS secret in single-account mode. When
        /// the secret is rotated, the password of the specified account is reset to a new
        /// random password.</description>
        /// <description>DoubleUsers: Secrets Manager manages the RDS secret in double-account mode.
        /// ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
        /// rotated, the password of the account pointed to by ACSPrevious is reset to a new
        /// random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
        /// ACSPrevious point to.</description>
        /// <description>DBInstanceId (Required): The ID of the RDS instance to which the account
        /// belongs.</description>
        /// <description>CustomData (Optional): The custom data. The value is a key-value pair in the
        /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
        /// key-value pairs with commas (,). Example: <c>{"Key1": "v1", "fds":"fdsf"}</c>. The
        /// default value is <c>{}</c>.</description>
        /// <description>If SecretType is set to Redis, you must specify the following parameters in
        /// ExtendedConfig:</description>
        /// <description>SecretSubType (Required): The subtype of the secret. Valid values:</description>
        /// <description>DoubleUsers: Secrets Manager manages the Redis secret in double-account mode.
        /// ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
        /// rotated, the password of the account pointed to by ACSPrevious is reset to a new
        /// random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
        /// ACSPrevious point to.</description>
        /// <description>AccountName (Required): The database username.</description>
        /// <description>CloneAccountName (Required): The database username, which is the value of
        /// AccountName with the <c>_clone</c> suffix.</description>
        /// <description>AccountPrivilege (Required): The permissions to access the database.</description>
        /// <description>InstanceId (Required): The ID of the Redis instance.</description>
        /// <description>RegionId (Required): The ID of the region where the Redis instance resides.</description>
        /// <description>CustomData (Optional): The custom data. The value is a key-value pair in the
        /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
        /// key-value pairs with commas (,). Example: <c>{"Key1": "v1", "fds":"fdsf"}</c>. The
        /// default value is <c>{}</c>.</description>
        /// <description>If SecretType is set to RAMCredentials, you must specify the following
        /// parameters in ExtendedConfig:</description>
        /// <description>SecretSubType (Required): The subtype of the secret. The value is
        /// RamUserAccessKey.</description>
        /// <description>UserName (Required): The name of the RAM user.</description>
        /// <description>CustomData (Optional): The custom data. The value is a key-value pair in the
        /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
        /// key-value pairs with commas (,). The default value is <c>{}</c>.</description>
        /// <description>If SecretType is set to ECS, you must specify the following parameters in
        /// ExtendedConfig:</description>
        /// <description>SecretSubType (Required): The subtype of the secret. Valid values:</description>
        /// <description>Password: an ECS password.</description>
        /// <description>SSHKey: an ECS SSH key pair.</description>
        /// <description>RegionId (Required): The ID of the region where the ECS instance resides.</description>
        /// <description>InstanceId (Required): The ID of the ECS instance.</description>
        /// <description>CustomData (Optional): The custom data. The value is a key-value pair in the
        /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
        /// key-value pairs with commas (,). The default value is <c>{}</c>.</description>
        /// <description>If SecretType is set to PolarDB, you must specify the following parameters in
        /// ExtendedConfig:</description>
        /// <description>SecretSubType (Required): The fixed value is DoubleUsers.</description>
        /// <description>RegionId (Required): The region.</description>
        /// <description>DBClusterId (Required): The ID of the PolarDB instance.</description>
        /// <description>DBType (Required): MySQL or PostgreSQL.</description>
        /// <description>AccountName (Required): The account name.</description>
        /// <description>CloneAccountName: The value is AccountName_clone.</description>
        /// <description>AccountType: Only Normal is supported.</description>
        /// <description>AccountPrivilege: This parameter is available only for MySQL.</description>
        /// <description>DBName: This parameter is available only for MySQL.</description>
        /// <description>CustomData (Optional): The custom data. The value is a key-value pair in the
        /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
        /// key-value pairs with commas (,). Example: {"Key1": "v1", "fds":"fdsf"}. The
        /// default value is {}.</description>
        /// </list>
        ///
        ///     If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS, you must
        ///     configure this parameter.
        /// </remarks>
        [JsiiProperty(name: "extendedConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExtendedConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret.</summary>
        /// <remarks>
        /// If this parameter is set to true, the secret cannot be recovered. Valid values:
        /// true
        /// false (default value)
        /// </remarks>
        [JsiiProperty(name: "forceDeleteWithoutRecovery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ForceDeleteWithoutRecovery
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property policy: The specific content of the credential policy in JSON format.</summary>
        /// <remarks>
        /// Maximum length is 32768 bytes.
        /// If this parameter is not specified, the default credential policy is used.
        /// The policy content includes:
        ///
        /// <list type="bullet">
        /// <description>Version: The version of the policy. Currently, only version 1 is supported.</description>
        /// <description>Statement: A list of statements, each containing:
        ///
        /// <list type="bullet">
        /// <description>Sid (optional): A custom statement identifier. Up to 128 characters, including letters, digits, and _/+=.@-.</description>
        /// <description>Effect (required): Whether the statement allows or denies permissions. Valid values: Allow, Deny.</description>
        /// <description>Principal (required): The entity to which the permissions are granted. Can be the current Alibaba Cloud account, RAM users or roles under the current or other accounts.</description>
        /// <description>Action (required): The API actions allowed or denied. Must start with "kms:". For valid actions, see   - Resource (required): Must be "*", representing this KMS secret.</description>
        /// <description>Condition (optional): Conditions that limit when the policy is effective. Format: <c>"Condition": {"condition operator": {"condition key": "condition value"}}</c>. See documentation for details.</description>
        /// </list></description>
        /// </list>
        ///
        ///     After granting permissions to RAM users or roles under another Alibaba Cloud account, you must also use RAM to authorize that user or role to use this secret.
        /// </remarks>
        [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Policy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it.</summary>
        /// <remarks>
        /// Default value: 30
        /// </remarks>
        [JsiiProperty(name: "recoveryWindowInDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RecoveryWindowInDays
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rotationInterval: The interval for automatic rotation.</summary>
        /// <remarks>
        /// The value is in the range of 6 hours to
        /// 8,760 hours (365 days).<br xmlns="http://www.w3.org/1999/xhtml"/>
        /// The value is in the <c>integer[unit]</c> format. <c>integer</c> indicates the interval.
        /// <c>unit</c> indicates the unit of time.<br xmlns="http://www.w3.org/1999/xhtml"/>
        /// Valid values for unit: d (day), h (hour), m (minute), and s (second). For
        /// example, both 7d and 604,800s indicate a rotation interval of 7 days.<br xmlns="http://www.w3.org/1999/xhtml"/><br xmlns="http://www.w3.org/1999/xhtml"/>
        ///
        ///     You must specify this parameter if you set EnableAutomaticRotation to true. You
        ///     do not need to specify this parameter if you set EnableAutomaticRotation to
        ///     false.
        /// </remarks>
        [JsiiProperty(name: "rotationInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RotationInterval
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property secretDataType: The type of the secret value.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>text (default): The secret value is a text string.</description>
        /// <description>binary: The secret value is a binary string.</description>
        /// </list>
        ///
        ///     If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS,
        ///     SecretDataType must be set to text.
        /// </remarks>
        [JsiiProperty(name: "secretDataType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecretDataType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property secretType: The type of the secret.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Generic (default): a generic secret.</description>
        /// <description>Rds: an RDS secret.</description>
        /// <description>Redis: a Redis secret.</description>
        /// <description>RAMCredentials: a RAM secret.</description>
        /// <description>ECS: an ECS secret.</description>
        /// <description>PolarDB: a PolarDB secret.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "secretType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecretType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to secret.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create secret. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-kms.RosSecret.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Kms.RosSecret.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property versionStages: The stage labels that mark the secret version.</summary>
        /// <remarks>
        /// ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
        /// </remarks>
        [JsiiProperty(name: "versionStages", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VersionStages
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Secret`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISecretProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.SecretProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.ISecretProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property secretData: The value of the secret.</summary>
            /// <remarks>
            /// The value can be up to 30,720 bytes (30 KB) in length.
            /// KMS encrypts the secret value with the specified key and stores the encrypted
            /// value in the initial version.
            ///
            /// <list type="bullet">
            /// <description>If SecretType is set to Generic, you can specify a custom secret value.</description>
            /// <description>If SecretType is set to Rds, the secret value must be in the following format:
            /// <c>{"Accounts":[{"AccountName":"","AccountPassword":""}]}</c>. In the format,
            /// <c>AccountName</c> specifies the username of the account for the RDS instance and
            /// <c>AccountPassword</c> specifies the password of the account.</description>
            /// <description>If SecretType is set to Redis, set this parameter to <c>$Auto</c>.</description>
            /// <description>If SecretType is set to RAMCredentials, the secret value must be in the
            /// following format: <c>{"AccessKeys":[{"AccessKeyId":"","AccessKeySecret":""}]}</c>. In
            /// the format, <c>AccessKeyId</c> specifies the AccessKey ID and <c>AccessKeySecret</c>
            /// specifies the AccessKey secret. You must specify all AccessKey pairs of the RAM
            /// user.</description>
            /// <description>If SecretType is set to PolarDB, set this parameter to <c>$Auto</c>.</description>
            /// <description>If SecretType is set to ECS, the secret value must be in one of the following
            /// formats:</description>
            /// <description>If SecretSubType in the ExtendedConfig parameter is set to Password:
            /// <c>{"UserName":"","Password": ""}</c>. In the format, <c>UserName</c> specifies the
            /// username used to log on to the ECS instance and <c>Password</c> specifies the password
            /// used to log on to the ECS instance.</description>
            /// <description>If SecretSubType in the ExtendedConfig parameter is set to SSHKey:
            /// <c>{"UserName":"","PublicKey": "", "PrivateKey": ""}</c>. In the format, <c>PublicKey</c>
            /// specifies the SSH-formatted public key used to log on to the ECS instance and
            /// <c>PrivateKey</c> specifies the private key used to log on to the ECS instance.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "secretData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecretData
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property secretName: The name of the secret.</summary>
            /// <remarks>
            /// The name must be unique in the same region.
            /// The name can be up to 192 characters in length and can contain letters, digits,
            /// underscores (_), forward slashes (/), plus signs (+), equal signs (=), periods
            /// (.), hyphens (-), and at signs (@). The following limits apply to secret names
            /// for different types of secrets:
            ///
            /// <list type="bullet">
            /// <description>If SecretType is set to Generic, Rds, or Redis, the name cannot start with
            /// <c>acs\/</c>.</description>
            /// <description>If SecretType is set to RAMCredentials, set this parameter to the fixed value
            /// <c>$Auto</c>. In this case, KMS automatically generates a secret name that starts with
            /// <c>acs\/ram\/user\/</c> and contains the display name of the RAM user.</description>
            /// <description>If SecretType is set to ECS, the name must start with <c>acs\/ecs\/</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "secretName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecretName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property versionId: The version number of the initial version.</summary>
            /// <remarks>
            /// The version number must be unique
            /// within the secret.
            /// The version number can be up to 64 characters in length.
            /// </remarks>
            [JsiiProperty(name: "versionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VersionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the secret.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dkmsInstanceId: The ID of the dedicated KMS instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dkmsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DkmsInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableAutomaticRotation: Specifies whether to enable automatic rotation.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: enables automatic rotation.</description>
            /// <description>false (default): disables automatic rotation.</description>
            /// </list>
            ///
            ///     This parameter is valid only if SecretType is set to Rds, PolarDB, Redis,
            ///     RAMCredentials, or ECS. If SecretType is set to Generic, automatic rotation is
            ///     not supported. You can call the <a href="">PutSecretValue</a> operation to manually rotate
            ///     the secret.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableAutomaticRotation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAutomaticRotation
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encryptionKeyId: The ID of the key used to encrypt the secret value.</summary>
            /// <remarks>
            ///     The key and the secret must be in the same KMS instance. The key must be a
            ///     symmetric key.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encryptionKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncryptionKeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property extendedConfig: The extended configuration of the secret.</summary>
            /// <remarks>
            /// This parameter specifies the properties
            /// of the secret of a specific type. The value can be up to 1,024 characters in
            /// length.
            ///
            /// <list type="bullet">
            /// <description>If SecretType is set to Generic, this parameter is ignored.</description>
            /// <description>If SecretType is set to Rds, you must specify the following parameters in
            /// ExtendedConfig:</description>
            /// <description>SecretSubType (Required): The subtype of the secret. Valid values:</description>
            /// <description>SingleUser: Secrets Manager manages the RDS secret in single-account mode. When
            /// the secret is rotated, the password of the specified account is reset to a new
            /// random password.</description>
            /// <description>DoubleUsers: Secrets Manager manages the RDS secret in double-account mode.
            /// ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
            /// rotated, the password of the account pointed to by ACSPrevious is reset to a new
            /// random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
            /// ACSPrevious point to.</description>
            /// <description>DBInstanceId (Required): The ID of the RDS instance to which the account
            /// belongs.</description>
            /// <description>CustomData (Optional): The custom data. The value is a key-value pair in the
            /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
            /// key-value pairs with commas (,). Example: <c>{"Key1": "v1", "fds":"fdsf"}</c>. The
            /// default value is <c>{}</c>.</description>
            /// <description>If SecretType is set to Redis, you must specify the following parameters in
            /// ExtendedConfig:</description>
            /// <description>SecretSubType (Required): The subtype of the secret. Valid values:</description>
            /// <description>DoubleUsers: Secrets Manager manages the Redis secret in double-account mode.
            /// ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
            /// rotated, the password of the account pointed to by ACSPrevious is reset to a new
            /// random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
            /// ACSPrevious point to.</description>
            /// <description>AccountName (Required): The database username.</description>
            /// <description>CloneAccountName (Required): The database username, which is the value of
            /// AccountName with the <c>_clone</c> suffix.</description>
            /// <description>AccountPrivilege (Required): The permissions to access the database.</description>
            /// <description>InstanceId (Required): The ID of the Redis instance.</description>
            /// <description>RegionId (Required): The ID of the region where the Redis instance resides.</description>
            /// <description>CustomData (Optional): The custom data. The value is a key-value pair in the
            /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
            /// key-value pairs with commas (,). Example: <c>{"Key1": "v1", "fds":"fdsf"}</c>. The
            /// default value is <c>{}</c>.</description>
            /// <description>If SecretType is set to RAMCredentials, you must specify the following
            /// parameters in ExtendedConfig:</description>
            /// <description>SecretSubType (Required): The subtype of the secret. The value is
            /// RamUserAccessKey.</description>
            /// <description>UserName (Required): The name of the RAM user.</description>
            /// <description>CustomData (Optional): The custom data. The value is a key-value pair in the
            /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
            /// key-value pairs with commas (,). The default value is <c>{}</c>.</description>
            /// <description>If SecretType is set to ECS, you must specify the following parameters in
            /// ExtendedConfig:</description>
            /// <description>SecretSubType (Required): The subtype of the secret. Valid values:</description>
            /// <description>Password: an ECS password.</description>
            /// <description>SSHKey: an ECS SSH key pair.</description>
            /// <description>RegionId (Required): The ID of the region where the ECS instance resides.</description>
            /// <description>InstanceId (Required): The ID of the ECS instance.</description>
            /// <description>CustomData (Optional): The custom data. The value is a key-value pair in the
            /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
            /// key-value pairs with commas (,). The default value is <c>{}</c>.</description>
            /// <description>If SecretType is set to PolarDB, you must specify the following parameters in
            /// ExtendedConfig:</description>
            /// <description>SecretSubType (Required): The fixed value is DoubleUsers.</description>
            /// <description>RegionId (Required): The region.</description>
            /// <description>DBClusterId (Required): The ID of the PolarDB instance.</description>
            /// <description>DBType (Required): MySQL or PostgreSQL.</description>
            /// <description>AccountName (Required): The account name.</description>
            /// <description>CloneAccountName: The value is AccountName_clone.</description>
            /// <description>AccountType: Only Normal is supported.</description>
            /// <description>AccountPrivilege: This parameter is available only for MySQL.</description>
            /// <description>DBName: This parameter is available only for MySQL.</description>
            /// <description>CustomData (Optional): The custom data. The value is a key-value pair in the
            /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
            /// key-value pairs with commas (,). Example: {"Key1": "v1", "fds":"fdsf"}. The
            /// default value is {}.</description>
            /// </list>
            ///
            ///     If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS, you must
            ///     configure this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "extendedConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ExtendedConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret.</summary>
            /// <remarks>
            /// If this parameter is set to true, the secret cannot be recovered. Valid values:
            /// true
            /// false (default value)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "forceDeleteWithoutRecovery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ForceDeleteWithoutRecovery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property policy: The specific content of the credential policy in JSON format.</summary>
            /// <remarks>
            /// Maximum length is 32768 bytes.
            /// If this parameter is not specified, the default credential policy is used.
            /// The policy content includes:
            ///
            /// <list type="bullet">
            /// <description>Version: The version of the policy. Currently, only version 1 is supported.</description>
            /// <description>Statement: A list of statements, each containing:
            ///
            /// <list type="bullet">
            /// <description>Sid (optional): A custom statement identifier. Up to 128 characters, including letters, digits, and _/+=.@-.</description>
            /// <description>Effect (required): Whether the statement allows or denies permissions. Valid values: Allow, Deny.</description>
            /// <description>Principal (required): The entity to which the permissions are granted. Can be the current Alibaba Cloud account, RAM users or roles under the current or other accounts.</description>
            /// <description>Action (required): The API actions allowed or denied. Must start with "kms:". For valid actions, see   - Resource (required): Must be "*", representing this KMS secret.</description>
            /// <description>Condition (optional): Conditions that limit when the policy is effective. Format: <c>"Condition": {"condition operator": {"condition key": "condition value"}}</c>. See documentation for details.</description>
            /// </list></description>
            /// </list>
            ///
            ///     After granting permissions to RAM users or roles under another Alibaba Cloud account, you must also use RAM to authorize that user or role to use this secret.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Policy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it.</summary>
            /// <remarks>
            /// Default value: 30
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "recoveryWindowInDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RecoveryWindowInDays
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rotationInterval: The interval for automatic rotation.</summary>
            /// <remarks>
            /// The value is in the range of 6 hours to
            /// 8,760 hours (365 days).<br xmlns="http://www.w3.org/1999/xhtml"/>
            /// The value is in the <c>integer[unit]</c> format. <c>integer</c> indicates the interval.
            /// <c>unit</c> indicates the unit of time.<br xmlns="http://www.w3.org/1999/xhtml"/>
            /// Valid values for unit: d (day), h (hour), m (minute), and s (second). For
            /// example, both 7d and 604,800s indicate a rotation interval of 7 days.<br xmlns="http://www.w3.org/1999/xhtml"/><br xmlns="http://www.w3.org/1999/xhtml"/>
            ///
            ///     You must specify this parameter if you set EnableAutomaticRotation to true. You
            ///     do not need to specify this parameter if you set EnableAutomaticRotation to
            ///     false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rotationInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RotationInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property secretDataType: The type of the secret value.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>text (default): The secret value is a text string.</description>
            /// <description>binary: The secret value is a binary string.</description>
            /// </list>
            ///
            ///     If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS,
            ///     SecretDataType must be set to text.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secretDataType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecretDataType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property secretType: The type of the secret.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Generic (default): a generic secret.</description>
            /// <description>Rds: an RDS secret.</description>
            /// <description>Redis: a Redis secret.</description>
            /// <description>RAMCredentials: a RAM secret.</description>
            /// <description>ECS: an ECS secret.</description>
            /// <description>PolarDB: a PolarDB secret.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secretType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecretType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to secret.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create secret. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-kms.RosSecret.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Kms.RosSecret.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Kms.RosSecret.ITagsProperty[]?>();
            }

            /// <summary>Property versionStages: The stage labels that mark the secret version.</summary>
            /// <remarks>
            /// ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "versionStages", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? VersionStages
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
