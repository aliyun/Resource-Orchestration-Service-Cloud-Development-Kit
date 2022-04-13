package com.aliyun.ros.cdk.core;

/**
 * (experimental) Default resolver implementation.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:13.491Z")
@software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.DefaultTokenResolver")
public class DefaultTokenResolver extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.ITokenResolver {

    protected DefaultTokenResolver(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DefaultTokenResolver(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * @param concat This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public DefaultTokenResolver(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IFragmentConcatenator concat) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(concat, "concat is required") });
    }

    /**
     * (experimental) Resolve a tokenized list.
     * <p>
     * @param xs This parameter is required.
     * @param context This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object resolveList(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> xs, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
        return software.amazon.jsii.Kernel.call(this, "resolveList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(xs, "xs is required"), java.util.Objects.requireNonNull(context, "context is required") });
    }

    /**
     * (experimental) Resolve string fragments to Tokens.
     * <p>
     * @param fragments This parameter is required.
     * @param context This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object resolveString(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TokenizedStringFragments fragments, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
        return software.amazon.jsii.Kernel.call(this, "resolveString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(fragments, "fragments is required"), java.util.Objects.requireNonNull(context, "context is required") });
    }

    /**
     * (experimental) Default Token resolution.
     * <p>
     * Resolve the Token, recurse into whatever it returns,
     * then finally post-process it.
     * <p>
     * @param t This parameter is required.
     * @param context This parameter is required.
     * @param postProcessor This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object resolveToken(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable t, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IPostProcessor postProcessor) {
        return software.amazon.jsii.Kernel.call(this, "resolveToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(t, "t is required"), java.util.Objects.requireNonNull(context, "context is required"), java.util.Objects.requireNonNull(postProcessor, "postProcessor is required") });
    }
}
