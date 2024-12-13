package com.aliyun.ros.cdk.fc3;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::FC3::Trigger</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:08.485Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.Trigger")
public class Trigger extends com.aliyun.ros.cdk.core.Resource {

    protected Trigger(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Trigger(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Trigger(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.TriggerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Trigger(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.TriggerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute FunctionName: Function name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFunctionName() {
        return software.amazon.jsii.Kernel.get(this, "attrFunctionName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TriggerId: The trigger ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTriggerId() {
        return software.amazon.jsii.Kernel.get(this, "attrTriggerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TriggerName: Trigger name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTriggerName() {
        return software.amazon.jsii.Kernel.get(this, "attrTriggerName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UrlInternet: The public domain address.
     * <p>
     * You can access HTTP triggers over the Internet by using HTTP or HTTPS.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUrlInternet() {
        return software.amazon.jsii.Kernel.get(this, "attrUrlInternet", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UrlIntranet: The private endpoint.
     * <p>
     * In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUrlIntranet() {
        return software.amazon.jsii.Kernel.get(this, "attrUrlIntranet", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.TriggerProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc3.TriggerProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.TriggerProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc3.Trigger}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc3.Trigger> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.fc3.TriggerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc3.TriggerProps.Builder();
        }

        /**
         * Property functionName: The name of the function.
         * <p>
         * @return {@code this}
         * @param functionName Property functionName: The name of the function. This parameter is required.
         */
        public Builder functionName(final java.lang.String functionName) {
            this.props.functionName(functionName);
            return this;
        }
        /**
         * Property functionName: The name of the function.
         * <p>
         * @return {@code this}
         * @param functionName Property functionName: The name of the function. This parameter is required.
         */
        public Builder functionName(final com.aliyun.ros.cdk.core.IResolvable functionName) {
            this.props.functionName(functionName);
            return this;
        }

        /**
         * Property triggerConfig: Trigger config.
         * <p>
         * @return {@code this}
         * @param triggerConfig Property triggerConfig: Trigger config. This parameter is required.
         */
        public Builder triggerConfig(final com.aliyun.ros.cdk.core.IResolvable triggerConfig) {
            this.props.triggerConfig(triggerConfig);
            return this;
        }
        /**
         * Property triggerConfig: Trigger config.
         * <p>
         * @return {@code this}
         * @param triggerConfig Property triggerConfig: Trigger config. This parameter is required.
         */
        public Builder triggerConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> triggerConfig) {
            this.props.triggerConfig(triggerConfig);
            return this;
        }

        /**
         * Property triggerName: Name of the trigger.
         * <p>
         * @return {@code this}
         * @param triggerName Property triggerName: Name of the trigger. This parameter is required.
         */
        public Builder triggerName(final java.lang.String triggerName) {
            this.props.triggerName(triggerName);
            return this;
        }
        /**
         * Property triggerName: Name of the trigger.
         * <p>
         * @return {@code this}
         * @param triggerName Property triggerName: Name of the trigger. This parameter is required.
         */
        public Builder triggerName(final com.aliyun.ros.cdk.core.IResolvable triggerName) {
            this.props.triggerName(triggerName);
            return this;
        }

        /**
         * Property triggerType: Type of the trigger.
         * <p>
         * @return {@code this}
         * @param triggerType Property triggerType: Type of the trigger. This parameter is required.
         */
        public Builder triggerType(final java.lang.String triggerType) {
            this.props.triggerType(triggerType);
            return this;
        }
        /**
         * Property triggerType: Type of the trigger.
         * <p>
         * @return {@code this}
         * @param triggerType Property triggerType: Type of the trigger. This parameter is required.
         */
        public Builder triggerType(final com.aliyun.ros.cdk.core.IResolvable triggerType) {
            this.props.triggerType(triggerType);
            return this;
        }

        /**
         * Property description: Description of the trigger.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the trigger. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the trigger.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the trigger. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property invocationRole: Invocation role.
         * <p>
         * @return {@code this}
         * @param invocationRole Property invocationRole: Invocation role. This parameter is required.
         */
        public Builder invocationRole(final java.lang.String invocationRole) {
            this.props.invocationRole(invocationRole);
            return this;
        }
        /**
         * Property invocationRole: Invocation role.
         * <p>
         * @return {@code this}
         * @param invocationRole Property invocationRole: Invocation role. This parameter is required.
         */
        public Builder invocationRole(final com.aliyun.ros.cdk.core.IResolvable invocationRole) {
            this.props.invocationRole(invocationRole);
            return this;
        }

        /**
         * Property qualifier: Qualifier of the trigger.
         * <p>
         * @return {@code this}
         * @param qualifier Property qualifier: Qualifier of the trigger. This parameter is required.
         */
        public Builder qualifier(final java.lang.String qualifier) {
            this.props.qualifier(qualifier);
            return this;
        }
        /**
         * Property qualifier: Qualifier of the trigger.
         * <p>
         * @return {@code this}
         * @param qualifier Property qualifier: Qualifier of the trigger. This parameter is required.
         */
        public Builder qualifier(final com.aliyun.ros.cdk.core.IResolvable qualifier) {
            this.props.qualifier(qualifier);
            return this;
        }

        /**
         * Property sourceArn: Source ARN of the trigger.
         * <p>
         * @return {@code this}
         * @param sourceArn Property sourceArn: Source ARN of the trigger. This parameter is required.
         */
        public Builder sourceArn(final java.lang.String sourceArn) {
            this.props.sourceArn(sourceArn);
            return this;
        }
        /**
         * Property sourceArn: Source ARN of the trigger.
         * <p>
         * @return {@code this}
         * @param sourceArn Property sourceArn: Source ARN of the trigger. This parameter is required.
         */
        public Builder sourceArn(final com.aliyun.ros.cdk.core.IResolvable sourceArn) {
            this.props.sourceArn(sourceArn);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc3.Trigger}.
         */
        @Override
        public com.aliyun.ros.cdk.fc3.Trigger build() {
            return new com.aliyun.ros.cdk.fc3.Trigger(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
