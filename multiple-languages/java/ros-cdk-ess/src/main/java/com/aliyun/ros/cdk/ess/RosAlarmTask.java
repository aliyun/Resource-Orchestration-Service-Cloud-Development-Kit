package com.aliyun.ros.cdk.ess;

/**
 * A ROS template type:  `ALIYUN::ESS::AlarmTask`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:41.589Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosAlarmTask")
public class RosAlarmTask extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAlarmTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAlarmTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ess.RosAlarmTask.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ESS::AlarmTask`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAlarmTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.RosAlarmTaskProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAlarmTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrAlarmTaskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAlarmAction() {
        return software.amazon.jsii.Kernel.get(this, "alarmAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAlarmAction(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "alarmAction", java.util.Objects.requireNonNull(value, "alarmAction is required"));
    }

    /**
     */
    public void setAlarmAction(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "alarmAction", java.util.Objects.requireNonNull(value, "alarmAction is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getMetricName() {
        return software.amazon.jsii.Kernel.get(this, "metricName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMetricName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "metricName", java.util.Objects.requireNonNull(value, "metricName is required"));
    }

    /**
     */
    public void setMetricName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "metricName", java.util.Objects.requireNonNull(value, "metricName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scalingGroupId", java.util.Objects.requireNonNull(value, "scalingGroupId is required"));
    }

    /**
     */
    public void setScalingGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingGroupId", java.util.Objects.requireNonNull(value, "scalingGroupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getThreshold() {
        return software.amazon.jsii.Kernel.get(this, "threshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setThreshold(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "threshold", java.util.Objects.requireNonNull(value, "threshold is required"));
    }

    /**
     */
    public void setThreshold(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "threshold", java.util.Objects.requireNonNull(value, "threshold is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getComparisonOperator() {
        return software.amazon.jsii.Kernel.get(this, "comparisonOperator", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setComparisonOperator(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "comparisonOperator", value);
    }

    /**
     */
    public void setComparisonOperator(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "comparisonOperator", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDimensions() {
        return software.amazon.jsii.Kernel.get(this, "dimensions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDimensions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dimensions", value);
    }

    /**
     */
    public void setDimensions(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "dimensions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEvaluationCount() {
        return software.amazon.jsii.Kernel.get(this, "evaluationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEvaluationCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "evaluationCount", value);
    }

    /**
     */
    public void setEvaluationCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "evaluationCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGroupId() {
        return software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupId(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "groupId", value);
    }

    /**
     */
    public void setGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMetricType() {
        return software.amazon.jsii.Kernel.get(this, "metricType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMetricType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "metricType", value);
    }

    /**
     */
    public void setMetricType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "metricType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStatistics() {
        return software.amazon.jsii.Kernel.get(this, "statistics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStatistics(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "statistics", value);
    }

    /**
     */
    public void setStatistics(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "statistics", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosAlarmTask.DimensionsProperty")
    @software.amazon.jsii.Jsii.Proxy(DimensionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DimensionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDimensionKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDimensionValue();

        /**
         * @return a {@link Builder} of {@link DimensionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DimensionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DimensionsProperty> {
            java.lang.Object dimensionKey;
            java.lang.Object dimensionValue;

            /**
             * Sets the value of {@link DimensionsProperty#getDimensionKey}
             * @param dimensionKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dimensionKey(java.lang.String dimensionKey) {
                this.dimensionKey = dimensionKey;
                return this;
            }

            /**
             * Sets the value of {@link DimensionsProperty#getDimensionKey}
             * @param dimensionKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dimensionKey(com.aliyun.ros.cdk.core.IResolvable dimensionKey) {
                this.dimensionKey = dimensionKey;
                return this;
            }

            /**
             * Sets the value of {@link DimensionsProperty#getDimensionValue}
             * @param dimensionValue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dimensionValue(java.lang.String dimensionValue) {
                this.dimensionValue = dimensionValue;
                return this;
            }

            /**
             * Sets the value of {@link DimensionsProperty#getDimensionValue}
             * @param dimensionValue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dimensionValue(com.aliyun.ros.cdk.core.IResolvable dimensionValue) {
                this.dimensionValue = dimensionValue;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DimensionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DimensionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DimensionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DimensionsProperty {
            private final java.lang.Object dimensionKey;
            private final java.lang.Object dimensionValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.dimensionKey = software.amazon.jsii.Kernel.get(this, "dimensionKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dimensionValue = software.amazon.jsii.Kernel.get(this, "dimensionValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.dimensionKey = java.util.Objects.requireNonNull(builder.dimensionKey, "dimensionKey is required");
                this.dimensionValue = java.util.Objects.requireNonNull(builder.dimensionValue, "dimensionValue is required");
            }

            @Override
            public final java.lang.Object getDimensionKey() {
                return this.dimensionKey;
            }

            @Override
            public final java.lang.Object getDimensionValue() {
                return this.dimensionValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("dimensionKey", om.valueToTree(this.getDimensionKey()));
                data.set("dimensionValue", om.valueToTree(this.getDimensionValue()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosAlarmTask.DimensionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DimensionsProperty.Jsii$Proxy that = (DimensionsProperty.Jsii$Proxy) o;

                if (!dimensionKey.equals(that.dimensionKey)) return false;
                return this.dimensionValue.equals(that.dimensionValue);
            }

            @Override
            public final int hashCode() {
                int result = this.dimensionKey.hashCode();
                result = 31 * result + (this.dimensionValue.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.RosAlarmTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.RosAlarmTask> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ess.RosAlarmTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.RosAlarmTaskProps.Builder();
        }

        /**
         * @return {@code this}
         * @param alarmAction This parameter is required.
         */
        public Builder alarmAction(final com.aliyun.ros.cdk.core.IResolvable alarmAction) {
            this.props.alarmAction(alarmAction);
            return this;
        }
        /**
         * @return {@code this}
         * @param alarmAction This parameter is required.
         */
        public Builder alarmAction(final java.util.List<? extends java.lang.Object> alarmAction) {
            this.props.alarmAction(alarmAction);
            return this;
        }

        /**
         * @return {@code this}
         * @param metricName This parameter is required.
         */
        public Builder metricName(final java.lang.String metricName) {
            this.props.metricName(metricName);
            return this;
        }
        /**
         * @return {@code this}
         * @param metricName This parameter is required.
         */
        public Builder metricName(final com.aliyun.ros.cdk.core.IResolvable metricName) {
            this.props.metricName(metricName);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingGroupId This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingGroupId This parameter is required.
         */
        public Builder scalingGroupId(final com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param threshold This parameter is required.
         */
        public Builder threshold(final java.lang.Number threshold) {
            this.props.threshold(threshold);
            return this;
        }
        /**
         * @return {@code this}
         * @param threshold This parameter is required.
         */
        public Builder threshold(final com.aliyun.ros.cdk.core.IResolvable threshold) {
            this.props.threshold(threshold);
            return this;
        }

        /**
         * @return {@code this}
         * @param comparisonOperator This parameter is required.
         */
        public Builder comparisonOperator(final java.lang.String comparisonOperator) {
            this.props.comparisonOperator(comparisonOperator);
            return this;
        }
        /**
         * @return {@code this}
         * @param comparisonOperator This parameter is required.
         */
        public Builder comparisonOperator(final com.aliyun.ros.cdk.core.IResolvable comparisonOperator) {
            this.props.comparisonOperator(comparisonOperator);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param dimensions This parameter is required.
         */
        public Builder dimensions(final com.aliyun.ros.cdk.core.IResolvable dimensions) {
            this.props.dimensions(dimensions);
            return this;
        }
        /**
         * @return {@code this}
         * @param dimensions This parameter is required.
         */
        public Builder dimensions(final java.util.List<? extends java.lang.Object> dimensions) {
            this.props.dimensions(dimensions);
            return this;
        }

        /**
         * @return {@code this}
         * @param evaluationCount This parameter is required.
         */
        public Builder evaluationCount(final java.lang.Number evaluationCount) {
            this.props.evaluationCount(evaluationCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param evaluationCount This parameter is required.
         */
        public Builder evaluationCount(final com.aliyun.ros.cdk.core.IResolvable evaluationCount) {
            this.props.evaluationCount(evaluationCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param groupId This parameter is required.
         */
        public Builder groupId(final java.lang.Number groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupId This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param metricType This parameter is required.
         */
        public Builder metricType(final java.lang.String metricType) {
            this.props.metricType(metricType);
            return this;
        }
        /**
         * @return {@code this}
         * @param metricType This parameter is required.
         */
        public Builder metricType(final com.aliyun.ros.cdk.core.IResolvable metricType) {
            this.props.metricType(metricType);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param statistics This parameter is required.
         */
        public Builder statistics(final java.lang.String statistics) {
            this.props.statistics(statistics);
            return this;
        }
        /**
         * @return {@code this}
         * @param statistics This parameter is required.
         */
        public Builder statistics(final com.aliyun.ros.cdk.core.IResolvable statistics) {
            this.props.statistics(statistics);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ess.RosAlarmTask}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.RosAlarmTask build() {
            return new com.aliyun.ros.cdk.ess.RosAlarmTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
