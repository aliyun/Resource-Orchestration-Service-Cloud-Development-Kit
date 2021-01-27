package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a `ALIYUN::CEN::CenInstanceAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.276Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosCenInstanceAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(RosCenInstanceAttachmentProps.Jsii$Proxy.class)
public interface RosCenInstanceAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getCenId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getChildInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getChildInstanceRegionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getChildInstanceType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getChildInstanceOwnerId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCenInstanceAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCenInstanceAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCenInstanceAttachmentProps> {
        private java.lang.String cenId;
        private java.lang.String childInstanceId;
        private java.lang.String childInstanceRegionId;
        private java.lang.String childInstanceType;
        private java.lang.Number childInstanceOwnerId;

        /**
         * Sets the value of {@link RosCenInstanceAttachmentProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenInstanceAttachmentProps#getChildInstanceId}
         * @param childInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder childInstanceId(java.lang.String childInstanceId) {
            this.childInstanceId = childInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenInstanceAttachmentProps#getChildInstanceRegionId}
         * @param childInstanceRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder childInstanceRegionId(java.lang.String childInstanceRegionId) {
            this.childInstanceRegionId = childInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenInstanceAttachmentProps#getChildInstanceType}
         * @param childInstanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder childInstanceType(java.lang.String childInstanceType) {
            this.childInstanceType = childInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosCenInstanceAttachmentProps#getChildInstanceOwnerId}
         * @param childInstanceOwnerId the value to be set.
         * @return {@code this}
         */
        public Builder childInstanceOwnerId(java.lang.Number childInstanceOwnerId) {
            this.childInstanceOwnerId = childInstanceOwnerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCenInstanceAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCenInstanceAttachmentProps build() {
            return new Jsii$Proxy(cenId, childInstanceId, childInstanceRegionId, childInstanceType, childInstanceOwnerId);
        }
    }

    /**
     * An implementation for {@link RosCenInstanceAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCenInstanceAttachmentProps {
        private final java.lang.String cenId;
        private final java.lang.String childInstanceId;
        private final java.lang.String childInstanceRegionId;
        private final java.lang.String childInstanceType;
        private final java.lang.Number childInstanceOwnerId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.childInstanceId = software.amazon.jsii.Kernel.get(this, "childInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.childInstanceRegionId = software.amazon.jsii.Kernel.get(this, "childInstanceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.childInstanceType = software.amazon.jsii.Kernel.get(this, "childInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.childInstanceOwnerId = software.amazon.jsii.Kernel.get(this, "childInstanceOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String cenId, final java.lang.String childInstanceId, final java.lang.String childInstanceRegionId, final java.lang.String childInstanceType, final java.lang.Number childInstanceOwnerId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = java.util.Objects.requireNonNull(cenId, "cenId is required");
            this.childInstanceId = java.util.Objects.requireNonNull(childInstanceId, "childInstanceId is required");
            this.childInstanceRegionId = java.util.Objects.requireNonNull(childInstanceRegionId, "childInstanceRegionId is required");
            this.childInstanceType = java.util.Objects.requireNonNull(childInstanceType, "childInstanceType is required");
            this.childInstanceOwnerId = childInstanceOwnerId;
        }

        @Override
        public final java.lang.String getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.String getChildInstanceId() {
            return this.childInstanceId;
        }

        @Override
        public final java.lang.String getChildInstanceRegionId() {
            return this.childInstanceRegionId;
        }

        @Override
        public final java.lang.String getChildInstanceType() {
            return this.childInstanceType;
        }

        @Override
        public final java.lang.Number getChildInstanceOwnerId() {
            return this.childInstanceOwnerId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cenId", om.valueToTree(this.getCenId()));
            data.set("childInstanceId", om.valueToTree(this.getChildInstanceId()));
            data.set("childInstanceRegionId", om.valueToTree(this.getChildInstanceRegionId()));
            data.set("childInstanceType", om.valueToTree(this.getChildInstanceType()));
            if (this.getChildInstanceOwnerId() != null) {
                data.set("childInstanceOwnerId", om.valueToTree(this.getChildInstanceOwnerId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.RosCenInstanceAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCenInstanceAttachmentProps.Jsii$Proxy that = (RosCenInstanceAttachmentProps.Jsii$Proxy) o;

            if (!cenId.equals(that.cenId)) return false;
            if (!childInstanceId.equals(that.childInstanceId)) return false;
            if (!childInstanceRegionId.equals(that.childInstanceRegionId)) return false;
            if (!childInstanceType.equals(that.childInstanceType)) return false;
            return this.childInstanceOwnerId != null ? this.childInstanceOwnerId.equals(that.childInstanceOwnerId) : that.childInstanceOwnerId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cenId.hashCode();
            result = 31 * result + (this.childInstanceId.hashCode());
            result = 31 * result + (this.childInstanceRegionId.hashCode());
            result = 31 * result + (this.childInstanceType.hashCode());
            result = 31 * result + (this.childInstanceOwnerId != null ? this.childInstanceOwnerId.hashCode() : 0);
            return result;
        }
    }
}
