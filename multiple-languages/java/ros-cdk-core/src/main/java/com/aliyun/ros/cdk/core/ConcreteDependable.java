package com.aliyun.ros.cdk.core;

/**
 * (experimental) A set of constructs to be used as a dependable.
 * <p>
 * This class can be used when a set of constructs which are disjoint in the
 * construct tree needs to be combined to be used as a single dependable.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:49.065Z")
@software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ConcreteDependable")
public class ConcreteDependable extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IDependable {

    protected ConcreteDependable(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ConcreteDependable(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public ConcreteDependable() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * (experimental) Add a construct to the dependency roots.
     * <p>
     * @param construct This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public void add(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IConstruct construct) {
        software.amazon.jsii.Kernel.call(this, "add", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(construct, "construct is required") });
    }
}
