package com.aliyun.ros.cdk.kms;

/**
 * Properties for defining a <code>Secret</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T09:55:06.371Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.SecretProps")
@software.amazon.jsii.Jsii.Proxy(SecretProps.Jsii$Proxy.class)
public interface SecretProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property secretData: The value of the secret.
     * <p>
     * The value can be up to 30,720 bytes (30 KB) in length.
     * KMS encrypts the secret value with the specified key and stores the encrypted
     * value in the initial version.
     * <p>
     * <ul>
     * <li>If SecretType is set to Generic, you can specify a custom secret value.</li>
     * <li>If SecretType is set to Rds, the secret value must be in the following format:
     * <code>{"Accounts":[{"AccountName":"","AccountPassword":""}]}</code>. In the format,
     * <code>AccountName</code> specifies the username of the account for the RDS instance and
     * <code>AccountPassword</code> specifies the password of the account.</li>
     * <li>If SecretType is set to Redis, set this parameter to <code>$Auto</code>.</li>
     * <li>If SecretType is set to RAMCredentials, the secret value must be in the
     * following format: <code>{"AccessKeys":[{"AccessKeyId":"","AccessKeySecret":""}]}</code>. In
     * the format, <code>AccessKeyId</code> specifies the AccessKey ID and <code>AccessKeySecret</code>
     * specifies the AccessKey secret. You must specify all AccessKey pairs of the RAM
     * user.</li>
     * <li>If SecretType is set to PolarDB, set this parameter to <code>$Auto</code>.</li>
     * <li>If SecretType is set to ECS, the secret value must be in one of the following
     * formats:</li>
     * <li>If SecretSubType in the ExtendedConfig parameter is set to Password:
     * <code>{"UserName":"","Password": ""}</code>. In the format, <code>UserName</code> specifies the
     * username used to log on to the ECS instance and <code>Password</code> specifies the password
     * used to log on to the ECS instance.</li>
     * <li>If SecretSubType in the ExtendedConfig parameter is set to SSHKey:
     * <code>{"UserName":"","PublicKey": "", "PrivateKey": ""}</code>. In the format, <code>PublicKey</code>
     * specifies the SSH-formatted public key used to log on to the ECS instance and
     * <code>PrivateKey</code> specifies the private key used to log on to the ECS instance.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecretData();

    /**
     * Property secretName: The name of the secret.
     * <p>
     * The name must be unique in the same region.
     * The name can be up to 192 characters in length and can contain letters, digits,
     * underscores (_), forward slashes (/), plus signs (+), equal signs (=), periods
     * (.), hyphens (-), and at signs (&#64;). The following limits apply to secret names
     * for different types of secrets:
     * <p>
     * <ul>
     * <li>If SecretType is set to Generic, Rds, or Redis, the name cannot start with
     * <code>acs\/</code>.</li>
     * <li>If SecretType is set to RAMCredentials, set this parameter to the fixed value
     * <code>$Auto</code>. In this case, KMS automatically generates a secret name that starts with
     * <code>acs\/ram\/user\/</code> and contains the display name of the RAM user.</li>
     * <li>If SecretType is set to ECS, the name must start with <code>acs\/ecs\/</code>.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecretName();

    /**
     * Property versionId: The version number of the initial version.
     * <p>
     * The version number must be unique
     * within the secret.
     * The version number can be up to 64 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVersionId();

    /**
     * Property description: The description of the secret.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property dkmsInstanceId: The ID of the dedicated KMS instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDkmsInstanceId() {
        return null;
    }

    /**
     * Property enableAutomaticRotation: Specifies whether to enable automatic rotation.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>true: enables automatic rotation.</li>
     * <li>false (default): disables automatic rotation.</li>
     * </ul>
     * <p>
     * <blockquote>
     * <p>
     * This parameter is valid only if SecretType is set to Rds, PolarDB, Redis,
     * RAMCredentials, or ECS. If SecretType is set to Generic, automatic rotation is
     * not supported. You can call the <a href="">PutSecretValue</a> operation to manually rotate
     * the secret.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAutomaticRotation() {
        return null;
    }

    /**
     * Property encryptionKeyId: The ID of the key used to encrypt the secret value.
     * <p>
     * <blockquote>
     * <p>
     * The key and the secret must be in the same KMS instance. The key must be a
     * symmetric key.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionKeyId() {
        return null;
    }

    /**
     * Property extendedConfig: The extended configuration of the secret.
     * <p>
     * This parameter specifies the properties
     * of the secret of a specific type. The value can be up to 1,024 characters in
     * length.
     * <p>
     * <ul>
     * <li>If SecretType is set to Generic, this parameter is ignored.</li>
     * <li>If SecretType is set to Rds, you must specify the following parameters in
     * ExtendedConfig:</li>
     * <li>SecretSubType (Required): The subtype of the secret. Valid values:</li>
     * <li>SingleUser: Secrets Manager manages the RDS secret in single-account mode. When
     * the secret is rotated, the password of the specified account is reset to a new
     * random password.</li>
     * <li>DoubleUsers: Secrets Manager manages the RDS secret in double-account mode.
     * ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
     * rotated, the password of the account pointed to by ACSPrevious is reset to a new
     * random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
     * ACSPrevious point to.</li>
     * <li>DBInstanceId (Required): The ID of the RDS instance to which the account
     * belongs.</li>
     * <li>CustomData (Optional): The custom data. The value is a key-value pair in the
     * JSON format. You can specify up to 10 key-value pairs. Separate multiple
     * key-value pairs with commas (,). Example: <code>{"Key1": "v1", "fds":"fdsf"}</code>. The
     * default value is <code>{}</code>.</li>
     * <li>If SecretType is set to Redis, you must specify the following parameters in
     * ExtendedConfig:</li>
     * <li>SecretSubType (Required): The subtype of the secret. Valid values:</li>
     * <li>DoubleUsers: Secrets Manager manages the Redis secret in double-account mode.
     * ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
     * rotated, the password of the account pointed to by ACSPrevious is reset to a new
     * random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
     * ACSPrevious point to.</li>
     * <li>AccountName (Required): The database username.</li>
     * <li>CloneAccountName (Required): The database username, which is the value of
     * AccountName with the <code>_clone</code> suffix.</li>
     * <li>AccountPrivilege (Required): The permissions to access the database.</li>
     * <li>InstanceId (Required): The ID of the Redis instance.</li>
     * <li>RegionId (Required): The ID of the region where the Redis instance resides.</li>
     * <li>CustomData (Optional): The custom data. The value is a key-value pair in the
     * JSON format. You can specify up to 10 key-value pairs. Separate multiple
     * key-value pairs with commas (,). Example: <code>{"Key1": "v1", "fds":"fdsf"}</code>. The
     * default value is <code>{}</code>.</li>
     * <li>If SecretType is set to RAMCredentials, you must specify the following
     * parameters in ExtendedConfig:</li>
     * <li>SecretSubType (Required): The subtype of the secret. The value is
     * RamUserAccessKey.</li>
     * <li>UserName (Required): The name of the RAM user.</li>
     * <li>CustomData (Optional): The custom data. The value is a key-value pair in the
     * JSON format. You can specify up to 10 key-value pairs. Separate multiple
     * key-value pairs with commas (,). The default value is <code>{}</code>.</li>
     * <li>If SecretType is set to ECS, you must specify the following parameters in
     * ExtendedConfig:</li>
     * <li>SecretSubType (Required): The subtype of the secret. Valid values:</li>
     * <li>Password: an ECS password.</li>
     * <li>SSHKey: an ECS SSH key pair.</li>
     * <li>RegionId (Required): The ID of the region where the ECS instance resides.</li>
     * <li>InstanceId (Required): The ID of the ECS instance.</li>
     * <li>CustomData (Optional): The custom data. The value is a key-value pair in the
     * JSON format. You can specify up to 10 key-value pairs. Separate multiple
     * key-value pairs with commas (,). The default value is <code>{}</code>.</li>
     * <li>If SecretType is set to PolarDB, you must specify the following parameters in
     * ExtendedConfig:</li>
     * <li>SecretSubType (Required): The fixed value is DoubleUsers.</li>
     * <li>RegionId (Required): The region.</li>
     * <li>DBClusterId (Required): The ID of the PolarDB instance.</li>
     * <li>DBType (Required): MySQL or PostgreSQL.</li>
     * <li>AccountName (Required): The account name.</li>
     * <li>CloneAccountName: The value is AccountName_clone.</li>
     * <li>AccountType: Only Normal is supported.</li>
     * <li>AccountPrivilege: This parameter is available only for MySQL.</li>
     * <li>DBName: This parameter is available only for MySQL.</li>
     * <li>CustomData (Optional): The custom data. The value is a key-value pair in the
     * JSON format. You can specify up to 10 key-value pairs. Separate multiple
     * key-value pairs with commas (,). Example: {"Key1": "v1", "fds":"fdsf"}. The
     * default value is {}.</li>
     * </ul>
     * <p>
     * <blockquote>
     * <p>
     * If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS, you must
     * configure this parameter.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExtendedConfig() {
        return null;
    }

    /**
     * Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret.
     * <p>
     * If this parameter is set to true, the secret cannot be recovered. Valid values:
     * true
     * false (default value)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getForceDeleteWithoutRecovery() {
        return null;
    }

    /**
     * Property policy: The specific content of the credential policy in JSON format.
     * <p>
     * Maximum length is 32768 bytes.
     * If this parameter is not specified, the default credential policy is used.
     * The policy content includes:
     * <p>
     * <ul>
     * <li>Version: The version of the policy. Currently, only version 1 is supported.</li>
     * <li>Statement: A list of statements, each containing:
     * <p>
     * <ul>
     * <li>Sid (optional): A custom statement identifier. Up to 128 characters, including letters, digits, and _/+=.&#64;-.</li>
     * <li>Effect (required): Whether the statement allows or denies permissions. Valid values: Allow, Deny.</li>
     * <li>Principal (required): The entity to which the permissions are granted. Can be the current Alibaba Cloud account, RAM users or roles under the current or other accounts.</li>
     * <li>Action (required): The API actions allowed or denied. Must start with "kms:". For valid actions, see   - Resource (required): Must be "*", representing this KMS secret.</li>
     * <li>Condition (optional): Conditions that limit when the policy is effective. Format: <code>"Condition": {"condition operator": {"condition key": "condition value"}}</code>. See documentation for details.</li>
     * </ul></li>
     * </ul>
     * <p>
     * <blockquote>
     * <p>
     * After granting permissions to RAM users or roles under another Alibaba Cloud account, you must also use RAM to authorize that user or role to use this secret.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicy() {
        return null;
    }

    /**
     * Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it.
     * <p>
     * Default value: 30
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRecoveryWindowInDays() {
        return null;
    }

    /**
     * Property rotationInterval: The interval for automatic rotation.
     * <p>
     * The value is in the range of 6 hours to
     * 8,760 hours (365 days).<br>
     * The value is in the <code>integer[unit]</code> format. <code>integer</code> indicates the interval.
     * <code>unit</code> indicates the unit of time.<br>
     * Valid values for unit: d (day), h (hour), m (minute), and s (second). For
     * example, both 7d and 604,800s indicate a rotation interval of 7 days.<br><br>
     * <p>
     * <blockquote>
     * <p>
     * You must specify this parameter if you set EnableAutomaticRotation to true. You
     * do not need to specify this parameter if you set EnableAutomaticRotation to
     * false.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRotationInterval() {
        return null;
    }

    /**
     * Property secretDataType: The type of the secret value.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>text (default): The secret value is a text string.</li>
     * <li>binary: The secret value is a binary string.</li>
     * </ul>
     * <p>
     * <blockquote>
     * <p>
     * If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS,
     * SecretDataType must be set to text.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecretDataType() {
        return null;
    }

    /**
     * Property secretType: The type of the secret.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Generic (default): a generic secret.</li>
     * <li>Rds: an RDS secret.</li>
     * <li>Redis: a Redis secret.</li>
     * <li>RAMCredentials: a RAM secret.</li>
     * <li>ECS: an ECS secret.</li>
     * <li>PolarDB: a PolarDB secret.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecretType() {
        return null;
    }

    /**
     * Property tags: Tags to attach to secret.
     * <p>
     * Max support 20 tags to add during create secret. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.kms.RosSecret.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property versionStages: The stage labels that mark the secret version.
     * <p>
     * ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVersionStages() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SecretProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SecretProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SecretProps> {
        java.lang.Object secretData;
        java.lang.Object secretName;
        java.lang.Object versionId;
        java.lang.Object description;
        java.lang.Object dkmsInstanceId;
        java.lang.Object enableAutomaticRotation;
        java.lang.Object encryptionKeyId;
        java.lang.Object extendedConfig;
        java.lang.Object forceDeleteWithoutRecovery;
        java.lang.Object policy;
        java.lang.Object recoveryWindowInDays;
        java.lang.Object rotationInterval;
        java.lang.Object secretDataType;
        java.lang.Object secretType;
        java.util.List<com.aliyun.ros.cdk.kms.RosSecret.TagsProperty> tags;
        java.lang.Object versionStages;

        /**
         * Sets the value of {@link SecretProps#getSecretData}
         * @param secretData Property secretData: The value of the secret. This parameter is required.
         *                   The value can be up to 30,720 bytes (30 KB) in length.
         *                   KMS encrypts the secret value with the specified key and stores the encrypted
         *                   value in the initial version.
         *                   <p>
         *                   <ul>
         *                   <li>If SecretType is set to Generic, you can specify a custom secret value.</li>
         *                   <li>If SecretType is set to Rds, the secret value must be in the following format:
         *                   <code>{"Accounts":[{"AccountName":"","AccountPassword":""}]}</code>. In the format,
         *                   <code>AccountName</code> specifies the username of the account for the RDS instance and
         *                   <code>AccountPassword</code> specifies the password of the account.</li>
         *                   <li>If SecretType is set to Redis, set this parameter to <code>$Auto</code>.</li>
         *                   <li>If SecretType is set to RAMCredentials, the secret value must be in the
         *                   following format: <code>{"AccessKeys":[{"AccessKeyId":"","AccessKeySecret":""}]}</code>. In
         *                   the format, <code>AccessKeyId</code> specifies the AccessKey ID and <code>AccessKeySecret</code>
         *                   specifies the AccessKey secret. You must specify all AccessKey pairs of the RAM
         *                   user.</li>
         *                   <li>If SecretType is set to PolarDB, set this parameter to <code>$Auto</code>.</li>
         *                   <li>If SecretType is set to ECS, the secret value must be in one of the following
         *                   formats:</li>
         *                   <li>If SecretSubType in the ExtendedConfig parameter is set to Password:
         *                   <code>{"UserName":"","Password": ""}</code>. In the format, <code>UserName</code> specifies the
         *                   username used to log on to the ECS instance and <code>Password</code> specifies the password
         *                   used to log on to the ECS instance.</li>
         *                   <li>If SecretSubType in the ExtendedConfig parameter is set to SSHKey:
         *                   <code>{"UserName":"","PublicKey": "", "PrivateKey": ""}</code>. In the format, <code>PublicKey</code>
         *                   specifies the SSH-formatted public key used to log on to the ECS instance and
         *                   <code>PrivateKey</code> specifies the private key used to log on to the ECS instance.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder secretData(java.lang.String secretData) {
            this.secretData = secretData;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretData}
         * @param secretData Property secretData: The value of the secret. This parameter is required.
         *                   The value can be up to 30,720 bytes (30 KB) in length.
         *                   KMS encrypts the secret value with the specified key and stores the encrypted
         *                   value in the initial version.
         *                   <p>
         *                   <ul>
         *                   <li>If SecretType is set to Generic, you can specify a custom secret value.</li>
         *                   <li>If SecretType is set to Rds, the secret value must be in the following format:
         *                   <code>{"Accounts":[{"AccountName":"","AccountPassword":""}]}</code>. In the format,
         *                   <code>AccountName</code> specifies the username of the account for the RDS instance and
         *                   <code>AccountPassword</code> specifies the password of the account.</li>
         *                   <li>If SecretType is set to Redis, set this parameter to <code>$Auto</code>.</li>
         *                   <li>If SecretType is set to RAMCredentials, the secret value must be in the
         *                   following format: <code>{"AccessKeys":[{"AccessKeyId":"","AccessKeySecret":""}]}</code>. In
         *                   the format, <code>AccessKeyId</code> specifies the AccessKey ID and <code>AccessKeySecret</code>
         *                   specifies the AccessKey secret. You must specify all AccessKey pairs of the RAM
         *                   user.</li>
         *                   <li>If SecretType is set to PolarDB, set this parameter to <code>$Auto</code>.</li>
         *                   <li>If SecretType is set to ECS, the secret value must be in one of the following
         *                   formats:</li>
         *                   <li>If SecretSubType in the ExtendedConfig parameter is set to Password:
         *                   <code>{"UserName":"","Password": ""}</code>. In the format, <code>UserName</code> specifies the
         *                   username used to log on to the ECS instance and <code>Password</code> specifies the password
         *                   used to log on to the ECS instance.</li>
         *                   <li>If SecretSubType in the ExtendedConfig parameter is set to SSHKey:
         *                   <code>{"UserName":"","PublicKey": "", "PrivateKey": ""}</code>. In the format, <code>PublicKey</code>
         *                   specifies the SSH-formatted public key used to log on to the ECS instance and
         *                   <code>PrivateKey</code> specifies the private key used to log on to the ECS instance.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder secretData(com.aliyun.ros.cdk.core.IResolvable secretData) {
            this.secretData = secretData;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretName}
         * @param secretName Property secretName: The name of the secret. This parameter is required.
         *                   The name must be unique in the same region.
         *                   The name can be up to 192 characters in length and can contain letters, digits,
         *                   underscores (_), forward slashes (/), plus signs (+), equal signs (=), periods
         *                   (.), hyphens (-), and at signs (&#64;). The following limits apply to secret names
         *                   for different types of secrets:
         *                   <p>
         *                   <ul>
         *                   <li>If SecretType is set to Generic, Rds, or Redis, the name cannot start with
         *                   <code>acs\/</code>.</li>
         *                   <li>If SecretType is set to RAMCredentials, set this parameter to the fixed value
         *                   <code>$Auto</code>. In this case, KMS automatically generates a secret name that starts with
         *                   <code>acs\/ram\/user\/</code> and contains the display name of the RAM user.</li>
         *                   <li>If SecretType is set to ECS, the name must start with <code>acs\/ecs\/</code>.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder secretName(java.lang.String secretName) {
            this.secretName = secretName;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretName}
         * @param secretName Property secretName: The name of the secret. This parameter is required.
         *                   The name must be unique in the same region.
         *                   The name can be up to 192 characters in length and can contain letters, digits,
         *                   underscores (_), forward slashes (/), plus signs (+), equal signs (=), periods
         *                   (.), hyphens (-), and at signs (&#64;). The following limits apply to secret names
         *                   for different types of secrets:
         *                   <p>
         *                   <ul>
         *                   <li>If SecretType is set to Generic, Rds, or Redis, the name cannot start with
         *                   <code>acs\/</code>.</li>
         *                   <li>If SecretType is set to RAMCredentials, set this parameter to the fixed value
         *                   <code>$Auto</code>. In this case, KMS automatically generates a secret name that starts with
         *                   <code>acs\/ram\/user\/</code> and contains the display name of the RAM user.</li>
         *                   <li>If SecretType is set to ECS, the name must start with <code>acs\/ecs\/</code>.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder secretName(com.aliyun.ros.cdk.core.IResolvable secretName) {
            this.secretName = secretName;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getVersionId}
         * @param versionId Property versionId: The version number of the initial version. This parameter is required.
         *                  The version number must be unique
         *                  within the secret.
         *                  The version number can be up to 64 characters in length.
         * @return {@code this}
         */
        public Builder versionId(java.lang.String versionId) {
            this.versionId = versionId;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getVersionId}
         * @param versionId Property versionId: The version number of the initial version. This parameter is required.
         *                  The version number must be unique
         *                  within the secret.
         *                  The version number can be up to 64 characters in length.
         * @return {@code this}
         */
        public Builder versionId(com.aliyun.ros.cdk.core.IResolvable versionId) {
            this.versionId = versionId;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getDescription}
         * @param description Property description: The description of the secret.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getDescription}
         * @param description Property description: The description of the secret.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getDkmsInstanceId}
         * @param dkmsInstanceId Property dkmsInstanceId: The ID of the dedicated KMS instance.
         * @return {@code this}
         */
        public Builder dkmsInstanceId(java.lang.String dkmsInstanceId) {
            this.dkmsInstanceId = dkmsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getDkmsInstanceId}
         * @param dkmsInstanceId Property dkmsInstanceId: The ID of the dedicated KMS instance.
         * @return {@code this}
         */
        public Builder dkmsInstanceId(com.aliyun.ros.cdk.core.IResolvable dkmsInstanceId) {
            this.dkmsInstanceId = dkmsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getEnableAutomaticRotation}
         * @param enableAutomaticRotation Property enableAutomaticRotation: Specifies whether to enable automatic rotation.
         *                                Valid values:
         *                                <p>
         *                                <ul>
         *                                <li>true: enables automatic rotation.</li>
         *                                <li>false (default): disables automatic rotation.</li>
         *                                </ul>
         *                                <p>
         *                                <blockquote>
         *                                <p>
         *                                This parameter is valid only if SecretType is set to Rds, PolarDB, Redis,
         *                                RAMCredentials, or ECS. If SecretType is set to Generic, automatic rotation is
         *                                not supported. You can call the <a href="">PutSecretValue</a> operation to manually rotate
         *                                the secret.
         *                                <p>
         *                                </blockquote>
         * @return {@code this}
         */
        public Builder enableAutomaticRotation(java.lang.Boolean enableAutomaticRotation) {
            this.enableAutomaticRotation = enableAutomaticRotation;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getEnableAutomaticRotation}
         * @param enableAutomaticRotation Property enableAutomaticRotation: Specifies whether to enable automatic rotation.
         *                                Valid values:
         *                                <p>
         *                                <ul>
         *                                <li>true: enables automatic rotation.</li>
         *                                <li>false (default): disables automatic rotation.</li>
         *                                </ul>
         *                                <p>
         *                                <blockquote>
         *                                <p>
         *                                This parameter is valid only if SecretType is set to Rds, PolarDB, Redis,
         *                                RAMCredentials, or ECS. If SecretType is set to Generic, automatic rotation is
         *                                not supported. You can call the <a href="">PutSecretValue</a> operation to manually rotate
         *                                the secret.
         *                                <p>
         *                                </blockquote>
         * @return {@code this}
         */
        public Builder enableAutomaticRotation(com.aliyun.ros.cdk.core.IResolvable enableAutomaticRotation) {
            this.enableAutomaticRotation = enableAutomaticRotation;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getEncryptionKeyId}
         * @param encryptionKeyId Property encryptionKeyId: The ID of the key used to encrypt the secret value.
         *                        <blockquote>
         *                        <p>
         *                        The key and the secret must be in the same KMS instance. The key must be a
         *                        symmetric key.
         *                        <p>
         *                        </blockquote>
         * @return {@code this}
         */
        public Builder encryptionKeyId(java.lang.String encryptionKeyId) {
            this.encryptionKeyId = encryptionKeyId;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getEncryptionKeyId}
         * @param encryptionKeyId Property encryptionKeyId: The ID of the key used to encrypt the secret value.
         *                        <blockquote>
         *                        <p>
         *                        The key and the secret must be in the same KMS instance. The key must be a
         *                        symmetric key.
         *                        <p>
         *                        </blockquote>
         * @return {@code this}
         */
        public Builder encryptionKeyId(com.aliyun.ros.cdk.core.IResolvable encryptionKeyId) {
            this.encryptionKeyId = encryptionKeyId;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getExtendedConfig}
         * @param extendedConfig Property extendedConfig: The extended configuration of the secret.
         *                       This parameter specifies the properties
         *                       of the secret of a specific type. The value can be up to 1,024 characters in
         *                       length.
         *                       <p>
         *                       <ul>
         *                       <li>If SecretType is set to Generic, this parameter is ignored.</li>
         *                       <li>If SecretType is set to Rds, you must specify the following parameters in
         *                       ExtendedConfig:</li>
         *                       <li>SecretSubType (Required): The subtype of the secret. Valid values:</li>
         *                       <li>SingleUser: Secrets Manager manages the RDS secret in single-account mode. When
         *                       the secret is rotated, the password of the specified account is reset to a new
         *                       random password.</li>
         *                       <li>DoubleUsers: Secrets Manager manages the RDS secret in double-account mode.
         *                       ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
         *                       rotated, the password of the account pointed to by ACSPrevious is reset to a new
         *                       random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
         *                       ACSPrevious point to.</li>
         *                       <li>DBInstanceId (Required): The ID of the RDS instance to which the account
         *                       belongs.</li>
         *                       <li>CustomData (Optional): The custom data. The value is a key-value pair in the
         *                       JSON format. You can specify up to 10 key-value pairs. Separate multiple
         *                       key-value pairs with commas (,). Example: <code>{"Key1": "v1", "fds":"fdsf"}</code>. The
         *                       default value is <code>{}</code>.</li>
         *                       <li>If SecretType is set to Redis, you must specify the following parameters in
         *                       ExtendedConfig:</li>
         *                       <li>SecretSubType (Required): The subtype of the secret. Valid values:</li>
         *                       <li>DoubleUsers: Secrets Manager manages the Redis secret in double-account mode.
         *                       ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
         *                       rotated, the password of the account pointed to by ACSPrevious is reset to a new
         *                       random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
         *                       ACSPrevious point to.</li>
         *                       <li>AccountName (Required): The database username.</li>
         *                       <li>CloneAccountName (Required): The database username, which is the value of
         *                       AccountName with the <code>_clone</code> suffix.</li>
         *                       <li>AccountPrivilege (Required): The permissions to access the database.</li>
         *                       <li>InstanceId (Required): The ID of the Redis instance.</li>
         *                       <li>RegionId (Required): The ID of the region where the Redis instance resides.</li>
         *                       <li>CustomData (Optional): The custom data. The value is a key-value pair in the
         *                       JSON format. You can specify up to 10 key-value pairs. Separate multiple
         *                       key-value pairs with commas (,). Example: <code>{"Key1": "v1", "fds":"fdsf"}</code>. The
         *                       default value is <code>{}</code>.</li>
         *                       <li>If SecretType is set to RAMCredentials, you must specify the following
         *                       parameters in ExtendedConfig:</li>
         *                       <li>SecretSubType (Required): The subtype of the secret. The value is
         *                       RamUserAccessKey.</li>
         *                       <li>UserName (Required): The name of the RAM user.</li>
         *                       <li>CustomData (Optional): The custom data. The value is a key-value pair in the
         *                       JSON format. You can specify up to 10 key-value pairs. Separate multiple
         *                       key-value pairs with commas (,). The default value is <code>{}</code>.</li>
         *                       <li>If SecretType is set to ECS, you must specify the following parameters in
         *                       ExtendedConfig:</li>
         *                       <li>SecretSubType (Required): The subtype of the secret. Valid values:</li>
         *                       <li>Password: an ECS password.</li>
         *                       <li>SSHKey: an ECS SSH key pair.</li>
         *                       <li>RegionId (Required): The ID of the region where the ECS instance resides.</li>
         *                       <li>InstanceId (Required): The ID of the ECS instance.</li>
         *                       <li>CustomData (Optional): The custom data. The value is a key-value pair in the
         *                       JSON format. You can specify up to 10 key-value pairs. Separate multiple
         *                       key-value pairs with commas (,). The default value is <code>{}</code>.</li>
         *                       <li>If SecretType is set to PolarDB, you must specify the following parameters in
         *                       ExtendedConfig:</li>
         *                       <li>SecretSubType (Required): The fixed value is DoubleUsers.</li>
         *                       <li>RegionId (Required): The region.</li>
         *                       <li>DBClusterId (Required): The ID of the PolarDB instance.</li>
         *                       <li>DBType (Required): MySQL or PostgreSQL.</li>
         *                       <li>AccountName (Required): The account name.</li>
         *                       <li>CloneAccountName: The value is AccountName_clone.</li>
         *                       <li>AccountType: Only Normal is supported.</li>
         *                       <li>AccountPrivilege: This parameter is available only for MySQL.</li>
         *                       <li>DBName: This parameter is available only for MySQL.</li>
         *                       <li>CustomData (Optional): The custom data. The value is a key-value pair in the
         *                       JSON format. You can specify up to 10 key-value pairs. Separate multiple
         *                       key-value pairs with commas (,). Example: {"Key1": "v1", "fds":"fdsf"}. The
         *                       default value is {}.</li>
         *                       </ul>
         *                       <p>
         *                       <blockquote>
         *                       <p>
         *                       If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS, you must
         *                       configure this parameter.
         *                       <p>
         *                       </blockquote>
         * @return {@code this}
         */
        public Builder extendedConfig(com.aliyun.ros.cdk.core.IResolvable extendedConfig) {
            this.extendedConfig = extendedConfig;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getExtendedConfig}
         * @param extendedConfig Property extendedConfig: The extended configuration of the secret.
         *                       This parameter specifies the properties
         *                       of the secret of a specific type. The value can be up to 1,024 characters in
         *                       length.
         *                       <p>
         *                       <ul>
         *                       <li>If SecretType is set to Generic, this parameter is ignored.</li>
         *                       <li>If SecretType is set to Rds, you must specify the following parameters in
         *                       ExtendedConfig:</li>
         *                       <li>SecretSubType (Required): The subtype of the secret. Valid values:</li>
         *                       <li>SingleUser: Secrets Manager manages the RDS secret in single-account mode. When
         *                       the secret is rotated, the password of the specified account is reset to a new
         *                       random password.</li>
         *                       <li>DoubleUsers: Secrets Manager manages the RDS secret in double-account mode.
         *                       ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
         *                       rotated, the password of the account pointed to by ACSPrevious is reset to a new
         *                       random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
         *                       ACSPrevious point to.</li>
         *                       <li>DBInstanceId (Required): The ID of the RDS instance to which the account
         *                       belongs.</li>
         *                       <li>CustomData (Optional): The custom data. The value is a key-value pair in the
         *                       JSON format. You can specify up to 10 key-value pairs. Separate multiple
         *                       key-value pairs with commas (,). Example: <code>{"Key1": "v1", "fds":"fdsf"}</code>. The
         *                       default value is <code>{}</code>.</li>
         *                       <li>If SecretType is set to Redis, you must specify the following parameters in
         *                       ExtendedConfig:</li>
         *                       <li>SecretSubType (Required): The subtype of the secret. Valid values:</li>
         *                       <li>DoubleUsers: Secrets Manager manages the Redis secret in double-account mode.
         *                       ACSCurrent and ACSPrevious point to one of the accounts. When the secret is
         *                       rotated, the password of the account pointed to by ACSPrevious is reset to a new
         *                       random password. Then, Secrets Manager swaps the accounts that ACSCurrent and
         *                       ACSPrevious point to.</li>
         *                       <li>AccountName (Required): The database username.</li>
         *                       <li>CloneAccountName (Required): The database username, which is the value of
         *                       AccountName with the <code>_clone</code> suffix.</li>
         *                       <li>AccountPrivilege (Required): The permissions to access the database.</li>
         *                       <li>InstanceId (Required): The ID of the Redis instance.</li>
         *                       <li>RegionId (Required): The ID of the region where the Redis instance resides.</li>
         *                       <li>CustomData (Optional): The custom data. The value is a key-value pair in the
         *                       JSON format. You can specify up to 10 key-value pairs. Separate multiple
         *                       key-value pairs with commas (,). Example: <code>{"Key1": "v1", "fds":"fdsf"}</code>. The
         *                       default value is <code>{}</code>.</li>
         *                       <li>If SecretType is set to RAMCredentials, you must specify the following
         *                       parameters in ExtendedConfig:</li>
         *                       <li>SecretSubType (Required): The subtype of the secret. The value is
         *                       RamUserAccessKey.</li>
         *                       <li>UserName (Required): The name of the RAM user.</li>
         *                       <li>CustomData (Optional): The custom data. The value is a key-value pair in the
         *                       JSON format. You can specify up to 10 key-value pairs. Separate multiple
         *                       key-value pairs with commas (,). The default value is <code>{}</code>.</li>
         *                       <li>If SecretType is set to ECS, you must specify the following parameters in
         *                       ExtendedConfig:</li>
         *                       <li>SecretSubType (Required): The subtype of the secret. Valid values:</li>
         *                       <li>Password: an ECS password.</li>
         *                       <li>SSHKey: an ECS SSH key pair.</li>
         *                       <li>RegionId (Required): The ID of the region where the ECS instance resides.</li>
         *                       <li>InstanceId (Required): The ID of the ECS instance.</li>
         *                       <li>CustomData (Optional): The custom data. The value is a key-value pair in the
         *                       JSON format. You can specify up to 10 key-value pairs. Separate multiple
         *                       key-value pairs with commas (,). The default value is <code>{}</code>.</li>
         *                       <li>If SecretType is set to PolarDB, you must specify the following parameters in
         *                       ExtendedConfig:</li>
         *                       <li>SecretSubType (Required): The fixed value is DoubleUsers.</li>
         *                       <li>RegionId (Required): The region.</li>
         *                       <li>DBClusterId (Required): The ID of the PolarDB instance.</li>
         *                       <li>DBType (Required): MySQL or PostgreSQL.</li>
         *                       <li>AccountName (Required): The account name.</li>
         *                       <li>CloneAccountName: The value is AccountName_clone.</li>
         *                       <li>AccountType: Only Normal is supported.</li>
         *                       <li>AccountPrivilege: This parameter is available only for MySQL.</li>
         *                       <li>DBName: This parameter is available only for MySQL.</li>
         *                       <li>CustomData (Optional): The custom data. The value is a key-value pair in the
         *                       JSON format. You can specify up to 10 key-value pairs. Separate multiple
         *                       key-value pairs with commas (,). Example: {"Key1": "v1", "fds":"fdsf"}. The
         *                       default value is {}.</li>
         *                       </ul>
         *                       <p>
         *                       <blockquote>
         *                       <p>
         *                       If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS, you must
         *                       configure this parameter.
         *                       <p>
         *                       </blockquote>
         * @return {@code this}
         */
        public Builder extendedConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> extendedConfig) {
            this.extendedConfig = extendedConfig;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getForceDeleteWithoutRecovery}
         * @param forceDeleteWithoutRecovery Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret.
         *                                   If this parameter is set to true, the secret cannot be recovered. Valid values:
         *                                   true
         *                                   false (default value)
         * @return {@code this}
         */
        public Builder forceDeleteWithoutRecovery(java.lang.Boolean forceDeleteWithoutRecovery) {
            this.forceDeleteWithoutRecovery = forceDeleteWithoutRecovery;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getForceDeleteWithoutRecovery}
         * @param forceDeleteWithoutRecovery Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret.
         *                                   If this parameter is set to true, the secret cannot be recovered. Valid values:
         *                                   true
         *                                   false (default value)
         * @return {@code this}
         */
        public Builder forceDeleteWithoutRecovery(com.aliyun.ros.cdk.core.IResolvable forceDeleteWithoutRecovery) {
            this.forceDeleteWithoutRecovery = forceDeleteWithoutRecovery;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getPolicy}
         * @param policy Property policy: The specific content of the credential policy in JSON format.
         *               Maximum length is 32768 bytes.
         *               If this parameter is not specified, the default credential policy is used.
         *               The policy content includes:
         *               <p>
         *               <ul>
         *               <li>Version: The version of the policy. Currently, only version 1 is supported.</li>
         *               <li>Statement: A list of statements, each containing:
         *               <p>
         *               <ul>
         *               <li>Sid (optional): A custom statement identifier. Up to 128 characters, including letters, digits, and _/+=.&#64;-.</li>
         *               <li>Effect (required): Whether the statement allows or denies permissions. Valid values: Allow, Deny.</li>
         *               <li>Principal (required): The entity to which the permissions are granted. Can be the current Alibaba Cloud account, RAM users or roles under the current or other accounts.</li>
         *               <li>Action (required): The API actions allowed or denied. Must start with "kms:". For valid actions, see   - Resource (required): Must be "*", representing this KMS secret.</li>
         *               <li>Condition (optional): Conditions that limit when the policy is effective. Format: <code>"Condition": {"condition operator": {"condition key": "condition value"}}</code>. See documentation for details.</li>
         *               </ul></li>
         *               </ul>
         *               <p>
         *               <blockquote>
         *               <p>
         *               After granting permissions to RAM users or roles under another Alibaba Cloud account, you must also use RAM to authorize that user or role to use this secret.
         *               <p>
         *               </blockquote>
         * @return {@code this}
         */
        public Builder policy(com.aliyun.ros.cdk.core.IResolvable policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getPolicy}
         * @param policy Property policy: The specific content of the credential policy in JSON format.
         *               Maximum length is 32768 bytes.
         *               If this parameter is not specified, the default credential policy is used.
         *               The policy content includes:
         *               <p>
         *               <ul>
         *               <li>Version: The version of the policy. Currently, only version 1 is supported.</li>
         *               <li>Statement: A list of statements, each containing:
         *               <p>
         *               <ul>
         *               <li>Sid (optional): A custom statement identifier. Up to 128 characters, including letters, digits, and _/+=.&#64;-.</li>
         *               <li>Effect (required): Whether the statement allows or denies permissions. Valid values: Allow, Deny.</li>
         *               <li>Principal (required): The entity to which the permissions are granted. Can be the current Alibaba Cloud account, RAM users or roles under the current or other accounts.</li>
         *               <li>Action (required): The API actions allowed or denied. Must start with "kms:". For valid actions, see   - Resource (required): Must be "*", representing this KMS secret.</li>
         *               <li>Condition (optional): Conditions that limit when the policy is effective. Format: <code>"Condition": {"condition operator": {"condition key": "condition value"}}</code>. See documentation for details.</li>
         *               </ul></li>
         *               </ul>
         *               <p>
         *               <blockquote>
         *               <p>
         *               After granting permissions to RAM users or roles under another Alibaba Cloud account, you must also use RAM to authorize that user or role to use this secret.
         *               <p>
         *               </blockquote>
         * @return {@code this}
         */
        public Builder policy(java.util.Map<java.lang.String, ? extends java.lang.Object> policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getRecoveryWindowInDays}
         * @param recoveryWindowInDays Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it.
         *                             Default value: 30
         * @return {@code this}
         */
        public Builder recoveryWindowInDays(java.lang.Number recoveryWindowInDays) {
            this.recoveryWindowInDays = recoveryWindowInDays;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getRecoveryWindowInDays}
         * @param recoveryWindowInDays Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it.
         *                             Default value: 30
         * @return {@code this}
         */
        public Builder recoveryWindowInDays(com.aliyun.ros.cdk.core.IResolvable recoveryWindowInDays) {
            this.recoveryWindowInDays = recoveryWindowInDays;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getRotationInterval}
         * @param rotationInterval Property rotationInterval: The interval for automatic rotation.
         *                         The value is in the range of 6 hours to
         *                         8,760 hours (365 days).<br>
         *                         The value is in the <code>integer[unit]</code> format. <code>integer</code> indicates the interval.
         *                         <code>unit</code> indicates the unit of time.<br>
         *                         Valid values for unit: d (day), h (hour), m (minute), and s (second). For
         *                         example, both 7d and 604,800s indicate a rotation interval of 7 days.<br><br>
         *                         <p>
         *                         <blockquote>
         *                         <p>
         *                         You must specify this parameter if you set EnableAutomaticRotation to true. You
         *                         do not need to specify this parameter if you set EnableAutomaticRotation to
         *                         false.
         *                         <p>
         *                         </blockquote>
         * @return {@code this}
         */
        public Builder rotationInterval(java.lang.String rotationInterval) {
            this.rotationInterval = rotationInterval;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getRotationInterval}
         * @param rotationInterval Property rotationInterval: The interval for automatic rotation.
         *                         The value is in the range of 6 hours to
         *                         8,760 hours (365 days).<br>
         *                         The value is in the <code>integer[unit]</code> format. <code>integer</code> indicates the interval.
         *                         <code>unit</code> indicates the unit of time.<br>
         *                         Valid values for unit: d (day), h (hour), m (minute), and s (second). For
         *                         example, both 7d and 604,800s indicate a rotation interval of 7 days.<br><br>
         *                         <p>
         *                         <blockquote>
         *                         <p>
         *                         You must specify this parameter if you set EnableAutomaticRotation to true. You
         *                         do not need to specify this parameter if you set EnableAutomaticRotation to
         *                         false.
         *                         <p>
         *                         </blockquote>
         * @return {@code this}
         */
        public Builder rotationInterval(com.aliyun.ros.cdk.core.IResolvable rotationInterval) {
            this.rotationInterval = rotationInterval;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretDataType}
         * @param secretDataType Property secretDataType: The type of the secret value.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>text (default): The secret value is a text string.</li>
         *                       <li>binary: The secret value is a binary string.</li>
         *                       </ul>
         *                       <p>
         *                       <blockquote>
         *                       <p>
         *                       If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS,
         *                       SecretDataType must be set to text.
         *                       <p>
         *                       </blockquote>
         * @return {@code this}
         */
        public Builder secretDataType(java.lang.String secretDataType) {
            this.secretDataType = secretDataType;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretDataType}
         * @param secretDataType Property secretDataType: The type of the secret value.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>text (default): The secret value is a text string.</li>
         *                       <li>binary: The secret value is a binary string.</li>
         *                       </ul>
         *                       <p>
         *                       <blockquote>
         *                       <p>
         *                       If SecretType is set to Rds, Redis, PolarDB, RAMCredentials, or ECS,
         *                       SecretDataType must be set to text.
         *                       <p>
         *                       </blockquote>
         * @return {@code this}
         */
        public Builder secretDataType(com.aliyun.ros.cdk.core.IResolvable secretDataType) {
            this.secretDataType = secretDataType;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretType}
         * @param secretType Property secretType: The type of the secret.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li>Generic (default): a generic secret.</li>
         *                   <li>Rds: an RDS secret.</li>
         *                   <li>Redis: a Redis secret.</li>
         *                   <li>RAMCredentials: a RAM secret.</li>
         *                   <li>ECS: an ECS secret.</li>
         *                   <li>PolarDB: a PolarDB secret.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder secretType(java.lang.String secretType) {
            this.secretType = secretType;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretType}
         * @param secretType Property secretType: The type of the secret.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li>Generic (default): a generic secret.</li>
         *                   <li>Rds: an RDS secret.</li>
         *                   <li>Redis: a Redis secret.</li>
         *                   <li>RAMCredentials: a RAM secret.</li>
         *                   <li>ECS: an ECS secret.</li>
         *                   <li>PolarDB: a PolarDB secret.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder secretType(com.aliyun.ros.cdk.core.IResolvable secretType) {
            this.secretType = secretType;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getTags}
         * @param tags Property tags: Tags to attach to secret.
         *             Max support 20 tags to add during create secret. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.kms.RosSecret.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.kms.RosSecret.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getVersionStages}
         * @param versionStages Property versionStages: The stage labels that mark the secret version.
         *                      ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
         * @return {@code this}
         */
        public Builder versionStages(com.aliyun.ros.cdk.core.IResolvable versionStages) {
            this.versionStages = versionStages;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getVersionStages}
         * @param versionStages Property versionStages: The stage labels that mark the secret version.
         *                      ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
         * @return {@code this}
         */
        public Builder versionStages(java.util.List<? extends java.lang.Object> versionStages) {
            this.versionStages = versionStages;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SecretProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SecretProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SecretProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecretProps {
        private final java.lang.Object secretData;
        private final java.lang.Object secretName;
        private final java.lang.Object versionId;
        private final java.lang.Object description;
        private final java.lang.Object dkmsInstanceId;
        private final java.lang.Object enableAutomaticRotation;
        private final java.lang.Object encryptionKeyId;
        private final java.lang.Object extendedConfig;
        private final java.lang.Object forceDeleteWithoutRecovery;
        private final java.lang.Object policy;
        private final java.lang.Object recoveryWindowInDays;
        private final java.lang.Object rotationInterval;
        private final java.lang.Object secretDataType;
        private final java.lang.Object secretType;
        private final java.util.List<com.aliyun.ros.cdk.kms.RosSecret.TagsProperty> tags;
        private final java.lang.Object versionStages;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.secretData = software.amazon.jsii.Kernel.get(this, "secretData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secretName = software.amazon.jsii.Kernel.get(this, "secretName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.versionId = software.amazon.jsii.Kernel.get(this, "versionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dkmsInstanceId = software.amazon.jsii.Kernel.get(this, "dkmsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAutomaticRotation = software.amazon.jsii.Kernel.get(this, "enableAutomaticRotation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptionKeyId = software.amazon.jsii.Kernel.get(this, "encryptionKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.extendedConfig = software.amazon.jsii.Kernel.get(this, "extendedConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.forceDeleteWithoutRecovery = software.amazon.jsii.Kernel.get(this, "forceDeleteWithoutRecovery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.recoveryWindowInDays = software.amazon.jsii.Kernel.get(this, "recoveryWindowInDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rotationInterval = software.amazon.jsii.Kernel.get(this, "rotationInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secretDataType = software.amazon.jsii.Kernel.get(this, "secretDataType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secretType = software.amazon.jsii.Kernel.get(this, "secretType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kms.RosSecret.TagsProperty.class)));
            this.versionStages = software.amazon.jsii.Kernel.get(this, "versionStages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.secretData = java.util.Objects.requireNonNull(builder.secretData, "secretData is required");
            this.secretName = java.util.Objects.requireNonNull(builder.secretName, "secretName is required");
            this.versionId = java.util.Objects.requireNonNull(builder.versionId, "versionId is required");
            this.description = builder.description;
            this.dkmsInstanceId = builder.dkmsInstanceId;
            this.enableAutomaticRotation = builder.enableAutomaticRotation;
            this.encryptionKeyId = builder.encryptionKeyId;
            this.extendedConfig = builder.extendedConfig;
            this.forceDeleteWithoutRecovery = builder.forceDeleteWithoutRecovery;
            this.policy = builder.policy;
            this.recoveryWindowInDays = builder.recoveryWindowInDays;
            this.rotationInterval = builder.rotationInterval;
            this.secretDataType = builder.secretDataType;
            this.secretType = builder.secretType;
            this.tags = (java.util.List<com.aliyun.ros.cdk.kms.RosSecret.TagsProperty>)builder.tags;
            this.versionStages = builder.versionStages;
        }

        @Override
        public final java.lang.Object getSecretData() {
            return this.secretData;
        }

        @Override
        public final java.lang.Object getSecretName() {
            return this.secretName;
        }

        @Override
        public final java.lang.Object getVersionId() {
            return this.versionId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDkmsInstanceId() {
            return this.dkmsInstanceId;
        }

        @Override
        public final java.lang.Object getEnableAutomaticRotation() {
            return this.enableAutomaticRotation;
        }

        @Override
        public final java.lang.Object getEncryptionKeyId() {
            return this.encryptionKeyId;
        }

        @Override
        public final java.lang.Object getExtendedConfig() {
            return this.extendedConfig;
        }

        @Override
        public final java.lang.Object getForceDeleteWithoutRecovery() {
            return this.forceDeleteWithoutRecovery;
        }

        @Override
        public final java.lang.Object getPolicy() {
            return this.policy;
        }

        @Override
        public final java.lang.Object getRecoveryWindowInDays() {
            return this.recoveryWindowInDays;
        }

        @Override
        public final java.lang.Object getRotationInterval() {
            return this.rotationInterval;
        }

        @Override
        public final java.lang.Object getSecretDataType() {
            return this.secretDataType;
        }

        @Override
        public final java.lang.Object getSecretType() {
            return this.secretType;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.kms.RosSecret.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVersionStages() {
            return this.versionStages;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("secretData", om.valueToTree(this.getSecretData()));
            data.set("secretName", om.valueToTree(this.getSecretName()));
            data.set("versionId", om.valueToTree(this.getVersionId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDkmsInstanceId() != null) {
                data.set("dkmsInstanceId", om.valueToTree(this.getDkmsInstanceId()));
            }
            if (this.getEnableAutomaticRotation() != null) {
                data.set("enableAutomaticRotation", om.valueToTree(this.getEnableAutomaticRotation()));
            }
            if (this.getEncryptionKeyId() != null) {
                data.set("encryptionKeyId", om.valueToTree(this.getEncryptionKeyId()));
            }
            if (this.getExtendedConfig() != null) {
                data.set("extendedConfig", om.valueToTree(this.getExtendedConfig()));
            }
            if (this.getForceDeleteWithoutRecovery() != null) {
                data.set("forceDeleteWithoutRecovery", om.valueToTree(this.getForceDeleteWithoutRecovery()));
            }
            if (this.getPolicy() != null) {
                data.set("policy", om.valueToTree(this.getPolicy()));
            }
            if (this.getRecoveryWindowInDays() != null) {
                data.set("recoveryWindowInDays", om.valueToTree(this.getRecoveryWindowInDays()));
            }
            if (this.getRotationInterval() != null) {
                data.set("rotationInterval", om.valueToTree(this.getRotationInterval()));
            }
            if (this.getSecretDataType() != null) {
                data.set("secretDataType", om.valueToTree(this.getSecretDataType()));
            }
            if (this.getSecretType() != null) {
                data.set("secretType", om.valueToTree(this.getSecretType()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVersionStages() != null) {
                data.set("versionStages", om.valueToTree(this.getVersionStages()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kms.SecretProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SecretProps.Jsii$Proxy that = (SecretProps.Jsii$Proxy) o;

            if (!secretData.equals(that.secretData)) return false;
            if (!secretName.equals(that.secretName)) return false;
            if (!versionId.equals(that.versionId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.dkmsInstanceId != null ? !this.dkmsInstanceId.equals(that.dkmsInstanceId) : that.dkmsInstanceId != null) return false;
            if (this.enableAutomaticRotation != null ? !this.enableAutomaticRotation.equals(that.enableAutomaticRotation) : that.enableAutomaticRotation != null) return false;
            if (this.encryptionKeyId != null ? !this.encryptionKeyId.equals(that.encryptionKeyId) : that.encryptionKeyId != null) return false;
            if (this.extendedConfig != null ? !this.extendedConfig.equals(that.extendedConfig) : that.extendedConfig != null) return false;
            if (this.forceDeleteWithoutRecovery != null ? !this.forceDeleteWithoutRecovery.equals(that.forceDeleteWithoutRecovery) : that.forceDeleteWithoutRecovery != null) return false;
            if (this.policy != null ? !this.policy.equals(that.policy) : that.policy != null) return false;
            if (this.recoveryWindowInDays != null ? !this.recoveryWindowInDays.equals(that.recoveryWindowInDays) : that.recoveryWindowInDays != null) return false;
            if (this.rotationInterval != null ? !this.rotationInterval.equals(that.rotationInterval) : that.rotationInterval != null) return false;
            if (this.secretDataType != null ? !this.secretDataType.equals(that.secretDataType) : that.secretDataType != null) return false;
            if (this.secretType != null ? !this.secretType.equals(that.secretType) : that.secretType != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.versionStages != null ? this.versionStages.equals(that.versionStages) : that.versionStages == null;
        }

        @Override
        public final int hashCode() {
            int result = this.secretData.hashCode();
            result = 31 * result + (this.secretName.hashCode());
            result = 31 * result + (this.versionId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.dkmsInstanceId != null ? this.dkmsInstanceId.hashCode() : 0);
            result = 31 * result + (this.enableAutomaticRotation != null ? this.enableAutomaticRotation.hashCode() : 0);
            result = 31 * result + (this.encryptionKeyId != null ? this.encryptionKeyId.hashCode() : 0);
            result = 31 * result + (this.extendedConfig != null ? this.extendedConfig.hashCode() : 0);
            result = 31 * result + (this.forceDeleteWithoutRecovery != null ? this.forceDeleteWithoutRecovery.hashCode() : 0);
            result = 31 * result + (this.policy != null ? this.policy.hashCode() : 0);
            result = 31 * result + (this.recoveryWindowInDays != null ? this.recoveryWindowInDays.hashCode() : 0);
            result = 31 * result + (this.rotationInterval != null ? this.rotationInterval.hashCode() : 0);
            result = 31 * result + (this.secretDataType != null ? this.secretDataType.hashCode() : 0);
            result = 31 * result + (this.secretType != null ? this.secretType.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.versionStages != null ? this.versionStages.hashCode() : 0);
            return result;
        }
    }
}
