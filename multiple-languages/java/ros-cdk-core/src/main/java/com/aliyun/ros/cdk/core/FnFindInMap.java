package com.aliyun.ros.cdk.core;

/**
 * The intrinsic function <code>Fn::FindInMap</code> returns the value corresponding to keys in a two-level map that is declared in the Mappings section.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:43.906Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnFindInMap")
public class FnFindInMap extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnFindInMap(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnFindInMap(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>Fn::FindInMap</code> function.
     * <p>
     * param mapName The logical name of a mapping declared in the Mappings section that contains the keys and values.
     * param topLevelKey The top-level key name. Its value is a list of key-value pairs.
     * param secondLevelKey The second-level key name, which is set to one of the keys from the list assigned to TopLevelKey.
     * <p>
     * @param value This parameter is required.
     */
    public FnFindInMap(final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { value });
    }
}
