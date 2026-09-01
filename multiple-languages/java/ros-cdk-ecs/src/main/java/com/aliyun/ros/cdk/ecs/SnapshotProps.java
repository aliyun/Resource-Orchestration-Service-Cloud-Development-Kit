package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>Snapshot</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshot
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T08:37:38.663Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SnapshotProps")
@software.amazon.jsii.Jsii.Proxy(SnapshotProps.Jsii$Proxy.class)
public interface SnapshotProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property diskId: Indicates the ID of the specified disk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDiskId();

    /**
     * Property description: The snapshot description must be 2 to 256 characters in length and cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
     * <p>
     * This parameter is empty by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property instantAccess: Specifies whether to enable the Instant Access feature.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>true: Enables the Instant Access feature. This feature can be enabled only for
     * snapshots of ESSD cloud disks.</li>
     * <li>false: Disables the Instant Access feature. A standard snapshot is created.
     * Default value: false.</li>
     * </ul>
     * <p>
     * <blockquote>
     * <p>
     * This parameter is deprecated. standard snapshots for ESSD cloud disks now
     * include the <a href="">Instant Access</a> feature by default at no additional cost.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstantAccess() {
        return null;
    }

    /**
     * Property instantAccessRetentionDays: The retention period for the Instant Access feature, in days.
     * <p>
     * The snapshot is
     * automatically deleted when this retention period expires. This parameter takes
     * effect only when <code>InstantAccess</code> is set to <code>true</code>. Valid values: 1 to 65,535.
     * Defaults to the value of <code>RetentionDays</code>.
     * <p>
     * <blockquote>
     * <p>
     * This parameter is deprecated. standard snapshots for ESSD cloud disks now
     * include the <a href="">Instant Access</a> feature by default at no additional cost.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstantAccessRetentionDays() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property retentionDays: The retention period of the snapshot, in days.
     * <p>
     * Valid values: 1 to 65,536. The
     * snapshot is automatically deleted when the retention period expires.
     * If this parameter is not specified, the snapshot is retained indefinitely.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRetentionDays() {
        return null;
    }

    /**
     * Property snapshotName: The snapshot name must be 2 to 128 characters long.
     * <p>
     * It must start with a letter
     * or a Chinese character and can contain letters, digits, colons (:), underscores
     * (_), periods (.), and hyphens (-).
     * <p>
     * <blockquote>
     * <p>
     * The name cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>. To avoid conflicts with
     * auto snapshot names, the name cannot start with <code>auto</code>.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotName() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosSnapshot.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property timeout: The number of minutes to wait for create snapshot.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SnapshotProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SnapshotProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SnapshotProps> {
        java.lang.Object diskId;
        java.lang.Object description;
        java.lang.Object instantAccess;
        java.lang.Object instantAccessRetentionDays;
        java.lang.Object resourceGroupId;
        java.lang.Object retentionDays;
        java.lang.Object snapshotName;
        java.util.List<com.aliyun.ros.cdk.ecs.RosSnapshot.TagsProperty> tags;
        java.lang.Object timeout;

        /**
         * Sets the value of {@link SnapshotProps#getDiskId}
         * @param diskId Property diskId: Indicates the ID of the specified disk. This parameter is required.
         * @return {@code this}
         */
        public Builder diskId(java.lang.String diskId) {
            this.diskId = diskId;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getDiskId}
         * @param diskId Property diskId: Indicates the ID of the specified disk. This parameter is required.
         * @return {@code this}
         */
        public Builder diskId(com.aliyun.ros.cdk.core.IResolvable diskId) {
            this.diskId = diskId;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getDescription}
         * @param description Property description: The snapshot description must be 2 to 256 characters in length and cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
         *                    This parameter is empty by default.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getDescription}
         * @param description Property description: The snapshot description must be 2 to 256 characters in length and cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
         *                    This parameter is empty by default.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getInstantAccess}
         * @param instantAccess Property instantAccess: Specifies whether to enable the Instant Access feature.
         *                      Valid values:
         *                      <p>
         *                      <ul>
         *                      <li>true: Enables the Instant Access feature. This feature can be enabled only for
         *                      snapshots of ESSD cloud disks.</li>
         *                      <li>false: Disables the Instant Access feature. A standard snapshot is created.
         *                      Default value: false.</li>
         *                      </ul>
         *                      <p>
         *                      <blockquote>
         *                      <p>
         *                      This parameter is deprecated. standard snapshots for ESSD cloud disks now
         *                      include the <a href="">Instant Access</a> feature by default at no additional cost.
         *                      <p>
         *                      </blockquote>
         * @return {@code this}
         */
        public Builder instantAccess(java.lang.Boolean instantAccess) {
            this.instantAccess = instantAccess;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getInstantAccess}
         * @param instantAccess Property instantAccess: Specifies whether to enable the Instant Access feature.
         *                      Valid values:
         *                      <p>
         *                      <ul>
         *                      <li>true: Enables the Instant Access feature. This feature can be enabled only for
         *                      snapshots of ESSD cloud disks.</li>
         *                      <li>false: Disables the Instant Access feature. A standard snapshot is created.
         *                      Default value: false.</li>
         *                      </ul>
         *                      <p>
         *                      <blockquote>
         *                      <p>
         *                      This parameter is deprecated. standard snapshots for ESSD cloud disks now
         *                      include the <a href="">Instant Access</a> feature by default at no additional cost.
         *                      <p>
         *                      </blockquote>
         * @return {@code this}
         */
        public Builder instantAccess(com.aliyun.ros.cdk.core.IResolvable instantAccess) {
            this.instantAccess = instantAccess;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getInstantAccessRetentionDays}
         * @param instantAccessRetentionDays Property instantAccessRetentionDays: The retention period for the Instant Access feature, in days.
         *                                   The snapshot is
         *                                   automatically deleted when this retention period expires. This parameter takes
         *                                   effect only when <code>InstantAccess</code> is set to <code>true</code>. Valid values: 1 to 65,535.
         *                                   Defaults to the value of <code>RetentionDays</code>.
         *                                   <p>
         *                                   <blockquote>
         *                                   <p>
         *                                   This parameter is deprecated. standard snapshots for ESSD cloud disks now
         *                                   include the <a href="">Instant Access</a> feature by default at no additional cost.
         *                                   <p>
         *                                   </blockquote>
         * @return {@code this}
         */
        public Builder instantAccessRetentionDays(java.lang.Number instantAccessRetentionDays) {
            this.instantAccessRetentionDays = instantAccessRetentionDays;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getInstantAccessRetentionDays}
         * @param instantAccessRetentionDays Property instantAccessRetentionDays: The retention period for the Instant Access feature, in days.
         *                                   The snapshot is
         *                                   automatically deleted when this retention period expires. This parameter takes
         *                                   effect only when <code>InstantAccess</code> is set to <code>true</code>. Valid values: 1 to 65,535.
         *                                   Defaults to the value of <code>RetentionDays</code>.
         *                                   <p>
         *                                   <blockquote>
         *                                   <p>
         *                                   This parameter is deprecated. standard snapshots for ESSD cloud disks now
         *                                   include the <a href="">Instant Access</a> feature by default at no additional cost.
         *                                   <p>
         *                                   </blockquote>
         * @return {@code this}
         */
        public Builder instantAccessRetentionDays(com.aliyun.ros.cdk.core.IResolvable instantAccessRetentionDays) {
            this.instantAccessRetentionDays = instantAccessRetentionDays;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getRetentionDays}
         * @param retentionDays Property retentionDays: The retention period of the snapshot, in days.
         *                      Valid values: 1 to 65,536. The
         *                      snapshot is automatically deleted when the retention period expires.
         *                      If this parameter is not specified, the snapshot is retained indefinitely.
         * @return {@code this}
         */
        public Builder retentionDays(java.lang.Number retentionDays) {
            this.retentionDays = retentionDays;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getRetentionDays}
         * @param retentionDays Property retentionDays: The retention period of the snapshot, in days.
         *                      Valid values: 1 to 65,536. The
         *                      snapshot is automatically deleted when the retention period expires.
         *                      If this parameter is not specified, the snapshot is retained indefinitely.
         * @return {@code this}
         */
        public Builder retentionDays(com.aliyun.ros.cdk.core.IResolvable retentionDays) {
            this.retentionDays = retentionDays;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getSnapshotName}
         * @param snapshotName Property snapshotName: The snapshot name must be 2 to 128 characters long.
         *                     It must start with a letter
         *                     or a Chinese character and can contain letters, digits, colons (:), underscores
         *                     (_), periods (.), and hyphens (-).
         *                     <p>
         *                     <blockquote>
         *                     <p>
         *                     The name cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>. To avoid conflicts with
         *                     auto snapshot names, the name cannot start with <code>auto</code>.
         *                     <p>
         *                     </blockquote>
         * @return {@code this}
         */
        public Builder snapshotName(java.lang.String snapshotName) {
            this.snapshotName = snapshotName;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getSnapshotName}
         * @param snapshotName Property snapshotName: The snapshot name must be 2 to 128 characters long.
         *                     It must start with a letter
         *                     or a Chinese character and can contain letters, digits, colons (:), underscores
         *                     (_), periods (.), and hyphens (-).
         *                     <p>
         *                     <blockquote>
         *                     <p>
         *                     The name cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>. To avoid conflicts with
         *                     auto snapshot names, the name cannot start with <code>auto</code>.
         *                     <p>
         *                     </blockquote>
         * @return {@code this}
         */
        public Builder snapshotName(com.aliyun.ros.cdk.core.IResolvable snapshotName) {
            this.snapshotName = snapshotName;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosSnapshot.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosSnapshot.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getTimeout}
         * @param timeout Property timeout: The number of minutes to wait for create snapshot.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getTimeout}
         * @param timeout Property timeout: The number of minutes to wait for create snapshot.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SnapshotProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SnapshotProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SnapshotProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SnapshotProps {
        private final java.lang.Object diskId;
        private final java.lang.Object description;
        private final java.lang.Object instantAccess;
        private final java.lang.Object instantAccessRetentionDays;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object retentionDays;
        private final java.lang.Object snapshotName;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosSnapshot.TagsProperty> tags;
        private final java.lang.Object timeout;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.diskId = software.amazon.jsii.Kernel.get(this, "diskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instantAccess = software.amazon.jsii.Kernel.get(this, "instantAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instantAccessRetentionDays = software.amazon.jsii.Kernel.get(this, "instantAccessRetentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.retentionDays = software.amazon.jsii.Kernel.get(this, "retentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snapshotName = software.amazon.jsii.Kernel.get(this, "snapshotName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosSnapshot.TagsProperty.class)));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.diskId = java.util.Objects.requireNonNull(builder.diskId, "diskId is required");
            this.description = builder.description;
            this.instantAccess = builder.instantAccess;
            this.instantAccessRetentionDays = builder.instantAccessRetentionDays;
            this.resourceGroupId = builder.resourceGroupId;
            this.retentionDays = builder.retentionDays;
            this.snapshotName = builder.snapshotName;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosSnapshot.TagsProperty>)builder.tags;
            this.timeout = builder.timeout;
        }

        @Override
        public final java.lang.Object getDiskId() {
            return this.diskId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getInstantAccess() {
            return this.instantAccess;
        }

        @Override
        public final java.lang.Object getInstantAccessRetentionDays() {
            return this.instantAccessRetentionDays;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRetentionDays() {
            return this.retentionDays;
        }

        @Override
        public final java.lang.Object getSnapshotName() {
            return this.snapshotName;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosSnapshot.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTimeout() {
            return this.timeout;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("diskId", om.valueToTree(this.getDiskId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getInstantAccess() != null) {
                data.set("instantAccess", om.valueToTree(this.getInstantAccess()));
            }
            if (this.getInstantAccessRetentionDays() != null) {
                data.set("instantAccessRetentionDays", om.valueToTree(this.getInstantAccessRetentionDays()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRetentionDays() != null) {
                data.set("retentionDays", om.valueToTree(this.getRetentionDays()));
            }
            if (this.getSnapshotName() != null) {
                data.set("snapshotName", om.valueToTree(this.getSnapshotName()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTimeout() != null) {
                data.set("timeout", om.valueToTree(this.getTimeout()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.SnapshotProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SnapshotProps.Jsii$Proxy that = (SnapshotProps.Jsii$Proxy) o;

            if (!diskId.equals(that.diskId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.instantAccess != null ? !this.instantAccess.equals(that.instantAccess) : that.instantAccess != null) return false;
            if (this.instantAccessRetentionDays != null ? !this.instantAccessRetentionDays.equals(that.instantAccessRetentionDays) : that.instantAccessRetentionDays != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.retentionDays != null ? !this.retentionDays.equals(that.retentionDays) : that.retentionDays != null) return false;
            if (this.snapshotName != null ? !this.snapshotName.equals(that.snapshotName) : that.snapshotName != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.timeout != null ? this.timeout.equals(that.timeout) : that.timeout == null;
        }

        @Override
        public final int hashCode() {
            int result = this.diskId.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.instantAccess != null ? this.instantAccess.hashCode() : 0);
            result = 31 * result + (this.instantAccessRetentionDays != null ? this.instantAccessRetentionDays.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.retentionDays != null ? this.retentionDays.hashCode() : 0);
            result = 31 * result + (this.snapshotName != null ? this.snapshotName.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
            return result;
        }
    }
}
