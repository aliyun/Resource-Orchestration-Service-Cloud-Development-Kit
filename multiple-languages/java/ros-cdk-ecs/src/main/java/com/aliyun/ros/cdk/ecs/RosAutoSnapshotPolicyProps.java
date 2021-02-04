package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::AutoSnapshotPolicy`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.609Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosAutoSnapshotPolicyProps")
@software.amazon.jsii.Jsii.Proxy(RosAutoSnapshotPolicyProps.Jsii$Proxy.class)
public interface RosAutoSnapshotPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRepeatWeekdays();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getRetentionDays();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTimePoints();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAutoSnapshotPolicyName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDiskIds() {
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
        private java.lang.Object repeatWeekdays;
        private java.lang.Number retentionDays;
        private java.lang.Object timePoints;
        private java.lang.String autoSnapshotPolicyName;
        private java.util.List<java.lang.String> diskIds;

        /**
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getRepeatWeekdays}
         * @param repeatWeekdays the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder repeatWeekdays(java.util.List<? extends java.lang.Number> repeatWeekdays) {
            this.repeatWeekdays = repeatWeekdays;
            return this;
        }

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
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getRetentionDays}
         * @param retentionDays the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder retentionDays(java.lang.Number retentionDays) {
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
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getDiskIds}
         * @param diskIds the value to be set.
         * @return {@code this}
         */
        public Builder diskIds(java.util.List<java.lang.String> diskIds) {
            this.diskIds = diskIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAutoSnapshotPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAutoSnapshotPolicyProps build() {
            return new Jsii$Proxy(repeatWeekdays, retentionDays, timePoints, autoSnapshotPolicyName, diskIds);
        }
    }

    /**
     * An implementation for {@link RosAutoSnapshotPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAutoSnapshotPolicyProps {
        private final java.lang.Object repeatWeekdays;
        private final java.lang.Number retentionDays;
        private final java.lang.Object timePoints;
        private final java.lang.String autoSnapshotPolicyName;
        private final java.util.List<java.lang.String> diskIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.repeatWeekdays = software.amazon.jsii.Kernel.get(this, "repeatWeekdays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.retentionDays = software.amazon.jsii.Kernel.get(this, "retentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.timePoints = software.amazon.jsii.Kernel.get(this, "timePoints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoSnapshotPolicyName = software.amazon.jsii.Kernel.get(this, "autoSnapshotPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.diskIds = software.amazon.jsii.Kernel.get(this, "diskIds", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object repeatWeekdays, final java.lang.Number retentionDays, final java.lang.Object timePoints, final java.lang.String autoSnapshotPolicyName, final java.util.List<java.lang.String> diskIds) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.repeatWeekdays = java.util.Objects.requireNonNull(repeatWeekdays, "repeatWeekdays is required");
            this.retentionDays = java.util.Objects.requireNonNull(retentionDays, "retentionDays is required");
            this.timePoints = java.util.Objects.requireNonNull(timePoints, "timePoints is required");
            this.autoSnapshotPolicyName = autoSnapshotPolicyName;
            this.diskIds = diskIds;
        }

        @Override
        public final java.lang.Object getRepeatWeekdays() {
            return this.repeatWeekdays;
        }

        @Override
        public final java.lang.Number getRetentionDays() {
            return this.retentionDays;
        }

        @Override
        public final java.lang.Object getTimePoints() {
            return this.timePoints;
        }

        @Override
        public final java.lang.String getAutoSnapshotPolicyName() {
            return this.autoSnapshotPolicyName;
        }

        @Override
        public final java.util.List<java.lang.String> getDiskIds() {
            return this.diskIds;
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
            return this.diskIds != null ? this.diskIds.equals(that.diskIds) : that.diskIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.repeatWeekdays.hashCode();
            result = 31 * result + (this.retentionDays.hashCode());
            result = 31 * result + (this.timePoints.hashCode());
            result = 31 * result + (this.autoSnapshotPolicyName != null ? this.autoSnapshotPolicyName.hashCode() : 0);
            result = 31 * result + (this.diskIds != null ? this.diskIds.hashCode() : 0);
            return result;
        }
    }
}
