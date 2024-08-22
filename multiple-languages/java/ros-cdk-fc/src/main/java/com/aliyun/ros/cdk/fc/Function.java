package com.aliyun.ros.cdk.fc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::FC::Function</code>, which is used to create a function.
 * <p>
 * Functions must be associated with services. All functions of a service share the same attributes as the service, such as service authorization and log configurations.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:25.233Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.Function")
public class Function extends com.aliyun.ros.cdk.core.Resource {

    protected Function(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Function(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Function(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.FunctionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Function(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.FunctionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Loads the fcFunction code from a local disk path.
     * <p>
     * @param path Either a directory with the Lambda code bundle or a .zip file. This parameter is required.
     */
    public void codeFromAsset(final @org.jetbrains.annotations.NotNull java.lang.String path) {
        software.amazon.jsii.Kernel.call(this, "codeFromAsset", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(path, "path is required") });
    }

    /**
     * Function handler code as an OSS object.
     * <p>
     * @param bucket The OSS bucket. This parameter is required.
     * @param key The object key. This parameter is required.
     */
    public void codeFromBucket(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.Bucket bucket, final @org.jetbrains.annotations.NotNull java.lang.String key) {
        software.amazon.jsii.Kernel.call(this, "codeFromBucket", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(bucket, "bucket is required"), java.util.Objects.requireNonNull(key, "key is required") });
    }

    /**
     * Inline code for FC fcFunction handler.
     * <p>
     * @param code The actual handler code (limited to 4KiB). This parameter is required.
     */
    public void codeFromInline(final @org.jetbrains.annotations.NotNull java.lang.String code) {
        software.amazon.jsii.Kernel.call(this, "codeFromInline", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(code, "code is required") });
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.FunctionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc.FunctionProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.FunctionProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
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
         * Supporting nodejs16、nodejs14、nodejs12、nodejs10、nodejs8、nodejs6、nodejs4.4、python3.10、python3.9、python3、python2.7、java11、java8、go1、php7.2、dotnetcore3.1、dotnetcore2.1、custom.debian10、custom和custom-container and so on
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
         * Supporting nodejs16、nodejs14、nodejs12、nodejs10、nodejs8、nodejs6、nodejs4.4、python3.10、python3.9、python3、python2.7、java11、java8、go1、php7.2、dotnetcore3.1、dotnetcore2.1、custom.debian10、custom和custom-container and so on
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
         * Property cpu: The number of vCPUs of the function.
         * <p>
         * The value must be a multiple of 0.05.
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: The number of vCPUs of the function. This parameter is required.
         */
        public Builder cpu(final java.lang.Number cpu) {
            this.props.cpu(cpu);
            return this;
        }
        /**
         * Property cpu: The number of vCPUs of the function.
         * <p>
         * The value must be a multiple of 0.05.
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: The number of vCPUs of the function. This parameter is required.
         */
        public Builder cpu(final com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.props.cpu(cpu);
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
         * Property customDns: The custom DNS configurations of the function.
         * <p>
         * @return {@code this}
         * @param customDns Property customDns: The custom DNS configurations of the function. This parameter is required.
         */
        public Builder customDns(final com.aliyun.ros.cdk.core.IResolvable customDns) {
            this.props.customDns(customDns);
            return this;
        }
        /**
         * Property customDns: The custom DNS configurations of the function.
         * <p>
         * @return {@code this}
         * @param customDns Property customDns: The custom DNS configurations of the function. This parameter is required.
         */
        public Builder customDns(final com.aliyun.ros.cdk.fc.RosFunction.CustomDNSProperty customDns) {
            this.props.customDns(customDns);
            return this;
        }

        /**
         * Property customHealthCheckConfig: The health check configurations for the custom runtime and custom container.
         * <p>
         * @return {@code this}
         * @param customHealthCheckConfig Property customHealthCheckConfig: The health check configurations for the custom runtime and custom container. This parameter is required.
         */
        public Builder customHealthCheckConfig(final com.aliyun.ros.cdk.core.IResolvable customHealthCheckConfig) {
            this.props.customHealthCheckConfig(customHealthCheckConfig);
            return this;
        }
        /**
         * Property customHealthCheckConfig: The health check configurations for the custom runtime and custom container.
         * <p>
         * @return {@code this}
         * @param customHealthCheckConfig Property customHealthCheckConfig: The health check configurations for the custom runtime and custom container. This parameter is required.
         */
        public Builder customHealthCheckConfig(final com.aliyun.ros.cdk.fc.RosFunction.CustomHealthCheckConfigProperty customHealthCheckConfig) {
            this.props.customHealthCheckConfig(customHealthCheckConfig);
            return this;
        }

        /**
         * Property customRuntimeConfig: Custom runtime related configuration.
         * <p>
         * @return {@code this}
         * @param customRuntimeConfig Property customRuntimeConfig: Custom runtime related configuration. This parameter is required.
         */
        public Builder customRuntimeConfig(final com.aliyun.ros.cdk.core.IResolvable customRuntimeConfig) {
            this.props.customRuntimeConfig(customRuntimeConfig);
            return this;
        }
        /**
         * Property customRuntimeConfig: Custom runtime related configuration.
         * <p>
         * @return {@code this}
         * @param customRuntimeConfig Property customRuntimeConfig: Custom runtime related configuration. This parameter is required.
         */
        public Builder customRuntimeConfig(final com.aliyun.ros.cdk.fc.RosFunction.CustomRuntimeConfigProperty customRuntimeConfig) {
            this.props.customRuntimeConfig(customRuntimeConfig);
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
         * Property diskSize: The disk size of the function.
         * <p>
         * Unit: MB. Valid values: 512 and 10240.
         * <p>
         * @return {@code this}
         * @param diskSize Property diskSize: The disk size of the function. This parameter is required.
         */
        public Builder diskSize(final java.lang.Number diskSize) {
            this.props.diskSize(diskSize);
            return this;
        }
        /**
         * Property diskSize: The disk size of the function.
         * <p>
         * Unit: MB. Valid values: 512 and 10240.
         * <p>
         * @return {@code this}
         * @param diskSize Property diskSize: The disk size of the function. This parameter is required.
         */
        public Builder diskSize(final com.aliyun.ros.cdk.core.IResolvable diskSize) {
            this.props.diskSize(diskSize);
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
         * Property gpuMemorySize: The GPU memory capacity for the function.
         * <p>
         * Unit: MB. The value must be a multiple of 1,024.
         * <p>
         * @return {@code this}
         * @param gpuMemorySize Property gpuMemorySize: The GPU memory capacity for the function. This parameter is required.
         */
        public Builder gpuMemorySize(final java.lang.Number gpuMemorySize) {
            this.props.gpuMemorySize(gpuMemorySize);
            return this;
        }
        /**
         * Property gpuMemorySize: The GPU memory capacity for the function.
         * <p>
         * Unit: MB. The value must be a multiple of 1,024.
         * <p>
         * @return {@code this}
         * @param gpuMemorySize Property gpuMemorySize: The GPU memory capacity for the function. This parameter is required.
         */
        public Builder gpuMemorySize(final com.aliyun.ros.cdk.core.IResolvable gpuMemorySize) {
            this.props.gpuMemorySize(gpuMemorySize);
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
         * Property instanceLifecycleConfig: The configuration of the instance lifecycle function.
         * <p>
         * @return {@code this}
         * @param instanceLifecycleConfig Property instanceLifecycleConfig: The configuration of the instance lifecycle function. This parameter is required.
         */
        public Builder instanceLifecycleConfig(final com.aliyun.ros.cdk.core.IResolvable instanceLifecycleConfig) {
            this.props.instanceLifecycleConfig(instanceLifecycleConfig);
            return this;
        }
        /**
         * Property instanceLifecycleConfig: The configuration of the instance lifecycle function.
         * <p>
         * @return {@code this}
         * @param instanceLifecycleConfig Property instanceLifecycleConfig: The configuration of the instance lifecycle function. This parameter is required.
         */
        public Builder instanceLifecycleConfig(final com.aliyun.ros.cdk.fc.RosFunction.InstanceLifecycleConfigProperty instanceLifecycleConfig) {
            this.props.instanceLifecycleConfig(instanceLifecycleConfig);
            return this;
        }

        /**
         * Property instanceSoftConcurrency: The soft concurrency of the instance.
         * <p>
         * You can use this parameter to implement graceful scale-up of instances. If the number of concurrent requests on an instance is greater than the value of soft concurrency, an instance scale-up is triggered. For example, if your instance requires a long time to start, you can specify a suitable soft concurrency to start the instance in advance.The value must be less than or equal to that of the instanceConcurrency parameter.
         * <p>
         * @return {@code this}
         * @param instanceSoftConcurrency Property instanceSoftConcurrency: The soft concurrency of the instance. This parameter is required.
         */
        public Builder instanceSoftConcurrency(final java.lang.Number instanceSoftConcurrency) {
            this.props.instanceSoftConcurrency(instanceSoftConcurrency);
            return this;
        }
        /**
         * Property instanceSoftConcurrency: The soft concurrency of the instance.
         * <p>
         * You can use this parameter to implement graceful scale-up of instances. If the number of concurrent requests on an instance is greater than the value of soft concurrency, an instance scale-up is triggered. For example, if your instance requires a long time to start, you can specify a suitable soft concurrency to start the instance in advance.The value must be less than or equal to that of the instanceConcurrency parameter.
         * <p>
         * @return {@code this}
         * @param instanceSoftConcurrency Property instanceSoftConcurrency: The soft concurrency of the instance. This parameter is required.
         */
        public Builder instanceSoftConcurrency(final com.aliyun.ros.cdk.core.IResolvable instanceSoftConcurrency) {
            this.props.instanceSoftConcurrency(instanceSoftConcurrency);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc.Function}.
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
