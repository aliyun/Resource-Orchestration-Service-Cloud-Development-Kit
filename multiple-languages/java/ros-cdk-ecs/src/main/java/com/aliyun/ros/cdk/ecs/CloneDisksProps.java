package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>CloneDisks</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-clonedisks
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:48.503Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.CloneDisksProps")
@software.amazon.jsii.Jsii.Proxy(CloneDisksProps.Jsii$Proxy.class)
public interface CloneDisksProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property diskCategory: The category of the disk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDiskCategory();

    /**
     * Property multiAttach: Whether to enable multi-attach for the disk.
     * <p>
     * Valid values: Enabled, Disabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMultiAttach();

    /**
     * Property size: The size of the disk in GiB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSize();

    /**
     * Property sourceDiskId: The ID of the source disk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceDiskId();

    /**
     * Property burstingEnabled: Whether to enable bursting for the disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBurstingEnabled() {
        return null;
    }

    /**
     * Property diskName: The name of the disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskName() {
        return null;
    }

    /**
     * Property encrypted: Whether to encrypt the disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
        return null;
    }

    /**
     * Property kmsKeyId: The ID of the KMS key used to encrypt the disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKmsKeyId() {
        return null;
    }

    /**
     * Property performanceLevel: The performance level of the disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPerformanceLevel() {
        return null;
    }

    /**
     * Property provisionedIops: The provisioned IOPS for the disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProvisionedIops() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to disk.
     * <p>
     * Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosCloneDisks.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CloneDisksProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CloneDisksProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CloneDisksProps> {
        java.lang.Object diskCategory;
        java.lang.Object multiAttach;
        java.lang.Object size;
        java.lang.Object sourceDiskId;
        java.lang.Object burstingEnabled;
        java.lang.Object diskName;
        java.lang.Object encrypted;
        java.lang.Object kmsKeyId;
        java.lang.Object performanceLevel;
        java.lang.Object provisionedIops;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.ecs.RosCloneDisks.TagsProperty> tags;

        /**
         * Sets the value of {@link CloneDisksProps#getDiskCategory}
         * @param diskCategory Property diskCategory: The category of the disk. This parameter is required.
         * @return {@code this}
         */
        public Builder diskCategory(java.lang.String diskCategory) {
            this.diskCategory = diskCategory;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getDiskCategory}
         * @param diskCategory Property diskCategory: The category of the disk. This parameter is required.
         * @return {@code this}
         */
        public Builder diskCategory(com.aliyun.ros.cdk.core.IResolvable diskCategory) {
            this.diskCategory = diskCategory;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getMultiAttach}
         * @param multiAttach Property multiAttach: Whether to enable multi-attach for the disk. This parameter is required.
         *                    Valid values: Enabled, Disabled.
         * @return {@code this}
         */
        public Builder multiAttach(java.lang.String multiAttach) {
            this.multiAttach = multiAttach;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getMultiAttach}
         * @param multiAttach Property multiAttach: Whether to enable multi-attach for the disk. This parameter is required.
         *                    Valid values: Enabled, Disabled.
         * @return {@code this}
         */
        public Builder multiAttach(com.aliyun.ros.cdk.core.IResolvable multiAttach) {
            this.multiAttach = multiAttach;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getSize}
         * @param size Property size: The size of the disk in GiB. This parameter is required.
         * @return {@code this}
         */
        public Builder size(java.lang.Number size) {
            this.size = size;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getSize}
         * @param size Property size: The size of the disk in GiB. This parameter is required.
         * @return {@code this}
         */
        public Builder size(com.aliyun.ros.cdk.core.IResolvable size) {
            this.size = size;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getSourceDiskId}
         * @param sourceDiskId Property sourceDiskId: The ID of the source disk. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceDiskId(java.lang.String sourceDiskId) {
            this.sourceDiskId = sourceDiskId;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getSourceDiskId}
         * @param sourceDiskId Property sourceDiskId: The ID of the source disk. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceDiskId(com.aliyun.ros.cdk.core.IResolvable sourceDiskId) {
            this.sourceDiskId = sourceDiskId;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getBurstingEnabled}
         * @param burstingEnabled Property burstingEnabled: Whether to enable bursting for the disk.
         * @return {@code this}
         */
        public Builder burstingEnabled(java.lang.Boolean burstingEnabled) {
            this.burstingEnabled = burstingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getBurstingEnabled}
         * @param burstingEnabled Property burstingEnabled: Whether to enable bursting for the disk.
         * @return {@code this}
         */
        public Builder burstingEnabled(com.aliyun.ros.cdk.core.IResolvable burstingEnabled) {
            this.burstingEnabled = burstingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getDiskName}
         * @param diskName Property diskName: The name of the disk.
         * @return {@code this}
         */
        public Builder diskName(java.lang.String diskName) {
            this.diskName = diskName;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getDiskName}
         * @param diskName Property diskName: The name of the disk.
         * @return {@code this}
         */
        public Builder diskName(com.aliyun.ros.cdk.core.IResolvable diskName) {
            this.diskName = diskName;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getEncrypted}
         * @param encrypted Property encrypted: Whether to encrypt the disk.
         * @return {@code this}
         */
        public Builder encrypted(java.lang.Boolean encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getEncrypted}
         * @param encrypted Property encrypted: Whether to encrypt the disk.
         * @return {@code this}
         */
        public Builder encrypted(com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getKmsKeyId}
         * @param kmsKeyId Property kmsKeyId: The ID of the KMS key used to encrypt the disk.
         * @return {@code this}
         */
        public Builder kmsKeyId(java.lang.String kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getKmsKeyId}
         * @param kmsKeyId Property kmsKeyId: The ID of the KMS key used to encrypt the disk.
         * @return {@code this}
         */
        public Builder kmsKeyId(com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getPerformanceLevel}
         * @param performanceLevel Property performanceLevel: The performance level of the disk.
         * @return {@code this}
         */
        public Builder performanceLevel(java.lang.String performanceLevel) {
            this.performanceLevel = performanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getPerformanceLevel}
         * @param performanceLevel Property performanceLevel: The performance level of the disk.
         * @return {@code this}
         */
        public Builder performanceLevel(com.aliyun.ros.cdk.core.IResolvable performanceLevel) {
            this.performanceLevel = performanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getProvisionedIops}
         * @param provisionedIops Property provisionedIops: The provisioned IOPS for the disk.
         * @return {@code this}
         */
        public Builder provisionedIops(java.lang.Number provisionedIops) {
            this.provisionedIops = provisionedIops;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getProvisionedIops}
         * @param provisionedIops Property provisionedIops: The provisioned IOPS for the disk.
         * @return {@code this}
         */
        public Builder provisionedIops(com.aliyun.ros.cdk.core.IResolvable provisionedIops) {
            this.provisionedIops = provisionedIops;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link CloneDisksProps#getTags}
         * @param tags Property tags: Tags to attach to disk.
         *             Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosCloneDisks.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosCloneDisks.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CloneDisksProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CloneDisksProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CloneDisksProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CloneDisksProps {
        private final java.lang.Object diskCategory;
        private final java.lang.Object multiAttach;
        private final java.lang.Object size;
        private final java.lang.Object sourceDiskId;
        private final java.lang.Object burstingEnabled;
        private final java.lang.Object diskName;
        private final java.lang.Object encrypted;
        private final java.lang.Object kmsKeyId;
        private final java.lang.Object performanceLevel;
        private final java.lang.Object provisionedIops;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosCloneDisks.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.diskCategory = software.amazon.jsii.Kernel.get(this, "diskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiAttach = software.amazon.jsii.Kernel.get(this, "multiAttach", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceDiskId = software.amazon.jsii.Kernel.get(this, "sourceDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.burstingEnabled = software.amazon.jsii.Kernel.get(this, "burstingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskName = software.amazon.jsii.Kernel.get(this, "diskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encrypted = software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kmsKeyId = software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.performanceLevel = software.amazon.jsii.Kernel.get(this, "performanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.provisionedIops = software.amazon.jsii.Kernel.get(this, "provisionedIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosCloneDisks.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.diskCategory = java.util.Objects.requireNonNull(builder.diskCategory, "diskCategory is required");
            this.multiAttach = java.util.Objects.requireNonNull(builder.multiAttach, "multiAttach is required");
            this.size = java.util.Objects.requireNonNull(builder.size, "size is required");
            this.sourceDiskId = java.util.Objects.requireNonNull(builder.sourceDiskId, "sourceDiskId is required");
            this.burstingEnabled = builder.burstingEnabled;
            this.diskName = builder.diskName;
            this.encrypted = builder.encrypted;
            this.kmsKeyId = builder.kmsKeyId;
            this.performanceLevel = builder.performanceLevel;
            this.provisionedIops = builder.provisionedIops;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosCloneDisks.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getDiskCategory() {
            return this.diskCategory;
        }

        @Override
        public final java.lang.Object getMultiAttach() {
            return this.multiAttach;
        }

        @Override
        public final java.lang.Object getSize() {
            return this.size;
        }

        @Override
        public final java.lang.Object getSourceDiskId() {
            return this.sourceDiskId;
        }

        @Override
        public final java.lang.Object getBurstingEnabled() {
            return this.burstingEnabled;
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
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosCloneDisks.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("diskCategory", om.valueToTree(this.getDiskCategory()));
            data.set("multiAttach", om.valueToTree(this.getMultiAttach()));
            data.set("size", om.valueToTree(this.getSize()));
            data.set("sourceDiskId", om.valueToTree(this.getSourceDiskId()));
            if (this.getBurstingEnabled() != null) {
                data.set("burstingEnabled", om.valueToTree(this.getBurstingEnabled()));
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
            if (this.getProvisionedIops() != null) {
                data.set("provisionedIops", om.valueToTree(this.getProvisionedIops()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.CloneDisksProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CloneDisksProps.Jsii$Proxy that = (CloneDisksProps.Jsii$Proxy) o;

            if (!diskCategory.equals(that.diskCategory)) return false;
            if (!multiAttach.equals(that.multiAttach)) return false;
            if (!size.equals(that.size)) return false;
            if (!sourceDiskId.equals(that.sourceDiskId)) return false;
            if (this.burstingEnabled != null ? !this.burstingEnabled.equals(that.burstingEnabled) : that.burstingEnabled != null) return false;
            if (this.diskName != null ? !this.diskName.equals(that.diskName) : that.diskName != null) return false;
            if (this.encrypted != null ? !this.encrypted.equals(that.encrypted) : that.encrypted != null) return false;
            if (this.kmsKeyId != null ? !this.kmsKeyId.equals(that.kmsKeyId) : that.kmsKeyId != null) return false;
            if (this.performanceLevel != null ? !this.performanceLevel.equals(that.performanceLevel) : that.performanceLevel != null) return false;
            if (this.provisionedIops != null ? !this.provisionedIops.equals(that.provisionedIops) : that.provisionedIops != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.diskCategory.hashCode();
            result = 31 * result + (this.multiAttach.hashCode());
            result = 31 * result + (this.size.hashCode());
            result = 31 * result + (this.sourceDiskId.hashCode());
            result = 31 * result + (this.burstingEnabled != null ? this.burstingEnabled.hashCode() : 0);
            result = 31 * result + (this.diskName != null ? this.diskName.hashCode() : 0);
            result = 31 * result + (this.encrypted != null ? this.encrypted.hashCode() : 0);
            result = 31 * result + (this.kmsKeyId != null ? this.kmsKeyId.hashCode() : 0);
            result = 31 * result + (this.performanceLevel != null ? this.performanceLevel.hashCode() : 0);
            result = 31 * result + (this.provisionedIops != null ? this.provisionedIops.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
