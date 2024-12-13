package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>EndpointGroups</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroups
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:08.622Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.EndpointGroupsProps")
@software.amazon.jsii.Jsii.Proxy(EndpointGroupsProps.Jsii$Proxy.class)
public interface EndpointGroupsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property acceleratorId: The ID of the basic GA instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId();

    /**
     * Property endpointGroupConfigurations: The configurations of the endpoint groups.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpointGroupConfigurations();

    /**
     * Property listenerId: The ID of the region to which the endpoint group belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerId();

    /**
     * @return a {@link Builder} of {@link EndpointGroupsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EndpointGroupsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EndpointGroupsProps> {
        java.lang.Object acceleratorId;
        java.lang.Object endpointGroupConfigurations;
        java.lang.Object listenerId;

        /**
         * Sets the value of {@link EndpointGroupsProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: The ID of the basic GA instance. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link EndpointGroupsProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: The ID of the basic GA instance. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link EndpointGroupsProps#getEndpointGroupConfigurations}
         * @param endpointGroupConfigurations Property endpointGroupConfigurations: The configurations of the endpoint groups. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointGroupConfigurations(com.aliyun.ros.cdk.core.IResolvable endpointGroupConfigurations) {
            this.endpointGroupConfigurations = endpointGroupConfigurations;
            return this;
        }

        /**
         * Sets the value of {@link EndpointGroupsProps#getEndpointGroupConfigurations}
         * @param endpointGroupConfigurations Property endpointGroupConfigurations: The configurations of the endpoint groups. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointGroupConfigurations(java.util.List<? extends java.lang.Object> endpointGroupConfigurations) {
            this.endpointGroupConfigurations = endpointGroupConfigurations;
            return this;
        }

        /**
         * Sets the value of {@link EndpointGroupsProps#getListenerId}
         * @param listenerId Property listenerId: The ID of the region to which the endpoint group belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(java.lang.String listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link EndpointGroupsProps#getListenerId}
         * @param listenerId Property listenerId: The ID of the region to which the endpoint group belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EndpointGroupsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EndpointGroupsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link EndpointGroupsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EndpointGroupsProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.EndpointGroupsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EndpointGroupsProps.Jsii$Proxy that = (EndpointGroupsProps.Jsii$Proxy) o;

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
