package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a `ALIYUN::SLB::Rule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.592Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RuleProps")
@software.amazon.jsii.Jsii.Proxy(RuleProps.Jsii$Proxy.class)
public interface RuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getListenerPort();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getLoadBalancerId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleList();

    /**
     * @return a {@link Builder} of {@link RuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RuleProps> {
        private java.lang.Number listenerPort;
        private java.lang.String loadBalancerId;
        private java.lang.Object ruleList;

        /**
         * Sets the value of {@link RuleProps#getListenerPort}
         * @param listenerPort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerPort(java.lang.Number listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getRuleList}
         * @param ruleList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleList(com.aliyun.ros.cdk.core.IResolvable ruleList) {
            this.ruleList = ruleList;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getRuleList}
         * @param ruleList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleList(java.util.List<? extends java.lang.Object> ruleList) {
            this.ruleList = ruleList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RuleProps build() {
            return new Jsii$Proxy(listenerPort, loadBalancerId, ruleList);
        }
    }

    /**
     * An implementation for {@link RuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RuleProps {
        private final java.lang.Number listenerPort;
        private final java.lang.String loadBalancerId;
        private final java.lang.Object ruleList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.listenerPort = software.amazon.jsii.Kernel.get(this, "listenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ruleList = software.amazon.jsii.Kernel.get(this, "ruleList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Number listenerPort, final java.lang.String loadBalancerId, final java.lang.Object ruleList) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.listenerPort = java.util.Objects.requireNonNull(listenerPort, "listenerPort is required");
            this.loadBalancerId = java.util.Objects.requireNonNull(loadBalancerId, "loadBalancerId is required");
            this.ruleList = java.util.Objects.requireNonNull(ruleList, "ruleList is required");
        }

        @Override
        public final java.lang.Number getListenerPort() {
            return this.listenerPort;
        }

        @Override
        public final java.lang.String getLoadBalancerId() {
            return this.loadBalancerId;
        }

        @Override
        public final java.lang.Object getRuleList() {
            return this.ruleList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("listenerPort", om.valueToTree(this.getListenerPort()));
            data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            data.set("ruleList", om.valueToTree(this.getRuleList()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RuleProps.Jsii$Proxy that = (RuleProps.Jsii$Proxy) o;

            if (!listenerPort.equals(that.listenerPort)) return false;
            if (!loadBalancerId.equals(that.loadBalancerId)) return false;
            return this.ruleList.equals(that.ruleList);
        }

        @Override
        public final int hashCode() {
            int result = this.listenerPort.hashCode();
            result = 31 * result + (this.loadBalancerId.hashCode());
            result = 31 * result + (this.ruleList.hashCode());
            return result;
        }
    }
}
