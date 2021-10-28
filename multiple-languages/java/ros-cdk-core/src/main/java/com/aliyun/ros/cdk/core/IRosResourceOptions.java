package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.40.0 (build 9713b9d)", date = "2021-10-28T10:23:59.144Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IRosResourceOptions")
@software.amazon.jsii.Jsii.Proxy(IRosResourceOptions.Jsii$Proxy.class)
public interface IRosResourceOptions extends software.amazon.jsii.JsiiSerializable {

    /**
     * A condition to associate with this resource.
     * <p>
     * This means that only if the condition evaluates to 'true' when the stack
     * is deployed, the resource will be included. This is provided to allow CDK projects to produce legacy templates, but noramlly
     * there is no need to use it in CDK projects.
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosCondition getCondition() {
        return null;
    }

    /**
     * A condition to associate with this resource.
     * <p>
     * This means that only if the condition evaluates to 'true' when the stack
     * is deployed, the resource will be included. This is provided to allow CDK projects to produce legacy templates, but noramlly
     * there is no need to use it in CDK projects.
     */
    @software.amazon.jsii.Optional
    default void setCondition(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosCondition value) {
        throw new UnsupportedOperationException("'void " + getClass().getCanonicalName() + "#setCondition(@org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosCondition)' is not implemented!");
    }

    default @org.jetbrains.annotations.Nullable java.lang.Object getCount() {
        return null;
    }

