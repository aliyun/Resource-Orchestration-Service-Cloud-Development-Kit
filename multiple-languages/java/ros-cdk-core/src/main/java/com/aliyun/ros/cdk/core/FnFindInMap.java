package com.aliyun.ros.cdk.core;

/**
 * The intrinsic function ``Fn::FindInMap`` returns the value corresponding to keys in a two-level map that is declared in the Mappings section.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-16T03:59:08.108Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnFindInMap")
public class FnFindInMap extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnFindInMap(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnFindInMap(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an ``Fn::FindInMap`` function.
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
