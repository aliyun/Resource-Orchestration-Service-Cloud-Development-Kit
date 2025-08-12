package com.aliyun.ros.cdk.cloudfw;

/**
 * Properties for defining a <code>VpcFirewallConfigure</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallconfigure
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:44.601Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.VpcFirewallConfigureProps")
@software.amazon.jsii.Jsii.Proxy(VpcFirewallConfigureProps.Jsii$Proxy.class)
public interface VpcFirewallConfigureProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property firewallSwitch: The status of the VPC firewall after you create the firewall.
     * <p>
     * Valid values:
     * open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
     * close: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the ModifyVpcFirewallSwitchStatus operation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFirewallSwitch();

    /**
     * Property localVpcCidrTableList: The CIDR blocks of the local VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocalVpcCidrTableList();

    /**
     * Property localVpcId: The ID of the local VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocalVpcId();

    /**
     * Property localVpcRegion: The region ID of the local VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocalVpcRegion();

    /**
     * Property peerVpcCidrTableList: The CIDR blocks of the peer VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeerVpcCidrTableList();

    /**
     * Property peerVpcId: The ID of the peer VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeerVpcId();

    /**
     * Property peerVpcRegion: The region ID of the peer VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeerVpcRegion();

    /**
     * Property vpcFirewallName: The instance name of the VPC firewall.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcFirewallName();

    /**
     * Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMemberUid() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VpcFirewallConfigureProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpcFirewallConfigureProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpcFirewallConfigureProps> {
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
         * Sets the value of {@link VpcFirewallConfigureProps#getFirewallSwitch}
         * @param firewallSwitch Property firewallSwitch: The status of the VPC firewall after you create the firewall. This parameter is required.
         *                       Valid values:
         *                       open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
         *                       close: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the ModifyVpcFirewallSwitchStatus operation.
         * @return {@code this}
         */
        public Builder firewallSwitch(java.lang.String firewallSwitch) {
            this.firewallSwitch = firewallSwitch;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallConfigureProps#getFirewallSwitch}
         * @param firewallSwitch Property firewallSwitch: The status of the VPC firewall after you create the firewall. This parameter is required.
         *                       Valid values:
         *                       open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
         *                       close: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the ModifyVpcFirewallSwitchStatus operation.
         * @return {@code this}
         */
        public Builder firewallSwitch(com.aliyun.ros.cdk.core.IResolvable firewallSwitch) {
            this.firewallSwitch = firewallSwitch;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallConfigureProps#getLocalVpcCidrTableList}
         * @param localVpcCidrTableList Property localVpcCidrTableList: The CIDR blocks of the local VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder localVpcCidrTableList(com.aliyun.ros.cdk.core.IResolvable localVpcCidrTableList) {
            this.localVpcCidrTableList = localVpcCidrTableList;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallConfigureProps#getLocalVpcCidrTableList}
         * @param localVpcCidrTableList Property localVpcCidrTableList: The CIDR blocks of the local VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder localVpcCidrTableList(java.util.List<? extends java.lang.Object> localVpcCidrTableList) {
            this.localVpcCidrTableList = localVpcCidrTableList;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallConfigureProps#getLocalVpcId}
         * @param localVpcId Property localVpcId: The ID of the local VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder localVpcId(java.lang.String localVpcId) {
            this.localVpcId = localVpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallConfigureProps#getLocalVpcId}
         * @param localVpcId Property localVpcId: The ID of the local VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder localVpcId(com.aliyun.ros.cdk.core.IResolvable localVpcId) {
            this.localVpcId = localVpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallConfigureProps#getLocalVpcRegion}
         * @param localVpcRegion Property localVpcRegion: The region ID of the local VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder localVpcRegion(java.lang.String localVpcRegion) {
            this.localVpcRegion = localVpcRegion;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallConfigureProps#getLocalVpcRegion}
         * @param localVpcRegion Property localVpcRegion: The region ID of the local VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder localVpcRegion(com.aliyun.ros.cdk.core.IResolvable localVpcRegion) {
            this.localVpcRegion = localVpcRegion;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallConfigureProps#getPeerVpcCidrTableList}
         * @param peerVpcCidrTableList Property peerVpcCidrTableList: The CIDR blocks of the peer VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder peerVpcCidrTableList(com.aliyun.ros.cdk.core.IResolvable peerVpcCidrTableList) {
            this.peerVpcCidrTableList = peerVpcCidrTableList;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallConfigureProps#getPeerVpcCidrTableList}
         * @param peerVpcCidrTableList Property peerVpcCidrTableList: The CIDR blocks of the peer VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder peerVpcCidrTableList(java.util.List<? extends java.lang.Object> peerVpcCidrTableList) {
            this.peerVpcCidrTableList = peerVpcCidrTableList;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallConfigureProps#getPeerVpcId}
         * @param peerVpcId Property peerVpcId: The ID of the peer VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder peerVpcId(java.lang.String peerVpcId) {
            this.peerVpcId = peerVpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallConfigureProps#getPeerVpcId}
         * @param peerVpcId Property peerVpcId: The ID of the peer VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder peerVpcId(com.aliyun.ros.cdk.core.IResolvable peerVpcId) {
            this.peerVpcId = peerVpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallConfigureProps#getPeerVpcRegion}
         * @param peerVpcRegion Property peerVpcRegion: The region ID of the peer VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder peerVpcRegion(java.lang.String peerVpcRegion) {
            this.peerVpcRegion = peerVpcRegion;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallConfigureProps#getPeerVpcRegion}
         * @param peerVpcRegion Property peerVpcRegion: The region ID of the peer VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder peerVpcRegion(com.aliyun.ros.cdk.core.IResolvable peerVpcRegion) {
            this.peerVpcRegion = peerVpcRegion;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallConfigureProps#getVpcFirewallName}
         * @param vpcFirewallName Property vpcFirewallName: The instance name of the VPC firewall. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcFirewallName(java.lang.String vpcFirewallName) {
            this.vpcFirewallName = vpcFirewallName;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallConfigureProps#getVpcFirewallName}
         * @param vpcFirewallName Property vpcFirewallName: The instance name of the VPC firewall. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcFirewallName(com.aliyun.ros.cdk.core.IResolvable vpcFirewallName) {
            this.vpcFirewallName = vpcFirewallName;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallConfigureProps#getMemberUid}
         * @param memberUid Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.
         * @return {@code this}
         */
        public Builder memberUid(java.lang.String memberUid) {
            this.memberUid = memberUid;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallConfigureProps#getMemberUid}
         * @param memberUid Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.
         * @return {@code this}
         */
        public Builder memberUid(com.aliyun.ros.cdk.core.IResolvable memberUid) {
            this.memberUid = memberUid;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpcFirewallConfigureProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpcFirewallConfigureProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VpcFirewallConfigureProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcFirewallConfigureProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.VpcFirewallConfigureProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpcFirewallConfigureProps.Jsii$Proxy that = (VpcFirewallConfigureProps.Jsii$Proxy) o;

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
