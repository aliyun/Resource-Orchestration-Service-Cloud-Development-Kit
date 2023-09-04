package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:34.760Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnMergeMapToList")
public class FnMergeMapToList extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnMergeMapToList(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnMergeMapToList(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>FnMergeMapToList</code> function.
     * <p>
     * @param mapList This parameter is required.
     */
    public FnMergeMapToList(final @org.jetbrains.annotations.NotNull java.lang.Object mapList) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { mapList });
    }
}
