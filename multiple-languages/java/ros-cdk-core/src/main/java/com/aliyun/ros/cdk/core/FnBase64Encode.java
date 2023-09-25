package com.aliyun.ros.cdk.core;

/**
 * The intrinsic function <code>Fn::Base64</code> returns the Base64 representation of the input string.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:23.138Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnBase64Encode")
public class FnBase64Encode extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnBase64Encode(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnBase64Encode(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>Fn::Base64</code> function.
     * <p>
     * @param data The string value you want to convert to Base64. This parameter is required.
     */
    public FnBase64Encode(final @org.jetbrains.annotations.NotNull java.lang.Object data) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { data });
    }
}
