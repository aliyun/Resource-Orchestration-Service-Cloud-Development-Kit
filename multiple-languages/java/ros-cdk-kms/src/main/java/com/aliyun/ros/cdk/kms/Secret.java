package com.aliyun.ros.cdk.kms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::KMS::Secret</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T09:55:06.365Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.Secret")
public class Secret extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.kms.ISecret {

    protected Secret(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Secret(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Secret(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.SecretProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Secret(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.SecretProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecretName: The name of the secret.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretName() {
        return software.amazon.jsii.Kernel.get(this, "attrSecretName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.SecretProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kms.SecretProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.kms.Secret}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.kms.Secret> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.kms.SecretProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.kms.SecretProps.Builder();
        }

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
         * <p>
         * @return {@code this}
         * @param secretData Property secretData: The value of the secret. This parameter is required.
         */
        public Builder secretData(final java.lang.String secretData) {
            this.props.secretData(secretData);
            return this;
        }
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
         * <p>
         * @return {@code this}
         * @param secretData Property secretData: The value of the secret. This parameter is required.
         */
        public Builder secretData(final com.aliyun.ros.cdk.core.IResolvable secretData) {
            this.props.secretData(secretData);
            return this;
        }

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
         * <p>
         * @return {@code this}
         * @param secretName Property secretName: The name of the secret. This parameter is required.
         */
        public Builder secretName(final java.lang.String secretName) {
            this.props.secretName(secretName);
            return this;
        }
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
         * <p>
         * @return {@code this}
         * @param secretName Property secretName: The name of the secret. This parameter is required.
         */
        public Builder secretName(final com.aliyun.ros.cdk.core.IResolvable secretName) {
            this.props.secretName(secretName);
            return this;
        }

        /**
         * Property versionId: The version number of the initial version.
         * <p>
         * The version number must be unique
         * within the secret.
         * The version number can be up to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param versionId Property versionId: The version number of the initial version. This parameter is required.
         */
        public Builder versionId(final java.lang.String versionId) {
            this.props.versionId(versionId);
            return this;
        }
        /**
         * Property versionId: The version number of the initial version.
         * <p>
         * The version number must be unique
         * within the secret.
         * The version number can be up to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param versionId Property versionId: The version number of the initial version. This parameter is required.
         */
        public Builder versionId(final com.aliyun.ros.cdk.core.IResolvable versionId) {
            this.props.versionId(versionId);
            return this;
        }

        /**
         * Property description: The description of the secret.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the secret. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the secret.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the secret. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property dkmsInstanceId: The ID of the dedicated KMS instance.
         * <p>
         * @return {@code this}
         * @param dkmsInstanceId Property dkmsInstanceId: The ID of the dedicated KMS instance. This parameter is required.
         */
        public Builder dkmsInstanceId(final java.lang.String dkmsInstanceId) {
            this.props.dkmsInstanceId(dkmsInstanceId);
            return this;
        }
        /**
         * Property dkmsInstanceId: The ID of the dedicated KMS instance.
         * <p>
         * @return {@code this}
         * @param dkmsInstanceId Property dkmsInstanceId: The ID of the dedicated KMS instance. This parameter is required.
         */
        public Builder dkmsInstanceId(final com.aliyun.ros.cdk.core.IResolvable dkmsInstanceId) {
            this.props.dkmsInstanceId(dkmsInstanceId);
            return this;
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
         * <p>
         * @return {@code this}
         * @param enableAutomaticRotation Property enableAutomaticRotation: Specifies whether to enable automatic rotation. This parameter is required.
         */
        public Builder enableAutomaticRotation(final java.lang.Boolean enableAutomaticRotation) {
            this.props.enableAutomaticRotation(enableAutomaticRotation);
            return this;
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
         * <p>
         * @return {@code this}
         * @param enableAutomaticRotation Property enableAutomaticRotation: Specifies whether to enable automatic rotation. This parameter is required.
         */
        public Builder enableAutomaticRotation(final com.aliyun.ros.cdk.core.IResolvable enableAutomaticRotation) {
            this.props.enableAutomaticRotation(enableAutomaticRotation);
            return this;
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
         * <p>
         * @return {@code this}
         * @param encryptionKeyId Property encryptionKeyId: The ID of the key used to encrypt the secret value. This parameter is required.
         */
        public Builder encryptionKeyId(final java.lang.String encryptionKeyId) {
            this.props.encryptionKeyId(encryptionKeyId);
            return this;
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
         * <p>
         * @return {@code this}
         * @param encryptionKeyId Property encryptionKeyId: The ID of the key used to encrypt the secret value. This parameter is required.
         */
        public Builder encryptionKeyId(final com.aliyun.ros.cdk.core.IResolvable encryptionKeyId) {
            this.props.encryptionKeyId(encryptionKeyId);
            return this;
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
         * <p>
         * @return {@code this}
         * @param extendedConfig Property extendedConfig: The extended configuration of the secret. This parameter is required.
         */
        public Builder extendedConfig(final com.aliyun.ros.cdk.core.IResolvable extendedConfig) {
            this.props.extendedConfig(extendedConfig);
            return this;
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
         * <p>
         * @return {@code this}
         * @param extendedConfig Property extendedConfig: The extended configuration of the secret. This parameter is required.
         */
        public Builder extendedConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> extendedConfig) {
            this.props.extendedConfig(extendedConfig);
            return this;
        }

        /**
         * Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret.
         * <p>
         * If this parameter is set to true, the secret cannot be recovered. Valid values:
         * true
         * false (default value)
         * <p>
         * @return {@code this}
         * @param forceDeleteWithoutRecovery Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. This parameter is required.
         */
        public Builder forceDeleteWithoutRecovery(final java.lang.Boolean forceDeleteWithoutRecovery) {
            this.props.forceDeleteWithoutRecovery(forceDeleteWithoutRecovery);
            return this;
        }
        /**
         * Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret.
         * <p>
         * If this parameter is set to true, the secret cannot be recovered. Valid values:
         * true
         * false (default value)
         * <p>
         * @return {@code this}
         * @param forceDeleteWithoutRecovery Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. This parameter is required.
         */
        public Builder forceDeleteWithoutRecovery(final com.aliyun.ros.cdk.core.IResolvable forceDeleteWithoutRecovery) {
            this.props.forceDeleteWithoutRecovery(forceDeleteWithoutRecovery);
            return this;
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
         * <p>
         * @return {@code this}
         * @param policy Property policy: The specific content of the credential policy in JSON format. This parameter is required.
         */
        public Builder policy(final com.aliyun.ros.cdk.core.IResolvable policy) {
            this.props.policy(policy);
            return this;
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
         * <p>
         * @return {@code this}
         * @param policy Property policy: The specific content of the credential policy in JSON format. This parameter is required.
         */
        public Builder policy(final java.util.Map<java.lang.String, ? extends java.lang.Object> policy) {
            this.props.policy(policy);
            return this;
        }

        /**
         * Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it.
         * <p>
         * Default value: 30
         * <p>
         * @return {@code this}
         * @param recoveryWindowInDays Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. This parameter is required.
         */
        public Builder recoveryWindowInDays(final java.lang.Number recoveryWindowInDays) {
            this.props.recoveryWindowInDays(recoveryWindowInDays);
            return this;
        }
        /**
         * Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it.
         * <p>
         * Default value: 30
         * <p>
         * @return {@code this}
         * @param recoveryWindowInDays Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. This parameter is required.
         */
        public Builder recoveryWindowInDays(final com.aliyun.ros.cdk.core.IResolvable recoveryWindowInDays) {
            this.props.recoveryWindowInDays(recoveryWindowInDays);
            return this;
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
         * <p>
         * @return {@code this}
         * @param rotationInterval Property rotationInterval: The interval for automatic rotation. This parameter is required.
         */
        public Builder rotationInterval(final java.lang.String rotationInterval) {
            this.props.rotationInterval(rotationInterval);
            return this;
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
         * <p>
         * @return {@code this}
         * @param rotationInterval Property rotationInterval: The interval for automatic rotation. This parameter is required.
         */
        public Builder rotationInterval(final com.aliyun.ros.cdk.core.IResolvable rotationInterval) {
            this.props.rotationInterval(rotationInterval);
            return this;
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
         * <p>
         * @return {@code this}
         * @param secretDataType Property secretDataType: The type of the secret value. This parameter is required.
         */
        public Builder secretDataType(final java.lang.String secretDataType) {
            this.props.secretDataType(secretDataType);
            return this;
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
         * <p>
         * @return {@code this}
         * @param secretDataType Property secretDataType: The type of the secret value. This parameter is required.
         */
        public Builder secretDataType(final com.aliyun.ros.cdk.core.IResolvable secretDataType) {
            this.props.secretDataType(secretDataType);
            return this;
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
         * <p>
         * @return {@code this}
         * @param secretType Property secretType: The type of the secret. This parameter is required.
         */
        public Builder secretType(final java.lang.String secretType) {
            this.props.secretType(secretType);
            return this;
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
         * <p>
         * @return {@code this}
         * @param secretType Property secretType: The type of the secret. This parameter is required.
         */
        public Builder secretType(final com.aliyun.ros.cdk.core.IResolvable secretType) {
            this.props.secretType(secretType);
            return this;
        }

        /**
         * Property tags: Tags to attach to secret.
         * <p>
         * Max support 20 tags to add during create secret. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to secret. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.kms.RosSecret.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property versionStages: The stage labels that mark the secret version.
         * <p>
         * ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
         * <p>
         * @return {@code this}
         * @param versionStages Property versionStages: The stage labels that mark the secret version. This parameter is required.
         */
        public Builder versionStages(final com.aliyun.ros.cdk.core.IResolvable versionStages) {
            this.props.versionStages(versionStages);
            return this;
        }
        /**
         * Property versionStages: The stage labels that mark the secret version.
         * <p>
         * ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
         * <p>
         * @return {@code this}
         * @param versionStages Property versionStages: The stage labels that mark the secret version. This parameter is required.
         */
        public Builder versionStages(final java.util.List<? extends java.lang.Object> versionStages) {
            this.props.versionStages(versionStages);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.kms.Secret}.
         */
        @Override
        public com.aliyun.ros.cdk.kms.Secret build() {
            return new com.aliyun.ros.cdk.kms.Secret(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
