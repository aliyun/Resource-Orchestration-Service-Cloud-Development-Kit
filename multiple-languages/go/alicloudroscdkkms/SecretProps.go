package alicloudroscdkkms


// Properties for defining a `Secret`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
type SecretProps struct {
	// Property secretData: The value of the secret.
	//
	// The value can be up to 30,720 bytes (30 KB) in length.
	// KMS encrypts the secret value with the specified key and stores the encrypted
	// value in the initial version.
	// - If SecretType is set to Generic, you can specify a custom secret value.
	// - If SecretType is set to Rds, the secret value must be in the following format:
	// `{"Accounts":[{"AccountName":"","AccountPassword":""}]}`. In the format,
	// `AccountName` specifies the username of the account for the RDS instance and
	// `AccountPassword` specifies the password of the account.
	// - If SecretType is set to Redis, set this parameter to `$Auto`.
	// - If SecretType is set to RAMCredentials, the secret value must be in the
	// following format: `{"AccessKeys":[{"AccessKeyId":"","AccessKeySecret":""}]}`. In
	// the format, `AccessKeyId` specifies the AccessKey ID and `AccessKeySecret`
	// specifies the AccessKey secret. You must specify all AccessKey pairs of the RAM
	// user.
	// - If SecretType is set to PolarDB, set this parameter to `$Auto`.
	// - If SecretType is set to ECS, the secret value must be in one of the following
	// formats:
	// - If SecretSubType in the ExtendedConfig parameter is set to Password:
	// `{"UserName":"","Password": ""}`. In the format, `UserName` specifies the
	// username used to log on to the ECS instance and `Password` specifies the password
	// used to log on to the ECS instance.
	// - If SecretSubType in the ExtendedConfig parameter is set to SSHKey:
	// `{"UserName":"","PublicKey": "", "PrivateKey": ""}`. In the format, `PublicKey`
	// specifies the SSH-formatted public key used to log on to the ECS instance and
	// `PrivateKey` specifies the private key used to log on to the ECS instance.
	SecretData interface{} `field:"required" json:"secretData" yaml:"secretData"`
	// Property secretName: The name of the secret.
	//
	// The name must be unique in the same region.
	// The name can be up to 192 characters in length and can contain letters, digits,
	// underscores (_), forward slashes (\/), plus signs (+), equal signs (=), periods
	// (.), hyphens (-), and at signs (@). The following limits apply to secret names
	// for different types of secrets:
	// - If SecretType is set to Generic, Rds, or Redis, the name cannot start with
	// `acs\/`.
	// - If SecretType is set to RAMCredentials, set this parameter to the fixed value
	// `$Auto`. In this case, KMS automatically generates a secret name that starts with
	// `acs\/ram\/user\/` and contains the display name of the RAM user.
	// - If SecretType is set to ECS, the name must start with `acs\/ecs\/`.
	SecretName interface{} `field:"required" json:"secretName" yaml:"secretName"`
	// Property versionId: The version number of the initial version.
	//
	// The version number must be unique
	// within the secret.
	// The version number can be up to 64 characters in length.
	VersionId interface{} `field:"required" json:"versionId" yaml:"versionId"`
	// Property description: The description of the secret.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property dkmsInstanceId: The ID of the dedicated KMS instance.
	DkmsInstanceId interface{} `field:"optional" json:"dkmsInstanceId" yaml:"dkmsInstanceId"`
	// Property enableAutomaticRotation: Specifies whether to enable automatic rotation.
	//
	// Valid values:
	// - true: enables automatic rotation.
	// - false (default): disables automatic rotation.
	// > This parameter is valid only if SecretType is set to Rds, PolarDB, Redis,
	// RAMCredentials, or ECS. If SecretType is set to Generic, automatic rotation is
	// not supported. You can call the [PutSecretValue]() operation to manually rotate
	// the secret.
	EnableAutomaticRotation interface{} `field:"optional" json:"enableAutomaticRotation" yaml:"enableAutomaticRotation"`
	// Property encryptionKeyId: The ID of the key used to encrypt the secret value.
	//
	// > The key and the secret must be in the same KMS instance. The key must be a
	// symmetric key.
	EncryptionKeyId interface{} `field:"optional" json:"encryptionKeyId" yaml:"encryptionKeyId"`
	// Property extendedConfig: The extended configuration of the secret.
	//
	// This parameter specifies the properties
	// of the secret of a specific type. The value can be up to 1,024 characters in
	// length.
	// - If SecretType is set to Generic, this parameter is ignored.
	// - If SecretType is set to Rds, you must specify the following parameters in
	// ExtendedConfig:
	// - SecretSubType (Required): The subtype of the secret. Valid values:
	// - SingleUser: Secrets Manager manages the RDS secret in single-account mode. When
	// the secret is rotated, the password of the specified account is reset to a new
	// random password.
	// - DoubleUsers: Secrets Manager manages the RDS secret in double-account mode.
	// ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
	// rotated, the password of the account pointed to by ACSPrevious is reset to a new
	// random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
	// ACSPrevious point to.
	// - DBInstanceId (Required): The ID of the RDS instance to which the account
	// belongs.
	// - CustomData (Optional): The custom data. The value is a key-value pair in the
	// JSON format. You can specify up to 10 key-value pairs. Separate multiple
	// key-value pairs with commas (,). Example: `{"Key1": "v1", "fds":"fdsf"}`. The
	// default value is `{}`.
	// - If SecretType is set to Redis, you must specify the following parameters in
	// ExtendedConfig:
	// - SecretSubType (Required): The subtype of the secret. Valid values:
	// - DoubleUsers: Secrets Manager manages the Redis secret in double-account mode.
	// ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
	// rotated, the password of the account pointed to by ACSPrevious is reset to a new
	// random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
	// ACSPrevious point to.
	// - AccountName (Required): The database username.
	// - CloneAccountName (Required): The database username, which is the value of
	// AccountName with the `_clone` suffix.
	// - AccountPrivilege (Required): The permissions to access the database.
	// - InstanceId (Required): The ID of the Redis instance.
	// - RegionId (Required): The ID of the region where the Redis instance resides.
	// - CustomData (Optional): The custom data. The value is a key-value pair in the
	// JSON format. You can specify up to 10 key-value pairs. Separate multiple
	// key-value pairs with commas (,). Example: `{"Key1": "v1", "fds":"fdsf"}`. The
	// default value is `{}`.
	// - If SecretType is set to RAMCredentials, you must specify the following
	// parameters in ExtendedConfig:
	// - SecretSubType (Required): The subtype of the secret. The value is
	// RamUserAccessKey.
	// - UserName (Required): The name of the RAM user.
	// - CustomData (Optional): The custom data. The value is a key-value pair in the
	// JSON format. You can specify up to 10 key-value pairs. Separate multiple
	// key-value pairs with commas (,). The default value is `{}`.
	// - If SecretType is set to ECS, you must specify the following parameters in
	// ExtendedConfig:
	// - SecretSubType (Required): The subtype of the secret. Valid values:
	// - Password: an ECS password.
	// - SSHKey: an ECS SSH key pair.
	// - RegionId (Required): The ID of the region where the ECS instance resides.
	// - InstanceId (Required): The ID of the ECS instance.
	// - CustomData (Optional): The custom data. The value is a key-value pair in the
	// JSON format. You can specify up to 10 key-value pairs. Separate multiple
	// key-value pairs with commas (,). The default value is `{}`.
	// - If SecretType is set to PolarDB, you must specify the following parameters in
	// ExtendedConfig:
	// - SecretSubType (Required): The fixed value is DoubleUsers.
	// - RegionId (Required): The region.
	// - DBClusterId (Required): The ID of the PolarDB instance.
	// - DBType (Required): MySQL or PostgreSQL.
	// - AccountName (Required): The account name.
	// - CloneAccountName: The value is AccountName_clone.
	// - AccountType: Only Normal is supported.
	// - AccountPrivilege: This parameter is available only for MySQL.
	// - DBName: This parameter is available only for MySQL.
	// - CustomData (Optional): The custom data. The value is a key-value pair in the
	// JSON format. You can specify up to 10 key-value pairs. Separate multiple
	// key-value pairs with commas (,). Example: {"Key1": "v1", "fds":"fdsf"}. The
	// default value is {}.
	// > If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS, you must
	// configure this parameter.
	ExtendedConfig interface{} `field:"optional" json:"extendedConfig" yaml:"extendedConfig"`
	// Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret.
	//
	// If this parameter is set to true, the secret cannot be recovered. Valid values:
	// true
	// false (default value).
	ForceDeleteWithoutRecovery interface{} `field:"optional" json:"forceDeleteWithoutRecovery" yaml:"forceDeleteWithoutRecovery"`
	// Property policy: The specific content of the credential policy in JSON format.
	//
	// Maximum length is 32768 bytes.
	// If this parameter is not specified, the default credential policy is used.
	// The policy content includes:
	// - Version: The version of the policy. Currently, only version 1 is supported.
	// - Statement: A list of statements, each containing:
	//    - Sid (optional): A custom statement identifier. Up to 128 characters, including letters, digits, and _\/+=.@-.
	//    - Effect (required): Whether the statement allows or denies permissions. Valid values: Allow, Deny.
	//    - Principal (required): The entity to which the permissions are granted. Can be the current Alibaba Cloud account, RAM users or roles under the current or other accounts.
	//    - Action (required): The API actions allowed or denied. Must start with "kms:". For valid actions, see   - Resource (required): Must be "*", representing this KMS secret.
	//    - Condition (optional): Conditions that limit when the policy is effective. Format: `"Condition": {"condition operator": {"condition key": "condition value"}}`. See documentation for details.
	// > After granting permissions to RAM users or roles under another Alibaba Cloud account, you must also use RAM to authorize that user or role to use this secret.
	Policy interface{} `field:"optional" json:"policy" yaml:"policy"`
	// Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it.
	//
	// Default value: 30.
	RecoveryWindowInDays interface{} `field:"optional" json:"recoveryWindowInDays" yaml:"recoveryWindowInDays"`
	// Property rotationInterval: The interval for automatic rotation.
	//
	// The value is in the range of 6 hours to
	// 8,760 hours (365 days).<br>
	// The value is in the `integer[unit]` format. `integer` indicates the interval.
	// `unit` indicates the unit of time.<br>
	// Valid values for unit: d (day), h (hour), m (minute), and s (second). For
	// example, both 7d and 604,800s indicate a rotation interval of 7 days.<br><br>
	// > You must specify this parameter if you set EnableAutomaticRotation to true. You
	// do not need to specify this parameter if you set EnableAutomaticRotation to
	// false.
	RotationInterval interface{} `field:"optional" json:"rotationInterval" yaml:"rotationInterval"`
	// Property secretDataType: The type of the secret value.
	//
	// Valid values:
	// - text (default): The secret value is a text string.
	// - binary: The secret value is a binary string.
	// > If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS,
	// SecretDataType must be set to text.
	SecretDataType interface{} `field:"optional" json:"secretDataType" yaml:"secretDataType"`
	// Property secretType: The type of the secret.
	//
	// Valid values:
	// - Generic (default): a generic secret.
	// - Rds: an RDS secret.
	// - Redis: a Redis secret.
	// - RAMCredentials: a RAM secret.
	// - ECS: an ECS secret.
	// - PolarDB: a PolarDB secret.
	SecretType interface{} `field:"optional" json:"secretType" yaml:"secretType"`
	// Property tags: Tags to attach to secret.
	//
	// Max support 20 tags to add during create secret. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosSecret_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property versionStages: The stage labels that mark the secret version.
	//
	// ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
	VersionStages interface{} `field:"optional" json:"versionStages" yaml:"versionStages"`
}

