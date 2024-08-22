package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:16.970Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnAny")
public class FnAny extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnAny(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnAny(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>Any</code> function.
     * <p>
     * @param values This parameter is required.
     */
    public FnAny(final @org.jetbrains.annotations.NotNull java.lang.Object values) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(values instanceof java.util.List)
                && !(values instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(values.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("values")
                        .append(" to be one of: java.util.List<java.lang.Object>, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(values.getClass()).toString());
            }
            if (values instanceof java.util.List) {
                @SuppressWarnings("unchecked")
                final java.util.List<java.lang.Object> __cast_89445e = (java.util.List<java.lang.Object>)values;
                for (int __idx_96736d = 0; __idx_96736d < __cast_89445e.size(); __idx_96736d++) {
                    final java.lang.Object __val_96736d = __cast_89445e.get(__idx_96736d);
                }
            }
        }
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(values, "values is required") });
    }
}
