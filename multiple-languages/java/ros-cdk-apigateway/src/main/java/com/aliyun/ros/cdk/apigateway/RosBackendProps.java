package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a <code>RosBackend</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-backend
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.803Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosBackendProps")
@software.amazon.jsii.Jsii.Proxy(RosBackendProps.Jsii$Proxy.class)
public interface RosBackendProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBackendName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBackendType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.apigateway.RosBackend.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosBackendProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBackendProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBackendProps> {
        java.lang.Object backendName;
        java.lang.Object backendType;
        java.lang.Object description;
        java.util.List<com.aliyun.ros.cdk.apigateway.RosBackend.TagsProperty> tags;

        /**
         * Sets the value of {@link RosBackendProps#getBackendName}
         * @param backendName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder backendName(java.lang.String backendName) {
            this.backendName = backendName;
            return this;
        }

        /**
         * Sets the value of {@link RosBackendProps#getBackendName}
         * @param backendName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder backendName(com.aliyun.ros.cdk.core.IResolvable backendName) {
            this.backendName = backendName;
            return this;
        }

        /**
         * Sets the value of {@link RosBackendProps#getBackendType}
         * @param backendType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder backendType(java.lang.String backendType) {
            this.backendType = backendType;
            return this;
        }

        /**
         * Sets the value of {@link RosBackendProps#getBackendType}
         * @param backendType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder backendType(com.aliyun.ros.cdk.core.IResolvable backendType) {
            this.backendType = backendType;
            return this;
        }

        /**
         * Sets the value of {@link RosBackendProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosBackendProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosBackendProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.apigateway.RosBackend.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.apigateway.RosBackend.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBackendProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBackendProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBackendProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBackendProps {
        private final java.lang.Object backendName;
        private final java.lang.Object backendType;
        private final java.lang.Object description;
        private final java.util.List<com.aliyun.ros.cdk.apigateway.RosBackend.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.backendName = software.amazon.jsii.Kernel.get(this, "backendName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backendType = software.amazon.jsii.Kernel.get(this, "backendType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.RosBackend.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.backendName = java.util.Objects.requireNonNull(builder.backendName, "backendName is required");
            this.backendType = java.util.Objects.requireNonNull(builder.backendType, "backendType is required");
            this.description = builder.description;
            this.tags = (java.util.List<com.aliyun.ros.cdk.apigateway.RosBackend.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getBackendName() {
            return this.backendName;
        }

        @Override
        public final java.lang.Object getBackendType() {
            return this.backendType;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.apigateway.RosBackend.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("backendName", om.valueToTree(this.getBackendName()));
            data.set("backendType", om.valueToTree(this.getBackendType()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosBackendProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBackendProps.Jsii$Proxy that = (RosBackendProps.Jsii$Proxy) o;

            if (!backendName.equals(that.backendName)) return false;
            if (!backendType.equals(that.backendType)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.backendName.hashCode();
            result = 31 * result + (this.backendType.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
