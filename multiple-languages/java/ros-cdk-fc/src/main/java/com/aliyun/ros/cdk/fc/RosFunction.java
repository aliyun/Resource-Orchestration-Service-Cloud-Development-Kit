package com.aliyun.ros.cdk.fc;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::FC::Function</code>, which is used to create a function.
 * <p>
 * A function must belong to a service. All functions of a service share the same attributes as the service, such as the service authorization and log configurations.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.968Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunction")
public class RosFunction extends com.aliyun.ros.cdk.core.RosResource {

    protected RosFunction(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosFunction(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.fc.RosFunction.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosFunction(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.RosFunctionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFunctionId() {
        return software.amazon.jsii.Kernel.get(this, "attrFunctionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFunctionName() {
        return software.amazon.jsii.Kernel.get(this, "attrFunctionName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFunctionName() {
        return software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFunctionName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "functionName", java.util.Objects.requireNonNull(value, "functionName is required"));
    }

    /**
     */
    public void setFunctionName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "functionName", java.util.Objects.requireNonNull(value, "functionName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getHandler() {
        return software.amazon.jsii.Kernel.get(this, "handler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHandler(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "handler", java.util.Objects.requireNonNull(value, "handler is required"));
    }

    /**
     */
    public void setHandler(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "handler", java.util.Objects.requireNonNull(value, "handler is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRuntime() {
        return software.amazon.jsii.Kernel.get(this, "runtime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuntime(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "runtime", java.util.Objects.requireNonNull(value, "runtime is required"));
    }

    /**
     */
    public void setRuntime(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "runtime", java.util.Objects.requireNonNull(value, "runtime is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getServiceName() {
        return software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServiceName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "serviceName", java.util.Objects.requireNonNull(value, "serviceName is required"));
    }

    /**
     */
    public void setServiceName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serviceName", java.util.Objects.requireNonNull(value, "serviceName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAsyncConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "asyncConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAsyncConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "asyncConfiguration", value);
    }

    /**
     */
    public void setAsyncConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.RosFunction.AsyncConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "asyncConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCaPort() {
        return software.amazon.jsii.Kernel.get(this, "caPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCaPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "caPort", value);
    }

    /**
     */
    public void setCaPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "caPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCode() {
        return software.amazon.jsii.Kernel.get(this, "code", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "code", value);
    }

    /**
     */
    public void setCode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.RosFunction.CodeProperty value) {
        software.amazon.jsii.Kernel.set(this, "code", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCpu() {
        return software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCpu(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cpu", value);
    }

    /**
     */
    public void setCpu(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cpu", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCustomContainerConfig() {
        return software.amazon.jsii.Kernel.get(this, "customContainerConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCustomContainerConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "customContainerConfig", value);
    }

    /**
     */
    public void setCustomContainerConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.RosFunction.CustomContainerConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "customContainerConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCustomDns() {
        return software.amazon.jsii.Kernel.get(this, "customDns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCustomDns(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "customDns", value);
    }

    /**
     */
    public void setCustomDns(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.RosFunction.CustomDNSProperty value) {
        software.amazon.jsii.Kernel.set(this, "customDns", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCustomHealthCheckConfig() {
        return software.amazon.jsii.Kernel.get(this, "customHealthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCustomHealthCheckConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "customHealthCheckConfig", value);
    }

    /**
     */
    public void setCustomHealthCheckConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.RosFunction.CustomHealthCheckConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "customHealthCheckConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCustomRuntimeConfig() {
        return software.amazon.jsii.Kernel.get(this, "customRuntimeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCustomRuntimeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "customRuntimeConfig", value);
    }

    /**
     */
    public void setCustomRuntimeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.RosFunction.CustomRuntimeConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "customRuntimeConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDiskSize() {
        return software.amazon.jsii.Kernel.get(this, "diskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDiskSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "diskSize", value);
    }

    /**
     */
    public void setDiskSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "diskSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentVariables() {
        return software.amazon.jsii.Kernel.get(this, "environmentVariables", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnvironmentVariables(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "environmentVariables", value);
    }

    /**
     */
    public void setEnvironmentVariables(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "environmentVariables", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGpuMemorySize() {
        return software.amazon.jsii.Kernel.get(this, "gpuMemorySize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGpuMemorySize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "gpuMemorySize", value);
    }

    /**
     */
    public void setGpuMemorySize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "gpuMemorySize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInitializationTimeout() {
        return software.amazon.jsii.Kernel.get(this, "initializationTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInitializationTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "initializationTimeout", value);
    }

    /**
     */
    public void setInitializationTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "initializationTimeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInitializer() {
        return software.amazon.jsii.Kernel.get(this, "initializer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInitializer(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "initializer", value);
    }

    /**
     */
    public void setInitializer(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "initializer", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceConcurrency() {
        return software.amazon.jsii.Kernel.get(this, "instanceConcurrency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceConcurrency(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "instanceConcurrency", value);
    }

    /**
     */
    public void setInstanceConcurrency(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceConcurrency", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceLifecycleConfig() {
        return software.amazon.jsii.Kernel.get(this, "instanceLifecycleConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceLifecycleConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceLifecycleConfig", value);
    }

    /**
     */
    public void setInstanceLifecycleConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.RosFunction.InstanceLifecycleConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "instanceLifecycleConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceSoftConcurrency() {
        return software.amazon.jsii.Kernel.get(this, "instanceSoftConcurrency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceSoftConcurrency(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "instanceSoftConcurrency", value);
    }

    /**
     */
    public void setInstanceSoftConcurrency(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceSoftConcurrency", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceType", value);
    }

    /**
     */
    public void setInstanceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMemorySize() {
        return software.amazon.jsii.Kernel.get(this, "memorySize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMemorySize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "memorySize", value);
    }

    /**
     */
    public void setMemorySize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "memorySize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "timeout", value);
    }

    /**
     */
    public void setTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timeout", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunction.AsyncConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(AsyncConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AsyncConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDestination() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxAsyncEventAgeInSeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxAsyncRetryAttempts() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStatefulInvocation() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AsyncConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AsyncConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AsyncConfigurationProperty> {
            java.lang.Object destination;
            java.lang.Object maxAsyncEventAgeInSeconds;
            java.lang.Object maxAsyncRetryAttempts;
            java.lang.Object statefulInvocation;

            /**
             * Sets the value of {@link AsyncConfigurationProperty#getDestination}
             * @param destination the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destination(com.aliyun.ros.cdk.core.IResolvable destination) {
                this.destination = destination;
                return this;
            }

            /**
             * Sets the value of {@link AsyncConfigurationProperty#getDestination}
             * @param destination the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destination(com.aliyun.ros.cdk.fc.RosFunction.DestinationProperty destination) {
                this.destination = destination;
                return this;
            }

            /**
             * Sets the value of {@link AsyncConfigurationProperty#getMaxAsyncEventAgeInSeconds}
             * @param maxAsyncEventAgeInSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxAsyncEventAgeInSeconds(java.lang.Number maxAsyncEventAgeInSeconds) {
                this.maxAsyncEventAgeInSeconds = maxAsyncEventAgeInSeconds;
                return this;
            }

            /**
             * Sets the value of {@link AsyncConfigurationProperty#getMaxAsyncEventAgeInSeconds}
             * @param maxAsyncEventAgeInSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxAsyncEventAgeInSeconds(com.aliyun.ros.cdk.core.IResolvable maxAsyncEventAgeInSeconds) {
                this.maxAsyncEventAgeInSeconds = maxAsyncEventAgeInSeconds;
                return this;
            }

            /**
             * Sets the value of {@link AsyncConfigurationProperty#getMaxAsyncRetryAttempts}
             * @param maxAsyncRetryAttempts the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxAsyncRetryAttempts(java.lang.Number maxAsyncRetryAttempts) {
                this.maxAsyncRetryAttempts = maxAsyncRetryAttempts;
                return this;
            }

            /**
             * Sets the value of {@link AsyncConfigurationProperty#getMaxAsyncRetryAttempts}
             * @param maxAsyncRetryAttempts the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxAsyncRetryAttempts(com.aliyun.ros.cdk.core.IResolvable maxAsyncRetryAttempts) {
                this.maxAsyncRetryAttempts = maxAsyncRetryAttempts;
                return this;
            }

            /**
             * Sets the value of {@link AsyncConfigurationProperty#getStatefulInvocation}
             * @param statefulInvocation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder statefulInvocation(java.lang.Boolean statefulInvocation) {
                this.statefulInvocation = statefulInvocation;
                return this;
            }

            /**
             * Sets the value of {@link AsyncConfigurationProperty#getStatefulInvocation}
             * @param statefulInvocation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder statefulInvocation(com.aliyun.ros.cdk.core.IResolvable statefulInvocation) {
                this.statefulInvocation = statefulInvocation;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AsyncConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AsyncConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AsyncConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AsyncConfigurationProperty {
            private final java.lang.Object destination;
            private final java.lang.Object maxAsyncEventAgeInSeconds;
            private final java.lang.Object maxAsyncRetryAttempts;
            private final java.lang.Object statefulInvocation;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.destination = software.amazon.jsii.Kernel.get(this, "destination", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxAsyncEventAgeInSeconds = software.amazon.jsii.Kernel.get(this, "maxAsyncEventAgeInSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxAsyncRetryAttempts = software.amazon.jsii.Kernel.get(this, "maxAsyncRetryAttempts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.statefulInvocation = software.amazon.jsii.Kernel.get(this, "statefulInvocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.destination = builder.destination;
                this.maxAsyncEventAgeInSeconds = builder.maxAsyncEventAgeInSeconds;
                this.maxAsyncRetryAttempts = builder.maxAsyncRetryAttempts;
                this.statefulInvocation = builder.statefulInvocation;
            }

            @Override
            public final java.lang.Object getDestination() {
                return this.destination;
            }

            @Override
            public final java.lang.Object getMaxAsyncEventAgeInSeconds() {
                return this.maxAsyncEventAgeInSeconds;
            }

            @Override
            public final java.lang.Object getMaxAsyncRetryAttempts() {
                return this.maxAsyncRetryAttempts;
            }

            @Override
            public final java.lang.Object getStatefulInvocation() {
                return this.statefulInvocation;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDestination() != null) {
                    data.set("destination", om.valueToTree(this.getDestination()));
                }
                if (this.getMaxAsyncEventAgeInSeconds() != null) {
                    data.set("maxAsyncEventAgeInSeconds", om.valueToTree(this.getMaxAsyncEventAgeInSeconds()));
                }
                if (this.getMaxAsyncRetryAttempts() != null) {
                    data.set("maxAsyncRetryAttempts", om.valueToTree(this.getMaxAsyncRetryAttempts()));
                }
                if (this.getStatefulInvocation() != null) {
                    data.set("statefulInvocation", om.valueToTree(this.getStatefulInvocation()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosFunction.AsyncConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AsyncConfigurationProperty.Jsii$Proxy that = (AsyncConfigurationProperty.Jsii$Proxy) o;

                if (this.destination != null ? !this.destination.equals(that.destination) : that.destination != null) return false;
                if (this.maxAsyncEventAgeInSeconds != null ? !this.maxAsyncEventAgeInSeconds.equals(that.maxAsyncEventAgeInSeconds) : that.maxAsyncEventAgeInSeconds != null) return false;
                if (this.maxAsyncRetryAttempts != null ? !this.maxAsyncRetryAttempts.equals(that.maxAsyncRetryAttempts) : that.maxAsyncRetryAttempts != null) return false;
                return this.statefulInvocation != null ? this.statefulInvocation.equals(that.statefulInvocation) : that.statefulInvocation == null;
            }

            @Override
            public final int hashCode() {
                int result = this.destination != null ? this.destination.hashCode() : 0;
                result = 31 * result + (this.maxAsyncEventAgeInSeconds != null ? this.maxAsyncEventAgeInSeconds.hashCode() : 0);
                result = 31 * result + (this.maxAsyncRetryAttempts != null ? this.maxAsyncRetryAttempts.hashCode() : 0);
                result = 31 * result + (this.statefulInvocation != null ? this.statefulInvocation.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunction.CodeProperty")
    @software.amazon.jsii.Jsii.Proxy(CodeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CodeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssBucketName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssObjectName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourceCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getZipFile() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CodeProperty> {
            java.lang.Object ossBucketName;
            java.lang.Object ossObjectName;
            java.lang.Object sourceCode;
            java.lang.Object zipFile;

            /**
             * Sets the value of {@link CodeProperty#getOssBucketName}
             * @param ossBucketName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossBucketName(java.lang.String ossBucketName) {
                this.ossBucketName = ossBucketName;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getOssBucketName}
             * @param ossBucketName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossBucketName(com.aliyun.ros.cdk.core.IResolvable ossBucketName) {
                this.ossBucketName = ossBucketName;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getOssObjectName}
             * @param ossObjectName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossObjectName(java.lang.String ossObjectName) {
                this.ossObjectName = ossObjectName;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getOssObjectName}
             * @param ossObjectName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossObjectName(com.aliyun.ros.cdk.core.IResolvable ossObjectName) {
                this.ossObjectName = ossObjectName;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getSourceCode}
             * @param sourceCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceCode(java.lang.String sourceCode) {
                this.sourceCode = sourceCode;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getSourceCode}
             * @param sourceCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceCode(com.aliyun.ros.cdk.core.IResolvable sourceCode) {
                this.sourceCode = sourceCode;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getZipFile}
             * @param zipFile the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zipFile(java.lang.String zipFile) {
                this.zipFile = zipFile;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getZipFile}
             * @param zipFile the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zipFile(com.aliyun.ros.cdk.core.IResolvable zipFile) {
                this.zipFile = zipFile;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CodeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CodeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CodeProperty {
            private final java.lang.Object ossBucketName;
            private final java.lang.Object ossObjectName;
            private final java.lang.Object sourceCode;
            private final java.lang.Object zipFile;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ossBucketName = software.amazon.jsii.Kernel.get(this, "ossBucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossObjectName = software.amazon.jsii.Kernel.get(this, "ossObjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceCode = software.amazon.jsii.Kernel.get(this, "sourceCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.zipFile = software.amazon.jsii.Kernel.get(this, "zipFile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ossBucketName = builder.ossBucketName;
                this.ossObjectName = builder.ossObjectName;
                this.sourceCode = builder.sourceCode;
                this.zipFile = builder.zipFile;
            }

            @Override
            public final java.lang.Object getOssBucketName() {
                return this.ossBucketName;
            }

            @Override
            public final java.lang.Object getOssObjectName() {
                return this.ossObjectName;
            }

            @Override
            public final java.lang.Object getSourceCode() {
                return this.sourceCode;
            }

            @Override
            public final java.lang.Object getZipFile() {
                return this.zipFile;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOssBucketName() != null) {
                    data.set("ossBucketName", om.valueToTree(this.getOssBucketName()));
                }
                if (this.getOssObjectName() != null) {
                    data.set("ossObjectName", om.valueToTree(this.getOssObjectName()));
                }
                if (this.getSourceCode() != null) {
                    data.set("sourceCode", om.valueToTree(this.getSourceCode()));
                }
                if (this.getZipFile() != null) {
                    data.set("zipFile", om.valueToTree(this.getZipFile()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosFunction.CodeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CodeProperty.Jsii$Proxy that = (CodeProperty.Jsii$Proxy) o;

                if (this.ossBucketName != null ? !this.ossBucketName.equals(that.ossBucketName) : that.ossBucketName != null) return false;
                if (this.ossObjectName != null ? !this.ossObjectName.equals(that.ossObjectName) : that.ossObjectName != null) return false;
                if (this.sourceCode != null ? !this.sourceCode.equals(that.sourceCode) : that.sourceCode != null) return false;
                return this.zipFile != null ? this.zipFile.equals(that.zipFile) : that.zipFile == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ossBucketName != null ? this.ossBucketName.hashCode() : 0;
                result = 31 * result + (this.ossObjectName != null ? this.ossObjectName.hashCode() : 0);
                result = 31 * result + (this.sourceCode != null ? this.sourceCode.hashCode() : 0);
                result = 31 * result + (this.zipFile != null ? this.zipFile.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunction.CustomContainerConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(CustomContainerConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CustomContainerConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getImage();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAccelerationType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getArgs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCommand() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWebServerMode() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CustomContainerConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CustomContainerConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CustomContainerConfigProperty> {
            java.lang.Object image;
            java.lang.Object accelerationType;
            java.lang.Object args;
            java.lang.Object command;
            java.lang.Object instanceId;
            java.lang.Object webServerMode;

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getImage}
             * @param image the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder image(java.lang.String image) {
                this.image = image;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getImage}
             * @param image the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder image(com.aliyun.ros.cdk.core.IResolvable image) {
                this.image = image;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getAccelerationType}
             * @param accelerationType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accelerationType(java.lang.String accelerationType) {
                this.accelerationType = accelerationType;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getAccelerationType}
             * @param accelerationType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accelerationType(com.aliyun.ros.cdk.core.IResolvable accelerationType) {
                this.accelerationType = accelerationType;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getArgs}
             * @param args the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder args(java.lang.String args) {
                this.args = args;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getArgs}
             * @param args the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder args(com.aliyun.ros.cdk.core.IResolvable args) {
                this.args = args;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(java.lang.String command) {
                this.command = command;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(com.aliyun.ros.cdk.core.IResolvable command) {
                this.command = command;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getInstanceId}
             * @param instanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(java.lang.String instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getInstanceId}
             * @param instanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getWebServerMode}
             * @param webServerMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder webServerMode(java.lang.Boolean webServerMode) {
                this.webServerMode = webServerMode;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getWebServerMode}
             * @param webServerMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder webServerMode(com.aliyun.ros.cdk.core.IResolvable webServerMode) {
                this.webServerMode = webServerMode;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CustomContainerConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CustomContainerConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CustomContainerConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomContainerConfigProperty {
            private final java.lang.Object image;
            private final java.lang.Object accelerationType;
            private final java.lang.Object args;
            private final java.lang.Object command;
            private final java.lang.Object instanceId;
            private final java.lang.Object webServerMode;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.image = software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.accelerationType = software.amazon.jsii.Kernel.get(this, "accelerationType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.args = software.amazon.jsii.Kernel.get(this, "args", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.webServerMode = software.amazon.jsii.Kernel.get(this, "webServerMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.image = java.util.Objects.requireNonNull(builder.image, "image is required");
                this.accelerationType = builder.accelerationType;
                this.args = builder.args;
                this.command = builder.command;
                this.instanceId = builder.instanceId;
                this.webServerMode = builder.webServerMode;
            }

            @Override
            public final java.lang.Object getImage() {
                return this.image;
            }

            @Override
            public final java.lang.Object getAccelerationType() {
                return this.accelerationType;
            }

            @Override
            public final java.lang.Object getArgs() {
                return this.args;
            }

            @Override
            public final java.lang.Object getCommand() {
                return this.command;
            }

            @Override
            public final java.lang.Object getInstanceId() {
                return this.instanceId;
            }

            @Override
            public final java.lang.Object getWebServerMode() {
                return this.webServerMode;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("image", om.valueToTree(this.getImage()));
                if (this.getAccelerationType() != null) {
                    data.set("accelerationType", om.valueToTree(this.getAccelerationType()));
                }
                if (this.getArgs() != null) {
                    data.set("args", om.valueToTree(this.getArgs()));
                }
                if (this.getCommand() != null) {
                    data.set("command", om.valueToTree(this.getCommand()));
                }
                if (this.getInstanceId() != null) {
                    data.set("instanceId", om.valueToTree(this.getInstanceId()));
                }
                if (this.getWebServerMode() != null) {
                    data.set("webServerMode", om.valueToTree(this.getWebServerMode()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosFunction.CustomContainerConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CustomContainerConfigProperty.Jsii$Proxy that = (CustomContainerConfigProperty.Jsii$Proxy) o;

                if (!image.equals(that.image)) return false;
                if (this.accelerationType != null ? !this.accelerationType.equals(that.accelerationType) : that.accelerationType != null) return false;
                if (this.args != null ? !this.args.equals(that.args) : that.args != null) return false;
                if (this.command != null ? !this.command.equals(that.command) : that.command != null) return false;
                if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
                return this.webServerMode != null ? this.webServerMode.equals(that.webServerMode) : that.webServerMode == null;
            }

            @Override
            public final int hashCode() {
                int result = this.image.hashCode();
                result = 31 * result + (this.accelerationType != null ? this.accelerationType.hashCode() : 0);
                result = 31 * result + (this.args != null ? this.args.hashCode() : 0);
                result = 31 * result + (this.command != null ? this.command.hashCode() : 0);
                result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
                result = 31 * result + (this.webServerMode != null ? this.webServerMode.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunction.CustomDNSProperty")
    @software.amazon.jsii.Jsii.Proxy(CustomDNSProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CustomDNSProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDnsOptions() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNameServers() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSearches() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CustomDNSProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CustomDNSProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CustomDNSProperty> {
            java.lang.Object dnsOptions;
            java.lang.Object nameServers;
            java.lang.Object searches;

            /**
             * Sets the value of {@link CustomDNSProperty#getDnsOptions}
             * @param dnsOptions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dnsOptions(com.aliyun.ros.cdk.core.IResolvable dnsOptions) {
                this.dnsOptions = dnsOptions;
                return this;
            }

            /**
             * Sets the value of {@link CustomDNSProperty#getDnsOptions}
             * @param dnsOptions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dnsOptions(java.util.List<? extends java.lang.Object> dnsOptions) {
                this.dnsOptions = dnsOptions;
                return this;
            }

            /**
             * Sets the value of {@link CustomDNSProperty#getNameServers}
             * @param nameServers the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nameServers(com.aliyun.ros.cdk.core.IResolvable nameServers) {
                this.nameServers = nameServers;
                return this;
            }

            /**
             * Sets the value of {@link CustomDNSProperty#getNameServers}
             * @param nameServers the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nameServers(java.util.List<? extends java.lang.Object> nameServers) {
                this.nameServers = nameServers;
                return this;
            }

            /**
             * Sets the value of {@link CustomDNSProperty#getSearches}
             * @param searches the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder searches(com.aliyun.ros.cdk.core.IResolvable searches) {
                this.searches = searches;
                return this;
            }

            /**
             * Sets the value of {@link CustomDNSProperty#getSearches}
             * @param searches the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder searches(java.util.List<? extends java.lang.Object> searches) {
                this.searches = searches;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CustomDNSProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CustomDNSProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CustomDNSProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomDNSProperty {
            private final java.lang.Object dnsOptions;
            private final java.lang.Object nameServers;
            private final java.lang.Object searches;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.dnsOptions = software.amazon.jsii.Kernel.get(this, "dnsOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nameServers = software.amazon.jsii.Kernel.get(this, "nameServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.searches = software.amazon.jsii.Kernel.get(this, "searches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.dnsOptions = builder.dnsOptions;
                this.nameServers = builder.nameServers;
                this.searches = builder.searches;
            }

            @Override
            public final java.lang.Object getDnsOptions() {
                return this.dnsOptions;
            }

            @Override
            public final java.lang.Object getNameServers() {
                return this.nameServers;
            }

            @Override
            public final java.lang.Object getSearches() {
                return this.searches;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDnsOptions() != null) {
                    data.set("dnsOptions", om.valueToTree(this.getDnsOptions()));
                }
                if (this.getNameServers() != null) {
                    data.set("nameServers", om.valueToTree(this.getNameServers()));
                }
                if (this.getSearches() != null) {
                    data.set("searches", om.valueToTree(this.getSearches()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosFunction.CustomDNSProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CustomDNSProperty.Jsii$Proxy that = (CustomDNSProperty.Jsii$Proxy) o;

                if (this.dnsOptions != null ? !this.dnsOptions.equals(that.dnsOptions) : that.dnsOptions != null) return false;
                if (this.nameServers != null ? !this.nameServers.equals(that.nameServers) : that.nameServers != null) return false;
                return this.searches != null ? this.searches.equals(that.searches) : that.searches == null;
            }

            @Override
            public final int hashCode() {
                int result = this.dnsOptions != null ? this.dnsOptions.hashCode() : 0;
                result = 31 * result + (this.nameServers != null ? this.nameServers.hashCode() : 0);
                result = 31 * result + (this.searches != null ? this.searches.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunction.CustomHealthCheckConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(CustomHealthCheckConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CustomHealthCheckConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFailureThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpGetUrl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInitialDelaySeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodSeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSuccessThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutSeconds() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CustomHealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CustomHealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CustomHealthCheckConfigProperty> {
            java.lang.Object failureThreshold;
            java.lang.Object httpGetUrl;
            java.lang.Object initialDelaySeconds;
            java.lang.Object periodSeconds;
            java.lang.Object successThreshold;
            java.lang.Object timeoutSeconds;

            /**
             * Sets the value of {@link CustomHealthCheckConfigProperty#getFailureThreshold}
             * @param failureThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureThreshold(java.lang.Number failureThreshold) {
                this.failureThreshold = failureThreshold;
                return this;
            }

            /**
             * Sets the value of {@link CustomHealthCheckConfigProperty#getFailureThreshold}
             * @param failureThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureThreshold(com.aliyun.ros.cdk.core.IResolvable failureThreshold) {
                this.failureThreshold = failureThreshold;
                return this;
            }

            /**
             * Sets the value of {@link CustomHealthCheckConfigProperty#getHttpGetUrl}
             * @param httpGetUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGetUrl(java.lang.String httpGetUrl) {
                this.httpGetUrl = httpGetUrl;
                return this;
            }

            /**
             * Sets the value of {@link CustomHealthCheckConfigProperty#getHttpGetUrl}
             * @param httpGetUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGetUrl(com.aliyun.ros.cdk.core.IResolvable httpGetUrl) {
                this.httpGetUrl = httpGetUrl;
                return this;
            }

            /**
             * Sets the value of {@link CustomHealthCheckConfigProperty#getInitialDelaySeconds}
             * @param initialDelaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initialDelaySeconds(java.lang.Number initialDelaySeconds) {
                this.initialDelaySeconds = initialDelaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link CustomHealthCheckConfigProperty#getInitialDelaySeconds}
             * @param initialDelaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initialDelaySeconds(com.aliyun.ros.cdk.core.IResolvable initialDelaySeconds) {
                this.initialDelaySeconds = initialDelaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link CustomHealthCheckConfigProperty#getPeriodSeconds}
             * @param periodSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodSeconds(java.lang.Number periodSeconds) {
                this.periodSeconds = periodSeconds;
                return this;
            }

            /**
             * Sets the value of {@link CustomHealthCheckConfigProperty#getPeriodSeconds}
             * @param periodSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodSeconds(com.aliyun.ros.cdk.core.IResolvable periodSeconds) {
                this.periodSeconds = periodSeconds;
                return this;
            }

            /**
             * Sets the value of {@link CustomHealthCheckConfigProperty#getSuccessThreshold}
             * @param successThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder successThreshold(java.lang.Number successThreshold) {
                this.successThreshold = successThreshold;
                return this;
            }

            /**
             * Sets the value of {@link CustomHealthCheckConfigProperty#getSuccessThreshold}
             * @param successThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder successThreshold(com.aliyun.ros.cdk.core.IResolvable successThreshold) {
                this.successThreshold = successThreshold;
                return this;
            }

            /**
             * Sets the value of {@link CustomHealthCheckConfigProperty#getTimeoutSeconds}
             * @param timeoutSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutSeconds(java.lang.Number timeoutSeconds) {
                this.timeoutSeconds = timeoutSeconds;
                return this;
            }

            /**
             * Sets the value of {@link CustomHealthCheckConfigProperty#getTimeoutSeconds}
             * @param timeoutSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutSeconds(com.aliyun.ros.cdk.core.IResolvable timeoutSeconds) {
                this.timeoutSeconds = timeoutSeconds;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CustomHealthCheckConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CustomHealthCheckConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CustomHealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomHealthCheckConfigProperty {
            private final java.lang.Object failureThreshold;
            private final java.lang.Object httpGetUrl;
            private final java.lang.Object initialDelaySeconds;
            private final java.lang.Object periodSeconds;
            private final java.lang.Object successThreshold;
            private final java.lang.Object timeoutSeconds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.failureThreshold = software.amazon.jsii.Kernel.get(this, "failureThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpGetUrl = software.amazon.jsii.Kernel.get(this, "httpGetUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.initialDelaySeconds = software.amazon.jsii.Kernel.get(this, "initialDelaySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.periodSeconds = software.amazon.jsii.Kernel.get(this, "periodSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.successThreshold = software.amazon.jsii.Kernel.get(this, "successThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeoutSeconds = software.amazon.jsii.Kernel.get(this, "timeoutSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.failureThreshold = builder.failureThreshold;
                this.httpGetUrl = builder.httpGetUrl;
                this.initialDelaySeconds = builder.initialDelaySeconds;
                this.periodSeconds = builder.periodSeconds;
                this.successThreshold = builder.successThreshold;
                this.timeoutSeconds = builder.timeoutSeconds;
            }

            @Override
            public final java.lang.Object getFailureThreshold() {
                return this.failureThreshold;
            }

            @Override
            public final java.lang.Object getHttpGetUrl() {
                return this.httpGetUrl;
            }

            @Override
            public final java.lang.Object getInitialDelaySeconds() {
                return this.initialDelaySeconds;
            }

            @Override
            public final java.lang.Object getPeriodSeconds() {
                return this.periodSeconds;
            }

            @Override
            public final java.lang.Object getSuccessThreshold() {
                return this.successThreshold;
            }

            @Override
            public final java.lang.Object getTimeoutSeconds() {
                return this.timeoutSeconds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getFailureThreshold() != null) {
                    data.set("failureThreshold", om.valueToTree(this.getFailureThreshold()));
                }
                if (this.getHttpGetUrl() != null) {
                    data.set("httpGetUrl", om.valueToTree(this.getHttpGetUrl()));
                }
                if (this.getInitialDelaySeconds() != null) {
                    data.set("initialDelaySeconds", om.valueToTree(this.getInitialDelaySeconds()));
                }
                if (this.getPeriodSeconds() != null) {
                    data.set("periodSeconds", om.valueToTree(this.getPeriodSeconds()));
                }
                if (this.getSuccessThreshold() != null) {
                    data.set("successThreshold", om.valueToTree(this.getSuccessThreshold()));
                }
                if (this.getTimeoutSeconds() != null) {
                    data.set("timeoutSeconds", om.valueToTree(this.getTimeoutSeconds()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosFunction.CustomHealthCheckConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CustomHealthCheckConfigProperty.Jsii$Proxy that = (CustomHealthCheckConfigProperty.Jsii$Proxy) o;

                if (this.failureThreshold != null ? !this.failureThreshold.equals(that.failureThreshold) : that.failureThreshold != null) return false;
                if (this.httpGetUrl != null ? !this.httpGetUrl.equals(that.httpGetUrl) : that.httpGetUrl != null) return false;
                if (this.initialDelaySeconds != null ? !this.initialDelaySeconds.equals(that.initialDelaySeconds) : that.initialDelaySeconds != null) return false;
                if (this.periodSeconds != null ? !this.periodSeconds.equals(that.periodSeconds) : that.periodSeconds != null) return false;
                if (this.successThreshold != null ? !this.successThreshold.equals(that.successThreshold) : that.successThreshold != null) return false;
                return this.timeoutSeconds != null ? this.timeoutSeconds.equals(that.timeoutSeconds) : that.timeoutSeconds == null;
            }

            @Override
            public final int hashCode() {
                int result = this.failureThreshold != null ? this.failureThreshold.hashCode() : 0;
                result = 31 * result + (this.httpGetUrl != null ? this.httpGetUrl.hashCode() : 0);
                result = 31 * result + (this.initialDelaySeconds != null ? this.initialDelaySeconds.hashCode() : 0);
                result = 31 * result + (this.periodSeconds != null ? this.periodSeconds.hashCode() : 0);
                result = 31 * result + (this.successThreshold != null ? this.successThreshold.hashCode() : 0);
                result = 31 * result + (this.timeoutSeconds != null ? this.timeoutSeconds.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunction.CustomRuntimeConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(CustomRuntimeConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CustomRuntimeConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getArgs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCommand() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CustomRuntimeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CustomRuntimeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CustomRuntimeConfigProperty> {
            java.lang.Object args;
            java.lang.Object command;

            /**
             * Sets the value of {@link CustomRuntimeConfigProperty#getArgs}
             * @param args the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder args(com.aliyun.ros.cdk.core.IResolvable args) {
                this.args = args;
                return this;
            }

            /**
             * Sets the value of {@link CustomRuntimeConfigProperty#getArgs}
             * @param args the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder args(java.util.List<? extends java.lang.Object> args) {
                this.args = args;
                return this;
            }

            /**
             * Sets the value of {@link CustomRuntimeConfigProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(com.aliyun.ros.cdk.core.IResolvable command) {
                this.command = command;
                return this;
            }

            /**
             * Sets the value of {@link CustomRuntimeConfigProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(java.util.List<? extends java.lang.Object> command) {
                this.command = command;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CustomRuntimeConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CustomRuntimeConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CustomRuntimeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomRuntimeConfigProperty {
            private final java.lang.Object args;
            private final java.lang.Object command;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.args = software.amazon.jsii.Kernel.get(this, "args", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.args = builder.args;
                this.command = builder.command;
            }

            @Override
            public final java.lang.Object getArgs() {
                return this.args;
            }

            @Override
            public final java.lang.Object getCommand() {
                return this.command;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getArgs() != null) {
                    data.set("args", om.valueToTree(this.getArgs()));
                }
                if (this.getCommand() != null) {
                    data.set("command", om.valueToTree(this.getCommand()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosFunction.CustomRuntimeConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CustomRuntimeConfigProperty.Jsii$Proxy that = (CustomRuntimeConfigProperty.Jsii$Proxy) o;

                if (this.args != null ? !this.args.equals(that.args) : that.args != null) return false;
                return this.command != null ? this.command.equals(that.command) : that.command == null;
            }

            @Override
            public final int hashCode() {
                int result = this.args != null ? this.args.hashCode() : 0;
                result = 31 * result + (this.command != null ? this.command.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunction.DestinationProperty")
    @software.amazon.jsii.Jsii.Proxy(DestinationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DestinationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOnFailure() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOnSuccess() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DestinationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DestinationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DestinationProperty> {
            java.lang.Object onFailure;
            java.lang.Object onSuccess;

            /**
             * Sets the value of {@link DestinationProperty#getOnFailure}
             * @param onFailure the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onFailure(java.lang.String onFailure) {
                this.onFailure = onFailure;
                return this;
            }

            /**
             * Sets the value of {@link DestinationProperty#getOnFailure}
             * @param onFailure the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onFailure(com.aliyun.ros.cdk.core.IResolvable onFailure) {
                this.onFailure = onFailure;
                return this;
            }

            /**
             * Sets the value of {@link DestinationProperty#getOnSuccess}
             * @param onSuccess the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onSuccess(java.lang.String onSuccess) {
                this.onSuccess = onSuccess;
                return this;
            }

            /**
             * Sets the value of {@link DestinationProperty#getOnSuccess}
             * @param onSuccess the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onSuccess(com.aliyun.ros.cdk.core.IResolvable onSuccess) {
                this.onSuccess = onSuccess;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DestinationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DestinationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DestinationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DestinationProperty {
            private final java.lang.Object onFailure;
            private final java.lang.Object onSuccess;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.onFailure = software.amazon.jsii.Kernel.get(this, "onFailure", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.onSuccess = software.amazon.jsii.Kernel.get(this, "onSuccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.onFailure = builder.onFailure;
                this.onSuccess = builder.onSuccess;
            }

            @Override
            public final java.lang.Object getOnFailure() {
                return this.onFailure;
            }

            @Override
            public final java.lang.Object getOnSuccess() {
                return this.onSuccess;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOnFailure() != null) {
                    data.set("onFailure", om.valueToTree(this.getOnFailure()));
                }
                if (this.getOnSuccess() != null) {
                    data.set("onSuccess", om.valueToTree(this.getOnSuccess()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosFunction.DestinationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DestinationProperty.Jsii$Proxy that = (DestinationProperty.Jsii$Proxy) o;

                if (this.onFailure != null ? !this.onFailure.equals(that.onFailure) : that.onFailure != null) return false;
                return this.onSuccess != null ? this.onSuccess.equals(that.onSuccess) : that.onSuccess == null;
            }

            @Override
            public final int hashCode() {
                int result = this.onFailure != null ? this.onFailure.hashCode() : 0;
                result = 31 * result + (this.onSuccess != null ? this.onSuccess.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunction.DnsOptionsProperty")
    @software.amazon.jsii.Jsii.Proxy(DnsOptionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DnsOptionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DnsOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DnsOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DnsOptionsProperty> {
            java.lang.Object name;
            java.lang.Object value;

            /**
             * Sets the value of {@link DnsOptionsProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link DnsOptionsProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link DnsOptionsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link DnsOptionsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DnsOptionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DnsOptionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DnsOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DnsOptionsProperty {
            private final java.lang.Object name;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("name", om.valueToTree(this.getName()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosFunction.DnsOptionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DnsOptionsProperty.Jsii$Proxy that = (DnsOptionsProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunction.InstanceLifecycleConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(InstanceLifecycleConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface InstanceLifecycleConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPreFreeze() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPreStop() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link InstanceLifecycleConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link InstanceLifecycleConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<InstanceLifecycleConfigProperty> {
            java.lang.Object preFreeze;
            java.lang.Object preStop;

            /**
             * Sets the value of {@link InstanceLifecycleConfigProperty#getPreFreeze}
             * @param preFreeze the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder preFreeze(com.aliyun.ros.cdk.core.IResolvable preFreeze) {
                this.preFreeze = preFreeze;
                return this;
            }

            /**
             * Sets the value of {@link InstanceLifecycleConfigProperty#getPreFreeze}
             * @param preFreeze the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder preFreeze(com.aliyun.ros.cdk.fc.RosFunction.PreFreezeProperty preFreeze) {
                this.preFreeze = preFreeze;
                return this;
            }

            /**
             * Sets the value of {@link InstanceLifecycleConfigProperty#getPreStop}
             * @param preStop the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder preStop(com.aliyun.ros.cdk.core.IResolvable preStop) {
                this.preStop = preStop;
                return this;
            }

            /**
             * Sets the value of {@link InstanceLifecycleConfigProperty#getPreStop}
             * @param preStop the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder preStop(com.aliyun.ros.cdk.fc.RosFunction.PreStopProperty preStop) {
                this.preStop = preStop;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link InstanceLifecycleConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public InstanceLifecycleConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link InstanceLifecycleConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceLifecycleConfigProperty {
            private final java.lang.Object preFreeze;
            private final java.lang.Object preStop;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.preFreeze = software.amazon.jsii.Kernel.get(this, "preFreeze", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.preStop = software.amazon.jsii.Kernel.get(this, "preStop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.preFreeze = builder.preFreeze;
                this.preStop = builder.preStop;
            }

            @Override
            public final java.lang.Object getPreFreeze() {
                return this.preFreeze;
            }

            @Override
            public final java.lang.Object getPreStop() {
                return this.preStop;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getPreFreeze() != null) {
                    data.set("preFreeze", om.valueToTree(this.getPreFreeze()));
                }
                if (this.getPreStop() != null) {
                    data.set("preStop", om.valueToTree(this.getPreStop()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosFunction.InstanceLifecycleConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                InstanceLifecycleConfigProperty.Jsii$Proxy that = (InstanceLifecycleConfigProperty.Jsii$Proxy) o;

                if (this.preFreeze != null ? !this.preFreeze.equals(that.preFreeze) : that.preFreeze != null) return false;
                return this.preStop != null ? this.preStop.equals(that.preStop) : that.preStop == null;
            }

            @Override
            public final int hashCode() {
                int result = this.preFreeze != null ? this.preFreeze.hashCode() : 0;
                result = 31 * result + (this.preStop != null ? this.preStop.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunction.PreFreezeProperty")
    @software.amazon.jsii.Jsii.Proxy(PreFreezeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PreFreezeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHandler() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PreFreezeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PreFreezeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PreFreezeProperty> {
            java.lang.Object handler;
            java.lang.Object timeout;

            /**
             * Sets the value of {@link PreFreezeProperty#getHandler}
             * @param handler the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder handler(java.lang.String handler) {
                this.handler = handler;
                return this;
            }

            /**
             * Sets the value of {@link PreFreezeProperty#getHandler}
             * @param handler the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder handler(com.aliyun.ros.cdk.core.IResolvable handler) {
                this.handler = handler;
                return this;
            }

            /**
             * Sets the value of {@link PreFreezeProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(java.lang.Number timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Sets the value of {@link PreFreezeProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PreFreezeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PreFreezeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PreFreezeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PreFreezeProperty {
            private final java.lang.Object handler;
            private final java.lang.Object timeout;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.handler = software.amazon.jsii.Kernel.get(this, "handler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.handler = builder.handler;
                this.timeout = builder.timeout;
            }

            @Override
            public final java.lang.Object getHandler() {
                return this.handler;
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

                if (this.getHandler() != null) {
                    data.set("handler", om.valueToTree(this.getHandler()));
                }
                if (this.getTimeout() != null) {
                    data.set("timeout", om.valueToTree(this.getTimeout()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosFunction.PreFreezeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PreFreezeProperty.Jsii$Proxy that = (PreFreezeProperty.Jsii$Proxy) o;

                if (this.handler != null ? !this.handler.equals(that.handler) : that.handler != null) return false;
                return this.timeout != null ? this.timeout.equals(that.timeout) : that.timeout == null;
            }

            @Override
            public final int hashCode() {
                int result = this.handler != null ? this.handler.hashCode() : 0;
                result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunction.PreStopProperty")
    @software.amazon.jsii.Jsii.Proxy(PreStopProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PreStopProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHandler() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PreStopProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PreStopProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PreStopProperty> {
            java.lang.Object handler;
            java.lang.Object timeout;

            /**
             * Sets the value of {@link PreStopProperty#getHandler}
             * @param handler the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder handler(java.lang.String handler) {
                this.handler = handler;
                return this;
            }

            /**
             * Sets the value of {@link PreStopProperty#getHandler}
             * @param handler the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder handler(com.aliyun.ros.cdk.core.IResolvable handler) {
                this.handler = handler;
                return this;
            }

            /**
             * Sets the value of {@link PreStopProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(java.lang.Number timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Sets the value of {@link PreStopProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PreStopProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PreStopProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PreStopProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PreStopProperty {
            private final java.lang.Object handler;
            private final java.lang.Object timeout;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.handler = software.amazon.jsii.Kernel.get(this, "handler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.handler = builder.handler;
                this.timeout = builder.timeout;
            }

            @Override
            public final java.lang.Object getHandler() {
                return this.handler;
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

                if (this.getHandler() != null) {
                    data.set("handler", om.valueToTree(this.getHandler()));
                }
                if (this.getTimeout() != null) {
                    data.set("timeout", om.valueToTree(this.getTimeout()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosFunction.PreStopProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PreStopProperty.Jsii$Proxy that = (PreStopProperty.Jsii$Proxy) o;

                if (this.handler != null ? !this.handler.equals(that.handler) : that.handler != null) return false;
                return this.timeout != null ? this.timeout.equals(that.timeout) : that.timeout == null;
            }

            @Override
            public final int hashCode() {
                int result = this.handler != null ? this.handler.hashCode() : 0;
                result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc.RosFunction}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc.RosFunction> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.fc.RosFunctionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc.RosFunctionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param functionName This parameter is required.
         */
        public Builder functionName(final java.lang.String functionName) {
            this.props.functionName(functionName);
            return this;
        }
        /**
         * @return {@code this}
         * @param functionName This parameter is required.
         */
        public Builder functionName(final com.aliyun.ros.cdk.core.IResolvable functionName) {
            this.props.functionName(functionName);
            return this;
        }

        /**
         * @return {@code this}
         * @param handler This parameter is required.
         */
        public Builder handler(final java.lang.String handler) {
            this.props.handler(handler);
            return this;
        }
        /**
         * @return {@code this}
         * @param handler This parameter is required.
         */
        public Builder handler(final com.aliyun.ros.cdk.core.IResolvable handler) {
            this.props.handler(handler);
            return this;
        }

        /**
         * @return {@code this}
         * @param runtime This parameter is required.
         */
        public Builder runtime(final java.lang.String runtime) {
            this.props.runtime(runtime);
            return this;
        }
        /**
         * @return {@code this}
         * @param runtime This parameter is required.
         */
        public Builder runtime(final com.aliyun.ros.cdk.core.IResolvable runtime) {
            this.props.runtime(runtime);
            return this;
        }

        /**
         * @return {@code this}
         * @param serviceName This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param serviceName This parameter is required.
         */
        public Builder serviceName(final com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param asyncConfiguration This parameter is required.
         */
        public Builder asyncConfiguration(final com.aliyun.ros.cdk.core.IResolvable asyncConfiguration) {
            this.props.asyncConfiguration(asyncConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param asyncConfiguration This parameter is required.
         */
        public Builder asyncConfiguration(final com.aliyun.ros.cdk.fc.RosFunction.AsyncConfigurationProperty asyncConfiguration) {
            this.props.asyncConfiguration(asyncConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param caPort This parameter is required.
         */
        public Builder caPort(final java.lang.Number caPort) {
            this.props.caPort(caPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param caPort This parameter is required.
         */
        public Builder caPort(final com.aliyun.ros.cdk.core.IResolvable caPort) {
            this.props.caPort(caPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param code This parameter is required.
         */
        public Builder code(final com.aliyun.ros.cdk.core.IResolvable code) {
            this.props.code(code);
            return this;
        }
        /**
         * @return {@code this}
         * @param code This parameter is required.
         */
        public Builder code(final com.aliyun.ros.cdk.fc.RosFunction.CodeProperty code) {
            this.props.code(code);
            return this;
        }

        /**
         * @return {@code this}
         * @param cpu This parameter is required.
         */
        public Builder cpu(final java.lang.Number cpu) {
            this.props.cpu(cpu);
            return this;
        }
        /**
         * @return {@code this}
         * @param cpu This parameter is required.
         */
        public Builder cpu(final com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.props.cpu(cpu);
            return this;
        }

        /**
         * @return {@code this}
         * @param customContainerConfig This parameter is required.
         */
        public Builder customContainerConfig(final com.aliyun.ros.cdk.core.IResolvable customContainerConfig) {
            this.props.customContainerConfig(customContainerConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param customContainerConfig This parameter is required.
         */
        public Builder customContainerConfig(final com.aliyun.ros.cdk.fc.RosFunction.CustomContainerConfigProperty customContainerConfig) {
            this.props.customContainerConfig(customContainerConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param customDns This parameter is required.
         */
        public Builder customDns(final com.aliyun.ros.cdk.core.IResolvable customDns) {
            this.props.customDns(customDns);
            return this;
        }
        /**
         * @return {@code this}
         * @param customDns This parameter is required.
         */
        public Builder customDns(final com.aliyun.ros.cdk.fc.RosFunction.CustomDNSProperty customDns) {
            this.props.customDns(customDns);
            return this;
        }

        /**
         * @return {@code this}
         * @param customHealthCheckConfig This parameter is required.
         */
        public Builder customHealthCheckConfig(final com.aliyun.ros.cdk.core.IResolvable customHealthCheckConfig) {
            this.props.customHealthCheckConfig(customHealthCheckConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param customHealthCheckConfig This parameter is required.
         */
        public Builder customHealthCheckConfig(final com.aliyun.ros.cdk.fc.RosFunction.CustomHealthCheckConfigProperty customHealthCheckConfig) {
            this.props.customHealthCheckConfig(customHealthCheckConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param customRuntimeConfig This parameter is required.
         */
        public Builder customRuntimeConfig(final com.aliyun.ros.cdk.core.IResolvable customRuntimeConfig) {
            this.props.customRuntimeConfig(customRuntimeConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param customRuntimeConfig This parameter is required.
         */
        public Builder customRuntimeConfig(final com.aliyun.ros.cdk.fc.RosFunction.CustomRuntimeConfigProperty customRuntimeConfig) {
            this.props.customRuntimeConfig(customRuntimeConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param diskSize This parameter is required.
         */
        public Builder diskSize(final java.lang.Number diskSize) {
            this.props.diskSize(diskSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param diskSize This parameter is required.
         */
        public Builder diskSize(final com.aliyun.ros.cdk.core.IResolvable diskSize) {
            this.props.diskSize(diskSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param environmentVariables This parameter is required.
         */
        public Builder environmentVariables(final com.aliyun.ros.cdk.core.IResolvable environmentVariables) {
            this.props.environmentVariables(environmentVariables);
            return this;
        }
        /**
         * @return {@code this}
         * @param environmentVariables This parameter is required.
         */
        public Builder environmentVariables(final java.util.Map<java.lang.String, ? extends java.lang.Object> environmentVariables) {
            this.props.environmentVariables(environmentVariables);
            return this;
        }

        /**
         * @return {@code this}
         * @param gpuMemorySize This parameter is required.
         */
        public Builder gpuMemorySize(final java.lang.Number gpuMemorySize) {
            this.props.gpuMemorySize(gpuMemorySize);
            return this;
        }
        /**
         * @return {@code this}
         * @param gpuMemorySize This parameter is required.
         */
        public Builder gpuMemorySize(final com.aliyun.ros.cdk.core.IResolvable gpuMemorySize) {
            this.props.gpuMemorySize(gpuMemorySize);
            return this;
        }

        /**
         * @return {@code this}
         * @param initializationTimeout This parameter is required.
         */
        public Builder initializationTimeout(final java.lang.Number initializationTimeout) {
            this.props.initializationTimeout(initializationTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param initializationTimeout This parameter is required.
         */
        public Builder initializationTimeout(final com.aliyun.ros.cdk.core.IResolvable initializationTimeout) {
            this.props.initializationTimeout(initializationTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param initializer This parameter is required.
         */
        public Builder initializer(final java.lang.String initializer) {
            this.props.initializer(initializer);
            return this;
        }
        /**
         * @return {@code this}
         * @param initializer This parameter is required.
         */
        public Builder initializer(final com.aliyun.ros.cdk.core.IResolvable initializer) {
            this.props.initializer(initializer);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceConcurrency This parameter is required.
         */
        public Builder instanceConcurrency(final java.lang.Number instanceConcurrency) {
            this.props.instanceConcurrency(instanceConcurrency);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceConcurrency This parameter is required.
         */
        public Builder instanceConcurrency(final com.aliyun.ros.cdk.core.IResolvable instanceConcurrency) {
            this.props.instanceConcurrency(instanceConcurrency);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceLifecycleConfig This parameter is required.
         */
        public Builder instanceLifecycleConfig(final com.aliyun.ros.cdk.core.IResolvable instanceLifecycleConfig) {
            this.props.instanceLifecycleConfig(instanceLifecycleConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceLifecycleConfig This parameter is required.
         */
        public Builder instanceLifecycleConfig(final com.aliyun.ros.cdk.fc.RosFunction.InstanceLifecycleConfigProperty instanceLifecycleConfig) {
            this.props.instanceLifecycleConfig(instanceLifecycleConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceSoftConcurrency This parameter is required.
         */
        public Builder instanceSoftConcurrency(final java.lang.Number instanceSoftConcurrency) {
            this.props.instanceSoftConcurrency(instanceSoftConcurrency);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceSoftConcurrency This parameter is required.
         */
        public Builder instanceSoftConcurrency(final com.aliyun.ros.cdk.core.IResolvable instanceSoftConcurrency) {
            this.props.instanceSoftConcurrency(instanceSoftConcurrency);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceType This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceType This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param memorySize This parameter is required.
         */
        public Builder memorySize(final java.lang.Number memorySize) {
            this.props.memorySize(memorySize);
            return this;
        }
        /**
         * @return {@code this}
         * @param memorySize This parameter is required.
         */
        public Builder memorySize(final com.aliyun.ros.cdk.core.IResolvable memorySize) {
            this.props.memorySize(memorySize);
            return this;
        }

        /**
         * @return {@code this}
         * @param timeout This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param timeout This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc.RosFunction}.
         */
        @Override
        public com.aliyun.ros.cdk.fc.RosFunction build() {
            return new com.aliyun.ros.cdk.fc.RosFunction(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
