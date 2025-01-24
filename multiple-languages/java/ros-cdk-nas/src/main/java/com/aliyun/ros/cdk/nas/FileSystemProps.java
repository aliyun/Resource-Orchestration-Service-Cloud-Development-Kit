package com.aliyun.ros.cdk.nas;

/**
 * Properties for defining a <code>FileSystem</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-filesystem
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:41.550Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.FileSystemProps")
@software.amazon.jsii.Jsii.Proxy(FileSystemProps.Jsii$Proxy.class)
public interface FileSystemProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property protocolType: Type of protocol used.
     * <p>
     * Valid values: NFS, SMB, cpfs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtocolType();

    /**
     * Property storageType: The storage type of the file System.
     * <p>
     * Valid values:
     * Performance、Capacity(Available when the file_system_type is standard)
     * standard、advance(Available when the file_system_type is extreme)
     * advance_100、advance_200(Available when the file_system_type is cpfs)
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStorageType();

    /**
     * Property bandwidth: Maximum file system throughput, unit is MB/s.
     * <p>
     * Required and valid only when FileSystemType=cpfs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return null;
    }

    /**
     * Property capacity: File system capacity, the unit is GB.
     * <p>
     * Required and valid when FileSystemType=extreme or cpfs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCapacity() {
        return null;
    }

    /**
     * Property chargeType: Type of payment: PayAsYouGo (pay as you go) Subscription.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property deletionForce: Whether delete all mount targets on the file system and then delete file system.
     * <p>
     * Default is false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     * Property description: File system description (space characters are not allowed).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property duration: The period of subscription in months.
     * <p>
     * Required and valid when ChargeType is Subscription.
     * When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return null;
    }

    /**
     * Property encryptType: Specifies whether to encrypt data.
     * <p>
     * You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
     * 0: specifies that no encryption is applied to data on the file system.
     * 1: specifies that encryption is applied to data on the file system.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptType() {
        return null;
    }

    /**
     * Property fileSystemType: File system type.
     * <p>
     * Allowed values: standard(default), extreme, cpfs
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFileSystemType() {
        return null;
    }

    /**
     * Property snapshotId: Snapshot ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to filesystem.
     * <p>
     * Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.nas.RosFileSystem.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vpcId: Vpc ID.
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
     * Property zoneId: Zone ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link FileSystemProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link FileSystemProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<FileSystemProps> {
        java.lang.Object protocolType;
        java.lang.Object storageType;
        java.lang.Object bandwidth;
        java.lang.Object capacity;
        java.lang.Object chargeType;
        java.lang.Object deletionForce;
        java.lang.Object description;
        java.lang.Object duration;
        java.lang.Object encryptType;
        java.lang.Object fileSystemType;
        java.lang.Object snapshotId;
        java.util.List<com.aliyun.ros.cdk.nas.RosFileSystem.TagsProperty> tags;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link FileSystemProps#getProtocolType}
         * @param protocolType Property protocolType: Type of protocol used. This parameter is required.
         *                     Valid values: NFS, SMB, cpfs.
         * @return {@code this}
         */
        public Builder protocolType(java.lang.String protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getProtocolType}
         * @param protocolType Property protocolType: Type of protocol used. This parameter is required.
         *                     Valid values: NFS, SMB, cpfs.
         * @return {@code this}
         */
        public Builder protocolType(com.aliyun.ros.cdk.core.IResolvable protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getStorageType}
         * @param storageType Property storageType: The storage type of the file System. This parameter is required.
         *                    Valid values:
         *                    Performance、Capacity(Available when the file_system_type is standard)
         *                    standard、advance(Available when the file_system_type is extreme)
         *                    advance_100、advance_200(Available when the file_system_type is cpfs)
         * @return {@code this}
         */
        public Builder storageType(java.lang.String storageType) {
            this.storageType = storageType;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getStorageType}
         * @param storageType Property storageType: The storage type of the file System. This parameter is required.
         *                    Valid values:
         *                    Performance、Capacity(Available when the file_system_type is standard)
         *                    standard、advance(Available when the file_system_type is extreme)
         *                    advance_100、advance_200(Available when the file_system_type is cpfs)
         * @return {@code this}
         */
        public Builder storageType(com.aliyun.ros.cdk.core.IResolvable storageType) {
            this.storageType = storageType;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getBandwidth}
         * @param bandwidth Property bandwidth: Maximum file system throughput, unit is MB/s.
         *                  Required and valid only when FileSystemType=cpfs.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getBandwidth}
         * @param bandwidth Property bandwidth: Maximum file system throughput, unit is MB/s.
         *                  Required and valid only when FileSystemType=cpfs.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getCapacity}
         * @param capacity Property capacity: File system capacity, the unit is GB.
         *                 Required and valid when FileSystemType=extreme or cpfs.
         * @return {@code this}
         */
        public Builder capacity(java.lang.Number capacity) {
            this.capacity = capacity;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getCapacity}
         * @param capacity Property capacity: File system capacity, the unit is GB.
         *                 Required and valid when FileSystemType=extreme or cpfs.
         * @return {@code this}
         */
        public Builder capacity(com.aliyun.ros.cdk.core.IResolvable capacity) {
            this.capacity = capacity;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getChargeType}
         * @param chargeType Property chargeType: Type of payment: PayAsYouGo (pay as you go) Subscription.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getChargeType}
         * @param chargeType Property chargeType: Type of payment: PayAsYouGo (pay as you go) Subscription.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether delete all mount targets on the file system and then delete file system.
         *                      Default is false
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether delete all mount targets on the file system and then delete file system.
         *                      Default is false
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getDescription}
         * @param description Property description: File system description (space characters are not allowed).
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getDescription}
         * @param description Property description: File system description (space characters are not allowed).
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getDuration}
         * @param duration Property duration: The period of subscription in months.
         *                 Required and valid when ChargeType is Subscription.
         *                 When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
         * @return {@code this}
         */
        public Builder duration(java.lang.Number duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getDuration}
         * @param duration Property duration: The period of subscription in months.
         *                 Required and valid when ChargeType is Subscription.
         *                 When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getEncryptType}
         * @param encryptType Property encryptType: Specifies whether to encrypt data.
         *                    You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
         *                    0: specifies that no encryption is applied to data on the file system.
         *                    1: specifies that encryption is applied to data on the file system.
         * @return {@code this}
         */
        public Builder encryptType(java.lang.Number encryptType) {
            this.encryptType = encryptType;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getEncryptType}
         * @param encryptType Property encryptType: Specifies whether to encrypt data.
         *                    You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
         *                    0: specifies that no encryption is applied to data on the file system.
         *                    1: specifies that encryption is applied to data on the file system.
         * @return {@code this}
         */
        public Builder encryptType(com.aliyun.ros.cdk.core.IResolvable encryptType) {
            this.encryptType = encryptType;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getFileSystemType}
         * @param fileSystemType Property fileSystemType: File system type.
         *                       Allowed values: standard(default), extreme, cpfs
         * @return {@code this}
         */
        public Builder fileSystemType(java.lang.String fileSystemType) {
            this.fileSystemType = fileSystemType;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getFileSystemType}
         * @param fileSystemType Property fileSystemType: File system type.
         *                       Allowed values: standard(default), extreme, cpfs
         * @return {@code this}
         */
        public Builder fileSystemType(com.aliyun.ros.cdk.core.IResolvable fileSystemType) {
            this.fileSystemType = fileSystemType;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getSnapshotId}
         * @param snapshotId Property snapshotId: Snapshot ID.
         * @return {@code this}
         */
        public Builder snapshotId(java.lang.String snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getSnapshotId}
         * @param snapshotId Property snapshotId: Snapshot ID.
         * @return {@code this}
         */
        public Builder snapshotId(com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getTags}
         * @param tags Property tags: Tags to attach to filesystem.
         *             Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.nas.RosFileSystem.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.nas.RosFileSystem.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getVpcId}
         * @param vpcId Property vpcId: Vpc ID.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getVpcId}
         * @param vpcId Property vpcId: Vpc ID.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VSwitch ID.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VSwitch ID.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getZoneId}
         * @param zoneId Property zoneId: Zone ID.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getZoneId}
         * @param zoneId Property zoneId: Zone ID.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link FileSystemProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public FileSystemProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link FileSystemProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FileSystemProps {
        private final java.lang.Object protocolType;
        private final java.lang.Object storageType;
        private final java.lang.Object bandwidth;
        private final java.lang.Object capacity;
        private final java.lang.Object chargeType;
        private final java.lang.Object deletionForce;
        private final java.lang.Object description;
        private final java.lang.Object duration;
        private final java.lang.Object encryptType;
        private final java.lang.Object fileSystemType;
        private final java.lang.Object snapshotId;
        private final java.util.List<com.aliyun.ros.cdk.nas.RosFileSystem.TagsProperty> tags;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.protocolType = software.amazon.jsii.Kernel.get(this, "protocolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageType = software.amazon.jsii.Kernel.get(this, "storageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.capacity = software.amazon.jsii.Kernel.get(this, "capacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptType = software.amazon.jsii.Kernel.get(this, "encryptType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fileSystemType = software.amazon.jsii.Kernel.get(this, "fileSystemType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snapshotId = software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nas.RosFileSystem.TagsProperty.class)));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.protocolType = java.util.Objects.requireNonNull(builder.protocolType, "protocolType is required");
            this.storageType = java.util.Objects.requireNonNull(builder.storageType, "storageType is required");
            this.bandwidth = builder.bandwidth;
            this.capacity = builder.capacity;
            this.chargeType = builder.chargeType;
            this.deletionForce = builder.deletionForce;
            this.description = builder.description;
            this.duration = builder.duration;
            this.encryptType = builder.encryptType;
            this.fileSystemType = builder.fileSystemType;
            this.snapshotId = builder.snapshotId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.nas.RosFileSystem.TagsProperty>)builder.tags;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getProtocolType() {
            return this.protocolType;
        }

        @Override
        public final java.lang.Object getStorageType() {
            return this.storageType;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getCapacity() {
            return this.capacity;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getDeletionForce() {
            return this.deletionForce;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.Object getEncryptType() {
            return this.encryptType;
        }

        @Override
        public final java.lang.Object getFileSystemType() {
            return this.fileSystemType;
        }

        @Override
        public final java.lang.Object getSnapshotId() {
            return this.snapshotId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.nas.RosFileSystem.TagsProperty> getTags() {
            return this.tags;
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("protocolType", om.valueToTree(this.getProtocolType()));
            data.set("storageType", om.valueToTree(this.getStorageType()));
            if (this.getBandwidth() != null) {
                data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            }
            if (this.getCapacity() != null) {
                data.set("capacity", om.valueToTree(this.getCapacity()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDuration() != null) {
                data.set("duration", om.valueToTree(this.getDuration()));
            }
            if (this.getEncryptType() != null) {
                data.set("encryptType", om.valueToTree(this.getEncryptType()));
            }
            if (this.getFileSystemType() != null) {
                data.set("fileSystemType", om.valueToTree(this.getFileSystemType()));
            }
            if (this.getSnapshotId() != null) {
                data.set("snapshotId", om.valueToTree(this.getSnapshotId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.FileSystemProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            FileSystemProps.Jsii$Proxy that = (FileSystemProps.Jsii$Proxy) o;

            if (!protocolType.equals(that.protocolType)) return false;
            if (!storageType.equals(that.storageType)) return false;
            if (this.bandwidth != null ? !this.bandwidth.equals(that.bandwidth) : that.bandwidth != null) return false;
            if (this.capacity != null ? !this.capacity.equals(that.capacity) : that.capacity != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
            if (this.encryptType != null ? !this.encryptType.equals(that.encryptType) : that.encryptType != null) return false;
            if (this.fileSystemType != null ? !this.fileSystemType.equals(that.fileSystemType) : that.fileSystemType != null) return false;
            if (this.snapshotId != null ? !this.snapshotId.equals(that.snapshotId) : that.snapshotId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.protocolType.hashCode();
            result = 31 * result + (this.storageType.hashCode());
            result = 31 * result + (this.bandwidth != null ? this.bandwidth.hashCode() : 0);
            result = 31 * result + (this.capacity != null ? this.capacity.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
            result = 31 * result + (this.encryptType != null ? this.encryptType.hashCode() : 0);
            result = 31 * result + (this.fileSystemType != null ? this.fileSystemType.hashCode() : 0);
            result = 31 * result + (this.snapshotId != null ? this.snapshotId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
