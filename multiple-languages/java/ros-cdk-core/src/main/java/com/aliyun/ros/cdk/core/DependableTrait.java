package com.aliyun.ros.cdk.core;

/**
 * (experimental) Trait for IDependable.
 * <p>
 * Traits are interfaces that are privately implemented by objects. Instead of
 * showing up in the public interface of a class, they need to be queried
 * explicitly. This is used to implement certain framework features that are
 * not intended to be used by Construct consumers, and so should be hidden
 * from accidental use.
 * <p>
 * Example:
 * <p>
 * <blockquote><pre>
 * // Usage
 * const roots = DependableTrait.get(construct).dependencyRoots;
 * // Definition
 * DependableTrait.implement(construct, {
 *   get dependencyRoots() { return []; }
 * });
 * </pre></blockquote>
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:17.650Z")
@software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.DependableTrait")
public abstract class DependableTrait extends software.amazon.jsii.JsiiObject {

    protected DependableTrait(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DependableTrait(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    protected DependableTrait() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * (experimental) Return the matching DependableTrait for the given class instance.
     * <p>
     * @param instance This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.DependableTrait get(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IDependable instance) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.DependableTrait.class, "get", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.DependableTrait.class), new Object[] { java.util.Objects.requireNonNull(instance, "instance is required") });
    }

    /**
     * (experimental) Register `instance` to have the given DependableTrait.
     * <p>
     * Should be called in the class constructor.
     * <p>
     * @param instance This parameter is required.
     * @param trait This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public static void implement(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IDependable instance, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.DependableTrait trait) {
        software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.DependableTrait.class, "implement", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(instance, "instance is required"), java.util.Objects.requireNonNull(trait, "trait is required") });
    }

    /**
     * (experimental) The set of constructs that form the root of this dependable.
     * <p>
     * All resources under all returned constructs are included in the ordering
     * dependency.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public abstract @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.core.IConstruct> getDependencyRoots();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    private static final class Jsii$Proxy extends com.aliyun.ros.cdk.core.DependableTrait {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * (experimental) The set of constructs that form the root of this dependable.
         * <p>
         * All resources under all returned constructs are included in the ordering
         * dependency.
         */
        @Override
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        public final @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.core.IConstruct> getDependencyRoots() {
            return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "dependencyRoots", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IConstruct.class))));
        }
    }
}
