package com.aliyun.ros.cdk.core;

/**
 * The intrinsic function ``Ref`` returns the value of the specified parameter or resource.
 * <p>
 * When you specify a parameter's logical name, it returns the value of the parameter.
 * When you specify a resource's logical name, it returns a value that you can typically use to refer to that resource, such as a physical ID.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:49.084Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnRef")
public class FnRef extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnRef(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnRef(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an ``Ref`` function.
     * <p>
     * @param logicalName The logical name of a parameter/resource for which you want to retrieve its value. This parameter is required.
     */
    public FnRef(final @org.jetbrains.annotations.NotNull java.lang.String logicalName) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(logicalName, "logicalName is required") });
    }
}
