package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.40.0 (build 9713b9d)", date = "2021-10-28T10:23:59.139Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnStr")
public class FnStr extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnStr(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnStr(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an ``Str`` function.
     * <p>
     * @param value This parameter is required.
     */
    public FnStr(final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { value });
    }
}
