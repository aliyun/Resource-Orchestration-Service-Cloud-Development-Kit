package com.aliyun.ros.cdk.bastionhost;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::BastionHost::PasswordTask</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:35:53.514Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bastionhost.$Module.class, fqn = "@alicloud/ros-cdk-bastionhost.PasswordTask")
public class PasswordTask extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.bastionhost.IPasswordTask {

    protected PasswordTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PasswordTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public PasswordTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bastionhost.PasswordTaskProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public PasswordTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bastionhost.PasswordTaskProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute TaskId: The ID of the password task.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bastionhost.PasswordTaskProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.bastionhost.PasswordTaskProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.bastionhost.PasswordTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.bastionhost.PasswordTask> {
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
        private final com.aliyun.ros.cdk.bastionhost.PasswordTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.bastionhost.PasswordTaskProps.Builder();
        }

        /**
         * Property instanceId: The ID of the BastionHost instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the BastionHost instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the BastionHost instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the BastionHost instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property name: The name of the password task.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the password task. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the password task.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the password task. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property taskScheduleType: The schedule type of the password task.
         * <p>
         * @return {@code this}
         * @param taskScheduleType Property taskScheduleType: The schedule type of the password task. This parameter is required.
         */
        public Builder taskScheduleType(final java.lang.String taskScheduleType) {
            this.props.taskScheduleType(taskScheduleType);
            return this;
        }
        /**
         * Property taskScheduleType: The schedule type of the password task.
         * <p>
         * @return {@code this}
         * @param taskScheduleType Property taskScheduleType: The schedule type of the password task. This parameter is required.
         */
        public Builder taskScheduleType(final com.aliyun.ros.cdk.core.IResolvable taskScheduleType) {
            this.props.taskScheduleType(taskScheduleType);
            return this;
        }

        /**
         * Property comment: The comment of the password task.
         * <p>
         * @return {@code this}
         * @param comment Property comment: The comment of the password task. This parameter is required.
         */
        public Builder comment(final java.lang.String comment) {
            this.props.comment(comment);
            return this;
        }
        /**
         * Property comment: The comment of the password task.
         * <p>
         * @return {@code this}
         * @param comment Property comment: The comment of the password task. This parameter is required.
         */
        public Builder comment(final com.aliyun.ros.cdk.core.IResolvable comment) {
            this.props.comment(comment);
            return this;
        }

        /**
         * Property credentialType: The credential type of the password task.
         * <p>
         * @return {@code this}
         * @param credentialType Property credentialType: The credential type of the password task. This parameter is required.
         */
        public Builder credentialType(final java.lang.String credentialType) {
            this.props.credentialType(credentialType);
            return this;
        }
        /**
         * Property credentialType: The credential type of the password task.
         * <p>
         * @return {@code this}
         * @param credentialType Property credentialType: The credential type of the password task. This parameter is required.
         */
        public Builder credentialType(final com.aliyun.ros.cdk.core.IResolvable credentialType) {
            this.props.credentialType(credentialType);
            return this;
        }

        /**
         * Property keyPairGenerateConfig: The key pair generate config of the password task.
         * <p>
         * @return {@code this}
         * @param keyPairGenerateConfig Property keyPairGenerateConfig: The key pair generate config of the password task. This parameter is required.
         */
        public Builder keyPairGenerateConfig(final java.lang.String keyPairGenerateConfig) {
            this.props.keyPairGenerateConfig(keyPairGenerateConfig);
            return this;
        }
        /**
         * Property keyPairGenerateConfig: The key pair generate config of the password task.
         * <p>
         * @return {@code this}
         * @param keyPairGenerateConfig Property keyPairGenerateConfig: The key pair generate config of the password task. This parameter is required.
         */
        public Builder keyPairGenerateConfig(final com.aliyun.ros.cdk.core.IResolvable keyPairGenerateConfig) {
            this.props.keyPairGenerateConfig(keyPairGenerateConfig);
            return this;
        }

        /**
         * Property passwordGenerateConfig: The password generate config of the password task.
         * <p>
         * @return {@code this}
         * @param passwordGenerateConfig Property passwordGenerateConfig: The password generate config of the password task. This parameter is required.
         */
        public Builder passwordGenerateConfig(final com.aliyun.ros.cdk.core.IResolvable passwordGenerateConfig) {
            this.props.passwordGenerateConfig(passwordGenerateConfig);
            return this;
        }
        /**
         * Property passwordGenerateConfig: The password generate config of the password task.
         * <p>
         * @return {@code this}
         * @param passwordGenerateConfig Property passwordGenerateConfig: The password generate config of the password task. This parameter is required.
         */
        public Builder passwordGenerateConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> passwordGenerateConfig) {
            this.props.passwordGenerateConfig(passwordGenerateConfig);
            return this;
        }

        /**
         * Property passwordGenerateType: The password generate type of the password task.
         * <p>
         * @return {@code this}
         * @param passwordGenerateType Property passwordGenerateType: The password generate type of the password task. This parameter is required.
         */
        public Builder passwordGenerateType(final java.lang.String passwordGenerateType) {
            this.props.passwordGenerateType(passwordGenerateType);
            return this;
        }
        /**
         * Property passwordGenerateType: The password generate type of the password task.
         * <p>
         * @return {@code this}
         * @param passwordGenerateType Property passwordGenerateType: The password generate type of the password task. This parameter is required.
         */
        public Builder passwordGenerateType(final com.aliyun.ros.cdk.core.IResolvable passwordGenerateType) {
            this.props.passwordGenerateType(passwordGenerateType);
            return this;
        }

        /**
         * Property taskScheduleConfig: The schedule config of the password task.
         * <p>
         * @return {@code this}
         * @param taskScheduleConfig Property taskScheduleConfig: The schedule config of the password task. This parameter is required.
         */
        public Builder taskScheduleConfig(final com.aliyun.ros.cdk.core.IResolvable taskScheduleConfig) {
            this.props.taskScheduleConfig(taskScheduleConfig);
            return this;
        }
        /**
         * Property taskScheduleConfig: The schedule config of the password task.
         * <p>
         * @return {@code this}
         * @param taskScheduleConfig Property taskScheduleConfig: The schedule config of the password task. This parameter is required.
         */
        public Builder taskScheduleConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> taskScheduleConfig) {
            this.props.taskScheduleConfig(taskScheduleConfig);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.bastionhost.PasswordTask}.
         */
        @Override
        public com.aliyun.ros.cdk.bastionhost.PasswordTask build() {
            return new com.aliyun.ros.cdk.bastionhost.PasswordTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
