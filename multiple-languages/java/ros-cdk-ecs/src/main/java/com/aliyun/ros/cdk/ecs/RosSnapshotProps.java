package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::Snapshot`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:41.354Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosSnapshotProps")
@software.amazon.jsii.Jsii.Proxy(RosSnapshotProps.Jsii$Proxy.class)
public interface RosSnapshotProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDiskId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstantAccess() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstantAccessRetentionDays() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosSnapshot.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSnapshotProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSnapshotProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSnapshotProps> {
        java.lang.Object diskId;
        java.lang.Object description;
        java.lang.Object instantAccess;
        java.lang.Object instantAccessRetentionDays;
        java.lang.Object snapshotName;
        java.util.List<com.aliyun.ros.cdk.ecs.RosSnapshot.TagsProperty> tags;
        java.lang.Object timeout;

        /**
         * Sets the value of {@link RosSnapshotProps#getDiskId}
         * @param diskId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder diskId(java.lang.String diskId) {
            this.diskId = diskId;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotProps#getDiskId}
         * @param diskId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder diskId(com.aliyun.ros.cdk.core.IResolvable diskId) {
            this.diskId = diskId;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotProps#getInstantAccess}
         * @param instantAccess the value to be set.
         * @return {@code this}
         */
        public Builder instantAccess(java.lang.Boolean instantAccess) {
            this.instantAccess = instantAccess;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotProps#getInstantAccess}
         * @param instantAccess the value to be set.
         * @return {@code this}
         */
        public Builder instantAccess(com.aliyun.ros.cdk.core.IResolvable instantAccess) {
            this.instantAccess = instantAccess;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotProps#getInstantAccessRetentionDays}
         * @param instantAccessRetentionDays the value to be set.
         * @return {@code this}
         */
        public Builder instantAccessRetentionDays(java.lang.Number instantAccessRetentionDays) {
            this.instantAccessRetentionDays = instantAccessRetentionDays;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotProps#getInstantAccessRetentionDays}
         * @param instantAccessRetentionDays the value to be set.
         * @return {@code this}
         */
        public Builder instantAccessRetentionDays(com.aliyun.ros.cdk.core.IResolvable instantAccessRetentionDays) {
            this.instantAccessRetentionDays = instantAccessRetentionDays;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotProps#getSnapshotName}
         * @param snapshotName the value to be set.
         * @return {@code this}
         */
        public Builder snapshotName(java.lang.String snapshotName) {
            this.snapshotName = snapshotName;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotProps#getSnapshotName}
         * @param snapshotName the value to be set.
         * @return {@code this}
         */
        public Builder snapshotName(com.aliyun.ros.cdk.core.IResolvable snapshotName) {
            this.snapshotName = snapshotName;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosSnapshot.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosSnapshot.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotProps#getTimeout}
         * @param timeout the value to be set.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RosSnapshotProps#getTimeout}
         * @param timeout the value to be set.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSnapshotProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSnapshotProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSnapshotProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSnapshotProps {
        private final java.lang.Object diskId;
        private final java.lang.Object description;
        private final java.lang.Object instantAccess;
        private final java.lang.Object instantAccessRetentionDays;
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosSnapshotProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSnapshotProps.Jsii$Proxy that = (RosSnapshotProps.Jsii$Proxy) o;

            if (!diskId.equals(that.diskId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.instantAccess != null ? !this.instantAccess.equals(that.instantAccess) : that.instantAccess != null) return false;
            if (this.instantAccessRetentionDays != null ? !this.instantAccessRetentionDays.equals(that.instantAccessRetentionDays) : that.instantAccessRetentionDays != null) return false;
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
            result = 31 * result + (this.snapshotName != null ? this.snapshotName.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
            return result;
        }
    }
}
