package com.aliyun.ros.cdk.slb.datasource;

/**
 * Properties for defining a <code>RosRules</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rules
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:10.759Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.datasource.RosRulesProps")
@software.amazon.jsii.Jsii.Proxy(RosRulesProps.Jsii$Proxy.class)
public interface RosRulesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerPort();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getListenerProtocol() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRulesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRulesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRulesProps> {
        java.lang.Object listenerPort;
        java.lang.Object loadBalancerId;
        java.lang.Object listenerProtocol;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosRulesProps#getListenerPort}
         * @param listenerPort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerPort(java.lang.String listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

        /**
         * Sets the value of {@link RosRulesProps#getListenerPort}
         * @param listenerPort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerPort(com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

        /**
         * Sets the value of {@link RosRulesProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosRulesProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosRulesProps#getListenerProtocol}
         * @param listenerProtocol the value to be set.
         * @return {@code this}
         */
        public Builder listenerProtocol(java.lang.String listenerProtocol) {
            this.listenerProtocol = listenerProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosRulesProps#getListenerProtocol}
         * @param listenerProtocol the value to be set.
         * @return {@code this}
         */
        public Builder listenerProtocol(com.aliyun.ros.cdk.core.IResolvable listenerProtocol) {
            this.listenerProtocol = listenerProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosRulesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosRulesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRulesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRulesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRulesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRulesProps {
        private final java.lang.Object listenerPort;
        private final java.lang.Object loadBalancerId;
        private final java.lang.Object listenerProtocol;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.listenerPort = software.amazon.jsii.Kernel.get(this, "listenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerProtocol = software.amazon.jsii.Kernel.get(this, "listenerProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.listenerPort = java.util.Objects.requireNonNull(builder.listenerPort, "listenerPort is required");
            this.loadBalancerId = java.util.Objects.requireNonNull(builder.loadBalancerId, "loadBalancerId is required");
            this.listenerProtocol = builder.listenerProtocol;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getListenerPort() {
            return this.listenerPort;
        }

        @Override
        public final java.lang.Object getLoadBalancerId() {
            return this.loadBalancerId;
        }

        @Override
        public final java.lang.Object getListenerProtocol() {
            return this.listenerProtocol;
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

            data.set("listenerPort", om.valueToTree(this.getListenerPort()));
            data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            if (this.getListenerProtocol() != null) {
                data.set("listenerProtocol", om.valueToTree(this.getListenerProtocol()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.datasource.RosRulesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRulesProps.Jsii$Proxy that = (RosRulesProps.Jsii$Proxy) o;

            if (!listenerPort.equals(that.listenerPort)) return false;
            if (!loadBalancerId.equals(that.loadBalancerId)) return false;
            if (this.listenerProtocol != null ? !this.listenerProtocol.equals(that.listenerProtocol) : that.listenerProtocol != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.listenerPort.hashCode();
            result = 31 * result + (this.loadBalancerId.hashCode());
            result = 31 * result + (this.listenerProtocol != null ? this.listenerProtocol.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