    @software.amazon.jsii.Optional
    default void setCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        throw new UnsupportedOperationException("'void " + getClass().getCanonicalName() + "#setCount(@org.jetbrains.annotations.Nullable java.lang.Number)' is not implemented!");
    }

    @software.amazon.jsii.Optional
    default void setCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        throw new UnsupportedOperationException("'void " + getClass().getCanonicalName() + "#setCount(@org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable)' is not implemented!");
    }

    /**
     * With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.
     * <p>
     * You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
     * attribute, ROS deletes the resource by default. Note that this capability also applies to update operations
     * that lead to resources being removed.
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosDeletionPolicy getDeletionPolicy() {
        return null;
    }

    /**
     * With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.
     * <p>
     * You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
     * attribute, ROS deletes the resource by default. Note that this capability also applies to update operations
     * that lead to resources being removed.
     */
    @software.amazon.jsii.Optional
    default void setDeletionPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosDeletionPolicy value) {
        throw new UnsupportedOperationException("'void " + getClass().getCanonicalName() + "#setDeletionPolicy(@org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosDeletionPolicy)' is not implemented!");
    }

    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    @software.amazon.jsii.Optional
    default void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        throw new UnsupportedOperationException("'void " + getClass().getCanonicalName() + "#setDescription(@org.jetbrains.annotations.Nullable java.lang.String)' is not implemented!");
    }

    /**
     * Metadata associated with the ROS resource.
     * <p>
     * This is not the same as the construct metadata which can be added
     * using construct.addMetadata(), but would not appear in the ROS template automatically.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getMetadata() {
        return null;
    }

    /**
     * Metadata associated with the ROS resource.
     * <p>
     * This is not the same as the construct metadata which can be added
     * using construct.addMetadata(), but would not appear in the ROS template automatically.
     */
    @software.amazon.jsii.Optional
    default void setMetadata(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        throw new UnsupportedOperationException("'void " + getClass().getCanonicalName() + "#setMetadata(@org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object>)' is not implemented!");
    }

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IRosResourceOptions.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * A condition to associate with this resource.
         * <p>
         * This means that only if the condition evaluates to 'true' when the stack
         * is deployed, the resource will be included. This is provided to allow CDK projects to produce legacy templates, but noramlly
         * there is no need to use it in CDK projects.
         */
        @Override
        public final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosCondition getCondition() {
            return software.amazon.jsii.Kernel.get(this, "condition", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.RosCondition.class));
        }

        /**
         * A condition to associate with this resource.
         * <p>
         * This means that only if the condition evaluates to 'true' when the stack
         * is deployed, the resource will be included. This is provided to allow CDK projects to produce legacy templates, but noramlly
         * there is no need to use it in CDK projects.
         */
        @Override
        public final void setCondition(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosCondition value) {
            software.amazon.jsii.Kernel.set(this, "condition", value);
        }

        @Override
        public final @org.jetbrains.annotations.Nullable java.lang.Object getCount() {
            return software.amazon.jsii.Kernel.get(this, "count", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final void setCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
            software.amazon.jsii.Kernel.set(this, "count", value);
        }

        @Override
        public final void setCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
            software.amazon.jsii.Kernel.set(this, "count", value);
        }

        /**
         * With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.
         * <p>
         * You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
         * attribute, ROS deletes the resource by default. Note that this capability also applies to update operations
         * that lead to resources being removed.
         */
        @Override
        public final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosDeletionPolicy getDeletionPolicy() {
            return software.amazon.jsii.Kernel.get(this, "deletionPolicy", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.RosDeletionPolicy.class));
        }

        /**
         * With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.
         * <p>
         * You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
         * attribute, ROS deletes the resource by default. Note that this capability also applies to update operations
         * that lead to resources being removed.
         */
        @Override
        public final void setDeletionPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosDeletionPolicy value) {
            software.amazon.jsii.Kernel.set(this, "deletionPolicy", value);
        }

        @Override
        public final @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
            return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        @Override
        public final void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
            software.amazon.jsii.Kernel.set(this, "description", value);
        }

        /**
         * Metadata associated with the ROS resource.
         * <p>
         * This is not the same as the construct metadata which can be added
         * using construct.addMetadata(), but would not appear in the ROS template automatically.
         */
        @Override
        public final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getMetadata() {
            return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.Object>)(software.amazon.jsii.Kernel.get(this, "metadata", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
        }

        /**
         * Metadata associated with the ROS resource.
         * <p>
         * This is not the same as the construct metadata which can be added
         * using construct.addMetadata(), but would not appear in the ROS template automatically.
         */
        @Override
        public final void setMetadata(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
            software.amazon.jsii.Kernel.set(this, "metadata", value);
        }
    }

    /**
     * Internal default implementation for {@link IRosResourceOptions}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IRosResourceOptions {

        /**
         * A condition to associate with this resource.
         * <p>
         * This means that only if the condition evaluates to 'true' when the stack
         * is deployed, the resource will be included. This is provided to allow CDK projects to produce legacy templates, but noramlly
         * there is no need to use it in CDK projects.
         */
        @Override
        default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosCondition getCondition() {
            return software.amazon.jsii.Kernel.get(this, "condition", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.RosCondition.class));
        }

        /**
         * A condition to associate with this resource.
         * <p>
         * This means that only if the condition evaluates to 'true' when the stack
         * is deployed, the resource will be included. This is provided to allow CDK projects to produce legacy templates, but noramlly
         * there is no need to use it in CDK projects.
         */
        @Override
        default void setCondition(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosCondition value) {
            software.amazon.jsii.Kernel.set(this, "condition", value);
        }

        @Override
        default @org.jetbrains.annotations.Nullable java.lang.Object getCount() {
            return software.amazon.jsii.Kernel.get(this, "count", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default void setCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
            software.amazon.jsii.Kernel.set(this, "count", value);
        }

        @Override
        default void setCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
            software.amazon.jsii.Kernel.set(this, "count", value);
        }

        /**
         * With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.
         * <p>
         * You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
         * attribute, ROS deletes the resource by default. Note that this capability also applies to update operations
         * that lead to resources being removed.
         */
        @Override
        default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosDeletionPolicy getDeletionPolicy() {
            return software.amazon.jsii.Kernel.get(this, "deletionPolicy", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.RosDeletionPolicy.class));
        }

        /**
         * With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.
         * <p>
         * You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
         * attribute, ROS deletes the resource by default. Note that this capability also applies to update operations
         * that lead to resources being removed.
         */
        @Override
        default void setDeletionPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosDeletionPolicy value) {
            software.amazon.jsii.Kernel.set(this, "deletionPolicy", value);
        }

        @Override
        default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
            return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        @Override
        default void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
            software.amazon.jsii.Kernel.set(this, "description", value);
        }

        /**
         * Metadata associated with the ROS resource.
         * <p>
         * This is not the same as the construct metadata which can be added
         * using construct.addMetadata(), but would not appear in the ROS template automatically.
         */
        @Override
        default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getMetadata() {
            return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.Object>)(software.amazon.jsii.Kernel.get(this, "metadata", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
        }

        /**
         * Metadata associated with the ROS resource.
         * <p>
         * This is not the same as the construct metadata which can be added
         * using construct.addMetadata(), but would not appear in the ROS template automatically.
         */
        @Override
        default void setMetadata(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
            software.amazon.jsii.Kernel.set(this, "metadata", value);
        }
    }
}
