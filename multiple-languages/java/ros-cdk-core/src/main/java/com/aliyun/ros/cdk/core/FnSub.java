package com.aliyun.ros.cdk.core;

/**
 * The intrinsic function <code>Fn::Sub</code> substitutes variables in an input string with values that you specify.
 * <p>
 * In your templates, you can use this function to construct commands or outputs
 * that include values that aren't available until you create or update a stack.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:26.410Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnSub")
public class FnSub extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnSub(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnSub(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>Fn::Sub</code> function.
     * <p>
     * param body A string with variables that Ros Template substitutes with their
     * associated values at runtime. Write variables as ${MyVarName}. Variables
     * can be template parameter names, resource logical IDs, resource attributes,
     * or a variable in a key-value map. If you specify only template parameter names,
     * resource logical IDs, and resource attributes, don't specify a key-value map.
     * param variables The name of a variable that you included in the String parameter.
     * The value that Ros Template substitutes for the associated variable name at runtime.
     * <p>
     * @param value This parameter is required.
     */
    public FnSub(final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { value });
    }
}
