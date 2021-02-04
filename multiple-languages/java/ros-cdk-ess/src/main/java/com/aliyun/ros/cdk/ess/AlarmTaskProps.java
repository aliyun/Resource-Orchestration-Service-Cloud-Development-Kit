package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a `ALIYUN::ESS::AlarmTask`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.806Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.AlarmTaskProps")
@software.amazon.jsii.Jsii.Proxy(AlarmTaskProps.Jsii$Proxy.class)
public interface AlarmTaskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> getAlarmAction();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getMetricName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getScalingGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getThreshold();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getComparisonOperator() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDimensions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getEvaluationCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMetricType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getStatistics() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AlarmTaskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AlarmTaskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AlarmTaskProps> {
        private java.util.List<java.lang.String> alarmAction;
        private java.lang.String metricName;
        private java.lang.String scalingGroupId;
        private java.lang.Number threshold;
        private java.lang.String comparisonOperator;
        private java.lang.String description;
        private java.lang.Object dimensions;
        private java.lang.Number evaluationCount;
        private java.lang.Number groupId;
        private java.lang.String metricType;
        private java.lang.String name;
        private java.lang.Number period;
        private java.lang.String statistics;

        /**
         * Sets the value of {@link AlarmTaskProps#getAlarmAction}
         * @param alarmAction the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder alarmAction(java.util.List<java.lang.String> alarmAction) {
            this.alarmAction = alarmAction;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getMetricName}
         * @param metricName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder metricName(java.lang.String metricName) {
            this.metricName = metricName;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getScalingGroupId}
         * @param scalingGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getThreshold}
         * @param threshold the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder threshold(java.lang.Number threshold) {
            this.threshold = threshold;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getComparisonOperator}
         * @param comparisonOperator the value to be set.
         * @return {@code this}
         */
        public Builder comparisonOperator(java.lang.String comparisonOperator) {
            this.comparisonOperator = comparisonOperator;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getDimensions}
         * @param dimensions the value to be set.
         * @return {@code this}
         */
        public Builder dimensions(com.aliyun.ros.cdk.core.IResolvable dimensions) {
            this.dimensions = dimensions;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getDimensions}
         * @param dimensions the value to be set.
         * @return {@code this}
         */
        public Builder dimensions(java.util.List<? extends java.lang.Object> dimensions) {
            this.dimensions = dimensions;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getEvaluationCount}
         * @param evaluationCount the value to be set.
         * @return {@code this}
         */
        public Builder evaluationCount(java.lang.Number evaluationCount) {
            this.evaluationCount = evaluationCount;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getGroupId}
         * @param groupId the value to be set.
         * @return {@code this}
         */
        public Builder groupId(java.lang.Number groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getMetricType}
         * @param metricType the value to be set.
         * @return {@code this}
         */
        public Builder metricType(java.lang.String metricType) {
            this.metricType = metricType;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskProps#getStatistics}
         * @param statistics the value to be set.
         * @return {@code this}
         */
        public Builder statistics(java.lang.String statistics) {
            this.statistics = statistics;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AlarmTaskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AlarmTaskProps build() {
            return new Jsii$Proxy(alarmAction, metricName, scalingGroupId, threshold, comparisonOperator, description, dimensions, evaluationCount, groupId, metricType, name, period, statistics);
        }
    }

    /**
     * An implementation for {@link AlarmTaskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AlarmTaskProps {
        private final java.util.List<java.lang.String> alarmAction;
        private final java.lang.String metricName;
        private final java.lang.String scalingGroupId;
        private final java.lang.Number threshold;
        private final java.lang.String comparisonOperator;
        private final java.lang.String description;
        private final java.lang.Object dimensions;
        private final java.lang.Number evaluationCount;
        private final java.lang.Number groupId;
        private final java.lang.String metricType;
        private final java.lang.String name;
        private final java.lang.Number period;
        private final java.lang.String statistics;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.alarmAction = software.amazon.jsii.Kernel.get(this, "alarmAction", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.metricName = software.amazon.jsii.Kernel.get(this, "metricName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.scalingGroupId = software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.threshold = software.amazon.jsii.Kernel.get(this, "threshold", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.comparisonOperator = software.amazon.jsii.Kernel.get(this, "comparisonOperator", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dimensions = software.amazon.jsii.Kernel.get(this, "dimensions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.evaluationCount = software.amazon.jsii.Kernel.get(this, "evaluationCount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.metricType = software.amazon.jsii.Kernel.get(this, "metricType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.statistics = software.amazon.jsii.Kernel.get(this, "statistics", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.util.List<java.lang.String> alarmAction, final java.lang.String metricName, final java.lang.String scalingGroupId, final java.lang.Number threshold, final java.lang.String comparisonOperator, final java.lang.String description, final java.lang.Object dimensions, final java.lang.Number evaluationCount, final java.lang.Number groupId, final java.lang.String metricType, final java.lang.String name, final java.lang.Number period, final java.lang.String statistics) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.alarmAction = java.util.Objects.requireNonNull(alarmAction, "alarmAction is required");
            this.metricName = java.util.Objects.requireNonNull(metricName, "metricName is required");
            this.scalingGroupId = java.util.Objects.requireNonNull(scalingGroupId, "scalingGroupId is required");
            this.threshold = java.util.Objects.requireNonNull(threshold, "threshold is required");
            this.comparisonOperator = comparisonOperator;
            this.description = description;
            this.dimensions = dimensions;
            this.evaluationCount = evaluationCount;
            this.groupId = groupId;
            this.metricType = metricType;
            this.name = name;
            this.period = period;
            this.statistics = statistics;
        }

        @Override
        public final java.util.List<java.lang.String> getAlarmAction() {
            return this.alarmAction;
        }

        @Override
        public final java.lang.String getMetricName() {
            return this.metricName;
        }

        @Override
        public final java.lang.String getScalingGroupId() {
            return this.scalingGroupId;
        }

        @Override
        public final java.lang.Number getThreshold() {
            return this.threshold;
        }

        @Override
        public final java.lang.String getComparisonOperator() {
            return this.comparisonOperator;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDimensions() {
            return this.dimensions;
        }

        @Override
        public final java.lang.Number getEvaluationCount() {
            return this.evaluationCount;
        }

        @Override
        public final java.lang.Number getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.String getMetricType() {
            return this.metricType;
        }

        @Override
        public final java.lang.String getName() {
            return this.name;
        }

        @Override
        public final java.lang.Number getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.String getStatistics() {
            return this.statistics;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("alarmAction", om.valueToTree(this.getAlarmAction()));
            data.set("metricName", om.valueToTree(this.getMetricName()));
            data.set("scalingGroupId", om.valueToTree(this.getScalingGroupId()));
            data.set("threshold", om.valueToTree(this.getThreshold()));
            if (this.getComparisonOperator() != null) {
                data.set("comparisonOperator", om.valueToTree(this.getComparisonOperator()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDimensions() != null) {
                data.set("dimensions", om.valueToTree(this.getDimensions()));
            }
            if (this.getEvaluationCount() != null) {
                data.set("evaluationCount", om.valueToTree(this.getEvaluationCount()));
            }
            if (this.getGroupId() != null) {
                data.set("groupId", om.valueToTree(this.getGroupId()));
            }
            if (this.getMetricType() != null) {
                data.set("metricType", om.valueToTree(this.getMetricType()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getStatistics() != null) {
                data.set("statistics", om.valueToTree(this.getStatistics()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.AlarmTaskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AlarmTaskProps.Jsii$Proxy that = (AlarmTaskProps.Jsii$Proxy) o;

            if (!alarmAction.equals(that.alarmAction)) return false;
            if (!metricName.equals(that.metricName)) return false;
            if (!scalingGroupId.equals(that.scalingGroupId)) return false;
            if (!threshold.equals(that.threshold)) return false;
            if (this.comparisonOperator != null ? !this.comparisonOperator.equals(that.comparisonOperator) : that.comparisonOperator != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.dimensions != null ? !this.dimensions.equals(that.dimensions) : that.dimensions != null) return false;
            if (this.evaluationCount != null ? !this.evaluationCount.equals(that.evaluationCount) : that.evaluationCount != null) return false;
            if (this.groupId != null ? !this.groupId.equals(that.groupId) : that.groupId != null) return false;
            if (this.metricType != null ? !this.metricType.equals(that.metricType) : that.metricType != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            return this.statistics != null ? this.statistics.equals(that.statistics) : that.statistics == null;
        }

        @Override
        public final int hashCode() {
            int result = this.alarmAction.hashCode();
            result = 31 * result + (this.metricName.hashCode());
            result = 31 * result + (this.scalingGroupId.hashCode());
            result = 31 * result + (this.threshold.hashCode());
            result = 31 * result + (this.comparisonOperator != null ? this.comparisonOperator.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.dimensions != null ? this.dimensions.hashCode() : 0);
            result = 31 * result + (this.evaluationCount != null ? this.evaluationCount.hashCode() : 0);
            result = 31 * result + (this.groupId != null ? this.groupId.hashCode() : 0);
            result = 31 * result + (this.metricType != null ? this.metricType.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.statistics != null ? this.statistics.hashCode() : 0);
            return result;
        }
    }
}
