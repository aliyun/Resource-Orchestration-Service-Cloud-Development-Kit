package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>ALIYUN::ECS::Disk</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:24.823Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosDiskProps")
@software.amazon.jsii.Jsii.Proxy(RosDiskProps.Jsii$Proxy.class)
public interface RosDiskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoSnapshotPolicyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBurstingEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteAutoSnapshot() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKmsKeyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMultiAttach() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPerformanceLevel() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProvisionedIops() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageSetId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageSetPartitionNumber() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosDisk.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDiskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDiskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDiskProps> {
        java.lang.Object zoneId;
        java.lang.Object autoSnapshotPolicyId;
        java.lang.Object burstingEnabled;
        java.lang.Object deleteAutoSnapshot;
        java.lang.Object description;
        java.lang.Object diskCategory;
        java.lang.Object diskName;
        java.lang.Object encrypted;
        java.lang.Object kmsKeyId;
        java.lang.Object multiAttach;
        java.lang.Object performanceLevel;
        java.lang.Object provisionedIops;
        java.lang.Object resourceGroupId;
        java.lang.Object size;
        java.lang.Object snapshotId;
        java.lang.Object storageSetId;
        java.lang.Object storageSetPartitionNumber;
        java.util.List<com.aliyun.ros.cdk.ecs.RosDisk.TagsProperty> tags;

