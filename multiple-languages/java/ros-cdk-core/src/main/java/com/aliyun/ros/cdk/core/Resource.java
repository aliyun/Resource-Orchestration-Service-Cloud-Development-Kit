package com.aliyun.ros.cdk.core;

/**
 * A construct which represents a resource.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:51.759Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.Resource")
public abstract class Resource extends com.aliyun.ros.cdk.core.Construct implements com.aliyun.ros.cdk.core.IResource {

    protected Resource(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Resource(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    protected Resource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.ResourceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    protected Resource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    public void addCondition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.RosCondition condition) {
        software.amazon.jsii.Kernel.call(this, "addCondition", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(condition, "condition is required") });
    }

    public void addCount(final @org.jetbrains.annotations.NotNull java.lang.Object count) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(count instanceof java.lang.Number)
                && !(count instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(count.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("count")
                        .append(" to be one of: java.lang.Number, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(count.getClass()).toString());
            }
        }
        software.amazon.jsii.Kernel.call(this, "addCount", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(count, "count is required") });
    }

    public void addDependency(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Resource resource) {
        software.amazon.jsii.Kernel.call(this, "addDependency", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(resource, "resource is required") });
    }

    public void addResourceDesc(final @org.jetbrains.annotations.NotNull java.lang.String desc) {
        software.amazon.jsii.Kernel.call(this, "addResourceDesc", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(desc, "desc is required") });
    }

    public void applyRemovalPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.RemovalPolicy policy) {
        software.amazon.jsii.Kernel.call(this, "applyRemovalPolicy", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(policy, "policy is required") });
    }

    public @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosCondition fetchCondition() {
        return software.amazon.jsii.Kernel.call(this, "fetchCondition", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.RosCondition.class));
    }

    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> fetchDependency() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.call(this, "fetchDependency", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    public @org.jetbrains.annotations.Nullable java.lang.String fetchResourceDesc() {
        return software.amazon.jsii.Kernel.call(this, "fetchResourceDesc", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String generatePhysicalName() {
        return software.amazon.jsii.Kernel.call(this, "generatePhysicalName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAtt(final @org.jetbrains.annotations.NotNull java.lang.String name) {
        return software.amazon.jsii.Kernel.call(this, "getAtt", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(name, "name is required") });
    }

    public void setMetadata(final @org.jetbrains.annotations.NotNull java.lang.String key, final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        software.amazon.jsii.Kernel.call(this, "setMetadata", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(key, "key is required"), value });
    }

    /**
     * The environment this resource belongs to.
     * <p>
     * For resources that are created and managed by the CDK
     * (generally, those created by creating new class instances like Role, Bucket, etc.),
     * this is always the same as the environment of the stack they belong to;
     * however, for imported resources
     * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
     * that might be different than the stack they were imported into.
     */
    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
        return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
    }

    /**
     * (experimental) Returns a string-encoded token that resolves to the physical name that should be passed to the ROS resource.
     * <p>
     * This value will resolve to one of the following:
     * <p>
     * <ul>
     * <li>a concrete value (e.g. <code>"my-awesome-bucket"</code>)</li>
     * <li><code>undefined</code>, when a name should be generated by ROS</li>
     * <li>a concrete name generated automatically during synthesis, in
     * cross-environment scenarios.</li>
     * </ul>
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    protected @org.jetbrains.annotations.NotNull java.lang.String getPhysicalName() {
        return software.amazon.jsii.Kernel.get(this, "physicalName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getRef() {
        return software.amazon.jsii.Kernel.get(this, "ref", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * The stack in which this resource is defined.
     */
    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
        return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
    }

    public @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosResource getResource() {
        return software.amazon.jsii.Kernel.get(this, "resource", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.RosResource.class));
    }

    public void setResource(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosResource value) {
        software.amazon.jsii.Kernel.set(this, "resource", value);
    }

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    private static final class Jsii$Proxy extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.core.IResource.Jsii$Default, com.aliyun.ros.cdk.core.IConstruct.Jsii$Default, software.constructs.IConstruct.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }
    }
}
