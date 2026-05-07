package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a <code>SharedTarget</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-sharedtarget
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:53.597Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.SharedTargetProps")
@software.amazon.jsii.Jsii.Proxy(SharedTargetProps.Jsii$Proxy.class)
public interface SharedTargetProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property resourceShareId: The ID of the resource share.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceShareId();

    /**
     * Property targetId: The ID of the principal.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SharedTargetProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SharedTargetProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SharedTargetProps> {
        java.lang.Object resourceShareId;
        java.lang.Object targetId;

        /**
         * Sets the value of {@link SharedTargetProps#getResourceShareId}
         * @param resourceShareId Property resourceShareId: The ID of the resource share. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceShareId(java.lang.String resourceShareId) {
            this.resourceShareId = resourceShareId;
            return this;
        }

        /**
         * Sets the value of {@link SharedTargetProps#getResourceShareId}
         * @param resourceShareId Property resourceShareId: The ID of the resource share. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceShareId(com.aliyun.ros.cdk.core.IResolvable resourceShareId) {
            this.resourceShareId = resourceShareId;
            return this;
        }

        /**
         * Sets the value of {@link SharedTargetProps#getTargetId}
         * @param targetId Property targetId: The ID of the principal.
         * @return {@code this}
         */
        public Builder targetId(java.lang.String targetId) {
            this.targetId = targetId;
            return this;
        }

        /**
         * Sets the value of {@link SharedTargetProps#getTargetId}
         * @param targetId Property targetId: The ID of the principal.
         * @return {@code this}
         */
        public Builder targetId(com.aliyun.ros.cdk.core.IResolvable targetId) {
            this.targetId = targetId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SharedTargetProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SharedTargetProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SharedTargetProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SharedTargetProps {
        private final java.lang.Object resourceShareId;
        private final java.lang.Object targetId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.resourceShareId = software.amazon.jsii.Kernel.get(this, "resourceShareId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetId = software.amazon.jsii.Kernel.get(this, "targetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.resourceShareId = java.util.Objects.requireNonNull(builder.resourceShareId, "resourceShareId is required");
            this.targetId = builder.targetId;
        }

        @Override
        public final java.lang.Object getResourceShareId() {
            return this.resourceShareId;
        }

        @Override
        public final java.lang.Object getTargetId() {
            return this.targetId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("resourceShareId", om.valueToTree(this.getResourceShareId()));
            if (this.getTargetId() != null) {
                data.set("targetId", om.valueToTree(this.getTargetId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.SharedTargetProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SharedTargetProps.Jsii$Proxy that = (SharedTargetProps.Jsii$Proxy) o;

            if (!resourceShareId.equals(that.resourceShareId)) return false;
            return this.targetId != null ? this.targetId.equals(that.targetId) : that.targetId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.resourceShareId.hashCode();
            result = 31 * result + (this.targetId != null ? this.targetId.hashCode() : 0);
            return result;
        }
    }
}
