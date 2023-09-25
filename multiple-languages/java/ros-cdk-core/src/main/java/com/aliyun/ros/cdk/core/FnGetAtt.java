package com.aliyun.ros.cdk.core;

/**
 * The <code>Fn::GetAtt</code> intrinsic function returns the value of an attribute from a resource in the template.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:23.138Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnGetAtt")
public class FnGetAtt extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnGetAtt(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnGetAtt(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates a <code>Fn::GetAtt</code> function.
     * <p>
     * @param logicalNameOfResource The logical name (also called logical ID) of the resource that contains the attribute that you want. This parameter is required.
     * @param attributeName The name of the resource-specific attribute whose value you want. This parameter is required.
     */
    public FnGetAtt(final @org.jetbrains.annotations.NotNull java.lang.String logicalNameOfResource, final @org.jetbrains.annotations.NotNull java.lang.String attributeName) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(logicalNameOfResource, "logicalNameOfResource is required"), java.util.Objects.requireNonNull(attributeName, "attributeName is required") });
    }
}
