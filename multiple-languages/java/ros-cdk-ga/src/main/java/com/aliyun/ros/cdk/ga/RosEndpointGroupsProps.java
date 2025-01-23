package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>RosEndpointGroups</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroups
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:40.520Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosEndpointGroupsProps")
@software.amazon.jsii.Jsii.Proxy(RosEndpointGroupsProps.Jsii$Proxy.class)
public interface RosEndpointGroupsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpointGroupConfigurations();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerId();

    /**
     * @return a {@link Builder} of {@link RosEndpointGroupsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosEndpointGroupsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosEndpointGroupsProps> {
        java.lang.Object acceleratorId;
        java.lang.Object endpointGroupConfigurations;
        java.lang.Object listenerId;

        /**
         * Sets the value of {@link RosEndpointGroupsProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupsProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupsProps#getEndpointGroupConfigurations}
         * @param endpointGroupConfigurations the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointGroupConfigurations(com.aliyun.ros.cdk.core.IResolvable endpointGroupConfigurations) {
            this.endpointGroupConfigurations = endpointGroupConfigurations;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupsProps#getEndpointGroupConfigurations}
         * @param endpointGroupConfigurations the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointGroupConfigurations(java.util.List<? extends java.lang.Object> endpointGroupConfigurations) {
            this.endpointGroupConfigurations = endpointGroupConfigurations;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupsProps#getListenerId}
         * @param listenerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(java.lang.String listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupsProps#getListenerId}
         * @param listenerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosEndpointGroupsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosEndpointGroupsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosEndpointGroupsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosEndpointGroupsProps {
        private final java.lang.Object acceleratorId;
        private final java.lang.Object endpointGroupConfigurations;
        private final java.lang.Object listenerId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceleratorId = software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointGroupConfigurations = software.amazon.jsii.Kernel.get(this, "endpointGroupConfigurations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerId = software.amazon.jsii.Kernel.get(this, "listenerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceleratorId = java.util.Objects.requireNonNull(builder.acceleratorId, "acceleratorId is required");
            this.endpointGroupConfigurations = java.util.Objects.requireNonNull(builder.endpointGroupConfigurations, "endpointGroupConfigurations is required");
            this.listenerId = java.util.Objects.requireNonNull(builder.listenerId, "listenerId is required");
        }

        @Override
        public final java.lang.Object getAcceleratorId() {
            return this.acceleratorId;
        }

        @Override
        public final java.lang.Object getEndpointGroupConfigurations() {
            return this.endpointGroupConfigurations;
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
            data.set("endpointGroupConfigurations", om.valueToTree(this.getEndpointGroupConfigurations()));
            data.set("listenerId", om.valueToTree(this.getListenerId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosEndpointGroupsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosEndpointGroupsProps.Jsii$Proxy that = (RosEndpointGroupsProps.Jsii$Proxy) o;

            if (!acceleratorId.equals(that.acceleratorId)) return false;
            if (!endpointGroupConfigurations.equals(that.endpointGroupConfigurations)) return false;
            return this.listenerId.equals(that.listenerId);
        }

        @Override
        public final int hashCode() {
            int result = this.acceleratorId.hashCode();
            result = 31 * result + (this.endpointGroupConfigurations.hashCode());
            result = 31 * result + (this.listenerId.hashCode());
            return result;
        }
    }
}
