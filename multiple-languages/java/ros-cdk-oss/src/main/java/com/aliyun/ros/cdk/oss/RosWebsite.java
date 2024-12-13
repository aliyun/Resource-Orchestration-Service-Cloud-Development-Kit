package com.aliyun.ros.cdk.oss;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::OSS::Website</code>, which is used to configure static website hosting and redirection rules for an Object Storage Service (OSS) bucket.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:10.034Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosWebsite")
public class RosWebsite extends com.aliyun.ros.cdk.core.RosResource {

    protected RosWebsite(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosWebsite(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.oss.RosWebsite.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosWebsite(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.RosWebsiteProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBucketName() {
        return software.amazon.jsii.Kernel.get(this, "bucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBucketName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bucketName", java.util.Objects.requireNonNull(value, "bucketName is required"));
    }

    /**
     */
    public void setBucketName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bucketName", java.util.Objects.requireNonNull(value, "bucketName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWebsiteConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "websiteConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWebsiteConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "websiteConfiguration", value);
    }

    /**
     */
    public void setWebsiteConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oss.RosWebsite.WebsiteConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "websiteConfiguration", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosWebsite.ConditionProperty")
    @software.amazon.jsii.Jsii.Proxy(ConditionProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConditionProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpErrorCodeReturnedEquals() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIncludeHeaders() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPrefixEquals() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKeySuffixEquals() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConditionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConditionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConditionProperty> {
            java.lang.Object httpErrorCodeReturnedEquals;
            java.lang.Object includeHeaders;
            java.lang.Object keyPrefixEquals;
            java.lang.Object keySuffixEquals;

            /**
             * Sets the value of {@link ConditionProperty#getHttpErrorCodeReturnedEquals}
             * @param httpErrorCodeReturnedEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpErrorCodeReturnedEquals(java.lang.String httpErrorCodeReturnedEquals) {
                this.httpErrorCodeReturnedEquals = httpErrorCodeReturnedEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getHttpErrorCodeReturnedEquals}
             * @param httpErrorCodeReturnedEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpErrorCodeReturnedEquals(com.aliyun.ros.cdk.core.IResolvable httpErrorCodeReturnedEquals) {
                this.httpErrorCodeReturnedEquals = httpErrorCodeReturnedEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getIncludeHeaders}
             * @param includeHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder includeHeaders(com.aliyun.ros.cdk.core.IResolvable includeHeaders) {
                this.includeHeaders = includeHeaders;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getIncludeHeaders}
             * @param includeHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder includeHeaders(java.util.List<? extends java.lang.Object> includeHeaders) {
                this.includeHeaders = includeHeaders;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getKeyPrefixEquals}
             * @param keyPrefixEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyPrefixEquals(java.lang.String keyPrefixEquals) {
                this.keyPrefixEquals = keyPrefixEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getKeyPrefixEquals}
             * @param keyPrefixEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyPrefixEquals(com.aliyun.ros.cdk.core.IResolvable keyPrefixEquals) {
                this.keyPrefixEquals = keyPrefixEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getKeySuffixEquals}
             * @param keySuffixEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keySuffixEquals(java.lang.String keySuffixEquals) {
                this.keySuffixEquals = keySuffixEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getKeySuffixEquals}
             * @param keySuffixEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keySuffixEquals(com.aliyun.ros.cdk.core.IResolvable keySuffixEquals) {
                this.keySuffixEquals = keySuffixEquals;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConditionProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConditionProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConditionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConditionProperty {
            private final java.lang.Object httpErrorCodeReturnedEquals;
            private final java.lang.Object includeHeaders;
            private final java.lang.Object keyPrefixEquals;
            private final java.lang.Object keySuffixEquals;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.httpErrorCodeReturnedEquals = software.amazon.jsii.Kernel.get(this, "httpErrorCodeReturnedEquals", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.includeHeaders = software.amazon.jsii.Kernel.get(this, "includeHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.keyPrefixEquals = software.amazon.jsii.Kernel.get(this, "keyPrefixEquals", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.keySuffixEquals = software.amazon.jsii.Kernel.get(this, "keySuffixEquals", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.httpErrorCodeReturnedEquals = builder.httpErrorCodeReturnedEquals;
                this.includeHeaders = builder.includeHeaders;
                this.keyPrefixEquals = builder.keyPrefixEquals;
                this.keySuffixEquals = builder.keySuffixEquals;
            }

            @Override
            public final java.lang.Object getHttpErrorCodeReturnedEquals() {
                return this.httpErrorCodeReturnedEquals;
            }

            @Override
            public final java.lang.Object getIncludeHeaders() {
                return this.includeHeaders;
            }

            @Override
            public final java.lang.Object getKeyPrefixEquals() {
                return this.keyPrefixEquals;
            }

            @Override
            public final java.lang.Object getKeySuffixEquals() {
                return this.keySuffixEquals;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getHttpErrorCodeReturnedEquals() != null) {
                    data.set("httpErrorCodeReturnedEquals", om.valueToTree(this.getHttpErrorCodeReturnedEquals()));
                }
                if (this.getIncludeHeaders() != null) {
                    data.set("includeHeaders", om.valueToTree(this.getIncludeHeaders()));
                }
                if (this.getKeyPrefixEquals() != null) {
                    data.set("keyPrefixEquals", om.valueToTree(this.getKeyPrefixEquals()));
                }
                if (this.getKeySuffixEquals() != null) {
                    data.set("keySuffixEquals", om.valueToTree(this.getKeySuffixEquals()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosWebsite.ConditionProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConditionProperty.Jsii$Proxy that = (ConditionProperty.Jsii$Proxy) o;

                if (this.httpErrorCodeReturnedEquals != null ? !this.httpErrorCodeReturnedEquals.equals(that.httpErrorCodeReturnedEquals) : that.httpErrorCodeReturnedEquals != null) return false;
                if (this.includeHeaders != null ? !this.includeHeaders.equals(that.includeHeaders) : that.includeHeaders != null) return false;
                if (this.keyPrefixEquals != null ? !this.keyPrefixEquals.equals(that.keyPrefixEquals) : that.keyPrefixEquals != null) return false;
                return this.keySuffixEquals != null ? this.keySuffixEquals.equals(that.keySuffixEquals) : that.keySuffixEquals == null;
            }

            @Override
            public final int hashCode() {
                int result = this.httpErrorCodeReturnedEquals != null ? this.httpErrorCodeReturnedEquals.hashCode() : 0;
                result = 31 * result + (this.includeHeaders != null ? this.includeHeaders.hashCode() : 0);
                result = 31 * result + (this.keyPrefixEquals != null ? this.keyPrefixEquals.hashCode() : 0);
                result = 31 * result + (this.keySuffixEquals != null ? this.keySuffixEquals.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosWebsite.ErrorDocumentProperty")
    @software.amazon.jsii.Jsii.Proxy(ErrorDocumentProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ErrorDocumentProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpStatus() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ErrorDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ErrorDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ErrorDocumentProperty> {
            java.lang.Object key;
            java.lang.Object httpStatus;

            /**
             * Sets the value of {@link ErrorDocumentProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ErrorDocumentProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ErrorDocumentProperty#getHttpStatus}
             * @param httpStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpStatus(java.lang.String httpStatus) {
                this.httpStatus = httpStatus;
                return this;
            }

            /**
             * Sets the value of {@link ErrorDocumentProperty#getHttpStatus}
             * @param httpStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpStatus(com.aliyun.ros.cdk.core.IResolvable httpStatus) {
                this.httpStatus = httpStatus;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ErrorDocumentProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ErrorDocumentProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ErrorDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ErrorDocumentProperty {
            private final java.lang.Object key;
            private final java.lang.Object httpStatus;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpStatus = software.amazon.jsii.Kernel.get(this, "httpStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.httpStatus = builder.httpStatus;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getHttpStatus() {
                return this.httpStatus;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getHttpStatus() != null) {
                    data.set("httpStatus", om.valueToTree(this.getHttpStatus()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosWebsite.ErrorDocumentProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ErrorDocumentProperty.Jsii$Proxy that = (ErrorDocumentProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.httpStatus != null ? this.httpStatus.equals(that.httpStatus) : that.httpStatus == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.httpStatus != null ? this.httpStatus.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosWebsite.IncludeHeadersProperty")
    @software.amazon.jsii.Jsii.Proxy(IncludeHeadersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IncludeHeadersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEqualsTo() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link IncludeHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link IncludeHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<IncludeHeadersProperty> {
            java.lang.Object key;
            java.lang.Object equalsTo;

            /**
             * Sets the value of {@link IncludeHeadersProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link IncludeHeadersProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link IncludeHeadersProperty#getEqualsTo}
             * @param equalsTo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder equalsTo(java.lang.String equalsTo) {
                this.equalsTo = equalsTo;
                return this;
            }

            /**
             * Sets the value of {@link IncludeHeadersProperty#getEqualsTo}
             * @param equalsTo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder equalsTo(com.aliyun.ros.cdk.core.IResolvable equalsTo) {
                this.equalsTo = equalsTo;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link IncludeHeadersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public IncludeHeadersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link IncludeHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IncludeHeadersProperty {
            private final java.lang.Object key;
            private final java.lang.Object equalsTo;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.equalsTo = software.amazon.jsii.Kernel.get(this, "equalsTo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.equalsTo = builder.equalsTo;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getEqualsTo() {
                return this.equalsTo;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getEqualsTo() != null) {
                    data.set("equalsTo", om.valueToTree(this.getEqualsTo()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosWebsite.IncludeHeadersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                IncludeHeadersProperty.Jsii$Proxy that = (IncludeHeadersProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.equalsTo != null ? this.equalsTo.equals(that.equalsTo) : that.equalsTo == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.equalsTo != null ? this.equalsTo.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosWebsite.IndexDocumentProperty")
    @software.amazon.jsii.Jsii.Proxy(IndexDocumentProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IndexDocumentProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSuffix();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSupportSubDir() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link IndexDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link IndexDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<IndexDocumentProperty> {
            java.lang.Object suffix;
            java.lang.Object supportSubDir;
            java.lang.Object type;

            /**
             * Sets the value of {@link IndexDocumentProperty#getSuffix}
             * @param suffix the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder suffix(java.lang.String suffix) {
                this.suffix = suffix;
                return this;
            }

            /**
             * Sets the value of {@link IndexDocumentProperty#getSuffix}
             * @param suffix the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder suffix(com.aliyun.ros.cdk.core.IResolvable suffix) {
                this.suffix = suffix;
                return this;
            }

            /**
             * Sets the value of {@link IndexDocumentProperty#getSupportSubDir}
             * @param supportSubDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder supportSubDir(java.lang.String supportSubDir) {
                this.supportSubDir = supportSubDir;
                return this;
            }

            /**
             * Sets the value of {@link IndexDocumentProperty#getSupportSubDir}
             * @param supportSubDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder supportSubDir(com.aliyun.ros.cdk.core.IResolvable supportSubDir) {
                this.supportSubDir = supportSubDir;
                return this;
            }

            /**
             * Sets the value of {@link IndexDocumentProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link IndexDocumentProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link IndexDocumentProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public IndexDocumentProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link IndexDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IndexDocumentProperty {
            private final java.lang.Object suffix;
            private final java.lang.Object supportSubDir;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.suffix = software.amazon.jsii.Kernel.get(this, "suffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.supportSubDir = software.amazon.jsii.Kernel.get(this, "supportSubDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.suffix = java.util.Objects.requireNonNull(builder.suffix, "suffix is required");
                this.supportSubDir = builder.supportSubDir;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getSuffix() {
                return this.suffix;
            }

            @Override
            public final java.lang.Object getSupportSubDir() {
                return this.supportSubDir;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("suffix", om.valueToTree(this.getSuffix()));
                if (this.getSupportSubDir() != null) {
                    data.set("supportSubDir", om.valueToTree(this.getSupportSubDir()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosWebsite.IndexDocumentProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                IndexDocumentProperty.Jsii$Proxy that = (IndexDocumentProperty.Jsii$Proxy) o;

                if (!suffix.equals(that.suffix)) return false;
                if (this.supportSubDir != null ? !this.supportSubDir.equals(that.supportSubDir) : that.supportSubDir != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.suffix.hashCode();
                result = 31 * result + (this.supportSubDir != null ? this.supportSubDir.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosWebsite.MirrorHeadersProperty")
    @software.amazon.jsii.Jsii.Proxy(MirrorHeadersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MirrorHeadersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPass() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPassAll() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRemove() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSets() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MirrorHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MirrorHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MirrorHeadersProperty> {
            java.lang.Object pass;
            java.lang.Object passAll;
            java.lang.Object remove;
            java.lang.Object sets;

            /**
             * Sets the value of {@link MirrorHeadersProperty#getPass}
             * @param pass the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pass(com.aliyun.ros.cdk.core.IResolvable pass) {
                this.pass = pass;
                return this;
            }

            /**
             * Sets the value of {@link MirrorHeadersProperty#getPass}
             * @param pass the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pass(java.util.List<? extends java.lang.Object> pass) {
                this.pass = pass;
                return this;
            }

            /**
             * Sets the value of {@link MirrorHeadersProperty#getPassAll}
             * @param passAll the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passAll(java.lang.Boolean passAll) {
                this.passAll = passAll;
                return this;
            }

            /**
             * Sets the value of {@link MirrorHeadersProperty#getPassAll}
             * @param passAll the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passAll(com.aliyun.ros.cdk.core.IResolvable passAll) {
                this.passAll = passAll;
                return this;
            }

            /**
             * Sets the value of {@link MirrorHeadersProperty#getRemove}
             * @param remove the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder remove(com.aliyun.ros.cdk.core.IResolvable remove) {
                this.remove = remove;
                return this;
            }

            /**
             * Sets the value of {@link MirrorHeadersProperty#getRemove}
             * @param remove the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder remove(java.util.List<? extends java.lang.Object> remove) {
                this.remove = remove;
                return this;
            }

            /**
             * Sets the value of {@link MirrorHeadersProperty#getSets}
             * @param sets the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sets(com.aliyun.ros.cdk.core.IResolvable sets) {
                this.sets = sets;
                return this;
            }

            /**
             * Sets the value of {@link MirrorHeadersProperty#getSets}
             * @param sets the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sets(java.util.List<? extends java.lang.Object> sets) {
                this.sets = sets;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MirrorHeadersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MirrorHeadersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MirrorHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MirrorHeadersProperty {
            private final java.lang.Object pass;
            private final java.lang.Object passAll;
            private final java.lang.Object remove;
            private final java.lang.Object sets;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.pass = software.amazon.jsii.Kernel.get(this, "pass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.passAll = software.amazon.jsii.Kernel.get(this, "passAll", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.remove = software.amazon.jsii.Kernel.get(this, "remove", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sets = software.amazon.jsii.Kernel.get(this, "sets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.pass = builder.pass;
                this.passAll = builder.passAll;
                this.remove = builder.remove;
                this.sets = builder.sets;
            }

            @Override
            public final java.lang.Object getPass() {
                return this.pass;
            }

            @Override
            public final java.lang.Object getPassAll() {
                return this.passAll;
            }

            @Override
            public final java.lang.Object getRemove() {
                return this.remove;
            }

            @Override
            public final java.lang.Object getSets() {
                return this.sets;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getPass() != null) {
                    data.set("pass", om.valueToTree(this.getPass()));
                }
                if (this.getPassAll() != null) {
                    data.set("passAll", om.valueToTree(this.getPassAll()));
                }
                if (this.getRemove() != null) {
                    data.set("remove", om.valueToTree(this.getRemove()));
                }
                if (this.getSets() != null) {
                    data.set("sets", om.valueToTree(this.getSets()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosWebsite.MirrorHeadersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MirrorHeadersProperty.Jsii$Proxy that = (MirrorHeadersProperty.Jsii$Proxy) o;

                if (this.pass != null ? !this.pass.equals(that.pass) : that.pass != null) return false;
                if (this.passAll != null ? !this.passAll.equals(that.passAll) : that.passAll != null) return false;
                if (this.remove != null ? !this.remove.equals(that.remove) : that.remove != null) return false;
                return this.sets != null ? this.sets.equals(that.sets) : that.sets == null;
            }

            @Override
            public final int hashCode() {
                int result = this.pass != null ? this.pass.hashCode() : 0;
                result = 31 * result + (this.passAll != null ? this.passAll.hashCode() : 0);
                result = 31 * result + (this.remove != null ? this.remove.hashCode() : 0);
                result = 31 * result + (this.sets != null ? this.sets.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosWebsite.RedirectProperty")
    @software.amazon.jsii.Jsii.Proxy(RedirectProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RedirectProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRedirectType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableReplacePrefix() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpRedirectCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMirrorCheckMd5() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMirrorFollowRedirect() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMirrorHeaders() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMirrorPassQueryString() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMirrorUrl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPassQueryString() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProtocol() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReplaceKeyPrefixWith() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReplaceKeyWith() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RedirectProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RedirectProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RedirectProperty> {
            java.lang.Object redirectType;
            java.lang.Object enableReplacePrefix;
            java.lang.Object hostName;
            java.lang.Object httpRedirectCode;
            java.lang.Object mirrorCheckMd5;
            java.lang.Object mirrorFollowRedirect;
            java.lang.Object mirrorHeaders;
            java.lang.Object mirrorPassQueryString;
            java.lang.Object mirrorUrl;
            java.lang.Object passQueryString;
            java.lang.Object protocol;
            java.lang.Object replaceKeyPrefixWith;
            java.lang.Object replaceKeyWith;

            /**
             * Sets the value of {@link RedirectProperty#getRedirectType}
             * @param redirectType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redirectType(java.lang.String redirectType) {
                this.redirectType = redirectType;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getRedirectType}
             * @param redirectType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redirectType(com.aliyun.ros.cdk.core.IResolvable redirectType) {
                this.redirectType = redirectType;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getEnableReplacePrefix}
             * @param enableReplacePrefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableReplacePrefix(java.lang.Boolean enableReplacePrefix) {
                this.enableReplacePrefix = enableReplacePrefix;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getEnableReplacePrefix}
             * @param enableReplacePrefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableReplacePrefix(com.aliyun.ros.cdk.core.IResolvable enableReplacePrefix) {
                this.enableReplacePrefix = enableReplacePrefix;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getHostName}
             * @param hostName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostName(java.lang.String hostName) {
                this.hostName = hostName;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getHostName}
             * @param hostName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostName(com.aliyun.ros.cdk.core.IResolvable hostName) {
                this.hostName = hostName;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getHttpRedirectCode}
             * @param httpRedirectCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpRedirectCode(java.lang.String httpRedirectCode) {
                this.httpRedirectCode = httpRedirectCode;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getHttpRedirectCode}
             * @param httpRedirectCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpRedirectCode(com.aliyun.ros.cdk.core.IResolvable httpRedirectCode) {
                this.httpRedirectCode = httpRedirectCode;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorCheckMd5}
             * @param mirrorCheckMd5 the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorCheckMd5(java.lang.Boolean mirrorCheckMd5) {
                this.mirrorCheckMd5 = mirrorCheckMd5;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorCheckMd5}
             * @param mirrorCheckMd5 the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorCheckMd5(com.aliyun.ros.cdk.core.IResolvable mirrorCheckMd5) {
                this.mirrorCheckMd5 = mirrorCheckMd5;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorFollowRedirect}
             * @param mirrorFollowRedirect the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorFollowRedirect(java.lang.Boolean mirrorFollowRedirect) {
                this.mirrorFollowRedirect = mirrorFollowRedirect;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorFollowRedirect}
             * @param mirrorFollowRedirect the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorFollowRedirect(com.aliyun.ros.cdk.core.IResolvable mirrorFollowRedirect) {
                this.mirrorFollowRedirect = mirrorFollowRedirect;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorHeaders}
             * @param mirrorHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorHeaders(com.aliyun.ros.cdk.core.IResolvable mirrorHeaders) {
                this.mirrorHeaders = mirrorHeaders;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorHeaders}
             * @param mirrorHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorHeaders(com.aliyun.ros.cdk.oss.RosWebsite.MirrorHeadersProperty mirrorHeaders) {
                this.mirrorHeaders = mirrorHeaders;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorPassQueryString}
             * @param mirrorPassQueryString the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorPassQueryString(java.lang.Boolean mirrorPassQueryString) {
                this.mirrorPassQueryString = mirrorPassQueryString;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorPassQueryString}
             * @param mirrorPassQueryString the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorPassQueryString(com.aliyun.ros.cdk.core.IResolvable mirrorPassQueryString) {
                this.mirrorPassQueryString = mirrorPassQueryString;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorUrl}
             * @param mirrorUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorUrl(java.lang.String mirrorUrl) {
                this.mirrorUrl = mirrorUrl;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorUrl}
             * @param mirrorUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorUrl(com.aliyun.ros.cdk.core.IResolvable mirrorUrl) {
                this.mirrorUrl = mirrorUrl;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getPassQueryString}
             * @param passQueryString the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passQueryString(java.lang.Boolean passQueryString) {
                this.passQueryString = passQueryString;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getPassQueryString}
             * @param passQueryString the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passQueryString(com.aliyun.ros.cdk.core.IResolvable passQueryString) {
                this.passQueryString = passQueryString;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getReplaceKeyPrefixWith}
             * @param replaceKeyPrefixWith the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replaceKeyPrefixWith(java.lang.String replaceKeyPrefixWith) {
                this.replaceKeyPrefixWith = replaceKeyPrefixWith;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getReplaceKeyPrefixWith}
             * @param replaceKeyPrefixWith the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replaceKeyPrefixWith(com.aliyun.ros.cdk.core.IResolvable replaceKeyPrefixWith) {
                this.replaceKeyPrefixWith = replaceKeyPrefixWith;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getReplaceKeyWith}
             * @param replaceKeyWith the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replaceKeyWith(java.lang.String replaceKeyWith) {
                this.replaceKeyWith = replaceKeyWith;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getReplaceKeyWith}
             * @param replaceKeyWith the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replaceKeyWith(com.aliyun.ros.cdk.core.IResolvable replaceKeyWith) {
                this.replaceKeyWith = replaceKeyWith;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RedirectProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RedirectProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RedirectProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RedirectProperty {
            private final java.lang.Object redirectType;
            private final java.lang.Object enableReplacePrefix;
            private final java.lang.Object hostName;
            private final java.lang.Object httpRedirectCode;
            private final java.lang.Object mirrorCheckMd5;
            private final java.lang.Object mirrorFollowRedirect;
            private final java.lang.Object mirrorHeaders;
            private final java.lang.Object mirrorPassQueryString;
            private final java.lang.Object mirrorUrl;
            private final java.lang.Object passQueryString;
            private final java.lang.Object protocol;
            private final java.lang.Object replaceKeyPrefixWith;
            private final java.lang.Object replaceKeyWith;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.redirectType = software.amazon.jsii.Kernel.get(this, "redirectType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableReplacePrefix = software.amazon.jsii.Kernel.get(this, "enableReplacePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostName = software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpRedirectCode = software.amazon.jsii.Kernel.get(this, "httpRedirectCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mirrorCheckMd5 = software.amazon.jsii.Kernel.get(this, "mirrorCheckMd5", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mirrorFollowRedirect = software.amazon.jsii.Kernel.get(this, "mirrorFollowRedirect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mirrorHeaders = software.amazon.jsii.Kernel.get(this, "mirrorHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mirrorPassQueryString = software.amazon.jsii.Kernel.get(this, "mirrorPassQueryString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mirrorUrl = software.amazon.jsii.Kernel.get(this, "mirrorUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.passQueryString = software.amazon.jsii.Kernel.get(this, "passQueryString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.replaceKeyPrefixWith = software.amazon.jsii.Kernel.get(this, "replaceKeyPrefixWith", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.replaceKeyWith = software.amazon.jsii.Kernel.get(this, "replaceKeyWith", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.redirectType = java.util.Objects.requireNonNull(builder.redirectType, "redirectType is required");
                this.enableReplacePrefix = builder.enableReplacePrefix;
                this.hostName = builder.hostName;
                this.httpRedirectCode = builder.httpRedirectCode;
                this.mirrorCheckMd5 = builder.mirrorCheckMd5;
                this.mirrorFollowRedirect = builder.mirrorFollowRedirect;
                this.mirrorHeaders = builder.mirrorHeaders;
                this.mirrorPassQueryString = builder.mirrorPassQueryString;
                this.mirrorUrl = builder.mirrorUrl;
                this.passQueryString = builder.passQueryString;
                this.protocol = builder.protocol;
                this.replaceKeyPrefixWith = builder.replaceKeyPrefixWith;
                this.replaceKeyWith = builder.replaceKeyWith;
            }

            @Override
            public final java.lang.Object getRedirectType() {
                return this.redirectType;
            }

            @Override
            public final java.lang.Object getEnableReplacePrefix() {
                return this.enableReplacePrefix;
            }

            @Override
            public final java.lang.Object getHostName() {
                return this.hostName;
            }

            @Override
            public final java.lang.Object getHttpRedirectCode() {
                return this.httpRedirectCode;
            }

            @Override
            public final java.lang.Object getMirrorCheckMd5() {
                return this.mirrorCheckMd5;
            }

            @Override
            public final java.lang.Object getMirrorFollowRedirect() {
                return this.mirrorFollowRedirect;
            }

            @Override
            public final java.lang.Object getMirrorHeaders() {
                return this.mirrorHeaders;
            }

            @Override
            public final java.lang.Object getMirrorPassQueryString() {
                return this.mirrorPassQueryString;
            }

            @Override
            public final java.lang.Object getMirrorUrl() {
                return this.mirrorUrl;
            }

            @Override
            public final java.lang.Object getPassQueryString() {
                return this.passQueryString;
            }

            @Override
            public final java.lang.Object getProtocol() {
                return this.protocol;
            }

            @Override
            public final java.lang.Object getReplaceKeyPrefixWith() {
                return this.replaceKeyPrefixWith;
            }

            @Override
            public final java.lang.Object getReplaceKeyWith() {
                return this.replaceKeyWith;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("redirectType", om.valueToTree(this.getRedirectType()));
                if (this.getEnableReplacePrefix() != null) {
                    data.set("enableReplacePrefix", om.valueToTree(this.getEnableReplacePrefix()));
                }
                if (this.getHostName() != null) {
                    data.set("hostName", om.valueToTree(this.getHostName()));
                }
                if (this.getHttpRedirectCode() != null) {
                    data.set("httpRedirectCode", om.valueToTree(this.getHttpRedirectCode()));
                }
                if (this.getMirrorCheckMd5() != null) {
                    data.set("mirrorCheckMd5", om.valueToTree(this.getMirrorCheckMd5()));
                }
                if (this.getMirrorFollowRedirect() != null) {
                    data.set("mirrorFollowRedirect", om.valueToTree(this.getMirrorFollowRedirect()));
                }
                if (this.getMirrorHeaders() != null) {
                    data.set("mirrorHeaders", om.valueToTree(this.getMirrorHeaders()));
                }
                if (this.getMirrorPassQueryString() != null) {
                    data.set("mirrorPassQueryString", om.valueToTree(this.getMirrorPassQueryString()));
                }
                if (this.getMirrorUrl() != null) {
                    data.set("mirrorUrl", om.valueToTree(this.getMirrorUrl()));
                }
                if (this.getPassQueryString() != null) {
                    data.set("passQueryString", om.valueToTree(this.getPassQueryString()));
                }
                if (this.getProtocol() != null) {
                    data.set("protocol", om.valueToTree(this.getProtocol()));
                }
                if (this.getReplaceKeyPrefixWith() != null) {
                    data.set("replaceKeyPrefixWith", om.valueToTree(this.getReplaceKeyPrefixWith()));
                }
                if (this.getReplaceKeyWith() != null) {
                    data.set("replaceKeyWith", om.valueToTree(this.getReplaceKeyWith()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosWebsite.RedirectProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RedirectProperty.Jsii$Proxy that = (RedirectProperty.Jsii$Proxy) o;

                if (!redirectType.equals(that.redirectType)) return false;
                if (this.enableReplacePrefix != null ? !this.enableReplacePrefix.equals(that.enableReplacePrefix) : that.enableReplacePrefix != null) return false;
                if (this.hostName != null ? !this.hostName.equals(that.hostName) : that.hostName != null) return false;
                if (this.httpRedirectCode != null ? !this.httpRedirectCode.equals(that.httpRedirectCode) : that.httpRedirectCode != null) return false;
                if (this.mirrorCheckMd5 != null ? !this.mirrorCheckMd5.equals(that.mirrorCheckMd5) : that.mirrorCheckMd5 != null) return false;
                if (this.mirrorFollowRedirect != null ? !this.mirrorFollowRedirect.equals(that.mirrorFollowRedirect) : that.mirrorFollowRedirect != null) return false;
                if (this.mirrorHeaders != null ? !this.mirrorHeaders.equals(that.mirrorHeaders) : that.mirrorHeaders != null) return false;
                if (this.mirrorPassQueryString != null ? !this.mirrorPassQueryString.equals(that.mirrorPassQueryString) : that.mirrorPassQueryString != null) return false;
                if (this.mirrorUrl != null ? !this.mirrorUrl.equals(that.mirrorUrl) : that.mirrorUrl != null) return false;
                if (this.passQueryString != null ? !this.passQueryString.equals(that.passQueryString) : that.passQueryString != null) return false;
                if (this.protocol != null ? !this.protocol.equals(that.protocol) : that.protocol != null) return false;
                if (this.replaceKeyPrefixWith != null ? !this.replaceKeyPrefixWith.equals(that.replaceKeyPrefixWith) : that.replaceKeyPrefixWith != null) return false;
                return this.replaceKeyWith != null ? this.replaceKeyWith.equals(that.replaceKeyWith) : that.replaceKeyWith == null;
            }

            @Override
            public final int hashCode() {
                int result = this.redirectType.hashCode();
                result = 31 * result + (this.enableReplacePrefix != null ? this.enableReplacePrefix.hashCode() : 0);
                result = 31 * result + (this.hostName != null ? this.hostName.hashCode() : 0);
                result = 31 * result + (this.httpRedirectCode != null ? this.httpRedirectCode.hashCode() : 0);
                result = 31 * result + (this.mirrorCheckMd5 != null ? this.mirrorCheckMd5.hashCode() : 0);
                result = 31 * result + (this.mirrorFollowRedirect != null ? this.mirrorFollowRedirect.hashCode() : 0);
                result = 31 * result + (this.mirrorHeaders != null ? this.mirrorHeaders.hashCode() : 0);
                result = 31 * result + (this.mirrorPassQueryString != null ? this.mirrorPassQueryString.hashCode() : 0);
                result = 31 * result + (this.mirrorUrl != null ? this.mirrorUrl.hashCode() : 0);
                result = 31 * result + (this.passQueryString != null ? this.passQueryString.hashCode() : 0);
                result = 31 * result + (this.protocol != null ? this.protocol.hashCode() : 0);
                result = 31 * result + (this.replaceKeyPrefixWith != null ? this.replaceKeyPrefixWith.hashCode() : 0);
                result = 31 * result + (this.replaceKeyWith != null ? this.replaceKeyWith.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosWebsite.RoutingRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(RoutingRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RoutingRulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCondition();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRedirect();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRuleNumber();

        /**
         * @return a {@link Builder} of {@link RoutingRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RoutingRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RoutingRulesProperty> {
            java.lang.Object condition;
            java.lang.Object redirect;
            java.lang.Object ruleNumber;

            /**
             * Sets the value of {@link RoutingRulesProperty#getCondition}
             * @param condition the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder condition(com.aliyun.ros.cdk.core.IResolvable condition) {
                this.condition = condition;
                return this;
            }

            /**
             * Sets the value of {@link RoutingRulesProperty#getCondition}
             * @param condition the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder condition(com.aliyun.ros.cdk.oss.RosWebsite.ConditionProperty condition) {
                this.condition = condition;
                return this;
            }

            /**
             * Sets the value of {@link RoutingRulesProperty#getRedirect}
             * @param redirect the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redirect(com.aliyun.ros.cdk.core.IResolvable redirect) {
                this.redirect = redirect;
                return this;
            }

            /**
             * Sets the value of {@link RoutingRulesProperty#getRedirect}
             * @param redirect the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redirect(com.aliyun.ros.cdk.oss.RosWebsite.RedirectProperty redirect) {
                this.redirect = redirect;
                return this;
            }

            /**
             * Sets the value of {@link RoutingRulesProperty#getRuleNumber}
             * @param ruleNumber the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleNumber(java.lang.Number ruleNumber) {
                this.ruleNumber = ruleNumber;
                return this;
            }

            /**
             * Sets the value of {@link RoutingRulesProperty#getRuleNumber}
             * @param ruleNumber the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleNumber(com.aliyun.ros.cdk.core.IResolvable ruleNumber) {
                this.ruleNumber = ruleNumber;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RoutingRulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RoutingRulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RoutingRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RoutingRulesProperty {
            private final java.lang.Object condition;
            private final java.lang.Object redirect;
            private final java.lang.Object ruleNumber;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.condition = software.amazon.jsii.Kernel.get(this, "condition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.redirect = software.amazon.jsii.Kernel.get(this, "redirect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ruleNumber = software.amazon.jsii.Kernel.get(this, "ruleNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.condition = java.util.Objects.requireNonNull(builder.condition, "condition is required");
                this.redirect = java.util.Objects.requireNonNull(builder.redirect, "redirect is required");
                this.ruleNumber = java.util.Objects.requireNonNull(builder.ruleNumber, "ruleNumber is required");
            }

            @Override
            public final java.lang.Object getCondition() {
                return this.condition;
            }

            @Override
            public final java.lang.Object getRedirect() {
                return this.redirect;
            }

            @Override
            public final java.lang.Object getRuleNumber() {
                return this.ruleNumber;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("condition", om.valueToTree(this.getCondition()));
                data.set("redirect", om.valueToTree(this.getRedirect()));
                data.set("ruleNumber", om.valueToTree(this.getRuleNumber()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosWebsite.RoutingRulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RoutingRulesProperty.Jsii$Proxy that = (RoutingRulesProperty.Jsii$Proxy) o;

                if (!condition.equals(that.condition)) return false;
                if (!redirect.equals(that.redirect)) return false;
                return this.ruleNumber.equals(that.ruleNumber);
            }

            @Override
            public final int hashCode() {
                int result = this.condition.hashCode();
                result = 31 * result + (this.redirect.hashCode());
                result = 31 * result + (this.ruleNumber.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosWebsite.SetsProperty")
    @software.amazon.jsii.Jsii.Proxy(SetsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SetsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getValue();

        /**
         * @return a {@link Builder} of {@link SetsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SetsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SetsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link SetsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link SetsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link SetsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link SetsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SetsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SetsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SetsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SetsProperty {
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
                this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
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
                data.set("value", om.valueToTree(this.getValue()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosWebsite.SetsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SetsProperty.Jsii$Proxy that = (SetsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value.equals(that.value);
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosWebsite.WebsiteConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(WebsiteConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface WebsiteConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getErrorDocument() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIndexDocument() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRoutingRules() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link WebsiteConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link WebsiteConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<WebsiteConfigurationProperty> {
            java.lang.Object errorDocument;
            java.lang.Object indexDocument;
            java.lang.Object routingRules;

            /**
             * Sets the value of {@link WebsiteConfigurationProperty#getErrorDocument}
             * @param errorDocument the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder errorDocument(com.aliyun.ros.cdk.core.IResolvable errorDocument) {
                this.errorDocument = errorDocument;
                return this;
            }

            /**
             * Sets the value of {@link WebsiteConfigurationProperty#getErrorDocument}
             * @param errorDocument the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder errorDocument(com.aliyun.ros.cdk.oss.RosWebsite.ErrorDocumentProperty errorDocument) {
                this.errorDocument = errorDocument;
                return this;
            }

            /**
             * Sets the value of {@link WebsiteConfigurationProperty#getIndexDocument}
             * @param indexDocument the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder indexDocument(com.aliyun.ros.cdk.core.IResolvable indexDocument) {
                this.indexDocument = indexDocument;
                return this;
            }

            /**
             * Sets the value of {@link WebsiteConfigurationProperty#getIndexDocument}
             * @param indexDocument the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder indexDocument(com.aliyun.ros.cdk.oss.RosWebsite.IndexDocumentProperty indexDocument) {
                this.indexDocument = indexDocument;
                return this;
            }

            /**
             * Sets the value of {@link WebsiteConfigurationProperty#getRoutingRules}
             * @param routingRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routingRules(com.aliyun.ros.cdk.core.IResolvable routingRules) {
                this.routingRules = routingRules;
                return this;
            }

            /**
             * Sets the value of {@link WebsiteConfigurationProperty#getRoutingRules}
             * @param routingRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routingRules(java.util.List<? extends java.lang.Object> routingRules) {
                this.routingRules = routingRules;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link WebsiteConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public WebsiteConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link WebsiteConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WebsiteConfigurationProperty {
            private final java.lang.Object errorDocument;
            private final java.lang.Object indexDocument;
            private final java.lang.Object routingRules;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.errorDocument = software.amazon.jsii.Kernel.get(this, "errorDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.indexDocument = software.amazon.jsii.Kernel.get(this, "indexDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.routingRules = software.amazon.jsii.Kernel.get(this, "routingRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.errorDocument = builder.errorDocument;
                this.indexDocument = builder.indexDocument;
                this.routingRules = builder.routingRules;
            }

            @Override
            public final java.lang.Object getErrorDocument() {
                return this.errorDocument;
            }

            @Override
            public final java.lang.Object getIndexDocument() {
                return this.indexDocument;
            }

            @Override
            public final java.lang.Object getRoutingRules() {
                return this.routingRules;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getErrorDocument() != null) {
                    data.set("errorDocument", om.valueToTree(this.getErrorDocument()));
                }
                if (this.getIndexDocument() != null) {
                    data.set("indexDocument", om.valueToTree(this.getIndexDocument()));
                }
                if (this.getRoutingRules() != null) {
                    data.set("routingRules", om.valueToTree(this.getRoutingRules()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosWebsite.WebsiteConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                WebsiteConfigurationProperty.Jsii$Proxy that = (WebsiteConfigurationProperty.Jsii$Proxy) o;

                if (this.errorDocument != null ? !this.errorDocument.equals(that.errorDocument) : that.errorDocument != null) return false;
                if (this.indexDocument != null ? !this.indexDocument.equals(that.indexDocument) : that.indexDocument != null) return false;
                return this.routingRules != null ? this.routingRules.equals(that.routingRules) : that.routingRules == null;
            }

            @Override
            public final int hashCode() {
                int result = this.errorDocument != null ? this.errorDocument.hashCode() : 0;
                result = 31 * result + (this.indexDocument != null ? this.indexDocument.hashCode() : 0);
                result = 31 * result + (this.routingRules != null ? this.routingRules.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oss.RosWebsite}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oss.RosWebsite> {
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
        private final com.aliyun.ros.cdk.oss.RosWebsiteProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oss.RosWebsiteProps.Builder();
        }

        /**
         * @return {@code this}
         * @param bucketName This parameter is required.
         */
        public Builder bucketName(final java.lang.String bucketName) {
            this.props.bucketName(bucketName);
            return this;
        }
        /**
         * @return {@code this}
         * @param bucketName This parameter is required.
         */
        public Builder bucketName(final com.aliyun.ros.cdk.core.IResolvable bucketName) {
            this.props.bucketName(bucketName);
            return this;
        }

        /**
         * @return {@code this}
         * @param websiteConfiguration This parameter is required.
         */
        public Builder websiteConfiguration(final com.aliyun.ros.cdk.core.IResolvable websiteConfiguration) {
            this.props.websiteConfiguration(websiteConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param websiteConfiguration This parameter is required.
         */
        public Builder websiteConfiguration(final com.aliyun.ros.cdk.oss.RosWebsite.WebsiteConfigurationProperty websiteConfiguration) {
            this.props.websiteConfiguration(websiteConfiguration);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oss.RosWebsite}.
         */
        @Override
        public com.aliyun.ros.cdk.oss.RosWebsite build() {
            return new com.aliyun.ros.cdk.oss.RosWebsite(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
