package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RosAnycastEipAddress</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eipanycast-anycasteipaddress
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:34.426Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosAnycastEipAddressProps")
@software.amazon.jsii.Jsii.Proxy(RosAnycastEipAddressProps.Jsii$Proxy.class)
public interface RosAnycastEipAddressProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAnycastId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAnycastEipAddressProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAnycastEipAddressProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAnycastEipAddressProps> {
        java.lang.Object anycastId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosAnycastEipAddressProps#getAnycastId}
         * @param anycastId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder anycastId(java.lang.String anycastId) {
            this.anycastId = anycastId;
            return this;
        }

        /**
         * Sets the value of {@link RosAnycastEipAddressProps#getAnycastId}
         * @param anycastId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder anycastId(com.aliyun.ros.cdk.core.IResolvable anycastId) {
            this.anycastId = anycastId;
            return this;
        }

        /**
         * Sets the value of {@link RosAnycastEipAddressProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosAnycastEipAddressProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAnycastEipAddressProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAnycastEipAddressProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAnycastEipAddressProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAnycastEipAddressProps {
        private final java.lang.Object anycastId;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.anycastId = software.amazon.jsii.Kernel.get(this, "anycastId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.anycastId = java.util.Objects.requireNonNull(builder.anycastId, "anycastId is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getAnycastId() {
            return this.anycastId;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("anycastId", om.valueToTree(this.getAnycastId()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosAnycastEipAddressProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAnycastEipAddressProps.Jsii$Proxy that = (RosAnycastEipAddressProps.Jsii$Proxy) o;

            if (!anycastId.equals(that.anycastId)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.anycastId.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
