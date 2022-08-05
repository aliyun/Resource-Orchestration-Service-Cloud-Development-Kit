package com.aliyun.ros.cdk.fc;

/**
 * A ROS resource type:  `ALIYUN::FC::Trigger`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:04.458Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.Trigger")
public class Trigger extends com.aliyun.ros.cdk.core.Resource {

    protected Trigger(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Trigger(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::FC::Trigger`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
     * Create a new `ALIYUN::FC::Trigger`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFunctionName() {
        return software.amazon.jsii.Kernel.get(this, "attrFunctionName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ServiceName: Service name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.fc.Trigger}.
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
