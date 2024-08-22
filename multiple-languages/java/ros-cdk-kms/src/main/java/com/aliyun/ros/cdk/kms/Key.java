package com.aliyun.ros.cdk.kms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::KMS::Key</code>, which is used to create a customer master key (CMK).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:22.162Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.Key")
public class Key extends com.aliyun.ros.cdk.core.Resource {

    protected Key(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Key(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Key(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.kms.KeyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Key(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.kms.KeyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Key(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute KeyId: The globally unique identifier for the CMK.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrKeyId() {
        return software.amazon.jsii.Kernel.get(this, "attrKeyId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.KeyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kms.KeyProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.KeyProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.kms.Key}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.kms.Key> {
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
        private com.aliyun.ros.cdk.kms.KeyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property description: The description of the CMK.
         * <p>
         * Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the CMK. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * Property description: The description of the CMK.
         * <p>
         * Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the CMK. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props().description(description);
            return this;
        }

        /**
         * Property dkmsInstanceId: The ID of the dedicated KMS instance.
         * <p>
         * @return {@code this}
         * @param dkmsInstanceId Property dkmsInstanceId: The ID of the dedicated KMS instance. This parameter is required.
         */
        public Builder dkmsInstanceId(final java.lang.String dkmsInstanceId) {
            this.props().dkmsInstanceId(dkmsInstanceId);
            return this;
        }
        /**
         * Property dkmsInstanceId: The ID of the dedicated KMS instance.
         * <p>
         * @return {@code this}
         * @param dkmsInstanceId Property dkmsInstanceId: The ID of the dedicated KMS instance. This parameter is required.
         */
        public Builder dkmsInstanceId(final com.aliyun.ros.cdk.core.IResolvable dkmsInstanceId) {
            this.props().dkmsInstanceId(dkmsInstanceId);
            return this;
        }

        /**
         * Property enable: Specifies whether the key is enabled.
         * <p>
         * Defaults to true.
         * <p>
         * @return {@code this}
         * @param enable Property enable: Specifies whether the key is enabled. This parameter is required.
         */
        public Builder enable(final java.lang.Boolean enable) {
            this.props().enable(enable);
            return this;
        }
        /**
         * Property enable: Specifies whether the key is enabled.
         * <p>
         * Defaults to true.
         * <p>
         * @return {@code this}
         * @param enable Property enable: Specifies whether the key is enabled. This parameter is required.
         */
        public Builder enable(final com.aliyun.ros.cdk.core.IResolvable enable) {
            this.props().enable(enable);
            return this;
        }

        /**
         * Property enableAutomaticRotation: Whether to enable automatic key rotation.
         * <p>
         * Valid value: true/false (default)
         * <p>
         * @return {@code this}
         * @param enableAutomaticRotation Property enableAutomaticRotation: Whether to enable automatic key rotation. This parameter is required.
         */
        public Builder enableAutomaticRotation(final java.lang.Boolean enableAutomaticRotation) {
            this.props().enableAutomaticRotation(enableAutomaticRotation);
            return this;
        }
        /**
         * Property enableAutomaticRotation: Whether to enable automatic key rotation.
         * <p>
         * Valid value: true/false (default)
         * <p>
         * @return {@code this}
         * @param enableAutomaticRotation Property enableAutomaticRotation: Whether to enable automatic key rotation. This parameter is required.
         */
        public Builder enableAutomaticRotation(final com.aliyun.ros.cdk.core.IResolvable enableAutomaticRotation) {
            this.props().enableAutomaticRotation(enableAutomaticRotation);
            return this;
        }

        /**
         * Property keySpec: Key type.
         * <p>
         * Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
         * <p>
         * @return {@code this}
         * @param keySpec Property keySpec: Key type. This parameter is required.
         */
        public Builder keySpec(final java.lang.String keySpec) {
            this.props().keySpec(keySpec);
            return this;
        }
        /**
         * Property keySpec: Key type.
         * <p>
         * Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
         * <p>
         * @return {@code this}
         * @param keySpec Property keySpec: Key type. This parameter is required.
         */
        public Builder keySpec(final com.aliyun.ros.cdk.core.IResolvable keySpec) {
            this.props().keySpec(keySpec);
            return this;
        }

        /**
         * Property keyUsage: The usage of the CMK.
         * <p>
         * Valid values:
         * ENCRYPT/DECRYPT: encrypts or decrypts data.
         * SIGN/VERIFY: generates or verifies a digital signature.
         * If the CMK supports signature verification, the default value is SIGN/VERIFY. If the CMK does not support signature verification, the default value is ENCRYPT/DECRYPT.
         * <p>
         * @return {@code this}
         * @param keyUsage Property keyUsage: The usage of the CMK. This parameter is required.
         */
        public Builder keyUsage(final java.lang.String keyUsage) {
            this.props().keyUsage(keyUsage);
            return this;
        }
        /**
         * Property keyUsage: The usage of the CMK.
         * <p>
         * Valid values:
         * ENCRYPT/DECRYPT: encrypts or decrypts data.
         * SIGN/VERIFY: generates or verifies a digital signature.
         * If the CMK supports signature verification, the default value is SIGN/VERIFY. If the CMK does not support signature verification, the default value is ENCRYPT/DECRYPT.
         * <p>
         * @return {@code this}
         * @param keyUsage Property keyUsage: The usage of the CMK. This parameter is required.
         */
        public Builder keyUsage(final com.aliyun.ros.cdk.core.IResolvable keyUsage) {
            this.props().keyUsage(keyUsage);
            return this;
        }

        /**
         * Property pendingWindowInDays: The waiting period, specified in number of days.
         * <p>
         * During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 366. Default value is 30.
         * <p>
         * @return {@code this}
         * @param pendingWindowInDays Property pendingWindowInDays: The waiting period, specified in number of days. This parameter is required.
         */
        public Builder pendingWindowInDays(final java.lang.Number pendingWindowInDays) {
            this.props().pendingWindowInDays(pendingWindowInDays);
            return this;
        }
        /**
         * Property pendingWindowInDays: The waiting period, specified in number of days.
         * <p>
         * During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 366. Default value is 30.
         * <p>
         * @return {@code this}
         * @param pendingWindowInDays Property pendingWindowInDays: The waiting period, specified in number of days. This parameter is required.
         */
        public Builder pendingWindowInDays(final com.aliyun.ros.cdk.core.IResolvable pendingWindowInDays) {
            this.props().pendingWindowInDays(pendingWindowInDays);
            return this;
        }

        /**
         * Property policy: The policy of key.
         * <p>
         * @return {@code this}
         * @param policy Property policy: The policy of key. This parameter is required.
         */
        public Builder policy(final com.aliyun.ros.cdk.core.IResolvable policy) {
            this.props().policy(policy);
            return this;
        }
        /**
         * Property policy: The policy of key.
         * <p>
         * @return {@code this}
         * @param policy Property policy: The policy of key. This parameter is required.
         */
        public Builder policy(final java.util.Map<java.lang.String, ? extends java.lang.Object> policy) {
            this.props().policy(policy);
            return this;
        }

        /**
         * Property protectionLevel: The protection level of the CMK to create.
         * <p>
         * Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
         * If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
         * If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
         * <p>
         * @return {@code this}
         * @param protectionLevel Property protectionLevel: The protection level of the CMK to create. This parameter is required.
         */
        public Builder protectionLevel(final java.lang.String protectionLevel) {
            this.props().protectionLevel(protectionLevel);
            return this;
        }
        /**
         * Property protectionLevel: The protection level of the CMK to create.
         * <p>
         * Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
         * If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
         * If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
         * <p>
         * @return {@code this}
         * @param protectionLevel Property protectionLevel: The protection level of the CMK to create. This parameter is required.
         */
        public Builder protectionLevel(final com.aliyun.ros.cdk.core.IResolvable protectionLevel) {
            this.props().protectionLevel(protectionLevel);
            return this;
        }

        /**
         * Property rotationInterval: The time period for automatic rotation.
         * <p>
         * The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
         * <p>
         * @return {@code this}
         * @param rotationInterval Property rotationInterval: The time period for automatic rotation. This parameter is required.
         */
        public Builder rotationInterval(final java.lang.String rotationInterval) {
            this.props().rotationInterval(rotationInterval);
            return this;
        }
        /**
         * Property rotationInterval: The time period for automatic rotation.
         * <p>
         * The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
         * <p>
         * @return {@code this}
         * @param rotationInterval Property rotationInterval: The time period for automatic rotation. This parameter is required.
         */
        public Builder rotationInterval(final com.aliyun.ros.cdk.core.IResolvable rotationInterval) {
            this.props().rotationInterval(rotationInterval);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.kms.Key}.
         */
        @Override
        public com.aliyun.ros.cdk.kms.Key build() {
            return new com.aliyun.ros.cdk.kms.Key(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.kms.KeyProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.kms.KeyProps.Builder();
            }
            return this.props;
        }
    }
}
