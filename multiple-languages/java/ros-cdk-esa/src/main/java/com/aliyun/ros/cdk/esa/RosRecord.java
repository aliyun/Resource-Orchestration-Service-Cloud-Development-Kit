package com.aliyun.ros.cdk.esa;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ESA::Record</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.677Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosRecord")
public class RosRecord extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRecord(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRecord(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.esa.RosRecord.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRecord(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RosRecordProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAuthConf() {
        return software.amazon.jsii.Kernel.get(this, "attrAuthConf", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBizName() {
        return software.amazon.jsii.Kernel.get(this, "attrBizName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrComment() {
        return software.amazon.jsii.Kernel.get(this, "attrComment", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrData() {
        return software.amazon.jsii.Kernel.get(this, "attrData", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostPolicy() {
        return software.amazon.jsii.Kernel.get(this, "attrHostPolicy", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrModifyTime() {
        return software.amazon.jsii.Kernel.get(this, "attrModifyTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProxied() {
        return software.amazon.jsii.Kernel.get(this, "attrProxied", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRecordCname() {
        return software.amazon.jsii.Kernel.get(this, "attrRecordCname", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRecordId() {
        return software.amazon.jsii.Kernel.get(this, "attrRecordId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRecordName() {
        return software.amazon.jsii.Kernel.get(this, "attrRecordName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRecordType() {
        return software.amazon.jsii.Kernel.get(this, "attrRecordType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSiteId() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSiteName() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTtl() {
        return software.amazon.jsii.Kernel.get(this, "attrTtl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getData() {
        return software.amazon.jsii.Kernel.get(this, "data", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setData(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "data", java.util.Objects.requireNonNull(value, "data is required"));
    }

    /**
     */
    public void setData(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RosRecord.DataProperty value) {
        software.amazon.jsii.Kernel.set(this, "data", java.util.Objects.requireNonNull(value, "data is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRecordName() {
        return software.amazon.jsii.Kernel.get(this, "recordName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRecordName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "recordName", java.util.Objects.requireNonNull(value, "recordName is required"));
    }

    /**
     */
    public void setRecordName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "recordName", java.util.Objects.requireNonNull(value, "recordName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRecordType() {
        return software.amazon.jsii.Kernel.get(this, "recordType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRecordType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "recordType", java.util.Objects.requireNonNull(value, "recordType is required"));
    }

    /**
     */
    public void setRecordType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "recordType", java.util.Objects.requireNonNull(value, "recordType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSiteId() {
        return software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSiteId(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "siteId", java.util.Objects.requireNonNull(value, "siteId is required"));
    }

    /**
     */
    public void setSiteId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "siteId", java.util.Objects.requireNonNull(value, "siteId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAuthConf() {
        return software.amazon.jsii.Kernel.get(this, "authConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuthConf(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "authConf", value);
    }

    /**
     */
    public void setAuthConf(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.esa.RosRecord.AuthConfProperty value) {
        software.amazon.jsii.Kernel.set(this, "authConf", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBizName() {
        return software.amazon.jsii.Kernel.get(this, "bizName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBizName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bizName", value);
    }

    /**
     */
    public void setBizName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bizName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getComment() {
        return software.amazon.jsii.Kernel.get(this, "comment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setComment(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "comment", value);
    }

    /**
     */
    public void setComment(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "comment", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHostPolicy() {
        return software.amazon.jsii.Kernel.get(this, "hostPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHostPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hostPolicy", value);
    }

    /**
     */
    public void setHostPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hostPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProxied() {
        return software.amazon.jsii.Kernel.get(this, "proxied", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProxied(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "proxied", value);
    }

    /**
     */
    public void setProxied(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "proxied", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceType() {
        return software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceType", value);
    }

    /**
     */
    public void setSourceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceType", value);
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosRecord.AuthConfProperty")
    @software.amazon.jsii.Jsii.Proxy(AuthConfProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AuthConfProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAccessKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAuthType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecretKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVersion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AuthConfProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AuthConfProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AuthConfProperty> {
            java.lang.Object accessKey;
            java.lang.Object authType;
            java.lang.Object region;
            java.lang.Object secretKey;
            java.lang.Object version;

            /**
             * Sets the value of {@link AuthConfProperty#getAccessKey}
             * @param accessKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accessKey(java.lang.String accessKey) {
                this.accessKey = accessKey;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfProperty#getAccessKey}
             * @param accessKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accessKey(com.aliyun.ros.cdk.core.IResolvable accessKey) {
                this.accessKey = accessKey;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfProperty#getAuthType}
             * @param authType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authType(java.lang.String authType) {
                this.authType = authType;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfProperty#getAuthType}
             * @param authType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authType(com.aliyun.ros.cdk.core.IResolvable authType) {
                this.authType = authType;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfProperty#getRegion}
             * @param region the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder region(java.lang.String region) {
                this.region = region;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfProperty#getRegion}
             * @param region the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder region(com.aliyun.ros.cdk.core.IResolvable region) {
                this.region = region;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfProperty#getSecretKey}
             * @param secretKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder secretKey(java.lang.String secretKey) {
                this.secretKey = secretKey;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfProperty#getSecretKey}
             * @param secretKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder secretKey(com.aliyun.ros.cdk.core.IResolvable secretKey) {
                this.secretKey = secretKey;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(java.lang.String version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
                this.version = version;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AuthConfProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AuthConfProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AuthConfProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AuthConfProperty {
            private final java.lang.Object accessKey;
            private final java.lang.Object authType;
            private final java.lang.Object region;
            private final java.lang.Object secretKey;
            private final java.lang.Object version;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.accessKey = software.amazon.jsii.Kernel.get(this, "accessKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.authType = software.amazon.jsii.Kernel.get(this, "authType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.secretKey = software.amazon.jsii.Kernel.get(this, "secretKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.accessKey = builder.accessKey;
                this.authType = builder.authType;
                this.region = builder.region;
                this.secretKey = builder.secretKey;
                this.version = builder.version;
            }

            @Override
            public final java.lang.Object getAccessKey() {
                return this.accessKey;
            }

            @Override
            public final java.lang.Object getAuthType() {
                return this.authType;
            }

            @Override
            public final java.lang.Object getRegion() {
                return this.region;
            }

            @Override
            public final java.lang.Object getSecretKey() {
                return this.secretKey;
            }

            @Override
            public final java.lang.Object getVersion() {
                return this.version;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAccessKey() != null) {
                    data.set("accessKey", om.valueToTree(this.getAccessKey()));
                }
                if (this.getAuthType() != null) {
                    data.set("authType", om.valueToTree(this.getAuthType()));
                }
                if (this.getRegion() != null) {
                    data.set("region", om.valueToTree(this.getRegion()));
                }
                if (this.getSecretKey() != null) {
                    data.set("secretKey", om.valueToTree(this.getSecretKey()));
                }
                if (this.getVersion() != null) {
                    data.set("version", om.valueToTree(this.getVersion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosRecord.AuthConfProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AuthConfProperty.Jsii$Proxy that = (AuthConfProperty.Jsii$Proxy) o;

                if (this.accessKey != null ? !this.accessKey.equals(that.accessKey) : that.accessKey != null) return false;
                if (this.authType != null ? !this.authType.equals(that.authType) : that.authType != null) return false;
                if (this.region != null ? !this.region.equals(that.region) : that.region != null) return false;
                if (this.secretKey != null ? !this.secretKey.equals(that.secretKey) : that.secretKey != null) return false;
                return this.version != null ? this.version.equals(that.version) : that.version == null;
            }

            @Override
            public final int hashCode() {
                int result = this.accessKey != null ? this.accessKey.hashCode() : 0;
                result = 31 * result + (this.authType != null ? this.authType.hashCode() : 0);
                result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
                result = 31 * result + (this.secretKey != null ? this.secretKey.hashCode() : 0);
                result = 31 * result + (this.version != null ? this.version.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosRecord.DataProperty")
    @software.amazon.jsii.Jsii.Proxy(DataProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DataProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAlgorithm() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCertificate() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFingerprint() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFlag() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKeyTag() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchingType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSelector() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTag() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUsage() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWeight() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DataProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DataProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DataProperty> {
            java.lang.Object algorithm;
            java.lang.Object certificate;
            java.lang.Object fingerprint;
            java.lang.Object flag;
            java.lang.Object keyTag;
            java.lang.Object matchingType;
            java.lang.Object port;
            java.lang.Object priority;
            java.lang.Object selector;
            java.lang.Object tag;
            java.lang.Object type;
            java.lang.Object usage;
            java.lang.Object value;
            java.lang.Object weight;

            /**
             * Sets the value of {@link DataProperty#getAlgorithm}
             * @param algorithm the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder algorithm(java.lang.Number algorithm) {
                this.algorithm = algorithm;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getAlgorithm}
             * @param algorithm the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder algorithm(com.aliyun.ros.cdk.core.IResolvable algorithm) {
                this.algorithm = algorithm;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getCertificate}
             * @param certificate the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder certificate(java.lang.String certificate) {
                this.certificate = certificate;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getCertificate}
             * @param certificate the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder certificate(com.aliyun.ros.cdk.core.IResolvable certificate) {
                this.certificate = certificate;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getFingerprint}
             * @param fingerprint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fingerprint(java.lang.String fingerprint) {
                this.fingerprint = fingerprint;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getFingerprint}
             * @param fingerprint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fingerprint(com.aliyun.ros.cdk.core.IResolvable fingerprint) {
                this.fingerprint = fingerprint;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getFlag}
             * @param flag the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder flag(java.lang.Number flag) {
                this.flag = flag;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getFlag}
             * @param flag the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder flag(com.aliyun.ros.cdk.core.IResolvable flag) {
                this.flag = flag;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getKeyTag}
             * @param keyTag the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyTag(java.lang.Number keyTag) {
                this.keyTag = keyTag;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getKeyTag}
             * @param keyTag the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyTag(com.aliyun.ros.cdk.core.IResolvable keyTag) {
                this.keyTag = keyTag;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getMatchingType}
             * @param matchingType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchingType(java.lang.Number matchingType) {
                this.matchingType = matchingType;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getMatchingType}
             * @param matchingType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchingType(com.aliyun.ros.cdk.core.IResolvable matchingType) {
                this.matchingType = matchingType;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.Number port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(java.lang.Number priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getPriority}
             * @param priority the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getSelector}
             * @param selector the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder selector(java.lang.Number selector) {
                this.selector = selector;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getSelector}
             * @param selector the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder selector(com.aliyun.ros.cdk.core.IResolvable selector) {
                this.selector = selector;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getTag}
             * @param tag the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tag(java.lang.String tag) {
                this.tag = tag;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getTag}
             * @param tag the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tag(com.aliyun.ros.cdk.core.IResolvable tag) {
                this.tag = tag;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.Number type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getUsage}
             * @param usage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder usage(java.lang.Number usage) {
                this.usage = usage;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getUsage}
             * @param usage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder usage(com.aliyun.ros.cdk.core.IResolvable usage) {
                this.usage = usage;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getWeight}
             * @param weight the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weight(java.lang.Number weight) {
                this.weight = weight;
                return this;
            }

            /**
             * Sets the value of {@link DataProperty#getWeight}
             * @param weight the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weight(com.aliyun.ros.cdk.core.IResolvable weight) {
                this.weight = weight;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DataProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DataProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DataProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DataProperty {
            private final java.lang.Object algorithm;
            private final java.lang.Object certificate;
            private final java.lang.Object fingerprint;
            private final java.lang.Object flag;
            private final java.lang.Object keyTag;
            private final java.lang.Object matchingType;
            private final java.lang.Object port;
            private final java.lang.Object priority;
            private final java.lang.Object selector;
            private final java.lang.Object tag;
            private final java.lang.Object type;
            private final java.lang.Object usage;
            private final java.lang.Object value;
            private final java.lang.Object weight;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.algorithm = software.amazon.jsii.Kernel.get(this, "algorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.certificate = software.amazon.jsii.Kernel.get(this, "certificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fingerprint = software.amazon.jsii.Kernel.get(this, "fingerprint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.flag = software.amazon.jsii.Kernel.get(this, "flag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.keyTag = software.amazon.jsii.Kernel.get(this, "keyTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.matchingType = software.amazon.jsii.Kernel.get(this, "matchingType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.selector = software.amazon.jsii.Kernel.get(this, "selector", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tag = software.amazon.jsii.Kernel.get(this, "tag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.usage = software.amazon.jsii.Kernel.get(this, "usage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.weight = software.amazon.jsii.Kernel.get(this, "weight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.algorithm = builder.algorithm;
                this.certificate = builder.certificate;
                this.fingerprint = builder.fingerprint;
                this.flag = builder.flag;
                this.keyTag = builder.keyTag;
                this.matchingType = builder.matchingType;
                this.port = builder.port;
                this.priority = builder.priority;
                this.selector = builder.selector;
                this.tag = builder.tag;
                this.type = builder.type;
                this.usage = builder.usage;
                this.value = builder.value;
                this.weight = builder.weight;
            }

            @Override
            public final java.lang.Object getAlgorithm() {
                return this.algorithm;
            }

            @Override
            public final java.lang.Object getCertificate() {
                return this.certificate;
            }

            @Override
            public final java.lang.Object getFingerprint() {
                return this.fingerprint;
            }

            @Override
            public final java.lang.Object getFlag() {
                return this.flag;
            }

            @Override
            public final java.lang.Object getKeyTag() {
                return this.keyTag;
            }

            @Override
            public final java.lang.Object getMatchingType() {
                return this.matchingType;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getPriority() {
                return this.priority;
            }

            @Override
            public final java.lang.Object getSelector() {
                return this.selector;
            }

            @Override
            public final java.lang.Object getTag() {
                return this.tag;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getUsage() {
                return this.usage;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            public final java.lang.Object getWeight() {
                return this.weight;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAlgorithm() != null) {
                    data.set("algorithm", om.valueToTree(this.getAlgorithm()));
                }
                if (this.getCertificate() != null) {
                    data.set("certificate", om.valueToTree(this.getCertificate()));
                }
                if (this.getFingerprint() != null) {
                    data.set("fingerprint", om.valueToTree(this.getFingerprint()));
                }
                if (this.getFlag() != null) {
                    data.set("flag", om.valueToTree(this.getFlag()));
                }
                if (this.getKeyTag() != null) {
                    data.set("keyTag", om.valueToTree(this.getKeyTag()));
                }
                if (this.getMatchingType() != null) {
                    data.set("matchingType", om.valueToTree(this.getMatchingType()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getPriority() != null) {
                    data.set("priority", om.valueToTree(this.getPriority()));
                }
                if (this.getSelector() != null) {
                    data.set("selector", om.valueToTree(this.getSelector()));
                }
                if (this.getTag() != null) {
                    data.set("tag", om.valueToTree(this.getTag()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }
                if (this.getUsage() != null) {
                    data.set("usage", om.valueToTree(this.getUsage()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }
                if (this.getWeight() != null) {
                    data.set("weight", om.valueToTree(this.getWeight()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosRecord.DataProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DataProperty.Jsii$Proxy that = (DataProperty.Jsii$Proxy) o;

                if (this.algorithm != null ? !this.algorithm.equals(that.algorithm) : that.algorithm != null) return false;
                if (this.certificate != null ? !this.certificate.equals(that.certificate) : that.certificate != null) return false;
                if (this.fingerprint != null ? !this.fingerprint.equals(that.fingerprint) : that.fingerprint != null) return false;
                if (this.flag != null ? !this.flag.equals(that.flag) : that.flag != null) return false;
                if (this.keyTag != null ? !this.keyTag.equals(that.keyTag) : that.keyTag != null) return false;
                if (this.matchingType != null ? !this.matchingType.equals(that.matchingType) : that.matchingType != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
                if (this.selector != null ? !this.selector.equals(that.selector) : that.selector != null) return false;
                if (this.tag != null ? !this.tag.equals(that.tag) : that.tag != null) return false;
                if (this.type != null ? !this.type.equals(that.type) : that.type != null) return false;
                if (this.usage != null ? !this.usage.equals(that.usage) : that.usage != null) return false;
                if (this.value != null ? !this.value.equals(that.value) : that.value != null) return false;
                return this.weight != null ? this.weight.equals(that.weight) : that.weight == null;
            }

            @Override
            public final int hashCode() {
                int result = this.algorithm != null ? this.algorithm.hashCode() : 0;
                result = 31 * result + (this.certificate != null ? this.certificate.hashCode() : 0);
                result = 31 * result + (this.fingerprint != null ? this.fingerprint.hashCode() : 0);
                result = 31 * result + (this.flag != null ? this.flag.hashCode() : 0);
                result = 31 * result + (this.keyTag != null ? this.keyTag.hashCode() : 0);
                result = 31 * result + (this.matchingType != null ? this.matchingType.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
                result = 31 * result + (this.selector != null ? this.selector.hashCode() : 0);
                result = 31 * result + (this.tag != null ? this.tag.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                result = 31 * result + (this.usage != null ? this.usage.hashCode() : 0);
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                result = 31 * result + (this.weight != null ? this.weight.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.RosRecord}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.RosRecord> {
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
        private final com.aliyun.ros.cdk.esa.RosRecordProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.RosRecordProps.Builder();
        }

        /**
         * @return {@code this}
         * @param data This parameter is required.
         */
        public Builder data(final com.aliyun.ros.cdk.core.IResolvable data) {
            this.props.data(data);
            return this;
        }
        /**
         * @return {@code this}
         * @param data This parameter is required.
         */
        public Builder data(final com.aliyun.ros.cdk.esa.RosRecord.DataProperty data) {
            this.props.data(data);
            return this;
        }

        /**
         * @return {@code this}
         * @param recordName This parameter is required.
         */
        public Builder recordName(final java.lang.String recordName) {
            this.props.recordName(recordName);
            return this;
        }
        /**
         * @return {@code this}
         * @param recordName This parameter is required.
         */
        public Builder recordName(final com.aliyun.ros.cdk.core.IResolvable recordName) {
            this.props.recordName(recordName);
            return this;
        }

        /**
         * @return {@code this}
         * @param recordType This parameter is required.
         */
        public Builder recordType(final java.lang.String recordType) {
            this.props.recordType(recordType);
            return this;
        }
        /**
         * @return {@code this}
         * @param recordType This parameter is required.
         */
        public Builder recordType(final com.aliyun.ros.cdk.core.IResolvable recordType) {
            this.props.recordType(recordType);
            return this;
        }

        /**
         * @return {@code this}
         * @param siteId This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * @return {@code this}
         * @param siteId This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * @return {@code this}
         * @param authConf This parameter is required.
         */
        public Builder authConf(final com.aliyun.ros.cdk.core.IResolvable authConf) {
            this.props.authConf(authConf);
            return this;
        }
        /**
         * @return {@code this}
         * @param authConf This parameter is required.
         */
        public Builder authConf(final com.aliyun.ros.cdk.esa.RosRecord.AuthConfProperty authConf) {
            this.props.authConf(authConf);
            return this;
        }

        /**
         * @return {@code this}
         * @param bizName This parameter is required.
         */
        public Builder bizName(final java.lang.String bizName) {
            this.props.bizName(bizName);
            return this;
        }
        /**
         * @return {@code this}
         * @param bizName This parameter is required.
         */
        public Builder bizName(final com.aliyun.ros.cdk.core.IResolvable bizName) {
            this.props.bizName(bizName);
            return this;
        }

        /**
         * @return {@code this}
         * @param comment This parameter is required.
         */
        public Builder comment(final java.lang.String comment) {
            this.props.comment(comment);
            return this;
        }
        /**
         * @return {@code this}
         * @param comment This parameter is required.
         */
        public Builder comment(final com.aliyun.ros.cdk.core.IResolvable comment) {
            this.props.comment(comment);
            return this;
        }

        /**
         * @return {@code this}
         * @param hostPolicy This parameter is required.
         */
        public Builder hostPolicy(final java.lang.String hostPolicy) {
            this.props.hostPolicy(hostPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param hostPolicy This parameter is required.
         */
        public Builder hostPolicy(final com.aliyun.ros.cdk.core.IResolvable hostPolicy) {
            this.props.hostPolicy(hostPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param proxied This parameter is required.
         */
        public Builder proxied(final java.lang.Boolean proxied) {
            this.props.proxied(proxied);
            return this;
        }
        /**
         * @return {@code this}
         * @param proxied This parameter is required.
         */
        public Builder proxied(final com.aliyun.ros.cdk.core.IResolvable proxied) {
            this.props.proxied(proxied);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceType This parameter is required.
         */
        public Builder sourceType(final java.lang.String sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceType This parameter is required.
         */
        public Builder sourceType(final com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.props.sourceType(sourceType);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.RosRecord}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.RosRecord build() {
            return new com.aliyun.ros.cdk.esa.RosRecord(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
