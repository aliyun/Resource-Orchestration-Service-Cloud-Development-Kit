package com.aliyun.ros.cdk.cloudfw;

/**
 * Properties for defining a <code>VpcFirewallCen</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcen
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:22.159Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.VpcFirewallCenProps")
@software.amazon.jsii.Jsii.Proxy(VpcFirewallCenProps.Jsii$Proxy.class)
public interface VpcFirewallCenProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property cenId: The ID of the CEN instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     * Property firewallSwitch: Specifies whether to enable the VPC firewall.
     * <p>
     * Valid values:
     * open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
     * close: After you create the VPC firewall, the VPC firewall is disabled. You can call the ModifyVpcFirewallCenSwitchStatus operation to manually enable the VPC firewall.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFirewallSwitch();

    /**
     * Property firewallVpcZoneId: The ID of the zone to which the vSwitch belongs.
     * <p>
     * If your service is latency-sensitive, you can specify the same zone for the vSwitch of the firewall and the vSwitch of your business VPC to minimize latency.If you do not specify a value, a zone is automatically assigned for the vSwitch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFirewallVpcZoneId();

    /**
     * Property networkInstanceId: The ID of the VPC for which you want to create the VPC firewall.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkInstanceId();

    /**
     * Property vpcFirewallName: The instance name of the VPC firewall.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcFirewallName();

    /**
     * Property vpcRegion: The ID of the region to which the VPC belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcRegion();

    /**
     * Property firewallVpcCidrBlock: The CIDR block of the VPC that is automatically created for the VPC firewall.
     * <p>
     * You must specify a CIDR block for the Cloud_Firewall_VPC VPC that is automatically created for the VPC firewall for traffic redirection. The subnet mask of the CIDR block must be less than or equal to 28 bits in length.If you do not specify a value, the CIDR block 10.0.0.0/8 is automatically allocated.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFirewallVpcCidrBlock() {
        return null;
    }

    /**
     * Property firewallVSwitchCidrBlock: The CIDR block of the vSwitch that is automatically created for the VPC firewall.You must specify a CIDR block for the Cloud_Firewall_VSWITCH VPC that is automatically created for the VPC firewall for traffic redirection. The CIDR block does not conflict with your network plan. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block of the vSwitch must be within the network segment of the VPC.If you do not specify a value, the CIDR block 10.219.219.216/29 is automatically allocated.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFirewallVSwitchCidrBlock() {
        return null;
    }

    /**
     * Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMemberUid() {
        return null;
    }

    /**
     * Property vSwitchId: The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VpcFirewallCenProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpcFirewallCenProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpcFirewallCenProps> {
        java.lang.Object cenId;
        java.lang.Object firewallSwitch;
        java.lang.Object firewallVpcZoneId;
        java.lang.Object networkInstanceId;
        java.lang.Object vpcFirewallName;
        java.lang.Object vpcRegion;
        java.lang.Object firewallVpcCidrBlock;
        java.lang.Object firewallVSwitchCidrBlock;
        java.lang.Object memberUid;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link VpcFirewallCenProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getFirewallSwitch}
         * @param firewallSwitch Property firewallSwitch: Specifies whether to enable the VPC firewall. This parameter is required.
         *                       Valid values:
         *                       open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
         *                       close: After you create the VPC firewall, the VPC firewall is disabled. You can call the ModifyVpcFirewallCenSwitchStatus operation to manually enable the VPC firewall.
         * @return {@code this}
         */
        public Builder firewallSwitch(java.lang.String firewallSwitch) {
            this.firewallSwitch = firewallSwitch;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getFirewallSwitch}
         * @param firewallSwitch Property firewallSwitch: Specifies whether to enable the VPC firewall. This parameter is required.
         *                       Valid values:
         *                       open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
         *                       close: After you create the VPC firewall, the VPC firewall is disabled. You can call the ModifyVpcFirewallCenSwitchStatus operation to manually enable the VPC firewall.
         * @return {@code this}
         */
        public Builder firewallSwitch(com.aliyun.ros.cdk.core.IResolvable firewallSwitch) {
            this.firewallSwitch = firewallSwitch;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getFirewallVpcZoneId}
         * @param firewallVpcZoneId Property firewallVpcZoneId: The ID of the zone to which the vSwitch belongs. This parameter is required.
         *                          If your service is latency-sensitive, you can specify the same zone for the vSwitch of the firewall and the vSwitch of your business VPC to minimize latency.If you do not specify a value, a zone is automatically assigned for the vSwitch.
         * @return {@code this}
         */
        public Builder firewallVpcZoneId(java.lang.String firewallVpcZoneId) {
            this.firewallVpcZoneId = firewallVpcZoneId;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getFirewallVpcZoneId}
         * @param firewallVpcZoneId Property firewallVpcZoneId: The ID of the zone to which the vSwitch belongs. This parameter is required.
         *                          If your service is latency-sensitive, you can specify the same zone for the vSwitch of the firewall and the vSwitch of your business VPC to minimize latency.If you do not specify a value, a zone is automatically assigned for the vSwitch.
         * @return {@code this}
         */
        public Builder firewallVpcZoneId(com.aliyun.ros.cdk.core.IResolvable firewallVpcZoneId) {
            this.firewallVpcZoneId = firewallVpcZoneId;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getNetworkInstanceId}
         * @param networkInstanceId Property networkInstanceId: The ID of the VPC for which you want to create the VPC firewall. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInstanceId(java.lang.String networkInstanceId) {
            this.networkInstanceId = networkInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getNetworkInstanceId}
         * @param networkInstanceId Property networkInstanceId: The ID of the VPC for which you want to create the VPC firewall. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInstanceId(com.aliyun.ros.cdk.core.IResolvable networkInstanceId) {
            this.networkInstanceId = networkInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getVpcFirewallName}
         * @param vpcFirewallName Property vpcFirewallName: The instance name of the VPC firewall. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcFirewallName(java.lang.String vpcFirewallName) {
            this.vpcFirewallName = vpcFirewallName;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getVpcFirewallName}
         * @param vpcFirewallName Property vpcFirewallName: The instance name of the VPC firewall. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcFirewallName(com.aliyun.ros.cdk.core.IResolvable vpcFirewallName) {
            this.vpcFirewallName = vpcFirewallName;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getVpcRegion}
         * @param vpcRegion Property vpcRegion: The ID of the region to which the VPC belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcRegion(java.lang.String vpcRegion) {
            this.vpcRegion = vpcRegion;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getVpcRegion}
         * @param vpcRegion Property vpcRegion: The ID of the region to which the VPC belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcRegion(com.aliyun.ros.cdk.core.IResolvable vpcRegion) {
            this.vpcRegion = vpcRegion;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getFirewallVpcCidrBlock}
         * @param firewallVpcCidrBlock Property firewallVpcCidrBlock: The CIDR block of the VPC that is automatically created for the VPC firewall.
         *                             You must specify a CIDR block for the Cloud_Firewall_VPC VPC that is automatically created for the VPC firewall for traffic redirection. The subnet mask of the CIDR block must be less than or equal to 28 bits in length.If you do not specify a value, the CIDR block 10.0.0.0/8 is automatically allocated.
         * @return {@code this}
         */
        public Builder firewallVpcCidrBlock(java.lang.String firewallVpcCidrBlock) {
            this.firewallVpcCidrBlock = firewallVpcCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getFirewallVpcCidrBlock}
         * @param firewallVpcCidrBlock Property firewallVpcCidrBlock: The CIDR block of the VPC that is automatically created for the VPC firewall.
         *                             You must specify a CIDR block for the Cloud_Firewall_VPC VPC that is automatically created for the VPC firewall for traffic redirection. The subnet mask of the CIDR block must be less than or equal to 28 bits in length.If you do not specify a value, the CIDR block 10.0.0.0/8 is automatically allocated.
         * @return {@code this}
         */
        public Builder firewallVpcCidrBlock(com.aliyun.ros.cdk.core.IResolvable firewallVpcCidrBlock) {
            this.firewallVpcCidrBlock = firewallVpcCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getFirewallVSwitchCidrBlock}
         * @param firewallVSwitchCidrBlock Property firewallVSwitchCidrBlock: The CIDR block of the vSwitch that is automatically created for the VPC firewall.You must specify a CIDR block for the Cloud_Firewall_VSWITCH VPC that is automatically created for the VPC firewall for traffic redirection. The CIDR block does not conflict with your network plan. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block of the vSwitch must be within the network segment of the VPC.If you do not specify a value, the CIDR block 10.219.219.216/29 is automatically allocated.
         * @return {@code this}
         */
        public Builder firewallVSwitchCidrBlock(java.lang.String firewallVSwitchCidrBlock) {
            this.firewallVSwitchCidrBlock = firewallVSwitchCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getFirewallVSwitchCidrBlock}
         * @param firewallVSwitchCidrBlock Property firewallVSwitchCidrBlock: The CIDR block of the vSwitch that is automatically created for the VPC firewall.You must specify a CIDR block for the Cloud_Firewall_VSWITCH VPC that is automatically created for the VPC firewall for traffic redirection. The CIDR block does not conflict with your network plan. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block of the vSwitch must be within the network segment of the VPC.If you do not specify a value, the CIDR block 10.219.219.216/29 is automatically allocated.
         * @return {@code this}
         */
        public Builder firewallVSwitchCidrBlock(com.aliyun.ros.cdk.core.IResolvable firewallVSwitchCidrBlock) {
            this.firewallVSwitchCidrBlock = firewallVSwitchCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getMemberUid}
         * @param memberUid Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.
         * @return {@code this}
         */
        public Builder memberUid(java.lang.String memberUid) {
            this.memberUid = memberUid;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getMemberUid}
         * @param memberUid Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.
         * @return {@code this}
         */
        public Builder memberUid(com.aliyun.ros.cdk.core.IResolvable memberUid) {
            this.memberUid = memberUid;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallCenProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpcFirewallCenProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpcFirewallCenProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VpcFirewallCenProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcFirewallCenProps {
        private final java.lang.Object cenId;
        private final java.lang.Object firewallSwitch;
        private final java.lang.Object firewallVpcZoneId;
        private final java.lang.Object networkInstanceId;
        private final java.lang.Object vpcFirewallName;
        private final java.lang.Object vpcRegion;
        private final java.lang.Object firewallVpcCidrBlock;
        private final java.lang.Object firewallVSwitchCidrBlock;
        private final java.lang.Object memberUid;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.firewallSwitch = software.amazon.jsii.Kernel.get(this, "firewallSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.firewallVpcZoneId = software.amazon.jsii.Kernel.get(this, "firewallVpcZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkInstanceId = software.amazon.jsii.Kernel.get(this, "networkInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcFirewallName = software.amazon.jsii.Kernel.get(this, "vpcFirewallName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcRegion = software.amazon.jsii.Kernel.get(this, "vpcRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.firewallVpcCidrBlock = software.amazon.jsii.Kernel.get(this, "firewallVpcCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.firewallVSwitchCidrBlock = software.amazon.jsii.Kernel.get(this, "firewallVSwitchCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.memberUid = software.amazon.jsii.Kernel.get(this, "memberUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = java.util.Objects.requireNonNull(builder.cenId, "cenId is required");
            this.firewallSwitch = java.util.Objects.requireNonNull(builder.firewallSwitch, "firewallSwitch is required");
            this.firewallVpcZoneId = java.util.Objects.requireNonNull(builder.firewallVpcZoneId, "firewallVpcZoneId is required");
            this.networkInstanceId = java.util.Objects.requireNonNull(builder.networkInstanceId, "networkInstanceId is required");
            this.vpcFirewallName = java.util.Objects.requireNonNull(builder.vpcFirewallName, "vpcFirewallName is required");
            this.vpcRegion = java.util.Objects.requireNonNull(builder.vpcRegion, "vpcRegion is required");
            this.firewallVpcCidrBlock = builder.firewallVpcCidrBlock;
            this.firewallVSwitchCidrBlock = builder.firewallVSwitchCidrBlock;
            this.memberUid = builder.memberUid;
            this.vSwitchId = builder.vSwitchId;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getFirewallSwitch() {
            return this.firewallSwitch;
        }

        @Override
        public final java.lang.Object getFirewallVpcZoneId() {
            return this.firewallVpcZoneId;
        }

        @Override
        public final java.lang.Object getNetworkInstanceId() {
            return this.networkInstanceId;
        }

        @Override
        public final java.lang.Object getVpcFirewallName() {
            return this.vpcFirewallName;
        }

        @Override
        public final java.lang.Object getVpcRegion() {
            return this.vpcRegion;
        }

        @Override
        public final java.lang.Object getFirewallVpcCidrBlock() {
            return this.firewallVpcCidrBlock;
        }

        @Override
        public final java.lang.Object getFirewallVSwitchCidrBlock() {
            return this.firewallVSwitchCidrBlock;
        }

        @Override
        public final java.lang.Object getMemberUid() {
            return this.memberUid;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cenId", om.valueToTree(this.getCenId()));
            data.set("firewallSwitch", om.valueToTree(this.getFirewallSwitch()));
            data.set("firewallVpcZoneId", om.valueToTree(this.getFirewallVpcZoneId()));
            data.set("networkInstanceId", om.valueToTree(this.getNetworkInstanceId()));
            data.set("vpcFirewallName", om.valueToTree(this.getVpcFirewallName()));
            data.set("vpcRegion", om.valueToTree(this.getVpcRegion()));
            if (this.getFirewallVpcCidrBlock() != null) {
                data.set("firewallVpcCidrBlock", om.valueToTree(this.getFirewallVpcCidrBlock()));
            }
            if (this.getFirewallVSwitchCidrBlock() != null) {
                data.set("firewallVSwitchCidrBlock", om.valueToTree(this.getFirewallVSwitchCidrBlock()));
            }
            if (this.getMemberUid() != null) {
                data.set("memberUid", om.valueToTree(this.getMemberUid()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.VpcFirewallCenProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpcFirewallCenProps.Jsii$Proxy that = (VpcFirewallCenProps.Jsii$Proxy) o;

            if (!cenId.equals(that.cenId)) return false;
            if (!firewallSwitch.equals(that.firewallSwitch)) return false;
            if (!firewallVpcZoneId.equals(that.firewallVpcZoneId)) return false;
            if (!networkInstanceId.equals(that.networkInstanceId)) return false;
            if (!vpcFirewallName.equals(that.vpcFirewallName)) return false;
            if (!vpcRegion.equals(that.vpcRegion)) return false;
            if (this.firewallVpcCidrBlock != null ? !this.firewallVpcCidrBlock.equals(that.firewallVpcCidrBlock) : that.firewallVpcCidrBlock != null) return false;
            if (this.firewallVSwitchCidrBlock != null ? !this.firewallVSwitchCidrBlock.equals(that.firewallVSwitchCidrBlock) : that.firewallVSwitchCidrBlock != null) return false;
            if (this.memberUid != null ? !this.memberUid.equals(that.memberUid) : that.memberUid != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cenId.hashCode();
            result = 31 * result + (this.firewallSwitch.hashCode());
            result = 31 * result + (this.firewallVpcZoneId.hashCode());
            result = 31 * result + (this.networkInstanceId.hashCode());
            result = 31 * result + (this.vpcFirewallName.hashCode());
            result = 31 * result + (this.vpcRegion.hashCode());
            result = 31 * result + (this.firewallVpcCidrBlock != null ? this.firewallVpcCidrBlock.hashCode() : 0);
            result = 31 * result + (this.firewallVSwitchCidrBlock != null ? this.firewallVSwitchCidrBlock.hashCode() : 0);
            result = 31 * result + (this.memberUid != null ? this.memberUid.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
