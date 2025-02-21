package com.aliyun.ros.cdk.ecd;

/**
 * Properties for defining a <code>RosSimpleOfficeSite</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-simpleofficesite
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:14.926Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.RosSimpleOfficeSiteProps")
@software.amazon.jsii.Jsii.Proxy(RosSimpleOfficeSiteProps.Jsii$Proxy.class)
public interface RosSimpleOfficeSiteProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCenId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCenOwnerId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCidrBlock() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCloudBoxOfficeSite() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDesktopAccessType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAdminAccess() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableInternetAccess() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNeedVerifyZeroDevice() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOfficeSiteName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVerifyCode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSimpleOfficeSiteProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSimpleOfficeSiteProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSimpleOfficeSiteProps> {
        java.lang.Object bandwidth;
        java.lang.Object cenId;
        java.lang.Object cenOwnerId;
        java.lang.Object cidrBlock;
        java.lang.Object cloudBoxOfficeSite;
        java.lang.Object desktopAccessType;
        java.lang.Object enableAdminAccess;
        java.lang.Object enableInternetAccess;
        java.lang.Object needVerifyZeroDevice;
        java.lang.Object officeSiteName;
        java.lang.Object verifyCode;
        java.lang.Object vpcType;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getBandwidth}
         * @param bandwidth the value to be set.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getBandwidth}
         * @param bandwidth the value to be set.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getCenId}
         * @param cenId the value to be set.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getCenId}
         * @param cenId the value to be set.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getCenOwnerId}
         * @param cenOwnerId the value to be set.
         * @return {@code this}
         */
        public Builder cenOwnerId(java.lang.Number cenOwnerId) {
            this.cenOwnerId = cenOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getCenOwnerId}
         * @param cenOwnerId the value to be set.
         * @return {@code this}
         */
        public Builder cenOwnerId(com.aliyun.ros.cdk.core.IResolvable cenOwnerId) {
            this.cenOwnerId = cenOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getCidrBlock}
         * @param cidrBlock the value to be set.
         * @return {@code this}
         */
        public Builder cidrBlock(java.lang.String cidrBlock) {
            this.cidrBlock = cidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getCidrBlock}
         * @param cidrBlock the value to be set.
         * @return {@code this}
         */
        public Builder cidrBlock(com.aliyun.ros.cdk.core.IResolvable cidrBlock) {
            this.cidrBlock = cidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getCloudBoxOfficeSite}
         * @param cloudBoxOfficeSite the value to be set.
         * @return {@code this}
         */
        public Builder cloudBoxOfficeSite(java.lang.Boolean cloudBoxOfficeSite) {
            this.cloudBoxOfficeSite = cloudBoxOfficeSite;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getCloudBoxOfficeSite}
         * @param cloudBoxOfficeSite the value to be set.
         * @return {@code this}
         */
        public Builder cloudBoxOfficeSite(com.aliyun.ros.cdk.core.IResolvable cloudBoxOfficeSite) {
            this.cloudBoxOfficeSite = cloudBoxOfficeSite;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getDesktopAccessType}
         * @param desktopAccessType the value to be set.
         * @return {@code this}
         */
        public Builder desktopAccessType(java.lang.String desktopAccessType) {
            this.desktopAccessType = desktopAccessType;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getDesktopAccessType}
         * @param desktopAccessType the value to be set.
         * @return {@code this}
         */
        public Builder desktopAccessType(com.aliyun.ros.cdk.core.IResolvable desktopAccessType) {
            this.desktopAccessType = desktopAccessType;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getEnableAdminAccess}
         * @param enableAdminAccess the value to be set.
         * @return {@code this}
         */
        public Builder enableAdminAccess(java.lang.Boolean enableAdminAccess) {
            this.enableAdminAccess = enableAdminAccess;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getEnableAdminAccess}
         * @param enableAdminAccess the value to be set.
         * @return {@code this}
         */
        public Builder enableAdminAccess(com.aliyun.ros.cdk.core.IResolvable enableAdminAccess) {
            this.enableAdminAccess = enableAdminAccess;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getEnableInternetAccess}
         * @param enableInternetAccess the value to be set.
         * @return {@code this}
         */
        public Builder enableInternetAccess(java.lang.Boolean enableInternetAccess) {
            this.enableInternetAccess = enableInternetAccess;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getEnableInternetAccess}
         * @param enableInternetAccess the value to be set.
         * @return {@code this}
         */
        public Builder enableInternetAccess(com.aliyun.ros.cdk.core.IResolvable enableInternetAccess) {
            this.enableInternetAccess = enableInternetAccess;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getNeedVerifyZeroDevice}
         * @param needVerifyZeroDevice the value to be set.
         * @return {@code this}
         */
        public Builder needVerifyZeroDevice(java.lang.Boolean needVerifyZeroDevice) {
            this.needVerifyZeroDevice = needVerifyZeroDevice;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getNeedVerifyZeroDevice}
         * @param needVerifyZeroDevice the value to be set.
         * @return {@code this}
         */
        public Builder needVerifyZeroDevice(com.aliyun.ros.cdk.core.IResolvable needVerifyZeroDevice) {
            this.needVerifyZeroDevice = needVerifyZeroDevice;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getOfficeSiteName}
         * @param officeSiteName the value to be set.
         * @return {@code this}
         */
        public Builder officeSiteName(java.lang.String officeSiteName) {
            this.officeSiteName = officeSiteName;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getOfficeSiteName}
         * @param officeSiteName the value to be set.
         * @return {@code this}
         */
        public Builder officeSiteName(com.aliyun.ros.cdk.core.IResolvable officeSiteName) {
            this.officeSiteName = officeSiteName;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getVerifyCode}
         * @param verifyCode the value to be set.
         * @return {@code this}
         */
        public Builder verifyCode(java.lang.String verifyCode) {
            this.verifyCode = verifyCode;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getVerifyCode}
         * @param verifyCode the value to be set.
         * @return {@code this}
         */
        public Builder verifyCode(com.aliyun.ros.cdk.core.IResolvable verifyCode) {
            this.verifyCode = verifyCode;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getVpcType}
         * @param vpcType the value to be set.
         * @return {@code this}
         */
        public Builder vpcType(java.lang.String vpcType) {
            this.vpcType = vpcType;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getVpcType}
         * @param vpcType the value to be set.
         * @return {@code this}
         */
        public Builder vpcType(com.aliyun.ros.cdk.core.IResolvable vpcType) {
            this.vpcType = vpcType;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosSimpleOfficeSiteProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSimpleOfficeSiteProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSimpleOfficeSiteProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSimpleOfficeSiteProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSimpleOfficeSiteProps {
        private final java.lang.Object bandwidth;
        private final java.lang.Object cenId;
        private final java.lang.Object cenOwnerId;
        private final java.lang.Object cidrBlock;
        private final java.lang.Object cloudBoxOfficeSite;
        private final java.lang.Object desktopAccessType;
        private final java.lang.Object enableAdminAccess;
        private final java.lang.Object enableInternetAccess;
        private final java.lang.Object needVerifyZeroDevice;
        private final java.lang.Object officeSiteName;
        private final java.lang.Object verifyCode;
        private final java.lang.Object vpcType;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenOwnerId = software.amazon.jsii.Kernel.get(this, "cenOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cidrBlock = software.amazon.jsii.Kernel.get(this, "cidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cloudBoxOfficeSite = software.amazon.jsii.Kernel.get(this, "cloudBoxOfficeSite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.desktopAccessType = software.amazon.jsii.Kernel.get(this, "desktopAccessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAdminAccess = software.amazon.jsii.Kernel.get(this, "enableAdminAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableInternetAccess = software.amazon.jsii.Kernel.get(this, "enableInternetAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.needVerifyZeroDevice = software.amazon.jsii.Kernel.get(this, "needVerifyZeroDevice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.officeSiteName = software.amazon.jsii.Kernel.get(this, "officeSiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.verifyCode = software.amazon.jsii.Kernel.get(this, "verifyCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcType = software.amazon.jsii.Kernel.get(this, "vpcType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidth = builder.bandwidth;
            this.cenId = builder.cenId;
            this.cenOwnerId = builder.cenOwnerId;
            this.cidrBlock = builder.cidrBlock;
            this.cloudBoxOfficeSite = builder.cloudBoxOfficeSite;
            this.desktopAccessType = builder.desktopAccessType;
            this.enableAdminAccess = builder.enableAdminAccess;
            this.enableInternetAccess = builder.enableInternetAccess;
            this.needVerifyZeroDevice = builder.needVerifyZeroDevice;
            this.officeSiteName = builder.officeSiteName;
            this.verifyCode = builder.verifyCode;
            this.vpcType = builder.vpcType;
            this.vSwitchId = builder.vSwitchId;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getCenOwnerId() {
            return this.cenOwnerId;
        }

        @Override
        public final java.lang.Object getCidrBlock() {
            return this.cidrBlock;
        }

        @Override
        public final java.lang.Object getCloudBoxOfficeSite() {
            return this.cloudBoxOfficeSite;
        }

        @Override
        public final java.lang.Object getDesktopAccessType() {
            return this.desktopAccessType;
        }

        @Override
        public final java.lang.Object getEnableAdminAccess() {
            return this.enableAdminAccess;
        }

        @Override
        public final java.lang.Object getEnableInternetAccess() {
            return this.enableInternetAccess;
        }

        @Override
        public final java.lang.Object getNeedVerifyZeroDevice() {
            return this.needVerifyZeroDevice;
        }

        @Override
        public final java.lang.Object getOfficeSiteName() {
            return this.officeSiteName;
        }

        @Override
        public final java.lang.Object getVerifyCode() {
            return this.verifyCode;
        }

        @Override
        public final java.lang.Object getVpcType() {
            return this.vpcType;
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

            if (this.getBandwidth() != null) {
                data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            }
            if (this.getCenId() != null) {
                data.set("cenId", om.valueToTree(this.getCenId()));
            }
            if (this.getCenOwnerId() != null) {
                data.set("cenOwnerId", om.valueToTree(this.getCenOwnerId()));
            }
            if (this.getCidrBlock() != null) {
                data.set("cidrBlock", om.valueToTree(this.getCidrBlock()));
            }
            if (this.getCloudBoxOfficeSite() != null) {
                data.set("cloudBoxOfficeSite", om.valueToTree(this.getCloudBoxOfficeSite()));
            }
            if (this.getDesktopAccessType() != null) {
                data.set("desktopAccessType", om.valueToTree(this.getDesktopAccessType()));
            }
            if (this.getEnableAdminAccess() != null) {
                data.set("enableAdminAccess", om.valueToTree(this.getEnableAdminAccess()));
            }
            if (this.getEnableInternetAccess() != null) {
                data.set("enableInternetAccess", om.valueToTree(this.getEnableInternetAccess()));
            }
            if (this.getNeedVerifyZeroDevice() != null) {
                data.set("needVerifyZeroDevice", om.valueToTree(this.getNeedVerifyZeroDevice()));
            }
            if (this.getOfficeSiteName() != null) {
                data.set("officeSiteName", om.valueToTree(this.getOfficeSiteName()));
            }
            if (this.getVerifyCode() != null) {
                data.set("verifyCode", om.valueToTree(this.getVerifyCode()));
            }
            if (this.getVpcType() != null) {
                data.set("vpcType", om.valueToTree(this.getVpcType()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecd.RosSimpleOfficeSiteProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSimpleOfficeSiteProps.Jsii$Proxy that = (RosSimpleOfficeSiteProps.Jsii$Proxy) o;

            if (this.bandwidth != null ? !this.bandwidth.equals(that.bandwidth) : that.bandwidth != null) return false;
            if (this.cenId != null ? !this.cenId.equals(that.cenId) : that.cenId != null) return false;
            if (this.cenOwnerId != null ? !this.cenOwnerId.equals(that.cenOwnerId) : that.cenOwnerId != null) return false;
            if (this.cidrBlock != null ? !this.cidrBlock.equals(that.cidrBlock) : that.cidrBlock != null) return false;
            if (this.cloudBoxOfficeSite != null ? !this.cloudBoxOfficeSite.equals(that.cloudBoxOfficeSite) : that.cloudBoxOfficeSite != null) return false;
            if (this.desktopAccessType != null ? !this.desktopAccessType.equals(that.desktopAccessType) : that.desktopAccessType != null) return false;
            if (this.enableAdminAccess != null ? !this.enableAdminAccess.equals(that.enableAdminAccess) : that.enableAdminAccess != null) return false;
            if (this.enableInternetAccess != null ? !this.enableInternetAccess.equals(that.enableInternetAccess) : that.enableInternetAccess != null) return false;
            if (this.needVerifyZeroDevice != null ? !this.needVerifyZeroDevice.equals(that.needVerifyZeroDevice) : that.needVerifyZeroDevice != null) return false;
            if (this.officeSiteName != null ? !this.officeSiteName.equals(that.officeSiteName) : that.officeSiteName != null) return false;
            if (this.verifyCode != null ? !this.verifyCode.equals(that.verifyCode) : that.verifyCode != null) return false;
            if (this.vpcType != null ? !this.vpcType.equals(that.vpcType) : that.vpcType != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bandwidth != null ? this.bandwidth.hashCode() : 0;
            result = 31 * result + (this.cenId != null ? this.cenId.hashCode() : 0);
            result = 31 * result + (this.cenOwnerId != null ? this.cenOwnerId.hashCode() : 0);
            result = 31 * result + (this.cidrBlock != null ? this.cidrBlock.hashCode() : 0);
            result = 31 * result + (this.cloudBoxOfficeSite != null ? this.cloudBoxOfficeSite.hashCode() : 0);
            result = 31 * result + (this.desktopAccessType != null ? this.desktopAccessType.hashCode() : 0);
            result = 31 * result + (this.enableAdminAccess != null ? this.enableAdminAccess.hashCode() : 0);
            result = 31 * result + (this.enableInternetAccess != null ? this.enableInternetAccess.hashCode() : 0);
            result = 31 * result + (this.needVerifyZeroDevice != null ? this.needVerifyZeroDevice.hashCode() : 0);
            result = 31 * result + (this.officeSiteName != null ? this.officeSiteName.hashCode() : 0);
            result = 31 * result + (this.verifyCode != null ? this.verifyCode.hashCode() : 0);
            result = 31 * result + (this.vpcType != null ? this.vpcType.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
