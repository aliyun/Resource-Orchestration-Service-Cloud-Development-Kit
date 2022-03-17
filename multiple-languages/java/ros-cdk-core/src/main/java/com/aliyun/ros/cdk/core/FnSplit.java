package com.aliyun.ros.cdk.core;

/**
 * To split a string into a list of string values so that you can select an element from the resulting string list, use the ``Fn::Split`` intrinsic function.
 * <p>
 * Specify the location of splits
 * with a delimiter, such as , (a comma). After you split a string, use the <code>Fn::Select</code> function
 * to pick a specific element.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:14.211Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnSplit")
public class FnSplit extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnSplit(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnSplit(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create an ``Fn::Split`` function.
     * <p>
     * param delimiter A string value that determines where the source string is divided.
     * param source The string value that you want to split.
     * <p>
     * @param value This parameter is required.
     */
    public FnSplit(final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { value });
    }
}
