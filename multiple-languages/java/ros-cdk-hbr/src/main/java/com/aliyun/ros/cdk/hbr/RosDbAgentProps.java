package com.aliyun.ros.cdk.hbr;

/**
 * Properties for defining a `ALIYUN::HBR::DbAgent`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:10.766Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosDbAgentProps")
@software.amazon.jsii.Jsii.Proxy(RosDbAgentProps.Jsii$Proxy.class)
public interface RosDbAgentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceInfo();

    /**
     * @return a {@link Builder} of {@link RosDbAgentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDbAgentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDbAgentProps> {
        java.lang.Object instanceInfo;

        /**
         * Sets the value of {@link RosDbAgentProps#getInstanceInfo}
         * @param instanceInfo the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceInfo(com.aliyun.ros.cdk.core.IResolvable instanceInfo) {
            this.instanceInfo = instanceInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosDbAgentProps#getInstanceInfo}
         * @param instanceInfo the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceInfo(java.util.List<? extends java.lang.Object> instanceInfo) {
            this.instanceInfo = instanceInfo;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDbAgentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDbAgentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDbAgentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDbAgentProps {
        private final java.lang.Object instanceInfo;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceInfo = software.amazon.jsii.Kernel.get(this, "instanceInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceInfo = java.util.Objects.requireNonNull(builder.instanceInfo, "instanceInfo is required");
        }

        @Override
        public final java.lang.Object getInstanceInfo() {
            return this.instanceInfo;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceInfo", om.valueToTree(this.getInstanceInfo()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.RosDbAgentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDbAgentProps.Jsii$Proxy that = (RosDbAgentProps.Jsii$Proxy) o;

            return this.instanceInfo.equals(that.instanceInfo);
        }

        @Override
        public final int hashCode() {
            int result = this.instanceInfo.hashCode();
            return result;
        }
    }
}
