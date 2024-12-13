package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>RosSnapshots</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshots
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:07.736Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.RosSnapshotsProps")
@software.amazon.jsii.Jsii.Proxy(RosSnapshotsProps.Jsii$Proxy.class)
public interface RosSnapshotsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFilters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKmsKeyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotLinkId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceDiskType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosSnapshots.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUsage() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSnapshotsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSnapshotsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSnapshotsProps> {
        java.lang.Object category;
        java.lang.Object diskId;
        java.lang.Object encrypted;
        java.lang.Object filters;
        java.lang.Object instanceId;
        java.lang.Object kmsKeyId;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;
        java.lang.Object snapshotIds;
        java.lang.Object snapshotLinkId;
        java.lang.Object snapshotName;
        java.lang.Object snapshotType;
        java.lang.Object sourceDiskType;
        java.lang.Object status;
        java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosSnapshots.TagsProperty> tags;
        java.lang.Object usage;

        /**
         * Sets the value of {@link RosSnapshotsProps#getCategory}
         * @param category the value to be set.
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getCategory}
         * @param category the value to be set.
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getDiskId}
         * @param diskId the value to be set.
         * @return {@code this}
         */
        public Builder diskId(java.lang.String diskId) {
            this.diskId = diskId;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getDiskId}
         * @param diskId the value to be set.
         * @return {@code this}
         */
        public Builder diskId(com.aliyun.ros.cdk.core.IResolvable diskId) {
            this.diskId = diskId;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getEncrypted}
         * @param encrypted the value to be set.
         * @return {@code this}
         */
        public Builder encrypted(java.lang.Boolean encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getEncrypted}
         * @param encrypted the value to be set.
         * @return {@code this}
         */
        public Builder encrypted(com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getFilters}
         * @param filters the value to be set.
         * @return {@code this}
         */
        public Builder filters(com.aliyun.ros.cdk.core.IResolvable filters) {
            this.filters = filters;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getFilters}
         * @param filters the value to be set.
         * @return {@code this}
         */
        public Builder filters(java.util.List<? extends java.lang.Object> filters) {
            this.filters = filters;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getKmsKeyId}
         * @param kmsKeyId the value to be set.
         * @return {@code this}
         */
        public Builder kmsKeyId(java.lang.String kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getKmsKeyId}
         * @param kmsKeyId the value to be set.
         * @return {@code this}
         */
        public Builder kmsKeyId(com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getSnapshotIds}
         * @param snapshotIds the value to be set.
         * @return {@code this}
         */
        public Builder snapshotIds(com.aliyun.ros.cdk.core.IResolvable snapshotIds) {
            this.snapshotIds = snapshotIds;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getSnapshotIds}
         * @param snapshotIds the value to be set.
         * @return {@code this}
         */
        public Builder snapshotIds(java.util.List<? extends java.lang.Object> snapshotIds) {
            this.snapshotIds = snapshotIds;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getSnapshotLinkId}
         * @param snapshotLinkId the value to be set.
         * @return {@code this}
         */
        public Builder snapshotLinkId(java.lang.String snapshotLinkId) {
            this.snapshotLinkId = snapshotLinkId;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getSnapshotLinkId}
         * @param snapshotLinkId the value to be set.
         * @return {@code this}
         */
        public Builder snapshotLinkId(com.aliyun.ros.cdk.core.IResolvable snapshotLinkId) {
            this.snapshotLinkId = snapshotLinkId;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getSnapshotName}
         * @param snapshotName the value to be set.
         * @return {@code this}
         */
        public Builder snapshotName(java.lang.String snapshotName) {
            this.snapshotName = snapshotName;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getSnapshotName}
         * @param snapshotName the value to be set.
         * @return {@code this}
         */
        public Builder snapshotName(com.aliyun.ros.cdk.core.IResolvable snapshotName) {
            this.snapshotName = snapshotName;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getSnapshotType}
         * @param snapshotType the value to be set.
         * @return {@code this}
         */
        public Builder snapshotType(java.lang.String snapshotType) {
            this.snapshotType = snapshotType;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getSnapshotType}
         * @param snapshotType the value to be set.
         * @return {@code this}
         */
        public Builder snapshotType(com.aliyun.ros.cdk.core.IResolvable snapshotType) {
            this.snapshotType = snapshotType;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getSourceDiskType}
         * @param sourceDiskType the value to be set.
         * @return {@code this}
         */
        public Builder sourceDiskType(java.lang.String sourceDiskType) {
            this.sourceDiskType = sourceDiskType;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getSourceDiskType}
         * @param sourceDiskType the value to be set.
         * @return {@code this}
         */
        public Builder sourceDiskType(com.aliyun.ros.cdk.core.IResolvable sourceDiskType) {
            this.sourceDiskType = sourceDiskType;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.datasource.RosSnapshots.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosSnapshots.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getUsage}
         * @param usage the value to be set.
         * @return {@code this}
         */
        public Builder usage(java.lang.String usage) {
            this.usage = usage;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotsProps#getUsage}
         * @param usage the value to be set.
         * @return {@code this}
         */
        public Builder usage(com.aliyun.ros.cdk.core.IResolvable usage) {
            this.usage = usage;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSnapshotsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSnapshotsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSnapshotsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSnapshotsProps {
        private final java.lang.Object category;
        private final java.lang.Object diskId;
        private final java.lang.Object encrypted;
        private final java.lang.Object filters;
        private final java.lang.Object instanceId;
        private final java.lang.Object kmsKeyId;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object snapshotIds;
        private final java.lang.Object snapshotLinkId;
        private final java.lang.Object snapshotName;
        private final java.lang.Object snapshotType;
        private final java.lang.Object sourceDiskType;
        private final java.lang.Object status;
        private final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosSnapshots.TagsProperty> tags;
        private final java.lang.Object usage;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskId = software.amazon.jsii.Kernel.get(this, "diskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encrypted = software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.filters = software.amazon.jsii.Kernel.get(this, "filters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kmsKeyId = software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snapshotIds = software.amazon.jsii.Kernel.get(this, "snapshotIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snapshotLinkId = software.amazon.jsii.Kernel.get(this, "snapshotLinkId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snapshotName = software.amazon.jsii.Kernel.get(this, "snapshotName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snapshotType = software.amazon.jsii.Kernel.get(this, "snapshotType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceDiskType = software.amazon.jsii.Kernel.get(this, "sourceDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.RosSnapshots.TagsProperty.class)));
            this.usage = software.amazon.jsii.Kernel.get(this, "usage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.category = builder.category;
            this.diskId = builder.diskId;
            this.encrypted = builder.encrypted;
            this.filters = builder.filters;
            this.instanceId = builder.instanceId;
            this.kmsKeyId = builder.kmsKeyId;
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupId = builder.resourceGroupId;
            this.snapshotIds = builder.snapshotIds;
            this.snapshotLinkId = builder.snapshotLinkId;
            this.snapshotName = builder.snapshotName;
            this.snapshotType = builder.snapshotType;
            this.sourceDiskType = builder.sourceDiskType;
            this.status = builder.status;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosSnapshots.TagsProperty>)builder.tags;
            this.usage = builder.usage;
        }

        @Override
        public final java.lang.Object getCategory() {
            return this.category;
        }

        @Override
        public final java.lang.Object getDiskId() {
            return this.diskId;
        }

        @Override
        public final java.lang.Object getEncrypted() {
            return this.encrypted;
        }

        @Override
        public final java.lang.Object getFilters() {
            return this.filters;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getKmsKeyId() {
            return this.kmsKeyId;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSnapshotIds() {
            return this.snapshotIds;
        }

        @Override
        public final java.lang.Object getSnapshotLinkId() {
            return this.snapshotLinkId;
        }

        @Override
        public final java.lang.Object getSnapshotName() {
            return this.snapshotName;
        }

        @Override
        public final java.lang.Object getSnapshotType() {
            return this.snapshotType;
        }

        @Override
        public final java.lang.Object getSourceDiskType() {
            return this.sourceDiskType;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosSnapshots.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getUsage() {
            return this.usage;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getCategory() != null) {
                data.set("category", om.valueToTree(this.getCategory()));
            }
            if (this.getDiskId() != null) {
                data.set("diskId", om.valueToTree(this.getDiskId()));
            }
            if (this.getEncrypted() != null) {
                data.set("encrypted", om.valueToTree(this.getEncrypted()));
            }
            if (this.getFilters() != null) {
                data.set("filters", om.valueToTree(this.getFilters()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getKmsKeyId() != null) {
                data.set("kmsKeyId", om.valueToTree(this.getKmsKeyId()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSnapshotIds() != null) {
                data.set("snapshotIds", om.valueToTree(this.getSnapshotIds()));
            }
            if (this.getSnapshotLinkId() != null) {
                data.set("snapshotLinkId", om.valueToTree(this.getSnapshotLinkId()));
            }
            if (this.getSnapshotName() != null) {
                data.set("snapshotName", om.valueToTree(this.getSnapshotName()));
            }
            if (this.getSnapshotType() != null) {
                data.set("snapshotType", om.valueToTree(this.getSnapshotType()));
            }
            if (this.getSourceDiskType() != null) {
                data.set("sourceDiskType", om.valueToTree(this.getSourceDiskType()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getUsage() != null) {
                data.set("usage", om.valueToTree(this.getUsage()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.RosSnapshotsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSnapshotsProps.Jsii$Proxy that = (RosSnapshotsProps.Jsii$Proxy) o;

            if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
            if (this.diskId != null ? !this.diskId.equals(that.diskId) : that.diskId != null) return false;
            if (this.encrypted != null ? !this.encrypted.equals(that.encrypted) : that.encrypted != null) return false;
            if (this.filters != null ? !this.filters.equals(that.filters) : that.filters != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.kmsKeyId != null ? !this.kmsKeyId.equals(that.kmsKeyId) : that.kmsKeyId != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.snapshotIds != null ? !this.snapshotIds.equals(that.snapshotIds) : that.snapshotIds != null) return false;
            if (this.snapshotLinkId != null ? !this.snapshotLinkId.equals(that.snapshotLinkId) : that.snapshotLinkId != null) return false;
            if (this.snapshotName != null ? !this.snapshotName.equals(that.snapshotName) : that.snapshotName != null) return false;
            if (this.snapshotType != null ? !this.snapshotType.equals(that.snapshotType) : that.snapshotType != null) return false;
            if (this.sourceDiskType != null ? !this.sourceDiskType.equals(that.sourceDiskType) : that.sourceDiskType != null) return false;
            if (this.status != null ? !this.status.equals(that.status) : that.status != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.usage != null ? this.usage.equals(that.usage) : that.usage == null;
        }

        @Override
        public final int hashCode() {
            int result = this.category != null ? this.category.hashCode() : 0;
            result = 31 * result + (this.diskId != null ? this.diskId.hashCode() : 0);
            result = 31 * result + (this.encrypted != null ? this.encrypted.hashCode() : 0);
            result = 31 * result + (this.filters != null ? this.filters.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.kmsKeyId != null ? this.kmsKeyId.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.snapshotIds != null ? this.snapshotIds.hashCode() : 0);
            result = 31 * result + (this.snapshotLinkId != null ? this.snapshotLinkId.hashCode() : 0);
            result = 31 * result + (this.snapshotName != null ? this.snapshotName.hashCode() : 0);
            result = 31 * result + (this.snapshotType != null ? this.snapshotType.hashCode() : 0);
            result = 31 * result + (this.sourceDiskType != null ? this.sourceDiskType.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.usage != null ? this.usage.hashCode() : 0);
            return result;
        }
    }
}
