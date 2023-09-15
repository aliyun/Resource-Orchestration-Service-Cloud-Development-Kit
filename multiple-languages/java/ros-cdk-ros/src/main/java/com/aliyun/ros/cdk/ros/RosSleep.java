package com.aliyun.ros.cdk.ros;

/**
 * A ROS template type:  <code>ALIYUN::ROS::Sleep</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:50.232Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosSleep")
public class RosSleep extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSleep(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSleep(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ros.RosSleep.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::ROS::Sleep</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSleep(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.RosSleepProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCreateDuration() {
        return software.amazon.jsii.Kernel.get(this, "createDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCreateDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "createDuration", value);
    }

    /**
     */
    public void setCreateDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "createDuration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeleteDuration() {
        return software.amazon.jsii.Kernel.get(this, "deleteDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeleteDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "deleteDuration", value);
    }

    /**
     */
    public void setDeleteDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deleteDuration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTriggers() {
        return software.amazon.jsii.Kernel.get(this, "triggers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTriggers(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "triggers", value);
    }

    /**
     */
    public void setTriggers(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "triggers", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUpdateDuration() {
        return software.amazon.jsii.Kernel.get(this, "updateDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUpdateDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "updateDuration", value);
    }

    /**
     */
    public void setUpdateDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "updateDuration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUpdateRollbackDuration() {
        return software.amazon.jsii.Kernel.get(this, "updateRollbackDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUpdateRollbackDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "updateRollbackDuration", value);
    }

    /**
     */
    public void setUpdateRollbackDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "updateRollbackDuration", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ros.RosSleep}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ros.RosSleep> {
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
        private final com.aliyun.ros.cdk.ros.RosSleepProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ros.RosSleepProps.Builder();
        }

        /**
         * @return {@code this}
         * @param createDuration This parameter is required.
         */
        public Builder createDuration(final java.lang.Number createDuration) {
            this.props.createDuration(createDuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param createDuration This parameter is required.
         */
        public Builder createDuration(final com.aliyun.ros.cdk.core.IResolvable createDuration) {
            this.props.createDuration(createDuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param deleteDuration This parameter is required.
         */
        public Builder deleteDuration(final java.lang.Number deleteDuration) {
            this.props.deleteDuration(deleteDuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param deleteDuration This parameter is required.
         */
        public Builder deleteDuration(final com.aliyun.ros.cdk.core.IResolvable deleteDuration) {
            this.props.deleteDuration(deleteDuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param triggers This parameter is required.
         */
        public Builder triggers(final com.aliyun.ros.cdk.core.IResolvable triggers) {
            this.props.triggers(triggers);
            return this;
        }
        /**
         * @return {@code this}
         * @param triggers This parameter is required.
         */
        public Builder triggers(final java.util.Map<java.lang.String, ? extends java.lang.Object> triggers) {
            this.props.triggers(triggers);
            return this;
        }

        /**
         * @return {@code this}
         * @param updateDuration This parameter is required.
         */
        public Builder updateDuration(final java.lang.Number updateDuration) {
            this.props.updateDuration(updateDuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param updateDuration This parameter is required.
         */
        public Builder updateDuration(final com.aliyun.ros.cdk.core.IResolvable updateDuration) {
            this.props.updateDuration(updateDuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param updateRollbackDuration This parameter is required.
         */
        public Builder updateRollbackDuration(final java.lang.Number updateRollbackDuration) {
            this.props.updateRollbackDuration(updateRollbackDuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param updateRollbackDuration This parameter is required.
         */
        public Builder updateRollbackDuration(final com.aliyun.ros.cdk.core.IResolvable updateRollbackDuration) {
            this.props.updateRollbackDuration(updateRollbackDuration);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ros.RosSleep}.
         */
        @Override
        public com.aliyun.ros.cdk.ros.RosSleep build() {
            return new com.aliyun.ros.cdk.ros.RosSleep(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
