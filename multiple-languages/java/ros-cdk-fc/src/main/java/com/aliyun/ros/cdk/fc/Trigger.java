package com.aliyun.ros.cdk.fc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::FC::Trigger</code>, which is used to trigger the invocation of a function.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:22.686Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.Trigger")
public class Trigger extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.fc.ITrigger {

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
    public Trigger(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.TriggerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Trigger(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.TriggerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute FunctionName: Function name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFunctionName() {
        return software.amazon.jsii.Kernel.get(this, "attrFunctionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceName: Service name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TriggerId: The trigger ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTriggerId() {
        return software.amazon.jsii.Kernel.get(this, "attrTriggerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TriggerName: Trigger name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTriggerName() {
        return software.amazon.jsii.Kernel.get(this, "attrTriggerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UrlInternet: The public domain address.
     * <p>
     * You can access HTTP triggers over the Internet by using HTTP or HTTPS.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrlInternet() {
        return software.amazon.jsii.Kernel.get(this, "attrUrlInternet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UrlIntranet: The private endpoint.
     * <p>
     * In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrlIntranet() {
        return software.amazon.jsii.Kernel.get(this, "attrUrlIntranet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.TriggerProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc.TriggerProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc.Trigger}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc.Trigger> {
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
        private final com.aliyun.ros.cdk.fc.TriggerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc.TriggerProps.Builder();
        }

        /**
         * Property functionName: Function name.
         * <p>
         * @return {@code this}
         * @param functionName Property functionName: Function name. This parameter is required.
         */
        public Builder functionName(final java.lang.String functionName) {
            this.props.functionName(functionName);
            return this;
        }
        /**
         * Property functionName: Function name.
         * <p>
         * @return {@code this}
         * @param functionName Property functionName: Function name. This parameter is required.
         */
        public Builder functionName(final com.aliyun.ros.cdk.core.IResolvable functionName) {
            this.props.functionName(functionName);
            return this;
        }

        /**
         * Property serviceName: Service name.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Service name. This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }
        /**
         * Property serviceName: Service name.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Service name. This parameter is required.
         */
        public Builder serviceName(final com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * Property triggerConfig: Event source specific trigger configuration.
         * <p>
         * The value is different according to trigger type.
         * <p>
         * @return {@code this}
         * @param triggerConfig Property triggerConfig: Event source specific trigger configuration. This parameter is required.
         */
        public Builder triggerConfig(final com.aliyun.ros.cdk.core.IResolvable triggerConfig) {
            this.props.triggerConfig(triggerConfig);
            return this;
        }
        /**
         * Property triggerConfig: Event source specific trigger configuration.
         * <p>
         * The value is different according to trigger type.
         * <p>
         * @return {@code this}
         * @param triggerConfig Property triggerConfig: Event source specific trigger configuration. This parameter is required.
         */
        public Builder triggerConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> triggerConfig) {
            this.props.triggerConfig(triggerConfig);
            return this;
        }

        /**
         * Property triggerName: Trigger name.
         * <p>
         * Example : "image_resize"
         * <p>
         * @return {@code this}
         * @param triggerName Property triggerName: Trigger name. This parameter is required.
         */
        public Builder triggerName(final java.lang.String triggerName) {
            this.props.triggerName(triggerName);
            return this;
        }
        /**
         * Property triggerName: Trigger name.
         * <p>
         * Example : "image_resize"
         * <p>
         * @return {@code this}
         * @param triggerName Property triggerName: Trigger name. This parameter is required.
         */
        public Builder triggerName(final com.aliyun.ros.cdk.core.IResolvable triggerName) {
            this.props.triggerName(triggerName);
            return this;
        }

        /**
         * Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted. Example : "oss".
         * <p>
         * @return {@code this}
         * @param triggerType Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted. Example : "oss". This parameter is required.
         */
        public Builder triggerType(final java.lang.String triggerType) {
            this.props.triggerType(triggerType);
            return this;
        }
        /**
         * Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted. Example : "oss".
         * <p>
         * @return {@code this}
         * @param triggerType Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted. Example : "oss". This parameter is required.
         */
        public Builder triggerType(final com.aliyun.ros.cdk.core.IResolvable triggerType) {
            this.props.triggerType(triggerType);
            return this;
        }

        /**
         * Property invocationRole: The role grants event source the permission to run function on behalf of user.
         * <p>
         * This is optional for some triggers.
         * Example : "acs:ram::1234567890:role/fc-test"
         * <p>
         * @return {@code this}
         * @param invocationRole Property invocationRole: The role grants event source the permission to run function on behalf of user. This parameter is required.
         */
        public Builder invocationRole(final java.lang.String invocationRole) {
            this.props.invocationRole(invocationRole);
            return this;
        }
        /**
         * Property invocationRole: The role grants event source the permission to run function on behalf of user.
         * <p>
         * This is optional for some triggers.
         * Example : "acs:ram::1234567890:role/fc-test"
         * <p>
         * @return {@code this}
         * @param invocationRole Property invocationRole: The role grants event source the permission to run function on behalf of user. This parameter is required.
         */
        public Builder invocationRole(final com.aliyun.ros.cdk.core.IResolvable invocationRole) {
            this.props.invocationRole(invocationRole);
            return this;
        }

        /**
         * Property qualifier: service version or alias.
         * <p>
         * Example : "LATEST"
         * <p>
         * @return {@code this}
         * @param qualifier Property qualifier: service version or alias. This parameter is required.
         */
        public Builder qualifier(final java.lang.String qualifier) {
            this.props.qualifier(qualifier);
            return this;
        }
        /**
         * Property qualifier: service version or alias.
         * <p>
         * Example : "LATEST"
         * <p>
         * @return {@code this}
         * @param qualifier Property qualifier: service version or alias. This parameter is required.
         */
        public Builder qualifier(final com.aliyun.ros.cdk.core.IResolvable qualifier) {
            this.props.qualifier(qualifier);
            return this;
        }

        /**
         * Property sourceArn: The Aliyun Resource Name (ARN) of event source.
         * <p>
         * This is optional for some triggers.
         * Example : "acs:oss:cn-shanghai:12345:mybucket"
         * <p>
         * @return {@code this}
         * @param sourceArn Property sourceArn: The Aliyun Resource Name (ARN) of event source. This parameter is required.
         */
        public Builder sourceArn(final java.lang.String sourceArn) {
            this.props.sourceArn(sourceArn);
            return this;
        }
        /**
         * Property sourceArn: The Aliyun Resource Name (ARN) of event source.
         * <p>
         * This is optional for some triggers.
         * Example : "acs:oss:cn-shanghai:12345:mybucket"
         * <p>
         * @return {@code this}
         * @param sourceArn Property sourceArn: The Aliyun Resource Name (ARN) of event source. This parameter is required.
         */
        public Builder sourceArn(final com.aliyun.ros.cdk.core.IResolvable sourceArn) {
            this.props.sourceArn(sourceArn);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc.Trigger}.
         */
        @Override
        public com.aliyun.ros.cdk.fc.Trigger build() {
            return new com.aliyun.ros.cdk.fc.Trigger(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
