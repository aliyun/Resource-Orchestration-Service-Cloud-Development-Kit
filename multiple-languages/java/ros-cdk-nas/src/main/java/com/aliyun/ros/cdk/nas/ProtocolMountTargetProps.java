package com.aliyun.ros.cdk.nas;

/**
 * Properties for defining a <code>ALIYUN::NAS::ProtocolMountTarget</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:27.006Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.ProtocolMountTargetProps")
@software.amazon.jsii.Jsii.Proxy(ProtocolMountTargetProps.Jsii$Proxy.class)
public interface ProtocolMountTargetProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property fileSystemId: File system ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFileSystemId();

    /**
     * Property protocolServiceId: Agreement service ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtocolServiceId();

    /**
     * Property vpcId: Proper network ID exported by the protocol service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property vSwitchId: Switch ID exported by the protocol service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property accessGroupName: The name of the permissions group.
     * <p>
     * Default value: DEFAULT_VPC_GROUP_NAME
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessGroupName() {
        return null;
    }

    /**
     * Property description: Description of the protocol service to export the directory.The console is displayed as the export directory name. limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property fsetId: Fileset ID needs to be exported.
     * <p>
     * limit:
     * The Fileset must exist.
     * A Fileset allows only one export directory.
     * Fileset and Path can only specify one.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFsetId() {
        return null;
    }

    /**
     * Property path: The path of the CPFS directory that needs to be exported.
     * <p>
     * limit:
     * This directory must be existing directory on CPFS.
     * The same directory allows only one export.
     * Fileset and Path can only specify one.
     * Format:
     * The length is 1 to 1024 characters.
     * Use UTF-8 encoding.
     * It must start with the positive oblique line (/), and the root directory must be/.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPath() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ProtocolMountTargetProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ProtocolMountTargetProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ProtocolMountTargetProps> {
        java.lang.Object fileSystemId;
        java.lang.Object protocolServiceId;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object accessGroupName;
        java.lang.Object description;
        java.lang.Object fsetId;
        java.lang.Object path;

        /**
         * Sets the value of {@link ProtocolMountTargetProps#getFileSystemId}
         * @param fileSystemId Property fileSystemId: File system ID. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemId(java.lang.String fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolMountTargetProps#getFileSystemId}
         * @param fileSystemId Property fileSystemId: File system ID. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemId(com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolMountTargetProps#getProtocolServiceId}
         * @param protocolServiceId Property protocolServiceId: Agreement service ID. This parameter is required.
         * @return {@code this}
         */
        public Builder protocolServiceId(java.lang.String protocolServiceId) {
            this.protocolServiceId = protocolServiceId;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolMountTargetProps#getProtocolServiceId}
         * @param protocolServiceId Property protocolServiceId: Agreement service ID. This parameter is required.
         * @return {@code this}
         */
        public Builder protocolServiceId(com.aliyun.ros.cdk.core.IResolvable protocolServiceId) {
            this.protocolServiceId = protocolServiceId;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolMountTargetProps#getVpcId}
         * @param vpcId Property vpcId: Proper network ID exported by the protocol service. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolMountTargetProps#getVpcId}
         * @param vpcId Property vpcId: Proper network ID exported by the protocol service. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolMountTargetProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: Switch ID exported by the protocol service. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolMountTargetProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: Switch ID exported by the protocol service. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolMountTargetProps#getAccessGroupName}
         * @param accessGroupName Property accessGroupName: The name of the permissions group.
         *                        Default value: DEFAULT_VPC_GROUP_NAME
         * @return {@code this}
         */
        public Builder accessGroupName(java.lang.String accessGroupName) {
            this.accessGroupName = accessGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolMountTargetProps#getAccessGroupName}
         * @param accessGroupName Property accessGroupName: The name of the permissions group.
         *                        Default value: DEFAULT_VPC_GROUP_NAME
         * @return {@code this}
         */
        public Builder accessGroupName(com.aliyun.ros.cdk.core.IResolvable accessGroupName) {
            this.accessGroupName = accessGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolMountTargetProps#getDescription}
         * @param description Property description: Description of the protocol service to export the directory.The console is displayed as the export directory name. limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolMountTargetProps#getDescription}
         * @param description Property description: Description of the protocol service to export the directory.The console is displayed as the export directory name. limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolMountTargetProps#getFsetId}
         * @param fsetId Property fsetId: Fileset ID needs to be exported.
         *               limit:
         *               The Fileset must exist.
         *               A Fileset allows only one export directory.
         *               Fileset and Path can only specify one.
         * @return {@code this}
         */
        public Builder fsetId(java.lang.String fsetId) {
            this.fsetId = fsetId;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolMountTargetProps#getFsetId}
         * @param fsetId Property fsetId: Fileset ID needs to be exported.
         *               limit:
         *               The Fileset must exist.
         *               A Fileset allows only one export directory.
         *               Fileset and Path can only specify one.
         * @return {@code this}
         */
        public Builder fsetId(com.aliyun.ros.cdk.core.IResolvable fsetId) {
            this.fsetId = fsetId;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolMountTargetProps#getPath}
         * @param path Property path: The path of the CPFS directory that needs to be exported.
         *             limit:
         *             This directory must be existing directory on CPFS.
         *             The same directory allows only one export.
         *             Fileset and Path can only specify one.
         *             Format:
         *             The length is 1 to 1024 characters.
         *             Use UTF-8 encoding.
         *             It must start with the positive oblique line (/), and the root directory must be/.
         * @return {@code this}
         */
        public Builder path(java.lang.String path) {
            this.path = path;
            return this;
        }

        /**
         * Sets the value of {@link ProtocolMountTargetProps#getPath}
         * @param path Property path: The path of the CPFS directory that needs to be exported.
         *             limit:
         *             This directory must be existing directory on CPFS.
         *             The same directory allows only one export.
         *             Fileset and Path can only specify one.
         *             Format:
         *             The length is 1 to 1024 characters.
         *             Use UTF-8 encoding.
         *             It must start with the positive oblique line (/), and the root directory must be/.
         * @return {@code this}
         */
        public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
            this.path = path;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ProtocolMountTargetProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ProtocolMountTargetProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ProtocolMountTargetProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ProtocolMountTargetProps {
        private final java.lang.Object fileSystemId;
        private final java.lang.Object protocolServiceId;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object accessGroupName;
        private final java.lang.Object description;
        private final java.lang.Object fsetId;
        private final java.lang.Object path;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.fileSystemId = software.amazon.jsii.Kernel.get(this, "fileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocolServiceId = software.amazon.jsii.Kernel.get(this, "protocolServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessGroupName = software.amazon.jsii.Kernel.get(this, "accessGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fsetId = software.amazon.jsii.Kernel.get(this, "fsetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.fileSystemId = java.util.Objects.requireNonNull(builder.fileSystemId, "fileSystemId is required");
            this.protocolServiceId = java.util.Objects.requireNonNull(builder.protocolServiceId, "protocolServiceId is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.accessGroupName = builder.accessGroupName;
            this.description = builder.description;
            this.fsetId = builder.fsetId;
            this.path = builder.path;
        }

        @Override
        public final java.lang.Object getFileSystemId() {
            return this.fileSystemId;
        }

        @Override
        public final java.lang.Object getProtocolServiceId() {
            return this.protocolServiceId;
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
        public final java.lang.Object getAccessGroupName() {
            return this.accessGroupName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getFsetId() {
            return this.fsetId;
        }

        @Override
        public final java.lang.Object getPath() {
            return this.path;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("fileSystemId", om.valueToTree(this.getFileSystemId()));
            data.set("protocolServiceId", om.valueToTree(this.getProtocolServiceId()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getAccessGroupName() != null) {
                data.set("accessGroupName", om.valueToTree(this.getAccessGroupName()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getFsetId() != null) {
                data.set("fsetId", om.valueToTree(this.getFsetId()));
            }
            if (this.getPath() != null) {
                data.set("path", om.valueToTree(this.getPath()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.ProtocolMountTargetProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ProtocolMountTargetProps.Jsii$Proxy that = (ProtocolMountTargetProps.Jsii$Proxy) o;

            if (!fileSystemId.equals(that.fileSystemId)) return false;
            if (!protocolServiceId.equals(that.protocolServiceId)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.accessGroupName != null ? !this.accessGroupName.equals(that.accessGroupName) : that.accessGroupName != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.fsetId != null ? !this.fsetId.equals(that.fsetId) : that.fsetId != null) return false;
            return this.path != null ? this.path.equals(that.path) : that.path == null;
        }

        @Override
        public final int hashCode() {
            int result = this.fileSystemId.hashCode();
            result = 31 * result + (this.protocolServiceId.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.accessGroupName != null ? this.accessGroupName.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.fsetId != null ? this.fsetId.hashCode() : 0);
            result = 31 * result + (this.path != null ? this.path.hashCode() : 0);
            return result;
        }
    }
}
