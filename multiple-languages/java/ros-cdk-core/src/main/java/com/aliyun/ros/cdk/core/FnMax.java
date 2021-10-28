package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.40.0 (build 9713b9d)", date = "2021-10-28T10:23:59.138Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnMax")
public class FnMax extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnMax(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnMax(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an ``Max`` function.
     * <p>
     * @param values This parameter is required.
     */
    public FnMax(final @org.jetbrains.annotations.NotNull java.lang.Object values) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { values });
    }
}
