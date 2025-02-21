package com.aliyun.ros.cdk.cloudfw;

/**
 * Properties for defining a <code>RosTrFirewall</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewall
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:12.859Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosTrFirewallProps")
@software.amazon.jsii.Jsii.Proxy(RosTrFirewallProps.Jsii$Proxy.class)
public interface RosTrFirewallProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFirewallName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRegionNo();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouteMode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFirewallDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFirewallSubnetCidr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFirewallVpcCidr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFirewallVpcId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFirewallVswitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTrAttachmentMasterCidr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTrAttachmentMasterZone() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTrAttachmentSlaveCidr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTrAttachmentSlaveZone() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTrFirewallProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTrFirewallProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTrFirewallProps> {
        java.lang.Object cenId;
        java.lang.Object firewallName;
        java.lang.Object regionNo;
        java.lang.Object routeMode;
        java.lang.Object transitRouterId;
        java.lang.Object firewallDescription;
        java.lang.Object firewallSubnetCidr;
        java.lang.Object firewallVpcCidr;
        java.lang.Object firewallVpcId;
        java.lang.Object firewallVswitchId;
        java.lang.Object trAttachmentMasterCidr;
        java.lang.Object trAttachmentMasterZone;
        java.lang.Object trAttachmentSlaveCidr;
        java.lang.Object trAttachmentSlaveZone;

        /**
         * Sets the value of {@link RosTrFirewallProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getFirewallName}
         * @param firewallName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder firewallName(java.lang.String firewallName) {
            this.firewallName = firewallName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getFirewallName}
         * @param firewallName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder firewallName(com.aliyun.ros.cdk.core.IResolvable firewallName) {
            this.firewallName = firewallName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getRegionNo}
         * @param regionNo the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder regionNo(java.lang.String regionNo) {
            this.regionNo = regionNo;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getRegionNo}
         * @param regionNo the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder regionNo(com.aliyun.ros.cdk.core.IResolvable regionNo) {
            this.regionNo = regionNo;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getRouteMode}
         * @param routeMode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeMode(java.lang.String routeMode) {
            this.routeMode = routeMode;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getRouteMode}
         * @param routeMode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeMode(com.aliyun.ros.cdk.core.IResolvable routeMode) {
            this.routeMode = routeMode;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getTransitRouterId}
         * @param transitRouterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterId(java.lang.String transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getTransitRouterId}
         * @param transitRouterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterId(com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getFirewallDescription}
         * @param firewallDescription the value to be set.
         * @return {@code this}
         */
        public Builder firewallDescription(java.lang.String firewallDescription) {
            this.firewallDescription = firewallDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getFirewallDescription}
         * @param firewallDescription the value to be set.
         * @return {@code this}
         */
        public Builder firewallDescription(com.aliyun.ros.cdk.core.IResolvable firewallDescription) {
            this.firewallDescription = firewallDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getFirewallSubnetCidr}
         * @param firewallSubnetCidr the value to be set.
         * @return {@code this}
         */
        public Builder firewallSubnetCidr(java.lang.String firewallSubnetCidr) {
            this.firewallSubnetCidr = firewallSubnetCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getFirewallSubnetCidr}
         * @param firewallSubnetCidr the value to be set.
         * @return {@code this}
         */
        public Builder firewallSubnetCidr(com.aliyun.ros.cdk.core.IResolvable firewallSubnetCidr) {
            this.firewallSubnetCidr = firewallSubnetCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getFirewallVpcCidr}
         * @param firewallVpcCidr the value to be set.
         * @return {@code this}
         */
        public Builder firewallVpcCidr(java.lang.String firewallVpcCidr) {
            this.firewallVpcCidr = firewallVpcCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getFirewallVpcCidr}
         * @param firewallVpcCidr the value to be set.
         * @return {@code this}
         */
        public Builder firewallVpcCidr(com.aliyun.ros.cdk.core.IResolvable firewallVpcCidr) {
            this.firewallVpcCidr = firewallVpcCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getFirewallVpcId}
         * @param firewallVpcId the value to be set.
         * @return {@code this}
         */
        public Builder firewallVpcId(java.lang.String firewallVpcId) {
            this.firewallVpcId = firewallVpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getFirewallVpcId}
         * @param firewallVpcId the value to be set.
         * @return {@code this}
         */
        public Builder firewallVpcId(com.aliyun.ros.cdk.core.IResolvable firewallVpcId) {
            this.firewallVpcId = firewallVpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getFirewallVswitchId}
         * @param firewallVswitchId the value to be set.
         * @return {@code this}
         */
        public Builder firewallVswitchId(java.lang.String firewallVswitchId) {
            this.firewallVswitchId = firewallVswitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getFirewallVswitchId}
         * @param firewallVswitchId the value to be set.
         * @return {@code this}
         */
        public Builder firewallVswitchId(com.aliyun.ros.cdk.core.IResolvable firewallVswitchId) {
            this.firewallVswitchId = firewallVswitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getTrAttachmentMasterCidr}
         * @param trAttachmentMasterCidr the value to be set.
         * @return {@code this}
         */
        public Builder trAttachmentMasterCidr(java.lang.String trAttachmentMasterCidr) {
            this.trAttachmentMasterCidr = trAttachmentMasterCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getTrAttachmentMasterCidr}
         * @param trAttachmentMasterCidr the value to be set.
         * @return {@code this}
         */
        public Builder trAttachmentMasterCidr(com.aliyun.ros.cdk.core.IResolvable trAttachmentMasterCidr) {
            this.trAttachmentMasterCidr = trAttachmentMasterCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getTrAttachmentMasterZone}
         * @param trAttachmentMasterZone the value to be set.
         * @return {@code this}
         */
        public Builder trAttachmentMasterZone(java.lang.String trAttachmentMasterZone) {
            this.trAttachmentMasterZone = trAttachmentMasterZone;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getTrAttachmentMasterZone}
         * @param trAttachmentMasterZone the value to be set.
         * @return {@code this}
         */
        public Builder trAttachmentMasterZone(com.aliyun.ros.cdk.core.IResolvable trAttachmentMasterZone) {
            this.trAttachmentMasterZone = trAttachmentMasterZone;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getTrAttachmentSlaveCidr}
         * @param trAttachmentSlaveCidr the value to be set.
         * @return {@code this}
         */
        public Builder trAttachmentSlaveCidr(java.lang.String trAttachmentSlaveCidr) {
            this.trAttachmentSlaveCidr = trAttachmentSlaveCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getTrAttachmentSlaveCidr}
         * @param trAttachmentSlaveCidr the value to be set.
         * @return {@code this}
         */
        public Builder trAttachmentSlaveCidr(com.aliyun.ros.cdk.core.IResolvable trAttachmentSlaveCidr) {
            this.trAttachmentSlaveCidr = trAttachmentSlaveCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getTrAttachmentSlaveZone}
         * @param trAttachmentSlaveZone the value to be set.
         * @return {@code this}
         */
        public Builder trAttachmentSlaveZone(java.lang.String trAttachmentSlaveZone) {
            this.trAttachmentSlaveZone = trAttachmentSlaveZone;
            return this;
        }

        /**
         * Sets the value of {@link RosTrFirewallProps#getTrAttachmentSlaveZone}
         * @param trAttachmentSlaveZone the value to be set.
         * @return {@code this}
         */
        public Builder trAttachmentSlaveZone(com.aliyun.ros.cdk.core.IResolvable trAttachmentSlaveZone) {
            this.trAttachmentSlaveZone = trAttachmentSlaveZone;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTrFirewallProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTrFirewallProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTrFirewallProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTrFirewallProps {
        private final java.lang.Object cenId;
        private final java.lang.Object firewallName;
        private final java.lang.Object regionNo;
        private final java.lang.Object routeMode;
        private final java.lang.Object transitRouterId;
        private final java.lang.Object firewallDescription;
        private final java.lang.Object firewallSubnetCidr;
        private final java.lang.Object firewallVpcCidr;
        private final java.lang.Object firewallVpcId;
        private final java.lang.Object firewallVswitchId;
        private final java.lang.Object trAttachmentMasterCidr;
        private final java.lang.Object trAttachmentMasterZone;
        private final java.lang.Object trAttachmentSlaveCidr;
        private final java.lang.Object trAttachmentSlaveZone;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.firewallName = software.amazon.jsii.Kernel.get(this, "firewallName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.regionNo = software.amazon.jsii.Kernel.get(this, "regionNo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeMode = software.amazon.jsii.Kernel.get(this, "routeMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterId = software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.firewallDescription = software.amazon.jsii.Kernel.get(this, "firewallDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.firewallSubnetCidr = software.amazon.jsii.Kernel.get(this, "firewallSubnetCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.firewallVpcCidr = software.amazon.jsii.Kernel.get(this, "firewallVpcCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.firewallVpcId = software.amazon.jsii.Kernel.get(this, "firewallVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.firewallVswitchId = software.amazon.jsii.Kernel.get(this, "firewallVswitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trAttachmentMasterCidr = software.amazon.jsii.Kernel.get(this, "trAttachmentMasterCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trAttachmentMasterZone = software.amazon.jsii.Kernel.get(this, "trAttachmentMasterZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trAttachmentSlaveCidr = software.amazon.jsii.Kernel.get(this, "trAttachmentSlaveCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trAttachmentSlaveZone = software.amazon.jsii.Kernel.get(this, "trAttachmentSlaveZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = java.util.Objects.requireNonNull(builder.cenId, "cenId is required");
            this.firewallName = java.util.Objects.requireNonNull(builder.firewallName, "firewallName is required");
            this.regionNo = java.util.Objects.requireNonNull(builder.regionNo, "regionNo is required");
            this.routeMode = java.util.Objects.requireNonNull(builder.routeMode, "routeMode is required");
            this.transitRouterId = java.util.Objects.requireNonNull(builder.transitRouterId, "transitRouterId is required");
            this.firewallDescription = builder.firewallDescription;
            this.firewallSubnetCidr = builder.firewallSubnetCidr;
            this.firewallVpcCidr = builder.firewallVpcCidr;
            this.firewallVpcId = builder.firewallVpcId;
            this.firewallVswitchId = builder.firewallVswitchId;
            this.trAttachmentMasterCidr = builder.trAttachmentMasterCidr;
            this.trAttachmentMasterZone = builder.trAttachmentMasterZone;
            this.trAttachmentSlaveCidr = builder.trAttachmentSlaveCidr;
            this.trAttachmentSlaveZone = builder.trAttachmentSlaveZone;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getFirewallName() {
            return this.firewallName;
        }

        @Override
        public final java.lang.Object getRegionNo() {
            return this.regionNo;
        }

        @Override
        public final java.lang.Object getRouteMode() {
            return this.routeMode;
        }

        @Override
        public final java.lang.Object getTransitRouterId() {
            return this.transitRouterId;
        }

        @Override
        public final java.lang.Object getFirewallDescription() {
            return this.firewallDescription;
        }

        @Override
        public final java.lang.Object getFirewallSubnetCidr() {
            return this.firewallSubnetCidr;
        }

        @Override
        public final java.lang.Object getFirewallVpcCidr() {
            return this.firewallVpcCidr;
        }

        @Override
        public final java.lang.Object getFirewallVpcId() {
            return this.firewallVpcId;
        }

        @Override
        public final java.lang.Object getFirewallVswitchId() {
            return this.firewallVswitchId;
        }

        @Override
        public final java.lang.Object getTrAttachmentMasterCidr() {
            return this.trAttachmentMasterCidr;
        }

        @Override
        public final java.lang.Object getTrAttachmentMasterZone() {
            return this.trAttachmentMasterZone;
        }

        @Override
        public final java.lang.Object getTrAttachmentSlaveCidr() {
            return this.trAttachmentSlaveCidr;
        }

        @Override
        public final java.lang.Object getTrAttachmentSlaveZone() {
            return this.trAttachmentSlaveZone;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cenId", om.valueToTree(this.getCenId()));
            data.set("firewallName", om.valueToTree(this.getFirewallName()));
            data.set("regionNo", om.valueToTree(this.getRegionNo()));
            data.set("routeMode", om.valueToTree(this.getRouteMode()));
            data.set("transitRouterId", om.valueToTree(this.getTransitRouterId()));
            if (this.getFirewallDescription() != null) {
                data.set("firewallDescription", om.valueToTree(this.getFirewallDescription()));
            }
            if (this.getFirewallSubnetCidr() != null) {
                data.set("firewallSubnetCidr", om.valueToTree(this.getFirewallSubnetCidr()));
            }
            if (this.getFirewallVpcCidr() != null) {
                data.set("firewallVpcCidr", om.valueToTree(this.getFirewallVpcCidr()));
            }
            if (this.getFirewallVpcId() != null) {
                data.set("firewallVpcId", om.valueToTree(this.getFirewallVpcId()));
            }
            if (this.getFirewallVswitchId() != null) {
                data.set("firewallVswitchId", om.valueToTree(this.getFirewallVswitchId()));
            }
            if (this.getTrAttachmentMasterCidr() != null) {
                data.set("trAttachmentMasterCidr", om.valueToTree(this.getTrAttachmentMasterCidr()));
            }
            if (this.getTrAttachmentMasterZone() != null) {
                data.set("trAttachmentMasterZone", om.valueToTree(this.getTrAttachmentMasterZone()));
            }
            if (this.getTrAttachmentSlaveCidr() != null) {
                data.set("trAttachmentSlaveCidr", om.valueToTree(this.getTrAttachmentSlaveCidr()));
            }
            if (this.getTrAttachmentSlaveZone() != null) {
                data.set("trAttachmentSlaveZone", om.valueToTree(this.getTrAttachmentSlaveZone()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.RosTrFirewallProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTrFirewallProps.Jsii$Proxy that = (RosTrFirewallProps.Jsii$Proxy) o;

            if (!cenId.equals(that.cenId)) return false;
            if (!firewallName.equals(that.firewallName)) return false;
            if (!regionNo.equals(that.regionNo)) return false;
            if (!routeMode.equals(that.routeMode)) return false;
            if (!transitRouterId.equals(that.transitRouterId)) return false;
            if (this.firewallDescription != null ? !this.firewallDescription.equals(that.firewallDescription) : that.firewallDescription != null) return false;
            if (this.firewallSubnetCidr != null ? !this.firewallSubnetCidr.equals(that.firewallSubnetCidr) : that.firewallSubnetCidr != null) return false;
            if (this.firewallVpcCidr != null ? !this.firewallVpcCidr.equals(that.firewallVpcCidr) : that.firewallVpcCidr != null) return false;
            if (this.firewallVpcId != null ? !this.firewallVpcId.equals(that.firewallVpcId) : that.firewallVpcId != null) return false;
            if (this.firewallVswitchId != null ? !this.firewallVswitchId.equals(that.firewallVswitchId) : that.firewallVswitchId != null) return false;
            if (this.trAttachmentMasterCidr != null ? !this.trAttachmentMasterCidr.equals(that.trAttachmentMasterCidr) : that.trAttachmentMasterCidr != null) return false;
            if (this.trAttachmentMasterZone != null ? !this.trAttachmentMasterZone.equals(that.trAttachmentMasterZone) : that.trAttachmentMasterZone != null) return false;
            if (this.trAttachmentSlaveCidr != null ? !this.trAttachmentSlaveCidr.equals(that.trAttachmentSlaveCidr) : that.trAttachmentSlaveCidr != null) return false;
            return this.trAttachmentSlaveZone != null ? this.trAttachmentSlaveZone.equals(that.trAttachmentSlaveZone) : that.trAttachmentSlaveZone == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cenId.hashCode();
            result = 31 * result + (this.firewallName.hashCode());
            result = 31 * result + (this.regionNo.hashCode());
            result = 31 * result + (this.routeMode.hashCode());
            result = 31 * result + (this.transitRouterId.hashCode());
            result = 31 * result + (this.firewallDescription != null ? this.firewallDescription.hashCode() : 0);
            result = 31 * result + (this.firewallSubnetCidr != null ? this.firewallSubnetCidr.hashCode() : 0);
            result = 31 * result + (this.firewallVpcCidr != null ? this.firewallVpcCidr.hashCode() : 0);
            result = 31 * result + (this.firewallVpcId != null ? this.firewallVpcId.hashCode() : 0);
            result = 31 * result + (this.firewallVswitchId != null ? this.firewallVswitchId.hashCode() : 0);
            result = 31 * result + (this.trAttachmentMasterCidr != null ? this.trAttachmentMasterCidr.hashCode() : 0);
            result = 31 * result + (this.trAttachmentMasterZone != null ? this.trAttachmentMasterZone.hashCode() : 0);
            result = 31 * result + (this.trAttachmentSlaveCidr != null ? this.trAttachmentSlaveCidr.hashCode() : 0);
            result = 31 * result + (this.trAttachmentSlaveZone != null ? this.trAttachmentSlaveZone.hashCode() : 0);
            return result;
        }
    }
}
