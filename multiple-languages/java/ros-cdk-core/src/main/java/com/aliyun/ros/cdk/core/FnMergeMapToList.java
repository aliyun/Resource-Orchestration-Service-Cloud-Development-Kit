package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:41.302Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnMergeMapToList")
public class FnMergeMapToList extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnMergeMapToList(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnMergeMapToList(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an ``FnMergeMapToList`` function.
     * <p>
     * @param mapList This parameter is required.
     */
    public FnMergeMapToList(final @org.jetbrains.annotations.NotNull java.lang.Object mapList) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { mapList });
    }
}
