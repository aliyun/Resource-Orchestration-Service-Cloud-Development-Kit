package com.aliyun.ros.cdk.core;

/**
 * Trait marker for classes that can be depended upon.
 * <p>
 * The presence of this interface indicates that an object has
 * an <code>IDependableTrait</code> implementation.
 * <p>
 * This interface can be used to take an (ordering) dependency on a set of
 * constructs. An ordering dependency implies that the resources represented by
 * those constructs are deployed before the resources depending ON them are
 * deployed.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:35.761Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IDependable")
@software.amazon.jsii.Jsii.Proxy(IDependable.Jsii$Proxy.class)
public interface IDependable extends software.amazon.jsii.JsiiSerializable {

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IDependable.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }
    }

    /**
     * Internal default implementation for {@link IDependable}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDependable {
    }
}
