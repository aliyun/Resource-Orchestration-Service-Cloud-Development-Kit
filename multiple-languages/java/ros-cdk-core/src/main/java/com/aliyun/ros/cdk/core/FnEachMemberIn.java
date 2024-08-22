package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:16.972Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnEachMemberIn")
public class FnEachMemberIn extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnEachMemberIn(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnEachMemberIn(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>EachMemberIn</code> function.
     * <p>
     * @param values1 This parameter is required.
     * @param values2 This parameter is required.
     */
    public FnEachMemberIn(final @org.jetbrains.annotations.NotNull java.lang.Object values1, final @org.jetbrains.annotations.NotNull java.lang.Object values2) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(values1 instanceof java.util.List)
                && !(values1 instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(values1.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("values1")
                        .append(" to be one of: java.util.List<java.lang.Object>, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(values1.getClass()).toString());
            }
            if (values1 instanceof java.util.List) {
                @SuppressWarnings("unchecked")
                final java.util.List<java.lang.Object> __cast_4ae8e1 = (java.util.List<java.lang.Object>)values1;
                for (int __idx_82abbb = 0; __idx_82abbb < __cast_4ae8e1.size(); __idx_82abbb++) {
                    final java.lang.Object __val_82abbb = __cast_4ae8e1.get(__idx_82abbb);
                }
            }
            if (
                 !(values2 instanceof java.util.List)
                && !(values2 instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(values2.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("values2")
                        .append(" to be one of: java.util.List<java.lang.Object>, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(values2.getClass()).toString());
            }
            if (values2 instanceof java.util.List) {
                @SuppressWarnings("unchecked")
                final java.util.List<java.lang.Object> __cast_b92750 = (java.util.List<java.lang.Object>)values2;
                for (int __idx_9f591a = 0; __idx_9f591a < __cast_b92750.size(); __idx_9f591a++) {
                    final java.lang.Object __val_9f591a = __cast_b92750.get(__idx_9f591a);
                }
            }
        }
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(values1, "values1 is required"), java.util.Objects.requireNonNull(values2, "values2 is required") });
    }
}
