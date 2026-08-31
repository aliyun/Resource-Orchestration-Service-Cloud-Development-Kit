package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>ResourceAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-resourceattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T09:19:27.808Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.ResourceAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(ResourceAttachmentProps.Jsii$Proxy.class)
public interface ResourceAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property acceleratorId: The ID of the GA instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId();

    /**
     * Property associatedResourceId: The ID of the associated resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAssociatedResourceId();

    /**
     * Property associatedResourceRegionId: The region ID of the associated resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAssociatedResourceRegionId();

    /**
     * Property associatedResourceType: The type of the associated resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAssociatedResourceType();

    /**
     * Property associatedMode: The mode of the association.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAssociatedMode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ResourceAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ResourceAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ResourceAttachmentProps> {
        java.lang.Object acceleratorId;
        java.lang.Object associatedResourceId;
        java.lang.Object associatedResourceRegionId;
        java.lang.Object associatedResourceType;
        java.lang.Object associatedMode;

        /**
         * Sets the value of {@link ResourceAttachmentProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: The ID of the GA instance. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link ResourceAttachmentProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: The ID of the GA instance. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link ResourceAttachmentProps#getAssociatedResourceId}
         * @param associatedResourceId Property associatedResourceId: The ID of the associated resource. This parameter is required.
         * @return {@code this}
         */
        public Builder associatedResourceId(java.lang.String associatedResourceId) {
            this.associatedResourceId = associatedResourceId;
            return this;
        }

        /**
         * Sets the value of {@link ResourceAttachmentProps#getAssociatedResourceId}
         * @param associatedResourceId Property associatedResourceId: The ID of the associated resource. This parameter is required.
         * @return {@code this}
         */
        public Builder associatedResourceId(com.aliyun.ros.cdk.core.IResolvable associatedResourceId) {
            this.associatedResourceId = associatedResourceId;
            return this;
        }

        /**
         * Sets the value of {@link ResourceAttachmentProps#getAssociatedResourceRegionId}
         * @param associatedResourceRegionId Property associatedResourceRegionId: The region ID of the associated resource. This parameter is required.
         * @return {@code this}
         */
        public Builder associatedResourceRegionId(java.lang.String associatedResourceRegionId) {
            this.associatedResourceRegionId = associatedResourceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link ResourceAttachmentProps#getAssociatedResourceRegionId}
         * @param associatedResourceRegionId Property associatedResourceRegionId: The region ID of the associated resource. This parameter is required.
         * @return {@code this}
         */
        public Builder associatedResourceRegionId(com.aliyun.ros.cdk.core.IResolvable associatedResourceRegionId) {
            this.associatedResourceRegionId = associatedResourceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link ResourceAttachmentProps#getAssociatedResourceType}
         * @param associatedResourceType Property associatedResourceType: The type of the associated resource. This parameter is required.
         * @return {@code this}
         */
        public Builder associatedResourceType(java.lang.String associatedResourceType) {
            this.associatedResourceType = associatedResourceType;
            return this;
        }

        /**
         * Sets the value of {@link ResourceAttachmentProps#getAssociatedResourceType}
         * @param associatedResourceType Property associatedResourceType: The type of the associated resource. This parameter is required.
         * @return {@code this}
         */
        public Builder associatedResourceType(com.aliyun.ros.cdk.core.IResolvable associatedResourceType) {
            this.associatedResourceType = associatedResourceType;
            return this;
        }

        /**
         * Sets the value of {@link ResourceAttachmentProps#getAssociatedMode}
         * @param associatedMode Property associatedMode: The mode of the association.
         * @return {@code this}
         */
        public Builder associatedMode(java.lang.String associatedMode) {
            this.associatedMode = associatedMode;
            return this;
        }

        /**
         * Sets the value of {@link ResourceAttachmentProps#getAssociatedMode}
         * @param associatedMode Property associatedMode: The mode of the association.
         * @return {@code this}
         */
        public Builder associatedMode(com.aliyun.ros.cdk.core.IResolvable associatedMode) {
            this.associatedMode = associatedMode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ResourceAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ResourceAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ResourceAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourceAttachmentProps {
        private final java.lang.Object acceleratorId;
        private final java.lang.Object associatedResourceId;
        private final java.lang.Object associatedResourceRegionId;
        private final java.lang.Object associatedResourceType;
        private final java.lang.Object associatedMode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceleratorId = software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.associatedResourceId = software.amazon.jsii.Kernel.get(this, "associatedResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.associatedResourceRegionId = software.amazon.jsii.Kernel.get(this, "associatedResourceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.associatedResourceType = software.amazon.jsii.Kernel.get(this, "associatedResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.associatedMode = software.amazon.jsii.Kernel.get(this, "associatedMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceleratorId = java.util.Objects.requireNonNull(builder.acceleratorId, "acceleratorId is required");
            this.associatedResourceId = java.util.Objects.requireNonNull(builder.associatedResourceId, "associatedResourceId is required");
            this.associatedResourceRegionId = java.util.Objects.requireNonNull(builder.associatedResourceRegionId, "associatedResourceRegionId is required");
            this.associatedResourceType = java.util.Objects.requireNonNull(builder.associatedResourceType, "associatedResourceType is required");
            this.associatedMode = builder.associatedMode;
        }

        @Override
        public final java.lang.Object getAcceleratorId() {
            return this.acceleratorId;
        }

        @Override
        public final java.lang.Object getAssociatedResourceId() {
            return this.associatedResourceId;
        }

        @Override
        public final java.lang.Object getAssociatedResourceRegionId() {
            return this.associatedResourceRegionId;
        }

        @Override
        public final java.lang.Object getAssociatedResourceType() {
            return this.associatedResourceType;
        }

        @Override
        public final java.lang.Object getAssociatedMode() {
            return this.associatedMode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("acceleratorId", om.valueToTree(this.getAcceleratorId()));
            data.set("associatedResourceId", om.valueToTree(this.getAssociatedResourceId()));
            data.set("associatedResourceRegionId", om.valueToTree(this.getAssociatedResourceRegionId()));
            data.set("associatedResourceType", om.valueToTree(this.getAssociatedResourceType()));
            if (this.getAssociatedMode() != null) {
                data.set("associatedMode", om.valueToTree(this.getAssociatedMode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.ResourceAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ResourceAttachmentProps.Jsii$Proxy that = (ResourceAttachmentProps.Jsii$Proxy) o;

            if (!acceleratorId.equals(that.acceleratorId)) return false;
            if (!associatedResourceId.equals(that.associatedResourceId)) return false;
            if (!associatedResourceRegionId.equals(that.associatedResourceRegionId)) return false;
            if (!associatedResourceType.equals(that.associatedResourceType)) return false;
            return this.associatedMode != null ? this.associatedMode.equals(that.associatedMode) : that.associatedMode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.acceleratorId.hashCode();
            result = 31 * result + (this.associatedResourceId.hashCode());
            result = 31 * result + (this.associatedResourceRegionId.hashCode());
            result = 31 * result + (this.associatedResourceType.hashCode());
            result = 31 * result + (this.associatedMode != null ? this.associatedMode.hashCode() : 0);
            return result;
        }
    }
}
