package com.aliyun.ros.cdk.core;

/**
 * ROS template options for a stack.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:13.523Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ITemplateOptions")
@software.amazon.jsii.Jsii.Proxy(ITemplateOptions.Jsii$Proxy.class)
public interface ITemplateOptions extends software.amazon.jsii.JsiiSerializable {

    /**
     * Gets or sets the description of this stack.
     * <p>
     * If provided, it will be included in the ROS template's "Description" attribute.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     * Gets or sets the description of this stack.
     * <p>
     * If provided, it will be included in the ROS template's "Description" attribute.
     */
    @software.amazon.jsii.Optional
    default void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        throw new UnsupportedOperationException("'void " + getClass().getCanonicalName() + "#setDescription(@org.jetbrains.annotations.Nullable java.lang.String)' is not implemented!");
    }

    /**
     * Metadata associated with the ROS template.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getMetadata() {
        return null;
    }

    /**
     * Metadata associated with the ROS template.
     */
    @software.amazon.jsii.Optional
    default void setMetadata(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        throw new UnsupportedOperationException("'void " + getClass().getCanonicalName() + "#setMetadata(@org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object>)' is not implemented!");
    }

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.ITemplateOptions.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * Gets or sets the description of this stack.
         * <p>
         * If provided, it will be included in the ROS template's "Description" attribute.
         */
        @Override
        public final @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
            return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Gets or sets the description of this stack.
         * <p>
         * If provided, it will be included in the ROS template's "Description" attribute.
         */
        @Override
        public final void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
            software.amazon.jsii.Kernel.set(this, "description", value);
        }

        /**
         * Metadata associated with the ROS template.
         */
        @Override
        public final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getMetadata() {
            return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.Object>)(software.amazon.jsii.Kernel.get(this, "metadata", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
        }

        /**
         * Metadata associated with the ROS template.
         */
        @Override
        public final void setMetadata(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
            software.amazon.jsii.Kernel.set(this, "metadata", value);
        }
    }

    /**
     * Internal default implementation for {@link ITemplateOptions}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITemplateOptions {

        /**
         * Gets or sets the description of this stack.
         * <p>
         * If provided, it will be included in the ROS template's "Description" attribute.
         */
        @Override
        default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
            return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Gets or sets the description of this stack.
         * <p>
         * If provided, it will be included in the ROS template's "Description" attribute.
         */
        @Override
        default void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
            software.amazon.jsii.Kernel.set(this, "description", value);
        }

        /**
         * Metadata associated with the ROS template.
         */
        @Override
        default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getMetadata() {
            return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.Object>)(software.amazon.jsii.Kernel.get(this, "metadata", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
        }

        /**
         * Metadata associated with the ROS template.
         */
        @Override
        default void setMetadata(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
            software.amazon.jsii.Kernel.set(this, "metadata", value);
        }
    }
}
