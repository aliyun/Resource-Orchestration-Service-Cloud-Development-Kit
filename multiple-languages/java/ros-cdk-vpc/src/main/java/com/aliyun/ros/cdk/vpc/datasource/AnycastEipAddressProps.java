package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>AnycastEipAddress</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eipanycast-anycasteipaddress
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.635Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.AnycastEipAddressProps")
@software.amazon.jsii.Jsii.Proxy(AnycastEipAddressProps.Jsii$Proxy.class)
public interface AnycastEipAddressProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property anycastId: The ID of the Anycast EIP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAnycastId();

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AnycastEipAddressProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AnycastEipAddressProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AnycastEipAddressProps> {
        java.lang.Object anycastId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link AnycastEipAddressProps#getAnycastId}
         * @param anycastId Property anycastId: The ID of the Anycast EIP. This parameter is required.
         * @return {@code this}
         */
        public Builder anycastId(java.lang.String anycastId) {
            this.anycastId = anycastId;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEipAddressProps#getAnycastId}
         * @param anycastId Property anycastId: The ID of the Anycast EIP. This parameter is required.
         * @return {@code this}
         */
        public Builder anycastId(com.aliyun.ros.cdk.core.IResolvable anycastId) {
            this.anycastId = anycastId;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEipAddressProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEipAddressProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AnycastEipAddressProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AnycastEipAddressProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AnycastEipAddressProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AnycastEipAddressProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.AnycastEipAddressProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AnycastEipAddressProps.Jsii$Proxy that = (AnycastEipAddressProps.Jsii$Proxy) o;

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
