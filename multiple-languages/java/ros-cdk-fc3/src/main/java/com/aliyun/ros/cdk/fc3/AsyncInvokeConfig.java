package com.aliyun.ros.cdk.fc3;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::FC3::AsyncInvokeConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.002Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.AsyncInvokeConfig")
public class AsyncInvokeConfig extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.fc3.IAsyncInvokeConfig {

    protected AsyncInvokeConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AsyncInvokeConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AsyncInvokeConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.AsyncInvokeConfigProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AsyncInvokeConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.AsyncInvokeConfigProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.AsyncInvokeConfigProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc3.AsyncInvokeConfigProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.fc3.AsyncInvokeConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc3.AsyncInvokeConfig> {
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
        private final com.aliyun.ros.cdk.fc3.AsyncInvokeConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc3.AsyncInvokeConfigProps.Builder();
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
         * Property asyncTask: Whether to enable asynchronous tasks (optional).
         * <p>
         * @return {@code this}
         * @param asyncTask Property asyncTask: Whether to enable asynchronous tasks (optional). This parameter is required.
         */
        public Builder asyncTask(final java.lang.Boolean asyncTask) {
            this.props.asyncTask(asyncTask);
            return this;
        }
        /**
         * Property asyncTask: Whether to enable asynchronous tasks (optional).
         * <p>
         * @return {@code this}
         * @param asyncTask Property asyncTask: Whether to enable asynchronous tasks (optional). This parameter is required.
         */
        public Builder asyncTask(final com.aliyun.ros.cdk.core.IResolvable asyncTask) {
            this.props.asyncTask(asyncTask);
            return this;
        }

        /**
         * Property destinationConfig: Configuration structure of asynchronous invocation target (optional).
         * <p>
         * @return {@code this}
         * @param destinationConfig Property destinationConfig: Configuration structure of asynchronous invocation target (optional). This parameter is required.
         */
        public Builder destinationConfig(final com.aliyun.ros.cdk.core.IResolvable destinationConfig) {
            this.props.destinationConfig(destinationConfig);
            return this;
        }
        /**
         * Property destinationConfig: Configuration structure of asynchronous invocation target (optional).
         * <p>
         * @return {@code this}
         * @param destinationConfig Property destinationConfig: Configuration structure of asynchronous invocation target (optional). This parameter is required.
         */
        public Builder destinationConfig(final com.aliyun.ros.cdk.fc3.RosAsyncInvokeConfig.DestinationConfigProperty destinationConfig) {
            this.props.destinationConfig(destinationConfig);
            return this;
        }

        /**
         * Property maxAsyncEventAgeInSeconds: Maximum message survival time (optional), value range [1,604800], default is 86400, unit is seconds.
         * <p>
         * @return {@code this}
         * @param maxAsyncEventAgeInSeconds Property maxAsyncEventAgeInSeconds: Maximum message survival time (optional), value range [1,604800], default is 86400, unit is seconds. This parameter is required.
         */
        public Builder maxAsyncEventAgeInSeconds(final java.lang.Number maxAsyncEventAgeInSeconds) {
            this.props.maxAsyncEventAgeInSeconds(maxAsyncEventAgeInSeconds);
            return this;
        }
        /**
         * Property maxAsyncEventAgeInSeconds: Maximum message survival time (optional), value range [1,604800], default is 86400, unit is seconds.
         * <p>
         * @return {@code this}
         * @param maxAsyncEventAgeInSeconds Property maxAsyncEventAgeInSeconds: Maximum message survival time (optional), value range [1,604800], default is 86400, unit is seconds. This parameter is required.
         */
        public Builder maxAsyncEventAgeInSeconds(final com.aliyun.ros.cdk.core.IResolvable maxAsyncEventAgeInSeconds) {
            this.props.maxAsyncEventAgeInSeconds(maxAsyncEventAgeInSeconds);
            return this;
        }

        /**
         * Property maxAsyncRetryAttempts: Maximum number of retries after asynchronous invocation fails, optional.
         * <p>
         * Value range [0,8]. When not configured, the default number of retries is 3.
         * <p>
         * @return {@code this}
         * @param maxAsyncRetryAttempts Property maxAsyncRetryAttempts: Maximum number of retries after asynchronous invocation fails, optional. This parameter is required.
         */
        public Builder maxAsyncRetryAttempts(final java.lang.Number maxAsyncRetryAttempts) {
            this.props.maxAsyncRetryAttempts(maxAsyncRetryAttempts);
            return this;
        }
        /**
         * Property maxAsyncRetryAttempts: Maximum number of retries after asynchronous invocation fails, optional.
         * <p>
         * Value range [0,8]. When not configured, the default number of retries is 3.
         * <p>
         * @return {@code this}
         * @param maxAsyncRetryAttempts Property maxAsyncRetryAttempts: Maximum number of retries after asynchronous invocation fails, optional. This parameter is required.
         */
        public Builder maxAsyncRetryAttempts(final com.aliyun.ros.cdk.core.IResolvable maxAsyncRetryAttempts) {
            this.props.maxAsyncRetryAttempts(maxAsyncRetryAttempts);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc3.AsyncInvokeConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.fc3.AsyncInvokeConfig build() {
            return new com.aliyun.ros.cdk.fc3.AsyncInvokeConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
