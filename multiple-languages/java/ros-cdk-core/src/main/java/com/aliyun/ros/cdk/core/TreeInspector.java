package com.aliyun.ros.cdk.core;

/**
 * Inspector that maintains an attribute bag.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:13.605Z")
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
     * @param key <ul><li>key for metadata.</li></ul> This parameter is required.
     * @param value <ul><li>value of metadata.</li></ul> This parameter is required.
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
