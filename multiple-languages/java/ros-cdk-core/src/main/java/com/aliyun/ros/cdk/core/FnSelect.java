package com.aliyun.ros.cdk.core;

/**
 * The intrinsic function <code>Fn::Select</code> returns a single object from a list of objects by index.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:29.949Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnSelect")
public class FnSelect extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnSelect(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnSelect(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>Fn::Select</code> function.
     * <p>
     * param index The index of the object to retrieve. This must be a value from zero to N-1, where N represents the number of elements in the array.
     * param array The list of objects to select from. This list must not be null, nor can it have null entries.
     * <p>
     * @param value This parameter is required.
     */
    public FnSelect(final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { value });
    }
}
