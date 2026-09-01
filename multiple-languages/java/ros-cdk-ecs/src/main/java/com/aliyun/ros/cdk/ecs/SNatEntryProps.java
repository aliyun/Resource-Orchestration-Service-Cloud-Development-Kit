package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>SNatEntry</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snatentry
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T08:37:38.635Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SNatEntryProps")
@software.amazon.jsii.Jsii.Proxy(SNatEntryProps.Jsii$Proxy.class)
public interface SNatEntryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property sNatIp: Source IP, must belongs to bandwidth package internet IP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSNatIp();

    /**
     * Property sNatTableId: Create SNAT entry in specified SNAT table.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSNatTableId();

    /**
     * Property snatEntryName: The name of the SNAT entry.
     * <p>
     * The name must be 2 to 128 characters in length. It must start with a letter but
     * cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnatEntryName() {
        return null;
    }

    /**
     * Property sourceCidr: You can specify the CIDR block of a VPC, a vSwitch, or an ECS instance or enter a custom CIDR block.
     * <p>
     * You can specify an SNAT entry in the following ways:
     * <p>
     * <ul>
     * <li>You can specify the CIDR block of the VPC where the NAT gateway is deployed.
     * Then, all ECS instances in the VPC can access the Internet or external networks
     * by using SNAT.</li>
     * <li>You can specify the CIDR block of a vSwitch, for example, 192.168.1.0/24.
     * Then, the ECS instances in the vSwitch can access the Internet or external
     * networks by using SNAT.</li>
     * <li>You can specify the IP address of an ECS instance, for example,
     * 192.168.1.1/32. Then, the ECS instance can access the Internet or external
     * networks by using SNAT.</li>
     * <li>You can specify a custom CIDR block. Then, all ECS instances within the
     * specified CIDR block can access the Internet or external networks by using SNAT.
     * When you add an SNAT entry to an Internet NAT gateway, if SnatIp is set to an
     * EIP, the ECS instance uses the specified EIP to access the Internet.
     * If SnatIp is set to multiple EIPs, the ECS instance randomly selects an EIP
     * specified in the SnatIp parameter to access the Internet.
     * You cannot specify this parameter and SourceVSwtichId at the same time. If
     * SourceVSwitchId is specified, you cannot specify SourceCIDR. If SourceCIDR is
     * specified, you cannot specify SourceVSwitchId.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceCidr() {
        return null;
    }

    /**
     * Property sourceVSwitchId: The ID of the vSwitch.
     * <p>
     * <ul>
     * <li>When you add an SNAT entry to an Internet NAT gateway, this parameter
     * specifies that ECS instances in the vSwitch can use the SNAT entry to access the
     * Internet. If you select multiple elastic IP addresses (EIPs) to create an SNAT
     * address pool, connections are hashed to these EIPs. Network traffic may not be
     * evenly distributed to the EIPs because the amount of traffic that passes through
     * each connection varies. We recommend that you associate these EIPs with the same
     * EIP bandwidth plan to prevent service interruptions due to the bandwidth limits
     * on individual EIPs.</li>
     * <li>When you add an SNAT entry to a VPC NAT gateway, this parameter specifies
     * that ECS instances in the vSwitch can use the SNAT entry to access external
     * networks.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SNatEntryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SNatEntryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SNatEntryProps> {
        java.lang.Object sNatIp;
        java.lang.Object sNatTableId;
        java.lang.Object snatEntryName;
        java.lang.Object sourceCidr;
        java.lang.Object sourceVSwitchId;

        /**
         * Sets the value of {@link SNatEntryProps#getSNatIp}
         * @param sNatIp Property sNatIp: Source IP, must belongs to bandwidth package internet IP. This parameter is required.
         * @return {@code this}
         */
        public Builder sNatIp(java.lang.String sNatIp) {
            this.sNatIp = sNatIp;
            return this;
        }

        /**
         * Sets the value of {@link SNatEntryProps#getSNatIp}
         * @param sNatIp Property sNatIp: Source IP, must belongs to bandwidth package internet IP. This parameter is required.
         * @return {@code this}
         */
        public Builder sNatIp(com.aliyun.ros.cdk.core.IResolvable sNatIp) {
            this.sNatIp = sNatIp;
            return this;
        }

        /**
         * Sets the value of {@link SNatEntryProps#getSNatTableId}
         * @param sNatTableId Property sNatTableId: Create SNAT entry in specified SNAT table. This parameter is required.
         * @return {@code this}
         */
        public Builder sNatTableId(java.lang.String sNatTableId) {
            this.sNatTableId = sNatTableId;
            return this;
        }

        /**
         * Sets the value of {@link SNatEntryProps#getSNatTableId}
         * @param sNatTableId Property sNatTableId: Create SNAT entry in specified SNAT table. This parameter is required.
         * @return {@code this}
         */
        public Builder sNatTableId(com.aliyun.ros.cdk.core.IResolvable sNatTableId) {
            this.sNatTableId = sNatTableId;
            return this;
        }

        /**
         * Sets the value of {@link SNatEntryProps#getSnatEntryName}
         * @param snatEntryName Property snatEntryName: The name of the SNAT entry.
         *                      The name must be 2 to 128 characters in length. It must start with a letter but
         *                      cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
         * @return {@code this}
         */
        public Builder snatEntryName(java.lang.String snatEntryName) {
            this.snatEntryName = snatEntryName;
            return this;
        }

        /**
         * Sets the value of {@link SNatEntryProps#getSnatEntryName}
         * @param snatEntryName Property snatEntryName: The name of the SNAT entry.
         *                      The name must be 2 to 128 characters in length. It must start with a letter but
         *                      cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
         * @return {@code this}
         */
        public Builder snatEntryName(com.aliyun.ros.cdk.core.IResolvable snatEntryName) {
            this.snatEntryName = snatEntryName;
            return this;
        }

        /**
         * Sets the value of {@link SNatEntryProps#getSourceCidr}
         * @param sourceCidr Property sourceCidr: You can specify the CIDR block of a VPC, a vSwitch, or an ECS instance or enter a custom CIDR block.
         *                   You can specify an SNAT entry in the following ways:
         *                   <p>
         *                   <ul>
         *                   <li>You can specify the CIDR block of the VPC where the NAT gateway is deployed.
         *                   Then, all ECS instances in the VPC can access the Internet or external networks
         *                   by using SNAT.</li>
         *                   <li>You can specify the CIDR block of a vSwitch, for example, 192.168.1.0/24.
         *                   Then, the ECS instances in the vSwitch can access the Internet or external
         *                   networks by using SNAT.</li>
         *                   <li>You can specify the IP address of an ECS instance, for example,
         *                   192.168.1.1/32. Then, the ECS instance can access the Internet or external
         *                   networks by using SNAT.</li>
         *                   <li>You can specify a custom CIDR block. Then, all ECS instances within the
         *                   specified CIDR block can access the Internet or external networks by using SNAT.
         *                   When you add an SNAT entry to an Internet NAT gateway, if SnatIp is set to an
         *                   EIP, the ECS instance uses the specified EIP to access the Internet.
         *                   If SnatIp is set to multiple EIPs, the ECS instance randomly selects an EIP
         *                   specified in the SnatIp parameter to access the Internet.
         *                   You cannot specify this parameter and SourceVSwtichId at the same time. If
         *                   SourceVSwitchId is specified, you cannot specify SourceCIDR. If SourceCIDR is
         *                   specified, you cannot specify SourceVSwitchId.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder sourceCidr(java.lang.String sourceCidr) {
            this.sourceCidr = sourceCidr;
            return this;
        }

        /**
         * Sets the value of {@link SNatEntryProps#getSourceCidr}
         * @param sourceCidr Property sourceCidr: You can specify the CIDR block of a VPC, a vSwitch, or an ECS instance or enter a custom CIDR block.
         *                   You can specify an SNAT entry in the following ways:
         *                   <p>
         *                   <ul>
         *                   <li>You can specify the CIDR block of the VPC where the NAT gateway is deployed.
         *                   Then, all ECS instances in the VPC can access the Internet or external networks
         *                   by using SNAT.</li>
         *                   <li>You can specify the CIDR block of a vSwitch, for example, 192.168.1.0/24.
         *                   Then, the ECS instances in the vSwitch can access the Internet or external
         *                   networks by using SNAT.</li>
         *                   <li>You can specify the IP address of an ECS instance, for example,
         *                   192.168.1.1/32. Then, the ECS instance can access the Internet or external
         *                   networks by using SNAT.</li>
         *                   <li>You can specify a custom CIDR block. Then, all ECS instances within the
         *                   specified CIDR block can access the Internet or external networks by using SNAT.
         *                   When you add an SNAT entry to an Internet NAT gateway, if SnatIp is set to an
         *                   EIP, the ECS instance uses the specified EIP to access the Internet.
         *                   If SnatIp is set to multiple EIPs, the ECS instance randomly selects an EIP
         *                   specified in the SnatIp parameter to access the Internet.
         *                   You cannot specify this parameter and SourceVSwtichId at the same time. If
         *                   SourceVSwitchId is specified, you cannot specify SourceCIDR. If SourceCIDR is
         *                   specified, you cannot specify SourceVSwitchId.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder sourceCidr(com.aliyun.ros.cdk.core.IResolvable sourceCidr) {
            this.sourceCidr = sourceCidr;
            return this;
        }

        /**
         * Sets the value of {@link SNatEntryProps#getSourceVSwitchId}
         * @param sourceVSwitchId Property sourceVSwitchId: The ID of the vSwitch.
         *                        <ul>
         *                        <li>When you add an SNAT entry to an Internet NAT gateway, this parameter
         *                        specifies that ECS instances in the vSwitch can use the SNAT entry to access the
         *                        Internet. If you select multiple elastic IP addresses (EIPs) to create an SNAT
         *                        address pool, connections are hashed to these EIPs. Network traffic may not be
         *                        evenly distributed to the EIPs because the amount of traffic that passes through
         *                        each connection varies. We recommend that you associate these EIPs with the same
         *                        EIP bandwidth plan to prevent service interruptions due to the bandwidth limits
         *                        on individual EIPs.</li>
         *                        <li>When you add an SNAT entry to a VPC NAT gateway, this parameter specifies
         *                        that ECS instances in the vSwitch can use the SNAT entry to access external
         *                        networks.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder sourceVSwitchId(java.lang.String sourceVSwitchId) {
            this.sourceVSwitchId = sourceVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link SNatEntryProps#getSourceVSwitchId}
         * @param sourceVSwitchId Property sourceVSwitchId: The ID of the vSwitch.
         *                        <ul>
         *                        <li>When you add an SNAT entry to an Internet NAT gateway, this parameter
         *                        specifies that ECS instances in the vSwitch can use the SNAT entry to access the
         *                        Internet. If you select multiple elastic IP addresses (EIPs) to create an SNAT
         *                        address pool, connections are hashed to these EIPs. Network traffic may not be
         *                        evenly distributed to the EIPs because the amount of traffic that passes through
         *                        each connection varies. We recommend that you associate these EIPs with the same
         *                        EIP bandwidth plan to prevent service interruptions due to the bandwidth limits
         *                        on individual EIPs.</li>
         *                        <li>When you add an SNAT entry to a VPC NAT gateway, this parameter specifies
         *                        that ECS instances in the vSwitch can use the SNAT entry to access external
         *                        networks.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder sourceVSwitchId(com.aliyun.ros.cdk.core.IResolvable sourceVSwitchId) {
            this.sourceVSwitchId = sourceVSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SNatEntryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SNatEntryProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SNatEntryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SNatEntryProps {
        private final java.lang.Object sNatIp;
        private final java.lang.Object sNatTableId;
        private final java.lang.Object snatEntryName;
        private final java.lang.Object sourceCidr;
        private final java.lang.Object sourceVSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.sNatIp = software.amazon.jsii.Kernel.get(this, "sNatIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sNatTableId = software.amazon.jsii.Kernel.get(this, "sNatTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snatEntryName = software.amazon.jsii.Kernel.get(this, "snatEntryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceCidr = software.amazon.jsii.Kernel.get(this, "sourceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceVSwitchId = software.amazon.jsii.Kernel.get(this, "sourceVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.sNatIp = java.util.Objects.requireNonNull(builder.sNatIp, "sNatIp is required");
            this.sNatTableId = java.util.Objects.requireNonNull(builder.sNatTableId, "sNatTableId is required");
            this.snatEntryName = builder.snatEntryName;
            this.sourceCidr = builder.sourceCidr;
            this.sourceVSwitchId = builder.sourceVSwitchId;
        }

        @Override
        public final java.lang.Object getSNatIp() {
            return this.sNatIp;
        }

        @Override
        public final java.lang.Object getSNatTableId() {
            return this.sNatTableId;
        }

        @Override
        public final java.lang.Object getSnatEntryName() {
            return this.snatEntryName;
        }

        @Override
        public final java.lang.Object getSourceCidr() {
            return this.sourceCidr;
        }

        @Override
        public final java.lang.Object getSourceVSwitchId() {
            return this.sourceVSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("sNatIp", om.valueToTree(this.getSNatIp()));
            data.set("sNatTableId", om.valueToTree(this.getSNatTableId()));
            if (this.getSnatEntryName() != null) {
                data.set("snatEntryName", om.valueToTree(this.getSnatEntryName()));
            }
            if (this.getSourceCidr() != null) {
                data.set("sourceCidr", om.valueToTree(this.getSourceCidr()));
            }
            if (this.getSourceVSwitchId() != null) {
                data.set("sourceVSwitchId", om.valueToTree(this.getSourceVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.SNatEntryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SNatEntryProps.Jsii$Proxy that = (SNatEntryProps.Jsii$Proxy) o;

            if (!sNatIp.equals(that.sNatIp)) return false;
            if (!sNatTableId.equals(that.sNatTableId)) return false;
            if (this.snatEntryName != null ? !this.snatEntryName.equals(that.snatEntryName) : that.snatEntryName != null) return false;
            if (this.sourceCidr != null ? !this.sourceCidr.equals(that.sourceCidr) : that.sourceCidr != null) return false;
            return this.sourceVSwitchId != null ? this.sourceVSwitchId.equals(that.sourceVSwitchId) : that.sourceVSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.sNatIp.hashCode();
            result = 31 * result + (this.sNatTableId.hashCode());
            result = 31 * result + (this.snatEntryName != null ? this.snatEntryName.hashCode() : 0);
            result = 31 * result + (this.sourceCidr != null ? this.sourceCidr.hashCode() : 0);
            result = 31 * result + (this.sourceVSwitchId != null ? this.sourceVSwitchId.hashCode() : 0);
            return result;
        }
    }
}
