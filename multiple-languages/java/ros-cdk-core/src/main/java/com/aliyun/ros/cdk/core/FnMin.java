package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-22T03:34:39.154Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnMin")
public class FnMin extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnMin(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnMin(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an ``Min`` function.
     * <p>
     * @param values This parameter is required.
     */
    public FnMin(final @org.jetbrains.annotations.NotNull java.lang.Object values) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { values });
    }
}
