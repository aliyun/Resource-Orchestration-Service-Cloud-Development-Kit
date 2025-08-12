package com.aliyun.ros.cdk.fc3;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::FC3::Function</code>, which is used to create a Function Compute 3.0 function.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:47.657Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.Function")
public class Function extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.fc3.IFunction {

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
    public Function(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.FunctionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Function(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.FunctionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ARN: The ARN for ALIYUN::ROS::CustomResource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FunctionId: The function ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFunctionId() {
        return software.amazon.jsii.Kernel.get(this, "attrFunctionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FunctionName: The function name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFunctionName() {
        return software.amazon.jsii.Kernel.get(this, "attrFunctionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.FunctionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc3.FunctionProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.fc3.Function}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc3.Function> {
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
        private final com.aliyun.ros.cdk.fc3.FunctionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc3.FunctionProps.Builder();
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
         * Property handler: The handler of the function.
         * <p>
         * @return {@code this}
         * @param handler Property handler: The handler of the function. This parameter is required.
         */
        public Builder handler(final java.lang.String handler) {
            this.props.handler(handler);
            return this;
        }
        /**
         * Property handler: The handler of the function.
         * <p>
         * @return {@code this}
         * @param handler Property handler: The handler of the function. This parameter is required.
         */
        public Builder handler(final com.aliyun.ros.cdk.core.IResolvable handler) {
            this.props.handler(handler);
            return this;
        }

        /**
         * Property runtime: The programming language of the function.
         * <p>
         * @return {@code this}
         * @param runtime Property runtime: The programming language of the function. This parameter is required.
         */
        public Builder runtime(final java.lang.String runtime) {
            this.props.runtime(runtime);
            return this;
        }
        /**
         * Property runtime: The programming language of the function.
         * <p>
         * @return {@code this}
         * @param runtime Property runtime: The programming language of the function. This parameter is required.
         */
        public Builder runtime(final com.aliyun.ros.cdk.core.IResolvable runtime) {
            this.props.runtime(runtime);
            return this;
        }

        /**
         * Property code: Function code ZIP package.
         * <p>
         * Choose one of Code and CustomContainerConfig.
         * <p>
         * @return {@code this}
         * @param code Property code: Function code ZIP package. This parameter is required.
         */
        public Builder code(final com.aliyun.ros.cdk.core.IResolvable code) {
            this.props.code(code);
            return this;
        }
        /**
         * Property code: Function code ZIP package.
         * <p>
         * Choose one of Code and CustomContainerConfig.
         * <p>
         * @return {@code this}
         * @param code Property code: Function code ZIP package. This parameter is required.
         */
        public Builder code(final com.aliyun.ros.cdk.fc3.RosFunction.CodeProperty code) {
            this.props.code(code);
            return this;
        }

        /**
         * Property cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4.
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4. This parameter is required.
         */
        public Builder cpu(final java.lang.Number cpu) {
            this.props.cpu(cpu);
            return this;
        }
        /**
         * Property cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4.
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4. This parameter is required.
         */
        public Builder cpu(final com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.props.cpu(cpu);
            return this;
        }

        /**
         * Property customContainerConfig: Custom container configuration.
         * <p>
         * Choose one of Code and CustomContainerConfig.
         * <p>
         * @return {@code this}
         * @param customContainerConfig Property customContainerConfig: Custom container configuration. This parameter is required.
         */
        public Builder customContainerConfig(final com.aliyun.ros.cdk.core.IResolvable customContainerConfig) {
            this.props.customContainerConfig(customContainerConfig);
            return this;
        }
        /**
         * Property customContainerConfig: Custom container configuration.
         * <p>
         * Choose one of Code and CustomContainerConfig.
         * <p>
         * @return {@code this}
         * @param customContainerConfig Property customContainerConfig: Custom container configuration. This parameter is required.
         */
        public Builder customContainerConfig(final com.aliyun.ros.cdk.fc3.RosFunction.CustomContainerConfigProperty customContainerConfig) {
            this.props.customContainerConfig(customContainerConfig);
            return this;
        }

        /**
         * Property customDns: Custom DNS configuration.
         * <p>
         * @return {@code this}
         * @param customDns Property customDns: Custom DNS configuration. This parameter is required.
         */
        public Builder customDns(final com.aliyun.ros.cdk.core.IResolvable customDns) {
            this.props.customDns(customDns);
            return this;
        }
        /**
         * Property customDns: Custom DNS configuration.
         * <p>
         * @return {@code this}
         * @param customDns Property customDns: Custom DNS configuration. This parameter is required.
         */
        public Builder customDns(final com.aliyun.ros.cdk.fc3.RosFunction.CustomDnsProperty customDns) {
            this.props.customDns(customDns);
            return this;
        }

        /**
         * Property customRuntimeConfig: Custom runtime configuration.
         * <p>
         * @return {@code this}
         * @param customRuntimeConfig Property customRuntimeConfig: Custom runtime configuration. This parameter is required.
         */
        public Builder customRuntimeConfig(final com.aliyun.ros.cdk.core.IResolvable customRuntimeConfig) {
            this.props.customRuntimeConfig(customRuntimeConfig);
            return this;
        }
        /**
         * Property customRuntimeConfig: Custom runtime configuration.
         * <p>
         * @return {@code this}
         * @param customRuntimeConfig Property customRuntimeConfig: Custom runtime configuration. This parameter is required.
         */
        public Builder customRuntimeConfig(final com.aliyun.ros.cdk.fc3.RosFunction.CustomRuntimeConfigProperty customRuntimeConfig) {
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
         * Property diskSize: The disk size of the function, in MB.
         * <p>
         * @return {@code this}
         * @param diskSize Property diskSize: The disk size of the function, in MB. This parameter is required.
         */
        public Builder diskSize(final java.lang.Number diskSize) {
            this.props.diskSize(diskSize);
            return this;
        }
        /**
         * Property diskSize: The disk size of the function, in MB.
         * <p>
         * @return {@code this}
         * @param diskSize Property diskSize: The disk size of the function, in MB. This parameter is required.
         */
        public Builder diskSize(final com.aliyun.ros.cdk.core.IResolvable diskSize) {
            this.props.diskSize(diskSize);
            return this;
        }

        /**
         * Property environmentVariables: The environment variables of the function.
         * <p>
         * @return {@code this}
         * @param environmentVariables Property environmentVariables: The environment variables of the function. This parameter is required.
         */
        public Builder environmentVariables(final com.aliyun.ros.cdk.core.IResolvable environmentVariables) {
            this.props.environmentVariables(environmentVariables);
            return this;
        }
        /**
         * Property environmentVariables: The environment variables of the function.
         * <p>
         * @return {@code this}
         * @param environmentVariables Property environmentVariables: The environment variables of the function. This parameter is required.
         */
        public Builder environmentVariables(final java.util.Map<java.lang.String, ? extends java.lang.Object> environmentVariables) {
            this.props.environmentVariables(environmentVariables);
            return this;
        }

        /**
         * Property gpuConfig: The GPU configuration of the function.
         * <p>
         * @return {@code this}
         * @param gpuConfig Property gpuConfig: The GPU configuration of the function. This parameter is required.
         */
        public Builder gpuConfig(final com.aliyun.ros.cdk.core.IResolvable gpuConfig) {
            this.props.gpuConfig(gpuConfig);
            return this;
        }
        /**
         * Property gpuConfig: The GPU configuration of the function.
         * <p>
         * @return {@code this}
         * @param gpuConfig Property gpuConfig: The GPU configuration of the function. This parameter is required.
         */
        public Builder gpuConfig(final com.aliyun.ros.cdk.fc3.RosFunction.GpuConfigProperty gpuConfig) {
            this.props.gpuConfig(gpuConfig);
            return this;
        }

        /**
         * Property instanceConcurrency: The maximum number of concurrent instances of the function.
         * <p>
         * @return {@code this}
         * @param instanceConcurrency Property instanceConcurrency: The maximum number of concurrent instances of the function. This parameter is required.
         */
        public Builder instanceConcurrency(final java.lang.Number instanceConcurrency) {
            this.props.instanceConcurrency(instanceConcurrency);
            return this;
        }
        /**
         * Property instanceConcurrency: The maximum number of concurrent instances of the function.
         * <p>
         * @return {@code this}
         * @param instanceConcurrency Property instanceConcurrency: The maximum number of concurrent instances of the function. This parameter is required.
         */
        public Builder instanceConcurrency(final com.aliyun.ros.cdk.core.IResolvable instanceConcurrency) {
            this.props.instanceConcurrency(instanceConcurrency);
            return this;
        }

        /**
         * Property instanceLifecycleConfig: The instance lifecycle configuration of the function.
         * <p>
         * @return {@code this}
         * @param instanceLifecycleConfig Property instanceLifecycleConfig: The instance lifecycle configuration of the function. This parameter is required.
         */
        public Builder instanceLifecycleConfig(final com.aliyun.ros.cdk.core.IResolvable instanceLifecycleConfig) {
            this.props.instanceLifecycleConfig(instanceLifecycleConfig);
            return this;
        }
        /**
         * Property instanceLifecycleConfig: The instance lifecycle configuration of the function.
         * <p>
         * @return {@code this}
         * @param instanceLifecycleConfig Property instanceLifecycleConfig: The instance lifecycle configuration of the function. This parameter is required.
         */
        public Builder instanceLifecycleConfig(final com.aliyun.ros.cdk.fc3.RosFunction.InstanceLifecycleConfigProperty instanceLifecycleConfig) {
            this.props.instanceLifecycleConfig(instanceLifecycleConfig);
            return this;
        }

        /**
         * Property internetAccess: Whether the function can access the Internet.
         * <p>
         * @return {@code this}
         * @param internetAccess Property internetAccess: Whether the function can access the Internet. This parameter is required.
         */
        public Builder internetAccess(final java.lang.Boolean internetAccess) {
            this.props.internetAccess(internetAccess);
            return this;
        }
        /**
         * Property internetAccess: Whether the function can access the Internet.
         * <p>
         * @return {@code this}
         * @param internetAccess Property internetAccess: Whether the function can access the Internet. This parameter is required.
         */
        public Builder internetAccess(final com.aliyun.ros.cdk.core.IResolvable internetAccess) {
            this.props.internetAccess(internetAccess);
            return this;
        }

        /**
         * Property layers: The layers of the function.
         * <p>
         * @return {@code this}
         * @param layers Property layers: The layers of the function. This parameter is required.
         */
        public Builder layers(final com.aliyun.ros.cdk.core.IResolvable layers) {
            this.props.layers(layers);
            return this;
        }
        /**
         * Property layers: The layers of the function.
         * <p>
         * @return {@code this}
         * @param layers Property layers: The layers of the function. This parameter is required.
         */
        public Builder layers(final java.util.List<? extends java.lang.Object> layers) {
            this.props.layers(layers);
            return this;
        }

        /**
         * Property logConfig: The log configuration of the function.
         * <p>
         * @return {@code this}
         * @param logConfig Property logConfig: The log configuration of the function. This parameter is required.
         */
        public Builder logConfig(final com.aliyun.ros.cdk.core.IResolvable logConfig) {
            this.props.logConfig(logConfig);
            return this;
        }
        /**
         * Property logConfig: The log configuration of the function.
         * <p>
         * @return {@code this}
         * @param logConfig Property logConfig: The log configuration of the function. This parameter is required.
         */
        public Builder logConfig(final com.aliyun.ros.cdk.fc3.RosFunction.LogConfigProperty logConfig) {
            this.props.logConfig(logConfig);
            return this;
        }

        /**
         * Property memorySize: The memory size of the function, in MB.
         * <p>
         * @return {@code this}
         * @param memorySize Property memorySize: The memory size of the function, in MB. This parameter is required.
         */
        public Builder memorySize(final java.lang.Number memorySize) {
            this.props.memorySize(memorySize);
            return this;
        }
        /**
         * Property memorySize: The memory size of the function, in MB.
         * <p>
         * @return {@code this}
         * @param memorySize Property memorySize: The memory size of the function, in MB. This parameter is required.
         */
        public Builder memorySize(final com.aliyun.ros.cdk.core.IResolvable memorySize) {
            this.props.memorySize(memorySize);
            return this;
        }

        /**
         * Property nasConfig: The NAS configuration of the function.
         * <p>
         * @return {@code this}
         * @param nasConfig Property nasConfig: The NAS configuration of the function. This parameter is required.
         */
        public Builder nasConfig(final com.aliyun.ros.cdk.core.IResolvable nasConfig) {
            this.props.nasConfig(nasConfig);
            return this;
        }
        /**
         * Property nasConfig: The NAS configuration of the function.
         * <p>
         * @return {@code this}
         * @param nasConfig Property nasConfig: The NAS configuration of the function. This parameter is required.
         */
        public Builder nasConfig(final com.aliyun.ros.cdk.fc3.RosFunction.NasConfigProperty nasConfig) {
            this.props.nasConfig(nasConfig);
            return this;
        }

        /**
         * Property ossMountConfig: The OSS mount configuration of the function.
         * <p>
         * @return {@code this}
         * @param ossMountConfig Property ossMountConfig: The OSS mount configuration of the function. This parameter is required.
         */
        public Builder ossMountConfig(final com.aliyun.ros.cdk.core.IResolvable ossMountConfig) {
            this.props.ossMountConfig(ossMountConfig);
            return this;
        }
        /**
         * Property ossMountConfig: The OSS mount configuration of the function.
         * <p>
         * @return {@code this}
         * @param ossMountConfig Property ossMountConfig: The OSS mount configuration of the function. This parameter is required.
         */
        public Builder ossMountConfig(final com.aliyun.ros.cdk.fc3.RosFunction.OssMountConfigProperty ossMountConfig) {
            this.props.ossMountConfig(ossMountConfig);
            return this;
        }

        /**
         * Property role: The user is authorized to the RAM role of Function Compute.
         * <p>
         * After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
         * <p>
         * @return {@code this}
         * @param role Property role: The user is authorized to the RAM role of Function Compute. This parameter is required.
         */
        public Builder role(final java.lang.String role) {
            this.props.role(role);
            return this;
        }
        /**
         * Property role: The user is authorized to the RAM role of Function Compute.
         * <p>
         * After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
         * <p>
         * @return {@code this}
         * @param role Property role: The user is authorized to the RAM role of Function Compute. This parameter is required.
         */
        public Builder role(final com.aliyun.ros.cdk.core.IResolvable role) {
            this.props.role(role);
            return this;
        }

        /**
         * Property tags: Tags to attach to function.
         * <p>
         * Max support 20 tags to add during create function. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to function. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.fc3.RosFunction.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property timeout: The timeout of the function.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout of the function. This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * Property timeout: The timeout of the function.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout of the function. This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * Property tracingConfig: The tracing configuration of the function.
         * <p>
         * @return {@code this}
         * @param tracingConfig Property tracingConfig: The tracing configuration of the function. This parameter is required.
         */
        public Builder tracingConfig(final com.aliyun.ros.cdk.core.IResolvable tracingConfig) {
            this.props.tracingConfig(tracingConfig);
            return this;
        }
        /**
         * Property tracingConfig: The tracing configuration of the function.
         * <p>
         * @return {@code this}
         * @param tracingConfig Property tracingConfig: The tracing configuration of the function. This parameter is required.
         */
        public Builder tracingConfig(final com.aliyun.ros.cdk.fc3.RosFunction.TracingConfigProperty tracingConfig) {
            this.props.tracingConfig(tracingConfig);
            return this;
        }

        /**
         * Property vpcConfig: The VPC configuration of the function.
         * <p>
         * @return {@code this}
         * @param vpcConfig Property vpcConfig: The VPC configuration of the function. This parameter is required.
         */
        public Builder vpcConfig(final com.aliyun.ros.cdk.core.IResolvable vpcConfig) {
            this.props.vpcConfig(vpcConfig);
            return this;
        }
        /**
         * Property vpcConfig: The VPC configuration of the function.
         * <p>
         * @return {@code this}
         * @param vpcConfig Property vpcConfig: The VPC configuration of the function. This parameter is required.
         */
        public Builder vpcConfig(final com.aliyun.ros.cdk.fc3.RosFunction.VpcConfigProperty vpcConfig) {
            this.props.vpcConfig(vpcConfig);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc3.Function}.
         */
        @Override
        public com.aliyun.ros.cdk.fc3.Function build() {
            return new com.aliyun.ros.cdk.fc3.Function(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
