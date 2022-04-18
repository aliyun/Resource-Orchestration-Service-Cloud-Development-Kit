package com.aliyun.ros.cdk.core;

/**
 * An element of a stack.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:24.403Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosElement")
public abstract class RosElement extends com.aliyun.ros.cdk.core.Construct {

    protected RosElement(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosElement(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    protected RosElement(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Returns `true` if a construct is a stack element (i.e. part of the synthesized template).
     * <p>
     * Uses duck-typing instead of <code>instanceof</code> to allow stack elements from different
     * versions of this library to be included in the same stack.
     * <p>
     * @return The construct as a stack element or undefined if it is not a stack element.
     * @param x This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.Boolean isRosElement(final @org.jetbrains.annotations.NotNull java.lang.Object x) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.RosElement.class, "isRosElement", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { x });
    }

    /**
     * Overrides the auto-generated logical ID with a specific ID.
     * <p>
     * @param newLogicalId The new logical ID to use for this stack element. This parameter is required.
     */
    public void overrideLogicalId(final @org.jetbrains.annotations.NotNull java.lang.String newLogicalId) {
        software.amazon.jsii.Kernel.call(this, "overrideLogicalId", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(newLogicalId, "newLogicalId is required") });
    }

    /**
     * @return the stack trace of the point where this Resource was created from, sourced
     * from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
     * node +internal+ entries filtered.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> getCreationStack() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "creationStack", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
    }

    /**
     * The logical ID for this stack element.
     * <p>
     * The logical ID of the element
     * is calculated from the path of the resource node in the construct tree.
     * <p>
     * To override this value, use <code>overrideLogicalId(newLogicalId)</code>.
     * <p>
     * @return the logical ID as a stringified token. This value will only get
     * resolved during synthesis.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getLogicalId() {
        return software.amazon.jsii.Kernel.get(this, "logicalId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * The stack in which this element is defined.
     * <p>
     * RosElements must be defined within a stack scope (directly or indirectly).
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
        return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
    }

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    private static final class Jsii$Proxy extends com.aliyun.ros.cdk.core.RosElement implements com.aliyun.ros.cdk.core.IConstruct.Jsii$Default, software.constructs.IConstruct.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }
    }
}
