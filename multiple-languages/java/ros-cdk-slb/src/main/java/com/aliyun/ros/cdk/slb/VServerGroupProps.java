package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a `ALIYUN::SLB::VServerGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:36.397Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.VServerGroupProps")
@software.amazon.jsii.Jsii.Proxy(VServerGroupProps.Jsii$Proxy.class)
public interface VServerGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getLoadBalancerId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getVServerGroupName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackendServers() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VServerGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VServerGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VServerGroupProps> {
        private java.lang.String loadBalancerId;
        private java.lang.String vServerGroupName;
        private java.lang.Object backendServers;

        /**
         * Sets the value of {@link VServerGroupProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupProps#getVServerGroupName}
         * @param vServerGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vServerGroupName(java.lang.String vServerGroupName) {
            this.vServerGroupName = vServerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupProps#getBackendServers}
         * @param backendServers the value to be set.
         * @return {@code this}
         */
        public Builder backendServers(com.aliyun.ros.cdk.core.IResolvable backendServers) {
            this.backendServers = backendServers;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupProps#getBackendServers}
         * @param backendServers the value to be set.
         * @return {@code this}
         */
        public Builder backendServers(java.util.List<? extends java.lang.Object> backendServers) {
            this.backendServers = backendServers;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VServerGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VServerGroupProps build() {
            return new Jsii$Proxy(loadBalancerId, vServerGroupName, backendServers);
        }
    }

    /**
     * An implementation for {@link VServerGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VServerGroupProps {
        private final java.lang.String loadBalancerId;
        private final java.lang.String vServerGroupName;
        private final java.lang.Object backendServers;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vServerGroupName = software.amazon.jsii.Kernel.get(this, "vServerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.backendServers = software.amazon.jsii.Kernel.get(this, "backendServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String loadBalancerId, final java.lang.String vServerGroupName, final java.lang.Object backendServers) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.loadBalancerId = java.util.Objects.requireNonNull(loadBalancerId, "loadBalancerId is required");
            this.vServerGroupName = java.util.Objects.requireNonNull(vServerGroupName, "vServerGroupName is required");
            this.backendServers = backendServers;
        }

        @Override
        public final java.lang.String getLoadBalancerId() {
            return this.loadBalancerId;
        }

        @Override
        public final java.lang.String getVServerGroupName() {
            return this.vServerGroupName;
        }

        @Override
        public final java.lang.Object getBackendServers() {
            return this.backendServers;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            data.set("vServerGroupName", om.valueToTree(this.getVServerGroupName()));
            if (this.getBackendServers() != null) {
                data.set("backendServers", om.valueToTree(this.getBackendServers()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.VServerGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VServerGroupProps.Jsii$Proxy that = (VServerGroupProps.Jsii$Proxy) o;

            if (!loadBalancerId.equals(that.loadBalancerId)) return false;
            if (!vServerGroupName.equals(that.vServerGroupName)) return false;
            return this.backendServers != null ? this.backendServers.equals(that.backendServers) : that.backendServers == null;
        }

        @Override
        public final int hashCode() {
            int result = this.loadBalancerId.hashCode();
            result = 31 * result + (this.vServerGroupName.hashCode());
            result = 31 * result + (this.backendServers != null ? this.backendServers.hashCode() : 0);
            return result;
        }
    }
}
