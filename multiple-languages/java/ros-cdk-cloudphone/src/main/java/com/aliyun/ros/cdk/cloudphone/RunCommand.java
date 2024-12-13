package com.aliyun.ros.cdk.cloudphone;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CloudPhone::RunCommand</code>, which is used to run a command on cloud phones.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:05.533Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudphone.$Module.class, fqn = "@alicloud/ros-cdk-cloudphone.RunCommand")
public class RunCommand extends com.aliyun.ros.cdk.core.Resource {

    protected RunCommand(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RunCommand(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public RunCommand(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudphone.RunCommandProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public RunCommand(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudphone.RunCommandProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudphone.RunCommandProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudphone.RunCommandProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudphone.RunCommandProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudphone.RunCommand}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudphone.RunCommand> {
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
        private final com.aliyun.ros.cdk.cloudphone.RunCommandProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudphone.RunCommandProps.Builder();
        }

        /**
         * Property command: The command to be executed.
         * <p>
         * The maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (/), colon (:), medium line (-).
         * <p>
         * @return {@code this}
         * @param command Property command: The command to be executed. This parameter is required.
         */
        public Builder command(final java.lang.String command) {
            this.props.command(command);
            return this;
        }
        /**
         * Property command: The command to be executed.
         * <p>
         * The maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (/), colon (:), medium line (-).
         * <p>
         * @return {@code this}
         * @param command Property command: The command to be executed. This parameter is required.
         */
        public Builder command(final com.aliyun.ros.cdk.core.IResolvable command) {
            this.props.command(command);
            return this;
        }

        /**
         * Property instanceIds: ID of the instance executing the command.
         * <p>
         * Range of n: 1 ~ 10
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: ID of the instance executing the command. This parameter is required.
         */
        public Builder instanceIds(final com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }
        /**
         * Property instanceIds: ID of the instance executing the command.
         * <p>
         * Range of n: 1 ~ 10
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: ID of the instance executing the command. This parameter is required.
         */
        public Builder instanceIds(final java.util.List<? extends java.lang.Object> instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }

        /**
         * Property runAgainOn: The stage of executing the command again.
         * <p>
         * @return {@code this}
         * @param runAgainOn Property runAgainOn: The stage of executing the command again. This parameter is required.
         */
        public Builder runAgainOn(final com.aliyun.ros.cdk.core.IResolvable runAgainOn) {
            this.props.runAgainOn(runAgainOn);
            return this;
        }
        /**
         * Property runAgainOn: The stage of executing the command again.
         * <p>
         * @return {@code this}
         * @param runAgainOn Property runAgainOn: The stage of executing the command again. This parameter is required.
         */
        public Builder runAgainOn(final java.util.List<? extends java.lang.Object> runAgainOn) {
            this.props.runAgainOn(runAgainOn);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudphone.RunCommand}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudphone.RunCommand build() {
            return new com.aliyun.ros.cdk.cloudphone.RunCommand(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
