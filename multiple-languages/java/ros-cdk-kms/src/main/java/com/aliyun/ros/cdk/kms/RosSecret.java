package com.aliyun.ros.cdk.kms;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::KMS::Secret</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:39:52.898Z")
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
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getDkmsInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "dkmsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDkmsInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dkmsInstanceId", value);
    }

    /**
     */
    public void setDkmsInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dkmsInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableAutomaticRotation() {
        return software.amazon.jsii.Kernel.get(this, "enableAutomaticRotation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableAutomaticRotation(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableAutomaticRotation", value);
    }

    /**
     */
    public void setEnableAutomaticRotation(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableAutomaticRotation", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getExtendedConfig() {
        return software.amazon.jsii.Kernel.get(this, "extendedConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExtendedConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "extendedConfig", value);
    }

    /**
     */
    public void setExtendedConfig(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "extendedConfig", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getPolicy() {
        return software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "policy", value);
    }

    /**
     */
    public void setPolicy(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "policy", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getRotationInterval() {
        return software.amazon.jsii.Kernel.get(this, "rotationInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRotationInterval(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rotationInterval", value);
    }

    /**
     */
    public void setRotationInterval(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rotationInterval", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecretType() {
        return software.amazon.jsii.Kernel.get(this, "secretType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecretType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "secretType", value);
    }

    /**
     */
    public void setSecretType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "secretType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.kms.RosSecret.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.kms.RosSecret.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kms.RosSecret.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.kms.RosSecret.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
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
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "versionStages", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.RosSecret.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kms.RosSecret.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.kms.RosSecret}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.kms.RosSecret> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
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
         * @param dkmsInstanceId This parameter is required.
         */
        public Builder dkmsInstanceId(final java.lang.String dkmsInstanceId) {
            this.props.dkmsInstanceId(dkmsInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dkmsInstanceId This parameter is required.
         */
        public Builder dkmsInstanceId(final com.aliyun.ros.cdk.core.IResolvable dkmsInstanceId) {
            this.props.dkmsInstanceId(dkmsInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableAutomaticRotation This parameter is required.
         */
        public Builder enableAutomaticRotation(final java.lang.Boolean enableAutomaticRotation) {
            this.props.enableAutomaticRotation(enableAutomaticRotation);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableAutomaticRotation This parameter is required.
         */
        public Builder enableAutomaticRotation(final com.aliyun.ros.cdk.core.IResolvable enableAutomaticRotation) {
            this.props.enableAutomaticRotation(enableAutomaticRotation);
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
         * @param extendedConfig This parameter is required.
         */
        public Builder extendedConfig(final com.aliyun.ros.cdk.core.IResolvable extendedConfig) {
            this.props.extendedConfig(extendedConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param extendedConfig This parameter is required.
         */
        public Builder extendedConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> extendedConfig) {
            this.props.extendedConfig(extendedConfig);
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
         * @param policy This parameter is required.
         */
        public Builder policy(final com.aliyun.ros.cdk.core.IResolvable policy) {
            this.props.policy(policy);
            return this;
        }
        /**
         * @return {@code this}
         * @param policy This parameter is required.
         */
        public Builder policy(final java.util.Map<java.lang.String, ? extends java.lang.Object> policy) {
            this.props.policy(policy);
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
         * @param rotationInterval This parameter is required.
         */
        public Builder rotationInterval(final java.lang.String rotationInterval) {
            this.props.rotationInterval(rotationInterval);
            return this;
        }
        /**
         * @return {@code this}
         * @param rotationInterval This parameter is required.
         */
        public Builder rotationInterval(final com.aliyun.ros.cdk.core.IResolvable rotationInterval) {
            this.props.rotationInterval(rotationInterval);
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
         * @param secretType This parameter is required.
         */
        public Builder secretType(final java.lang.String secretType) {
            this.props.secretType(secretType);
            return this;
        }
        /**
         * @return {@code this}
         * @param secretType This parameter is required.
         */
        public Builder secretType(final com.aliyun.ros.cdk.core.IResolvable secretType) {
            this.props.secretType(secretType);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.kms.RosSecret.TagsProperty> tags) {
            this.props.tags(tags);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.kms.RosSecret}.
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
