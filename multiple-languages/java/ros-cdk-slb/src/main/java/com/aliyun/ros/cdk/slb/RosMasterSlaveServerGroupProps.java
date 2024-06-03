package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a <code>RosMasterSlaveServerGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-masterslaveservergroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:54.504Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosMasterSlaveServerGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosMasterSlaveServerGroupProps.Jsii$Proxy.class)
public interface RosMasterSlaveServerGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMasterSlaveBackendServers();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterSlaveServerGroupName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosMasterSlaveServerGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosMasterSlaveServerGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosMasterSlaveServerGroupProps> {
        java.lang.Object loadBalancerId;
        java.lang.Object masterSlaveBackendServers;
        java.lang.Object masterSlaveServerGroupName;

        /**
         * Sets the value of {@link RosMasterSlaveServerGroupProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosMasterSlaveServerGroupProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosMasterSlaveServerGroupProps#getMasterSlaveBackendServers}
         * @param masterSlaveBackendServers the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder masterSlaveBackendServers(com.aliyun.ros.cdk.core.IResolvable masterSlaveBackendServers) {
            this.masterSlaveBackendServers = masterSlaveBackendServers;
            return this;
        }

        /**
         * Sets the value of {@link RosMasterSlaveServerGroupProps#getMasterSlaveBackendServers}
         * @param masterSlaveBackendServers the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder masterSlaveBackendServers(java.util.List<? extends java.lang.Object> masterSlaveBackendServers) {
            this.masterSlaveBackendServers = masterSlaveBackendServers;
            return this;
        }

        /**
         * Sets the value of {@link RosMasterSlaveServerGroupProps#getMasterSlaveServerGroupName}
         * @param masterSlaveServerGroupName the value to be set.
         * @return {@code this}
         */
        public Builder masterSlaveServerGroupName(java.lang.String masterSlaveServerGroupName) {
            this.masterSlaveServerGroupName = masterSlaveServerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosMasterSlaveServerGroupProps#getMasterSlaveServerGroupName}
         * @param masterSlaveServerGroupName the value to be set.
         * @return {@code this}
         */
        public Builder masterSlaveServerGroupName(com.aliyun.ros.cdk.core.IResolvable masterSlaveServerGroupName) {
            this.masterSlaveServerGroupName = masterSlaveServerGroupName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosMasterSlaveServerGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosMasterSlaveServerGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosMasterSlaveServerGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosMasterSlaveServerGroupProps {
        private final java.lang.Object loadBalancerId;
        private final java.lang.Object masterSlaveBackendServers;
        private final java.lang.Object masterSlaveServerGroupName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterSlaveBackendServers = software.amazon.jsii.Kernel.get(this, "masterSlaveBackendServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterSlaveServerGroupName = software.amazon.jsii.Kernel.get(this, "masterSlaveServerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.loadBalancerId = java.util.Objects.requireNonNull(builder.loadBalancerId, "loadBalancerId is required");
            this.masterSlaveBackendServers = java.util.Objects.requireNonNull(builder.masterSlaveBackendServers, "masterSlaveBackendServers is required");
            this.masterSlaveServerGroupName = builder.masterSlaveServerGroupName;
        }

        @Override
        public final java.lang.Object getLoadBalancerId() {
            return this.loadBalancerId;
        }

        @Override
        public final java.lang.Object getMasterSlaveBackendServers() {
            return this.masterSlaveBackendServers;
        }

        @Override
        public final java.lang.Object getMasterSlaveServerGroupName() {
            return this.masterSlaveServerGroupName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            data.set("masterSlaveBackendServers", om.valueToTree(this.getMasterSlaveBackendServers()));
            if (this.getMasterSlaveServerGroupName() != null) {
                data.set("masterSlaveServerGroupName", om.valueToTree(this.getMasterSlaveServerGroupName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RosMasterSlaveServerGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosMasterSlaveServerGroupProps.Jsii$Proxy that = (RosMasterSlaveServerGroupProps.Jsii$Proxy) o;

            if (!loadBalancerId.equals(that.loadBalancerId)) return false;
            if (!masterSlaveBackendServers.equals(that.masterSlaveBackendServers)) return false;
            return this.masterSlaveServerGroupName != null ? this.masterSlaveServerGroupName.equals(that.masterSlaveServerGroupName) : that.masterSlaveServerGroupName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.loadBalancerId.hashCode();
            result = 31 * result + (this.masterSlaveBackendServers.hashCode());
            result = 31 * result + (this.masterSlaveServerGroupName != null ? this.masterSlaveServerGroupName.hashCode() : 0);
            return result;
        }
    }
}
