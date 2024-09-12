package com.aliyun.ros.cdk.fc;

/**
 * Properties for defining a <code>RosFunction</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-function
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:31.960Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunctionProps")
@software.amazon.jsii.Jsii.Proxy(RosFunctionProps.Jsii$Proxy.class)
public interface RosFunctionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFunctionName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHandler();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuntime();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAsyncConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCaPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpu() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCustomContainerConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCustomDns() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCustomHealthCheckConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCustomRuntimeConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentVariables() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGpuMemorySize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInitializationTimeout() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInitializer() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceConcurrency() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceLifecycleConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceSoftConcurrency() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMemorySize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosFunctionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosFunctionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosFunctionProps> {
        java.lang.Object functionName;
        java.lang.Object handler;
        java.lang.Object runtime;
        java.lang.Object serviceName;
        java.lang.Object asyncConfiguration;
        java.lang.Object caPort;
        java.lang.Object code;
        java.lang.Object cpu;
        java.lang.Object customContainerConfig;
        java.lang.Object customDns;
        java.lang.Object customHealthCheckConfig;
        java.lang.Object customRuntimeConfig;
        java.lang.Object description;
        java.lang.Object diskSize;
        java.lang.Object environmentVariables;
        java.lang.Object gpuMemorySize;
        java.lang.Object initializationTimeout;
        java.lang.Object initializer;
        java.lang.Object instanceConcurrency;
        java.lang.Object instanceLifecycleConfig;
        java.lang.Object instanceSoftConcurrency;
        java.lang.Object instanceType;
        java.lang.Object memorySize;
        java.lang.Object timeout;

        /**
         * Sets the value of {@link RosFunctionProps#getFunctionName}
         * @param functionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(java.lang.String functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getFunctionName}
         * @param functionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(com.aliyun.ros.cdk.core.IResolvable functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getHandler}
         * @param handler the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder handler(java.lang.String handler) {
            this.handler = handler;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getHandler}
         * @param handler the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder handler(com.aliyun.ros.cdk.core.IResolvable handler) {
            this.handler = handler;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getRuntime}
         * @param runtime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder runtime(java.lang.String runtime) {
            this.runtime = runtime;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getRuntime}
         * @param runtime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder runtime(com.aliyun.ros.cdk.core.IResolvable runtime) {
            this.runtime = runtime;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getServiceName}
         * @param serviceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getServiceName}
         * @param serviceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getAsyncConfiguration}
         * @param asyncConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder asyncConfiguration(com.aliyun.ros.cdk.core.IResolvable asyncConfiguration) {
            this.asyncConfiguration = asyncConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getAsyncConfiguration}
         * @param asyncConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder asyncConfiguration(com.aliyun.ros.cdk.fc.RosFunction.AsyncConfigurationProperty asyncConfiguration) {
            this.asyncConfiguration = asyncConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getCaPort}
         * @param caPort the value to be set.
         * @return {@code this}
         */
        public Builder caPort(java.lang.Number caPort) {
            this.caPort = caPort;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getCaPort}
         * @param caPort the value to be set.
         * @return {@code this}
         */
        public Builder caPort(com.aliyun.ros.cdk.core.IResolvable caPort) {
            this.caPort = caPort;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getCode}
         * @param code the value to be set.
         * @return {@code this}
         */
        public Builder code(com.aliyun.ros.cdk.core.IResolvable code) {
            this.code = code;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getCode}
         * @param code the value to be set.
         * @return {@code this}
         */
        public Builder code(com.aliyun.ros.cdk.fc.RosFunction.CodeProperty code) {
            this.code = code;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getCpu}
         * @param cpu the value to be set.
         * @return {@code this}
         */
        public Builder cpu(java.lang.Number cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getCpu}
         * @param cpu the value to be set.
         * @return {@code this}
         */
        public Builder cpu(com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getCustomContainerConfig}
         * @param customContainerConfig the value to be set.
         * @return {@code this}
         */
        public Builder customContainerConfig(com.aliyun.ros.cdk.core.IResolvable customContainerConfig) {
            this.customContainerConfig = customContainerConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getCustomContainerConfig}
         * @param customContainerConfig the value to be set.
         * @return {@code this}
         */
        public Builder customContainerConfig(com.aliyun.ros.cdk.fc.RosFunction.CustomContainerConfigProperty customContainerConfig) {
            this.customContainerConfig = customContainerConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getCustomDns}
         * @param customDns the value to be set.
         * @return {@code this}
         */
        public Builder customDns(com.aliyun.ros.cdk.core.IResolvable customDns) {
            this.customDns = customDns;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getCustomDns}
         * @param customDns the value to be set.
         * @return {@code this}
         */
        public Builder customDns(com.aliyun.ros.cdk.fc.RosFunction.CustomDNSProperty customDns) {
            this.customDns = customDns;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getCustomHealthCheckConfig}
         * @param customHealthCheckConfig the value to be set.
         * @return {@code this}
         */
        public Builder customHealthCheckConfig(com.aliyun.ros.cdk.core.IResolvable customHealthCheckConfig) {
            this.customHealthCheckConfig = customHealthCheckConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getCustomHealthCheckConfig}
         * @param customHealthCheckConfig the value to be set.
         * @return {@code this}
         */
        public Builder customHealthCheckConfig(com.aliyun.ros.cdk.fc.RosFunction.CustomHealthCheckConfigProperty customHealthCheckConfig) {
            this.customHealthCheckConfig = customHealthCheckConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getCustomRuntimeConfig}
         * @param customRuntimeConfig the value to be set.
         * @return {@code this}
         */
        public Builder customRuntimeConfig(com.aliyun.ros.cdk.core.IResolvable customRuntimeConfig) {
            this.customRuntimeConfig = customRuntimeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getCustomRuntimeConfig}
         * @param customRuntimeConfig the value to be set.
         * @return {@code this}
         */
        public Builder customRuntimeConfig(com.aliyun.ros.cdk.fc.RosFunction.CustomRuntimeConfigProperty customRuntimeConfig) {
            this.customRuntimeConfig = customRuntimeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getDiskSize}
         * @param diskSize the value to be set.
         * @return {@code this}
         */
        public Builder diskSize(java.lang.Number diskSize) {
            this.diskSize = diskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getDiskSize}
         * @param diskSize the value to be set.
         * @return {@code this}
         */
        public Builder diskSize(com.aliyun.ros.cdk.core.IResolvable diskSize) {
            this.diskSize = diskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getEnvironmentVariables}
         * @param environmentVariables the value to be set.
         * @return {@code this}
         */
        public Builder environmentVariables(com.aliyun.ros.cdk.core.IResolvable environmentVariables) {
            this.environmentVariables = environmentVariables;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getEnvironmentVariables}
         * @param environmentVariables the value to be set.
         * @return {@code this}
         */
        public Builder environmentVariables(java.util.Map<java.lang.String, ? extends java.lang.Object> environmentVariables) {
            this.environmentVariables = environmentVariables;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getGpuMemorySize}
         * @param gpuMemorySize the value to be set.
         * @return {@code this}
         */
        public Builder gpuMemorySize(java.lang.Number gpuMemorySize) {
            this.gpuMemorySize = gpuMemorySize;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getGpuMemorySize}
         * @param gpuMemorySize the value to be set.
         * @return {@code this}
         */
        public Builder gpuMemorySize(com.aliyun.ros.cdk.core.IResolvable gpuMemorySize) {
            this.gpuMemorySize = gpuMemorySize;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getInitializationTimeout}
         * @param initializationTimeout the value to be set.
         * @return {@code this}
         */
        public Builder initializationTimeout(java.lang.Number initializationTimeout) {
            this.initializationTimeout = initializationTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getInitializationTimeout}
         * @param initializationTimeout the value to be set.
         * @return {@code this}
         */
        public Builder initializationTimeout(com.aliyun.ros.cdk.core.IResolvable initializationTimeout) {
            this.initializationTimeout = initializationTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getInitializer}
         * @param initializer the value to be set.
         * @return {@code this}
         */
        public Builder initializer(java.lang.String initializer) {
            this.initializer = initializer;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getInitializer}
         * @param initializer the value to be set.
         * @return {@code this}
         */
        public Builder initializer(com.aliyun.ros.cdk.core.IResolvable initializer) {
            this.initializer = initializer;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getInstanceConcurrency}
         * @param instanceConcurrency the value to be set.
         * @return {@code this}
         */
        public Builder instanceConcurrency(java.lang.Number instanceConcurrency) {
            this.instanceConcurrency = instanceConcurrency;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getInstanceConcurrency}
         * @param instanceConcurrency the value to be set.
         * @return {@code this}
         */
        public Builder instanceConcurrency(com.aliyun.ros.cdk.core.IResolvable instanceConcurrency) {
            this.instanceConcurrency = instanceConcurrency;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getInstanceLifecycleConfig}
         * @param instanceLifecycleConfig the value to be set.
         * @return {@code this}
         */
        public Builder instanceLifecycleConfig(com.aliyun.ros.cdk.core.IResolvable instanceLifecycleConfig) {
            this.instanceLifecycleConfig = instanceLifecycleConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getInstanceLifecycleConfig}
         * @param instanceLifecycleConfig the value to be set.
         * @return {@code this}
         */
        public Builder instanceLifecycleConfig(com.aliyun.ros.cdk.fc.RosFunction.InstanceLifecycleConfigProperty instanceLifecycleConfig) {
            this.instanceLifecycleConfig = instanceLifecycleConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getInstanceSoftConcurrency}
         * @param instanceSoftConcurrency the value to be set.
         * @return {@code this}
         */
        public Builder instanceSoftConcurrency(java.lang.Number instanceSoftConcurrency) {
            this.instanceSoftConcurrency = instanceSoftConcurrency;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getInstanceSoftConcurrency}
         * @param instanceSoftConcurrency the value to be set.
         * @return {@code this}
         */
        public Builder instanceSoftConcurrency(com.aliyun.ros.cdk.core.IResolvable instanceSoftConcurrency) {
            this.instanceSoftConcurrency = instanceSoftConcurrency;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getInstanceType}
         * @param instanceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getInstanceType}
         * @param instanceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getMemorySize}
         * @param memorySize the value to be set.
         * @return {@code this}
         */
        public Builder memorySize(java.lang.Number memorySize) {
            this.memorySize = memorySize;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getMemorySize}
         * @param memorySize the value to be set.
         * @return {@code this}
         */
        public Builder memorySize(com.aliyun.ros.cdk.core.IResolvable memorySize) {
            this.memorySize = memorySize;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getTimeout}
         * @param timeout the value to be set.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionProps#getTimeout}
         * @param timeout the value to be set.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosFunctionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosFunctionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosFunctionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosFunctionProps {
        private final java.lang.Object functionName;
        private final java.lang.Object handler;
        private final java.lang.Object runtime;
        private final java.lang.Object serviceName;
        private final java.lang.Object asyncConfiguration;
        private final java.lang.Object caPort;
        private final java.lang.Object code;
        private final java.lang.Object cpu;
        private final java.lang.Object customContainerConfig;
        private final java.lang.Object customDns;
        private final java.lang.Object customHealthCheckConfig;
        private final java.lang.Object customRuntimeConfig;
        private final java.lang.Object description;
        private final java.lang.Object diskSize;
        private final java.lang.Object environmentVariables;
        private final java.lang.Object gpuMemorySize;
        private final java.lang.Object initializationTimeout;
        private final java.lang.Object initializer;
        private final java.lang.Object instanceConcurrency;
        private final java.lang.Object instanceLifecycleConfig;
        private final java.lang.Object instanceSoftConcurrency;
        private final java.lang.Object instanceType;
        private final java.lang.Object memorySize;
        private final java.lang.Object timeout;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.functionName = software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.handler = software.amazon.jsii.Kernel.get(this, "handler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.runtime = software.amazon.jsii.Kernel.get(this, "runtime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.asyncConfiguration = software.amazon.jsii.Kernel.get(this, "asyncConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.caPort = software.amazon.jsii.Kernel.get(this, "caPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.code = software.amazon.jsii.Kernel.get(this, "code", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpu = software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customContainerConfig = software.amazon.jsii.Kernel.get(this, "customContainerConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customDns = software.amazon.jsii.Kernel.get(this, "customDns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customHealthCheckConfig = software.amazon.jsii.Kernel.get(this, "customHealthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customRuntimeConfig = software.amazon.jsii.Kernel.get(this, "customRuntimeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskSize = software.amazon.jsii.Kernel.get(this, "diskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.environmentVariables = software.amazon.jsii.Kernel.get(this, "environmentVariables", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gpuMemorySize = software.amazon.jsii.Kernel.get(this, "gpuMemorySize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.initializationTimeout = software.amazon.jsii.Kernel.get(this, "initializationTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.initializer = software.amazon.jsii.Kernel.get(this, "initializer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceConcurrency = software.amazon.jsii.Kernel.get(this, "instanceConcurrency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceLifecycleConfig = software.amazon.jsii.Kernel.get(this, "instanceLifecycleConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceSoftConcurrency = software.amazon.jsii.Kernel.get(this, "instanceSoftConcurrency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.memorySize = software.amazon.jsii.Kernel.get(this, "memorySize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.functionName = java.util.Objects.requireNonNull(builder.functionName, "functionName is required");
            this.handler = java.util.Objects.requireNonNull(builder.handler, "handler is required");
            this.runtime = java.util.Objects.requireNonNull(builder.runtime, "runtime is required");
            this.serviceName = java.util.Objects.requireNonNull(builder.serviceName, "serviceName is required");
            this.asyncConfiguration = builder.asyncConfiguration;
            this.caPort = builder.caPort;
            this.code = builder.code;
            this.cpu = builder.cpu;
            this.customContainerConfig = builder.customContainerConfig;
            this.customDns = builder.customDns;
            this.customHealthCheckConfig = builder.customHealthCheckConfig;
            this.customRuntimeConfig = builder.customRuntimeConfig;
            this.description = builder.description;
            this.diskSize = builder.diskSize;
            this.environmentVariables = builder.environmentVariables;
            this.gpuMemorySize = builder.gpuMemorySize;
            this.initializationTimeout = builder.initializationTimeout;
            this.initializer = builder.initializer;
            this.instanceConcurrency = builder.instanceConcurrency;
            this.instanceLifecycleConfig = builder.instanceLifecycleConfig;
            this.instanceSoftConcurrency = builder.instanceSoftConcurrency;
            this.instanceType = builder.instanceType;
            this.memorySize = builder.memorySize;
            this.timeout = builder.timeout;
        }

        @Override
        public final java.lang.Object getFunctionName() {
            return this.functionName;
        }

        @Override
        public final java.lang.Object getHandler() {
            return this.handler;
        }

        @Override
        public final java.lang.Object getRuntime() {
            return this.runtime;
        }

        @Override
        public final java.lang.Object getServiceName() {
            return this.serviceName;
        }

        @Override
        public final java.lang.Object getAsyncConfiguration() {
            return this.asyncConfiguration;
        }

        @Override
        public final java.lang.Object getCaPort() {
            return this.caPort;
        }

        @Override
        public final java.lang.Object getCode() {
            return this.code;
        }

        @Override
        public final java.lang.Object getCpu() {
            return this.cpu;
        }

        @Override
        public final java.lang.Object getCustomContainerConfig() {
            return this.customContainerConfig;
        }

        @Override
        public final java.lang.Object getCustomDns() {
            return this.customDns;
        }

        @Override
        public final java.lang.Object getCustomHealthCheckConfig() {
            return this.customHealthCheckConfig;
        }

        @Override
        public final java.lang.Object getCustomRuntimeConfig() {
            return this.customRuntimeConfig;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDiskSize() {
            return this.diskSize;
        }

        @Override
        public final java.lang.Object getEnvironmentVariables() {
            return this.environmentVariables;
        }

        @Override
        public final java.lang.Object getGpuMemorySize() {
            return this.gpuMemorySize;
        }

        @Override
        public final java.lang.Object getInitializationTimeout() {
            return this.initializationTimeout;
        }

        @Override
        public final java.lang.Object getInitializer() {
            return this.initializer;
        }

        @Override
        public final java.lang.Object getInstanceConcurrency() {
            return this.instanceConcurrency;
        }

        @Override
        public final java.lang.Object getInstanceLifecycleConfig() {
            return this.instanceLifecycleConfig;
        }

        @Override
        public final java.lang.Object getInstanceSoftConcurrency() {
            return this.instanceSoftConcurrency;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getMemorySize() {
            return this.memorySize;
        }

        @Override
        public final java.lang.Object getTimeout() {
            return this.timeout;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("functionName", om.valueToTree(this.getFunctionName()));
            data.set("handler", om.valueToTree(this.getHandler()));
            data.set("runtime", om.valueToTree(this.getRuntime()));
            data.set("serviceName", om.valueToTree(this.getServiceName()));
            if (this.getAsyncConfiguration() != null) {
                data.set("asyncConfiguration", om.valueToTree(this.getAsyncConfiguration()));
            }
            if (this.getCaPort() != null) {
                data.set("caPort", om.valueToTree(this.getCaPort()));
            }
            if (this.getCode() != null) {
                data.set("code", om.valueToTree(this.getCode()));
            }
            if (this.getCpu() != null) {
                data.set("cpu", om.valueToTree(this.getCpu()));
            }
            if (this.getCustomContainerConfig() != null) {
                data.set("customContainerConfig", om.valueToTree(this.getCustomContainerConfig()));
            }
            if (this.getCustomDns() != null) {
                data.set("customDns", om.valueToTree(this.getCustomDns()));
            }
            if (this.getCustomHealthCheckConfig() != null) {
                data.set("customHealthCheckConfig", om.valueToTree(this.getCustomHealthCheckConfig()));
            }
            if (this.getCustomRuntimeConfig() != null) {
                data.set("customRuntimeConfig", om.valueToTree(this.getCustomRuntimeConfig()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDiskSize() != null) {
                data.set("diskSize", om.valueToTree(this.getDiskSize()));
            }
            if (this.getEnvironmentVariables() != null) {
                data.set("environmentVariables", om.valueToTree(this.getEnvironmentVariables()));
            }
            if (this.getGpuMemorySize() != null) {
                data.set("gpuMemorySize", om.valueToTree(this.getGpuMemorySize()));
            }
            if (this.getInitializationTimeout() != null) {
                data.set("initializationTimeout", om.valueToTree(this.getInitializationTimeout()));
            }
            if (this.getInitializer() != null) {
                data.set("initializer", om.valueToTree(this.getInitializer()));
            }
            if (this.getInstanceConcurrency() != null) {
                data.set("instanceConcurrency", om.valueToTree(this.getInstanceConcurrency()));
            }
            if (this.getInstanceLifecycleConfig() != null) {
                data.set("instanceLifecycleConfig", om.valueToTree(this.getInstanceLifecycleConfig()));
            }
            if (this.getInstanceSoftConcurrency() != null) {
                data.set("instanceSoftConcurrency", om.valueToTree(this.getInstanceSoftConcurrency()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }
            if (this.getMemorySize() != null) {
                data.set("memorySize", om.valueToTree(this.getMemorySize()));
            }
            if (this.getTimeout() != null) {
                data.set("timeout", om.valueToTree(this.getTimeout()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosFunctionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosFunctionProps.Jsii$Proxy that = (RosFunctionProps.Jsii$Proxy) o;

            if (!functionName.equals(that.functionName)) return false;
            if (!handler.equals(that.handler)) return false;
            if (!runtime.equals(that.runtime)) return false;
            if (!serviceName.equals(that.serviceName)) return false;
            if (this.asyncConfiguration != null ? !this.asyncConfiguration.equals(that.asyncConfiguration) : that.asyncConfiguration != null) return false;
            if (this.caPort != null ? !this.caPort.equals(that.caPort) : that.caPort != null) return false;
            if (this.code != null ? !this.code.equals(that.code) : that.code != null) return false;
            if (this.cpu != null ? !this.cpu.equals(that.cpu) : that.cpu != null) return false;
            if (this.customContainerConfig != null ? !this.customContainerConfig.equals(that.customContainerConfig) : that.customContainerConfig != null) return false;
            if (this.customDns != null ? !this.customDns.equals(that.customDns) : that.customDns != null) return false;
            if (this.customHealthCheckConfig != null ? !this.customHealthCheckConfig.equals(that.customHealthCheckConfig) : that.customHealthCheckConfig != null) return false;
            if (this.customRuntimeConfig != null ? !this.customRuntimeConfig.equals(that.customRuntimeConfig) : that.customRuntimeConfig != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.diskSize != null ? !this.diskSize.equals(that.diskSize) : that.diskSize != null) return false;
            if (this.environmentVariables != null ? !this.environmentVariables.equals(that.environmentVariables) : that.environmentVariables != null) return false;
            if (this.gpuMemorySize != null ? !this.gpuMemorySize.equals(that.gpuMemorySize) : that.gpuMemorySize != null) return false;
            if (this.initializationTimeout != null ? !this.initializationTimeout.equals(that.initializationTimeout) : that.initializationTimeout != null) return false;
            if (this.initializer != null ? !this.initializer.equals(that.initializer) : that.initializer != null) return false;
            if (this.instanceConcurrency != null ? !this.instanceConcurrency.equals(that.instanceConcurrency) : that.instanceConcurrency != null) return false;
            if (this.instanceLifecycleConfig != null ? !this.instanceLifecycleConfig.equals(that.instanceLifecycleConfig) : that.instanceLifecycleConfig != null) return false;
            if (this.instanceSoftConcurrency != null ? !this.instanceSoftConcurrency.equals(that.instanceSoftConcurrency) : that.instanceSoftConcurrency != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            if (this.memorySize != null ? !this.memorySize.equals(that.memorySize) : that.memorySize != null) return false;
            return this.timeout != null ? this.timeout.equals(that.timeout) : that.timeout == null;
        }

        @Override
        public final int hashCode() {
            int result = this.functionName.hashCode();
            result = 31 * result + (this.handler.hashCode());
            result = 31 * result + (this.runtime.hashCode());
            result = 31 * result + (this.serviceName.hashCode());
            result = 31 * result + (this.asyncConfiguration != null ? this.asyncConfiguration.hashCode() : 0);
            result = 31 * result + (this.caPort != null ? this.caPort.hashCode() : 0);
            result = 31 * result + (this.code != null ? this.code.hashCode() : 0);
            result = 31 * result + (this.cpu != null ? this.cpu.hashCode() : 0);
            result = 31 * result + (this.customContainerConfig != null ? this.customContainerConfig.hashCode() : 0);
            result = 31 * result + (this.customDns != null ? this.customDns.hashCode() : 0);
            result = 31 * result + (this.customHealthCheckConfig != null ? this.customHealthCheckConfig.hashCode() : 0);
            result = 31 * result + (this.customRuntimeConfig != null ? this.customRuntimeConfig.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.diskSize != null ? this.diskSize.hashCode() : 0);
            result = 31 * result + (this.environmentVariables != null ? this.environmentVariables.hashCode() : 0);
            result = 31 * result + (this.gpuMemorySize != null ? this.gpuMemorySize.hashCode() : 0);
            result = 31 * result + (this.initializationTimeout != null ? this.initializationTimeout.hashCode() : 0);
            result = 31 * result + (this.initializer != null ? this.initializer.hashCode() : 0);
            result = 31 * result + (this.instanceConcurrency != null ? this.instanceConcurrency.hashCode() : 0);
            result = 31 * result + (this.instanceLifecycleConfig != null ? this.instanceLifecycleConfig.hashCode() : 0);
            result = 31 * result + (this.instanceSoftConcurrency != null ? this.instanceSoftConcurrency.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.memorySize != null ? this.memorySize.hashCode() : 0);
            result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
            return result;
        }
    }
}
