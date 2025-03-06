package com.aliyun.ros.cdk.cloudfw;

/**
 * Properties for defining a <code>RosVpcFirewallConfigure</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallconfigure
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:02.741Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigureProps")
@software.amazon.jsii.Jsii.Proxy(RosVpcFirewallConfigureProps.Jsii$Proxy.class)
public interface RosVpcFirewallConfigureProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFirewallSwitch();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocalVpcCidrTableList();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocalVpcId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocalVpcRegion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeerVpcCidrTableList();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeerVpcId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeerVpcRegion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcFirewallName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMemberUid() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosVpcFirewallConfigureProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVpcFirewallConfigureProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVpcFirewallConfigureProps> {
        java.lang.Object firewallSwitch;
        java.lang.Object localVpcCidrTableList;
        java.lang.Object localVpcId;
        java.lang.Object localVpcRegion;
        java.lang.Object peerVpcCidrTableList;
        java.lang.Object peerVpcId;
        java.lang.Object peerVpcRegion;
        java.lang.Object vpcFirewallName;
        java.lang.Object memberUid;

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getFirewallSwitch}
         * @param firewallSwitch the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder firewallSwitch(java.lang.String firewallSwitch) {
            this.firewallSwitch = firewallSwitch;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getFirewallSwitch}
         * @param firewallSwitch the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder firewallSwitch(com.aliyun.ros.cdk.core.IResolvable firewallSwitch) {
            this.firewallSwitch = firewallSwitch;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getLocalVpcCidrTableList}
         * @param localVpcCidrTableList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localVpcCidrTableList(com.aliyun.ros.cdk.core.IResolvable localVpcCidrTableList) {
            this.localVpcCidrTableList = localVpcCidrTableList;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getLocalVpcCidrTableList}
         * @param localVpcCidrTableList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localVpcCidrTableList(java.util.List<? extends java.lang.Object> localVpcCidrTableList) {
            this.localVpcCidrTableList = localVpcCidrTableList;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getLocalVpcId}
         * @param localVpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localVpcId(java.lang.String localVpcId) {
            this.localVpcId = localVpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getLocalVpcId}
         * @param localVpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localVpcId(com.aliyun.ros.cdk.core.IResolvable localVpcId) {
            this.localVpcId = localVpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getLocalVpcRegion}
         * @param localVpcRegion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localVpcRegion(java.lang.String localVpcRegion) {
            this.localVpcRegion = localVpcRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getLocalVpcRegion}
         * @param localVpcRegion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localVpcRegion(com.aliyun.ros.cdk.core.IResolvable localVpcRegion) {
            this.localVpcRegion = localVpcRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getPeerVpcCidrTableList}
         * @param peerVpcCidrTableList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder peerVpcCidrTableList(com.aliyun.ros.cdk.core.IResolvable peerVpcCidrTableList) {
            this.peerVpcCidrTableList = peerVpcCidrTableList;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getPeerVpcCidrTableList}
         * @param peerVpcCidrTableList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder peerVpcCidrTableList(java.util.List<? extends java.lang.Object> peerVpcCidrTableList) {
            this.peerVpcCidrTableList = peerVpcCidrTableList;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getPeerVpcId}
         * @param peerVpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder peerVpcId(java.lang.String peerVpcId) {
            this.peerVpcId = peerVpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getPeerVpcId}
         * @param peerVpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder peerVpcId(com.aliyun.ros.cdk.core.IResolvable peerVpcId) {
            this.peerVpcId = peerVpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getPeerVpcRegion}
         * @param peerVpcRegion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder peerVpcRegion(java.lang.String peerVpcRegion) {
            this.peerVpcRegion = peerVpcRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getPeerVpcRegion}
         * @param peerVpcRegion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder peerVpcRegion(com.aliyun.ros.cdk.core.IResolvable peerVpcRegion) {
            this.peerVpcRegion = peerVpcRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getVpcFirewallName}
         * @param vpcFirewallName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcFirewallName(java.lang.String vpcFirewallName) {
            this.vpcFirewallName = vpcFirewallName;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getVpcFirewallName}
         * @param vpcFirewallName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcFirewallName(com.aliyun.ros.cdk.core.IResolvable vpcFirewallName) {
            this.vpcFirewallName = vpcFirewallName;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getMemberUid}
         * @param memberUid the value to be set.
         * @return {@code this}
         */
        public Builder memberUid(java.lang.String memberUid) {
            this.memberUid = memberUid;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcFirewallConfigureProps#getMemberUid}
         * @param memberUid the value to be set.
         * @return {@code this}
         */
        public Builder memberUid(com.aliyun.ros.cdk.core.IResolvable memberUid) {
            this.memberUid = memberUid;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVpcFirewallConfigureProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVpcFirewallConfigureProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVpcFirewallConfigureProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVpcFirewallConfigureProps {
        private final java.lang.Object firewallSwitch;
        private final java.lang.Object localVpcCidrTableList;
        private final java.lang.Object localVpcId;
        private final java.lang.Object localVpcRegion;
        private final java.lang.Object peerVpcCidrTableList;
        private final java.lang.Object peerVpcId;
        private final java.lang.Object peerVpcRegion;
        private final java.lang.Object vpcFirewallName;
        private final java.lang.Object memberUid;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.firewallSwitch = software.amazon.jsii.Kernel.get(this, "firewallSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localVpcCidrTableList = software.amazon.jsii.Kernel.get(this, "localVpcCidrTableList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localVpcId = software.amazon.jsii.Kernel.get(this, "localVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localVpcRegion = software.amazon.jsii.Kernel.get(this, "localVpcRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.peerVpcCidrTableList = software.amazon.jsii.Kernel.get(this, "peerVpcCidrTableList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.peerVpcId = software.amazon.jsii.Kernel.get(this, "peerVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.peerVpcRegion = software.amazon.jsii.Kernel.get(this, "peerVpcRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcFirewallName = software.amazon.jsii.Kernel.get(this, "vpcFirewallName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.memberUid = software.amazon.jsii.Kernel.get(this, "memberUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.firewallSwitch = java.util.Objects.requireNonNull(builder.firewallSwitch, "firewallSwitch is required");
            this.localVpcCidrTableList = java.util.Objects.requireNonNull(builder.localVpcCidrTableList, "localVpcCidrTableList is required");
            this.localVpcId = java.util.Objects.requireNonNull(builder.localVpcId, "localVpcId is required");
            this.localVpcRegion = java.util.Objects.requireNonNull(builder.localVpcRegion, "localVpcRegion is required");
            this.peerVpcCidrTableList = java.util.Objects.requireNonNull(builder.peerVpcCidrTableList, "peerVpcCidrTableList is required");
            this.peerVpcId = java.util.Objects.requireNonNull(builder.peerVpcId, "peerVpcId is required");
            this.peerVpcRegion = java.util.Objects.requireNonNull(builder.peerVpcRegion, "peerVpcRegion is required");
            this.vpcFirewallName = java.util.Objects.requireNonNull(builder.vpcFirewallName, "vpcFirewallName is required");
            this.memberUid = builder.memberUid;
        }

        @Override
        public final java.lang.Object getFirewallSwitch() {
            return this.firewallSwitch;
        }

        @Override
        public final java.lang.Object getLocalVpcCidrTableList() {
            return this.localVpcCidrTableList;
        }

        @Override
        public final java.lang.Object getLocalVpcId() {
            return this.localVpcId;
        }

        @Override
        public final java.lang.Object getLocalVpcRegion() {
            return this.localVpcRegion;
        }

        @Override
        public final java.lang.Object getPeerVpcCidrTableList() {
            return this.peerVpcCidrTableList;
        }

        @Override
        public final java.lang.Object getPeerVpcId() {
            return this.peerVpcId;
        }

        @Override
        public final java.lang.Object getPeerVpcRegion() {
            return this.peerVpcRegion;
        }

        @Override
        public final java.lang.Object getVpcFirewallName() {
            return this.vpcFirewallName;
        }

        @Override
        public final java.lang.Object getMemberUid() {
            return this.memberUid;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("firewallSwitch", om.valueToTree(this.getFirewallSwitch()));
            data.set("localVpcCidrTableList", om.valueToTree(this.getLocalVpcCidrTableList()));
            data.set("localVpcId", om.valueToTree(this.getLocalVpcId()));
            data.set("localVpcRegion", om.valueToTree(this.getLocalVpcRegion()));
            data.set("peerVpcCidrTableList", om.valueToTree(this.getPeerVpcCidrTableList()));
            data.set("peerVpcId", om.valueToTree(this.getPeerVpcId()));
            data.set("peerVpcRegion", om.valueToTree(this.getPeerVpcRegion()));
            data.set("vpcFirewallName", om.valueToTree(this.getVpcFirewallName()));
            if (this.getMemberUid() != null) {
                data.set("memberUid", om.valueToTree(this.getMemberUid()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigureProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVpcFirewallConfigureProps.Jsii$Proxy that = (RosVpcFirewallConfigureProps.Jsii$Proxy) o;

            if (!firewallSwitch.equals(that.firewallSwitch)) return false;
            if (!localVpcCidrTableList.equals(that.localVpcCidrTableList)) return false;
            if (!localVpcId.equals(that.localVpcId)) return false;
            if (!localVpcRegion.equals(that.localVpcRegion)) return false;
            if (!peerVpcCidrTableList.equals(that.peerVpcCidrTableList)) return false;
            if (!peerVpcId.equals(that.peerVpcId)) return false;
            if (!peerVpcRegion.equals(that.peerVpcRegion)) return false;
            if (!vpcFirewallName.equals(that.vpcFirewallName)) return false;
            return this.memberUid != null ? this.memberUid.equals(that.memberUid) : that.memberUid == null;
        }

        @Override
        public final int hashCode() {
            int result = this.firewallSwitch.hashCode();
            result = 31 * result + (this.localVpcCidrTableList.hashCode());
            result = 31 * result + (this.localVpcId.hashCode());
            result = 31 * result + (this.localVpcRegion.hashCode());
            result = 31 * result + (this.peerVpcCidrTableList.hashCode());
            result = 31 * result + (this.peerVpcId.hashCode());
            result = 31 * result + (this.peerVpcRegion.hashCode());
            result = 31 * result + (this.vpcFirewallName.hashCode());
            result = 31 * result + (this.memberUid != null ? this.memberUid.hashCode() : 0);
            return result;
        }
    }
}
