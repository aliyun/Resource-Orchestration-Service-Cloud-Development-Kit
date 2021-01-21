package com.aliyun.ros.cdk.core;

/**
 * Base class for referenceable template constructs which are not Resources  These constructs are things like Conditions and Parameters, can be referenced by taking the `.ref` attribute.  Resource constructs do not inherit from RosRefElement because they have their own, more specific types returned from the .ref attribute. Also, some resources aren't referenceable at all (such as BucketPolicies or GatewayAttachments).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:01.198Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosRefElement")
public abstract class RosRefElement extends com.aliyun.ros.cdk.core.RosElement {

    protected RosRefElement(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRefElement(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an entity and binds it to a tree.
     * <p>
     * Note that the root of the tree must be a Stack object (not just any Root).
     * <p>
     * @param scope The parent construct. This parameter is required.
     * @param id This parameter is required.
     */
    protected RosRefElement(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
     * <p>
     * If, by any chance, the intrinsic reference of a resource is not a string, you could
     * coerce it to an IResolvable through <code>Lazy.any({ produce: resource.ref })</code>.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getRef() {
        return software.amazon.jsii.Kernel.get(this, "ref", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    private static final class Jsii$Proxy extends com.aliyun.ros.cdk.core.RosRefElement implements com.aliyun.ros.cdk.core.IConstruct.Jsii$Default, software.constructs.IConstruct.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }
    }
}
