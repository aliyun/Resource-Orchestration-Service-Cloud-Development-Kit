package com.aliyun.ros.cdk.sae;

/**
 * Properties for defining a <code>ApplicationScalingRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-applicationscalingrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:10.318Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.ApplicationScalingRuleProps")
@software.amazon.jsii.Jsii.Proxy(ApplicationScalingRuleProps.Jsii$Proxy.class)
public interface ApplicationScalingRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property appId: The ID of the application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppId();

    /**
     * Property scalingRuleName: The name of the auto scaling policy.
     * <p>
     * The name must start with a lowercase letter, and can contain lowercase letters, digits, and hyphens (-).The name must be 1 to 32 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingRuleName();

    /**
     * Property scalingRuleType: The type of the auto scaling policy.
     * <p>
     * Valid values: timer: Timed scaling. metric: Custom metric scaling.mix: mix scaling
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingRuleType();

    /**
     * Property minReadyInstanceRatio: The minimum percentage of surviving instances.
     * <p>
     * The value description is as follows:-1: Initialization value, indicating that the percentage is not used.0~100: The unit is a percentage, rounded up. For example, if it is set to 50%, if there are currently 5 instances, the minimum number of surviving instances is 3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMinReadyInstanceRatio() {
        return null;
    }

    /**
     * Property minReadyInstances: Minimum number of surviving instances.
     * <p>
     * The value is as follows:If set to 0, the application will be interrupted during the upgrade process.If set to <strong>-1</strong>, the minimum number of surviving instances will use the system recommended value, which is 25% of the existing number of instances. If there are currently 5 instances, 5×25%=1.25, after rounding up, the minimum number of surviving instances is 2.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMinReadyInstances() {
        return null;
    }

    /**
     * Property scalingRuleEnable: Whether to enable the scaling rule.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleEnable() {
        return null;
    }

    /**
     * Property scalingRuleMetric: Configuration of monitoring indicator elasticity policy.
     * <p>
     * This parameter is required when you select monitoring indicator elasticity policy setting.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleMetric() {
        return null;
    }

    /**
     * Property scalingRuleTimer: The configuration of the timer scaling policy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleTimer() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ApplicationScalingRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ApplicationScalingRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ApplicationScalingRuleProps> {
        java.lang.Object appId;
        java.lang.Object scalingRuleName;
        java.lang.Object scalingRuleType;
        java.lang.Object minReadyInstanceRatio;
        java.lang.Object minReadyInstances;
        java.lang.Object scalingRuleEnable;
        java.lang.Object scalingRuleMetric;
        java.lang.Object scalingRuleTimer;

        /**
         * Sets the value of {@link ApplicationScalingRuleProps#getAppId}
         * @param appId Property appId: The ID of the application. This parameter is required.
         * @return {@code this}
         */
        public Builder appId(java.lang.String appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationScalingRuleProps#getAppId}
         * @param appId Property appId: The ID of the application. This parameter is required.
         * @return {@code this}
         */
        public Builder appId(com.aliyun.ros.cdk.core.IResolvable appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationScalingRuleProps#getScalingRuleName}
         * @param scalingRuleName Property scalingRuleName: The name of the auto scaling policy. This parameter is required.
         *                        The name must start with a lowercase letter, and can contain lowercase letters, digits, and hyphens (-).The name must be 1 to 32 characters in length.
         * @return {@code this}
         */
        public Builder scalingRuleName(java.lang.String scalingRuleName) {
            this.scalingRuleName = scalingRuleName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationScalingRuleProps#getScalingRuleName}
         * @param scalingRuleName Property scalingRuleName: The name of the auto scaling policy. This parameter is required.
         *                        The name must start with a lowercase letter, and can contain lowercase letters, digits, and hyphens (-).The name must be 1 to 32 characters in length.
         * @return {@code this}
         */
        public Builder scalingRuleName(com.aliyun.ros.cdk.core.IResolvable scalingRuleName) {
            this.scalingRuleName = scalingRuleName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationScalingRuleProps#getScalingRuleType}
         * @param scalingRuleType Property scalingRuleType: The type of the auto scaling policy. This parameter is required.
         *                        Valid values: timer: Timed scaling. metric: Custom metric scaling.mix: mix scaling
         * @return {@code this}
         */
        public Builder scalingRuleType(java.lang.String scalingRuleType) {
            this.scalingRuleType = scalingRuleType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationScalingRuleProps#getScalingRuleType}
         * @param scalingRuleType Property scalingRuleType: The type of the auto scaling policy. This parameter is required.
         *                        Valid values: timer: Timed scaling. metric: Custom metric scaling.mix: mix scaling
         * @return {@code this}
         */
        public Builder scalingRuleType(com.aliyun.ros.cdk.core.IResolvable scalingRuleType) {
            this.scalingRuleType = scalingRuleType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationScalingRuleProps#getMinReadyInstanceRatio}
         * @param minReadyInstanceRatio Property minReadyInstanceRatio: The minimum percentage of surviving instances.
         *                              The value description is as follows:-1: Initialization value, indicating that the percentage is not used.0~100: The unit is a percentage, rounded up. For example, if it is set to 50%, if there are currently 5 instances, the minimum number of surviving instances is 3.
         * @return {@code this}
         */
        public Builder minReadyInstanceRatio(java.lang.Number minReadyInstanceRatio) {
            this.minReadyInstanceRatio = minReadyInstanceRatio;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationScalingRuleProps#getMinReadyInstanceRatio}
         * @param minReadyInstanceRatio Property minReadyInstanceRatio: The minimum percentage of surviving instances.
         *                              The value description is as follows:-1: Initialization value, indicating that the percentage is not used.0~100: The unit is a percentage, rounded up. For example, if it is set to 50%, if there are currently 5 instances, the minimum number of surviving instances is 3.
         * @return {@code this}
         */
        public Builder minReadyInstanceRatio(com.aliyun.ros.cdk.core.IResolvable minReadyInstanceRatio) {
            this.minReadyInstanceRatio = minReadyInstanceRatio;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationScalingRuleProps#getMinReadyInstances}
         * @param minReadyInstances Property minReadyInstances: Minimum number of surviving instances.
         *                          The value is as follows:If set to 0, the application will be interrupted during the upgrade process.If set to <strong>-1</strong>, the minimum number of surviving instances will use the system recommended value, which is 25% of the existing number of instances. If there are currently 5 instances, 5×25%=1.25, after rounding up, the minimum number of surviving instances is 2.
         * @return {@code this}
         */
        public Builder minReadyInstances(java.lang.Number minReadyInstances) {
            this.minReadyInstances = minReadyInstances;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationScalingRuleProps#getMinReadyInstances}
         * @param minReadyInstances Property minReadyInstances: Minimum number of surviving instances.
         *                          The value is as follows:If set to 0, the application will be interrupted during the upgrade process.If set to <strong>-1</strong>, the minimum number of surviving instances will use the system recommended value, which is 25% of the existing number of instances. If there are currently 5 instances, 5×25%=1.25, after rounding up, the minimum number of surviving instances is 2.
         * @return {@code this}
         */
        public Builder minReadyInstances(com.aliyun.ros.cdk.core.IResolvable minReadyInstances) {
            this.minReadyInstances = minReadyInstances;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationScalingRuleProps#getScalingRuleEnable}
         * @param scalingRuleEnable Property scalingRuleEnable: Whether to enable the scaling rule.
         * @return {@code this}
         */
        public Builder scalingRuleEnable(java.lang.Boolean scalingRuleEnable) {
            this.scalingRuleEnable = scalingRuleEnable;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationScalingRuleProps#getScalingRuleEnable}
         * @param scalingRuleEnable Property scalingRuleEnable: Whether to enable the scaling rule.
         * @return {@code this}
         */
        public Builder scalingRuleEnable(com.aliyun.ros.cdk.core.IResolvable scalingRuleEnable) {
            this.scalingRuleEnable = scalingRuleEnable;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationScalingRuleProps#getScalingRuleMetric}
         * @param scalingRuleMetric Property scalingRuleMetric: Configuration of monitoring indicator elasticity policy.
         *                          This parameter is required when you select monitoring indicator elasticity policy setting.
         * @return {@code this}
         */
        public Builder scalingRuleMetric(com.aliyun.ros.cdk.core.IResolvable scalingRuleMetric) {
            this.scalingRuleMetric = scalingRuleMetric;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationScalingRuleProps#getScalingRuleMetric}
         * @param scalingRuleMetric Property scalingRuleMetric: Configuration of monitoring indicator elasticity policy.
         *                          This parameter is required when you select monitoring indicator elasticity policy setting.
         * @return {@code this}
         */
        public Builder scalingRuleMetric(com.aliyun.ros.cdk.sae.RosApplicationScalingRule.ScalingRuleMetricProperty scalingRuleMetric) {
            this.scalingRuleMetric = scalingRuleMetric;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationScalingRuleProps#getScalingRuleTimer}
         * @param scalingRuleTimer Property scalingRuleTimer: The configuration of the timer scaling policy.
         * @return {@code this}
         */
        public Builder scalingRuleTimer(com.aliyun.ros.cdk.core.IResolvable scalingRuleTimer) {
            this.scalingRuleTimer = scalingRuleTimer;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationScalingRuleProps#getScalingRuleTimer}
         * @param scalingRuleTimer Property scalingRuleTimer: The configuration of the timer scaling policy.
         * @return {@code this}
         */
        public Builder scalingRuleTimer(com.aliyun.ros.cdk.sae.RosApplicationScalingRule.ScalingRuleTimerProperty scalingRuleTimer) {
            this.scalingRuleTimer = scalingRuleTimer;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ApplicationScalingRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ApplicationScalingRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ApplicationScalingRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApplicationScalingRuleProps {
        private final java.lang.Object appId;
        private final java.lang.Object scalingRuleName;
        private final java.lang.Object scalingRuleType;
        private final java.lang.Object minReadyInstanceRatio;
        private final java.lang.Object minReadyInstances;
        private final java.lang.Object scalingRuleEnable;
        private final java.lang.Object scalingRuleMetric;
        private final java.lang.Object scalingRuleTimer;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appId = software.amazon.jsii.Kernel.get(this, "appId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingRuleName = software.amazon.jsii.Kernel.get(this, "scalingRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingRuleType = software.amazon.jsii.Kernel.get(this, "scalingRuleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.minReadyInstanceRatio = software.amazon.jsii.Kernel.get(this, "minReadyInstanceRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.minReadyInstances = software.amazon.jsii.Kernel.get(this, "minReadyInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingRuleEnable = software.amazon.jsii.Kernel.get(this, "scalingRuleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingRuleMetric = software.amazon.jsii.Kernel.get(this, "scalingRuleMetric", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingRuleTimer = software.amazon.jsii.Kernel.get(this, "scalingRuleTimer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appId = java.util.Objects.requireNonNull(builder.appId, "appId is required");
            this.scalingRuleName = java.util.Objects.requireNonNull(builder.scalingRuleName, "scalingRuleName is required");
            this.scalingRuleType = java.util.Objects.requireNonNull(builder.scalingRuleType, "scalingRuleType is required");
            this.minReadyInstanceRatio = builder.minReadyInstanceRatio;
            this.minReadyInstances = builder.minReadyInstances;
            this.scalingRuleEnable = builder.scalingRuleEnable;
            this.scalingRuleMetric = builder.scalingRuleMetric;
            this.scalingRuleTimer = builder.scalingRuleTimer;
        }

        @Override
        public final java.lang.Object getAppId() {
            return this.appId;
        }

        @Override
        public final java.lang.Object getScalingRuleName() {
            return this.scalingRuleName;
        }

        @Override
        public final java.lang.Object getScalingRuleType() {
            return this.scalingRuleType;
        }

        @Override
        public final java.lang.Object getMinReadyInstanceRatio() {
            return this.minReadyInstanceRatio;
        }

        @Override
        public final java.lang.Object getMinReadyInstances() {
            return this.minReadyInstances;
        }

        @Override
        public final java.lang.Object getScalingRuleEnable() {
            return this.scalingRuleEnable;
        }

        @Override
        public final java.lang.Object getScalingRuleMetric() {
            return this.scalingRuleMetric;
        }

        @Override
        public final java.lang.Object getScalingRuleTimer() {
            return this.scalingRuleTimer;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("appId", om.valueToTree(this.getAppId()));
            data.set("scalingRuleName", om.valueToTree(this.getScalingRuleName()));
            data.set("scalingRuleType", om.valueToTree(this.getScalingRuleType()));
            if (this.getMinReadyInstanceRatio() != null) {
                data.set("minReadyInstanceRatio", om.valueToTree(this.getMinReadyInstanceRatio()));
            }
            if (this.getMinReadyInstances() != null) {
                data.set("minReadyInstances", om.valueToTree(this.getMinReadyInstances()));
            }
            if (this.getScalingRuleEnable() != null) {
                data.set("scalingRuleEnable", om.valueToTree(this.getScalingRuleEnable()));
            }
            if (this.getScalingRuleMetric() != null) {
                data.set("scalingRuleMetric", om.valueToTree(this.getScalingRuleMetric()));
            }
            if (this.getScalingRuleTimer() != null) {
                data.set("scalingRuleTimer", om.valueToTree(this.getScalingRuleTimer()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.ApplicationScalingRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ApplicationScalingRuleProps.Jsii$Proxy that = (ApplicationScalingRuleProps.Jsii$Proxy) o;

            if (!appId.equals(that.appId)) return false;
            if (!scalingRuleName.equals(that.scalingRuleName)) return false;
            if (!scalingRuleType.equals(that.scalingRuleType)) return false;
            if (this.minReadyInstanceRatio != null ? !this.minReadyInstanceRatio.equals(that.minReadyInstanceRatio) : that.minReadyInstanceRatio != null) return false;
            if (this.minReadyInstances != null ? !this.minReadyInstances.equals(that.minReadyInstances) : that.minReadyInstances != null) return false;
            if (this.scalingRuleEnable != null ? !this.scalingRuleEnable.equals(that.scalingRuleEnable) : that.scalingRuleEnable != null) return false;
            if (this.scalingRuleMetric != null ? !this.scalingRuleMetric.equals(that.scalingRuleMetric) : that.scalingRuleMetric != null) return false;
            return this.scalingRuleTimer != null ? this.scalingRuleTimer.equals(that.scalingRuleTimer) : that.scalingRuleTimer == null;
        }

        @Override
        public final int hashCode() {
            int result = this.appId.hashCode();
            result = 31 * result + (this.scalingRuleName.hashCode());
            result = 31 * result + (this.scalingRuleType.hashCode());
            result = 31 * result + (this.minReadyInstanceRatio != null ? this.minReadyInstanceRatio.hashCode() : 0);
            result = 31 * result + (this.minReadyInstances != null ? this.minReadyInstances.hashCode() : 0);
            result = 31 * result + (this.scalingRuleEnable != null ? this.scalingRuleEnable.hashCode() : 0);
            result = 31 * result + (this.scalingRuleMetric != null ? this.scalingRuleMetric.hashCode() : 0);
            result = 31 * result + (this.scalingRuleTimer != null ? this.scalingRuleTimer.hashCode() : 0);
            return result;
        }
    }
}
