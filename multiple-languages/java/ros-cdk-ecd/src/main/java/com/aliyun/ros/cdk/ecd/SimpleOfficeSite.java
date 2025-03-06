package com.aliyun.ros.cdk.ecd;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECD::SimpleOfficeSite</code>, which is used to create a workspace of the convenience account type.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:04.414Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.SimpleOfficeSite")
public class SimpleOfficeSite extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecd.ISimpleOfficeSite {

    protected SimpleOfficeSite(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SimpleOfficeSite(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public SimpleOfficeSite(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecd.SimpleOfficeSiteProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public SimpleOfficeSite(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecd.SimpleOfficeSiteProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public SimpleOfficeSite(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute OfficeSiteId: The ID of the workspace.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOfficeSiteId() {
        return software.amazon.jsii.Kernel.get(this, "attrOfficeSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.SimpleOfficeSiteProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecd.SimpleOfficeSiteProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecd.SimpleOfficeSite}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecd.SimpleOfficeSite> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private com.aliyun.ros.cdk.ecd.SimpleOfficeSiteProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property bandwidth: The maximum public bandwidth.
         * <p>
         * Value range: 10 to 200. Unit: Mbit/s. This parameter is available if you set EnableInternetAccess to true.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The maximum public bandwidth. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props().bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: The maximum public bandwidth.
         * <p>
         * Value range: 10 to 200. Unit: Mbit/s. This parameter is available if you set EnableInternetAccess to true.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The maximum public bandwidth. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props().bandwidth(bandwidth);
            return this;
        }

        /**
         * Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
         * <p>
         * NoteIf you want to connect to your cloud desktops over a VPC, you can attach the network of the workspace to the CEN instance. The CEN instance is connected to the on-premises network over VPN Gateway or Express Connect.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the Cloud Enterprise Network (CEN) instance. This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props().cenId(cenId);
            return this;
        }
        /**
         * Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
         * <p>
         * NoteIf you want to connect to your cloud desktops over a VPC, you can attach the network of the workspace to the CEN instance. The CEN instance is connected to the on-premises network over VPN Gateway or Express Connect.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the Cloud Enterprise Network (CEN) instance. This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props().cenId(cenId);
            return this;
        }

        /**
         * Property cenOwnerId: The ID of the Alibaba Cloud account to which the Cloud Enterprise Network (CEN) instance belongs.
         * <p>
         * If you do not specify the CenId parameter, or the CEN instance that is specified by the CenId parameter belongs to the current Alibaba Cloud account, skip this parameter.
         * If you specify the CenId parameter and the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, enter the ID of the Alibaba Cloud account.
         * <p>
         * @return {@code this}
         * @param cenOwnerId Property cenOwnerId: The ID of the Alibaba Cloud account to which the Cloud Enterprise Network (CEN) instance belongs. This parameter is required.
         */
        public Builder cenOwnerId(final java.lang.Number cenOwnerId) {
            this.props().cenOwnerId(cenOwnerId);
            return this;
        }
        /**
         * Property cenOwnerId: The ID of the Alibaba Cloud account to which the Cloud Enterprise Network (CEN) instance belongs.
         * <p>
         * If you do not specify the CenId parameter, or the CEN instance that is specified by the CenId parameter belongs to the current Alibaba Cloud account, skip this parameter.
         * If you specify the CenId parameter and the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, enter the ID of the Alibaba Cloud account.
         * <p>
         * @return {@code this}
         * @param cenOwnerId Property cenOwnerId: The ID of the Alibaba Cloud account to which the Cloud Enterprise Network (CEN) instance belongs. This parameter is required.
         */
        public Builder cenOwnerId(final com.aliyun.ros.cdk.core.IResolvable cenOwnerId) {
            this.props().cenOwnerId(cenOwnerId);
            return this;
        }

        /**
         * Property cidrBlock: The IPv4 CIDR block in the secure office network of the workspace.
         * <p>
         * The IPv4 CIDR block that the system uses to create a virtual private cloud (VPC) for the workspace. We recommend that you set the IPv4 CIDR block to 10.0.0.0/12, 172.16.0.0/12, 192.168.0.0/16, or a subnet of these CIDR blocks. If you set the IPv4 CIDR block to 10.0.0.0/12 or 172.16.0.0/12, the mask is 1224 bits in length. If you set the IPv4 CIDR block to 192.168.0.0/16, the mask is 1624 bits in length.
         * <p>
         * @return {@code this}
         * @param cidrBlock Property cidrBlock: The IPv4 CIDR block in the secure office network of the workspace. This parameter is required.
         */
        public Builder cidrBlock(final java.lang.String cidrBlock) {
            this.props().cidrBlock(cidrBlock);
            return this;
        }
        /**
         * Property cidrBlock: The IPv4 CIDR block in the secure office network of the workspace.
         * <p>
         * The IPv4 CIDR block that the system uses to create a virtual private cloud (VPC) for the workspace. We recommend that you set the IPv4 CIDR block to 10.0.0.0/12, 172.16.0.0/12, 192.168.0.0/16, or a subnet of these CIDR blocks. If you set the IPv4 CIDR block to 10.0.0.0/12 or 172.16.0.0/12, the mask is 1224 bits in length. If you set the IPv4 CIDR block to 192.168.0.0/16, the mask is 1624 bits in length.
         * <p>
         * @return {@code this}
         * @param cidrBlock Property cidrBlock: The IPv4 CIDR block in the secure office network of the workspace. This parameter is required.
         */
        public Builder cidrBlock(final com.aliyun.ros.cdk.core.IResolvable cidrBlock) {
            this.props().cidrBlock(cidrBlock);
            return this;
        }

        /**
         * Property cloudBoxOfficeSite: Specifies whether the workspace is a CloudBox-based workspace.
         * <p>
         * Enumeration Value:
         * true
         * false
         * <p>
         * @return {@code this}
         * @param cloudBoxOfficeSite Property cloudBoxOfficeSite: Specifies whether the workspace is a CloudBox-based workspace. This parameter is required.
         */
        public Builder cloudBoxOfficeSite(final java.lang.Boolean cloudBoxOfficeSite) {
            this.props().cloudBoxOfficeSite(cloudBoxOfficeSite);
            return this;
        }
        /**
         * Property cloudBoxOfficeSite: Specifies whether the workspace is a CloudBox-based workspace.
         * <p>
         * Enumeration Value:
         * true
         * false
         * <p>
         * @return {@code this}
         * @param cloudBoxOfficeSite Property cloudBoxOfficeSite: Specifies whether the workspace is a CloudBox-based workspace. This parameter is required.
         */
        public Builder cloudBoxOfficeSite(final com.aliyun.ros.cdk.core.IResolvable cloudBoxOfficeSite) {
            this.props().cloudBoxOfficeSite(cloudBoxOfficeSite);
            return this;
        }

        /**
         * Property desktopAccessType: The method that is used to connect the client to cloud desktops.
         * <p>
         * NoteVPC connections are established by using Alibaba Cloud PrivateLink. You can use PrivateLink for free. When you set this parameter to VPC or Any, PrivateLink is automatically activated.
         * <p>
         * @return {@code this}
         * @param desktopAccessType Property desktopAccessType: The method that is used to connect the client to cloud desktops. This parameter is required.
         */
        public Builder desktopAccessType(final java.lang.String desktopAccessType) {
            this.props().desktopAccessType(desktopAccessType);
            return this;
        }
        /**
         * Property desktopAccessType: The method that is used to connect the client to cloud desktops.
         * <p>
         * NoteVPC connections are established by using Alibaba Cloud PrivateLink. You can use PrivateLink for free. When you set this parameter to VPC or Any, PrivateLink is automatically activated.
         * <p>
         * @return {@code this}
         * @param desktopAccessType Property desktopAccessType: The method that is used to connect the client to cloud desktops. This parameter is required.
         */
        public Builder desktopAccessType(final com.aliyun.ros.cdk.core.IResolvable desktopAccessType) {
            this.props().desktopAccessType(desktopAccessType);
            return this;
        }

        /**
         * Property enableAdminAccess: Specifies whether to grant the permissions of the local administrator to the regular user of the cloud desktop.
         * <p>
         * Enumeration Value:
         * true
         * false
         * <p>
         * @return {@code this}
         * @param enableAdminAccess Property enableAdminAccess: Specifies whether to grant the permissions of the local administrator to the regular user of the cloud desktop. This parameter is required.
         */
        public Builder enableAdminAccess(final java.lang.Boolean enableAdminAccess) {
            this.props().enableAdminAccess(enableAdminAccess);
            return this;
        }
        /**
         * Property enableAdminAccess: Specifies whether to grant the permissions of the local administrator to the regular user of the cloud desktop.
         * <p>
         * Enumeration Value:
         * true
         * false
         * <p>
         * @return {@code this}
         * @param enableAdminAccess Property enableAdminAccess: Specifies whether to grant the permissions of the local administrator to the regular user of the cloud desktop. This parameter is required.
         */
        public Builder enableAdminAccess(final com.aliyun.ros.cdk.core.IResolvable enableAdminAccess) {
            this.props().enableAdminAccess(enableAdminAccess);
            return this;
        }

        /**
         * Property enableInternetAccess: Specifies whether to enable Internet access.
         * <p>
         * By default, Internet access is not enabled.
         * Enumeration Value:
         * true
         * false
         * <p>
         * @return {@code this}
         * @param enableInternetAccess Property enableInternetAccess: Specifies whether to enable Internet access. This parameter is required.
         */
        public Builder enableInternetAccess(final java.lang.Boolean enableInternetAccess) {
            this.props().enableInternetAccess(enableInternetAccess);
            return this;
        }
        /**
         * Property enableInternetAccess: Specifies whether to enable Internet access.
         * <p>
         * By default, Internet access is not enabled.
         * Enumeration Value:
         * true
         * false
         * <p>
         * @return {@code this}
         * @param enableInternetAccess Property enableInternetAccess: Specifies whether to enable Internet access. This parameter is required.
         */
        public Builder enableInternetAccess(final com.aliyun.ros.cdk.core.IResolvable enableInternetAccess) {
            this.props().enableInternetAccess(enableInternetAccess);
            return this;
        }

        /**
         * Property needVerifyZeroDevice: Specifies whether to enable trusted device verification.
         * <p>
         * Enumeration Value:
         * true
         * false
         * <p>
         * @return {@code this}
         * @param needVerifyZeroDevice Property needVerifyZeroDevice: Specifies whether to enable trusted device verification. This parameter is required.
         */
        public Builder needVerifyZeroDevice(final java.lang.Boolean needVerifyZeroDevice) {
            this.props().needVerifyZeroDevice(needVerifyZeroDevice);
            return this;
        }
        /**
         * Property needVerifyZeroDevice: Specifies whether to enable trusted device verification.
         * <p>
         * Enumeration Value:
         * true
         * false
         * <p>
         * @return {@code this}
         * @param needVerifyZeroDevice Property needVerifyZeroDevice: Specifies whether to enable trusted device verification. This parameter is required.
         */
        public Builder needVerifyZeroDevice(final com.aliyun.ros.cdk.core.IResolvable needVerifyZeroDevice) {
            this.props().needVerifyZeroDevice(needVerifyZeroDevice);
            return this;
        }

        /**
         * Property officeSiteName: The name of the workspace.
         * <p>
         * The name must be 2 to 255 characters in length. It must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param officeSiteName Property officeSiteName: The name of the workspace. This parameter is required.
         */
        public Builder officeSiteName(final java.lang.String officeSiteName) {
            this.props().officeSiteName(officeSiteName);
            return this;
        }
        /**
         * Property officeSiteName: The name of the workspace.
         * <p>
         * The name must be 2 to 255 characters in length. It must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param officeSiteName Property officeSiteName: The name of the workspace. This parameter is required.
         */
        public Builder officeSiteName(final com.aliyun.ros.cdk.core.IResolvable officeSiteName) {
            this.props().officeSiteName(officeSiteName);
            return this;
        }

        /**
         * Property verifyCode: The verification code.
         * <p>
         * If the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, you must call the SendVerifyCode operation to obtain the verification code.
         * <p>
         * @return {@code this}
         * @param verifyCode Property verifyCode: The verification code. This parameter is required.
         */
        public Builder verifyCode(final java.lang.String verifyCode) {
            this.props().verifyCode(verifyCode);
            return this;
        }
        /**
         * Property verifyCode: The verification code.
         * <p>
         * If the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, you must call the SendVerifyCode operation to obtain the verification code.
         * <p>
         * @return {@code this}
         * @param verifyCode Property verifyCode: The verification code. This parameter is required.
         */
        public Builder verifyCode(final com.aliyun.ros.cdk.core.IResolvable verifyCode) {
            this.props().verifyCode(verifyCode);
            return this;
        }

        /**
         * Property vpcType: The type of office network.
         * <p>
         * Enumeration value:
         * standard: Advanced office network.
         * basic: Basic office network.
         * <p>
         * @return {@code this}
         * @param vpcType Property vpcType: The type of office network. This parameter is required.
         */
        public Builder vpcType(final java.lang.String vpcType) {
            this.props().vpcType(vpcType);
            return this;
        }
        /**
         * Property vpcType: The type of office network.
         * <p>
         * Enumeration value:
         * standard: Advanced office network.
         * basic: Basic office network.
         * <p>
         * @return {@code this}
         * @param vpcType Property vpcType: The type of office network. This parameter is required.
         */
        public Builder vpcType(final com.aliyun.ros.cdk.core.IResolvable vpcType) {
            this.props().vpcType(vpcType);
            return this;
        }

        /**
         * Property vSwitchId: The IDs of the vSwitches in the VPC.
         * <p>
         * This parameter is required when you create a CloudBox-based workspace.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The IDs of the vSwitches in the VPC. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The IDs of the vSwitches in the VPC.
         * <p>
         * This parameter is required when you create a CloudBox-based workspace.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The IDs of the vSwitches in the VPC. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecd.SimpleOfficeSite}.
         */
        @Override
        public com.aliyun.ros.cdk.ecd.SimpleOfficeSite build() {
            return new com.aliyun.ros.cdk.ecd.SimpleOfficeSite(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecd.SimpleOfficeSiteProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecd.SimpleOfficeSiteProps.Builder();
            }
            return this.props;
        }
    }
}
