package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a <code>RosApp</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-app
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.810Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosAppProps")
@software.amazon.jsii.Jsii.Proxy(RosAppProps.Jsii$Proxy.class)
public interface RosAppProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppCode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppKey() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppSecret() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.apigateway.RosApp.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAppProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAppProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAppProps> {
        java.lang.Object appName;
        java.lang.Object appCode;
        java.lang.Object appKey;
        java.lang.Object appSecret;
        java.lang.Object description;
        java.util.List<com.aliyun.ros.cdk.apigateway.RosApp.TagsProperty> tags;

        /**
         * Sets the value of {@link RosAppProps#getAppName}
         * @param appName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(java.lang.String appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getAppName}
         * @param appName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(com.aliyun.ros.cdk.core.IResolvable appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getAppCode}
         * @param appCode the value to be set.
         * @return {@code this}
         */
        public Builder appCode(java.lang.String appCode) {
            this.appCode = appCode;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getAppCode}
         * @param appCode the value to be set.
         * @return {@code this}
         */
        public Builder appCode(com.aliyun.ros.cdk.core.IResolvable appCode) {
            this.appCode = appCode;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getAppKey}
         * @param appKey the value to be set.
         * @return {@code this}
         */
        public Builder appKey(java.lang.String appKey) {
            this.appKey = appKey;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getAppKey}
         * @param appKey the value to be set.
         * @return {@code this}
         */
        public Builder appKey(com.aliyun.ros.cdk.core.IResolvable appKey) {
            this.appKey = appKey;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getAppSecret}
         * @param appSecret the value to be set.
         * @return {@code this}
         */
        public Builder appSecret(java.lang.String appSecret) {
            this.appSecret = appSecret;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getAppSecret}
         * @param appSecret the value to be set.
         * @return {@code this}
         */
        public Builder appSecret(com.aliyun.ros.cdk.core.IResolvable appSecret) {
            this.appSecret = appSecret;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.apigateway.RosApp.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.apigateway.RosApp.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAppProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAppProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAppProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAppProps {
        private final java.lang.Object appName;
        private final java.lang.Object appCode;
        private final java.lang.Object appKey;
        private final java.lang.Object appSecret;
        private final java.lang.Object description;
        private final java.util.List<com.aliyun.ros.cdk.apigateway.RosApp.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appName = software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appCode = software.amazon.jsii.Kernel.get(this, "appCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appKey = software.amazon.jsii.Kernel.get(this, "appKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appSecret = software.amazon.jsii.Kernel.get(this, "appSecret", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.RosApp.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appName = java.util.Objects.requireNonNull(builder.appName, "appName is required");
            this.appCode = builder.appCode;
            this.appKey = builder.appKey;
            this.appSecret = builder.appSecret;
            this.description = builder.description;
            this.tags = (java.util.List<com.aliyun.ros.cdk.apigateway.RosApp.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getAppName() {
            return this.appName;
        }

        @Override
        public final java.lang.Object getAppCode() {
            return this.appCode;
        }

        @Override
        public final java.lang.Object getAppKey() {
            return this.appKey;
        }

        @Override
        public final java.lang.Object getAppSecret() {
            return this.appSecret;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.apigateway.RosApp.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("appName", om.valueToTree(this.getAppName()));
            if (this.getAppCode() != null) {
                data.set("appCode", om.valueToTree(this.getAppCode()));
            }
            if (this.getAppKey() != null) {
                data.set("appKey", om.valueToTree(this.getAppKey()));
            }
            if (this.getAppSecret() != null) {
                data.set("appSecret", om.valueToTree(this.getAppSecret()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosAppProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAppProps.Jsii$Proxy that = (RosAppProps.Jsii$Proxy) o;

            if (!appName.equals(that.appName)) return false;
            if (this.appCode != null ? !this.appCode.equals(that.appCode) : that.appCode != null) return false;
            if (this.appKey != null ? !this.appKey.equals(that.appKey) : that.appKey != null) return false;
            if (this.appSecret != null ? !this.appSecret.equals(that.appSecret) : that.appSecret != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.appName.hashCode();
            result = 31 * result + (this.appCode != null ? this.appCode.hashCode() : 0);
            result = 31 * result + (this.appKey != null ? this.appKey.hashCode() : 0);
            result = 31 * result + (this.appSecret != null ? this.appSecret.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
