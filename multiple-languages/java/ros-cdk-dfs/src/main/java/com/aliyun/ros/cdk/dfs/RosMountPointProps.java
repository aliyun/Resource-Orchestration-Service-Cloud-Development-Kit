package com.aliyun.ros.cdk.dfs;

/**
 * Properties for defining a <code>RosMountPoint</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-mountpoint
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.520Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dfs.$Module.class, fqn = "@alicloud/ros-cdk-dfs.RosMountPointProps")
@software.amazon.jsii.Jsii.Proxy(RosMountPointProps.Jsii$Proxy.class)
public interface RosMountPointProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFileSystemId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosMountPointProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosMountPointProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosMountPointProps> {
        java.lang.Object accessGroupId;
        java.lang.Object fileSystemId;
        java.lang.Object networkType;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object description;
        java.lang.Object status;

        /**
         * Sets the value of {@link RosMountPointProps#getAccessGroupId}
         * @param accessGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessGroupId(java.lang.String accessGroupId) {
            this.accessGroupId = accessGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosMountPointProps#getAccessGroupId}
         * @param accessGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessGroupId(com.aliyun.ros.cdk.core.IResolvable accessGroupId) {
            this.accessGroupId = accessGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosMountPointProps#getFileSystemId}
         * @param fileSystemId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemId(java.lang.String fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link RosMountPointProps#getFileSystemId}
         * @param fileSystemId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemId(com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link RosMountPointProps#getNetworkType}
         * @param networkType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosMountPointProps#getNetworkType}
         * @param networkType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosMountPointProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosMountPointProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosMountPointProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosMountPointProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosMountPointProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosMountPointProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosMountPointProps#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosMountPointProps#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosMountPointProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosMountPointProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosMountPointProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosMountPointProps {
        private final java.lang.Object accessGroupId;
        private final java.lang.Object fileSystemId;
        private final java.lang.Object networkType;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object description;
        private final java.lang.Object status;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessGroupId = software.amazon.jsii.Kernel.get(this, "accessGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fileSystemId = software.amazon.jsii.Kernel.get(this, "fileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessGroupId = java.util.Objects.requireNonNull(builder.accessGroupId, "accessGroupId is required");
            this.fileSystemId = java.util.Objects.requireNonNull(builder.fileSystemId, "fileSystemId is required");
            this.networkType = java.util.Objects.requireNonNull(builder.networkType, "networkType is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.description = builder.description;
            this.status = builder.status;
        }

        @Override
        public final java.lang.Object getAccessGroupId() {
            return this.accessGroupId;
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
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accessGroupId", om.valueToTree(this.getAccessGroupId()));
            data.set("fileSystemId", om.valueToTree(this.getFileSystemId()));
            data.set("networkType", om.valueToTree(this.getNetworkType()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dfs.RosMountPointProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosMountPointProps.Jsii$Proxy that = (RosMountPointProps.Jsii$Proxy) o;

            if (!accessGroupId.equals(that.accessGroupId)) return false;
            if (!fileSystemId.equals(that.fileSystemId)) return false;
            if (!networkType.equals(that.networkType)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.status != null ? this.status.equals(that.status) : that.status == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessGroupId.hashCode();
            result = 31 * result + (this.fileSystemId.hashCode());
            result = 31 * result + (this.networkType.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            return result;
        }
    }
}
