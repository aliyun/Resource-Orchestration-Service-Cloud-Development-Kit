package com.aliyun.ros.cdk.sae;

/**
 * Properties for defining a <code>RosIngress</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-ingress
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:29.437Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosIngressProps")
@software.amazon.jsii.Jsii.Proxy(RosIngressProps.Jsii$Proxy.class)
public interface RosIngressProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDefaultRule();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescription();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerPort();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespaceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRules();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSlbId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getListenerProtocol() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalanceType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosIngressProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosIngressProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosIngressProps> {
        java.lang.Object defaultRule;
        java.lang.Object description;
        java.lang.Object listenerPort;
        java.lang.Object namespaceId;
        java.lang.Object rules;
        java.lang.Object slbId;
        java.lang.Object certId;
        java.lang.Object certIds;
        java.lang.Object listenerProtocol;
        java.lang.Object loadBalanceType;

        /**
         * Sets the value of {@link RosIngressProps#getDefaultRule}
         * @param defaultRule the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder defaultRule(com.aliyun.ros.cdk.core.IResolvable defaultRule) {
            this.defaultRule = defaultRule;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getDefaultRule}
         * @param defaultRule the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder defaultRule(com.aliyun.ros.cdk.sae.RosIngress.DefaultRuleProperty defaultRule) {
            this.defaultRule = defaultRule;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getListenerPort}
         * @param listenerPort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerPort(java.lang.Number listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getListenerPort}
         * @param listenerPort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerPort(com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getNamespaceId}
         * @param namespaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getNamespaceId}
         * @param namespaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceId(com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getRules}
         * @param rules the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder rules(com.aliyun.ros.cdk.core.IResolvable rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getRules}
         * @param rules the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder rules(java.util.List<? extends java.lang.Object> rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getSlbId}
         * @param slbId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder slbId(java.lang.String slbId) {
            this.slbId = slbId;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getSlbId}
         * @param slbId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder slbId(com.aliyun.ros.cdk.core.IResolvable slbId) {
            this.slbId = slbId;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getCertId}
         * @param certId the value to be set.
         * @return {@code this}
         */
        public Builder certId(java.lang.String certId) {
            this.certId = certId;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getCertId}
         * @param certId the value to be set.
         * @return {@code this}
         */
        public Builder certId(com.aliyun.ros.cdk.core.IResolvable certId) {
            this.certId = certId;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getCertIds}
         * @param certIds the value to be set.
         * @return {@code this}
         */
        public Builder certIds(com.aliyun.ros.cdk.core.IResolvable certIds) {
            this.certIds = certIds;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getCertIds}
         * @param certIds the value to be set.
         * @return {@code this}
         */
        public Builder certIds(java.util.List<? extends java.lang.Object> certIds) {
            this.certIds = certIds;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getListenerProtocol}
         * @param listenerProtocol the value to be set.
         * @return {@code this}
         */
        public Builder listenerProtocol(java.lang.String listenerProtocol) {
            this.listenerProtocol = listenerProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getListenerProtocol}
         * @param listenerProtocol the value to be set.
         * @return {@code this}
         */
        public Builder listenerProtocol(com.aliyun.ros.cdk.core.IResolvable listenerProtocol) {
            this.listenerProtocol = listenerProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getLoadBalanceType}
         * @param loadBalanceType the value to be set.
         * @return {@code this}
         */
        public Builder loadBalanceType(java.lang.String loadBalanceType) {
            this.loadBalanceType = loadBalanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosIngressProps#getLoadBalanceType}
         * @param loadBalanceType the value to be set.
         * @return {@code this}
         */
        public Builder loadBalanceType(com.aliyun.ros.cdk.core.IResolvable loadBalanceType) {
            this.loadBalanceType = loadBalanceType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosIngressProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosIngressProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosIngressProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosIngressProps {
        private final java.lang.Object defaultRule;
        private final java.lang.Object description;
        private final java.lang.Object listenerPort;
        private final java.lang.Object namespaceId;
        private final java.lang.Object rules;
        private final java.lang.Object slbId;
        private final java.lang.Object certId;
        private final java.lang.Object certIds;
        private final java.lang.Object listenerProtocol;
        private final java.lang.Object loadBalanceType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.defaultRule = software.amazon.jsii.Kernel.get(this, "defaultRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerPort = software.amazon.jsii.Kernel.get(this, "listenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespaceId = software.amazon.jsii.Kernel.get(this, "namespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rules = software.amazon.jsii.Kernel.get(this, "rules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slbId = software.amazon.jsii.Kernel.get(this, "slbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certId = software.amazon.jsii.Kernel.get(this, "certId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certIds = software.amazon.jsii.Kernel.get(this, "certIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerProtocol = software.amazon.jsii.Kernel.get(this, "listenerProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalanceType = software.amazon.jsii.Kernel.get(this, "loadBalanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.defaultRule = java.util.Objects.requireNonNull(builder.defaultRule, "defaultRule is required");
            this.description = java.util.Objects.requireNonNull(builder.description, "description is required");
            this.listenerPort = java.util.Objects.requireNonNull(builder.listenerPort, "listenerPort is required");
            this.namespaceId = java.util.Objects.requireNonNull(builder.namespaceId, "namespaceId is required");
            this.rules = java.util.Objects.requireNonNull(builder.rules, "rules is required");
            this.slbId = java.util.Objects.requireNonNull(builder.slbId, "slbId is required");
            this.certId = builder.certId;
            this.certIds = builder.certIds;
            this.listenerProtocol = builder.listenerProtocol;
            this.loadBalanceType = builder.loadBalanceType;
        }

        @Override
        public final java.lang.Object getDefaultRule() {
            return this.defaultRule;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getListenerPort() {
            return this.listenerPort;
        }

        @Override
        public final java.lang.Object getNamespaceId() {
            return this.namespaceId;
        }

        @Override
        public final java.lang.Object getRules() {
            return this.rules;
        }

        @Override
        public final java.lang.Object getSlbId() {
            return this.slbId;
        }

        @Override
        public final java.lang.Object getCertId() {
            return this.certId;
        }

        @Override
        public final java.lang.Object getCertIds() {
            return this.certIds;
        }

        @Override
        public final java.lang.Object getListenerProtocol() {
            return this.listenerProtocol;
        }

        @Override
        public final java.lang.Object getLoadBalanceType() {
            return this.loadBalanceType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("defaultRule", om.valueToTree(this.getDefaultRule()));
            data.set("description", om.valueToTree(this.getDescription()));
            data.set("listenerPort", om.valueToTree(this.getListenerPort()));
            data.set("namespaceId", om.valueToTree(this.getNamespaceId()));
            data.set("rules", om.valueToTree(this.getRules()));
            data.set("slbId", om.valueToTree(this.getSlbId()));
            if (this.getCertId() != null) {
                data.set("certId", om.valueToTree(this.getCertId()));
            }
            if (this.getCertIds() != null) {
                data.set("certIds", om.valueToTree(this.getCertIds()));
            }
            if (this.getListenerProtocol() != null) {
                data.set("listenerProtocol", om.valueToTree(this.getListenerProtocol()));
            }
            if (this.getLoadBalanceType() != null) {
                data.set("loadBalanceType", om.valueToTree(this.getLoadBalanceType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosIngressProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosIngressProps.Jsii$Proxy that = (RosIngressProps.Jsii$Proxy) o;

            if (!defaultRule.equals(that.defaultRule)) return false;
            if (!description.equals(that.description)) return false;
            if (!listenerPort.equals(that.listenerPort)) return false;
            if (!namespaceId.equals(that.namespaceId)) return false;
            if (!rules.equals(that.rules)) return false;
            if (!slbId.equals(that.slbId)) return false;
            if (this.certId != null ? !this.certId.equals(that.certId) : that.certId != null) return false;
            if (this.certIds != null ? !this.certIds.equals(that.certIds) : that.certIds != null) return false;
            if (this.listenerProtocol != null ? !this.listenerProtocol.equals(that.listenerProtocol) : that.listenerProtocol != null) return false;
            return this.loadBalanceType != null ? this.loadBalanceType.equals(that.loadBalanceType) : that.loadBalanceType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.defaultRule.hashCode();
            result = 31 * result + (this.description.hashCode());
            result = 31 * result + (this.listenerPort.hashCode());
            result = 31 * result + (this.namespaceId.hashCode());
            result = 31 * result + (this.rules.hashCode());
            result = 31 * result + (this.slbId.hashCode());
            result = 31 * result + (this.certId != null ? this.certId.hashCode() : 0);
            result = 31 * result + (this.certIds != null ? this.certIds.hashCode() : 0);
            result = 31 * result + (this.listenerProtocol != null ? this.listenerProtocol.hashCode() : 0);
            result = 31 * result + (this.loadBalanceType != null ? this.loadBalanceType.hashCode() : 0);
            return result;
        }
    }
}
