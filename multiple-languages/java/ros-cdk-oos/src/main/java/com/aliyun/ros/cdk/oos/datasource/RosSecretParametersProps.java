package com.aliyun.ros.cdk.oos.datasource;

/**
 * Properties for defining a <code>RosSecretParameters</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameters
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:56.430Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.datasource.RosSecretParametersProps")
@software.amazon.jsii.Jsii.Proxy(RosSecretParametersProps.Jsii$Proxy.class)
public interface RosSecretParametersProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecretParameterName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSecretParametersProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSecretParametersProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSecretParametersProps> {
        java.lang.Object resourceGroupId;
        java.lang.Object secretParameterName;

        /**
         * Sets the value of {@link RosSecretParametersProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretParametersProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretParametersProps#getSecretParameterName}
         * @param secretParameterName the value to be set.
         * @return {@code this}
         */
        public Builder secretParameterName(java.lang.String secretParameterName) {
            this.secretParameterName = secretParameterName;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretParametersProps#getSecretParameterName}
         * @param secretParameterName the value to be set.
         * @return {@code this}
         */
        public Builder secretParameterName(com.aliyun.ros.cdk.core.IResolvable secretParameterName) {
            this.secretParameterName = secretParameterName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSecretParametersProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSecretParametersProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSecretParametersProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSecretParametersProps {
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object secretParameterName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secretParameterName = software.amazon.jsii.Kernel.get(this, "secretParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.resourceGroupId = builder.resourceGroupId;
            this.secretParameterName = builder.secretParameterName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecretParameterName() {
            return this.secretParameterName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecretParameterName() != null) {
                data.set("secretParameterName", om.valueToTree(this.getSecretParameterName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.datasource.RosSecretParametersProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSecretParametersProps.Jsii$Proxy that = (RosSecretParametersProps.Jsii$Proxy) o;

            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.secretParameterName != null ? this.secretParameterName.equals(that.secretParameterName) : that.secretParameterName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0;
            result = 31 * result + (this.secretParameterName != null ? this.secretParameterName.hashCode() : 0);
            return result;
        }
    }
}
