package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>BaselineStrategy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.435Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.BaselineStrategyProps")
@software.amazon.jsii.Jsii.Proxy(BaselineStrategyProps.Jsii$Proxy.class)
public interface BaselineStrategyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property baselineStrategyName: The new name of the baseline check policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBaselineStrategyName();

    /**
     * Property customType: The type of the baseline check policy.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>custom</strong>: a custom baseline check policy</li>
     * <li><strong>common</strong>: a standard baseline check policy.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCustomType();

    /**
     * Property cycleDays: The new interval of the baseline check.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>1</strong>: every 2 days</li>
     * <li><strong>3</strong>: every 4 days</li>
     * <li><strong>7</strong>: every 8 days</li>
     * <li><strong>30</strong>: every 31 days.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCycleDays();

    /**
     * Property endTime: The time when the baseline check based on the baseline check policy ends.
     * <p>
     * Specify the time in the hh:mm:ss format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndTime();

    /**
     * Property riskSubTypeName: The subtype of the baselines.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRiskSubTypeName();

    /**
     * Property startTime: The time when the baseline check based on the baseline check policy starts.
     * <p>
     * Specify the time in the hh:mm:ss format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStartTime();

    /**
     * Property targetType: The method that is used to apply the baseline check policy.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>groupId</strong>: asset groups</li>
     * <li><strong>uuid</strong>: assets.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetType();

    /**
     * @return a {@link Builder} of {@link BaselineStrategyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link BaselineStrategyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<BaselineStrategyProps> {
        java.lang.Object baselineStrategyName;
        java.lang.Object customType;
        java.lang.Object cycleDays;
        java.lang.Object endTime;
        java.lang.Object riskSubTypeName;
        java.lang.Object startTime;
        java.lang.Object targetType;

        /**
         * Sets the value of {@link BaselineStrategyProps#getBaselineStrategyName}
         * @param baselineStrategyName Property baselineStrategyName: The new name of the baseline check policy. This parameter is required.
         * @return {@code this}
         */
        public Builder baselineStrategyName(java.lang.String baselineStrategyName) {
            this.baselineStrategyName = baselineStrategyName;
            return this;
        }

        /**
         * Sets the value of {@link BaselineStrategyProps#getBaselineStrategyName}
         * @param baselineStrategyName Property baselineStrategyName: The new name of the baseline check policy. This parameter is required.
         * @return {@code this}
         */
        public Builder baselineStrategyName(com.aliyun.ros.cdk.core.IResolvable baselineStrategyName) {
            this.baselineStrategyName = baselineStrategyName;
            return this;
        }

        /**
         * Sets the value of {@link BaselineStrategyProps#getCustomType}
         * @param customType Property customType: The type of the baseline check policy. This parameter is required.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li><strong>custom</strong>: a custom baseline check policy</li>
         *                   <li><strong>common</strong>: a standard baseline check policy.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder customType(java.lang.String customType) {
            this.customType = customType;
            return this;
        }

        /**
         * Sets the value of {@link BaselineStrategyProps#getCustomType}
         * @param customType Property customType: The type of the baseline check policy. This parameter is required.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li><strong>custom</strong>: a custom baseline check policy</li>
         *                   <li><strong>common</strong>: a standard baseline check policy.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder customType(com.aliyun.ros.cdk.core.IResolvable customType) {
            this.customType = customType;
            return this;
        }

        /**
         * Sets the value of {@link BaselineStrategyProps#getCycleDays}
         * @param cycleDays Property cycleDays: The new interval of the baseline check. This parameter is required.
         *                  Valid values:
         *                  <p>
         *                  <ul>
         *                  <li><strong>1</strong>: every 2 days</li>
         *                  <li><strong>3</strong>: every 4 days</li>
         *                  <li><strong>7</strong>: every 8 days</li>
         *                  <li><strong>30</strong>: every 31 days.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder cycleDays(java.lang.Number cycleDays) {
            this.cycleDays = cycleDays;
            return this;
        }

        /**
         * Sets the value of {@link BaselineStrategyProps#getCycleDays}
         * @param cycleDays Property cycleDays: The new interval of the baseline check. This parameter is required.
         *                  Valid values:
         *                  <p>
         *                  <ul>
         *                  <li><strong>1</strong>: every 2 days</li>
         *                  <li><strong>3</strong>: every 4 days</li>
         *                  <li><strong>7</strong>: every 8 days</li>
         *                  <li><strong>30</strong>: every 31 days.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder cycleDays(com.aliyun.ros.cdk.core.IResolvable cycleDays) {
            this.cycleDays = cycleDays;
            return this;
        }

        /**
         * Sets the value of {@link BaselineStrategyProps#getEndTime}
         * @param endTime Property endTime: The time when the baseline check based on the baseline check policy ends. This parameter is required.
         *                Specify the time in the hh:mm:ss format.
         * @return {@code this}
         */
        public Builder endTime(java.lang.String endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link BaselineStrategyProps#getEndTime}
         * @param endTime Property endTime: The time when the baseline check based on the baseline check policy ends. This parameter is required.
         *                Specify the time in the hh:mm:ss format.
         * @return {@code this}
         */
        public Builder endTime(com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link BaselineStrategyProps#getRiskSubTypeName}
         * @param riskSubTypeName Property riskSubTypeName: The subtype of the baselines. This parameter is required.
         * @return {@code this}
         */
        public Builder riskSubTypeName(java.lang.String riskSubTypeName) {
            this.riskSubTypeName = riskSubTypeName;
            return this;
        }

        /**
         * Sets the value of {@link BaselineStrategyProps#getRiskSubTypeName}
         * @param riskSubTypeName Property riskSubTypeName: The subtype of the baselines. This parameter is required.
         * @return {@code this}
         */
        public Builder riskSubTypeName(com.aliyun.ros.cdk.core.IResolvable riskSubTypeName) {
            this.riskSubTypeName = riskSubTypeName;
            return this;
        }

        /**
         * Sets the value of {@link BaselineStrategyProps#getStartTime}
         * @param startTime Property startTime: The time when the baseline check based on the baseline check policy starts. This parameter is required.
         *                  Specify the time in the hh:mm:ss format.
         * @return {@code this}
         */
        public Builder startTime(java.lang.String startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Sets the value of {@link BaselineStrategyProps#getStartTime}
         * @param startTime Property startTime: The time when the baseline check based on the baseline check policy starts. This parameter is required.
         *                  Specify the time in the hh:mm:ss format.
         * @return {@code this}
         */
        public Builder startTime(com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Sets the value of {@link BaselineStrategyProps#getTargetType}
         * @param targetType Property targetType: The method that is used to apply the baseline check policy. This parameter is required.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li><strong>groupId</strong>: asset groups</li>
         *                   <li><strong>uuid</strong>: assets.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder targetType(java.lang.String targetType) {
            this.targetType = targetType;
            return this;
        }

        /**
         * Sets the value of {@link BaselineStrategyProps#getTargetType}
         * @param targetType Property targetType: The method that is used to apply the baseline check policy. This parameter is required.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li><strong>groupId</strong>: asset groups</li>
         *                   <li><strong>uuid</strong>: assets.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder targetType(com.aliyun.ros.cdk.core.IResolvable targetType) {
            this.targetType = targetType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link BaselineStrategyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public BaselineStrategyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link BaselineStrategyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BaselineStrategyProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.BaselineStrategyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            BaselineStrategyProps.Jsii$Proxy that = (BaselineStrategyProps.Jsii$Proxy) o;

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
