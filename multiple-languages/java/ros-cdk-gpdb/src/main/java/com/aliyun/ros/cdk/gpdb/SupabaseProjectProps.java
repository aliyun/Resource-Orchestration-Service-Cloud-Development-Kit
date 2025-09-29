package com.aliyun.ros.cdk.gpdb;

/**
 * Properties for defining a <code>SupabaseProject</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-supabaseproject
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.266Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.SupabaseProjectProps")
@software.amazon.jsii.Jsii.Proxy(SupabaseProjectProps.Jsii$Proxy.class)
public interface SupabaseProjectProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accountPassword: The password for the initial account.
     * <p>
     * It consists of three or more types of capital letters, lowercase letters, numbers, and special characters.
     * Supported special characters: !&#64;#$%^&amp;*()_+-=
     * The length is 8~32 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountPassword();

    /**
     * Property projectName: Project name.The naming rules are as follows: The length is 1~128 characters. Only English letters, numbers, dash (-) and underscore (<em>). Must start with English letters or underscores (</em>).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

    /**
     * Property projectSpec: Supabase instance specification, default is 1C1G.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectSpec();

    /**
     * Property securityIpList: IP whitelist.
     * <p>
     * 127.0.0.1 means that any external IP access is prohibited. You can call the ModifySecurityIps interface to modify the IP whitelist after the instance is created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityIpList();

    /**
     * Property vpcId: VPC ID.
     * <p>
     * illustrate
     * You can call the DescribeRdsVpcs interface to view the available VPC IDs.
     * This parameter must be passed in.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property vSwitchId: vSwitch ID.
     * <p>
     * illustrate
     * vSwitchId is required.
     * The Availability Zone where the vSwitch is located must be consistent with the ZoneId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property zoneId: Availability Zone ID.
     * <p>
     * Description You can call the DescribeRegions interface to view the available Availability Zone ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property diskPerformanceLevel: Cloud disk PL level, default PL0.
     * <p>
     * Selectable value:
     * PL0
     * PL1
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskPerformanceLevel() {
        return null;
    }

    /**
     * Property storageSize: Storage space size, unit GB, default 1GB.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageSize() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SupabaseProjectProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SupabaseProjectProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SupabaseProjectProps> {
        java.lang.Object accountPassword;
        java.lang.Object projectName;
        java.lang.Object projectSpec;
        java.lang.Object securityIpList;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;
        java.lang.Object diskPerformanceLevel;
        java.lang.Object storageSize;

        /**
         * Sets the value of {@link SupabaseProjectProps#getAccountPassword}
         * @param accountPassword Property accountPassword: The password for the initial account. This parameter is required.
         *                        It consists of three or more types of capital letters, lowercase letters, numbers, and special characters.
         *                        Supported special characters: !&#64;#$%^&amp;*()_+-=
         *                        The length is 8~32 characters.
         * @return {@code this}
         */
        public Builder accountPassword(java.lang.String accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link SupabaseProjectProps#getAccountPassword}
         * @param accountPassword Property accountPassword: The password for the initial account. This parameter is required.
         *                        It consists of three or more types of capital letters, lowercase letters, numbers, and special characters.
         *                        Supported special characters: !&#64;#$%^&amp;*()_+-=
         *                        The length is 8~32 characters.
         * @return {@code this}
         */
        public Builder accountPassword(com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link SupabaseProjectProps#getProjectName}
         * @param projectName Property projectName: Project name.The naming rules are as follows: The length is 1~128 characters. Only English letters, numbers, dash (-) and underscore (<em>). Must start with English letters or underscores (</em>). This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link SupabaseProjectProps#getProjectName}
         * @param projectName Property projectName: Project name.The naming rules are as follows: The length is 1~128 characters. Only English letters, numbers, dash (-) and underscore (<em>). Must start with English letters or underscores (</em>). This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link SupabaseProjectProps#getProjectSpec}
         * @param projectSpec Property projectSpec: Supabase instance specification, default is 1C1G. This parameter is required.
         * @return {@code this}
         */
        public Builder projectSpec(java.lang.String projectSpec) {
            this.projectSpec = projectSpec;
            return this;
        }

        /**
         * Sets the value of {@link SupabaseProjectProps#getProjectSpec}
         * @param projectSpec Property projectSpec: Supabase instance specification, default is 1C1G. This parameter is required.
         * @return {@code this}
         */
        public Builder projectSpec(com.aliyun.ros.cdk.core.IResolvable projectSpec) {
            this.projectSpec = projectSpec;
            return this;
        }

        /**
         * Sets the value of {@link SupabaseProjectProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: IP whitelist. This parameter is required.
         *                       127.0.0.1 means that any external IP access is prohibited. You can call the ModifySecurityIps interface to modify the IP whitelist after the instance is created.
         * @return {@code this}
         */
        public Builder securityIpList(java.lang.String securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link SupabaseProjectProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: IP whitelist. This parameter is required.
         *                       127.0.0.1 means that any external IP access is prohibited. You can call the ModifySecurityIps interface to modify the IP whitelist after the instance is created.
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link SupabaseProjectProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         *              illustrate
         *              You can call the DescribeRdsVpcs interface to view the available VPC IDs.
         *              This parameter must be passed in.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link SupabaseProjectProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         *              illustrate
         *              You can call the DescribeRdsVpcs interface to view the available VPC IDs.
         *              This parameter must be passed in.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link SupabaseProjectProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: vSwitch ID. This parameter is required.
         *                  illustrate
         *                  vSwitchId is required.
         *                  The Availability Zone where the vSwitch is located must be consistent with the ZoneId.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link SupabaseProjectProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: vSwitch ID. This parameter is required.
         *                  illustrate
         *                  vSwitchId is required.
         *                  The Availability Zone where the vSwitch is located must be consistent with the ZoneId.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link SupabaseProjectProps#getZoneId}
         * @param zoneId Property zoneId: Availability Zone ID. This parameter is required.
         *               Description You can call the DescribeRegions interface to view the available Availability Zone ID.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link SupabaseProjectProps#getZoneId}
         * @param zoneId Property zoneId: Availability Zone ID. This parameter is required.
         *               Description You can call the DescribeRegions interface to view the available Availability Zone ID.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link SupabaseProjectProps#getDiskPerformanceLevel}
         * @param diskPerformanceLevel Property diskPerformanceLevel: Cloud disk PL level, default PL0.
         *                             Selectable value:
         *                             PL0
         *                             PL1
         * @return {@code this}
         */
        public Builder diskPerformanceLevel(java.lang.String diskPerformanceLevel) {
            this.diskPerformanceLevel = diskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link SupabaseProjectProps#getDiskPerformanceLevel}
         * @param diskPerformanceLevel Property diskPerformanceLevel: Cloud disk PL level, default PL0.
         *                             Selectable value:
         *                             PL0
         *                             PL1
         * @return {@code this}
         */
        public Builder diskPerformanceLevel(com.aliyun.ros.cdk.core.IResolvable diskPerformanceLevel) {
            this.diskPerformanceLevel = diskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link SupabaseProjectProps#getStorageSize}
         * @param storageSize Property storageSize: Storage space size, unit GB, default 1GB.
         * @return {@code this}
         */
        public Builder storageSize(java.lang.Number storageSize) {
            this.storageSize = storageSize;
            return this;
        }

        /**
         * Sets the value of {@link SupabaseProjectProps#getStorageSize}
         * @param storageSize Property storageSize: Storage space size, unit GB, default 1GB.
         * @return {@code this}
         */
        public Builder storageSize(com.aliyun.ros.cdk.core.IResolvable storageSize) {
            this.storageSize = storageSize;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SupabaseProjectProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SupabaseProjectProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SupabaseProjectProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SupabaseProjectProps {
        private final java.lang.Object accountPassword;
        private final java.lang.Object projectName;
        private final java.lang.Object projectSpec;
        private final java.lang.Object securityIpList;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;
        private final java.lang.Object diskPerformanceLevel;
        private final java.lang.Object storageSize;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountPassword = software.amazon.jsii.Kernel.get(this, "accountPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectSpec = software.amazon.jsii.Kernel.get(this, "projectSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskPerformanceLevel = software.amazon.jsii.Kernel.get(this, "diskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageSize = software.amazon.jsii.Kernel.get(this, "storageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountPassword = java.util.Objects.requireNonNull(builder.accountPassword, "accountPassword is required");
            this.projectName = java.util.Objects.requireNonNull(builder.projectName, "projectName is required");
            this.projectSpec = java.util.Objects.requireNonNull(builder.projectSpec, "projectSpec is required");
            this.securityIpList = java.util.Objects.requireNonNull(builder.securityIpList, "securityIpList is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.diskPerformanceLevel = builder.diskPerformanceLevel;
            this.storageSize = builder.storageSize;
        }

        @Override
        public final java.lang.Object getAccountPassword() {
            return this.accountPassword;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.Object getProjectSpec() {
            return this.projectSpec;
        }

        @Override
        public final java.lang.Object getSecurityIpList() {
            return this.securityIpList;
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
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getDiskPerformanceLevel() {
            return this.diskPerformanceLevel;
        }

        @Override
        public final java.lang.Object getStorageSize() {
            return this.storageSize;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accountPassword", om.valueToTree(this.getAccountPassword()));
            data.set("projectName", om.valueToTree(this.getProjectName()));
            data.set("projectSpec", om.valueToTree(this.getProjectSpec()));
            data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getDiskPerformanceLevel() != null) {
                data.set("diskPerformanceLevel", om.valueToTree(this.getDiskPerformanceLevel()));
            }
            if (this.getStorageSize() != null) {
                data.set("storageSize", om.valueToTree(this.getStorageSize()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-gpdb.SupabaseProjectProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SupabaseProjectProps.Jsii$Proxy that = (SupabaseProjectProps.Jsii$Proxy) o;

            if (!accountPassword.equals(that.accountPassword)) return false;
            if (!projectName.equals(that.projectName)) return false;
            if (!projectSpec.equals(that.projectSpec)) return false;
            if (!securityIpList.equals(that.securityIpList)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.diskPerformanceLevel != null ? !this.diskPerformanceLevel.equals(that.diskPerformanceLevel) : that.diskPerformanceLevel != null) return false;
            return this.storageSize != null ? this.storageSize.equals(that.storageSize) : that.storageSize == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accountPassword.hashCode();
            result = 31 * result + (this.projectName.hashCode());
            result = 31 * result + (this.projectSpec.hashCode());
            result = 31 * result + (this.securityIpList.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.diskPerformanceLevel != null ? this.diskPerformanceLevel.hashCode() : 0);
            result = 31 * result + (this.storageSize != null ? this.storageSize.hashCode() : 0);
            return result;
        }
    }
}
