package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>RosCycleTask</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-cycletask
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.632Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosCycleTaskProps")
@software.amazon.jsii.Jsii.Proxy(RosCycleTaskProps.Jsii$Proxy.class)
public interface RosCycleTaskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnable();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFirstDateStr();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIntervalPeriod();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriodUnit();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetEndTime();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetStartTime();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTaskName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTaskType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParam() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSource() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCycleTaskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCycleTaskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCycleTaskProps> {
        java.lang.Object enable;
        java.lang.Object firstDateStr;
        java.lang.Object intervalPeriod;
        java.lang.Object periodUnit;
        java.lang.Object targetEndTime;
        java.lang.Object targetStartTime;
        java.lang.Object taskName;
        java.lang.Object taskType;
        java.lang.Object param;
        java.lang.Object source;

        /**
         * Sets the value of {@link RosCycleTaskProps#getEnable}
         * @param enable the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder enable(java.lang.Number enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getEnable}
         * @param enable the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getFirstDateStr}
         * @param firstDateStr the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder firstDateStr(java.lang.Number firstDateStr) {
            this.firstDateStr = firstDateStr;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getFirstDateStr}
         * @param firstDateStr the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder firstDateStr(com.aliyun.ros.cdk.core.IResolvable firstDateStr) {
            this.firstDateStr = firstDateStr;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getIntervalPeriod}
         * @param intervalPeriod the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder intervalPeriod(java.lang.Number intervalPeriod) {
            this.intervalPeriod = intervalPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getIntervalPeriod}
         * @param intervalPeriod the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder intervalPeriod(com.aliyun.ros.cdk.core.IResolvable intervalPeriod) {
            this.intervalPeriod = intervalPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getPeriodUnit}
         * @param periodUnit the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getPeriodUnit}
         * @param periodUnit the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getTargetEndTime}
         * @param targetEndTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetEndTime(java.lang.Number targetEndTime) {
            this.targetEndTime = targetEndTime;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getTargetEndTime}
         * @param targetEndTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetEndTime(com.aliyun.ros.cdk.core.IResolvable targetEndTime) {
            this.targetEndTime = targetEndTime;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getTargetStartTime}
         * @param targetStartTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetStartTime(java.lang.Number targetStartTime) {
            this.targetStartTime = targetStartTime;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getTargetStartTime}
         * @param targetStartTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetStartTime(com.aliyun.ros.cdk.core.IResolvable targetStartTime) {
            this.targetStartTime = targetStartTime;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getTaskName}
         * @param taskName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder taskName(java.lang.String taskName) {
            this.taskName = taskName;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getTaskName}
         * @param taskName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder taskName(com.aliyun.ros.cdk.core.IResolvable taskName) {
            this.taskName = taskName;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getTaskType}
         * @param taskType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder taskType(java.lang.String taskType) {
            this.taskType = taskType;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getTaskType}
         * @param taskType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder taskType(com.aliyun.ros.cdk.core.IResolvable taskType) {
            this.taskType = taskType;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getParam}
         * @param param the value to be set.
         * @return {@code this}
         */
        public Builder param(com.aliyun.ros.cdk.core.IResolvable param) {
            this.param = param;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getParam}
         * @param param the value to be set.
         * @return {@code this}
         */
        public Builder param(java.util.Map<java.lang.String, ? extends java.lang.Object> param) {
            this.param = param;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getSource}
         * @param source the value to be set.
         * @return {@code this}
         */
        public Builder source(java.lang.String source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link RosCycleTaskProps#getSource}
         * @param source the value to be set.
         * @return {@code this}
         */
        public Builder source(com.aliyun.ros.cdk.core.IResolvable source) {
            this.source = source;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCycleTaskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCycleTaskProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCycleTaskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCycleTaskProps {
        private final java.lang.Object enable;
        private final java.lang.Object firstDateStr;
        private final java.lang.Object intervalPeriod;
        private final java.lang.Object periodUnit;
        private final java.lang.Object targetEndTime;
        private final java.lang.Object targetStartTime;
        private final java.lang.Object taskName;
        private final java.lang.Object taskType;
        private final java.lang.Object param;
        private final java.lang.Object source;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.firstDateStr = software.amazon.jsii.Kernel.get(this, "firstDateStr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.intervalPeriod = software.amazon.jsii.Kernel.get(this, "intervalPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetEndTime = software.amazon.jsii.Kernel.get(this, "targetEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetStartTime = software.amazon.jsii.Kernel.get(this, "targetStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.taskName = software.amazon.jsii.Kernel.get(this, "taskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.taskType = software.amazon.jsii.Kernel.get(this, "taskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.param = software.amazon.jsii.Kernel.get(this, "param", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.source = software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.enable = java.util.Objects.requireNonNull(builder.enable, "enable is required");
            this.firstDateStr = java.util.Objects.requireNonNull(builder.firstDateStr, "firstDateStr is required");
            this.intervalPeriod = java.util.Objects.requireNonNull(builder.intervalPeriod, "intervalPeriod is required");
            this.periodUnit = java.util.Objects.requireNonNull(builder.periodUnit, "periodUnit is required");
            this.targetEndTime = java.util.Objects.requireNonNull(builder.targetEndTime, "targetEndTime is required");
            this.targetStartTime = java.util.Objects.requireNonNull(builder.targetStartTime, "targetStartTime is required");
            this.taskName = java.util.Objects.requireNonNull(builder.taskName, "taskName is required");
            this.taskType = java.util.Objects.requireNonNull(builder.taskType, "taskType is required");
            this.param = builder.param;
            this.source = builder.source;
        }

        @Override
        public final java.lang.Object getEnable() {
            return this.enable;
        }

        @Override
        public final java.lang.Object getFirstDateStr() {
            return this.firstDateStr;
        }

        @Override
        public final java.lang.Object getIntervalPeriod() {
            return this.intervalPeriod;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getTargetEndTime() {
            return this.targetEndTime;
        }

        @Override
        public final java.lang.Object getTargetStartTime() {
            return this.targetStartTime;
        }

        @Override
        public final java.lang.Object getTaskName() {
            return this.taskName;
        }

        @Override
        public final java.lang.Object getTaskType() {
            return this.taskType;
        }

        @Override
        public final java.lang.Object getParam() {
            return this.param;
        }

        @Override
        public final java.lang.Object getSource() {
            return this.source;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("enable", om.valueToTree(this.getEnable()));
            data.set("firstDateStr", om.valueToTree(this.getFirstDateStr()));
            data.set("intervalPeriod", om.valueToTree(this.getIntervalPeriod()));
            data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            data.set("targetEndTime", om.valueToTree(this.getTargetEndTime()));
            data.set("targetStartTime", om.valueToTree(this.getTargetStartTime()));
            data.set("taskName", om.valueToTree(this.getTaskName()));
            data.set("taskType", om.valueToTree(this.getTaskType()));
            if (this.getParam() != null) {
                data.set("param", om.valueToTree(this.getParam()));
            }
            if (this.getSource() != null) {
                data.set("source", om.valueToTree(this.getSource()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.RosCycleTaskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCycleTaskProps.Jsii$Proxy that = (RosCycleTaskProps.Jsii$Proxy) o;

            if (!enable.equals(that.enable)) return false;
            if (!firstDateStr.equals(that.firstDateStr)) return false;
            if (!intervalPeriod.equals(that.intervalPeriod)) return false;
            if (!periodUnit.equals(that.periodUnit)) return false;
            if (!targetEndTime.equals(that.targetEndTime)) return false;
            if (!targetStartTime.equals(that.targetStartTime)) return false;
            if (!taskName.equals(that.taskName)) return false;
            if (!taskType.equals(that.taskType)) return false;
            if (this.param != null ? !this.param.equals(that.param) : that.param != null) return false;
            return this.source != null ? this.source.equals(that.source) : that.source == null;
        }

        @Override
        public final int hashCode() {
            int result = this.enable.hashCode();
            result = 31 * result + (this.firstDateStr.hashCode());
            result = 31 * result + (this.intervalPeriod.hashCode());
            result = 31 * result + (this.periodUnit.hashCode());
            result = 31 * result + (this.targetEndTime.hashCode());
            result = 31 * result + (this.targetStartTime.hashCode());
            result = 31 * result + (this.taskName.hashCode());
            result = 31 * result + (this.taskType.hashCode());
            result = 31 * result + (this.param != null ? this.param.hashCode() : 0);
            result = 31 * result + (this.source != null ? this.source.hashCode() : 0);
            return result;
        }
    }
}
