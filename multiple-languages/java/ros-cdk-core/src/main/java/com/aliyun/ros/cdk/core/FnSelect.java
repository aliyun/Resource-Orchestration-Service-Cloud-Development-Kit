package com.aliyun.ros.cdk.core;

/**
 * The intrinsic function ``Fn::Select`` returns a single object from a list of objects by index.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:49.084Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnSelect")
public class FnSelect extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnSelect(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnSelect(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an ``Fn::Select`` function.
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
