package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>ScheduledPreloadExecution</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadexecution
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:49:07.912Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.ScheduledPreloadExecutionProps")
@software.amazon.jsii.Jsii.Proxy(ScheduledPreloadExecutionProps.Jsii$Proxy.class)
public interface ScheduledPreloadExecutionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property interval: The time interval between each batch execution.
     * <p>
     * Unit: seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInterval();

    /**
     * Property scheduledPreloadJobId: The ID of the prefetch task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScheduledPreloadJobId();

    /**
     * Property sliceLen: The number of URLs prefetched in each batch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSliceLen();

    /**
     * Property endTime: The end time of the prefetch plan.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndTime() {
        return null;
    }

    /**
     * Property startTime: The start time of the prefetch plan.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStartTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ScheduledPreloadExecutionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ScheduledPreloadExecutionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ScheduledPreloadExecutionProps> {
        java.lang.Object interval;
        java.lang.Object scheduledPreloadJobId;
        java.lang.Object sliceLen;
        java.lang.Object endTime;
        java.lang.Object startTime;

        /**
         * Sets the value of {@link ScheduledPreloadExecutionProps#getInterval}
         * @param interval Property interval: The time interval between each batch execution. This parameter is required.
         *                 Unit: seconds.
         * @return {@code this}
         */
        public Builder interval(java.lang.Number interval) {
            this.interval = interval;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledPreloadExecutionProps#getInterval}
         * @param interval Property interval: The time interval between each batch execution. This parameter is required.
         *                 Unit: seconds.
         * @return {@code this}
         */
        public Builder interval(com.aliyun.ros.cdk.core.IResolvable interval) {
            this.interval = interval;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledPreloadExecutionProps#getScheduledPreloadJobId}
         * @param scheduledPreloadJobId Property scheduledPreloadJobId: The ID of the prefetch task. This parameter is required.
         * @return {@code this}
         */
        public Builder scheduledPreloadJobId(java.lang.String scheduledPreloadJobId) {
            this.scheduledPreloadJobId = scheduledPreloadJobId;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledPreloadExecutionProps#getScheduledPreloadJobId}
         * @param scheduledPreloadJobId Property scheduledPreloadJobId: The ID of the prefetch task. This parameter is required.
         * @return {@code this}
         */
        public Builder scheduledPreloadJobId(com.aliyun.ros.cdk.core.IResolvable scheduledPreloadJobId) {
            this.scheduledPreloadJobId = scheduledPreloadJobId;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledPreloadExecutionProps#getSliceLen}
         * @param sliceLen Property sliceLen: The number of URLs prefetched in each batch. This parameter is required.
         * @return {@code this}
         */
        public Builder sliceLen(java.lang.Number sliceLen) {
            this.sliceLen = sliceLen;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledPreloadExecutionProps#getSliceLen}
         * @param sliceLen Property sliceLen: The number of URLs prefetched in each batch. This parameter is required.
         * @return {@code this}
         */
        public Builder sliceLen(com.aliyun.ros.cdk.core.IResolvable sliceLen) {
            this.sliceLen = sliceLen;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledPreloadExecutionProps#getEndTime}
         * @param endTime Property endTime: The end time of the prefetch plan.
         * @return {@code this}
         */
        public Builder endTime(java.lang.String endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledPreloadExecutionProps#getEndTime}
         * @param endTime Property endTime: The end time of the prefetch plan.
         * @return {@code this}
         */
        public Builder endTime(com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledPreloadExecutionProps#getStartTime}
         * @param startTime Property startTime: The start time of the prefetch plan.
         * @return {@code this}
         */
        public Builder startTime(java.lang.String startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledPreloadExecutionProps#getStartTime}
         * @param startTime Property startTime: The start time of the prefetch plan.
         * @return {@code this}
         */
        public Builder startTime(com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ScheduledPreloadExecutionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ScheduledPreloadExecutionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ScheduledPreloadExecutionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScheduledPreloadExecutionProps {
        private final java.lang.Object interval;
        private final java.lang.Object scheduledPreloadJobId;
        private final java.lang.Object sliceLen;
        private final java.lang.Object endTime;
        private final java.lang.Object startTime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.interval = software.amazon.jsii.Kernel.get(this, "interval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduledPreloadJobId = software.amazon.jsii.Kernel.get(this, "scheduledPreloadJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sliceLen = software.amazon.jsii.Kernel.get(this, "sliceLen", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endTime = software.amazon.jsii.Kernel.get(this, "endTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.startTime = software.amazon.jsii.Kernel.get(this, "startTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.interval = java.util.Objects.requireNonNull(builder.interval, "interval is required");
            this.scheduledPreloadJobId = java.util.Objects.requireNonNull(builder.scheduledPreloadJobId, "scheduledPreloadJobId is required");
            this.sliceLen = java.util.Objects.requireNonNull(builder.sliceLen, "sliceLen is required");
            this.endTime = builder.endTime;
            this.startTime = builder.startTime;
        }

        @Override
        public final java.lang.Object getInterval() {
            return this.interval;
        }

        @Override
        public final java.lang.Object getScheduledPreloadJobId() {
            return this.scheduledPreloadJobId;
        }

        @Override
        public final java.lang.Object getSliceLen() {
            return this.sliceLen;
        }

        @Override
        public final java.lang.Object getEndTime() {
            return this.endTime;
        }

        @Override
        public final java.lang.Object getStartTime() {
            return this.startTime;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("interval", om.valueToTree(this.getInterval()));
            data.set("scheduledPreloadJobId", om.valueToTree(this.getScheduledPreloadJobId()));
            data.set("sliceLen", om.valueToTree(this.getSliceLen()));
            if (this.getEndTime() != null) {
                data.set("endTime", om.valueToTree(this.getEndTime()));
            }
            if (this.getStartTime() != null) {
                data.set("startTime", om.valueToTree(this.getStartTime()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.ScheduledPreloadExecutionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ScheduledPreloadExecutionProps.Jsii$Proxy that = (ScheduledPreloadExecutionProps.Jsii$Proxy) o;

            if (!interval.equals(that.interval)) return false;
            if (!scheduledPreloadJobId.equals(that.scheduledPreloadJobId)) return false;
            if (!sliceLen.equals(that.sliceLen)) return false;
            if (this.endTime != null ? !this.endTime.equals(that.endTime) : that.endTime != null) return false;
            return this.startTime != null ? this.startTime.equals(that.startTime) : that.startTime == null;
        }

        @Override
        public final int hashCode() {
            int result = this.interval.hashCode();
            result = 31 * result + (this.scheduledPreloadJobId.hashCode());
            result = 31 * result + (this.sliceLen.hashCode());
            result = 31 * result + (this.endTime != null ? this.endTime.hashCode() : 0);
            result = 31 * result + (this.startTime != null ? this.startTime.hashCode() : 0);
            return result;
        }
    }
}
