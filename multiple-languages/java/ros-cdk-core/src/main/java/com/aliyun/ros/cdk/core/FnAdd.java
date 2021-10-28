package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.40.0 (build 9713b9d)", date = "2021-10-28T10:23:59.125Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnAdd")
public class FnAdd extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnAdd(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnAdd(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an ``Add`` function.
     * <p>
     * @param values This parameter is required.
     */
    public FnAdd(final @org.jetbrains.annotations.NotNull java.lang.Object values) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { values });
    }
}
