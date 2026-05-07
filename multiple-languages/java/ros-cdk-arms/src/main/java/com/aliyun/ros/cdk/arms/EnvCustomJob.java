package com.aliyun.ros.cdk.arms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ARMS::EnvCustomJob</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:45.822Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.EnvCustomJob")
public class EnvCustomJob extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.arms.IEnvCustomJob {

    protected EnvCustomJob(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected EnvCustomJob(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public EnvCustomJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvCustomJobProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public EnvCustomJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvCustomJobProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConfigYaml: The YAML configuration string of the custom job.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigYaml() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigYaml", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnvCustomJobName: The name of the custom job.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvCustomJobName() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvCustomJobName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnvironmentId: The ID of the environment instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvCustomJobProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.EnvCustomJobProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.arms.EnvCustomJob}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.arms.EnvCustomJob> {
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
        private final com.aliyun.ros.cdk.arms.EnvCustomJobProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.arms.EnvCustomJobProps.Builder();
        }

        /**
         * Property configYaml: The YAML configuration string of the custom job.
         * <p>
         * @return {@code this}
         * @param configYaml Property configYaml: The YAML configuration string of the custom job. This parameter is required.
         */
        public Builder configYaml(final java.lang.String configYaml) {
            this.props.configYaml(configYaml);
            return this;
        }
        /**
         * Property configYaml: The YAML configuration string of the custom job.
         * <p>
         * @return {@code this}
         * @param configYaml Property configYaml: The YAML configuration string of the custom job. This parameter is required.
         */
        public Builder configYaml(final com.aliyun.ros.cdk.core.IResolvable configYaml) {
            this.props.configYaml(configYaml);
            return this;
        }

        /**
         * Property envCustomJobName: The name of the custom job.
         * <p>
         * @return {@code this}
         * @param envCustomJobName Property envCustomJobName: The name of the custom job. This parameter is required.
         */
        public Builder envCustomJobName(final java.lang.String envCustomJobName) {
            this.props.envCustomJobName(envCustomJobName);
            return this;
        }
        /**
         * Property envCustomJobName: The name of the custom job.
         * <p>
         * @return {@code this}
         * @param envCustomJobName Property envCustomJobName: The name of the custom job. This parameter is required.
         */
        public Builder envCustomJobName(final com.aliyun.ros.cdk.core.IResolvable envCustomJobName) {
            this.props.envCustomJobName(envCustomJobName);
            return this;
        }

        /**
         * Property environmentId: The ID of the environment instance.
         * <p>
         * @return {@code this}
         * @param environmentId Property environmentId: The ID of the environment instance. This parameter is required.
         */
        public Builder environmentId(final java.lang.String environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }
        /**
         * Property environmentId: The ID of the environment instance.
         * <p>
         * @return {@code this}
         * @param environmentId Property environmentId: The ID of the environment instance. This parameter is required.
         */
        public Builder environmentId(final com.aliyun.ros.cdk.core.IResolvable environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }

        /**
         * Property aliyunLang: The language.
         * <p>
         * Valid values: zh and en. Default value: zh.
         * <p>
         * @return {@code this}
         * @param aliyunLang Property aliyunLang: The language. This parameter is required.
         */
        public Builder aliyunLang(final java.lang.String aliyunLang) {
            this.props.aliyunLang(aliyunLang);
            return this;
        }
        /**
         * Property aliyunLang: The language.
         * <p>
         * Valid values: zh and en. Default value: zh.
         * <p>
         * @return {@code this}
         * @param aliyunLang Property aliyunLang: The language. This parameter is required.
         */
        public Builder aliyunLang(final com.aliyun.ros.cdk.core.IResolvable aliyunLang) {
            this.props.aliyunLang(aliyunLang);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.arms.EnvCustomJob}.
         */
        @Override
        public com.aliyun.ros.cdk.arms.EnvCustomJob build() {
            return new com.aliyun.ros.cdk.arms.EnvCustomJob(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