        /**
         * Sets the value of {@link RosDiskProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getAutoSnapshotPolicyId}
         * @param autoSnapshotPolicyId the value to be set.
         * @return {@code this}
         */
        public Builder autoSnapshotPolicyId(java.lang.String autoSnapshotPolicyId) {
            this.autoSnapshotPolicyId = autoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getAutoSnapshotPolicyId}
         * @param autoSnapshotPolicyId the value to be set.
         * @return {@code this}
         */
        public Builder autoSnapshotPolicyId(com.aliyun.ros.cdk.core.IResolvable autoSnapshotPolicyId) {
            this.autoSnapshotPolicyId = autoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getBurstingEnabled}
         * @param burstingEnabled the value to be set.
         * @return {@code this}
         */
        public Builder burstingEnabled(java.lang.Boolean burstingEnabled) {
            this.burstingEnabled = burstingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getBurstingEnabled}
         * @param burstingEnabled the value to be set.
         * @return {@code this}
         */
        public Builder burstingEnabled(com.aliyun.ros.cdk.core.IResolvable burstingEnabled) {
            this.burstingEnabled = burstingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getDeleteAutoSnapshot}
         * @param deleteAutoSnapshot the value to be set.
         * @return {@code this}
         */
        public Builder deleteAutoSnapshot(java.lang.Boolean deleteAutoSnapshot) {
            this.deleteAutoSnapshot = deleteAutoSnapshot;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getDeleteAutoSnapshot}
         * @param deleteAutoSnapshot the value to be set.
         * @return {@code this}
         */
        public Builder deleteAutoSnapshot(com.aliyun.ros.cdk.core.IResolvable deleteAutoSnapshot) {
            this.deleteAutoSnapshot = deleteAutoSnapshot;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getDiskCategory}
         * @param diskCategory the value to be set.
         * @return {@code this}
         */
        public Builder diskCategory(java.lang.String diskCategory) {
            this.diskCategory = diskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getDiskCategory}
         * @param diskCategory the value to be set.
         * @return {@code this}
         */
        public Builder diskCategory(com.aliyun.ros.cdk.core.IResolvable diskCategory) {
            this.diskCategory = diskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getDiskName}
         * @param diskName the value to be set.
         * @return {@code this}
         */
        public Builder diskName(java.lang.String diskName) {
            this.diskName = diskName;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getDiskName}
         * @param diskName the value to be set.
         * @return {@code this}
         */
        public Builder diskName(com.aliyun.ros.cdk.core.IResolvable diskName) {
            this.diskName = diskName;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getEncrypted}
         * @param encrypted the value to be set.
         * @return {@code this}
         */
        public Builder encrypted(java.lang.Boolean encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getEncrypted}
         * @param encrypted the value to be set.
         * @return {@code this}
         */
        public Builder encrypted(com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getKmsKeyId}
         * @param kmsKeyId the value to be set.
         * @return {@code this}
         */
        public Builder kmsKeyId(java.lang.String kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getKmsKeyId}
         * @param kmsKeyId the value to be set.
         * @return {@code this}
         */
        public Builder kmsKeyId(com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getMultiAttach}
         * @param multiAttach the value to be set.
         * @return {@code this}
         */
        public Builder multiAttach(java.lang.String multiAttach) {
            this.multiAttach = multiAttach;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getMultiAttach}
         * @param multiAttach the value to be set.
         * @return {@code this}
         */
        public Builder multiAttach(com.aliyun.ros.cdk.core.IResolvable multiAttach) {
            this.multiAttach = multiAttach;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getPerformanceLevel}
         * @param performanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder performanceLevel(java.lang.String performanceLevel) {
            this.performanceLevel = performanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getPerformanceLevel}
         * @param performanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder performanceLevel(com.aliyun.ros.cdk.core.IResolvable performanceLevel) {
            this.performanceLevel = performanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getProvisionedIops}
         * @param provisionedIops the value to be set.
         * @return {@code this}
         */
        public Builder provisionedIops(java.lang.Number provisionedIops) {
            this.provisionedIops = provisionedIops;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getProvisionedIops}
         * @param provisionedIops the value to be set.
         * @return {@code this}
         */
        public Builder provisionedIops(com.aliyun.ros.cdk.core.IResolvable provisionedIops) {
            this.provisionedIops = provisionedIops;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getSize}
         * @param size the value to be set.
         * @return {@code this}
         */
        public Builder size(java.lang.Number size) {
            this.size = size;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getSize}
         * @param size the value to be set.
         * @return {@code this}
         */
        public Builder size(com.aliyun.ros.cdk.core.IResolvable size) {
            this.size = size;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getSnapshotId}
         * @param snapshotId the value to be set.
         * @return {@code this}
         */
        public Builder snapshotId(java.lang.String snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getSnapshotId}
         * @param snapshotId the value to be set.
         * @return {@code this}
         */
        public Builder snapshotId(com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getStorageSetId}
         * @param storageSetId the value to be set.
         * @return {@code this}
         */
        public Builder storageSetId(java.lang.String storageSetId) {
            this.storageSetId = storageSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getStorageSetId}
         * @param storageSetId the value to be set.
         * @return {@code this}
         */
        public Builder storageSetId(com.aliyun.ros.cdk.core.IResolvable storageSetId) {
            this.storageSetId = storageSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getStorageSetPartitionNumber}
         * @param storageSetPartitionNumber the value to be set.
         * @return {@code this}
         */
        public Builder storageSetPartitionNumber(java.lang.Number storageSetPartitionNumber) {
            this.storageSetPartitionNumber = storageSetPartitionNumber;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getStorageSetPartitionNumber}
         * @param storageSetPartitionNumber the value to be set.
         * @return {@code this}
         */
        public Builder storageSetPartitionNumber(com.aliyun.ros.cdk.core.IResolvable storageSetPartitionNumber) {
            this.storageSetPartitionNumber = storageSetPartitionNumber;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosDisk.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosDisk.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDiskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDiskProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDiskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDiskProps {
        private final java.lang.Object zoneId;
        private final java.lang.Object autoSnapshotPolicyId;
        private final java.lang.Object burstingEnabled;
        private final java.lang.Object deleteAutoSnapshot;
        private final java.lang.Object description;
        private final java.lang.Object diskCategory;
        private final java.lang.Object diskName;
        private final java.lang.Object encrypted;
        private final java.lang.Object kmsKeyId;
        private final java.lang.Object multiAttach;
        private final java.lang.Object performanceLevel;
        private final java.lang.Object provisionedIops;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object size;
        private final java.lang.Object snapshotId;
        private final java.lang.Object storageSetId;
        private final java.lang.Object storageSetPartitionNumber;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosDisk.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "autoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.burstingEnabled = software.amazon.jsii.Kernel.get(this, "burstingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deleteAutoSnapshot = software.amazon.jsii.Kernel.get(this, "deleteAutoSnapshot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskCategory = software.amazon.jsii.Kernel.get(this, "diskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskName = software.amazon.jsii.Kernel.get(this, "diskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encrypted = software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kmsKeyId = software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiAttach = software.amazon.jsii.Kernel.get(this, "multiAttach", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.performanceLevel = software.amazon.jsii.Kernel.get(this, "performanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.provisionedIops = software.amazon.jsii.Kernel.get(this, "provisionedIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snapshotId = software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageSetId = software.amazon.jsii.Kernel.get(this, "storageSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageSetPartitionNumber = software.amazon.jsii.Kernel.get(this, "storageSetPartitionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosDisk.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.autoSnapshotPolicyId = builder.autoSnapshotPolicyId;
            this.burstingEnabled = builder.burstingEnabled;
            this.deleteAutoSnapshot = builder.deleteAutoSnapshot;
            this.description = builder.description;
            this.diskCategory = builder.diskCategory;
            this.diskName = builder.diskName;
            this.encrypted = builder.encrypted;
            this.kmsKeyId = builder.kmsKeyId;
            this.multiAttach = builder.multiAttach;
            this.performanceLevel = builder.performanceLevel;
            this.provisionedIops = builder.provisionedIops;
            this.resourceGroupId = builder.resourceGroupId;
            this.size = builder.size;
            this.snapshotId = builder.snapshotId;
            this.storageSetId = builder.storageSetId;
            this.storageSetPartitionNumber = builder.storageSetPartitionNumber;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosDisk.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getAutoSnapshotPolicyId() {
            return this.autoSnapshotPolicyId;
        }

        @Override
        public final java.lang.Object getBurstingEnabled() {
            return this.burstingEnabled;
        }

        @Override
        public final java.lang.Object getDeleteAutoSnapshot() {
            return this.deleteAutoSnapshot;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDiskCategory() {
            return this.diskCategory;
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
        public final java.lang.Object getMultiAttach() {
            return this.multiAttach;
        }

        @Override
        public final java.lang.Object getPerformanceLevel() {
            return this.performanceLevel;
        }

        @Override
        public final java.lang.Object getProvisionedIops() {
            return this.provisionedIops;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSize() {
            return this.size;
        }

        @Override
        public final java.lang.Object getSnapshotId() {
            return this.snapshotId;
        }

        @Override
        public final java.lang.Object getStorageSetId() {
            return this.storageSetId;
        }

        @Override
        public final java.lang.Object getStorageSetPartitionNumber() {
            return this.storageSetPartitionNumber;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosDisk.TagsProperty> getTags() {
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
            if (this.getBurstingEnabled() != null) {
                data.set("burstingEnabled", om.valueToTree(this.getBurstingEnabled()));
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
            if (this.getMultiAttach() != null) {
                data.set("multiAttach", om.valueToTree(this.getMultiAttach()));
            }
            if (this.getPerformanceLevel() != null) {
                data.set("performanceLevel", om.valueToTree(this.getPerformanceLevel()));
            }
            if (this.getProvisionedIops() != null) {
                data.set("provisionedIops", om.valueToTree(this.getProvisionedIops()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosDiskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDiskProps.Jsii$Proxy that = (RosDiskProps.Jsii$Proxy) o;

            if (!zoneId.equals(that.zoneId)) return false;
            if (this.autoSnapshotPolicyId != null ? !this.autoSnapshotPolicyId.equals(that.autoSnapshotPolicyId) : that.autoSnapshotPolicyId != null) return false;
            if (this.burstingEnabled != null ? !this.burstingEnabled.equals(that.burstingEnabled) : that.burstingEnabled != null) return false;
            if (this.deleteAutoSnapshot != null ? !this.deleteAutoSnapshot.equals(that.deleteAutoSnapshot) : that.deleteAutoSnapshot != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.diskCategory != null ? !this.diskCategory.equals(that.diskCategory) : that.diskCategory != null) return false;
            if (this.diskName != null ? !this.diskName.equals(that.diskName) : that.diskName != null) return false;
            if (this.encrypted != null ? !this.encrypted.equals(that.encrypted) : that.encrypted != null) return false;
            if (this.kmsKeyId != null ? !this.kmsKeyId.equals(that.kmsKeyId) : that.kmsKeyId != null) return false;
            if (this.multiAttach != null ? !this.multiAttach.equals(that.multiAttach) : that.multiAttach != null) return false;
            if (this.performanceLevel != null ? !this.performanceLevel.equals(that.performanceLevel) : that.performanceLevel != null) return false;
            if (this.provisionedIops != null ? !this.provisionedIops.equals(that.provisionedIops) : that.provisionedIops != null) return false;
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
            result = 31 * result + (this.burstingEnabled != null ? this.burstingEnabled.hashCode() : 0);
            result = 31 * result + (this.deleteAutoSnapshot != null ? this.deleteAutoSnapshot.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.diskCategory != null ? this.diskCategory.hashCode() : 0);
            result = 31 * result + (this.diskName != null ? this.diskName.hashCode() : 0);
            result = 31 * result + (this.encrypted != null ? this.encrypted.hashCode() : 0);
            result = 31 * result + (this.kmsKeyId != null ? this.kmsKeyId.hashCode() : 0);
            result = 31 * result + (this.multiAttach != null ? this.multiAttach.hashCode() : 0);
            result = 31 * result + (this.performanceLevel != null ? this.performanceLevel.hashCode() : 0);
            result = 31 * result + (this.provisionedIops != null ? this.provisionedIops.hashCode() : 0);
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
