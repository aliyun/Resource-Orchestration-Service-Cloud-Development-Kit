package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>RosAutoSnapshotPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autosnapshotpolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:09.838Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosAutoSnapshotPolicyProps")
@software.amazon.jsii.Jsii.Proxy(RosAutoSnapshotPolicyProps.Jsii$Proxy.class)
public interface RosAutoSnapshotPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRepeatWeekdays();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRetentionDays();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTimePoints();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoSnapshotPolicyName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAutoSnapshotPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAutoSnapshotPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAutoSnapshotPolicyProps> {
        java.lang.Object repeatWeekdays;
        java.lang.Object retentionDays;
        java.lang.Object timePoints;
        java.lang.Object autoSnapshotPolicyName;
        java.lang.Object diskIds;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.TagsProperty> tags;

        /**
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getRepeatWeekdays}
         * @param repeatWeekdays the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder repeatWeekdays(com.aliyun.ros.cdk.core.IResolvable repeatWeekdays) {
            this.repeatWeekdays = repeatWeekdays;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getRepeatWeekdays}
         * @param repeatWeekdays the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder repeatWeekdays(java.util.List<? extends java.lang.Object> repeatWeekdays) {
            this.repeatWeekdays = repeatWeekdays;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getRetentionDays}
         * @param retentionDays the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder retentionDays(java.lang.Number retentionDays) {
            this.retentionDays = retentionDays;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getRetentionDays}
         * @param retentionDays the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder retentionDays(com.aliyun.ros.cdk.core.IResolvable retentionDays) {
            this.retentionDays = retentionDays;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getTimePoints}
         * @param timePoints the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder timePoints(java.util.List<? extends java.lang.Object> timePoints) {
            this.timePoints = timePoints;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getTimePoints}
         * @param timePoints the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder timePoints(com.aliyun.ros.cdk.core.IResolvable timePoints) {
            this.timePoints = timePoints;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getAutoSnapshotPolicyName}
         * @param autoSnapshotPolicyName the value to be set.
         * @return {@code this}
         */
        public Builder autoSnapshotPolicyName(java.lang.String autoSnapshotPolicyName) {
            this.autoSnapshotPolicyName = autoSnapshotPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getAutoSnapshotPolicyName}
         * @param autoSnapshotPolicyName the value to be set.
         * @return {@code this}
         */
        public Builder autoSnapshotPolicyName(com.aliyun.ros.cdk.core.IResolvable autoSnapshotPolicyName) {
            this.autoSnapshotPolicyName = autoSnapshotPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getDiskIds}
         * @param diskIds the value to be set.
         * @return {@code this}
         */
        public Builder diskIds(com.aliyun.ros.cdk.core.IResolvable diskIds) {
            this.diskIds = diskIds;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getDiskIds}
         * @param diskIds the value to be set.
         * @return {@code this}
         */
        public Builder diskIds(java.util.List<? extends java.lang.Object> diskIds) {
            this.diskIds = diskIds;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAutoSnapshotPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAutoSnapshotPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAutoSnapshotPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAutoSnapshotPolicyProps {
        private final java.lang.Object repeatWeekdays;
        private final java.lang.Object retentionDays;
        private final java.lang.Object timePoints;
        private final java.lang.Object autoSnapshotPolicyName;
        private final java.lang.Object diskIds;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.repeatWeekdays = software.amazon.jsii.Kernel.get(this, "repeatWeekdays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.retentionDays = software.amazon.jsii.Kernel.get(this, "retentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timePoints = software.amazon.jsii.Kernel.get(this, "timePoints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoSnapshotPolicyName = software.amazon.jsii.Kernel.get(this, "autoSnapshotPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskIds = software.amazon.jsii.Kernel.get(this, "diskIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.repeatWeekdays = java.util.Objects.requireNonNull(builder.repeatWeekdays, "repeatWeekdays is required");
            this.retentionDays = java.util.Objects.requireNonNull(builder.retentionDays, "retentionDays is required");
            this.timePoints = java.util.Objects.requireNonNull(builder.timePoints, "timePoints is required");
            this.autoSnapshotPolicyName = builder.autoSnapshotPolicyName;
            this.diskIds = builder.diskIds;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getRepeatWeekdays() {
            return this.repeatWeekdays;
        }

        @Override
        public final java.lang.Object getRetentionDays() {
            return this.retentionDays;
        }

        @Override
        public final java.lang.Object getTimePoints() {
            return this.timePoints;
        }

        @Override
        public final java.lang.Object getAutoSnapshotPolicyName() {
            return this.autoSnapshotPolicyName;
        }

        @Override
        public final java.lang.Object getDiskIds() {
            return this.diskIds;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("repeatWeekdays", om.valueToTree(this.getRepeatWeekdays()));
            data.set("retentionDays", om.valueToTree(this.getRetentionDays()));
            data.set("timePoints", om.valueToTree(this.getTimePoints()));
            if (this.getAutoSnapshotPolicyName() != null) {
                data.set("autoSnapshotPolicyName", om.valueToTree(this.getAutoSnapshotPolicyName()));
            }
            if (this.getDiskIds() != null) {
                data.set("diskIds", om.valueToTree(this.getDiskIds()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosAutoSnapshotPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAutoSnapshotPolicyProps.Jsii$Proxy that = (RosAutoSnapshotPolicyProps.Jsii$Proxy) o;

            if (!repeatWeekdays.equals(that.repeatWeekdays)) return false;
            if (!retentionDays.equals(that.retentionDays)) return false;
            if (!timePoints.equals(that.timePoints)) return false;
            if (this.autoSnapshotPolicyName != null ? !this.autoSnapshotPolicyName.equals(that.autoSnapshotPolicyName) : that.autoSnapshotPolicyName != null) return false;
            if (this.diskIds != null ? !this.diskIds.equals(that.diskIds) : that.diskIds != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.repeatWeekdays.hashCode();
            result = 31 * result + (this.retentionDays.hashCode());
            result = 31 * result + (this.timePoints.hashCode());
            result = 31 * result + (this.autoSnapshotPolicyName != null ? this.autoSnapshotPolicyName.hashCode() : 0);
            result = 31 * result + (this.diskIds != null ? this.diskIds.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
