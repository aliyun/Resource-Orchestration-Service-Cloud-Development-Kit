using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    /// <summary>Properties for defining a `RosSecret`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSecretProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.RosSecretProps")]
    public interface IRosSecretProps
    {
        /// <remarks>
        /// <strong>Property</strong>: secretData: The value of the secret. The value can be up to 30,720 bytes (30 KB) in length.
        /// KMS encrypts the secret value with the specified key and stores the encrypted
        /// value in the initial version.
        /// - If SecretType is set to Generic, you can specify a custom secret value.
        /// - If SecretType is set to Rds, the secret value must be in the following format:
        /// `{"Accounts":[{"AccountName":"","AccountPassword":""}]}`. In the format,
        /// `AccountName` specifies the username of the account for the RDS instance and
        /// `AccountPassword` specifies the password of the account.
        /// - If SecretType is set to Redis, set this parameter to `$Auto`.
        /// - If SecretType is set to RAMCredentials, the secret value must be in the
        /// following format: `{"AccessKeys":[{"AccessKeyId":"","AccessKeySecret":""}]}`. In
        /// the format, `AccessKeyId` specifies the AccessKey ID and `AccessKeySecret`
        /// specifies the AccessKey secret. You must specify all AccessKey pairs of the RAM
        /// user.
        /// - If SecretType is set to PolarDB, set this parameter to `$Auto`.
        /// - If SecretType is set to ECS, the secret value must be in one of the following
        /// formats:
        /// - If SecretSubType in the ExtendedConfig parameter is set to Password:
        /// `{"UserName":"","Password": ""}`. In the format, `UserName` specifies the
        /// username used to log on to the ECS instance and `Password` specifies the password
        /// used to log on to the ECS instance.
        /// - If SecretSubType in the ExtendedConfig parameter is set to SSHKey:
        /// `{"UserName":"","PublicKey": "", "PrivateKey": ""}`. In the format, `PublicKey`
        /// specifies the SSH-formatted public key used to log on to the ECS instance and
        /// `PrivateKey` specifies the private key used to log on to the ECS instance.
        /// </remarks>
        [JsiiProperty(name: "secretData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecretData
        {
            get;
        }

        /// <remarks>
        /// <strong></strong>: ). The following limits apply to secret names
        /// for different types of secrets:
        /// - If SecretType is set to Generic, Rds, or Redis, the name cannot start with
        /// `acs\/`.
        /// - If SecretType is set to RAMCredentials, set this parameter to the fixed value
        /// `$Auto`. In this case, KMS automatically generates a secret name that starts with
        /// `acs\/ram\/user\/` and contains the display name of the RAM user.
        /// - If SecretType is set to ECS, the name must start with `acs\/ecs\/`.
        ///
        /// <strong>Property</strong>: secretName: The name of the secret. The name must be unique in the same region.
        /// The name can be up to 192 characters in length and can contain letters, digits,
        /// underscores (_), forward slashes (\/), plus signs (+), equal signs (=), periods
        /// (.), hyphens (-), and at signs (
        /// </remarks>
        [JsiiProperty(name: "secretName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecretName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: versionId: The version number of the initial version. The version number must be unique
        /// within the secret.
        /// The version number can be up to 64 characters in length.
        /// </remarks>
        [JsiiProperty(name: "versionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VersionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the secret.
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

        /// <remarks>
        /// <strong>Property</strong>: dkmsInstanceId: The ID of the dedicated KMS instance.
        /// </remarks>
        [JsiiProperty(name: "dkmsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DkmsInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableAutomaticRotation: Specifies whether to enable automatic rotation. Valid values:
        /// - true: enables automatic rotation.
        /// - false (default): disables automatic rotation.
        /// > This parameter is valid only if SecretType is set to Rds, PolarDB, Redis,
        /// RAMCredentials, or ECS. If SecretType is set to Generic, automatic rotation is
        /// not supported. You can call the [PutSecretValue]() operation to manually rotate
        /// the secret.
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

        /// <remarks>
        /// <strong>Property</strong>: encryptionKeyId: The ID of the key used to encrypt the secret value.
        /// > The key and the secret must be in the same KMS instance. The key must be a
        /// symmetric key.
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

        /// <remarks>
        /// <strong>Property</strong>: extendedConfig: The extended configuration of the secret. This parameter specifies the properties
        /// of the secret of a specific type. The value can be up to 1,024 characters in
        /// length.
        /// - If SecretType is set to Generic, this parameter is ignored.
        /// - If SecretType is set to Rds, you must specify the following parameters in
        /// ExtendedConfig:
        /// - SecretSubType (Required): The subtype of the secret. Valid values:
        /// - SingleUser: Secrets Manager manages the RDS secret in single-account mode. When
        /// the secret is rotated, the password of the specified account is reset to a new
        /// random password.
        /// - DoubleUsers: Secrets Manager manages the RDS secret in double-account mode.
        /// ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
        /// rotated, the password of the account pointed to by ACSPrevious is reset to a new
        /// random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
        /// ACSPrevious point to.
        /// - DBInstanceId (Required): The ID of the RDS instance to which the account
        /// belongs.
        /// - CustomData (Optional): The custom data. The value is a key-value pair in the
        /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
        /// key-value pairs with commas (,). Example: `{"Key1": "v1", "fds":"fdsf"}`. The
        /// default value is `{}`.
        /// - If SecretType is set to Redis, you must specify the following parameters in
        /// ExtendedConfig:
        /// - SecretSubType (Required): The subtype of the secret. Valid values:
        /// - DoubleUsers: Secrets Manager manages the Redis secret in double-account mode.
        /// ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
        /// rotated, the password of the account pointed to by ACSPrevious is reset to a new
        /// random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
        /// ACSPrevious point to.
        /// - AccountName (Required): The database username.
        /// - CloneAccountName (Required): The database username, which is the value of
        /// AccountName with the `_clone` suffix.
        /// - AccountPrivilege (Required): The permissions to access the database.
        /// - InstanceId (Required): The ID of the Redis instance.
        /// - RegionId (Required): The ID of the region where the Redis instance resides.
        /// - CustomData (Optional): The custom data. The value is a key-value pair in the
        /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
        /// key-value pairs with commas (,). Example: `{"Key1": "v1", "fds":"fdsf"}`. The
        /// default value is `{}`.
        /// - If SecretType is set to RAMCredentials, you must specify the following
        /// parameters in ExtendedConfig:
        /// - SecretSubType (Required): The subtype of the secret. The value is
        /// RamUserAccessKey.
        /// - UserName (Required): The name of the RAM user.
        /// - CustomData (Optional): The custom data. The value is a key-value pair in the
        /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
        /// key-value pairs with commas (,). The default value is `{}`.
        /// - If SecretType is set to ECS, you must specify the following parameters in
        /// ExtendedConfig:
        /// - SecretSubType (Required): The subtype of the secret. Valid values:
        /// - Password: an ECS password.
        /// - SSHKey: an ECS SSH key pair.
        /// - RegionId (Required): The ID of the region where the ECS instance resides.
        /// - InstanceId (Required): The ID of the ECS instance.
        /// - CustomData (Optional): The custom data. The value is a key-value pair in the
        /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
        /// key-value pairs with commas (,). The default value is `{}`.
        /// - If SecretType is set to PolarDB, you must specify the following parameters in
        /// ExtendedConfig:
        /// - SecretSubType (Required): The fixed value is DoubleUsers.
        /// - RegionId (Required): The region.
        /// - DBClusterId (Required): The ID of the PolarDB instance.
        /// - DBType (Required): MySQL or PostgreSQL.
        /// - AccountName (Required): The account name.
        /// - CloneAccountName: The value is AccountName_clone.
        /// - AccountType: Only Normal is supported.
        /// - AccountPrivilege: This parameter is available only for MySQL.
        /// - DBName: This parameter is available only for MySQL.
        /// - CustomData (Optional): The custom data. The value is a key-value pair in the
        /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
        /// key-value pairs with commas (,). Example: {"Key1": "v1", "fds":"fdsf"}. The
        /// default value is {}.
        /// > If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS, you must
        /// configure this parameter.
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

        /// <remarks>
        /// <strong>Property</strong>: forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values:
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

        /// <remarks>
        /// <strong></strong>: -.
        ///  - Effect (required): Whether the statement allows or denies permissions. Valid values: Allow, Deny.
        ///  - Principal (required): The entity to which the permissions are granted. Can be the current Alibaba Cloud account, RAM users or roles under the current or other accounts.
        ///  - Action (required): The API actions allowed or denied. Must start with "kms:". For valid actions, see   - Resource (required): Must be "*", representing this KMS secret.
        ///  - Condition (optional): Conditions that limit when the policy is effective. Format: `"Condition": {"condition operator": {"condition key": "condition value"}}`. See documentation for details.
        /// > After granting permissions to RAM users or roles under another Alibaba Cloud account, you must also use RAM to authorize that user or role to use this secret.
        ///
        /// <strong>Property</strong>: policy: The specific content of the credential policy in JSON format. Maximum length is 32768 bytes.
        /// If this parameter is not specified, the default credential policy is used.
        /// The policy content includes:
        /// - Version: The version of the policy. Currently, only version 1 is supported.
        /// - Statement: A list of statements, each containing:
        /// - Sid (optional): A custom statement identifier. Up to 128 characters, including letters, digits, and _\/+=.
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

        /// <remarks>
        /// <strong>Property</strong>: recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
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

        /// <remarks>
        /// <strong>Property</strong>: rotationInterval: The interval for automatic rotation. The value is in the range of 6 hours to
        /// 8,760 hours (365 days).<br>
        /// The value is in the `integer[unit]` format. `integer` indicates the interval.
        /// `unit` indicates the unit of time.<br>
        /// Valid values for unit: d (day), h (hour), m (minute), and s (second). For
        /// example, both 7d and 604,800s indicate a rotation interval of 7 days.<br><br>
        /// > You must specify this parameter if you set EnableAutomaticRotation to true. You
        /// do not need to specify this parameter if you set EnableAutomaticRotation to
        /// false.
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

        /// <remarks>
        /// <strong>Property</strong>: secretDataType: The type of the secret value. Valid values:
        /// - text (default): The secret value is a text string.
        /// - binary: The secret value is a binary string.
        /// > If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS,
        /// SecretDataType must be set to text.
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

        /// <remarks>
        /// <strong>Property</strong>: secretType: The type of the secret. Valid values:
        /// - Generic (default): a generic secret.
        /// - Rds: an RDS secret.
        /// - Redis: a Redis secret.
        /// - RAMCredentials: a RAM secret.
        /// - ECS: an ECS secret.
        /// - PolarDB: a PolarDB secret.
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

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to secret. Max support 20 tags to add during create secret. Each tag with two properties Key and Value, and Key is required.
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

        /// <remarks>
        /// <strong>Property</strong>: versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
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

        /// <summary>Properties for defining a `RosSecret`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSecretProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.RosSecretProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.IRosSecretProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: secretData: The value of the secret. The value can be up to 30,720 bytes (30 KB) in length.
            /// KMS encrypts the secret value with the specified key and stores the encrypted
            /// value in the initial version.
            /// - If SecretType is set to Generic, you can specify a custom secret value.
            /// - If SecretType is set to Rds, the secret value must be in the following format:
            /// `{"Accounts":[{"AccountName":"","AccountPassword":""}]}`. In the format,
            /// `AccountName` specifies the username of the account for the RDS instance and
            /// `AccountPassword` specifies the password of the account.
            /// - If SecretType is set to Redis, set this parameter to `$Auto`.
            /// - If SecretType is set to RAMCredentials, the secret value must be in the
            /// following format: `{"AccessKeys":[{"AccessKeyId":"","AccessKeySecret":""}]}`. In
            /// the format, `AccessKeyId` specifies the AccessKey ID and `AccessKeySecret`
            /// specifies the AccessKey secret. You must specify all AccessKey pairs of the RAM
            /// user.
            /// - If SecretType is set to PolarDB, set this parameter to `$Auto`.
            /// - If SecretType is set to ECS, the secret value must be in one of the following
            /// formats:
            /// - If SecretSubType in the ExtendedConfig parameter is set to Password:
            /// `{"UserName":"","Password": ""}`. In the format, `UserName` specifies the
            /// username used to log on to the ECS instance and `Password` specifies the password
            /// used to log on to the ECS instance.
            /// - If SecretSubType in the ExtendedConfig parameter is set to SSHKey:
            /// `{"UserName":"","PublicKey": "", "PrivateKey": ""}`. In the format, `PublicKey`
            /// specifies the SSH-formatted public key used to log on to the ECS instance and
            /// `PrivateKey` specifies the private key used to log on to the ECS instance.
            /// </remarks>
            [JsiiProperty(name: "secretData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecretData
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong></strong>: ). The following limits apply to secret names
            /// for different types of secrets:
            /// - If SecretType is set to Generic, Rds, or Redis, the name cannot start with
            /// `acs\/`.
            /// - If SecretType is set to RAMCredentials, set this parameter to the fixed value
            /// `$Auto`. In this case, KMS automatically generates a secret name that starts with
            /// `acs\/ram\/user\/` and contains the display name of the RAM user.
            /// - If SecretType is set to ECS, the name must start with `acs\/ecs\/`.
            ///
            /// <strong>Property</strong>: secretName: The name of the secret. The name must be unique in the same region.
            /// The name can be up to 192 characters in length and can contain letters, digits,
            /// underscores (_), forward slashes (\/), plus signs (+), equal signs (=), periods
            /// (.), hyphens (-), and at signs (
            /// </remarks>
            [JsiiProperty(name: "secretName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecretName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: versionId: The version number of the initial version. The version number must be unique
            /// within the secret.
            /// The version number can be up to 64 characters in length.
            /// </remarks>
            [JsiiProperty(name: "versionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VersionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the secret.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dkmsInstanceId: The ID of the dedicated KMS instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dkmsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DkmsInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableAutomaticRotation: Specifies whether to enable automatic rotation. Valid values:
            /// - true: enables automatic rotation.
            /// - false (default): disables automatic rotation.
            /// > This parameter is valid only if SecretType is set to Rds, PolarDB, Redis,
            /// RAMCredentials, or ECS. If SecretType is set to Generic, automatic rotation is
            /// not supported. You can call the [PutSecretValue]() operation to manually rotate
            /// the secret.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableAutomaticRotation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAutomaticRotation
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: encryptionKeyId: The ID of the key used to encrypt the secret value.
            /// > The key and the secret must be in the same KMS instance. The key must be a
            /// symmetric key.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encryptionKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncryptionKeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: extendedConfig: The extended configuration of the secret. This parameter specifies the properties
            /// of the secret of a specific type. The value can be up to 1,024 characters in
            /// length.
            /// - If SecretType is set to Generic, this parameter is ignored.
            /// - If SecretType is set to Rds, you must specify the following parameters in
            /// ExtendedConfig:
            /// - SecretSubType (Required): The subtype of the secret. Valid values:
            /// - SingleUser: Secrets Manager manages the RDS secret in single-account mode. When
            /// the secret is rotated, the password of the specified account is reset to a new
            /// random password.
            /// - DoubleUsers: Secrets Manager manages the RDS secret in double-account mode.
            /// ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
            /// rotated, the password of the account pointed to by ACSPrevious is reset to a new
            /// random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
            /// ACSPrevious point to.
            /// - DBInstanceId (Required): The ID of the RDS instance to which the account
            /// belongs.
            /// - CustomData (Optional): The custom data. The value is a key-value pair in the
            /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
            /// key-value pairs with commas (,). Example: `{"Key1": "v1", "fds":"fdsf"}`. The
            /// default value is `{}`.
            /// - If SecretType is set to Redis, you must specify the following parameters in
            /// ExtendedConfig:
            /// - SecretSubType (Required): The subtype of the secret. Valid values:
            /// - DoubleUsers: Secrets Manager manages the Redis secret in double-account mode.
            /// ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
            /// rotated, the password of the account pointed to by ACSPrevious is reset to a new
            /// random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
            /// ACSPrevious point to.
            /// - AccountName (Required): The database username.
            /// - CloneAccountName (Required): The database username, which is the value of
            /// AccountName with the `_clone` suffix.
            /// - AccountPrivilege (Required): The permissions to access the database.
            /// - InstanceId (Required): The ID of the Redis instance.
            /// - RegionId (Required): The ID of the region where the Redis instance resides.
            /// - CustomData (Optional): The custom data. The value is a key-value pair in the
            /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
            /// key-value pairs with commas (,). Example: `{"Key1": "v1", "fds":"fdsf"}`. The
            /// default value is `{}`.
            /// - If SecretType is set to RAMCredentials, you must specify the following
            /// parameters in ExtendedConfig:
            /// - SecretSubType (Required): The subtype of the secret. The value is
            /// RamUserAccessKey.
            /// - UserName (Required): The name of the RAM user.
            /// - CustomData (Optional): The custom data. The value is a key-value pair in the
            /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
            /// key-value pairs with commas (,). The default value is `{}`.
            /// - If SecretType is set to ECS, you must specify the following parameters in
            /// ExtendedConfig:
            /// - SecretSubType (Required): The subtype of the secret. Valid values:
            /// - Password: an ECS password.
            /// - SSHKey: an ECS SSH key pair.
            /// - RegionId (Required): The ID of the region where the ECS instance resides.
            /// - InstanceId (Required): The ID of the ECS instance.
            /// - CustomData (Optional): The custom data. The value is a key-value pair in the
            /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
            /// key-value pairs with commas (,). The default value is `{}`.
            /// - If SecretType is set to PolarDB, you must specify the following parameters in
            /// ExtendedConfig:
            /// - SecretSubType (Required): The fixed value is DoubleUsers.
            /// - RegionId (Required): The region.
            /// - DBClusterId (Required): The ID of the PolarDB instance.
            /// - DBType (Required): MySQL or PostgreSQL.
            /// - AccountName (Required): The account name.
            /// - CloneAccountName: The value is AccountName_clone.
            /// - AccountType: Only Normal is supported.
            /// - AccountPrivilege: This parameter is available only for MySQL.
            /// - DBName: This parameter is available only for MySQL.
            /// - CustomData (Optional): The custom data. The value is a key-value pair in the
            /// JSON format. You can specify up to 10 key-value pairs. Separate multiple
            /// key-value pairs with commas (,). Example: {"Key1": "v1", "fds":"fdsf"}. The
            /// default value is {}.
            /// > If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS, you must
            /// configure this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "extendedConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ExtendedConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values:
            /// true
            /// false (default value)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "forceDeleteWithoutRecovery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ForceDeleteWithoutRecovery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong></strong>: -.
            ///  - Effect (required): Whether the statement allows or denies permissions. Valid values: Allow, Deny.
            ///  - Principal (required): The entity to which the permissions are granted. Can be the current Alibaba Cloud account, RAM users or roles under the current or other accounts.
            ///  - Action (required): The API actions allowed or denied. Must start with "kms:". For valid actions, see   - Resource (required): Must be "*", representing this KMS secret.
            ///  - Condition (optional): Conditions that limit when the policy is effective. Format: `"Condition": {"condition operator": {"condition key": "condition value"}}`. See documentation for details.
            /// > After granting permissions to RAM users or roles under another Alibaba Cloud account, you must also use RAM to authorize that user or role to use this secret.
            ///
            /// <strong>Property</strong>: policy: The specific content of the credential policy in JSON format. Maximum length is 32768 bytes.
            /// If this parameter is not specified, the default credential policy is used.
            /// The policy content includes:
            /// - Version: The version of the policy. Currently, only version 1 is supported.
            /// - Statement: A list of statements, each containing:
            /// - Sid (optional): A custom statement identifier. Up to 128 characters, including letters, digits, and _\/+=.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Policy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "recoveryWindowInDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RecoveryWindowInDays
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rotationInterval: The interval for automatic rotation. The value is in the range of 6 hours to
            /// 8,760 hours (365 days).<br>
            /// The value is in the `integer[unit]` format. `integer` indicates the interval.
            /// `unit` indicates the unit of time.<br>
            /// Valid values for unit: d (day), h (hour), m (minute), and s (second). For
            /// example, both 7d and 604,800s indicate a rotation interval of 7 days.<br><br>
            /// > You must specify this parameter if you set EnableAutomaticRotation to true. You
            /// do not need to specify this parameter if you set EnableAutomaticRotation to
            /// false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rotationInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RotationInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: secretDataType: The type of the secret value. Valid values:
            /// - text (default): The secret value is a text string.
            /// - binary: The secret value is a binary string.
            /// > If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS,
            /// SecretDataType must be set to text.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secretDataType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecretDataType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: secretType: The type of the secret. Valid values:
            /// - Generic (default): a generic secret.
            /// - Rds: an RDS secret.
            /// - Redis: a Redis secret.
            /// - RAMCredentials: a RAM secret.
            /// - ECS: an ECS secret.
            /// - PolarDB: a PolarDB secret.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secretType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecretType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to secret. Max support 20 tags to add during create secret. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-kms.RosSecret.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Kms.RosSecret.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Kms.RosSecret.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
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
