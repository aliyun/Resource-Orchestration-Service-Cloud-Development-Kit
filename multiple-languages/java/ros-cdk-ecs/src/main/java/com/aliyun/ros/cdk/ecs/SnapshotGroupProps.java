package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>SnapshotGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshotgroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:07.517Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SnapshotGroupProps")
@software.amazon.jsii.Jsii.Proxy(SnapshotGroupProps.Jsii$Proxy.class)
public interface SnapshotGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property description: The description of the snapshot-consistent group.
     * <p>
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property diskIds: The IDs of cloud disk for which you want to create snapshots.
     * <p>
     * You can specify multiple cloud disk IDs across instances within the same zone. The length of the list ranges from 1 to 16. A single snapshot-consistent group can contain snapshots of up to 16 cloud disks whose total disk size does not exceed 32 TiB.
     * Take note of the following items:
     * You cannot specify both DiskIds and ExcludeDiskIdin the same request.
     * If InstanceId is set, you can use DiskIds to specify only cloud disks attached to the instance specified by InstanceId, and you cannot use DiskIds to specify cloud disks attached to multiple instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskIds() {
        return null;
    }

    /**
     * Property excludeDiskIds: The IDs of cloud disk for which you do not want to create snapshots.
     * <p>
     * If this parameter is specified, the created snapshot-consistent group does not contain snapshots of the cloud disk. The length of the list ranges from 1 to 16.
     * This parameter is empty by default, which indicates that snapshots are created for all the disks of the instance.
     * Note You cannot specify ExcludeDiskIds and DiskIds in the same request.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExcludeDiskIds() {
        return null;
    }

    /**
     * Property instanceId: The instance ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     * Property name: The name of the snapshot-consistent group.
     * <p>
     * The name must be 2 to 128 characters in length. The name can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). It must start with a letter and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the snapshot-consistent group belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to snapshot-consistent group.
     * <p>
     * Max support 20 tags to add during create snapshot-consistent group. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosSnapshotGroup.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SnapshotGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SnapshotGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SnapshotGroupProps> {
        java.lang.Object description;
        java.lang.Object diskIds;
        java.lang.Object excludeDiskIds;
        java.lang.Object instanceId;
        java.lang.Object name;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.ecs.RosSnapshotGroup.TagsProperty> tags;

        /**
         * Sets the value of {@link SnapshotGroupProps#getDescription}
         * @param description Property description: The description of the snapshot-consistent group.
         *                    The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotGroupProps#getDescription}
         * @param description Property description: The description of the snapshot-consistent group.
         *                    The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotGroupProps#getDiskIds}
         * @param diskIds Property diskIds: The IDs of cloud disk for which you want to create snapshots.
         *                You can specify multiple cloud disk IDs across instances within the same zone. The length of the list ranges from 1 to 16. A single snapshot-consistent group can contain snapshots of up to 16 cloud disks whose total disk size does not exceed 32 TiB.
         *                Take note of the following items:
         *                You cannot specify both DiskIds and ExcludeDiskIdin the same request.
         *                If InstanceId is set, you can use DiskIds to specify only cloud disks attached to the instance specified by InstanceId, and you cannot use DiskIds to specify cloud disks attached to multiple instances.
         * @return {@code this}
         */
        public Builder diskIds(com.aliyun.ros.cdk.core.IResolvable diskIds) {
            this.diskIds = diskIds;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotGroupProps#getDiskIds}
         * @param diskIds Property diskIds: The IDs of cloud disk for which you want to create snapshots.
         *                You can specify multiple cloud disk IDs across instances within the same zone. The length of the list ranges from 1 to 16. A single snapshot-consistent group can contain snapshots of up to 16 cloud disks whose total disk size does not exceed 32 TiB.
         *                Take note of the following items:
         *                You cannot specify both DiskIds and ExcludeDiskIdin the same request.
         *                If InstanceId is set, you can use DiskIds to specify only cloud disks attached to the instance specified by InstanceId, and you cannot use DiskIds to specify cloud disks attached to multiple instances.
         * @return {@code this}
         */
        public Builder diskIds(java.util.List<? extends java.lang.Object> diskIds) {
            this.diskIds = diskIds;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotGroupProps#getExcludeDiskIds}
         * @param excludeDiskIds Property excludeDiskIds: The IDs of cloud disk for which you do not want to create snapshots.
         *                       If this parameter is specified, the created snapshot-consistent group does not contain snapshots of the cloud disk. The length of the list ranges from 1 to 16.
         *                       This parameter is empty by default, which indicates that snapshots are created for all the disks of the instance.
         *                       Note You cannot specify ExcludeDiskIds and DiskIds in the same request.
         * @return {@code this}
         */
        public Builder excludeDiskIds(com.aliyun.ros.cdk.core.IResolvable excludeDiskIds) {
            this.excludeDiskIds = excludeDiskIds;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotGroupProps#getExcludeDiskIds}
         * @param excludeDiskIds Property excludeDiskIds: The IDs of cloud disk for which you do not want to create snapshots.
         *                       If this parameter is specified, the created snapshot-consistent group does not contain snapshots of the cloud disk. The length of the list ranges from 1 to 16.
         *                       This parameter is empty by default, which indicates that snapshots are created for all the disks of the instance.
         *                       Note You cannot specify ExcludeDiskIds and DiskIds in the same request.
         * @return {@code this}
         */
        public Builder excludeDiskIds(java.util.List<? extends java.lang.Object> excludeDiskIds) {
            this.excludeDiskIds = excludeDiskIds;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotGroupProps#getInstanceId}
         * @param instanceId Property instanceId: The instance ID.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotGroupProps#getInstanceId}
         * @param instanceId Property instanceId: The instance ID.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotGroupProps#getName}
         * @param name Property name: The name of the snapshot-consistent group.
         *             The name must be 2 to 128 characters in length. The name can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). It must start with a letter and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotGroupProps#getName}
         * @param name Property name: The name of the snapshot-consistent group.
         *             The name must be 2 to 128 characters in length. The name can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). It must start with a letter and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotGroupProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the snapshot-consistent group belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotGroupProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the snapshot-consistent group belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotGroupProps#getTags}
         * @param tags Property tags: Tags to attach to snapshot-consistent group.
         *             Max support 20 tags to add during create snapshot-consistent group. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosSnapshotGroup.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosSnapshotGroup.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SnapshotGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SnapshotGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SnapshotGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SnapshotGroupProps {
        private final java.lang.Object description;
        private final java.lang.Object diskIds;
        private final java.lang.Object excludeDiskIds;
        private final java.lang.Object instanceId;
        private final java.lang.Object name;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosSnapshotGroup.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskIds = software.amazon.jsii.Kernel.get(this, "diskIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.excludeDiskIds = software.amazon.jsii.Kernel.get(this, "excludeDiskIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosSnapshotGroup.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = builder.description;
            this.diskIds = builder.diskIds;
            this.excludeDiskIds = builder.excludeDiskIds;
            this.instanceId = builder.instanceId;
            this.name = builder.name;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosSnapshotGroup.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDiskIds() {
            return this.diskIds;
        }

        @Override
        public final java.lang.Object getExcludeDiskIds() {
            return this.excludeDiskIds;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosSnapshotGroup.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDiskIds() != null) {
                data.set("diskIds", om.valueToTree(this.getDiskIds()));
            }
            if (this.getExcludeDiskIds() != null) {
                data.set("excludeDiskIds", om.valueToTree(this.getExcludeDiskIds()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.SnapshotGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SnapshotGroupProps.Jsii$Proxy that = (SnapshotGroupProps.Jsii$Proxy) o;

            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.diskIds != null ? !this.diskIds.equals(that.diskIds) : that.diskIds != null) return false;
            if (this.excludeDiskIds != null ? !this.excludeDiskIds.equals(that.excludeDiskIds) : that.excludeDiskIds != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description != null ? this.description.hashCode() : 0;
            result = 31 * result + (this.diskIds != null ? this.diskIds.hashCode() : 0);
            result = 31 * result + (this.excludeDiskIds != null ? this.excludeDiskIds.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
