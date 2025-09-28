package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.206Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnCidr")
public class FnCidr extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnCidr(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnCidr(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>Cidr</code> function.
     * <p>
     * @param ipBlock This parameter is required.
     * @param count This parameter is required.
     * @param cidrBits This parameter is required.
     */
    public FnCidr(final @org.jetbrains.annotations.NotNull java.lang.Object ipBlock, final @org.jetbrains.annotations.NotNull java.lang.Object count, final @org.jetbrains.annotations.NotNull java.lang.Object cidrBits) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(ipBlock instanceof java.lang.String)
                && !(ipBlock instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(ipBlock.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("ipBlock")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(ipBlock.getClass()).toString());
            }
            if (
                 !(count instanceof java.lang.Number)
                && !(count instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(count.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("count")
                        .append(" to be one of: java.lang.Number, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(count.getClass()).toString());
            }
            if (
                 !(cidrBits instanceof java.lang.Number)
                && !(cidrBits instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(cidrBits.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("cidrBits")
                        .append(" to be one of: java.lang.Number, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(cidrBits.getClass()).toString());
            }
        }
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(ipBlock, "ipBlock is required"), java.util.Objects.requireNonNull(count, "count is required"), java.util.Objects.requireNonNull(cidrBits, "cidrBits is required") });
    }
}
