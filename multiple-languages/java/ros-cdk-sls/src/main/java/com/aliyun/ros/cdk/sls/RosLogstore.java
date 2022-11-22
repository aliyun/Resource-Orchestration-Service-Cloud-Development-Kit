package com.aliyun.ros.cdk.sls;

/**
 * A ROS template type:  `ALIYUN::SLS::Logstore`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:30.512Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosLogstore")
public class RosLogstore extends com.aliyun.ros.cdk.core.RosResource {

    protected RosLogstore(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosLogstore(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sls.RosLogstore.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::SLS::Logstore`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosLogstore(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.RosLogstoreProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLogstoreName() {
        return software.amazon.jsii.Kernel.get(this, "attrLogstoreName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getLogstoreName() {
        return software.amazon.jsii.Kernel.get(this, "logstoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogstoreName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "logstoreName", java.util.Objects.requireNonNull(value, "logstoreName is required"));
    }

    /**
     */
    public void setLogstoreName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logstoreName", java.util.Objects.requireNonNull(value, "logstoreName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProjectName() {
        return software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProjectName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "projectName", java.util.Objects.requireNonNull(value, "projectName is required"));
    }

    /**
     */
    public void setProjectName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "projectName", java.util.Objects.requireNonNull(value, "projectName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAppendMeta() {
        return software.amazon.jsii.Kernel.get(this, "appendMeta", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppendMeta(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "appendMeta", value);
    }

    /**
     */
    public void setAppendMeta(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appendMeta", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoSplit() {
        return software.amazon.jsii.Kernel.get(this, "autoSplit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoSplit(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoSplit", value);
    }

    /**
     */
    public void setAutoSplit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoSplit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableTracking() {
        return software.amazon.jsii.Kernel.get(this, "enableTracking", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableTracking(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableTracking", value);
    }

    /**
     */
    public void setEnableTracking(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableTracking", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEncryptConf() {
        return software.amazon.jsii.Kernel.get(this, "encryptConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEncryptConf(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "encryptConf", value);
    }

    /**
     */
    public void setEncryptConf(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.sls.RosLogstore.EncryptConfProperty value) {
        software.amazon.jsii.Kernel.set(this, "encryptConf", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxSplitShard() {
        return software.amazon.jsii.Kernel.get(this, "maxSplitShard", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxSplitShard(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxSplitShard", value);
    }

    /**
     */
    public void setMaxSplitShard(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxSplitShard", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPreserveStorage() {
        return software.amazon.jsii.Kernel.get(this, "preserveStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPreserveStorage(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "preserveStorage", value);
    }

    /**
     */
    public void setPreserveStorage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "preserveStorage", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getShardCount() {
        return software.amazon.jsii.Kernel.get(this, "shardCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setShardCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "shardCount", value);
    }

    /**
     */
    public void setShardCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "shardCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTtl() {
        return software.amazon.jsii.Kernel.get(this, "ttl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTtl(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ttl", value);
    }

    /**
     */
    public void setTtl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ttl", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosLogstore.EncryptConfProperty")
    @software.amazon.jsii.Jsii.Proxy(EncryptConfProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EncryptConfProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnable();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEncryptType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUserCmkInfo() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EncryptConfProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EncryptConfProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EncryptConfProperty> {
            java.lang.Object enable;
            java.lang.Object encryptType;
            java.lang.Object userCmkInfo;

            /**
             * Sets the value of {@link EncryptConfProperty#getEnable}
             * @param enable the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(java.lang.Boolean enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link EncryptConfProperty#getEnable}
             * @param enable the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link EncryptConfProperty#getEncryptType}
             * @param encryptType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encryptType(java.lang.String encryptType) {
                this.encryptType = encryptType;
                return this;
            }

            /**
             * Sets the value of {@link EncryptConfProperty#getEncryptType}
             * @param encryptType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encryptType(com.aliyun.ros.cdk.core.IResolvable encryptType) {
                this.encryptType = encryptType;
                return this;
            }

            /**
             * Sets the value of {@link EncryptConfProperty#getUserCmkInfo}
             * @param userCmkInfo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userCmkInfo(com.aliyun.ros.cdk.core.IResolvable userCmkInfo) {
                this.userCmkInfo = userCmkInfo;
                return this;
            }

            /**
             * Sets the value of {@link EncryptConfProperty#getUserCmkInfo}
             * @param userCmkInfo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userCmkInfo(com.aliyun.ros.cdk.sls.RosLogstore.UserCmkInfoProperty userCmkInfo) {
                this.userCmkInfo = userCmkInfo;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EncryptConfProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EncryptConfProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EncryptConfProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EncryptConfProperty {
            private final java.lang.Object enable;
            private final java.lang.Object encryptType;
            private final java.lang.Object userCmkInfo;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.encryptType = software.amazon.jsii.Kernel.get(this, "encryptType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userCmkInfo = software.amazon.jsii.Kernel.get(this, "userCmkInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enable = java.util.Objects.requireNonNull(builder.enable, "enable is required");
                this.encryptType = java.util.Objects.requireNonNull(builder.encryptType, "encryptType is required");
                this.userCmkInfo = builder.userCmkInfo;
            }

            @Override
            public final java.lang.Object getEnable() {
                return this.enable;
            }

            @Override
            public final java.lang.Object getEncryptType() {
                return this.encryptType;
            }

            @Override
            public final java.lang.Object getUserCmkInfo() {
                return this.userCmkInfo;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("enable", om.valueToTree(this.getEnable()));
                data.set("encryptType", om.valueToTree(this.getEncryptType()));
                if (this.getUserCmkInfo() != null) {
                    data.set("userCmkInfo", om.valueToTree(this.getUserCmkInfo()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosLogstore.EncryptConfProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EncryptConfProperty.Jsii$Proxy that = (EncryptConfProperty.Jsii$Proxy) o;

                if (!enable.equals(that.enable)) return false;
                if (!encryptType.equals(that.encryptType)) return false;
                return this.userCmkInfo != null ? this.userCmkInfo.equals(that.userCmkInfo) : that.userCmkInfo == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enable.hashCode();
                result = 31 * result + (this.encryptType.hashCode());
                result = 31 * result + (this.userCmkInfo != null ? this.userCmkInfo.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosLogstore.UserCmkInfoProperty")
    @software.amazon.jsii.Jsii.Proxy(UserCmkInfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface UserCmkInfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getArn();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCmkKeyId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRegionId();

        /**
         * @return a {@link Builder} of {@link UserCmkInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link UserCmkInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<UserCmkInfoProperty> {
            java.lang.Object arn;
            java.lang.Object cmkKeyId;
            java.lang.Object regionId;

            /**
             * Sets the value of {@link UserCmkInfoProperty#getArn}
             * @param arn the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder arn(java.lang.String arn) {
                this.arn = arn;
                return this;
            }

            /**
             * Sets the value of {@link UserCmkInfoProperty#getArn}
             * @param arn the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder arn(com.aliyun.ros.cdk.core.IResolvable arn) {
                this.arn = arn;
                return this;
            }

            /**
             * Sets the value of {@link UserCmkInfoProperty#getCmkKeyId}
             * @param cmkKeyId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cmkKeyId(java.lang.String cmkKeyId) {
                this.cmkKeyId = cmkKeyId;
                return this;
            }

            /**
             * Sets the value of {@link UserCmkInfoProperty#getCmkKeyId}
             * @param cmkKeyId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cmkKeyId(com.aliyun.ros.cdk.core.IResolvable cmkKeyId) {
                this.cmkKeyId = cmkKeyId;
                return this;
            }

            /**
             * Sets the value of {@link UserCmkInfoProperty#getRegionId}
             * @param regionId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(java.lang.String regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Sets the value of {@link UserCmkInfoProperty#getRegionId}
             * @param regionId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link UserCmkInfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public UserCmkInfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link UserCmkInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UserCmkInfoProperty {
            private final java.lang.Object arn;
            private final java.lang.Object cmkKeyId;
            private final java.lang.Object regionId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.arn = software.amazon.jsii.Kernel.get(this, "arn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cmkKeyId = software.amazon.jsii.Kernel.get(this, "cmkKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.arn = java.util.Objects.requireNonNull(builder.arn, "arn is required");
                this.cmkKeyId = java.util.Objects.requireNonNull(builder.cmkKeyId, "cmkKeyId is required");
                this.regionId = java.util.Objects.requireNonNull(builder.regionId, "regionId is required");
            }

            @Override
            public final java.lang.Object getArn() {
                return this.arn;
            }

            @Override
            public final java.lang.Object getCmkKeyId() {
                return this.cmkKeyId;
            }

            @Override
            public final java.lang.Object getRegionId() {
                return this.regionId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("arn", om.valueToTree(this.getArn()));
                data.set("cmkKeyId", om.valueToTree(this.getCmkKeyId()));
                data.set("regionId", om.valueToTree(this.getRegionId()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosLogstore.UserCmkInfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                UserCmkInfoProperty.Jsii$Proxy that = (UserCmkInfoProperty.Jsii$Proxy) o;

                if (!arn.equals(that.arn)) return false;
                if (!cmkKeyId.equals(that.cmkKeyId)) return false;
                return this.regionId.equals(that.regionId);
            }

            @Override
            public final int hashCode() {
                int result = this.arn.hashCode();
                result = 31 * result + (this.cmkKeyId.hashCode());
                result = 31 * result + (this.regionId.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.RosLogstore}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.RosLogstore> {
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
        private final com.aliyun.ros.cdk.sls.RosLogstoreProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.RosLogstoreProps.Builder();
        }

        /**
         * @return {@code this}
         * @param logstoreName This parameter is required.
         */
        public Builder logstoreName(final java.lang.String logstoreName) {
            this.props.logstoreName(logstoreName);
            return this;
        }
        /**
         * @return {@code this}
         * @param logstoreName This parameter is required.
         */
        public Builder logstoreName(final com.aliyun.ros.cdk.core.IResolvable logstoreName) {
            this.props.logstoreName(logstoreName);
            return this;
        }

        /**
         * @return {@code this}
         * @param projectName This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props.projectName(projectName);
            return this;
        }
        /**
         * @return {@code this}
         * @param projectName This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props.projectName(projectName);
            return this;
        }

        /**
         * @return {@code this}
         * @param appendMeta This parameter is required.
         */
        public Builder appendMeta(final java.lang.Boolean appendMeta) {
            this.props.appendMeta(appendMeta);
            return this;
        }
        /**
         * @return {@code this}
         * @param appendMeta This parameter is required.
         */
        public Builder appendMeta(final com.aliyun.ros.cdk.core.IResolvable appendMeta) {
            this.props.appendMeta(appendMeta);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoSplit This parameter is required.
         */
        public Builder autoSplit(final java.lang.Boolean autoSplit) {
            this.props.autoSplit(autoSplit);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoSplit This parameter is required.
         */
        public Builder autoSplit(final com.aliyun.ros.cdk.core.IResolvable autoSplit) {
            this.props.autoSplit(autoSplit);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableTracking This parameter is required.
         */
        public Builder enableTracking(final java.lang.Boolean enableTracking) {
            this.props.enableTracking(enableTracking);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableTracking This parameter is required.
         */
        public Builder enableTracking(final com.aliyun.ros.cdk.core.IResolvable enableTracking) {
            this.props.enableTracking(enableTracking);
            return this;
        }

        /**
         * @return {@code this}
         * @param encryptConf This parameter is required.
         */
        public Builder encryptConf(final com.aliyun.ros.cdk.core.IResolvable encryptConf) {
            this.props.encryptConf(encryptConf);
            return this;
        }
        /**
         * @return {@code this}
         * @param encryptConf This parameter is required.
         */
        public Builder encryptConf(final com.aliyun.ros.cdk.sls.RosLogstore.EncryptConfProperty encryptConf) {
            this.props.encryptConf(encryptConf);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxSplitShard This parameter is required.
         */
        public Builder maxSplitShard(final java.lang.Number maxSplitShard) {
            this.props.maxSplitShard(maxSplitShard);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxSplitShard This parameter is required.
         */
        public Builder maxSplitShard(final com.aliyun.ros.cdk.core.IResolvable maxSplitShard) {
            this.props.maxSplitShard(maxSplitShard);
            return this;
        }

        /**
         * @return {@code this}
         * @param preserveStorage This parameter is required.
         */
        public Builder preserveStorage(final java.lang.Boolean preserveStorage) {
            this.props.preserveStorage(preserveStorage);
            return this;
        }
        /**
         * @return {@code this}
         * @param preserveStorage This parameter is required.
         */
        public Builder preserveStorage(final com.aliyun.ros.cdk.core.IResolvable preserveStorage) {
            this.props.preserveStorage(preserveStorage);
            return this;
        }

        /**
         * @return {@code this}
         * @param shardCount This parameter is required.
         */
        public Builder shardCount(final java.lang.Number shardCount) {
            this.props.shardCount(shardCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param shardCount This parameter is required.
         */
        public Builder shardCount(final com.aliyun.ros.cdk.core.IResolvable shardCount) {
            this.props.shardCount(shardCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param ttl This parameter is required.
         */
        public Builder ttl(final java.lang.Number ttl) {
            this.props.ttl(ttl);
            return this;
        }
        /**
         * @return {@code this}
         * @param ttl This parameter is required.
         */
        public Builder ttl(final com.aliyun.ros.cdk.core.IResolvable ttl) {
            this.props.ttl(ttl);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sls.RosLogstore}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.RosLogstore build() {
            return new com.aliyun.ros.cdk.sls.RosLogstore(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
