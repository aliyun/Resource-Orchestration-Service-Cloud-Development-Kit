package com.aliyun.ros.cdk.fc;

/**
 * A ROS template type:  <code>ALIYUN::FC::Trigger</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:00.410Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosTrigger")
public class RosTrigger extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTrigger(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTrigger(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.fc.RosTrigger.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::FC::Trigger</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTrigger(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.RosTriggerProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFunctionName() {
        return software.amazon.jsii.Kernel.get(this, "attrFunctionName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTriggerId() {
        return software.amazon.jsii.Kernel.get(this, "attrTriggerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTriggerName() {
        return software.amazon.jsii.Kernel.get(this, "attrTriggerName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUrlInternet() {
        return software.amazon.jsii.Kernel.get(this, "attrUrlInternet", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUrlIntranet() {
        return software.amazon.jsii.Kernel.get(this, "attrUrlIntranet", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getServiceName() {
        return software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServiceName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "serviceName", java.util.Objects.requireNonNull(value, "serviceName is required"));
    }

    /**
     */
    public void setServiceName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serviceName", java.util.Objects.requireNonNull(value, "serviceName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTriggerConfig() {
        return software.amazon.jsii.Kernel.get(this, "triggerConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTriggerConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "triggerConfig", java.util.Objects.requireNonNull(value, "triggerConfig is required"));
    }

    /**
     */
    public void setTriggerConfig(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "triggerConfig", java.util.Objects.requireNonNull(value, "triggerConfig is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTriggerName() {
        return software.amazon.jsii.Kernel.get(this, "triggerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTriggerName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "triggerName", java.util.Objects.requireNonNull(value, "triggerName is required"));
    }

    /**
     */
    public void setTriggerName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "triggerName", java.util.Objects.requireNonNull(value, "triggerName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTriggerType() {
        return software.amazon.jsii.Kernel.get(this, "triggerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTriggerType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "triggerType", java.util.Objects.requireNonNull(value, "triggerType is required"));
    }

    /**
     */
    public void setTriggerType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "triggerType", java.util.Objects.requireNonNull(value, "triggerType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInvocationRole() {
        return software.amazon.jsii.Kernel.get(this, "invocationRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInvocationRole(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "invocationRole", value);
    }

    /**
     */
    public void setInvocationRole(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "invocationRole", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceArn() {
        return software.amazon.jsii.Kernel.get(this, "sourceArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceArn(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceArn", value);
    }

    /**
     */
    public void setSourceArn(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceArn", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc.RosTrigger}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc.RosTrigger> {
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
        private final com.aliyun.ros.cdk.fc.RosTriggerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc.RosTriggerProps.Builder();
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
         * @param serviceName This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param serviceName This parameter is required.
         */
        public Builder serviceName(final com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param triggerConfig This parameter is required.
         */
        public Builder triggerConfig(final com.aliyun.ros.cdk.core.IResolvable triggerConfig) {
            this.props.triggerConfig(triggerConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param triggerConfig This parameter is required.
         */
        public Builder triggerConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> triggerConfig) {
            this.props.triggerConfig(triggerConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param triggerName This parameter is required.
         */
        public Builder triggerName(final java.lang.String triggerName) {
            this.props.triggerName(triggerName);
            return this;
        }
        /**
         * @return {@code this}
         * @param triggerName This parameter is required.
         */
        public Builder triggerName(final com.aliyun.ros.cdk.core.IResolvable triggerName) {
            this.props.triggerName(triggerName);
            return this;
        }

        /**
         * @return {@code this}
         * @param triggerType This parameter is required.
         */
        public Builder triggerType(final java.lang.String triggerType) {
            this.props.triggerType(triggerType);
            return this;
        }
        /**
         * @return {@code this}
         * @param triggerType This parameter is required.
         */
        public Builder triggerType(final com.aliyun.ros.cdk.core.IResolvable triggerType) {
            this.props.triggerType(triggerType);
            return this;
        }

        /**
         * @return {@code this}
         * @param invocationRole This parameter is required.
         */
        public Builder invocationRole(final java.lang.String invocationRole) {
            this.props.invocationRole(invocationRole);
            return this;
        }
        /**
         * @return {@code this}
         * @param invocationRole This parameter is required.
         */
        public Builder invocationRole(final com.aliyun.ros.cdk.core.IResolvable invocationRole) {
            this.props.invocationRole(invocationRole);
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
         * @param sourceArn This parameter is required.
         */
        public Builder sourceArn(final java.lang.String sourceArn) {
            this.props.sourceArn(sourceArn);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceArn This parameter is required.
         */
        public Builder sourceArn(final com.aliyun.ros.cdk.core.IResolvable sourceArn) {
            this.props.sourceArn(sourceArn);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc.RosTrigger}.
         */
        @Override
        public com.aliyun.ros.cdk.fc.RosTrigger build() {
            return new com.aliyun.ros.cdk.fc.RosTrigger(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
