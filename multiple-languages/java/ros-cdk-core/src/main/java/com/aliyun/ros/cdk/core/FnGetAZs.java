package com.aliyun.ros.cdk.core;

/**
 * The intrinsic function <code>Fn::GetAZs</code> returns an array that lists Availability Zones for a specified region.
 * <p>
 * Because customers have access to different Availability Zones, the intrinsic
 * function <code>Fn::GetAZs</code> enables template authors to write templates that adapt to the calling
 * user's access. That way you don't have to hard-code a full list of Availability Zones for a
 * specified region.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:07.049Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnGetAZs")
public class FnGetAZs extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnGetAZs(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnGetAZs(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>Fn::GetAZs</code> function.
     * <p>
     * @param region The name of the region for which you want to get the Availability Zones. This parameter is required.
     */
    public FnGetAZs(final @org.jetbrains.annotations.NotNull java.lang.Object region) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { region });
    }
}
