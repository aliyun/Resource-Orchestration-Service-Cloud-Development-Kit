package com.aliyun.ros.cdk.core;

/**
 * Inspector that maintains an attribute bag.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:17.934Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.TreeInspector")
public class TreeInspector extends software.amazon.jsii.JsiiObject {

    protected TreeInspector(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TreeInspector(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public TreeInspector() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * Adds attribute to bag.
     * <p>
     * Keys should be added by convention to prevent conflicts
     * <p>
     * @param key - key for metadata. This parameter is required.
     * @param value - value of metadata. This parameter is required.
     */
    public void addAttribute(final @org.jetbrains.annotations.NotNull java.lang.String key, final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        software.amazon.jsii.Kernel.call(this, "addAttribute", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(key, "key is required"), value });
    }

    /**
     * Represents the bag of attributes as key-value pairs.
     */
    public @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getAttributes() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "attributes", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }
}
