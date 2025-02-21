package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:10.823Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnIndex")
public class FnIndex extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnIndex(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnIndex(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>Index</code> function.
     * <p>
     * @param itemToFindIndex This parameter is required.
     * @param itemList This parameter is required.
     */
    public FnIndex(final @org.jetbrains.annotations.NotNull java.lang.Object itemToFindIndex, final @org.jetbrains.annotations.NotNull java.lang.Object itemList) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(itemList instanceof java.util.List)
                && !(itemList instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(itemList.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("itemList")
                        .append(" to be one of: java.util.List<java.lang.Object>, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(itemList.getClass()).toString());
            }
            if (itemList instanceof java.util.List) {
                @SuppressWarnings("unchecked")
                final java.util.List<java.lang.Object> __cast_9dda49 = (java.util.List<java.lang.Object>)itemList;
                for (int __idx_c9f5b5 = 0; __idx_c9f5b5 < __cast_9dda49.size(); __idx_c9f5b5++) {
                    final java.lang.Object __val_c9f5b5 = __cast_9dda49.get(__idx_c9f5b5);
                }
            }
        }
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { itemToFindIndex, java.util.Objects.requireNonNull(itemList, "itemList is required") });
    }
}
