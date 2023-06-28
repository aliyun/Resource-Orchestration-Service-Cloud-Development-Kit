package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a <code>ALIYUN::SLB::BackendServerToVServerGroupAddition</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:30.507Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosBackendServerToVServerGroupAdditionProps")
@software.amazon.jsii.Jsii.Proxy(RosBackendServerToVServerGroupAdditionProps.Jsii$Proxy.class)
public interface RosBackendServerToVServerGroupAdditionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBackendServers();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVServerGroupId();

    /**
     * @return a {@link Builder} of {@link RosBackendServerToVServerGroupAdditionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBackendServerToVServerGroupAdditionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBackendServerToVServerGroupAdditionProps> {
        java.lang.Object backendServers;
        java.lang.Object vServerGroupId;

        /**
         * Sets the value of {@link RosBackendServerToVServerGroupAdditionProps#getBackendServers}
         * @param backendServers the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder backendServers(com.aliyun.ros.cdk.core.IResolvable backendServers) {
            this.backendServers = backendServers;
            return this;
        }

        /**
         * Sets the value of {@link RosBackendServerToVServerGroupAdditionProps#getBackendServers}
         * @param backendServers the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder backendServers(java.util.List<? extends java.lang.Object> backendServers) {
            this.backendServers = backendServers;
            return this;
        }

        /**
         * Sets the value of {@link RosBackendServerToVServerGroupAdditionProps#getVServerGroupId}
         * @param vServerGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vServerGroupId(java.lang.String vServerGroupId) {
            this.vServerGroupId = vServerGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosBackendServerToVServerGroupAdditionProps#getVServerGroupId}
         * @param vServerGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vServerGroupId(com.aliyun.ros.cdk.core.IResolvable vServerGroupId) {
            this.vServerGroupId = vServerGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBackendServerToVServerGroupAdditionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBackendServerToVServerGroupAdditionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBackendServerToVServerGroupAdditionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBackendServerToVServerGroupAdditionProps {
        private final java.lang.Object backendServers;
        private final java.lang.Object vServerGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.backendServers = software.amazon.jsii.Kernel.get(this, "backendServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vServerGroupId = software.amazon.jsii.Kernel.get(this, "vServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.backendServers = java.util.Objects.requireNonNull(builder.backendServers, "backendServers is required");
            this.vServerGroupId = java.util.Objects.requireNonNull(builder.vServerGroupId, "vServerGroupId is required");
        }

        @Override
        public final java.lang.Object getBackendServers() {
            return this.backendServers;
        }

        @Override
        public final java.lang.Object getVServerGroupId() {
            return this.vServerGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("backendServers", om.valueToTree(this.getBackendServers()));
            data.set("vServerGroupId", om.valueToTree(this.getVServerGroupId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RosBackendServerToVServerGroupAdditionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBackendServerToVServerGroupAdditionProps.Jsii$Proxy that = (RosBackendServerToVServerGroupAdditionProps.Jsii$Proxy) o;

            if (!backendServers.equals(that.backendServers)) return false;
            return this.vServerGroupId.equals(that.vServerGroupId);
        }

        @Override
        public final int hashCode() {
            int result = this.backendServers.hashCode();
            result = 31 * result + (this.vServerGroupId.hashCode());
            return result;
        }
    }
}
