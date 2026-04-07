package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>RosBaselineStrategy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.611Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosBaselineStrategyProps")
@software.amazon.jsii.Jsii.Proxy(RosBaselineStrategyProps.Jsii$Proxy.class)
public interface RosBaselineStrategyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBaselineStrategyName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCustomType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCycleDays();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndTime();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRiskSubTypeName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStartTime();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetType();

    /**
     * @return a {@link Builder} of {@link RosBaselineStrategyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBaselineStrategyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBaselineStrategyProps> {
        java.lang.Object baselineStrategyName;
        java.lang.Object customType;
        java.lang.Object cycleDays;
        java.lang.Object endTime;
        java.lang.Object riskSubTypeName;
        java.lang.Object startTime;
        java.lang.Object targetType;

        /**
         * Sets the value of {@link RosBaselineStrategyProps#getBaselineStrategyName}
         * @param baselineStrategyName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder baselineStrategyName(java.lang.String baselineStrategyName) {
            this.baselineStrategyName = baselineStrategyName;
            return this;
        }

        /**
         * Sets the value of {@link RosBaselineStrategyProps#getBaselineStrategyName}
         * @param baselineStrategyName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder baselineStrategyName(com.aliyun.ros.cdk.core.IResolvable baselineStrategyName) {
            this.baselineStrategyName = baselineStrategyName;
            return this;
        }

        /**
         * Sets the value of {@link RosBaselineStrategyProps#getCustomType}
         * @param customType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder customType(java.lang.String customType) {
            this.customType = customType;
            return this;
        }

        /**
         * Sets the value of {@link RosBaselineStrategyProps#getCustomType}
         * @param customType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder customType(com.aliyun.ros.cdk.core.IResolvable customType) {
            this.customType = customType;
            return this;
        }

        /**
         * Sets the value of {@link RosBaselineStrategyProps#getCycleDays}
         * @param cycleDays the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cycleDays(java.lang.Number cycleDays) {
            this.cycleDays = cycleDays;
            return this;
        }

        /**
         * Sets the value of {@link RosBaselineStrategyProps#getCycleDays}
         * @param cycleDays the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cycleDays(com.aliyun.ros.cdk.core.IResolvable cycleDays) {
            this.cycleDays = cycleDays;
            return this;
        }

        /**
         * Sets the value of {@link RosBaselineStrategyProps#getEndTime}
         * @param endTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endTime(java.lang.String endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link RosBaselineStrategyProps#getEndTime}
         * @param endTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endTime(com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link RosBaselineStrategyProps#getRiskSubTypeName}
         * @param riskSubTypeName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder riskSubTypeName(java.lang.String riskSubTypeName) {
            this.riskSubTypeName = riskSubTypeName;
            return this;
        }

        /**
         * Sets the value of {@link RosBaselineStrategyProps#getRiskSubTypeName}
         * @param riskSubTypeName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder riskSubTypeName(com.aliyun.ros.cdk.core.IResolvable riskSubTypeName) {
            this.riskSubTypeName = riskSubTypeName;
            return this;
        }

        /**
         * Sets the value of {@link RosBaselineStrategyProps#getStartTime}
         * @param startTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder startTime(java.lang.String startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Sets the value of {@link RosBaselineStrategyProps#getStartTime}
         * @param startTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder startTime(com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Sets the value of {@link RosBaselineStrategyProps#getTargetType}
         * @param targetType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetType(java.lang.String targetType) {
            this.targetType = targetType;
            return this;
        }

        /**
         * Sets the value of {@link RosBaselineStrategyProps#getTargetType}
         * @param targetType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetType(com.aliyun.ros.cdk.core.IResolvable targetType) {
            this.targetType = targetType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBaselineStrategyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBaselineStrategyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBaselineStrategyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBaselineStrategyProps {
        private final java.lang.Object baselineStrategyName;
        private final java.lang.Object customType;
        private final java.lang.Object cycleDays;
        private final java.lang.Object endTime;
        private final java.lang.Object riskSubTypeName;
        private final java.lang.Object startTime;
        private final java.lang.Object targetType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.baselineStrategyName = software.amazon.jsii.Kernel.get(this, "baselineStrategyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customType = software.amazon.jsii.Kernel.get(this, "customType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cycleDays = software.amazon.jsii.Kernel.get(this, "cycleDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endTime = software.amazon.jsii.Kernel.get(this, "endTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.riskSubTypeName = software.amazon.jsii.Kernel.get(this, "riskSubTypeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.startTime = software.amazon.jsii.Kernel.get(this, "startTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetType = software.amazon.jsii.Kernel.get(this, "targetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.baselineStrategyName = java.util.Objects.requireNonNull(builder.baselineStrategyName, "baselineStrategyName is required");
            this.customType = java.util.Objects.requireNonNull(builder.customType, "customType is required");
            this.cycleDays = java.util.Objects.requireNonNull(builder.cycleDays, "cycleDays is required");
            this.endTime = java.util.Objects.requireNonNull(builder.endTime, "endTime is required");
            this.riskSubTypeName = java.util.Objects.requireNonNull(builder.riskSubTypeName, "riskSubTypeName is required");
            this.startTime = java.util.Objects.requireNonNull(builder.startTime, "startTime is required");
            this.targetType = java.util.Objects.requireNonNull(builder.targetType, "targetType is required");
        }

        @Override
        public final java.lang.Object getBaselineStrategyName() {
            return this.baselineStrategyName;
        }

        @Override
        public final java.lang.Object getCustomType() {
            return this.customType;
        }

        @Override
        public final java.lang.Object getCycleDays() {
            return this.cycleDays;
        }

        @Override
        public final java.lang.Object getEndTime() {
            return this.endTime;
        }

        @Override
        public final java.lang.Object getRiskSubTypeName() {
            return this.riskSubTypeName;
        }

        @Override
        public final java.lang.Object getStartTime() {
            return this.startTime;
        }

        @Override
        public final java.lang.Object getTargetType() {
            return this.targetType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("baselineStrategyName", om.valueToTree(this.getBaselineStrategyName()));
            data.set("customType", om.valueToTree(this.getCustomType()));
            data.set("cycleDays", om.valueToTree(this.getCycleDays()));
            data.set("endTime", om.valueToTree(this.getEndTime()));
            data.set("riskSubTypeName", om.valueToTree(this.getRiskSubTypeName()));
            data.set("startTime", om.valueToTree(this.getStartTime()));
            data.set("targetType", om.valueToTree(this.getTargetType()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.RosBaselineStrategyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBaselineStrategyProps.Jsii$Proxy that = (RosBaselineStrategyProps.Jsii$Proxy) o;

            if (!baselineStrategyName.equals(that.baselineStrategyName)) return false;
            if (!customType.equals(that.customType)) return false;
            if (!cycleDays.equals(that.cycleDays)) return false;
            if (!endTime.equals(that.endTime)) return false;
            if (!riskSubTypeName.equals(that.riskSubTypeName)) return false;
            if (!startTime.equals(that.startTime)) return false;
            return this.targetType.equals(that.targetType);
        }

        @Override
        public final int hashCode() {
            int result = this.baselineStrategyName.hashCode();
            result = 31 * result + (this.customType.hashCode());
            result = 31 * result + (this.cycleDays.hashCode());
            result = 31 * result + (this.endTime.hashCode());
            result = 31 * result + (this.riskSubTypeName.hashCode());
            result = 31 * result + (this.startTime.hashCode());
            result = 31 * result + (this.targetType.hashCode());
            return result;
        }
    }
}
