package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>AutoSnapshotPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autosnapshotpolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:04.532Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.AutoSnapshotPolicyProps")
@software.amazon.jsii.Jsii.Proxy(AutoSnapshotPolicyProps.Jsii$Proxy.class)
public interface AutoSnapshotPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property repeatWeekdays: The automatic snapshot repetition dates.
     * <p>
     * The unit of measurement is day and the repeating cycle is a week. Value range: [1, 7], which represents days starting from Monday to Sunday, for example 1 indicates Monday. When you want to schedule multiple automatic snapshot tasks for a disk in a week, you can set the RepeatWeekdays to an array.
     * A maximum of seven time points can be selected.
     * The format is a list of [1, 2, ..., 7] and the time points are separated by commas (,).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRepeatWeekdays();

    /**
     * Property retentionDays: The snapshot retention time, and the unit of measurement is day.
     * <p>
     * Optional values:
     * -1: The automatic snapshots are retained permanently.
     * [1, 65536]: The number of days retained.
     * Default value: -1.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRetentionDays();

    /**
     * Property timePoints: The automatic snapshot creation schedule, and the unit of measurement is hour.
     * <p>
     * Value range: [0, 23], which represents from 00:00 to 24:00, for example 1 indicates 01:00. When you want to schedule multiple automatic snapshot tasks for a disk in a day, you can set the TimePoints to an array.
     * A maximum of 24 time points can be selected.
     * The format is a list of [0, 1, ..., 23] and the time points are separated by commas (,).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTimePoints();

    /**
     * Property autoSnapshotPolicyName: The name of the automatic snapshot policy.
     * <p>
     * It can consist of [2, 128] English or Chinese characters.
     * Must begin with an uppercase or lowercase letter or a Chinese character. Can contain numbers, periods (.), colons (:), underscores (_), and hyphens (-).
     * Cannot start with http:// or https://.
     * Default value: null.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoSnapshotPolicyName() {
        return null;
    }

    /**
     * Property copiedSnapshotsRetentionDays: Retention time in days for replicated snapshots across geographies.
     * <p>
     * Range:
     * -1: Permanent storage
     * 1-65535: Specifies the number of days to save
     * Default value: -1
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCopiedSnapshotsRetentionDays() {
        return null;
    }

    /**
     * Property copyEncryptionConfiguration: The encryption configuration for copied snapshots.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCopyEncryptionConfiguration() {
        return null;
    }

    /**
     * Property diskIds: The disk ID.
     * <p>
     * When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskIds() {
        return null;
    }

    /**
     * Property enableCrossRegionCopy: Whether to enable cross-region copying of snapshots.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableCrossRegionCopy() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property targetCopyRegions: The target region of the snapshot is replicated across geographies.
     * <p>
     * Setting a target region is currently supported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetCopyRegions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AutoSnapshotPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AutoSnapshotPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AutoSnapshotPolicyProps> {
        java.lang.Object repeatWeekdays;
        java.lang.Object retentionDays;
        java.lang.Object timePoints;
        java.lang.Object autoSnapshotPolicyName;
        java.lang.Object copiedSnapshotsRetentionDays;
        java.lang.Object copyEncryptionConfiguration;
        java.lang.Object diskIds;
        java.lang.Object enableCrossRegionCopy;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.TagsProperty> tags;
        java.lang.Object targetCopyRegions;

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getRepeatWeekdays}
         * @param repeatWeekdays Property repeatWeekdays: The automatic snapshot repetition dates. This parameter is required.
         *                       The unit of measurement is day and the repeating cycle is a week. Value range: [1, 7], which represents days starting from Monday to Sunday, for example 1 indicates Monday. When you want to schedule multiple automatic snapshot tasks for a disk in a week, you can set the RepeatWeekdays to an array.
         *                       A maximum of seven time points can be selected.
         *                       The format is a list of [1, 2, ..., 7] and the time points are separated by commas (,).
         * @return {@code this}
         */
        public Builder repeatWeekdays(com.aliyun.ros.cdk.core.IResolvable repeatWeekdays) {
            this.repeatWeekdays = repeatWeekdays;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getRepeatWeekdays}
         * @param repeatWeekdays Property repeatWeekdays: The automatic snapshot repetition dates. This parameter is required.
         *                       The unit of measurement is day and the repeating cycle is a week. Value range: [1, 7], which represents days starting from Monday to Sunday, for example 1 indicates Monday. When you want to schedule multiple automatic snapshot tasks for a disk in a week, you can set the RepeatWeekdays to an array.
         *                       A maximum of seven time points can be selected.
         *                       The format is a list of [1, 2, ..., 7] and the time points are separated by commas (,).
         * @return {@code this}
         */
        public Builder repeatWeekdays(java.util.List<? extends java.lang.Object> repeatWeekdays) {
            this.repeatWeekdays = repeatWeekdays;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getRetentionDays}
         * @param retentionDays Property retentionDays: The snapshot retention time, and the unit of measurement is day. This parameter is required.
         *                      Optional values:
         *                      -1: The automatic snapshots are retained permanently.
         *                      [1, 65536]: The number of days retained.
         *                      Default value: -1.
         * @return {@code this}
         */
        public Builder retentionDays(java.lang.Number retentionDays) {
            this.retentionDays = retentionDays;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getRetentionDays}
         * @param retentionDays Property retentionDays: The snapshot retention time, and the unit of measurement is day. This parameter is required.
         *                      Optional values:
         *                      -1: The automatic snapshots are retained permanently.
         *                      [1, 65536]: The number of days retained.
         *                      Default value: -1.
         * @return {@code this}
         */
        public Builder retentionDays(com.aliyun.ros.cdk.core.IResolvable retentionDays) {
            this.retentionDays = retentionDays;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getTimePoints}
         * @param timePoints Property timePoints: The automatic snapshot creation schedule, and the unit of measurement is hour. This parameter is required.
         *                   Value range: [0, 23], which represents from 00:00 to 24:00, for example 1 indicates 01:00. When you want to schedule multiple automatic snapshot tasks for a disk in a day, you can set the TimePoints to an array.
         *                   A maximum of 24 time points can be selected.
         *                   The format is a list of [0, 1, ..., 23] and the time points are separated by commas (,).
         * @return {@code this}
         */
        public Builder timePoints(java.util.List<? extends java.lang.Object> timePoints) {
            this.timePoints = timePoints;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getTimePoints}
         * @param timePoints Property timePoints: The automatic snapshot creation schedule, and the unit of measurement is hour. This parameter is required.
         *                   Value range: [0, 23], which represents from 00:00 to 24:00, for example 1 indicates 01:00. When you want to schedule multiple automatic snapshot tasks for a disk in a day, you can set the TimePoints to an array.
         *                   A maximum of 24 time points can be selected.
         *                   The format is a list of [0, 1, ..., 23] and the time points are separated by commas (,).
         * @return {@code this}
         */
        public Builder timePoints(com.aliyun.ros.cdk.core.IResolvable timePoints) {
            this.timePoints = timePoints;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getAutoSnapshotPolicyName}
         * @param autoSnapshotPolicyName Property autoSnapshotPolicyName: The name of the automatic snapshot policy.
         *                               It can consist of [2, 128] English or Chinese characters.
         *                               Must begin with an uppercase or lowercase letter or a Chinese character. Can contain numbers, periods (.), colons (:), underscores (_), and hyphens (-).
         *                               Cannot start with http:// or https://.
         *                               Default value: null.
         * @return {@code this}
         */
        public Builder autoSnapshotPolicyName(java.lang.String autoSnapshotPolicyName) {
            this.autoSnapshotPolicyName = autoSnapshotPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getAutoSnapshotPolicyName}
         * @param autoSnapshotPolicyName Property autoSnapshotPolicyName: The name of the automatic snapshot policy.
         *                               It can consist of [2, 128] English or Chinese characters.
         *                               Must begin with an uppercase or lowercase letter or a Chinese character. Can contain numbers, periods (.), colons (:), underscores (_), and hyphens (-).
         *                               Cannot start with http:// or https://.
         *                               Default value: null.
         * @return {@code this}
         */
        public Builder autoSnapshotPolicyName(com.aliyun.ros.cdk.core.IResolvable autoSnapshotPolicyName) {
            this.autoSnapshotPolicyName = autoSnapshotPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getCopiedSnapshotsRetentionDays}
         * @param copiedSnapshotsRetentionDays Property copiedSnapshotsRetentionDays: Retention time in days for replicated snapshots across geographies.
         *                                     Range:
         *                                     -1: Permanent storage
         *                                     1-65535: Specifies the number of days to save
         *                                     Default value: -1
         * @return {@code this}
         */
        public Builder copiedSnapshotsRetentionDays(java.lang.Number copiedSnapshotsRetentionDays) {
            this.copiedSnapshotsRetentionDays = copiedSnapshotsRetentionDays;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getCopiedSnapshotsRetentionDays}
         * @param copiedSnapshotsRetentionDays Property copiedSnapshotsRetentionDays: Retention time in days for replicated snapshots across geographies.
         *                                     Range:
         *                                     -1: Permanent storage
         *                                     1-65535: Specifies the number of days to save
         *                                     Default value: -1
         * @return {@code this}
         */
        public Builder copiedSnapshotsRetentionDays(com.aliyun.ros.cdk.core.IResolvable copiedSnapshotsRetentionDays) {
            this.copiedSnapshotsRetentionDays = copiedSnapshotsRetentionDays;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getCopyEncryptionConfiguration}
         * @param copyEncryptionConfiguration Property copyEncryptionConfiguration: The encryption configuration for copied snapshots.
         * @return {@code this}
         */
        public Builder copyEncryptionConfiguration(com.aliyun.ros.cdk.core.IResolvable copyEncryptionConfiguration) {
            this.copyEncryptionConfiguration = copyEncryptionConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getCopyEncryptionConfiguration}
         * @param copyEncryptionConfiguration Property copyEncryptionConfiguration: The encryption configuration for copied snapshots.
         * @return {@code this}
         */
        public Builder copyEncryptionConfiguration(com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.CopyEncryptionConfigurationProperty copyEncryptionConfiguration) {
            this.copyEncryptionConfiguration = copyEncryptionConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getDiskIds}
         * @param diskIds Property diskIds: The disk ID.
         *                When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
         * @return {@code this}
         */
        public Builder diskIds(com.aliyun.ros.cdk.core.IResolvable diskIds) {
            this.diskIds = diskIds;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getDiskIds}
         * @param diskIds Property diskIds: The disk ID.
         *                When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
         * @return {@code this}
         */
        public Builder diskIds(java.util.List<? extends java.lang.Object> diskIds) {
            this.diskIds = diskIds;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getEnableCrossRegionCopy}
         * @param enableCrossRegionCopy Property enableCrossRegionCopy: Whether to enable cross-region copying of snapshots.
         * @return {@code this}
         */
        public Builder enableCrossRegionCopy(java.lang.Boolean enableCrossRegionCopy) {
            this.enableCrossRegionCopy = enableCrossRegionCopy;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getEnableCrossRegionCopy}
         * @param enableCrossRegionCopy Property enableCrossRegionCopy: Whether to enable cross-region copying of snapshots.
         * @return {@code this}
         */
        public Builder enableCrossRegionCopy(com.aliyun.ros.cdk.core.IResolvable enableCrossRegionCopy) {
            this.enableCrossRegionCopy = enableCrossRegionCopy;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getTargetCopyRegions}
         * @param targetCopyRegions Property targetCopyRegions: The target region of the snapshot is replicated across geographies.
         *                          Setting a target region is currently supported.
         * @return {@code this}
         */
        public Builder targetCopyRegions(com.aliyun.ros.cdk.core.IResolvable targetCopyRegions) {
            this.targetCopyRegions = targetCopyRegions;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getTargetCopyRegions}
         * @param targetCopyRegions Property targetCopyRegions: The target region of the snapshot is replicated across geographies.
         *                          Setting a target region is currently supported.
         * @return {@code this}
         */
        public Builder targetCopyRegions(java.util.List<? extends java.lang.Object> targetCopyRegions) {
            this.targetCopyRegions = targetCopyRegions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AutoSnapshotPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AutoSnapshotPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AutoSnapshotPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AutoSnapshotPolicyProps {
        private final java.lang.Object repeatWeekdays;
        private final java.lang.Object retentionDays;
        private final java.lang.Object timePoints;
        private final java.lang.Object autoSnapshotPolicyName;
        private final java.lang.Object copiedSnapshotsRetentionDays;
        private final java.lang.Object copyEncryptionConfiguration;
        private final java.lang.Object diskIds;
        private final java.lang.Object enableCrossRegionCopy;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.TagsProperty> tags;
        private final java.lang.Object targetCopyRegions;

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
            this.copiedSnapshotsRetentionDays = software.amazon.jsii.Kernel.get(this, "copiedSnapshotsRetentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.copyEncryptionConfiguration = software.amazon.jsii.Kernel.get(this, "copyEncryptionConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskIds = software.amazon.jsii.Kernel.get(this, "diskIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableCrossRegionCopy = software.amazon.jsii.Kernel.get(this, "enableCrossRegionCopy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.TagsProperty.class)));
            this.targetCopyRegions = software.amazon.jsii.Kernel.get(this, "targetCopyRegions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.copiedSnapshotsRetentionDays = builder.copiedSnapshotsRetentionDays;
            this.copyEncryptionConfiguration = builder.copyEncryptionConfiguration;
            this.diskIds = builder.diskIds;
            this.enableCrossRegionCopy = builder.enableCrossRegionCopy;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosAutoSnapshotPolicy.TagsProperty>)builder.tags;
            this.targetCopyRegions = builder.targetCopyRegions;
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
        public final java.lang.Object getCopiedSnapshotsRetentionDays() {
            return this.copiedSnapshotsRetentionDays;
        }

        @Override
        public final java.lang.Object getCopyEncryptionConfiguration() {
            return this.copyEncryptionConfiguration;
        }

        @Override
        public final java.lang.Object getDiskIds() {
            return this.diskIds;
        }

        @Override
        public final java.lang.Object getEnableCrossRegionCopy() {
            return this.enableCrossRegionCopy;
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
        public final java.lang.Object getTargetCopyRegions() {
            return this.targetCopyRegions;
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
            if (this.getCopiedSnapshotsRetentionDays() != null) {
                data.set("copiedSnapshotsRetentionDays", om.valueToTree(this.getCopiedSnapshotsRetentionDays()));
            }
            if (this.getCopyEncryptionConfiguration() != null) {
                data.set("copyEncryptionConfiguration", om.valueToTree(this.getCopyEncryptionConfiguration()));
            }
            if (this.getDiskIds() != null) {
                data.set("diskIds", om.valueToTree(this.getDiskIds()));
            }
            if (this.getEnableCrossRegionCopy() != null) {
                data.set("enableCrossRegionCopy", om.valueToTree(this.getEnableCrossRegionCopy()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTargetCopyRegions() != null) {
                data.set("targetCopyRegions", om.valueToTree(this.getTargetCopyRegions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.AutoSnapshotPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AutoSnapshotPolicyProps.Jsii$Proxy that = (AutoSnapshotPolicyProps.Jsii$Proxy) o;

            if (!repeatWeekdays.equals(that.repeatWeekdays)) return false;
            if (!retentionDays.equals(that.retentionDays)) return false;
            if (!timePoints.equals(that.timePoints)) return false;
            if (this.autoSnapshotPolicyName != null ? !this.autoSnapshotPolicyName.equals(that.autoSnapshotPolicyName) : that.autoSnapshotPolicyName != null) return false;
            if (this.copiedSnapshotsRetentionDays != null ? !this.copiedSnapshotsRetentionDays.equals(that.copiedSnapshotsRetentionDays) : that.copiedSnapshotsRetentionDays != null) return false;
            if (this.copyEncryptionConfiguration != null ? !this.copyEncryptionConfiguration.equals(that.copyEncryptionConfiguration) : that.copyEncryptionConfiguration != null) return false;
            if (this.diskIds != null ? !this.diskIds.equals(that.diskIds) : that.diskIds != null) return false;
            if (this.enableCrossRegionCopy != null ? !this.enableCrossRegionCopy.equals(that.enableCrossRegionCopy) : that.enableCrossRegionCopy != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.targetCopyRegions != null ? this.targetCopyRegions.equals(that.targetCopyRegions) : that.targetCopyRegions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.repeatWeekdays.hashCode();
            result = 31 * result + (this.retentionDays.hashCode());
            result = 31 * result + (this.timePoints.hashCode());
            result = 31 * result + (this.autoSnapshotPolicyName != null ? this.autoSnapshotPolicyName.hashCode() : 0);
            result = 31 * result + (this.copiedSnapshotsRetentionDays != null ? this.copiedSnapshotsRetentionDays.hashCode() : 0);
            result = 31 * result + (this.copyEncryptionConfiguration != null ? this.copyEncryptionConfiguration.hashCode() : 0);
            result = 31 * result + (this.diskIds != null ? this.diskIds.hashCode() : 0);
            result = 31 * result + (this.enableCrossRegionCopy != null ? this.enableCrossRegionCopy.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.targetCopyRegions != null ? this.targetCopyRegions.hashCode() : 0);
            return result;
        }
    }
}
