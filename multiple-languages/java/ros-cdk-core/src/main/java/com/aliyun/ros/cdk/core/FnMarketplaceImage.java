package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:51.730Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnMarketplaceImage")
public class FnMarketplaceImage extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnMarketplaceImage(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnMarketplaceImage(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>MarketplaceImage</code> function.
     * <p>
     * @param imageProductCode This parameter is required.
     */
    public FnMarketplaceImage(final @org.jetbrains.annotations.NotNull java.lang.Object imageProductCode) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(imageProductCode instanceof java.lang.String)
                && !(imageProductCode instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(imageProductCode.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("imageProductCode")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(imageProductCode.getClass()).toString());
            }
        }
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(imageProductCode, "imageProductCode is required") });
    }
}
