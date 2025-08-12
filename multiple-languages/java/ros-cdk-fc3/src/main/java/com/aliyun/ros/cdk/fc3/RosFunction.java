package com.aliyun.ros.cdk.fc3;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::FC3::Function</code>, which is used to create a Function Compute 3.0 function.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:47.682Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction")
public class RosFunction extends com.aliyun.ros.cdk.core.RosResource {

    protected RosFunction(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosFunction(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.fc3.RosFunction.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosFunction(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.RosFunctionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public void setCode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosFunction.CodeProperty value) {
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
    public void setCustomContainerConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosFunction.CustomContainerConfigProperty value) {
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
    public void setCustomDns(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosFunction.CustomDnsProperty value) {
        software.amazon.jsii.Kernel.set(this, "customDns", value);
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
    public void setCustomRuntimeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosFunction.CustomRuntimeConfigProperty value) {
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getGpuConfig() {
        return software.amazon.jsii.Kernel.get(this, "gpuConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGpuConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "gpuConfig", value);
    }

    /**
     */
    public void setGpuConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosFunction.GpuConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "gpuConfig", value);
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
    public void setInstanceLifecycleConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosFunction.InstanceLifecycleConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "instanceLifecycleConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInternetAccess() {
        return software.amazon.jsii.Kernel.get(this, "internetAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInternetAccess(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "internetAccess", value);
    }

    /**
     */
    public void setInternetAccess(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "internetAccess", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLayers() {
        return software.amazon.jsii.Kernel.get(this, "layers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLayers(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "layers", value);
    }

    /**
     */
    public void setLayers(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "layers", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogConfig() {
        return software.amazon.jsii.Kernel.get(this, "logConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logConfig", value);
    }

    /**
     */
    public void setLogConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosFunction.LogConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "logConfig", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getNasConfig() {
        return software.amazon.jsii.Kernel.get(this, "nasConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNasConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nasConfig", value);
    }

    /**
     */
    public void setNasConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosFunction.NasConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "nasConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOssMountConfig() {
        return software.amazon.jsii.Kernel.get(this, "ossMountConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOssMountConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ossMountConfig", value);
    }

    /**
     */
    public void setOssMountConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosFunction.OssMountConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "ossMountConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRole() {
        return software.amazon.jsii.Kernel.get(this, "role", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRole(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "role", value);
    }

    /**
     */
    public void setRole(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "role", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.fc3.RosFunction.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.fc3.RosFunction.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc3.RosFunction.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.fc3.RosFunction.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getTracingConfig() {
        return software.amazon.jsii.Kernel.get(this, "tracingConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTracingConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tracingConfig", value);
    }

    /**
     */
    public void setTracingConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosFunction.TracingConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "tracingConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVpcConfig() {
        return software.amazon.jsii.Kernel.get(this, "vpcConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcConfig", value);
    }

    /**
     */
    public void setVpcConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosFunction.VpcConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "vpcConfig", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.AccelerationInfoProperty")
    @software.amazon.jsii.Jsii.Proxy(AccelerationInfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AccelerationInfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AccelerationInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AccelerationInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AccelerationInfoProperty> {
            java.lang.Object status;

            /**
             * Sets the value of {@link AccelerationInfoProperty#getStatus}
             * @param status the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder status(java.lang.String status) {
                this.status = status;
                return this;
            }

            /**
             * Sets the value of {@link AccelerationInfoProperty#getStatus}
             * @param status the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
                this.status = status;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AccelerationInfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AccelerationInfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AccelerationInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccelerationInfoProperty {
            private final java.lang.Object status;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.status = builder.status;
            }

            @Override
            public final java.lang.Object getStatus() {
                return this.status;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getStatus() != null) {
                    data.set("status", om.valueToTree(this.getStatus()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.AccelerationInfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AccelerationInfoProperty.Jsii$Proxy that = (AccelerationInfoProperty.Jsii$Proxy) o;

                return this.status != null ? this.status.equals(that.status) : that.status == null;
            }

            @Override
            public final int hashCode() {
                int result = this.status != null ? this.status.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.AuthConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(AuthConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AuthConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPassword();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getUserName();

        /**
         * @return a {@link Builder} of {@link AuthConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AuthConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AuthConfigProperty> {
            java.lang.Object password;
            java.lang.Object userName;

            /**
             * Sets the value of {@link AuthConfigProperty#getPassword}
             * @param password the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(java.lang.String password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfigProperty#getPassword}
             * @param password the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfigProperty#getUserName}
             * @param userName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(java.lang.String userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfigProperty#getUserName}
             * @param userName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AuthConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AuthConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AuthConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AuthConfigProperty {
            private final java.lang.Object password;
            private final java.lang.Object userName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.password = java.util.Objects.requireNonNull(builder.password, "password is required");
                this.userName = java.util.Objects.requireNonNull(builder.userName, "userName is required");
            }

            @Override
            public final java.lang.Object getPassword() {
                return this.password;
            }

            @Override
            public final java.lang.Object getUserName() {
                return this.userName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("password", om.valueToTree(this.getPassword()));
                data.set("userName", om.valueToTree(this.getUserName()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.AuthConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AuthConfigProperty.Jsii$Proxy that = (AuthConfigProperty.Jsii$Proxy) o;

                if (!password.equals(that.password)) return false;
                return this.userName.equals(that.userName);
            }

            @Override
            public final int hashCode() {
                int result = this.password.hashCode();
                result = 31 * result + (this.userName.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.CertConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(CertConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CertConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getInsecure();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRootCaCertBase64() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CertConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CertConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CertConfigProperty> {
            java.lang.Object insecure;
            java.lang.Object rootCaCertBase64;

            /**
             * Sets the value of {@link CertConfigProperty#getInsecure}
             * @param insecure the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder insecure(java.lang.Boolean insecure) {
                this.insecure = insecure;
                return this;
            }

            /**
             * Sets the value of {@link CertConfigProperty#getInsecure}
             * @param insecure the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder insecure(com.aliyun.ros.cdk.core.IResolvable insecure) {
                this.insecure = insecure;
                return this;
            }

            /**
             * Sets the value of {@link CertConfigProperty#getRootCaCertBase64}
             * @param rootCaCertBase64 the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rootCaCertBase64(java.lang.String rootCaCertBase64) {
                this.rootCaCertBase64 = rootCaCertBase64;
                return this;
            }

            /**
             * Sets the value of {@link CertConfigProperty#getRootCaCertBase64}
             * @param rootCaCertBase64 the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rootCaCertBase64(com.aliyun.ros.cdk.core.IResolvable rootCaCertBase64) {
                this.rootCaCertBase64 = rootCaCertBase64;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CertConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CertConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CertConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CertConfigProperty {
            private final java.lang.Object insecure;
            private final java.lang.Object rootCaCertBase64;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.insecure = software.amazon.jsii.Kernel.get(this, "insecure", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rootCaCertBase64 = software.amazon.jsii.Kernel.get(this, "rootCaCertBase64", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.insecure = java.util.Objects.requireNonNull(builder.insecure, "insecure is required");
                this.rootCaCertBase64 = builder.rootCaCertBase64;
            }

            @Override
            public final java.lang.Object getInsecure() {
                return this.insecure;
            }

            @Override
            public final java.lang.Object getRootCaCertBase64() {
                return this.rootCaCertBase64;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("insecure", om.valueToTree(this.getInsecure()));
                if (this.getRootCaCertBase64() != null) {
                    data.set("rootCaCertBase64", om.valueToTree(this.getRootCaCertBase64()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.CertConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CertConfigProperty.Jsii$Proxy that = (CertConfigProperty.Jsii$Proxy) o;

                if (!insecure.equals(that.insecure)) return false;
                return this.rootCaCertBase64 != null ? this.rootCaCertBase64.equals(that.rootCaCertBase64) : that.rootCaCertBase64 == null;
            }

            @Override
            public final int hashCode() {
                int result = this.insecure.hashCode();
                result = 31 * result + (this.rootCaCertBase64 != null ? this.rootCaCertBase64.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.CodeProperty")
    @software.amazon.jsii.Jsii.Proxy(CodeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CodeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getChecksum() {
            return null;
        }

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
            java.lang.Object checksum;
            java.lang.Object ossBucketName;
            java.lang.Object ossObjectName;
            java.lang.Object sourceCode;
            java.lang.Object zipFile;

            /**
             * Sets the value of {@link CodeProperty#getChecksum}
             * @param checksum the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checksum(java.lang.String checksum) {
                this.checksum = checksum;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getChecksum}
             * @param checksum the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checksum(com.aliyun.ros.cdk.core.IResolvable checksum) {
                this.checksum = checksum;
                return this;
            }

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
            private final java.lang.Object checksum;
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
                this.checksum = software.amazon.jsii.Kernel.get(this, "checksum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
                this.checksum = builder.checksum;
                this.ossBucketName = builder.ossBucketName;
                this.ossObjectName = builder.ossObjectName;
                this.sourceCode = builder.sourceCode;
                this.zipFile = builder.zipFile;
            }

            @Override
            public final java.lang.Object getChecksum() {
                return this.checksum;
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

                if (this.getChecksum() != null) {
                    data.set("checksum", om.valueToTree(this.getChecksum()));
                }
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.CodeProperty"));
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

                if (this.checksum != null ? !this.checksum.equals(that.checksum) : that.checksum != null) return false;
                if (this.ossBucketName != null ? !this.ossBucketName.equals(that.ossBucketName) : that.ossBucketName != null) return false;
                if (this.ossObjectName != null ? !this.ossObjectName.equals(that.ossObjectName) : that.ossObjectName != null) return false;
                if (this.sourceCode != null ? !this.sourceCode.equals(that.sourceCode) : that.sourceCode != null) return false;
                return this.zipFile != null ? this.zipFile.equals(that.zipFile) : that.zipFile == null;
            }

            @Override
            public final int hashCode() {
                int result = this.checksum != null ? this.checksum.hashCode() : 0;
                result = 31 * result + (this.ossBucketName != null ? this.ossBucketName.hashCode() : 0);
                result = 31 * result + (this.ossObjectName != null ? this.ossObjectName.hashCode() : 0);
                result = 31 * result + (this.sourceCode != null ? this.sourceCode.hashCode() : 0);
                result = 31 * result + (this.zipFile != null ? this.zipFile.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.CustomContainerConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(CustomContainerConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CustomContainerConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAccelerationInfo() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAccelerationType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAcrInstanceId() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getEntrypoint() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getImage() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegistryConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResolvedImageUri() {
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
            java.lang.Object accelerationInfo;
            java.lang.Object accelerationType;
            java.lang.Object acrInstanceId;
            java.lang.Object command;
            java.lang.Object entrypoint;
            java.lang.Object healthCheckConfig;
            java.lang.Object image;
            java.lang.Object port;
            java.lang.Object registryConfig;
            java.lang.Object resolvedImageUri;

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getAccelerationInfo}
             * @param accelerationInfo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accelerationInfo(com.aliyun.ros.cdk.core.IResolvable accelerationInfo) {
                this.accelerationInfo = accelerationInfo;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getAccelerationInfo}
             * @param accelerationInfo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accelerationInfo(com.aliyun.ros.cdk.fc3.RosFunction.AccelerationInfoProperty accelerationInfo) {
                this.accelerationInfo = accelerationInfo;
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
             * Sets the value of {@link CustomContainerConfigProperty#getAcrInstanceId}
             * @param acrInstanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder acrInstanceId(java.lang.String acrInstanceId) {
                this.acrInstanceId = acrInstanceId;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getAcrInstanceId}
             * @param acrInstanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder acrInstanceId(com.aliyun.ros.cdk.core.IResolvable acrInstanceId) {
                this.acrInstanceId = acrInstanceId;
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
             * Sets the value of {@link CustomContainerConfigProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(java.util.List<? extends java.lang.Object> command) {
                this.command = command;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getEntrypoint}
             * @param entrypoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder entrypoint(com.aliyun.ros.cdk.core.IResolvable entrypoint) {
                this.entrypoint = entrypoint;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getEntrypoint}
             * @param entrypoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder entrypoint(java.util.List<? extends java.lang.Object> entrypoint) {
                this.entrypoint = entrypoint;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getHealthCheckConfig}
             * @param healthCheckConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckConfig(com.aliyun.ros.cdk.core.IResolvable healthCheckConfig) {
                this.healthCheckConfig = healthCheckConfig;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getHealthCheckConfig}
             * @param healthCheckConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckConfig(com.aliyun.ros.cdk.fc3.RosFunction.HealthCheckConfigProperty healthCheckConfig) {
                this.healthCheckConfig = healthCheckConfig;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getImage}
             * @param image the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder image(java.lang.String image) {
                this.image = image;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getImage}
             * @param image the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder image(com.aliyun.ros.cdk.core.IResolvable image) {
                this.image = image;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.Number port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getRegistryConfig}
             * @param registryConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder registryConfig(com.aliyun.ros.cdk.core.IResolvable registryConfig) {
                this.registryConfig = registryConfig;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getRegistryConfig}
             * @param registryConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder registryConfig(com.aliyun.ros.cdk.fc3.RosFunction.RegistryConfigProperty registryConfig) {
                this.registryConfig = registryConfig;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getResolvedImageUri}
             * @param resolvedImageUri the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resolvedImageUri(java.lang.String resolvedImageUri) {
                this.resolvedImageUri = resolvedImageUri;
                return this;
            }

            /**
             * Sets the value of {@link CustomContainerConfigProperty#getResolvedImageUri}
             * @param resolvedImageUri the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resolvedImageUri(com.aliyun.ros.cdk.core.IResolvable resolvedImageUri) {
                this.resolvedImageUri = resolvedImageUri;
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
            private final java.lang.Object accelerationInfo;
            private final java.lang.Object accelerationType;
            private final java.lang.Object acrInstanceId;
            private final java.lang.Object command;
            private final java.lang.Object entrypoint;
            private final java.lang.Object healthCheckConfig;
            private final java.lang.Object image;
            private final java.lang.Object port;
            private final java.lang.Object registryConfig;
            private final java.lang.Object resolvedImageUri;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.accelerationInfo = software.amazon.jsii.Kernel.get(this, "accelerationInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.accelerationType = software.amazon.jsii.Kernel.get(this, "accelerationType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.acrInstanceId = software.amazon.jsii.Kernel.get(this, "acrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.entrypoint = software.amazon.jsii.Kernel.get(this, "entrypoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckConfig = software.amazon.jsii.Kernel.get(this, "healthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.image = software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.registryConfig = software.amazon.jsii.Kernel.get(this, "registryConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resolvedImageUri = software.amazon.jsii.Kernel.get(this, "resolvedImageUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.accelerationInfo = builder.accelerationInfo;
                this.accelerationType = builder.accelerationType;
                this.acrInstanceId = builder.acrInstanceId;
                this.command = builder.command;
                this.entrypoint = builder.entrypoint;
                this.healthCheckConfig = builder.healthCheckConfig;
                this.image = builder.image;
                this.port = builder.port;
                this.registryConfig = builder.registryConfig;
                this.resolvedImageUri = builder.resolvedImageUri;
            }

            @Override
            public final java.lang.Object getAccelerationInfo() {
                return this.accelerationInfo;
            }

            @Override
            public final java.lang.Object getAccelerationType() {
                return this.accelerationType;
            }

            @Override
            public final java.lang.Object getAcrInstanceId() {
                return this.acrInstanceId;
            }

            @Override
            public final java.lang.Object getCommand() {
                return this.command;
            }

            @Override
            public final java.lang.Object getEntrypoint() {
                return this.entrypoint;
            }

            @Override
            public final java.lang.Object getHealthCheckConfig() {
                return this.healthCheckConfig;
            }

            @Override
            public final java.lang.Object getImage() {
                return this.image;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getRegistryConfig() {
                return this.registryConfig;
            }

            @Override
            public final java.lang.Object getResolvedImageUri() {
                return this.resolvedImageUri;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAccelerationInfo() != null) {
                    data.set("accelerationInfo", om.valueToTree(this.getAccelerationInfo()));
                }
                if (this.getAccelerationType() != null) {
                    data.set("accelerationType", om.valueToTree(this.getAccelerationType()));
                }
                if (this.getAcrInstanceId() != null) {
                    data.set("acrInstanceId", om.valueToTree(this.getAcrInstanceId()));
                }
                if (this.getCommand() != null) {
                    data.set("command", om.valueToTree(this.getCommand()));
                }
                if (this.getEntrypoint() != null) {
                    data.set("entrypoint", om.valueToTree(this.getEntrypoint()));
                }
                if (this.getHealthCheckConfig() != null) {
                    data.set("healthCheckConfig", om.valueToTree(this.getHealthCheckConfig()));
                }
                if (this.getImage() != null) {
                    data.set("image", om.valueToTree(this.getImage()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getRegistryConfig() != null) {
                    data.set("registryConfig", om.valueToTree(this.getRegistryConfig()));
                }
                if (this.getResolvedImageUri() != null) {
                    data.set("resolvedImageUri", om.valueToTree(this.getResolvedImageUri()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.CustomContainerConfigProperty"));
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

                if (this.accelerationInfo != null ? !this.accelerationInfo.equals(that.accelerationInfo) : that.accelerationInfo != null) return false;
                if (this.accelerationType != null ? !this.accelerationType.equals(that.accelerationType) : that.accelerationType != null) return false;
                if (this.acrInstanceId != null ? !this.acrInstanceId.equals(that.acrInstanceId) : that.acrInstanceId != null) return false;
                if (this.command != null ? !this.command.equals(that.command) : that.command != null) return false;
                if (this.entrypoint != null ? !this.entrypoint.equals(that.entrypoint) : that.entrypoint != null) return false;
                if (this.healthCheckConfig != null ? !this.healthCheckConfig.equals(that.healthCheckConfig) : that.healthCheckConfig != null) return false;
                if (this.image != null ? !this.image.equals(that.image) : that.image != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                if (this.registryConfig != null ? !this.registryConfig.equals(that.registryConfig) : that.registryConfig != null) return false;
                return this.resolvedImageUri != null ? this.resolvedImageUri.equals(that.resolvedImageUri) : that.resolvedImageUri == null;
            }

            @Override
            public final int hashCode() {
                int result = this.accelerationInfo != null ? this.accelerationInfo.hashCode() : 0;
                result = 31 * result + (this.accelerationType != null ? this.accelerationType.hashCode() : 0);
                result = 31 * result + (this.acrInstanceId != null ? this.acrInstanceId.hashCode() : 0);
                result = 31 * result + (this.command != null ? this.command.hashCode() : 0);
                result = 31 * result + (this.entrypoint != null ? this.entrypoint.hashCode() : 0);
                result = 31 * result + (this.healthCheckConfig != null ? this.healthCheckConfig.hashCode() : 0);
                result = 31 * result + (this.image != null ? this.image.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.registryConfig != null ? this.registryConfig.hashCode() : 0);
                result = 31 * result + (this.resolvedImageUri != null ? this.resolvedImageUri.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.CustomDnsProperty")
    @software.amazon.jsii.Jsii.Proxy(CustomDnsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CustomDnsProperty extends software.amazon.jsii.JsiiSerializable {

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
         * @return a {@link Builder} of {@link CustomDnsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CustomDnsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CustomDnsProperty> {
            java.lang.Object dnsOptions;
            java.lang.Object nameServers;
            java.lang.Object searches;

            /**
             * Sets the value of {@link CustomDnsProperty#getDnsOptions}
             * @param dnsOptions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dnsOptions(com.aliyun.ros.cdk.core.IResolvable dnsOptions) {
                this.dnsOptions = dnsOptions;
                return this;
            }

            /**
             * Sets the value of {@link CustomDnsProperty#getDnsOptions}
             * @param dnsOptions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dnsOptions(java.util.List<? extends java.lang.Object> dnsOptions) {
                this.dnsOptions = dnsOptions;
                return this;
            }

            /**
             * Sets the value of {@link CustomDnsProperty#getNameServers}
             * @param nameServers the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nameServers(com.aliyun.ros.cdk.core.IResolvable nameServers) {
                this.nameServers = nameServers;
                return this;
            }

            /**
             * Sets the value of {@link CustomDnsProperty#getNameServers}
             * @param nameServers the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nameServers(java.util.List<? extends java.lang.Object> nameServers) {
                this.nameServers = nameServers;
                return this;
            }

            /**
             * Sets the value of {@link CustomDnsProperty#getSearches}
             * @param searches the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder searches(com.aliyun.ros.cdk.core.IResolvable searches) {
                this.searches = searches;
                return this;
            }

            /**
             * Sets the value of {@link CustomDnsProperty#getSearches}
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
             * @return a new instance of {@link CustomDnsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CustomDnsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CustomDnsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomDnsProperty {
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.CustomDnsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CustomDnsProperty.Jsii$Proxy that = (CustomDnsProperty.Jsii$Proxy) o;

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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.CustomRuntimeConfigHealthCheckConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(CustomRuntimeConfigHealthCheckConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CustomRuntimeConfigHealthCheckConfigProperty extends software.amazon.jsii.JsiiSerializable {

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
         * @return a {@link Builder} of {@link CustomRuntimeConfigHealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CustomRuntimeConfigHealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CustomRuntimeConfigHealthCheckConfigProperty> {
            java.lang.Object failureThreshold;
            java.lang.Object httpGetUrl;
            java.lang.Object initialDelaySeconds;
            java.lang.Object periodSeconds;
            java.lang.Object successThreshold;
            java.lang.Object timeoutSeconds;

            /**
             * Sets the value of {@link CustomRuntimeConfigHealthCheckConfigProperty#getFailureThreshold}
             * @param failureThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureThreshold(java.lang.Number failureThreshold) {
                this.failureThreshold = failureThreshold;
                return this;
            }

            /**
             * Sets the value of {@link CustomRuntimeConfigHealthCheckConfigProperty#getFailureThreshold}
             * @param failureThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureThreshold(com.aliyun.ros.cdk.core.IResolvable failureThreshold) {
                this.failureThreshold = failureThreshold;
                return this;
            }

            /**
             * Sets the value of {@link CustomRuntimeConfigHealthCheckConfigProperty#getHttpGetUrl}
             * @param httpGetUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGetUrl(java.lang.String httpGetUrl) {
                this.httpGetUrl = httpGetUrl;
                return this;
            }

            /**
             * Sets the value of {@link CustomRuntimeConfigHealthCheckConfigProperty#getHttpGetUrl}
             * @param httpGetUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGetUrl(com.aliyun.ros.cdk.core.IResolvable httpGetUrl) {
                this.httpGetUrl = httpGetUrl;
                return this;
            }

            /**
             * Sets the value of {@link CustomRuntimeConfigHealthCheckConfigProperty#getInitialDelaySeconds}
             * @param initialDelaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initialDelaySeconds(java.lang.Number initialDelaySeconds) {
                this.initialDelaySeconds = initialDelaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link CustomRuntimeConfigHealthCheckConfigProperty#getInitialDelaySeconds}
             * @param initialDelaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initialDelaySeconds(com.aliyun.ros.cdk.core.IResolvable initialDelaySeconds) {
                this.initialDelaySeconds = initialDelaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link CustomRuntimeConfigHealthCheckConfigProperty#getPeriodSeconds}
             * @param periodSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodSeconds(java.lang.Number periodSeconds) {
                this.periodSeconds = periodSeconds;
                return this;
            }

            /**
             * Sets the value of {@link CustomRuntimeConfigHealthCheckConfigProperty#getPeriodSeconds}
             * @param periodSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodSeconds(com.aliyun.ros.cdk.core.IResolvable periodSeconds) {
                this.periodSeconds = periodSeconds;
                return this;
            }

            /**
             * Sets the value of {@link CustomRuntimeConfigHealthCheckConfigProperty#getSuccessThreshold}
             * @param successThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder successThreshold(java.lang.Number successThreshold) {
                this.successThreshold = successThreshold;
                return this;
            }

            /**
             * Sets the value of {@link CustomRuntimeConfigHealthCheckConfigProperty#getSuccessThreshold}
             * @param successThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder successThreshold(com.aliyun.ros.cdk.core.IResolvable successThreshold) {
                this.successThreshold = successThreshold;
                return this;
            }

            /**
             * Sets the value of {@link CustomRuntimeConfigHealthCheckConfigProperty#getTimeoutSeconds}
             * @param timeoutSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutSeconds(java.lang.Number timeoutSeconds) {
                this.timeoutSeconds = timeoutSeconds;
                return this;
            }

            /**
             * Sets the value of {@link CustomRuntimeConfigHealthCheckConfigProperty#getTimeoutSeconds}
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
             * @return a new instance of {@link CustomRuntimeConfigHealthCheckConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CustomRuntimeConfigHealthCheckConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CustomRuntimeConfigHealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomRuntimeConfigHealthCheckConfigProperty {
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.CustomRuntimeConfigHealthCheckConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CustomRuntimeConfigHealthCheckConfigProperty.Jsii$Proxy that = (CustomRuntimeConfigHealthCheckConfigProperty.Jsii$Proxy) o;

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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.CustomRuntimeConfigProperty")
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
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
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
            java.lang.Object healthCheckConfig;
            java.lang.Object port;

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
             * Sets the value of {@link CustomRuntimeConfigProperty#getHealthCheckConfig}
             * @param healthCheckConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckConfig(com.aliyun.ros.cdk.core.IResolvable healthCheckConfig) {
                this.healthCheckConfig = healthCheckConfig;
                return this;
            }

            /**
             * Sets the value of {@link CustomRuntimeConfigProperty#getHealthCheckConfig}
             * @param healthCheckConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckConfig(com.aliyun.ros.cdk.fc3.RosFunction.CustomRuntimeConfigHealthCheckConfigProperty healthCheckConfig) {
                this.healthCheckConfig = healthCheckConfig;
                return this;
            }

            /**
             * Sets the value of {@link CustomRuntimeConfigProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.Number port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link CustomRuntimeConfigProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
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
            private final java.lang.Object healthCheckConfig;
            private final java.lang.Object port;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.args = software.amazon.jsii.Kernel.get(this, "args", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckConfig = software.amazon.jsii.Kernel.get(this, "healthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.args = builder.args;
                this.command = builder.command;
                this.healthCheckConfig = builder.healthCheckConfig;
                this.port = builder.port;
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
            public final java.lang.Object getHealthCheckConfig() {
                return this.healthCheckConfig;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
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
                if (this.getHealthCheckConfig() != null) {
                    data.set("healthCheckConfig", om.valueToTree(this.getHealthCheckConfig()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.CustomRuntimeConfigProperty"));
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
                if (this.command != null ? !this.command.equals(that.command) : that.command != null) return false;
                if (this.healthCheckConfig != null ? !this.healthCheckConfig.equals(that.healthCheckConfig) : that.healthCheckConfig != null) return false;
                return this.port != null ? this.port.equals(that.port) : that.port == null;
            }

            @Override
            public final int hashCode() {
                int result = this.args != null ? this.args.hashCode() : 0;
                result = 31 * result + (this.command != null ? this.command.hashCode() : 0);
                result = 31 * result + (this.healthCheckConfig != null ? this.healthCheckConfig.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.DnsOptionsProperty")
    @software.amazon.jsii.Jsii.Proxy(DnsOptionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DnsOptionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

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
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link DnsOptionsProperty#getName}
             * @param name the value to be set.
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
                this.name = builder.name;
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

                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.DnsOptionsProperty"));
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

                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name != null ? this.name.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.GpuConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(GpuConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface GpuConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGpuMemorySize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGpuType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link GpuConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link GpuConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<GpuConfigProperty> {
            java.lang.Object gpuMemorySize;
            java.lang.Object gpuType;

            /**
             * Sets the value of {@link GpuConfigProperty#getGpuMemorySize}
             * @param gpuMemorySize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpuMemorySize(java.lang.Number gpuMemorySize) {
                this.gpuMemorySize = gpuMemorySize;
                return this;
            }

            /**
             * Sets the value of {@link GpuConfigProperty#getGpuMemorySize}
             * @param gpuMemorySize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpuMemorySize(com.aliyun.ros.cdk.core.IResolvable gpuMemorySize) {
                this.gpuMemorySize = gpuMemorySize;
                return this;
            }

            /**
             * Sets the value of {@link GpuConfigProperty#getGpuType}
             * @param gpuType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpuType(java.lang.String gpuType) {
                this.gpuType = gpuType;
                return this;
            }

            /**
             * Sets the value of {@link GpuConfigProperty#getGpuType}
             * @param gpuType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpuType(com.aliyun.ros.cdk.core.IResolvable gpuType) {
                this.gpuType = gpuType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link GpuConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public GpuConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link GpuConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GpuConfigProperty {
            private final java.lang.Object gpuMemorySize;
            private final java.lang.Object gpuType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.gpuMemorySize = software.amazon.jsii.Kernel.get(this, "gpuMemorySize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gpuType = software.amazon.jsii.Kernel.get(this, "gpuType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.gpuMemorySize = builder.gpuMemorySize;
                this.gpuType = builder.gpuType;
            }

            @Override
            public final java.lang.Object getGpuMemorySize() {
                return this.gpuMemorySize;
            }

            @Override
            public final java.lang.Object getGpuType() {
                return this.gpuType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getGpuMemorySize() != null) {
                    data.set("gpuMemorySize", om.valueToTree(this.getGpuMemorySize()));
                }
                if (this.getGpuType() != null) {
                    data.set("gpuType", om.valueToTree(this.getGpuType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.GpuConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                GpuConfigProperty.Jsii$Proxy that = (GpuConfigProperty.Jsii$Proxy) o;

                if (this.gpuMemorySize != null ? !this.gpuMemorySize.equals(that.gpuMemorySize) : that.gpuMemorySize != null) return false;
                return this.gpuType != null ? this.gpuType.equals(that.gpuType) : that.gpuType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.gpuMemorySize != null ? this.gpuMemorySize.hashCode() : 0;
                result = 31 * result + (this.gpuType != null ? this.gpuType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.HealthCheckConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(HealthCheckConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HealthCheckConfigProperty extends software.amazon.jsii.JsiiSerializable {

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
         * @return a {@link Builder} of {@link HealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HealthCheckConfigProperty> {
            java.lang.Object failureThreshold;
            java.lang.Object httpGetUrl;
            java.lang.Object initialDelaySeconds;
            java.lang.Object periodSeconds;
            java.lang.Object successThreshold;
            java.lang.Object timeoutSeconds;

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getFailureThreshold}
             * @param failureThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureThreshold(java.lang.Number failureThreshold) {
                this.failureThreshold = failureThreshold;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getFailureThreshold}
             * @param failureThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureThreshold(com.aliyun.ros.cdk.core.IResolvable failureThreshold) {
                this.failureThreshold = failureThreshold;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHttpGetUrl}
             * @param httpGetUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGetUrl(java.lang.String httpGetUrl) {
                this.httpGetUrl = httpGetUrl;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHttpGetUrl}
             * @param httpGetUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGetUrl(com.aliyun.ros.cdk.core.IResolvable httpGetUrl) {
                this.httpGetUrl = httpGetUrl;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getInitialDelaySeconds}
             * @param initialDelaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initialDelaySeconds(java.lang.Number initialDelaySeconds) {
                this.initialDelaySeconds = initialDelaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getInitialDelaySeconds}
             * @param initialDelaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initialDelaySeconds(com.aliyun.ros.cdk.core.IResolvable initialDelaySeconds) {
                this.initialDelaySeconds = initialDelaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getPeriodSeconds}
             * @param periodSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodSeconds(java.lang.Number periodSeconds) {
                this.periodSeconds = periodSeconds;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getPeriodSeconds}
             * @param periodSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodSeconds(com.aliyun.ros.cdk.core.IResolvable periodSeconds) {
                this.periodSeconds = periodSeconds;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getSuccessThreshold}
             * @param successThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder successThreshold(java.lang.Number successThreshold) {
                this.successThreshold = successThreshold;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getSuccessThreshold}
             * @param successThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder successThreshold(com.aliyun.ros.cdk.core.IResolvable successThreshold) {
                this.successThreshold = successThreshold;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getTimeoutSeconds}
             * @param timeoutSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutSeconds(java.lang.Number timeoutSeconds) {
                this.timeoutSeconds = timeoutSeconds;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getTimeoutSeconds}
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
             * @return a new instance of {@link HealthCheckConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HealthCheckConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HealthCheckConfigProperty {
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.HealthCheckConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HealthCheckConfigProperty.Jsii$Proxy that = (HealthCheckConfigProperty.Jsii$Proxy) o;

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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.InitializerProperty")
    @software.amazon.jsii.Jsii.Proxy(InitializerProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface InitializerProperty extends software.amazon.jsii.JsiiSerializable {

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
         * @return a {@link Builder} of {@link InitializerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link InitializerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<InitializerProperty> {
            java.lang.Object handler;
            java.lang.Object timeout;

            /**
             * Sets the value of {@link InitializerProperty#getHandler}
             * @param handler the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder handler(java.lang.String handler) {
                this.handler = handler;
                return this;
            }

            /**
             * Sets the value of {@link InitializerProperty#getHandler}
             * @param handler the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder handler(com.aliyun.ros.cdk.core.IResolvable handler) {
                this.handler = handler;
                return this;
            }

            /**
             * Sets the value of {@link InitializerProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(java.lang.Number timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Sets the value of {@link InitializerProperty#getTimeout}
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
             * @return a new instance of {@link InitializerProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public InitializerProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link InitializerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InitializerProperty {
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.InitializerProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                InitializerProperty.Jsii$Proxy that = (InitializerProperty.Jsii$Proxy) o;

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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.InstanceLifecycleConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(InstanceLifecycleConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface InstanceLifecycleConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInitializer() {
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
            java.lang.Object initializer;
            java.lang.Object preStop;

            /**
             * Sets the value of {@link InstanceLifecycleConfigProperty#getInitializer}
             * @param initializer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initializer(com.aliyun.ros.cdk.core.IResolvable initializer) {
                this.initializer = initializer;
                return this;
            }

            /**
             * Sets the value of {@link InstanceLifecycleConfigProperty#getInitializer}
             * @param initializer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initializer(com.aliyun.ros.cdk.fc3.RosFunction.InitializerProperty initializer) {
                this.initializer = initializer;
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
            public Builder preStop(com.aliyun.ros.cdk.fc3.RosFunction.PreStopProperty preStop) {
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
            private final java.lang.Object initializer;
            private final java.lang.Object preStop;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.initializer = software.amazon.jsii.Kernel.get(this, "initializer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.preStop = software.amazon.jsii.Kernel.get(this, "preStop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.initializer = builder.initializer;
                this.preStop = builder.preStop;
            }

            @Override
            public final java.lang.Object getInitializer() {
                return this.initializer;
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

                if (this.getInitializer() != null) {
                    data.set("initializer", om.valueToTree(this.getInitializer()));
                }
                if (this.getPreStop() != null) {
                    data.set("preStop", om.valueToTree(this.getPreStop()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.InstanceLifecycleConfigProperty"));
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

                if (this.initializer != null ? !this.initializer.equals(that.initializer) : that.initializer != null) return false;
                return this.preStop != null ? this.preStop.equals(that.preStop) : that.preStop == null;
            }

            @Override
            public final int hashCode() {
                int result = this.initializer != null ? this.initializer.hashCode() : 0;
                result = 31 * result + (this.preStop != null ? this.preStop.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.LogConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(LogConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LogConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableInstanceMetrics() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableRequestMetrics() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLogBeginRule() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLogstore() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProject() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link LogConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LogConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LogConfigProperty> {
            java.lang.Object enableInstanceMetrics;
            java.lang.Object enableRequestMetrics;
            java.lang.Object logBeginRule;
            java.lang.Object logstore;
            java.lang.Object project;

            /**
             * Sets the value of {@link LogConfigProperty#getEnableInstanceMetrics}
             * @param enableInstanceMetrics the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableInstanceMetrics(java.lang.Boolean enableInstanceMetrics) {
                this.enableInstanceMetrics = enableInstanceMetrics;
                return this;
            }

            /**
             * Sets the value of {@link LogConfigProperty#getEnableInstanceMetrics}
             * @param enableInstanceMetrics the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableInstanceMetrics(com.aliyun.ros.cdk.core.IResolvable enableInstanceMetrics) {
                this.enableInstanceMetrics = enableInstanceMetrics;
                return this;
            }

            /**
             * Sets the value of {@link LogConfigProperty#getEnableRequestMetrics}
             * @param enableRequestMetrics the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableRequestMetrics(java.lang.Boolean enableRequestMetrics) {
                this.enableRequestMetrics = enableRequestMetrics;
                return this;
            }

            /**
             * Sets the value of {@link LogConfigProperty#getEnableRequestMetrics}
             * @param enableRequestMetrics the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableRequestMetrics(com.aliyun.ros.cdk.core.IResolvable enableRequestMetrics) {
                this.enableRequestMetrics = enableRequestMetrics;
                return this;
            }

            /**
             * Sets the value of {@link LogConfigProperty#getLogBeginRule}
             * @param logBeginRule the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logBeginRule(java.lang.String logBeginRule) {
                this.logBeginRule = logBeginRule;
                return this;
            }

            /**
             * Sets the value of {@link LogConfigProperty#getLogBeginRule}
             * @param logBeginRule the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logBeginRule(com.aliyun.ros.cdk.core.IResolvable logBeginRule) {
                this.logBeginRule = logBeginRule;
                return this;
            }

            /**
             * Sets the value of {@link LogConfigProperty#getLogstore}
             * @param logstore the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logstore(java.lang.String logstore) {
                this.logstore = logstore;
                return this;
            }

            /**
             * Sets the value of {@link LogConfigProperty#getLogstore}
             * @param logstore the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logstore(com.aliyun.ros.cdk.core.IResolvable logstore) {
                this.logstore = logstore;
                return this;
            }

            /**
             * Sets the value of {@link LogConfigProperty#getProject}
             * @param project the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder project(java.lang.String project) {
                this.project = project;
                return this;
            }

            /**
             * Sets the value of {@link LogConfigProperty#getProject}
             * @param project the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder project(com.aliyun.ros.cdk.core.IResolvable project) {
                this.project = project;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LogConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LogConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LogConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LogConfigProperty {
            private final java.lang.Object enableInstanceMetrics;
            private final java.lang.Object enableRequestMetrics;
            private final java.lang.Object logBeginRule;
            private final java.lang.Object logstore;
            private final java.lang.Object project;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enableInstanceMetrics = software.amazon.jsii.Kernel.get(this, "enableInstanceMetrics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableRequestMetrics = software.amazon.jsii.Kernel.get(this, "enableRequestMetrics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.logBeginRule = software.amazon.jsii.Kernel.get(this, "logBeginRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.logstore = software.amazon.jsii.Kernel.get(this, "logstore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.project = software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enableInstanceMetrics = builder.enableInstanceMetrics;
                this.enableRequestMetrics = builder.enableRequestMetrics;
                this.logBeginRule = builder.logBeginRule;
                this.logstore = builder.logstore;
                this.project = builder.project;
            }

            @Override
            public final java.lang.Object getEnableInstanceMetrics() {
                return this.enableInstanceMetrics;
            }

            @Override
            public final java.lang.Object getEnableRequestMetrics() {
                return this.enableRequestMetrics;
            }

            @Override
            public final java.lang.Object getLogBeginRule() {
                return this.logBeginRule;
            }

            @Override
            public final java.lang.Object getLogstore() {
                return this.logstore;
            }

            @Override
            public final java.lang.Object getProject() {
                return this.project;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEnableInstanceMetrics() != null) {
                    data.set("enableInstanceMetrics", om.valueToTree(this.getEnableInstanceMetrics()));
                }
                if (this.getEnableRequestMetrics() != null) {
                    data.set("enableRequestMetrics", om.valueToTree(this.getEnableRequestMetrics()));
                }
                if (this.getLogBeginRule() != null) {
                    data.set("logBeginRule", om.valueToTree(this.getLogBeginRule()));
                }
                if (this.getLogstore() != null) {
                    data.set("logstore", om.valueToTree(this.getLogstore()));
                }
                if (this.getProject() != null) {
                    data.set("project", om.valueToTree(this.getProject()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.LogConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LogConfigProperty.Jsii$Proxy that = (LogConfigProperty.Jsii$Proxy) o;

                if (this.enableInstanceMetrics != null ? !this.enableInstanceMetrics.equals(that.enableInstanceMetrics) : that.enableInstanceMetrics != null) return false;
                if (this.enableRequestMetrics != null ? !this.enableRequestMetrics.equals(that.enableRequestMetrics) : that.enableRequestMetrics != null) return false;
                if (this.logBeginRule != null ? !this.logBeginRule.equals(that.logBeginRule) : that.logBeginRule != null) return false;
                if (this.logstore != null ? !this.logstore.equals(that.logstore) : that.logstore != null) return false;
                return this.project != null ? this.project.equals(that.project) : that.project == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enableInstanceMetrics != null ? this.enableInstanceMetrics.hashCode() : 0;
                result = 31 * result + (this.enableRequestMetrics != null ? this.enableRequestMetrics.hashCode() : 0);
                result = 31 * result + (this.logBeginRule != null ? this.logBeginRule.hashCode() : 0);
                result = 31 * result + (this.logstore != null ? this.logstore.hashCode() : 0);
                result = 31 * result + (this.project != null ? this.project.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.MountPointsProperty")
    @software.amazon.jsii.Jsii.Proxy(MountPointsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MountPointsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableTls() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountDir() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServerAddr() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MountPointsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MountPointsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MountPointsProperty> {
            java.lang.Object enableTls;
            java.lang.Object mountDir;
            java.lang.Object serverAddr;

            /**
             * Sets the value of {@link MountPointsProperty#getEnableTls}
             * @param enableTls the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableTls(java.lang.Boolean enableTls) {
                this.enableTls = enableTls;
                return this;
            }

            /**
             * Sets the value of {@link MountPointsProperty#getEnableTls}
             * @param enableTls the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableTls(com.aliyun.ros.cdk.core.IResolvable enableTls) {
                this.enableTls = enableTls;
                return this;
            }

            /**
             * Sets the value of {@link MountPointsProperty#getMountDir}
             * @param mountDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountDir(java.lang.String mountDir) {
                this.mountDir = mountDir;
                return this;
            }

            /**
             * Sets the value of {@link MountPointsProperty#getMountDir}
             * @param mountDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountDir(com.aliyun.ros.cdk.core.IResolvable mountDir) {
                this.mountDir = mountDir;
                return this;
            }

            /**
             * Sets the value of {@link MountPointsProperty#getServerAddr}
             * @param serverAddr the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverAddr(java.lang.String serverAddr) {
                this.serverAddr = serverAddr;
                return this;
            }

            /**
             * Sets the value of {@link MountPointsProperty#getServerAddr}
             * @param serverAddr the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverAddr(com.aliyun.ros.cdk.core.IResolvable serverAddr) {
                this.serverAddr = serverAddr;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MountPointsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MountPointsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MountPointsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MountPointsProperty {
            private final java.lang.Object enableTls;
            private final java.lang.Object mountDir;
            private final java.lang.Object serverAddr;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enableTls = software.amazon.jsii.Kernel.get(this, "enableTls", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mountDir = software.amazon.jsii.Kernel.get(this, "mountDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serverAddr = software.amazon.jsii.Kernel.get(this, "serverAddr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enableTls = builder.enableTls;
                this.mountDir = builder.mountDir;
                this.serverAddr = builder.serverAddr;
            }

            @Override
            public final java.lang.Object getEnableTls() {
                return this.enableTls;
            }

            @Override
            public final java.lang.Object getMountDir() {
                return this.mountDir;
            }

            @Override
            public final java.lang.Object getServerAddr() {
                return this.serverAddr;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEnableTls() != null) {
                    data.set("enableTls", om.valueToTree(this.getEnableTls()));
                }
                if (this.getMountDir() != null) {
                    data.set("mountDir", om.valueToTree(this.getMountDir()));
                }
                if (this.getServerAddr() != null) {
                    data.set("serverAddr", om.valueToTree(this.getServerAddr()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.MountPointsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MountPointsProperty.Jsii$Proxy that = (MountPointsProperty.Jsii$Proxy) o;

                if (this.enableTls != null ? !this.enableTls.equals(that.enableTls) : that.enableTls != null) return false;
                if (this.mountDir != null ? !this.mountDir.equals(that.mountDir) : that.mountDir != null) return false;
                return this.serverAddr != null ? this.serverAddr.equals(that.serverAddr) : that.serverAddr == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enableTls != null ? this.enableTls.hashCode() : 0;
                result = 31 * result + (this.mountDir != null ? this.mountDir.hashCode() : 0);
                result = 31 * result + (this.serverAddr != null ? this.serverAddr.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.NasConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(NasConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NasConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountPoints() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUserId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NasConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NasConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NasConfigProperty> {
            java.lang.Object groupId;
            java.lang.Object mountPoints;
            java.lang.Object userId;

            /**
             * Sets the value of {@link NasConfigProperty#getGroupId}
             * @param groupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupId(java.lang.Number groupId) {
                this.groupId = groupId;
                return this;
            }

            /**
             * Sets the value of {@link NasConfigProperty#getGroupId}
             * @param groupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
                this.groupId = groupId;
                return this;
            }

            /**
             * Sets the value of {@link NasConfigProperty#getMountPoints}
             * @param mountPoints the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPoints(com.aliyun.ros.cdk.core.IResolvable mountPoints) {
                this.mountPoints = mountPoints;
                return this;
            }

            /**
             * Sets the value of {@link NasConfigProperty#getMountPoints}
             * @param mountPoints the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPoints(java.util.List<? extends java.lang.Object> mountPoints) {
                this.mountPoints = mountPoints;
                return this;
            }

            /**
             * Sets the value of {@link NasConfigProperty#getUserId}
             * @param userId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userId(java.lang.Number userId) {
                this.userId = userId;
                return this;
            }

            /**
             * Sets the value of {@link NasConfigProperty#getUserId}
             * @param userId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userId(com.aliyun.ros.cdk.core.IResolvable userId) {
                this.userId = userId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NasConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NasConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NasConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NasConfigProperty {
            private final java.lang.Object groupId;
            private final java.lang.Object mountPoints;
            private final java.lang.Object userId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mountPoints = software.amazon.jsii.Kernel.get(this, "mountPoints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userId = software.amazon.jsii.Kernel.get(this, "userId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.groupId = builder.groupId;
                this.mountPoints = builder.mountPoints;
                this.userId = builder.userId;
            }

            @Override
            public final java.lang.Object getGroupId() {
                return this.groupId;
            }

            @Override
            public final java.lang.Object getMountPoints() {
                return this.mountPoints;
            }

            @Override
            public final java.lang.Object getUserId() {
                return this.userId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getGroupId() != null) {
                    data.set("groupId", om.valueToTree(this.getGroupId()));
                }
                if (this.getMountPoints() != null) {
                    data.set("mountPoints", om.valueToTree(this.getMountPoints()));
                }
                if (this.getUserId() != null) {
                    data.set("userId", om.valueToTree(this.getUserId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.NasConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NasConfigProperty.Jsii$Proxy that = (NasConfigProperty.Jsii$Proxy) o;

                if (this.groupId != null ? !this.groupId.equals(that.groupId) : that.groupId != null) return false;
                if (this.mountPoints != null ? !this.mountPoints.equals(that.mountPoints) : that.mountPoints != null) return false;
                return this.userId != null ? this.userId.equals(that.userId) : that.userId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.groupId != null ? this.groupId.hashCode() : 0;
                result = 31 * result + (this.mountPoints != null ? this.mountPoints.hashCode() : 0);
                result = 31 * result + (this.userId != null ? this.userId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.NetworkConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(NetworkConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NetworkConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

        /**
         * @return a {@link Builder} of {@link NetworkConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NetworkConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NetworkConfigProperty> {
            java.lang.Object securityGroupId;
            java.lang.Object vpcId;
            java.lang.Object vSwitchId;

            /**
             * Sets the value of {@link NetworkConfigProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(java.lang.String securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link NetworkConfigProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link NetworkConfigProperty#getVpcId}
             * @param vpcId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(java.lang.String vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link NetworkConfigProperty#getVpcId}
             * @param vpcId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link NetworkConfigProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(java.lang.String vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link NetworkConfigProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NetworkConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NetworkConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NetworkConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NetworkConfigProperty {
            private final java.lang.Object securityGroupId;
            private final java.lang.Object vpcId;
            private final java.lang.Object vSwitchId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.securityGroupId = java.util.Objects.requireNonNull(builder.securityGroupId, "securityGroupId is required");
                this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
                this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            }

            @Override
            public final java.lang.Object getSecurityGroupId() {
                return this.securityGroupId;
            }

            @Override
            public final java.lang.Object getVpcId() {
                return this.vpcId;
            }

            @Override
            public final java.lang.Object getVSwitchId() {
                return this.vSwitchId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
                data.set("vpcId", om.valueToTree(this.getVpcId()));
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.NetworkConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NetworkConfigProperty.Jsii$Proxy that = (NetworkConfigProperty.Jsii$Proxy) o;

                if (!securityGroupId.equals(that.securityGroupId)) return false;
                if (!vpcId.equals(that.vpcId)) return false;
                return this.vSwitchId.equals(that.vSwitchId);
            }

            @Override
            public final int hashCode() {
                int result = this.securityGroupId.hashCode();
                result = 31 * result + (this.vpcId.hashCode());
                result = 31 * result + (this.vSwitchId.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.OssMountConfigMountPointsProperty")
    @software.amazon.jsii.Jsii.Proxy(OssMountConfigMountPointsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface OssMountConfigMountPointsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBucketName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBucketPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEndpoint() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountDir() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReadOnly() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link OssMountConfigMountPointsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link OssMountConfigMountPointsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<OssMountConfigMountPointsProperty> {
            java.lang.Object bucketName;
            java.lang.Object bucketPath;
            java.lang.Object endpoint;
            java.lang.Object mountDir;
            java.lang.Object readOnly;

            /**
             * Sets the value of {@link OssMountConfigMountPointsProperty#getBucketName}
             * @param bucketName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bucketName(java.lang.String bucketName) {
                this.bucketName = bucketName;
                return this;
            }

            /**
             * Sets the value of {@link OssMountConfigMountPointsProperty#getBucketName}
             * @param bucketName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bucketName(com.aliyun.ros.cdk.core.IResolvable bucketName) {
                this.bucketName = bucketName;
                return this;
            }

            /**
             * Sets the value of {@link OssMountConfigMountPointsProperty#getBucketPath}
             * @param bucketPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bucketPath(java.lang.String bucketPath) {
                this.bucketPath = bucketPath;
                return this;
            }

            /**
             * Sets the value of {@link OssMountConfigMountPointsProperty#getBucketPath}
             * @param bucketPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bucketPath(com.aliyun.ros.cdk.core.IResolvable bucketPath) {
                this.bucketPath = bucketPath;
                return this;
            }

            /**
             * Sets the value of {@link OssMountConfigMountPointsProperty#getEndpoint}
             * @param endpoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpoint(java.lang.String endpoint) {
                this.endpoint = endpoint;
                return this;
            }

            /**
             * Sets the value of {@link OssMountConfigMountPointsProperty#getEndpoint}
             * @param endpoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpoint(com.aliyun.ros.cdk.core.IResolvable endpoint) {
                this.endpoint = endpoint;
                return this;
            }

            /**
             * Sets the value of {@link OssMountConfigMountPointsProperty#getMountDir}
             * @param mountDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountDir(java.lang.String mountDir) {
                this.mountDir = mountDir;
                return this;
            }

            /**
             * Sets the value of {@link OssMountConfigMountPointsProperty#getMountDir}
             * @param mountDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountDir(com.aliyun.ros.cdk.core.IResolvable mountDir) {
                this.mountDir = mountDir;
                return this;
            }

            /**
             * Sets the value of {@link OssMountConfigMountPointsProperty#getReadOnly}
             * @param readOnly the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readOnly(java.lang.Boolean readOnly) {
                this.readOnly = readOnly;
                return this;
            }

            /**
             * Sets the value of {@link OssMountConfigMountPointsProperty#getReadOnly}
             * @param readOnly the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readOnly(com.aliyun.ros.cdk.core.IResolvable readOnly) {
                this.readOnly = readOnly;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link OssMountConfigMountPointsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public OssMountConfigMountPointsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link OssMountConfigMountPointsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OssMountConfigMountPointsProperty {
            private final java.lang.Object bucketName;
            private final java.lang.Object bucketPath;
            private final java.lang.Object endpoint;
            private final java.lang.Object mountDir;
            private final java.lang.Object readOnly;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.bucketName = software.amazon.jsii.Kernel.get(this, "bucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.bucketPath = software.amazon.jsii.Kernel.get(this, "bucketPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.endpoint = software.amazon.jsii.Kernel.get(this, "endpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mountDir = software.amazon.jsii.Kernel.get(this, "mountDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.readOnly = software.amazon.jsii.Kernel.get(this, "readOnly", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.bucketName = builder.bucketName;
                this.bucketPath = builder.bucketPath;
                this.endpoint = builder.endpoint;
                this.mountDir = builder.mountDir;
                this.readOnly = builder.readOnly;
            }

            @Override
            public final java.lang.Object getBucketName() {
                return this.bucketName;
            }

            @Override
            public final java.lang.Object getBucketPath() {
                return this.bucketPath;
            }

            @Override
            public final java.lang.Object getEndpoint() {
                return this.endpoint;
            }

            @Override
            public final java.lang.Object getMountDir() {
                return this.mountDir;
            }

            @Override
            public final java.lang.Object getReadOnly() {
                return this.readOnly;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getBucketName() != null) {
                    data.set("bucketName", om.valueToTree(this.getBucketName()));
                }
                if (this.getBucketPath() != null) {
                    data.set("bucketPath", om.valueToTree(this.getBucketPath()));
                }
                if (this.getEndpoint() != null) {
                    data.set("endpoint", om.valueToTree(this.getEndpoint()));
                }
                if (this.getMountDir() != null) {
                    data.set("mountDir", om.valueToTree(this.getMountDir()));
                }
                if (this.getReadOnly() != null) {
                    data.set("readOnly", om.valueToTree(this.getReadOnly()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.OssMountConfigMountPointsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                OssMountConfigMountPointsProperty.Jsii$Proxy that = (OssMountConfigMountPointsProperty.Jsii$Proxy) o;

                if (this.bucketName != null ? !this.bucketName.equals(that.bucketName) : that.bucketName != null) return false;
                if (this.bucketPath != null ? !this.bucketPath.equals(that.bucketPath) : that.bucketPath != null) return false;
                if (this.endpoint != null ? !this.endpoint.equals(that.endpoint) : that.endpoint != null) return false;
                if (this.mountDir != null ? !this.mountDir.equals(that.mountDir) : that.mountDir != null) return false;
                return this.readOnly != null ? this.readOnly.equals(that.readOnly) : that.readOnly == null;
            }

            @Override
            public final int hashCode() {
                int result = this.bucketName != null ? this.bucketName.hashCode() : 0;
                result = 31 * result + (this.bucketPath != null ? this.bucketPath.hashCode() : 0);
                result = 31 * result + (this.endpoint != null ? this.endpoint.hashCode() : 0);
                result = 31 * result + (this.mountDir != null ? this.mountDir.hashCode() : 0);
                result = 31 * result + (this.readOnly != null ? this.readOnly.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.OssMountConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(OssMountConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface OssMountConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountPoints() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link OssMountConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link OssMountConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<OssMountConfigProperty> {
            java.lang.Object mountPoints;

            /**
             * Sets the value of {@link OssMountConfigProperty#getMountPoints}
             * @param mountPoints the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPoints(com.aliyun.ros.cdk.core.IResolvable mountPoints) {
                this.mountPoints = mountPoints;
                return this;
            }

            /**
             * Sets the value of {@link OssMountConfigProperty#getMountPoints}
             * @param mountPoints the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPoints(java.util.List<? extends java.lang.Object> mountPoints) {
                this.mountPoints = mountPoints;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link OssMountConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public OssMountConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link OssMountConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OssMountConfigProperty {
            private final java.lang.Object mountPoints;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.mountPoints = software.amazon.jsii.Kernel.get(this, "mountPoints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.mountPoints = builder.mountPoints;
            }

            @Override
            public final java.lang.Object getMountPoints() {
                return this.mountPoints;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getMountPoints() != null) {
                    data.set("mountPoints", om.valueToTree(this.getMountPoints()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.OssMountConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                OssMountConfigProperty.Jsii$Proxy that = (OssMountConfigProperty.Jsii$Proxy) o;

                return this.mountPoints != null ? this.mountPoints.equals(that.mountPoints) : that.mountPoints == null;
            }

            @Override
            public final int hashCode() {
                int result = this.mountPoints != null ? this.mountPoints.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.PreStopProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.PreStopProperty"));
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
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.RegistryConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(RegistryConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RegistryConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCertConfig();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAuthConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkConfig() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RegistryConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RegistryConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RegistryConfigProperty> {
            java.lang.Object certConfig;
            java.lang.Object authConfig;
            java.lang.Object networkConfig;

            /**
             * Sets the value of {@link RegistryConfigProperty#getCertConfig}
             * @param certConfig the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder certConfig(com.aliyun.ros.cdk.core.IResolvable certConfig) {
                this.certConfig = certConfig;
                return this;
            }

            /**
             * Sets the value of {@link RegistryConfigProperty#getCertConfig}
             * @param certConfig the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder certConfig(com.aliyun.ros.cdk.fc3.RosFunction.CertConfigProperty certConfig) {
                this.certConfig = certConfig;
                return this;
            }

            /**
             * Sets the value of {@link RegistryConfigProperty#getAuthConfig}
             * @param authConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authConfig(com.aliyun.ros.cdk.core.IResolvable authConfig) {
                this.authConfig = authConfig;
                return this;
            }

            /**
             * Sets the value of {@link RegistryConfigProperty#getAuthConfig}
             * @param authConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authConfig(com.aliyun.ros.cdk.fc3.RosFunction.AuthConfigProperty authConfig) {
                this.authConfig = authConfig;
                return this;
            }

            /**
             * Sets the value of {@link RegistryConfigProperty#getNetworkConfig}
             * @param networkConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkConfig(com.aliyun.ros.cdk.core.IResolvable networkConfig) {
                this.networkConfig = networkConfig;
                return this;
            }

            /**
             * Sets the value of {@link RegistryConfigProperty#getNetworkConfig}
             * @param networkConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkConfig(com.aliyun.ros.cdk.fc3.RosFunction.NetworkConfigProperty networkConfig) {
                this.networkConfig = networkConfig;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RegistryConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RegistryConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RegistryConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RegistryConfigProperty {
            private final java.lang.Object certConfig;
            private final java.lang.Object authConfig;
            private final java.lang.Object networkConfig;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.certConfig = software.amazon.jsii.Kernel.get(this, "certConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.authConfig = software.amazon.jsii.Kernel.get(this, "authConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.networkConfig = software.amazon.jsii.Kernel.get(this, "networkConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.certConfig = java.util.Objects.requireNonNull(builder.certConfig, "certConfig is required");
                this.authConfig = builder.authConfig;
                this.networkConfig = builder.networkConfig;
            }

            @Override
            public final java.lang.Object getCertConfig() {
                return this.certConfig;
            }

            @Override
            public final java.lang.Object getAuthConfig() {
                return this.authConfig;
            }

            @Override
            public final java.lang.Object getNetworkConfig() {
                return this.networkConfig;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("certConfig", om.valueToTree(this.getCertConfig()));
                if (this.getAuthConfig() != null) {
                    data.set("authConfig", om.valueToTree(this.getAuthConfig()));
                }
                if (this.getNetworkConfig() != null) {
                    data.set("networkConfig", om.valueToTree(this.getNetworkConfig()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.RegistryConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RegistryConfigProperty.Jsii$Proxy that = (RegistryConfigProperty.Jsii$Proxy) o;

                if (!certConfig.equals(that.certConfig)) return false;
                if (this.authConfig != null ? !this.authConfig.equals(that.authConfig) : that.authConfig != null) return false;
                return this.networkConfig != null ? this.networkConfig.equals(that.networkConfig) : that.networkConfig == null;
            }

            @Override
            public final int hashCode() {
                int result = this.certConfig.hashCode();
                result = 31 * result + (this.authConfig != null ? this.authConfig.hashCode() : 0);
                result = 31 * result + (this.networkConfig != null ? this.networkConfig.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
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
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
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

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.TracingConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(TracingConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TracingConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getParams() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TracingConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TracingConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TracingConfigProperty> {
            java.lang.Object params;
            java.lang.Object type;

            /**
             * Sets the value of {@link TracingConfigProperty#getParams}
             * @param params the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder params(com.aliyun.ros.cdk.core.IResolvable params) {
                this.params = params;
                return this;
            }

            /**
             * Sets the value of {@link TracingConfigProperty#getParams}
             * @param params the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder params(java.util.Map<java.lang.String, ? extends java.lang.Object> params) {
                this.params = params;
                return this;
            }

            /**
             * Sets the value of {@link TracingConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link TracingConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TracingConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TracingConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TracingConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TracingConfigProperty {
            private final java.lang.Object params;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.params = software.amazon.jsii.Kernel.get(this, "params", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.params = builder.params;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getParams() {
                return this.params;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getParams() != null) {
                    data.set("params", om.valueToTree(this.getParams()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.TracingConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TracingConfigProperty.Jsii$Proxy that = (TracingConfigProperty.Jsii$Proxy) o;

                if (this.params != null ? !this.params.equals(that.params) : that.params != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.params != null ? this.params.hashCode() : 0;
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunction.VpcConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(VpcConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface VpcConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchIds() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link VpcConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link VpcConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<VpcConfigProperty> {
            java.lang.Object securityGroupId;
            java.lang.Object vpcId;
            java.lang.Object vSwitchIds;

            /**
             * Sets the value of {@link VpcConfigProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(java.lang.String securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link VpcConfigProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link VpcConfigProperty#getVpcId}
             * @param vpcId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(java.lang.String vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link VpcConfigProperty#getVpcId}
             * @param vpcId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link VpcConfigProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Sets the value of {@link VpcConfigProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link VpcConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public VpcConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link VpcConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcConfigProperty {
            private final java.lang.Object securityGroupId;
            private final java.lang.Object vpcId;
            private final java.lang.Object vSwitchIds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.securityGroupId = builder.securityGroupId;
                this.vpcId = builder.vpcId;
                this.vSwitchIds = builder.vSwitchIds;
            }

            @Override
            public final java.lang.Object getSecurityGroupId() {
                return this.securityGroupId;
            }

            @Override
            public final java.lang.Object getVpcId() {
                return this.vpcId;
            }

            @Override
            public final java.lang.Object getVSwitchIds() {
                return this.vSwitchIds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getSecurityGroupId() != null) {
                    data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
                }
                if (this.getVpcId() != null) {
                    data.set("vpcId", om.valueToTree(this.getVpcId()));
                }
                if (this.getVSwitchIds() != null) {
                    data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunction.VpcConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                VpcConfigProperty.Jsii$Proxy that = (VpcConfigProperty.Jsii$Proxy) o;

                if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
                if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
                return this.vSwitchIds != null ? this.vSwitchIds.equals(that.vSwitchIds) : that.vSwitchIds == null;
            }

            @Override
            public final int hashCode() {
                int result = this.securityGroupId != null ? this.securityGroupId.hashCode() : 0;
                result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
                result = 31 * result + (this.vSwitchIds != null ? this.vSwitchIds.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc3.RosFunction}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc3.RosFunction> {
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
        private final com.aliyun.ros.cdk.fc3.RosFunctionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc3.RosFunctionProps.Builder();
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
        public Builder code(final com.aliyun.ros.cdk.fc3.RosFunction.CodeProperty code) {
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
        public Builder customContainerConfig(final com.aliyun.ros.cdk.fc3.RosFunction.CustomContainerConfigProperty customContainerConfig) {
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
        public Builder customDns(final com.aliyun.ros.cdk.fc3.RosFunction.CustomDnsProperty customDns) {
            this.props.customDns(customDns);
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
        public Builder customRuntimeConfig(final com.aliyun.ros.cdk.fc3.RosFunction.CustomRuntimeConfigProperty customRuntimeConfig) {
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
         * @param gpuConfig This parameter is required.
         */
        public Builder gpuConfig(final com.aliyun.ros.cdk.core.IResolvable gpuConfig) {
            this.props.gpuConfig(gpuConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param gpuConfig This parameter is required.
         */
        public Builder gpuConfig(final com.aliyun.ros.cdk.fc3.RosFunction.GpuConfigProperty gpuConfig) {
            this.props.gpuConfig(gpuConfig);
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
        public Builder instanceLifecycleConfig(final com.aliyun.ros.cdk.fc3.RosFunction.InstanceLifecycleConfigProperty instanceLifecycleConfig) {
            this.props.instanceLifecycleConfig(instanceLifecycleConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param internetAccess This parameter is required.
         */
        public Builder internetAccess(final java.lang.Boolean internetAccess) {
            this.props.internetAccess(internetAccess);
            return this;
        }
        /**
         * @return {@code this}
         * @param internetAccess This parameter is required.
         */
        public Builder internetAccess(final com.aliyun.ros.cdk.core.IResolvable internetAccess) {
            this.props.internetAccess(internetAccess);
            return this;
        }

        /**
         * @return {@code this}
         * @param layers This parameter is required.
         */
        public Builder layers(final com.aliyun.ros.cdk.core.IResolvable layers) {
            this.props.layers(layers);
            return this;
        }
        /**
         * @return {@code this}
         * @param layers This parameter is required.
         */
        public Builder layers(final java.util.List<? extends java.lang.Object> layers) {
            this.props.layers(layers);
            return this;
        }

        /**
         * @return {@code this}
         * @param logConfig This parameter is required.
         */
        public Builder logConfig(final com.aliyun.ros.cdk.core.IResolvable logConfig) {
            this.props.logConfig(logConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param logConfig This parameter is required.
         */
        public Builder logConfig(final com.aliyun.ros.cdk.fc3.RosFunction.LogConfigProperty logConfig) {
            this.props.logConfig(logConfig);
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
         * @param nasConfig This parameter is required.
         */
        public Builder nasConfig(final com.aliyun.ros.cdk.core.IResolvable nasConfig) {
            this.props.nasConfig(nasConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param nasConfig This parameter is required.
         */
        public Builder nasConfig(final com.aliyun.ros.cdk.fc3.RosFunction.NasConfigProperty nasConfig) {
            this.props.nasConfig(nasConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param ossMountConfig This parameter is required.
         */
        public Builder ossMountConfig(final com.aliyun.ros.cdk.core.IResolvable ossMountConfig) {
            this.props.ossMountConfig(ossMountConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param ossMountConfig This parameter is required.
         */
        public Builder ossMountConfig(final com.aliyun.ros.cdk.fc3.RosFunction.OssMountConfigProperty ossMountConfig) {
            this.props.ossMountConfig(ossMountConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param role This parameter is required.
         */
        public Builder role(final java.lang.String role) {
            this.props.role(role);
            return this;
        }
        /**
         * @return {@code this}
         * @param role This parameter is required.
         */
        public Builder role(final com.aliyun.ros.cdk.core.IResolvable role) {
            this.props.role(role);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.fc3.RosFunction.TagsProperty> tags) {
            this.props.tags(tags);
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
         * @return {@code this}
         * @param tracingConfig This parameter is required.
         */
        public Builder tracingConfig(final com.aliyun.ros.cdk.core.IResolvable tracingConfig) {
            this.props.tracingConfig(tracingConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param tracingConfig This parameter is required.
         */
        public Builder tracingConfig(final com.aliyun.ros.cdk.fc3.RosFunction.TracingConfigProperty tracingConfig) {
            this.props.tracingConfig(tracingConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcConfig This parameter is required.
         */
        public Builder vpcConfig(final com.aliyun.ros.cdk.core.IResolvable vpcConfig) {
            this.props.vpcConfig(vpcConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcConfig This parameter is required.
         */
        public Builder vpcConfig(final com.aliyun.ros.cdk.fc3.RosFunction.VpcConfigProperty vpcConfig) {
            this.props.vpcConfig(vpcConfig);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc3.RosFunction}.
         */
        @Override
        public com.aliyun.ros.cdk.fc3.RosFunction build() {
            return new com.aliyun.ros.cdk.fc3.RosFunction(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
