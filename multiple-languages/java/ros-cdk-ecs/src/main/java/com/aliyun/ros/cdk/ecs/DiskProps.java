package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::Disk`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:02.660Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.DiskProps")
@software.amazon.jsii.Jsii.Proxy(DiskProps.Jsii$Proxy.class)
public interface DiskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getZoneId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAutoSnapshotPolicyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteAutoSnapshot() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDiskCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDiskName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getKmsKeyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPerformanceLevel() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSnapshotId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getStorageSetId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getStorageSetPartitionNumber() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.Object>> getTags() {
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
        private java.lang.String zoneId;
        private java.lang.String autoSnapshotPolicyId;
        private java.lang.Object deleteAutoSnapshot;
        private java.lang.String description;
        private java.lang.String diskCategory;
        private java.lang.String diskName;
        private java.lang.Object encrypted;
        private java.lang.String kmsKeyId;
        private java.lang.String performanceLevel;
        private java.lang.String resourceGroupId;
        private java.lang.Number size;
        private java.lang.String snapshotId;
        private java.lang.String storageSetId;
        private java.lang.Number storageSetPartitionNumber;
        private java.util.List<java.util.Map<java.lang.String, java.lang.Object>> tags;

        /**
         * Sets the value of {@link DiskProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getAutoSnapshotPolicyId}
         * @param autoSnapshotPolicyId the value to be set.
         * @return {@code this}
         */
        public Builder autoSnapshotPolicyId(java.lang.String autoSnapshotPolicyId) {
            this.autoSnapshotPolicyId = autoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getDeleteAutoSnapshot}
         * @param deleteAutoSnapshot the value to be set.
         * @return {@code this}
         */
        public Builder deleteAutoSnapshot(java.lang.Boolean deleteAutoSnapshot) {
            this.deleteAutoSnapshot = deleteAutoSnapshot;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getDeleteAutoSnapshot}
         * @param deleteAutoSnapshot the value to be set.
         * @return {@code this}
         */
        public Builder deleteAutoSnapshot(com.aliyun.ros.cdk.core.IResolvable deleteAutoSnapshot) {
            this.deleteAutoSnapshot = deleteAutoSnapshot;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getDiskCategory}
         * @param diskCategory the value to be set.
         * @return {@code this}
         */
        public Builder diskCategory(java.lang.String diskCategory) {
            this.diskCategory = diskCategory;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getDiskName}
         * @param diskName the value to be set.
         * @return {@code this}
         */
        public Builder diskName(java.lang.String diskName) {
            this.diskName = diskName;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getEncrypted}
         * @param encrypted the value to be set.
         * @return {@code this}
         */
        public Builder encrypted(java.lang.Boolean encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getEncrypted}
         * @param encrypted the value to be set.
         * @return {@code this}
         */
        public Builder encrypted(com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getKmsKeyId}
         * @param kmsKeyId the value to be set.
         * @return {@code this}
         */
        public Builder kmsKeyId(java.lang.String kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getPerformanceLevel}
         * @param performanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder performanceLevel(java.lang.String performanceLevel) {
            this.performanceLevel = performanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getSize}
         * @param size the value to be set.
         * @return {@code this}
         */
        public Builder size(java.lang.Number size) {
            this.size = size;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getSnapshotId}
         * @param snapshotId the value to be set.
         * @return {@code this}
         */
        public Builder snapshotId(java.lang.String snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getStorageSetId}
         * @param storageSetId the value to be set.
         * @return {@code this}
         */
        public Builder storageSetId(java.lang.String storageSetId) {
            this.storageSetId = storageSetId;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getStorageSetPartitionNumber}
         * @param storageSetPartitionNumber the value to be set.
         * @return {@code this}
         */
        public Builder storageSetPartitionNumber(java.lang.Number storageSetPartitionNumber) {
            this.storageSetPartitionNumber = storageSetPartitionNumber;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> tags) {
            this.tags = (java.util.List<java.util.Map<java.lang.String, java.lang.Object>>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DiskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DiskProps build() {
            return new Jsii$Proxy(zoneId, autoSnapshotPolicyId, deleteAutoSnapshot, description, diskCategory, diskName, encrypted, kmsKeyId, performanceLevel, resourceGroupId, size, snapshotId, storageSetId, storageSetPartitionNumber, tags);
        }
    }

    /**
     * An implementation for {@link DiskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DiskProps {
        private final java.lang.String zoneId;
        private final java.lang.String autoSnapshotPolicyId;
        private final java.lang.Object deleteAutoSnapshot;
        private final java.lang.String description;
        private final java.lang.String diskCategory;
        private final java.lang.String diskName;
        private final java.lang.Object encrypted;
        private final java.lang.String kmsKeyId;
        private final java.lang.String performanceLevel;
        private final java.lang.String resourceGroupId;
        private final java.lang.Number size;
        private final java.lang.String snapshotId;
        private final java.lang.String storageSetId;
        private final java.lang.Number storageSetPartitionNumber;
        private final java.util.List<java.util.Map<java.lang.String, java.lang.Object>> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "autoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.deleteAutoSnapshot = software.amazon.jsii.Kernel.get(this, "deleteAutoSnapshot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.diskCategory = software.amazon.jsii.Kernel.get(this, "diskCategory", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.diskName = software.amazon.jsii.Kernel.get(this, "diskName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.encrypted = software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kmsKeyId = software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.performanceLevel = software.amazon.jsii.Kernel.get(this, "performanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.snapshotId = software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.storageSetId = software.amazon.jsii.Kernel.get(this, "storageSetId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.storageSetPartitionNumber = software.amazon.jsii.Kernel.get(this, "storageSetPartitionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.String zoneId, final java.lang.String autoSnapshotPolicyId, final java.lang.Object deleteAutoSnapshot, final java.lang.String description, final java.lang.String diskCategory, final java.lang.String diskName, final java.lang.Object encrypted, final java.lang.String kmsKeyId, final java.lang.String performanceLevel, final java.lang.String resourceGroupId, final java.lang.Number size, final java.lang.String snapshotId, final java.lang.String storageSetId, final java.lang.Number storageSetPartitionNumber, final java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> tags) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.zoneId = java.util.Objects.requireNonNull(zoneId, "zoneId is required");
            this.autoSnapshotPolicyId = autoSnapshotPolicyId;
            this.deleteAutoSnapshot = deleteAutoSnapshot;
            this.description = description;
            this.diskCategory = diskCategory;
            this.diskName = diskName;
            this.encrypted = encrypted;
            this.kmsKeyId = kmsKeyId;
            this.performanceLevel = performanceLevel;
            this.resourceGroupId = resourceGroupId;
            this.size = size;
            this.snapshotId = snapshotId;
            this.storageSetId = storageSetId;
            this.storageSetPartitionNumber = storageSetPartitionNumber;
            this.tags = (java.util.List<java.util.Map<java.lang.String, java.lang.Object>>)tags;
        }

        @Override
        public final java.lang.String getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.String getAutoSnapshotPolicyId() {
            return this.autoSnapshotPolicyId;
        }

        @Override
        public final java.lang.Object getDeleteAutoSnapshot() {
            return this.deleteAutoSnapshot;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getDiskCategory() {
            return this.diskCategory;
        }

        @Override
        public final java.lang.String getDiskName() {
            return this.diskName;
        }

        @Override
        public final java.lang.Object getEncrypted() {
            return this.encrypted;
        }

        @Override
        public final java.lang.String getKmsKeyId() {
            return this.kmsKeyId;
        }

        @Override
        public final java.lang.String getPerformanceLevel() {
            return this.performanceLevel;
        }

        @Override
        public final java.lang.String getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Number getSize() {
            return this.size;
        }

        @Override
        public final java.lang.String getSnapshotId() {
            return this.snapshotId;
        }

        @Override
        public final java.lang.String getStorageSetId() {
            return this.storageSetId;
        }

        @Override
        public final java.lang.Number getStorageSetPartitionNumber() {
            return this.storageSetPartitionNumber;
        }

        @Override
        public final java.util.List<java.util.Map<java.lang.String, java.lang.Object>> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getAutoSnapshotPolicyId() != null) {
                data.set("autoSnapshotPolicyId", om.valueToTree(this.getAutoSnapshotPolicyId()));
            }
            if (this.getDeleteAutoSnapshot() != null) {
                data.set("deleteAutoSnapshot", om.valueToTree(this.getDeleteAutoSnapshot()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDiskCategory() != null) {
                data.set("diskCategory", om.valueToTree(this.getDiskCategory()));
            }
            if (this.getDiskName() != null) {
                data.set("diskName", om.valueToTree(this.getDiskName()));
            }
            if (this.getEncrypted() != null) {
                data.set("encrypted", om.valueToTree(this.getEncrypted()));
            }
            if (this.getKmsKeyId() != null) {
                data.set("kmsKeyId", om.valueToTree(this.getKmsKeyId()));
            }
            if (this.getPerformanceLevel() != null) {
                data.set("performanceLevel", om.valueToTree(this.getPerformanceLevel()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSize() != null) {
                data.set("size", om.valueToTree(this.getSize()));
            }
            if (this.getSnapshotId() != null) {
                data.set("snapshotId", om.valueToTree(this.getSnapshotId()));
            }
            if (this.getStorageSetId() != null) {
                data.set("storageSetId", om.valueToTree(this.getStorageSetId()));
            }
            if (this.getStorageSetPartitionNumber() != null) {
                data.set("storageSetPartitionNumber", om.valueToTree(this.getStorageSetPartitionNumber()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.DiskProps"));
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

            if (!zoneId.equals(that.zoneId)) return false;
            if (this.autoSnapshotPolicyId != null ? !this.autoSnapshotPolicyId.equals(that.autoSnapshotPolicyId) : that.autoSnapshotPolicyId != null) return false;
            if (this.deleteAutoSnapshot != null ? !this.deleteAutoSnapshot.equals(that.deleteAutoSnapshot) : that.deleteAutoSnapshot != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.diskCategory != null ? !this.diskCategory.equals(that.diskCategory) : that.diskCategory != null) return false;
            if (this.diskName != null ? !this.diskName.equals(that.diskName) : that.diskName != null) return false;
            if (this.encrypted != null ? !this.encrypted.equals(that.encrypted) : that.encrypted != null) return false;
            if (this.kmsKeyId != null ? !this.kmsKeyId.equals(that.kmsKeyId) : that.kmsKeyId != null) return false;
            if (this.performanceLevel != null ? !this.performanceLevel.equals(that.performanceLevel) : that.performanceLevel != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.size != null ? !this.size.equals(that.size) : that.size != null) return false;
            if (this.snapshotId != null ? !this.snapshotId.equals(that.snapshotId) : that.snapshotId != null) return false;
            if (this.storageSetId != null ? !this.storageSetId.equals(that.storageSetId) : that.storageSetId != null) return false;
            if (this.storageSetPartitionNumber != null ? !this.storageSetPartitionNumber.equals(that.storageSetPartitionNumber) : that.storageSetPartitionNumber != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.zoneId.hashCode();
            result = 31 * result + (this.autoSnapshotPolicyId != null ? this.autoSnapshotPolicyId.hashCode() : 0);
            result = 31 * result + (this.deleteAutoSnapshot != null ? this.deleteAutoSnapshot.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.diskCategory != null ? this.diskCategory.hashCode() : 0);
            result = 31 * result + (this.diskName != null ? this.diskName.hashCode() : 0);
            result = 31 * result + (this.encrypted != null ? this.encrypted.hashCode() : 0);
            result = 31 * result + (this.kmsKeyId != null ? this.kmsKeyId.hashCode() : 0);
            result = 31 * result + (this.performanceLevel != null ? this.performanceLevel.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.size != null ? this.size.hashCode() : 0);
            result = 31 * result + (this.snapshotId != null ? this.snapshotId.hashCode() : 0);
            result = 31 * result + (this.storageSetId != null ? this.storageSetId.hashCode() : 0);
            result = 31 * result + (this.storageSetPartitionNumber != null ? this.storageSetPartitionNumber.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
