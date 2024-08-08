package com.aliyun.ros.cdk.nas;

/**
 * Properties for defining a <code>MountTarget</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-mounttarget
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:12.130Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.MountTargetProps")
@software.amazon.jsii.Jsii.Proxy(MountTargetProps.Jsii$Proxy.class)
public interface MountTargetProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accessGroupName: Permission group name.
     * <p>
     * Default to DEFAULT_VPC_GROUP_NAME.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessGroupName();

    /**
     * Property fileSystemId: File system ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFileSystemId();

    /**
     * Property networkType: Network type, including Vpc and Classic networks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkType();

    /**
     * Property enableIpv6: Whether to create an IPv6 mount point.Value: true: create false (default): do not create Note Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableIpv6() {
        return null;
    }

    /**
     * Property securityGroupId: Security group Id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property status: Status, including Active and Inactive.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * Property vpcId: VPC network ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: VSwitch ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link MountTargetProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MountTargetProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MountTargetProps> {
        java.lang.Object accessGroupName;
        java.lang.Object fileSystemId;
        java.lang.Object networkType;
        java.lang.Object enableIpv6;
        java.lang.Object securityGroupId;
        java.lang.Object status;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link MountTargetProps#getAccessGroupName}
         * @param accessGroupName Property accessGroupName: Permission group name. This parameter is required.
         *                        Default to DEFAULT_VPC_GROUP_NAME.
         * @return {@code this}
         */
        public Builder accessGroupName(java.lang.String accessGroupName) {
            this.accessGroupName = accessGroupName;
            return this;
        }

        /**
         * Sets the value of {@link MountTargetProps#getAccessGroupName}
         * @param accessGroupName Property accessGroupName: Permission group name. This parameter is required.
         *                        Default to DEFAULT_VPC_GROUP_NAME.
         * @return {@code this}
         */
        public Builder accessGroupName(com.aliyun.ros.cdk.core.IResolvable accessGroupName) {
            this.accessGroupName = accessGroupName;
            return this;
        }

        /**
         * Sets the value of {@link MountTargetProps#getFileSystemId}
         * @param fileSystemId Property fileSystemId: File system ID. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemId(java.lang.String fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link MountTargetProps#getFileSystemId}
         * @param fileSystemId Property fileSystemId: File system ID. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemId(com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link MountTargetProps#getNetworkType}
         * @param networkType Property networkType: Network type, including Vpc and Classic networks. This parameter is required.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link MountTargetProps#getNetworkType}
         * @param networkType Property networkType: Network type, including Vpc and Classic networks. This parameter is required.
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link MountTargetProps#getEnableIpv6}
         * @param enableIpv6 Property enableIpv6: Whether to create an IPv6 mount point.Value: true: create false (default): do not create Note Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
         * @return {@code this}
         */
        public Builder enableIpv6(java.lang.Boolean enableIpv6) {
            this.enableIpv6 = enableIpv6;
            return this;
        }

        /**
         * Sets the value of {@link MountTargetProps#getEnableIpv6}
         * @param enableIpv6 Property enableIpv6: Whether to create an IPv6 mount point.Value: true: create false (default): do not create Note Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
         * @return {@code this}
         */
        public Builder enableIpv6(com.aliyun.ros.cdk.core.IResolvable enableIpv6) {
            this.enableIpv6 = enableIpv6;
            return this;
        }

        /**
         * Sets the value of {@link MountTargetProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group Id.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link MountTargetProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group Id.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link MountTargetProps#getStatus}
         * @param status Property status: Status, including Active and Inactive.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link MountTargetProps#getStatus}
         * @param status Property status: Status, including Active and Inactive.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link MountTargetProps#getVpcId}
         * @param vpcId Property vpcId: VPC network ID.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link MountTargetProps#getVpcId}
         * @param vpcId Property vpcId: VPC network ID.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link MountTargetProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VSwitch ID.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link MountTargetProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VSwitch ID.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MountTargetProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MountTargetProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link MountTargetProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MountTargetProps {
        private final java.lang.Object accessGroupName;
        private final java.lang.Object fileSystemId;
        private final java.lang.Object networkType;
        private final java.lang.Object enableIpv6;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object status;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessGroupName = software.amazon.jsii.Kernel.get(this, "accessGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fileSystemId = software.amazon.jsii.Kernel.get(this, "fileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableIpv6 = software.amazon.jsii.Kernel.get(this, "enableIpv6", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessGroupName = java.util.Objects.requireNonNull(builder.accessGroupName, "accessGroupName is required");
            this.fileSystemId = java.util.Objects.requireNonNull(builder.fileSystemId, "fileSystemId is required");
            this.networkType = java.util.Objects.requireNonNull(builder.networkType, "networkType is required");
            this.enableIpv6 = builder.enableIpv6;
            this.securityGroupId = builder.securityGroupId;
            this.status = builder.status;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
        }

        @Override
        public final java.lang.Object getAccessGroupName() {
            return this.accessGroupName;
        }

        @Override
        public final java.lang.Object getFileSystemId() {
            return this.fileSystemId;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Object getEnableIpv6() {
            return this.enableIpv6;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
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

            data.set("accessGroupName", om.valueToTree(this.getAccessGroupName()));
            data.set("fileSystemId", om.valueToTree(this.getFileSystemId()));
            data.set("networkType", om.valueToTree(this.getNetworkType()));
            if (this.getEnableIpv6() != null) {
                data.set("enableIpv6", om.valueToTree(this.getEnableIpv6()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.MountTargetProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MountTargetProps.Jsii$Proxy that = (MountTargetProps.Jsii$Proxy) o;

            if (!accessGroupName.equals(that.accessGroupName)) return false;
            if (!fileSystemId.equals(that.fileSystemId)) return false;
            if (!networkType.equals(that.networkType)) return false;
            if (this.enableIpv6 != null ? !this.enableIpv6.equals(that.enableIpv6) : that.enableIpv6 != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.status != null ? !this.status.equals(that.status) : that.status != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessGroupName.hashCode();
            result = 31 * result + (this.fileSystemId.hashCode());
            result = 31 * result + (this.networkType.hashCode());
            result = 31 * result + (this.enableIpv6 != null ? this.enableIpv6.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
