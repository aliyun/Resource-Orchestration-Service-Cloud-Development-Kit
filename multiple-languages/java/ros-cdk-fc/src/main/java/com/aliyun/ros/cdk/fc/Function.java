package com.aliyun.ros.cdk.fc;

/**
 * A ROS resource type:  `ALIYUN::FC::Function`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:50.932Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.Function")
public class Function extends com.aliyun.ros.cdk.core.Resource {

    protected Function(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Function(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::FC::Function`.
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
    public Function(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.FunctionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::FC::Function`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Function(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.FunctionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ARN: The ARN for ALIYUN::ROS::CustomResource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute FunctionId: The function ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFunctionId() {
        return software.amazon.jsii.Kernel.get(this, "attrFunctionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute FunctionName: The function name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFunctionName() {
        return software.amazon.jsii.Kernel.get(this, "attrFunctionName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ServiceId: The service ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ServiceName: The service name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc.Function}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc.Function> {
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
        private final com.aliyun.ros.cdk.fc.FunctionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc.FunctionProps.Builder();
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
         * Property handler: The function execution entry point.
         * <p>
         * @return {@code this}
         * @param handler Property handler: The function execution entry point. This parameter is required.
         */
        public Builder handler(final java.lang.String handler) {
            this.props.handler(handler);
            return this;
        }
        /**
         * Property handler: The function execution entry point.
         * <p>
         * @return {@code this}
         * @param handler Property handler: The function execution entry point. This parameter is required.
         */
        public Builder handler(final com.aliyun.ros.cdk.core.IResolvable handler) {
            this.props.handler(handler);
            return this;
        }

        /**
         * Property runtime: The function runtime environment.
         * <p>
         * Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
         * <p>
         * @return {@code this}
         * @param runtime Property runtime: The function runtime environment. This parameter is required.
         */
        public Builder runtime(final java.lang.String runtime) {
            this.props.runtime(runtime);
            return this;
        }
        /**
         * Property runtime: The function runtime environment.
         * <p>
         * Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
         * <p>
         * @return {@code this}
         * @param runtime Property runtime: The function runtime environment. This parameter is required.
         */
        public Builder runtime(final com.aliyun.ros.cdk.core.IResolvable runtime) {
            this.props.runtime(runtime);
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
         * Property asyncConfiguration: Configuration of asynchronous function calls.
         * <p>
         * @return {@code this}
         * @param asyncConfiguration Property asyncConfiguration: Configuration of asynchronous function calls. This parameter is required.
         */
        public Builder asyncConfiguration(final com.aliyun.ros.cdk.core.IResolvable asyncConfiguration) {
            this.props.asyncConfiguration(asyncConfiguration);
            return this;
        }
        /**
         * Property asyncConfiguration: Configuration of asynchronous function calls.
         * <p>
         * @return {@code this}
         * @param asyncConfiguration Property asyncConfiguration: Configuration of asynchronous function calls. This parameter is required.
         */
        public Builder asyncConfiguration(final com.aliyun.ros.cdk.fc.RosFunction.AsyncConfigurationProperty asyncConfiguration) {
            this.props.asyncConfiguration(asyncConfiguration);
            return this;
        }

        /**
         * Property caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to.
         * <p>
         * The default value is 9000
         * <p>
         * @return {@code this}
         * @param caPort Property caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to. This parameter is required.
         */
        public Builder caPort(final java.lang.Number caPort) {
            this.props.caPort(caPort);
            return this;
        }
        /**
         * Property caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to.
         * <p>
         * The default value is 9000
         * <p>
         * @return {@code this}
         * @param caPort Property caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to. This parameter is required.
         */
        public Builder caPort(final com.aliyun.ros.cdk.core.IResolvable caPort) {
            this.props.caPort(caPort);
            return this;
        }

        /**
         * Property code: The code that contains the function implementation.
         * <p>
         * @return {@code this}
         * @param code Property code: The code that contains the function implementation. This parameter is required.
         */
        public Builder code(final com.aliyun.ros.cdk.core.IResolvable code) {
            this.props.code(code);
            return this;
        }
        /**
         * Property code: The code that contains the function implementation.
         * <p>
         * @return {@code this}
         * @param code Property code: The code that contains the function implementation. This parameter is required.
         */
        public Builder code(final com.aliyun.ros.cdk.fc.RosFunction.CodeProperty code) {
            this.props.code(code);
            return this;
        }

        /**
         * Property customContainerConfig: Custom container runtime related configuration.
         * <p>
         * After configuration, the function can be replaced with a custom container to execute the function
         * <p>
         * @return {@code this}
         * @param customContainerConfig Property customContainerConfig: Custom container runtime related configuration. This parameter is required.
         */
        public Builder customContainerConfig(final com.aliyun.ros.cdk.core.IResolvable customContainerConfig) {
            this.props.customContainerConfig(customContainerConfig);
            return this;
        }
        /**
         * Property customContainerConfig: Custom container runtime related configuration.
         * <p>
         * After configuration, the function can be replaced with a custom container to execute the function
         * <p>
         * @return {@code this}
         * @param customContainerConfig Property customContainerConfig: Custom container runtime related configuration. This parameter is required.
         */
        public Builder customContainerConfig(final com.aliyun.ros.cdk.fc.RosFunction.CustomContainerConfigProperty customContainerConfig) {
            this.props.customContainerConfig(customContainerConfig);
            return this;
        }

        /**
         * Property description: Function description.
         * <p>
         * @return {@code this}
         * @param description Property description: Function description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Function description.
         * <p>
         * @return {@code this}
         * @param description Property description: Function description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
         * <p>
         * @return {@code this}
         * @param environmentVariables Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function. This parameter is required.
         */
        public Builder environmentVariables(final com.aliyun.ros.cdk.core.IResolvable environmentVariables) {
            this.props.environmentVariables(environmentVariables);
            return this;
        }
        /**
         * Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
         * <p>
         * @return {@code this}
         * @param environmentVariables Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function. This parameter is required.
         */
        public Builder environmentVariables(final java.util.Map<java.lang.String, ? extends java.lang.Object> environmentVariables) {
            this.props.environmentVariables(environmentVariables);
            return this;
        }

        /**
         * Property initializationTimeout: the max execution time of the initializer, in second.
         * <p>
         * @return {@code this}
         * @param initializationTimeout Property initializationTimeout: the max execution time of the initializer, in second. This parameter is required.
         */
        public Builder initializationTimeout(final java.lang.Number initializationTimeout) {
            this.props.initializationTimeout(initializationTimeout);
            return this;
        }
        /**
         * Property initializationTimeout: the max execution time of the initializer, in second.
         * <p>
         * @return {@code this}
         * @param initializationTimeout Property initializationTimeout: the max execution time of the initializer, in second. This parameter is required.
         */
        public Builder initializationTimeout(final com.aliyun.ros.cdk.core.IResolvable initializationTimeout) {
            this.props.initializationTimeout(initializationTimeout);
            return this;
        }

        /**
         * Property initializer: the entry point of the initializer.
         * <p>
         * @return {@code this}
         * @param initializer Property initializer: the entry point of the initializer. This parameter is required.
         */
        public Builder initializer(final java.lang.String initializer) {
            this.props.initializer(initializer);
            return this;
        }
        /**
         * Property initializer: the entry point of the initializer.
         * <p>
         * @return {@code this}
         * @param initializer Property initializer: the entry point of the initializer. This parameter is required.
         */
        public Builder initializer(final com.aliyun.ros.cdk.core.IResolvable initializer) {
            this.props.initializer(initializer);
            return this;
        }

        /**
         * Property instanceConcurrency: Function instance concurrency.
         * <p>
         * Value can be between 1 to 100.
         * <p>
         * @return {@code this}
         * @param instanceConcurrency Property instanceConcurrency: Function instance concurrency. This parameter is required.
         */
        public Builder instanceConcurrency(final java.lang.Number instanceConcurrency) {
            this.props.instanceConcurrency(instanceConcurrency);
            return this;
        }
        /**
         * Property instanceConcurrency: Function instance concurrency.
         * <p>
         * Value can be between 1 to 100.
         * <p>
         * @return {@code this}
         * @param instanceConcurrency Property instanceConcurrency: Function instance concurrency. This parameter is required.
         */
        public Builder instanceConcurrency(final com.aliyun.ros.cdk.core.IResolvable instanceConcurrency) {
            this.props.instanceConcurrency(instanceConcurrency);
            return this;
        }

        /**
         * Property instanceType: Instance type.
         * <p>
         * Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: Instance type. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: Instance type.
         * <p>
         * Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: Instance type. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property memorySize: The amount of memory that’s used to run function, in MB.
         * <p>
         * Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
         * <p>
         * @return {@code this}
         * @param memorySize Property memorySize: The amount of memory that’s used to run function, in MB. This parameter is required.
         */
        public Builder memorySize(final java.lang.Number memorySize) {
            this.props.memorySize(memorySize);
            return this;
        }
        /**
         * Property memorySize: The amount of memory that’s used to run function, in MB.
         * <p>
         * Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
         * <p>
         * @return {@code this}
         * @param memorySize Property memorySize: The amount of memory that’s used to run function, in MB. This parameter is required.
         */
        public Builder memorySize(final com.aliyun.ros.cdk.core.IResolvable memorySize) {
            this.props.memorySize(memorySize);
            return this;
        }

        /**
         * Property timeout: The maximum time duration a function can run, in seconds.
         * <p>
         * After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 86400 seconds.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The maximum time duration a function can run, in seconds. This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * Property timeout: The maximum time duration a function can run, in seconds.
         * <p>
         * After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 86400 seconds.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The maximum time duration a function can run, in seconds. This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.fc.Function}.
         */
        @Override
        public com.aliyun.ros.cdk.fc.Function build() {
            return new com.aliyun.ros.cdk.fc.Function(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
