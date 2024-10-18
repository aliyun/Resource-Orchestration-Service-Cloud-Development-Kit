package com.aliyun.ros.cdk.ens;

/**
 * Properties for defining a <code>Disk</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-disk
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:30.097Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.DiskProps")
@software.amazon.jsii.Jsii.Proxy(DiskProps.Jsii$Proxy.class)
public interface DiskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property category: The category of the disk.
     * <p>
     * Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: all-flash disk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCategory();

    /**
     * Property ensRegionId: The ID of the edge node.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnsRegionId();

    /**
     * Property instanceChargeType: The billing method of the instance.
     * <p>
     * Set the value to PostPaid.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceChargeType();

    /**
     * Property size: The size of the disk.
     * <p>
     * Unit: GiB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSize();

    /**
     * Property diskName: The name of the disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskName() {
        return null;
    }

    /**
     * Property encrypted: Specifies whether to encrypt the new system disk.
     * <p>
     * Valid values:
     * true
     * false (default): no
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
        return null;
    }

    /**
     * Property kmsKeyId: The ID of the Key Management Service (KMS) key that is used by the cloud disk.
     * <p>
     * Note If you set the Encrypted parameter to true, the default service key is used when the KMSKeyId parameter is empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKmsKeyId() {
        return null;
    }

    /**
     * Property snapshotId: The ID of the snapshot that you want to use to create the disk.
     * <p>
     * The following limits apply to the SnapshotId and Size parameters:
     * If the size of the snapshot specified by SnapshotId is greater than the specified Size value, the size of the created disk is equal to the specified snapshot size.
     * If the size of the snapshot specified by SnapshotId is smaller than the specified Size value, the size of the created disk is equal to the specified Size value.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DiskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DiskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DiskProps> {
        java.lang.Object category;
        java.lang.Object ensRegionId;
        java.lang.Object instanceChargeType;
        java.lang.Object size;
        java.lang.Object diskName;
        java.lang.Object encrypted;
        java.lang.Object kmsKeyId;
        java.lang.Object snapshotId;

        /**
         * Sets the value of {@link DiskProps#getCategory}
         * @param category Property category: The category of the disk. This parameter is required.
         *                 Valid values:
         *                 cloud_efficiency: ultra disk.
         *                 cloud_ssd: all-flash disk.
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getCategory}
         * @param category Property category: The category of the disk. This parameter is required.
         *                 Valid values:
         *                 cloud_efficiency: ultra disk.
         *                 cloud_ssd: all-flash disk.
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getEnsRegionId}
         * @param ensRegionId Property ensRegionId: The ID of the edge node. This parameter is required.
         * @return {@code this}
         */
        public Builder ensRegionId(java.lang.String ensRegionId) {
            this.ensRegionId = ensRegionId;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getEnsRegionId}
         * @param ensRegionId Property ensRegionId: The ID of the edge node. This parameter is required.
         * @return {@code this}
         */
        public Builder ensRegionId(com.aliyun.ros.cdk.core.IResolvable ensRegionId) {
            this.ensRegionId = ensRegionId;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance. This parameter is required.
         *                           Set the value to PostPaid.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance. This parameter is required.
         *                           Set the value to PostPaid.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getSize}
         * @param size Property size: The size of the disk. This parameter is required.
         *             Unit: GiB.
         * @return {@code this}
         */
        public Builder size(java.lang.String size) {
            this.size = size;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getSize}
         * @param size Property size: The size of the disk. This parameter is required.
         *             Unit: GiB.
         * @return {@code this}
         */
        public Builder size(com.aliyun.ros.cdk.core.IResolvable size) {
            this.size = size;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getDiskName}
         * @param diskName Property diskName: The name of the disk.
         * @return {@code this}
         */
        public Builder diskName(java.lang.String diskName) {
            this.diskName = diskName;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getDiskName}
         * @param diskName Property diskName: The name of the disk.
         * @return {@code this}
         */
        public Builder diskName(com.aliyun.ros.cdk.core.IResolvable diskName) {
            this.diskName = diskName;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getEncrypted}
         * @param encrypted Property encrypted: Specifies whether to encrypt the new system disk.
         *                  Valid values:
         *                  true
         *                  false (default): no
         * @return {@code this}
         */
        public Builder encrypted(java.lang.Boolean encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getEncrypted}
         * @param encrypted Property encrypted: Specifies whether to encrypt the new system disk.
         *                  Valid values:
         *                  true
         *                  false (default): no
         * @return {@code this}
         */
        public Builder encrypted(com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getKmsKeyId}
         * @param kmsKeyId Property kmsKeyId: The ID of the Key Management Service (KMS) key that is used by the cloud disk.
         *                 Note If you set the Encrypted parameter to true, the default service key is used when the KMSKeyId parameter is empty.
         * @return {@code this}
         */
        public Builder kmsKeyId(java.lang.String kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getKmsKeyId}
         * @param kmsKeyId Property kmsKeyId: The ID of the Key Management Service (KMS) key that is used by the cloud disk.
         *                 Note If you set the Encrypted parameter to true, the default service key is used when the KMSKeyId parameter is empty.
         * @return {@code this}
         */
        public Builder kmsKeyId(com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getSnapshotId}
         * @param snapshotId Property snapshotId: The ID of the snapshot that you want to use to create the disk.
         *                   The following limits apply to the SnapshotId and Size parameters:
         *                   If the size of the snapshot specified by SnapshotId is greater than the specified Size value, the size of the created disk is equal to the specified snapshot size.
         *                   If the size of the snapshot specified by SnapshotId is smaller than the specified Size value, the size of the created disk is equal to the specified Size value.
         * @return {@code this}
         */
        public Builder snapshotId(java.lang.String snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getSnapshotId}
         * @param snapshotId Property snapshotId: The ID of the snapshot that you want to use to create the disk.
         *                   The following limits apply to the SnapshotId and Size parameters:
         *                   If the size of the snapshot specified by SnapshotId is greater than the specified Size value, the size of the created disk is equal to the specified snapshot size.
         *                   If the size of the snapshot specified by SnapshotId is smaller than the specified Size value, the size of the created disk is equal to the specified Size value.
         * @return {@code this}
         */
        public Builder snapshotId(com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DiskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DiskProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DiskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DiskProps {
        private final java.lang.Object category;
        private final java.lang.Object ensRegionId;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object size;
        private final java.lang.Object diskName;
        private final java.lang.Object encrypted;
        private final java.lang.Object kmsKeyId;
        private final java.lang.Object snapshotId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ensRegionId = software.amazon.jsii.Kernel.get(this, "ensRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskName = software.amazon.jsii.Kernel.get(this, "diskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encrypted = software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kmsKeyId = software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snapshotId = software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.category = java.util.Objects.requireNonNull(builder.category, "category is required");
            this.ensRegionId = java.util.Objects.requireNonNull(builder.ensRegionId, "ensRegionId is required");
            this.instanceChargeType = java.util.Objects.requireNonNull(builder.instanceChargeType, "instanceChargeType is required");
            this.size = java.util.Objects.requireNonNull(builder.size, "size is required");
            this.diskName = builder.diskName;
            this.encrypted = builder.encrypted;
            this.kmsKeyId = builder.kmsKeyId;
            this.snapshotId = builder.snapshotId;
        }

        @Override
        public final java.lang.Object getCategory() {
            return this.category;
        }

        @Override
        public final java.lang.Object getEnsRegionId() {
            return this.ensRegionId;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getSize() {
            return this.size;
        }

        @Override
        public final java.lang.Object getDiskName() {
            return this.diskName;
        }

        @Override
        public final java.lang.Object getEncrypted() {
            return this.encrypted;
        }

        @Override
        public final java.lang.Object getKmsKeyId() {
            return this.kmsKeyId;
        }

        @Override
        public final java.lang.Object getSnapshotId() {
            return this.snapshotId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("category", om.valueToTree(this.getCategory()));
            data.set("ensRegionId", om.valueToTree(this.getEnsRegionId()));
            data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            data.set("size", om.valueToTree(this.getSize()));
            if (this.getDiskName() != null) {
                data.set("diskName", om.valueToTree(this.getDiskName()));
            }
            if (this.getEncrypted() != null) {
                data.set("encrypted", om.valueToTree(this.getEncrypted()));
            }
            if (this.getKmsKeyId() != null) {
                data.set("kmsKeyId", om.valueToTree(this.getKmsKeyId()));
            }
            if (this.getSnapshotId() != null) {
                data.set("snapshotId", om.valueToTree(this.getSnapshotId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ens.DiskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DiskProps.Jsii$Proxy that = (DiskProps.Jsii$Proxy) o;

            if (!category.equals(that.category)) return false;
            if (!ensRegionId.equals(that.ensRegionId)) return false;
            if (!instanceChargeType.equals(that.instanceChargeType)) return false;
            if (!size.equals(that.size)) return false;
            if (this.diskName != null ? !this.diskName.equals(that.diskName) : that.diskName != null) return false;
            if (this.encrypted != null ? !this.encrypted.equals(that.encrypted) : that.encrypted != null) return false;
            if (this.kmsKeyId != null ? !this.kmsKeyId.equals(that.kmsKeyId) : that.kmsKeyId != null) return false;
            return this.snapshotId != null ? this.snapshotId.equals(that.snapshotId) : that.snapshotId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.category.hashCode();
            result = 31 * result + (this.ensRegionId.hashCode());
            result = 31 * result + (this.instanceChargeType.hashCode());
            result = 31 * result + (this.size.hashCode());
            result = 31 * result + (this.diskName != null ? this.diskName.hashCode() : 0);
            result = 31 * result + (this.encrypted != null ? this.encrypted.hashCode() : 0);
            result = 31 * result + (this.kmsKeyId != null ? this.kmsKeyId.hashCode() : 0);
            result = 31 * result + (this.snapshotId != null ? this.snapshotId.hashCode() : 0);
            return result;
        }
    }
}
