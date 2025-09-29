package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>ForwardingRules</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-forwardingrules
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.087Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.ForwardingRulesProps")
@software.amazon.jsii.Jsii.Proxy(ForwardingRulesProps.Jsii$Proxy.class)
public interface ForwardingRulesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property acceleratorId: The ID of the GA instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId();

    /**
     * Property forwardingRules: Details about the forwarding rules.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getForwardingRules();

    /**
     * Property listenerId: The ID of the listener.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerId();

    /**
     * @return a {@link Builder} of {@link ForwardingRulesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ForwardingRulesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ForwardingRulesProps> {
        java.lang.Object acceleratorId;
        java.lang.Object forwardingRules;
        java.lang.Object listenerId;

        /**
         * Sets the value of {@link ForwardingRulesProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: The ID of the GA instance. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link ForwardingRulesProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: The ID of the GA instance. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link ForwardingRulesProps#getForwardingRules}
         * @param forwardingRules Property forwardingRules: Details about the forwarding rules. This parameter is required.
         * @return {@code this}
         */
        public Builder forwardingRules(com.aliyun.ros.cdk.core.IResolvable forwardingRules) {
            this.forwardingRules = forwardingRules;
            return this;
        }

        /**
         * Sets the value of {@link ForwardingRulesProps#getForwardingRules}
         * @param forwardingRules Property forwardingRules: Details about the forwarding rules. This parameter is required.
         * @return {@code this}
         */
        public Builder forwardingRules(java.util.List<? extends java.lang.Object> forwardingRules) {
            this.forwardingRules = forwardingRules;
            return this;
        }

        /**
         * Sets the value of {@link ForwardingRulesProps#getListenerId}
         * @param listenerId Property listenerId: The ID of the listener. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(java.lang.String listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link ForwardingRulesProps#getListenerId}
         * @param listenerId Property listenerId: The ID of the listener. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ForwardingRulesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ForwardingRulesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ForwardingRulesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ForwardingRulesProps {
        private final java.lang.Object acceleratorId;
        private final java.lang.Object forwardingRules;
        private final java.lang.Object listenerId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceleratorId = software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.forwardingRules = software.amazon.jsii.Kernel.get(this, "forwardingRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerId = software.amazon.jsii.Kernel.get(this, "listenerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceleratorId = java.util.Objects.requireNonNull(builder.acceleratorId, "acceleratorId is required");
            this.forwardingRules = java.util.Objects.requireNonNull(builder.forwardingRules, "forwardingRules is required");
            this.listenerId = java.util.Objects.requireNonNull(builder.listenerId, "listenerId is required");
        }

        @Override
        public final java.lang.Object getAcceleratorId() {
            return this.acceleratorId;
        }

        @Override
        public final java.lang.Object getForwardingRules() {
            return this.forwardingRules;
        }

        @Override
        public final java.lang.Object getListenerId() {
            return this.listenerId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("acceleratorId", om.valueToTree(this.getAcceleratorId()));
            data.set("forwardingRules", om.valueToTree(this.getForwardingRules()));
            data.set("listenerId", om.valueToTree(this.getListenerId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.ForwardingRulesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ForwardingRulesProps.Jsii$Proxy that = (ForwardingRulesProps.Jsii$Proxy) o;

            if (!acceleratorId.equals(that.acceleratorId)) return false;
            if (!forwardingRules.equals(that.forwardingRules)) return false;
            return this.listenerId.equals(that.listenerId);
        }

        @Override
        public final int hashCode() {
            int result = this.acceleratorId.hashCode();
            result = 31 * result + (this.forwardingRules.hashCode());
            result = 31 * result + (this.listenerId.hashCode());
            return result;
        }
    }
}
