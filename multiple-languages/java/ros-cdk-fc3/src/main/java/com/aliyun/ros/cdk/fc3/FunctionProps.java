package com.aliyun.ros.cdk.fc3;

/**
 * Properties for defining a <code>Function</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-function
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.908Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.FunctionProps")
@software.amazon.jsii.Jsii.Proxy(FunctionProps.Jsii$Proxy.class)
public interface FunctionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property functionName: The name of the function.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFunctionName();

    /**
     * Property handler: The handler of the function.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHandler();

    /**
     * Property runtime: The programming language of the function.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuntime();

    /**
     * Property code: Function code ZIP package.
     * <p>
     * Choose one of Code and CustomContainerConfig.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCode() {
        return null;
    }

    /**
     * Property cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpu() {
        return null;
    }

    /**
     * Property customContainerConfig: Custom container configuration.
     * <p>
     * Choose one of Code and CustomContainerConfig.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCustomContainerConfig() {
        return null;
    }

    /**
     * Property customDns: Custom DNS configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCustomDns() {
        return null;
    }

    /**
     * Property customRuntimeConfig: Custom runtime configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCustomRuntimeConfig() {
        return null;
    }

    /**
     * Property description: Function description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property disableOndemand: Whether to disable the creation of on-demand instances.
     * <p>
     * When enabled, on-demand instances will not be created, and only reserved instances can be used.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisableOndemand() {
        return null;
    }

    /**
     * Property diskSize: The disk size of the function, in MB.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskSize() {
        return null;
    }

    /**
     * Property environmentVariables: The environment variables of the function.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentVariables() {
        return null;
    }

    /**
     * Property gpuConfig: The GPU configuration of the function.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGpuConfig() {
        return null;
    }

    /**
     * Property instanceConcurrency: The maximum number of concurrent instances of the function.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceConcurrency() {
        return null;
    }

    /**
     * Property instanceIsolationMode: Instance isolation mode.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceIsolationMode() {
        return null;
    }

    /**
     * Property instanceLifecycleConfig: The instance lifecycle configuration of the function.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceLifecycleConfig() {
        return null;
    }

    /**
     * Property internetAccess: Whether the function can access the Internet.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetAccess() {
        return null;
    }

    /**
     * Property layers: The layers of the function.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLayers() {
        return null;
    }

    /**
     * Property logConfig: The log configuration of the function.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogConfig() {
        return null;
    }

    /**
     * Property memorySize: The memory size of the function, in MB.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMemorySize() {
        return null;
    }

    /**
     * Property nasConfig: The NAS configuration of the function.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNasConfig() {
        return null;
    }

    /**
     * Property ossMountConfig: The OSS mount configuration of the function.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOssMountConfig() {
        return null;
    }

    /**
     * Property role: The user is authorized to the RAM role of Function Compute.
     * <p>
     * After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRole() {
        return null;
    }

    /**
     * Property sessionAffinity: The session affinity policy for Function Compute requests.
     * <p>
     * Set to MCP_SSE to implement MCP SSE protocol request affinity. Set to GENERATED_COOKIE for cookie-based affinity. Set to HEADER_FIELD for header-based affinity. If not set or set to NONE, there is no affinity effect, and requests are routed according to the default scheduling policy of Function Compute.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSessionAffinity() {
        return null;
    }

    /**
     * Property sessionAffinityConfig: Session affinity configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSessionAffinityConfig() {
        return null;
    }

    /**
     * Property tags: Tags to attach to function.
     * <p>
     * Max support 20 tags to add during create function. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.fc3.RosFunction.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property timeout: The timeout of the function.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return null;
    }

    /**
     * Property tracingConfig: The tracing configuration of the function.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTracingConfig() {
        return null;
    }

    /**
     * Property vpcConfig: The VPC configuration of the function.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcConfig() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link FunctionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link FunctionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<FunctionProps> {
        java.lang.Object functionName;
        java.lang.Object handler;
        java.lang.Object runtime;
        java.lang.Object code;
        java.lang.Object cpu;
        java.lang.Object customContainerConfig;
        java.lang.Object customDns;
        java.lang.Object customRuntimeConfig;
        java.lang.Object description;
        java.lang.Object disableOndemand;
        java.lang.Object diskSize;
        java.lang.Object environmentVariables;
        java.lang.Object gpuConfig;
        java.lang.Object instanceConcurrency;
        java.lang.Object instanceIsolationMode;
        java.lang.Object instanceLifecycleConfig;
        java.lang.Object internetAccess;
        java.lang.Object layers;
        java.lang.Object logConfig;
        java.lang.Object memorySize;
        java.lang.Object nasConfig;
        java.lang.Object ossMountConfig;
        java.lang.Object role;
        java.lang.Object sessionAffinity;
        java.lang.Object sessionAffinityConfig;
        java.util.List<com.aliyun.ros.cdk.fc3.RosFunction.TagsProperty> tags;
        java.lang.Object timeout;
        java.lang.Object tracingConfig;
        java.lang.Object vpcConfig;

        /**
         * Sets the value of {@link FunctionProps#getFunctionName}
         * @param functionName Property functionName: The name of the function. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(java.lang.String functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getFunctionName}
         * @param functionName Property functionName: The name of the function. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(com.aliyun.ros.cdk.core.IResolvable functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getHandler}
         * @param handler Property handler: The handler of the function. This parameter is required.
         * @return {@code this}
         */
        public Builder handler(java.lang.String handler) {
            this.handler = handler;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getHandler}
         * @param handler Property handler: The handler of the function. This parameter is required.
         * @return {@code this}
         */
        public Builder handler(com.aliyun.ros.cdk.core.IResolvable handler) {
            this.handler = handler;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getRuntime}
         * @param runtime Property runtime: The programming language of the function. This parameter is required.
         * @return {@code this}
         */
        public Builder runtime(java.lang.String runtime) {
            this.runtime = runtime;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getRuntime}
         * @param runtime Property runtime: The programming language of the function. This parameter is required.
         * @return {@code this}
         */
        public Builder runtime(com.aliyun.ros.cdk.core.IResolvable runtime) {
            this.runtime = runtime;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getCode}
         * @param code Property code: Function code ZIP package.
         *             Choose one of Code and CustomContainerConfig.
         * @return {@code this}
         */
        public Builder code(com.aliyun.ros.cdk.core.IResolvable code) {
            this.code = code;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getCode}
         * @param code Property code: Function code ZIP package.
         *             Choose one of Code and CustomContainerConfig.
         * @return {@code this}
         */
        public Builder code(com.aliyun.ros.cdk.fc3.RosFunction.CodeProperty code) {
            this.code = code;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getCpu}
         * @param cpu Property cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4.
         * @return {@code this}
         */
        public Builder cpu(java.lang.Number cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getCpu}
         * @param cpu Property cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4.
         * @return {@code this}
         */
        public Builder cpu(com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getCustomContainerConfig}
         * @param customContainerConfig Property customContainerConfig: Custom container configuration.
         *                              Choose one of Code and CustomContainerConfig.
         * @return {@code this}
         */
        public Builder customContainerConfig(com.aliyun.ros.cdk.core.IResolvable customContainerConfig) {
            this.customContainerConfig = customContainerConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getCustomContainerConfig}
         * @param customContainerConfig Property customContainerConfig: Custom container configuration.
         *                              Choose one of Code and CustomContainerConfig.
         * @return {@code this}
         */
        public Builder customContainerConfig(com.aliyun.ros.cdk.fc3.RosFunction.CustomContainerConfigProperty customContainerConfig) {
            this.customContainerConfig = customContainerConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getCustomDns}
         * @param customDns Property customDns: Custom DNS configuration.
         * @return {@code this}
         */
        public Builder customDns(com.aliyun.ros.cdk.core.IResolvable customDns) {
            this.customDns = customDns;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getCustomDns}
         * @param customDns Property customDns: Custom DNS configuration.
         * @return {@code this}
         */
        public Builder customDns(com.aliyun.ros.cdk.fc3.RosFunction.CustomDnsProperty customDns) {
            this.customDns = customDns;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getCustomRuntimeConfig}
         * @param customRuntimeConfig Property customRuntimeConfig: Custom runtime configuration.
         * @return {@code this}
         */
        public Builder customRuntimeConfig(com.aliyun.ros.cdk.core.IResolvable customRuntimeConfig) {
            this.customRuntimeConfig = customRuntimeConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getCustomRuntimeConfig}
         * @param customRuntimeConfig Property customRuntimeConfig: Custom runtime configuration.
         * @return {@code this}
         */
        public Builder customRuntimeConfig(com.aliyun.ros.cdk.fc3.RosFunction.CustomRuntimeConfigProperty customRuntimeConfig) {
            this.customRuntimeConfig = customRuntimeConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getDescription}
         * @param description Property description: Function description.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getDescription}
         * @param description Property description: Function description.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getDisableOndemand}
         * @param disableOndemand Property disableOndemand: Whether to disable the creation of on-demand instances.
         *                        When enabled, on-demand instances will not be created, and only reserved instances can be used.
         * @return {@code this}
         */
        public Builder disableOndemand(java.lang.Boolean disableOndemand) {
            this.disableOndemand = disableOndemand;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getDisableOndemand}
         * @param disableOndemand Property disableOndemand: Whether to disable the creation of on-demand instances.
         *                        When enabled, on-demand instances will not be created, and only reserved instances can be used.
         * @return {@code this}
         */
        public Builder disableOndemand(com.aliyun.ros.cdk.core.IResolvable disableOndemand) {
            this.disableOndemand = disableOndemand;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getDiskSize}
         * @param diskSize Property diskSize: The disk size of the function, in MB.
         * @return {@code this}
         */
        public Builder diskSize(java.lang.Number diskSize) {
            this.diskSize = diskSize;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getDiskSize}
         * @param diskSize Property diskSize: The disk size of the function, in MB.
         * @return {@code this}
         */
        public Builder diskSize(com.aliyun.ros.cdk.core.IResolvable diskSize) {
            this.diskSize = diskSize;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getEnvironmentVariables}
         * @param environmentVariables Property environmentVariables: The environment variables of the function.
         * @return {@code this}
         */
        public Builder environmentVariables(com.aliyun.ros.cdk.core.IResolvable environmentVariables) {
            this.environmentVariables = environmentVariables;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getEnvironmentVariables}
         * @param environmentVariables Property environmentVariables: The environment variables of the function.
         * @return {@code this}
         */
        public Builder environmentVariables(java.util.Map<java.lang.String, ? extends java.lang.Object> environmentVariables) {
            this.environmentVariables = environmentVariables;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getGpuConfig}
         * @param gpuConfig Property gpuConfig: The GPU configuration of the function.
         * @return {@code this}
         */
        public Builder gpuConfig(com.aliyun.ros.cdk.core.IResolvable gpuConfig) {
            this.gpuConfig = gpuConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getGpuConfig}
         * @param gpuConfig Property gpuConfig: The GPU configuration of the function.
         * @return {@code this}
         */
        public Builder gpuConfig(com.aliyun.ros.cdk.fc3.RosFunction.GpuConfigProperty gpuConfig) {
            this.gpuConfig = gpuConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getInstanceConcurrency}
         * @param instanceConcurrency Property instanceConcurrency: The maximum number of concurrent instances of the function.
         * @return {@code this}
         */
        public Builder instanceConcurrency(java.lang.Number instanceConcurrency) {
            this.instanceConcurrency = instanceConcurrency;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getInstanceConcurrency}
         * @param instanceConcurrency Property instanceConcurrency: The maximum number of concurrent instances of the function.
         * @return {@code this}
         */
        public Builder instanceConcurrency(com.aliyun.ros.cdk.core.IResolvable instanceConcurrency) {
            this.instanceConcurrency = instanceConcurrency;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getInstanceIsolationMode}
         * @param instanceIsolationMode Property instanceIsolationMode: Instance isolation mode.
         * @return {@code this}
         */
        public Builder instanceIsolationMode(java.lang.String instanceIsolationMode) {
            this.instanceIsolationMode = instanceIsolationMode;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getInstanceIsolationMode}
         * @param instanceIsolationMode Property instanceIsolationMode: Instance isolation mode.
         * @return {@code this}
         */
        public Builder instanceIsolationMode(com.aliyun.ros.cdk.core.IResolvable instanceIsolationMode) {
            this.instanceIsolationMode = instanceIsolationMode;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getInstanceLifecycleConfig}
         * @param instanceLifecycleConfig Property instanceLifecycleConfig: The instance lifecycle configuration of the function.
         * @return {@code this}
         */
        public Builder instanceLifecycleConfig(com.aliyun.ros.cdk.core.IResolvable instanceLifecycleConfig) {
            this.instanceLifecycleConfig = instanceLifecycleConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getInstanceLifecycleConfig}
         * @param instanceLifecycleConfig Property instanceLifecycleConfig: The instance lifecycle configuration of the function.
         * @return {@code this}
         */
        public Builder instanceLifecycleConfig(com.aliyun.ros.cdk.fc3.RosFunction.InstanceLifecycleConfigProperty instanceLifecycleConfig) {
            this.instanceLifecycleConfig = instanceLifecycleConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getInternetAccess}
         * @param internetAccess Property internetAccess: Whether the function can access the Internet.
         * @return {@code this}
         */
        public Builder internetAccess(java.lang.Boolean internetAccess) {
            this.internetAccess = internetAccess;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getInternetAccess}
         * @param internetAccess Property internetAccess: Whether the function can access the Internet.
         * @return {@code this}
         */
        public Builder internetAccess(com.aliyun.ros.cdk.core.IResolvable internetAccess) {
            this.internetAccess = internetAccess;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getLayers}
         * @param layers Property layers: The layers of the function.
         * @return {@code this}
         */
        public Builder layers(com.aliyun.ros.cdk.core.IResolvable layers) {
            this.layers = layers;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getLayers}
         * @param layers Property layers: The layers of the function.
         * @return {@code this}
         */
        public Builder layers(java.util.List<? extends java.lang.Object> layers) {
            this.layers = layers;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getLogConfig}
         * @param logConfig Property logConfig: The log configuration of the function.
         * @return {@code this}
         */
        public Builder logConfig(com.aliyun.ros.cdk.core.IResolvable logConfig) {
            this.logConfig = logConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getLogConfig}
         * @param logConfig Property logConfig: The log configuration of the function.
         * @return {@code this}
         */
        public Builder logConfig(com.aliyun.ros.cdk.fc3.RosFunction.LogConfigProperty logConfig) {
            this.logConfig = logConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getMemorySize}
         * @param memorySize Property memorySize: The memory size of the function, in MB.
         * @return {@code this}
         */
        public Builder memorySize(java.lang.Number memorySize) {
            this.memorySize = memorySize;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getMemorySize}
         * @param memorySize Property memorySize: The memory size of the function, in MB.
         * @return {@code this}
         */
        public Builder memorySize(com.aliyun.ros.cdk.core.IResolvable memorySize) {
            this.memorySize = memorySize;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getNasConfig}
         * @param nasConfig Property nasConfig: The NAS configuration of the function.
         * @return {@code this}
         */
        public Builder nasConfig(com.aliyun.ros.cdk.core.IResolvable nasConfig) {
            this.nasConfig = nasConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getNasConfig}
         * @param nasConfig Property nasConfig: The NAS configuration of the function.
         * @return {@code this}
         */
        public Builder nasConfig(com.aliyun.ros.cdk.fc3.RosFunction.NasConfigProperty nasConfig) {
            this.nasConfig = nasConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getOssMountConfig}
         * @param ossMountConfig Property ossMountConfig: The OSS mount configuration of the function.
         * @return {@code this}
         */
        public Builder ossMountConfig(com.aliyun.ros.cdk.core.IResolvable ossMountConfig) {
            this.ossMountConfig = ossMountConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getOssMountConfig}
         * @param ossMountConfig Property ossMountConfig: The OSS mount configuration of the function.
         * @return {@code this}
         */
        public Builder ossMountConfig(com.aliyun.ros.cdk.fc3.RosFunction.OssMountConfigProperty ossMountConfig) {
            this.ossMountConfig = ossMountConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getRole}
         * @param role Property role: The user is authorized to the RAM role of Function Compute.
         *             After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
         * @return {@code this}
         */
        public Builder role(java.lang.String role) {
            this.role = role;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getRole}
         * @param role Property role: The user is authorized to the RAM role of Function Compute.
         *             After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
         * @return {@code this}
         */
        public Builder role(com.aliyun.ros.cdk.core.IResolvable role) {
            this.role = role;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getSessionAffinity}
         * @param sessionAffinity Property sessionAffinity: The session affinity policy for Function Compute requests.
         *                        Set to MCP_SSE to implement MCP SSE protocol request affinity. Set to GENERATED_COOKIE for cookie-based affinity. Set to HEADER_FIELD for header-based affinity. If not set or set to NONE, there is no affinity effect, and requests are routed according to the default scheduling policy of Function Compute.
         * @return {@code this}
         */
        public Builder sessionAffinity(java.lang.String sessionAffinity) {
            this.sessionAffinity = sessionAffinity;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getSessionAffinity}
         * @param sessionAffinity Property sessionAffinity: The session affinity policy for Function Compute requests.
         *                        Set to MCP_SSE to implement MCP SSE protocol request affinity. Set to GENERATED_COOKIE for cookie-based affinity. Set to HEADER_FIELD for header-based affinity. If not set or set to NONE, there is no affinity effect, and requests are routed according to the default scheduling policy of Function Compute.
         * @return {@code this}
         */
        public Builder sessionAffinity(com.aliyun.ros.cdk.core.IResolvable sessionAffinity) {
            this.sessionAffinity = sessionAffinity;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getSessionAffinityConfig}
         * @param sessionAffinityConfig Property sessionAffinityConfig: Session affinity configuration.
         * @return {@code this}
         */
        public Builder sessionAffinityConfig(com.aliyun.ros.cdk.core.IResolvable sessionAffinityConfig) {
            this.sessionAffinityConfig = sessionAffinityConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getSessionAffinityConfig}
         * @param sessionAffinityConfig Property sessionAffinityConfig: Session affinity configuration.
         * @return {@code this}
         */
        public Builder sessionAffinityConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> sessionAffinityConfig) {
            this.sessionAffinityConfig = sessionAffinityConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getTags}
         * @param tags Property tags: Tags to attach to function.
         *             Max support 20 tags to add during create function. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.fc3.RosFunction.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.fc3.RosFunction.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getTimeout}
         * @param timeout Property timeout: The timeout of the function.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getTimeout}
         * @param timeout Property timeout: The timeout of the function.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getTracingConfig}
         * @param tracingConfig Property tracingConfig: The tracing configuration of the function.
         * @return {@code this}
         */
        public Builder tracingConfig(com.aliyun.ros.cdk.core.IResolvable tracingConfig) {
            this.tracingConfig = tracingConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getTracingConfig}
         * @param tracingConfig Property tracingConfig: The tracing configuration of the function.
         * @return {@code this}
         */
        public Builder tracingConfig(com.aliyun.ros.cdk.fc3.RosFunction.TracingConfigProperty tracingConfig) {
            this.tracingConfig = tracingConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getVpcConfig}
         * @param vpcConfig Property vpcConfig: The VPC configuration of the function.
         * @return {@code this}
         */
        public Builder vpcConfig(com.aliyun.ros.cdk.core.IResolvable vpcConfig) {
            this.vpcConfig = vpcConfig;
            return this;
        }

        /**
         * Sets the value of {@link FunctionProps#getVpcConfig}
         * @param vpcConfig Property vpcConfig: The VPC configuration of the function.
         * @return {@code this}
         */
        public Builder vpcConfig(com.aliyun.ros.cdk.fc3.RosFunction.VpcConfigProperty vpcConfig) {
            this.vpcConfig = vpcConfig;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link FunctionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public FunctionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link FunctionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FunctionProps {
        private final java.lang.Object functionName;
        private final java.lang.Object handler;
        private final java.lang.Object runtime;
        private final java.lang.Object code;
        private final java.lang.Object cpu;
        private final java.lang.Object customContainerConfig;
        private final java.lang.Object customDns;
        private final java.lang.Object customRuntimeConfig;
        private final java.lang.Object description;
        private final java.lang.Object disableOndemand;
        private final java.lang.Object diskSize;
        private final java.lang.Object environmentVariables;
        private final java.lang.Object gpuConfig;
        private final java.lang.Object instanceConcurrency;
        private final java.lang.Object instanceIsolationMode;
        private final java.lang.Object instanceLifecycleConfig;
        private final java.lang.Object internetAccess;
        private final java.lang.Object layers;
        private final java.lang.Object logConfig;
        private final java.lang.Object memorySize;
        private final java.lang.Object nasConfig;
        private final java.lang.Object ossMountConfig;
        private final java.lang.Object role;
        private final java.lang.Object sessionAffinity;
        private final java.lang.Object sessionAffinityConfig;
        private final java.util.List<com.aliyun.ros.cdk.fc3.RosFunction.TagsProperty> tags;
        private final java.lang.Object timeout;
        private final java.lang.Object tracingConfig;
        private final java.lang.Object vpcConfig;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.functionName = software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.handler = software.amazon.jsii.Kernel.get(this, "handler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.runtime = software.amazon.jsii.Kernel.get(this, "runtime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.code = software.amazon.jsii.Kernel.get(this, "code", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpu = software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customContainerConfig = software.amazon.jsii.Kernel.get(this, "customContainerConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customDns = software.amazon.jsii.Kernel.get(this, "customDns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customRuntimeConfig = software.amazon.jsii.Kernel.get(this, "customRuntimeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.disableOndemand = software.amazon.jsii.Kernel.get(this, "disableOndemand", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskSize = software.amazon.jsii.Kernel.get(this, "diskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.environmentVariables = software.amazon.jsii.Kernel.get(this, "environmentVariables", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gpuConfig = software.amazon.jsii.Kernel.get(this, "gpuConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceConcurrency = software.amazon.jsii.Kernel.get(this, "instanceConcurrency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceIsolationMode = software.amazon.jsii.Kernel.get(this, "instanceIsolationMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceLifecycleConfig = software.amazon.jsii.Kernel.get(this, "instanceLifecycleConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetAccess = software.amazon.jsii.Kernel.get(this, "internetAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.layers = software.amazon.jsii.Kernel.get(this, "layers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logConfig = software.amazon.jsii.Kernel.get(this, "logConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.memorySize = software.amazon.jsii.Kernel.get(this, "memorySize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nasConfig = software.amazon.jsii.Kernel.get(this, "nasConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ossMountConfig = software.amazon.jsii.Kernel.get(this, "ossMountConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.role = software.amazon.jsii.Kernel.get(this, "role", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sessionAffinity = software.amazon.jsii.Kernel.get(this, "sessionAffinity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sessionAffinityConfig = software.amazon.jsii.Kernel.get(this, "sessionAffinityConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc3.RosFunction.TagsProperty.class)));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tracingConfig = software.amazon.jsii.Kernel.get(this, "tracingConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcConfig = software.amazon.jsii.Kernel.get(this, "vpcConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.functionName = java.util.Objects.requireNonNull(builder.functionName, "functionName is required");
            this.handler = java.util.Objects.requireNonNull(builder.handler, "handler is required");
            this.runtime = java.util.Objects.requireNonNull(builder.runtime, "runtime is required");
            this.code = builder.code;
            this.cpu = builder.cpu;
            this.customContainerConfig = builder.customContainerConfig;
            this.customDns = builder.customDns;
            this.customRuntimeConfig = builder.customRuntimeConfig;
            this.description = builder.description;
            this.disableOndemand = builder.disableOndemand;
            this.diskSize = builder.diskSize;
            this.environmentVariables = builder.environmentVariables;
            this.gpuConfig = builder.gpuConfig;
            this.instanceConcurrency = builder.instanceConcurrency;
            this.instanceIsolationMode = builder.instanceIsolationMode;
            this.instanceLifecycleConfig = builder.instanceLifecycleConfig;
            this.internetAccess = builder.internetAccess;
            this.layers = builder.layers;
            this.logConfig = builder.logConfig;
            this.memorySize = builder.memorySize;
            this.nasConfig = builder.nasConfig;
            this.ossMountConfig = builder.ossMountConfig;
            this.role = builder.role;
            this.sessionAffinity = builder.sessionAffinity;
            this.sessionAffinityConfig = builder.sessionAffinityConfig;
            this.tags = (java.util.List<com.aliyun.ros.cdk.fc3.RosFunction.TagsProperty>)builder.tags;
            this.timeout = builder.timeout;
            this.tracingConfig = builder.tracingConfig;
            this.vpcConfig = builder.vpcConfig;
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
        public final java.lang.Object getCustomRuntimeConfig() {
            return this.customRuntimeConfig;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDisableOndemand() {
            return this.disableOndemand;
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
        public final java.lang.Object getGpuConfig() {
            return this.gpuConfig;
        }

        @Override
        public final java.lang.Object getInstanceConcurrency() {
            return this.instanceConcurrency;
        }

        @Override
        public final java.lang.Object getInstanceIsolationMode() {
            return this.instanceIsolationMode;
        }

        @Override
        public final java.lang.Object getInstanceLifecycleConfig() {
            return this.instanceLifecycleConfig;
        }

        @Override
        public final java.lang.Object getInternetAccess() {
            return this.internetAccess;
        }

        @Override
        public final java.lang.Object getLayers() {
            return this.layers;
        }

        @Override
        public final java.lang.Object getLogConfig() {
            return this.logConfig;
        }

        @Override
        public final java.lang.Object getMemorySize() {
            return this.memorySize;
        }

        @Override
        public final java.lang.Object getNasConfig() {
            return this.nasConfig;
        }

        @Override
        public final java.lang.Object getOssMountConfig() {
            return this.ossMountConfig;
        }

        @Override
        public final java.lang.Object getRole() {
            return this.role;
        }

        @Override
        public final java.lang.Object getSessionAffinity() {
            return this.sessionAffinity;
        }

        @Override
        public final java.lang.Object getSessionAffinityConfig() {
            return this.sessionAffinityConfig;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.fc3.RosFunction.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTimeout() {
            return this.timeout;
        }

        @Override
        public final java.lang.Object getTracingConfig() {
            return this.tracingConfig;
        }

        @Override
        public final java.lang.Object getVpcConfig() {
            return this.vpcConfig;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("functionName", om.valueToTree(this.getFunctionName()));
            data.set("handler", om.valueToTree(this.getHandler()));
            data.set("runtime", om.valueToTree(this.getRuntime()));
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
            if (this.getCustomRuntimeConfig() != null) {
                data.set("customRuntimeConfig", om.valueToTree(this.getCustomRuntimeConfig()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDisableOndemand() != null) {
                data.set("disableOndemand", om.valueToTree(this.getDisableOndemand()));
            }
            if (this.getDiskSize() != null) {
                data.set("diskSize", om.valueToTree(this.getDiskSize()));
            }
            if (this.getEnvironmentVariables() != null) {
                data.set("environmentVariables", om.valueToTree(this.getEnvironmentVariables()));
            }
            if (this.getGpuConfig() != null) {
                data.set("gpuConfig", om.valueToTree(this.getGpuConfig()));
            }
            if (this.getInstanceConcurrency() != null) {
                data.set("instanceConcurrency", om.valueToTree(this.getInstanceConcurrency()));
            }
            if (this.getInstanceIsolationMode() != null) {
                data.set("instanceIsolationMode", om.valueToTree(this.getInstanceIsolationMode()));
            }
            if (this.getInstanceLifecycleConfig() != null) {
                data.set("instanceLifecycleConfig", om.valueToTree(this.getInstanceLifecycleConfig()));
            }
            if (this.getInternetAccess() != null) {
                data.set("internetAccess", om.valueToTree(this.getInternetAccess()));
            }
            if (this.getLayers() != null) {
                data.set("layers", om.valueToTree(this.getLayers()));
            }
            if (this.getLogConfig() != null) {
                data.set("logConfig", om.valueToTree(this.getLogConfig()));
            }
            if (this.getMemorySize() != null) {
                data.set("memorySize", om.valueToTree(this.getMemorySize()));
            }
            if (this.getNasConfig() != null) {
                data.set("nasConfig", om.valueToTree(this.getNasConfig()));
            }
            if (this.getOssMountConfig() != null) {
                data.set("ossMountConfig", om.valueToTree(this.getOssMountConfig()));
            }
            if (this.getRole() != null) {
                data.set("role", om.valueToTree(this.getRole()));
            }
            if (this.getSessionAffinity() != null) {
                data.set("sessionAffinity", om.valueToTree(this.getSessionAffinity()));
            }
            if (this.getSessionAffinityConfig() != null) {
                data.set("sessionAffinityConfig", om.valueToTree(this.getSessionAffinityConfig()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTimeout() != null) {
                data.set("timeout", om.valueToTree(this.getTimeout()));
            }
            if (this.getTracingConfig() != null) {
                data.set("tracingConfig", om.valueToTree(this.getTracingConfig()));
            }
            if (this.getVpcConfig() != null) {
                data.set("vpcConfig", om.valueToTree(this.getVpcConfig()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.FunctionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            FunctionProps.Jsii$Proxy that = (FunctionProps.Jsii$Proxy) o;

            if (!functionName.equals(that.functionName)) return false;
            if (!handler.equals(that.handler)) return false;
            if (!runtime.equals(that.runtime)) return false;
            if (this.code != null ? !this.code.equals(that.code) : that.code != null) return false;
            if (this.cpu != null ? !this.cpu.equals(that.cpu) : that.cpu != null) return false;
            if (this.customContainerConfig != null ? !this.customContainerConfig.equals(that.customContainerConfig) : that.customContainerConfig != null) return false;
            if (this.customDns != null ? !this.customDns.equals(that.customDns) : that.customDns != null) return false;
            if (this.customRuntimeConfig != null ? !this.customRuntimeConfig.equals(that.customRuntimeConfig) : that.customRuntimeConfig != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.disableOndemand != null ? !this.disableOndemand.equals(that.disableOndemand) : that.disableOndemand != null) return false;
            if (this.diskSize != null ? !this.diskSize.equals(that.diskSize) : that.diskSize != null) return false;
            if (this.environmentVariables != null ? !this.environmentVariables.equals(that.environmentVariables) : that.environmentVariables != null) return false;
            if (this.gpuConfig != null ? !this.gpuConfig.equals(that.gpuConfig) : that.gpuConfig != null) return false;
            if (this.instanceConcurrency != null ? !this.instanceConcurrency.equals(that.instanceConcurrency) : that.instanceConcurrency != null) return false;
            if (this.instanceIsolationMode != null ? !this.instanceIsolationMode.equals(that.instanceIsolationMode) : that.instanceIsolationMode != null) return false;
            if (this.instanceLifecycleConfig != null ? !this.instanceLifecycleConfig.equals(that.instanceLifecycleConfig) : that.instanceLifecycleConfig != null) return false;
            if (this.internetAccess != null ? !this.internetAccess.equals(that.internetAccess) : that.internetAccess != null) return false;
            if (this.layers != null ? !this.layers.equals(that.layers) : that.layers != null) return false;
            if (this.logConfig != null ? !this.logConfig.equals(that.logConfig) : that.logConfig != null) return false;
            if (this.memorySize != null ? !this.memorySize.equals(that.memorySize) : that.memorySize != null) return false;
            if (this.nasConfig != null ? !this.nasConfig.equals(that.nasConfig) : that.nasConfig != null) return false;
            if (this.ossMountConfig != null ? !this.ossMountConfig.equals(that.ossMountConfig) : that.ossMountConfig != null) return false;
            if (this.role != null ? !this.role.equals(that.role) : that.role != null) return false;
            if (this.sessionAffinity != null ? !this.sessionAffinity.equals(that.sessionAffinity) : that.sessionAffinity != null) return false;
            if (this.sessionAffinityConfig != null ? !this.sessionAffinityConfig.equals(that.sessionAffinityConfig) : that.sessionAffinityConfig != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.timeout != null ? !this.timeout.equals(that.timeout) : that.timeout != null) return false;
            if (this.tracingConfig != null ? !this.tracingConfig.equals(that.tracingConfig) : that.tracingConfig != null) return false;
            return this.vpcConfig != null ? this.vpcConfig.equals(that.vpcConfig) : that.vpcConfig == null;
        }

        @Override
        public final int hashCode() {
            int result = this.functionName.hashCode();
            result = 31 * result + (this.handler.hashCode());
            result = 31 * result + (this.runtime.hashCode());
            result = 31 * result + (this.code != null ? this.code.hashCode() : 0);
            result = 31 * result + (this.cpu != null ? this.cpu.hashCode() : 0);
            result = 31 * result + (this.customContainerConfig != null ? this.customContainerConfig.hashCode() : 0);
            result = 31 * result + (this.customDns != null ? this.customDns.hashCode() : 0);
            result = 31 * result + (this.customRuntimeConfig != null ? this.customRuntimeConfig.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.disableOndemand != null ? this.disableOndemand.hashCode() : 0);
            result = 31 * result + (this.diskSize != null ? this.diskSize.hashCode() : 0);
            result = 31 * result + (this.environmentVariables != null ? this.environmentVariables.hashCode() : 0);
            result = 31 * result + (this.gpuConfig != null ? this.gpuConfig.hashCode() : 0);
            result = 31 * result + (this.instanceConcurrency != null ? this.instanceConcurrency.hashCode() : 0);
            result = 31 * result + (this.instanceIsolationMode != null ? this.instanceIsolationMode.hashCode() : 0);
            result = 31 * result + (this.instanceLifecycleConfig != null ? this.instanceLifecycleConfig.hashCode() : 0);
            result = 31 * result + (this.internetAccess != null ? this.internetAccess.hashCode() : 0);
            result = 31 * result + (this.layers != null ? this.layers.hashCode() : 0);
            result = 31 * result + (this.logConfig != null ? this.logConfig.hashCode() : 0);
            result = 31 * result + (this.memorySize != null ? this.memorySize.hashCode() : 0);
            result = 31 * result + (this.nasConfig != null ? this.nasConfig.hashCode() : 0);
            result = 31 * result + (this.ossMountConfig != null ? this.ossMountConfig.hashCode() : 0);
            result = 31 * result + (this.role != null ? this.role.hashCode() : 0);
            result = 31 * result + (this.sessionAffinity != null ? this.sessionAffinity.hashCode() : 0);
            result = 31 * result + (this.sessionAffinityConfig != null ? this.sessionAffinityConfig.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
            result = 31 * result + (this.tracingConfig != null ? this.tracingConfig.hashCode() : 0);
            result = 31 * result + (this.vpcConfig != null ? this.vpcConfig.hashCode() : 0);
            return result;
        }
    }
}
