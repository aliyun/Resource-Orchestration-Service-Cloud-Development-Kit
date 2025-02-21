package com.aliyun.ros.cdk.cloudfw;

/**
 * Properties for defining a <code>RosTrFirewallRoutePolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewallroutepolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:12.863Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicyProps")
@software.amazon.jsii.Jsii.Proxy(RosTrFirewallRoutePolicyProps.Jsii$Proxy.class)
public interface RosTrFirewallRoutePolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFirewallId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyDescription();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestCandidateList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSrcCandidateList() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTrFirewallRoutePolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTrFirewallRoutePolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTrFirewallRoutePolicyProps> {
        java.lang.Object firewallId;
        java.lang.Object policyDescription;
        java.lang.Object policyName;
        java.lang.Object policyType;
        java.lang.Object destCandidateList;
        java.lang.Object srcCandidateList;

        /**
         * Sets the value of {@link RosTrFirewallRoutePolicyProps#getFirewallId}
         * @param firewallId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder firewallId(java.lang.String firewallId) {
            this.firewallId = firewallId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallRoutePolicyProps#getFirewallId}
         * @param firewallId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder firewallId(com.aliyun.ros.cdk.core.IResolvable firewallId) {
            this.firewallId = firewallId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallRoutePolicyProps#getPolicyDescription}
         * @param policyDescription the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyDescription(java.lang.String policyDescription) {
            this.policyDescription = policyDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallRoutePolicyProps#getPolicyDescription}
         * @param policyDescription the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyDescription(com.aliyun.ros.cdk.core.IResolvable policyDescription) {
            this.policyDescription = policyDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallRoutePolicyProps#getPolicyName}
         * @param policyName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(java.lang.String policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallRoutePolicyProps#getPolicyName}
         * @param policyName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallRoutePolicyProps#getPolicyType}
         * @param policyType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyType(java.lang.String policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallRoutePolicyProps#getPolicyType}
         * @param policyType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyType(com.aliyun.ros.cdk.core.IResolvable policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallRoutePolicyProps#getDestCandidateList}
         * @param destCandidateList the value to be set.
         * @return {@code this}
         */
        public Builder destCandidateList(com.aliyun.ros.cdk.core.IResolvable destCandidateList) {
            this.destCandidateList = destCandidateList;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallRoutePolicyProps#getDestCandidateList}
         * @param destCandidateList the value to be set.
         * @return {@code this}
         */
        public Builder destCandidateList(java.util.List<? extends java.lang.Object> destCandidateList) {
            this.destCandidateList = destCandidateList;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallRoutePolicyProps#getSrcCandidateList}
         * @param srcCandidateList the value to be set.
         * @return {@code this}
         */
        public Builder srcCandidateList(com.aliyun.ros.cdk.core.IResolvable srcCandidateList) {
            this.srcCandidateList = srcCandidateList;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallRoutePolicyProps#getSrcCandidateList}
         * @param srcCandidateList the value to be set.
         * @return {@code this}
         */
        public Builder srcCandidateList(java.util.List<? extends java.lang.Object> srcCandidateList) {
            this.srcCandidateList = srcCandidateList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTrFirewallRoutePolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTrFirewallRoutePolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTrFirewallRoutePolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTrFirewallRoutePolicyProps {
        private final java.lang.Object firewallId;
        private final java.lang.Object policyDescription;
        private final java.lang.Object policyName;
        private final java.lang.Object policyType;
        private final java.lang.Object destCandidateList;
        private final java.lang.Object srcCandidateList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.firewallId = software.amazon.jsii.Kernel.get(this, "firewallId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyDescription = software.amazon.jsii.Kernel.get(this, "policyDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyName = software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyType = software.amazon.jsii.Kernel.get(this, "policyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destCandidateList = software.amazon.jsii.Kernel.get(this, "destCandidateList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.srcCandidateList = software.amazon.jsii.Kernel.get(this, "srcCandidateList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.firewallId = java.util.Objects.requireNonNull(builder.firewallId, "firewallId is required");
            this.policyDescription = java.util.Objects.requireNonNull(builder.policyDescription, "policyDescription is required");
            this.policyName = java.util.Objects.requireNonNull(builder.policyName, "policyName is required");
            this.policyType = java.util.Objects.requireNonNull(builder.policyType, "policyType is required");
            this.destCandidateList = builder.destCandidateList;
            this.srcCandidateList = builder.srcCandidateList;
        }

        @Override
        public final java.lang.Object getFirewallId() {
            return this.firewallId;
        }

        @Override
        public final java.lang.Object getPolicyDescription() {
            return this.policyDescription;
        }

        @Override
        public final java.lang.Object getPolicyName() {
            return this.policyName;
        }

        @Override
        public final java.lang.Object getPolicyType() {
            return this.policyType;
        }

        @Override
        public final java.lang.Object getDestCandidateList() {
            return this.destCandidateList;
        }

        @Override
        public final java.lang.Object getSrcCandidateList() {
            return this.srcCandidateList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("firewallId", om.valueToTree(this.getFirewallId()));
            data.set("policyDescription", om.valueToTree(this.getPolicyDescription()));
            data.set("policyName", om.valueToTree(this.getPolicyName()));
            data.set("policyType", om.valueToTree(this.getPolicyType()));
            if (this.getDestCandidateList() != null) {
                data.set("destCandidateList", om.valueToTree(this.getDestCandidateList()));
            }
            if (this.getSrcCandidateList() != null) {
                data.set("srcCandidateList", om.valueToTree(this.getSrcCandidateList()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTrFirewallRoutePolicyProps.Jsii$Proxy that = (RosTrFirewallRoutePolicyProps.Jsii$Proxy) o;

            if (!firewallId.equals(that.firewallId)) return false;
            if (!policyDescription.equals(that.policyDescription)) return false;
            if (!policyName.equals(that.policyName)) return false;
            if (!policyType.equals(that.policyType)) return false;
            if (this.destCandidateList != null ? !this.destCandidateList.equals(that.destCandidateList) : that.destCandidateList != null) return false;
            return this.srcCandidateList != null ? this.srcCandidateList.equals(that.srcCandidateList) : that.srcCandidateList == null;
        }

        @Override
        public final int hashCode() {
            int result = this.firewallId.hashCode();
            result = 31 * result + (this.policyDescription.hashCode());
            result = 31 * result + (this.policyName.hashCode());
            result = 31 * result + (this.policyType.hashCode());
            result = 31 * result + (this.destCandidateList != null ? this.destCandidateList.hashCode() : 0);
            result = 31 * result + (this.srcCandidateList != null ? this.srcCandidateList.hashCode() : 0);
            return result;
        }
    }
}
