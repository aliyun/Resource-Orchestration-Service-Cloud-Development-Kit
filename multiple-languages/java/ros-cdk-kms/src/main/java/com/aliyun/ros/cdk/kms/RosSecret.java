package com.aliyun.ros.cdk.kms;

/**
 * A ROS template type:  `ALIYUN::KMS::Secret`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:02.761Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.RosSecret")
public class RosSecret extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSecret(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSecret(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.kms.RosSecret.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::KMS::Secret`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSecret(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.RosSecretProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecretName() {
        return software.amazon.jsii.Kernel.get(this, "attrSecretName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSecretData() {
        return software.amazon.jsii.Kernel.get(this, "secretData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecretData(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "secretData", java.util.Objects.requireNonNull(value, "secretData is required"));
    }

    /**
     */
    public void setSecretData(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "secretData", java.util.Objects.requireNonNull(value, "secretData is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSecretName() {
        return software.amazon.jsii.Kernel.get(this, "secretName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecretName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "secretName", java.util.Objects.requireNonNull(value, "secretName is required"));
    }

    /**
     */
    public void setSecretName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "secretName", java.util.Objects.requireNonNull(value, "secretName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVersionId() {
        return software.amazon.jsii.Kernel.get(this, "versionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVersionId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "versionId", java.util.Objects.requireNonNull(value, "versionId is required"));
    }

    /**
     */
    public void setVersionId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "versionId", java.util.Objects.requireNonNull(value, "versionId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionKeyId() {
        return software.amazon.jsii.Kernel.get(this, "encryptionKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEncryptionKeyId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "encryptionKeyId", value);
    }

    /**
     */
    public void setEncryptionKeyId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "encryptionKeyId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getForceDeleteWithoutRecovery() {
        return software.amazon.jsii.Kernel.get(this, "forceDeleteWithoutRecovery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setForceDeleteWithoutRecovery(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "forceDeleteWithoutRecovery", value);
    }

    /**
     */
    public void setForceDeleteWithoutRecovery(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "forceDeleteWithoutRecovery", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRecoveryWindowInDays() {
        return software.amazon.jsii.Kernel.get(this, "recoveryWindowInDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRecoveryWindowInDays(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "recoveryWindowInDays", value);
    }

    /**
     */
    public void setRecoveryWindowInDays(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "recoveryWindowInDays", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecretDataType() {
        return software.amazon.jsii.Kernel.get(this, "secretDataType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecretDataType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "secretDataType", value);
    }

    /**
     */
    public void setSecretDataType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "secretDataType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVersionStages() {
        return software.amazon.jsii.Kernel.get(this, "versionStages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVersionStages(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "versionStages", value);
    }

    /**
     */
    public void setVersionStages(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "versionStages", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.kms.RosSecret}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.kms.RosSecret> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.kms.RosSecretProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.kms.RosSecretProps.Builder();
        }

        /**
         * @return {@code this}
         * @param secretData This parameter is required.
         */
        public Builder secretData(final java.lang.String secretData) {
            this.props.secretData(secretData);
            return this;
        }
        /**
         * @return {@code this}
         * @param secretData This parameter is required.
         */
        public Builder secretData(final com.aliyun.ros.cdk.core.IResolvable secretData) {
            this.props.secretData(secretData);
            return this;
        }

        /**
         * @return {@code this}
         * @param secretName This parameter is required.
         */
        public Builder secretName(final java.lang.String secretName) {
            this.props.secretName(secretName);
            return this;
        }
        /**
         * @return {@code this}
         * @param secretName This parameter is required.
         */
        public Builder secretName(final com.aliyun.ros.cdk.core.IResolvable secretName) {
            this.props.secretName(secretName);
            return this;
        }

        /**
         * @return {@code this}
         * @param versionId This parameter is required.
         */
        public Builder versionId(final java.lang.String versionId) {
            this.props.versionId(versionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param versionId This parameter is required.
         */
        public Builder versionId(final com.aliyun.ros.cdk.core.IResolvable versionId) {
            this.props.versionId(versionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param encryptionKeyId This parameter is required.
         */
        public Builder encryptionKeyId(final java.lang.String encryptionKeyId) {
            this.props.encryptionKeyId(encryptionKeyId);
            return this;
        }
        /**
         * @return {@code this}
         * @param encryptionKeyId This parameter is required.
         */
        public Builder encryptionKeyId(final com.aliyun.ros.cdk.core.IResolvable encryptionKeyId) {
            this.props.encryptionKeyId(encryptionKeyId);
            return this;
        }

        /**
         * @return {@code this}
         * @param forceDeleteWithoutRecovery This parameter is required.
         */
        public Builder forceDeleteWithoutRecovery(final java.lang.Boolean forceDeleteWithoutRecovery) {
            this.props.forceDeleteWithoutRecovery(forceDeleteWithoutRecovery);
            return this;
        }
        /**
         * @return {@code this}
         * @param forceDeleteWithoutRecovery This parameter is required.
         */
        public Builder forceDeleteWithoutRecovery(final com.aliyun.ros.cdk.core.IResolvable forceDeleteWithoutRecovery) {
            this.props.forceDeleteWithoutRecovery(forceDeleteWithoutRecovery);
            return this;
        }

        /**
         * @return {@code this}
         * @param recoveryWindowInDays This parameter is required.
         */
        public Builder recoveryWindowInDays(final java.lang.Number recoveryWindowInDays) {
            this.props.recoveryWindowInDays(recoveryWindowInDays);
            return this;
        }
        /**
         * @return {@code this}
         * @param recoveryWindowInDays This parameter is required.
         */
        public Builder recoveryWindowInDays(final com.aliyun.ros.cdk.core.IResolvable recoveryWindowInDays) {
            this.props.recoveryWindowInDays(recoveryWindowInDays);
            return this;
        }

        /**
         * @return {@code this}
         * @param secretDataType This parameter is required.
         */
        public Builder secretDataType(final java.lang.String secretDataType) {
            this.props.secretDataType(secretDataType);
            return this;
        }
        /**
         * @return {@code this}
         * @param secretDataType This parameter is required.
         */
        public Builder secretDataType(final com.aliyun.ros.cdk.core.IResolvable secretDataType) {
            this.props.secretDataType(secretDataType);
            return this;
        }

        /**
         * @return {@code this}
         * @param versionStages This parameter is required.
         */
        public Builder versionStages(final com.aliyun.ros.cdk.core.IResolvable versionStages) {
            this.props.versionStages(versionStages);
            return this;
        }
        /**
         * @return {@code this}
         * @param versionStages This parameter is required.
         */
        public Builder versionStages(final java.util.List<? extends java.lang.Object> versionStages) {
            this.props.versionStages(versionStages);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.kms.RosSecret}.
         */
        @Override
        public com.aliyun.ros.cdk.kms.RosSecret build() {
            return new com.aliyun.ros.cdk.kms.RosSecret(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
