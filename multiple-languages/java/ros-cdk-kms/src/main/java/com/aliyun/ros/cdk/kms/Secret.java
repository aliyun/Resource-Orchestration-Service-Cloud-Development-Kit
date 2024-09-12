package com.aliyun.ros.cdk.kms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::KMS::Secret</code>, which is used to create a secret and store the initial version of the secret.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:28.217Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.Secret")
public class Secret extends com.aliyun.ros.cdk.core.Resource {

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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SecretName: The name of the secret.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecretName() {
        return software.amazon.jsii.Kernel.get(this, "attrSecretName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.SecretProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kms.SecretProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.SecretProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
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
         * Property secretData: The value of the secret that you want to create.
         * <p>
         * Secrets Manager encrypts the secret
         * value and stores it in the initial version.
         * <p>
         * @return {@code this}
         * @param secretData Property secretData: The value of the secret that you want to create. This parameter is required.
         */
        public Builder secretData(final java.lang.String secretData) {
            this.props.secretData(secretData);
            return this;
        }
        /**
         * Property secretData: The value of the secret that you want to create.
         * <p>
         * Secrets Manager encrypts the secret
         * value and stores it in the initial version.
         * <p>
         * @return {@code this}
         * @param secretData Property secretData: The value of the secret that you want to create. This parameter is required.
         */
        public Builder secretData(final com.aliyun.ros.cdk.core.IResolvable secretData) {
            this.props.secretData(secretData);
            return this;
        }

        /**
         * Property secretName: The name of the secret.
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
         * Version numbers are unique in each secret
         * object.
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
         * Version numbers are unique in each secret
         * object.
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
         * true: specifies to enable automatic rotation.
         * false: specifies to disable automatic rotation. This is the default value.
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
         * true: specifies to enable automatic rotation.
         * false: specifies to disable automatic rotation. This is the default value.
         * <p>
         * @return {@code this}
         * @param enableAutomaticRotation Property enableAutomaticRotation: Specifies whether to enable automatic rotation. This parameter is required.
         */
        public Builder enableAutomaticRotation(final com.aliyun.ros.cdk.core.IResolvable enableAutomaticRotation) {
            this.props.enableAutomaticRotation(enableAutomaticRotation);
            return this;
        }

        /**
         * Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
         * <p>
         * If you do not specify this parameter, Secrets Manager automatically creates an encryption
         * key to encrypt the secret.
         * Note The KMS CMK must be a symmetric key.
         * <p>
         * @return {@code this}
         * @param encryptionKeyId Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value. This parameter is required.
         */
        public Builder encryptionKeyId(final java.lang.String encryptionKeyId) {
            this.props.encryptionKeyId(encryptionKeyId);
            return this;
        }
        /**
         * Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
         * <p>
         * If you do not specify this parameter, Secrets Manager automatically creates an encryption
         * key to encrypt the secret.
         * Note The KMS CMK must be a symmetric key.
         * <p>
         * @return {@code this}
         * @param encryptionKeyId Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value. This parameter is required.
         */
        public Builder encryptionKeyId(final com.aliyun.ros.cdk.core.IResolvable encryptionKeyId) {
            this.props.encryptionKeyId(encryptionKeyId);
            return this;
        }

        /**
         * Property extendedConfig: The extended configuration of the secret.
         * <p>
         * This parameter specifies the properties of the secret of the specific type.
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
         * This parameter specifies the properties of the secret of the specific type.
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
         * Valid values: 6 hours to 8,760 hours (365 days).
         * The value is in the integer[unit] format.
         * The unit can be d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s indicate a seven-day interval.
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
         * Valid values: 6 hours to 8,760 hours (365 days).
         * The value is in the integer[unit] format.
         * The unit can be d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s indicate a seven-day interval.
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
         * text (default value)
         * binary
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
         * text (default value)
         * binary
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
         * Generic: specifies a generic secret.
         * Rds: specifies a managed ApsaraDB RDS secret.
         * RAMCredentials: specifies a managed RAM secret.
         * ECS: specifies a managed ECS secret.
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
         * Generic: specifies a generic secret.
         * Rds: specifies a managed ApsaraDB RDS secret.
         * RAMCredentials: specifies a managed RAM secret.
         * ECS: specifies a managed ECS secret.
         * <p>
         * @return {@code this}
         * @param secretType Property secretType: The type of the secret. This parameter is required.
         */
        public Builder secretType(final com.aliyun.ros.cdk.core.IResolvable secretType) {
            this.props.secretType(secretType);
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
