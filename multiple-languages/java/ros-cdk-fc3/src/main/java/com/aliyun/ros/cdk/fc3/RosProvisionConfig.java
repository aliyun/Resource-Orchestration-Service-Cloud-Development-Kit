package com.aliyun.ros.cdk.fc3;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::FC3::ProvisionConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:06.946Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosProvisionConfig")
public class RosProvisionConfig extends com.aliyun.ros.cdk.core.RosResource {

    protected RosProvisionConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosProvisionConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.fc3.RosProvisionConfig.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosProvisionConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.RosProvisionConfigProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDefaultTarget() {
        return software.amazon.jsii.Kernel.get(this, "defaultTarget", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultTarget(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "defaultTarget", java.util.Objects.requireNonNull(value, "defaultTarget is required"));
    }

    /**
     */
    public void setDefaultTarget(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultTarget", java.util.Objects.requireNonNull(value, "defaultTarget is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFunctionName() {
        return software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFunctionName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "functionName", java.util.Objects.requireNonNull(value, "functionName is required"));
    }

    /**
     */
    public void setFunctionName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "functionName", java.util.Objects.requireNonNull(value, "functionName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAlwaysAllocateCpu() {
        return software.amazon.jsii.Kernel.get(this, "alwaysAllocateCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAlwaysAllocateCpu(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "alwaysAllocateCpu", value);
    }

    /**
     */
    public void setAlwaysAllocateCpu(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "alwaysAllocateCpu", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAlwaysAllocateGpu() {
        return software.amazon.jsii.Kernel.get(this, "alwaysAllocateGpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAlwaysAllocateGpu(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "alwaysAllocateGpu", value);
    }

    /**
     */
    public void setAlwaysAllocateGpu(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "alwaysAllocateGpu", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQualifier() {
        return software.amazon.jsii.Kernel.get(this, "qualifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQualifier(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "qualifier", value);
    }

    /**
     */
    public void setQualifier(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "qualifier", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScheduledActions() {
        return software.amazon.jsii.Kernel.get(this, "scheduledActions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScheduledActions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scheduledActions", value);
    }

    /**
     */
    public void setScheduledActions(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.fc3.RosProvisionConfig.ScheduledActionsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.fc3.RosProvisionConfig.ScheduledActionsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "scheduledActions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTargetTrackingPolicies() {
        return software.amazon.jsii.Kernel.get(this, "targetTrackingPolicies", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetTrackingPolicies(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetTrackingPolicies", value);
    }

    /**
     */
    public void setTargetTrackingPolicies(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.fc3.RosProvisionConfig.TargetTrackingPoliciesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.fc3.RosProvisionConfig.TargetTrackingPoliciesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "targetTrackingPolicies", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosProvisionConfig.ScheduledActionsProperty")
    @software.amazon.jsii.Jsii.Proxy(ScheduledActionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ScheduledActionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTarget();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEndTime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScheduleExpression() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartTime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeZone() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ScheduledActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ScheduledActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ScheduledActionsProperty> {
            java.lang.Object name;
            java.lang.Object target;
            java.lang.Object endTime;
            java.lang.Object scheduleExpression;
            java.lang.Object startTime;
            java.lang.Object timeZone;

            /**
             * Sets the value of {@link ScheduledActionsProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ScheduledActionsProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ScheduledActionsProperty#getTarget}
             * @param target the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder target(java.lang.Number target) {
                this.target = target;
                return this;
            }

            /**
             * Sets the value of {@link ScheduledActionsProperty#getTarget}
             * @param target the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder target(com.aliyun.ros.cdk.core.IResolvable target) {
                this.target = target;
                return this;
            }

            /**
             * Sets the value of {@link ScheduledActionsProperty#getEndTime}
             * @param endTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endTime(java.lang.String endTime) {
                this.endTime = endTime;
                return this;
            }

            /**
             * Sets the value of {@link ScheduledActionsProperty#getEndTime}
             * @param endTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endTime(com.aliyun.ros.cdk.core.IResolvable endTime) {
                this.endTime = endTime;
                return this;
            }

            /**
             * Sets the value of {@link ScheduledActionsProperty#getScheduleExpression}
             * @param scheduleExpression the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scheduleExpression(java.lang.String scheduleExpression) {
                this.scheduleExpression = scheduleExpression;
                return this;
            }

            /**
             * Sets the value of {@link ScheduledActionsProperty#getScheduleExpression}
             * @param scheduleExpression the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scheduleExpression(com.aliyun.ros.cdk.core.IResolvable scheduleExpression) {
                this.scheduleExpression = scheduleExpression;
                return this;
            }

            /**
             * Sets the value of {@link ScheduledActionsProperty#getStartTime}
             * @param startTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startTime(java.lang.String startTime) {
                this.startTime = startTime;
                return this;
            }

            /**
             * Sets the value of {@link ScheduledActionsProperty#getStartTime}
             * @param startTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startTime(com.aliyun.ros.cdk.core.IResolvable startTime) {
                this.startTime = startTime;
                return this;
            }

            /**
             * Sets the value of {@link ScheduledActionsProperty#getTimeZone}
             * @param timeZone the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeZone(java.lang.String timeZone) {
                this.timeZone = timeZone;
                return this;
            }

            /**
             * Sets the value of {@link ScheduledActionsProperty#getTimeZone}
             * @param timeZone the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeZone(com.aliyun.ros.cdk.core.IResolvable timeZone) {
                this.timeZone = timeZone;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ScheduledActionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ScheduledActionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ScheduledActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScheduledActionsProperty {
            private final java.lang.Object name;
            private final java.lang.Object target;
            private final java.lang.Object endTime;
            private final java.lang.Object scheduleExpression;
            private final java.lang.Object startTime;
            private final java.lang.Object timeZone;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.target = software.amazon.jsii.Kernel.get(this, "target", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.endTime = software.amazon.jsii.Kernel.get(this, "endTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scheduleExpression = software.amazon.jsii.Kernel.get(this, "scheduleExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startTime = software.amazon.jsii.Kernel.get(this, "startTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeZone = software.amazon.jsii.Kernel.get(this, "timeZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.target = java.util.Objects.requireNonNull(builder.target, "target is required");
                this.endTime = builder.endTime;
                this.scheduleExpression = builder.scheduleExpression;
                this.startTime = builder.startTime;
                this.timeZone = builder.timeZone;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getTarget() {
                return this.target;
            }

            @Override
            public final java.lang.Object getEndTime() {
                return this.endTime;
            }

            @Override
            public final java.lang.Object getScheduleExpression() {
                return this.scheduleExpression;
            }

            @Override
            public final java.lang.Object getStartTime() {
                return this.startTime;
            }

            @Override
            public final java.lang.Object getTimeZone() {
                return this.timeZone;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("name", om.valueToTree(this.getName()));
                data.set("target", om.valueToTree(this.getTarget()));
                if (this.getEndTime() != null) {
                    data.set("endTime", om.valueToTree(this.getEndTime()));
                }
                if (this.getScheduleExpression() != null) {
                    data.set("scheduleExpression", om.valueToTree(this.getScheduleExpression()));
                }
                if (this.getStartTime() != null) {
                    data.set("startTime", om.valueToTree(this.getStartTime()));
                }
                if (this.getTimeZone() != null) {
                    data.set("timeZone", om.valueToTree(this.getTimeZone()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosProvisionConfig.ScheduledActionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ScheduledActionsProperty.Jsii$Proxy that = (ScheduledActionsProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                if (!target.equals(that.target)) return false;
                if (this.endTime != null ? !this.endTime.equals(that.endTime) : that.endTime != null) return false;
                if (this.scheduleExpression != null ? !this.scheduleExpression.equals(that.scheduleExpression) : that.scheduleExpression != null) return false;
                if (this.startTime != null ? !this.startTime.equals(that.startTime) : that.startTime != null) return false;
                return this.timeZone != null ? this.timeZone.equals(that.timeZone) : that.timeZone == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.target.hashCode());
                result = 31 * result + (this.endTime != null ? this.endTime.hashCode() : 0);
                result = 31 * result + (this.scheduleExpression != null ? this.scheduleExpression.hashCode() : 0);
                result = 31 * result + (this.startTime != null ? this.startTime.hashCode() : 0);
                result = 31 * result + (this.timeZone != null ? this.timeZone.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosProvisionConfig.TargetTrackingPoliciesProperty")
    @software.amazon.jsii.Jsii.Proxy(TargetTrackingPoliciesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TargetTrackingPoliciesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMaxCapacity();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMetricTarget();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMetricType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMinCapacity();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEndTime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartTime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeZone() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TargetTrackingPoliciesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TargetTrackingPoliciesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TargetTrackingPoliciesProperty> {
            java.lang.Object maxCapacity;
            java.lang.Object metricTarget;
            java.lang.Object metricType;
            java.lang.Object minCapacity;
            java.lang.Object name;
            java.lang.Object endTime;
            java.lang.Object startTime;
            java.lang.Object timeZone;

            /**
             * Sets the value of {@link TargetTrackingPoliciesProperty#getMaxCapacity}
             * @param maxCapacity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxCapacity(java.lang.Number maxCapacity) {
                this.maxCapacity = maxCapacity;
                return this;
            }

            /**
             * Sets the value of {@link TargetTrackingPoliciesProperty#getMaxCapacity}
             * @param maxCapacity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxCapacity(com.aliyun.ros.cdk.core.IResolvable maxCapacity) {
                this.maxCapacity = maxCapacity;
                return this;
            }

            /**
             * Sets the value of {@link TargetTrackingPoliciesProperty#getMetricTarget}
             * @param metricTarget the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metricTarget(java.lang.Number metricTarget) {
                this.metricTarget = metricTarget;
                return this;
            }

            /**
             * Sets the value of {@link TargetTrackingPoliciesProperty#getMetricTarget}
             * @param metricTarget the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metricTarget(com.aliyun.ros.cdk.core.IResolvable metricTarget) {
                this.metricTarget = metricTarget;
                return this;
            }

            /**
             * Sets the value of {@link TargetTrackingPoliciesProperty#getMetricType}
             * @param metricType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metricType(java.lang.String metricType) {
                this.metricType = metricType;
                return this;
            }

            /**
             * Sets the value of {@link TargetTrackingPoliciesProperty#getMetricType}
             * @param metricType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metricType(com.aliyun.ros.cdk.core.IResolvable metricType) {
                this.metricType = metricType;
                return this;
            }

            /**
             * Sets the value of {@link TargetTrackingPoliciesProperty#getMinCapacity}
             * @param minCapacity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minCapacity(java.lang.Number minCapacity) {
                this.minCapacity = minCapacity;
                return this;
            }

            /**
             * Sets the value of {@link TargetTrackingPoliciesProperty#getMinCapacity}
             * @param minCapacity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minCapacity(com.aliyun.ros.cdk.core.IResolvable minCapacity) {
                this.minCapacity = minCapacity;
                return this;
            }

            /**
             * Sets the value of {@link TargetTrackingPoliciesProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link TargetTrackingPoliciesProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link TargetTrackingPoliciesProperty#getEndTime}
             * @param endTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endTime(java.lang.String endTime) {
                this.endTime = endTime;
                return this;
            }

            /**
             * Sets the value of {@link TargetTrackingPoliciesProperty#getEndTime}
             * @param endTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endTime(com.aliyun.ros.cdk.core.IResolvable endTime) {
                this.endTime = endTime;
                return this;
            }

            /**
             * Sets the value of {@link TargetTrackingPoliciesProperty#getStartTime}
             * @param startTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startTime(java.lang.String startTime) {
                this.startTime = startTime;
                return this;
            }

            /**
             * Sets the value of {@link TargetTrackingPoliciesProperty#getStartTime}
             * @param startTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startTime(com.aliyun.ros.cdk.core.IResolvable startTime) {
                this.startTime = startTime;
                return this;
            }

            /**
             * Sets the value of {@link TargetTrackingPoliciesProperty#getTimeZone}
             * @param timeZone the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeZone(java.lang.String timeZone) {
                this.timeZone = timeZone;
                return this;
            }

            /**
             * Sets the value of {@link TargetTrackingPoliciesProperty#getTimeZone}
             * @param timeZone the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeZone(com.aliyun.ros.cdk.core.IResolvable timeZone) {
                this.timeZone = timeZone;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TargetTrackingPoliciesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TargetTrackingPoliciesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TargetTrackingPoliciesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TargetTrackingPoliciesProperty {
            private final java.lang.Object maxCapacity;
            private final java.lang.Object metricTarget;
            private final java.lang.Object metricType;
            private final java.lang.Object minCapacity;
            private final java.lang.Object name;
            private final java.lang.Object endTime;
            private final java.lang.Object startTime;
            private final java.lang.Object timeZone;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.maxCapacity = software.amazon.jsii.Kernel.get(this, "maxCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.metricTarget = software.amazon.jsii.Kernel.get(this, "metricTarget", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.metricType = software.amazon.jsii.Kernel.get(this, "metricType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.minCapacity = software.amazon.jsii.Kernel.get(this, "minCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.endTime = software.amazon.jsii.Kernel.get(this, "endTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startTime = software.amazon.jsii.Kernel.get(this, "startTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeZone = software.amazon.jsii.Kernel.get(this, "timeZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.maxCapacity = java.util.Objects.requireNonNull(builder.maxCapacity, "maxCapacity is required");
                this.metricTarget = java.util.Objects.requireNonNull(builder.metricTarget, "metricTarget is required");
                this.metricType = java.util.Objects.requireNonNull(builder.metricType, "metricType is required");
                this.minCapacity = java.util.Objects.requireNonNull(builder.minCapacity, "minCapacity is required");
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.endTime = builder.endTime;
                this.startTime = builder.startTime;
                this.timeZone = builder.timeZone;
            }

            @Override
            public final java.lang.Object getMaxCapacity() {
                return this.maxCapacity;
            }

            @Override
            public final java.lang.Object getMetricTarget() {
                return this.metricTarget;
            }

            @Override
            public final java.lang.Object getMetricType() {
                return this.metricType;
            }

            @Override
            public final java.lang.Object getMinCapacity() {
                return this.minCapacity;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
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
            public final java.lang.Object getTimeZone() {
                return this.timeZone;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("maxCapacity", om.valueToTree(this.getMaxCapacity()));
                data.set("metricTarget", om.valueToTree(this.getMetricTarget()));
                data.set("metricType", om.valueToTree(this.getMetricType()));
                data.set("minCapacity", om.valueToTree(this.getMinCapacity()));
                data.set("name", om.valueToTree(this.getName()));
                if (this.getEndTime() != null) {
                    data.set("endTime", om.valueToTree(this.getEndTime()));
                }
                if (this.getStartTime() != null) {
                    data.set("startTime", om.valueToTree(this.getStartTime()));
                }
                if (this.getTimeZone() != null) {
                    data.set("timeZone", om.valueToTree(this.getTimeZone()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosProvisionConfig.TargetTrackingPoliciesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TargetTrackingPoliciesProperty.Jsii$Proxy that = (TargetTrackingPoliciesProperty.Jsii$Proxy) o;

                if (!maxCapacity.equals(that.maxCapacity)) return false;
                if (!metricTarget.equals(that.metricTarget)) return false;
                if (!metricType.equals(that.metricType)) return false;
                if (!minCapacity.equals(that.minCapacity)) return false;
                if (!name.equals(that.name)) return false;
                if (this.endTime != null ? !this.endTime.equals(that.endTime) : that.endTime != null) return false;
                if (this.startTime != null ? !this.startTime.equals(that.startTime) : that.startTime != null) return false;
                return this.timeZone != null ? this.timeZone.equals(that.timeZone) : that.timeZone == null;
            }

            @Override
            public final int hashCode() {
                int result = this.maxCapacity.hashCode();
                result = 31 * result + (this.metricTarget.hashCode());
                result = 31 * result + (this.metricType.hashCode());
                result = 31 * result + (this.minCapacity.hashCode());
                result = 31 * result + (this.name.hashCode());
                result = 31 * result + (this.endTime != null ? this.endTime.hashCode() : 0);
                result = 31 * result + (this.startTime != null ? this.startTime.hashCode() : 0);
                result = 31 * result + (this.timeZone != null ? this.timeZone.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc3.RosProvisionConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc3.RosProvisionConfig> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.fc3.RosProvisionConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc3.RosProvisionConfigProps.Builder();
        }

        /**
         * @return {@code this}
         * @param defaultTarget This parameter is required.
         */
        public Builder defaultTarget(final java.lang.Number defaultTarget) {
            this.props.defaultTarget(defaultTarget);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultTarget This parameter is required.
         */
        public Builder defaultTarget(final com.aliyun.ros.cdk.core.IResolvable defaultTarget) {
            this.props.defaultTarget(defaultTarget);
            return this;
        }

        /**
         * @return {@code this}
         * @param functionName This parameter is required.
         */
        public Builder functionName(final java.lang.String functionName) {
            this.props.functionName(functionName);
            return this;
        }
        /**
         * @return {@code this}
         * @param functionName This parameter is required.
         */
        public Builder functionName(final com.aliyun.ros.cdk.core.IResolvable functionName) {
            this.props.functionName(functionName);
            return this;
        }

        /**
         * @return {@code this}
         * @param alwaysAllocateCpu This parameter is required.
         */
        public Builder alwaysAllocateCpu(final java.lang.Boolean alwaysAllocateCpu) {
            this.props.alwaysAllocateCpu(alwaysAllocateCpu);
            return this;
        }
        /**
         * @return {@code this}
         * @param alwaysAllocateCpu This parameter is required.
         */
        public Builder alwaysAllocateCpu(final com.aliyun.ros.cdk.core.IResolvable alwaysAllocateCpu) {
            this.props.alwaysAllocateCpu(alwaysAllocateCpu);
            return this;
        }

        /**
         * @return {@code this}
         * @param alwaysAllocateGpu This parameter is required.
         */
        public Builder alwaysAllocateGpu(final java.lang.Boolean alwaysAllocateGpu) {
            this.props.alwaysAllocateGpu(alwaysAllocateGpu);
            return this;
        }
        /**
         * @return {@code this}
         * @param alwaysAllocateGpu This parameter is required.
         */
        public Builder alwaysAllocateGpu(final com.aliyun.ros.cdk.core.IResolvable alwaysAllocateGpu) {
            this.props.alwaysAllocateGpu(alwaysAllocateGpu);
            return this;
        }

        /**
         * @return {@code this}
         * @param qualifier This parameter is required.
         */
        public Builder qualifier(final java.lang.String qualifier) {
            this.props.qualifier(qualifier);
            return this;
        }
        /**
         * @return {@code this}
         * @param qualifier This parameter is required.
         */
        public Builder qualifier(final com.aliyun.ros.cdk.core.IResolvable qualifier) {
            this.props.qualifier(qualifier);
            return this;
        }

        /**
         * @return {@code this}
         * @param scheduledActions This parameter is required.
         */
        public Builder scheduledActions(final com.aliyun.ros.cdk.core.IResolvable scheduledActions) {
            this.props.scheduledActions(scheduledActions);
            return this;
        }
        /**
         * @return {@code this}
         * @param scheduledActions This parameter is required.
         */
        public Builder scheduledActions(final java.util.List<? extends java.lang.Object> scheduledActions) {
            this.props.scheduledActions(scheduledActions);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetTrackingPolicies This parameter is required.
         */
        public Builder targetTrackingPolicies(final com.aliyun.ros.cdk.core.IResolvable targetTrackingPolicies) {
            this.props.targetTrackingPolicies(targetTrackingPolicies);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetTrackingPolicies This parameter is required.
         */
        public Builder targetTrackingPolicies(final java.util.List<? extends java.lang.Object> targetTrackingPolicies) {
            this.props.targetTrackingPolicies(targetTrackingPolicies);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc3.RosProvisionConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.fc3.RosProvisionConfig build() {
            return new com.aliyun.ros.cdk.fc3.RosProvisionConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
