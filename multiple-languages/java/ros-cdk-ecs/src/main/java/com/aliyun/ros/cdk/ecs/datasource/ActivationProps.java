package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>Activation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:51.672Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.ActivationProps")
@software.amazon.jsii.Jsii.Proxy(ActivationProps.Jsii$Proxy.class)
public interface ActivationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property activationId: Activation code ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getActivationId();

    /**
     * @return a {@link Builder} of {@link ActivationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ActivationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ActivationProps> {
        java.lang.Object activationId;

        /**
         * Sets the value of {@link ActivationProps#getActivationId}
         * @param activationId Property activationId: Activation code ID. This parameter is required.
         * @return {@code this}
         */
        public Builder activationId(java.lang.String activationId) {
            this.activationId = activationId;
            return this;
        }

        /**
         * Sets the value of {@link ActivationProps#getActivationId}
         * @param activationId Property activationId: Activation code ID. This parameter is required.
         * @return {@code this}
         */
        public Builder activationId(com.aliyun.ros.cdk.core.IResolvable activationId) {
            this.activationId = activationId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ActivationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ActivationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ActivationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ActivationProps {
        private final java.lang.Object activationId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.activationId = software.amazon.jsii.Kernel.get(this, "activationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.activationId = java.util.Objects.requireNonNull(builder.activationId, "activationId is required");
        }

        @Override
        public final java.lang.Object getActivationId() {
            return this.activationId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("activationId", om.valueToTree(this.getActivationId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.ActivationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ActivationProps.Jsii$Proxy that = (ActivationProps.Jsii$Proxy) o;

            return this.activationId.equals(that.activationId);
        }

        @Override
        public final int hashCode() {
            int result = this.activationId.hashCode();
            return result;
        }
    }
}
