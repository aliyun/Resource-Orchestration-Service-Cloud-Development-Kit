package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-13T09:24:19.064Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnGetJsonValue")
public class FnGetJsonValue extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnGetJsonValue(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnGetJsonValue(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an ``GetJsonValue`` function.
     * <p>
     * @param value This parameter is required.
     */
    public FnGetJsonValue(final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { value });
    }
}
