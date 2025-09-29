package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a <code>SmartAccessGatewayBinding</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:29.632Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.SmartAccessGatewayBindingProps")
@software.amazon.jsii.Jsii.Proxy(SmartAccessGatewayBindingProps.Jsii$Proxy.class)
public interface SmartAccessGatewayBindingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property ccnId: The ID of the CCN instance to bind.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCcnId();

    /**
     * Property smartAgId: The ID of the Smart Access Gateway instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSmartAgId();

    /**
     * @return a {@link Builder} of {@link SmartAccessGatewayBindingProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SmartAccessGatewayBindingProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SmartAccessGatewayBindingProps> {
        java.lang.Object ccnId;
        java.lang.Object smartAgId;

        /**
         * Sets the value of {@link SmartAccessGatewayBindingProps#getCcnId}
         * @param ccnId Property ccnId: The ID of the CCN instance to bind. This parameter is required.
         * @return {@code this}
         */
        public Builder ccnId(java.lang.String ccnId) {
            this.ccnId = ccnId;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayBindingProps#getCcnId}
         * @param ccnId Property ccnId: The ID of the CCN instance to bind. This parameter is required.
         * @return {@code this}
         */
        public Builder ccnId(com.aliyun.ros.cdk.core.IResolvable ccnId) {
            this.ccnId = ccnId;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayBindingProps#getSmartAgId}
         * @param smartAgId Property smartAgId: The ID of the Smart Access Gateway instance. This parameter is required.
         * @return {@code this}
         */
        public Builder smartAgId(java.lang.String smartAgId) {
            this.smartAgId = smartAgId;
            return this;
        }

        /**
         * Sets the value of {@link SmartAccessGatewayBindingProps#getSmartAgId}
         * @param smartAgId Property smartAgId: The ID of the Smart Access Gateway instance. This parameter is required.
         * @return {@code this}
         */
        public Builder smartAgId(com.aliyun.ros.cdk.core.IResolvable smartAgId) {
            this.smartAgId = smartAgId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SmartAccessGatewayBindingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SmartAccessGatewayBindingProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SmartAccessGatewayBindingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SmartAccessGatewayBindingProps {
        private final java.lang.Object ccnId;
        private final java.lang.Object smartAgId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ccnId = software.amazon.jsii.Kernel.get(this, "ccnId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.smartAgId = software.amazon.jsii.Kernel.get(this, "smartAgId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ccnId = java.util.Objects.requireNonNull(builder.ccnId, "ccnId is required");
            this.smartAgId = java.util.Objects.requireNonNull(builder.smartAgId, "smartAgId is required");
        }

        @Override
        public final java.lang.Object getCcnId() {
            return this.ccnId;
        }

        @Override
        public final java.lang.Object getSmartAgId() {
            return this.smartAgId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ccnId", om.valueToTree(this.getCcnId()));
            data.set("smartAgId", om.valueToTree(this.getSmartAgId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.SmartAccessGatewayBindingProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SmartAccessGatewayBindingProps.Jsii$Proxy that = (SmartAccessGatewayBindingProps.Jsii$Proxy) o;

            if (!ccnId.equals(that.ccnId)) return false;
            return this.smartAgId.equals(that.smartAgId);
        }

        @Override
        public final int hashCode() {
            int result = this.ccnId.hashCode();
            result = 31 * result + (this.smartAgId.hashCode());
            return result;
        }
    }
}
